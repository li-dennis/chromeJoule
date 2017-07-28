import * as ByteBuffer from "bytebuffer"
import * as $ from "jquery"
import { circulatorConnectionStates, csConfig } from "./constants"
import { email, password } from "./credentials"
import CSWebSocket from "./CSWebSocket"
import HandlePool from "./HandlePool"
import { IStreamMessage, Ping, Pong, StartKeyExchangeRequest, StreamMessage } from "./protobuf-files/base.js"
import StreamMessageUtils from "./StreamMessageUtils"

class WebSocketsCirculatorManager {
  private headers: any = { "Content-Type": "application/x-www-form-urlencoded" }
  private cSWebSocket: CSWebSocket
  private circulators = []
  private activeCirculator = null
  private handlePool: HandlePool

  private initMessageProperties: IStreamMessage

  constructor() {
    this.cSWebSocket = new CSWebSocket({
      messageHandler: this.receiveSocketMessageEvent,
    })
  }

  public async init() {
    const authToken: string = await this.getAuthToken()
    const authorization = `Bearer ${authToken}`
    this.headers = Object.assign({ authorization }, this.headers)

    this.circulators = await this.getCirculators()
    this.activeCirculator = await this.getCirculator()

    this.cSWebSocket.init(authToken)
  }

  public sendStreamMessage(streamMessage: StreamMessage) {
    this.cSWebSocket.send(StreamMessageUtils.encode(streamMessage))
  }

  public receiveSocketMessageEvent = (messageEvent: MessageEvent) => {
    const streamMessage = StreamMessageUtils.decode(messageEvent.data)
    const messageType = StreamMessageUtils.getMessageType(streamMessage)

    console.log(`WebSocketConnection is handling ${messageType}`, streamMessage)
    switch (messageType) {
      case "connectionReadyReply":
        this.ininiateStream(messageEvent)
        this.startKeyExchange(streamMessage)
      case "ping":
        break
      case "recipientUnavailableReply":
        break
      case "pong":
      default:
        break
    }
  }

  public ininiateStream = (messageEvent: MessageEvent) => {
    const streamMessage = StreamMessageUtils.decode(messageEvent.data)
    const messageType = StreamMessageUtils.getMessageType(streamMessage)

    if (!this.initMessageProperties) {
      this.initMessageProperties = {
        end: false,
        handle: (streamMessage.handle += 2) % 256,
        recipientAddress: streamMessage.senderAddress,
        senderAddress: streamMessage.recipientAddress,
      }
    }
  }

  public sendPong(streamMessage: StreamMessage) {
    const pong = new Pong()
    const props = Object.assign({}, this.initMessageProperties, { pong })
    const response = new StreamMessage(props)

    this.sendStreamMessage(response)
  }

  public startKeyExchange(connectionReadyReply: StreamMessage) {
    const startKeyExchangeRequest = new StartKeyExchangeRequest()
    const request = new StreamMessage(Object.assign({}, this.initMessageProperties, { startKeyExchangeRequest }))

    this.sendStreamMessage(request)
  }

  public sendPing(streamMessage: StreamMessage) {
    const ping = new Ping()
    const props = Object.assign({}, this.initMessageProperties, { ping })
    const request = new StreamMessage(props)

    this.sendStreamMessage(request)

  }

  protected async getAuthToken() {
    const url = `${csConfig.production.chefstepsEndpoint}/api/v0/authenticate?user[email]=${email}&user[password]=${password}`

    return $.ajax({
      url,
      type: "POST",
      headers: this.headers,
    }).then((response) => {
      return response.token
    })
  }

  protected getCallerAddress(userToken) {
    const hexAddress = userToken ? JSON.parse(atob(userToken.split(".")[1])).a : "aabbaabbaabbaabb"
    return ByteBuffer.fromHex(hexAddress)
  }

  protected async getCirculators() {
    const baseUrl = `${csConfig.production.chefstepsEndpoint}/api/v0/circulators`
    return $.ajax({
      url: baseUrl,
      type: "GET",
      headers: this.headers,
    })
  }

  // Choose first circulator by default
  protected async getCirculator() {
    const baseUrl = `${csConfig.production.chefstepsEndpoint}/api/v0/circulators`
    if (this.circulators.length === 0) {
      throw new Error("Circulators do not exist")
    }
    const circulatorId = this.circulators[0].circulatorId
    const url = `${baseUrl}/${circulatorId}/token`

    return $.ajax({
      url,
      type: "GET",
      headers: this.headers,
    })
  }

}

export default WebSocketsCirculatorManager
