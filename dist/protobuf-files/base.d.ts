import * as $protobuf from "protobufjs";

/** Properties of a StreamMessage. */
export interface IStreamMessage {

    /** StreamMessage handle */
    handle: number;

    /** StreamMessage end */
    end?: boolean;

    /** StreamMessage senderAddress */
    senderAddress: Uint8Array;

    /** StreamMessage recipientAddress */
    recipientAddress: Uint8Array;

    /** StreamMessage noop */
    noop?: INoop;

    /** StreamMessage unhandledMessageReply */
    unhandledMessageReply?: IUnhandledMessageReply;

    /** StreamMessage connectionReadyReply */
    connectionReadyReply?: IConnectionReadyReply;

    /** StreamMessage recipientUnavailableReply */
    recipientUnavailableReply?: IRecipientUnavailableReply;

    /** StreamMessage ping */
    ping?: IPing;

    /** StreamMessage pong */
    pong?: IPong;

    /** StreamMessage listStreamsRequest */
    listStreamsRequest?: IListStreamsRequest;

    /** StreamMessage listStreamsReply */
    listStreamsReply?: IListStreamsReply;

    /** StreamMessage listOperationsRequest */
    listOperationsRequest?: IListOperationsRequest;

    /** StreamMessage listOperationsReply */
    listOperationsReply?: IListOperationsReply;

    /** StreamMessage startProgramRequest */
    startProgramRequest?: IStartProgramRequest;

    /** StreamMessage startProgramReply */
    startProgramReply?: IStartProgramReply;

    /** StreamMessage stopCirculatorRequest */
    stopCirculatorRequest?: IStopCirculatorRequest;

    /** StreamMessage stopCirculatorReply */
    stopCirculatorReply?: IStopCirculatorReply;

    /** StreamMessage dropFoodRequest */
    dropFoodRequest?: IDropFoodRequest;

    /** StreamMessage dropFoodReply */
    dropFoodReply?: IDropFoodReply;

    /** StreamMessage beginLiveFeed */
    beginLiveFeed?: IBeginLiveFeed;

    /** StreamMessage beginLiveFeedReply */
    beginLiveFeedReply?: IBeginLiveFeedReply;

    /** StreamMessage keepAlive */
    keepAlive?: IKeepAlive;

    /** StreamMessage retransmitFeedRequest */
    retransmitFeedRequest?: IRetransmitFeedRequest;

    /** StreamMessage retransmitFeedReply */
    retransmitFeedReply?: IRetransmitFeedReply;

    /** StreamMessage circulatorDataPoint */
    circulatorDataPoint?: ICirculatorDataPoint;

    /** StreamMessage debugMessage */
    debugMessage?: IDebugMessage;

    /** StreamMessage listRecentEventsRequest */
    listRecentEventsRequest?: IListRecentEventsRequest;

    /** StreamMessage listRecentEventsReply */
    listRecentEventsReply?: IListRecentEventsReply;

    /** StreamMessage describeFeedRequest */
    describeFeedRequest?: IDescribeFeedRequest;

    /** StreamMessage describeFeedReply */
    describeFeedReply?: IDescribeFeedReply;

    /** StreamMessage listFeedsRequest */
    listFeedsRequest?: IListFeedsRequest;

    /** StreamMessage listFeedsReply */
    listFeedsReply?: IListFeedsReply;

    /** StreamMessage clearErrorRequest */
    clearErrorRequest?: IClearErrorRequest;

    /** StreamMessage clearErrorReply */
    clearErrorReply?: IClearErrorReply;

    /** StreamMessage listWifiRequest */
    listWifiRequest?: IListWifiRequest;

    /** StreamMessage listWifiReply */
    listWifiReply?: IListWifiReply;

    /** StreamMessage connectWifiRequest */
    connectWifiRequest?: IConnectWifiRequest;

    /** StreamMessage connectWifiReply */
    connectWifiReply?: IConnectWifiReply;

    /** StreamMessage listWifiProfileRequest */
    listWifiProfileRequest?: IListWifiProfileRequest;

    /** StreamMessage listWifiProfileReply */
    listWifiProfileReply?: IListWifiProfileReply;

    /** StreamMessage forgetWifiProfileRequest */
    forgetWifiProfileRequest?: IForgetWifiProfileRequest;

    /** StreamMessage forgetWifiProfileReply */
    forgetWifiProfileReply?: IForgetWifiProfileReply;

    /** StreamMessage disconnectWifiRequest */
    disconnectWifiRequest?: IDisconnectWifiRequest;

    /** StreamMessage disconnectWifiReply */
    disconnectWifiReply?: IDisconnectWifiReply;

    /** StreamMessage enterBootModeRequest */
    enterBootModeRequest?: IEnterBootModeRequest;

    /** StreamMessage enterBootModeReply */
    enterBootModeReply?: IEnterBootModeReply;

    /** StreamMessage startFileTransferRequest */
    startFileTransferRequest?: IStartFileTransferRequest;

    /** StreamMessage startFileTransferReply */
    startFileTransferReply?: IStartFileTransferReply;

    /** StreamMessage transferFileBlockRequest */
    transferFileBlockRequest?: ITransferFileBlockRequest;

    /** StreamMessage transferFileBlockReply */
    transferFileBlockReply?: ITransferFileBlockReply;

    /** StreamMessage transferFileComplete */
    transferFileComplete?: ITransferFileComplete;

    /** StreamMessage startFileReceiveRequest */
    startFileReceiveRequest?: IStartFileReceiveRequest;

    /** StreamMessage startFileReceiveReply */
    startFileReceiveReply?: IStartFileReceiveReply;

    /** StreamMessage startKeyExchangeRequest */
    startKeyExchangeRequest?: IStartKeyExchangeRequest;

    /** StreamMessage startKeyExchangeReply */
    startKeyExchangeReply?: IStartKeyExchangeReply;

    /** StreamMessage cancelKeyExchangeRequest */
    cancelKeyExchangeRequest?: ICancelKeyExchangeRequest;

    /** StreamMessage cancelKeyExchangeReply */
    cancelKeyExchangeReply?: ICancelKeyExchangeReply;

    /** StreamMessage submitKeyRequest */
    submitKeyRequest?: ISubmitKeyRequest;

    /** StreamMessage submitKeyReply */
    submitKeyReply?: ISubmitKeyReply;

    /** StreamMessage submitBearerAuthTokenRequest */
    submitBearerAuthTokenRequest?: ISubmitBearerAuthTokenRequest;

    /** StreamMessage submitBearerAuthTokenReply */
    submitBearerAuthTokenReply?: ISubmitBearerAuthTokenReply;

    /** StreamMessage predictionUpdate */
    predictionUpdate?: IPredictionUpdate;

    /** StreamMessage renameCirculatorRequest */
    renameCirculatorRequest?: IRenameCirculatorRequest;

    /** StreamMessage renameCirculatorReply */
    renameCirculatorReply?: IRenameCirculatorReply;

    /** StreamMessage identifyCirculatorRequest */
    identifyCirculatorRequest?: IIdentifyCirculatorRequest;

    /** StreamMessage identifyCirculatorReply */
    identifyCirculatorReply?: IIdentifyCirculatorReply;

    /** StreamMessage setMessagingAddressRequest */
    setMessagingAddressRequest?: ISetMessagingAddressRequest;

    /** StreamMessage setMessagingAddressReply */
    setMessagingAddressReply?: ISetMessagingAddressReply;

    /** StreamMessage displayLedRequest */
    displayLedRequest?: IDisplayLedRequest;

    /** StreamMessage displayLedReply */
    displayLedReply?: IDisplayLedReply;

    /** StreamMessage wifiDFUStatusRequest */
    wifiDFUStatusRequest?: IWifiDFUStatusRequest;

    /** StreamMessage wifiDFUStatusReply */
    wifiDFUStatusReply?: IWifiDFUStatusReply;

    /** StreamMessage wifiDFUSetFirmware */
    wifiDFUSetFirmware?: IWifiDFUSetFirmware;

    /** StreamMessage wifiDFUDownloadTFTPRequest */
    wifiDFUDownloadTFTPRequest?: IWifiDFUDownloadTFTPRequest;

    /** StreamMessage wifiDFUDownloadTFTPResponse */
    wifiDFUDownloadTFTPResponse?: IWifiDFUDownloadTFTPResponse;

    /** StreamMessage getLimitsRequest */
    getLimitsRequest?: IGetLimitsRequest;

    /** StreamMessage getLimitsReply */
    getLimitsReply?: IGetLimitsReply;

    /** StreamMessage factoryResetRequest */
    factoryResetRequest?: IFactoryResetRequest;

    /** StreamMessage factoryResetReply */
    factoryResetReply?: IFactoryResetReply;

    /** StreamMessage deviceRestartRequest */
    deviceRestartRequest?: IDeviceRestartRequest;

    /** StreamMessage deviceRestartReply */
    deviceRestartReply?: IDeviceRestartReply;

    /** StreamMessage testResetRequest */
    testResetRequest?: ITestResetRequest;

    /** StreamMessage testResetReply */
    testResetReply?: ITestResetReply;

    /** StreamMessage forgetDevicePairingRequest */
    forgetDevicePairingRequest?: IForgetDevicePairingRequest;

    /** StreamMessage forgetDevicePairingReply */
    forgetDevicePairingReply?: IForgetDevicePairingReply;

    /** StreamMessage setSimulatorRequest */
    setSimulatorRequest?: ISetSimulatorRequest;

    /** StreamMessage setSimulatorReply */
    setSimulatorReply?: ISetSimulatorReply;

    /** StreamMessage getSimulatorRequest */
    getSimulatorRequest?: IGetSimulatorRequest;

    /** StreamMessage getSimulatorReply */
    getSimulatorReply?: IGetSimulatorReply;

    /** StreamMessage setHardwareCoeffsRequest */
    setHardwareCoeffsRequest?: ISetHardwareCoeffsRequest;

    /** StreamMessage setHardwareCoeffsReply */
    setHardwareCoeffsReply?: ISetHardwareCoeffsReply;

    /** StreamMessage getHardwareCoeffsRequest */
    getHardwareCoeffsRequest?: IGetHardwareCoeffsRequest;

    /** StreamMessage getHardwareCoeffsReply */
    getHardwareCoeffsReply?: IGetHardwareCoeffsReply;

    /** StreamMessage getUsageDataRequest */
    getUsageDataRequest?: IGetUsageDataRequest;

    /** StreamMessage getUsageDataReply */
    getUsageDataReply?: IGetUsageDataReply;

    /** StreamMessage resetUsageDataRequest */
    resetUsageDataRequest?: IResetUsageDataRequest;

    /** StreamMessage resetUsageDataReply */
    resetUsageDataReply?: IResetUsageDataReply;
}

/** Represents a StreamMessage. */
export class StreamMessage {

    /**
     * Constructs a new StreamMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStreamMessage);

    /** StreamMessage handle. */
    public handle: number;

    /** StreamMessage end. */
    public end: boolean;

    /** StreamMessage senderAddress. */
    public senderAddress: Uint8Array;

    /** StreamMessage recipientAddress. */
    public recipientAddress: Uint8Array;

    /** StreamMessage noop. */
    public noop?: (INoop|null);

    /** StreamMessage unhandledMessageReply. */
    public unhandledMessageReply?: (IUnhandledMessageReply|null);

    /** StreamMessage connectionReadyReply. */
    public connectionReadyReply?: (IConnectionReadyReply|null);

    /** StreamMessage recipientUnavailableReply. */
    public recipientUnavailableReply?: (IRecipientUnavailableReply|null);

    /** StreamMessage ping. */
    public ping?: (IPing|null);

    /** StreamMessage pong. */
    public pong?: (IPong|null);

    /** StreamMessage listStreamsRequest. */
    public listStreamsRequest?: (IListStreamsRequest|null);

    /** StreamMessage listStreamsReply. */
    public listStreamsReply?: (IListStreamsReply|null);

    /** StreamMessage listOperationsRequest. */
    public listOperationsRequest?: (IListOperationsRequest|null);

    /** StreamMessage listOperationsReply. */
    public listOperationsReply?: (IListOperationsReply|null);

    /** StreamMessage startProgramRequest. */
    public startProgramRequest?: (IStartProgramRequest|null);

    /** StreamMessage startProgramReply. */
    public startProgramReply?: (IStartProgramReply|null);

    /** StreamMessage stopCirculatorRequest. */
    public stopCirculatorRequest?: (IStopCirculatorRequest|null);

    /** StreamMessage stopCirculatorReply. */
    public stopCirculatorReply?: (IStopCirculatorReply|null);

    /** StreamMessage dropFoodRequest. */
    public dropFoodRequest?: (IDropFoodRequest|null);

    /** StreamMessage dropFoodReply. */
    public dropFoodReply?: (IDropFoodReply|null);

    /** StreamMessage beginLiveFeed. */
    public beginLiveFeed?: (IBeginLiveFeed|null);

    /** StreamMessage beginLiveFeedReply. */
    public beginLiveFeedReply?: (IBeginLiveFeedReply|null);

    /** StreamMessage keepAlive. */
    public keepAlive?: (IKeepAlive|null);

    /** StreamMessage retransmitFeedRequest. */
    public retransmitFeedRequest?: (IRetransmitFeedRequest|null);

    /** StreamMessage retransmitFeedReply. */
    public retransmitFeedReply?: (IRetransmitFeedReply|null);

    /** StreamMessage circulatorDataPoint. */
    public circulatorDataPoint?: (ICirculatorDataPoint|null);

    /** StreamMessage debugMessage. */
    public debugMessage?: (IDebugMessage|null);

    /** StreamMessage listRecentEventsRequest. */
    public listRecentEventsRequest?: (IListRecentEventsRequest|null);

    /** StreamMessage listRecentEventsReply. */
    public listRecentEventsReply?: (IListRecentEventsReply|null);

    /** StreamMessage describeFeedRequest. */
    public describeFeedRequest?: (IDescribeFeedRequest|null);

    /** StreamMessage describeFeedReply. */
    public describeFeedReply?: (IDescribeFeedReply|null);

    /** StreamMessage listFeedsRequest. */
    public listFeedsRequest?: (IListFeedsRequest|null);

    /** StreamMessage listFeedsReply. */
    public listFeedsReply?: (IListFeedsReply|null);

    /** StreamMessage clearErrorRequest. */
    public clearErrorRequest?: (IClearErrorRequest|null);

    /** StreamMessage clearErrorReply. */
    public clearErrorReply?: (IClearErrorReply|null);

    /** StreamMessage listWifiRequest. */
    public listWifiRequest?: (IListWifiRequest|null);

    /** StreamMessage listWifiReply. */
    public listWifiReply?: (IListWifiReply|null);

    /** StreamMessage connectWifiRequest. */
    public connectWifiRequest?: (IConnectWifiRequest|null);

    /** StreamMessage connectWifiReply. */
    public connectWifiReply?: (IConnectWifiReply|null);

    /** StreamMessage listWifiProfileRequest. */
    public listWifiProfileRequest?: (IListWifiProfileRequest|null);

    /** StreamMessage listWifiProfileReply. */
    public listWifiProfileReply?: (IListWifiProfileReply|null);

    /** StreamMessage forgetWifiProfileRequest. */
    public forgetWifiProfileRequest?: (IForgetWifiProfileRequest|null);

    /** StreamMessage forgetWifiProfileReply. */
    public forgetWifiProfileReply?: (IForgetWifiProfileReply|null);

    /** StreamMessage disconnectWifiRequest. */
    public disconnectWifiRequest?: (IDisconnectWifiRequest|null);

    /** StreamMessage disconnectWifiReply. */
    public disconnectWifiReply?: (IDisconnectWifiReply|null);

    /** StreamMessage enterBootModeRequest. */
    public enterBootModeRequest?: (IEnterBootModeRequest|null);

    /** StreamMessage enterBootModeReply. */
    public enterBootModeReply?: (IEnterBootModeReply|null);

    /** StreamMessage startFileTransferRequest. */
    public startFileTransferRequest?: (IStartFileTransferRequest|null);

    /** StreamMessage startFileTransferReply. */
    public startFileTransferReply?: (IStartFileTransferReply|null);

    /** StreamMessage transferFileBlockRequest. */
    public transferFileBlockRequest?: (ITransferFileBlockRequest|null);

    /** StreamMessage transferFileBlockReply. */
    public transferFileBlockReply?: (ITransferFileBlockReply|null);

    /** StreamMessage transferFileComplete. */
    public transferFileComplete?: (ITransferFileComplete|null);

    /** StreamMessage startFileReceiveRequest. */
    public startFileReceiveRequest?: (IStartFileReceiveRequest|null);

    /** StreamMessage startFileReceiveReply. */
    public startFileReceiveReply?: (IStartFileReceiveReply|null);

    /** StreamMessage startKeyExchangeRequest. */
    public startKeyExchangeRequest?: (IStartKeyExchangeRequest|null);

    /** StreamMessage startKeyExchangeReply. */
    public startKeyExchangeReply?: (IStartKeyExchangeReply|null);

    /** StreamMessage cancelKeyExchangeRequest. */
    public cancelKeyExchangeRequest?: (ICancelKeyExchangeRequest|null);

    /** StreamMessage cancelKeyExchangeReply. */
    public cancelKeyExchangeReply?: (ICancelKeyExchangeReply|null);

    /** StreamMessage submitKeyRequest. */
    public submitKeyRequest?: (ISubmitKeyRequest|null);

    /** StreamMessage submitKeyReply. */
    public submitKeyReply?: (ISubmitKeyReply|null);

    /** StreamMessage submitBearerAuthTokenRequest. */
    public submitBearerAuthTokenRequest?: (ISubmitBearerAuthTokenRequest|null);

    /** StreamMessage submitBearerAuthTokenReply. */
    public submitBearerAuthTokenReply?: (ISubmitBearerAuthTokenReply|null);

    /** StreamMessage predictionUpdate. */
    public predictionUpdate?: (IPredictionUpdate|null);

    /** StreamMessage renameCirculatorRequest. */
    public renameCirculatorRequest?: (IRenameCirculatorRequest|null);

    /** StreamMessage renameCirculatorReply. */
    public renameCirculatorReply?: (IRenameCirculatorReply|null);

    /** StreamMessage identifyCirculatorRequest. */
    public identifyCirculatorRequest?: (IIdentifyCirculatorRequest|null);

    /** StreamMessage identifyCirculatorReply. */
    public identifyCirculatorReply?: (IIdentifyCirculatorReply|null);

    /** StreamMessage setMessagingAddressRequest. */
    public setMessagingAddressRequest?: (ISetMessagingAddressRequest|null);

    /** StreamMessage setMessagingAddressReply. */
    public setMessagingAddressReply?: (ISetMessagingAddressReply|null);

    /** StreamMessage displayLedRequest. */
    public displayLedRequest?: (IDisplayLedRequest|null);

    /** StreamMessage displayLedReply. */
    public displayLedReply?: (IDisplayLedReply|null);

    /** StreamMessage wifiDFUStatusRequest. */
    public wifiDFUStatusRequest?: (IWifiDFUStatusRequest|null);

    /** StreamMessage wifiDFUStatusReply. */
    public wifiDFUStatusReply?: (IWifiDFUStatusReply|null);

    /** StreamMessage wifiDFUSetFirmware. */
    public wifiDFUSetFirmware?: (IWifiDFUSetFirmware|null);

    /** StreamMessage wifiDFUDownloadTFTPRequest. */
    public wifiDFUDownloadTFTPRequest?: (IWifiDFUDownloadTFTPRequest|null);

    /** StreamMessage wifiDFUDownloadTFTPResponse. */
    public wifiDFUDownloadTFTPResponse?: (IWifiDFUDownloadTFTPResponse|null);

    /** StreamMessage getLimitsRequest. */
    public getLimitsRequest?: (IGetLimitsRequest|null);

    /** StreamMessage getLimitsReply. */
    public getLimitsReply?: (IGetLimitsReply|null);

    /** StreamMessage factoryResetRequest. */
    public factoryResetRequest?: (IFactoryResetRequest|null);

    /** StreamMessage factoryResetReply. */
    public factoryResetReply?: (IFactoryResetReply|null);

    /** StreamMessage deviceRestartRequest. */
    public deviceRestartRequest?: (IDeviceRestartRequest|null);

    /** StreamMessage deviceRestartReply. */
    public deviceRestartReply?: (IDeviceRestartReply|null);

    /** StreamMessage testResetRequest. */
    public testResetRequest?: (ITestResetRequest|null);

    /** StreamMessage testResetReply. */
    public testResetReply?: (ITestResetReply|null);

    /** StreamMessage forgetDevicePairingRequest. */
    public forgetDevicePairingRequest?: (IForgetDevicePairingRequest|null);

    /** StreamMessage forgetDevicePairingReply. */
    public forgetDevicePairingReply?: (IForgetDevicePairingReply|null);

    /** StreamMessage setSimulatorRequest. */
    public setSimulatorRequest?: (ISetSimulatorRequest|null);

    /** StreamMessage setSimulatorReply. */
    public setSimulatorReply?: (ISetSimulatorReply|null);

    /** StreamMessage getSimulatorRequest. */
    public getSimulatorRequest?: (IGetSimulatorRequest|null);

    /** StreamMessage getSimulatorReply. */
    public getSimulatorReply?: (IGetSimulatorReply|null);

    /** StreamMessage setHardwareCoeffsRequest. */
    public setHardwareCoeffsRequest?: (ISetHardwareCoeffsRequest|null);

    /** StreamMessage setHardwareCoeffsReply. */
    public setHardwareCoeffsReply?: (ISetHardwareCoeffsReply|null);

    /** StreamMessage getHardwareCoeffsRequest. */
    public getHardwareCoeffsRequest?: (IGetHardwareCoeffsRequest|null);

    /** StreamMessage getHardwareCoeffsReply. */
    public getHardwareCoeffsReply?: (IGetHardwareCoeffsReply|null);

    /** StreamMessage getUsageDataRequest. */
    public getUsageDataRequest?: (IGetUsageDataRequest|null);

    /** StreamMessage getUsageDataReply. */
    public getUsageDataReply?: (IGetUsageDataReply|null);

    /** StreamMessage resetUsageDataRequest. */
    public resetUsageDataRequest?: (IResetUsageDataRequest|null);

    /** StreamMessage resetUsageDataReply. */
    public resetUsageDataReply?: (IResetUsageDataReply|null);

    /** StreamMessage contents. */
    public contents?: string;

    /**
     * Creates a new StreamMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StreamMessage instance
     */
    public static create(properties?: IStreamMessage): StreamMessage;

    /**
     * Encodes the specified StreamMessage message. Does not implicitly {@link StreamMessage.verify|verify} messages.
     * @param message StreamMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStreamMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StreamMessage message, length delimited. Does not implicitly {@link StreamMessage.verify|verify} messages.
     * @param message StreamMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStreamMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StreamMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StreamMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StreamMessage;

    /**
     * Decodes a StreamMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StreamMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StreamMessage;

    /**
     * Verifies a StreamMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StreamMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StreamMessage
     */
    public static fromObject(object: { [k: string]: any }): StreamMessage;

    /**
     * Creates a plain object from a StreamMessage message. Also converts values to other types if specified.
     * @param message StreamMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StreamMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StreamMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UnhandledMessageReply. */
export interface IUnhandledMessageReply {
}

/** Represents an UnhandledMessageReply. */
export class UnhandledMessageReply {

    /**
     * Constructs a new UnhandledMessageReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnhandledMessageReply);

    /**
     * Creates a new UnhandledMessageReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnhandledMessageReply instance
     */
    public static create(properties?: IUnhandledMessageReply): UnhandledMessageReply;

