import authenticationService from "./authenticationService"
import WebSocketsCirculatorManager from "./WebSocketsCirculatorManager"

const webSocketsCirculatorManager = new WebSocketsCirculatorManager()

const initiate = async () => {
  const userInfo = await authenticationService.getUserInfo()
  webSocketsCirculatorManager.initiateCirculatorManager(userInfo)
}

initiate()
