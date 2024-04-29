// third_party/blink/public/mojom/smart_card/smart_card.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/smart_card/smart_card.mojom';
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
  var smart_card$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/smart_card.mojom', '../../../../../services/device/public/mojom/smart_card.mojom.js');
  }



  function SmartCardService_CreateContext_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmartCardService_CreateContext_Params.prototype.initDefaults_ = function() {
  };
  SmartCardService_CreateContext_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmartCardService_CreateContext_Params.validate = function(messageValidator, offset) {
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

  SmartCardService_CreateContext_Params.encodedSize = codec.kStructHeaderSize + 0;

  SmartCardService_CreateContext_Params.decode = function(decoder) {
    var packed;
    var val = new SmartCardService_CreateContext_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SmartCardService_CreateContext_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmartCardService_CreateContext_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function SmartCardService_CreateContext_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SmartCardService_CreateContext_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  SmartCardService_CreateContext_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SmartCardService_CreateContext_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SmartCardService_CreateContext_ResponseParams.result
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, smart_card$.SmartCardCreateContextResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SmartCardService_CreateContext_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  SmartCardService_CreateContext_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SmartCardService_CreateContext_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(smart_card$.SmartCardCreateContextResult);
    return val;
  };

  SmartCardService_CreateContext_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SmartCardService_CreateContext_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(smart_card$.SmartCardCreateContextResult, val.result);
  };
  var kSmartCardService_CreateContext_Name = 0;

  function SmartCardServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SmartCardService,
                                                   handleOrPtrInfo);
  }

  function SmartCardServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SmartCardService, associatedInterfacePtrInfo);
  }

  SmartCardServiceAssociatedPtr.prototype =
      Object.create(SmartCardServicePtr.prototype);
  SmartCardServiceAssociatedPtr.prototype.constructor =
      SmartCardServiceAssociatedPtr;

  function SmartCardServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  SmartCardServicePtr.prototype.createContext = function() {
    return SmartCardServiceProxy.prototype.createContext
        .apply(this.ptr.getProxy(), arguments);
  };

  SmartCardServiceProxy.prototype.createContext = function() {
    var params_ = new SmartCardService_CreateContext_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSmartCardService_CreateContext_Name,
          codec.align(SmartCardService_CreateContext_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SmartCardService_CreateContext_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SmartCardService_CreateContext_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SmartCardServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  SmartCardServiceStub.prototype.createContext = function() {
    return this.delegate_ && this.delegate_.createContext && this.delegate_.createContext();
  }

  SmartCardServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  SmartCardServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSmartCardService_CreateContext_Name:
      var params = reader.decodeStruct(SmartCardService_CreateContext_Params);
      this.createContext().then(function(response) {
        var responseParams =
            new SmartCardService_CreateContext_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kSmartCardService_CreateContext_Name,
            codec.align(SmartCardService_CreateContext_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SmartCardService_CreateContext_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSmartCardServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSmartCardService_CreateContext_Name:
        if (message.expectsResponse())
          paramsClass = SmartCardService_CreateContext_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSmartCardServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSmartCardService_CreateContext_Name:
        if (message.isResponse())
          paramsClass = SmartCardService_CreateContext_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SmartCardService = {
    name: 'blink.mojom.SmartCardService',
    kVersion: 0,
    ptrClass: SmartCardServicePtr,
    proxyClass: SmartCardServiceProxy,
    stubClass: SmartCardServiceStub,
    validateRequest: validateSmartCardServiceRequest,
    validateResponse: validateSmartCardServiceResponse,
  };
  SmartCardServiceStub.prototype.validator = validateSmartCardServiceRequest;
  SmartCardServiceProxy.prototype.validator = validateSmartCardServiceResponse;
  exports.SmartCardService = SmartCardService;
  exports.SmartCardServicePtr = SmartCardServicePtr;
  exports.SmartCardServiceAssociatedPtr = SmartCardServiceAssociatedPtr;
})();