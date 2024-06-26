// chrome/common/companion/visual_search.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/common/companion/visual_search.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('companion.visualSearch.mojom');
  var read_only_file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/read_only_file.mojom', '../../../mojo/public/mojom/base/read_only_file.mojom.js');
  }
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/bitmap.mojom', '../../../skia/public/mojom/bitmap.mojom.js');
  }



  function ClassificationStats(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ClassificationStats.prototype.initDefaults_ = function() {
    this.eligibleCount = 0;
    this.sensitiveCount = 0;
    this.shoppyCount = 0;
    this.shoppyNonsensitiveCount = 0;
    this.resultsCount = 0;
  };
  ClassificationStats.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ClassificationStats.validate = function(messageValidator, offset) {
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






    return validator.validationError.NONE;
  };

  ClassificationStats.encodedSize = codec.kStructHeaderSize + 24;

  ClassificationStats.decode = function(decoder) {
    var packed;
    var val = new ClassificationStats();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.eligibleCount =
        decoder.decodeStruct(codec.Uint32);
    val.sensitiveCount =
        decoder.decodeStruct(codec.Uint32);
    val.shoppyCount =
        decoder.decodeStruct(codec.Uint32);
    val.shoppyNonsensitiveCount =
        decoder.decodeStruct(codec.Uint32);
    val.resultsCount =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ClassificationStats.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ClassificationStats.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.eligibleCount);
    encoder.encodeStruct(codec.Uint32, val.sensitiveCount);
    encoder.encodeStruct(codec.Uint32, val.shoppyCount);
    encoder.encodeStruct(codec.Uint32, val.shoppyNonsensitiveCount);
    encoder.encodeStruct(codec.Uint32, val.resultsCount);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VisualSearchSuggestion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VisualSearchSuggestion.prototype.initDefaults_ = function() {
    this.image = null;
    this.altText = null;
  };
  VisualSearchSuggestion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VisualSearchSuggestion.validate = function(messageValidator, offset) {
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


    // validate VisualSearchSuggestion.image
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, bitmap$.BitmapN32, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualSearchSuggestion.altText
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VisualSearchSuggestion.encodedSize = codec.kStructHeaderSize + 16;

  VisualSearchSuggestion.decode = function(decoder) {
    var packed;
    var val = new VisualSearchSuggestion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.image =
        decoder.decodeStructPointer(bitmap$.BitmapN32);
    val.altText =
        decoder.decodeStruct(codec.String);
    return val;
  };

  VisualSearchSuggestion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VisualSearchSuggestion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(bitmap$.BitmapN32, val.image);
    encoder.encodeStruct(codec.String, val.altText);
  };
  function VisualSuggestionsResultHandler_HandleClassification_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VisualSuggestionsResultHandler_HandleClassification_Params.prototype.initDefaults_ = function() {
    this.results = null;
    this.stats = null;
  };
  VisualSuggestionsResultHandler_HandleClassification_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VisualSuggestionsResultHandler_HandleClassification_Params.validate = function(messageValidator, offset) {
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


    // validate VisualSuggestionsResultHandler_HandleClassification_Params.results
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(VisualSearchSuggestion), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualSuggestionsResultHandler_HandleClassification_Params.stats
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, ClassificationStats, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VisualSuggestionsResultHandler_HandleClassification_Params.encodedSize = codec.kStructHeaderSize + 16;

  VisualSuggestionsResultHandler_HandleClassification_Params.decode = function(decoder) {
    var packed;
    var val = new VisualSuggestionsResultHandler_HandleClassification_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.results =
        decoder.decodeArrayPointer(new codec.PointerTo(VisualSearchSuggestion));
    val.stats =
        decoder.decodeStructPointer(ClassificationStats);
    return val;
  };

  VisualSuggestionsResultHandler_HandleClassification_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VisualSuggestionsResultHandler_HandleClassification_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(VisualSearchSuggestion), val.results);
    encoder.encodeStructPointer(ClassificationStats, val.stats);
  };
  function VisualSuggestionsRequestHandler_StartVisualClassification_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VisualSuggestionsRequestHandler_StartVisualClassification_Params.prototype.initDefaults_ = function() {
    this.visualModelFile = null;
    this.configProto = null;
    this.resultHandler = new VisualSuggestionsResultHandlerPtr();
  };
  VisualSuggestionsRequestHandler_StartVisualClassification_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VisualSuggestionsRequestHandler_StartVisualClassification_Params.validate = function(messageValidator, offset) {
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


    // validate VisualSuggestionsRequestHandler_StartVisualClassification_Params.visualModelFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, read_only_file$.ReadOnlyFile, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualSuggestionsRequestHandler_StartVisualClassification_Params.configProto
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualSuggestionsRequestHandler_StartVisualClassification_Params.resultHandler
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VisualSuggestionsRequestHandler_StartVisualClassification_Params.encodedSize = codec.kStructHeaderSize + 24;

  VisualSuggestionsRequestHandler_StartVisualClassification_Params.decode = function(decoder) {
    var packed;
    var val = new VisualSuggestionsRequestHandler_StartVisualClassification_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.visualModelFile =
        decoder.decodeStructPointer(read_only_file$.ReadOnlyFile);
    val.configProto =
        decoder.decodeStruct(codec.String);
    val.resultHandler =
        decoder.decodeStruct(new codec.Interface(VisualSuggestionsResultHandlerPtr));
    return val;
  };

  VisualSuggestionsRequestHandler_StartVisualClassification_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VisualSuggestionsRequestHandler_StartVisualClassification_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(read_only_file$.ReadOnlyFile, val.visualModelFile);
    encoder.encodeStruct(codec.String, val.configProto);
    encoder.encodeStruct(new codec.Interface(VisualSuggestionsResultHandlerPtr), val.resultHandler);
  };
  function VisualSuggestionsModelProvider_GetModelWithMetadata_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VisualSuggestionsModelProvider_GetModelWithMetadata_Params.prototype.initDefaults_ = function() {
  };
  VisualSuggestionsModelProvider_GetModelWithMetadata_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VisualSuggestionsModelProvider_GetModelWithMetadata_Params.validate = function(messageValidator, offset) {
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

  VisualSuggestionsModelProvider_GetModelWithMetadata_Params.encodedSize = codec.kStructHeaderSize + 0;

  VisualSuggestionsModelProvider_GetModelWithMetadata_Params.decode = function(decoder) {
    var packed;
    var val = new VisualSuggestionsModelProvider_GetModelWithMetadata_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VisualSuggestionsModelProvider_GetModelWithMetadata_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VisualSuggestionsModelProvider_GetModelWithMetadata_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.prototype.initDefaults_ = function() {
    this.visualModelFile = null;
    this.configProto = null;
  };
  VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.visualModelFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, read_only_file$.ReadOnlyFile, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.configProto
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.visualModelFile =
        decoder.decodeStructPointer(read_only_file$.ReadOnlyFile);
    val.configProto =
        decoder.decodeStruct(codec.String);
    return val;
  };

  VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(read_only_file$.ReadOnlyFile, val.visualModelFile);
    encoder.encodeStruct(codec.String, val.configProto);
  };
  var kVisualSuggestionsResultHandler_HandleClassification_Name = 1496918639;

  function VisualSuggestionsResultHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VisualSuggestionsResultHandler,
                                                   handleOrPtrInfo);
  }

  function VisualSuggestionsResultHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VisualSuggestionsResultHandler, associatedInterfacePtrInfo);
  }

  VisualSuggestionsResultHandlerAssociatedPtr.prototype =
      Object.create(VisualSuggestionsResultHandlerPtr.prototype);
  VisualSuggestionsResultHandlerAssociatedPtr.prototype.constructor =
      VisualSuggestionsResultHandlerAssociatedPtr;

  function VisualSuggestionsResultHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  VisualSuggestionsResultHandlerPtr.prototype.handleClassification = function() {
    return VisualSuggestionsResultHandlerProxy.prototype.handleClassification
        .apply(this.ptr.getProxy(), arguments);
  };

  VisualSuggestionsResultHandlerProxy.prototype.handleClassification = function(results, stats) {
    var params_ = new VisualSuggestionsResultHandler_HandleClassification_Params();
    params_.results = results;
    params_.stats = stats;
    var builder = new codec.MessageV0Builder(
        kVisualSuggestionsResultHandler_HandleClassification_Name,
        codec.align(VisualSuggestionsResultHandler_HandleClassification_Params.encodedSize));
    builder.encodeStruct(VisualSuggestionsResultHandler_HandleClassification_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VisualSuggestionsResultHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  VisualSuggestionsResultHandlerStub.prototype.handleClassification = function(results, stats) {
    return this.delegate_ && this.delegate_.handleClassification && this.delegate_.handleClassification(results, stats);
  }

  VisualSuggestionsResultHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVisualSuggestionsResultHandler_HandleClassification_Name:
      var params = reader.decodeStruct(VisualSuggestionsResultHandler_HandleClassification_Params);
      this.handleClassification(params.results, params.stats);
      return true;
    default:
      return false;
    }
  };

  VisualSuggestionsResultHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateVisualSuggestionsResultHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVisualSuggestionsResultHandler_HandleClassification_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VisualSuggestionsResultHandler_HandleClassification_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVisualSuggestionsResultHandlerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var VisualSuggestionsResultHandler = {
    name: 'companion.visual_search.mojom.VisualSuggestionsResultHandler',
    kVersion: 0,
    ptrClass: VisualSuggestionsResultHandlerPtr,
    proxyClass: VisualSuggestionsResultHandlerProxy,
    stubClass: VisualSuggestionsResultHandlerStub,
    validateRequest: validateVisualSuggestionsResultHandlerRequest,
    validateResponse: null,
  };
  VisualSuggestionsResultHandlerStub.prototype.validator = validateVisualSuggestionsResultHandlerRequest;
  VisualSuggestionsResultHandlerProxy.prototype.validator = null;
  var kVisualSuggestionsRequestHandler_StartVisualClassification_Name = 1038317721;

  function VisualSuggestionsRequestHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VisualSuggestionsRequestHandler,
                                                   handleOrPtrInfo);
  }

  function VisualSuggestionsRequestHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VisualSuggestionsRequestHandler, associatedInterfacePtrInfo);
  }

  VisualSuggestionsRequestHandlerAssociatedPtr.prototype =
      Object.create(VisualSuggestionsRequestHandlerPtr.prototype);
  VisualSuggestionsRequestHandlerAssociatedPtr.prototype.constructor =
      VisualSuggestionsRequestHandlerAssociatedPtr;

  function VisualSuggestionsRequestHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  VisualSuggestionsRequestHandlerPtr.prototype.startVisualClassification = function() {
    return VisualSuggestionsRequestHandlerProxy.prototype.startVisualClassification
        .apply(this.ptr.getProxy(), arguments);
  };

  VisualSuggestionsRequestHandlerProxy.prototype.startVisualClassification = function(visualModelFile, configProto, resultHandler) {
    var params_ = new VisualSuggestionsRequestHandler_StartVisualClassification_Params();
    params_.visualModelFile = visualModelFile;
    params_.configProto = configProto;
    params_.resultHandler = resultHandler;
    var builder = new codec.MessageV0Builder(
        kVisualSuggestionsRequestHandler_StartVisualClassification_Name,
        codec.align(VisualSuggestionsRequestHandler_StartVisualClassification_Params.encodedSize));
    builder.encodeStruct(VisualSuggestionsRequestHandler_StartVisualClassification_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VisualSuggestionsRequestHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  VisualSuggestionsRequestHandlerStub.prototype.startVisualClassification = function(visualModelFile, configProto, resultHandler) {
    return this.delegate_ && this.delegate_.startVisualClassification && this.delegate_.startVisualClassification(visualModelFile, configProto, resultHandler);
  }

  VisualSuggestionsRequestHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVisualSuggestionsRequestHandler_StartVisualClassification_Name:
      var params = reader.decodeStruct(VisualSuggestionsRequestHandler_StartVisualClassification_Params);
      this.startVisualClassification(params.visualModelFile, params.configProto, params.resultHandler);
      return true;
    default:
      return false;
    }
  };

  VisualSuggestionsRequestHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateVisualSuggestionsRequestHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVisualSuggestionsRequestHandler_StartVisualClassification_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VisualSuggestionsRequestHandler_StartVisualClassification_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVisualSuggestionsRequestHandlerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var VisualSuggestionsRequestHandler = {
    name: 'companion.visual_search.mojom.VisualSuggestionsRequestHandler',
    kVersion: 0,
    ptrClass: VisualSuggestionsRequestHandlerPtr,
    proxyClass: VisualSuggestionsRequestHandlerProxy,
    stubClass: VisualSuggestionsRequestHandlerStub,
    validateRequest: validateVisualSuggestionsRequestHandlerRequest,
    validateResponse: null,
  };
  VisualSuggestionsRequestHandlerStub.prototype.validator = validateVisualSuggestionsRequestHandlerRequest;
  VisualSuggestionsRequestHandlerProxy.prototype.validator = null;
  var kVisualSuggestionsModelProvider_GetModelWithMetadata_Name = 1458339647;

  function VisualSuggestionsModelProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VisualSuggestionsModelProvider,
                                                   handleOrPtrInfo);
  }

  function VisualSuggestionsModelProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VisualSuggestionsModelProvider, associatedInterfacePtrInfo);
  }

  VisualSuggestionsModelProviderAssociatedPtr.prototype =
      Object.create(VisualSuggestionsModelProviderPtr.prototype);
  VisualSuggestionsModelProviderAssociatedPtr.prototype.constructor =
      VisualSuggestionsModelProviderAssociatedPtr;

  function VisualSuggestionsModelProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  VisualSuggestionsModelProviderPtr.prototype.getModelWithMetadata = function() {
    return VisualSuggestionsModelProviderProxy.prototype.getModelWithMetadata
        .apply(this.ptr.getProxy(), arguments);
  };

  VisualSuggestionsModelProviderProxy.prototype.getModelWithMetadata = function() {
    var params_ = new VisualSuggestionsModelProvider_GetModelWithMetadata_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVisualSuggestionsModelProvider_GetModelWithMetadata_Name,
          codec.align(VisualSuggestionsModelProvider_GetModelWithMetadata_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VisualSuggestionsModelProvider_GetModelWithMetadata_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function VisualSuggestionsModelProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  VisualSuggestionsModelProviderStub.prototype.getModelWithMetadata = function() {
    return this.delegate_ && this.delegate_.getModelWithMetadata && this.delegate_.getModelWithMetadata();
  }

  VisualSuggestionsModelProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  VisualSuggestionsModelProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVisualSuggestionsModelProvider_GetModelWithMetadata_Name:
      var params = reader.decodeStruct(VisualSuggestionsModelProvider_GetModelWithMetadata_Params);
      this.getModelWithMetadata().then(function(response) {
        var responseParams =
            new VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams();
        responseParams.visualModelFile = response.visualModelFile;
        responseParams.configProto = response.configProto;
        var builder = new codec.MessageV1Builder(
            kVisualSuggestionsModelProvider_GetModelWithMetadata_Name,
            codec.align(VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVisualSuggestionsModelProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVisualSuggestionsModelProvider_GetModelWithMetadata_Name:
        if (message.expectsResponse())
          paramsClass = VisualSuggestionsModelProvider_GetModelWithMetadata_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVisualSuggestionsModelProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVisualSuggestionsModelProvider_GetModelWithMetadata_Name:
        if (message.isResponse())
          paramsClass = VisualSuggestionsModelProvider_GetModelWithMetadata_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VisualSuggestionsModelProvider = {
    name: 'companion.visual_search.mojom.VisualSuggestionsModelProvider',
    kVersion: 0,
    ptrClass: VisualSuggestionsModelProviderPtr,
    proxyClass: VisualSuggestionsModelProviderProxy,
    stubClass: VisualSuggestionsModelProviderStub,
    validateRequest: validateVisualSuggestionsModelProviderRequest,
    validateResponse: validateVisualSuggestionsModelProviderResponse,
  };
  VisualSuggestionsModelProviderStub.prototype.validator = validateVisualSuggestionsModelProviderRequest;
  VisualSuggestionsModelProviderProxy.prototype.validator = validateVisualSuggestionsModelProviderResponse;
  exports.ClassificationStats = ClassificationStats;
  exports.VisualSearchSuggestion = VisualSearchSuggestion;
  exports.VisualSuggestionsResultHandler = VisualSuggestionsResultHandler;
  exports.VisualSuggestionsResultHandlerPtr = VisualSuggestionsResultHandlerPtr;
  exports.VisualSuggestionsResultHandlerAssociatedPtr = VisualSuggestionsResultHandlerAssociatedPtr;
  exports.VisualSuggestionsRequestHandler = VisualSuggestionsRequestHandler;
  exports.VisualSuggestionsRequestHandlerPtr = VisualSuggestionsRequestHandlerPtr;
  exports.VisualSuggestionsRequestHandlerAssociatedPtr = VisualSuggestionsRequestHandlerAssociatedPtr;
  exports.VisualSuggestionsModelProvider = VisualSuggestionsModelProvider;
  exports.VisualSuggestionsModelProviderPtr = VisualSuggestionsModelProviderPtr;
  exports.VisualSuggestionsModelProviderAssociatedPtr = VisualSuggestionsModelProviderAssociatedPtr;
})();