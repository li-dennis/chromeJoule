import { connectionProvidersConfig } from "./constants"

class WebSocketConnection {
  public socket: WebSocket = null
  private applicationAddress: string
  private userToken: string
  private url = connectionProvidersConfig.webSocket.discovery

  constructor(applicationAddress, userToken: string) {
    this.applicationAddress = applicationAddress
    this.userToken = userToken
  }

  public async open() {
    return new Promise((resolve, reject) => {
      const url = `${this.url}?token=${this.userToken}`
      this.socket = new WebSocket(url)
      this.socket.binaryType = "arraybuffer"

      this.socket.onopen = (event: Event) => {
        console.log("Websocket opened")
        resolve(event)
      }

      this.socket.onmessage = (messageEvent: MessageEvent) => {
        console.log("Received on websocket: " + messageEvent)
        resolve(messageEvent)
      }

      this.socket.onerror = (error: Event) => {
        console.log("WebSocket error: " + error)
        reject(error)
      }

      this.socket.onclose = (event: CloseEvent) => {
        console.log("Websocket socket closed: " + JSON.stringify(event))
        resolve(event)
      }
    })
  }

  public close() {
    this.socket.close()
    this.socket = null
  }

  public send(buffer: ArrayBuffer) {
    console.log("Sending ", buffer)
    this.socket.send(buffer)
  }
}

export default WebSocketConnection