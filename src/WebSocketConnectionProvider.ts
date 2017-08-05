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
    this.type = connectionProvidersConfig.webSocket.type,
    this.connection = null,
    this.connections = {}
  }

  discover() {
      return Q([])
  }

  createConnectionFromEndpoint(endpoint) {
      return this.createConnection(endpoint.address)
  }

  createConnectionFromData(e) {
      return this.createConnection(e.address)
  }

  createConnectionFromCandidate(e) {
      return this.createConnection(e.address)
  }

  createConnection(circulatorAddress) {
      const id = this.type + "-" + circulatorAddress
      this.connection = new WebSocketConnection(this.applicationAddress)
      this.connections[id] = new WebSocketAddressConnection(id, circulatorAddress, this.connection)
      this.connections[id]

      return this.connection
  }

  cleanUp() {
      _.forEach(this.connections, function(e) {
          return e.close(disconnectReasons.cleanUp),
          e = null
      }),
      this.connections = {},
      this.connection = null
  }

  close() {
      return _.forEach(this.connections, function(e) {
          return e.close(disconnectReasons.inactive)
      })
  }

}

export default WebSocketConnectionProvider