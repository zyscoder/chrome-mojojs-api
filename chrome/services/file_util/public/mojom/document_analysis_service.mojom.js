// chrome/services/file_util/public/mojom/document_analysis_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/services/file_util/public/mojom/document_analysis_service.mojom';
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
  var safe_document_analyzer$ =
      mojo.internal.exposeNamespace('chrome.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'chrome/services/file_util/public/mojom/safe_document_analyzer.mojom', 'safe_document_analyzer.mojom.js');
  }



  function DocumentAnalysisService_BindSafeDocumentAnalyzer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.validate = function(messageValidator, offset) {
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


    // validate DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.encodedSize = codec.kStructHeaderSize + 8;

  DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.decode = function(decoder) {
    var packed;
    var val = new DocumentAnalysisService_BindSafeDocumentAnalyzer_Params();
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

  DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kDocumentAnalysisService_BindSafeDocumentAnalyzer_Name = 724896416;

  function DocumentAnalysisServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DocumentAnalysisService,
                                                   handleOrPtrInfo);
  }

  function DocumentAnalysisServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DocumentAnalysisService, associatedInterfacePtrInfo);
  }

  DocumentAnalysisServiceAssociatedPtr.prototype =
      Object.create(DocumentAnalysisServicePtr.prototype);
  DocumentAnalysisServiceAssociatedPtr.prototype.constructor =
      DocumentAnalysisServiceAssociatedPtr;

  function DocumentAnalysisServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  DocumentAnalysisServicePtr.prototype.bindSafeDocumentAnalyzer = function() {
    return DocumentAnalysisServiceProxy.prototype.bindSafeDocumentAnalyzer
        .apply(this.ptr.getProxy(), arguments);
  };

  DocumentAnalysisServiceProxy.prototype.bindSafeDocumentAnalyzer = function(receiver) {
    var params_ = new DocumentAnalysisService_BindSafeDocumentAnalyzer_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kDocumentAnalysisService_BindSafeDocumentAnalyzer_Name,
        codec.align(DocumentAnalysisService_BindSafeDocumentAnalyzer_Params.encodedSize));
    builder.encodeStruct(DocumentAnalysisService_BindSafeDocumentAnalyzer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DocumentAnalysisServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  DocumentAnalysisServiceStub.prototype.bindSafeDocumentAnalyzer = function(receiver) {
    return this.delegate_ && this.delegate_.bindSafeDocumentAnalyzer && this.delegate_.bindSafeDocumentAnalyzer(receiver);
  }

  DocumentAnalysisServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDocumentAnalysisService_BindSafeDocumentAnalyzer_Name:
      var params = reader.decodeStruct(DocumentAnalysisService_BindSafeDocumentAnalyzer_Params);
      this.bindSafeDocumentAnalyzer(params.receiver);
      return true;
    default:
      return false;
    }
  };

  DocumentAnalysisServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDocumentAnalysisServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDocumentAnalysisService_BindSafeDocumentAnalyzer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DocumentAnalysisService_BindSafeDocumentAnalyzer_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDocumentAnalysisServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DocumentAnalysisService = {
    name: 'chrome.mojom.DocumentAnalysisService',
    kVersion: 0,
    ptrClass: DocumentAnalysisServicePtr,
    proxyClass: DocumentAnalysisServiceProxy,
    stubClass: DocumentAnalysisServiceStub,
    validateRequest: validateDocumentAnalysisServiceRequest,
    validateResponse: null,
  };
  DocumentAnalysisServiceStub.prototype.validator = validateDocumentAnalysisServiceRequest;
  DocumentAnalysisServiceProxy.prototype.validator = null;
  exports.DocumentAnalysisService = DocumentAnalysisService;
  exports.DocumentAnalysisServicePtr = DocumentAnalysisServicePtr;
  exports.DocumentAnalysisServiceAssociatedPtr = DocumentAnalysisServiceAssociatedPtr;
})();