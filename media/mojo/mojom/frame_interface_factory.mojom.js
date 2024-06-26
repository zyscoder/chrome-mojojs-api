// media/mojo/mojom/frame_interface_factory.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/frame_interface_factory.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var cdm_storage$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/cdm_storage.mojom', 'cdm_storage.mojom.js');
  }
  var provision_fetcher$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/provision_fetcher.mojom', 'provision_fetcher.mojom.js');
  }
  var generic_pending_receiver$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/generic_pending_receiver.mojom', '../../../mojo/public/mojom/base/generic_pending_receiver.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../url/mojom/origin.mojom.js');
  }



  function FrameInterfaceFactory_CreateProvisionFetcher_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameInterfaceFactory_CreateProvisionFetcher_Params.prototype.initDefaults_ = function() {
    this.provisionFetcher = new bindings.InterfaceRequest();
  };
  FrameInterfaceFactory_CreateProvisionFetcher_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameInterfaceFactory_CreateProvisionFetcher_Params.validate = function(messageValidator, offset) {
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


    // validate FrameInterfaceFactory_CreateProvisionFetcher_Params.provisionFetcher
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FrameInterfaceFactory_CreateProvisionFetcher_Params.encodedSize = codec.kStructHeaderSize + 8;

  FrameInterfaceFactory_CreateProvisionFetcher_Params.decode = function(decoder) {
    var packed;
    var val = new FrameInterfaceFactory_CreateProvisionFetcher_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.provisionFetcher =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FrameInterfaceFactory_CreateProvisionFetcher_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameInterfaceFactory_CreateProvisionFetcher_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.provisionFetcher);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FrameInterfaceFactory_CreateCdmStorage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameInterfaceFactory_CreateCdmStorage_Params.prototype.initDefaults_ = function() {
    this.cdmStorage = new bindings.InterfaceRequest();
  };
  FrameInterfaceFactory_CreateCdmStorage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameInterfaceFactory_CreateCdmStorage_Params.validate = function(messageValidator, offset) {
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


    // validate FrameInterfaceFactory_CreateCdmStorage_Params.cdmStorage
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FrameInterfaceFactory_CreateCdmStorage_Params.encodedSize = codec.kStructHeaderSize + 8;

  FrameInterfaceFactory_CreateCdmStorage_Params.decode = function(decoder) {
    var packed;
    var val = new FrameInterfaceFactory_CreateCdmStorage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cdmStorage =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FrameInterfaceFactory_CreateCdmStorage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameInterfaceFactory_CreateCdmStorage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.cdmStorage);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FrameInterfaceFactory_GetCdmOrigin_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameInterfaceFactory_GetCdmOrigin_Params.prototype.initDefaults_ = function() {
  };
  FrameInterfaceFactory_GetCdmOrigin_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameInterfaceFactory_GetCdmOrigin_Params.validate = function(messageValidator, offset) {
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

  FrameInterfaceFactory_GetCdmOrigin_Params.encodedSize = codec.kStructHeaderSize + 0;

  FrameInterfaceFactory_GetCdmOrigin_Params.decode = function(decoder) {
    var packed;
    var val = new FrameInterfaceFactory_GetCdmOrigin_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FrameInterfaceFactory_GetCdmOrigin_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameInterfaceFactory_GetCdmOrigin_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FrameInterfaceFactory_GetCdmOrigin_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameInterfaceFactory_GetCdmOrigin_ResponseParams.prototype.initDefaults_ = function() {
    this.cdmOrigin = null;
  };
  FrameInterfaceFactory_GetCdmOrigin_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameInterfaceFactory_GetCdmOrigin_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FrameInterfaceFactory_GetCdmOrigin_ResponseParams.cdmOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FrameInterfaceFactory_GetCdmOrigin_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FrameInterfaceFactory_GetCdmOrigin_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FrameInterfaceFactory_GetCdmOrigin_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cdmOrigin =
        decoder.decodeStructPointer(origin$.Origin);
    return val;
  };

  FrameInterfaceFactory_GetCdmOrigin_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameInterfaceFactory_GetCdmOrigin_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.cdmOrigin);
  };
  function FrameInterfaceFactory_BindEmbedderReceiver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameInterfaceFactory_BindEmbedderReceiver_Params.prototype.initDefaults_ = function() {
    this.receiver = null;
  };
  FrameInterfaceFactory_BindEmbedderReceiver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameInterfaceFactory_BindEmbedderReceiver_Params.validate = function(messageValidator, offset) {
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


    // validate FrameInterfaceFactory_BindEmbedderReceiver_Params.receiver
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, generic_pending_receiver$.GenericPendingReceiver, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FrameInterfaceFactory_BindEmbedderReceiver_Params.encodedSize = codec.kStructHeaderSize + 8;

  FrameInterfaceFactory_BindEmbedderReceiver_Params.decode = function(decoder) {
    var packed;
    var val = new FrameInterfaceFactory_BindEmbedderReceiver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStructPointer(generic_pending_receiver$.GenericPendingReceiver);
    return val;
  };

  FrameInterfaceFactory_BindEmbedderReceiver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameInterfaceFactory_BindEmbedderReceiver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(generic_pending_receiver$.GenericPendingReceiver, val.receiver);
  };
  var kFrameInterfaceFactory_CreateProvisionFetcher_Name = 984915028;
  var kFrameInterfaceFactory_CreateCdmStorage_Name = 1306626220;
  var kFrameInterfaceFactory_GetCdmOrigin_Name = 1162308291;
  var kFrameInterfaceFactory_BindEmbedderReceiver_Name = 2107698405;

  function FrameInterfaceFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FrameInterfaceFactory,
                                                   handleOrPtrInfo);
  }

  function FrameInterfaceFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FrameInterfaceFactory, associatedInterfacePtrInfo);
  }

  FrameInterfaceFactoryAssociatedPtr.prototype =
      Object.create(FrameInterfaceFactoryPtr.prototype);
  FrameInterfaceFactoryAssociatedPtr.prototype.constructor =
      FrameInterfaceFactoryAssociatedPtr;

  function FrameInterfaceFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  FrameInterfaceFactoryPtr.prototype.createProvisionFetcher = function() {
    return FrameInterfaceFactoryProxy.prototype.createProvisionFetcher
        .apply(this.ptr.getProxy(), arguments);
  };

  FrameInterfaceFactoryProxy.prototype.createProvisionFetcher = function(provisionFetcher) {
    var params_ = new FrameInterfaceFactory_CreateProvisionFetcher_Params();
    params_.provisionFetcher = provisionFetcher;
    var builder = new codec.MessageV0Builder(
        kFrameInterfaceFactory_CreateProvisionFetcher_Name,
        codec.align(FrameInterfaceFactory_CreateProvisionFetcher_Params.encodedSize));
    builder.encodeStruct(FrameInterfaceFactory_CreateProvisionFetcher_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FrameInterfaceFactoryPtr.prototype.createCdmStorage = function() {
    return FrameInterfaceFactoryProxy.prototype.createCdmStorage
        .apply(this.ptr.getProxy(), arguments);
  };

  FrameInterfaceFactoryProxy.prototype.createCdmStorage = function(cdmStorage) {
    var params_ = new FrameInterfaceFactory_CreateCdmStorage_Params();
    params_.cdmStorage = cdmStorage;
    var builder = new codec.MessageV0Builder(
        kFrameInterfaceFactory_CreateCdmStorage_Name,
        codec.align(FrameInterfaceFactory_CreateCdmStorage_Params.encodedSize));
    builder.encodeStruct(FrameInterfaceFactory_CreateCdmStorage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FrameInterfaceFactoryPtr.prototype.getCdmOrigin = function() {
    return FrameInterfaceFactoryProxy.prototype.getCdmOrigin
        .apply(this.ptr.getProxy(), arguments);
  };

  FrameInterfaceFactoryProxy.prototype.getCdmOrigin = function() {
    var params_ = new FrameInterfaceFactory_GetCdmOrigin_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFrameInterfaceFactory_GetCdmOrigin_Name,
          codec.align(FrameInterfaceFactory_GetCdmOrigin_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FrameInterfaceFactory_GetCdmOrigin_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FrameInterfaceFactory_GetCdmOrigin_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FrameInterfaceFactoryPtr.prototype.bindEmbedderReceiver = function() {
    return FrameInterfaceFactoryProxy.prototype.bindEmbedderReceiver
        .apply(this.ptr.getProxy(), arguments);
  };

  FrameInterfaceFactoryProxy.prototype.bindEmbedderReceiver = function(receiver) {
    var params_ = new FrameInterfaceFactory_BindEmbedderReceiver_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kFrameInterfaceFactory_BindEmbedderReceiver_Name,
        codec.align(FrameInterfaceFactory_BindEmbedderReceiver_Params.encodedSize));
    builder.encodeStruct(FrameInterfaceFactory_BindEmbedderReceiver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function FrameInterfaceFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  FrameInterfaceFactoryStub.prototype.createProvisionFetcher = function(provisionFetcher) {
    return this.delegate_ && this.delegate_.createProvisionFetcher && this.delegate_.createProvisionFetcher(provisionFetcher);
  }
  FrameInterfaceFactoryStub.prototype.createCdmStorage = function(cdmStorage) {
    return this.delegate_ && this.delegate_.createCdmStorage && this.delegate_.createCdmStorage(cdmStorage);
  }
  FrameInterfaceFactoryStub.prototype.getCdmOrigin = function() {
    return this.delegate_ && this.delegate_.getCdmOrigin && this.delegate_.getCdmOrigin();
  }
  FrameInterfaceFactoryStub.prototype.bindEmbedderReceiver = function(receiver) {
    return this.delegate_ && this.delegate_.bindEmbedderReceiver && this.delegate_.bindEmbedderReceiver(receiver);
  }

  FrameInterfaceFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFrameInterfaceFactory_CreateProvisionFetcher_Name:
      var params = reader.decodeStruct(FrameInterfaceFactory_CreateProvisionFetcher_Params);
      this.createProvisionFetcher(params.provisionFetcher);
      return true;
    case kFrameInterfaceFactory_CreateCdmStorage_Name:
      var params = reader.decodeStruct(FrameInterfaceFactory_CreateCdmStorage_Params);
      this.createCdmStorage(params.cdmStorage);
      return true;
    case kFrameInterfaceFactory_BindEmbedderReceiver_Name:
      var params = reader.decodeStruct(FrameInterfaceFactory_BindEmbedderReceiver_Params);
      this.bindEmbedderReceiver(params.receiver);
      return true;
    default:
      return false;
    }
  };

  FrameInterfaceFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFrameInterfaceFactory_GetCdmOrigin_Name:
      var params = reader.decodeStruct(FrameInterfaceFactory_GetCdmOrigin_Params);
      this.getCdmOrigin().then(function(response) {
        var responseParams =
            new FrameInterfaceFactory_GetCdmOrigin_ResponseParams();
        responseParams.cdmOrigin = response.cdmOrigin;
        var builder = new codec.MessageV1Builder(
            kFrameInterfaceFactory_GetCdmOrigin_Name,
            codec.align(FrameInterfaceFactory_GetCdmOrigin_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FrameInterfaceFactory_GetCdmOrigin_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFrameInterfaceFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFrameInterfaceFactory_CreateProvisionFetcher_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FrameInterfaceFactory_CreateProvisionFetcher_Params;
      break;
      case kFrameInterfaceFactory_CreateCdmStorage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FrameInterfaceFactory_CreateCdmStorage_Params;
      break;
      case kFrameInterfaceFactory_GetCdmOrigin_Name:
        if (message.expectsResponse())
          paramsClass = FrameInterfaceFactory_GetCdmOrigin_Params;
      break;
      case kFrameInterfaceFactory_BindEmbedderReceiver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FrameInterfaceFactory_BindEmbedderReceiver_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFrameInterfaceFactoryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFrameInterfaceFactory_GetCdmOrigin_Name:
        if (message.isResponse())
          paramsClass = FrameInterfaceFactory_GetCdmOrigin_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FrameInterfaceFactory = {
    name: 'media.mojom.FrameInterfaceFactory',
    kVersion: 0,
    ptrClass: FrameInterfaceFactoryPtr,
    proxyClass: FrameInterfaceFactoryProxy,
    stubClass: FrameInterfaceFactoryStub,
    validateRequest: validateFrameInterfaceFactoryRequest,
    validateResponse: validateFrameInterfaceFactoryResponse,
  };
  FrameInterfaceFactoryStub.prototype.validator = validateFrameInterfaceFactoryRequest;
  FrameInterfaceFactoryProxy.prototype.validator = validateFrameInterfaceFactoryResponse;
  exports.FrameInterfaceFactory = FrameInterfaceFactory;
  exports.FrameInterfaceFactoryPtr = FrameInterfaceFactoryPtr;
  exports.FrameInterfaceFactoryAssociatedPtr = FrameInterfaceFactoryAssociatedPtr;
})();