import * as React from "react"
const { Uuid } = require("exports-loader?window!./bundle.js")
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
  }

  public startProgram = () => {
    this.props.circulatorManager.startProgram({
      setPoint: parseInt(this.state.setPoint),
      cookTime: this.state.cookTime !== "" ? parseInt(this.state.cookTime)  : undefined,
      programType: this.state.programType,
      programMetadata: this.state.programMetadata,
    })

    this.setState({
      setPoint: "",
      programType: "MANUAL",
      cookTime: "",
      programMetadata: { cookId: Uuid.v4().split("-").join("") },
    })
  }

  public stopProgram = () => {
    this.props.circulatorManager.stopProgram()
  }

  public handleSetPoint = (event) => {
    this.setState({setPoint: event.target.value})
  }

  public handleCookTime = (event) => {
    this.setState({cookTime: event.target.value})
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
    const errors = []
    if (this.state.setPoint) {
      const temp = parseInt(this.state.setPoint)
      if (temp < CirculatorProgramView.minTemp) {
        errors.push(`Temperature must be above ${CirculatorProgramView.minTemp}°C`)
      } else if (this.state.maxTemp && temp > this.state.maxTemp) {
        errors.push(`Temperature must be below ${this.state.maxTemp.toFixed(1)}°C`)
      }

      if (this.state.cookTime && parseInt(this.state.cookTime) <= 0) {
        errors.push("Cook time must be greater than 0 minutes")
      }
    }

    return errors
  }

  public renderCurrentTemp() {
    const client = this.props.circulatorManager.currentCirculatorClient
    const bathTemp = client.data.bathTemp
    return (
      <div className="current-temperature">
        Current temp: {bathTemp ? `${bathTemp.toFixed(1)} °C` : "Fetching..." }
      </div>
    )
  }

  public renderLoading() {
      return <div className="circulator-program">Getting last accessed joule...</div>
  }

  public renderIdle() {
    const client = this.props.circulatorManager.currentCirculatorClient
    const errors = this.validateInput()
    return (
      <div className="circulator-program">
        {this.renderCurrentTemp()}
        <div className="errors">
          {errors.map((error) => <div>{error}</div>)}
        </div>
        <form>
          <div>
            <label>Temperature(°C): </label>
            <input type="number" value={this.state.setPoint} onChange={this.handleSetPoint} />
          </div>
          <div>
            <label>Cook time(minutes): </label>
            <input type="number" value={this.state.cookTime} onChange={this.handleCookTime} />
          </div>
          <button onClick={this.startProgram} disabled={errors.length > 0 || this.state.setPoint === ""}>Start</button>
        </form>
      </div>
    )
  }

  public renderCooking() {
    return (
      <div className="circulator-program">
        {this.renderCurrentTemp()}
        <button onClick={this.stopProgram}>Stop</button>
      </div>
    )
  }

  public render() {
    const client = this.props.circulatorManager.currentCirculatorClient
    if (!client || !client.circulatorState) {
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
    email: "",
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
    if (!userInfo) {
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
    if (this.state.userInfo) {
      return (
        <div className="content">
          <div className="name">Welcome, {this.state.userInfo.name}!</div>
          <CirculatorProgramView
            circulatorManager={this.state.circulatorManager}
            circulatorData={this.state.circulatorData}
          />
        </div>
      )
    } else if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      return <div>Please make sure you are logged in at chefsteps.com and have cookies enabled</div>
    }
  }
}

ReactDOM.render(<Main />, document.getElementById("content"))
