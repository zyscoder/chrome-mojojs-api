// content/public/common/extra_mojo_js_features.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/public/common/extra_mojo_js_features.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('content.mojom');



  function ExtraMojoJsFeatures(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ExtraMojoJsFeatures.prototype.initDefaults_ = function() {
    this.fileSystemAccess = false;
  };
  ExtraMojoJsFeatures.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ExtraMojoJsFeatures.validate = function(messageValidator, offset) {
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

  ExtraMojoJsFeatures.encodedSize = codec.kStructHeaderSize + 8;

  ExtraMojoJsFeatures.decode = function(decoder) {
    var packed;
    var val = new ExtraMojoJsFeatures();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.fileSystemAccess = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ExtraMojoJsFeatures.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ExtraMojoJsFeatures.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.fileSystemAccess & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.ExtraMojoJsFeatures = ExtraMojoJsFeatures;
})();