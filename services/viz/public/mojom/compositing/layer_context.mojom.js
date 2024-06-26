// services/viz/public/mojom/compositing/layer_context.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/layer_context.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('viz.mojom');
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var begin_frame_args$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/begin_frame_args.mojom', 'begin_frame_args.mojom.js');
  }
  var local_surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/local_surface_id.mojom', 'local_surface_id.mojom.js');
  }



  function LayerTreeUpdate(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LayerTreeUpdate.prototype.initDefaults_ = function() {
    this.deviceViewport = null;
    this.deviceScaleFactor = 0;
    this.localSurfaceIdFromParent = null;
  };
  LayerTreeUpdate.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LayerTreeUpdate.validate = function(messageValidator, offset) {
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


    // validate LayerTreeUpdate.deviceViewport
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate LayerTreeUpdate.localSurfaceIdFromParent
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, local_surface_id$.LocalSurfaceId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LayerTreeUpdate.encodedSize = codec.kStructHeaderSize + 24;

  LayerTreeUpdate.decode = function(decoder) {
    var packed;
    var val = new LayerTreeUpdate();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceViewport =
        decoder.decodeStructPointer(geometry$.Rect);
    val.deviceScaleFactor =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.localSurfaceIdFromParent =
        decoder.decodeStructPointer(local_surface_id$.LocalSurfaceId);
    return val;
  };

  LayerTreeUpdate.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LayerTreeUpdate.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Rect, val.deviceViewport);
    encoder.encodeStruct(codec.Float, val.deviceScaleFactor);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(local_surface_id$.LocalSurfaceId, val.localSurfaceIdFromParent);
  };
  function PendingLayerContext(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PendingLayerContext.prototype.initDefaults_ = function() {
    this.receiver = new associatedBindings.AssociatedInterfaceRequest();
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  PendingLayerContext.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PendingLayerContext.validate = function(messageValidator, offset) {
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


    // validate PendingLayerContext.receiver
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PendingLayerContext.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PendingLayerContext.encodedSize = codec.kStructHeaderSize + 16;

  PendingLayerContext.decode = function(decoder) {
    var packed;
    var val = new PendingLayerContext();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    val.client =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PendingLayerContext.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PendingLayerContext.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.receiver);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function LayerContext_SetTargetLocalSurfaceId_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LayerContext_SetTargetLocalSurfaceId_Params.prototype.initDefaults_ = function() {
    this.id = null;
  };
  LayerContext_SetTargetLocalSurfaceId_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LayerContext_SetTargetLocalSurfaceId_Params.validate = function(messageValidator, offset) {
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


    // validate LayerContext_SetTargetLocalSurfaceId_Params.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, local_surface_id$.LocalSurfaceId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LayerContext_SetTargetLocalSurfaceId_Params.encodedSize = codec.kStructHeaderSize + 8;

  LayerContext_SetTargetLocalSurfaceId_Params.decode = function(decoder) {
    var packed;
    var val = new LayerContext_SetTargetLocalSurfaceId_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(local_surface_id$.LocalSurfaceId);
    return val;
  };

  LayerContext_SetTargetLocalSurfaceId_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LayerContext_SetTargetLocalSurfaceId_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(local_surface_id$.LocalSurfaceId, val.id);
  };
  function LayerContext_SetVisible_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LayerContext_SetVisible_Params.prototype.initDefaults_ = function() {
    this.visible = false;
  };
  LayerContext_SetVisible_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LayerContext_SetVisible_Params.validate = function(messageValidator, offset) {
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

  LayerContext_SetVisible_Params.encodedSize = codec.kStructHeaderSize + 8;

  LayerContext_SetVisible_Params.decode = function(decoder) {
    var packed;
    var val = new LayerContext_SetVisible_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.visible = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  LayerContext_SetVisible_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LayerContext_SetVisible_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.visible & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function LayerContext_Commit_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LayerContext_Commit_Params.prototype.initDefaults_ = function() {
    this.update = null;
  };
  LayerContext_Commit_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LayerContext_Commit_Params.validate = function(messageValidator, offset) {
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


    // validate LayerContext_Commit_Params.update
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, LayerTreeUpdate, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LayerContext_Commit_Params.encodedSize = codec.kStructHeaderSize + 8;

  LayerContext_Commit_Params.decode = function(decoder) {
    var packed;
    var val = new LayerContext_Commit_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.update =
        decoder.decodeStructPointer(LayerTreeUpdate);
    return val;
  };

  LayerContext_Commit_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LayerContext_Commit_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(LayerTreeUpdate, val.update);
  };
  function LayerContextClient_OnRequestCommitForFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LayerContextClient_OnRequestCommitForFrame_Params.prototype.initDefaults_ = function() {
    this.args = null;
  };
  LayerContextClient_OnRequestCommitForFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LayerContextClient_OnRequestCommitForFrame_Params.validate = function(messageValidator, offset) {
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


    // validate LayerContextClient_OnRequestCommitForFrame_Params.args
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, begin_frame_args$.BeginFrameArgs, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LayerContextClient_OnRequestCommitForFrame_Params.encodedSize = codec.kStructHeaderSize + 8;

  LayerContextClient_OnRequestCommitForFrame_Params.decode = function(decoder) {
    var packed;
    var val = new LayerContextClient_OnRequestCommitForFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.args =
        decoder.decodeStructPointer(begin_frame_args$.BeginFrameArgs);
    return val;
  };

  LayerContextClient_OnRequestCommitForFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LayerContextClient_OnRequestCommitForFrame_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(begin_frame_args$.BeginFrameArgs, val.args);
  };
  var kLayerContext_SetTargetLocalSurfaceId_Name = 1044136504;
  var kLayerContext_SetVisible_Name = 154543537;
  var kLayerContext_Commit_Name = 1733443131;

  function LayerContextPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(LayerContext,
                                                   handleOrPtrInfo);
  }

  function LayerContextAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        LayerContext, associatedInterfacePtrInfo);
  }

  LayerContextAssociatedPtr.prototype =
      Object.create(LayerContextPtr.prototype);
  LayerContextAssociatedPtr.prototype.constructor =
      LayerContextAssociatedPtr;

  function LayerContextProxy(receiver) {
    this.receiver_ = receiver;
  }
  LayerContextPtr.prototype.setTargetLocalSurfaceId = function() {
    return LayerContextProxy.prototype.setTargetLocalSurfaceId
        .apply(this.ptr.getProxy(), arguments);
  };

  LayerContextProxy.prototype.setTargetLocalSurfaceId = function(id) {
    var params_ = new LayerContext_SetTargetLocalSurfaceId_Params();
    params_.id = id;
    var builder = new codec.MessageV0Builder(
        kLayerContext_SetTargetLocalSurfaceId_Name,
        codec.align(LayerContext_SetTargetLocalSurfaceId_Params.encodedSize));
    builder.encodeStruct(LayerContext_SetTargetLocalSurfaceId_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LayerContextPtr.prototype.setVisible = function() {
    return LayerContextProxy.prototype.setVisible
        .apply(this.ptr.getProxy(), arguments);
  };

  LayerContextProxy.prototype.setVisible = function(visible) {
    var params_ = new LayerContext_SetVisible_Params();
    params_.visible = visible;
    var builder = new codec.MessageV0Builder(
        kLayerContext_SetVisible_Name,
        codec.align(LayerContext_SetVisible_Params.encodedSize));
    builder.encodeStruct(LayerContext_SetVisible_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LayerContextPtr.prototype.commit = function() {
    return LayerContextProxy.prototype.commit
        .apply(this.ptr.getProxy(), arguments);
  };

  LayerContextProxy.prototype.commit = function(update) {
    var params_ = new LayerContext_Commit_Params();
    params_.update = update;
    var builder = new codec.MessageV0Builder(
        kLayerContext_Commit_Name,
        codec.align(LayerContext_Commit_Params.encodedSize));
    builder.encodeStruct(LayerContext_Commit_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function LayerContextStub(delegate) {
    this.delegate_ = delegate;
  }
  LayerContextStub.prototype.setTargetLocalSurfaceId = function(id) {
    return this.delegate_ && this.delegate_.setTargetLocalSurfaceId && this.delegate_.setTargetLocalSurfaceId(id);
  }
  LayerContextStub.prototype.setVisible = function(visible) {
    return this.delegate_ && this.delegate_.setVisible && this.delegate_.setVisible(visible);
  }
  LayerContextStub.prototype.commit = function(update) {
    return this.delegate_ && this.delegate_.commit && this.delegate_.commit(update);
  }

  LayerContextStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLayerContext_SetTargetLocalSurfaceId_Name:
      var params = reader.decodeStruct(LayerContext_SetTargetLocalSurfaceId_Params);
      this.setTargetLocalSurfaceId(params.id);
      return true;
    case kLayerContext_SetVisible_Name:
      var params = reader.decodeStruct(LayerContext_SetVisible_Params);
      this.setVisible(params.visible);
      return true;
    case kLayerContext_Commit_Name:
      var params = reader.decodeStruct(LayerContext_Commit_Params);
      this.commit(params.update);
      return true;
    default:
      return false;
    }
  };

  LayerContextStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateLayerContextRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLayerContext_SetTargetLocalSurfaceId_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LayerContext_SetTargetLocalSurfaceId_Params;
      break;
      case kLayerContext_SetVisible_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LayerContext_SetVisible_Params;
      break;
      case kLayerContext_Commit_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LayerContext_Commit_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLayerContextResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var LayerContext = {
    name: 'viz.mojom.LayerContext',
    kVersion: 0,
    ptrClass: LayerContextPtr,
    proxyClass: LayerContextProxy,
    stubClass: LayerContextStub,
    validateRequest: validateLayerContextRequest,
    validateResponse: null,
  };
  LayerContextStub.prototype.validator = validateLayerContextRequest;
  LayerContextProxy.prototype.validator = null;
  var kLayerContextClient_OnRequestCommitForFrame_Name = 504027399;

  function LayerContextClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(LayerContextClient,
                                                   handleOrPtrInfo);
  }

  function LayerContextClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        LayerContextClient, associatedInterfacePtrInfo);
  }

  LayerContextClientAssociatedPtr.prototype =
      Object.create(LayerContextClientPtr.prototype);
  LayerContextClientAssociatedPtr.prototype.constructor =
      LayerContextClientAssociatedPtr;

  function LayerContextClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  LayerContextClientPtr.prototype.onRequestCommitForFrame = function() {
    return LayerContextClientProxy.prototype.onRequestCommitForFrame
        .apply(this.ptr.getProxy(), arguments);
  };

  LayerContextClientProxy.prototype.onRequestCommitForFrame = function(args) {
    var params_ = new LayerContextClient_OnRequestCommitForFrame_Params();
    params_.args = args;
    var builder = new codec.MessageV0Builder(
        kLayerContextClient_OnRequestCommitForFrame_Name,
        codec.align(LayerContextClient_OnRequestCommitForFrame_Params.encodedSize));
    builder.encodeStruct(LayerContextClient_OnRequestCommitForFrame_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function LayerContextClientStub(delegate) {
    this.delegate_ = delegate;
  }
  LayerContextClientStub.prototype.onRequestCommitForFrame = function(args) {
    return this.delegate_ && this.delegate_.onRequestCommitForFrame && this.delegate_.onRequestCommitForFrame(args);
  }

  LayerContextClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLayerContextClient_OnRequestCommitForFrame_Name:
      var params = reader.decodeStruct(LayerContextClient_OnRequestCommitForFrame_Params);
      this.onRequestCommitForFrame(params.args);
      return true;
    default:
      return false;
    }
  };

  LayerContextClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateLayerContextClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLayerContextClient_OnRequestCommitForFrame_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LayerContextClient_OnRequestCommitForFrame_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLayerContextClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var LayerContextClient = {
    name: 'viz.mojom.LayerContextClient',
    kVersion: 0,
    ptrClass: LayerContextClientPtr,
    proxyClass: LayerContextClientProxy,
    stubClass: LayerContextClientStub,
    validateRequest: validateLayerContextClientRequest,
    validateResponse: null,
  };
  LayerContextClientStub.prototype.validator = validateLayerContextClientRequest;
  LayerContextClientProxy.prototype.validator = null;
  exports.LayerTreeUpdate = LayerTreeUpdate;
  exports.PendingLayerContext = PendingLayerContext;
  exports.LayerContext = LayerContext;
  exports.LayerContextPtr = LayerContextPtr;
  exports.LayerContextAssociatedPtr = LayerContextAssociatedPtr;
  exports.LayerContextClient = LayerContextClient;
  exports.LayerContextClientPtr = LayerContextClientPtr;
  exports.LayerContextClientAssociatedPtr = LayerContextClientAssociatedPtr;
})();