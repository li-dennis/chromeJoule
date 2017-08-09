import {Card, CardText, CardTitle} from "material-ui/Card"
const { Uuid } = require("exports-loader?window!./bundle.js")
import RaisedButton from "material-ui/RaisedButton"
import RefreshIndicator from "material-ui/RefreshIndicator"
import TextField from "material-ui/TextField"
import * as React from "react"
import { circulatorConnectionStates, CirculatorStates, connectionStates, disconnectReasons } from "./constants"
import WebSocketsCirculatorManager from "./WebSocketsCirculatorManager"

interface IActiveCirculatorClientViewProps {
  circulatorManager: WebSocketsCirculatorManager,
  circulatorData: any,
}

class ActiveCirculatorProgramView extends React.Component<IActiveCirculatorClientViewProps, any> {
  static minTemp = 20

  public state = {
    setPoint: "",
    programType: "MANUAL",
    cookTime: "",
    programMetadata: { cookId: Uuid.v4().split("-").join("") },
    maxTemp: undefined,
    lock: false, // Lock while starting/stopping a cook program
  }

  public startProgram = () => {
    this.props.circulatorManager.startProgram({
      setPoint: parseInt(this.state.setPoint),
      cookTime: this.state.cookTime !== "" ? parseInt(this.state.cookTime) * 60  : undefined,
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

  public handleSetPoint = (event, setPoint) => {
    this.setState({ setPoint })
  }

  public handleCookTime = (event, cookTime) => {
    this.setState({ cookTime })
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
      const temp = parseInt(this.state.setPoint)
      if (temp < ActiveCirculatorProgramView.minTemp) {
        errors.temperature = `Temperature must be above ${ActiveCirculatorProgramView.minTemp}°C`
        errors.invalid = true
      } else if (this.state.maxTemp && temp > this.state.maxTemp) {
        errors.temperature = (`Temperature must be below ${this.state.maxTemp.toFixed(1)}°C`)
        errors.invalid = true
      }

      if (this.state.cookTime && parseInt(this.state.cookTime) <= 0) {
        errors.cookTime = ("Cook time must be greater than 0 minutes")
        errors.invalid = true
      }
    }

    return errors
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
    return (
      <Card className="start-program">
        <CardTitle title="Start a new cook" subtitle={`Currently ${bathTemp.toFixed(1)}°C`} />
        <CardText>
          <TextField
            type="number"
            value={this.state.setPoint}
            onChange={this.handleSetPoint}
            floatingLabelText="Temperature(°C)"
            hintText="Temperature (°C)"
            errorText={errors.temperature}
            fullWidth
          />
          <TextField
            type="number"
            value={this.state.cookTime}
            onChange={this.handleCookTime}
            floatingLabelText="Cook time(minutes)"
            hintText="Cook time (minutes)"
            errorText={errors.cookTime}
            fullWidth
          />
          <br />
          <RaisedButton
            label="Start"
            onClick={this.startProgram}
            disabled={errors.invalid  || this.state.setPoint === ""}
            fullWidth
          />
        </CardText>
      </Card>
    )
  }

  public renderCooking() {
    const client = this.props.circulatorManager.currentCirculatorClient
    const { bathTemp, timeRemaining } = client.data
    // TODO: Show target temp
    return (
      <Card>
        <CardTitle title="Current cook" subtitle={`Currently ${bathTemp.toFixed(1)}°C`} />
        {timeRemaining && <CardText>Time remaining: {(timeRemaining / 60).toFixed(0)} minutes</CardText>}
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
}

export default ActiveCirculatorProgramView