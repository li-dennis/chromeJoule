import { StreamMessage } from "./protobuf-files/base.js"
import StreamMessageHandler from "./StreamMessageHandler"

class Stream {
  private initMessage: StreamMessage = null
  private locallyInitiated: boolean = true
  private remoteAddress: Uint8Array
  private localAddress: Uint8Array
  private handle: number = 0

  constructor(initMessage, locallyInitiated) {
    this.locallyInitiated = locallyInitiated
    this.initMessage = initMessage
    this.handle = initMessage.handle

    if (this.locallyInitiated) {
      this.remoteAddress = initMessage.recipientAddress
      this.localAddress = initMessage.senderAddress
    } else {
      this.localAddress = initMessage.recipientAddress
      this.remoteAddress = initMessage.senderAddress
    }
  }

  get defaultStreamMessage() {
    return {
      handle: this.handle,
      recipientAddress: this.remoteAddress,
      senderAddress: this.localAddress,
    }
  }

  public end() {
    const streamMessage = new StreamMessage({
      ...this.defaultStreamMessage,
      end: true,
    })

    console.log("Ending ", streamMessage)
    this.cleanUp()
  }

  public send(streamMessageProps = {}) {
    const streamMessage = new StreamMessage({
      ...this.defaultStreamMessage,
      ...streamMessageProps,
    })

    console.log("Sending ", streamMessage)
    if (streamMessage.end) {
      return this.cleanUp()
    }
  }

  public start() {
    console.log("Initiating Stream " + (this.initMessage))
  }

  public cleanUp() { }
}

export default Stream
