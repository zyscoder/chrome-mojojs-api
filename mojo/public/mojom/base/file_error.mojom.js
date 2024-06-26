// mojo/public/mojom/base/file_error.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/mojom/base/file_error.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojoBase.mojom');


  var FileError = {};
  FileError.OK = 0;
  FileError.FAILED = -1;
  FileError.IN_USE = -2;
  FileError.EXISTS = -3;
  FileError.NOT_FOUND = -4;
  FileError.ACCESS_DENIED = -5;
  FileError.TOO_MANY_OPENED = -6;
  FileError.NO_MEMORY = -7;
  FileError.NO_SPACE = -8;
  FileError.NOT_A_DIRECTORY = -9;
  FileError.INVALID_OPERATION = -10;
  FileError.SECURITY = -11;
  FileError.ABORT = -12;
  FileError.NOT_A_FILE = -13;
  FileError.NOT_EMPTY = -14;
  FileError.INVALID_URL = -15;
  FileError.IO = -16;
  FileError.MIN_VALUE = -16;
  FileError.MAX_VALUE = 0;

  FileError.isKnownEnumValue = function(value) {
    switch (value) {
    case -16:
    case -15:
    case -14:
    case -13:
    case -12:
    case -11:
    case -10:
    case -9:
    case -8:
    case -7:
    case -6:
    case -5:
    case -4:
    case -3:
    case -2:
    case -1:
    case 0:
      return true;
    }
    return false;
  };

  FileError.toKnownEnumValue = function(value) {
    return value;
  };

  FileError.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.FileError = FileError;
})();