// ui/gfx/mojom/color_space.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/color_space.mojom';
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


  var ColorSpacePrimaryID = {};
  ColorSpacePrimaryID.INVALID = 0;
  ColorSpacePrimaryID.BT709 = 1;
  ColorSpacePrimaryID.BT470M = 2;
  ColorSpacePrimaryID.BT470BG = 3;
  ColorSpacePrimaryID.SMPTE170M = 4;
  ColorSpacePrimaryID.SMPTE240M = 5;
  ColorSpacePrimaryID.FILM = 6;
  ColorSpacePrimaryID.BT2020 = 7;
  ColorSpacePrimaryID.SMPTEST428_1 = 8;
  ColorSpacePrimaryID.SMPTEST431_2 = 9;
  ColorSpacePrimaryID.P3 = 10;
  ColorSpacePrimaryID.XYZ_D50 = 11;
  ColorSpacePrimaryID.ADOBE_RGB = 12;
  ColorSpacePrimaryID.APPLE_GENERIC_RGB = 13;
  ColorSpacePrimaryID.WIDE_GAMUT_COLOR_SPIN = 14;
  ColorSpacePrimaryID.CUSTOM = 15;
  ColorSpacePrimaryID.MIN_VALUE = 0;
  ColorSpacePrimaryID.MAX_VALUE = 15;

  ColorSpacePrimaryID.isKnownEnumValue = function(value) {
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

  ColorSpacePrimaryID.toKnownEnumValue = function(value) {
    return value;
  };

  ColorSpacePrimaryID.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ColorSpaceTransferID = {};
  ColorSpaceTransferID.INVALID = 0;
  ColorSpaceTransferID.BT709 = 1;
  ColorSpaceTransferID.BT709_APPLE = 2;
  ColorSpaceTransferID.GAMMA18 = 3;
  ColorSpaceTransferID.GAMMA22 = 4;
  ColorSpaceTransferID.GAMMA24 = 5;
  ColorSpaceTransferID.GAMMA28 = 6;
  ColorSpaceTransferID.SMPTE170M = 7;
  ColorSpaceTransferID.SMPTE240M = 8;
  ColorSpaceTransferID.LINEAR = 9;
  ColorSpaceTransferID.LOG = 10;
  ColorSpaceTransferID.LOG_SQRT = 11;
  ColorSpaceTransferID.IEC61966_2_4 = 12;
  ColorSpaceTransferID.BT1361_ECG = 13;
  ColorSpaceTransferID.SRGB = 14;
  ColorSpaceTransferID.BT2020_10 = 15;
  ColorSpaceTransferID.BT2020_12 = 16;
  ColorSpaceTransferID.PQ = 17;
  ColorSpaceTransferID.SMPTEST428_1 = 18;
  ColorSpaceTransferID.HLG = 19;
  ColorSpaceTransferID.SRGB_HDR = 20;
  ColorSpaceTransferID.LINEAR_HDR = 21;
  ColorSpaceTransferID.CUSTOM = 22;
  ColorSpaceTransferID.CUSTOM_HDR = 23;
  ColorSpaceTransferID.PIECEWISE_HDR = 24;
  ColorSpaceTransferID.SCRGB_LINEAR_80_NITS = 25;
  ColorSpaceTransferID.MIN_VALUE = 0;
  ColorSpaceTransferID.MAX_VALUE = 25;

  ColorSpaceTransferID.isKnownEnumValue = function(value) {
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
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
      return true;
    }
    return false;
  };

  ColorSpaceTransferID.toKnownEnumValue = function(value) {
    return value;
  };

  ColorSpaceTransferID.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ColorSpaceMatrixID = {};
  ColorSpaceMatrixID.INVALID = 0;
  ColorSpaceMatrixID.RGB = 1;
  ColorSpaceMatrixID.BT709 = 2;
  ColorSpaceMatrixID.FCC = 3;
  ColorSpaceMatrixID.BT470BG = 4;
  ColorSpaceMatrixID.SMPTE170M = 5;
  ColorSpaceMatrixID.SMPTE240M = 6;
  ColorSpaceMatrixID.YCOCG = 7;
  ColorSpaceMatrixID.BT2020_NCL = 8;
  ColorSpaceMatrixID.BT2020_CL = 9;
  ColorSpaceMatrixID.YDZDX = 10;
  ColorSpaceMatrixID.GBR = 11;
  ColorSpaceMatrixID.MIN_VALUE = 0;
  ColorSpaceMatrixID.MAX_VALUE = 11;

  ColorSpaceMatrixID.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  ColorSpaceMatrixID.toKnownEnumValue = function(value) {
    return value;
  };

  ColorSpaceMatrixID.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ColorSpaceRangeID = {};
  ColorSpaceRangeID.INVALID = 0;
  ColorSpaceRangeID.LIMITED = 1;
  ColorSpaceRangeID.FULL = 2;
  ColorSpaceRangeID.DERIVED = 3;
  ColorSpaceRangeID.MIN_VALUE = 0;
  ColorSpaceRangeID.MAX_VALUE = 3;

  ColorSpaceRangeID.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ColorSpaceRangeID.toKnownEnumValue = function(value) {
    return value;
  };

  ColorSpaceRangeID.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ColorSpace(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ColorSpace.prototype.initDefaults_ = function() {
    this.primaries = 0;
    this.transfer = 0;
    this.matrix = 0;
    this.range = 0;
    this.customPrimaryMatrix = null;
    this.transferParams = null;
  };
  ColorSpace.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ColorSpace.validate = function(messageValidator, offset) {
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


    // validate ColorSpace.primaries
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ColorSpacePrimaryID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.transfer
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ColorSpaceTransferID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.matrix
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, ColorSpaceMatrixID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.range
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, ColorSpaceRangeID);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.customPrimaryMatrix
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.Float, false, [9], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ColorSpace.transferParams
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.Float, false, [7], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ColorSpace.encodedSize = codec.kStructHeaderSize + 32;

  ColorSpace.decode = function(decoder) {
    var packed;
    var val = new ColorSpace();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.primaries =
        decoder.decodeStruct(new codec.Enum(ColorSpacePrimaryID));
    val.transfer =
        decoder.decodeStruct(new codec.Enum(ColorSpaceTransferID));
    val.matrix =
        decoder.decodeStruct(new codec.Enum(ColorSpaceMatrixID));
    val.range =
        decoder.decodeStruct(new codec.Enum(ColorSpaceRangeID));
    val.customPrimaryMatrix =
        decoder.decodeArrayPointer(codec.Float);
    val.transferParams =
        decoder.decodeArrayPointer(codec.Float);
    return val;
  };

  ColorSpace.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ColorSpace.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.primaries);
    encoder.encodeStruct(codec.Int32, val.transfer);
    encoder.encodeStruct(codec.Int32, val.matrix);
    encoder.encodeStruct(codec.Int32, val.range);
    encoder.encodeArrayPointer(codec.Float, val.customPrimaryMatrix);
    encoder.encodeArrayPointer(codec.Float, val.transferParams);
  };
  exports.ColorSpacePrimaryID = ColorSpacePrimaryID;
  exports.ColorSpaceTransferID = ColorSpaceTransferID;
  exports.ColorSpaceMatrixID = ColorSpaceMatrixID;
  exports.ColorSpaceRangeID = ColorSpaceRangeID;
  exports.ColorSpace = ColorSpace;
})();