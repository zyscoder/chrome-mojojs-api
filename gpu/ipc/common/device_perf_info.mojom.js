// gpu/ipc/common/device_perf_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/device_perf_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gpu.mojom');


  var Direct3DFeatureLevel = {};
  Direct3DFeatureLevel.k1_0_Core = 0;
  Direct3DFeatureLevel.k9_1 = 1;
  Direct3DFeatureLevel.k9_2 = 2;
  Direct3DFeatureLevel.k9_3 = 3;
  Direct3DFeatureLevel.k10_0 = 4;
  Direct3DFeatureLevel.k10_1 = 5;
  Direct3DFeatureLevel.k11_0 = 6;
  Direct3DFeatureLevel.k11_1 = 7;
  Direct3DFeatureLevel.k12_0 = 8;
  Direct3DFeatureLevel.k12_1 = 9;
  Direct3DFeatureLevel.k12_2 = 10;
  Direct3DFeatureLevel.MIN_VALUE = 0;
  Direct3DFeatureLevel.MAX_VALUE = 10;

  Direct3DFeatureLevel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return true;
    }
    return false;
  };

  Direct3DFeatureLevel.toKnownEnumValue = function(value) {
    return value;
  };

  Direct3DFeatureLevel.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var HasDiscreteGpu = {};
  HasDiscreteGpu.kUnknown = 0;
  HasDiscreteGpu.kNo = 1;
  HasDiscreteGpu.kYes = 2;
  HasDiscreteGpu.MIN_VALUE = 0;
  HasDiscreteGpu.MAX_VALUE = 2;

  HasDiscreteGpu.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  HasDiscreteGpu.toKnownEnumValue = function(value) {
    return value;
  };

  HasDiscreteGpu.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DevicePerfInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePerfInfo.prototype.initDefaults_ = function() {
    this.totalPhysicalMemoryMb = 0;
    this.totalDiskSpaceMb = 0;
    this.hardwareConcurrency = 0;
  };
  DevicePerfInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePerfInfo.validate = function(messageValidator, offset) {
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




    return validator.validationError.NONE;
  };

  DevicePerfInfo.encodedSize = codec.kStructHeaderSize + 16;

  DevicePerfInfo.decode = function(decoder) {
    var packed;
    var val = new DevicePerfInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.totalPhysicalMemoryMb =
        decoder.decodeStruct(codec.Uint32);
    val.totalDiskSpaceMb =
        decoder.decodeStruct(codec.Uint32);
    val.hardwareConcurrency =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DevicePerfInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePerfInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.totalPhysicalMemoryMb);
    encoder.encodeStruct(codec.Uint32, val.totalDiskSpaceMb);
    encoder.encodeStruct(codec.Uint32, val.hardwareConcurrency);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.Direct3DFeatureLevel = Direct3DFeatureLevel;
  exports.HasDiscreteGpu = HasDiscreteGpu;
  exports.DevicePerfInfo = DevicePerfInfo;
})();