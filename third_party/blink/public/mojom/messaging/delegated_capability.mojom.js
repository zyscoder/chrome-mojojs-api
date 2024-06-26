// third_party/blink/public/mojom/messaging/delegated_capability.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/messaging/delegated_capability.mojom';
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


  var DelegatedCapability = {};
  DelegatedCapability.kNone = 0;
  DelegatedCapability.kPaymentRequest = 1;
  DelegatedCapability.kFullscreenRequest = 2;
  DelegatedCapability.kDisplayCaptureRequest = 3;
  DelegatedCapability.MIN_VALUE = 0;
  DelegatedCapability.MAX_VALUE = 3;

  DelegatedCapability.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  DelegatedCapability.toKnownEnumValue = function(value) {
    return value;
  };

  DelegatedCapability.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.DelegatedCapability = DelegatedCapability;
})();