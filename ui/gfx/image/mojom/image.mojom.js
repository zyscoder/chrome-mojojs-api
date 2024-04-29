// ui/gfx/image/mojom/image.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/image/mojom/image.mojom';
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
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/bitmap.mojom', '../../../../skia/public/mojom/bitmap.mojom.js');
  }



  function ImageSkiaRep(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ImageSkiaRep.prototype.initDefaults_ = function() {
    this.bitmap = null;
    this.scale = 0;
  };
  ImageSkiaRep.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ImageSkiaRep.validate = function(messageValidator, offset) {
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


    // validate ImageSkiaRep.bitmap
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, bitmap$.BitmapWithArbitraryBpp, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ImageSkiaRep.encodedSize = codec.kStructHeaderSize + 16;

  ImageSkiaRep.decode = function(decoder) {
    var packed;
    var val = new ImageSkiaRep();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitmap =
        decoder.decodeStructPointer(bitmap$.BitmapWithArbitraryBpp);
    val.scale =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ImageSkiaRep.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ImageSkiaRep.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(bitmap$.BitmapWithArbitraryBpp, val.bitmap);
    encoder.encodeStruct(codec.Float, val.scale);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ImageSkia(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ImageSkia.prototype.initDefaults_ = function() {
    this.imageReps = null;
  };
  ImageSkia.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ImageSkia.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ImageSkia.imageReps
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ImageSkiaRep), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ImageSkia.encodedSize = codec.kStructHeaderSize + 8;

  ImageSkia.decode = function(decoder) {
    var packed;
    var val = new ImageSkia();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.imageReps =
        decoder.decodeArrayPointer(new codec.PointerTo(ImageSkiaRep));
    return val;
  };

  ImageSkia.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ImageSkia.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ImageSkiaRep), val.imageReps);
  };
  exports.ImageSkiaRep = ImageSkiaRep;
  exports.ImageSkia = ImageSkia;
})();