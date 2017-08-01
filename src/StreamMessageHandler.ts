import * as ByteBuffer from "bytebuffer"
import { IStreamMessage, ListOperationsReply, ListStreamsReply, StreamMessage } from "./protobuf-files/base.js"
import Stream from "./Streams"

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
  private lruSize = 128
  private maxHandle: number
  private randFunc = Math.random
  private isEven = false
  private recentlyUsed = []
  private MAX_ITERATIONS = 256

  constructor(even = false, maxHandle = 999999) {
    this.maxHandle = maxHandle - this.lruSize * 2
    if (this.maxHandle / this.lruSize < 10) {
      throw new Error("Pool size too small, choose a bigger maxHandle: " + maxHandle)
    }

    this.isEven = even
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
  private streams = {}
  private handlePools = {}
  private managedListeners = []
  private availableOutputs = {}
  private logPrefix = ""
  private recentlyClosed = new LRUCache(64)
  private myAddress: ByteBuffer

  constructor(myAddress: ByteBuffer) {
    this.myAddress = myAddress

    this.registerOutput("listStreamsRequest", (stream) => {
      let handle, msg, streams, tstream
      streams = this.streamsFor(stream.remoteAddress)

      Object.keys(streams).map((handle) => {
        tstream = streams[handle]
        tstream.send({ listStreamsReply: new ListStreamsReply() })
      })

      return stream.end()
    })

    this.registerOutput("listOperationsRequest", (stream) => {
      Object.keys(this.availableOutputs).map((key) => {
        const listOperationsReply = new ListOperationsReply({name: key})
        stream.send({ listOperationsReply })
      })
      return stream.end()
    })
  }

  public openStreamcount() {
    let count = 0;

    Object.keys(this.streams).map((remoteHexAddress) => {
      const streams = this.streams[remoteHexAddress]
      count += Object.keys(streams).length
    })
    return count
  }

  public send() {

  }

  public handleEncodedMessage() {

  }

  public handleMessage() {

  }

  public registerOutput(type: string, func: ((Stream) => {})) {
    return this.availableOutputs[type] = func
  }

  public getNewHandle() {

  }

  public handlePoolFor() {

  }

  public initiateStream() {

  }

  public initiateStreamAndWait() {

  }

  public streamsFor(remoteAddress: ByteBuffer) {
    const remoteHexAddress = remoteAddress.toHex()
    if (this.streams[remoteHexAddress] === void 0) {
      this.streams[remoteHexAddress] = {}
    }
    return this.streams[remoteHexAddress]
  }


}

export default StreamMessageHandler