// cc/mojom/render_frame_metadata.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'cc/mojom/render_frame_metadata.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('cc.mojom');
  var local_surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/local_surface_id.mojom', '../../services/viz/public/mojom/compositing/local_surface_id.mojom.js');
  }
  var selection$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/selection.mojom', '../../services/viz/public/mojom/compositing/selection.mojom.js');
  }
  var vertical_scroll_direction$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/vertical_scroll_direction.mojom', '../../services/viz/public/mojom/compositing/vertical_scroll_direction.mojom.js');
  }
  var skcolor4f$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/skcolor4f.mojom', '../../skia/public/mojom/skcolor4f.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }



  function DelegatedInkBrowserMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DelegatedInkBrowserMetadata.prototype.initDefaults_ = function() {
    this.delegatedInkIsHovering = false;
  };
  DelegatedInkBrowserMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DelegatedInkBrowserMetadata.validate = function(messageValidator, offset) {
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

  DelegatedInkBrowserMetadata.encodedSize = codec.kStructHeaderSize + 8;

  DelegatedInkBrowserMetadata.decode = function(decoder) {
    var packed;
    var val = new DelegatedInkBrowserMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.delegatedInkIsHovering = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DelegatedInkBrowserMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DelegatedInkBrowserMetadata.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.delegatedInkIsHovering & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RenderFrameMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderFrameMetadata.prototype.initDefaults_ = function() {
    this.rootBackgroundColor = null;
    this.rootScrollOffset = null;
    this.isScrollOffsetAtTop = false;
    this.isMobileOptimized = false;
    this.deviceScaleFactor = 0;
    this.selection = null;
    this.delegatedInkMetadata = null;
    this.viewportSizeInPixels = null;
    this.localSurfaceId = null;
    this.pageScaleFactor = 0;
    this.externalPageScaleFactor = 0;
    this.topControlsHeight = 0;
    this.topControlsShownRatio = 0;
    this.newVerticalScrollDirection = 0;
  };
  RenderFrameMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderFrameMetadata.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RenderFrameMetadata.rootBackgroundColor
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, skcolor4f$.SkColor4f, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RenderFrameMetadata.rootScrollOffset
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.PointF, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate RenderFrameMetadata.selection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, selection$.Selection, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate RenderFrameMetadata.delegatedInkMetadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, DelegatedInkBrowserMetadata, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate RenderFrameMetadata.viewportSizeInPixels
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RenderFrameMetadata.localSurfaceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, local_surface_id$.LocalSurfaceId, true);
    if (err !== validator.validationError.NONE)
        return err;






    // validate RenderFrameMetadata.newVerticalScrollDirection
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 72, vertical_scroll_direction$.VerticalScrollDirection);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RenderFrameMetadata.encodedSize = codec.kStructHeaderSize + 80;

  RenderFrameMetadata.decode = function(decoder) {
    var packed;
    var val = new RenderFrameMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rootBackgroundColor =
        decoder.decodeStructPointer(skcolor4f$.SkColor4f);
    val.rootScrollOffset =
        decoder.decodeStructPointer(geometry$.PointF);
    packed = decoder.readUint8();
    val.isScrollOffsetAtTop = (packed >> 0) & 1 ? true : false;
    val.isMobileOptimized = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.deviceScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.selection =
        decoder.decodeStructPointer(selection$.Selection);
    val.delegatedInkMetadata =
        decoder.decodeStructPointer(DelegatedInkBrowserMetadata);
    val.viewportSizeInPixels =
        decoder.decodeStructPointer(geometry$.Size);
    val.localSurfaceId =
        decoder.decodeStructPointer(local_surface_id$.LocalSurfaceId);
    val.pageScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.externalPageScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.topControlsHeight =
        decoder.decodeStruct(codec.Float);
    val.topControlsShownRatio =
        decoder.decodeStruct(codec.Float);
    val.newVerticalScrollDirection =
        decoder.decodeStruct(new codec.Enum(vertical_scroll_direction$.VerticalScrollDirection));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RenderFrameMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderFrameMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(skcolor4f$.SkColor4f, val.rootBackgroundColor);
    encoder.encodeStructPointer(geometry$.PointF, val.rootScrollOffset);
    packed = 0;
    packed |= (val.isScrollOffsetAtTop & 1) << 0
    packed |= (val.isMobileOptimized & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.deviceScaleFactor);
    encoder.encodeStructPointer(selection$.Selection, val.selection);
    encoder.encodeStructPointer(DelegatedInkBrowserMetadata, val.delegatedInkMetadata);
    encoder.encodeStructPointer(geometry$.Size, val.viewportSizeInPixels);
    encoder.encodeStructPointer(local_surface_id$.LocalSurfaceId, val.localSurfaceId);
    encoder.encodeStruct(codec.Float, val.pageScaleFactor);
    encoder.encodeStruct(codec.Float, val.externalPageScaleFactor);
    encoder.encodeStruct(codec.Float, val.topControlsHeight);
    encoder.encodeStruct(codec.Float, val.topControlsShownRatio);
    encoder.encodeStruct(codec.Int32, val.newVerticalScrollDirection);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params.prototype.initDefaults_ = function() {
    this.enabled = false;
  };
  RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params.validate = function(messageValidator, offset) {
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

  RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params.encodedSize = codec.kStructHeaderSize + 8;

  RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.enabled = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.enabled & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.prototype.initDefaults_ = function() {
    this.frameToken = 0;
    this.metadata = null;
  };
  RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.validate = function(messageValidator, offset) {
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



    // validate RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.metadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, RenderFrameMetadata, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.encodedSize = codec.kStructHeaderSize + 16;

  RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.decode = function(decoder) {
    var packed;
    var val = new RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameToken =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.metadata =
        decoder.decodeStructPointer(RenderFrameMetadata);
    return val;
  };

  RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.frameToken);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(RenderFrameMetadata, val.metadata);
  };
  function RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params.prototype.initDefaults_ = function() {
    this.frameToken = 0;
  };
  RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params.validate = function(messageValidator, offset) {
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

  RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params.encodedSize = codec.kStructHeaderSize + 8;

  RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params.decode = function(decoder) {
    var packed;
    var val = new RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameToken =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.frameToken);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kRenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Name = 712852463;

  function RenderFrameMetadataObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RenderFrameMetadataObserver,
                                                   handleOrPtrInfo);
  }

  function RenderFrameMetadataObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RenderFrameMetadataObserver, associatedInterfacePtrInfo);
  }

  RenderFrameMetadataObserverAssociatedPtr.prototype =
      Object.create(RenderFrameMetadataObserverPtr.prototype);
  RenderFrameMetadataObserverAssociatedPtr.prototype.constructor =
      RenderFrameMetadataObserverAssociatedPtr;

  function RenderFrameMetadataObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  RenderFrameMetadataObserverPtr.prototype.reportAllFrameSubmissionsForTesting = function() {
    return RenderFrameMetadataObserverProxy.prototype.reportAllFrameSubmissionsForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  RenderFrameMetadataObserverProxy.prototype.reportAllFrameSubmissionsForTesting = function(enabled) {
    var params_ = new RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params();
    params_.enabled = enabled;
    var builder = new codec.MessageV0Builder(
        kRenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Name,
        codec.align(RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params.encodedSize));
    builder.encodeStruct(RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function RenderFrameMetadataObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  RenderFrameMetadataObserverStub.prototype.reportAllFrameSubmissionsForTesting = function(enabled) {
    return this.delegate_ && this.delegate_.reportAllFrameSubmissionsForTesting && this.delegate_.reportAllFrameSubmissionsForTesting(enabled);
  }

  RenderFrameMetadataObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Name:
      var params = reader.decodeStruct(RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params);
      this.reportAllFrameSubmissionsForTesting(params.enabled);
      return true;
    default:
      return false;
    }
  };

  RenderFrameMetadataObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateRenderFrameMetadataObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RenderFrameMetadataObserver_ReportAllFrameSubmissionsForTesting_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRenderFrameMetadataObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var RenderFrameMetadataObserver = {
    name: 'cc.mojom.RenderFrameMetadataObserver',
    kVersion: 0,
    ptrClass: RenderFrameMetadataObserverPtr,
    proxyClass: RenderFrameMetadataObserverProxy,
    stubClass: RenderFrameMetadataObserverStub,
    validateRequest: validateRenderFrameMetadataObserverRequest,
    validateResponse: null,
  };
  RenderFrameMetadataObserverStub.prototype.validator = validateRenderFrameMetadataObserverRequest;
  RenderFrameMetadataObserverProxy.prototype.validator = null;
  var kRenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Name = 1002433844;
  var kRenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Name = 1111313981;

  function RenderFrameMetadataObserverClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RenderFrameMetadataObserverClient,
                                                   handleOrPtrInfo);
  }

  function RenderFrameMetadataObserverClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RenderFrameMetadataObserverClient, associatedInterfacePtrInfo);
  }

  RenderFrameMetadataObserverClientAssociatedPtr.prototype =
      Object.create(RenderFrameMetadataObserverClientPtr.prototype);
  RenderFrameMetadataObserverClientAssociatedPtr.prototype.constructor =
      RenderFrameMetadataObserverClientAssociatedPtr;

  function RenderFrameMetadataObserverClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  RenderFrameMetadataObserverClientPtr.prototype.onRenderFrameMetadataChanged = function() {
    return RenderFrameMetadataObserverClientProxy.prototype.onRenderFrameMetadataChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  RenderFrameMetadataObserverClientProxy.prototype.onRenderFrameMetadataChanged = function(frameToken, metadata) {
    var params_ = new RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params();
    params_.frameToken = frameToken;
    params_.metadata = metadata;
    var builder = new codec.MessageV0Builder(
        kRenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Name,
        codec.align(RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params.encodedSize));
    builder.encodeStruct(RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RenderFrameMetadataObserverClientPtr.prototype.onFrameSubmissionForTesting = function() {
    return RenderFrameMetadataObserverClientProxy.prototype.onFrameSubmissionForTesting
        .apply(this.ptr.getProxy(), arguments);
  };

  RenderFrameMetadataObserverClientProxy.prototype.onFrameSubmissionForTesting = function(frameToken) {
    var params_ = new RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params();
    params_.frameToken = frameToken;
    var builder = new codec.MessageV0Builder(
        kRenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Name,
        codec.align(RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params.encodedSize));
    builder.encodeStruct(RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function RenderFrameMetadataObserverClientStub(delegate) {
    this.delegate_ = delegate;
  }
  RenderFrameMetadataObserverClientStub.prototype.onRenderFrameMetadataChanged = function(frameToken, metadata) {
    return this.delegate_ && this.delegate_.onRenderFrameMetadataChanged && this.delegate_.onRenderFrameMetadataChanged(frameToken, metadata);
  }
  RenderFrameMetadataObserverClientStub.prototype.onFrameSubmissionForTesting = function(frameToken) {
    return this.delegate_ && this.delegate_.onFrameSubmissionForTesting && this.delegate_.onFrameSubmissionForTesting(frameToken);
  }

  RenderFrameMetadataObserverClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Name:
      var params = reader.decodeStruct(RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params);
      this.onRenderFrameMetadataChanged(params.frameToken, params.metadata);
      return true;
    case kRenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Name:
      var params = reader.decodeStruct(RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params);
      this.onFrameSubmissionForTesting(params.frameToken);
      return true;
    default:
      return false;
    }
  };

  RenderFrameMetadataObserverClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateRenderFrameMetadataObserverClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RenderFrameMetadataObserverClient_OnRenderFrameMetadataChanged_Params;
      break;
      case kRenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RenderFrameMetadataObserverClient_OnFrameSubmissionForTesting_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRenderFrameMetadataObserverClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var RenderFrameMetadataObserverClient = {
    name: 'cc.mojom.RenderFrameMetadataObserverClient',
    kVersion: 0,
    ptrClass: RenderFrameMetadataObserverClientPtr,
    proxyClass: RenderFrameMetadataObserverClientProxy,
    stubClass: RenderFrameMetadataObserverClientStub,
    validateRequest: validateRenderFrameMetadataObserverClientRequest,
    validateResponse: null,
  };
  RenderFrameMetadataObserverClientStub.prototype.validator = validateRenderFrameMetadataObserverClientRequest;
  RenderFrameMetadataObserverClientProxy.prototype.validator = null;
  exports.DelegatedInkBrowserMetadata = DelegatedInkBrowserMetadata;
  exports.RenderFrameMetadata = RenderFrameMetadata;
  exports.RenderFrameMetadataObserver = RenderFrameMetadataObserver;
  exports.RenderFrameMetadataObserverPtr = RenderFrameMetadataObserverPtr;
  exports.RenderFrameMetadataObserverAssociatedPtr = RenderFrameMetadataObserverAssociatedPtr;
  exports.RenderFrameMetadataObserverClient = RenderFrameMetadataObserverClient;
  exports.RenderFrameMetadataObserverClientPtr = RenderFrameMetadataObserverClientPtr;
  exports.RenderFrameMetadataObserverClientAssociatedPtr = RenderFrameMetadataObserverClientAssociatedPtr;
})();