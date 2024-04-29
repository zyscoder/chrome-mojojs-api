// third_party/blink/public/mojom/permissions/permission_status.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/permissions/permission_status.mojom';
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


  var PermissionStatus = {};
  PermissionStatus.GRANTED = 0;
  PermissionStatus.DENIED = 1;
  PermissionStatus.ASK = 2;
  PermissionStatus.LAST = 2;
  PermissionStatus.MIN_VALUE = 0;
  PermissionStatus.MAX_VALUE = 2;

  PermissionStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PermissionStatus.toKnownEnumValue = function(value) {
    return value;
  };

  PermissionStatus.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.PermissionStatus = PermissionStatus;
})();