    /**
     * Encodes the specified UnhandledMessageReply message. Does not implicitly {@link UnhandledMessageReply.verify|verify} messages.
     * @param message UnhandledMessageReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnhandledMessageReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnhandledMessageReply message, length delimited. Does not implicitly {@link UnhandledMessageReply.verify|verify} messages.
     * @param message UnhandledMessageReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnhandledMessageReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnhandledMessageReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnhandledMessageReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnhandledMessageReply;

    /**
     * Decodes an UnhandledMessageReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnhandledMessageReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnhandledMessageReply;

    /**
     * Verifies an UnhandledMessageReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UnhandledMessageReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnhandledMessageReply
     */
    public static fromObject(object: { [k: string]: any }): UnhandledMessageReply;

    /**
     * Creates a plain object from an UnhandledMessageReply message. Also converts values to other types if specified.
     * @param message UnhandledMessageReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnhandledMessageReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UnhandledMessageReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConnectionReadyReply. */
export interface IConnectionReadyReply {
}

/** Represents a ConnectionReadyReply. */
export class ConnectionReadyReply {

    /**
     * Constructs a new ConnectionReadyReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnectionReadyReply);

    /**
     * Creates a new ConnectionReadyReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectionReadyReply instance
     */
    public static create(properties?: IConnectionReadyReply): ConnectionReadyReply;

    /**
     * Encodes the specified ConnectionReadyReply message. Does not implicitly {@link ConnectionReadyReply.verify|verify} messages.
     * @param message ConnectionReadyReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnectionReadyReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConnectionReadyReply message, length delimited. Does not implicitly {@link ConnectionReadyReply.verify|verify} messages.
     * @param message ConnectionReadyReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnectionReadyReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConnectionReadyReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectionReadyReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectionReadyReply;

    /**
     * Decodes a ConnectionReadyReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectionReadyReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectionReadyReply;

    /**
     * Verifies a ConnectionReadyReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConnectionReadyReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectionReadyReply
     */
    public static fromObject(object: { [k: string]: any }): ConnectionReadyReply;

    /**
     * Creates a plain object from a ConnectionReadyReply message. Also converts values to other types if specified.
     * @param message ConnectionReadyReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConnectionReadyReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConnectionReadyReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RecipientUnavailableReply. */
export interface IRecipientUnavailableReply {

    /** RecipientUnavailableReply recipientAddress */
    recipientAddress: Uint8Array;
}

/** Represents a RecipientUnavailableReply. */
export class RecipientUnavailableReply {

    /**
     * Constructs a new RecipientUnavailableReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRecipientUnavailableReply);

    /** RecipientUnavailableReply recipientAddress. */
    public recipientAddress: Uint8Array;

    /**
     * Creates a new RecipientUnavailableReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RecipientUnavailableReply instance
     */
    public static create(properties?: IRecipientUnavailableReply): RecipientUnavailableReply;

    /**
     * Encodes the specified RecipientUnavailableReply message. Does not implicitly {@link RecipientUnavailableReply.verify|verify} messages.
     * @param message RecipientUnavailableReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRecipientUnavailableReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RecipientUnavailableReply message, length delimited. Does not implicitly {@link RecipientUnavailableReply.verify|verify} messages.
     * @param message RecipientUnavailableReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRecipientUnavailableReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RecipientUnavailableReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RecipientUnavailableReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RecipientUnavailableReply;

    /**
     * Decodes a RecipientUnavailableReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RecipientUnavailableReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RecipientUnavailableReply;

    /**
     * Verifies a RecipientUnavailableReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RecipientUnavailableReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RecipientUnavailableReply
     */
    public static fromObject(object: { [k: string]: any }): RecipientUnavailableReply;

    /**
     * Creates a plain object from a RecipientUnavailableReply message. Also converts values to other types if specified.
     * @param message RecipientUnavailableReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RecipientUnavailableReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RecipientUnavailableReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListStreamsRequest. */
export interface IListStreamsRequest {
}

/** Represents a ListStreamsRequest. */
export class ListStreamsRequest {

    /**
     * Constructs a new ListStreamsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListStreamsRequest);

    /**
     * Creates a new ListStreamsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListStreamsRequest instance
     */
    public static create(properties?: IListStreamsRequest): ListStreamsRequest;

    /**
     * Encodes the specified ListStreamsRequest message. Does not implicitly {@link ListStreamsRequest.verify|verify} messages.
     * @param message ListStreamsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListStreamsRequest message, length delimited. Does not implicitly {@link ListStreamsRequest.verify|verify} messages.
     * @param message ListStreamsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListStreamsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListStreamsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListStreamsRequest;

    /**
     * Decodes a ListStreamsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListStreamsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListStreamsRequest;

    /**
     * Verifies a ListStreamsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListStreamsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListStreamsRequest
     */
    public static fromObject(object: { [k: string]: any }): ListStreamsRequest;

    /**
     * Creates a plain object from a ListStreamsRequest message. Also converts values to other types if specified.
     * @param message ListStreamsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListStreamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListStreamsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListStreamsReply. */
export interface IListStreamsReply {

    /** ListStreamsReply encodedStreamMessage */
    encodedStreamMessage: Uint8Array;
}

/** Represents a ListStreamsReply. */
export class ListStreamsReply {

    /**
     * Constructs a new ListStreamsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListStreamsReply);

    /** ListStreamsReply encodedStreamMessage. */
    public encodedStreamMessage: Uint8Array;

    /**
     * Creates a new ListStreamsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListStreamsReply instance
     */
    public static create(properties?: IListStreamsReply): ListStreamsReply;

    /**
     * Encodes the specified ListStreamsReply message. Does not implicitly {@link ListStreamsReply.verify|verify} messages.
     * @param message ListStreamsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListStreamsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListStreamsReply message, length delimited. Does not implicitly {@link ListStreamsReply.verify|verify} messages.
     * @param message ListStreamsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListStreamsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListStreamsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListStreamsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListStreamsReply;

    /**
     * Decodes a ListStreamsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListStreamsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListStreamsReply;

    /**
     * Verifies a ListStreamsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListStreamsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListStreamsReply
     */
    public static fromObject(object: { [k: string]: any }): ListStreamsReply;

    /**
     * Creates a plain object from a ListStreamsReply message. Also converts values to other types if specified.
     * @param message ListStreamsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListStreamsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListStreamsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListOperationsRequest. */
export interface IListOperationsRequest {
}

/** Represents a ListOperationsRequest. */
export class ListOperationsRequest {

    /**
     * Constructs a new ListOperationsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListOperationsRequest);

    /**
     * Creates a new ListOperationsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListOperationsRequest instance
     */
    public static create(properties?: IListOperationsRequest): ListOperationsRequest;

    /**
     * Encodes the specified ListOperationsRequest message. Does not implicitly {@link ListOperationsRequest.verify|verify} messages.
     * @param message ListOperationsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link ListOperationsRequest.verify|verify} messages.
     * @param message ListOperationsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListOperationsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListOperationsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListOperationsRequest;

    /**
     * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListOperationsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListOperationsRequest;

    /**
     * Verifies a ListOperationsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListOperationsRequest
     */
    public static fromObject(object: { [k: string]: any }): ListOperationsRequest;

    /**
     * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
     * @param message ListOperationsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListOperationsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListOperationsReply. */
export interface IListOperationsReply {

    /** ListOperationsReply name */
    name: string;
}

/** Represents a ListOperationsReply. */
export class ListOperationsReply {

    /**
     * Constructs a new ListOperationsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListOperationsReply);

    /** ListOperationsReply name. */
    public name: string;

    /**
     * Creates a new ListOperationsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListOperationsReply instance
     */
    public static create(properties?: IListOperationsReply): ListOperationsReply;

    /**
     * Encodes the specified ListOperationsReply message. Does not implicitly {@link ListOperationsReply.verify|verify} messages.
     * @param message ListOperationsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListOperationsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListOperationsReply message, length delimited. Does not implicitly {@link ListOperationsReply.verify|verify} messages.
     * @param message ListOperationsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListOperationsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListOperationsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListOperationsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListOperationsReply;

    /**
     * Decodes a ListOperationsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListOperationsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListOperationsReply;

    /**
     * Verifies a ListOperationsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListOperationsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListOperationsReply
     */
    public static fromObject(object: { [k: string]: any }): ListOperationsReply;

    /**
     * Creates a plain object from a ListOperationsReply message. Also converts values to other types if specified.
     * @param message ListOperationsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListOperationsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListOperationsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an IdentifyCirculatorRequest. */
export interface IIdentifyCirculatorRequest {
}

/** Represents an IdentifyCirculatorRequest. */
export class IdentifyCirculatorRequest {

    /**
     * Constructs a new IdentifyCirculatorRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIdentifyCirculatorRequest);

    /**
     * Creates a new IdentifyCirculatorRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IdentifyCirculatorRequest instance
     */
    public static create(properties?: IIdentifyCirculatorRequest): IdentifyCirculatorRequest;

    /**
     * Encodes the specified IdentifyCirculatorRequest message. Does not implicitly {@link IdentifyCirculatorRequest.verify|verify} messages.
     * @param message IdentifyCirculatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIdentifyCirculatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IdentifyCirculatorRequest message, length delimited. Does not implicitly {@link IdentifyCirculatorRequest.verify|verify} messages.
     * @param message IdentifyCirculatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIdentifyCirculatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IdentifyCirculatorRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IdentifyCirculatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IdentifyCirculatorRequest;

    /**
     * Decodes an IdentifyCirculatorRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IdentifyCirculatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IdentifyCirculatorRequest;

    /**
     * Verifies an IdentifyCirculatorRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an IdentifyCirculatorRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IdentifyCirculatorRequest
     */
    public static fromObject(object: { [k: string]: any }): IdentifyCirculatorRequest;

    /**
     * Creates a plain object from an IdentifyCirculatorRequest message. Also converts values to other types if specified.
     * @param message IdentifyCirculatorRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IdentifyCirculatorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IdentifyCirculatorRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an IdentifyCirculatorReply. */
export interface IIdentifyCirculatorReply {

    /** IdentifyCirculatorReply name */
    name: string;

    /** IdentifyCirculatorReply firmwareVersion */
    firmwareVersion?: string;

    /** IdentifyCirculatorReply hardwareVersion */
    hardwareVersion: string;

    /** IdentifyCirculatorReply serialNumber */
    serialNumber?: string;

    /** IdentifyCirculatorReply bleMacAddress */
    bleMacAddress?: string;

    /** IdentifyCirculatorReply softdeviceVersion */
    softdeviceVersion?: string;

    /** IdentifyCirculatorReply bootloaderVersion */
    bootloaderVersion?: string;

    /** IdentifyCirculatorReply appFirmwareVersion */
    appFirmwareVersion?: string;

    /** IdentifyCirculatorReply espFirmwareVersion */
    espFirmwareVersion?: string;

    /** IdentifyCirculatorReply certificateVersion */
    certificateVersion?: string;

    /** IdentifyCirculatorReply modelNumber */
    modelNumber?: string;

    /** IdentifyCirculatorReply apiVersion */
    apiVersion?: number;

    /** IdentifyCirculatorReply hardwareOptions */
    hardwareOptions?: number;

    /** IdentifyCirculatorReply buildDate */
    buildDate?: number;
}

/** Represents an IdentifyCirculatorReply. */
export class IdentifyCirculatorReply {

    /**
     * Constructs a new IdentifyCirculatorReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IIdentifyCirculatorReply);

    /** IdentifyCirculatorReply name. */
    public name: string;

    /** IdentifyCirculatorReply firmwareVersion. */
    public firmwareVersion: string;

    /** IdentifyCirculatorReply hardwareVersion. */
    public hardwareVersion: string;

    /** IdentifyCirculatorReply serialNumber. */
    public serialNumber: string;

    /** IdentifyCirculatorReply bleMacAddress. */
    public bleMacAddress: string;

    /** IdentifyCirculatorReply softdeviceVersion. */
    public softdeviceVersion: string;

    /** IdentifyCirculatorReply bootloaderVersion. */
    public bootloaderVersion: string;

    /** IdentifyCirculatorReply appFirmwareVersion. */
    public appFirmwareVersion: string;

    /** IdentifyCirculatorReply espFirmwareVersion. */
    public espFirmwareVersion: string;

    /** IdentifyCirculatorReply certificateVersion. */
    public certificateVersion: string;

    /** IdentifyCirculatorReply modelNumber. */
    public modelNumber: string;

    /** IdentifyCirculatorReply apiVersion. */
    public apiVersion: number;

    /** IdentifyCirculatorReply hardwareOptions. */
    public hardwareOptions: number;

    /** IdentifyCirculatorReply buildDate. */
    public buildDate: number;

    /**
     * Creates a new IdentifyCirculatorReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns IdentifyCirculatorReply instance
     */
    public static create(properties?: IIdentifyCirculatorReply): IdentifyCirculatorReply;

    /**
     * Encodes the specified IdentifyCirculatorReply message. Does not implicitly {@link IdentifyCirculatorReply.verify|verify} messages.
     * @param message IdentifyCirculatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IIdentifyCirculatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified IdentifyCirculatorReply message, length delimited. Does not implicitly {@link IdentifyCirculatorReply.verify|verify} messages.
     * @param message IdentifyCirculatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IIdentifyCirculatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an IdentifyCirculatorReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns IdentifyCirculatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): IdentifyCirculatorReply;

    /**
     * Decodes an IdentifyCirculatorReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns IdentifyCirculatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): IdentifyCirculatorReply;

    /**
     * Verifies an IdentifyCirculatorReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an IdentifyCirculatorReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns IdentifyCirculatorReply
     */
    public static fromObject(object: { [k: string]: any }): IdentifyCirculatorReply;

    /**
     * Creates a plain object from an IdentifyCirculatorReply message. Also converts values to other types if specified.
     * @param message IdentifyCirculatorReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: IdentifyCirculatorReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this IdentifyCirculatorReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RenameCirculatorRequest. */
export interface IRenameCirculatorRequest {

    /** RenameCirculatorRequest name */
    name: string;
}

/** Represents a RenameCirculatorRequest. */
export class RenameCirculatorRequest {

    /**
     * Constructs a new RenameCirculatorRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRenameCirculatorRequest);

    /** RenameCirculatorRequest name. */
    public name: string;

    /**
     * Creates a new RenameCirculatorRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RenameCirculatorRequest instance
     */
    public static create(properties?: IRenameCirculatorRequest): RenameCirculatorRequest;

    /**
     * Encodes the specified RenameCirculatorRequest message. Does not implicitly {@link RenameCirculatorRequest.verify|verify} messages.
     * @param message RenameCirculatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRenameCirculatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RenameCirculatorRequest message, length delimited. Does not implicitly {@link RenameCirculatorRequest.verify|verify} messages.
     * @param message RenameCirculatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRenameCirculatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RenameCirculatorRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RenameCirculatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RenameCirculatorRequest;

    /**
     * Decodes a RenameCirculatorRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RenameCirculatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RenameCirculatorRequest;

    /**
     * Verifies a RenameCirculatorRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RenameCirculatorRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RenameCirculatorRequest
     */
    public static fromObject(object: { [k: string]: any }): RenameCirculatorRequest;

    /**
     * Creates a plain object from a RenameCirculatorRequest message. Also converts values to other types if specified.
     * @param message RenameCirculatorRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RenameCirculatorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RenameCirculatorRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RenameCirculatorReply. */
export interface IRenameCirculatorReply {

    /** RenameCirculatorReply result */
    result?: Result;

    /** RenameCirculatorReply name */
    name: string;
}

/** Represents a RenameCirculatorReply. */
export class RenameCirculatorReply {

    /**
     * Constructs a new RenameCirculatorReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRenameCirculatorReply);

    /** RenameCirculatorReply result. */
    public result: Result;

    /** RenameCirculatorReply name. */
    public name: string;

    /**
     * Creates a new RenameCirculatorReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RenameCirculatorReply instance
     */
    public static create(properties?: IRenameCirculatorReply): RenameCirculatorReply;

    /**
     * Encodes the specified RenameCirculatorReply message. Does not implicitly {@link RenameCirculatorReply.verify|verify} messages.
     * @param message RenameCirculatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRenameCirculatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RenameCirculatorReply message, length delimited. Does not implicitly {@link RenameCirculatorReply.verify|verify} messages.
     * @param message RenameCirculatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRenameCirculatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RenameCirculatorReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RenameCirculatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RenameCirculatorReply;

    /**
     * Decodes a RenameCirculatorReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RenameCirculatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RenameCirculatorReply;

    /**
     * Verifies a RenameCirculatorReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RenameCirculatorReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RenameCirculatorReply
     */
    public static fromObject(object: { [k: string]: any }): RenameCirculatorReply;

    /**
     * Creates a plain object from a RenameCirculatorReply message. Also converts values to other types if specified.
     * @param message RenameCirculatorReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RenameCirculatorReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RenameCirculatorReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetMessagingAddressRequest. */
export interface ISetMessagingAddressRequest {

    /** SetMessagingAddressRequest address */
    address: Uint8Array;
}

/** Represents a SetMessagingAddressRequest. */
export class SetMessagingAddressRequest {

    /**
     * Constructs a new SetMessagingAddressRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetMessagingAddressRequest);

    /** SetMessagingAddressRequest address. */
    public address: Uint8Array;

    /**
     * Creates a new SetMessagingAddressRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetMessagingAddressRequest instance
     */
    public static create(properties?: ISetMessagingAddressRequest): SetMessagingAddressRequest;

    /**
     * Encodes the specified SetMessagingAddressRequest message. Does not implicitly {@link SetMessagingAddressRequest.verify|verify} messages.
     * @param message SetMessagingAddressRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetMessagingAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetMessagingAddressRequest message, length delimited. Does not implicitly {@link SetMessagingAddressRequest.verify|verify} messages.
     * @param message SetMessagingAddressRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetMessagingAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetMessagingAddressRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetMessagingAddressRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetMessagingAddressRequest;

    /**
     * Decodes a SetMessagingAddressRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetMessagingAddressRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetMessagingAddressRequest;

    /**
     * Verifies a SetMessagingAddressRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetMessagingAddressRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetMessagingAddressRequest
     */
    public static fromObject(object: { [k: string]: any }): SetMessagingAddressRequest;

    /**
     * Creates a plain object from a SetMessagingAddressRequest message. Also converts values to other types if specified.
     * @param message SetMessagingAddressRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetMessagingAddressRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetMessagingAddressRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetMessagingAddressReply. */
export interface ISetMessagingAddressReply {

    /** SetMessagingAddressReply result */
    result?: Result;
}

/** Represents a SetMessagingAddressReply. */
export class SetMessagingAddressReply {

    /**
     * Constructs a new SetMessagingAddressReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetMessagingAddressReply);

    /** SetMessagingAddressReply result. */
    public result: Result;

    /**
     * Creates a new SetMessagingAddressReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetMessagingAddressReply instance
     */
    public static create(properties?: ISetMessagingAddressReply): SetMessagingAddressReply;

    /**
     * Encodes the specified SetMessagingAddressReply message. Does not implicitly {@link SetMessagingAddressReply.verify|verify} messages.
     * @param message SetMessagingAddressReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetMessagingAddressReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetMessagingAddressReply message, length delimited. Does not implicitly {@link SetMessagingAddressReply.verify|verify} messages.
     * @param message SetMessagingAddressReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetMessagingAddressReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetMessagingAddressReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetMessagingAddressReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetMessagingAddressReply;

    /**
     * Decodes a SetMessagingAddressReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetMessagingAddressReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetMessagingAddressReply;

    /**
     * Verifies a SetMessagingAddressReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetMessagingAddressReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetMessagingAddressReply
     */
    public static fromObject(object: { [k: string]: any }): SetMessagingAddressReply;

    /**
     * Creates a plain object from a SetMessagingAddressReply message. Also converts values to other types if specified.
     * @param message SetMessagingAddressReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetMessagingAddressReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetMessagingAddressReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DisplayLedRequest. */
export interface IDisplayLedRequest {

    /** DisplayLedRequest ledColor */
    ledColor: LedColor;

    /** DisplayLedRequest ledPattern */
    ledPattern: LedPattern;

    /** DisplayLedRequest durationMilliseconds */
    durationMilliseconds: number;
}

/** Represents a DisplayLedRequest. */
export class DisplayLedRequest {

    /**
     * Constructs a new DisplayLedRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisplayLedRequest);

    /** DisplayLedRequest ledColor. */
    public ledColor: LedColor;

    /** DisplayLedRequest ledPattern. */
    public ledPattern: LedPattern;

    /** DisplayLedRequest durationMilliseconds. */
    public durationMilliseconds: number;

    /**
     * Creates a new DisplayLedRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisplayLedRequest instance
     */
    public static create(properties?: IDisplayLedRequest): DisplayLedRequest;

    /**
     * Encodes the specified DisplayLedRequest message. Does not implicitly {@link DisplayLedRequest.verify|verify} messages.
     * @param message DisplayLedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisplayLedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisplayLedRequest message, length delimited. Does not implicitly {@link DisplayLedRequest.verify|verify} messages.
     * @param message DisplayLedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisplayLedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisplayLedRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisplayLedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisplayLedRequest;

    /**
     * Decodes a DisplayLedRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisplayLedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisplayLedRequest;

    /**
     * Verifies a DisplayLedRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisplayLedRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisplayLedRequest
     */
    public static fromObject(object: { [k: string]: any }): DisplayLedRequest;

    /**
     * Creates a plain object from a DisplayLedRequest message. Also converts values to other types if specified.
     * @param message DisplayLedRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisplayLedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisplayLedRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DisplayLedReply. */
export interface IDisplayLedReply {

    /** DisplayLedReply result */
    result: Result;
}

/** Represents a DisplayLedReply. */
export class DisplayLedReply {

    /**
     * Constructs a new DisplayLedReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisplayLedReply);

    /** DisplayLedReply result. */
    public result: Result;

    /**
     * Creates a new DisplayLedReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisplayLedReply instance
     */
    public static create(properties?: IDisplayLedReply): DisplayLedReply;

    /**
     * Encodes the specified DisplayLedReply message. Does not implicitly {@link DisplayLedReply.verify|verify} messages.
     * @param message DisplayLedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisplayLedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisplayLedReply message, length delimited. Does not implicitly {@link DisplayLedReply.verify|verify} messages.
     * @param message DisplayLedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisplayLedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisplayLedReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisplayLedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisplayLedReply;

    /**
     * Decodes a DisplayLedReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisplayLedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisplayLedReply;

    /**
     * Verifies a DisplayLedReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisplayLedReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisplayLedReply
     */
    public static fromObject(object: { [k: string]: any }): DisplayLedReply;

    /**
     * Creates a plain object from a DisplayLedReply message. Also converts values to other types if specified.
     * @param message DisplayLedReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisplayLedReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisplayLedReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Noop. */
export interface INoop {
}

/** Represents a Noop. */
export class Noop {

    /**
     * Constructs a new Noop.
     * @param [properties] Properties to set
     */
    constructor(properties?: INoop);

    /**
     * Creates a new Noop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Noop instance
     */
    public static create(properties?: INoop): Noop;

    /**
     * Encodes the specified Noop message. Does not implicitly {@link Noop.verify|verify} messages.
     * @param message Noop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INoop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Noop message, length delimited. Does not implicitly {@link Noop.verify|verify} messages.
     * @param message Noop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INoop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Noop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Noop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Noop;

    /**
     * Decodes a Noop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Noop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Noop;

    /**
     * Verifies a Noop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Noop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Noop
     */
    public static fromObject(object: { [k: string]: any }): Noop;

