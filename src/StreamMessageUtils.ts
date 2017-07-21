import { StreamMessage } from "./protobuf-files/base.js"

const StreamMessageUtils = {
  decode: (buffer) => {
    return StreamMessage.decode(new Uint8Array(buffer))
  },

  encode: (streamMessage) => {
    return StreamMessage.encode(streamMessage).finish().buffer
  },

  getMessageType: (streamMessage) => {
    return streamMessage.contents
  },

  toHex: (uint8Array) => {
    return Buffer.from(uint8Array).toString("hex")
  },

  getSenderAddress: (streamMessage) => {
    return this.toHex(streamMessage.senderAddress)
  },

  getRecipientAddress: (streamMessage) => {
    return this.toHex(streamMessage.recipientAddress)
  },
}

export default StreamMessageUtils