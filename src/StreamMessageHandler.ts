import * as $ from "jquery"
import { circulatorConnectionStates, csConfig } from "./constants"
import { email, password } from "./credentials"
import CSWebSocket from "./CSWebSocket"
import { StreamMessage } from "./protobuf-files/base.js"
import StreamMessageUtils from "./StreamMessageUtils"


// see bundle.js:44130 and :44875
// TODO: Rename to MasterController or something.
class StreamMessageHandler {
  private headers: any = { "Content-Type": "application/x-www-form-urlencoded" }
  private cSWebSocket: CSWebSocket = new CSWebSocket({
    messageHandler: this.receiveSocketMessageEvent,
  })
  private circulators = []
  private activeCirculatorToken: string = null

  public async init() {
    const authToken: string = await this.getAuthToken()
    const authorization = `Bearer ${authToken}`
    this.headers = Object.assign({ authorization }, this.headers)

    this.circulators = await this.getCirculators()
    this.activeCirculatorToken = await this.getCirculatorToken()

    this.cSWebSocket.init(this.activeCirculatorToken)
  }

  public receiveSocketMessageEvent(messageEvent: MessageEvent) {
    const streamMessage = StreamMessageUtils.decode(messageEvent.data)
    const messageType = StreamMessageUtils.getMessageType(streamMessage)
    console.log(`WebSocketConnection is handling ${messageType}`, streamMessage)
    switch (messageType) {
      case "ping":
      case "connectionReadyReply":
        break
      case "recipientUnavailableReply":
        break
      case "pong":
        this.onPong(streamMessage)
      default:
        break
    }
  }

  public onPong(pong: StreamMessage) {
    const senderAddress = StreamMessageUtils.getSenderAddress(pong)
    // if (senderAddress === circulatorAddress)
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

  protected async getCirculators() {
    const baseUrl = `${csConfig.production.chefstepsEndpoint}/api/v0/circulators`
    return $.ajax({
      url: baseUrl,
      type: "GET",
      headers: this.headers,
    })
  }

  // Choose first circulator by default
  protected async getCirculatorToken() {
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
    .then((response) => response.token)
  }

}

export default StreamMessageHandler