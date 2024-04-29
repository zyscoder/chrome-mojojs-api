// third_party/blink/public/mojom/gpu/gpu.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/gpu/gpu.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function GpuDataManager_Are3DAPIsBlockedForUrl_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuDataManager_Are3DAPIsBlockedForUrl_Params.prototype.initDefaults_ = function() {
    this.url = null;
  };
  GpuDataManager_Are3DAPIsBlockedForUrl_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuDataManager_Are3DAPIsBlockedForUrl_Params.validate = function(messageValidator, offset) {
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


    // validate GpuDataManager_Are3DAPIsBlockedForUrl_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuDataManager_Are3DAPIsBlockedForUrl_Params.encodedSize = codec.kStructHeaderSize + 8;

  GpuDataManager_Are3DAPIsBlockedForUrl_Params.decode = function(decoder) {
    var packed;
    var val = new GpuDataManager_Are3DAPIsBlockedForUrl_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  GpuDataManager_Are3DAPIsBlockedForUrl_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuDataManager_Are3DAPIsBlockedForUrl_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
  };
  function GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams.prototype.initDefaults_ = function() {
    this.blocked = false;
  };
  GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.blocked = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.blocked & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kGpuDataManager_Are3DAPIsBlockedForUrl_Name = 378698738;

  function GpuDataManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(GpuDataManager,
                                                   handleOrPtrInfo);
  }

  function GpuDataManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        GpuDataManager, associatedInterfacePtrInfo);
  }

  GpuDataManagerAssociatedPtr.prototype =
      Object.create(GpuDataManagerPtr.prototype);
  GpuDataManagerAssociatedPtr.prototype.constructor =
      GpuDataManagerAssociatedPtr;

  function GpuDataManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  GpuDataManagerPtr.prototype.are3DAPIsBlockedForUrl = function() {
    return GpuDataManagerProxy.prototype.are3DAPIsBlockedForUrl
        .apply(this.ptr.getProxy(), arguments);
  };

  GpuDataManagerProxy.prototype.are3DAPIsBlockedForUrl = function(url) {
    var params_ = new GpuDataManager_Are3DAPIsBlockedForUrl_Params();
    params_.url = url;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGpuDataManager_Are3DAPIsBlockedForUrl_Name,
          codec.align(GpuDataManager_Are3DAPIsBlockedForUrl_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(GpuDataManager_Are3DAPIsBlockedForUrl_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function GpuDataManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  GpuDataManagerStub.prototype.are3DAPIsBlockedForUrl = function(url) {
    return this.delegate_ && this.delegate_.are3DAPIsBlockedForUrl && this.delegate_.are3DAPIsBlockedForUrl(url);
  }

  GpuDataManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  GpuDataManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGpuDataManager_Are3DAPIsBlockedForUrl_Name:
      var params = reader.decodeStruct(GpuDataManager_Are3DAPIsBlockedForUrl_Params);
      this.are3DAPIsBlockedForUrl(params.url).then(function(response) {
        var responseParams =
            new GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams();
        responseParams.blocked = response.blocked;
        var builder = new codec.MessageV1Builder(
            kGpuDataManager_Are3DAPIsBlockedForUrl_Name,
            codec.align(GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateGpuDataManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kGpuDataManager_Are3DAPIsBlockedForUrl_Name:
        if (message.expectsResponse())
          paramsClass = GpuDataManager_Are3DAPIsBlockedForUrl_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateGpuDataManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kGpuDataManager_Are3DAPIsBlockedForUrl_Name:
        if (message.isResponse())
          paramsClass = GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var GpuDataManager = {
    name: 'blink.mojom.GpuDataManager',
    kVersion: 0,
    ptrClass: GpuDataManagerPtr,
    proxyClass: GpuDataManagerProxy,
    stubClass: GpuDataManagerStub,
    validateRequest: validateGpuDataManagerRequest,
    validateResponse: validateGpuDataManagerResponse,
  };
  GpuDataManagerStub.prototype.validator = validateGpuDataManagerRequest;
  GpuDataManagerProxy.prototype.validator = validateGpuDataManagerResponse;
  exports.GpuDataManager = GpuDataManager;
  exports.GpuDataManagerPtr = GpuDataManagerPtr;
  exports.GpuDataManagerAssociatedPtr = GpuDataManagerAssociatedPtr;
})();