import {Card, CardActions, CardText, CardTitle} from "material-ui/Card"
const { Uuid } = require("exports-loader?window!./bundle.js")
import FlatButton from "material-ui/FlatButton"
import RaisedButton from "material-ui/RaisedButton"
import RefreshIndicator from "material-ui/RefreshIndicator"
import TextField from "material-ui/TextField"
import * as React from "react"
import { circulatorConnectionStates, CirculatorStates, connectionStates, disconnectReasons, programSteps } from "./constants"
import WebSocketsCirculatorManager from "./WebSocketsCirculatorManager"

interface IActiveCirculatorClientViewProps {
  circulatorManager: WebSocketsCirculatorManager,
  circulatorData: any,
}

class ActiveCirculatorProgramView extends React.Component<IActiveCirculatorClientViewProps, any> {
  private static minTemp = 20

  public state = {
    setPoint: "",
    programType: "MANUAL",
    cookTime: "",
    programMetadata: { cookId: Uuid.v4().split("-").join("") },
    maxTemp: undefined,
    lock: false, // Lock while starting/stopping a cook program
    isCelsius: true, // false indicates fahrenheit
  }

  public startProgram = () => {
    const setPoint = this.state.isCelsius ? parseInt(this.state.setPoint, 10) :
      this.convertToCelsius(parseInt(this.state.setPoint, 10))

    this.props.circulatorManager.startProgram({
      setPoint,
      cookTime: this.state.cookTime !== "" ? parseInt(this.state.cookTime, 10) * 60  : undefined,
      programType: this.state.programType,
      programMetadata: this.state.programMetadata,
    }).then(() => this.setState({ lock: false}))

    this.setState({
      setPoint: "",
      programType: "MANUAL",
      cookTime: "",
      programMetadata: { cookId: Uuid.v4().split("-").join("") },
      lock: true,
    })
  }

  public stopProgram = () => {
    this.props.circulatorManager.stopProgram().then(() => this.setState({ loading: false }))
    this.setState({ lock: true })
  }

  public handleSetPoint = (event, temp) => {
    this.setState({ setPoint: parseInt(temp) })
  }

  public handleCookTime = (event, cookTime) => {
    this.setState({ cookTime })
  }

  public toggleIsCelsius = (value: boolean) => {
    this.setState({ isCelsius: value })
  }

  public componentWillMount() {
    const client = this.props.circulatorManager.currentCirculatorClient
    // HACKS to get max temp
    client.getMaxTemp().then((maxTemp) => this.setState({ maxTemp }))
    client.on(circulatorConnectionStates.connected, () => {
      client.identify()
        .then(() => client.getMaxTemp(true))
        .then((maxTemp) => this.setState({ maxTemp }))
    })
  }

  public validateInput() {
    // validate input
    const errors = {
      cookTime: "",
      temperature: "",
      invalid: false,
    }
    if (this.state.setPoint) {
      const temp = this.state.isCelsius ? parseInt(this.state.setPoint, 10) :
        this.convertToCelsius(parseInt(this.state.setPoint, 10))

      if (temp < ActiveCirculatorProgramView.minTemp) {
        errors.temperature = `Temperature must be above ${this.getDisplayTemp(ActiveCirculatorProgramView.minTemp)}`
        errors.invalid = true
      } else if (this.state.maxTemp && temp > this.state.maxTemp) {
        errors.temperature = (`Temperature must be below ${this.getDisplayTemp(this.state.maxTemp)}`)
        errors.invalid = true
      }

      if (this.state.cookTime && parseInt(this.state.cookTime) <= 0) {
        errors.cookTime = ("Cook time must be greater than 0 minutes")
        errors.invalid = true
      }
    }

    return errors
  }

  public renderTemperatureToggle() {
    return (
      <CardActions>
        <FlatButton label="Celsiuis" onClick={() => this.toggleIsCelsius(true)} primary={this.state.isCelsius} />
        <FlatButton label="Fahrenheit" onClick={() => this.toggleIsCelsius(false)} primary={!this.state.isCelsius} />
      </CardActions>
    )
  }

