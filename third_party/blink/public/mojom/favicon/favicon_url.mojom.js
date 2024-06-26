// third_party/blink/public/mojom/favicon/favicon_url.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/favicon/favicon_url.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }


  var FaviconIconType = {};
  FaviconIconType.kInvalid = 0;
  FaviconIconType.kFavicon = 1;
  FaviconIconType.kTouchIcon = 2;
  FaviconIconType.kTouchPrecomposedIcon = 3;
  FaviconIconType.MIN_VALUE = 0;
  FaviconIconType.MAX_VALUE = 3;

  FaviconIconType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  FaviconIconType.toKnownEnumValue = function(value) {
    return value;
  };

  FaviconIconType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FaviconURL(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FaviconURL.prototype.initDefaults_ = function() {
    this.iconUrl = null;
    this.iconType = 0;
    this.isDefaultIcon = false;
    this.iconSizes = null;
  };
  FaviconURL.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FaviconURL.validate = function(messageValidator, offset) {
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


    // validate FaviconURL.iconUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FaviconURL.iconType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, FaviconIconType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FaviconURL.iconSizes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(geometry$.Size), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FaviconURL.encodedSize = codec.kStructHeaderSize + 24;

  FaviconURL.decode = function(decoder) {
    var packed;
    var val = new FaviconURL();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.iconUrl =
        decoder.decodeStructPointer(url$.Url);
    val.iconType =
        decoder.decodeStruct(new codec.Enum(FaviconIconType));
    packed = decoder.readUint8();
    val.isDefaultIcon = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.iconSizes =
        decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Size));
    return val;
  };

  FaviconURL.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FaviconURL.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.iconUrl);
    encoder.encodeStruct(codec.Int32, val.iconType);
    packed = 0;
    packed |= (val.isDefaultIcon & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Size), val.iconSizes);
  };
  exports.FaviconIconType = FaviconIconType;
  exports.FaviconURL = FaviconURL;
})();