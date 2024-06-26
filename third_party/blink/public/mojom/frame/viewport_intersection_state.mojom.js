// third_party/blink/public/mojom/frame/viewport_intersection_state.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/viewport_intersection_state.mojom';
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
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }
  var transform$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/transform.mojom', '../../../../../ui/gfx/mojom/transform.mojom.js');
  }


  var FrameOcclusionState = {};
  FrameOcclusionState.kUnknown = 0;
  FrameOcclusionState.kPossiblyOccluded = 1;
  FrameOcclusionState.kGuaranteedNotOccluded = 2;
  FrameOcclusionState.MIN_VALUE = 0;
  FrameOcclusionState.MAX_VALUE = 2;

  FrameOcclusionState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  FrameOcclusionState.toKnownEnumValue = function(value) {
    return value;
  };

  FrameOcclusionState.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ViewportIntersectionState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ViewportIntersectionState.prototype.initDefaults_ = function() {
    this.viewportIntersection = null;
    this.mainFrameIntersection = null;
    this.compositorVisibleRect = null;
    this.occlusionState = FrameOcclusionState.kUnknown;
    this.outermostMainFrameSize = null;
    this.outermostMainFrameScrollPosition = null;
    this.mainFrameTransform = null;
  };
  ViewportIntersectionState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ViewportIntersectionState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 64}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ViewportIntersectionState.viewportIntersection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ViewportIntersectionState.mainFrameIntersection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ViewportIntersectionState.compositorVisibleRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ViewportIntersectionState.occlusionState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, FrameOcclusionState);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ViewportIntersectionState.outermostMainFrameSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ViewportIntersectionState.outermostMainFrameScrollPosition
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Point, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ViewportIntersectionState.mainFrameTransform
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, transform$.Transform, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ViewportIntersectionState.encodedSize = codec.kStructHeaderSize + 56;

  ViewportIntersectionState.decode = function(decoder) {
    var packed;
    var val = new ViewportIntersectionState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.viewportIntersection =
        decoder.decodeStructPointer(geometry$.Rect);
    val.mainFrameIntersection =
        decoder.decodeStructPointer(geometry$.Rect);
    val.compositorVisibleRect =
        decoder.decodeStructPointer(geometry$.Rect);
    val.occlusionState =
        decoder.decodeStruct(new codec.Enum(FrameOcclusionState));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.outermostMainFrameSize =
        decoder.decodeStructPointer(geometry$.Size);
    val.outermostMainFrameScrollPosition =
        decoder.decodeStructPointer(geometry$.Point);
    val.mainFrameTransform =
        decoder.decodeStructPointer(transform$.Transform);
    return val;
  };

  ViewportIntersectionState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ViewportIntersectionState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Rect, val.viewportIntersection);
    encoder.encodeStructPointer(geometry$.Rect, val.mainFrameIntersection);
    encoder.encodeStructPointer(geometry$.Rect, val.compositorVisibleRect);
    encoder.encodeStruct(codec.Int32, val.occlusionState);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.outermostMainFrameSize);
    encoder.encodeStructPointer(geometry$.Point, val.outermostMainFrameScrollPosition);
    encoder.encodeStructPointer(transform$.Transform, val.mainFrameTransform);
  };
  exports.FrameOcclusionState = FrameOcclusionState;
  exports.ViewportIntersectionState = ViewportIntersectionState;
})();