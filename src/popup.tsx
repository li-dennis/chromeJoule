import * as React from "react"
const { Uuid } = require("exports-loader?window!./bundle.js")
import {Card, CardText, CardTitle} from "material-ui/Card"
import RaisedButton from "material-ui/RaisedButton"
import RefreshIndicator from "material-ui/RefreshIndicator"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import TextField from "material-ui/TextField"
import * as ReactDOM from "react-dom"
import authenticationService from "./authenticationService"
import { circulatorConnectionStates, CirculatorStates } from "./constants"
import WebSocketsCirculatorManager from "./WebSocketsCirculatorManager"

interface ICirculatorProgramViewProps {
  circulatorManager: WebSocketsCirculatorManager,
  circulatorData: any,
}

class CirculatorProgramView extends React.Component<ICirculatorProgramViewProps, any> {
  static minTemp = 20

  public state = {
    setPoint: "",
    programType: "MANUAL",
    cookTime: "",
    programMetadata: { cookId: Uuid.v4().split("-").join("") },
    maxTemp: undefined,
    loading: false,
  }

  public startProgram = () => {
    this.props.circulatorManager.startProgram({
      setPoint: parseInt(this.state.setPoint),
      cookTime: this.state.cookTime !== "" ? parseInt(this.state.cookTime) * 60  : undefined,
      programType: this.state.programType,
      programMetadata: this.state.programMetadata,
    }).then(() => this.setState({ loading: false}))

    this.setState({
      setPoint: "",
      programType: "MANUAL",
      cookTime: "",
      programMetadata: { cookId: Uuid.v4().split("-").join("") },
      loading: true,
    })
  }

  public stopProgram = () => {
    this.props.circulatorManager.stopProgram().then(() => this.setState({ loading: false }))
    this.setState({ loading: true })
  }

  public handleSetPoint = (event, setPoint) => {
    this.setState({ setPoint })
  }

  public handleCookTime = (event, cookTime) => {
    this.setState({ cookTime })
  }

  public componentWillMount() {
    const client = this.props.circulatorManager.currentCirculatorClient
    // hacks to get max temp

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
      if (temp < CirculatorProgramView.minTemp) {
        errors.temperature = `Temperature must be above ${CirculatorProgramView.minTemp}°C`
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
      <div className="circulator-program">
        <Card className="loading-container">
          <RefreshIndicator
            size={50}
            left={175}
            top={20}
            status="loading"
          />
        </Card>
      </div>
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
    debugger
        // <CardTitle title={`Current temperature: ${bathTemp.toFixed(1)} °C`} />
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

  public render() {
    const client = this.props.circulatorManager.currentCirculatorClient
    if (!client || !client.circulatorState || this.state.loading) {
      return this.renderLoading()
    } else if (client.circulatorState === CirculatorStates.idle) {
      return this.renderIdle()
    } else if (client.circulatorState === CirculatorStates.cooking) {
      return this.renderCooking()
    }
  }
}

class Main extends React.Component {
  public state = {
    email:    "",
    password: "",
    userInfo: null,
    loading: true,
    circulatorManager: new WebSocketsCirculatorManager(),
    circulatorData: null,
  }

  public handleLogin = (email, password) => {
    this.setState({ email, password })
  }

  public async setup() {
    const userInfo = await authenticationService.getUserInfo()

    // Login error ocurred
    if (!userInfo.token || userInfo.logged_in === false) {
      this.setState({ loading : false })
      return
    }

    this.state.circulatorManager.initiateCirculatorManager(userInfo)
    await this.state.circulatorManager.circulatorScan()
    await this.state.circulatorManager.findLastAccessedCirculator()

    this.state.circulatorManager.currentCirculatorClient.dataObserver.start().progress((data) => {
      // also triggers an update in client.data
      this.setState({ circulatorData: data })
    })

    this.setState({
      userInfo,
         loading: false,
    })
  }

  public componentWillMount() {
    this.setup()
  }

  public render() {
    if   (this.state.userInfo) {
      return (
        <div className="content">
          <Card className="name">
            <CardTitle title={`Hi, ${this.state.userInfo.name}!`} />
          </Card>
          <CirculatorProgramView
            circulatorManager={this.state.circulatorManager}
            circulatorData={this.state.circulatorData}
          />
        </div>
      )
    } else if (this.state.loading) {
      return (
        <div className="content">
          <RefreshIndicator
            size={50}
            left={175}
            top={20}
            status="loading"
          />
        </div>
      )
    } else {
      return (
        <div className="content">
          <Card className="name">
            <CardTitle title="Error" />
            <CardText>
              Please make sure you are logged in at chefsteps.com and have cookies enabled
            </CardText>
          </Card>
        </div>
      )
    }
  }
}

ReactDOM.render(<MuiThemeProvider><Main /></MuiThemeProvider>, document.getElementById("content"))
