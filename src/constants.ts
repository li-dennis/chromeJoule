const csConfig = {
    // debug: {
    //     env: "staging",
    //     appName: "jouleApp",
    //     chefstepsEndpoint: "https://www.chocolateyshatner.com",
    //     webSocketEndpoint: "wss://staging-cc-app-1.chefsteps.com/direct",
    //     forgotPasswordUrl: "https://www.chocolateyshatner.com/password-reset",
    //     segmentWriteKey: "d1iKTmkGittQwXQbBSY7egXumHgmTai4",
    //     facebookAppId: "642634055780525",
    //     guideManifestEndpoints: {
    //         development: "https://www.chocolateyshatner.com/api/v0/content_config/manifest?content_env=development",
    //         staging: "https://www.chocolateyshatner.com/api/v0/content_config/manifest?content_env=staging",
    //         production: "https://www.chocolateyshatner.com/api/v0/content_config/manifest?content_env=production"
    //     }
    // },
    // staging2: {
    //     env: "staging",
    //     appName: "jouleApp",
    //     chefstepsEndpoint: "https://www.vanillanimoy.com",
    //     webSocketEndpoint: "wss://staging-cc-app-1.chefsteps.com/direct",
    //     forgotPasswordUrl: "https://www.vanillanimoy.com/password-reset",
    //     segmentWriteKey: "d1iKTmkGittQwXQbBSY7egXumHgmTai4",
    //     facebookAppId: "642634055780525",
    //     guideManifestEndpoints: {
    //         development: "https://www.vanillanimoy.com/api/v0/content_config/manifest?content_env=development",
    //         staging: "https://www.vanillanimoy.com/api/v0/content_config/manifest?content_env=staging",
    //         production: "https://www.vanillanimoy.com/api/v0/content_config/manifest?content_env=production"
    //     }
    // },
    // localDebug: {
    //     env: "staging",
    //     appName: "jouleApp",
    //     chefstepsEndpoint: "http://localhost:3000",
    //     webSocketEndpoint: "wss://staging-cc-app-1.chefsteps.com/direct",
    //     forgotPasswordUrl: "https://www.chocolateyshatner.com/password-reset",
    //     segmentWriteKey: "d1iKTmkGittQwXQbBSY7egXumHgmTai4",
    //     facebookAppId: "642634055780525",
    //     guideManifestEndpoints: {
    //         development: "http://localhost:3000/api/v0/content_config/manifest?content_env=development",
    //         staging: "http://localhost:3000/api/v0/content_config/manifest?content_env=staging",
    //         beta: "http://localhost:3000/api/v0/content_config/manifest?content_env=beta",
    //         production: "http://localhost:3000/api/v0/content_config/manifest?content_env=production"
    //     }
    // },
    // production: {
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
            production: "https://www.chefsteps.com/api/v0/content_config/manifest?content_env=production",
        },
    }
// }.production

const routingConfig = {
    default: ["bluetooth", "webSocket"],
    preferredRoute: "webSocket",
    fileTransferPreferredRoute: "bluetooth",
    fileTransferInitiationMessage: "startFileTransferRequest",
    fileTransferMessages: ["transferFileBlockRequest"],
    messageTypeRules: {
        startKeyExchangeRequest: ["bluetooth"],
        submitKeyRequest: ["bluetooth"],
        listWifiRequest: ["bluetooth"],
        connectWifiRequest: ["bluetooth"],
        disconnectWifiRequest: ["bluetooth"],
    },
    messagesNotRequiringAuth: ["submitKeyRequest"],
}

const connectionProvidersConfig = {
    bluetooth: {
        type: "bluetooth",
        discovery: {
            streamServiceUUID: "700B4321-9836-4383-A2B2-31A9098D1473",
            manufacturerId: "0159",
        },
        communication: {
            fileCharacteristicUUID: "700B4326-9836-4383-A2B2-31A9098D1473",
            subscribeCharacteristicUUID: "700B4325-9836-4383-A2B2-31A9098D1473",
            readCharacteristicUUID: "700B4323-9836-4383-A2B2-31A9098D1473",
            writeCharacteristicUUID: "700B4322-9836-4383-A2B2-31A9098D1473",
        },
        reconnectBaseTime: 2e4,
        connectionTimeout: 1e4,
        scanTimeout: 4e3,
        submitKeyTimeoutSeconds: 5,
        startKeyExchangeTimeoutSeconds: 35,
    },
    webSocket: {
        type: "webSocket",
        discovery: csConfig.webSocketEndpoint,
        reconnectBaseTime: 2e4,
        connectionTimeout: 1e4,
        pingTimeoutSeconds: 10,
    },
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

const connectionState = {
    disconnected: "DISCONNECTED",
    connected: "CONNECTED",
    connectedAuthorized: "CONNECTED_AUTHORIZED",
    connecting: "CONNECTING",
}

const firmwareUpdateConfig = {
    firmwareUpdatesBasePath: csConfig.chefstepsEndpoint,
    releaseNotesUrl: csConfig.chefstepsEndpoint + "/joule/firmware-release-notes",
    packetsPerConnectionInterval: 2,
    connectionIntervalDelayIos: 60,
    perPacketDelayIos: 0,
    connectionIntervalDelayAndroid: 0,
    transferFileBlockTimeoutSecs: 10,
    transferFileBlockRetryAttempts: 5,
    numGetWiFiDFUStatusRetries: 4,
    getWifiDFUStatusRetryDelaySecs: 8,
    reconnectTimeoutSecs: 60,
    postRebootDelaySecs: 5,
    maximumNumberOfAttempts: 2,
    manualWiFiDFUProgressSecs: 10,
    maximumTimeForWiFiDFUProgressSecs: 240,
    applicationFirmwareRetryCleanupSecs: 10,
    numFailuresBeforeContactSupport: 3,
}

export { routingConfig, csConfig, connectionProvidersConfig, disconnectReasons, connectionState, firmwareUpdateConfig }