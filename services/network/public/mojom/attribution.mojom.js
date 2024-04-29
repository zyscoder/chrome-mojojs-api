// services/network/public/mojom/attribution.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/attribution.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');


  var AttributionSupport = {};
  AttributionSupport.kWeb = 0;
  AttributionSupport.kWebAndOs = 1;
  AttributionSupport.kOs = 2;
  AttributionSupport.kNone = 3;
  AttributionSupport.MIN_VALUE = 0;
  AttributionSupport.MAX_VALUE = 3;

  AttributionSupport.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  AttributionSupport.toKnownEnumValue = function(value) {
    return value;
  };

  AttributionSupport.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AttributionReportingEligibility = {};
  AttributionReportingEligibility.kUnset = 0;
  AttributionReportingEligibility.kEmpty = 1;
  AttributionReportingEligibility.kEventSource = 2;
  AttributionReportingEligibility.kNavigationSource = 3;
  AttributionReportingEligibility.kTrigger = 4;
  AttributionReportingEligibility.kEventSourceOrTrigger = 5;
  AttributionReportingEligibility.MIN_VALUE = 0;
  AttributionReportingEligibility.MAX_VALUE = 5;

  AttributionReportingEligibility.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  AttributionReportingEligibility.toKnownEnumValue = function(value) {
    return value;
  };

  AttributionReportingEligibility.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function TriggerVerification(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TriggerVerification.prototype.initDefaults_ = function() {
    this.token = null;
    this.aggregatableReportId = null;
  };
  TriggerVerification.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TriggerVerification.validate = function(messageValidator, offset) {
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


    // validate TriggerVerification.token
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TriggerVerification.aggregatableReportId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TriggerVerification.encodedSize = codec.kStructHeaderSize + 16;

  TriggerVerification.decode = function(decoder) {
    var packed;
    var val = new TriggerVerification();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token =
        decoder.decodeStruct(codec.String);
    val.aggregatableReportId =
        decoder.decodeStruct(codec.String);
    return val;
  };

  TriggerVerification.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TriggerVerification.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.token);
    encoder.encodeStruct(codec.String, val.aggregatableReportId);
  };
  function AttributionReportingRuntimeFeatures(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AttributionReportingRuntimeFeatures.prototype.initDefaults_ = function() {
    this.crossAppWebEnabled = false;
  };
  AttributionReportingRuntimeFeatures.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AttributionReportingRuntimeFeatures.validate = function(messageValidator, offset) {
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

  AttributionReportingRuntimeFeatures.encodedSize = codec.kStructHeaderSize + 8;

  AttributionReportingRuntimeFeatures.decode = function(decoder) {
    var packed;
    var val = new AttributionReportingRuntimeFeatures();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.crossAppWebEnabled = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AttributionReportingRuntimeFeatures.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AttributionReportingRuntimeFeatures.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.crossAppWebEnabled & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.AttributionSupport = AttributionSupport;
  exports.AttributionReportingEligibility = AttributionReportingEligibility;
  exports.TriggerVerification = TriggerVerification;
  exports.AttributionReportingRuntimeFeatures = AttributionReportingRuntimeFeatures;
})();