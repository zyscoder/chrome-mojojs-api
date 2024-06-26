// components/webapps/common/web_page_metadata_agent.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/webapps/common/web_page_metadata_agent.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('webapps.mojom');
  var web_page_metadata$ =
      mojo.internal.exposeNamespace('webapps.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/webapps/common/web_page_metadata.mojom', 'web_page_metadata.mojom.js');
  }



  function WebPageMetadataAgent_GetWebPageMetadata_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebPageMetadataAgent_GetWebPageMetadata_Params.prototype.initDefaults_ = function() {
  };
  WebPageMetadataAgent_GetWebPageMetadata_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebPageMetadataAgent_GetWebPageMetadata_Params.validate = function(messageValidator, offset) {
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

  WebPageMetadataAgent_GetWebPageMetadata_Params.encodedSize = codec.kStructHeaderSize + 0;

  WebPageMetadataAgent_GetWebPageMetadata_Params.decode = function(decoder) {
    var packed;
    var val = new WebPageMetadataAgent_GetWebPageMetadata_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  WebPageMetadataAgent_GetWebPageMetadata_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebPageMetadataAgent_GetWebPageMetadata_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function WebPageMetadataAgent_GetWebPageMetadata_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.prototype.initDefaults_ = function() {
    this.webPageMetadata = null;
  };
  WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.webPageMetadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, web_page_metadata$.WebPageMetadata, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebPageMetadataAgent_GetWebPageMetadata_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.webPageMetadata =
        decoder.decodeStructPointer(web_page_metadata$.WebPageMetadata);
    return val;
  };

  WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(web_page_metadata$.WebPageMetadata, val.webPageMetadata);
  };
  var kWebPageMetadataAgent_GetWebPageMetadata_Name = 19209685;

  function WebPageMetadataAgentPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebPageMetadataAgent,
                                                   handleOrPtrInfo);
  }

  function WebPageMetadataAgentAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebPageMetadataAgent, associatedInterfacePtrInfo);
  }

  WebPageMetadataAgentAssociatedPtr.prototype =
      Object.create(WebPageMetadataAgentPtr.prototype);
  WebPageMetadataAgentAssociatedPtr.prototype.constructor =
      WebPageMetadataAgentAssociatedPtr;

  function WebPageMetadataAgentProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebPageMetadataAgentPtr.prototype.getWebPageMetadata = function() {
    return WebPageMetadataAgentProxy.prototype.getWebPageMetadata
        .apply(this.ptr.getProxy(), arguments);
  };

  WebPageMetadataAgentProxy.prototype.getWebPageMetadata = function() {
    var params_ = new WebPageMetadataAgent_GetWebPageMetadata_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebPageMetadataAgent_GetWebPageMetadata_Name,
          codec.align(WebPageMetadataAgent_GetWebPageMetadata_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebPageMetadataAgent_GetWebPageMetadata_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebPageMetadataAgent_GetWebPageMetadata_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function WebPageMetadataAgentStub(delegate) {
    this.delegate_ = delegate;
  }
  WebPageMetadataAgentStub.prototype.getWebPageMetadata = function() {
    return this.delegate_ && this.delegate_.getWebPageMetadata && this.delegate_.getWebPageMetadata();
  }

  WebPageMetadataAgentStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  WebPageMetadataAgentStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebPageMetadataAgent_GetWebPageMetadata_Name:
      var params = reader.decodeStruct(WebPageMetadataAgent_GetWebPageMetadata_Params);
      this.getWebPageMetadata().then(function(response) {
        var responseParams =
            new WebPageMetadataAgent_GetWebPageMetadata_ResponseParams();
        responseParams.webPageMetadata = response.webPageMetadata;
        var builder = new codec.MessageV1Builder(
            kWebPageMetadataAgent_GetWebPageMetadata_Name,
            codec.align(WebPageMetadataAgent_GetWebPageMetadata_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebPageMetadataAgent_GetWebPageMetadata_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWebPageMetadataAgentRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebPageMetadataAgent_GetWebPageMetadata_Name:
        if (message.expectsResponse())
          paramsClass = WebPageMetadataAgent_GetWebPageMetadata_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebPageMetadataAgentResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWebPageMetadataAgent_GetWebPageMetadata_Name:
        if (message.isResponse())
          paramsClass = WebPageMetadataAgent_GetWebPageMetadata_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WebPageMetadataAgent = {
    name: 'webapps.mojom.WebPageMetadataAgent',
    kVersion: 0,
    ptrClass: WebPageMetadataAgentPtr,
    proxyClass: WebPageMetadataAgentProxy,
    stubClass: WebPageMetadataAgentStub,
    validateRequest: validateWebPageMetadataAgentRequest,
    validateResponse: validateWebPageMetadataAgentResponse,
  };
  WebPageMetadataAgentStub.prototype.validator = validateWebPageMetadataAgentRequest;
  WebPageMetadataAgentProxy.prototype.validator = validateWebPageMetadataAgentResponse;
  exports.WebPageMetadataAgent = WebPageMetadataAgent;
  exports.WebPageMetadataAgentPtr = WebPageMetadataAgentPtr;
  exports.WebPageMetadataAgentAssociatedPtr = WebPageMetadataAgentAssociatedPtr;
})();