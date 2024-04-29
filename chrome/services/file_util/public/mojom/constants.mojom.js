// chrome/services/file_util/public/mojom/constants.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/services/file_util/public/mojom/constants.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('chrome.fileUtil.mojom');


  var ExtractionResult = {};
  ExtractionResult.kSuccess = 0;
  ExtractionResult.kGenericError = 1;
  ExtractionResult.kInvalidSrcFile = 2;
  ExtractionResult.kDstFileError = 3;
  ExtractionResult.MIN_VALUE = 0;
  ExtractionResult.MAX_VALUE = 3;

  ExtractionResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ExtractionResult.toKnownEnumValue = function(value) {
    return value;
  };

  ExtractionResult.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ExtractionResult = ExtractionResult;
})();