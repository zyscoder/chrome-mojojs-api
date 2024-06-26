// services/network/public/mojom/cors.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/cors.mojom';
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
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var ip_address_space$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address_space.mojom', 'ip_address_space.mojom.js');
  }


  var CorsPreflightPolicy = {};
  CorsPreflightPolicy.kConsiderPreflight = 0;
  CorsPreflightPolicy.kPreventPreflight = 1;
  CorsPreflightPolicy.MIN_VALUE = 0;
  CorsPreflightPolicy.MAX_VALUE = 1;

  CorsPreflightPolicy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CorsPreflightPolicy.toKnownEnumValue = function(value) {
    return value;
  };

  CorsPreflightPolicy.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CorsError = {};
  CorsError.kDisallowedByMode = 0;
  CorsError.kInvalidResponse = 1;
  CorsError.kWildcardOriginNotAllowed = 2;
  CorsError.kMissingAllowOriginHeader = 3;
  CorsError.kMultipleAllowOriginValues = 4;
  CorsError.kInvalidAllowOriginValue = 5;
  CorsError.kAllowOriginMismatch = 6;
  CorsError.kInvalidAllowCredentials = 7;
  CorsError.kCorsDisabledScheme = 8;
  CorsError.kPreflightInvalidStatus = 9;
  CorsError.kPreflightDisallowedRedirect = 10;
  CorsError.kPreflightWildcardOriginNotAllowed = 11;
  CorsError.kPreflightMissingAllowOriginHeader = 12;
  CorsError.kPreflightMultipleAllowOriginValues = 13;
  CorsError.kPreflightInvalidAllowOriginValue = 14;
  CorsError.kPreflightAllowOriginMismatch = 15;
  CorsError.kPreflightInvalidAllowCredentials = 16;
  CorsError.kPreflightMissingAllowPrivateNetwork = 17;
  CorsError.kPreflightInvalidAllowPrivateNetwork = 18;
  CorsError.kInvalidAllowMethodsPreflightResponse = 19;
  CorsError.kInvalidAllowHeadersPreflightResponse = 20;
  CorsError.kMethodDisallowedByPreflightResponse = 21;
  CorsError.kHeaderDisallowedByPreflightResponse = 22;
  CorsError.kRedirectContainsCredentials = 23;
  CorsError.kInsecurePrivateNetwork = 24;
  CorsError.kInvalidPrivateNetworkAccess = 25;
  CorsError.kUnexpectedPrivateNetworkAccess = 26;
  CorsError.kPreflightMissingPrivateNetworkAccessId = 27;
  CorsError.kPreflightMissingPrivateNetworkAccessName = 28;
  CorsError.kPrivateNetworkAccessPermissionUnavailable = 29;
  CorsError.kPrivateNetworkAccessPermissionDenied = 30;
  CorsError.MIN_VALUE = 0;
  CorsError.MAX_VALUE = 30;

  CorsError.isKnownEnumValue = function(value) {
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
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
      return true;
    }
    return false;
  };

  CorsError.toKnownEnumValue = function(value) {
    return value;
  };

  CorsError.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PrivateNetworkAccessPreflightResult = {};
  PrivateNetworkAccessPreflightResult.kNone = 0;
  PrivateNetworkAccessPreflightResult.kSuccess = 1;
  PrivateNetworkAccessPreflightResult.kWarning = 2;
  PrivateNetworkAccessPreflightResult.kError = 3;
  PrivateNetworkAccessPreflightResult.MIN_VALUE = 0;
  PrivateNetworkAccessPreflightResult.MAX_VALUE = 3;

  PrivateNetworkAccessPreflightResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  PrivateNetworkAccessPreflightResult.toKnownEnumValue = function(value) {
    return value;
  };

  PrivateNetworkAccessPreflightResult.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CorsErrorStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CorsErrorStatus.prototype.initDefaults_ = function() {
    this.corsError = 0;
    this.targetAddressSpace = ip_address_space$.IPAddressSpace.kUnknown;
    this.failedParameter = null;
    this.resourceAddressSpace = ip_address_space$.IPAddressSpace.kUnknown;
    this.hasAuthorizationCoveredByWildcardOnPreflight = false;
    this.issueId = null;
  };
  CorsErrorStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CorsErrorStatus.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsErrorStatus.corsError
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CorsError);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsErrorStatus.failedParameter
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsErrorStatus.targetAddressSpace
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, ip_address_space$.IPAddressSpace);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CorsErrorStatus.resourceAddressSpace
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, ip_address_space$.IPAddressSpace);
    if (err !== validator.validationError.NONE)
        return err;



    // validate CorsErrorStatus.issueId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CorsErrorStatus.encodedSize = codec.kStructHeaderSize + 32;

  CorsErrorStatus.decode = function(decoder) {
    var packed;
    var val = new CorsErrorStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.corsError =
        decoder.decodeStruct(new codec.Enum(CorsError));
    val.targetAddressSpace =
        decoder.decodeStruct(new codec.Enum(ip_address_space$.IPAddressSpace));
    val.failedParameter =
        decoder.decodeStruct(codec.String);
    val.resourceAddressSpace =
        decoder.decodeStruct(new codec.Enum(ip_address_space$.IPAddressSpace));
    packed = decoder.readUint8();
    val.hasAuthorizationCoveredByWildcardOnPreflight = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.issueId =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  CorsErrorStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CorsErrorStatus.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.corsError);
    encoder.encodeStruct(codec.Int32, val.targetAddressSpace);
    encoder.encodeStruct(codec.String, val.failedParameter);
    encoder.encodeStruct(codec.Int32, val.resourceAddressSpace);
    packed = 0;
    packed |= (val.hasAuthorizationCoveredByWildcardOnPreflight & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.issueId);
  };
  exports.CorsPreflightPolicy = CorsPreflightPolicy;
  exports.CorsError = CorsError;
  exports.PrivateNetworkAccessPreflightResult = PrivateNetworkAccessPreflightResult;
  exports.CorsErrorStatus = CorsErrorStatus;
})();