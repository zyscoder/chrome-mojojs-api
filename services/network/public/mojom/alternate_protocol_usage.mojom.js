// services/network/public/mojom/alternate_protocol_usage.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/alternate_protocol_usage.mojom';
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


  var AlternateProtocolUsage = {};
  AlternateProtocolUsage.kNoRace = 0;
  AlternateProtocolUsage.kWonRace = 1;
  AlternateProtocolUsage.kMainJobWonRace = 2;
  AlternateProtocolUsage.kMappingMissing = 3;
  AlternateProtocolUsage.kBroken = 4;
  AlternateProtocolUsage.kDnsAlpnH3JobWonWithoutRace = 5;
  AlternateProtocolUsage.kDnsAlpnH3JobWonRace = 6;
  AlternateProtocolUsage.kUnspecifiedReason = 7;
  AlternateProtocolUsage.MIN_VALUE = 0;
  AlternateProtocolUsage.MAX_VALUE = 7;

  AlternateProtocolUsage.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  AlternateProtocolUsage.toKnownEnumValue = function(value) {
    return value;
  };

  AlternateProtocolUsage.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.AlternateProtocolUsage = AlternateProtocolUsage;
})();