import * as React from "react"
const { Uuid } = require("exports-loader?window!./bundle.js")
import * as ReactDOM from "react-dom"
import authenticationService from "./authenticationService"
import { CirculatorStates } from "./constants"
import WebSocketsCirculatorManager from "./WebSocketsCirculatorManager"

interface ICirculatorProgramViewProps {
  circulatorManager: WebSocketsCirculatorManager,
  circulatorData: any
}

class CirculatorProgramView extends React.Component<ICirculatorProgramViewProps, any> {
  public state = {
    setPoint: "",
    programType: "MANUAL",
    cookTime: "",
    programMetadata: { cookId: Uuid.v4().split("-").join("") },
  }

  public startProgram = () => {
    this.props.circulatorManager.startProgram({
      setPoint: parseInt(this.state.setPoint),
      cookTime: this.state.cookTime !== "" ? parseInt(this.state.cookTime) : undefined,
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
    // TODO: Handle min/max timep
    this.setState({setPoint: event.target.value})
  }

  public handleCookTime = (event) => {
    // TODO: Handle min/max timep
    this.setState({cookTime: event.target.value})
  }

  public render() {
    const client = this.props.circulatorManager.currentCirculatorClient
    if (!client || !client.circulatorState) {
      return <div className="circulator-program">Getting last accessed joule...</div>
    } else if (client.circulatorState === CirculatorStates.idle) {
      const bathTemp = client.data.bathTemp
      return (
        <div className="circulator-program">
          <div className="current-temperature">
            Current temp: {bathTemp ? `${bathTemp.toFixed(1)} C` : "Fetching..." }
          </div>
          <div>
            Temp: <input type="number" value={this.state.setPoint} onChange={this.handleSetPoint} />
          </div>
          <div>
            Cook time: <input type="number" value={this.state.cookTime} onChange={this.handleCookTime} />
          </div>
          <button onClick={this.startProgram}>Start</button>
        </div>
      )
    } else if (client.circulatorState === CirculatorStates.cooking) {
      const bathTemp = client.data.bathTemp
      return (
        <div className="circulator-program">
          <div className="current-temperature">
            Current temp: {bathTemp ? `${bathTemp.toFixed(1)} C` : "Fetching..." }
          </div>
          <button onClick={this.stopProgram}>Stop</button>
        </div>
      )
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
          <div className="name">Welcome {this.state.userInfo.name}</div>
          <CirculatorProgramView circulatorManager={this.state.circulatorManager} circulatorData={this.state.circulatorData} />
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
