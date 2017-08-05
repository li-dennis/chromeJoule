const $window = require("exports-loader?window!./bundle.js")
import { webSocketReadyStates } from "./constants"

class CSWebSocket {
  private onErrorCallback: Function
  private onCloseCallback: Function
  private onOpenCallback: Function
  private onMessageCallback: Function

  private url: string
  private shouldReconnect: boolean
  private reconnectInterval: number
  private ws: WebSocket

  constructor(url, shouldReconnect = false) {
    this.url = url
    this.shouldReconnect = shouldReconnect
    this.reconnectInterval = null
    this.initialize()
  }

  public initialize() {
    this.ws = new WebSocket(this.url)
    this.ws.binaryType = "arraybuffer"
    this.ws.onerror = (error) => {
        return this.onErrorCallback && this.onErrorCallback(error)
    }
    this.ws.onclose = (oncloseEvent) => {
      if (this.shouldReconnect && !this.reconnectInterval) {
        this.reconnectInterval = window.setInterval(() => {
          this.initialize()
        }, 2e3)
      }
      return this.onCloseCallback && this.onCloseCallback()
    }
    this.ws.onopen = () => {
      if (this.reconnectInterval) {
        window.clearTimeout(this.reconnectInterval)
        this.reconnectInterval = null
      }
      return this.onOpenCallback && this.onOpenCallback()
    }
    this.ws.onmessage = (message) => {
      return this.onMessageCallback && this.onMessageCallback(message.data)
    }
  }

  public onOpen(callback) {
    this.onOpenCallback = callback
  }

  public onMessage(callback) {
    this.onMessageCallback = callback
  }

  public onError(callback) {
    this.onErrorCallback = callback
  }

  public onClose(callback) {
    this.onCloseCallback = callback
  }

  public send(data) {
    if (!data) {
      throw new Error("WebSocket:send: Missing parameter [data].")
    }
    if (!this.ws || this.ws.readyState !== webSocketReadyStates.open) {
      throw new Error("WebSocket:send: readyState is not open.")
    }

    return this.ws.send(data)
  }

  public close() {
    this.shouldReconnect = false
    if (this.reconnectInterval) {
      window.clearTimeout(this.reconnectInterval)
      this.reconnectInterval = null
    }
    if (this.ws && this.ws.readyState !== webSocketReadyStates.closed) {
      this.ws.close()
    }
  }

}

export default CSWebSocket