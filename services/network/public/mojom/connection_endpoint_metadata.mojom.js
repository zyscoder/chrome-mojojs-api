// services/network/public/mojom/connection_endpoint_metadata.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/connection_endpoint_metadata.mojom';
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



  function ConnectionEndpointMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ConnectionEndpointMetadata.prototype.initDefaults_ = function() {
    this.supportedProtocolAlpns = null;
    this.echConfigList = null;
    this.targetName = null;
  };
  ConnectionEndpointMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ConnectionEndpointMetadata.validate = function(messageValidator, offset) {
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


    // validate ConnectionEndpointMetadata.supportedProtocolAlpns
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ConnectionEndpointMetadata.echConfigList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ConnectionEndpointMetadata.targetName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ConnectionEndpointMetadata.encodedSize = codec.kStructHeaderSize + 24;

  ConnectionEndpointMetadata.decode = function(decoder) {
    var packed;
    var val = new ConnectionEndpointMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.supportedProtocolAlpns =
        decoder.decodeArrayPointer(codec.String);
    val.echConfigList =
        decoder.decodeArrayPointer(codec.Uint8);
    val.targetName =
        decoder.decodeStruct(codec.String);
    return val;
  };

  ConnectionEndpointMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ConnectionEndpointMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.supportedProtocolAlpns);
    encoder.encodeArrayPointer(codec.Uint8, val.echConfigList);
    encoder.encodeStruct(codec.String, val.targetName);
  };
  exports.ConnectionEndpointMetadata = ConnectionEndpointMetadata;
})();