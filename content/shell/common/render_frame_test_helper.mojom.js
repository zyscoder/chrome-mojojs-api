// content/shell/common/render_frame_test_helper.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/shell/common/render_frame_test_helper.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('content.mojom');
  var tokens$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/tokens/tokens.mojom', '../../../third_party/blink/public/mojom/tokens/tokens.mojom.js');
  }



  function RenderFrameTestHelper_GetDocumentToken_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderFrameTestHelper_GetDocumentToken_Params.prototype.initDefaults_ = function() {
  };
  RenderFrameTestHelper_GetDocumentToken_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderFrameTestHelper_GetDocumentToken_Params.validate = function(messageValidator, offset) {
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

  RenderFrameTestHelper_GetDocumentToken_Params.encodedSize = codec.kStructHeaderSize + 0;

  RenderFrameTestHelper_GetDocumentToken_Params.decode = function(decoder) {
    var packed;
    var val = new RenderFrameTestHelper_GetDocumentToken_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  RenderFrameTestHelper_GetDocumentToken_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderFrameTestHelper_GetDocumentToken_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function RenderFrameTestHelper_GetDocumentToken_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderFrameTestHelper_GetDocumentToken_ResponseParams.prototype.initDefaults_ = function() {
    this.token = null;
  };
  RenderFrameTestHelper_GetDocumentToken_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderFrameTestHelper_GetDocumentToken_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate RenderFrameTestHelper_GetDocumentToken_ResponseParams.token
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, tokens$.DocumentToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RenderFrameTestHelper_GetDocumentToken_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  RenderFrameTestHelper_GetDocumentToken_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new RenderFrameTestHelper_GetDocumentToken_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token =
        decoder.decodeStructPointer(tokens$.DocumentToken);
    return val;
  };

  RenderFrameTestHelper_GetDocumentToken_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderFrameTestHelper_GetDocumentToken_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(tokens$.DocumentToken, val.token);
  };
  var kRenderFrameTestHelper_GetDocumentToken_Name = 1433946975;

  function RenderFrameTestHelperPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RenderFrameTestHelper,
                                                   handleOrPtrInfo);
  }

  function RenderFrameTestHelperAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RenderFrameTestHelper, associatedInterfacePtrInfo);
  }

  RenderFrameTestHelperAssociatedPtr.prototype =
      Object.create(RenderFrameTestHelperPtr.prototype);
  RenderFrameTestHelperAssociatedPtr.prototype.constructor =
      RenderFrameTestHelperAssociatedPtr;

  function RenderFrameTestHelperProxy(receiver) {
    this.receiver_ = receiver;
  }
  RenderFrameTestHelperPtr.prototype.getDocumentToken = function() {
    return RenderFrameTestHelperProxy.prototype.getDocumentToken
        .apply(this.ptr.getProxy(), arguments);
  };

  RenderFrameTestHelperProxy.prototype.getDocumentToken = function() {
    var params_ = new RenderFrameTestHelper_GetDocumentToken_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kRenderFrameTestHelper_GetDocumentToken_Name,
          codec.align(RenderFrameTestHelper_GetDocumentToken_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(RenderFrameTestHelper_GetDocumentToken_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(RenderFrameTestHelper_GetDocumentToken_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function RenderFrameTestHelperStub(delegate) {
    this.delegate_ = delegate;
  }
  RenderFrameTestHelperStub.prototype.getDocumentToken = function() {
    return this.delegate_ && this.delegate_.getDocumentToken && this.delegate_.getDocumentToken();
  }

  RenderFrameTestHelperStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  RenderFrameTestHelperStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRenderFrameTestHelper_GetDocumentToken_Name:
      var params = reader.decodeStruct(RenderFrameTestHelper_GetDocumentToken_Params);
      this.getDocumentToken().then(function(response) {
        var responseParams =
            new RenderFrameTestHelper_GetDocumentToken_ResponseParams();
        responseParams.token = response.token;
        var builder = new codec.MessageV1Builder(
            kRenderFrameTestHelper_GetDocumentToken_Name,
            codec.align(RenderFrameTestHelper_GetDocumentToken_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(RenderFrameTestHelper_GetDocumentToken_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateRenderFrameTestHelperRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRenderFrameTestHelper_GetDocumentToken_Name:
        if (message.expectsResponse())
          paramsClass = RenderFrameTestHelper_GetDocumentToken_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRenderFrameTestHelperResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kRenderFrameTestHelper_GetDocumentToken_Name:
        if (message.isResponse())
          paramsClass = RenderFrameTestHelper_GetDocumentToken_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var RenderFrameTestHelper = {
    name: 'content.mojom.RenderFrameTestHelper',
    kVersion: 0,
    ptrClass: RenderFrameTestHelperPtr,
    proxyClass: RenderFrameTestHelperProxy,
    stubClass: RenderFrameTestHelperStub,
    validateRequest: validateRenderFrameTestHelperRequest,
    validateResponse: validateRenderFrameTestHelperResponse,
  };
  RenderFrameTestHelperStub.prototype.validator = validateRenderFrameTestHelperRequest;
  RenderFrameTestHelperProxy.prototype.validator = validateRenderFrameTestHelperResponse;
  exports.RenderFrameTestHelper = RenderFrameTestHelper;
  exports.RenderFrameTestHelperPtr = RenderFrameTestHelperPtr;
  exports.RenderFrameTestHelperAssociatedPtr = RenderFrameTestHelperAssociatedPtr;
})();