import * as ByteBuffer from "bytebuffer"
import { connectionProvidersConfig } from "./constants"
import WebSocketConnection from "./WebSocketConnection"

import { IStreamMessage, Ping, Pong, StartKeyExchangeRequest, StreamMessage } from "./protobuf-files/base.js"

class WebSocketAddressConnection {
  private circulatorAddress: string = null
  private webSocketConnection: WebSocketConnection = null

  private type = connectionProvidersConfig.webSocket.type

  // applicationAddressHex = decodeToken(token) : "aabbaabbaabbaabb",
  constructor(circulatorAddress, webSocketConnection: WebSocketConnection) {
    this.circulatorAddress = circulatorAddress
    this.webSocketConnection = webSocketConnection
  }

  async open() {
    return this.webSocketConnection.open()
  }

  async startKeyExchange() {
    return new Promise(null)
  }

  async openAndAuthorizee() {
    await this.open()
    const byteCirculatorAddress = ByteBuffer.fromHex(this.circulatorAddress)

    const ping = new Ping()
    const streamMessage = new StreamMessage({
      handle: null,
      senderAddress: null,
      recipientAddress: byteCirculatorAddress.toArrayBuffer(),
      ping,
    })
  }
}

export default WebSocketAddressConnection