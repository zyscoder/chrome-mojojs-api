// media/mojo/mojom/display_media_information.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/display_media_information.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var capture_handle$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/capture_handle.mojom', 'capture_handle.mojom.js');
  }


  var DisplayCaptureSurfaceType = {};
  DisplayCaptureSurfaceType.MONITOR = 0;
  DisplayCaptureSurfaceType.WINDOW = 1;
  DisplayCaptureSurfaceType.BROWSER = 2;
  DisplayCaptureSurfaceType.MIN_VALUE = 0;
  DisplayCaptureSurfaceType.MAX_VALUE = 2;

  DisplayCaptureSurfaceType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  DisplayCaptureSurfaceType.toKnownEnumValue = function(value) {
    return value;
  };

  DisplayCaptureSurfaceType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CursorCaptureType = {};
  CursorCaptureType.NEVER = 0;
  CursorCaptureType.ALWAYS = 1;
  CursorCaptureType.MOTION = 2;
  CursorCaptureType.MIN_VALUE = 0;
  CursorCaptureType.MAX_VALUE = 2;

  CursorCaptureType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  CursorCaptureType.toKnownEnumValue = function(value) {
    return value;
  };

  CursorCaptureType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DisplayMediaInformation(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplayMediaInformation.prototype.initDefaults_ = function() {
    this.displaySurface = 0;
    this.logicalSurface = false;
    this.cursor = 0;
    this.captureHandle = null;
  };
  DisplayMediaInformation.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplayMediaInformation.validate = function(messageValidator, offset) {
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


    // validate DisplayMediaInformation.displaySurface
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, DisplayCaptureSurfaceType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DisplayMediaInformation.cursor
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, CursorCaptureType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplayMediaInformation.captureHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, capture_handle$.CaptureHandle, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DisplayMediaInformation.encodedSize = codec.kStructHeaderSize + 24;

  DisplayMediaInformation.decode = function(decoder) {
    var packed;
    var val = new DisplayMediaInformation();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.displaySurface =
        decoder.decodeStruct(new codec.Enum(DisplayCaptureSurfaceType));
    packed = decoder.readUint8();
    val.logicalSurface = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.cursor =
        decoder.decodeStruct(new codec.Enum(CursorCaptureType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.captureHandle =
        decoder.decodeStructPointer(capture_handle$.CaptureHandle);
    return val;
  };

  DisplayMediaInformation.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplayMediaInformation.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.displaySurface);
    packed = 0;
    packed |= (val.logicalSurface & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.cursor);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(capture_handle$.CaptureHandle, val.captureHandle);
  };
  exports.DisplayCaptureSurfaceType = DisplayCaptureSurfaceType;
  exports.CursorCaptureType = CursorCaptureType;
  exports.DisplayMediaInformation = DisplayMediaInformation;
})();