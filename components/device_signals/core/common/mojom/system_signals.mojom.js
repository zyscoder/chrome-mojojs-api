// components/device_signals/core/common/mojom/system_signals.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/device_signals/core/common/mojom/system_signals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('deviceSignals.mojom');
  var context$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/context.mojom', '../../../../../sandbox/policy/mojom/context.mojom.js');
  }
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../../../sandbox/policy/mojom/sandbox.mojom.js');
  }
  var byte_string$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/byte_string.mojom', '../../../../../mojo/public/mojom/base/byte_string.mojom.js');
  }
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }


  var PresenceValue = {};
  PresenceValue.kUnspecified = 0;
  PresenceValue.kAccessDenied = 1;
  PresenceValue.kNotFound = 2;
  PresenceValue.kFound = 3;
  PresenceValue.MIN_VALUE = 0;
  PresenceValue.MAX_VALUE = 3;

  PresenceValue.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  PresenceValue.toKnownEnumValue = function(value) {
    return value;
  };

  PresenceValue.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ExecutableMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ExecutableMetadata.prototype.initDefaults_ = function() {
    this.isRunning = false;
    this.isOsVerified = false;
    this.publicKeysHashes = null;
    this.productName = null;
    this.version = null;
    this.subjectName = null;
  };
  ExecutableMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ExecutableMetadata.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate ExecutableMetadata.publicKeysHashes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(byte_string$.ByteString), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ExecutableMetadata.productName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ExecutableMetadata.version
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;



    // validate ExecutableMetadata.subjectName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ExecutableMetadata.encodedSize = codec.kStructHeaderSize + 40;

  ExecutableMetadata.decode = function(decoder) {
    var packed;
    var val = new ExecutableMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isRunning = (packed >> 0) & 1 ? true : false;
    val.isOsVerified = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.publicKeysHashes =
        decoder.decodeArrayPointer(new codec.PointerTo(byte_string$.ByteString));
    val.productName =
        decoder.decodeStruct(codec.NullableString);
    val.version =
        decoder.decodeStruct(codec.NullableString);
    val.subjectName =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  ExecutableMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ExecutableMetadata.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isRunning & 1) << 0
    packed |= (val.isOsVerified & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(byte_string$.ByteString), val.publicKeysHashes);
    encoder.encodeStruct(codec.NullableString, val.productName);
    encoder.encodeStruct(codec.NullableString, val.version);
    encoder.encodeStruct(codec.NullableString, val.subjectName);
  };
  function FileSystemItem(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemItem.prototype.initDefaults_ = function() {
    this.filePath = null;
    this.presence = 0;
    this.sha256Hash = null;
    this.executableMetadata = null;
  };
  FileSystemItem.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileSystemItem.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemItem.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemItem.presence
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, PresenceValue);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemItem.sha256Hash
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, byte_string$.ByteString, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemItem.executableMetadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, ExecutableMetadata, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemItem.encodedSize = codec.kStructHeaderSize + 32;

  FileSystemItem.decode = function(decoder) {
    var packed;
    var val = new FileSystemItem();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath =
        decoder.decodeStructPointer(file_path$.FilePath);
    val.presence =
        decoder.decodeStruct(new codec.Enum(PresenceValue));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sha256Hash =
        decoder.decodeStructPointer(byte_string$.ByteString);
    val.executableMetadata =
        decoder.decodeStructPointer(ExecutableMetadata);
    return val;
  };

  FileSystemItem.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemItem.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.filePath);
    encoder.encodeStruct(codec.Int32, val.presence);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(byte_string$.ByteString, val.sha256Hash);
    encoder.encodeStructPointer(ExecutableMetadata, val.executableMetadata);
  };
  function FileSystemItemRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemItemRequest.prototype.initDefaults_ = function() {
    this.filePath = null;
    this.computeSha256 = false;
    this.computeExecutableMetadata = false;
  };
  FileSystemItemRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileSystemItemRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemItemRequest.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  FileSystemItemRequest.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemItemRequest.decode = function(decoder) {
    var packed;
    var val = new FileSystemItemRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath =
        decoder.decodeStructPointer(file_path$.FilePath);
    packed = decoder.readUint8();
    val.computeSha256 = (packed >> 0) & 1 ? true : false;
    val.computeExecutableMetadata = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemItemRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemItemRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.filePath);
    packed = 0;
    packed |= (val.computeSha256 & 1) << 0
    packed |= (val.computeExecutableMetadata & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SystemSignalsService_GetFileSystemSignals_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SystemSignalsService_GetFileSystemSignals_Params.prototype.initDefaults_ = function() {
    this.requests = null;
  };
  SystemSignalsService_GetFileSystemSignals_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SystemSignalsService_GetFileSystemSignals_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SystemSignalsService_GetFileSystemSignals_Params.requests
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(FileSystemItemRequest), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SystemSignalsService_GetFileSystemSignals_Params.encodedSize = codec.kStructHeaderSize + 8;

  SystemSignalsService_GetFileSystemSignals_Params.decode = function(decoder) {
    var packed;
    var val = new SystemSignalsService_GetFileSystemSignals_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requests =
        decoder.decodeArrayPointer(new codec.PointerTo(FileSystemItemRequest));
    return val;
  };

  SystemSignalsService_GetFileSystemSignals_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SystemSignalsService_GetFileSystemSignals_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(FileSystemItemRequest), val.requests);
  };
  function SystemSignalsService_GetFileSystemSignals_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SystemSignalsService_GetFileSystemSignals_ResponseParams.prototype.initDefaults_ = function() {
    this.items = null;
  };
  SystemSignalsService_GetFileSystemSignals_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SystemSignalsService_GetFileSystemSignals_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SystemSignalsService_GetFileSystemSignals_ResponseParams.items
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(FileSystemItem), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SystemSignalsService_GetFileSystemSignals_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  SystemSignalsService_GetFileSystemSignals_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SystemSignalsService_GetFileSystemSignals_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.items =
        decoder.decodeArrayPointer(new codec.PointerTo(FileSystemItem));
    return val;
  };

  SystemSignalsService_GetFileSystemSignals_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SystemSignalsService_GetFileSystemSignals_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(FileSystemItem), val.items);
  };
  var kSystemSignalsService_GetFileSystemSignals_Name = 2144050659;

  function SystemSignalsServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SystemSignalsService,
                                                   handleOrPtrInfo);
  }

  function SystemSignalsServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SystemSignalsService, associatedInterfacePtrInfo);
  }

  SystemSignalsServiceAssociatedPtr.prototype =
      Object.create(SystemSignalsServicePtr.prototype);
  SystemSignalsServiceAssociatedPtr.prototype.constructor =
      SystemSignalsServiceAssociatedPtr;

  function SystemSignalsServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  SystemSignalsServicePtr.prototype.getFileSystemSignals = function() {
    return SystemSignalsServiceProxy.prototype.getFileSystemSignals
        .apply(this.ptr.getProxy(), arguments);
  };

  SystemSignalsServiceProxy.prototype.getFileSystemSignals = function(requests) {
    var params_ = new SystemSignalsService_GetFileSystemSignals_Params();
    params_.requests = requests;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSystemSignalsService_GetFileSystemSignals_Name,
          codec.align(SystemSignalsService_GetFileSystemSignals_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SystemSignalsService_GetFileSystemSignals_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SystemSignalsService_GetFileSystemSignals_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SystemSignalsServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  SystemSignalsServiceStub.prototype.getFileSystemSignals = function(requests) {
    return this.delegate_ && this.delegate_.getFileSystemSignals && this.delegate_.getFileSystemSignals(requests);
  }

  SystemSignalsServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  SystemSignalsServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSystemSignalsService_GetFileSystemSignals_Name:
      var params = reader.decodeStruct(SystemSignalsService_GetFileSystemSignals_Params);
      this.getFileSystemSignals(params.requests).then(function(response) {
        var responseParams =
            new SystemSignalsService_GetFileSystemSignals_ResponseParams();
        responseParams.items = response.items;
        var builder = new codec.MessageV1Builder(
            kSystemSignalsService_GetFileSystemSignals_Name,
            codec.align(SystemSignalsService_GetFileSystemSignals_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SystemSignalsService_GetFileSystemSignals_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSystemSignalsServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSystemSignalsService_GetFileSystemSignals_Name:
        if (message.expectsResponse())
          paramsClass = SystemSignalsService_GetFileSystemSignals_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSystemSignalsServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSystemSignalsService_GetFileSystemSignals_Name:
        if (message.isResponse())
          paramsClass = SystemSignalsService_GetFileSystemSignals_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SystemSignalsService = {
    name: 'device_signals.mojom.SystemSignalsService',
    kVersion: 0,
    ptrClass: SystemSignalsServicePtr,
    proxyClass: SystemSignalsServiceProxy,
    stubClass: SystemSignalsServiceStub,
    validateRequest: validateSystemSignalsServiceRequest,
    validateResponse: validateSystemSignalsServiceResponse,
  };
  SystemSignalsServiceStub.prototype.validator = validateSystemSignalsServiceRequest;
  SystemSignalsServiceProxy.prototype.validator = validateSystemSignalsServiceResponse;
  exports.PresenceValue = PresenceValue;
  exports.ExecutableMetadata = ExecutableMetadata;
  exports.FileSystemItem = FileSystemItem;
  exports.FileSystemItemRequest = FileSystemItemRequest;
  exports.SystemSignalsService = SystemSignalsService;
  exports.SystemSignalsServicePtr = SystemSignalsServicePtr;
  exports.SystemSignalsServiceAssociatedPtr = SystemSignalsServiceAssociatedPtr;
})();