# Chrome Joule - An unofficial chrome extension to control your ChefSteps Joule
[![Chrome Joule ](https://i.imgur.com/ru521YW.png)](https://www.youtube.com/watch?v=goPv_ClIndM "Chrome Joule Video")
## Overview
Click the image above for a youtube video of the extension in action. Pretty straightforward :)

(If you want to humor me and read about the making of this, see
[this](https://medium.com/@_dennisli/reverse-engineering-the-chefsteps-joule-and-making-a-chrome-extension-fa09c78bd87f))

Currently, the extension supports the following:
* Starting manual cook programs (Both the temperature and optionally, the duration)
* Stopping programs
* Input validation (e.g. making sure the temperature is in bounds)
* Live updates (current temperature, preheating, and error messages e.g. bad connection or login issues)

## Installation 
You can download it from the chrome app store
[here](https://chrome.google.com/webstore/detail/chrome-joule/lifggfcoblmpbobfobpfhhjkiempjckn).

## Development
If you’re interested in a blog post I wrote about the development process, see <>

### Build and Install

```
$ npm install
$ npm run watch
```
To install:
Navigate to `chrome://extensions` and make sure you have the developer menu enabled
Load `dist/` as an unpacked extension

Note: This project uses typescript, so I highly recommend using VSCode for development.

### Architecture
ChromeJoule works by accessing `CirculatorSDK`, an internal SDK used by the Joule Android/iOs apps. And since it doesn't support a lot of the more extensive features like recipe programs, getting a basic understanding of how `CirculatorSDK` works is the most of the work required. Using it also gives us a big advantage, because it handles a lot of the messy stuff that comes with websockets like flaky connections/reconnecting, multiple streams, etc.

###  
Fortunately, the apps were developed in javascript, which makes this kind of interoptability and reverse-engineering possible.

If you decompile the android app, there are a few files of interest:
* bundle.js
* chefsteps.js
* base.proto

##### bundle.js
See [`src/bundle.js`](https://github.com/dennisli92/chromeJoule/blob/master/src/bundle.js). This contains a few modules of interest, primarily `CirculatorSDK`, but also some other helper/utility functions. And for whatever reason, although the code was bundled, it wasn't uglified or minified and still has comments. I tried diagramming out some of the major relationships [here](https://i.imgur.com/QFgDqay.png).

Major modules to keep in mind:
* `CirculatorManager` - Entry point to the CirculatorSDK. Most important module
* `CirculatorClient` - Second most important module for us. As the name implies, it's the client for each circulator (Joule). So stuff like managing connections to the Joule, its state, etc.
* `Connection` - An abstraction of whatever connection you're using. e.g. bluetooth, websockets, (or if you wish, I'm sure blokchain too)
* `Stream` and StreamHandler - Handles the sending/receiving of messages across multiple connections

##### chefsteps.js
I haven't included it in the repo here, in part because it's all uglified code. But it's largely dealing with writing the app in angular and implementation level details of some of the abstract classes (e.g. `Connection`) in `bundle.js`. This chrome extension is modeled of a lot of the code in here.

##### base.proto
See [`base.proto`](https://github.com/dennisli92/chromeJoule/blob/master/dist/protobuf-files/base.proto)
Joule is a bit trickier to work with than a simple REST API. Instead, it uses websockets, and sends protobuffer binaries in each websocket body. Each message is encoded as a `StreamMessage` which contains some metadata like `senderAddress`, `recipientAddress`, `streamHandler`

#### How ChromeJoule Works
So, the way ChromeJoule works is it implements the bare minimum to get the CirculatorSDK running. It creates a wrapper around `CirculatorManager` with [`WebSocketsCirculatorManager`](https://github.com/dennisli92/chromeJoule/blob/master/src/WebSocketsCirculatorManager.ts). And in order to do that, we need to create our own custom [`WebSocketConnectionProvider`](https://github.com/dennisli92/chromeJoule/blob/master/src/WebSocketConnectionProvider.ts), [`WebSocketConnection`](https://github.com/dennisli92/chromeJoule/blob/master/src/WebSocketConnection.ts) and [`WebSocketAddressConnection`](https://github.com/dennisli92/chromeJoule/blob/master/src/WebSocketAddressConnection.ts).

After that, it's a pretty standard react app. It's pretty simple, so we don't use redux or any fancy state management here. See [CirculatorManagerView](https://github.com/dennisli92/chromeJoule/blob/master/src/CirculatorManagerView.tsx). There are a few hacks in place, though.

## Missing features:
* Pairing with new Joules
* Multiple Joule support
* Recipe Walkthroughs

Note: These features, I believe, are all supported in `CirculatorSDK`. So adding them is likely just an exercise in implementing a few abstract classes. 

# Other: 
The 🔥 icon comes from [EmojiOne 2.1](https://github.com/emojione/emojione) :)
