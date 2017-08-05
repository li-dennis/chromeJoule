import * as ByteBuffer from "bytebuffer"
const { CirculatorSDK } = require("exports-loader?window!./bundle.js")
import * as _ from "underscore"
import authenticationService from "./authenticationService"
import { appConfig, circulatorConnectionStates, csConfig, routingConfig } from "./constants"
import rootLogger from "./rootLogger"
import WebSocketConnectionProvider from "./WebSocketConnectionProvider"

class WebSocketsCirculatorManager {
  private headers: any = { "Content-Type": "application/x-www-form-urlencoded" }

  private userToken: string
  private sdkCirculatorManager: any
  private scanTimer = null
  private circulatorClient = null
  private circulatorConnectionState: any
  private currentCirculatorClient: any
  private cachedFindAllCirculators

  public async initiateCirculatorManager() {
    this.userToken = await authenticationService.initiate()

    const applicationAddressHex = authenticationService.getCallerAddress(this.userToken)
    const connectionProviders = [new WebSocketConnectionProvider(applicationAddressHex)]

    this.sdkCirculatorManager = new CirculatorSDK.CirculatorManager({
      routingConfig,
      connectionProviders,
      logger: rootLogger,
      callerAddress: applicationAddressHex,
      localCirculatorStorage: null,
      apiConfig: csConfig,
      userAuthenticationToken: this.userToken,
    })
  }

  public resetScanTimer() {
      this.scanTimer && window.clearTimeout(this.scanTimer)
      this.scanTimer = null
  }

  public setCirculatorConnectionState(e) {
    this.circulatorConnectionState = e
  }

  public updateCurrentCirculatorClient(newClient) {
    this.currentCirculatorClient = newClient
    this.currentCirculatorClient.setActive(!0)
  }

  public async circulatorScan() {
    this.resetScanTimer()
    return this.sdkCirculatorManager.discoverCirculators().then((e) => {
      if (_.isEmpty(e) && !this.currentCirculatorClient) {
          const scanInterval = appConfig.scanIntervalMilliseconds
          this.scanTimer = window.setTimeout(() => {
              return null == this.currentCirculatorClient ? this.circulatorScan() : undefined
          }, scanInterval)
      } else if (!this.currentCirculatorClient) {
        this.setCirculatorConnectionState(circulatorConnectionStates.jouleFound)
      }
    }).progress(function(newClient) {
        return newClient.once("paired", function(e) {
            return this.updateCurrentCirculatorClient(newClient)
        })
    })
  }

  public async findAllCirculators(shouldRefresh) {
    if (shouldRefresh || !this.cachedFindAllCirculators) {
      return this.sdkCirculatorManager.findAllCirculators().then((e) => {
          this.cachedFindAllCirculators = e
          return this.cachedFindAllCirculators
      })
    } else {
      this.cachedFindAllCirculators = this.sdkCirculatorManager.knownCirculators
      return this.cachedFindAllCirculators
    }
  }

  public async findLastAccessedCirculator() {
    this.setCirculatorConnectionState(circulatorConnectionStates.connecting)

    this.findAllCirculators(true).then((n) => {
      const lastAccessedCirculator = this.sdkCirculatorManager.findLastAccessedCirculator(n)
      if (lastAccessedCirculator) {
        this.updateCurrentCirculatorClient(lastAccessedCirculator)
        // cacheService.set("usageHistory", "hasEverPaired", !0))
      } else {
        const jouleFound = this.circulatorConnectionState === circulatorConnectionStates.jouleFound
        this.setCirculatorConnectionState(jouleFound ? jouleFound : circulatorConnectionStates.unpaired)
      }
    })
  }

public async run(){
    await this.initiateCirculatorManager()
    await this.circulatorScan()
    await this.findLastAccessedCirculator()
  }
}

export default WebSocketsCirculatorManager
