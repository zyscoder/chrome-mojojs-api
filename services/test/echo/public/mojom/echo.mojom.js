// services/test/echo/public/mojom/echo.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/test/echo/public/mojom/echo.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('echo.mojom');
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../../../../mojo/public/mojom/base/shared_memory.mojom.js');
  }
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../../../sandbox/policy/mojom/sandbox.mojom.js');
  }



  function EchoService_EchoString_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_EchoString_Params.prototype.initDefaults_ = function() {
    this.input = null;
  };
  EchoService_EchoString_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_EchoString_Params.validate = function(messageValidator, offset) {
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


    // validate EchoService_EchoString_Params.input
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_EchoString_Params.encodedSize = codec.kStructHeaderSize + 8;

  EchoService_EchoString_Params.decode = function(decoder) {
    var packed;
    var val = new EchoService_EchoString_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.input =
        decoder.decodeStruct(codec.String);
    return val;
  };

  EchoService_EchoString_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_EchoString_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.input);
  };
  function EchoService_EchoString_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_EchoString_ResponseParams.prototype.initDefaults_ = function() {
    this.echoedInput = null;
  };
  EchoService_EchoString_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_EchoString_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate EchoService_EchoString_ResponseParams.echoedInput
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_EchoString_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  EchoService_EchoString_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new EchoService_EchoString_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.echoedInput =
        decoder.decodeStruct(codec.String);
    return val;
  };

  EchoService_EchoString_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_EchoString_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.echoedInput);
  };
  function EchoService_EchoStringToSharedMemory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_EchoStringToSharedMemory_Params.prototype.initDefaults_ = function() {
    this.input = null;
    this.region = null;
  };
  EchoService_EchoStringToSharedMemory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_EchoStringToSharedMemory_Params.validate = function(messageValidator, offset) {
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


    // validate EchoService_EchoStringToSharedMemory_Params.input
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate EchoService_EchoStringToSharedMemory_Params.region
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, shared_memory$.UnsafeSharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_EchoStringToSharedMemory_Params.encodedSize = codec.kStructHeaderSize + 16;

  EchoService_EchoStringToSharedMemory_Params.decode = function(decoder) {
    var packed;
    var val = new EchoService_EchoStringToSharedMemory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.input =
        decoder.decodeStruct(codec.String);
    val.region =
        decoder.decodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion);
    return val;
  };

  EchoService_EchoStringToSharedMemory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_EchoStringToSharedMemory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.input);
    encoder.encodeStructPointer(shared_memory$.UnsafeSharedMemoryRegion, val.region);
  };
  function EchoService_Quit_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_Quit_Params.prototype.initDefaults_ = function() {
  };
  EchoService_Quit_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_Quit_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_Quit_Params.encodedSize = codec.kStructHeaderSize + 0;

  EchoService_Quit_Params.decode = function(decoder) {
    var packed;
    var val = new EchoService_Quit_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  EchoService_Quit_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_Quit_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function EchoService_Crash_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_Crash_Params.prototype.initDefaults_ = function() {
  };
  EchoService_Crash_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_Crash_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_Crash_Params.encodedSize = codec.kStructHeaderSize + 0;

  EchoService_Crash_Params.decode = function(decoder) {
    var packed;
    var val = new EchoService_Crash_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  EchoService_Crash_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_Crash_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kEchoService_EchoString_Name = 803162315;
  var kEchoService_EchoStringToSharedMemory_Name = 532322467;
  var kEchoService_Quit_Name = 392265494;
  var kEchoService_Crash_Name = 1191312716;

  function EchoServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(EchoService,
                                                   handleOrPtrInfo);
  }

  function EchoServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        EchoService, associatedInterfacePtrInfo);
  }

  EchoServiceAssociatedPtr.prototype =
      Object.create(EchoServicePtr.prototype);
  EchoServiceAssociatedPtr.prototype.constructor =
      EchoServiceAssociatedPtr;

  function EchoServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  EchoServicePtr.prototype.echoString = function() {
    return EchoServiceProxy.prototype.echoString
        .apply(this.ptr.getProxy(), arguments);
  };

  EchoServiceProxy.prototype.echoString = function(input) {
    var params_ = new EchoService_EchoString_Params();
    params_.input = input;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kEchoService_EchoString_Name,
          codec.align(EchoService_EchoString_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(EchoService_EchoString_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(EchoService_EchoString_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  EchoServicePtr.prototype.echoStringToSharedMemory = function() {
    return EchoServiceProxy.prototype.echoStringToSharedMemory
        .apply(this.ptr.getProxy(), arguments);
  };

  EchoServiceProxy.prototype.echoStringToSharedMemory = function(input, region) {
    var params_ = new EchoService_EchoStringToSharedMemory_Params();
    params_.input = input;
    params_.region = region;
    var builder = new codec.MessageV0Builder(
        kEchoService_EchoStringToSharedMemory_Name,
        codec.align(EchoService_EchoStringToSharedMemory_Params.encodedSize));
    builder.encodeStruct(EchoService_EchoStringToSharedMemory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  EchoServicePtr.prototype.quit = function() {
    return EchoServiceProxy.prototype.quit
        .apply(this.ptr.getProxy(), arguments);
  };

  EchoServiceProxy.prototype.quit = function() {
    var params_ = new EchoService_Quit_Params();
    var builder = new codec.MessageV0Builder(
        kEchoService_Quit_Name,
        codec.align(EchoService_Quit_Params.encodedSize));
    builder.encodeStruct(EchoService_Quit_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  EchoServicePtr.prototype.crash = function() {
    return EchoServiceProxy.prototype.crash
        .apply(this.ptr.getProxy(), arguments);
  };

  EchoServiceProxy.prototype.crash = function() {
    var params_ = new EchoService_Crash_Params();
    var builder = new codec.MessageV0Builder(
        kEchoService_Crash_Name,
        codec.align(EchoService_Crash_Params.encodedSize));
    builder.encodeStruct(EchoService_Crash_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function EchoServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  EchoServiceStub.prototype.echoString = function(input) {
    return this.delegate_ && this.delegate_.echoString && this.delegate_.echoString(input);
  }
  EchoServiceStub.prototype.echoStringToSharedMemory = function(input, region) {
    return this.delegate_ && this.delegate_.echoStringToSharedMemory && this.delegate_.echoStringToSharedMemory(input, region);
  }
  EchoServiceStub.prototype.quit = function() {
    return this.delegate_ && this.delegate_.quit && this.delegate_.quit();
  }
  EchoServiceStub.prototype.crash = function() {
    return this.delegate_ && this.delegate_.crash && this.delegate_.crash();
  }

  EchoServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kEchoService_EchoStringToSharedMemory_Name:
      var params = reader.decodeStruct(EchoService_EchoStringToSharedMemory_Params);
      this.echoStringToSharedMemory(params.input, params.region);
      return true;
    case kEchoService_Quit_Name:
      var params = reader.decodeStruct(EchoService_Quit_Params);
      this.quit();
      return true;
    case kEchoService_Crash_Name:
      var params = reader.decodeStruct(EchoService_Crash_Params);
      this.crash();
      return true;
    default:
      return false;
    }
  };

  EchoServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kEchoService_EchoString_Name:
      var params = reader.decodeStruct(EchoService_EchoString_Params);
      this.echoString(params.input).then(function(response) {
        var responseParams =
            new EchoService_EchoString_ResponseParams();
        responseParams.echoedInput = response.echoedInput;
        var builder = new codec.MessageV1Builder(
            kEchoService_EchoString_Name,
            codec.align(EchoService_EchoString_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(EchoService_EchoString_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateEchoServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kEchoService_EchoString_Name:
        if (message.expectsResponse())
          paramsClass = EchoService_EchoString_Params;
      break;
      case kEchoService_EchoStringToSharedMemory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = EchoService_EchoStringToSharedMemory_Params;
      break;
      case kEchoService_Quit_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = EchoService_Quit_Params;
      break;
      case kEchoService_Crash_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = EchoService_Crash_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateEchoServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kEchoService_EchoString_Name:
        if (message.isResponse())
          paramsClass = EchoService_EchoString_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var EchoService = {
    name: 'echo.mojom.EchoService',
    kVersion: 0,
    ptrClass: EchoServicePtr,
    proxyClass: EchoServiceProxy,
    stubClass: EchoServiceStub,
    validateRequest: validateEchoServiceRequest,
    validateResponse: validateEchoServiceResponse,
  };
  EchoService.LoadStatus = {};
  EchoService.LoadStatus.kSuccess = 0;
  EchoService.LoadStatus.kFailedLoadLibrary = 1;
  EchoService.LoadStatus.kFailedGetProcAddress = 2;
  EchoService.LoadStatus.kFailedCallingDelayLoad = 3;
  EchoService.LoadStatus.MIN_VALUE = 0;
  EchoService.LoadStatus.MAX_VALUE = 3;

  EchoService.LoadStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  EchoService.LoadStatus.toKnownEnumValue = function(value) {
    return value;
  };

  EchoService.LoadStatus.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  EchoServiceStub.prototype.validator = validateEchoServiceRequest;
  EchoServiceProxy.prototype.validator = validateEchoServiceResponse;
  exports.EchoService = EchoService;
  exports.EchoServicePtr = EchoServicePtr;
  exports.EchoServiceAssociatedPtr = EchoServiceAssociatedPtr;
})();