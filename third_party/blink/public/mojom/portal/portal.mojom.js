// third_party/blink/public/mojom/portal/portal.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/portal/portal.mojom';
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
  var referrer$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/referrer.mojom', '../loader/referrer.mojom.js');
  }
  var transferable_message$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/messaging/transferable_message.mojom', '../messaging/transferable_message.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var PortalActivateResult = {};
  PortalActivateResult.kPredecessorWillUnload = 0;
  PortalActivateResult.kPredecessorWasAdopted = 1;
  PortalActivateResult.kRejectedDueToPortalNotReady = 2;
  PortalActivateResult.kRejectedDueToErrorInPortal = 3;
  PortalActivateResult.kRejectedDueToPredecessorNavigation = 4;
  PortalActivateResult.kDisconnected = 5;
  PortalActivateResult.kNotImplemented = 6;
  PortalActivateResult.kAbortedDueToBug = 7;
  PortalActivateResult.MIN_VALUE = 0;
  PortalActivateResult.MAX_VALUE = 7;

  PortalActivateResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  PortalActivateResult.toKnownEnumValue = function(value) {
    return value;
  };

  PortalActivateResult.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function Portal_Navigate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Portal_Navigate_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.referrer = null;
  };
  Portal_Navigate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Portal_Navigate_Params.validate = function(messageValidator, offset) {
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


    // validate Portal_Navigate_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Portal_Navigate_Params.referrer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, referrer$.Referrer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Portal_Navigate_Params.encodedSize = codec.kStructHeaderSize + 16;

  Portal_Navigate_Params.decode = function(decoder) {
    var packed;
    var val = new Portal_Navigate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.referrer =
        decoder.decodeStructPointer(referrer$.Referrer);
    return val;
  };

  Portal_Navigate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Portal_Navigate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(referrer$.Referrer, val.referrer);
  };
  function Portal_Navigate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Portal_Navigate_ResponseParams.prototype.initDefaults_ = function() {
  };
  Portal_Navigate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Portal_Navigate_ResponseParams.validate = function(messageValidator, offset) {
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

  Portal_Navigate_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  Portal_Navigate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Portal_Navigate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Portal_Navigate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Portal_Navigate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function Portal_Activate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Portal_Activate_Params.prototype.initDefaults_ = function() {
    this.data = null;
    this.activationTime = null;
    this.traceId = 0;
  };
  Portal_Activate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Portal_Activate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Portal_Activate_Params.data
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transferable_message$.TransferableMessage, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Portal_Activate_Params.activationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Portal_Activate_Params.encodedSize = codec.kStructHeaderSize + 24;

  Portal_Activate_Params.decode = function(decoder) {
    var packed;
    var val = new Portal_Activate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeStructPointer(transferable_message$.TransferableMessage);
    val.activationTime =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.traceId =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  Portal_Activate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Portal_Activate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transferable_message$.TransferableMessage, val.data);
    encoder.encodeStructPointer(time$.TimeTicks, val.activationTime);
    encoder.encodeStruct(codec.Uint64, val.traceId);
  };
  function Portal_Activate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Portal_Activate_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  Portal_Activate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Portal_Activate_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Portal_Activate_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, PortalActivateResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Portal_Activate_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Portal_Activate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Portal_Activate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(new codec.Enum(PortalActivateResult));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Portal_Activate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Portal_Activate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Portal_PostMessageToGuest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Portal_PostMessageToGuest_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  Portal_PostMessageToGuest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Portal_PostMessageToGuest_Params.validate = function(messageValidator, offset) {
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


    // validate Portal_PostMessageToGuest_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transferable_message$.TransferableMessage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Portal_PostMessageToGuest_Params.encodedSize = codec.kStructHeaderSize + 8;

  Portal_PostMessageToGuest_Params.decode = function(decoder) {
    var packed;
    var val = new Portal_PostMessageToGuest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message =
        decoder.decodeStructPointer(transferable_message$.TransferableMessage);
    return val;
  };

  Portal_PostMessageToGuest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Portal_PostMessageToGuest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transferable_message$.TransferableMessage, val.message);
  };
  function PortalClient_ForwardMessageFromGuest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PortalClient_ForwardMessageFromGuest_Params.prototype.initDefaults_ = function() {
    this.message = null;
    this.sourceOrigin = null;
  };
  PortalClient_ForwardMessageFromGuest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PortalClient_ForwardMessageFromGuest_Params.validate = function(messageValidator, offset) {
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


    // validate PortalClient_ForwardMessageFromGuest_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transferable_message$.TransferableMessage, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PortalClient_ForwardMessageFromGuest_Params.sourceOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PortalClient_ForwardMessageFromGuest_Params.encodedSize = codec.kStructHeaderSize + 16;

  PortalClient_ForwardMessageFromGuest_Params.decode = function(decoder) {
    var packed;
    var val = new PortalClient_ForwardMessageFromGuest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message =
        decoder.decodeStructPointer(transferable_message$.TransferableMessage);
    val.sourceOrigin =
        decoder.decodeStructPointer(origin$.Origin);
    return val;
  };

  PortalClient_ForwardMessageFromGuest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PortalClient_ForwardMessageFromGuest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transferable_message$.TransferableMessage, val.message);
    encoder.encodeStructPointer(origin$.Origin, val.sourceOrigin);
  };
  function PortalClient_DispatchLoadEvent_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PortalClient_DispatchLoadEvent_Params.prototype.initDefaults_ = function() {
  };
  PortalClient_DispatchLoadEvent_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PortalClient_DispatchLoadEvent_Params.validate = function(messageValidator, offset) {
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

  PortalClient_DispatchLoadEvent_Params.encodedSize = codec.kStructHeaderSize + 0;

  PortalClient_DispatchLoadEvent_Params.decode = function(decoder) {
    var packed;
    var val = new PortalClient_DispatchLoadEvent_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PortalClient_DispatchLoadEvent_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PortalClient_DispatchLoadEvent_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PortalHost_PostMessageToHost_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PortalHost_PostMessageToHost_Params.prototype.initDefaults_ = function() {
    this.message = null;
  };
  PortalHost_PostMessageToHost_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PortalHost_PostMessageToHost_Params.validate = function(messageValidator, offset) {
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


    // validate PortalHost_PostMessageToHost_Params.message
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transferable_message$.TransferableMessage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PortalHost_PostMessageToHost_Params.encodedSize = codec.kStructHeaderSize + 8;

  PortalHost_PostMessageToHost_Params.decode = function(decoder) {
    var packed;
    var val = new PortalHost_PostMessageToHost_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.message =
        decoder.decodeStructPointer(transferable_message$.TransferableMessage);
    return val;
  };

  PortalHost_PostMessageToHost_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PortalHost_PostMessageToHost_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transferable_message$.TransferableMessage, val.message);
  };
  var kPortal_Navigate_Name = 787484019;
  var kPortal_Activate_Name = 1665891384;
  var kPortal_PostMessageToGuest_Name = 884030174;

  function PortalPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Portal,
                                                   handleOrPtrInfo);
  }

  function PortalAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Portal, associatedInterfacePtrInfo);
  }

  PortalAssociatedPtr.prototype =
      Object.create(PortalPtr.prototype);
  PortalAssociatedPtr.prototype.constructor =
      PortalAssociatedPtr;

  function PortalProxy(receiver) {
    this.receiver_ = receiver;
  }
  PortalPtr.prototype.navigate = function() {
    return PortalProxy.prototype.navigate
        .apply(this.ptr.getProxy(), arguments);
  };

  PortalProxy.prototype.navigate = function(url, referrer) {
    var params_ = new Portal_Navigate_Params();
    params_.url = url;
    params_.referrer = referrer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPortal_Navigate_Name,
          codec.align(Portal_Navigate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Portal_Navigate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Portal_Navigate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PortalPtr.prototype.activate = function() {
    return PortalProxy.prototype.activate
        .apply(this.ptr.getProxy(), arguments);
  };

  PortalProxy.prototype.activate = function(data, activationTime, traceId) {
    var params_ = new Portal_Activate_Params();
    params_.data = data;
    params_.activationTime = activationTime;
    params_.traceId = traceId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPortal_Activate_Name,
          codec.align(Portal_Activate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Portal_Activate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Portal_Activate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  PortalPtr.prototype.postMessageToGuest = function() {
    return PortalProxy.prototype.postMessageToGuest
        .apply(this.ptr.getProxy(), arguments);
  };

  PortalProxy.prototype.postMessageToGuest = function(message) {
    var params_ = new Portal_PostMessageToGuest_Params();
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kPortal_PostMessageToGuest_Name,
        codec.align(Portal_PostMessageToGuest_Params.encodedSize));
    builder.encodeStruct(Portal_PostMessageToGuest_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PortalStub(delegate) {
    this.delegate_ = delegate;
  }
  PortalStub.prototype.navigate = function(url, referrer) {
    return this.delegate_ && this.delegate_.navigate && this.delegate_.navigate(url, referrer);
  }
  PortalStub.prototype.activate = function(data, activationTime, traceId) {
    return this.delegate_ && this.delegate_.activate && this.delegate_.activate(data, activationTime, traceId);
  }
  PortalStub.prototype.postMessageToGuest = function(message) {
    return this.delegate_ && this.delegate_.postMessageToGuest && this.delegate_.postMessageToGuest(message);
  }

  PortalStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPortal_PostMessageToGuest_Name:
      var params = reader.decodeStruct(Portal_PostMessageToGuest_Params);
      this.postMessageToGuest(params.message);
      return true;
    default:
      return false;
    }
  };

  PortalStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPortal_Navigate_Name:
      var params = reader.decodeStruct(Portal_Navigate_Params);
      this.navigate(params.url, params.referrer).then(function(response) {
        var responseParams =
            new Portal_Navigate_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kPortal_Navigate_Name,
            codec.align(Portal_Navigate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Portal_Navigate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kPortal_Activate_Name:
      var params = reader.decodeStruct(Portal_Activate_Params);
      this.activate(params.data, params.activationTime, params.traceId).then(function(response) {
        var responseParams =
            new Portal_Activate_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kPortal_Activate_Name,
            codec.align(Portal_Activate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Portal_Activate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePortalRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPortal_Navigate_Name:
        if (message.expectsResponse())
          paramsClass = Portal_Navigate_Params;
      break;
      case kPortal_Activate_Name:
        if (message.expectsResponse())
          paramsClass = Portal_Activate_Params;
      break;
      case kPortal_PostMessageToGuest_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Portal_PostMessageToGuest_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePortalResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPortal_Navigate_Name:
        if (message.isResponse())
          paramsClass = Portal_Navigate_ResponseParams;
        break;
      case kPortal_Activate_Name:
        if (message.isResponse())
          paramsClass = Portal_Activate_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Portal = {
    name: 'blink.mojom.Portal',
    kVersion: 0,
    ptrClass: PortalPtr,
    proxyClass: PortalProxy,
    stubClass: PortalStub,
    validateRequest: validatePortalRequest,
    validateResponse: validatePortalResponse,
  };
  PortalStub.prototype.validator = validatePortalRequest;
  PortalProxy.prototype.validator = validatePortalResponse;
  var kPortalClient_ForwardMessageFromGuest_Name = 918983398;
  var kPortalClient_DispatchLoadEvent_Name = 1416572245;

  function PortalClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PortalClient,
                                                   handleOrPtrInfo);
  }

  function PortalClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PortalClient, associatedInterfacePtrInfo);
  }

  PortalClientAssociatedPtr.prototype =
      Object.create(PortalClientPtr.prototype);
  PortalClientAssociatedPtr.prototype.constructor =
      PortalClientAssociatedPtr;

  function PortalClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  PortalClientPtr.prototype.forwardMessageFromGuest = function() {
    return PortalClientProxy.prototype.forwardMessageFromGuest
        .apply(this.ptr.getProxy(), arguments);
  };

  PortalClientProxy.prototype.forwardMessageFromGuest = function(message, sourceOrigin) {
    var params_ = new PortalClient_ForwardMessageFromGuest_Params();
    params_.message = message;
    params_.sourceOrigin = sourceOrigin;
    var builder = new codec.MessageV0Builder(
        kPortalClient_ForwardMessageFromGuest_Name,
        codec.align(PortalClient_ForwardMessageFromGuest_Params.encodedSize));
    builder.encodeStruct(PortalClient_ForwardMessageFromGuest_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PortalClientPtr.prototype.dispatchLoadEvent = function() {
    return PortalClientProxy.prototype.dispatchLoadEvent
        .apply(this.ptr.getProxy(), arguments);
  };

  PortalClientProxy.prototype.dispatchLoadEvent = function() {
    var params_ = new PortalClient_DispatchLoadEvent_Params();
    var builder = new codec.MessageV0Builder(
        kPortalClient_DispatchLoadEvent_Name,
        codec.align(PortalClient_DispatchLoadEvent_Params.encodedSize));
    builder.encodeStruct(PortalClient_DispatchLoadEvent_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PortalClientStub(delegate) {
    this.delegate_ = delegate;
  }
  PortalClientStub.prototype.forwardMessageFromGuest = function(message, sourceOrigin) {
    return this.delegate_ && this.delegate_.forwardMessageFromGuest && this.delegate_.forwardMessageFromGuest(message, sourceOrigin);
  }
  PortalClientStub.prototype.dispatchLoadEvent = function() {
    return this.delegate_ && this.delegate_.dispatchLoadEvent && this.delegate_.dispatchLoadEvent();
  }

  PortalClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPortalClient_ForwardMessageFromGuest_Name:
      var params = reader.decodeStruct(PortalClient_ForwardMessageFromGuest_Params);
      this.forwardMessageFromGuest(params.message, params.sourceOrigin);
      return true;
    case kPortalClient_DispatchLoadEvent_Name:
      var params = reader.decodeStruct(PortalClient_DispatchLoadEvent_Params);
      this.dispatchLoadEvent();
      return true;
    default:
      return false;
    }
  };

  PortalClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePortalClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPortalClient_ForwardMessageFromGuest_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PortalClient_ForwardMessageFromGuest_Params;
      break;
      case kPortalClient_DispatchLoadEvent_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PortalClient_DispatchLoadEvent_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePortalClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PortalClient = {
    name: 'blink.mojom.PortalClient',
    kVersion: 0,
    ptrClass: PortalClientPtr,
    proxyClass: PortalClientProxy,
    stubClass: PortalClientStub,
    validateRequest: validatePortalClientRequest,
    validateResponse: null,
  };
  PortalClientStub.prototype.validator = validatePortalClientRequest;
  PortalClientProxy.prototype.validator = null;
  var kPortalHost_PostMessageToHost_Name = 1540877306;

  function PortalHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PortalHost,
                                                   handleOrPtrInfo);
  }

  function PortalHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PortalHost, associatedInterfacePtrInfo);
  }

  PortalHostAssociatedPtr.prototype =
      Object.create(PortalHostPtr.prototype);
  PortalHostAssociatedPtr.prototype.constructor =
      PortalHostAssociatedPtr;

  function PortalHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  PortalHostPtr.prototype.postMessageToHost = function() {
    return PortalHostProxy.prototype.postMessageToHost
        .apply(this.ptr.getProxy(), arguments);
  };

  PortalHostProxy.prototype.postMessageToHost = function(message) {
    var params_ = new PortalHost_PostMessageToHost_Params();
    params_.message = message;
    var builder = new codec.MessageV0Builder(
        kPortalHost_PostMessageToHost_Name,
        codec.align(PortalHost_PostMessageToHost_Params.encodedSize));
    builder.encodeStruct(PortalHost_PostMessageToHost_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PortalHostStub(delegate) {
    this.delegate_ = delegate;
  }
  PortalHostStub.prototype.postMessageToHost = function(message) {
    return this.delegate_ && this.delegate_.postMessageToHost && this.delegate_.postMessageToHost(message);
  }

  PortalHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPortalHost_PostMessageToHost_Name:
      var params = reader.decodeStruct(PortalHost_PostMessageToHost_Params);
      this.postMessageToHost(params.message);
      return true;
    default:
      return false;
    }
  };

  PortalHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePortalHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPortalHost_PostMessageToHost_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PortalHost_PostMessageToHost_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePortalHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PortalHost = {
    name: 'blink.mojom.PortalHost',
    kVersion: 0,
    ptrClass: PortalHostPtr,
    proxyClass: PortalHostProxy,
    stubClass: PortalHostStub,
    validateRequest: validatePortalHostRequest,
    validateResponse: null,
  };
  PortalHostStub.prototype.validator = validatePortalHostRequest;
  PortalHostProxy.prototype.validator = null;
  exports.PortalActivateResult = PortalActivateResult;
  exports.Portal = Portal;
  exports.PortalPtr = PortalPtr;
  exports.PortalAssociatedPtr = PortalAssociatedPtr;
  exports.PortalClient = PortalClient;
  exports.PortalClientPtr = PortalClientPtr;
  exports.PortalClientAssociatedPtr = PortalClientAssociatedPtr;
  exports.PortalHost = PortalHost;
  exports.PortalHostPtr = PortalHostPtr;
  exports.PortalHostAssociatedPtr = PortalHostAssociatedPtr;
})();