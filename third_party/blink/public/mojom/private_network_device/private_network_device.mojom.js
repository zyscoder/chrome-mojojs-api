// third_party/blink/public/mojom/private_network_device/private_network_device.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/private_network_device/private_network_device.mojom';
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
  var ip_address$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address.mojom', '../../../../../services/network/public/mojom/ip_address.mojom.js');
  }



  function PrivateNetworkDevice(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrivateNetworkDevice.prototype.initDefaults_ = function() {
    this.id = null;
    this.name = null;
    this.ipAddress = null;
  };
  PrivateNetworkDevice.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrivateNetworkDevice.validate = function(messageValidator, offset) {
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


    // validate PrivateNetworkDevice.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PrivateNetworkDevice.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PrivateNetworkDevice.ipAddress
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrivateNetworkDevice.encodedSize = codec.kStructHeaderSize + 24;

  PrivateNetworkDevice.decode = function(decoder) {
    var packed;
    var val = new PrivateNetworkDevice();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.String);
    val.name =
        decoder.decodeStruct(codec.String);
    val.ipAddress =
        decoder.decodeStructPointer(ip_address$.IPAddress);
    return val;
  };

  PrivateNetworkDevice.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrivateNetworkDevice.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.ipAddress);
  };
  exports.PrivateNetworkDevice = PrivateNetworkDevice;
})();