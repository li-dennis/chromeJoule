import { connectionProvidersConfig } from "./constants"
import WebSocketConnection from "./WebSocketConnection"

class WebSocketConnectionManager {
  private callerAddress: string

  constructor(callerAddress: string) {
    this.callerAddress = callerAddress
  }
}

export default WebSocketConnectionManager