    /**
     * Creates a plain object from a Noop message. Also converts values to other types if specified.
     * @param message Noop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Noop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Noop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Ping. */
export interface IPing {
}

/** Represents a Ping. */
export class Ping {

    /**
     * Constructs a new Ping.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPing);

    /**
     * Creates a new Ping instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Ping instance
     */
    public static create(properties?: IPing): Ping;

    /**
     * Encodes the specified Ping message. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Ping message, length delimited. Does not implicitly {@link Ping.verify|verify} messages.
     * @param message Ping message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Ping message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Ping;

    /**
     * Decodes a Ping message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Ping
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Ping;

    /**
     * Verifies a Ping message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Ping message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Ping
     */
    public static fromObject(object: { [k: string]: any }): Ping;

    /**
     * Creates a plain object from a Ping message. Also converts values to other types if specified.
     * @param message Ping
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Ping to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Pong. */
export interface IPong {
}

/** Represents a Pong. */
export class Pong {

    /**
     * Constructs a new Pong.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPong);

    /**
     * Creates a new Pong instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Pong instance
     */
    public static create(properties?: IPong): Pong;

    /**
     * Encodes the specified Pong message. Does not implicitly {@link Pong.verify|verify} messages.
     * @param message Pong message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPong, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Pong message, length delimited. Does not implicitly {@link Pong.verify|verify} messages.
     * @param message Pong message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPong, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Pong message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Pong;

    /**
     * Decodes a Pong message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Pong
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Pong;

    /**
     * Verifies a Pong message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Pong message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Pong
     */
    public static fromObject(object: { [k: string]: any }): Pong;

    /**
     * Creates a plain object from a Pong message. Also converts values to other types if specified.
     * @param message Pong
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Pong to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a KeepAlive. */
export interface IKeepAlive {
}

/** Represents a KeepAlive. */
export class KeepAlive {

    /**
     * Constructs a new KeepAlive.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKeepAlive);

    /**
     * Creates a new KeepAlive instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KeepAlive instance
     */
    public static create(properties?: IKeepAlive): KeepAlive;

    /**
     * Encodes the specified KeepAlive message. Does not implicitly {@link KeepAlive.verify|verify} messages.
     * @param message KeepAlive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKeepAlive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KeepAlive message, length delimited. Does not implicitly {@link KeepAlive.verify|verify} messages.
     * @param message KeepAlive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKeepAlive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KeepAlive message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KeepAlive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KeepAlive;

    /**
     * Decodes a KeepAlive message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KeepAlive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KeepAlive;

    /**
     * Verifies a KeepAlive message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a KeepAlive message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KeepAlive
     */
    public static fromObject(object: { [k: string]: any }): KeepAlive;

    /**
     * Creates a plain object from a KeepAlive message. Also converts values to other types if specified.
     * @param message KeepAlive
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: KeepAlive, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this KeepAlive to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Result enum. */
export enum Result {
    CS_SUCCESS = 0,
    CS_ERROR_SVC_HANDLER_MISSING = 1,
    CS_ERROR_SOFTDEVICE_NOT_ENABLED = 2,
    CS_ERROR_INTERNAL = 3,
    CS_ERROR_NO_MEM = 4,
    CS_ERROR_NOT_FOUND = 5,
    CS_ERROR_NOT_SUPPORTED = 6,
    CS_ERROR_INVALID_PARAM = 7,
    CS_ERROR_INVALID_STATE = 8,
    CS_ERROR_INVALID_LENGTH = 9,
    CS_ERROR_INVALID_FLAGS = 10,
    CS_ERROR_INVALID_DATA = 11,
    CS_ERROR_DATA_SIZE = 12,
    CS_ERROR_TIMEOUT = 13,
    CS_ERROR_NULL = 14,
    CS_ERROR_FORBIDDEN = 15,
    CS_ERROR_INVALID_ADDR = 16,
    CS_ERROR_BUSY = 17,
    CS_ERROR_IO_FAILED = 18,
    CS_ERROR_ALREADY_EXISTS = 19,
    CS_ERROR_END_OF_FILE = 20,
    CS_ERROR_NOT_CONNECTED = 21,
    CS_ERROR_UNKNOWN_RPC_MSG = 22,
    CS_ERROR_WIFI_DUPLICATE_SCAN_RESULT = 23,
    CS_ERROR_WIFI_KEY_ERROR = 24,
    CS_ERROR_WIFI_INVALID_ROLE = 25,
    CS_ERROR_WIFI_INVALID_SEC_TYPE = 26,
    CS_ERROR_WIFI_INVALID_WEP_IND = 27,
    CS_ERROR_WIFI_ALREADY_DISCONN = 28,
    CS_ERROR_WIFI_NOT_CONN = 29,
    CS_ERROR_WIFI_DISCONNECT = 30,
    CS_ERROR_WIFI_INVALID_PWD = 31,
    CS_ERROR_WIFI_RX_BUFF = 32,
    CS_ERROR_WIFI_AP_TERM_CONN = 33,
    CS_ERROR_INVALID_SOCKET = 34,
    CS_ERROR_IO_IN_PROGRESS = 35,
    CS_ERROR_GEN_SOCK_FAILURE = 36
}

/** Properties of a CirculatorProgram. */
export interface ICirculatorProgram {

    /** CirculatorProgram setPoint */
    setPoint: number;

    /** CirculatorProgram cookTime */
    cookTime?: number;

    /** CirculatorProgram delayedStart */
    delayedStart?: number;

    /** CirculatorProgram holdingTemperature */
    holdingTemperature?: number;

    /** CirculatorProgram programType */
    programType: ProgramType;

    /** CirculatorProgram programMetadata */
    programMetadata?: IProgramMetadata;
}

/** Represents a CirculatorProgram. */
export class CirculatorProgram {

    /**
     * Constructs a new CirculatorProgram.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICirculatorProgram);

    /** CirculatorProgram setPoint. */
    public setPoint: number;

    /** CirculatorProgram cookTime. */
    public cookTime: number;

    /** CirculatorProgram delayedStart. */
    public delayedStart: number;

    /** CirculatorProgram holdingTemperature. */
    public holdingTemperature: number;

    /** CirculatorProgram programType. */
    public programType: ProgramType;

    /** CirculatorProgram programMetadata. */
    public programMetadata?: (IProgramMetadata|null);

    /**
     * Creates a new CirculatorProgram instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CirculatorProgram instance
     */
    public static create(properties?: ICirculatorProgram): CirculatorProgram;

    /**
     * Encodes the specified CirculatorProgram message. Does not implicitly {@link CirculatorProgram.verify|verify} messages.
     * @param message CirculatorProgram message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICirculatorProgram, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CirculatorProgram message, length delimited. Does not implicitly {@link CirculatorProgram.verify|verify} messages.
     * @param message CirculatorProgram message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICirculatorProgram, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CirculatorProgram message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CirculatorProgram
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CirculatorProgram;

    /**
     * Decodes a CirculatorProgram message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CirculatorProgram
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CirculatorProgram;

    /**
     * Verifies a CirculatorProgram message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CirculatorProgram message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CirculatorProgram
     */
    public static fromObject(object: { [k: string]: any }): CirculatorProgram;

    /**
     * Creates a plain object from a CirculatorProgram message. Also converts values to other types if specified.
     * @param message CirculatorProgram
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CirculatorProgram, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CirculatorProgram to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** ProgramType enum. */
export enum ProgramType {
    MANUAL = 0,
    AUTOMATIC = 1
}

/** ProgramStep enum. */
export enum ProgramStep {
    UNKNOWN = 0,
    PRE_HEAT = 1,
    WAIT_FOR_FOOD = 2,
    COOK = 3,
    WAIT_FOR_REMOVE_FOOD = 4,
    ERROR = 5
}

/** Properties of a ProgramMetadata. */
export interface IProgramMetadata {

    /** ProgramMetadata guideId */
    guideId?: string;

    /** ProgramMetadata programId */
    programId?: string;

    /** ProgramMetadata timerId */
    timerId?: string;

    /** ProgramMetadata cookId */
    cookId?: string;
}

/** Represents a ProgramMetadata. */
export class ProgramMetadata {

    /**
     * Constructs a new ProgramMetadata.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProgramMetadata);

    /** ProgramMetadata guideId. */
    public guideId: string;

    /** ProgramMetadata programId. */
    public programId: string;

    /** ProgramMetadata timerId. */
    public timerId: string;

    /** ProgramMetadata cookId. */
    public cookId: string;

    /**
     * Creates a new ProgramMetadata instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProgramMetadata instance
     */
    public static create(properties?: IProgramMetadata): ProgramMetadata;

    /**
     * Encodes the specified ProgramMetadata message. Does not implicitly {@link ProgramMetadata.verify|verify} messages.
     * @param message ProgramMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProgramMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProgramMetadata message, length delimited. Does not implicitly {@link ProgramMetadata.verify|verify} messages.
     * @param message ProgramMetadata message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProgramMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProgramMetadata message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProgramMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProgramMetadata;

    /**
     * Decodes a ProgramMetadata message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProgramMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProgramMetadata;

    /**
     * Verifies a ProgramMetadata message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProgramMetadata message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProgramMetadata
     */
    public static fromObject(object: { [k: string]: any }): ProgramMetadata;

    /**
     * Creates a plain object from a ProgramMetadata message. Also converts values to other types if specified.
     * @param message ProgramMetadata
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProgramMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProgramMetadata to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** ErrorState enum. */
export enum ErrorState {
    NO_ERROR = 0,
    SOFT_ERROR = 1,
    HARD_ERROR = 2
}

/** LedColor enum. */
export enum LedColor {
    LED_COLOR_RED = 0,
    LED_COLOR_GREEN = 1,
    LED_COLOR_BLUE = 2,
    LED_COLOR_WHITE = 3,
    LED_COLOR_ORANGE = 4,
    LED_COLOR_YELLOW = 5,
    LED_COLOR_BLACK = 6,
    LED_COLOR_PURPLE = 7
}

/** LedPattern enum. */
export enum LedPattern {
    LED_PATTERN_BLINK = 0,
    LED_PATTERN_BREATHE = 1,
    LED_PATTERN_DOUBLE_BLINK = 2,
    LED_PATTERN_DOUBLE_PULSE = 3,
    LED_PATTERN_SOLID = 4
}

/** Properties of a StartProgramRequest. */
export interface IStartProgramRequest {

    /** StartProgramRequest circulatorProgram */
    circulatorProgram: ICirculatorProgram;

    /** StartProgramRequest feedId */
    feedId?: number;

    /** StartProgramRequest sequenceNumber */
    sequenceNumber?: number;
}

/** Represents a StartProgramRequest. */
export class StartProgramRequest {

    /**
     * Constructs a new StartProgramRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartProgramRequest);

    /** StartProgramRequest circulatorProgram. */
    public circulatorProgram: ICirculatorProgram;

    /** StartProgramRequest feedId. */
    public feedId: number;

    /** StartProgramRequest sequenceNumber. */
    public sequenceNumber: number;

    /**
     * Creates a new StartProgramRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartProgramRequest instance
     */
    public static create(properties?: IStartProgramRequest): StartProgramRequest;

    /**
     * Encodes the specified StartProgramRequest message. Does not implicitly {@link StartProgramRequest.verify|verify} messages.
     * @param message StartProgramRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartProgramRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartProgramRequest message, length delimited. Does not implicitly {@link StartProgramRequest.verify|verify} messages.
     * @param message StartProgramRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartProgramRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartProgramRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartProgramRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartProgramRequest;

    /**
     * Decodes a StartProgramRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartProgramRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartProgramRequest;

    /**
     * Verifies a StartProgramRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartProgramRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartProgramRequest
     */
    public static fromObject(object: { [k: string]: any }): StartProgramRequest;

    /**
     * Creates a plain object from a StartProgramRequest message. Also converts values to other types if specified.
     * @param message StartProgramRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartProgramRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartProgramRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartProgramReply. */
export interface IStartProgramReply {

    /** StartProgramReply result */
    result?: Result;
}

/** Represents a StartProgramReply. */
export class StartProgramReply {

    /**
     * Constructs a new StartProgramReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartProgramReply);

    /** StartProgramReply result. */
    public result: Result;

    /**
     * Creates a new StartProgramReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartProgramReply instance
     */
    public static create(properties?: IStartProgramReply): StartProgramReply;

    /**
     * Encodes the specified StartProgramReply message. Does not implicitly {@link StartProgramReply.verify|verify} messages.
     * @param message StartProgramReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartProgramReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartProgramReply message, length delimited. Does not implicitly {@link StartProgramReply.verify|verify} messages.
     * @param message StartProgramReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartProgramReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartProgramReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartProgramReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartProgramReply;

    /**
     * Decodes a StartProgramReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartProgramReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartProgramReply;

    /**
     * Verifies a StartProgramReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartProgramReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartProgramReply
     */
    public static fromObject(object: { [k: string]: any }): StartProgramReply;

    /**
     * Creates a plain object from a StartProgramReply message. Also converts values to other types if specified.
     * @param message StartProgramReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartProgramReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartProgramReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StopCirculatorRequest. */
export interface IStopCirculatorRequest {

    /** StopCirculatorRequest feedId */
    feedId?: number;

    /** StopCirculatorRequest sequenceNumber */
    sequenceNumber?: number;
}

/** Represents a StopCirculatorRequest. */
export class StopCirculatorRequest {

    /**
     * Constructs a new StopCirculatorRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStopCirculatorRequest);

    /** StopCirculatorRequest feedId. */
    public feedId: number;

    /** StopCirculatorRequest sequenceNumber. */
    public sequenceNumber: number;

    /**
     * Creates a new StopCirculatorRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StopCirculatorRequest instance
     */
    public static create(properties?: IStopCirculatorRequest): StopCirculatorRequest;

    /**
     * Encodes the specified StopCirculatorRequest message. Does not implicitly {@link StopCirculatorRequest.verify|verify} messages.
     * @param message StopCirculatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStopCirculatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StopCirculatorRequest message, length delimited. Does not implicitly {@link StopCirculatorRequest.verify|verify} messages.
     * @param message StopCirculatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStopCirculatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StopCirculatorRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StopCirculatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StopCirculatorRequest;

    /**
     * Decodes a StopCirculatorRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StopCirculatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StopCirculatorRequest;

    /**
     * Verifies a StopCirculatorRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StopCirculatorRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StopCirculatorRequest
     */
    public static fromObject(object: { [k: string]: any }): StopCirculatorRequest;

    /**
     * Creates a plain object from a StopCirculatorRequest message. Also converts values to other types if specified.
     * @param message StopCirculatorRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StopCirculatorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StopCirculatorRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StopCirculatorReply. */
export interface IStopCirculatorReply {

    /** StopCirculatorReply result */
    result?: Result;
}

/** Represents a StopCirculatorReply. */
export class StopCirculatorReply {

    /**
     * Constructs a new StopCirculatorReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStopCirculatorReply);

    /** StopCirculatorReply result. */
    public result: Result;

    /**
     * Creates a new StopCirculatorReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StopCirculatorReply instance
     */
    public static create(properties?: IStopCirculatorReply): StopCirculatorReply;

    /**
     * Encodes the specified StopCirculatorReply message. Does not implicitly {@link StopCirculatorReply.verify|verify} messages.
     * @param message StopCirculatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStopCirculatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StopCirculatorReply message, length delimited. Does not implicitly {@link StopCirculatorReply.verify|verify} messages.
     * @param message StopCirculatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStopCirculatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StopCirculatorReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StopCirculatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StopCirculatorReply;

    /**
     * Decodes a StopCirculatorReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StopCirculatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StopCirculatorReply;

    /**
     * Verifies a StopCirculatorReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StopCirculatorReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StopCirculatorReply
     */
    public static fromObject(object: { [k: string]: any }): StopCirculatorReply;

    /**
     * Creates a plain object from a StopCirculatorReply message. Also converts values to other types if specified.
     * @param message StopCirculatorReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StopCirculatorReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StopCirculatorReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DropFoodRequest. */
export interface IDropFoodRequest {
}

/** Represents a DropFoodRequest. */
export class DropFoodRequest {

    /**
     * Constructs a new DropFoodRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDropFoodRequest);

    /**
     * Creates a new DropFoodRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DropFoodRequest instance
     */
    public static create(properties?: IDropFoodRequest): DropFoodRequest;

    /**
     * Encodes the specified DropFoodRequest message. Does not implicitly {@link DropFoodRequest.verify|verify} messages.
     * @param message DropFoodRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDropFoodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DropFoodRequest message, length delimited. Does not implicitly {@link DropFoodRequest.verify|verify} messages.
     * @param message DropFoodRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDropFoodRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DropFoodRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DropFoodRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DropFoodRequest;

    /**
     * Decodes a DropFoodRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DropFoodRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DropFoodRequest;

    /**
     * Verifies a DropFoodRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DropFoodRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DropFoodRequest
     */
    public static fromObject(object: { [k: string]: any }): DropFoodRequest;

    /**
     * Creates a plain object from a DropFoodRequest message. Also converts values to other types if specified.
     * @param message DropFoodRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DropFoodRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DropFoodRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DropFoodReply. */
export interface IDropFoodReply {

    /** DropFoodReply result */
    result?: Result;
}

/** Represents a DropFoodReply. */
export class DropFoodReply {

    /**
     * Constructs a new DropFoodReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDropFoodReply);

    /** DropFoodReply result. */
    public result: Result;

    /**
     * Creates a new DropFoodReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DropFoodReply instance
     */
    public static create(properties?: IDropFoodReply): DropFoodReply;

    /**
     * Encodes the specified DropFoodReply message. Does not implicitly {@link DropFoodReply.verify|verify} messages.
     * @param message DropFoodReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDropFoodReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DropFoodReply message, length delimited. Does not implicitly {@link DropFoodReply.verify|verify} messages.
     * @param message DropFoodReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDropFoodReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DropFoodReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DropFoodReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DropFoodReply;

    /**
     * Decodes a DropFoodReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DropFoodReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DropFoodReply;

    /**
     * Verifies a DropFoodReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DropFoodReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DropFoodReply
     */
    public static fromObject(object: { [k: string]: any }): DropFoodReply;

    /**
     * Creates a plain object from a DropFoodReply message. Also converts values to other types if specified.
     * @param message DropFoodReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DropFoodReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DropFoodReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** EventType enum. */
export enum EventType {
    NO_EVENT = 0,
    HW_FAILURE = 1,
    STOP_PROGRAM = 2
}

/** EventReason enum. */
export enum EventReason {
    NO_REASON = 0,
    HARDWARE_FAILURE = 1,
    BUTTON_PRESSED = 2,
    LOW_WATER_LEVEL = 3,
    TIPPED_OVER = 4,
    OVERHEATING = 5,
    POWER_LOSS = 6,
    HEATER_THERMISTOR = 7,
    BATH_THERMISTOR = 8,
    PRESSURE_SENSOR = 9,
    ACCELEROMETER = 10,
    BAD_MOTOR = 11,
    STUCK_MOTOR = 12,
    BAD_HEATER = 13
}

/** Properties of a ListRecentEventsRequest. */
export interface IListRecentEventsRequest {
}

/** Represents a ListRecentEventsRequest. */
export class ListRecentEventsRequest {

    /**
     * Constructs a new ListRecentEventsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListRecentEventsRequest);

    /**
     * Creates a new ListRecentEventsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListRecentEventsRequest instance
     */
    public static create(properties?: IListRecentEventsRequest): ListRecentEventsRequest;

    /**
     * Encodes the specified ListRecentEventsRequest message. Does not implicitly {@link ListRecentEventsRequest.verify|verify} messages.
     * @param message ListRecentEventsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListRecentEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListRecentEventsRequest message, length delimited. Does not implicitly {@link ListRecentEventsRequest.verify|verify} messages.
     * @param message ListRecentEventsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListRecentEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListRecentEventsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListRecentEventsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListRecentEventsRequest;

    /**
     * Decodes a ListRecentEventsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListRecentEventsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListRecentEventsRequest;

    /**
     * Verifies a ListRecentEventsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListRecentEventsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListRecentEventsRequest
     */
    public static fromObject(object: { [k: string]: any }): ListRecentEventsRequest;

    /**
     * Creates a plain object from a ListRecentEventsRequest message. Also converts values to other types if specified.
     * @param message ListRecentEventsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListRecentEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListRecentEventsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListRecentEventsReply. */
export interface IListRecentEventsReply {

    /** ListRecentEventsReply eventType */
    eventType: EventType;

    /** ListRecentEventsReply eventReason */
    eventReason: EventReason;

    /** ListRecentEventsReply eventTimestamp */
    eventTimestamp: number;

    /** ListRecentEventsReply feedId */
    feedId?: number;

    /** ListRecentEventsReply sequenceNumber */
    sequenceNumber?: number;
}

/** Represents a ListRecentEventsReply. */
export class ListRecentEventsReply {

    /**
     * Constructs a new ListRecentEventsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListRecentEventsReply);

    /** ListRecentEventsReply eventType. */
    public eventType: EventType;

    /** ListRecentEventsReply eventReason. */
    public eventReason: EventReason;

    /** ListRecentEventsReply eventTimestamp. */
    public eventTimestamp: number;

    /** ListRecentEventsReply feedId. */
    public feedId: number;

    /** ListRecentEventsReply sequenceNumber. */
    public sequenceNumber: number;

    /**
     * Creates a new ListRecentEventsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListRecentEventsReply instance
     */
    public static create(properties?: IListRecentEventsReply): ListRecentEventsReply;

    /**
     * Encodes the specified ListRecentEventsReply message. Does not implicitly {@link ListRecentEventsReply.verify|verify} messages.
     * @param message ListRecentEventsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListRecentEventsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListRecentEventsReply message, length delimited. Does not implicitly {@link ListRecentEventsReply.verify|verify} messages.
     * @param message ListRecentEventsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListRecentEventsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListRecentEventsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListRecentEventsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListRecentEventsReply;

    /**
     * Decodes a ListRecentEventsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListRecentEventsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListRecentEventsReply;

    /**
     * Verifies a ListRecentEventsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListRecentEventsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListRecentEventsReply
     */
    public static fromObject(object: { [k: string]: any }): ListRecentEventsReply;

    /**
     * Creates a plain object from a ListRecentEventsReply message. Also converts values to other types if specified.
     * @param message ListRecentEventsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListRecentEventsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListRecentEventsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClearErrorRequest. */
export interface IClearErrorRequest {
}

/** Represents a ClearErrorRequest. */
export class ClearErrorRequest {

    /**
     * Constructs a new ClearErrorRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClearErrorRequest);

    /**
     * Creates a new ClearErrorRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearErrorRequest instance
     */
    public static create(properties?: IClearErrorRequest): ClearErrorRequest;

    /**
     * Encodes the specified ClearErrorRequest message. Does not implicitly {@link ClearErrorRequest.verify|verify} messages.
     * @param message ClearErrorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClearErrorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClearErrorRequest message, length delimited. Does not implicitly {@link ClearErrorRequest.verify|verify} messages.
     * @param message ClearErrorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClearErrorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClearErrorRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClearErrorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClearErrorRequest;

    /**
     * Decodes a ClearErrorRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClearErrorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClearErrorRequest;

    /**
     * Verifies a ClearErrorRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClearErrorRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClearErrorRequest
     */
    public static fromObject(object: { [k: string]: any }): ClearErrorRequest;

    /**
     * Creates a plain object from a ClearErrorRequest message. Also converts values to other types if specified.
     * @param message ClearErrorRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClearErrorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClearErrorRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClearErrorReply. */
export interface IClearErrorReply {

