// third_party/blink/public/mojom/choosers/color_chooser.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/choosers/color_chooser.mojom';
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



  function ColorSuggestion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ColorSuggestion.prototype.initDefaults_ = function() {
    this.color = 0;
    this.label = null;
  };
  ColorSuggestion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ColorSuggestion.validate = function(messageValidator, offset) {
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



    // validate ColorSuggestion.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ColorSuggestion.encodedSize = codec.kStructHeaderSize + 16;

  ColorSuggestion.decode = function(decoder) {
    var packed;
    var val = new ColorSuggestion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.color =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.label =
        decoder.decodeStruct(codec.String);
    return val;
  };

  ColorSuggestion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ColorSuggestion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.color);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.label);
  };
  function ColorChooser_SetSelectedColor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ColorChooser_SetSelectedColor_Params.prototype.initDefaults_ = function() {
    this.color = 0;
  };
  ColorChooser_SetSelectedColor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ColorChooser_SetSelectedColor_Params.validate = function(messageValidator, offset) {
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

  ColorChooser_SetSelectedColor_Params.encodedSize = codec.kStructHeaderSize + 8;

  ColorChooser_SetSelectedColor_Params.decode = function(decoder) {
    var packed;
    var val = new ColorChooser_SetSelectedColor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.color =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ColorChooser_SetSelectedColor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ColorChooser_SetSelectedColor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.color);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ColorChooserClient_DidChooseColor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ColorChooserClient_DidChooseColor_Params.prototype.initDefaults_ = function() {
    this.color = 0;
  };
  ColorChooserClient_DidChooseColor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ColorChooserClient_DidChooseColor_Params.validate = function(messageValidator, offset) {
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

  ColorChooserClient_DidChooseColor_Params.encodedSize = codec.kStructHeaderSize + 8;

  ColorChooserClient_DidChooseColor_Params.decode = function(decoder) {
    var packed;
    var val = new ColorChooserClient_DidChooseColor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.color =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ColorChooserClient_DidChooseColor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ColorChooserClient_DidChooseColor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.color);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function EyeDropperChooser_Choose_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EyeDropperChooser_Choose_Params.prototype.initDefaults_ = function() {
  };
  EyeDropperChooser_Choose_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EyeDropperChooser_Choose_Params.validate = function(messageValidator, offset) {
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

  EyeDropperChooser_Choose_Params.encodedSize = codec.kStructHeaderSize + 0;

  EyeDropperChooser_Choose_Params.decode = function(decoder) {
    var packed;
    var val = new EyeDropperChooser_Choose_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  EyeDropperChooser_Choose_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EyeDropperChooser_Choose_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function EyeDropperChooser_Choose_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EyeDropperChooser_Choose_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
    this.color = 0;
  };
  EyeDropperChooser_Choose_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EyeDropperChooser_Choose_ResponseParams.validate = function(messageValidator, offset) {
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

  EyeDropperChooser_Choose_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  EyeDropperChooser_Choose_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new EyeDropperChooser_Choose_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.color =
        decoder.decodeStruct(codec.Uint32);
    return val;
  };

  EyeDropperChooser_Choose_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EyeDropperChooser_Choose_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.color);
  };

  function ColorChooserFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ColorChooserFactory,
                                                   handleOrPtrInfo);
  }

  function ColorChooserFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ColorChooserFactory, associatedInterfacePtrInfo);
  }

  ColorChooserFactoryAssociatedPtr.prototype =
      Object.create(ColorChooserFactoryPtr.prototype);
  ColorChooserFactoryAssociatedPtr.prototype.constructor =
      ColorChooserFactoryAssociatedPtr;

  function ColorChooserFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }

  function ColorChooserFactoryStub(delegate) {
    this.delegate_ = delegate;
  }

  ColorChooserFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ColorChooserFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateColorChooserFactoryRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateColorChooserFactoryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ColorChooserFactory = {
    name: 'blink.mojom.ColorChooserFactory',
    kVersion: 0,
    ptrClass: ColorChooserFactoryPtr,
    proxyClass: ColorChooserFactoryProxy,
    stubClass: ColorChooserFactoryStub,
    validateRequest: validateColorChooserFactoryRequest,
    validateResponse: null,
  };
  ColorChooserFactoryStub.prototype.validator = validateColorChooserFactoryRequest;
  ColorChooserFactoryProxy.prototype.validator = null;
  var kColorChooser_SetSelectedColor_Name = 0;

  function ColorChooserPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ColorChooser,
                                                   handleOrPtrInfo);
  }

  function ColorChooserAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ColorChooser, associatedInterfacePtrInfo);
  }

  ColorChooserAssociatedPtr.prototype =
      Object.create(ColorChooserPtr.prototype);
  ColorChooserAssociatedPtr.prototype.constructor =
      ColorChooserAssociatedPtr;

  function ColorChooserProxy(receiver) {
    this.receiver_ = receiver;
  }
  ColorChooserPtr.prototype.setSelectedColor = function() {
    return ColorChooserProxy.prototype.setSelectedColor
        .apply(this.ptr.getProxy(), arguments);
  };

  ColorChooserProxy.prototype.setSelectedColor = function(color) {
    var params_ = new ColorChooser_SetSelectedColor_Params();
    params_.color = color;
    var builder = new codec.MessageV0Builder(
        kColorChooser_SetSelectedColor_Name,
        codec.align(ColorChooser_SetSelectedColor_Params.encodedSize));
    builder.encodeStruct(ColorChooser_SetSelectedColor_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ColorChooserStub(delegate) {
    this.delegate_ = delegate;
  }
  ColorChooserStub.prototype.setSelectedColor = function(color) {
    return this.delegate_ && this.delegate_.setSelectedColor && this.delegate_.setSelectedColor(color);
  }

  ColorChooserStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kColorChooser_SetSelectedColor_Name:
      var params = reader.decodeStruct(ColorChooser_SetSelectedColor_Params);
      this.setSelectedColor(params.color);
      return true;
    default:
      return false;
    }
  };

  ColorChooserStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateColorChooserRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kColorChooser_SetSelectedColor_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ColorChooser_SetSelectedColor_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateColorChooserResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ColorChooser = {
    name: 'blink.mojom.ColorChooser',
    kVersion: 0,
    ptrClass: ColorChooserPtr,
    proxyClass: ColorChooserProxy,
    stubClass: ColorChooserStub,
    validateRequest: validateColorChooserRequest,
    validateResponse: null,
  };
  ColorChooserStub.prototype.validator = validateColorChooserRequest;
  ColorChooserProxy.prototype.validator = null;
  var kColorChooserClient_DidChooseColor_Name = 0;

  function ColorChooserClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ColorChooserClient,
                                                   handleOrPtrInfo);
  }

  function ColorChooserClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ColorChooserClient, associatedInterfacePtrInfo);
  }

  ColorChooserClientAssociatedPtr.prototype =
      Object.create(ColorChooserClientPtr.prototype);
  ColorChooserClientAssociatedPtr.prototype.constructor =
      ColorChooserClientAssociatedPtr;

  function ColorChooserClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  ColorChooserClientPtr.prototype.didChooseColor = function() {
    return ColorChooserClientProxy.prototype.didChooseColor
        .apply(this.ptr.getProxy(), arguments);
  };

  ColorChooserClientProxy.prototype.didChooseColor = function(color) {
    var params_ = new ColorChooserClient_DidChooseColor_Params();
    params_.color = color;
    var builder = new codec.MessageV0Builder(
        kColorChooserClient_DidChooseColor_Name,
        codec.align(ColorChooserClient_DidChooseColor_Params.encodedSize));
    builder.encodeStruct(ColorChooserClient_DidChooseColor_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ColorChooserClientStub(delegate) {
    this.delegate_ = delegate;
  }
  ColorChooserClientStub.prototype.didChooseColor = function(color) {
    return this.delegate_ && this.delegate_.didChooseColor && this.delegate_.didChooseColor(color);
  }

  ColorChooserClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kColorChooserClient_DidChooseColor_Name:
      var params = reader.decodeStruct(ColorChooserClient_DidChooseColor_Params);
      this.didChooseColor(params.color);
      return true;
    default:
      return false;
    }
  };

  ColorChooserClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateColorChooserClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kColorChooserClient_DidChooseColor_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ColorChooserClient_DidChooseColor_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateColorChooserClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ColorChooserClient = {
    name: 'blink.mojom.ColorChooserClient',
    kVersion: 0,
    ptrClass: ColorChooserClientPtr,
    proxyClass: ColorChooserClientProxy,
    stubClass: ColorChooserClientStub,
    validateRequest: validateColorChooserClientRequest,
    validateResponse: null,
  };
  ColorChooserClientStub.prototype.validator = validateColorChooserClientRequest;
  ColorChooserClientProxy.prototype.validator = null;
  var kEyeDropperChooser_Choose_Name = 0;

  function EyeDropperChooserPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(EyeDropperChooser,
                                                   handleOrPtrInfo);
  }

  function EyeDropperChooserAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        EyeDropperChooser, associatedInterfacePtrInfo);
  }

  EyeDropperChooserAssociatedPtr.prototype =
      Object.create(EyeDropperChooserPtr.prototype);
  EyeDropperChooserAssociatedPtr.prototype.constructor =
      EyeDropperChooserAssociatedPtr;

  function EyeDropperChooserProxy(receiver) {
    this.receiver_ = receiver;
  }
  EyeDropperChooserPtr.prototype.choose = function() {
    return EyeDropperChooserProxy.prototype.choose
        .apply(this.ptr.getProxy(), arguments);
  };

  EyeDropperChooserProxy.prototype.choose = function() {
    var params_ = new EyeDropperChooser_Choose_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kEyeDropperChooser_Choose_Name,
          codec.align(EyeDropperChooser_Choose_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(EyeDropperChooser_Choose_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(EyeDropperChooser_Choose_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function EyeDropperChooserStub(delegate) {
    this.delegate_ = delegate;
  }
  EyeDropperChooserStub.prototype.choose = function() {
    return this.delegate_ && this.delegate_.choose && this.delegate_.choose();
  }

  EyeDropperChooserStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  EyeDropperChooserStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kEyeDropperChooser_Choose_Name:
      var params = reader.decodeStruct(EyeDropperChooser_Choose_Params);
      this.choose().then(function(response) {
        var responseParams =
            new EyeDropperChooser_Choose_ResponseParams();
        responseParams.success = response.success;
        responseParams.color = response.color;
        var builder = new codec.MessageV1Builder(
            kEyeDropperChooser_Choose_Name,
            codec.align(EyeDropperChooser_Choose_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(EyeDropperChooser_Choose_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateEyeDropperChooserRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kEyeDropperChooser_Choose_Name:
        if (message.expectsResponse())
          paramsClass = EyeDropperChooser_Choose_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateEyeDropperChooserResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kEyeDropperChooser_Choose_Name:
        if (message.isResponse())
          paramsClass = EyeDropperChooser_Choose_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var EyeDropperChooser = {
    name: 'blink.mojom.EyeDropperChooser',
    kVersion: 0,
    ptrClass: EyeDropperChooserPtr,
    proxyClass: EyeDropperChooserProxy,
    stubClass: EyeDropperChooserStub,
    validateRequest: validateEyeDropperChooserRequest,
    validateResponse: validateEyeDropperChooserResponse,
  };
  EyeDropperChooserStub.prototype.validator = validateEyeDropperChooserRequest;
  EyeDropperChooserProxy.prototype.validator = validateEyeDropperChooserResponse;
  exports.ColorSuggestion = ColorSuggestion;
  exports.ColorChooserFactory = ColorChooserFactory;
  exports.ColorChooserFactoryPtr = ColorChooserFactoryPtr;
  exports.ColorChooserFactoryAssociatedPtr = ColorChooserFactoryAssociatedPtr;
  exports.ColorChooser = ColorChooser;
  exports.ColorChooserPtr = ColorChooserPtr;
  exports.ColorChooserAssociatedPtr = ColorChooserAssociatedPtr;
  exports.ColorChooserClient = ColorChooserClient;
  exports.ColorChooserClientPtr = ColorChooserClientPtr;
  exports.ColorChooserClientAssociatedPtr = ColorChooserClientAssociatedPtr;
  exports.EyeDropperChooser = EyeDropperChooser;
  exports.EyeDropperChooserPtr = EyeDropperChooserPtr;
  exports.EyeDropperChooserAssociatedPtr = EyeDropperChooserAssociatedPtr;
})();