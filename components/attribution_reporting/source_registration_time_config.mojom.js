// components/attribution_reporting/source_registration_time_config.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/attribution_reporting/source_registration_time_config.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('attributionReporting.mojom');


  var SourceRegistrationTimeConfig = {};
  SourceRegistrationTimeConfig.kInclude = 0;
  SourceRegistrationTimeConfig.kExclude = 1;
  SourceRegistrationTimeConfig.MIN_VALUE = 0;
  SourceRegistrationTimeConfig.MAX_VALUE = 1;

  SourceRegistrationTimeConfig.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  SourceRegistrationTimeConfig.toKnownEnumValue = function(value) {
    return value;
  };

  SourceRegistrationTimeConfig.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.SourceRegistrationTimeConfig = SourceRegistrationTimeConfig;
})();