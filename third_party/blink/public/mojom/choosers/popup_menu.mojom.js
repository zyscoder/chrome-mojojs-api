// third_party/blink/public/mojom/choosers/popup_menu.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/choosers/popup_menu.mojom';
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
  var text_direction$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/text_direction.mojom', '../../../../../mojo/public/mojom/base/text_direction.mojom.js');
  }



  function MenuItem(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  MenuItem.Type = {};
  MenuItem.Type.kOption = 0;
  MenuItem.Type.kCheckableOption = 1;
  MenuItem.Type.kGroup = 2;
  MenuItem.Type.kSeparator = 3;
  MenuItem.Type.kSubMenu = 4;
  MenuItem.Type.MIN_VALUE = 0;
  MenuItem.Type.MAX_VALUE = 4;

  MenuItem.Type.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  MenuItem.Type.toKnownEnumValue = function(value) {
    return value;
  };

  MenuItem.Type.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  MenuItem.prototype.initDefaults_ = function() {
    this.label = null;
    this.toolTip = null;
    this.type = MenuItem.Type.kOption;
    this.action = 0;
    this.textDirection = text_direction$.TextDirection.LEFT_TO_RIGHT;
    this.hasTextDirectionOverride = false;
    this.enabled = false;
    this.checked = false;
  };
  MenuItem.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MenuItem.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MenuItem.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MenuItem.toolTip
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate MenuItem.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, MenuItem.Type);
    if (err !== validator.validationError.NONE)
        return err;



    // validate MenuItem.textDirection
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, text_direction$.TextDirection);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  MenuItem.encodedSize = codec.kStructHeaderSize + 32;

  MenuItem.decode = function(decoder) {
    var packed;
    var val = new MenuItem();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.label =
        decoder.decodeStruct(codec.NullableString);
    val.toolTip =
        decoder.decodeStruct(codec.NullableString);
    val.type =
        decoder.decodeStruct(new codec.Enum(MenuItem.Type));
    val.action =
        decoder.decodeStruct(codec.Uint32);
    val.textDirection =
        decoder.decodeStruct(new codec.Enum(text_direction$.TextDirection));
    packed = decoder.readUint8();
    val.hasTextDirectionOverride = (packed >> 0) & 1 ? true : false;
    val.enabled = (packed >> 1) & 1 ? true : false;
    val.checked = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  MenuItem.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MenuItem.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.label);
    encoder.encodeStruct(codec.NullableString, val.toolTip);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Uint32, val.action);
    encoder.encodeStruct(codec.Int32, val.textDirection);
    packed = 0;
    packed |= (val.hasTextDirectionOverride & 1) << 0
    packed |= (val.enabled & 1) << 1
    packed |= (val.checked & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PopupMenuClient_DidAcceptIndices_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PopupMenuClient_DidAcceptIndices_Params.prototype.initDefaults_ = function() {
    this.indices = null;
  };
  PopupMenuClient_DidAcceptIndices_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PopupMenuClient_DidAcceptIndices_Params.validate = function(messageValidator, offset) {
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


    // validate PopupMenuClient_DidAcceptIndices_Params.indices
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Int32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PopupMenuClient_DidAcceptIndices_Params.encodedSize = codec.kStructHeaderSize + 8;

  PopupMenuClient_DidAcceptIndices_Params.decode = function(decoder) {
    var packed;
    var val = new PopupMenuClient_DidAcceptIndices_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.indices =
        decoder.decodeArrayPointer(codec.Int32);
    return val;
  };

  PopupMenuClient_DidAcceptIndices_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PopupMenuClient_DidAcceptIndices_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Int32, val.indices);
  };
  function PopupMenuClient_DidCancel_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PopupMenuClient_DidCancel_Params.prototype.initDefaults_ = function() {
  };
  PopupMenuClient_DidCancel_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PopupMenuClient_DidCancel_Params.validate = function(messageValidator, offset) {
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

  PopupMenuClient_DidCancel_Params.encodedSize = codec.kStructHeaderSize + 0;

  PopupMenuClient_DidCancel_Params.decode = function(decoder) {
    var packed;
    var val = new PopupMenuClient_DidCancel_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PopupMenuClient_DidCancel_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PopupMenuClient_DidCancel_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kPopupMenuClient_DidAcceptIndices_Name = 0;
  var kPopupMenuClient_DidCancel_Name = 1;

  function PopupMenuClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PopupMenuClient,
                                                   handleOrPtrInfo);
  }

  function PopupMenuClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PopupMenuClient, associatedInterfacePtrInfo);
  }

  PopupMenuClientAssociatedPtr.prototype =
      Object.create(PopupMenuClientPtr.prototype);
  PopupMenuClientAssociatedPtr.prototype.constructor =
      PopupMenuClientAssociatedPtr;

  function PopupMenuClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  PopupMenuClientPtr.prototype.didAcceptIndices = function() {
    return PopupMenuClientProxy.prototype.didAcceptIndices
        .apply(this.ptr.getProxy(), arguments);
  };

  PopupMenuClientProxy.prototype.didAcceptIndices = function(indices) {
    var params_ = new PopupMenuClient_DidAcceptIndices_Params();
    params_.indices = indices;
    var builder = new codec.MessageV0Builder(
        kPopupMenuClient_DidAcceptIndices_Name,
        codec.align(PopupMenuClient_DidAcceptIndices_Params.encodedSize));
    builder.encodeStruct(PopupMenuClient_DidAcceptIndices_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PopupMenuClientPtr.prototype.didCancel = function() {
    return PopupMenuClientProxy.prototype.didCancel
        .apply(this.ptr.getProxy(), arguments);
  };

  PopupMenuClientProxy.prototype.didCancel = function() {
    var params_ = new PopupMenuClient_DidCancel_Params();
    var builder = new codec.MessageV0Builder(
        kPopupMenuClient_DidCancel_Name,
        codec.align(PopupMenuClient_DidCancel_Params.encodedSize));
    builder.encodeStruct(PopupMenuClient_DidCancel_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PopupMenuClientStub(delegate) {
    this.delegate_ = delegate;
  }
  PopupMenuClientStub.prototype.didAcceptIndices = function(indices) {
    return this.delegate_ && this.delegate_.didAcceptIndices && this.delegate_.didAcceptIndices(indices);
  }
  PopupMenuClientStub.prototype.didCancel = function() {
    return this.delegate_ && this.delegate_.didCancel && this.delegate_.didCancel();
  }

  PopupMenuClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPopupMenuClient_DidAcceptIndices_Name:
      var params = reader.decodeStruct(PopupMenuClient_DidAcceptIndices_Params);
      this.didAcceptIndices(params.indices);
      return true;
    case kPopupMenuClient_DidCancel_Name:
      var params = reader.decodeStruct(PopupMenuClient_DidCancel_Params);
      this.didCancel();
      return true;
    default:
      return false;
    }
  };

  PopupMenuClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePopupMenuClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPopupMenuClient_DidAcceptIndices_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PopupMenuClient_DidAcceptIndices_Params;
      break;
      case kPopupMenuClient_DidCancel_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PopupMenuClient_DidCancel_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePopupMenuClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PopupMenuClient = {
    name: 'blink.mojom.PopupMenuClient',
    kVersion: 0,
    ptrClass: PopupMenuClientPtr,
    proxyClass: PopupMenuClientProxy,
    stubClass: PopupMenuClientStub,
    validateRequest: validatePopupMenuClientRequest,
    validateResponse: null,
  };
  PopupMenuClientStub.prototype.validator = validatePopupMenuClientRequest;
  PopupMenuClientProxy.prototype.validator = null;
  exports.MenuItem = MenuItem;
  exports.PopupMenuClient = PopupMenuClient;
  exports.PopupMenuClientPtr = PopupMenuClientPtr;
  exports.PopupMenuClientAssociatedPtr = PopupMenuClientAssociatedPtr;
})();