    /** ClearErrorReply result */
    result: Result;
}

/** Represents a ClearErrorReply. */
export class ClearErrorReply {

    /**
     * Constructs a new ClearErrorReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClearErrorReply);

    /** ClearErrorReply result. */
    public result: Result;

    /**
     * Creates a new ClearErrorReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearErrorReply instance
     */
    public static create(properties?: IClearErrorReply): ClearErrorReply;

    /**
     * Encodes the specified ClearErrorReply message. Does not implicitly {@link ClearErrorReply.verify|verify} messages.
     * @param message ClearErrorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClearErrorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClearErrorReply message, length delimited. Does not implicitly {@link ClearErrorReply.verify|verify} messages.
     * @param message ClearErrorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClearErrorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClearErrorReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClearErrorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClearErrorReply;

    /**
     * Decodes a ClearErrorReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClearErrorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClearErrorReply;

    /**
     * Verifies a ClearErrorReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClearErrorReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClearErrorReply
     */
    public static fromObject(object: { [k: string]: any }): ClearErrorReply;

    /**
     * Creates a plain object from a ClearErrorReply message. Also converts values to other types if specified.
     * @param message ClearErrorReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClearErrorReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClearErrorReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** SecurityType enum. */
export enum SecurityType {
    OPEN = 0,
    WEP = 1,
    WPA = 2,
    WPS = 3,
    UNKNOWN_WIFI = 4,
    WPA2 = 5,
    WPA_WPA2 = 6
}

/** Properties of a ListWifiRequest. */
export interface IListWifiRequest {

    /** ListWifiRequest start */
    start?: boolean;
}

/** Represents a ListWifiRequest. */
export class ListWifiRequest {

    /**
     * Constructs a new ListWifiRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListWifiRequest);

    /** ListWifiRequest start. */
    public start: boolean;

    /**
     * Creates a new ListWifiRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListWifiRequest instance
     */
    public static create(properties?: IListWifiRequest): ListWifiRequest;

    /**
     * Encodes the specified ListWifiRequest message. Does not implicitly {@link ListWifiRequest.verify|verify} messages.
     * @param message ListWifiRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListWifiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListWifiRequest message, length delimited. Does not implicitly {@link ListWifiRequest.verify|verify} messages.
     * @param message ListWifiRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListWifiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListWifiRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListWifiRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListWifiRequest;

    /**
     * Decodes a ListWifiRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListWifiRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListWifiRequest;

    /**
     * Verifies a ListWifiRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListWifiRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListWifiRequest
     */
    public static fromObject(object: { [k: string]: any }): ListWifiRequest;

    /**
     * Creates a plain object from a ListWifiRequest message. Also converts values to other types if specified.
     * @param message ListWifiRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListWifiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListWifiRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListWifiReply. */
export interface IListWifiReply {

    /** ListWifiReply SSID */
    SSID: string;

    /** ListWifiReply securityType */
    securityType: SecurityType;

    /** ListWifiReply rssi */
    rssi: number;
}

/** Represents a ListWifiReply. */
export class ListWifiReply {

    /**
     * Constructs a new ListWifiReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListWifiReply);

    /** ListWifiReply SSID. */
    public SSID: string;

    /** ListWifiReply securityType. */
    public securityType: SecurityType;

    /** ListWifiReply rssi. */
    public rssi: number;

    /**
     * Creates a new ListWifiReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListWifiReply instance
     */
    public static create(properties?: IListWifiReply): ListWifiReply;

    /**
     * Encodes the specified ListWifiReply message. Does not implicitly {@link ListWifiReply.verify|verify} messages.
     * @param message ListWifiReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListWifiReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListWifiReply message, length delimited. Does not implicitly {@link ListWifiReply.verify|verify} messages.
     * @param message ListWifiReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListWifiReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListWifiReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListWifiReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListWifiReply;

    /**
     * Decodes a ListWifiReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListWifiReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListWifiReply;

    /**
     * Verifies a ListWifiReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListWifiReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListWifiReply
     */
    public static fromObject(object: { [k: string]: any }): ListWifiReply;

    /**
     * Creates a plain object from a ListWifiReply message. Also converts values to other types if specified.
     * @param message ListWifiReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListWifiReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListWifiReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConnectWifiRequest. */
export interface IConnectWifiRequest {

    /** ConnectWifiRequest SSID */
    SSID: string;

    /** ConnectWifiRequest passphrase */
    passphrase: string;

    /** ConnectWifiRequest securityType */
    securityType: SecurityType;
}

/** Represents a ConnectWifiRequest. */
export class ConnectWifiRequest {

    /**
     * Constructs a new ConnectWifiRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnectWifiRequest);

    /** ConnectWifiRequest SSID. */
    public SSID: string;

    /** ConnectWifiRequest passphrase. */
    public passphrase: string;

    /** ConnectWifiRequest securityType. */
    public securityType: SecurityType;

    /**
     * Creates a new ConnectWifiRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectWifiRequest instance
     */
    public static create(properties?: IConnectWifiRequest): ConnectWifiRequest;

    /**
     * Encodes the specified ConnectWifiRequest message. Does not implicitly {@link ConnectWifiRequest.verify|verify} messages.
     * @param message ConnectWifiRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnectWifiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConnectWifiRequest message, length delimited. Does not implicitly {@link ConnectWifiRequest.verify|verify} messages.
     * @param message ConnectWifiRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnectWifiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConnectWifiRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectWifiRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectWifiRequest;

    /**
     * Decodes a ConnectWifiRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectWifiRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectWifiRequest;

    /**
     * Verifies a ConnectWifiRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConnectWifiRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectWifiRequest
     */
    public static fromObject(object: { [k: string]: any }): ConnectWifiRequest;

    /**
     * Creates a plain object from a ConnectWifiRequest message. Also converts values to other types if specified.
     * @param message ConnectWifiRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConnectWifiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConnectWifiRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConnectWifiReply. */
export interface IConnectWifiReply {

    /** ConnectWifiReply result */
    result?: Result;
}

/** Represents a ConnectWifiReply. */
export class ConnectWifiReply {

    /**
     * Constructs a new ConnectWifiReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConnectWifiReply);

    /** ConnectWifiReply result. */
    public result: Result;

    /**
     * Creates a new ConnectWifiReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConnectWifiReply instance
     */
    public static create(properties?: IConnectWifiReply): ConnectWifiReply;

    /**
     * Encodes the specified ConnectWifiReply message. Does not implicitly {@link ConnectWifiReply.verify|verify} messages.
     * @param message ConnectWifiReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConnectWifiReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConnectWifiReply message, length delimited. Does not implicitly {@link ConnectWifiReply.verify|verify} messages.
     * @param message ConnectWifiReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConnectWifiReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConnectWifiReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConnectWifiReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConnectWifiReply;

    /**
     * Decodes a ConnectWifiReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConnectWifiReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConnectWifiReply;

    /**
     * Verifies a ConnectWifiReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConnectWifiReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConnectWifiReply
     */
    public static fromObject(object: { [k: string]: any }): ConnectWifiReply;

    /**
     * Creates a plain object from a ConnectWifiReply message. Also converts values to other types if specified.
     * @param message ConnectWifiReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConnectWifiReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConnectWifiReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** WifiConnectionStatus enum. */
export enum WifiConnectionStatus {
    WIFI_IDLE = 0,
    WIFI_CONNECTING = 1,
    WIFI_WRONG_PASSWORD = 2,
    WIFI_NO_AP_FOUND = 3,
    WIFI_CONNECT_FAIL = 4,
    WIFI_GOT_IP = 5
}

/** Properties of a ListWifiProfileRequest. */
export interface IListWifiProfileRequest {
}

/** Represents a ListWifiProfileRequest. */
export class ListWifiProfileRequest {

    /**
     * Constructs a new ListWifiProfileRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListWifiProfileRequest);

    /**
     * Creates a new ListWifiProfileRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListWifiProfileRequest instance
     */
    public static create(properties?: IListWifiProfileRequest): ListWifiProfileRequest;

    /**
     * Encodes the specified ListWifiProfileRequest message. Does not implicitly {@link ListWifiProfileRequest.verify|verify} messages.
     * @param message ListWifiProfileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListWifiProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListWifiProfileRequest message, length delimited. Does not implicitly {@link ListWifiProfileRequest.verify|verify} messages.
     * @param message ListWifiProfileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListWifiProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListWifiProfileRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListWifiProfileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListWifiProfileRequest;

    /**
     * Decodes a ListWifiProfileRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListWifiProfileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListWifiProfileRequest;

    /**
     * Verifies a ListWifiProfileRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListWifiProfileRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListWifiProfileRequest
     */
    public static fromObject(object: { [k: string]: any }): ListWifiProfileRequest;

    /**
     * Creates a plain object from a ListWifiProfileRequest message. Also converts values to other types if specified.
     * @param message ListWifiProfileRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListWifiProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListWifiProfileRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListWifiProfileReply. */
export interface IListWifiProfileReply {

    /** ListWifiProfileReply result */
    result: Result;

    /** ListWifiProfileReply SSID */
    SSID: string;

    /** ListWifiProfileReply bearerTokenSet */
    bearerTokenSet?: boolean;

    /** ListWifiProfileReply connectionStatus */
    connectionStatus?: WifiConnectionStatus;

    /** ListWifiProfileReply timeSinceLastPacketMS */
    timeSinceLastPacketMS?: number;

    /** ListWifiProfileReply cloudStatus */
    cloudStatus?: number;

    /** ListWifiProfileReply MACADDR */
    MACADDR?: Uint8Array;
}

/** Represents a ListWifiProfileReply. */
export class ListWifiProfileReply {

    /**
     * Constructs a new ListWifiProfileReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListWifiProfileReply);

    /** ListWifiProfileReply result. */
    public result: Result;

    /** ListWifiProfileReply SSID. */
    public SSID: string;

    /** ListWifiProfileReply bearerTokenSet. */
    public bearerTokenSet: boolean;

    /** ListWifiProfileReply connectionStatus. */
    public connectionStatus: WifiConnectionStatus;

    /** ListWifiProfileReply timeSinceLastPacketMS. */
    public timeSinceLastPacketMS: number;

    /** ListWifiProfileReply cloudStatus. */
    public cloudStatus: number;

    /** ListWifiProfileReply MACADDR. */
    public MACADDR: Uint8Array;

    /**
     * Creates a new ListWifiProfileReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListWifiProfileReply instance
     */
    public static create(properties?: IListWifiProfileReply): ListWifiProfileReply;

    /**
     * Encodes the specified ListWifiProfileReply message. Does not implicitly {@link ListWifiProfileReply.verify|verify} messages.
     * @param message ListWifiProfileReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListWifiProfileReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListWifiProfileReply message, length delimited. Does not implicitly {@link ListWifiProfileReply.verify|verify} messages.
     * @param message ListWifiProfileReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListWifiProfileReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListWifiProfileReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListWifiProfileReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListWifiProfileReply;

    /**
     * Decodes a ListWifiProfileReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListWifiProfileReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListWifiProfileReply;

    /**
     * Verifies a ListWifiProfileReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListWifiProfileReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListWifiProfileReply
     */
    public static fromObject(object: { [k: string]: any }): ListWifiProfileReply;

    /**
     * Creates a plain object from a ListWifiProfileReply message. Also converts values to other types if specified.
     * @param message ListWifiProfileReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListWifiProfileReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListWifiProfileReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ForgetWifiProfileRequest. */
export interface IForgetWifiProfileRequest {
}

/** Represents a ForgetWifiProfileRequest. */
export class ForgetWifiProfileRequest {

    /**
     * Constructs a new ForgetWifiProfileRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IForgetWifiProfileRequest);

    /**
     * Creates a new ForgetWifiProfileRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForgetWifiProfileRequest instance
     */
    public static create(properties?: IForgetWifiProfileRequest): ForgetWifiProfileRequest;

    /**
     * Encodes the specified ForgetWifiProfileRequest message. Does not implicitly {@link ForgetWifiProfileRequest.verify|verify} messages.
     * @param message ForgetWifiProfileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IForgetWifiProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ForgetWifiProfileRequest message, length delimited. Does not implicitly {@link ForgetWifiProfileRequest.verify|verify} messages.
     * @param message ForgetWifiProfileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IForgetWifiProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ForgetWifiProfileRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ForgetWifiProfileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForgetWifiProfileRequest;

    /**
     * Decodes a ForgetWifiProfileRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ForgetWifiProfileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ForgetWifiProfileRequest;

    /**
     * Verifies a ForgetWifiProfileRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ForgetWifiProfileRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ForgetWifiProfileRequest
     */
    public static fromObject(object: { [k: string]: any }): ForgetWifiProfileRequest;

    /**
     * Creates a plain object from a ForgetWifiProfileRequest message. Also converts values to other types if specified.
     * @param message ForgetWifiProfileRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ForgetWifiProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ForgetWifiProfileRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ForgetWifiProfileReply. */
export interface IForgetWifiProfileReply {

    /** ForgetWifiProfileReply result */
    result?: Result;
}

/** Represents a ForgetWifiProfileReply. */
export class ForgetWifiProfileReply {

    /**
     * Constructs a new ForgetWifiProfileReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IForgetWifiProfileReply);

    /** ForgetWifiProfileReply result. */
    public result: Result;

    /**
     * Creates a new ForgetWifiProfileReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForgetWifiProfileReply instance
     */
    public static create(properties?: IForgetWifiProfileReply): ForgetWifiProfileReply;

    /**
     * Encodes the specified ForgetWifiProfileReply message. Does not implicitly {@link ForgetWifiProfileReply.verify|verify} messages.
     * @param message ForgetWifiProfileReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IForgetWifiProfileReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ForgetWifiProfileReply message, length delimited. Does not implicitly {@link ForgetWifiProfileReply.verify|verify} messages.
     * @param message ForgetWifiProfileReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IForgetWifiProfileReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ForgetWifiProfileReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ForgetWifiProfileReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForgetWifiProfileReply;

    /**
     * Decodes a ForgetWifiProfileReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ForgetWifiProfileReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ForgetWifiProfileReply;

    /**
     * Verifies a ForgetWifiProfileReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ForgetWifiProfileReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ForgetWifiProfileReply
     */
    public static fromObject(object: { [k: string]: any }): ForgetWifiProfileReply;

    /**
     * Creates a plain object from a ForgetWifiProfileReply message. Also converts values to other types if specified.
     * @param message ForgetWifiProfileReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ForgetWifiProfileReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ForgetWifiProfileReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DisconnectWifiRequest. */
export interface IDisconnectWifiRequest {
}

/** Represents a DisconnectWifiRequest. */
export class DisconnectWifiRequest {

    /**
     * Constructs a new DisconnectWifiRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisconnectWifiRequest);

    /**
     * Creates a new DisconnectWifiRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisconnectWifiRequest instance
     */
    public static create(properties?: IDisconnectWifiRequest): DisconnectWifiRequest;

    /**
     * Encodes the specified DisconnectWifiRequest message. Does not implicitly {@link DisconnectWifiRequest.verify|verify} messages.
     * @param message DisconnectWifiRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisconnectWifiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisconnectWifiRequest message, length delimited. Does not implicitly {@link DisconnectWifiRequest.verify|verify} messages.
     * @param message DisconnectWifiRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisconnectWifiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisconnectWifiRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisconnectWifiRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisconnectWifiRequest;

    /**
     * Decodes a DisconnectWifiRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisconnectWifiRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisconnectWifiRequest;

    /**
     * Verifies a DisconnectWifiRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisconnectWifiRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisconnectWifiRequest
     */
    public static fromObject(object: { [k: string]: any }): DisconnectWifiRequest;

    /**
     * Creates a plain object from a DisconnectWifiRequest message. Also converts values to other types if specified.
     * @param message DisconnectWifiRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisconnectWifiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisconnectWifiRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DisconnectWifiReply. */
export interface IDisconnectWifiReply {

    /** DisconnectWifiReply result */
    result?: Result;
}

/** Represents a DisconnectWifiReply. */
export class DisconnectWifiReply {

    /**
     * Constructs a new DisconnectWifiReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisconnectWifiReply);

    /** DisconnectWifiReply result. */
    public result: Result;

    /**
     * Creates a new DisconnectWifiReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisconnectWifiReply instance
     */
    public static create(properties?: IDisconnectWifiReply): DisconnectWifiReply;

    /**
     * Encodes the specified DisconnectWifiReply message. Does not implicitly {@link DisconnectWifiReply.verify|verify} messages.
     * @param message DisconnectWifiReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisconnectWifiReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisconnectWifiReply message, length delimited. Does not implicitly {@link DisconnectWifiReply.verify|verify} messages.
     * @param message DisconnectWifiReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisconnectWifiReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisconnectWifiReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisconnectWifiReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisconnectWifiReply;

    /**
     * Decodes a DisconnectWifiReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisconnectWifiReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisconnectWifiReply;

    /**
     * Verifies a DisconnectWifiReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisconnectWifiReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisconnectWifiReply
     */
    public static fromObject(object: { [k: string]: any }): DisconnectWifiReply;

    /**
     * Creates a plain object from a DisconnectWifiReply message. Also converts values to other types if specified.
     * @param message DisconnectWifiReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisconnectWifiReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisconnectWifiReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WifiDFUStatusRequest. */
export interface IWifiDFUStatusRequest {
}

/** Represents a WifiDFUStatusRequest. */
export class WifiDFUStatusRequest {

    /**
     * Constructs a new WifiDFUStatusRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWifiDFUStatusRequest);

    /**
     * Creates a new WifiDFUStatusRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WifiDFUStatusRequest instance
     */
    public static create(properties?: IWifiDFUStatusRequest): WifiDFUStatusRequest;

    /**
     * Encodes the specified WifiDFUStatusRequest message. Does not implicitly {@link WifiDFUStatusRequest.verify|verify} messages.
     * @param message WifiDFUStatusRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWifiDFUStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WifiDFUStatusRequest message, length delimited. Does not implicitly {@link WifiDFUStatusRequest.verify|verify} messages.
     * @param message WifiDFUStatusRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWifiDFUStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WifiDFUStatusRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WifiDFUStatusRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WifiDFUStatusRequest;

    /**
     * Decodes a WifiDFUStatusRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WifiDFUStatusRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WifiDFUStatusRequest;

    /**
     * Verifies a WifiDFUStatusRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WifiDFUStatusRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WifiDFUStatusRequest
     */
    public static fromObject(object: { [k: string]: any }): WifiDFUStatusRequest;

    /**
     * Creates a plain object from a WifiDFUStatusRequest message. Also converts values to other types if specified.
     * @param message WifiDFUStatusRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WifiDFUStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WifiDFUStatusRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WifiDFUSlotStatus. */
export interface IWifiDFUSlotStatus {

    /** WifiDFUSlotStatus valid */
    valid: boolean;

    /** WifiDFUSlotStatus sha256 */
    sha256?: Uint8Array;
}

/** Represents a WifiDFUSlotStatus. */
export class WifiDFUSlotStatus {

    /**
     * Constructs a new WifiDFUSlotStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWifiDFUSlotStatus);

    /** WifiDFUSlotStatus valid. */
    public valid: boolean;

    /** WifiDFUSlotStatus sha256. */
    public sha256: Uint8Array;

    /**
     * Creates a new WifiDFUSlotStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WifiDFUSlotStatus instance
     */
    public static create(properties?: IWifiDFUSlotStatus): WifiDFUSlotStatus;

    /**
     * Encodes the specified WifiDFUSlotStatus message. Does not implicitly {@link WifiDFUSlotStatus.verify|verify} messages.
     * @param message WifiDFUSlotStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWifiDFUSlotStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WifiDFUSlotStatus message, length delimited. Does not implicitly {@link WifiDFUSlotStatus.verify|verify} messages.
     * @param message WifiDFUSlotStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWifiDFUSlotStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WifiDFUSlotStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WifiDFUSlotStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WifiDFUSlotStatus;

    /**
     * Decodes a WifiDFUSlotStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WifiDFUSlotStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WifiDFUSlotStatus;

    /**
     * Verifies a WifiDFUSlotStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WifiDFUSlotStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WifiDFUSlotStatus
     */
    public static fromObject(object: { [k: string]: any }): WifiDFUSlotStatus;

    /**
     * Creates a plain object from a WifiDFUSlotStatus message. Also converts values to other types if specified.
     * @param message WifiDFUSlotStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WifiDFUSlotStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WifiDFUSlotStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WifiDFUStatusReply. */
export interface IWifiDFUStatusReply {

    /** WifiDFUStatusReply result */
    result: Result;

    /** WifiDFUStatusReply runningSlot */
    runningSlot: number;

    /** WifiDFUStatusReply slot */
    slot?: IWifiDFUSlotStatus[];
}

/** Represents a WifiDFUStatusReply. */
export class WifiDFUStatusReply {

    /**
     * Constructs a new WifiDFUStatusReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWifiDFUStatusReply);

    /** WifiDFUStatusReply result. */
    public result: Result;

    /** WifiDFUStatusReply runningSlot. */
    public runningSlot: number;

    /** WifiDFUStatusReply slot. */
    public slot: IWifiDFUSlotStatus[];

    /**
     * Creates a new WifiDFUStatusReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WifiDFUStatusReply instance
     */
    public static create(properties?: IWifiDFUStatusReply): WifiDFUStatusReply;

    /**
     * Encodes the specified WifiDFUStatusReply message. Does not implicitly {@link WifiDFUStatusReply.verify|verify} messages.
     * @param message WifiDFUStatusReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWifiDFUStatusReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WifiDFUStatusReply message, length delimited. Does not implicitly {@link WifiDFUStatusReply.verify|verify} messages.
     * @param message WifiDFUStatusReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWifiDFUStatusReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WifiDFUStatusReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WifiDFUStatusReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WifiDFUStatusReply;

    /**
     * Decodes a WifiDFUStatusReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WifiDFUStatusReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WifiDFUStatusReply;

    /**
     * Verifies a WifiDFUStatusReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WifiDFUStatusReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WifiDFUStatusReply
     */
    public static fromObject(object: { [k: string]: any }): WifiDFUStatusReply;

    /**
     * Creates a plain object from a WifiDFUStatusReply message. Also converts values to other types if specified.
     * @param message WifiDFUStatusReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WifiDFUStatusReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WifiDFUStatusReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WifiDFUSetFirmware. */
export interface IWifiDFUSetFirmware {

    /** WifiDFUSetFirmware sha256 */
    sha256: Uint8Array;
}

/** Represents a WifiDFUSetFirmware. */
export class WifiDFUSetFirmware {

    /**
     * Constructs a new WifiDFUSetFirmware.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWifiDFUSetFirmware);

    /** WifiDFUSetFirmware sha256. */
    public sha256: Uint8Array;

    /**
     * Creates a new WifiDFUSetFirmware instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WifiDFUSetFirmware instance
     */
    public static create(properties?: IWifiDFUSetFirmware): WifiDFUSetFirmware;

