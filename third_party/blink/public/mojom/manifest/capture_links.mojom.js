// third_party/blink/public/mojom/manifest/capture_links.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/manifest/capture_links.mojom';
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


  var CaptureLinks = {};
  CaptureLinks.kUndefined = 0;
  CaptureLinks.kNone = 1;
  CaptureLinks.kNewClient = 2;
  CaptureLinks.kExistingClientNavigate = 3;
  CaptureLinks.MIN_VALUE = 0;
  CaptureLinks.MAX_VALUE = 3;

  CaptureLinks.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  CaptureLinks.toKnownEnumValue = function(value) {
    return value;
  };

  CaptureLinks.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.CaptureLinks = CaptureLinks;
})();