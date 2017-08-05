const { CirculatorSDK, Q } = require("exports-loader?window!./bundle.js")
import * as _ from "underscore"
import { connectionProvidersConfig, disconnectReasons } from "./constants"
import WebSocketAddressConnection from "./WebSocketAddressConnection"
import WebSocketConnection from "./WebSocketConnection"

class WebSocketConnectionProvider {
  private applicationAddress: string
  private type: string
  private connection: any
  private connections: any

  constructor(applicationAddress) {
    this.applicationAddress = applicationAddress
    this.type = connectionProvidersConfig.webSocket.type
    this.connection = null
    this.connections = {}
  }

  public discover() {
      return Q([])
  }

  public createConnectionFromEndpoint(endpoint) {
      return this.createConnection(endpoint.address)
  }

  public createConnectionFromData(e) {
      return this.createConnection(e.address)
  }

  public createConnectionFromCandidate(e) {
      return this.createConnection(e.address)
  }

  public createConnection(circulatorAddress) {
      const id = this.type + "-" + circulatorAddress
      this.connection = new WebSocketConnection(this.applicationAddress)
      this.connections[id] = new WebSocketAddressConnection(id, circulatorAddress, this.connection)
      this.connections[id]

      return this.connections[id]
  }

  public cleanUp() {
      _.forEach(this.connections, (connection) => {
          connection.close(disconnectReasons.cleanUp)
          connection = null
      })
      this.connections = {}
      this.connection = null
  }

  public close() {
      return _.forEach(this.connections, function(e) {
          return e.close(disconnectReasons.inactive)
      })
  }

}

export default WebSocketConnectionProvider