    /**
     * Encodes the specified WifiDFUSetFirmware message. Does not implicitly {@link WifiDFUSetFirmware.verify|verify} messages.
     * @param message WifiDFUSetFirmware message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWifiDFUSetFirmware, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WifiDFUSetFirmware message, length delimited. Does not implicitly {@link WifiDFUSetFirmware.verify|verify} messages.
     * @param message WifiDFUSetFirmware message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWifiDFUSetFirmware, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WifiDFUSetFirmware message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WifiDFUSetFirmware
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WifiDFUSetFirmware;

    /**
     * Decodes a WifiDFUSetFirmware message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WifiDFUSetFirmware
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WifiDFUSetFirmware;

    /**
     * Verifies a WifiDFUSetFirmware message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WifiDFUSetFirmware message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WifiDFUSetFirmware
     */
    public static fromObject(object: { [k: string]: any }): WifiDFUSetFirmware;

    /**
     * Creates a plain object from a WifiDFUSetFirmware message. Also converts values to other types if specified.
     * @param message WifiDFUSetFirmware
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WifiDFUSetFirmware, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WifiDFUSetFirmware to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a WifiDFUDownloadTFTPRequest. */
export interface IWifiDFUDownloadTFTPRequest {

    /** WifiDFUDownloadTFTPRequest host */
    host: string;

    /** WifiDFUDownloadTFTPRequest filename */
    filename: string;

    /** WifiDFUDownloadTFTPRequest sha256 */
    sha256: Uint8Array;

    /** WifiDFUDownloadTFTPRequest useHTTP */
    useHTTP?: boolean;
}

/** Represents a WifiDFUDownloadTFTPRequest. */
export class WifiDFUDownloadTFTPRequest {

    /**
     * Constructs a new WifiDFUDownloadTFTPRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWifiDFUDownloadTFTPRequest);

    /** WifiDFUDownloadTFTPRequest host. */
    public host: string;

    /** WifiDFUDownloadTFTPRequest filename. */
    public filename: string;

    /** WifiDFUDownloadTFTPRequest sha256. */
    public sha256: Uint8Array;

    /** WifiDFUDownloadTFTPRequest useHTTP. */
    public useHTTP: boolean;

    /**
     * Creates a new WifiDFUDownloadTFTPRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WifiDFUDownloadTFTPRequest instance
     */
    public static create(properties?: IWifiDFUDownloadTFTPRequest): WifiDFUDownloadTFTPRequest;

    /**
     * Encodes the specified WifiDFUDownloadTFTPRequest message. Does not implicitly {@link WifiDFUDownloadTFTPRequest.verify|verify} messages.
     * @param message WifiDFUDownloadTFTPRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWifiDFUDownloadTFTPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WifiDFUDownloadTFTPRequest message, length delimited. Does not implicitly {@link WifiDFUDownloadTFTPRequest.verify|verify} messages.
     * @param message WifiDFUDownloadTFTPRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWifiDFUDownloadTFTPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WifiDFUDownloadTFTPRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WifiDFUDownloadTFTPRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WifiDFUDownloadTFTPRequest;

    /**
     * Decodes a WifiDFUDownloadTFTPRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WifiDFUDownloadTFTPRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WifiDFUDownloadTFTPRequest;

    /**
     * Verifies a WifiDFUDownloadTFTPRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WifiDFUDownloadTFTPRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WifiDFUDownloadTFTPRequest
     */
    public static fromObject(object: { [k: string]: any }): WifiDFUDownloadTFTPRequest;

    /**
     * Creates a plain object from a WifiDFUDownloadTFTPRequest message. Also converts values to other types if specified.
     * @param message WifiDFUDownloadTFTPRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WifiDFUDownloadTFTPRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WifiDFUDownloadTFTPRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** WifiDFUDownloadTFTPStatus enum. */
export enum WifiDFUDownloadTFTPStatus {
    API_ERROR = -32,
    FAILED = 0,
    SUCCESS = 1,
    ONGOING = 2,
    FAILED_TIMEOUT = 3,
    FAILED_ROUTING = 4,
    FAILED_SHASUM = 5,
    FAILED_SLOT_ACTIVE = 6,
    FAILED_SLOT_FACTORY = 7,
    FAILED_SLOT_INVALID = 8,
    FAILED_BAD_IMAGE = 9,
    FAILED_BAD_ADDRESS = 10
}

/** Properties of a WifiDFUDownloadTFTPResponse. */
export interface IWifiDFUDownloadTFTPResponse {

    /** WifiDFUDownloadTFTPResponse status */
    status: WifiDFUDownloadTFTPStatus;

    /** WifiDFUDownloadTFTPResponse bytesRead */
    bytesRead?: number;
}

/** Represents a WifiDFUDownloadTFTPResponse. */
export class WifiDFUDownloadTFTPResponse {

    /**
     * Constructs a new WifiDFUDownloadTFTPResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWifiDFUDownloadTFTPResponse);

    /** WifiDFUDownloadTFTPResponse status. */
    public status: WifiDFUDownloadTFTPStatus;

    /** WifiDFUDownloadTFTPResponse bytesRead. */
    public bytesRead: number;

    /**
     * Creates a new WifiDFUDownloadTFTPResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WifiDFUDownloadTFTPResponse instance
     */
    public static create(properties?: IWifiDFUDownloadTFTPResponse): WifiDFUDownloadTFTPResponse;

    /**
     * Encodes the specified WifiDFUDownloadTFTPResponse message. Does not implicitly {@link WifiDFUDownloadTFTPResponse.verify|verify} messages.
     * @param message WifiDFUDownloadTFTPResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWifiDFUDownloadTFTPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WifiDFUDownloadTFTPResponse message, length delimited. Does not implicitly {@link WifiDFUDownloadTFTPResponse.verify|verify} messages.
     * @param message WifiDFUDownloadTFTPResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWifiDFUDownloadTFTPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WifiDFUDownloadTFTPResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WifiDFUDownloadTFTPResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WifiDFUDownloadTFTPResponse;

    /**
     * Decodes a WifiDFUDownloadTFTPResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WifiDFUDownloadTFTPResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WifiDFUDownloadTFTPResponse;

    /**
     * Verifies a WifiDFUDownloadTFTPResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WifiDFUDownloadTFTPResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WifiDFUDownloadTFTPResponse
     */
    public static fromObject(object: { [k: string]: any }): WifiDFUDownloadTFTPResponse;

    /**
     * Creates a plain object from a WifiDFUDownloadTFTPResponse message. Also converts values to other types if specified.
     * @param message WifiDFUDownloadTFTPResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WifiDFUDownloadTFTPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WifiDFUDownloadTFTPResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DescribeFeedRequest. */
export interface IDescribeFeedRequest {

    /** DescribeFeedRequest feedId */
    feedId: number;
}

/** Represents a DescribeFeedRequest. */
export class DescribeFeedRequest {

    /**
     * Constructs a new DescribeFeedRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDescribeFeedRequest);

    /** DescribeFeedRequest feedId. */
    public feedId: number;

    /**
     * Creates a new DescribeFeedRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DescribeFeedRequest instance
     */
    public static create(properties?: IDescribeFeedRequest): DescribeFeedRequest;

    /**
     * Encodes the specified DescribeFeedRequest message. Does not implicitly {@link DescribeFeedRequest.verify|verify} messages.
     * @param message DescribeFeedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDescribeFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DescribeFeedRequest message, length delimited. Does not implicitly {@link DescribeFeedRequest.verify|verify} messages.
     * @param message DescribeFeedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDescribeFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DescribeFeedRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DescribeFeedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DescribeFeedRequest;

    /**
     * Decodes a DescribeFeedRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DescribeFeedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DescribeFeedRequest;

    /**
     * Verifies a DescribeFeedRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DescribeFeedRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DescribeFeedRequest
     */
    public static fromObject(object: { [k: string]: any }): DescribeFeedRequest;

    /**
     * Creates a plain object from a DescribeFeedRequest message. Also converts values to other types if specified.
     * @param message DescribeFeedRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DescribeFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DescribeFeedRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DescribeFeedReply. */
export interface IDescribeFeedReply {

    /** DescribeFeedReply feedId */
    feedId: number;

    /** DescribeFeedReply circulatorProgram */
    circulatorProgram?: ICirculatorProgram;

    /** DescribeFeedReply result */
    result?: Result;
}

/** Represents a DescribeFeedReply. */
export class DescribeFeedReply {

    /**
     * Constructs a new DescribeFeedReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDescribeFeedReply);

    /** DescribeFeedReply feedId. */
    public feedId: number;

    /** DescribeFeedReply circulatorProgram. */
    public circulatorProgram?: (ICirculatorProgram|null);

    /** DescribeFeedReply result. */
    public result: Result;

    /**
     * Creates a new DescribeFeedReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DescribeFeedReply instance
     */
    public static create(properties?: IDescribeFeedReply): DescribeFeedReply;

    /**
     * Encodes the specified DescribeFeedReply message. Does not implicitly {@link DescribeFeedReply.verify|verify} messages.
     * @param message DescribeFeedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDescribeFeedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DescribeFeedReply message, length delimited. Does not implicitly {@link DescribeFeedReply.verify|verify} messages.
     * @param message DescribeFeedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDescribeFeedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DescribeFeedReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DescribeFeedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DescribeFeedReply;

    /**
     * Decodes a DescribeFeedReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DescribeFeedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DescribeFeedReply;

    /**
     * Verifies a DescribeFeedReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DescribeFeedReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DescribeFeedReply
     */
    public static fromObject(object: { [k: string]: any }): DescribeFeedReply;

    /**
     * Creates a plain object from a DescribeFeedReply message. Also converts values to other types if specified.
     * @param message DescribeFeedReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DescribeFeedReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DescribeFeedReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListFeedsRequest. */
export interface IListFeedsRequest {
}

/** Represents a ListFeedsRequest. */
export class ListFeedsRequest {

    /**
     * Constructs a new ListFeedsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListFeedsRequest);

    /**
     * Creates a new ListFeedsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListFeedsRequest instance
     */
    public static create(properties?: IListFeedsRequest): ListFeedsRequest;

    /**
     * Encodes the specified ListFeedsRequest message. Does not implicitly {@link ListFeedsRequest.verify|verify} messages.
     * @param message ListFeedsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListFeedsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListFeedsRequest message, length delimited. Does not implicitly {@link ListFeedsRequest.verify|verify} messages.
     * @param message ListFeedsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListFeedsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListFeedsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListFeedsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListFeedsRequest;

    /**
     * Decodes a ListFeedsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListFeedsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListFeedsRequest;

    /**
     * Verifies a ListFeedsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListFeedsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListFeedsRequest
     */
    public static fromObject(object: { [k: string]: any }): ListFeedsRequest;

    /**
     * Creates a plain object from a ListFeedsRequest message. Also converts values to other types if specified.
     * @param message ListFeedsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListFeedsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListFeedsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListFeedsReply. */
export interface IListFeedsReply {

    /** ListFeedsReply feedId */
    feedId: number;

    /** ListFeedsReply feedType */
    feedType: FeedType;

    /** ListFeedsReply active */
    active?: boolean;

    /** ListFeedsReply result */
    result?: Result;
}

/** Represents a ListFeedsReply. */
export class ListFeedsReply {

    /**
     * Constructs a new ListFeedsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListFeedsReply);

    /** ListFeedsReply feedId. */
    public feedId: number;

    /** ListFeedsReply feedType. */
    public feedType: FeedType;

    /** ListFeedsReply active. */
    public active: boolean;

    /** ListFeedsReply result. */
    public result: Result;

    /**
     * Creates a new ListFeedsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListFeedsReply instance
     */
    public static create(properties?: IListFeedsReply): ListFeedsReply;

    /**
     * Encodes the specified ListFeedsReply message. Does not implicitly {@link ListFeedsReply.verify|verify} messages.
     * @param message ListFeedsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListFeedsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListFeedsReply message, length delimited. Does not implicitly {@link ListFeedsReply.verify|verify} messages.
     * @param message ListFeedsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListFeedsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListFeedsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListFeedsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListFeedsReply;

    /**
     * Decodes a ListFeedsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListFeedsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListFeedsReply;

    /**
     * Verifies a ListFeedsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListFeedsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListFeedsReply
     */
    public static fromObject(object: { [k: string]: any }): ListFeedsReply;

    /**
     * Creates a plain object from a ListFeedsReply message. Also converts values to other types if specified.
     * @param message ListFeedsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListFeedsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListFeedsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** FeedType enum. */
export enum FeedType {
    COOK_DATA = 1,
    DEBUG = 2,
    NETWORK_BLUETOOTH = 3,
    NETWORK_WIFI = 4
}

/** Properties of a BeginLiveFeed. */
export interface IBeginLiveFeed {

    /** BeginLiveFeed feedType */
    feedType: FeedType;
}

/** Represents a BeginLiveFeed. */
export class BeginLiveFeed {

    /**
     * Constructs a new BeginLiveFeed.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBeginLiveFeed);

    /** BeginLiveFeed feedType. */
    public feedType: FeedType;

    /**
     * Creates a new BeginLiveFeed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeginLiveFeed instance
     */
    public static create(properties?: IBeginLiveFeed): BeginLiveFeed;

    /**
     * Encodes the specified BeginLiveFeed message. Does not implicitly {@link BeginLiveFeed.verify|verify} messages.
     * @param message BeginLiveFeed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBeginLiveFeed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BeginLiveFeed message, length delimited. Does not implicitly {@link BeginLiveFeed.verify|verify} messages.
     * @param message BeginLiveFeed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBeginLiveFeed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeginLiveFeed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BeginLiveFeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BeginLiveFeed;

    /**
     * Decodes a BeginLiveFeed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BeginLiveFeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BeginLiveFeed;

    /**
     * Verifies a BeginLiveFeed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BeginLiveFeed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BeginLiveFeed
     */
    public static fromObject(object: { [k: string]: any }): BeginLiveFeed;

    /**
     * Creates a plain object from a BeginLiveFeed message. Also converts values to other types if specified.
     * @param message BeginLiveFeed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BeginLiveFeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BeginLiveFeed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BeginLiveFeedReply. */
export interface IBeginLiveFeedReply {

    /** BeginLiveFeedReply result */
    result?: Result;
}

/** Represents a BeginLiveFeedReply. */
export class BeginLiveFeedReply {

    /**
     * Constructs a new BeginLiveFeedReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBeginLiveFeedReply);

    /** BeginLiveFeedReply result. */
    public result: Result;

    /**
     * Creates a new BeginLiveFeedReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeginLiveFeedReply instance
     */
    public static create(properties?: IBeginLiveFeedReply): BeginLiveFeedReply;

    /**
     * Encodes the specified BeginLiveFeedReply message. Does not implicitly {@link BeginLiveFeedReply.verify|verify} messages.
     * @param message BeginLiveFeedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBeginLiveFeedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BeginLiveFeedReply message, length delimited. Does not implicitly {@link BeginLiveFeedReply.verify|verify} messages.
     * @param message BeginLiveFeedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBeginLiveFeedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeginLiveFeedReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BeginLiveFeedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BeginLiveFeedReply;

    /**
     * Decodes a BeginLiveFeedReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BeginLiveFeedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BeginLiveFeedReply;

    /**
     * Verifies a BeginLiveFeedReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BeginLiveFeedReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BeginLiveFeedReply
     */
    public static fromObject(object: { [k: string]: any }): BeginLiveFeedReply;

    /**
     * Creates a plain object from a BeginLiveFeedReply message. Also converts values to other types if specified.
     * @param message BeginLiveFeedReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BeginLiveFeedReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BeginLiveFeedReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BeginLiveFeedError. */
export interface IBeginLiveFeedError {
}

/** Represents a BeginLiveFeedError. */
export class BeginLiveFeedError {

    /**
     * Constructs a new BeginLiveFeedError.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBeginLiveFeedError);

    /**
     * Creates a new BeginLiveFeedError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BeginLiveFeedError instance
     */
    public static create(properties?: IBeginLiveFeedError): BeginLiveFeedError;

    /**
     * Encodes the specified BeginLiveFeedError message. Does not implicitly {@link BeginLiveFeedError.verify|verify} messages.
     * @param message BeginLiveFeedError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBeginLiveFeedError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BeginLiveFeedError message, length delimited. Does not implicitly {@link BeginLiveFeedError.verify|verify} messages.
     * @param message BeginLiveFeedError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBeginLiveFeedError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BeginLiveFeedError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BeginLiveFeedError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BeginLiveFeedError;

    /**
     * Decodes a BeginLiveFeedError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BeginLiveFeedError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BeginLiveFeedError;

    /**
     * Verifies a BeginLiveFeedError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BeginLiveFeedError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BeginLiveFeedError
     */
    public static fromObject(object: { [k: string]: any }): BeginLiveFeedError;

    /**
     * Creates a plain object from a BeginLiveFeedError message. Also converts values to other types if specified.
     * @param message BeginLiveFeedError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BeginLiveFeedError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BeginLiveFeedError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace BeginLiveFeedError {

    /** LiveFeedErrorType enum. */
    enum LiveFeedErrorType {
        NO_ACTIVE_FEED = 1
    }
}

/** Properties of a CirculatorDataPoint. */
export interface ICirculatorDataPoint {

    /** CirculatorDataPoint feedId */
    feedId: number;

    /** CirculatorDataPoint sequenceNumber */
    sequenceNumber: number;

    /** CirculatorDataPoint timestamp */
    timestamp: number;

    /** CirculatorDataPoint errorState */
    errorState?: ErrorState;

    /** CirculatorDataPoint bathTemp */
    bathTemp: number;

    /** CirculatorDataPoint programStep */
    programStep?: ProgramStep;

    /** CirculatorDataPoint timeRemaining */
    timeRemaining?: number;

    /** CirculatorDataPoint heaterTemp */
    heaterTemp?: number;

    /** CirculatorDataPoint upperBoardTemp */
    upperBoardTemp?: number;

    /** CirculatorDataPoint lowerBoardTemp */
    lowerBoardTemp?: number;

    /** CirculatorDataPoint motorRPM */
    motorRPM?: number;

    /** CirculatorDataPoint heaterPWM */
    heaterPWM?: number;

    /** CirculatorDataPoint motorVoltage */
    motorVoltage?: number;

    /** CirculatorDataPoint motorPWM */
    motorPWM?: number;

    /** CirculatorDataPoint motorCurrent */
    motorCurrent?: number;

    /** CirculatorDataPoint pressure */
    pressure?: number;

    /** CirculatorDataPoint motorFaultFlag */
    motorFaultFlag?: number;

    /** CirculatorDataPoint motorPeakCurrent */
    motorPeakCurrent?: number;
}

/** Represents a CirculatorDataPoint. */
export class CirculatorDataPoint {

    /**
     * Constructs a new CirculatorDataPoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICirculatorDataPoint);

    /** CirculatorDataPoint feedId. */
    public feedId: number;

    /** CirculatorDataPoint sequenceNumber. */
    public sequenceNumber: number;

    /** CirculatorDataPoint timestamp. */
    public timestamp: number;

    /** CirculatorDataPoint errorState. */
    public errorState: ErrorState;

    /** CirculatorDataPoint bathTemp. */
    public bathTemp: number;

    /** CirculatorDataPoint programStep. */
    public programStep: ProgramStep;

    /** CirculatorDataPoint timeRemaining. */
    public timeRemaining: number;

    /** CirculatorDataPoint heaterTemp. */
    public heaterTemp: number;

    /** CirculatorDataPoint upperBoardTemp. */
    public upperBoardTemp: number;

    /** CirculatorDataPoint lowerBoardTemp. */
    public lowerBoardTemp: number;

    /** CirculatorDataPoint motorRPM. */
    public motorRPM: number;

    /** CirculatorDataPoint heaterPWM. */
    public heaterPWM: number;

    /** CirculatorDataPoint motorVoltage. */
    public motorVoltage: number;

    /** CirculatorDataPoint motorPWM. */
    public motorPWM: number;

    /** CirculatorDataPoint motorCurrent. */
    public motorCurrent: number;

    /** CirculatorDataPoint pressure. */
    public pressure: number;

    /** CirculatorDataPoint motorFaultFlag. */
    public motorFaultFlag: number;

    /** CirculatorDataPoint motorPeakCurrent. */
    public motorPeakCurrent: number;

    /**
     * Creates a new CirculatorDataPoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CirculatorDataPoint instance
     */
    public static create(properties?: ICirculatorDataPoint): CirculatorDataPoint;

    /**
     * Encodes the specified CirculatorDataPoint message. Does not implicitly {@link CirculatorDataPoint.verify|verify} messages.
     * @param message CirculatorDataPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICirculatorDataPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CirculatorDataPoint message, length delimited. Does not implicitly {@link CirculatorDataPoint.verify|verify} messages.
     * @param message CirculatorDataPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICirculatorDataPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CirculatorDataPoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CirculatorDataPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CirculatorDataPoint;

    /**
     * Decodes a CirculatorDataPoint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CirculatorDataPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CirculatorDataPoint;

    /**
     * Verifies a CirculatorDataPoint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CirculatorDataPoint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CirculatorDataPoint
     */
    public static fromObject(object: { [k: string]: any }): CirculatorDataPoint;

    /**
     * Creates a plain object from a CirculatorDataPoint message. Also converts values to other types if specified.
     * @param message CirculatorDataPoint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CirculatorDataPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CirculatorDataPoint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** LogLevel enum. */
export enum LogLevel {
    LOG_DEBUG = 0,
    LOG_INFO = 1,
    LOG_WARNING = 2,
    LOG_ERROR = 3,
    LOG_FATAL = 4
}

/** Properties of a DebugMessage. */
export interface IDebugMessage {

    /** DebugMessage feedId */
    feedId: number;

    /** DebugMessage sequenceNumber */
    sequenceNumber: number;

    /** DebugMessage timestamp */
    timestamp: number;

    /** DebugMessage logLevel */
    logLevel: LogLevel;

    /** DebugMessage source */
    source?: string;

    /** DebugMessage event */
    event?: string;

    /** DebugMessage message */
    message?: string;
}

/** Represents a DebugMessage. */
export class DebugMessage {

    /**
     * Constructs a new DebugMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDebugMessage);

    /** DebugMessage feedId. */
    public feedId: number;

    /** DebugMessage sequenceNumber. */
    public sequenceNumber: number;

    /** DebugMessage timestamp. */
    public timestamp: number;

    /** DebugMessage logLevel. */
    public logLevel: LogLevel;

    /** DebugMessage source. */
    public source: string;

    /** DebugMessage event. */
    public event: string;

    /** DebugMessage message. */
    public message: string;

    /**
     * Creates a new DebugMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DebugMessage instance
     */
    public static create(properties?: IDebugMessage): DebugMessage;

    /**
     * Encodes the specified DebugMessage message. Does not implicitly {@link DebugMessage.verify|verify} messages.
     * @param message DebugMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDebugMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DebugMessage message, length delimited. Does not implicitly {@link DebugMessage.verify|verify} messages.
     * @param message DebugMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDebugMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DebugMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DebugMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DebugMessage;

    /**
     * Decodes a DebugMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DebugMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DebugMessage;

    /**
     * Verifies a DebugMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DebugMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DebugMessage
     */
    public static fromObject(object: { [k: string]: any }): DebugMessage;

    /**
     * Creates a plain object from a DebugMessage message. Also converts values to other types if specified.
     * @param message DebugMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DebugMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DebugMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RetransmitFeedRequest. */
export interface IRetransmitFeedRequest {

    /** RetransmitFeedRequest feedId */
    feedId: number;

    /** RetransmitFeedRequest seqStart */
    seqStart: number;

    /** RetransmitFeedRequest seqEnd */
    seqEnd: number;
}

/** Represents a RetransmitFeedRequest. */
export class RetransmitFeedRequest {

