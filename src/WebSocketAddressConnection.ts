const $window = require("exports-loader?window!./bundle.js")
import { connectionProvidersConfig, connectionState, disconnectReasons, firmwareUpdateConfig } from "./constants"
import extend from "./extend"
import rootLogger from "./rootLogger"

const moduleName = "WebSocketAddressConnection"
const Connection = $window.CirculatorSDK.Connection

let WebSocketAddressConnection = function(id, circulatorAddress, webSocketConnection) {
    this.id = id,
    this.circulatorAddress = circulatorAddress,
    this.webSocketConnection = webSocketConnection,
    this.type = connectionProvidersConfig.webSocket.type,
    this.reconnectBaseTime = connectionProvidersConfig.webSocket.reconnectBaseTime,
    this.supportsSendingFile = !0,
    this.preferredFileTransferBlockSize = 128,
    this.isAlwaysActive = !0,
    this.connectionState = connectionState.disconnected,
    this.disconnectReason = disconnectReasons.initialState,
    this.onOpenHandler = this.onOpen.bind(this),
    this.onConnectingHandler = this.onConnecting.bind(this),
    this.onMessageHandler = this.onMessage.bind(this),
    this.onCloseHandler = this.onClose.bind(this),
    this.onRecipientUnavailableReplyHandler = this.onRecipientUnavailableReply.bind(this),
    this.onPongHandler = this.onPong.bind(this),
    this.webSocketConnection.on("open", this.onOpenHandler),
    this.webSocketConnection.on("connecting", this.onConnectingHandler),
    this.webSocketConnection.on("message", this.onMessageHandler),
    this.webSocketConnection.on("close", this.onCloseHandler),
    this.webSocketConnection.on("recipientUnavailableReply", this.onRecipientUnavailableReplyHandler),
    this.webSocketConnection.on("pong", this.onPongHandler)
}
WebSocketAddressConnection = extend(WebSocketAddressConnection, Connection),
WebSocketAddressConnection.prototype.open = function(e) {
    return null == e && (e = connectionProvidersConfig.webSocket.connectionTimeout),
    this.webSocketConnection.open(e)
}
,
WebSocketAddressConnection.prototype.startKeyExchange = function() {
    return $window.Q(null)
}
,
WebSocketAddressConnection.prototype.openAndAuthorize = function(connectionTimeout) {
    let circulatorAddress;
    return null == connectionTimeout && (connectionTimeout = connectionProvidersConfig.webSocket.connectionTimeout),
    this.connectionState === connectionState.connectedAuthorized ? (this.emit("authorize"),
    $window.Q()) : (circulatorAddress = this.circulatorAddress,
    this.open(connectionTimeout).then(function(_this) {
        return function() {
            let streamMessage, timeoutOptions
            if (_this.connectionState === connectionState.connectedAuthorized)
                return _this.emit("authorize"),
                $window.Q()
            if (_this.connectionState !== connectionState.connected)
                throw new Error("Invalid connection state during authorize")
            if (null == _this.webSocketConnection.handler)
                throw new Error("Invalid handler")

            return streamMessage = (new $window.CirculatorSDK.messages.StreamMessage).setRecipientAddress($window.CirculatorSDK.hexToByteAddress(circulatorAddress)).set("ping", new $window.CirculatorSDK.messages.Ping),
            timeoutOptions = {
                maxResponses: 1,
                timeoutSecs: connectionProvidersConfig.webSocket.pingTimeoutSeconds,
            },
            _this.webSocketConnection.handler.initiateStreamAndWait(streamMessage, timeoutOptions).then(function(response) {
                let firstMessage, messageType
                if (response.timedOut)
                    throw new Error("Stream response has timed out")
                if (firstMessage = response.messages[0],
                null != firstMessage) {
                    if (messageType = firstMessage.getMessageType(),
                    "pong" === messageType) {
                        if (_this.connectionState === connectionState.disconnected)
                            throw new Error("Connection is closed while receiving pong")
                        return _this.setConnectionState(connectionState.connectedAuthorized),
                        firstMessage
                    }
                    throw new Error("Wrong message type: " + messageType)
                }
                throw new Error("Invalid message.  The stream might have ended.")
            })
        }
    }(this)))
}
,
WebSocketAddressConnection.prototype.close = function(e) {
    return this.disconnectReason = e,
    this.disconnectReason === disconnectReasons.manualReset || this.disconnectReason === disconnectReasons.cleanUp || this.disconnectReason === disconnectReasons.disconnectWifi ? this.webSocketConnection.close(e) : undefined
}
,
WebSocketAddressConnection.prototype.write = function(n) {
    let r, i
    return this.connectionState === connectionState.connected || this.connectionState === connectionState.connectedAuthorized ? this.webSocketConnection.write(n) : (r = $window.CirculatorSDK.messages.StreamMessage.decode(n),
    i = "WebSocketAddressConnection attempt to write message " + r.getMessageType() + " without being connected! connectionState: " + this.connectionState,
    $window.Q.reject(new Error(i)))
}
,
WebSocketAddressConnection.prototype.getFileSender = function(t, n, r, i) {
    return new $window.CirculatorSDK.WebSocketFileSender(t, n, i, rootLogger, {
        blockSize: r,
        transferFileBlockTimeoutSecs: firmwareUpdateConfig.transferFileBlockTimeoutSecs,
        transferFileBlockRetryAttempts: firmwareUpdateConfig.transferFileBlockRetryAttempts,
    })
}
,
WebSocketAddressConnection.prototype.onOpen = function() {
    return this.setConnectionState(connectionState.connected)
}
,
WebSocketAddressConnection.prototype.onConnecting = function() {
    return this.setConnectionState(connectionState.connecting)
}
,
WebSocketAddressConnection.prototype.onMessage = function(t) {
    let n, r
    return n = $window.CirculatorSDK.messages.StreamMessage.decode(t),
    r = n.getSenderAddress().toHex(),
    r === this.circulatorAddress ? this.emit("message", t) : undefined
}
,
WebSocketAddressConnection.prototype.onClose = function(e) {
    return this.disconnectReason = e,
    this.setConnectionState(connectionState.disconnected)
}
,
WebSocketAddressConnection.prototype.onRecipientUnavailableReply = function(e) {
    let n
    return n = e.getRecipientUnavailableReply().getRecipientAddress().toHex(),
    n === this.circulatorAddress ? (this.close(disconnectReasons.unreachableAddress),
    this.setConnectionState(connectionState.disconnected)) : undefined
}
,
WebSocketAddressConnection.prototype.onPong = function(e) {
    let t
    return t = e.getSenderAddress().toHex(),
    t === this.circulatorAddress ? this.webSocketConnection.handler.handleMessage(e) : undefined
}
,
WebSocketAddressConnection.prototype.setConnectionState = function(e) {
    return this.connectionState = e,
    this.connectionState === connectionState.connected ? this.emit("open") : this.connectionState === connectionState.connectedAuthorized ? this.emit("authorize") : this.connectionState === connectionState.connecting ? this.emit("connecting") : this.connectionState === connectionState.disconnected ? this.emit("close", this.disconnectReason) : undefined
}

export default WebSocketAddressConnection