  public renderLoading() {
    return (
      <Card className="loading-container">
        <RefreshIndicator
          size={50}
          left={175}
          top={20}
          status="loading"
          style={{display: "block", position: "relative"}}
        />
        <br />
        <CardText style={{"font-size": "0.5em"}}>
          If this is taking a while, maybe try checking to make sure
          everything is powered on and connected to the internet. Maybe try
          restarting your joule? ¯\_(ツ)_/¯`
        </CardText>
      </Card>
    )
  }

  public renderError() {
    return (
      <Card className="loading-container">
        <CardTitle title="Error" subtitle={`Something went wrong. Maybe your
        joule isn't on. Maybe you've lost internet connection. Who knows!
        When in doubt, try restarting everything ¯\_(ツ)_/¯`} />
      </Card>
    )
  }

  public renderIdle() {
    const client = this.props.circulatorManager.currentCirculatorClient
    const { bathTemp } = client.data
    const errors = this.validateInput()
    const tempLabel = `Temperature (°${this.state.isCelsius ? "C" : "F"})`
    return (
      <Card className="start-program">
        <CardTitle title="Start a new cook" subtitle={`Currently ${this.getDisplayTemp(bathTemp)}`} />
        {this.renderTemperatureToggle()}
        <CardText>
          <TextField
            type="number"
            value={this.state.setPoint}
            onChange={this.handleSetPoint}
            floatingLabelText={tempLabel}
            hintText={tempLabel}
            errorText={errors.temperature}
            fullWidth
          />
          <TextField
            type="number"
            value={this.state.cookTime}
            onChange={this.handleCookTime}
            floatingLabelText="Cook time (minutes)"
            hintText="Cook time (minutes)"
            errorText={errors.cookTime}
            fullWidth
          />
        </CardText>
        <br />
        <RaisedButton
          label="Start"
          onClick={this.startProgram}
          disabled={errors.invalid  || this.state.setPoint === ""}
          fullWidth
        />
     </Card>
    )
  }

  public renderCooking() {
    const client = this.props.circulatorManager.currentCirculatorClient
    const { bathTemp, timeRemaining, programStep } = client.data
    // TODO: Support adding/removing food
    const subtitle = `Currently: ${this.getDisplayTemp(bathTemp)}`
    const statusMessages = []
    let title
    switch (programStep) {
      case programSteps.preheat:
        title = "Preheating..."
        statusMessages.push(`Target temperature: ${this.getDisplayTemp(client.program.setPoint)}.`)
        break
      case programSteps.waitForFood:
      case programSteps.cook:
      case programSteps.waitForRemoveFood:
        title = "Cooking"
        break
      case programSteps.unknown:
      case programSteps.error:
        title = "Error"
        break
      default:
        title = "Cook ongoing"
        break
    }
    if (timeRemaining) {
      statusMessages.push(`Time remaining: ${(timeRemaining / 60).toFixed(0)} minutes`)
    }
    return (
      <Card>
        <CardTitle title={title} subtitle={subtitle} />
        {this.renderTemperatureToggle()}
        {statusMessages.map((status) => <CardText>{status}</CardText>)}
        <br />
        <RaisedButton
          label="Stop"
          onClick={this.stopProgram}
          fullWidth
        />
      </Card>
    )
  }

  // TODO: Display error message if user can't connect.
  public render() {
    const client = this.props.circulatorManager.currentCirculatorClient
    const webSocketConnectionStatus = client.connectionManager.getConnectionsStatus().webSocket

    if (webSocketConnectionStatus.connectionState === connectionStates.disconnected){
      if (webSocketConnectionStatus.disconnectReason === disconnectReasons.initialState) {
        return this.renderLoading()
      }
      // else {
      //   return this.renderError()
      // }

    } else if (client.circulatorState === CirculatorStates.idle) {
      return this.renderIdle()
    } else if (client.circulatorState === CirculatorStates.cooking) {
      return this.renderCooking()
    }

    // return this.renderError()
    return this.renderLoading()
  }

  private convertToCelsius(fahrenheitTemp: number) {
    return (fahrenheitTemp - 32) / 1.8
  }

  private convertToFahrenheit(celsiusTemp: number) {
    return (celsiusTemp * 1.8 + 32)
  }

  private getDisplayTemp(celsiusTemp: number) {
    const convertedTemp = this.state.isCelsius ? celsiusTemp : this.convertToFahrenheit(celsiusTemp)
    return `${convertedTemp.toFixed(1)}°${this.state.isCelsius ? "C" : "F"}`
  }

}

export default ActiveCirculatorProgramView