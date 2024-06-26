// media/mojo/mojom/audio_parameters.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/audio_parameters.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');



  function AudioParameters(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioParameters.prototype.initDefaults_ = function() {
  };
  AudioParameters.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioParameters.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioParameters.encodedSize = codec.kStructHeaderSize + 0;

  AudioParameters.decode = function(decoder) {
    var packed;
    var val = new AudioParameters();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioParameters.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioParameters.encodedSize);
    encoder.writeUint32(0);
  };
  exports.AudioParameters = AudioParameters;
})();