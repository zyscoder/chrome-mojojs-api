// services/network/public/mojom/encoded_body_length.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/encoded_body_length.mojom';
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



  function EncodedBodyLength(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EncodedBodyLength.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  EncodedBodyLength.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EncodedBodyLength.validate = function(messageValidator, offset) {
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

  EncodedBodyLength.encodedSize = codec.kStructHeaderSize + 8;

  EncodedBodyLength.decode = function(decoder) {
    var packed;
    var val = new EncodedBodyLength();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  EncodedBodyLength.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EncodedBodyLength.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.value);
  };
  exports.EncodedBodyLength = EncodedBodyLength;
})();