    /**
     * Constructs a new RetransmitFeedRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRetransmitFeedRequest);

    /** RetransmitFeedRequest feedId. */
    public feedId: number;

    /** RetransmitFeedRequest seqStart. */
    public seqStart: number;

    /** RetransmitFeedRequest seqEnd. */
    public seqEnd: number;

    /**
     * Creates a new RetransmitFeedRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RetransmitFeedRequest instance
     */
    public static create(properties?: IRetransmitFeedRequest): RetransmitFeedRequest;

    /**
     * Encodes the specified RetransmitFeedRequest message. Does not implicitly {@link RetransmitFeedRequest.verify|verify} messages.
     * @param message RetransmitFeedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRetransmitFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RetransmitFeedRequest message, length delimited. Does not implicitly {@link RetransmitFeedRequest.verify|verify} messages.
     * @param message RetransmitFeedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRetransmitFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RetransmitFeedRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RetransmitFeedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RetransmitFeedRequest;

    /**
     * Decodes a RetransmitFeedRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RetransmitFeedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RetransmitFeedRequest;

    /**
     * Verifies a RetransmitFeedRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RetransmitFeedRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RetransmitFeedRequest
     */
    public static fromObject(object: { [k: string]: any }): RetransmitFeedRequest;

    /**
     * Creates a plain object from a RetransmitFeedRequest message. Also converts values to other types if specified.
     * @param message RetransmitFeedRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RetransmitFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RetransmitFeedRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RetransmitFeedReply. */
export interface IRetransmitFeedReply {

    /** RetransmitFeedReply result */
    result?: Result;
}

/** Represents a RetransmitFeedReply. */
export class RetransmitFeedReply {

    /**
     * Constructs a new RetransmitFeedReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRetransmitFeedReply);

    /** RetransmitFeedReply result. */
    public result: Result;

    /**
     * Creates a new RetransmitFeedReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RetransmitFeedReply instance
     */
    public static create(properties?: IRetransmitFeedReply): RetransmitFeedReply;

    /**
     * Encodes the specified RetransmitFeedReply message. Does not implicitly {@link RetransmitFeedReply.verify|verify} messages.
     * @param message RetransmitFeedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRetransmitFeedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RetransmitFeedReply message, length delimited. Does not implicitly {@link RetransmitFeedReply.verify|verify} messages.
     * @param message RetransmitFeedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRetransmitFeedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RetransmitFeedReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RetransmitFeedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RetransmitFeedReply;

    /**
     * Decodes a RetransmitFeedReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RetransmitFeedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RetransmitFeedReply;

    /**
     * Verifies a RetransmitFeedReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RetransmitFeedReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RetransmitFeedReply
     */
    public static fromObject(object: { [k: string]: any }): RetransmitFeedReply;

    /**
     * Creates a plain object from a RetransmitFeedReply message. Also converts values to other types if specified.
     * @param message RetransmitFeedReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RetransmitFeedReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RetransmitFeedReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StreamFeedReply. */
export interface IStreamFeedReply {

    /** StreamFeedReply feedId */
    feedId: number;

    /** StreamFeedReply seq */
    seq: number;

    /** StreamFeedReply setPoint */
    setPoint?: number;

    /** StreamFeedReply bathTemp */
    bathTemp?: number;
}

/** Represents a StreamFeedReply. */
export class StreamFeedReply {

    /**
     * Constructs a new StreamFeedReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStreamFeedReply);

    /** StreamFeedReply feedId. */
    public feedId: number;

    /** StreamFeedReply seq. */
    public seq: number;

    /** StreamFeedReply setPoint. */
    public setPoint: number;

    /** StreamFeedReply bathTemp. */
    public bathTemp: number;

    /**
     * Creates a new StreamFeedReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StreamFeedReply instance
     */
    public static create(properties?: IStreamFeedReply): StreamFeedReply;

    /**
     * Encodes the specified StreamFeedReply message. Does not implicitly {@link StreamFeedReply.verify|verify} messages.
     * @param message StreamFeedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStreamFeedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StreamFeedReply message, length delimited. Does not implicitly {@link StreamFeedReply.verify|verify} messages.
     * @param message StreamFeedReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStreamFeedReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StreamFeedReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StreamFeedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StreamFeedReply;

    /**
     * Decodes a StreamFeedReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StreamFeedReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StreamFeedReply;

    /**
     * Verifies a StreamFeedReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StreamFeedReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StreamFeedReply
     */
    public static fromObject(object: { [k: string]: any }): StreamFeedReply;

    /**
     * Creates a plain object from a StreamFeedReply message. Also converts values to other types if specified.
     * @param message StreamFeedReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StreamFeedReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StreamFeedReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** BootModeType enum. */
export enum BootModeType {
    SOFTDEVICE_BOOT_MODE = 1,
    BOOTLOADER_BOOT_MODE = 2,
    APPLICATION_BOOT_MODE = 3
}

/** Properties of an EnterBootModeRequest. */
export interface IEnterBootModeRequest {

    /** EnterBootModeRequest bootModeType */
    bootModeType?: BootModeType;
}

/** Represents an EnterBootModeRequest. */
export class EnterBootModeRequest {

    /**
     * Constructs a new EnterBootModeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterBootModeRequest);

    /** EnterBootModeRequest bootModeType. */
    public bootModeType: BootModeType;

    /**
     * Creates a new EnterBootModeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterBootModeRequest instance
     */
    public static create(properties?: IEnterBootModeRequest): EnterBootModeRequest;

    /**
     * Encodes the specified EnterBootModeRequest message. Does not implicitly {@link EnterBootModeRequest.verify|verify} messages.
     * @param message EnterBootModeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterBootModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterBootModeRequest message, length delimited. Does not implicitly {@link EnterBootModeRequest.verify|verify} messages.
     * @param message EnterBootModeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterBootModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterBootModeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterBootModeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnterBootModeRequest;

    /**
     * Decodes an EnterBootModeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterBootModeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnterBootModeRequest;

    /**
     * Verifies an EnterBootModeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnterBootModeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterBootModeRequest
     */
    public static fromObject(object: { [k: string]: any }): EnterBootModeRequest;

    /**
     * Creates a plain object from an EnterBootModeRequest message. Also converts values to other types if specified.
     * @param message EnterBootModeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterBootModeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterBootModeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EnterBootModeReply. */
export interface IEnterBootModeReply {

    /** EnterBootModeReply result */
    result?: Result;
}

/** Represents an EnterBootModeReply. */
export class EnterBootModeReply {

    /**
     * Constructs a new EnterBootModeReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterBootModeReply);

    /** EnterBootModeReply result. */
    public result: Result;

    /**
     * Creates a new EnterBootModeReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterBootModeReply instance
     */
    public static create(properties?: IEnterBootModeReply): EnterBootModeReply;

    /**
     * Encodes the specified EnterBootModeReply message. Does not implicitly {@link EnterBootModeReply.verify|verify} messages.
     * @param message EnterBootModeReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterBootModeReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterBootModeReply message, length delimited. Does not implicitly {@link EnterBootModeReply.verify|verify} messages.
     * @param message EnterBootModeReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterBootModeReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterBootModeReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterBootModeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnterBootModeReply;

    /**
     * Decodes an EnterBootModeReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterBootModeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnterBootModeReply;

    /**
     * Verifies an EnterBootModeReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnterBootModeReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterBootModeReply
     */
    public static fromObject(object: { [k: string]: any }): EnterBootModeReply;

    /**
     * Creates a plain object from an EnterBootModeReply message. Also converts values to other types if specified.
     * @param message EnterBootModeReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterBootModeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterBootModeReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** FileType enum. */
export enum FileType {
    APPLICATION_FIRMWARE = 1,
    SOFTDEVICE_FIRMWARE = 2,
    WIFI_FIRMWARE = 3,
    CERTIFICATE_FIRMWARE = 4,
    BOOTLOADER_FIRMWARE = 5
}

/** Properties of a StartFileTransferRequest. */
export interface IStartFileTransferRequest {

    /** StartFileTransferRequest fileType */
    fileType: FileType;

    /** StartFileTransferRequest blockCount */
    blockCount: number;

    /** StartFileTransferRequest byteCount */
    byteCount: number;

    /** StartFileTransferRequest checksum */
    checksum: number;

    /** StartFileTransferRequest version */
    version?: string;
}

/** Represents a StartFileTransferRequest. */
export class StartFileTransferRequest {

    /**
     * Constructs a new StartFileTransferRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartFileTransferRequest);

    /** StartFileTransferRequest fileType. */
    public fileType: FileType;

    /** StartFileTransferRequest blockCount. */
    public blockCount: number;

    /** StartFileTransferRequest byteCount. */
    public byteCount: number;

    /** StartFileTransferRequest checksum. */
    public checksum: number;

    /** StartFileTransferRequest version. */
    public version: string;

    /**
     * Creates a new StartFileTransferRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartFileTransferRequest instance
     */
    public static create(properties?: IStartFileTransferRequest): StartFileTransferRequest;

    /**
     * Encodes the specified StartFileTransferRequest message. Does not implicitly {@link StartFileTransferRequest.verify|verify} messages.
     * @param message StartFileTransferRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartFileTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartFileTransferRequest message, length delimited. Does not implicitly {@link StartFileTransferRequest.verify|verify} messages.
     * @param message StartFileTransferRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartFileTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartFileTransferRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartFileTransferRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartFileTransferRequest;

    /**
     * Decodes a StartFileTransferRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartFileTransferRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartFileTransferRequest;

    /**
     * Verifies a StartFileTransferRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartFileTransferRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartFileTransferRequest
     */
    public static fromObject(object: { [k: string]: any }): StartFileTransferRequest;

    /**
     * Creates a plain object from a StartFileTransferRequest message. Also converts values to other types if specified.
     * @param message StartFileTransferRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartFileTransferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartFileTransferRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartFileTransferReply. */
export interface IStartFileTransferReply {

    /** StartFileTransferReply result */
    result: Result;
}

/** Represents a StartFileTransferReply. */
export class StartFileTransferReply {

    /**
     * Constructs a new StartFileTransferReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartFileTransferReply);

    /** StartFileTransferReply result. */
    public result: Result;

    /**
     * Creates a new StartFileTransferReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartFileTransferReply instance
     */
    public static create(properties?: IStartFileTransferReply): StartFileTransferReply;

    /**
     * Encodes the specified StartFileTransferReply message. Does not implicitly {@link StartFileTransferReply.verify|verify} messages.
     * @param message StartFileTransferReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartFileTransferReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartFileTransferReply message, length delimited. Does not implicitly {@link StartFileTransferReply.verify|verify} messages.
     * @param message StartFileTransferReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartFileTransferReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartFileTransferReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartFileTransferReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartFileTransferReply;

    /**
     * Decodes a StartFileTransferReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartFileTransferReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartFileTransferReply;

    /**
     * Verifies a StartFileTransferReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartFileTransferReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartFileTransferReply
     */
    public static fromObject(object: { [k: string]: any }): StartFileTransferReply;

    /**
     * Creates a plain object from a StartFileTransferReply message. Also converts values to other types if specified.
     * @param message StartFileTransferReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartFileTransferReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartFileTransferReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartFileReceiveRequest. */
export interface IStartFileReceiveRequest {

    /** StartFileReceiveRequest fileType */
    fileType: FileType;
}

/** Represents a StartFileReceiveRequest. */
export class StartFileReceiveRequest {

    /**
     * Constructs a new StartFileReceiveRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartFileReceiveRequest);

    /** StartFileReceiveRequest fileType. */
    public fileType: FileType;

    /**
     * Creates a new StartFileReceiveRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartFileReceiveRequest instance
     */
    public static create(properties?: IStartFileReceiveRequest): StartFileReceiveRequest;

    /**
     * Encodes the specified StartFileReceiveRequest message. Does not implicitly {@link StartFileReceiveRequest.verify|verify} messages.
     * @param message StartFileReceiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartFileReceiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartFileReceiveRequest message, length delimited. Does not implicitly {@link StartFileReceiveRequest.verify|verify} messages.
     * @param message StartFileReceiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartFileReceiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartFileReceiveRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartFileReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartFileReceiveRequest;

    /**
     * Decodes a StartFileReceiveRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartFileReceiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartFileReceiveRequest;

    /**
     * Verifies a StartFileReceiveRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartFileReceiveRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartFileReceiveRequest
     */
    public static fromObject(object: { [k: string]: any }): StartFileReceiveRequest;

    /**
     * Creates a plain object from a StartFileReceiveRequest message. Also converts values to other types if specified.
     * @param message StartFileReceiveRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartFileReceiveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartFileReceiveRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartFileReceiveReply. */
export interface IStartFileReceiveReply {

    /** StartFileReceiveReply result */
    result: Result;

    /** StartFileReceiveReply blockCount */
    blockCount: number;

    /** StartFileReceiveReply byteCount */
    byteCount: number;

    /** StartFileReceiveReply checksum */
    checksum: number;
}

/** Represents a StartFileReceiveReply. */
export class StartFileReceiveReply {

    /**
     * Constructs a new StartFileReceiveReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartFileReceiveReply);

    /** StartFileReceiveReply result. */
    public result: Result;

    /** StartFileReceiveReply blockCount. */
    public blockCount: number;

    /** StartFileReceiveReply byteCount. */
    public byteCount: number;

    /** StartFileReceiveReply checksum. */
    public checksum: number;

    /**
     * Creates a new StartFileReceiveReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartFileReceiveReply instance
     */
    public static create(properties?: IStartFileReceiveReply): StartFileReceiveReply;

    /**
     * Encodes the specified StartFileReceiveReply message. Does not implicitly {@link StartFileReceiveReply.verify|verify} messages.
     * @param message StartFileReceiveReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartFileReceiveReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartFileReceiveReply message, length delimited. Does not implicitly {@link StartFileReceiveReply.verify|verify} messages.
     * @param message StartFileReceiveReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartFileReceiveReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartFileReceiveReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartFileReceiveReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartFileReceiveReply;

    /**
     * Decodes a StartFileReceiveReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartFileReceiveReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartFileReceiveReply;

    /**
     * Verifies a StartFileReceiveReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartFileReceiveReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartFileReceiveReply
     */
    public static fromObject(object: { [k: string]: any }): StartFileReceiveReply;

    /**
     * Creates a plain object from a StartFileReceiveReply message. Also converts values to other types if specified.
     * @param message StartFileReceiveReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartFileReceiveReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartFileReceiveReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransferFileBlockRequest. */
export interface ITransferFileBlockRequest {

    /** TransferFileBlockRequest blockIdx */
    blockIdx: number;

    /** TransferFileBlockRequest block */
    block: Uint8Array;
}

/** Represents a TransferFileBlockRequest. */
export class TransferFileBlockRequest {

    /**
     * Constructs a new TransferFileBlockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransferFileBlockRequest);

    /** TransferFileBlockRequest blockIdx. */
    public blockIdx: number;

    /** TransferFileBlockRequest block. */
    public block: Uint8Array;

    /**
     * Creates a new TransferFileBlockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransferFileBlockRequest instance
     */
    public static create(properties?: ITransferFileBlockRequest): TransferFileBlockRequest;

    /**
     * Encodes the specified TransferFileBlockRequest message. Does not implicitly {@link TransferFileBlockRequest.verify|verify} messages.
     * @param message TransferFileBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransferFileBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransferFileBlockRequest message, length delimited. Does not implicitly {@link TransferFileBlockRequest.verify|verify} messages.
     * @param message TransferFileBlockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransferFileBlockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransferFileBlockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransferFileBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransferFileBlockRequest;

    /**
     * Decodes a TransferFileBlockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransferFileBlockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransferFileBlockRequest;

    /**
     * Verifies a TransferFileBlockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransferFileBlockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransferFileBlockRequest
     */
    public static fromObject(object: { [k: string]: any }): TransferFileBlockRequest;

    /**
     * Creates a plain object from a TransferFileBlockRequest message. Also converts values to other types if specified.
     * @param message TransferFileBlockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransferFileBlockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransferFileBlockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransferFileBlockReply. */
export interface ITransferFileBlockReply {

    /** TransferFileBlockReply result */
    result: Result;

    /** TransferFileBlockReply blockIdx */
    blockIdx: number;
}

/** Represents a TransferFileBlockReply. */
export class TransferFileBlockReply {

    /**
     * Constructs a new TransferFileBlockReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransferFileBlockReply);

    /** TransferFileBlockReply result. */
    public result: Result;

    /** TransferFileBlockReply blockIdx. */
    public blockIdx: number;

    /**
     * Creates a new TransferFileBlockReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransferFileBlockReply instance
     */
    public static create(properties?: ITransferFileBlockReply): TransferFileBlockReply;

    /**
     * Encodes the specified TransferFileBlockReply message. Does not implicitly {@link TransferFileBlockReply.verify|verify} messages.
     * @param message TransferFileBlockReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransferFileBlockReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransferFileBlockReply message, length delimited. Does not implicitly {@link TransferFileBlockReply.verify|verify} messages.
     * @param message TransferFileBlockReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransferFileBlockReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransferFileBlockReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransferFileBlockReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransferFileBlockReply;

    /**
     * Decodes a TransferFileBlockReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransferFileBlockReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransferFileBlockReply;

    /**
     * Verifies a TransferFileBlockReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransferFileBlockReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransferFileBlockReply
     */
    public static fromObject(object: { [k: string]: any }): TransferFileBlockReply;

    /**
     * Creates a plain object from a TransferFileBlockReply message. Also converts values to other types if specified.
     * @param message TransferFileBlockReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransferFileBlockReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransferFileBlockReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransferFileComplete. */
export interface ITransferFileComplete {

    /** TransferFileComplete result */
    result: Result;
}

/** Represents a TransferFileComplete. */
export class TransferFileComplete {

    /**
     * Constructs a new TransferFileComplete.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransferFileComplete);

    /** TransferFileComplete result. */
    public result: Result;

    /**
     * Creates a new TransferFileComplete instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransferFileComplete instance
     */
    public static create(properties?: ITransferFileComplete): TransferFileComplete;

    /**
     * Encodes the specified TransferFileComplete message. Does not implicitly {@link TransferFileComplete.verify|verify} messages.
     * @param message TransferFileComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransferFileComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransferFileComplete message, length delimited. Does not implicitly {@link TransferFileComplete.verify|verify} messages.
     * @param message TransferFileComplete message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransferFileComplete, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransferFileComplete message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransferFileComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransferFileComplete;

    /**
     * Decodes a TransferFileComplete message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransferFileComplete
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransferFileComplete;

    /**
     * Verifies a TransferFileComplete message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransferFileComplete message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransferFileComplete
     */
    public static fromObject(object: { [k: string]: any }): TransferFileComplete;

    /**
     * Creates a plain object from a TransferFileComplete message. Also converts values to other types if specified.
     * @param message TransferFileComplete
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransferFileComplete, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransferFileComplete to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartKeyExchangeRequest. */
export interface IStartKeyExchangeRequest {
}

/** Represents a StartKeyExchangeRequest. */
export class StartKeyExchangeRequest {

    /**
     * Constructs a new StartKeyExchangeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartKeyExchangeRequest);

    /**
     * Creates a new StartKeyExchangeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartKeyExchangeRequest instance
     */
    public static create(properties?: IStartKeyExchangeRequest): StartKeyExchangeRequest;

    /**
     * Encodes the specified StartKeyExchangeRequest message. Does not implicitly {@link StartKeyExchangeRequest.verify|verify} messages.
     * @param message StartKeyExchangeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartKeyExchangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartKeyExchangeRequest message, length delimited. Does not implicitly {@link StartKeyExchangeRequest.verify|verify} messages.
     * @param message StartKeyExchangeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartKeyExchangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartKeyExchangeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartKeyExchangeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartKeyExchangeRequest;

    /**
     * Decodes a StartKeyExchangeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartKeyExchangeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartKeyExchangeRequest;

    /**
     * Verifies a StartKeyExchangeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartKeyExchangeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartKeyExchangeRequest
     */
    public static fromObject(object: { [k: string]: any }): StartKeyExchangeRequest;

    /**
     * Creates a plain object from a StartKeyExchangeRequest message. Also converts values to other types if specified.
     * @param message StartKeyExchangeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartKeyExchangeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartKeyExchangeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StartKeyExchangeReply. */
export interface IStartKeyExchangeReply {

    /** StartKeyExchangeReply secretKey */
    secretKey: Uint8Array;

    /** StartKeyExchangeReply result */
    result?: Result;
}

/** Represents a StartKeyExchangeReply. */
export class StartKeyExchangeReply {

    /**
     * Constructs a new StartKeyExchangeReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartKeyExchangeReply);

    /** StartKeyExchangeReply secretKey. */
    public secretKey: Uint8Array;

    /** StartKeyExchangeReply result. */
    public result: Result;

    /**
     * Creates a new StartKeyExchangeReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartKeyExchangeReply instance
     */
    public static create(properties?: IStartKeyExchangeReply): StartKeyExchangeReply;

    /**
     * Encodes the specified StartKeyExchangeReply message. Does not implicitly {@link StartKeyExchangeReply.verify|verify} messages.
     * @param message StartKeyExchangeReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartKeyExchangeReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartKeyExchangeReply message, length delimited. Does not implicitly {@link StartKeyExchangeReply.verify|verify} messages.
     * @param message StartKeyExchangeReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartKeyExchangeReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartKeyExchangeReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartKeyExchangeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartKeyExchangeReply;

    /**
     * Decodes a StartKeyExchangeReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartKeyExchangeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartKeyExchangeReply;

    /**
     * Verifies a StartKeyExchangeReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartKeyExchangeReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartKeyExchangeReply
     */
    public static fromObject(object: { [k: string]: any }): StartKeyExchangeReply;

    /**
     * Creates a plain object from a StartKeyExchangeReply message. Also converts values to other types if specified.
     * @param message StartKeyExchangeReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartKeyExchangeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartKeyExchangeReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CancelKeyExchangeRequest. */
export interface ICancelKeyExchangeRequest {
}

/** Represents a CancelKeyExchangeRequest. */
export class CancelKeyExchangeRequest {

    /**
     * Constructs a new CancelKeyExchangeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICancelKeyExchangeRequest);

    /**
     * Creates a new CancelKeyExchangeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CancelKeyExchangeRequest instance
     */
    public static create(properties?: ICancelKeyExchangeRequest): CancelKeyExchangeRequest;

    /**
     * Encodes the specified CancelKeyExchangeRequest message. Does not implicitly {@link CancelKeyExchangeRequest.verify|verify} messages.
     * @param message CancelKeyExchangeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICancelKeyExchangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CancelKeyExchangeRequest message, length delimited. Does not implicitly {@link CancelKeyExchangeRequest.verify|verify} messages.
     * @param message CancelKeyExchangeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICancelKeyExchangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CancelKeyExchangeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CancelKeyExchangeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CancelKeyExchangeRequest;

    /**
     * Decodes a CancelKeyExchangeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CancelKeyExchangeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CancelKeyExchangeRequest;

    /**
     * Verifies a CancelKeyExchangeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CancelKeyExchangeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CancelKeyExchangeRequest
     */
    public static fromObject(object: { [k: string]: any }): CancelKeyExchangeRequest;

    /**
     * Creates a plain object from a CancelKeyExchangeRequest message. Also converts values to other types if specified.
     * @param message CancelKeyExchangeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CancelKeyExchangeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CancelKeyExchangeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CancelKeyExchangeReply. */
export interface ICancelKeyExchangeReply {

