// services/data_decoder/public/mojom/xml_parser.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/data_decoder/public/mojom/xml_parser.mojom';
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
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../../mojo/public/mojom/base/values.mojom.js');
  }



  function XmlParser_Parse_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XmlParser_Parse_Params.prototype.initDefaults_ = function() {
    this.xml = null;
    this.whitespaceBehavior = 0;
  };
  XmlParser_Parse_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XmlParser_Parse_Params.validate = function(messageValidator, offset) {
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


    // validate XmlParser_Parse_Params.xml
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate XmlParser_Parse_Params.whitespaceBehavior
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, XmlParser.WhitespaceBehavior);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XmlParser_Parse_Params.encodedSize = codec.kStructHeaderSize + 16;

  XmlParser_Parse_Params.decode = function(decoder) {
    var packed;
    var val = new XmlParser_Parse_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.xml =
        decoder.decodeStruct(codec.String);
    val.whitespaceBehavior =
        decoder.decodeStruct(new codec.Enum(XmlParser.WhitespaceBehavior));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  XmlParser_Parse_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XmlParser_Parse_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.xml);
    encoder.encodeStruct(codec.Int32, val.whitespaceBehavior);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function XmlParser_Parse_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XmlParser_Parse_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.error = null;
  };
  XmlParser_Parse_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XmlParser_Parse_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate XmlParser_Parse_ResponseParams.result
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, values$.Value, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XmlParser_Parse_ResponseParams.error
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XmlParser_Parse_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  XmlParser_Parse_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new XmlParser_Parse_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(values$.Value);
    val.error =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  XmlParser_Parse_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XmlParser_Parse_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(values$.Value, val.result);
    encoder.encodeStruct(codec.NullableString, val.error);
  };
  var kXmlParser_Parse_Name = 1950984628;

  function XmlParserPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(XmlParser,
                                                   handleOrPtrInfo);
  }

  function XmlParserAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        XmlParser, associatedInterfacePtrInfo);
  }

  XmlParserAssociatedPtr.prototype =
      Object.create(XmlParserPtr.prototype);
  XmlParserAssociatedPtr.prototype.constructor =
      XmlParserAssociatedPtr;

  function XmlParserProxy(receiver) {
    this.receiver_ = receiver;
  }
  XmlParserPtr.prototype.parse = function() {
    return XmlParserProxy.prototype.parse
        .apply(this.ptr.getProxy(), arguments);
  };

  XmlParserProxy.prototype.parse = function(xml, whitespaceBehavior) {
    var params_ = new XmlParser_Parse_Params();
    params_.xml = xml;
    params_.whitespaceBehavior = whitespaceBehavior;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kXmlParser_Parse_Name,
          codec.align(XmlParser_Parse_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(XmlParser_Parse_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(XmlParser_Parse_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function XmlParserStub(delegate) {
    this.delegate_ = delegate;
  }
  XmlParserStub.prototype.parse = function(xml, whitespaceBehavior) {
    return this.delegate_ && this.delegate_.parse && this.delegate_.parse(xml, whitespaceBehavior);
  }

  XmlParserStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  XmlParserStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kXmlParser_Parse_Name:
      var params = reader.decodeStruct(XmlParser_Parse_Params);
      this.parse(params.xml, params.whitespaceBehavior).then(function(response) {
        var responseParams =
            new XmlParser_Parse_ResponseParams();
        responseParams.result = response.result;
        responseParams.error = response.error;
        var builder = new codec.MessageV1Builder(
            kXmlParser_Parse_Name,
            codec.align(XmlParser_Parse_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(XmlParser_Parse_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateXmlParserRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kXmlParser_Parse_Name:
        if (message.expectsResponse())
          paramsClass = XmlParser_Parse_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateXmlParserResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kXmlParser_Parse_Name:
        if (message.isResponse())
          paramsClass = XmlParser_Parse_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var XmlParser = {
    name: 'data_decoder.mojom.XmlParser',
    kVersion: 0,
    ptrClass: XmlParserPtr,
    proxyClass: XmlParserProxy,
    stubClass: XmlParserStub,
    validateRequest: validateXmlParserRequest,
    validateResponse: validateXmlParserResponse,
  };
  XmlParser.TYPE_KEY = "type",
  XmlParser.TAG_KEY = "tag",
  XmlParser.TEXT_KEY = "text",
  XmlParser.ATTRIBUTES_KEY = "attributes",
  XmlParser.CHILDREN_KEY = "children",
  XmlParser.NAMESPACES_KEY = "namespaces",
  XmlParser.ELEMENT_TYPE = "element",
  XmlParser.TEXT_NODE_TYPE = "text",
  XmlParser.C_DATA_NODE_TYPE = "cdata",
  XmlParser.WhitespaceBehavior = {};
  XmlParser.WhitespaceBehavior.kIgnore = 0;
  XmlParser.WhitespaceBehavior.kPreserveSignificant = 1;
  XmlParser.WhitespaceBehavior.MIN_VALUE = 0;
  XmlParser.WhitespaceBehavior.MAX_VALUE = 1;

  XmlParser.WhitespaceBehavior.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  XmlParser.WhitespaceBehavior.toKnownEnumValue = function(value) {
    return value;
  };

  XmlParser.WhitespaceBehavior.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  XmlParserStub.prototype.validator = validateXmlParserRequest;
  XmlParserProxy.prototype.validator = validateXmlParserResponse;
  exports.XmlParser = XmlParser;
  exports.XmlParserPtr = XmlParserPtr;
  exports.XmlParserAssociatedPtr = XmlParserAssociatedPtr;
})();