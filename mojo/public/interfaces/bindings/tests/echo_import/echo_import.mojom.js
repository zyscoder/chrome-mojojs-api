// mojo/public/interfaces/bindings/tests/echo_import/echo_import.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/interfaces/bindings/tests/echo_import/echo_import.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('test.echoImport.mojom');



  function Point(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Point.prototype.initDefaults_ = function() {
    this.x = 0;
    this.y = 0;
  };
  Point.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Point.validate = function(messageValidator, offset) {
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

  Point.encodedSize = codec.kStructHeaderSize + 8;

  Point.decode = function(decoder) {
    var packed;
    var val = new Point();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.x =
        decoder.decodeStruct(codec.Int32);
    val.y =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  Point.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Point.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.x);
    encoder.encodeStruct(codec.Int32, val.y);
  };
  exports.Point = Point;
})();