// extensions/common/mojom/manifest.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/manifest.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('extensions.mojom');


  var ManifestLocation = {};
  ManifestLocation.kInvalidLocation = 0;
  ManifestLocation.kInternal = 1;
  ManifestLocation.kExternalPref = 2;
  ManifestLocation.kExternalRegistry = 3;
  ManifestLocation.kUnpacked = 4;
  ManifestLocation.kComponent = 5;
  ManifestLocation.kExternalPrefDownload = 6;
  ManifestLocation.kExternalPolicyDownload = 7;
  ManifestLocation.kCommandLine = 8;
  ManifestLocation.kExternalPolicy = 9;
  ManifestLocation.kExternalComponent = 10;
  ManifestLocation.MIN_VALUE = 0;
  ManifestLocation.MAX_VALUE = 10;

  ManifestLocation.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return true;
    }
    return false;
  };

  ManifestLocation.toKnownEnumValue = function(value) {
    return value;
  };

  ManifestLocation.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ManifestLocation = ManifestLocation;
})();