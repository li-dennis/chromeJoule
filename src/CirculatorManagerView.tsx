import {Card, CardText, CardTitle} from "material-ui/Card"
import RefreshIndicator from "material-ui/RefreshIndicator"
import * as React from "react"
import authenticationService from "./authenticationService"
import ActiveCirculatorClientView from "./CirculatorClientView"
import { circulatorConnectionStates } from "./constants"
import WebSocketsCirculatorManager from "./WebSocketsCirculatorManager"

class CirculatorManagerView extends React.Component {
  public state = {
    email:    "",
    password: "",
    userInfo: null,
    authorizing: true,
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
      this.setState({ authorizing : false })
      return
    }

    try {
      this.state.circulatorManager.initiateCirculatorManager(userInfo)
      await this.state.circulatorManager.circulatorScan()
      await this.state.circulatorManager.findLastAccessedCirculator()
      this.state.circulatorManager.currentCirculatorClient.dataObserver.start().progress((data) => {
          // HACK to also triggers an update in client.data
          this.setState({ circulatorData: data })
      })
      this.setState({
          userInfo,
          authorizing: false,
      })
    }  catch (error) {
      console.error("Unknown error ocurred", error)
      this.setState({
        authorizing: false,
      })
    }
  }

  public componentWillMount() {
    this.setup()
  }

  // TODO: Allow users to select active joule
  public renderCirculators() {
    const activeClient = this.state.circulatorManager.currentCirculatorClient
    let subtitle
    if (activeClient) {
      if (activeClient.currentConnectionState === circulatorConnectionStates.connected) {
        subtitle = `You are connected to ${activeClient.name}`
      } else if (activeClient.currentConnectionState === circulatorConnectionStates.connecting) {
        subtitle = `You are connecting to ${activeClient.name}`
      } else if (activeClient.currentConnectionState === circulatorConnectionStates.disconnected) {
        subtitle = `You are disconnected from ${activeClient.name}`
      }
    } else if (this.state.circulatorManager.sdkCirculatorManager.knownCirculators === {}) {
      subtitle = `No circulators found paired with this account. If you own a
      joule, make sure to pair with it through your phone first. Otherwise,
      an unknown error may have ocurred. ¯\_(ツ)_/¯`
    }
    return (
      <Card className="name">
        <CardTitle title={`Hi, ${this.state.userInfo.name}!`} subtitle={subtitle} />
      </Card>
    )
  }

  public render() {
    if (this.state.userInfo) {
      return (
        <div className="content">
          {this.renderCirculators()}
          <ActiveCirculatorClientView
            circulatorManager={this.state.circulatorManager}
            circulatorData={this.state.circulatorData}
          />
        </div>
      )
    } else if (this.state.authorizing) {
      return (
        <div className="content">
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
    } else {
      return (
        <div className="content">
          <Card className="name">
            <CardTitle title="Error" />
            <CardText>
              Please make sure you are logged in
              on at <a href="http://www.chefsteps.com" target="_blank">chefsteps.com</a> and
              have cookies enabled. You can also try logging out and back in.
            </CardText>
          </Card>
        </div>
      )
    }
  }
}

export default CirculatorManagerView