// services/device/public/mojom/device_posture_provider.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/device_posture_provider.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }


  var DevicePostureType = {};
  DevicePostureType.kContinuous = 0;
  DevicePostureType.kFolded = 1;
  DevicePostureType.MIN_VALUE = 0;
  DevicePostureType.MAX_VALUE = 1;

  DevicePostureType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  DevicePostureType.toKnownEnumValue = function(value) {
    return value;
  };

  DevicePostureType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DevicePostureProvider_AddListenerAndGetCurrentPosture_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.prototype.initDefaults_ = function() {
    this.client = new DevicePostureClientPtr();
  };
  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.validate = function(messageValidator, offset) {
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


    // validate DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.encodedSize = codec.kStructHeaderSize + 8;

  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.decode = function(decoder) {
    var packed;
    var val = new DevicePostureProvider_AddListenerAndGetCurrentPosture_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client =
        decoder.decodeStruct(new codec.Interface(DevicePostureClientPtr));
    return val;
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(DevicePostureClientPtr), val.client);
  };
  function DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.prototype.initDefaults_ = function() {
    this.posture = 0;
  };
  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.posture
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, DevicePostureType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.posture =
        decoder.decodeStruct(new codec.Enum(DevicePostureType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.posture);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.prototype.initDefaults_ = function() {
    this.client = new DeviceViewportSegmentsClientPtr();
  };
  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.validate = function(messageValidator, offset) {
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


    // validate DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.encodedSize = codec.kStructHeaderSize + 8;

  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.decode = function(decoder) {
    var packed;
    var val = new DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client =
        decoder.decodeStruct(new codec.Interface(DeviceViewportSegmentsClientPtr));
    return val;
  };

  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(DeviceViewportSegmentsClientPtr), val.client);
  };
  function DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.prototype.initDefaults_ = function() {
    this.segments = null;
  };
  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.segments
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(geometry$.Rect), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.segments =
        decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Rect));
    return val;
  };

  DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Rect), val.segments);
  };
  function DevicePostureClient_OnPostureChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePostureClient_OnPostureChanged_Params.prototype.initDefaults_ = function() {
    this.posture = 0;
  };
  DevicePostureClient_OnPostureChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePostureClient_OnPostureChanged_Params.validate = function(messageValidator, offset) {
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


    // validate DevicePostureClient_OnPostureChanged_Params.posture
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, DevicePostureType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevicePostureClient_OnPostureChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  DevicePostureClient_OnPostureChanged_Params.decode = function(decoder) {
    var packed;
    var val = new DevicePostureClient_OnPostureChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.posture =
        decoder.decodeStruct(new codec.Enum(DevicePostureType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DevicePostureClient_OnPostureChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePostureClient_OnPostureChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.posture);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.prototype.initDefaults_ = function() {
    this.segments = null;
  };
  DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.validate = function(messageValidator, offset) {
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


    // validate DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.segments
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(geometry$.Rect), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.decode = function(decoder) {
    var packed;
    var val = new DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.segments =
        decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Rect));
    return val;
  };

  DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Rect), val.segments);
  };
  var kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name = 832431688;
  var kDevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Name = 540610447;

  function DevicePostureProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DevicePostureProvider,
                                                   handleOrPtrInfo);
  }

  function DevicePostureProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DevicePostureProvider, associatedInterfacePtrInfo);
  }

  DevicePostureProviderAssociatedPtr.prototype =
      Object.create(DevicePostureProviderPtr.prototype);
  DevicePostureProviderAssociatedPtr.prototype.constructor =
      DevicePostureProviderAssociatedPtr;

  function DevicePostureProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevicePostureProviderPtr.prototype.addListenerAndGetCurrentPosture = function() {
    return DevicePostureProviderProxy.prototype.addListenerAndGetCurrentPosture
        .apply(this.ptr.getProxy(), arguments);
  };

  DevicePostureProviderProxy.prototype.addListenerAndGetCurrentPosture = function(client) {
    var params_ = new DevicePostureProvider_AddListenerAndGetCurrentPosture_Params();
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name,
          codec.align(DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(DevicePostureProvider_AddListenerAndGetCurrentPosture_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DevicePostureProviderPtr.prototype.addListenerAndGetCurrentViewportSegments = function() {
    return DevicePostureProviderProxy.prototype.addListenerAndGetCurrentViewportSegments
        .apply(this.ptr.getProxy(), arguments);
  };

  DevicePostureProviderProxy.prototype.addListenerAndGetCurrentViewportSegments = function(client) {
    var params_ = new DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params();
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Name,
          codec.align(DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function DevicePostureProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  DevicePostureProviderStub.prototype.addListenerAndGetCurrentPosture = function(client) {
    return this.delegate_ && this.delegate_.addListenerAndGetCurrentPosture && this.delegate_.addListenerAndGetCurrentPosture(client);
  }
  DevicePostureProviderStub.prototype.addListenerAndGetCurrentViewportSegments = function(client) {
    return this.delegate_ && this.delegate_.addListenerAndGetCurrentViewportSegments && this.delegate_.addListenerAndGetCurrentViewportSegments(client);
  }

  DevicePostureProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  DevicePostureProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name:
      var params = reader.decodeStruct(DevicePostureProvider_AddListenerAndGetCurrentPosture_Params);
      this.addListenerAndGetCurrentPosture(params.client).then(function(response) {
        var responseParams =
            new DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams();
        responseParams.posture = response.posture;
        var builder = new codec.MessageV1Builder(
            kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name,
            codec.align(DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kDevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Name:
      var params = reader.decodeStruct(DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params);
      this.addListenerAndGetCurrentViewportSegments(params.client).then(function(response) {
        var responseParams =
            new DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams();
        responseParams.segments = response.segments;
        var builder = new codec.MessageV1Builder(
            kDevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Name,
            codec.align(DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateDevicePostureProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name:
        if (message.expectsResponse())
          paramsClass = DevicePostureProvider_AddListenerAndGetCurrentPosture_Params;
      break;
      case kDevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Name:
        if (message.expectsResponse())
          paramsClass = DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDevicePostureProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name:
        if (message.isResponse())
          paramsClass = DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams;
        break;
      case kDevicePostureProvider_AddListenerAndGetCurrentViewportSegments_Name:
        if (message.isResponse())
          paramsClass = DevicePostureProvider_AddListenerAndGetCurrentViewportSegments_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var DevicePostureProvider = {
    name: 'device.mojom.DevicePostureProvider',
    kVersion: 0,
    ptrClass: DevicePostureProviderPtr,
    proxyClass: DevicePostureProviderProxy,
    stubClass: DevicePostureProviderStub,
    validateRequest: validateDevicePostureProviderRequest,
    validateResponse: validateDevicePostureProviderResponse,
  };
  DevicePostureProviderStub.prototype.validator = validateDevicePostureProviderRequest;
  DevicePostureProviderProxy.prototype.validator = validateDevicePostureProviderResponse;
  var kDevicePostureClient_OnPostureChanged_Name = 741979233;

  function DevicePostureClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DevicePostureClient,
                                                   handleOrPtrInfo);
  }

  function DevicePostureClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DevicePostureClient, associatedInterfacePtrInfo);
  }

  DevicePostureClientAssociatedPtr.prototype =
      Object.create(DevicePostureClientPtr.prototype);
  DevicePostureClientAssociatedPtr.prototype.constructor =
      DevicePostureClientAssociatedPtr;

  function DevicePostureClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevicePostureClientPtr.prototype.onPostureChanged = function() {
    return DevicePostureClientProxy.prototype.onPostureChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  DevicePostureClientProxy.prototype.onPostureChanged = function(posture) {
    var params_ = new DevicePostureClient_OnPostureChanged_Params();
    params_.posture = posture;
    var builder = new codec.MessageV0Builder(
        kDevicePostureClient_OnPostureChanged_Name,
        codec.align(DevicePostureClient_OnPostureChanged_Params.encodedSize));
    builder.encodeStruct(DevicePostureClient_OnPostureChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DevicePostureClientStub(delegate) {
    this.delegate_ = delegate;
  }
  DevicePostureClientStub.prototype.onPostureChanged = function(posture) {
    return this.delegate_ && this.delegate_.onPostureChanged && this.delegate_.onPostureChanged(posture);
  }

  DevicePostureClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevicePostureClient_OnPostureChanged_Name:
      var params = reader.decodeStruct(DevicePostureClient_OnPostureChanged_Params);
      this.onPostureChanged(params.posture);
      return true;
    default:
      return false;
    }
  };

  DevicePostureClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDevicePostureClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevicePostureClient_OnPostureChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DevicePostureClient_OnPostureChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDevicePostureClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DevicePostureClient = {
    name: 'device.mojom.DevicePostureClient',
    kVersion: 0,
    ptrClass: DevicePostureClientPtr,
    proxyClass: DevicePostureClientProxy,
    stubClass: DevicePostureClientStub,
    validateRequest: validateDevicePostureClientRequest,
    validateResponse: null,
  };
  DevicePostureClientStub.prototype.validator = validateDevicePostureClientRequest;
  DevicePostureClientProxy.prototype.validator = null;
  var kDeviceViewportSegmentsClient_OnViewportSegmentsChanged_Name = 9803394;

  function DeviceViewportSegmentsClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DeviceViewportSegmentsClient,
                                                   handleOrPtrInfo);
  }

  function DeviceViewportSegmentsClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DeviceViewportSegmentsClient, associatedInterfacePtrInfo);
  }

  DeviceViewportSegmentsClientAssociatedPtr.prototype =
      Object.create(DeviceViewportSegmentsClientPtr.prototype);
  DeviceViewportSegmentsClientAssociatedPtr.prototype.constructor =
      DeviceViewportSegmentsClientAssociatedPtr;

  function DeviceViewportSegmentsClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  DeviceViewportSegmentsClientPtr.prototype.onViewportSegmentsChanged = function() {
    return DeviceViewportSegmentsClientProxy.prototype.onViewportSegmentsChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceViewportSegmentsClientProxy.prototype.onViewportSegmentsChanged = function(segments) {
    var params_ = new DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params();
    params_.segments = segments;
    var builder = new codec.MessageV0Builder(
        kDeviceViewportSegmentsClient_OnViewportSegmentsChanged_Name,
        codec.align(DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params.encodedSize));
    builder.encodeStruct(DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DeviceViewportSegmentsClientStub(delegate) {
    this.delegate_ = delegate;
  }
  DeviceViewportSegmentsClientStub.prototype.onViewportSegmentsChanged = function(segments) {
    return this.delegate_ && this.delegate_.onViewportSegmentsChanged && this.delegate_.onViewportSegmentsChanged(segments);
  }

  DeviceViewportSegmentsClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDeviceViewportSegmentsClient_OnViewportSegmentsChanged_Name:
      var params = reader.decodeStruct(DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params);
      this.onViewportSegmentsChanged(params.segments);
      return true;
    default:
      return false;
    }
  };

  DeviceViewportSegmentsClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDeviceViewportSegmentsClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDeviceViewportSegmentsClient_OnViewportSegmentsChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DeviceViewportSegmentsClient_OnViewportSegmentsChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDeviceViewportSegmentsClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DeviceViewportSegmentsClient = {
    name: 'device.mojom.DeviceViewportSegmentsClient',
    kVersion: 0,
    ptrClass: DeviceViewportSegmentsClientPtr,
    proxyClass: DeviceViewportSegmentsClientProxy,
    stubClass: DeviceViewportSegmentsClientStub,
    validateRequest: validateDeviceViewportSegmentsClientRequest,
    validateResponse: null,
  };
  DeviceViewportSegmentsClientStub.prototype.validator = validateDeviceViewportSegmentsClientRequest;
  DeviceViewportSegmentsClientProxy.prototype.validator = null;
  exports.DevicePostureType = DevicePostureType;
  exports.DevicePostureProvider = DevicePostureProvider;
  exports.DevicePostureProviderPtr = DevicePostureProviderPtr;
  exports.DevicePostureProviderAssociatedPtr = DevicePostureProviderAssociatedPtr;
  exports.DevicePostureClient = DevicePostureClient;
  exports.DevicePostureClientPtr = DevicePostureClientPtr;
  exports.DevicePostureClientAssociatedPtr = DevicePostureClientAssociatedPtr;
  exports.DeviceViewportSegmentsClient = DeviceViewportSegmentsClient;
  exports.DeviceViewportSegmentsClientPtr = DeviceViewportSegmentsClientPtr;
  exports.DeviceViewportSegmentsClientAssociatedPtr = DeviceViewportSegmentsClientAssociatedPtr;
})();