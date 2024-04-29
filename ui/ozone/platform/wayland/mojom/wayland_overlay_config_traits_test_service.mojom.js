// ui/ozone/platform/wayland/mojom/wayland_overlay_config_traits_test_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/ozone/platform/wayland/mojom/wayland_overlay_config_traits_test_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('wl.mojom');
  var wayland_overlay_config$ =
      mojo.internal.exposeNamespace('wl.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/ozone/platform/wayland/mojom/wayland_overlay_config.mojom', 'wayland_overlay_config.mojom.js');
  }



  function ConfigTraitsTestService_EchoTransform_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConfigTraitsTestService_EchoTransform_Params.prototype.initDefaults_ = function() {
    this.t = null;
  };
  ConfigTraitsTestService_EchoTransform_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConfigTraitsTestService_EchoTransform_Params.validate = function(messageValidator, offset) {
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


    // validate ConfigTraitsTestService_EchoTransform_Params.t
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, wayland_overlay_config$.TransformUnion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConfigTraitsTestService_EchoTransform_Params.encodedSize = codec.kStructHeaderSize + 16;

  ConfigTraitsTestService_EchoTransform_Params.decode = function(decoder) {
    var packed;
    var val = new ConfigTraitsTestService_EchoTransform_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.t =
        decoder.decodeStruct(wayland_overlay_config$.TransformUnion);
    return val;
  };

  ConfigTraitsTestService_EchoTransform_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConfigTraitsTestService_EchoTransform_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(wayland_overlay_config$.TransformUnion, val.t);
  };
  function ConfigTraitsTestService_EchoTransform_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConfigTraitsTestService_EchoTransform_ResponseParams.prototype.initDefaults_ = function() {
    this.pass = null;
  };
  ConfigTraitsTestService_EchoTransform_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConfigTraitsTestService_EchoTransform_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ConfigTraitsTestService_EchoTransform_ResponseParams.pass
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, wayland_overlay_config$.TransformUnion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConfigTraitsTestService_EchoTransform_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  ConfigTraitsTestService_EchoTransform_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ConfigTraitsTestService_EchoTransform_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pass =
        decoder.decodeStruct(wayland_overlay_config$.TransformUnion);
    return val;
  };

  ConfigTraitsTestService_EchoTransform_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConfigTraitsTestService_EchoTransform_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(wayland_overlay_config$.TransformUnion, val.pass);
  };
  var kConfigTraitsTestService_EchoTransform_Name = 1530739096;

  function ConfigTraitsTestServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ConfigTraitsTestService,
                                                   handleOrPtrInfo);
  }

  function ConfigTraitsTestServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ConfigTraitsTestService, associatedInterfacePtrInfo);
  }

  ConfigTraitsTestServiceAssociatedPtr.prototype =
      Object.create(ConfigTraitsTestServicePtr.prototype);
  ConfigTraitsTestServiceAssociatedPtr.prototype.constructor =
      ConfigTraitsTestServiceAssociatedPtr;

  function ConfigTraitsTestServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  ConfigTraitsTestServicePtr.prototype.echoTransform = function() {
    return ConfigTraitsTestServiceProxy.prototype.echoTransform
        .apply(this.ptr.getProxy(), arguments);
  };

  ConfigTraitsTestServiceProxy.prototype.echoTransform = function(t) {
    var params_ = new ConfigTraitsTestService_EchoTransform_Params();
    params_.t = t;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kConfigTraitsTestService_EchoTransform_Name,
          codec.align(ConfigTraitsTestService_EchoTransform_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ConfigTraitsTestService_EchoTransform_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ConfigTraitsTestService_EchoTransform_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ConfigTraitsTestServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  ConfigTraitsTestServiceStub.prototype.echoTransform = function(t) {
    return this.delegate_ && this.delegate_.echoTransform && this.delegate_.echoTransform(t);
  }

  ConfigTraitsTestServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ConfigTraitsTestServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kConfigTraitsTestService_EchoTransform_Name:
      var params = reader.decodeStruct(ConfigTraitsTestService_EchoTransform_Params);
      this.echoTransform(params.t).then(function(response) {
        var responseParams =
            new ConfigTraitsTestService_EchoTransform_ResponseParams();
        responseParams.pass = response.pass;
        var builder = new codec.MessageV1Builder(
            kConfigTraitsTestService_EchoTransform_Name,
            codec.align(ConfigTraitsTestService_EchoTransform_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ConfigTraitsTestService_EchoTransform_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateConfigTraitsTestServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kConfigTraitsTestService_EchoTransform_Name:
        if (message.expectsResponse())
          paramsClass = ConfigTraitsTestService_EchoTransform_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateConfigTraitsTestServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kConfigTraitsTestService_EchoTransform_Name:
        if (message.isResponse())
          paramsClass = ConfigTraitsTestService_EchoTransform_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ConfigTraitsTestService = {
    name: 'wl.mojom.ConfigTraitsTestService',
    kVersion: 0,
    ptrClass: ConfigTraitsTestServicePtr,
    proxyClass: ConfigTraitsTestServiceProxy,
    stubClass: ConfigTraitsTestServiceStub,
    validateRequest: validateConfigTraitsTestServiceRequest,
    validateResponse: validateConfigTraitsTestServiceResponse,
  };
  ConfigTraitsTestServiceStub.prototype.validator = validateConfigTraitsTestServiceRequest;
  ConfigTraitsTestServiceProxy.prototype.validator = validateConfigTraitsTestServiceResponse;
  exports.ConfigTraitsTestService = ConfigTraitsTestService;
  exports.ConfigTraitsTestServicePtr = ConfigTraitsTestServicePtr;
  exports.ConfigTraitsTestServiceAssociatedPtr = ConfigTraitsTestServiceAssociatedPtr;
})();