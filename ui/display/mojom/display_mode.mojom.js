// ui/display/mojom/display_mode.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/display/mojom/display_mode.mojom';
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
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../gfx/geometry/mojom/geometry.mojom.js');
  }



  function DisplayMode(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplayMode.prototype.initDefaults_ = function() {
    this.size = null;
    this.isInterlaced = false;
    this.refreshRate = 0;
    this.htotal = 0;
    this.vtotal = 0;
    this.clock = 0;
  };
  DisplayMode.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplayMode.validate = function(messageValidator, offset) {
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


    // validate DisplayMode.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;






    return validator.validationError.NONE;
  };

  DisplayMode.encodedSize = codec.kStructHeaderSize + 32;

  DisplayMode.decode = function(decoder) {
    var packed;
    var val = new DisplayMode();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size =
        decoder.decodeStructPointer(geometry$.Size);
    packed = decoder.readUint8();
    val.isInterlaced = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.refreshRate =
        decoder.decodeStruct(codec.Float);
    val.htotal =
        decoder.decodeStruct(codec.Int32);
    val.vtotal =
        decoder.decodeStruct(codec.Int32);
    val.clock =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DisplayMode.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplayMode.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
    packed = 0;
    packed |= (val.isInterlaced & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.refreshRate);
    encoder.encodeStruct(codec.Int32, val.htotal);
    encoder.encodeStruct(codec.Int32, val.vtotal);
    encoder.encodeStruct(codec.Int32, val.clock);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.DisplayMode = DisplayMode;
})();