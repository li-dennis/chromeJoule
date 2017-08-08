const { CirculatorSDK, CSApiClient } = require("exports-loader?window!./bundle.js")
import * as _ from "underscore"
import authenticationService from "./authenticationService"
import CirculatorProgram from "./CirculatorProgram"
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

  private cookHistoryApi: any

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
        lastAccessedCirculator.dataObserver.start().progress(() => {
          // debugger
        })
        this.updateCurrentCirculatorClient(lastAccessedCirculator)
        // cacheService.set("usageHistory", "hasEverPaired", !0))
      } else {
        const jouleFound = this.circulatorConnectionState === circulatorConnectionStates.jouleFound
        this.setCirculatorConnectionState(jouleFound ? jouleFound : circulatorConnectionStates.unpaired)
      }
    })
  }

  public async startProgram(circulatorProgramOpt?: CirculatorProgram) {
    const sampleProgram = {
        createdAt: (new Date()).getTime(),
        program: {
            id: "2l8bBpLZx6y6YK0si8Ias6",
            setPoint: 60,
            holdingTemperature: 60,
            programType: "AUTOMATIC",
            guide: "2nRaLt8kROgASYSOO8mkUw",
            cookTime: 57600,
            programMetadata: {
                guideId: "2nRaLt8kROgASYSOO8mkUw",
                programId: "2l8bBpLZx6y6YK0si8Ias6",
                timerId: "3JboTgZjYAqmKomWa4Gwg0",
                cookId: "477e88699d664b139ba4433898ee85ac",
            },
        },
    }

    const circulatorProgram = new CirculatorProgram(sampleProgram.program)

    this.currentCirculatorClient.startProgram(circulatorProgram)

    this.cookHistoryApi.create(circulatorProgram.asApiPersistable())
  }

  public async run(){
    await this.initiateCirculatorManager()
    await this.circulatorScan()
    await this.findLastAccessedCirculator()
    await this.startProgram()
  }
}

export default WebSocketsCirculatorManager
