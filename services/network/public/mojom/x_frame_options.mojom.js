// services/network/public/mojom/x_frame_options.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/x_frame_options.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');


  var XFrameOptionsValue = {};
  XFrameOptionsValue.kNone = 0;
  XFrameOptionsValue.kDeny = 1;
  XFrameOptionsValue.kSameOrigin = 2;
  XFrameOptionsValue.kAllowAll = 3;
  XFrameOptionsValue.kInvalid = 4;
  XFrameOptionsValue.kConflict = 5;
  XFrameOptionsValue.MIN_VALUE = 0;
  XFrameOptionsValue.MAX_VALUE = 5;

  XFrameOptionsValue.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  XFrameOptionsValue.toKnownEnumValue = function(value) {
    return value;
  };

  XFrameOptionsValue.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.XFrameOptionsValue = XFrameOptionsValue;
})();