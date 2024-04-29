// third_party/blink/public/mojom/private_aggregation/aggregatable_report.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/private_aggregation/aggregatable_report.mojom';
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
  var int128$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/int128.mojom', '../../../../../mojo/public/mojom/base/int128.mojom.js');
  }


  var AggregationServiceMode = {};
  AggregationServiceMode.kTeeBased = 0;
  AggregationServiceMode.kExperimentalPoplar = 1;
  AggregationServiceMode.kDefault = 0;
  AggregationServiceMode.MIN_VALUE = 0;
  AggregationServiceMode.MAX_VALUE = 1;

  AggregationServiceMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  AggregationServiceMode.toKnownEnumValue = function(value) {
    return value;
  };

  AggregationServiceMode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function AggregatableReportHistogramContribution(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AggregatableReportHistogramContribution.prototype.initDefaults_ = function() {
    this.bucket = null;
    this.value = 0;
  };
  AggregatableReportHistogramContribution.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AggregatableReportHistogramContribution.validate = function(messageValidator, offset) {
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


    // validate AggregatableReportHistogramContribution.bucket
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, int128$.Uint128, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  AggregatableReportHistogramContribution.encodedSize = codec.kStructHeaderSize + 16;

  AggregatableReportHistogramContribution.decode = function(decoder) {
    var packed;
    var val = new AggregatableReportHistogramContribution();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bucket =
        decoder.decodeStructPointer(int128$.Uint128);
    val.value =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AggregatableReportHistogramContribution.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AggregatableReportHistogramContribution.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(int128$.Uint128, val.bucket);
    encoder.encodeStruct(codec.Int32, val.value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.AggregationServiceMode = AggregationServiceMode;
  exports.AggregatableReportHistogramContribution = AggregatableReportHistogramContribution;
})();