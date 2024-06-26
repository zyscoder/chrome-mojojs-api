// third_party/blink/public/mojom/frame/sudden_termination_disabler_type.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/sudden_termination_disabler_type.mojom';
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


  var SuddenTerminationDisablerType = {};
  SuddenTerminationDisablerType.kBeforeUnloadHandler = 0;
  SuddenTerminationDisablerType.kPageHideHandler = 1;
  SuddenTerminationDisablerType.kUnloadHandler = 2;
  SuddenTerminationDisablerType.kVisibilityChangeHandler = 3;
  SuddenTerminationDisablerType.MIN_VALUE = 0;
  SuddenTerminationDisablerType.MAX_VALUE = 3;

  SuddenTerminationDisablerType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  SuddenTerminationDisablerType.toKnownEnumValue = function(value) {
    return value;
  };

  SuddenTerminationDisablerType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.SuddenTerminationDisablerType = SuddenTerminationDisablerType;
})();