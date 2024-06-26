// third_party/blink/public/mojom/frame/frame_visual_properties.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/frame_visual_properties.mojom';
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
  var browser_controls_params$ =
      mojo.internal.exposeNamespace('cc.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'cc/mojom/browser_controls_params.mojom', '../../../../../cc/mojom/browser_controls_params.mojom.js');
  }
  var local_surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/local_surface_id.mojom', '../../../../../services/viz/public/mojom/compositing/local_surface_id.mojom.js');
  }
  var screen_infos$ =
      mojo.internal.exposeNamespace('display.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/display/mojom/screen_infos.mojom', '../../../../../ui/display/mojom/screen_infos.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }



  function FrameVisualProperties(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FrameVisualProperties.prototype.initDefaults_ = function() {
    this.screenInfos = null;
    this.autoResizeEnabled = false;
    this.isPinchGestureActive = false;
    this.captureSequenceNumber = 0;
    this.zoomLevel = 0;
    this.pageScaleFactor = 1;
    this.compositingScaleFactor = 1;
    this.cursorAccessibilityScaleFactor = 1;
    this.visibleViewportSize = null;
    this.minSizeForAutoResize = null;
    this.maxSizeForAutoResize = null;
    this.rootWidgetWindowSegments = null;
    this.compositorViewport = null;
    this.rectInLocalRoot = null;
    this.localFrameSize = null;
    this.localSurfaceId = null;
  };
  FrameVisualProperties.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FrameVisualProperties.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 112}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameVisualProperties.screenInfos
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, screen_infos$.ScreenInfos, false);
    if (err !== validator.validationError.NONE)
        return err;









    // validate FrameVisualProperties.visibleViewportSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameVisualProperties.minSizeForAutoResize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameVisualProperties.maxSizeForAutoResize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameVisualProperties.rootWidgetWindowSegments
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 64, 8, new codec.PointerTo(geometry$.Rect), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameVisualProperties.compositorViewport
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameVisualProperties.rectInLocalRoot
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 80, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameVisualProperties.localFrameSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 88, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FrameVisualProperties.localSurfaceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 96, local_surface_id$.LocalSurfaceId, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FrameVisualProperties.encodedSize = codec.kStructHeaderSize + 104;

  FrameVisualProperties.decode = function(decoder) {
    var packed;
    var val = new FrameVisualProperties();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.screenInfos =
        decoder.decodeStructPointer(screen_infos$.ScreenInfos);
    packed = decoder.readUint8();
    val.autoResizeEnabled = (packed >> 0) & 1 ? true : false;
    val.isPinchGestureActive = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.captureSequenceNumber =
        decoder.decodeStruct(codec.Uint32);
    val.zoomLevel =
        decoder.decodeStruct(codec.Double);
    val.pageScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.compositingScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.cursorAccessibilityScaleFactor =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.visibleViewportSize =
        decoder.decodeStructPointer(geometry$.Size);
    val.minSizeForAutoResize =
        decoder.decodeStructPointer(geometry$.Size);
    val.maxSizeForAutoResize =
        decoder.decodeStructPointer(geometry$.Size);
    val.rootWidgetWindowSegments =
        decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Rect));
    val.compositorViewport =
        decoder.decodeStructPointer(geometry$.Rect);
    val.rectInLocalRoot =
        decoder.decodeStructPointer(geometry$.Rect);
    val.localFrameSize =
        decoder.decodeStructPointer(geometry$.Size);
    val.localSurfaceId =
        decoder.decodeStructPointer(local_surface_id$.LocalSurfaceId);
    return val;
  };

  FrameVisualProperties.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FrameVisualProperties.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(screen_infos$.ScreenInfos, val.screenInfos);
    packed = 0;
    packed |= (val.autoResizeEnabled & 1) << 0
    packed |= (val.isPinchGestureActive & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.captureSequenceNumber);
    encoder.encodeStruct(codec.Double, val.zoomLevel);
    encoder.encodeStruct(codec.Float, val.pageScaleFactor);
    encoder.encodeStruct(codec.Float, val.compositingScaleFactor);
    encoder.encodeStruct(codec.Float, val.cursorAccessibilityScaleFactor);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.visibleViewportSize);
    encoder.encodeStructPointer(geometry$.Size, val.minSizeForAutoResize);
    encoder.encodeStructPointer(geometry$.Size, val.maxSizeForAutoResize);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Rect), val.rootWidgetWindowSegments);
    encoder.encodeStructPointer(geometry$.Rect, val.compositorViewport);
    encoder.encodeStructPointer(geometry$.Rect, val.rectInLocalRoot);
    encoder.encodeStructPointer(geometry$.Size, val.localFrameSize);
    encoder.encodeStructPointer(local_surface_id$.LocalSurfaceId, val.localSurfaceId);
  };
  exports.FrameVisualProperties = FrameVisualProperties;
})();