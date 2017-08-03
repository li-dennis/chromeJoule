import * as ByteBuffer from "bytebuffer"
import WebSocketAddressConnection from "./AddressConnection"
import { IStreamMessage, ListOperationsReply, ListStreamsReply, StreamMessage } from "./protobuf-files/base.js"
import Stream from "./Streams"
import WebSocketConnection from "./WebSocketConnection"

// from message-handler.js
class LRUCache {
  private size: number
  private items: object
  private keys: string[]

  constructor(size) {
    this.size = size
    this.items = {}
    this.keys = []
  }

  public put(key, item) {
    let k
    if (this.keys.length >= this.size) {
      k = this.keys.shift()
      delete this.items[k]
    }
    this.keys.push(key)
    return this.items[key] = item
  }

  public get(key) {
    return this.items[key]
  }
}

// From message-handler.js
class HandlePool {
  private recipientAddress: ByteBuffer
  private lruSize = 128
  private maxHandle: number
  private randFunc = Math.random
  private isEven = false
  private recentlyUsed = []
  private MAX_ITERATIONS = 256

  constructor(even = false, maxHandle = 999999, recipientAddress?) {
    this.maxHandle = maxHandle - this.lruSize * 2
    if (this.maxHandle / this.lruSize < 10) {
      throw new Error("Pool size too small, choose a bigger maxHandle: " + maxHandle)
    }

    this.isEven = even
    this.recipientAddress = recipientAddress
  }

  public isInPool(h) {
    return (this.isEven && h % 2 === 0) || (!this.isEven && h % 2 === 1)
  };

  public getHandle() {
    let h, i
    h = Math.round(this.randFunc() * this.maxHandle)
    if (!this.isInPool(h)) {
      h += 1
    }
    i = 0
    while (this.recentlyUsed.indexOf(h) !== -1) {
      h += 2
      if (i > this.MAX_ITERATIONS) {
        throw new Error(`Unexpected - we could not get a message handle in ${this.MAX_ITERATIONS} iterations`)
      }
      i += 1
    }
    if (this.recentlyUsed.length >= this.lruSize) {
      this.recentlyUsed.shift()
    }
    this.recentlyUsed.push(h)
    return h
  }

}

class StreamMessageHandler {
  private stream: Stream
  private myAddress: ByteBuffer
  private handlePool: HandlePool

  // Since we are not an event driven model, the streams control the connections. In the chefsteps version, this dependency is reversed.
  private webSocketAddressConnection: WebSocketAddressConnection
  private webSocketConnection: WebSocketConnection

  // Use only one handlePool instead of allowing for multiple devices.
  constructor(myAddress: ByteBuffer, userToken: string) {
    this.myAddress = myAddress
    this.webSocketConnection = new WebSocketConnection(myAddress, userToken)
  }

  public async initiateStream(streamMessage: StreamMessage) {
    this.webSocketAddressConnection = new WebSocketAddressConnection(streamMessage.senderAddress, this.webSocketConnection)
    await this.webSocketAddressConnection.openAndAuthorizee()

    const isEven = streamMessage.recipientAddress > this.myAddress.toHex()
    this.handlePool = new HandlePool(isEven)

    const handle = this.handlePool.getHandle()
    streamMessage.handle = handle

    this.stream = new Stream(streamMessage, true)
    this.send(streamMessage)
    this.stream.start()
  }

  public send(message: StreamMessage) {
    message.senderAddress = this.myAddress
    this.webSocketAddressConnection.write(message)
  }

  public handleEncodedMessage(encodedMsg: Uint8Array) {
    return this.handleMessage(StreamMessage.decode(encodedMsg))
  }

  public handleMessage(streamMessage: StreamMessage) {
    // handle message logic goes here
  }

  public initiateStreamAndWait(initMessage: StreamMessage) {
    this.initiateStream(initMessage)
  }
}

export default StreamMessageHandler