    /** CancelKeyExchangeReply result */
    result: Result;
}

/** Represents a CancelKeyExchangeReply. */
export class CancelKeyExchangeReply {

    /**
     * Constructs a new CancelKeyExchangeReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICancelKeyExchangeReply);

    /** CancelKeyExchangeReply result. */
    public result: Result;

    /**
     * Creates a new CancelKeyExchangeReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CancelKeyExchangeReply instance
     */
    public static create(properties?: ICancelKeyExchangeReply): CancelKeyExchangeReply;

    /**
     * Encodes the specified CancelKeyExchangeReply message. Does not implicitly {@link CancelKeyExchangeReply.verify|verify} messages.
     * @param message CancelKeyExchangeReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICancelKeyExchangeReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CancelKeyExchangeReply message, length delimited. Does not implicitly {@link CancelKeyExchangeReply.verify|verify} messages.
     * @param message CancelKeyExchangeReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICancelKeyExchangeReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CancelKeyExchangeReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CancelKeyExchangeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CancelKeyExchangeReply;

    /**
     * Decodes a CancelKeyExchangeReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CancelKeyExchangeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CancelKeyExchangeReply;

    /**
     * Verifies a CancelKeyExchangeReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CancelKeyExchangeReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CancelKeyExchangeReply
     */
    public static fromObject(object: { [k: string]: any }): CancelKeyExchangeReply;

    /**
     * Creates a plain object from a CancelKeyExchangeReply message. Also converts values to other types if specified.
     * @param message CancelKeyExchangeReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CancelKeyExchangeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CancelKeyExchangeReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SubmitKeyRequest. */
export interface ISubmitKeyRequest {

    /** SubmitKeyRequest secretKey */
    secretKey: Uint8Array;
}

/** Represents a SubmitKeyRequest. */
export class SubmitKeyRequest {

    /**
     * Constructs a new SubmitKeyRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubmitKeyRequest);

    /** SubmitKeyRequest secretKey. */
    public secretKey: Uint8Array;

    /**
     * Creates a new SubmitKeyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubmitKeyRequest instance
     */
    public static create(properties?: ISubmitKeyRequest): SubmitKeyRequest;

    /**
     * Encodes the specified SubmitKeyRequest message. Does not implicitly {@link SubmitKeyRequest.verify|verify} messages.
     * @param message SubmitKeyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubmitKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubmitKeyRequest message, length delimited. Does not implicitly {@link SubmitKeyRequest.verify|verify} messages.
     * @param message SubmitKeyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubmitKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubmitKeyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubmitKeyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubmitKeyRequest;

    /**
     * Decodes a SubmitKeyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubmitKeyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubmitKeyRequest;

    /**
     * Verifies a SubmitKeyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubmitKeyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubmitKeyRequest
     */
    public static fromObject(object: { [k: string]: any }): SubmitKeyRequest;

    /**
     * Creates a plain object from a SubmitKeyRequest message. Also converts values to other types if specified.
     * @param message SubmitKeyRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubmitKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubmitKeyRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SubmitKeyReply. */
export interface ISubmitKeyReply {

    /** SubmitKeyReply result */
    result?: Result;
}

/** Represents a SubmitKeyReply. */
export class SubmitKeyReply {

    /**
     * Constructs a new SubmitKeyReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubmitKeyReply);

    /** SubmitKeyReply result. */
    public result: Result;

    /**
     * Creates a new SubmitKeyReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubmitKeyReply instance
     */
    public static create(properties?: ISubmitKeyReply): SubmitKeyReply;

    /**
     * Encodes the specified SubmitKeyReply message. Does not implicitly {@link SubmitKeyReply.verify|verify} messages.
     * @param message SubmitKeyReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubmitKeyReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubmitKeyReply message, length delimited. Does not implicitly {@link SubmitKeyReply.verify|verify} messages.
     * @param message SubmitKeyReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubmitKeyReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubmitKeyReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubmitKeyReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubmitKeyReply;

    /**
     * Decodes a SubmitKeyReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubmitKeyReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubmitKeyReply;

    /**
     * Verifies a SubmitKeyReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubmitKeyReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubmitKeyReply
     */
    public static fromObject(object: { [k: string]: any }): SubmitKeyReply;

    /**
     * Creates a plain object from a SubmitKeyReply message. Also converts values to other types if specified.
     * @param message SubmitKeyReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubmitKeyReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubmitKeyReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PredictionUpdate. */
export interface IPredictionUpdate {

    /** PredictionUpdate programStep */
    programStep: ProgramStep;

    /** PredictionUpdate finishTimestamp */
    finishTimestamp: number;

    /** PredictionUpdate feedId */
    feedId?: number;

    /** PredictionUpdate sequenceNumber */
    sequenceNumber?: number;
}

/** Represents a PredictionUpdate. */
export class PredictionUpdate {

    /**
     * Constructs a new PredictionUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPredictionUpdate);

    /** PredictionUpdate programStep. */
    public programStep: ProgramStep;

    /** PredictionUpdate finishTimestamp. */
    public finishTimestamp: number;

    /** PredictionUpdate feedId. */
    public feedId: number;

    /** PredictionUpdate sequenceNumber. */
    public sequenceNumber: number;

    /**
     * Creates a new PredictionUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PredictionUpdate instance
     */
    public static create(properties?: IPredictionUpdate): PredictionUpdate;

    /**
     * Encodes the specified PredictionUpdate message. Does not implicitly {@link PredictionUpdate.verify|verify} messages.
     * @param message PredictionUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPredictionUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PredictionUpdate message, length delimited. Does not implicitly {@link PredictionUpdate.verify|verify} messages.
     * @param message PredictionUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPredictionUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PredictionUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PredictionUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PredictionUpdate;

    /**
     * Decodes a PredictionUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PredictionUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PredictionUpdate;

    /**
     * Verifies a PredictionUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PredictionUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PredictionUpdate
     */
    public static fromObject(object: { [k: string]: any }): PredictionUpdate;

    /**
     * Creates a plain object from a PredictionUpdate message. Also converts values to other types if specified.
     * @param message PredictionUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PredictionUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PredictionUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SubmitBearerAuthTokenRequest. */
export interface ISubmitBearerAuthTokenRequest {

    /** SubmitBearerAuthTokenRequest token */
    token: string;
}

/** Represents a SubmitBearerAuthTokenRequest. */
export class SubmitBearerAuthTokenRequest {

    /**
     * Constructs a new SubmitBearerAuthTokenRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubmitBearerAuthTokenRequest);

    /** SubmitBearerAuthTokenRequest token. */
    public token: string;

    /**
     * Creates a new SubmitBearerAuthTokenRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubmitBearerAuthTokenRequest instance
     */
    public static create(properties?: ISubmitBearerAuthTokenRequest): SubmitBearerAuthTokenRequest;

    /**
     * Encodes the specified SubmitBearerAuthTokenRequest message. Does not implicitly {@link SubmitBearerAuthTokenRequest.verify|verify} messages.
     * @param message SubmitBearerAuthTokenRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubmitBearerAuthTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubmitBearerAuthTokenRequest message, length delimited. Does not implicitly {@link SubmitBearerAuthTokenRequest.verify|verify} messages.
     * @param message SubmitBearerAuthTokenRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubmitBearerAuthTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubmitBearerAuthTokenRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubmitBearerAuthTokenRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubmitBearerAuthTokenRequest;

    /**
     * Decodes a SubmitBearerAuthTokenRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubmitBearerAuthTokenRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubmitBearerAuthTokenRequest;

    /**
     * Verifies a SubmitBearerAuthTokenRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubmitBearerAuthTokenRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubmitBearerAuthTokenRequest
     */
    public static fromObject(object: { [k: string]: any }): SubmitBearerAuthTokenRequest;

    /**
     * Creates a plain object from a SubmitBearerAuthTokenRequest message. Also converts values to other types if specified.
     * @param message SubmitBearerAuthTokenRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubmitBearerAuthTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubmitBearerAuthTokenRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SubmitBearerAuthTokenReply. */
export interface ISubmitBearerAuthTokenReply {

    /** SubmitBearerAuthTokenReply result */
    result?: Result;
}

/** Represents a SubmitBearerAuthTokenReply. */
export class SubmitBearerAuthTokenReply {

    /**
     * Constructs a new SubmitBearerAuthTokenReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubmitBearerAuthTokenReply);

    /** SubmitBearerAuthTokenReply result. */
    public result: Result;

    /**
     * Creates a new SubmitBearerAuthTokenReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubmitBearerAuthTokenReply instance
     */
    public static create(properties?: ISubmitBearerAuthTokenReply): SubmitBearerAuthTokenReply;

    /**
     * Encodes the specified SubmitBearerAuthTokenReply message. Does not implicitly {@link SubmitBearerAuthTokenReply.verify|verify} messages.
     * @param message SubmitBearerAuthTokenReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubmitBearerAuthTokenReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubmitBearerAuthTokenReply message, length delimited. Does not implicitly {@link SubmitBearerAuthTokenReply.verify|verify} messages.
     * @param message SubmitBearerAuthTokenReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubmitBearerAuthTokenReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubmitBearerAuthTokenReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubmitBearerAuthTokenReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubmitBearerAuthTokenReply;

    /**
     * Decodes a SubmitBearerAuthTokenReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubmitBearerAuthTokenReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubmitBearerAuthTokenReply;

    /**
     * Verifies a SubmitBearerAuthTokenReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubmitBearerAuthTokenReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubmitBearerAuthTokenReply
     */
    public static fromObject(object: { [k: string]: any }): SubmitBearerAuthTokenReply;

    /**
     * Creates a plain object from a SubmitBearerAuthTokenReply message. Also converts values to other types if specified.
     * @param message SubmitBearerAuthTokenReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubmitBearerAuthTokenReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubmitBearerAuthTokenReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FactoryResetRequest. */
export interface IFactoryResetRequest {

    /** FactoryResetRequest restart */
    restart: boolean;
}

/** Represents a FactoryResetRequest. */
export class FactoryResetRequest {

    /**
     * Constructs a new FactoryResetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFactoryResetRequest);

    /** FactoryResetRequest restart. */
    public restart: boolean;

    /**
     * Creates a new FactoryResetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FactoryResetRequest instance
     */
    public static create(properties?: IFactoryResetRequest): FactoryResetRequest;

    /**
     * Encodes the specified FactoryResetRequest message. Does not implicitly {@link FactoryResetRequest.verify|verify} messages.
     * @param message FactoryResetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFactoryResetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FactoryResetRequest message, length delimited. Does not implicitly {@link FactoryResetRequest.verify|verify} messages.
     * @param message FactoryResetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFactoryResetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FactoryResetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FactoryResetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FactoryResetRequest;

    /**
     * Decodes a FactoryResetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FactoryResetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FactoryResetRequest;

    /**
     * Verifies a FactoryResetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FactoryResetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FactoryResetRequest
     */
    public static fromObject(object: { [k: string]: any }): FactoryResetRequest;

    /**
     * Creates a plain object from a FactoryResetRequest message. Also converts values to other types if specified.
     * @param message FactoryResetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FactoryResetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FactoryResetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FactoryResetReply. */
export interface IFactoryResetReply {

    /** FactoryResetReply result */
    result?: Result;
}

/** Represents a FactoryResetReply. */
export class FactoryResetReply {

    /**
     * Constructs a new FactoryResetReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFactoryResetReply);

    /** FactoryResetReply result. */
    public result: Result;

    /**
     * Creates a new FactoryResetReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FactoryResetReply instance
     */
    public static create(properties?: IFactoryResetReply): FactoryResetReply;

    /**
     * Encodes the specified FactoryResetReply message. Does not implicitly {@link FactoryResetReply.verify|verify} messages.
     * @param message FactoryResetReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFactoryResetReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FactoryResetReply message, length delimited. Does not implicitly {@link FactoryResetReply.verify|verify} messages.
     * @param message FactoryResetReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFactoryResetReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FactoryResetReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FactoryResetReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FactoryResetReply;

    /**
     * Decodes a FactoryResetReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FactoryResetReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FactoryResetReply;

    /**
     * Verifies a FactoryResetReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FactoryResetReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FactoryResetReply
     */
    public static fromObject(object: { [k: string]: any }): FactoryResetReply;

    /**
     * Creates a plain object from a FactoryResetReply message. Also converts values to other types if specified.
     * @param message FactoryResetReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FactoryResetReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FactoryResetReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeviceRestartRequest. */
export interface IDeviceRestartRequest {
}

/** Represents a DeviceRestartRequest. */
export class DeviceRestartRequest {

    /**
     * Constructs a new DeviceRestartRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceRestartRequest);

    /**
     * Creates a new DeviceRestartRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceRestartRequest instance
     */
    public static create(properties?: IDeviceRestartRequest): DeviceRestartRequest;

    /**
     * Encodes the specified DeviceRestartRequest message. Does not implicitly {@link DeviceRestartRequest.verify|verify} messages.
     * @param message DeviceRestartRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceRestartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceRestartRequest message, length delimited. Does not implicitly {@link DeviceRestartRequest.verify|verify} messages.
     * @param message DeviceRestartRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceRestartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceRestartRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceRestartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceRestartRequest;

    /**
     * Decodes a DeviceRestartRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceRestartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceRestartRequest;

    /**
     * Verifies a DeviceRestartRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceRestartRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceRestartRequest
     */
    public static fromObject(object: { [k: string]: any }): DeviceRestartRequest;

    /**
     * Creates a plain object from a DeviceRestartRequest message. Also converts values to other types if specified.
     * @param message DeviceRestartRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceRestartRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceRestartRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DeviceRestartReply. */
export interface IDeviceRestartReply {

    /** DeviceRestartReply result */
    result?: Result;
}

/** Represents a DeviceRestartReply. */
export class DeviceRestartReply {

    /**
     * Constructs a new DeviceRestartReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceRestartReply);

    /** DeviceRestartReply result. */
    public result: Result;

    /**
     * Creates a new DeviceRestartReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceRestartReply instance
     */
    public static create(properties?: IDeviceRestartReply): DeviceRestartReply;

    /**
     * Encodes the specified DeviceRestartReply message. Does not implicitly {@link DeviceRestartReply.verify|verify} messages.
     * @param message DeviceRestartReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceRestartReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceRestartReply message, length delimited. Does not implicitly {@link DeviceRestartReply.verify|verify} messages.
     * @param message DeviceRestartReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceRestartReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceRestartReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceRestartReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceRestartReply;

    /**
     * Decodes a DeviceRestartReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceRestartReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceRestartReply;

    /**
     * Verifies a DeviceRestartReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceRestartReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceRestartReply
     */
    public static fromObject(object: { [k: string]: any }): DeviceRestartReply;

    /**
     * Creates a plain object from a DeviceRestartReply message. Also converts values to other types if specified.
     * @param message DeviceRestartReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceRestartReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceRestartReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TestResetRequest. */
export interface ITestResetRequest {
}

/** Represents a TestResetRequest. */
export class TestResetRequest {

    /**
     * Constructs a new TestResetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITestResetRequest);

    /**
     * Creates a new TestResetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TestResetRequest instance
     */
    public static create(properties?: ITestResetRequest): TestResetRequest;

    /**
     * Encodes the specified TestResetRequest message. Does not implicitly {@link TestResetRequest.verify|verify} messages.
     * @param message TestResetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITestResetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TestResetRequest message, length delimited. Does not implicitly {@link TestResetRequest.verify|verify} messages.
     * @param message TestResetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITestResetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TestResetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TestResetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestResetRequest;

    /**
     * Decodes a TestResetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TestResetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestResetRequest;

    /**
     * Verifies a TestResetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TestResetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TestResetRequest
     */
    public static fromObject(object: { [k: string]: any }): TestResetRequest;

    /**
     * Creates a plain object from a TestResetRequest message. Also converts values to other types if specified.
     * @param message TestResetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TestResetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TestResetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TestResetReply. */
export interface ITestResetReply {

    /** TestResetReply result */
    result?: Result;
}

/** Represents a TestResetReply. */
export class TestResetReply {

    /**
     * Constructs a new TestResetReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITestResetReply);

    /** TestResetReply result. */
    public result: Result;

    /**
     * Creates a new TestResetReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TestResetReply instance
     */
    public static create(properties?: ITestResetReply): TestResetReply;

    /**
     * Encodes the specified TestResetReply message. Does not implicitly {@link TestResetReply.verify|verify} messages.
     * @param message TestResetReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITestResetReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TestResetReply message, length delimited. Does not implicitly {@link TestResetReply.verify|verify} messages.
     * @param message TestResetReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITestResetReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TestResetReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TestResetReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TestResetReply;

    /**
     * Decodes a TestResetReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TestResetReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TestResetReply;

    /**
     * Verifies a TestResetReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TestResetReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TestResetReply
     */
    public static fromObject(object: { [k: string]: any }): TestResetReply;

    /**
     * Creates a plain object from a TestResetReply message. Also converts values to other types if specified.
     * @param message TestResetReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TestResetReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TestResetReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ForgetDevicePairingRequest. */
export interface IForgetDevicePairingRequest {
}

/** Represents a ForgetDevicePairingRequest. */
export class ForgetDevicePairingRequest {

    /**
     * Constructs a new ForgetDevicePairingRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IForgetDevicePairingRequest);

    /**
     * Creates a new ForgetDevicePairingRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForgetDevicePairingRequest instance
     */
    public static create(properties?: IForgetDevicePairingRequest): ForgetDevicePairingRequest;

    /**
     * Encodes the specified ForgetDevicePairingRequest message. Does not implicitly {@link ForgetDevicePairingRequest.verify|verify} messages.
     * @param message ForgetDevicePairingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IForgetDevicePairingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ForgetDevicePairingRequest message, length delimited. Does not implicitly {@link ForgetDevicePairingRequest.verify|verify} messages.
     * @param message ForgetDevicePairingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IForgetDevicePairingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ForgetDevicePairingRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ForgetDevicePairingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForgetDevicePairingRequest;

    /**
     * Decodes a ForgetDevicePairingRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ForgetDevicePairingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ForgetDevicePairingRequest;

    /**
     * Verifies a ForgetDevicePairingRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ForgetDevicePairingRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ForgetDevicePairingRequest
     */
    public static fromObject(object: { [k: string]: any }): ForgetDevicePairingRequest;

    /**
     * Creates a plain object from a ForgetDevicePairingRequest message. Also converts values to other types if specified.
     * @param message ForgetDevicePairingRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ForgetDevicePairingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ForgetDevicePairingRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ForgetDevicePairingReply. */
export interface IForgetDevicePairingReply {

    /** ForgetDevicePairingReply result */
    result?: Result;
}

/** Represents a ForgetDevicePairingReply. */
export class ForgetDevicePairingReply {

    /**
     * Constructs a new ForgetDevicePairingReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IForgetDevicePairingReply);

    /** ForgetDevicePairingReply result. */
    public result: Result;

    /**
     * Creates a new ForgetDevicePairingReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ForgetDevicePairingReply instance
     */
    public static create(properties?: IForgetDevicePairingReply): ForgetDevicePairingReply;

    /**
     * Encodes the specified ForgetDevicePairingReply message. Does not implicitly {@link ForgetDevicePairingReply.verify|verify} messages.
     * @param message ForgetDevicePairingReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IForgetDevicePairingReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ForgetDevicePairingReply message, length delimited. Does not implicitly {@link ForgetDevicePairingReply.verify|verify} messages.
     * @param message ForgetDevicePairingReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IForgetDevicePairingReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ForgetDevicePairingReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ForgetDevicePairingReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForgetDevicePairingReply;

    /**
     * Decodes a ForgetDevicePairingReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ForgetDevicePairingReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ForgetDevicePairingReply;

    /**
     * Verifies a ForgetDevicePairingReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ForgetDevicePairingReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ForgetDevicePairingReply
     */
    public static fromObject(object: { [k: string]: any }): ForgetDevicePairingReply;

    /**
     * Creates a plain object from a ForgetDevicePairingReply message. Also converts values to other types if specified.
     * @param message ForgetDevicePairingReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ForgetDevicePairingReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ForgetDevicePairingReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetSimulatorRequest. */
export interface ISetSimulatorRequest {

    /** SetSimulatorRequest simulatorOn */
    simulatorOn: boolean;
}

/** Represents a SetSimulatorRequest. */
export class SetSimulatorRequest {

    /**
     * Constructs a new SetSimulatorRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetSimulatorRequest);

    /** SetSimulatorRequest simulatorOn. */
    public simulatorOn: boolean;

    /**
     * Creates a new SetSimulatorRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetSimulatorRequest instance
     */
    public static create(properties?: ISetSimulatorRequest): SetSimulatorRequest;

    /**
     * Encodes the specified SetSimulatorRequest message. Does not implicitly {@link SetSimulatorRequest.verify|verify} messages.
     * @param message SetSimulatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetSimulatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetSimulatorRequest message, length delimited. Does not implicitly {@link SetSimulatorRequest.verify|verify} messages.
     * @param message SetSimulatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetSimulatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetSimulatorRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetSimulatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetSimulatorRequest;

    /**
     * Decodes a SetSimulatorRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetSimulatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetSimulatorRequest;

    /**
     * Verifies a SetSimulatorRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetSimulatorRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetSimulatorRequest
     */
    public static fromObject(object: { [k: string]: any }): SetSimulatorRequest;

    /**
     * Creates a plain object from a SetSimulatorRequest message. Also converts values to other types if specified.
     * @param message SetSimulatorRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetSimulatorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetSimulatorRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetSimulatorReply. */
export interface ISetSimulatorReply {

    /** SetSimulatorReply result */
    result?: Result;
}

/** Represents a SetSimulatorReply. */
export class SetSimulatorReply {

    /**
     * Constructs a new SetSimulatorReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetSimulatorReply);

    /** SetSimulatorReply result. */
    public result: Result;

    /**
     * Creates a new SetSimulatorReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetSimulatorReply instance
     */
    public static create(properties?: ISetSimulatorReply): SetSimulatorReply;

    /**
     * Encodes the specified SetSimulatorReply message. Does not implicitly {@link SetSimulatorReply.verify|verify} messages.
     * @param message SetSimulatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetSimulatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetSimulatorReply message, length delimited. Does not implicitly {@link SetSimulatorReply.verify|verify} messages.
     * @param message SetSimulatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetSimulatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetSimulatorReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetSimulatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetSimulatorReply;

    /**
     * Decodes a SetSimulatorReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetSimulatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetSimulatorReply;

    /**
     * Verifies a SetSimulatorReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetSimulatorReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetSimulatorReply
     */
    public static fromObject(object: { [k: string]: any }): SetSimulatorReply;

    /**
     * Creates a plain object from a SetSimulatorReply message. Also converts values to other types if specified.
     * @param message SetSimulatorReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetSimulatorReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetSimulatorReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetSimulatorRequest. */
export interface IGetSimulatorRequest {
}

/** Represents a GetSimulatorRequest. */
export class GetSimulatorRequest {

    /**
     * Constructs a new GetSimulatorRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetSimulatorRequest);

    /**
     * Creates a new GetSimulatorRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetSimulatorRequest instance
     */
    public static create(properties?: IGetSimulatorRequest): GetSimulatorRequest;

