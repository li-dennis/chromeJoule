import { StreamMessage } from "./protobuf-files/base.js"

// see bundle.js:43204
class StreamMessageHandler {

  public static decode(data) {
    return StreamMessage.decode(new Uint8Array(data))
  }
}

export default StreamMessageHandler