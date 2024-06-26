// third_party/blink/public/mojom/idle/idle_manager.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/idle/idle_manager.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }


  var IdleManagerError = {};
  IdleManagerError.kSuccess = 0;
  IdleManagerError.kPermissionDisabled = 1;
  IdleManagerError.MIN_VALUE = 0;
  IdleManagerError.MAX_VALUE = 1;

  IdleManagerError.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  IdleManagerError.toKnownEnumValue = function(value) {
    return value;
  };

  IdleManagerError.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function IdleState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdleState.prototype.initDefaults_ = function() {
    this.idleTime = null;
    this.screenLocked = false;
  };
  IdleState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdleState.validate = function(messageValidator, offset) {
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


    // validate IdleState.idleTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.TimeDelta, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  IdleState.encodedSize = codec.kStructHeaderSize + 16;

  IdleState.decode = function(decoder) {
    var packed;
    var val = new IdleState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.idleTime =
        decoder.decodeStructPointer(time$.TimeDelta);
    packed = decoder.readUint8();
    val.screenLocked = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  IdleState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdleState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.TimeDelta, val.idleTime);
    packed = 0;
    packed |= (val.screenLocked & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function IdleMonitor_Update_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdleMonitor_Update_Params.prototype.initDefaults_ = function() {
    this.state = null;
    this.isOverriddenByDevtools = false;
  };
  IdleMonitor_Update_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdleMonitor_Update_Params.validate = function(messageValidator, offset) {
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


    // validate IdleMonitor_Update_Params.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, IdleState, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  IdleMonitor_Update_Params.encodedSize = codec.kStructHeaderSize + 16;

  IdleMonitor_Update_Params.decode = function(decoder) {
    var packed;
    var val = new IdleMonitor_Update_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.state =
        decoder.decodeStructPointer(IdleState);
    packed = decoder.readUint8();
    val.isOverriddenByDevtools = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  IdleMonitor_Update_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdleMonitor_Update_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(IdleState, val.state);
    packed = 0;
    packed |= (val.isOverriddenByDevtools & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function IdleManager_AddMonitor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdleManager_AddMonitor_Params.prototype.initDefaults_ = function() {
    this.monitor = new IdleMonitorPtr();
  };
  IdleManager_AddMonitor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdleManager_AddMonitor_Params.validate = function(messageValidator, offset) {
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


    // validate IdleManager_AddMonitor_Params.monitor
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IdleManager_AddMonitor_Params.encodedSize = codec.kStructHeaderSize + 8;

  IdleManager_AddMonitor_Params.decode = function(decoder) {
    var packed;
    var val = new IdleManager_AddMonitor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.monitor =
        decoder.decodeStruct(new codec.Interface(IdleMonitorPtr));
    return val;
  };

  IdleManager_AddMonitor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdleManager_AddMonitor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(IdleMonitorPtr), val.monitor);
  };
  function IdleManager_AddMonitor_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IdleManager_AddMonitor_ResponseParams.prototype.initDefaults_ = function() {
    this.error = 0;
    this.state = null;
  };
  IdleManager_AddMonitor_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IdleManager_AddMonitor_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate IdleManager_AddMonitor_ResponseParams.error
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, IdleManagerError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IdleManager_AddMonitor_ResponseParams.state
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, IdleState, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  IdleManager_AddMonitor_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  IdleManager_AddMonitor_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new IdleManager_AddMonitor_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error =
        decoder.decodeStruct(new codec.Enum(IdleManagerError));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.state =
        decoder.decodeStructPointer(IdleState);
    return val;
  };

  IdleManager_AddMonitor_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IdleManager_AddMonitor_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(IdleState, val.state);
  };
  var kIdleMonitor_Update_Name = 0;

  function IdleMonitorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(IdleMonitor,
                                                   handleOrPtrInfo);
  }

  function IdleMonitorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        IdleMonitor, associatedInterfacePtrInfo);
  }

  IdleMonitorAssociatedPtr.prototype =
      Object.create(IdleMonitorPtr.prototype);
  IdleMonitorAssociatedPtr.prototype.constructor =
      IdleMonitorAssociatedPtr;

  function IdleMonitorProxy(receiver) {
    this.receiver_ = receiver;
  }
  IdleMonitorPtr.prototype.update = function() {
    return IdleMonitorProxy.prototype.update
        .apply(this.ptr.getProxy(), arguments);
  };

  IdleMonitorProxy.prototype.update = function(state, isOverriddenByDevtools) {
    var params_ = new IdleMonitor_Update_Params();
    params_.state = state;
    params_.isOverriddenByDevtools = isOverriddenByDevtools;
    var builder = new codec.MessageV0Builder(
        kIdleMonitor_Update_Name,
        codec.align(IdleMonitor_Update_Params.encodedSize));
    builder.encodeStruct(IdleMonitor_Update_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function IdleMonitorStub(delegate) {
    this.delegate_ = delegate;
  }
  IdleMonitorStub.prototype.update = function(state, isOverriddenByDevtools) {
    return this.delegate_ && this.delegate_.update && this.delegate_.update(state, isOverriddenByDevtools);
  }

  IdleMonitorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kIdleMonitor_Update_Name:
      var params = reader.decodeStruct(IdleMonitor_Update_Params);
      this.update(params.state, params.isOverriddenByDevtools);
      return true;
    default:
      return false;
    }
  };

  IdleMonitorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateIdleMonitorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kIdleMonitor_Update_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = IdleMonitor_Update_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateIdleMonitorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var IdleMonitor = {
    name: 'blink.mojom.IdleMonitor',
    kVersion: 0,
    ptrClass: IdleMonitorPtr,
    proxyClass: IdleMonitorProxy,
    stubClass: IdleMonitorStub,
    validateRequest: validateIdleMonitorRequest,
    validateResponse: null,
  };
  IdleMonitorStub.prototype.validator = validateIdleMonitorRequest;
  IdleMonitorProxy.prototype.validator = null;
  var kIdleManager_AddMonitor_Name = 0;

  function IdleManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(IdleManager,
                                                   handleOrPtrInfo);
  }

  function IdleManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        IdleManager, associatedInterfacePtrInfo);
  }

  IdleManagerAssociatedPtr.prototype =
      Object.create(IdleManagerPtr.prototype);
  IdleManagerAssociatedPtr.prototype.constructor =
      IdleManagerAssociatedPtr;

  function IdleManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  IdleManagerPtr.prototype.addMonitor = function() {
    return IdleManagerProxy.prototype.addMonitor
        .apply(this.ptr.getProxy(), arguments);
  };

  IdleManagerProxy.prototype.addMonitor = function(monitor) {
    var params_ = new IdleManager_AddMonitor_Params();
    params_.monitor = monitor;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kIdleManager_AddMonitor_Name,
          codec.align(IdleManager_AddMonitor_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(IdleManager_AddMonitor_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(IdleManager_AddMonitor_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function IdleManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  IdleManagerStub.prototype.addMonitor = function(monitor) {
    return this.delegate_ && this.delegate_.addMonitor && this.delegate_.addMonitor(monitor);
  }

  IdleManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  IdleManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kIdleManager_AddMonitor_Name:
      var params = reader.decodeStruct(IdleManager_AddMonitor_Params);
      this.addMonitor(params.monitor).then(function(response) {
        var responseParams =
            new IdleManager_AddMonitor_ResponseParams();
        responseParams.error = response.error;
        responseParams.state = response.state;
        var builder = new codec.MessageV1Builder(
            kIdleManager_AddMonitor_Name,
            codec.align(IdleManager_AddMonitor_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(IdleManager_AddMonitor_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateIdleManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kIdleManager_AddMonitor_Name:
        if (message.expectsResponse())
          paramsClass = IdleManager_AddMonitor_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateIdleManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kIdleManager_AddMonitor_Name:
        if (message.isResponse())
          paramsClass = IdleManager_AddMonitor_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var IdleManager = {
    name: 'blink.mojom.IdleManager',
    kVersion: 0,
    ptrClass: IdleManagerPtr,
    proxyClass: IdleManagerProxy,
    stubClass: IdleManagerStub,
    validateRequest: validateIdleManagerRequest,
    validateResponse: validateIdleManagerResponse,
  };
  IdleManager.USER_INPUT_THRESHOLD_MS = 60000,
  IdleManagerStub.prototype.validator = validateIdleManagerRequest;
  IdleManagerProxy.prototype.validator = validateIdleManagerResponse;
  exports.IdleManagerError = IdleManagerError;
  exports.IdleState = IdleState;
  exports.IdleMonitor = IdleMonitor;
  exports.IdleMonitorPtr = IdleMonitorPtr;
  exports.IdleMonitorAssociatedPtr = IdleMonitorAssociatedPtr;
  exports.IdleManager = IdleManager;
  exports.IdleManagerPtr = IdleManagerPtr;
  exports.IdleManagerAssociatedPtr = IdleManagerAssociatedPtr;
})();