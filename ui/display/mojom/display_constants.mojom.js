// ui/display/mojom/display_constants.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/display/mojom/display_constants.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('display.mojom');


  var DisplayConnectionType = {};
  DisplayConnectionType.DISPLAY_CONNECTION_TYPE_NONE = 0;
  DisplayConnectionType.DISPLAY_CONNECTION_TYPE_UNKNOWN = 1;
  DisplayConnectionType.DISPLAY_CONNECTION_TYPE_INTERNAL = 2;
  DisplayConnectionType.DISPLAY_CONNECTION_TYPE_VGA = 4;
  DisplayConnectionType.DISPLAY_CONNECTION_TYPE_HDMI = 8;
  DisplayConnectionType.DISPLAY_CONNECTION_TYPE_DVI = 16;
  DisplayConnectionType.DISPLAY_CONNECTION_TYPE_DISPLAYPORT = 32;
  DisplayConnectionType.DISPLAY_CONNECTION_TYPE_NETWORK = 64;
  DisplayConnectionType.MIN_VALUE = 0;
  DisplayConnectionType.MAX_VALUE = 64;

  DisplayConnectionType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 4:
    case 8:
    case 16:
    case 32:
    case 64:
      return true;
    }
    return false;
  };

  DisplayConnectionType.toKnownEnumValue = function(value) {
    return value;
  };

  DisplayConnectionType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var HDCPState = {};
  HDCPState.HDCP_STATE_UNDESIRED = 0;
  HDCPState.HDCP_STATE_DESIRED = 1;
  HDCPState.HDCP_STATE_ENABLED = 2;
  HDCPState.MIN_VALUE = 0;
  HDCPState.MAX_VALUE = 2;

  HDCPState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  HDCPState.toKnownEnumValue = function(value) {
    return value;
  };

  HDCPState.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ContentProtectionMethod = {};
  ContentProtectionMethod.CONTENT_PROTECTION_METHOD_NONE = 0;
  ContentProtectionMethod.CONTENT_PROTECTION_METHOD_HDCP_TYPE_0 = 1;
  ContentProtectionMethod.CONTENT_PROTECTION_METHOD_HDCP_TYPE_1 = 2;
  ContentProtectionMethod.MIN_VALUE = 0;
  ContentProtectionMethod.MAX_VALUE = 2;

  ContentProtectionMethod.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ContentProtectionMethod.toKnownEnumValue = function(value) {
    return value;
  };

  ContentProtectionMethod.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PanelOrientation = {};
  PanelOrientation.NORMAL = 0;
  PanelOrientation.BOTTOM_UP = 1;
  PanelOrientation.LEFT_UP = 2;
  PanelOrientation.RIGHT_UP = 3;
  PanelOrientation.MIN_VALUE = 0;
  PanelOrientation.MAX_VALUE = 3;

  PanelOrientation.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  PanelOrientation.toKnownEnumValue = function(value) {
    return value;
  };

  PanelOrientation.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PrivacyScreenState = {};
  PrivacyScreenState.DISABLED = 0;
  PrivacyScreenState.ENABLED = 1;
  PrivacyScreenState.DISABLED_LOCKED = 2;
  PrivacyScreenState.ENABLED_LOCKED = 3;
  PrivacyScreenState.NOT_SUPPORTED = 4;
  PrivacyScreenState.MIN_VALUE = 0;
  PrivacyScreenState.MAX_VALUE = 4;

  PrivacyScreenState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  PrivacyScreenState.toKnownEnumValue = function(value) {
    return value;
  };

  PrivacyScreenState.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VariableRefreshRateState = {};
  VariableRefreshRateState.kVrrDisabled = 0;
  VariableRefreshRateState.kVrrEnabled = 1;
  VariableRefreshRateState.kVrrNotCapable = 2;
  VariableRefreshRateState.MIN_VALUE = 0;
  VariableRefreshRateState.MAX_VALUE = 2;

  VariableRefreshRateState.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  VariableRefreshRateState.toKnownEnumValue = function(value) {
    return value;
  };

  VariableRefreshRateState.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.DisplayConnectionType = DisplayConnectionType;
  exports.HDCPState = HDCPState;
  exports.ContentProtectionMethod = ContentProtectionMethod;
  exports.PanelOrientation = PanelOrientation;
  exports.PrivacyScreenState = PrivacyScreenState;
  exports.VariableRefreshRateState = VariableRefreshRateState;
})();