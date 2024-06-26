// third_party/blink/public/mojom/file_system_access/file_system_access_cloud_identifier.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/file_system_access/file_system_access_cloud_identifier.mojom';
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



  function FileSystemAccessCloudIdentifier(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemAccessCloudIdentifier.prototype.initDefaults_ = function() {
    this.providerName = null;
    this.id = null;
  };
  FileSystemAccessCloudIdentifier.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileSystemAccessCloudIdentifier.validate = function(messageValidator, offset) {
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


    // validate FileSystemAccessCloudIdentifier.providerName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemAccessCloudIdentifier.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemAccessCloudIdentifier.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemAccessCloudIdentifier.decode = function(decoder) {
    var packed;
    var val = new FileSystemAccessCloudIdentifier();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.providerName =
        decoder.decodeStruct(codec.String);
    val.id =
        decoder.decodeStruct(codec.String);
    return val;
  };

  FileSystemAccessCloudIdentifier.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemAccessCloudIdentifier.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.providerName);
    encoder.encodeStruct(codec.String, val.id);
  };
  exports.FileSystemAccessCloudIdentifier = FileSystemAccessCloudIdentifier;
})();