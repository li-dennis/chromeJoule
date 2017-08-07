const $window = require("exports-loader?window!./bundle.js")
import * as EventEmitter from "events"
import { connectionProvidersConfig, connectionState, disconnectReasons, firmwareUpdateConfig } from "./constants"
import rootLogger from "./rootLogger"
import WebSocketConnection from "./WebSocketConnection"

const moduleName = "WebSocketAddressConnection"
const Connection = $window.CirculatorSDK.Connection

class WebSocketAddressConnection extends EventEmitter  {
  public webSocketConnection: WebSocketConnection

  private id: any
  private circulatorAddress: any
  private type: any
  private reconnectBaseTime: any
  private supportsSendingFile: any
  private preferredFileTransferBlockSize: any
  private isAlwaysActive: any
  private connectionState: any
  private disconnectReason: any

  constructor(id, circulatorAddress, webSocketConnection) {
    super()
    Connection.call(this, id, circulatorAddress, webSocketConnection)
    this.id = id
    this.circulatorAddress = circulatorAddress
    this.webSocketConnection = webSocketConnection
    this.type = connectionProvidersConfig.webSocket.type
    this.reconnectBaseTime = connectionProvidersConfig.webSocket.reconnectBaseTime
    this.supportsSendingFile = !0
    this.preferredFileTransferBlockSize = 128
    this.isAlwaysActive = !0
    this.connectionState = connectionState.disconnected
    this.disconnectReason = disconnectReasons.initialState

    this.webSocketConnection.on("open", this.onOpenHandler)
    this.webSocketConnection.on("connecting", this.onConnectingHandler)
    this.webSocketConnection.on("message", this.onMessageHandler)
    this.webSocketConnection.on("close", this.onCloseHandler)
    this.webSocketConnection.on("recipientUnavailableReply", this.onRecipientUnavailableReplyHandler)
    this.webSocketConnection.on("pong", this.onPongHandler)
  }

  public open(e) {
    return null == e && (e = connectionProvidersConfig.webSocket.connectionTimeout),
    this.webSocketConnection.open(e)
  }

  public startKeyExchange() {
    return $window.Q(null)
  }

  public openAndAuthorize(connectionTimeout = connectionProvidersConfig.webSocket.connectionTimeout) {
    if (this.connectionState === connectionState.connectedAuthorized) {
        this.emit("authorize")
        return $window.Q()
    }

    this.open(connectionTimeout).then(() => {
      if (this.connectionState === connectionState.connectedAuthorized){
        this.emit("authorize")
        return $window.Q()
      }
      if (this.connectionState !== connectionState.connected) {
        throw new Error("Invalid connection state during authorize")
      }
      if (null == this.webSocketConnection.handler) {
        throw new Error("Invalid handler")
      }

      console.log("WebSocketAddressConnection attempting to reach address " +
        this.circulatorAddress, moduleName, { circulatorAddress:
        this.circulatorAddress })

      const streamMessage = (new $window.CirculatorSDK.messages.StreamMessage)
        .setRecipientAddress($window.CirculatorSDK.hexToByteAddress(this.circulatorAddress))
        .set("ping", new $window.CirculatorSDK.messages.Ping)

      const timeoutOptions = {
          maxResponses: 1,
          timeoutSecs: connectionProvidersConfig.webSocket.pingTimeoutSeconds,
      }

      this.webSocketConnection.handler.initiateStreamAndWait(streamMessage, timeoutOptions).then((response) => {
        if (response.timedOut) {
          throw new Error("Stream response has timed out")
        }
        const firstMessage = response.messages[0]
        if (firstMessage) {
          const messageType = firstMessage.getMessageType()
          if (messageType === "pong") {
            console.log("WebSocketAddressConnection openAndAuthorize got pong response back",
              moduleName, { circulatorAddress: this.circulatorAddress })
            if (this.connectionState === connectionState.disconnected) {
              throw new Error("Connection is closed while receiving pong")
            }
            this.setConnectionState(connectionState.connectedAuthorized)
            return firstMessage
          }
          console.warn("WebSocketAddressConnection openAndAuthorize has failed with msgType " + messageType,
            moduleName, { circulatorAddress: this.circulatorAddress })
          throw new Error("Wrong message type: " + messageType)
        }
        throw new Error("Invalid message. The stream might have ended.")
      })
    })
  }

  public close(reason) {
    this.disconnectReason = reason

    if (this.disconnectReason === disconnectReasons.manualReset ||
        this.disconnectReason === disconnectReasons.cleanUp ||
        this.disconnectReason === disconnectReasons.disconnectWifi) {
      this.webSocketConnection.close(reason)
    }
  }

  public write(data) {
    if (this.connectionState === connectionState.connected ||
        this.connectionState === connectionState.connectedAuthorized) {
      return this.webSocketConnection.write(data)
    }
    const message = $window.CirculatorSDK.messages.StreamMessage.decode(data)
    const errorMessage = `WebSocketAddressConnection attempt to write message
        ${message.getMessageType()} without being connected! connectionState:
        ${this.connectionState}`

    console.warn(errorMessage, moduleName, { circulatorAddress: this.circulatorAddress })
    return $window.Q.reject(new Error(errorMessage))
  }

  public getFileSender(address, file, blockSize, stream) {
    return new $window.CirculatorSDK.WebSocketFileSender(address, file, stream, rootLogger, {
        blockSize,
        transferFileBlockTimeoutSecs: firmwareUpdateConfig.transferFileBlockTimeoutSecs,
        transferFileBlockRetryAttempts: firmwareUpdateConfig.transferFileBlockRetryAttempts,
    })
  }

  public onOpenHandler = () => {
    return this.setConnectionState(connectionState.connected)
  }

  public onConnectingHandler = () => {
    return this.setConnectionState(connectionState.connecting)
  }

  public onMessageHandler = (data) => {
    const message = $window.CirculatorSDK.messages.StreamMessage.decode(data)
    const senderAddress = message.getSenderAddress().toHex()

    if (senderAddress === this.circulatorAddress) {
      this.emit("message", data)
    }
  }

  public onCloseHandler = (reason) => {
    this.disconnectReason = reason
    return this.setConnectionState(connectionState.disconnected)
  }

  public onRecipientUnavailableReplyHandler = (reply) => {
    const recipientAddress = reply.getRecipientUnavailableReply().getRecipientAddress().toHex()
    if (recipientAddress === this.circulatorAddress) {
      this.close(disconnectReasons.unreachableAddress)
      this.setConnectionState(connectionState.disconnected)
    }
  }

  public onPongHandler = (e) => {
    const senderAddress = e.getSenderAddress().toHex()
    if (senderAddress === this.circulatorAddress) {
      this.webSocketConnection.handler.handleMessage(e)
    }
  }

  public setConnectionState(nextState) {
    this.connectionState = nextState

    switch (this.connectionState) {
      case connectionState.connected:
        return this.emit("open")
      case connectionState.connectedAuthorized:
        return this.emit("authorize")
      case connectionState.connecting:
        return this.emit("connecting")
      case connectionState.disconnected:
        return this.emit("close", this.disconnectReason)
      default:
        return
    }
  }
}

export default WebSocketAddressConnection
