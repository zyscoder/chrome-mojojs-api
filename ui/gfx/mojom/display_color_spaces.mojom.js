// ui/gfx/mojom/display_color_spaces.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/display_color_spaces.mojom';
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
  var skcolorspace_primaries$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/skcolorspace_primaries.mojom', '../../../skia/public/mojom/skcolorspace_primaries.mojom.js');
  }
  var buffer_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/buffer_types.mojom', 'buffer_types.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/color_space.mojom', 'color_space.mojom.js');
  }
  var hdr_static_metadata$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/hdr_static_metadata.mojom', 'hdr_static_metadata.mojom.js');
  }


  var ContentColorUsage = {};
  ContentColorUsage.kSRGB = 0;
  ContentColorUsage.kWideColorGamut = 1;
  ContentColorUsage.kHDR = 2;
  ContentColorUsage.MIN_VALUE = 0;
  ContentColorUsage.MAX_VALUE = 2;

  ContentColorUsage.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ContentColorUsage.toKnownEnumValue = function(value) {
    return value;
  };

  ContentColorUsage.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DisplayColorSpaces(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplayColorSpaces.prototype.initDefaults_ = function() {
    this.colorSpaces = null;
    this.bufferFormats = null;
    this.primaries = null;
    this.sdrMaxLuminanceNits = 0;
    this.hdrMaxLuminanceRelative = 0;
  };
  DisplayColorSpaces.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplayColorSpaces.validate = function(messageValidator, offset) {
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


    // validate DisplayColorSpaces.colorSpaces
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(color_space$.ColorSpace), false, [6], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplayColorSpaces.bufferFormats
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, new codec.Enum(buffer_types$.BufferFormat), false, [6], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplayColorSpaces.primaries
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, skcolorspace_primaries$.SkColorSpacePrimaries, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  DisplayColorSpaces.encodedSize = codec.kStructHeaderSize + 32;

  DisplayColorSpaces.decode = function(decoder) {
    var packed;
    var val = new DisplayColorSpaces();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.colorSpaces =
        decoder.decodeArrayPointer(new codec.PointerTo(color_space$.ColorSpace));
    val.bufferFormats =
        decoder.decodeArrayPointer(new codec.Enum(buffer_types$.BufferFormat));
    val.primaries =
        decoder.decodeStructPointer(skcolorspace_primaries$.SkColorSpacePrimaries);
    val.sdrMaxLuminanceNits =
        decoder.decodeStruct(codec.Float);
    val.hdrMaxLuminanceRelative =
        decoder.decodeStruct(codec.Float);
    return val;
  };

  DisplayColorSpaces.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplayColorSpaces.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(color_space$.ColorSpace), val.colorSpaces);
    encoder.encodeArrayPointer(new codec.Enum(buffer_types$.BufferFormat), val.bufferFormats);
    encoder.encodeStructPointer(skcolorspace_primaries$.SkColorSpacePrimaries, val.primaries);
    encoder.encodeStruct(codec.Float, val.sdrMaxLuminanceNits);
    encoder.encodeStruct(codec.Float, val.hdrMaxLuminanceRelative);
  };
  exports.ContentColorUsage = ContentColorUsage;
  exports.DisplayColorSpaces = DisplayColorSpaces;
})();