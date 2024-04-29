// chrome/services/file_util/public/mojom/file_util_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/services/file_util/public/mojom/file_util_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('chrome.mojom');
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../../../sandbox/policy/mojom/sandbox.mojom.js');
  }
  var safe_archive_analyzer$ =
      mojo.internal.exposeNamespace('chrome.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'chrome/services/file_util/public/mojom/safe_archive_analyzer.mojom', 'safe_archive_analyzer.mojom.js');
  }
  var single_file_extractor$ =
      mojo.internal.exposeNamespace('chrome.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'chrome/services/file_util/public/mojom/single_file_extractor.mojom', 'single_file_extractor.mojom.js');
  }



  function FileUtilService_BindSafeArchiveAnalyzer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileUtilService_BindSafeArchiveAnalyzer_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  FileUtilService_BindSafeArchiveAnalyzer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileUtilService_BindSafeArchiveAnalyzer_Params.validate = function(messageValidator, offset) {
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


    // validate FileUtilService_BindSafeArchiveAnalyzer_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileUtilService_BindSafeArchiveAnalyzer_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileUtilService_BindSafeArchiveAnalyzer_Params.decode = function(decoder) {
    var packed;
    var val = new FileUtilService_BindSafeArchiveAnalyzer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileUtilService_BindSafeArchiveAnalyzer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileUtilService_BindSafeArchiveAnalyzer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileUtilService_BindSingleFileTarFileExtractor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileUtilService_BindSingleFileTarFileExtractor_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  FileUtilService_BindSingleFileTarFileExtractor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileUtilService_BindSingleFileTarFileExtractor_Params.validate = function(messageValidator, offset) {
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


    // validate FileUtilService_BindSingleFileTarFileExtractor_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileUtilService_BindSingleFileTarFileExtractor_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileUtilService_BindSingleFileTarFileExtractor_Params.decode = function(decoder) {
    var packed;
    var val = new FileUtilService_BindSingleFileTarFileExtractor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileUtilService_BindSingleFileTarFileExtractor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileUtilService_BindSingleFileTarFileExtractor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileUtilService_BindSingleFileTarXzFileExtractor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileUtilService_BindSingleFileTarXzFileExtractor_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  FileUtilService_BindSingleFileTarXzFileExtractor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileUtilService_BindSingleFileTarXzFileExtractor_Params.validate = function(messageValidator, offset) {
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


    // validate FileUtilService_BindSingleFileTarXzFileExtractor_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileUtilService_BindSingleFileTarXzFileExtractor_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileUtilService_BindSingleFileTarXzFileExtractor_Params.decode = function(decoder) {
    var packed;
    var val = new FileUtilService_BindSingleFileTarXzFileExtractor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileUtilService_BindSingleFileTarXzFileExtractor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileUtilService_BindSingleFileTarXzFileExtractor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kFileUtilService_BindSafeArchiveAnalyzer_Name = 2108520745;
  var kFileUtilService_BindSingleFileTarFileExtractor_Name = 1558251100;
  var kFileUtilService_BindSingleFileTarXzFileExtractor_Name = 908717111;

  function FileUtilServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FileUtilService,
                                                   handleOrPtrInfo);
  }

  function FileUtilServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FileUtilService, associatedInterfacePtrInfo);
  }

  FileUtilServiceAssociatedPtr.prototype =
      Object.create(FileUtilServicePtr.prototype);
  FileUtilServiceAssociatedPtr.prototype.constructor =
      FileUtilServiceAssociatedPtr;

  function FileUtilServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  FileUtilServicePtr.prototype.bindSafeArchiveAnalyzer = function() {
    return FileUtilServiceProxy.prototype.bindSafeArchiveAnalyzer
        .apply(this.ptr.getProxy(), arguments);
  };

  FileUtilServiceProxy.prototype.bindSafeArchiveAnalyzer = function(receiver) {
    var params_ = new FileUtilService_BindSafeArchiveAnalyzer_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kFileUtilService_BindSafeArchiveAnalyzer_Name,
        codec.align(FileUtilService_BindSafeArchiveAnalyzer_Params.encodedSize));
    builder.encodeStruct(FileUtilService_BindSafeArchiveAnalyzer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FileUtilServicePtr.prototype.bindSingleFileTarFileExtractor = function() {
    return FileUtilServiceProxy.prototype.bindSingleFileTarFileExtractor
        .apply(this.ptr.getProxy(), arguments);
  };

  FileUtilServiceProxy.prototype.bindSingleFileTarFileExtractor = function(receiver) {
    var params_ = new FileUtilService_BindSingleFileTarFileExtractor_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kFileUtilService_BindSingleFileTarFileExtractor_Name,
        codec.align(FileUtilService_BindSingleFileTarFileExtractor_Params.encodedSize));
    builder.encodeStruct(FileUtilService_BindSingleFileTarFileExtractor_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  FileUtilServicePtr.prototype.bindSingleFileTarXzFileExtractor = function() {
    return FileUtilServiceProxy.prototype.bindSingleFileTarXzFileExtractor
        .apply(this.ptr.getProxy(), arguments);
  };

  FileUtilServiceProxy.prototype.bindSingleFileTarXzFileExtractor = function(receiver) {
    var params_ = new FileUtilService_BindSingleFileTarXzFileExtractor_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kFileUtilService_BindSingleFileTarXzFileExtractor_Name,
        codec.align(FileUtilService_BindSingleFileTarXzFileExtractor_Params.encodedSize));
    builder.encodeStruct(FileUtilService_BindSingleFileTarXzFileExtractor_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function FileUtilServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  FileUtilServiceStub.prototype.bindSafeArchiveAnalyzer = function(receiver) {
    return this.delegate_ && this.delegate_.bindSafeArchiveAnalyzer && this.delegate_.bindSafeArchiveAnalyzer(receiver);
  }
  FileUtilServiceStub.prototype.bindSingleFileTarFileExtractor = function(receiver) {
    return this.delegate_ && this.delegate_.bindSingleFileTarFileExtractor && this.delegate_.bindSingleFileTarFileExtractor(receiver);
  }
  FileUtilServiceStub.prototype.bindSingleFileTarXzFileExtractor = function(receiver) {
    return this.delegate_ && this.delegate_.bindSingleFileTarXzFileExtractor && this.delegate_.bindSingleFileTarXzFileExtractor(receiver);
  }

  FileUtilServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileUtilService_BindSafeArchiveAnalyzer_Name:
      var params = reader.decodeStruct(FileUtilService_BindSafeArchiveAnalyzer_Params);
      this.bindSafeArchiveAnalyzer(params.receiver);
      return true;
    case kFileUtilService_BindSingleFileTarFileExtractor_Name:
      var params = reader.decodeStruct(FileUtilService_BindSingleFileTarFileExtractor_Params);
      this.bindSingleFileTarFileExtractor(params.receiver);
      return true;
    case kFileUtilService_BindSingleFileTarXzFileExtractor_Name:
      var params = reader.decodeStruct(FileUtilService_BindSingleFileTarXzFileExtractor_Params);
      this.bindSingleFileTarXzFileExtractor(params.receiver);
      return true;
    default:
      return false;
    }
  };

  FileUtilServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateFileUtilServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFileUtilService_BindSafeArchiveAnalyzer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileUtilService_BindSafeArchiveAnalyzer_Params;
      break;
      case kFileUtilService_BindSingleFileTarFileExtractor_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileUtilService_BindSingleFileTarFileExtractor_Params;
      break;
      case kFileUtilService_BindSingleFileTarXzFileExtractor_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileUtilService_BindSingleFileTarXzFileExtractor_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFileUtilServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var FileUtilService = {
    name: 'chrome.mojom.FileUtilService',
    kVersion: 0,
    ptrClass: FileUtilServicePtr,
    proxyClass: FileUtilServiceProxy,
    stubClass: FileUtilServiceStub,
    validateRequest: validateFileUtilServiceRequest,
    validateResponse: null,
  };
  FileUtilServiceStub.prototype.validator = validateFileUtilServiceRequest;
  FileUtilServiceProxy.prototype.validator = null;
  exports.FileUtilService = FileUtilService;
  exports.FileUtilServicePtr = FileUtilServicePtr;
  exports.FileUtilServiceAssociatedPtr = FileUtilServiceAssociatedPtr;
})();