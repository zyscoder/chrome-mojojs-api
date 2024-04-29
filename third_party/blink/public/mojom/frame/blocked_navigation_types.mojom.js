// third_party/blink/public/mojom/frame/blocked_navigation_types.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/blocked_navigation_types.mojom';
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


  var NavigationBlockedReason = {};
  NavigationBlockedReason.kRedirectWithNoUserGesture = 0;
  NavigationBlockedReason.kRedirectWithNoUserGestureSandbox = 1;
  NavigationBlockedReason.MIN_VALUE = 0;
  NavigationBlockedReason.MAX_VALUE = 1;

  NavigationBlockedReason.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  NavigationBlockedReason.toKnownEnumValue = function(value) {
    return value;
  };

  NavigationBlockedReason.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.NavigationBlockedReason = NavigationBlockedReason;
})();