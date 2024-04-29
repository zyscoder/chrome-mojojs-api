// ui/gfx/mojom/selection_bound.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/selection_bound.mojom';
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
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../geometry/mojom/geometry.mojom.js');
  }


  var SelectionBoundType = {};
  SelectionBoundType.LEFT = 0;
  SelectionBoundType.RIGHT = 1;
  SelectionBoundType.CENTER = 2;
  SelectionBoundType.HIDDEN = 3;
  SelectionBoundType.EMPTY = 4;
  SelectionBoundType.LAST = 4;
  SelectionBoundType.MIN_VALUE = 0;
  SelectionBoundType.MAX_VALUE = 4;

  SelectionBoundType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  SelectionBoundType.toKnownEnumValue = function(value) {
    return value;
  };

  SelectionBoundType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function SelectionBound(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SelectionBound.prototype.initDefaults_ = function() {
    this.type = 0;
    this.visible = false;
    this.edgeStart = null;
    this.edgeEnd = null;
    this.visibleEdgeStart = null;
    this.visibleEdgeEnd = null;
  };
  SelectionBound.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SelectionBound.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SelectionBound.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SelectionBoundType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SelectionBound.edgeStart
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SelectionBound.edgeEnd
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SelectionBound.visibleEdgeStart
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SelectionBound.visibleEdgeEnd
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SelectionBound.encodedSize = codec.kStructHeaderSize + 40;

  SelectionBound.decode = function(decoder) {
    var packed;
    var val = new SelectionBound();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(new codec.Enum(SelectionBoundType));
    packed = decoder.readUint8();
    val.visible = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.edgeStart =
        decoder.decodeStructPointer(geometry$.PointF);
    val.edgeEnd =
        decoder.decodeStructPointer(geometry$.PointF);
    val.visibleEdgeStart =
        decoder.decodeStructPointer(geometry$.PointF);
    val.visibleEdgeEnd =
        decoder.decodeStructPointer(geometry$.PointF);
    return val;
  };

  SelectionBound.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SelectionBound.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    packed = 0;
    packed |= (val.visible & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.PointF, val.edgeStart);
    encoder.encodeStructPointer(geometry$.PointF, val.edgeEnd);
    encoder.encodeStructPointer(geometry$.PointF, val.visibleEdgeStart);
    encoder.encodeStructPointer(geometry$.PointF, val.visibleEdgeEnd);
  };
  exports.SelectionBoundType = SelectionBoundType;
  exports.SelectionBound = SelectionBound;
})();