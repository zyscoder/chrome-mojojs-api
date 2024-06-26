// third_party/blink/public/mojom/timing/performance_mark_or_measure.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/timing/performance_mark_or_measure.mojom';
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
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }



  function PerformanceMarkOrMeasure(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  PerformanceMarkOrMeasure.EntryType = {};
  PerformanceMarkOrMeasure.EntryType.kMark = 0;
  PerformanceMarkOrMeasure.EntryType.kMeasure = 1;
  PerformanceMarkOrMeasure.EntryType.MIN_VALUE = 0;
  PerformanceMarkOrMeasure.EntryType.MAX_VALUE = 1;

  PerformanceMarkOrMeasure.EntryType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  PerformanceMarkOrMeasure.EntryType.toKnownEnumValue = function(value) {
    return value;
  };

  PerformanceMarkOrMeasure.EntryType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  PerformanceMarkOrMeasure.prototype.initDefaults_ = function() {
    this.name = null;
    this.entryType = 0;
    this.startTime = 0;
    this.duration = 0;
    this.detail = null;
  };
  PerformanceMarkOrMeasure.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PerformanceMarkOrMeasure.validate = function(messageValidator, offset) {
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


    // validate PerformanceMarkOrMeasure.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PerformanceMarkOrMeasure.entryType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, PerformanceMarkOrMeasure.EntryType);
    if (err !== validator.validationError.NONE)
        return err;




    // validate PerformanceMarkOrMeasure.detail
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 32, big_buffer$.BigBuffer, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PerformanceMarkOrMeasure.encodedSize = codec.kStructHeaderSize + 48;

  PerformanceMarkOrMeasure.decode = function(decoder) {
    var packed;
    var val = new PerformanceMarkOrMeasure();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name =
        decoder.decodeStruct(codec.String);
    val.entryType =
        decoder.decodeStruct(new codec.Enum(PerformanceMarkOrMeasure.EntryType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.startTime =
        decoder.decodeStruct(codec.Double);
    val.duration =
        decoder.decodeStruct(codec.Double);
    val.detail =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  PerformanceMarkOrMeasure.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PerformanceMarkOrMeasure.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.Int32, val.entryType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Double, val.startTime);
    encoder.encodeStruct(codec.Double, val.duration);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.detail);
  };
  exports.PerformanceMarkOrMeasure = PerformanceMarkOrMeasure;
})();