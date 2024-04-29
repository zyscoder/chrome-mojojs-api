// gpu/ipc/common/shared_image_capabilities.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/shared_image_capabilities.mojom';
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



  function SharedImageCapabilities(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedImageCapabilities.prototype.initDefaults_ = function() {
    this.supportsScanoutSharedImages = false;
    this.supportsLuminanceSharedImages = false;
    this.disableR8SharedImages = false;
    this.sharedImageD3d = false;
    this.sharedImageSwapChain = false;
  };
  SharedImageCapabilities.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedImageCapabilities.validate = function(messageValidator, offset) {
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

  SharedImageCapabilities.encodedSize = codec.kStructHeaderSize + 8;

  SharedImageCapabilities.decode = function(decoder) {
    var packed;
    var val = new SharedImageCapabilities();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.supportsScanoutSharedImages = (packed >> 0) & 1 ? true : false;
    val.supportsLuminanceSharedImages = (packed >> 1) & 1 ? true : false;
    val.disableR8SharedImages = (packed >> 2) & 1 ? true : false;
    val.sharedImageD3d = (packed >> 3) & 1 ? true : false;
    val.sharedImageSwapChain = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SharedImageCapabilities.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedImageCapabilities.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.supportsScanoutSharedImages & 1) << 0
    packed |= (val.supportsLuminanceSharedImages & 1) << 1
    packed |= (val.disableR8SharedImages & 1) << 2
    packed |= (val.sharedImageD3d & 1) << 3
    packed |= (val.sharedImageSwapChain & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.SharedImageCapabilities = SharedImageCapabilities;
})();