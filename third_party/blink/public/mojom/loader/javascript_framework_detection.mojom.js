// third_party/blink/public/mojom/loader/javascript_framework_detection.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/javascript_framework_detection.mojom';
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


  var JavaScriptFramework = {};
  JavaScriptFramework.kNuxt = 0;
  JavaScriptFramework.kVuePress = 1;
  JavaScriptFramework.kSapper = 2;
  JavaScriptFramework.kGatsby = 3;
  JavaScriptFramework.kNext = 4;
  JavaScriptFramework.kAngular = 5;
  JavaScriptFramework.kVue = 6;
  JavaScriptFramework.kSvelte = 7;
  JavaScriptFramework.kPreact = 8;
  JavaScriptFramework.kReact = 9;
  JavaScriptFramework.kDrupal = 10;
  JavaScriptFramework.kJoomla = 11;
  JavaScriptFramework.kShopify = 12;
  JavaScriptFramework.kSquarespace = 13;
  JavaScriptFramework.kWix = 14;
  JavaScriptFramework.kWordPress = 15;
  JavaScriptFramework.MIN_VALUE = 0;
  JavaScriptFramework.MAX_VALUE = 15;

  JavaScriptFramework.isKnownEnumValue = function(value) {
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
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      return true;
    }
    return false;
  };

  JavaScriptFramework.toKnownEnumValue = function(value) {
    return value;
  };

  JavaScriptFramework.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function JavaScriptFrameworkDetectionResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  JavaScriptFrameworkDetectionResult.prototype.initDefaults_ = function() {
    this.detectedVersions = null;
  };
  JavaScriptFrameworkDetectionResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  JavaScriptFrameworkDetectionResult.validate = function(messageValidator, offset) {
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


    // validate JavaScriptFrameworkDetectionResult.detectedVersions
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, new codec.Enum(JavaScriptFramework), codec.Int16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  JavaScriptFrameworkDetectionResult.encodedSize = codec.kStructHeaderSize + 8;

  JavaScriptFrameworkDetectionResult.decode = function(decoder) {
    var packed;
    var val = new JavaScriptFrameworkDetectionResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.detectedVersions =
        decoder.decodeMapPointer(new codec.Enum(JavaScriptFramework), codec.Int16);
    return val;
  };

  JavaScriptFrameworkDetectionResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(JavaScriptFrameworkDetectionResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(new codec.Enum(JavaScriptFramework), codec.Int16, val.detectedVersions);
  };
  exports.JavaScriptFramework = JavaScriptFramework;
  exports.JavaScriptFrameworkDetectionResult = JavaScriptFrameworkDetectionResult;
})();