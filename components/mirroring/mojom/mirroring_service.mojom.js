// components/mirroring/mojom/mirroring_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/mirroring/mojom/mirroring_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mirroring.mojom');
  var cast_message_channel$ =
      mojo.internal.exposeNamespace('mirroring.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/mirroring/mojom/cast_message_channel.mojom', 'cast_message_channel.mojom.js');
  }
  var resource_provider$ =
      mojo.internal.exposeNamespace('mirroring.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/mirroring/mojom/resource_provider.mojom', 'resource_provider.mojom.js');
  }
  var session_observer$ =
      mojo.internal.exposeNamespace('mirroring.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/mirroring/mojom/session_observer.mojom', 'session_observer.mojom.js');
  }
  var session_parameters$ =
      mojo.internal.exposeNamespace('mirroring.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/mirroring/mojom/session_parameters.mojom', 'session_parameters.mojom.js');
  }
  var context$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/context.mojom', '../../../sandbox/policy/mojom/context.mojom.js');
  }
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../sandbox/policy/mojom/sandbox.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../mojo/public/mojom/base/values.mojom.js');
  }


  var MIRRORING_SANDBOX = sandbox$.Sandbox.kService;

  function MirroringService_Start_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MirroringService_Start_Params.prototype.initDefaults_ = function() {
    this.params = null;
    this.maxResolution = null;
    this.observer = new session_observer$.SessionObserverPtr();
    this.resourceProvider = new resource_provider$.ResourceProviderPtr();
    this.outboundChannel = new cast_message_channel$.CastMessageChannelPtr();
    this.inboundChannel = new bindings.InterfaceRequest();
  };
  MirroringService_Start_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MirroringService_Start_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringService_Start_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, session_parameters$.SessionParameters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringService_Start_Params.maxResolution
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringService_Start_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringService_Start_Params.resourceProvider
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringService_Start_Params.outboundChannel
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 32, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MirroringService_Start_Params.inboundChannel
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MirroringService_Start_Params.encodedSize = codec.kStructHeaderSize + 48;

  MirroringService_Start_Params.decode = function(decoder) {
    var packed;
    var val = new MirroringService_Start_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(session_parameters$.SessionParameters);
    val.maxResolution =
        decoder.decodeStructPointer(geometry$.Size);
    val.observer =
        decoder.decodeStruct(new codec.Interface(session_observer$.SessionObserverPtr));
    val.resourceProvider =
        decoder.decodeStruct(new codec.Interface(resource_provider$.ResourceProviderPtr));
    val.outboundChannel =
        decoder.decodeStruct(new codec.Interface(cast_message_channel$.CastMessageChannelPtr));
    val.inboundChannel =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MirroringService_Start_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MirroringService_Start_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(session_parameters$.SessionParameters, val.params);
    encoder.encodeStructPointer(geometry$.Size, val.maxResolution);
    encoder.encodeStruct(new codec.Interface(session_observer$.SessionObserverPtr), val.observer);
    encoder.encodeStruct(new codec.Interface(resource_provider$.ResourceProviderPtr), val.resourceProvider);
    encoder.encodeStruct(new codec.Interface(cast_message_channel$.CastMessageChannelPtr), val.outboundChannel);
    encoder.encodeStruct(codec.InterfaceRequest, val.inboundChannel);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MirroringService_SwitchMirroringSourceTab_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MirroringService_SwitchMirroringSourceTab_Params.prototype.initDefaults_ = function() {
  };
  MirroringService_SwitchMirroringSourceTab_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MirroringService_SwitchMirroringSourceTab_Params.validate = function(messageValidator, offset) {
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

  MirroringService_SwitchMirroringSourceTab_Params.encodedSize = codec.kStructHeaderSize + 0;

  MirroringService_SwitchMirroringSourceTab_Params.decode = function(decoder) {
    var packed;
    var val = new MirroringService_SwitchMirroringSourceTab_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MirroringService_SwitchMirroringSourceTab_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MirroringService_SwitchMirroringSourceTab_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MirroringService_GetMirroringStats_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MirroringService_GetMirroringStats_Params.prototype.initDefaults_ = function() {
  };
  MirroringService_GetMirroringStats_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MirroringService_GetMirroringStats_Params.validate = function(messageValidator, offset) {
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

  MirroringService_GetMirroringStats_Params.encodedSize = codec.kStructHeaderSize + 0;

  MirroringService_GetMirroringStats_Params.decode = function(decoder) {
    var packed;
    var val = new MirroringService_GetMirroringStats_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  MirroringService_GetMirroringStats_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MirroringService_GetMirroringStats_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function MirroringService_GetMirroringStats_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MirroringService_GetMirroringStats_ResponseParams.prototype.initDefaults_ = function() {
    this.jsonStats = null;
  };
  MirroringService_GetMirroringStats_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MirroringService_GetMirroringStats_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate MirroringService_GetMirroringStats_ResponseParams.jsonStats
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, values$.Value, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MirroringService_GetMirroringStats_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  MirroringService_GetMirroringStats_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new MirroringService_GetMirroringStats_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.jsonStats =
        decoder.decodeStruct(values$.Value);
    return val;
  };

  MirroringService_GetMirroringStats_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MirroringService_GetMirroringStats_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(values$.Value, val.jsonStats);
  };
  var kMirroringService_Start_Name = 1224892329;
  var kMirroringService_SwitchMirroringSourceTab_Name = 321775234;
  var kMirroringService_GetMirroringStats_Name = 2131899872;

  function MirroringServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(MirroringService,
                                                   handleOrPtrInfo);
  }

  function MirroringServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        MirroringService, associatedInterfacePtrInfo);
  }

  MirroringServiceAssociatedPtr.prototype =
      Object.create(MirroringServicePtr.prototype);
  MirroringServiceAssociatedPtr.prototype.constructor =
      MirroringServiceAssociatedPtr;

  function MirroringServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  MirroringServicePtr.prototype.start = function() {
    return MirroringServiceProxy.prototype.start
        .apply(this.ptr.getProxy(), arguments);
  };

  MirroringServiceProxy.prototype.start = function(params, maxResolution, observer, resourceProvider, outboundChannel, inboundChannel) {
    var params_ = new MirroringService_Start_Params();
    params_.params = params;
    params_.maxResolution = maxResolution;
    params_.observer = observer;
    params_.resourceProvider = resourceProvider;
    params_.outboundChannel = outboundChannel;
    params_.inboundChannel = inboundChannel;
    var builder = new codec.MessageV0Builder(
        kMirroringService_Start_Name,
        codec.align(MirroringService_Start_Params.encodedSize));
    builder.encodeStruct(MirroringService_Start_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MirroringServicePtr.prototype.switchMirroringSourceTab = function() {
    return MirroringServiceProxy.prototype.switchMirroringSourceTab
        .apply(this.ptr.getProxy(), arguments);
  };

  MirroringServiceProxy.prototype.switchMirroringSourceTab = function() {
    var params_ = new MirroringService_SwitchMirroringSourceTab_Params();
    var builder = new codec.MessageV0Builder(
        kMirroringService_SwitchMirroringSourceTab_Name,
        codec.align(MirroringService_SwitchMirroringSourceTab_Params.encodedSize));
    builder.encodeStruct(MirroringService_SwitchMirroringSourceTab_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  MirroringServicePtr.prototype.getMirroringStats = function() {
    return MirroringServiceProxy.prototype.getMirroringStats
        .apply(this.ptr.getProxy(), arguments);
  };

  MirroringServiceProxy.prototype.getMirroringStats = function() {
    var params_ = new MirroringService_GetMirroringStats_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kMirroringService_GetMirroringStats_Name,
          codec.align(MirroringService_GetMirroringStats_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(MirroringService_GetMirroringStats_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(MirroringService_GetMirroringStats_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function MirroringServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  MirroringServiceStub.prototype.start = function(params, maxResolution, observer, resourceProvider, outboundChannel, inboundChannel) {
    return this.delegate_ && this.delegate_.start && this.delegate_.start(params, maxResolution, observer, resourceProvider, outboundChannel, inboundChannel);
  }
  MirroringServiceStub.prototype.switchMirroringSourceTab = function() {
    return this.delegate_ && this.delegate_.switchMirroringSourceTab && this.delegate_.switchMirroringSourceTab();
  }
  MirroringServiceStub.prototype.getMirroringStats = function() {
    return this.delegate_ && this.delegate_.getMirroringStats && this.delegate_.getMirroringStats();
  }

  MirroringServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMirroringService_Start_Name:
      var params = reader.decodeStruct(MirroringService_Start_Params);
      this.start(params.params, params.maxResolution, params.observer, params.resourceProvider, params.outboundChannel, params.inboundChannel);
      return true;
    case kMirroringService_SwitchMirroringSourceTab_Name:
      var params = reader.decodeStruct(MirroringService_SwitchMirroringSourceTab_Params);
      this.switchMirroringSourceTab();
      return true;
    default:
      return false;
    }
  };

  MirroringServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kMirroringService_GetMirroringStats_Name:
      var params = reader.decodeStruct(MirroringService_GetMirroringStats_Params);
      this.getMirroringStats().then(function(response) {
        var responseParams =
            new MirroringService_GetMirroringStats_ResponseParams();
        responseParams.jsonStats = response.jsonStats;
        var builder = new codec.MessageV1Builder(
            kMirroringService_GetMirroringStats_Name,
            codec.align(MirroringService_GetMirroringStats_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(MirroringService_GetMirroringStats_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateMirroringServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kMirroringService_Start_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MirroringService_Start_Params;
      break;
      case kMirroringService_SwitchMirroringSourceTab_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = MirroringService_SwitchMirroringSourceTab_Params;
      break;
      case kMirroringService_GetMirroringStats_Name:
        if (message.expectsResponse())
          paramsClass = MirroringService_GetMirroringStats_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateMirroringServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kMirroringService_GetMirroringStats_Name:
        if (message.isResponse())
          paramsClass = MirroringService_GetMirroringStats_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var MirroringService = {
    name: 'mirroring.mojom.MirroringService',
    kVersion: 0,
    ptrClass: MirroringServicePtr,
    proxyClass: MirroringServiceProxy,
    stubClass: MirroringServiceStub,
    validateRequest: validateMirroringServiceRequest,
    validateResponse: validateMirroringServiceResponse,
  };
  MirroringServiceStub.prototype.validator = validateMirroringServiceRequest;
  MirroringServiceProxy.prototype.validator = validateMirroringServiceResponse;
  exports.MIRRORING_SANDBOX = MIRRORING_SANDBOX;
  exports.MirroringService = MirroringService;
  exports.MirroringServicePtr = MirroringServicePtr;
  exports.MirroringServiceAssociatedPtr = MirroringServiceAssociatedPtr;
})();