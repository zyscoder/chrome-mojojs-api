// services/viz/public/mojom/compositing/filter_operation.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/filter_operation.mojom';
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
  var paint_filter$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/paint_filter.mojom', 'paint_filter.mojom.js');
  }
  var tile_mode$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/tile_mode.mojom', '../../../../../skia/public/mojom/tile_mode.mojom.js');
  }
  var skcolor4f$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/skcolor4f.mojom', '../../../../../skia/public/mojom/skcolor4f.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }


  var FilterType = {};
  FilterType.GRAYSCALE = 0;
  FilterType.SEPIA = 1;
  FilterType.SATURATE = 2;
  FilterType.HUE_ROTATE = 3;
  FilterType.INVERT = 4;
  FilterType.BRIGHTNESS = 5;
  FilterType.CONTRAST = 6;
  FilterType.OPACITY = 7;
  FilterType.BLUR = 8;
  FilterType.DROP_SHADOW = 9;
  FilterType.COLOR_MATRIX = 10;
  FilterType.ZOOM = 11;
  FilterType.REFERENCE = 12;
  FilterType.SATURATING_BRIGHTNESS = 13;
  FilterType.ALPHA_THRESHOLD = 14;
  FilterType.OFFSET = 15;
  FilterType.FILTER_TYPE_LAST = 15;
  FilterType.MIN_VALUE = 0;
  FilterType.MAX_VALUE = 15;

  FilterType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      return true;
    }
    return false;
  };

  FilterType.toKnownEnumValue = function(value) {
    return value;
  };

  FilterType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FilterOperation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilterOperation.prototype.initDefaults_ = function() {
    this.type = 0;
    this.amount = 0;
    this.offset = null;
    this.dropShadowColor = null;
    this.imageFilter = null;
    this.matrix = null;
    this.zoomInset = 0;
    this.blurTileMode = 0;
    this.shape = null;
  };
  FilterOperation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilterOperation.validate = function(messageValidator, offset) {
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


    // validate FilterOperation.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, FilterType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FilterOperation.offset
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Point, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilterOperation.dropShadowColor
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, skcolor4f$.SkColor4f, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilterOperation.imageFilter
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, paint_filter$.PaintFilter, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilterOperation.matrix
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, codec.Float, true, [20], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FilterOperation.blurTileMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 44, tile_mode$.TileMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilterOperation.shape
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, new codec.PointerTo(geometry$.Rect), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FilterOperation.encodedSize = codec.kStructHeaderSize + 56;

  FilterOperation.decode = function(decoder) {
    var packed;
    var val = new FilterOperation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(new codec.Enum(FilterType));
    val.amount =
        decoder.decodeStruct(codec.Float);
    val.offset =
        decoder.decodeStructPointer(geometry$.Point);
    val.dropShadowColor =
        decoder.decodeStructPointer(skcolor4f$.SkColor4f);
    val.imageFilter =
        decoder.decodeStructPointer(paint_filter$.PaintFilter);
    val.matrix =
        decoder.decodeArrayPointer(codec.Float);
    val.zoomInset =
        decoder.decodeStruct(codec.Int32);
    val.blurTileMode =
        decoder.decodeStruct(new codec.Enum(tile_mode$.TileMode));
    val.shape =
        decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Rect));
    return val;
  };

  FilterOperation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilterOperation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Float, val.amount);
    encoder.encodeStructPointer(geometry$.Point, val.offset);
    encoder.encodeStructPointer(skcolor4f$.SkColor4f, val.dropShadowColor);
    encoder.encodeStructPointer(paint_filter$.PaintFilter, val.imageFilter);
    encoder.encodeArrayPointer(codec.Float, val.matrix);
    encoder.encodeStruct(codec.Int32, val.zoomInset);
    encoder.encodeStruct(codec.Int32, val.blurTileMode);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Rect), val.shape);
  };
  exports.FilterType = FilterType;
  exports.FilterOperation = FilterOperation;
})();