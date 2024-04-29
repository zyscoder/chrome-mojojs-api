// mojo/public/interfaces/bindings/tests/rect.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/interfaces/bindings/tests/rect.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojo.test');



  function Rect(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Rect.prototype.initDefaults_ = function() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  Rect.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Rect.validate = function(messageValidator, offset) {
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

  Rect.encodedSize = codec.kStructHeaderSize + 16;

  Rect.decode = function(decoder) {
    var packed;
    var val = new Rect();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.x =
        decoder.decodeStruct(codec.Int32);
    val.y =
        decoder.decodeStruct(codec.Int32);
    val.width =
        decoder.decodeStruct(codec.Int32);
    val.height =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  Rect.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Rect.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.x);
    encoder.encodeStruct(codec.Int32, val.y);
    encoder.encodeStruct(codec.Int32, val.width);
    encoder.encodeStruct(codec.Int32, val.height);
  };
  function TypemappedRect(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TypemappedRect.prototype.initDefaults_ = function() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  TypemappedRect.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TypemappedRect.validate = function(messageValidator, offset) {
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

  TypemappedRect.encodedSize = codec.kStructHeaderSize + 16;

  TypemappedRect.decode = function(decoder) {
    var packed;
    var val = new TypemappedRect();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.x =
        decoder.decodeStruct(codec.Int32);
    val.y =
        decoder.decodeStruct(codec.Int32);
    val.width =
        decoder.decodeStruct(codec.Int32);
    val.height =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  TypemappedRect.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TypemappedRect.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.x);
    encoder.encodeStruct(codec.Int32, val.y);
    encoder.encodeStruct(codec.Int32, val.width);
    encoder.encodeStruct(codec.Int32, val.height);
  };
  function SharedTypemappedRect(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedTypemappedRect.prototype.initDefaults_ = function() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  SharedTypemappedRect.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedTypemappedRect.validate = function(messageValidator, offset) {
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

  SharedTypemappedRect.encodedSize = codec.kStructHeaderSize + 16;

  SharedTypemappedRect.decode = function(decoder) {
    var packed;
    var val = new SharedTypemappedRect();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.x =
        decoder.decodeStruct(codec.Int32);
    val.y =
        decoder.decodeStruct(codec.Int32);
    val.width =
        decoder.decodeStruct(codec.Int32);
    val.height =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  SharedTypemappedRect.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedTypemappedRect.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.x);
    encoder.encodeStruct(codec.Int32, val.y);
    encoder.encodeStruct(codec.Int32, val.width);
    encoder.encodeStruct(codec.Int32, val.height);
  };
  exports.Rect = Rect;
  exports.TypemappedRect = TypemappedRect;
  exports.SharedTypemappedRect = SharedTypemappedRect;
})();