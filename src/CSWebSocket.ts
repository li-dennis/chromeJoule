import { circulatorConnectionStates, csConfig } from "./constants"

interface CSWebSocketHandlers {
  openHandler?: (() => any)
  messageHandler?: ((_: MessageEvent) => any)
  errorHandler?: ((_: Event) => any)
  closeHandler?: ((_: CloseEvent) => any)
}

class CSWebSocket {
  private socket: WebSocket = null
  private handlers: CSWebSocketHandlers

  constructor(handlers: CSWebSocketHandlers) {
    this.handlers = handlers
  }

  // see StreamMessageHandler in bundle.js:44245
  public async init(circulatorToken) {
    return new Promise((resolve, reject) => {
      const url = `${csConfig.production.webSocketEndpoint}?token=${circulatorToken}`
      this.socket = new WebSocket(url)
      this.socket.binaryType = "arraybuffer"

      this.socket.onopen = () => {
        console.log("Websocket opened")
        this.handlers.openHandler && this.handlers.openHandler()
        resolve()
      }

      this.socket.onmessage = (messageEvent: MessageEvent) => {
        console.log("Received on websocket: " + messageEvent)
        this.handlers.messageHandler && this.handlers.messageHandler(messageEvent)
      }

      this.socket.onerror = (error: Event) => {
        console.log("WebSocket error: " + error)
        this.handlers.errorHandler && this.handlers.errorHandler(error)
        reject(error)
      }

      this.socket.onclose = (event: CloseEvent) => {
        this.handlers.closeHandler && this.handlers.closeHandler(event)
        console.log("Websocket socket closed: " + JSON.stringify(event))
      }
    })
  }

  public disconnect() {
    this.socket.close()
  }
}

export default CSWebSocket