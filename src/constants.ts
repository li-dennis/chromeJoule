// see chefsteps.js:513 for where constants begin.

const csConfig = {
    debug: {
        env: "staging",
        appName: "jouleApp",
        chefstepsEndpoint: "https://www.chocolateyshatner.com",
        webSocketEndpoint: "wss://staging-cc-app-1.chefsteps.com/direct",
        forgotPasswordUrl: "https://www.chocolateyshatner.com/password-reset",
        segmentWriteKey: "d1iKTmkGittQwXQbBSY7egXumHgmTai4",
        facebookAppId: "642634055780525",
        guideManifestEndpoints: {
            development: "https://www.chocolateyshatner.com/api/v0/content_config/manifest?content_env=development",
            staging: "https://www.chocolateyshatner.com/api/v0/content_config/manifest?content_env=staging",
            production: "https://www.chocolateyshatner.com/api/v0/content_config/manifest?content_env=production"
        }
    },
    staging2: {
        env: "staging",
        appName: "jouleApp",
        chefstepsEndpoint: "https://www.vanillanimoy.com",
        webSocketEndpoint: "wss://staging-cc-app-1.chefsteps.com/direct",
        forgotPasswordUrl: "https://www.vanillanimoy.com/password-reset",
        segmentWriteKey: "d1iKTmkGittQwXQbBSY7egXumHgmTai4",
        facebookAppId: "642634055780525",
        guideManifestEndpoints: {
            development: "https://www.vanillanimoy.com/api/v0/content_config/manifest?content_env=development",
            staging: "https://www.vanillanimoy.com/api/v0/content_config/manifest?content_env=staging",
            production: "https://www.vanillanimoy.com/api/v0/content_config/manifest?content_env=production"
        }
    },
    localDebug: {
        env: "staging",
        appName: "jouleApp",
        chefstepsEndpoint: "http://localhost:3000",
        webSocketEndpoint: "wss://staging-cc-app-1.chefsteps.com/direct",
        forgotPasswordUrl: "https://www.chocolateyshatner.com/password-reset",
        segmentWriteKey: "d1iKTmkGittQwXQbBSY7egXumHgmTai4",
        facebookAppId: "642634055780525",
        guideManifestEndpoints: {
            development: "http://localhost:3000/api/v0/content_config/manifest?content_env=development",
            staging: "http://localhost:3000/api/v0/content_config/manifest?content_env=staging",
            beta: "http://localhost:3000/api/v0/content_config/manifest?content_env=beta",
            production: "http://localhost:3000/api/v0/content_config/manifest?content_env=production"
        }
    },
    production: {
        env: "production",
        appName: "jouleApp",
        chefstepsEndpoint: "https://www.chefsteps.com",
        webSocketEndpoint: "wss://production-cc-app-1.chefsteps.com/direct",
        forgotPasswordUrl: "https://www.chefsteps.com/password-reset",
        segmentWriteKey: "CohfhzCATDidS52kLILe3ZZ3mVYYgzsP",
        facebookAppId: "380147598730003",
        guideManifestEndpoints: {
            development: "https://www.chefsteps.com/api/v0/content_config/manifest?content_env=development",
            staging: "https://www.chefsteps.com/api/v0/content_config/manifest?content_env=staging",
            production: "https://www.chefsteps.com/api/v0/content_config/manifest?content_env=production"
        },
    },
}

const circulatorConnectionStates = {
  unpaired: "unpaired",
  connected: "connected",
  disconnected: "disconnected",
  connecting: "connecting",
  jouleFound: "jouleFound",
}

const disconnectReasons = {
  initialState: "INITIAL_STATE",
  terminatedByOther: "TERMINATED_BY_OTHER",
  unreachableAddress: "UNREACHABLE_ADDRESS",
  manualReset: "MANUAL_RESET",
  inactive: "INACTIVE",
  cleanUp: "CLEAN_UP",
  writeError: "WRITE_ERROR",
  readError: "READ_ERROR",
  openTimeout: "OPEN_TIMEOUT",
  noInternet: "NO_INTERNET",
  subscribeError: "SUBSCRIBE_ERROR",
  connectError: "CONNECT_ERROR",
  authorizeError: "AUTHORIZE_ERROR",
  startKeyExchangeError: "START_KEY_EXCHANGE_ERROR",
  deviceAddressNotFound: "DEVICE_ADDRESS_NOT_FOUND",
  deviceNotFound: "DEVICE_NOT_FOUND",
  deviceAlreadyConnected: "DEVICE_ALREADY_CONNECTED",
  gattFailure: "GATT_FAILURE",
  powerError: "POWER_ERROR",
  missingAddress: "MISSING_ADDRESS",
  disconnectWifi: "DISCONNECT_WIFI",
  pairingFail: "PAIRING_FAIL",
}

const errorTypes = {
  wifiConnectionError: "wifiConnectionError",
  pairingError: "pairingError",
  bluetoothOff: "bluetoothOff",
  bluetoothPowerError: "bluetoothPowerError",
  bluetoothGenericDisconnect: "bluetoothGenericDisconnect",
  bluetoothRestartError: "bluetoothRestartError",
  bluetoothGattFailure: "bluetoothGattFailure",
  bluetoothCouldNotFindCirculator: "bluetoothCouldNotFindCirculator",
  bluetoothFoundOtherCirculators: "bluetoothFoundOtherCirculators",
  bluetoothCirculatorAlreadyConnected: "bluetoothCirculatorAlreadyConnected",
  wifiNoInternet: "wifiNoInternet",
  wifiNonOwner: "wifiNonOwner",
  wifiFailToGetOwner: "wifiFailToGetOwner",
  wifiFailToGetStatus: "wifiFailToGetStatus",
  wifiUnavailableNeedBluetooth: "wifiUnavailableNeedBluetooth",
  wifiCloudConnectionError: "wifiCloudConnectionError",
  wifiWrongPasswordError: "wifiWrongPasswordError",
  wifiNoApFoundError: "wifiNoApFoundError",
  wifiConnectingError: "wifiConnectingError",
  wifiConnectFailError: "wifiConnectFailError",
  wifiUnexpectedStatus: "wifiUnexpectedStatus",
  webSocketRestartError: "webSocketRestartError",
  webSocketUnreachableAddress: "webSocketUnreachableAddress",
}

const connectionProvidersConfig =  {
    bluetooth: {
        type: "bluetooth",
        discovery: {
            streamServiceUUID: "700B4321-9836-4383-A2B2-31A9098D1473",
            manufacturerId: "0159"
        },
        communication: {
            fileCharacteristicUUID: "700B4326-9836-4383-A2B2-31A9098D1473",
            subscribeCharacteristicUUID: "700B4325-9836-4383-A2B2-31A9098D1473",
            readCharacteristicUUID: "700B4323-9836-4383-A2B2-31A9098D1473",
            writeCharacteristicUUID: "700B4322-9836-4383-A2B2-31A9098D1473"
        },
        reconnectBaseTime: 2e4,
        connectionTimeout: 1e4,
        scanTimeout: 4e3,
        submitKeyTimeoutSeconds: 5,
        startKeyExchangeTimeoutSeconds: 35
    },
    webSocket: {
        type: "webSocket",
        discovery: csConfig.production.webSocketEndpoint,
        reconnectBaseTime: 2e4,
        connectionTimeout: 1e4,
        pingTimeoutSeconds: 10
    },
}

export { csConfig, circulatorConnectionStates, disconnectReasons, errorTypes, connectionProvidersConfig }