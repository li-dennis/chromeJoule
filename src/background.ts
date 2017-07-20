import CSWebSocket from "./CSWebSocket"

// see bundle.js:43895
// const hexToByteAddress = (hexAddress) => {
//   if (hexAddress.length % 2 !== 0) {
//     throw new Error("Not a valid address, must be multiple of 2: " + hexAddress);
//   }
//   if (hexAddress.length > 18) {
//     throw new Error("Address is too long: " + hexAddress);
//   }

//   return hexToBytes(hexAddress);
// }
const webSocketConnection = new CSWebSocket()

webSocketConnection.connect()