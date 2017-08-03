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

  public async open() {
    return this.webSocketConnection.open()
  }

  public async write(message: ArrayBuffer) {
    return this.webSocketConnection.write(message)
  }

  public async startKeyExchange() {
    return null
  }

  public async openAndAuthorizee() {
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
