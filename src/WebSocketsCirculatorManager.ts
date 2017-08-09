const { CirculatorSDK, CSApiClient } = require("exports-loader?window!./bundle.js")
import * as _ from "underscore"
import authenticationService from "./authenticationService"
import CirculatorProgram from "./CirculatorProgram"
import { appConfig, circulatorConnectionStates, csConfig, routingConfig } from "./constants"
import rootLogger from "./rootLogger"
import WebSocketConnectionProvider from "./WebSocketConnectionProvider"

class WebSocketsCirculatorManager {
  public currentCirculatorClient: any
  public sdkCirculatorManager: any

  private userToken: string
  private scanTimer = null
  private circulatorConnectionState: any
  private cachedFindAllCirculators
  private cookHistoryApi: any

  public initiateCirculatorManager(userInfo) {
    this.userToken = userInfo.token

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

    this.cookHistoryApi = new CSApiClient.CookHistoryApi(csConfig.chefstepsEndpoint, (() => this.userToken), rootLogger)
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

    return this.findAllCirculators(true).then((n) => {
      const lastAccessedCirculator = this.sdkCirculatorManager.findLastAccessedCirculator(n)
      if (lastAccessedCirculator) {
        lastAccessedCirculator.dataObserver.start()
        this.updateCurrentCirculatorClient(lastAccessedCirculator)
      } else {
        const jouleFound = this.circulatorConnectionState === circulatorConnectionStates.jouleFound
        this.setCirculatorConnectionState(jouleFound ? jouleFound : circulatorConnectionStates.unpaired)
      }
    })
  }

  public async startProgram(program: {setPoint: number, cookTime?: number, programType?: string, programMetadata: any}) {
    const circulatorProgram = new CirculatorProgram(program)
    this.currentCirculatorClient.startProgram(circulatorProgram)
    this.cookHistoryApi.create(circulatorProgram.asApiPersistable())
  }

  public async stopProgram() {
    this.currentCirculatorClient.stopProgram()
  }
}

export default WebSocketsCirculatorManager
