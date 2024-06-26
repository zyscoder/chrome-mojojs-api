// device/vr/public/mojom/xr_session.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'device/vr/public/mojom/xr_session.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/bitmap.mojom', '../../../../skia/public/mojom/bitmap.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }


  var RequestSessionError = {};
  RequestSessionError.EXISTING_IMMERSIVE_SESSION = 1;
  RequestSessionError.INVALID_CLIENT = 2;
  RequestSessionError.USER_DENIED_CONSENT = 3;
  RequestSessionError.NO_RUNTIME_FOUND = 4;
  RequestSessionError.UNKNOWN_RUNTIME_ERROR = 5;
  RequestSessionError.RUNTIME_INSTALL_FAILURE = 6;
  RequestSessionError.RUNTIMES_CHANGED = 7;
  RequestSessionError.FULLSCREEN_ERROR = 8;
  RequestSessionError.UNKNOWN_FAILURE = 9;
  RequestSessionError.MIN_VALUE = 1;
  RequestSessionError.MAX_VALUE = 9;

  RequestSessionError.isKnownEnumValue = function(value) {
    switch (value) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return true;
    }
    return false;
  };

  RequestSessionError.toKnownEnumValue = function(value) {
    return value;
  };

  RequestSessionError.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var XRSessionFeature = {};
  XRSessionFeature.REF_SPACE_VIEWER = 1;
  XRSessionFeature.REF_SPACE_LOCAL = 2;
  XRSessionFeature.REF_SPACE_LOCAL_FLOOR = 3;
  XRSessionFeature.REF_SPACE_BOUNDED_FLOOR = 4;
  XRSessionFeature.REF_SPACE_UNBOUNDED = 5;
  XRSessionFeature.DOM_OVERLAY = 6;
  XRSessionFeature.HIT_TEST = 7;
  XRSessionFeature.LIGHT_ESTIMATION = 8;
  XRSessionFeature.ANCHORS = 9;
  XRSessionFeature.CAMERA_ACCESS = 10;
  XRSessionFeature.PLANE_DETECTION = 11;
  XRSessionFeature.DEPTH = 12;
  XRSessionFeature.IMAGE_TRACKING = 13;
  XRSessionFeature.HAND_INPUT = 14;
  XRSessionFeature.SECONDARY_VIEWS = 15;
  XRSessionFeature.LAYERS = 16;
  XRSessionFeature.FRONT_FACING = 17;
  XRSessionFeature.MIN_VALUE = 1;
  XRSessionFeature.MAX_VALUE = 17;

  XRSessionFeature.isKnownEnumValue = function(value) {
    switch (value) {
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
      return true;
    }
    return false;
  };

  XRSessionFeature.toKnownEnumValue = function(value) {
    return value;
  };

  XRSessionFeature.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var XRSessionMode = {};
  XRSessionMode.kInline = 1;
  XRSessionMode.kImmersiveVr = 2;
  XRSessionMode.kImmersiveAr = 3;
  XRSessionMode.MIN_VALUE = 1;
  XRSessionMode.MAX_VALUE = 3;

  XRSessionMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  XRSessionMode.toKnownEnumValue = function(value) {
    return value;
  };

  XRSessionMode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var XRDepthUsage = {};
  XRDepthUsage.kCPUOptimized = 1;
  XRDepthUsage.kGPUOptimized = 2;
  XRDepthUsage.MIN_VALUE = 1;
  XRDepthUsage.MAX_VALUE = 2;

  XRDepthUsage.isKnownEnumValue = function(value) {
    switch (value) {
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  XRDepthUsage.toKnownEnumValue = function(value) {
    return value;
  };

  XRDepthUsage.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var XRDepthDataFormat = {};
  XRDepthDataFormat.kLuminanceAlpha = 1;
  XRDepthDataFormat.kFloat32 = 2;
  XRDepthDataFormat.MIN_VALUE = 1;
  XRDepthDataFormat.MAX_VALUE = 2;

  XRDepthDataFormat.isKnownEnumValue = function(value) {
    switch (value) {
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  XRDepthDataFormat.toKnownEnumValue = function(value) {
    return value;
  };

  XRDepthDataFormat.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function XRTrackedImage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRTrackedImage.prototype.initDefaults_ = function() {
    this.bitmap = null;
    this.sizeInPixels = null;
    this.widthInMeters = 0;
  };
  XRTrackedImage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRTrackedImage.validate = function(messageValidator, offset) {
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


    // validate XRTrackedImage.bitmap
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, bitmap$.BitmapN32, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRTrackedImage.sizeInPixels
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  XRTrackedImage.encodedSize = codec.kStructHeaderSize + 24;

  XRTrackedImage.decode = function(decoder) {
    var packed;
    var val = new XRTrackedImage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitmap =
        decoder.decodeStructPointer(bitmap$.BitmapN32);
    val.sizeInPixels =
        decoder.decodeStructPointer(geometry$.Size);
    val.widthInMeters =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  XRTrackedImage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRTrackedImage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(bitmap$.BitmapN32, val.bitmap);
    encoder.encodeStructPointer(geometry$.Size, val.sizeInPixels);
    encoder.encodeStruct(codec.Float, val.widthInMeters);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function XRDepthOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRDepthOptions.prototype.initDefaults_ = function() {
    this.usagePreferences = null;
    this.dataFormatPreferences = null;
  };
  XRDepthOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRDepthOptions.validate = function(messageValidator, offset) {
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


    // validate XRDepthOptions.usagePreferences
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(XRDepthUsage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRDepthOptions.dataFormatPreferences
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, new codec.Enum(XRDepthDataFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XRDepthOptions.encodedSize = codec.kStructHeaderSize + 16;

  XRDepthOptions.decode = function(decoder) {
    var packed;
    var val = new XRDepthOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.usagePreferences =
        decoder.decodeArrayPointer(new codec.Enum(XRDepthUsage));
    val.dataFormatPreferences =
        decoder.decodeArrayPointer(new codec.Enum(XRDepthDataFormat));
    return val;
  };

  XRDepthOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRDepthOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(XRDepthUsage), val.usagePreferences);
    encoder.encodeArrayPointer(new codec.Enum(XRDepthDataFormat), val.dataFormatPreferences);
  };
  function XRSessionOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRSessionOptions.prototype.initDefaults_ = function() {
    this.mode = 0;
    this.requiredFeatures = null;
    this.optionalFeatures = null;
    this.trackedImages = null;
    this.depthOptions = null;
    this.traceId = 0;
  };
  XRSessionOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRSessionOptions.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRSessionOptions.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, XRSessionMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRSessionOptions.requiredFeatures
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, new codec.Enum(XRSessionFeature), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRSessionOptions.optionalFeatures
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, new codec.Enum(XRSessionFeature), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRSessionOptions.trackedImages
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(XRTrackedImage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRSessionOptions.depthOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, XRDepthOptions, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  XRSessionOptions.encodedSize = codec.kStructHeaderSize + 48;

  XRSessionOptions.decode = function(decoder) {
    var packed;
    var val = new XRSessionOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mode =
        decoder.decodeStruct(new codec.Enum(XRSessionMode));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.requiredFeatures =
        decoder.decodeArrayPointer(new codec.Enum(XRSessionFeature));
    val.optionalFeatures =
        decoder.decodeArrayPointer(new codec.Enum(XRSessionFeature));
    val.trackedImages =
        decoder.decodeArrayPointer(new codec.PointerTo(XRTrackedImage));
    val.depthOptions =
        decoder.decodeStructPointer(XRDepthOptions);
    val.traceId =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  XRSessionOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRSessionOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.Enum(XRSessionFeature), val.requiredFeatures);
    encoder.encodeArrayPointer(new codec.Enum(XRSessionFeature), val.optionalFeatures);
    encoder.encodeArrayPointer(new codec.PointerTo(XRTrackedImage), val.trackedImages);
    encoder.encodeStructPointer(XRDepthOptions, val.depthOptions);
    encoder.encodeStruct(codec.Uint64, val.traceId);
  };
  exports.RequestSessionError = RequestSessionError;
  exports.XRSessionFeature = XRSessionFeature;
  exports.XRSessionMode = XRSessionMode;
  exports.XRDepthUsage = XRDepthUsage;
  exports.XRDepthDataFormat = XRDepthDataFormat;
  exports.XRTrackedImage = XRTrackedImage;
  exports.XRDepthOptions = XRDepthOptions;
  exports.XRSessionOptions = XRSessionOptions;
})();