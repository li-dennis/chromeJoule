import * as $ from "jquery"
import { load } from "protobufjs"
import * as api from "./api"
import { circulatorConnectionStates, csConfig } from "./constants"
import { email, password } from "./credentials"
import * as baseProtobuf from "./protobuf-files/base.js"
import * as utils from "./utils"

// see bundle.js:43895
const hexToByteAddress = (hexAddress) => {
  if (hexAddress.length % 2 !== 0) {
    throw new Error("Not a valid address, must be multiple of 2: " + hexAddress);
  }
  if (hexAddress.length > 18) {
    throw new Error("Address is too long: " + hexAddress);
  }

  return hexToBytes(hexAddress);
};


class CSWebSocket {
  private socket: WebSocket = null
  private reconnectInterval: Number = null
  private headers: any = { "Content-Type": "application/x-www-form-urlencoded" }

  async getAuthToken() {
    const url = `${csConfig.production.chefstepsEndpoint}/api/v0/authenticate?user[email]=${email}&user[password]=${password}`

    return $.ajax({
      url,
      type: "POST",
      headers: this.headers,
    }).then((response) => {
      return response.token
    })
  }

  async getCirculatorToken(authorization) {
    const baseUrl = `${csConfig.production.chefstepsEndpoint}/api/v0/circulators`
    const headers = Object.assign({ authorization }, this.headers)
    return $.ajax({
      url: baseUrl,
      type: "GET",
      headers,
    })
    .then((response) => response && response[0].circulatorId)
    .then((circulatorId) => {
      const url = `${baseUrl}/${circulatorId}/token`
      return $.ajax({
        url,
        type: "GET",
        headers,
      })
    }).then((response) => {
      return response.token
    })
  }

  // see StreamMessageHandler in bundle.js:44245
  public async connect() {
    const authToken: string = await this.getAuthToken()
    const authorization = `Bearer ${authToken}`
    const circulatorToken = await this.getCirculatorToken(authorization)

    return new Promise((resolve, reject) => {
      const url = `${csConfig.production.webSocketEndpoint}?token=${circulatorToken}`
      this.socket = new WebSocket(url)
      this.socket.binaryType = "arraybuffer"

      this.socket.onopen = () => {
        console.log("Websocket opened")
        resolve()
      }

      this.socket.onmessage = (message: any) => {
        const data = message.data
        const streamMessage = baseProtobuf.StreamMessage.decode(new Uint8Array(data))
        console.log("Received on websocket: " + streamMessage)
        // Assume streamMessage is of type connectionReadyReply
      }

      this.socket.onerror = (error: any) => {
        console.log("WebSocket error: " + error)
        reject(error)
      }

      this.socket.onclose = (event: Event) => {
        console.log("Websocket socket closed: " + JSON.stringify(event))
      }
    })
  }

  public disconnect() {
    this.socket.close()
  }
}

// see bundle.js:44130 for where StreamHandler starts.
// class RPCConnection {
//   protected rpcStream: RpcStream
//   protected socketConnection: WebSocketConnection

//   public async connect(url) {
//     this.socketConnection = new WebSocketConnection()

//     await this.socketConnection.connect(url)
//     this.rpcStream = new RpcStream(this.socketConnection.socket)

//   }
// }

const webSocketConnection = new CSWebSocket()

webSocketConnection.connect()