// components/services/language_detection/public/mojom/language_detection.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/services/language_detection/public/mojom/language_detection.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('languageDetection.mojom');
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../../../sandbox/policy/mojom/sandbox.mojom.js');
  }



  function LanguageDetectionService_DetermineLanguage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LanguageDetectionService_DetermineLanguage_Params.prototype.initDefaults_ = function() {
    this.text = null;
  };
  LanguageDetectionService_DetermineLanguage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LanguageDetectionService_DetermineLanguage_Params.validate = function(messageValidator, offset) {
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


    // validate LanguageDetectionService_DetermineLanguage_Params.text
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, string16$.BigString16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LanguageDetectionService_DetermineLanguage_Params.encodedSize = codec.kStructHeaderSize + 8;

  LanguageDetectionService_DetermineLanguage_Params.decode = function(decoder) {
    var packed;
    var val = new LanguageDetectionService_DetermineLanguage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.text =
        decoder.decodeStructPointer(string16$.BigString16);
    return val;
  };

  LanguageDetectionService_DetermineLanguage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LanguageDetectionService_DetermineLanguage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(string16$.BigString16, val.text);
  };
  function LanguageDetectionService_DetermineLanguage_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LanguageDetectionService_DetermineLanguage_ResponseParams.prototype.initDefaults_ = function() {
    this.language = null;
    this.isReliable = false;
  };
  LanguageDetectionService_DetermineLanguage_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LanguageDetectionService_DetermineLanguage_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate LanguageDetectionService_DetermineLanguage_ResponseParams.language
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  LanguageDetectionService_DetermineLanguage_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  LanguageDetectionService_DetermineLanguage_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new LanguageDetectionService_DetermineLanguage_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.language =
        decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.isReliable = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  LanguageDetectionService_DetermineLanguage_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LanguageDetectionService_DetermineLanguage_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.language);
    packed = 0;
    packed |= (val.isReliable & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kLanguageDetectionService_DetermineLanguage_Name = 2112591784;

  function LanguageDetectionServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(LanguageDetectionService,
                                                   handleOrPtrInfo);
  }

  function LanguageDetectionServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        LanguageDetectionService, associatedInterfacePtrInfo);
  }

  LanguageDetectionServiceAssociatedPtr.prototype =
      Object.create(LanguageDetectionServicePtr.prototype);
  LanguageDetectionServiceAssociatedPtr.prototype.constructor =
      LanguageDetectionServiceAssociatedPtr;

  function LanguageDetectionServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  LanguageDetectionServicePtr.prototype.determineLanguage = function() {
    return LanguageDetectionServiceProxy.prototype.determineLanguage
        .apply(this.ptr.getProxy(), arguments);
  };

  LanguageDetectionServiceProxy.prototype.determineLanguage = function(text) {
    var params_ = new LanguageDetectionService_DetermineLanguage_Params();
    params_.text = text;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kLanguageDetectionService_DetermineLanguage_Name,
          codec.align(LanguageDetectionService_DetermineLanguage_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(LanguageDetectionService_DetermineLanguage_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(LanguageDetectionService_DetermineLanguage_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function LanguageDetectionServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  LanguageDetectionServiceStub.prototype.determineLanguage = function(text) {
    return this.delegate_ && this.delegate_.determineLanguage && this.delegate_.determineLanguage(text);
  }

  LanguageDetectionServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  LanguageDetectionServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLanguageDetectionService_DetermineLanguage_Name:
      var params = reader.decodeStruct(LanguageDetectionService_DetermineLanguage_Params);
      this.determineLanguage(params.text).then(function(response) {
        var responseParams =
            new LanguageDetectionService_DetermineLanguage_ResponseParams();
        responseParams.language = response.language;
        responseParams.isReliable = response.isReliable;
        var builder = new codec.MessageV1Builder(
            kLanguageDetectionService_DetermineLanguage_Name,
            codec.align(LanguageDetectionService_DetermineLanguage_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(LanguageDetectionService_DetermineLanguage_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateLanguageDetectionServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLanguageDetectionService_DetermineLanguage_Name:
        if (message.expectsResponse())
          paramsClass = LanguageDetectionService_DetermineLanguage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLanguageDetectionServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kLanguageDetectionService_DetermineLanguage_Name:
        if (message.isResponse())
          paramsClass = LanguageDetectionService_DetermineLanguage_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var LanguageDetectionService = {
    name: 'language_detection.mojom.LanguageDetectionService',
    kVersion: 0,
    ptrClass: LanguageDetectionServicePtr,
    proxyClass: LanguageDetectionServiceProxy,
    stubClass: LanguageDetectionServiceStub,
    validateRequest: validateLanguageDetectionServiceRequest,
    validateResponse: validateLanguageDetectionServiceResponse,
  };
  LanguageDetectionServiceStub.prototype.validator = validateLanguageDetectionServiceRequest;
  LanguageDetectionServiceProxy.prototype.validator = validateLanguageDetectionServiceResponse;
  exports.LanguageDetectionService = LanguageDetectionService;
  exports.LanguageDetectionServicePtr = LanguageDetectionServicePtr;
  exports.LanguageDetectionServiceAssociatedPtr = LanguageDetectionServiceAssociatedPtr;
})();