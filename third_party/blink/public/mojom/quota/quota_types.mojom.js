// third_party/blink/public/mojom/quota/quota_types.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/quota/quota_types.mojom';
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


  var StorageType = {};
  StorageType.kTemporary = 0;
  StorageType.kDeprecatedPersistent = 1;
  StorageType.kSyncable = 2;
  StorageType.kDeprecatedQuotaNotManaged = 3;
  StorageType.kUnknown = 4;
  StorageType.MIN_VALUE = 0;
  StorageType.MAX_VALUE = 4;

  StorageType.isKnownEnumValue = function(value) {
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

  StorageType.toKnownEnumValue = function(value) {
    return value;
  };

  StorageType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BucketDurability = {};
  BucketDurability.kRelaxed = 0;
  BucketDurability.kStrict = 1;
  BucketDurability.MIN_VALUE = 0;
  BucketDurability.MAX_VALUE = 1;

  BucketDurability.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  BucketDurability.toKnownEnumValue = function(value) {
    return value;
  };

  BucketDurability.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var QuotaStatusCode = {};
  QuotaStatusCode.kOk = 0;
  QuotaStatusCode.kErrorNotSupported = 9;
  QuotaStatusCode.kErrorInvalidModification = 13;
  QuotaStatusCode.kErrorInvalidAccess = 15;
  QuotaStatusCode.kErrorAbort = 20;
  QuotaStatusCode.kUnknown = -1;
  QuotaStatusCode.MIN_VALUE = -1;
  QuotaStatusCode.MAX_VALUE = 20;

  QuotaStatusCode.isKnownEnumValue = function(value) {
    switch (value) {
    case -1:
    case 0:
    case 9:
    case 13:
    case 15:
    case 20:
      return true;
    }
    return false;
  };

  QuotaStatusCode.toKnownEnumValue = function(value) {
    return value;
  };

  QuotaStatusCode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function UsageBreakdown(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsageBreakdown.prototype.initDefaults_ = function() {
    this.fileSystem = 0;
    this.webSql = 0;
    this.indexedDatabase = 0;
    this.serviceWorkerCache = 0;
    this.serviceWorker = 0;
    this.backgroundFetch = 0;
  };
  UsageBreakdown.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsageBreakdown.validate = function(messageValidator, offset) {
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







    return validator.validationError.NONE;
  };

  UsageBreakdown.encodedSize = codec.kStructHeaderSize + 48;

  UsageBreakdown.decode = function(decoder) {
    var packed;
    var val = new UsageBreakdown();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fileSystem =
        decoder.decodeStruct(codec.Int64);
    val.webSql =
        decoder.decodeStruct(codec.Int64);
    val.indexedDatabase =
        decoder.decodeStruct(codec.Int64);
    val.serviceWorkerCache =
        decoder.decodeStruct(codec.Int64);
    val.serviceWorker =
        decoder.decodeStruct(codec.Int64);
    val.backgroundFetch =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  UsageBreakdown.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsageBreakdown.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.fileSystem);
    encoder.encodeStruct(codec.Int64, val.webSql);
    encoder.encodeStruct(codec.Int64, val.indexedDatabase);
    encoder.encodeStruct(codec.Int64, val.serviceWorkerCache);
    encoder.encodeStruct(codec.Int64, val.serviceWorker);
    encoder.encodeStruct(codec.Int64, val.backgroundFetch);
  };
  exports.StorageType = StorageType;
  exports.BucketDurability = BucketDurability;
  exports.QuotaStatusCode = QuotaStatusCode;
  exports.UsageBreakdown = UsageBreakdown;
})();