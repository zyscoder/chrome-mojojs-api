// services/network/public/mojom/key_pinning.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/key_pinning.mojom';
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



  function PinSet(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PinSet.prototype.initDefaults_ = function() {
    this.name = null;
    this.staticSpkiHashes = null;
    this.badStaticSpkiHashes = null;
    this.reportUri = null;
  };
  PinSet.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PinSet.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PinSet.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PinSet.staticSpkiHashes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.ArrayOf(codec.Uint8), false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PinSet.badStaticSpkiHashes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.ArrayOf(codec.Uint8), false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PinSet.reportUri
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PinSet.encodedSize = codec.kStructHeaderSize + 32;

  PinSet.decode = function(decoder) {
    var packed;
    var val = new PinSet();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name =
        decoder.decodeStruct(codec.String);
    val.staticSpkiHashes =
        decoder.decodeArrayPointer(new codec.ArrayOf(codec.Uint8));
    val.badStaticSpkiHashes =
        decoder.decodeArrayPointer(new codec.ArrayOf(codec.Uint8));
    val.reportUri =
        decoder.decodeStruct(codec.String);
    return val;
  };

  PinSet.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PinSet.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.Uint8), val.staticSpkiHashes);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.Uint8), val.badStaticSpkiHashes);
    encoder.encodeStruct(codec.String, val.reportUri);
  };
  function PinSetInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PinSetInfo.prototype.initDefaults_ = function() {
    this.hostname = null;
    this.pinsetName = null;
    this.includeSubdomains = false;
  };
  PinSetInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PinSetInfo.validate = function(messageValidator, offset) {
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


    // validate PinSetInfo.hostname
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PinSetInfo.pinsetName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PinSetInfo.encodedSize = codec.kStructHeaderSize + 24;

  PinSetInfo.decode = function(decoder) {
    var packed;
    var val = new PinSetInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostname =
        decoder.decodeStruct(codec.String);
    val.pinsetName =
        decoder.decodeStruct(codec.String);
    packed = decoder.readUint8();
    val.includeSubdomains = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PinSetInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PinSetInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.hostname);
    encoder.encodeStruct(codec.String, val.pinsetName);
    packed = 0;
    packed |= (val.includeSubdomains & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PinList(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PinList.prototype.initDefaults_ = function() {
    this.pinsets = null;
    this.hostPins = null;
  };
  PinList.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PinList.validate = function(messageValidator, offset) {
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


    // validate PinList.pinsets
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(PinSet), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PinList.hostPins
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(PinSetInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PinList.encodedSize = codec.kStructHeaderSize + 16;

  PinList.decode = function(decoder) {
    var packed;
    var val = new PinList();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pinsets =
        decoder.decodeArrayPointer(new codec.PointerTo(PinSet));
    val.hostPins =
        decoder.decodeArrayPointer(new codec.PointerTo(PinSetInfo));
    return val;
  };

  PinList.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PinList.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(PinSet), val.pinsets);
    encoder.encodeArrayPointer(new codec.PointerTo(PinSetInfo), val.hostPins);
  };
  exports.PinSet = PinSet;
  exports.PinSetInfo = PinSetInfo;
  exports.PinList = PinList;
})();