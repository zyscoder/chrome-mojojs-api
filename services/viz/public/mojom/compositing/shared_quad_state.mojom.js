// services/viz/public/mojom/compositing/shared_quad_state.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/shared_quad_state.mojom';
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
  var rrect_f$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/rrect_f.mojom', '../../../../../ui/gfx/mojom/rrect_f.mojom.js');
  }
  var transform$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/transform.mojom', '../../../../../ui/gfx/mojom/transform.mojom.js');
  }
  var mask_filter_info$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/mask_filter_info.mojom', '../../../../../ui/gfx/mojom/mask_filter_info.mojom.js');
  }



  function SharedQuadState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedQuadState.prototype.initDefaults_ = function() {
    this.quadToTargetTransform = null;
    this.quadLayerRect = null;
    this.visibleQuadLayerRect = null;
    this.maskFilterInfo = null;
    this.clipRect = null;
    this.areContentsOpaque = false;
    this.isFastRoundedCorner = false;
    this.opacity = 0;
    this.blendMode = 0;
    this.sortingContextId = 0;
    this.layerId = 0;
  };
  SharedQuadState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedQuadState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.quadToTargetTransform
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transform$.Transform, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.quadLayerRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.visibleQuadLayerRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.maskFilterInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, mask_filter_info$.MaskFilterInfo, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedQuadState.clipRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Rect, true);
    if (err !== validator.validationError.NONE)
        return err;







    return validator.validationError.NONE;
  };

  SharedQuadState.encodedSize = codec.kStructHeaderSize + 64;

  SharedQuadState.decode = function(decoder) {
    var packed;
    var val = new SharedQuadState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.quadToTargetTransform =
        decoder.decodeStructPointer(transform$.Transform);
    val.quadLayerRect =
        decoder.decodeStructPointer(geometry$.Rect);
    val.visibleQuadLayerRect =
        decoder.decodeStructPointer(geometry$.Rect);
    val.maskFilterInfo =
        decoder.decodeStructPointer(mask_filter_info$.MaskFilterInfo);
    val.clipRect =
        decoder.decodeStructPointer(geometry$.Rect);
    packed = decoder.readUint8();
    val.areContentsOpaque = (packed >> 0) & 1 ? true : false;
    val.isFastRoundedCorner = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.opacity =
        decoder.decodeStruct(codec.Float);
    val.blendMode =
        decoder.decodeStruct(codec.Uint32);
    val.sortingContextId =
        decoder.decodeStruct(codec.Int32);
    val.layerId =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SharedQuadState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedQuadState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transform$.Transform, val.quadToTargetTransform);
    encoder.encodeStructPointer(geometry$.Rect, val.quadLayerRect);
    encoder.encodeStructPointer(geometry$.Rect, val.visibleQuadLayerRect);
    encoder.encodeStructPointer(mask_filter_info$.MaskFilterInfo, val.maskFilterInfo);
    encoder.encodeStructPointer(geometry$.Rect, val.clipRect);
    packed = 0;
    packed |= (val.areContentsOpaque & 1) << 0
    packed |= (val.isFastRoundedCorner & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.opacity);
    encoder.encodeStruct(codec.Uint32, val.blendMode);
    encoder.encodeStruct(codec.Int32, val.sortingContextId);
    encoder.encodeStruct(codec.Uint32, val.layerId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.SharedQuadState = SharedQuadState;
})();