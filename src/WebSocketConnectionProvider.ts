const { Q, CirculatorSDK } = require("exports-loader?window!./bundle.js")
import * as _ from "underscore"
import { connectionProvidersConfig, disconnectReasons } from "./constants"
import WebSocketAddressConnection from "./WebSocketAddressConnection"
import WebSocketConnection from "./WebSocketConnection"

const moduleName = "WebSocketConnectionProvider"

class WebSocketConnectionProvider {
  private applicationAddress: string
  private type: string
  private webSocketConnection: any
  private webSocketAddressConnections: any

  constructor(applicationAddress) {
    this.applicationAddress = applicationAddress
    this.type = connectionProvidersConfig.webSocket.type
    this.webSocketConnection = null
    this.webSocketAddressConnections = {}
  }

  public discover() {
      return Q([])
  }

  public createConnectionFromEndpoint(endpoint) {
      console.log("WebSocketConnectionProvider creating WebSocketConnection from endpoint", moduleName)
      return this.createConnection(endpoint.address)
  }

  public createConnectionFromData(e) {
      console.log("WebSocketConnectionProvider creating WebSocketConnection from connectionData", moduleName)
      return this.createConnection(e.address)
  }

  public createConnectionFromCandidate(e) {
      console.log("WebSocketConnectionProvider creating WebSocketConnection from connectionData", moduleName)
      return this.createConnection(e.address)
  }

  public createConnection(circulatorAddress) {
      const id = this.type + "-" + circulatorAddress
      if (!this.webSocketConnection) {
        console.log("WebSocketConnectionProvider creating new WebSocketConnection", moduleName)
        this.webSocketConnection = new WebSocketConnection(this.applicationAddress)
      }
      if (!this.webSocketAddressConnections[id]) {
        console.log("WebSocketConnectionProvider creating new WebSocketAddressConnection", moduleName, { id, circulatorAddress })
        this.webSocketAddressConnections[id] = new WebSocketAddressConnection(id, circulatorAddress, this.webSocketConnection)
      }

      return this.webSocketAddressConnections[id]
  }

  public cleanUp() {
      console.log("WebSocketConnectionProvider cleanUp", moduleName)
      _.forEach(this.webSocketAddressConnections, (connection) => {
          connection.close(disconnectReasons.cleanUp)
          connection = null
      })
      this.webSocketAddressConnections = {}
      this.webSocketConnection = null
  }

  public close() {
      console.log("WebSocketConnectionProvider close", moduleName)
      return _.forEach(this.webSocketAddressConnections, function(e) {
          return e.close(disconnectReasons.inactive)
      })
  }

}

export default WebSocketConnectionProvider