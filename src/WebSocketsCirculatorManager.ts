import * as ByteBuffer from "bytebuffer"
const { CirculatorSDK } = require("exports-loader?window!./bundle.js")
import authenticationService from "./authenticationService"
import { csConfig, routingConfig } from "./constants"
import rootLogger from "./rootLogger"
import WebSocketConnectionProvider from "./WebSocketConnectionProvider"

class WebSocketsCirculatorManager {
  private headers: any = { "Content-Type": "application/x-www-form-urlencoded" }

  private userToken: string
  private sdkCirculatorManager: any

  public async initiateCirculatorManager() {
    this.userToken = await authenticationService.getToken()

    const applicationAddressHex = authenticationService.getCallerAddress(this.userToken)
    const connectionProviders = [new WebSocketConnectionProvider(applicationAddressHex)]

    this.sdkCirculatorManager = new CirculatorSDK.CirculatorManager({
      routingConfig,
      connectionProviders,
      logger: rootLogger,
      callerAddress: applicationAddressHex,
      localCirculatorStorage: null,
      apiConfig: csConfig,
      userAuthenticationToken: this.userToken,
    })
  }
}

export default WebSocketsCirculatorManager