    /**
     * Encodes the specified GetSimulatorRequest message. Does not implicitly {@link GetSimulatorRequest.verify|verify} messages.
     * @param message GetSimulatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetSimulatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetSimulatorRequest message, length delimited. Does not implicitly {@link GetSimulatorRequest.verify|verify} messages.
     * @param message GetSimulatorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetSimulatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetSimulatorRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetSimulatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetSimulatorRequest;

    /**
     * Decodes a GetSimulatorRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetSimulatorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetSimulatorRequest;

    /**
     * Verifies a GetSimulatorRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetSimulatorRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetSimulatorRequest
     */
    public static fromObject(object: { [k: string]: any }): GetSimulatorRequest;

    /**
     * Creates a plain object from a GetSimulatorRequest message. Also converts values to other types if specified.
     * @param message GetSimulatorRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetSimulatorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetSimulatorRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetSimulatorReply. */
export interface IGetSimulatorReply {

    /** GetSimulatorReply simulatorOn */
    simulatorOn: boolean;
}

/** Represents a GetSimulatorReply. */
export class GetSimulatorReply {

    /**
     * Constructs a new GetSimulatorReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetSimulatorReply);

    /** GetSimulatorReply simulatorOn. */
    public simulatorOn: boolean;

    /**
     * Creates a new GetSimulatorReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetSimulatorReply instance
     */
    public static create(properties?: IGetSimulatorReply): GetSimulatorReply;

    /**
     * Encodes the specified GetSimulatorReply message. Does not implicitly {@link GetSimulatorReply.verify|verify} messages.
     * @param message GetSimulatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetSimulatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetSimulatorReply message, length delimited. Does not implicitly {@link GetSimulatorReply.verify|verify} messages.
     * @param message GetSimulatorReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetSimulatorReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetSimulatorReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetSimulatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetSimulatorReply;

    /**
     * Decodes a GetSimulatorReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetSimulatorReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetSimulatorReply;

    /**
     * Verifies a GetSimulatorReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetSimulatorReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetSimulatorReply
     */
    public static fromObject(object: { [k: string]: any }): GetSimulatorReply;

    /**
     * Creates a plain object from a GetSimulatorReply message. Also converts values to other types if specified.
     * @param message GetSimulatorReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetSimulatorReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetSimulatorReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetHardwareCoeffsRequest. */
export interface ISetHardwareCoeffsRequest {

    /** SetHardwareCoeffsRequest tempAdcBias */
    tempAdcBias: number;

    /** SetHardwareCoeffsRequest tempAdcScale */
    tempAdcScale: number;

    /** SetHardwareCoeffsRequest tempRef */
    tempRef: number;

    /** SetHardwareCoeffsRequest tempCoeffA */
    tempCoeffA: number;

    /** SetHardwareCoeffsRequest tempCoeffB */
    tempCoeffB: number;

    /** SetHardwareCoeffsRequest tempCoeffC */
    tempCoeffC: number;
}

/** Represents a SetHardwareCoeffsRequest. */
export class SetHardwareCoeffsRequest {

    /**
     * Constructs a new SetHardwareCoeffsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetHardwareCoeffsRequest);

    /** SetHardwareCoeffsRequest tempAdcBias. */
    public tempAdcBias: number;

    /** SetHardwareCoeffsRequest tempAdcScale. */
    public tempAdcScale: number;

    /** SetHardwareCoeffsRequest tempRef. */
    public tempRef: number;

    /** SetHardwareCoeffsRequest tempCoeffA. */
    public tempCoeffA: number;

    /** SetHardwareCoeffsRequest tempCoeffB. */
    public tempCoeffB: number;

    /** SetHardwareCoeffsRequest tempCoeffC. */
    public tempCoeffC: number;

    /**
     * Creates a new SetHardwareCoeffsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetHardwareCoeffsRequest instance
     */
    public static create(properties?: ISetHardwareCoeffsRequest): SetHardwareCoeffsRequest;

    /**
     * Encodes the specified SetHardwareCoeffsRequest message. Does not implicitly {@link SetHardwareCoeffsRequest.verify|verify} messages.
     * @param message SetHardwareCoeffsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetHardwareCoeffsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetHardwareCoeffsRequest message, length delimited. Does not implicitly {@link SetHardwareCoeffsRequest.verify|verify} messages.
     * @param message SetHardwareCoeffsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetHardwareCoeffsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetHardwareCoeffsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetHardwareCoeffsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetHardwareCoeffsRequest;

    /**
     * Decodes a SetHardwareCoeffsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetHardwareCoeffsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetHardwareCoeffsRequest;

    /**
     * Verifies a SetHardwareCoeffsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetHardwareCoeffsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetHardwareCoeffsRequest
     */
    public static fromObject(object: { [k: string]: any }): SetHardwareCoeffsRequest;

    /**
     * Creates a plain object from a SetHardwareCoeffsRequest message. Also converts values to other types if specified.
     * @param message SetHardwareCoeffsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetHardwareCoeffsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetHardwareCoeffsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetHardwareCoeffsReply. */
export interface ISetHardwareCoeffsReply {

    /** SetHardwareCoeffsReply result */
    result: Result;
}

/** Represents a SetHardwareCoeffsReply. */
export class SetHardwareCoeffsReply {

    /**
     * Constructs a new SetHardwareCoeffsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetHardwareCoeffsReply);

    /** SetHardwareCoeffsReply result. */
    public result: Result;

    /**
     * Creates a new SetHardwareCoeffsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetHardwareCoeffsReply instance
     */
    public static create(properties?: ISetHardwareCoeffsReply): SetHardwareCoeffsReply;

    /**
     * Encodes the specified SetHardwareCoeffsReply message. Does not implicitly {@link SetHardwareCoeffsReply.verify|verify} messages.
     * @param message SetHardwareCoeffsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetHardwareCoeffsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetHardwareCoeffsReply message, length delimited. Does not implicitly {@link SetHardwareCoeffsReply.verify|verify} messages.
     * @param message SetHardwareCoeffsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetHardwareCoeffsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetHardwareCoeffsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetHardwareCoeffsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetHardwareCoeffsReply;

    /**
     * Decodes a SetHardwareCoeffsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetHardwareCoeffsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetHardwareCoeffsReply;

    /**
     * Verifies a SetHardwareCoeffsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetHardwareCoeffsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetHardwareCoeffsReply
     */
    public static fromObject(object: { [k: string]: any }): SetHardwareCoeffsReply;

    /**
     * Creates a plain object from a SetHardwareCoeffsReply message. Also converts values to other types if specified.
     * @param message SetHardwareCoeffsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetHardwareCoeffsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetHardwareCoeffsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetHardwareCoeffsRequest. */
export interface IGetHardwareCoeffsRequest {
}

/** Represents a GetHardwareCoeffsRequest. */
export class GetHardwareCoeffsRequest {

    /**
     * Constructs a new GetHardwareCoeffsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetHardwareCoeffsRequest);

    /**
     * Creates a new GetHardwareCoeffsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetHardwareCoeffsRequest instance
     */
    public static create(properties?: IGetHardwareCoeffsRequest): GetHardwareCoeffsRequest;

    /**
     * Encodes the specified GetHardwareCoeffsRequest message. Does not implicitly {@link GetHardwareCoeffsRequest.verify|verify} messages.
     * @param message GetHardwareCoeffsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetHardwareCoeffsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetHardwareCoeffsRequest message, length delimited. Does not implicitly {@link GetHardwareCoeffsRequest.verify|verify} messages.
     * @param message GetHardwareCoeffsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetHardwareCoeffsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetHardwareCoeffsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetHardwareCoeffsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetHardwareCoeffsRequest;

    /**
     * Decodes a GetHardwareCoeffsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetHardwareCoeffsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetHardwareCoeffsRequest;

    /**
     * Verifies a GetHardwareCoeffsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetHardwareCoeffsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetHardwareCoeffsRequest
     */
    public static fromObject(object: { [k: string]: any }): GetHardwareCoeffsRequest;

    /**
     * Creates a plain object from a GetHardwareCoeffsRequest message. Also converts values to other types if specified.
     * @param message GetHardwareCoeffsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetHardwareCoeffsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetHardwareCoeffsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetHardwareCoeffsReply. */
export interface IGetHardwareCoeffsReply {

    /** GetHardwareCoeffsReply tempAdcBias */
    tempAdcBias: number;

    /** GetHardwareCoeffsReply tempAdcScale */
    tempAdcScale: number;

    /** GetHardwareCoeffsReply tempRef */
    tempRef: number;

    /** GetHardwareCoeffsReply tempCoeffA */
    tempCoeffA: number;

    /** GetHardwareCoeffsReply tempCoeffB */
    tempCoeffB: number;

    /** GetHardwareCoeffsReply tempCoeffC */
    tempCoeffC: number;

    /** GetHardwareCoeffsReply result */
    result: Result;
}

/** Represents a GetHardwareCoeffsReply. */
export class GetHardwareCoeffsReply {

    /**
     * Constructs a new GetHardwareCoeffsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetHardwareCoeffsReply);

    /** GetHardwareCoeffsReply tempAdcBias. */
    public tempAdcBias: number;

    /** GetHardwareCoeffsReply tempAdcScale. */
    public tempAdcScale: number;

    /** GetHardwareCoeffsReply tempRef. */
    public tempRef: number;

    /** GetHardwareCoeffsReply tempCoeffA. */
    public tempCoeffA: number;

    /** GetHardwareCoeffsReply tempCoeffB. */
    public tempCoeffB: number;

    /** GetHardwareCoeffsReply tempCoeffC. */
    public tempCoeffC: number;

    /** GetHardwareCoeffsReply result. */
    public result: Result;

    /**
     * Creates a new GetHardwareCoeffsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetHardwareCoeffsReply instance
     */
    public static create(properties?: IGetHardwareCoeffsReply): GetHardwareCoeffsReply;

    /**
     * Encodes the specified GetHardwareCoeffsReply message. Does not implicitly {@link GetHardwareCoeffsReply.verify|verify} messages.
     * @param message GetHardwareCoeffsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetHardwareCoeffsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetHardwareCoeffsReply message, length delimited. Does not implicitly {@link GetHardwareCoeffsReply.verify|verify} messages.
     * @param message GetHardwareCoeffsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetHardwareCoeffsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetHardwareCoeffsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetHardwareCoeffsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetHardwareCoeffsReply;

    /**
     * Decodes a GetHardwareCoeffsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetHardwareCoeffsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetHardwareCoeffsReply;

    /**
     * Verifies a GetHardwareCoeffsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetHardwareCoeffsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetHardwareCoeffsReply
     */
    public static fromObject(object: { [k: string]: any }): GetHardwareCoeffsReply;

    /**
     * Creates a plain object from a GetHardwareCoeffsReply message. Also converts values to other types if specified.
     * @param message GetHardwareCoeffsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetHardwareCoeffsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetHardwareCoeffsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** UsageMetric enum. */
export enum UsageMetric {
    MOTOR_RUNNING_MINS_LT = 0,
    TOTAL_REVOLUTIONS = 1,
    MOTOR_RUNNING_MINS_LT_30C = 2,
    MOTOR_RUNNING_MINS_LT_35C = 3,
    MOTOR_RUNNING_MINS_LT_40C = 4,
    MOTOR_RUNNING_MINS_LT_45C = 5,
    MOTOR_RUNNING_MINS_LT_50C = 6,
    MOTOR_RUNNING_MINS_LT_55C = 7,
    MOTOR_RUNNING_MINS_LT_60C = 8,
    MOTOR_RUNNING_MINS_LT_65C = 9,
    MOTOR_RUNNING_MINS_LT_70C = 10,
    MOTOR_RUNNING_MINS_LT_75C = 11,
    MOTOR_RUNNING_MINS_LT_80C = 12,
    MOTOR_RUNNING_MINS_LT_85C = 13,
    MOTOR_RUNNING_MINS_LT_90C = 14,
    MOTOR_RUNNING_MINS_LT_95C = 15,
    MOTOR_RUNNING_MINS_GT_95C = 16,
    MOTOR_RPM_MEAN = 17,
    MOTOR_RPM_VARIANCE = 18,
    MOTOR_CURRENT_MEAN = 19,
    MOTOR_CURRENT_VARIANCE = 20,
    HEATER_MEAN = 21,
    HEATER_VARIANCE = 22,
    PRESSURE_MEAN = 23,
    PRESSURE_VARIANCE = 24,
    BATH_TEMP_MEAN = 25,
    BATH_TEMP_VARIANCE = 26,
    NUM_BUTTON_PRESSES = 27,
    NUM_COOKS_INTERRUPTED = 28,
    NUM_OOW_ERRORS = 29,
    NUM_OVERTEMP_ERRORS = 30,
    NUM_MOTOR_OVER_CURRENT_ERRORS = 31,
    NUM_ACCELEROMETER_TRIPS = 32,
    NUM_MOTOR_STALLS = 33
}

/** Properties of a UsageDataMetric. */
export interface IUsageDataMetric {

    /** UsageDataMetric key */
    key: UsageMetric;

    /** UsageDataMetric value */
    value: IMetricValue;
}

/** Represents a UsageDataMetric. */
export class UsageDataMetric {

    /**
     * Constructs a new UsageDataMetric.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUsageDataMetric);

    /** UsageDataMetric key. */
    public key: UsageMetric;

    /** UsageDataMetric value. */
    public value: IMetricValue;

    /**
     * Creates a new UsageDataMetric instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UsageDataMetric instance
     */
    public static create(properties?: IUsageDataMetric): UsageDataMetric;

    /**
     * Encodes the specified UsageDataMetric message. Does not implicitly {@link UsageDataMetric.verify|verify} messages.
     * @param message UsageDataMetric message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUsageDataMetric, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UsageDataMetric message, length delimited. Does not implicitly {@link UsageDataMetric.verify|verify} messages.
     * @param message UsageDataMetric message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUsageDataMetric, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UsageDataMetric message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UsageDataMetric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UsageDataMetric;

    /**
     * Decodes a UsageDataMetric message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UsageDataMetric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UsageDataMetric;

    /**
     * Verifies a UsageDataMetric message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UsageDataMetric message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UsageDataMetric
     */
    public static fromObject(object: { [k: string]: any }): UsageDataMetric;

    /**
     * Creates a plain object from a UsageDataMetric message. Also converts values to other types if specified.
     * @param message UsageDataMetric
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UsageDataMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UsageDataMetric to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MetricValue. */
export interface IMetricValue {

    /** MetricValue intValue */
    intValue?: number;

    /** MetricValue floatValue */
    floatValue?: number;
}

/** Represents a MetricValue. */
export class MetricValue {

    /**
     * Constructs a new MetricValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMetricValue);

    /** MetricValue intValue. */
    public intValue: number;

    /** MetricValue floatValue. */
    public floatValue: number;

    /**
     * Creates a new MetricValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MetricValue instance
     */
    public static create(properties?: IMetricValue): MetricValue;

    /**
     * Encodes the specified MetricValue message. Does not implicitly {@link MetricValue.verify|verify} messages.
     * @param message MetricValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMetricValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MetricValue message, length delimited. Does not implicitly {@link MetricValue.verify|verify} messages.
     * @param message MetricValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMetricValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MetricValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MetricValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MetricValue;

    /**
     * Decodes a MetricValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MetricValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MetricValue;

    /**
     * Verifies a MetricValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MetricValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MetricValue
     */
    public static fromObject(object: { [k: string]: any }): MetricValue;

    /**
     * Creates a plain object from a MetricValue message. Also converts values to other types if specified.
     * @param message MetricValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MetricValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MetricValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetUsageDataRequest. */
export interface IGetUsageDataRequest {
}

/** Represents a GetUsageDataRequest. */
export class GetUsageDataRequest {

    /**
     * Constructs a new GetUsageDataRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetUsageDataRequest);

    /**
     * Creates a new GetUsageDataRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUsageDataRequest instance
     */
    public static create(properties?: IGetUsageDataRequest): GetUsageDataRequest;

    /**
     * Encodes the specified GetUsageDataRequest message. Does not implicitly {@link GetUsageDataRequest.verify|verify} messages.
     * @param message GetUsageDataRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetUsageDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetUsageDataRequest message, length delimited. Does not implicitly {@link GetUsageDataRequest.verify|verify} messages.
     * @param message GetUsageDataRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetUsageDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetUsageDataRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUsageDataRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetUsageDataRequest;

    /**
     * Decodes a GetUsageDataRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUsageDataRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetUsageDataRequest;

    /**
     * Verifies a GetUsageDataRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetUsageDataRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUsageDataRequest
     */
    public static fromObject(object: { [k: string]: any }): GetUsageDataRequest;

    /**
     * Creates a plain object from a GetUsageDataRequest message. Also converts values to other types if specified.
     * @param message GetUsageDataRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetUsageDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetUsageDataRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetUsageDataReply. */
export interface IGetUsageDataReply {

    /** GetUsageDataReply result */
    result: Result;

    /** GetUsageDataReply serialNumber */
    serialNumber?: string;

    /** GetUsageDataReply metric */
    metric: IUsageDataMetric;
}

/** Represents a GetUsageDataReply. */
export class GetUsageDataReply {

    /**
     * Constructs a new GetUsageDataReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetUsageDataReply);

    /** GetUsageDataReply result. */
    public result: Result;

    /** GetUsageDataReply serialNumber. */
    public serialNumber: string;

    /** GetUsageDataReply metric. */
    public metric: IUsageDataMetric;

    /**
     * Creates a new GetUsageDataReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetUsageDataReply instance
     */
    public static create(properties?: IGetUsageDataReply): GetUsageDataReply;

    /**
     * Encodes the specified GetUsageDataReply message. Does not implicitly {@link GetUsageDataReply.verify|verify} messages.
     * @param message GetUsageDataReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetUsageDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetUsageDataReply message, length delimited. Does not implicitly {@link GetUsageDataReply.verify|verify} messages.
     * @param message GetUsageDataReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetUsageDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetUsageDataReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetUsageDataReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetUsageDataReply;

    /**
     * Decodes a GetUsageDataReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetUsageDataReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetUsageDataReply;

    /**
     * Verifies a GetUsageDataReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetUsageDataReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetUsageDataReply
     */
    public static fromObject(object: { [k: string]: any }): GetUsageDataReply;

    /**
     * Creates a plain object from a GetUsageDataReply message. Also converts values to other types if specified.
     * @param message GetUsageDataReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetUsageDataReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetUsageDataReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ResetUsageDataRequest. */
export interface IResetUsageDataRequest {
}

/** Represents a ResetUsageDataRequest. */
export class ResetUsageDataRequest {

    /**
     * Constructs a new ResetUsageDataRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResetUsageDataRequest);

    /**
     * Creates a new ResetUsageDataRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResetUsageDataRequest instance
     */
    public static create(properties?: IResetUsageDataRequest): ResetUsageDataRequest;

    /**
     * Encodes the specified ResetUsageDataRequest message. Does not implicitly {@link ResetUsageDataRequest.verify|verify} messages.
     * @param message ResetUsageDataRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResetUsageDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResetUsageDataRequest message, length delimited. Does not implicitly {@link ResetUsageDataRequest.verify|verify} messages.
     * @param message ResetUsageDataRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResetUsageDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResetUsageDataRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResetUsageDataRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResetUsageDataRequest;

    /**
     * Decodes a ResetUsageDataRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResetUsageDataRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResetUsageDataRequest;

    /**
     * Verifies a ResetUsageDataRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResetUsageDataRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResetUsageDataRequest
     */
    public static fromObject(object: { [k: string]: any }): ResetUsageDataRequest;

    /**
     * Creates a plain object from a ResetUsageDataRequest message. Also converts values to other types if specified.
     * @param message ResetUsageDataRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResetUsageDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResetUsageDataRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ResetUsageDataReply. */
export interface IResetUsageDataReply {

    /** ResetUsageDataReply result */
    result: Result;
}

/** Represents a ResetUsageDataReply. */
export class ResetUsageDataReply {

    /**
     * Constructs a new ResetUsageDataReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResetUsageDataReply);

    /** ResetUsageDataReply result. */
    public result: Result;

    /**
     * Creates a new ResetUsageDataReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResetUsageDataReply instance
     */
    public static create(properties?: IResetUsageDataReply): ResetUsageDataReply;

    /**
     * Encodes the specified ResetUsageDataReply message. Does not implicitly {@link ResetUsageDataReply.verify|verify} messages.
     * @param message ResetUsageDataReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResetUsageDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResetUsageDataReply message, length delimited. Does not implicitly {@link ResetUsageDataReply.verify|verify} messages.
     * @param message ResetUsageDataReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResetUsageDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResetUsageDataReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResetUsageDataReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResetUsageDataReply;

    /**
     * Decodes a ResetUsageDataReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResetUsageDataReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResetUsageDataReply;

    /**
     * Verifies a ResetUsageDataReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResetUsageDataReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResetUsageDataReply
     */
    public static fromObject(object: { [k: string]: any }): ResetUsageDataReply;

    /**
     * Creates a plain object from a ResetUsageDataReply message. Also converts values to other types if specified.
     * @param message ResetUsageDataReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResetUsageDataReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResetUsageDataReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetLimitsRequest. */
export interface IGetLimitsRequest {
}

/** Represents a GetLimitsRequest. */
export class GetLimitsRequest {

    /**
     * Constructs a new GetLimitsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetLimitsRequest);

    /**
     * Creates a new GetLimitsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetLimitsRequest instance
     */
    public static create(properties?: IGetLimitsRequest): GetLimitsRequest;

    /**
     * Encodes the specified GetLimitsRequest message. Does not implicitly {@link GetLimitsRequest.verify|verify} messages.
     * @param message GetLimitsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetLimitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetLimitsRequest message, length delimited. Does not implicitly {@link GetLimitsRequest.verify|verify} messages.
     * @param message GetLimitsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetLimitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetLimitsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetLimitsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetLimitsRequest;

    /**
     * Decodes a GetLimitsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetLimitsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetLimitsRequest;

    /**
     * Verifies a GetLimitsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetLimitsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetLimitsRequest
     */
    public static fromObject(object: { [k: string]: any }): GetLimitsRequest;

    /**
     * Creates a plain object from a GetLimitsRequest message. Also converts values to other types if specified.
     * @param message GetLimitsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetLimitsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetLimitsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetLimitsReply. */
export interface IGetLimitsReply {

    /** GetLimitsReply result */
    result: Result;

    /** GetLimitsReply maxTemp */
    maxTemp: number;
}

/** Represents a GetLimitsReply. */
export class GetLimitsReply {

    /**
     * Constructs a new GetLimitsReply.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetLimitsReply);

    /** GetLimitsReply result. */
    public result: Result;

    /** GetLimitsReply maxTemp. */
    public maxTemp: number;

    /**
     * Creates a new GetLimitsReply instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetLimitsReply instance
     */
    public static create(properties?: IGetLimitsReply): GetLimitsReply;

    /**
     * Encodes the specified GetLimitsReply message. Does not implicitly {@link GetLimitsReply.verify|verify} messages.
     * @param message GetLimitsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetLimitsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetLimitsReply message, length delimited. Does not implicitly {@link GetLimitsReply.verify|verify} messages.
     * @param message GetLimitsReply message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetLimitsReply, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetLimitsReply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetLimitsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetLimitsReply;

    /**
     * Decodes a GetLimitsReply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetLimitsReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetLimitsReply;

    /**
     * Verifies a GetLimitsReply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetLimitsReply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetLimitsReply
     */
    public static fromObject(object: { [k: string]: any }): GetLimitsReply;

    /**
     * Creates a plain object from a GetLimitsReply message. Also converts values to other types if specified.
     * @param message GetLimitsReply
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetLimitsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetLimitsReply to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
