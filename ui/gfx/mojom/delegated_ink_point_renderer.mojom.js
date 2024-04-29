// ui/gfx/mojom/delegated_ink_point_renderer.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/delegated_ink_point_renderer.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gfx.mojom');
  var delegated_ink_point$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/delegated_ink_point.mojom', 'delegated_ink_point.mojom.js');
  }



  function DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.prototype.initDefaults_ = function() {
    this.point = null;
  };
  DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.validate = function(messageValidator, offset) {
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


    // validate DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.point
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, delegated_ink_point$.DelegatedInkPoint, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.encodedSize = codec.kStructHeaderSize + 8;

  DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.decode = function(decoder) {
    var packed;
    var val = new DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.point =
        decoder.decodeStructPointer(delegated_ink_point$.DelegatedInkPoint);
    return val;
  };

  DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(delegated_ink_point$.DelegatedInkPoint, val.point);
  };
  function DelegatedInkPointRenderer_ResetPrediction_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DelegatedInkPointRenderer_ResetPrediction_Params.prototype.initDefaults_ = function() {
  };
  DelegatedInkPointRenderer_ResetPrediction_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DelegatedInkPointRenderer_ResetPrediction_Params.validate = function(messageValidator, offset) {
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

  DelegatedInkPointRenderer_ResetPrediction_Params.encodedSize = codec.kStructHeaderSize + 0;

  DelegatedInkPointRenderer_ResetPrediction_Params.decode = function(decoder) {
    var packed;
    var val = new DelegatedInkPointRenderer_ResetPrediction_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  DelegatedInkPointRenderer_ResetPrediction_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DelegatedInkPointRenderer_ResetPrediction_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kDelegatedInkPointRenderer_StoreDelegatedInkPoint_Name = 1043368158;
  var kDelegatedInkPointRenderer_ResetPrediction_Name = 1613405403;

  function DelegatedInkPointRendererPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DelegatedInkPointRenderer,
                                                   handleOrPtrInfo);
  }

  function DelegatedInkPointRendererAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DelegatedInkPointRenderer, associatedInterfacePtrInfo);
  }

  DelegatedInkPointRendererAssociatedPtr.prototype =
      Object.create(DelegatedInkPointRendererPtr.prototype);
  DelegatedInkPointRendererAssociatedPtr.prototype.constructor =
      DelegatedInkPointRendererAssociatedPtr;

  function DelegatedInkPointRendererProxy(receiver) {
    this.receiver_ = receiver;
  }
  DelegatedInkPointRendererPtr.prototype.storeDelegatedInkPoint = function() {
    return DelegatedInkPointRendererProxy.prototype.storeDelegatedInkPoint
        .apply(this.ptr.getProxy(), arguments);
  };

  DelegatedInkPointRendererProxy.prototype.storeDelegatedInkPoint = function(point) {
    var params_ = new DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params();
    params_.point = point;
    var builder = new codec.MessageV0Builder(
        kDelegatedInkPointRenderer_StoreDelegatedInkPoint_Name,
        codec.align(DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params.encodedSize));
    builder.encodeStruct(DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DelegatedInkPointRendererPtr.prototype.resetPrediction = function() {
    return DelegatedInkPointRendererProxy.prototype.resetPrediction
        .apply(this.ptr.getProxy(), arguments);
  };

  DelegatedInkPointRendererProxy.prototype.resetPrediction = function() {
    var params_ = new DelegatedInkPointRenderer_ResetPrediction_Params();
    var builder = new codec.MessageV0Builder(
        kDelegatedInkPointRenderer_ResetPrediction_Name,
        codec.align(DelegatedInkPointRenderer_ResetPrediction_Params.encodedSize));
    builder.encodeStruct(DelegatedInkPointRenderer_ResetPrediction_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DelegatedInkPointRendererStub(delegate) {
    this.delegate_ = delegate;
  }
  DelegatedInkPointRendererStub.prototype.storeDelegatedInkPoint = function(point) {
    return this.delegate_ && this.delegate_.storeDelegatedInkPoint && this.delegate_.storeDelegatedInkPoint(point);
  }
  DelegatedInkPointRendererStub.prototype.resetPrediction = function() {
    return this.delegate_ && this.delegate_.resetPrediction && this.delegate_.resetPrediction();
  }

  DelegatedInkPointRendererStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDelegatedInkPointRenderer_StoreDelegatedInkPoint_Name:
      var params = reader.decodeStruct(DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params);
      this.storeDelegatedInkPoint(params.point);
      return true;
    case kDelegatedInkPointRenderer_ResetPrediction_Name:
      var params = reader.decodeStruct(DelegatedInkPointRenderer_ResetPrediction_Params);
      this.resetPrediction();
      return true;
    default:
      return false;
    }
  };

  DelegatedInkPointRendererStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDelegatedInkPointRendererRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDelegatedInkPointRenderer_StoreDelegatedInkPoint_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DelegatedInkPointRenderer_StoreDelegatedInkPoint_Params;
      break;
      case kDelegatedInkPointRenderer_ResetPrediction_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DelegatedInkPointRenderer_ResetPrediction_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDelegatedInkPointRendererResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DelegatedInkPointRenderer = {
    name: 'gfx.mojom.DelegatedInkPointRenderer',
    kVersion: 0,
    ptrClass: DelegatedInkPointRendererPtr,
    proxyClass: DelegatedInkPointRendererProxy,
    stubClass: DelegatedInkPointRendererStub,
    validateRequest: validateDelegatedInkPointRendererRequest,
    validateResponse: null,
  };
  DelegatedInkPointRendererStub.prototype.validator = validateDelegatedInkPointRendererRequest;
  DelegatedInkPointRendererProxy.prototype.validator = null;
  exports.DelegatedInkPointRenderer = DelegatedInkPointRenderer;
  exports.DelegatedInkPointRendererPtr = DelegatedInkPointRendererPtr;
  exports.DelegatedInkPointRendererAssociatedPtr = DelegatedInkPointRendererAssociatedPtr;
})();