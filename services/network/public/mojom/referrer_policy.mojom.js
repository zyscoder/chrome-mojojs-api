// services/network/public/mojom/referrer_policy.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/referrer_policy.mojom';
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


  var ReferrerPolicy = {};
  ReferrerPolicy.kAlways = 0;
  ReferrerPolicy.kDefault = 1;
  ReferrerPolicy.kNoReferrerWhenDowngrade = 2;
  ReferrerPolicy.kNever = 3;
  ReferrerPolicy.kOrigin = 4;
  ReferrerPolicy.kOriginWhenCrossOrigin = 5;
  ReferrerPolicy.kStrictOriginWhenCrossOrigin = 6;
  ReferrerPolicy.kSameOrigin = 7;
  ReferrerPolicy.kStrictOrigin = 8;
  ReferrerPolicy.MIN_VALUE = 0;
  ReferrerPolicy.MAX_VALUE = 8;
  ReferrerPolicy.DEFAULT_VALUE = 1;

  ReferrerPolicy.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  ReferrerPolicy.toKnownEnumValue = function(value) {
    if (this.isKnownEnumValue(value))
      return value;
    return this.DEFAULT_VALUE;
  };

  ReferrerPolicy.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var URLRequestReferrerPolicy = {};
  URLRequestReferrerPolicy.kClearReferrerOnTransitionFromSecureToInsecure = 0;
  URLRequestReferrerPolicy.kReduceReferrerGranularityOnTransitionCrossOrigin = 1;
  URLRequestReferrerPolicy.kOriginOnlyOnTransitionCrossOrigin = 2;
  URLRequestReferrerPolicy.kNeverClearReferrer = 3;
  URLRequestReferrerPolicy.kOrigin = 4;
  URLRequestReferrerPolicy.kClearReferrerOnTransitionCrossOrigin = 5;
  URLRequestReferrerPolicy.kOriginClearOnTransitionFromSecureToInsecure = 6;
  URLRequestReferrerPolicy.kNoReferrer = 7;
  URLRequestReferrerPolicy.MIN_VALUE = 0;
  URLRequestReferrerPolicy.MAX_VALUE = 7;

  URLRequestReferrerPolicy.isKnownEnumValue = function(value) {
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

  URLRequestReferrerPolicy.toKnownEnumValue = function(value) {
    return value;
  };

  URLRequestReferrerPolicy.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ReferrerPolicy = ReferrerPolicy;
  exports.URLRequestReferrerPolicy = URLRequestReferrerPolicy;
})();