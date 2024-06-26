// ui/display/mojom/gamma_ramp_rgb_entry.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/display/mojom/gamma_ramp_rgb_entry.mojom';
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



  function GammaRampRGBEntry(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GammaRampRGBEntry.prototype.initDefaults_ = function() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
  };
  GammaRampRGBEntry.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GammaRampRGBEntry.validate = function(messageValidator, offset) {
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




    return validator.validationError.NONE;
  };

  GammaRampRGBEntry.encodedSize = codec.kStructHeaderSize + 8;

  GammaRampRGBEntry.decode = function(decoder) {
    var packed;
    var val = new GammaRampRGBEntry();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.r =
        decoder.decodeStruct(codec.Uint16);
    val.g =
        decoder.decodeStruct(codec.Uint16);
    val.b =
        decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GammaRampRGBEntry.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GammaRampRGBEntry.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.r);
    encoder.encodeStruct(codec.Uint16, val.g);
    encoder.encodeStruct(codec.Uint16, val.b);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.GammaRampRGBEntry = GammaRampRGBEntry;
})();