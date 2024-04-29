// services/accessibility/public/mojom/assistive_technology_type.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/accessibility/public/mojom/assistive_technology_type.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ax.mojom');


  var AssistiveTechnologyType = {};
  AssistiveTechnologyType.kUnknown = 0;
  AssistiveTechnologyType.kChromeVox = 1;
  AssistiveTechnologyType.kSelectToSpeak = 2;
  AssistiveTechnologyType.kSwitchAccess = 3;
  AssistiveTechnologyType.kAutoClick = 4;
  AssistiveTechnologyType.kMagnifier = 5;
  AssistiveTechnologyType.kDictation = 6;
  AssistiveTechnologyType.MIN_VALUE = 0;
  AssistiveTechnologyType.MAX_VALUE = 6;
  AssistiveTechnologyType.DEFAULT_VALUE = 0;

  AssistiveTechnologyType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return true;
    }
    return false;
  };

  AssistiveTechnologyType.toKnownEnumValue = function(value) {
    if (this.isKnownEnumValue(value))
      return value;
    return this.DEFAULT_VALUE;
  };

  AssistiveTechnologyType.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.AssistiveTechnologyType = AssistiveTechnologyType;
})();