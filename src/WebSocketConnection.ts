const $window = require("exports-loader?window!./bundle.js")
const EventEmitter = $window.CirculatorSDK.EventEmitter
import _ from "underscore"
import authenticationService from "./authenticationService"
import { connectionProvidersConfig, connectionState, disconnectReasons } from "./constants"
import extend from "./extend"
import rootLogger from "./rootLogger"

let WebSocketConnection = function(e) {
  this.applicationAddress = e,
  this.webSocket = null,
  this.handler = null,
  this.url = connectionProvidersConfig.webSocket.discovery,
  this.connectionState = connectionState.disconnected,
  this.disconnectReason = disconnectReasons.initialState,
  this.openDeferred = null,
  this.openTimeout = null
}

WebSocketConnection = extend(WebSocketConnection, EventEmitter)

WebSocketConnection.prototype.open = function(t) {
    let n
    return null == t && (t = connectionProvidersConfig.webSocket.connectionTimeout),
    this.connectionState === connectionState.connected ? (this.emit("open"),
    $window.Q()) : (
      null == this.openDeferred && (this.clearOpenTimeout(),
      this.setOpenTimeout(t),
      n = new Date,
      this.openDeferred = $window.Q.defer(),
      this.connectionState = connectionState.connecting,
      this.webSocket = this.getWebSocket(),
      this.emit("connecting"),
      this.webSocket.onMessage(function(_this) {
          return function(messageEvent) {
              let streamMessage
              return streamMessage = $window.CirculatorSDK.messages.StreamMessage.decode(messageEvent),
                _.indexOf(["connectionReadyReply", "ping"], streamMessage.getMessageType()) > -1 ?
                  (
                    _this.handler ?
                      _this.handler.handleMessage(streamMessage)
                      : null
                  ) : "recipientUnavailableReply" === streamMessage.getMessageType() ?
                    (
                        _this.emit("recipientUnavailableReply", streamMessage)
                    ) : "pong" === streamMessage.getMessageType() ?
                      null :
                      _this.emit("message", messageEvent)
          }
      }(this)),
      this.webSocket.onOpen(function(t) {
          return function() {
              return t.handler = t.createHandler(),
              t.handler.registerOutput("connectionReadyReply", function(e) {
                  let r, a, c
                  return a = new Date,
                  r = a - n,
                  t.connectionState = connectionState.connected,
                  e.end(),
                  null != (c = t.openDeferred) && c.resolve(),
                  t.openDeferred = null,
                  t.clearOpenTimeout(),
                  t.emit("open")
              }),
              t.handler.registerOutput("ping", function(t) {
                  let n
                  return n = (new $window.CirculatorSDK.messages.StreamMessage).set("pong", new $window.CirculatorSDK.messages.Pong).setEnd(!0),
                  t.send(n)
              }),
              t.handler.on("msgReady", function(e) {
                  let n
                  return n = e.encode().toBuffer(),
                  t.write(n)
              })
          }
      }(this)),
      this.webSocket.onError(function(e) { }),
      this.webSocket.onClose(function(e) {
          return function() {
              let t
              e.connectionState !== connectionState.disconnected ? (null != (t = e.openDeferred) && t.reject(),
              e.openDeferred = null,
              e.close(disconnectReasons.terminatedByOther)) : undefined
          }
      }(this))),
      this.openDeferred.promise
  )
}
,
WebSocketConnection.prototype.close = function(e) {
    let t, n
    return this.connectionState = connectionState.disconnected,
    this.disconnectReason = e,
    null != (t = this.webSocket) && t.close(),
    this.clearOpenTimeout(),
    this.webSocket = null,
    null != (n = this.handler) && n.cleanUp(),
    this.handler = null,
    null != this.openDeferred && (this.openDeferred.reject(),
    this.openDeferred = null),
    this.emit("close", this.disconnectReason)
}
,
WebSocketConnection.prototype.write = function(t) {
    let n, r, o, a
    r = $window.Q.defer(),
    n = $window.CirculatorSDK.messages.StreamMessage.decode(t)
    try {
        null != (a = this.webSocket) && a.send(t),
        r.resolve()
    } catch (c) {
        o = c,
        r.reject(o),
        this.close(disconnectReasons.writeError)
    }
    return r.promise
}
,
WebSocketConnection.prototype.getWebSocket = function() {
    const webSocket = new WebSocket(this.url + "?token=" + authenticationService.getToken())
    webSocket.binaryType = "arraybuffer"

    return webSocket
}
,
WebSocketConnection.prototype.createHandler = function() {
    return new $window.CirculatorSDK.StreamMessageHandler({
        myAddress: $window.CirculatorSDK.hexToByteAddress(this.applicationAddress),
        log: rootLogger,
        handlerType: "webSocketConnection",
    })
}
,
WebSocketConnection.prototype.setOpenTimeout = function(e) {
    return this.openTimeout = window.setTimeout(function(e) {
        return function() {
            let t, n, r
            return (null != (t = e.openDeferred) ? null != (n = t.promise) ? n.isPending() : undefined : undefined) && e.connectionState === connectionState.connecting ? (null != (r = e.openDeferred) && r.reject(),
            e.openDeferred = null,
            e.close(disconnectReasons.openTimeout)) : undefined
        }
    }(this), e)
}
,
WebSocketConnection.prototype.clearOpenTimeout = function() {
    return null != this.openTimeout && window.clearTimeout(this.openTimeout),
    this.openTimeout = null
}

export default WebSocketConnection
