// ui/display/mojom/screen_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/display/mojom/screen_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('display.mojom');
  var screen_orientation$ =
      mojo.internal.exposeNamespace('display.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/display/mojom/screen_orientation.mojom', 'screen_orientation.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../gfx/geometry/mojom/geometry.mojom.js');
  }
  var display_color_spaces$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/display_color_spaces.mojom', '../../gfx/mojom/display_color_spaces.mojom.js');
  }



  function ScreenInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ScreenInfo.prototype.initDefaults_ = function() {
    this.deviceScaleFactor = 1;
    this.depth = 0;
    this.displayColorSpaces = null;
    this.depthPerComponent = 0;
    this.isMonochrome = false;
    this.isExtended = false;
    this.isPrimary = false;
    this.isInternal = false;
    this.orientationAngle = 0;
    this.displayFrequency = 0;
    this.orientationType = screen_orientation$.ScreenOrientation.kUndefined;
    this.rect = null;
    this.availableRect = null;
    this.label = null;
    this.displayId = 0;
  };
  ScreenInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScreenInfo.validate = function(messageValidator, offset) {
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



    // validate ScreenInfo.displayColorSpaces
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, display_color_spaces$.DisplayColorSpaces, false);
    if (err !== validator.validationError.NONE)
        return err;






    // validate ScreenInfo.rect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ScreenInfo.availableRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ScreenInfo.orientationType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, screen_orientation$.ScreenOrientation);
    if (err !== validator.validationError.NONE)
        return err;






    // validate ScreenInfo.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ScreenInfo.encodedSize = codec.kStructHeaderSize + 64;

  ScreenInfo.decode = function(decoder) {
    var packed;
    var val = new ScreenInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deviceScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.depth =
        decoder.decodeStruct(codec.Uint32);
    val.displayColorSpaces =
        decoder.decodeStructPointer(display_color_spaces$.DisplayColorSpaces);
    val.depthPerComponent =
        decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.isMonochrome = (packed >> 0) & 1 ? true : false;
    val.isExtended = (packed >> 1) & 1 ? true : false;
    val.isPrimary = (packed >> 2) & 1 ? true : false;
    val.isInternal = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    val.orientationAngle =
        decoder.decodeStruct(codec.Uint16);
    val.displayFrequency =
        decoder.decodeStruct(codec.Float);
    val.orientationType =
        decoder.decodeStruct(new codec.Enum(screen_orientation$.ScreenOrientation));
    val.rect =
        decoder.decodeStructPointer(geometry$.Rect);
    val.availableRect =
        decoder.decodeStructPointer(geometry$.Rect);
    val.label =
        decoder.decodeStruct(codec.String);
    val.displayId =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  ScreenInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScreenInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.deviceScaleFactor);
    encoder.encodeStruct(codec.Uint32, val.depth);
    encoder.encodeStructPointer(display_color_spaces$.DisplayColorSpaces, val.displayColorSpaces);
    encoder.encodeStruct(codec.Uint32, val.depthPerComponent);
    packed = 0;
    packed |= (val.isMonochrome & 1) << 0
    packed |= (val.isExtended & 1) << 1
    packed |= (val.isPrimary & 1) << 2
    packed |= (val.isInternal & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint16, val.orientationAngle);
    encoder.encodeStruct(codec.Float, val.displayFrequency);
    encoder.encodeStruct(codec.Int32, val.orientationType);
    encoder.encodeStructPointer(geometry$.Rect, val.rect);
    encoder.encodeStructPointer(geometry$.Rect, val.availableRect);
    encoder.encodeStruct(codec.String, val.label);
    encoder.encodeStruct(codec.Int64, val.displayId);
  };
  exports.ScreenInfo = ScreenInfo;
})();