// media/mojo/mojom/output_protection.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/output_protection.mojom';
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



  function OutputProtection_QueryStatus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OutputProtection_QueryStatus_Params.prototype.initDefaults_ = function() {
  };
  OutputProtection_QueryStatus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OutputProtection_QueryStatus_Params.validate = function(messageValidator, offset) {
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

  OutputProtection_QueryStatus_Params.encodedSize = codec.kStructHeaderSize + 0;

  OutputProtection_QueryStatus_Params.decode = function(decoder) {
    var packed;
    var val = new OutputProtection_QueryStatus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  OutputProtection_QueryStatus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OutputProtection_QueryStatus_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function OutputProtection_QueryStatus_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OutputProtection_QueryStatus_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
    this.linkMask = 0;
    this.protectionMask = 0;
  };
  OutputProtection_QueryStatus_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OutputProtection_QueryStatus_ResponseParams.validate = function(messageValidator, offset) {
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




    return validator.validationError.NONE;
  };

  OutputProtection_QueryStatus_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  OutputProtection_QueryStatus_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new OutputProtection_QueryStatus_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.linkMask =
        decoder.decodeStruct(codec.Uint32);
    val.protectionMask =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  OutputProtection_QueryStatus_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OutputProtection_QueryStatus_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.linkMask);
    encoder.encodeStruct(codec.Uint32, val.protectionMask);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function OutputProtection_EnableProtection_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OutputProtection_EnableProtection_Params.prototype.initDefaults_ = function() {
    this.desiredProtectionMask = 0;
  };
  OutputProtection_EnableProtection_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OutputProtection_EnableProtection_Params.validate = function(messageValidator, offset) {
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

  OutputProtection_EnableProtection_Params.encodedSize = codec.kStructHeaderSize + 8;

  OutputProtection_EnableProtection_Params.decode = function(decoder) {
    var packed;
    var val = new OutputProtection_EnableProtection_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.desiredProtectionMask =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  OutputProtection_EnableProtection_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OutputProtection_EnableProtection_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.desiredProtectionMask);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function OutputProtection_EnableProtection_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OutputProtection_EnableProtection_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  OutputProtection_EnableProtection_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OutputProtection_EnableProtection_ResponseParams.validate = function(messageValidator, offset) {
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

  OutputProtection_EnableProtection_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  OutputProtection_EnableProtection_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new OutputProtection_EnableProtection_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  OutputProtection_EnableProtection_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OutputProtection_EnableProtection_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kOutputProtection_QueryStatus_Name = 1204641984;
  var kOutputProtection_EnableProtection_Name = 1364050384;

  function OutputProtectionPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OutputProtection,
                                                   handleOrPtrInfo);
  }

  function OutputProtectionAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OutputProtection, associatedInterfacePtrInfo);
  }

  OutputProtectionAssociatedPtr.prototype =
      Object.create(OutputProtectionPtr.prototype);
  OutputProtectionAssociatedPtr.prototype.constructor =
      OutputProtectionAssociatedPtr;

  function OutputProtectionProxy(receiver) {
    this.receiver_ = receiver;
  }
  OutputProtectionPtr.prototype.queryStatus = function() {
    return OutputProtectionProxy.prototype.queryStatus
        .apply(this.ptr.getProxy(), arguments);
  };

  OutputProtectionProxy.prototype.queryStatus = function() {
    var params_ = new OutputProtection_QueryStatus_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kOutputProtection_QueryStatus_Name,
          codec.align(OutputProtection_QueryStatus_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(OutputProtection_QueryStatus_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(OutputProtection_QueryStatus_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  OutputProtectionPtr.prototype.enableProtection = function() {
    return OutputProtectionProxy.prototype.enableProtection
        .apply(this.ptr.getProxy(), arguments);
  };

  OutputProtectionProxy.prototype.enableProtection = function(desiredProtectionMask) {
    var params_ = new OutputProtection_EnableProtection_Params();
    params_.desiredProtectionMask = desiredProtectionMask;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kOutputProtection_EnableProtection_Name,
          codec.align(OutputProtection_EnableProtection_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(OutputProtection_EnableProtection_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(OutputProtection_EnableProtection_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function OutputProtectionStub(delegate) {
    this.delegate_ = delegate;
  }
  OutputProtectionStub.prototype.queryStatus = function() {
    return this.delegate_ && this.delegate_.queryStatus && this.delegate_.queryStatus();
  }
  OutputProtectionStub.prototype.enableProtection = function(desiredProtectionMask) {
    return this.delegate_ && this.delegate_.enableProtection && this.delegate_.enableProtection(desiredProtectionMask);
  }

  OutputProtectionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  OutputProtectionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOutputProtection_QueryStatus_Name:
      var params = reader.decodeStruct(OutputProtection_QueryStatus_Params);
      this.queryStatus().then(function(response) {
        var responseParams =
            new OutputProtection_QueryStatus_ResponseParams();
        responseParams.success = response.success;
        responseParams.linkMask = response.linkMask;
        responseParams.protectionMask = response.protectionMask;
        var builder = new codec.MessageV1Builder(
            kOutputProtection_QueryStatus_Name,
            codec.align(OutputProtection_QueryStatus_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(OutputProtection_QueryStatus_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kOutputProtection_EnableProtection_Name:
      var params = reader.decodeStruct(OutputProtection_EnableProtection_Params);
      this.enableProtection(params.desiredProtectionMask).then(function(response) {
        var responseParams =
            new OutputProtection_EnableProtection_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kOutputProtection_EnableProtection_Name,
            codec.align(OutputProtection_EnableProtection_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(OutputProtection_EnableProtection_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateOutputProtectionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOutputProtection_QueryStatus_Name:
        if (message.expectsResponse())
          paramsClass = OutputProtection_QueryStatus_Params;
      break;
      case kOutputProtection_EnableProtection_Name:
        if (message.expectsResponse())
          paramsClass = OutputProtection_EnableProtection_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOutputProtectionResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kOutputProtection_QueryStatus_Name:
        if (message.isResponse())
          paramsClass = OutputProtection_QueryStatus_ResponseParams;
        break;
      case kOutputProtection_EnableProtection_Name:
        if (message.isResponse())
          paramsClass = OutputProtection_EnableProtection_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var OutputProtection = {
    name: 'media.mojom.OutputProtection',
    kVersion: 0,
    ptrClass: OutputProtectionPtr,
    proxyClass: OutputProtectionProxy,
    stubClass: OutputProtectionStub,
    validateRequest: validateOutputProtectionRequest,
    validateResponse: validateOutputProtectionResponse,
  };
  OutputProtection.ProtectionType = {};
  OutputProtection.ProtectionType.NONE = 0;
  OutputProtection.ProtectionType.HDCP = 1;
  OutputProtection.ProtectionType.MIN_VALUE = 0;
  OutputProtection.ProtectionType.MAX_VALUE = 1;
  OutputProtection.ProtectionType.DEFAULT_VALUE = 0;

  OutputProtection.ProtectionType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  OutputProtection.ProtectionType.toKnownEnumValue = function(value) {
    if (this.isKnownEnumValue(value))
      return value;
    return this.DEFAULT_VALUE;
  };

  OutputProtection.ProtectionType.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  OutputProtection.LinkType = {};
  OutputProtection.LinkType.NONE = 0;
  OutputProtection.LinkType.UNKNOWN = 1;
  OutputProtection.LinkType.INTERNAL = 2;
  OutputProtection.LinkType.VGA = 4;
  OutputProtection.LinkType.HDMI = 8;
  OutputProtection.LinkType.DVI = 16;
  OutputProtection.LinkType.DISPLAYPORT = 32;
  OutputProtection.LinkType.NETWORK = 64;
  OutputProtection.LinkType.MIN_VALUE = 0;
  OutputProtection.LinkType.MAX_VALUE = 64;
  OutputProtection.LinkType.DEFAULT_VALUE = 0;

  OutputProtection.LinkType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 4:
    case 8:
    case 16:
    case 32:
    case 64:
      return true;
    }
    return false;
  };

  OutputProtection.LinkType.toKnownEnumValue = function(value) {
    if (this.isKnownEnumValue(value))
      return value;
    return this.DEFAULT_VALUE;
  };

  OutputProtection.LinkType.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  OutputProtectionStub.prototype.validator = validateOutputProtectionRequest;
  OutputProtectionProxy.prototype.validator = validateOutputProtectionResponse;
  exports.OutputProtection = OutputProtection;
  exports.OutputProtectionPtr = OutputProtectionPtr;
  exports.OutputProtectionAssociatedPtr = OutputProtectionAssociatedPtr;
})();