// ui/base/mojom/window_open_disposition.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/base/mojom/window_open_disposition.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');


  var WindowOpenDisposition = {};
  WindowOpenDisposition.UNKNOWN = 0;
  WindowOpenDisposition.CURRENT_TAB = 1;
  WindowOpenDisposition.SINGLETON_TAB = 2;
  WindowOpenDisposition.NEW_FOREGROUND_TAB = 3;
  WindowOpenDisposition.NEW_BACKGROUND_TAB = 4;
  WindowOpenDisposition.NEW_POPUP = 5;
  WindowOpenDisposition.NEW_WINDOW = 6;
  WindowOpenDisposition.SAVE_TO_DISK = 7;
  WindowOpenDisposition.OFF_THE_RECORD = 8;
  WindowOpenDisposition.IGNORE_ACTION = 9;
  WindowOpenDisposition.SWITCH_TO_TAB = 10;
  WindowOpenDisposition.NEW_PICTURE_IN_PICTURE = 11;
  WindowOpenDisposition.MIN_VALUE = 0;
  WindowOpenDisposition.MAX_VALUE = 11;

  WindowOpenDisposition.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  WindowOpenDisposition.toKnownEnumValue = function(value) {
    return value;
  };

  WindowOpenDisposition.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ClickModifiers(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ClickModifiers.prototype.initDefaults_ = function() {
    this.middleButton = false;
    this.altKey = false;
    this.ctrlKey = false;
    this.metaKey = false;
    this.shiftKey = false;
  };
  ClickModifiers.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ClickModifiers.validate = function(messageValidator, offset) {
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

  ClickModifiers.encodedSize = codec.kStructHeaderSize + 8;

  ClickModifiers.decode = function(decoder) {
    var packed;
    var val = new ClickModifiers();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.middleButton = (packed >> 0) & 1 ? true : false;
    val.altKey = (packed >> 1) & 1 ? true : false;
    val.ctrlKey = (packed >> 2) & 1 ? true : false;
    val.metaKey = (packed >> 3) & 1 ? true : false;
    val.shiftKey = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ClickModifiers.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ClickModifiers.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.middleButton & 1) << 0
    packed |= (val.altKey & 1) << 1
    packed |= (val.ctrlKey & 1) << 2
    packed |= (val.metaKey & 1) << 3
    packed |= (val.shiftKey & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.WindowOpenDisposition = WindowOpenDisposition;
  exports.ClickModifiers = ClickModifiers;
})();