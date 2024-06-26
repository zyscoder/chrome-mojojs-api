// third_party/blink/public/mojom/css/preferred_contrast.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/css/preferred_contrast.mojom';
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


  var PreferredContrast = {};
  PreferredContrast.kMore = 0;
  PreferredContrast.kLess = 1;
  PreferredContrast.kNoPreference = 2;
  PreferredContrast.kCustom = 3;
  PreferredContrast.MIN_VALUE = 0;
  PreferredContrast.MAX_VALUE = 3;

  PreferredContrast.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  PreferredContrast.toKnownEnumValue = function(value) {
    return value;
  };

  PreferredContrast.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.PreferredContrast = PreferredContrast;
})();