// services/data_decoder/public/mojom/structured_headers_parser.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/data_decoder/public/mojom/structured_headers_parser.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('dataDecoder.mojom');
  var structured_headers$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/structured_headers.mojom', '../../../network/public/mojom/structured_headers.mojom.js');
  }



  function StructuredHeadersParser_ParseItem_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructuredHeadersParser_ParseItem_Params.prototype.initDefaults_ = function() {
    this.header = null;
  };
  StructuredHeadersParser_ParseItem_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructuredHeadersParser_ParseItem_Params.validate = function(messageValidator, offset) {
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


    // validate StructuredHeadersParser_ParseItem_Params.header
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructuredHeadersParser_ParseItem_Params.encodedSize = codec.kStructHeaderSize + 8;

  StructuredHeadersParser_ParseItem_Params.decode = function(decoder) {
    var packed;
    var val = new StructuredHeadersParser_ParseItem_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.header =
        decoder.decodeStruct(codec.String);
    return val;
  };

  StructuredHeadersParser_ParseItem_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructuredHeadersParser_ParseItem_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.header);
  };
  function StructuredHeadersParser_ParseItem_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructuredHeadersParser_ParseItem_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  StructuredHeadersParser_ParseItem_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructuredHeadersParser_ParseItem_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate StructuredHeadersParser_ParseItem_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, structured_headers$.StructuredHeadersParameterizedItem, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructuredHeadersParser_ParseItem_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  StructuredHeadersParser_ParseItem_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new StructuredHeadersParser_ParseItem_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(structured_headers$.StructuredHeadersParameterizedItem);
    return val;
  };

  StructuredHeadersParser_ParseItem_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructuredHeadersParser_ParseItem_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(structured_headers$.StructuredHeadersParameterizedItem, val.result);
  };
  function StructuredHeadersParser_ParseList_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructuredHeadersParser_ParseList_Params.prototype.initDefaults_ = function() {
    this.header = null;
  };
  StructuredHeadersParser_ParseList_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructuredHeadersParser_ParseList_Params.validate = function(messageValidator, offset) {
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


    // validate StructuredHeadersParser_ParseList_Params.header
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructuredHeadersParser_ParseList_Params.encodedSize = codec.kStructHeaderSize + 8;

  StructuredHeadersParser_ParseList_Params.decode = function(decoder) {
    var packed;
    var val = new StructuredHeadersParser_ParseList_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.header =
        decoder.decodeStruct(codec.String);
    return val;
  };

  StructuredHeadersParser_ParseList_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructuredHeadersParser_ParseList_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.header);
  };
  function StructuredHeadersParser_ParseList_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructuredHeadersParser_ParseList_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  StructuredHeadersParser_ParseList_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructuredHeadersParser_ParseList_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate StructuredHeadersParser_ParseList_ResponseParams.result
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(structured_headers$.StructuredHeadersParameterizedMember), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructuredHeadersParser_ParseList_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  StructuredHeadersParser_ParseList_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new StructuredHeadersParser_ParseList_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeArrayPointer(new codec.PointerTo(structured_headers$.StructuredHeadersParameterizedMember));
    return val;
  };

  StructuredHeadersParser_ParseList_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructuredHeadersParser_ParseList_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(structured_headers$.StructuredHeadersParameterizedMember), val.result);
  };
  var kStructuredHeadersParser_ParseItem_Name = 787103335;
  var kStructuredHeadersParser_ParseList_Name = 1471424192;

  function StructuredHeadersParserPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(StructuredHeadersParser,
                                                   handleOrPtrInfo);
  }

  function StructuredHeadersParserAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        StructuredHeadersParser, associatedInterfacePtrInfo);
  }

  StructuredHeadersParserAssociatedPtr.prototype =
      Object.create(StructuredHeadersParserPtr.prototype);
  StructuredHeadersParserAssociatedPtr.prototype.constructor =
      StructuredHeadersParserAssociatedPtr;

  function StructuredHeadersParserProxy(receiver) {
    this.receiver_ = receiver;
  }
  StructuredHeadersParserPtr.prototype.parseItem = function() {
    return StructuredHeadersParserProxy.prototype.parseItem
        .apply(this.ptr.getProxy(), arguments);
  };

  StructuredHeadersParserProxy.prototype.parseItem = function(header) {
    var params_ = new StructuredHeadersParser_ParseItem_Params();
    params_.header = header;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kStructuredHeadersParser_ParseItem_Name,
          codec.align(StructuredHeadersParser_ParseItem_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(StructuredHeadersParser_ParseItem_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(StructuredHeadersParser_ParseItem_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  StructuredHeadersParserPtr.prototype.parseList = function() {
    return StructuredHeadersParserProxy.prototype.parseList
        .apply(this.ptr.getProxy(), arguments);
  };

  StructuredHeadersParserProxy.prototype.parseList = function(header) {
    var params_ = new StructuredHeadersParser_ParseList_Params();
    params_.header = header;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kStructuredHeadersParser_ParseList_Name,
          codec.align(StructuredHeadersParser_ParseList_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(StructuredHeadersParser_ParseList_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(StructuredHeadersParser_ParseList_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function StructuredHeadersParserStub(delegate) {
    this.delegate_ = delegate;
  }
  StructuredHeadersParserStub.prototype.parseItem = function(header) {
    return this.delegate_ && this.delegate_.parseItem && this.delegate_.parseItem(header);
  }
  StructuredHeadersParserStub.prototype.parseList = function(header) {
    return this.delegate_ && this.delegate_.parseList && this.delegate_.parseList(header);
  }

  StructuredHeadersParserStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  StructuredHeadersParserStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kStructuredHeadersParser_ParseItem_Name:
      var params = reader.decodeStruct(StructuredHeadersParser_ParseItem_Params);
      this.parseItem(params.header).then(function(response) {
        var responseParams =
            new StructuredHeadersParser_ParseItem_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kStructuredHeadersParser_ParseItem_Name,
            codec.align(StructuredHeadersParser_ParseItem_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(StructuredHeadersParser_ParseItem_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kStructuredHeadersParser_ParseList_Name:
      var params = reader.decodeStruct(StructuredHeadersParser_ParseList_Params);
      this.parseList(params.header).then(function(response) {
        var responseParams =
            new StructuredHeadersParser_ParseList_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kStructuredHeadersParser_ParseList_Name,
            codec.align(StructuredHeadersParser_ParseList_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(StructuredHeadersParser_ParseList_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateStructuredHeadersParserRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kStructuredHeadersParser_ParseItem_Name:
        if (message.expectsResponse())
          paramsClass = StructuredHeadersParser_ParseItem_Params;
      break;
      case kStructuredHeadersParser_ParseList_Name:
        if (message.expectsResponse())
          paramsClass = StructuredHeadersParser_ParseList_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateStructuredHeadersParserResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kStructuredHeadersParser_ParseItem_Name:
        if (message.isResponse())
          paramsClass = StructuredHeadersParser_ParseItem_ResponseParams;
        break;
      case kStructuredHeadersParser_ParseList_Name:
        if (message.isResponse())
          paramsClass = StructuredHeadersParser_ParseList_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var StructuredHeadersParser = {
    name: 'data_decoder.mojom.StructuredHeadersParser',
    kVersion: 0,
    ptrClass: StructuredHeadersParserPtr,
    proxyClass: StructuredHeadersParserProxy,
    stubClass: StructuredHeadersParserStub,
    validateRequest: validateStructuredHeadersParserRequest,
    validateResponse: validateStructuredHeadersParserResponse,
  };
  StructuredHeadersParserStub.prototype.validator = validateStructuredHeadersParserRequest;
  StructuredHeadersParserProxy.prototype.validator = validateStructuredHeadersParserResponse;
  exports.StructuredHeadersParser = StructuredHeadersParser;
  exports.StructuredHeadersParserPtr = StructuredHeadersParserPtr;
  exports.StructuredHeadersParserAssociatedPtr = StructuredHeadersParserAssociatedPtr;
})();