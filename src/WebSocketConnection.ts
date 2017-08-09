const { Q, CirculatorSDK } = require("exports-loader?window!./bundle.js")
import * as EventEmitter from "events"
import * as _ from "underscore"
import authenticationService from "./authenticationService"
import { connectionProvidersConfig, connectionState, disconnectReasons } from "./constants"
import CSWebSocket from "./CSWebSocket"
import rootLogger from "./rootLogger"

const moduleName = "WebSocketConnection"

class WebSocketConnection extends EventEmitter {
  public handler: any

  private applicationAddress: any
  private webSocket: any
  private url: any
  private connectionState: any
  private disconnectReason: any
  private openDeferred: any
  private openTimeout: any

  constructor(applicationAddress) {
    super()

    this.applicationAddress = applicationAddress
    this.webSocket = null
    this.handler = null
    this.url = connectionProvidersConfig.webSocket.discovery
    this.connectionState = connectionState.disconnected
    this.disconnectReason = disconnectReasons.initialState
    this.openDeferred = null
    this.openTimeout = null
  }

  public open(connectionTimeout = connectionProvidersConfig.webSocket.connectionTimeout) {
    if (this.connectionState === connectionState.connected) {
      this.emit("open")
      return Q()
    }
    console.log("WebSocketConnection open", moduleName)
    if (this.openDeferred) {
      return this.openDeferred.promise
    }
    const openDate = new Date()
    this.clearOpenTimeout()
    this.setOpenTimeout(connectionTimeout)
    this.openDeferred = Q.defer()

    this.connectionState = connectionState.connecting
    this.webSocket = this.getWebSocket()
    this.emit("connecting")
    this.webSocket.onMessage((messageEvent) => {
      const streamMessage = CirculatorSDK.messages.StreamMessage.decode(messageEvent)

      if (_.indexOf(["connectionReadyReply", "ping"], streamMessage.getMessageType()) > -1) {
        console.log("WebSocketConnection is handling " + streamMessage.getMessageType(), moduleName)
        if (this.handler) {
          this.handler.handleMessage(streamMessage)
          } else {
            console.error("WebSocketConnection got a null handler while handling a message", moduleName)
          }
      } else if ("recipientUnavailableReply" === streamMessage.getMessageType()) {
        console.log("WebSocketConnection is firing recipientUnavailableReply", moduleName)
        this.emit("recipientUnavailableReply", streamMessage)
      } else if ("pong" === streamMessage.getMessageType()) {
        console.log("WebSocketConnection is firing pong", moduleName)
        this.emit("pong", streamMessage)
      } else {
        this.emit("message", messageEvent)
      }

      return streamMessage
    })
    this.webSocket.onOpen(() => {
      this.handler = this.createHandler()
      this.handler.registerOutput("connectionReadyReply", (replyMessage) => {
        const replyDate = new Date()
        const openTime = replyDate.getDate() - openDate.getDate()
        console.log("WebSocketConnection is ready for connection", moduleName, { openTime })
        this.connectionState = connectionState.connected

        replyMessage.end()

        this.openDeferred && this.openDeferred.resolve()
        this.openDeferred = null

        this.clearOpenTimeout()
        this.emit("open")
      })
      this.handler.registerOutput("ping", (t) => {
        console.log("WebSocketConnection got ping, sending pong", moduleName)
        const response = new CirculatorSDK.messages.StreamMessage()
          .set("pong", new CirculatorSDK.messages.Pong()).setEnd(true)

        this.write(response)
      })
      this.handler.on("msgReady", (message) => {
        console.log("WebSocketConnection handler sending " + message.getMessageType + " message", moduleName)
        const data = message.encode().toBuffer()
        this.write(data)
      })
    })
    this.webSocket.onError(() => {
        console.warn("WebSocketConnection on contain error ", moduleName)
    })
    this.webSocket.onClose(() => {
      console.warn("WebSocketConnection on connection close", moduleName, { connectionState: this.connectionState })
      if (this.connectionState !== connectionState.disconnected) {
        this.openDeferred && this.openDeferred.reject(new Error("WebSocketConnection on connection close"))
        this.openDeferred = null
        this.close(disconnectReasons.terminatedByOther)
      }
    })

    return this.openDeferred.promise
  }

  public close(reason) {
    this.connectionState = connectionState.disconnected

    this.disconnectReason = reason
    this.webSocket && this.webSocket.close()
    this.clearOpenTimeout()
    this.webSocket = null

    this.handler && this.handler.cleanUp()
    this.handler = null

    this.openDeferred && this.openDeferred.reject()
    this.openDeferred = null

    this.emit("close", this.disconnectReason)
  }

  public write(data) {
    const deferred =  Q.defer()
    const message = CirculatorSDK.messages.StreamMessage.decode(data)

    try {
      this.webSocket && this.webSocket.send(data)
      deferred.resolve()
    } catch (error) {
      deferred.reject(error)
      console.warn("WebSocketConnection closing connection after write failure for message " +
        message.getmessagetype(), moduleName, { error })
      this.close(disconnectReasons.writeError)
    }

    return deferred.promise
  }

  public getWebSocket() {
    return new CSWebSocket(this.url + "?token=" + authenticationService.userInfo.token, false)
  }

  public createHandler() {
    return new CirculatorSDK.StreamMessageHandler({
        myAddress: CirculatorSDK.hexToByteAddress(this.applicationAddress),
        log: rootLogger,
        handlerType: "webSocketConnection",
    })
  }

  public setOpenTimeout(timeout) {
    return this.openTimeout = window.setTimeout(() => {
      const isPending = this.openDeferred && this.openDeferred.promise && this.openDeferred.isPending()
      const isConnecting = this.connectionState === connectionState.connecting

      if (isPending && isConnecting) {
        this.openDeferred && this.openDeferred.reject()
        this.openDeferred = null
        this.close(disconnectReasons.openTimeout)
      }
    }, timeout)
  }

  public clearOpenTimeout() {
    this.openTimeout && window.clearTimeout(this.openTimeout)
    this.openTimeout = null
  }
}

export default WebSocketConnection
