// ui/gfx/mojom/delegated_ink_point.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/delegated_ink_point.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../geometry/mojom/geometry.mojom.js');
  }



  function DelegatedInkPoint(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DelegatedInkPoint.prototype.initDefaults_ = function() {
    this.point = null;
    this.timestamp = null;
    this.pointerId = 0;
  };
  DelegatedInkPoint.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DelegatedInkPoint.validate = function(messageValidator, offset) {
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


    // validate DelegatedInkPoint.point
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DelegatedInkPoint.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  DelegatedInkPoint.encodedSize = codec.kStructHeaderSize + 24;

  DelegatedInkPoint.decode = function(decoder) {
    var packed;
    var val = new DelegatedInkPoint();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.point =
        decoder.decodeStructPointer(geometry$.PointF);
    val.timestamp =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.pointerId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DelegatedInkPoint.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DelegatedInkPoint.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.PointF, val.point);
    encoder.encodeStructPointer(time$.TimeTicks, val.timestamp);
    encoder.encodeStruct(codec.Int32, val.pointerId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.DelegatedInkPoint = DelegatedInkPoint;
})();