// ui/gfx/mojom/linear_gradient.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/linear_gradient.mojom';
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



  function Step(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Step.prototype.initDefaults_ = function() {
    this.fraction = 0;
    this.alpha = 0;
  };
  Step.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Step.validate = function(messageValidator, offset) {
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

  Step.encodedSize = codec.kStructHeaderSize + 8;

  Step.decode = function(decoder) {
    var packed;
    var val = new Step();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fraction =
        decoder.decodeStruct(codec.Float);
    val.alpha =
        decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Step.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Step.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.fraction);
    encoder.encodeStruct(codec.Uint8, val.alpha);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function LinearGradient(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LinearGradient.prototype.initDefaults_ = function() {
    this.angle = 0;
    this.stepCount = 0;
    this.steps = null;
  };
  LinearGradient.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LinearGradient.validate = function(messageValidator, offset) {
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




    // validate LinearGradient.steps
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(Step), false, [8], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LinearGradient.encodedSize = codec.kStructHeaderSize + 16;

  LinearGradient.decode = function(decoder) {
    var packed;
    var val = new LinearGradient();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.angle =
        decoder.decodeStruct(codec.Int16);
    val.stepCount =
        decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.steps =
        decoder.decodeArrayPointer(new codec.PointerTo(Step));
    return val;
  };

  LinearGradient.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LinearGradient.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int16, val.angle);
    encoder.encodeStruct(codec.Uint8, val.stepCount);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(Step), val.steps);
  };
  exports.Step = Step;
  exports.LinearGradient = LinearGradient;
})();