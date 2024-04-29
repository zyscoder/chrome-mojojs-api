// services/preferences/public/mojom/preferences.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/preferences/public/mojom/preferences.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('prefs.mojom');
  var token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/token.mojom', '../../../../mojo/public/mojom/base/token.mojom.js');
  }
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../../mojo/public/mojom/base/values.mojom.js');
  }
  var tracked_preference_validation_delegate$ =
      mojo.internal.exposeNamespace('prefs.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/preferences/public/mojom/tracked_preference_validation_delegate.mojom', 'tracked_preference_validation_delegate.mojom.js');
  }



  function TrackedPersistentPrefStoreConfiguration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrackedPersistentPrefStoreConfiguration.prototype.initDefaults_ = function() {
    this.unprotectedPrefFilename = null;
    this.protectedPrefFilename = null;
    this.trackingConfiguration = null;
    this.reportingIdsCount = 0;
    this.seed = null;
    this.legacyDeviceId = null;
    this.registrySeed = null;
    this.registryPath = null;
    this.validationDelegate = new tracked_preference_validation_delegate$.TrackedPreferenceValidationDelegatePtr();
    this.resetOnLoadObserver = new ResetOnLoadObserverPtr();
  };
  TrackedPersistentPrefStoreConfiguration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrackedPersistentPrefStoreConfiguration.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPersistentPrefStoreConfiguration.unprotectedPrefFilename
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPersistentPrefStoreConfiguration.protectedPrefFilename
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPersistentPrefStoreConfiguration.trackingConfiguration
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(TrackedPreferenceMetadata), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate TrackedPersistentPrefStoreConfiguration.seed
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPersistentPrefStoreConfiguration.legacyDeviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPersistentPrefStoreConfiguration.registrySeed
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPersistentPrefStoreConfiguration.registryPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPersistentPrefStoreConfiguration.validationDelegate
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 64, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPersistentPrefStoreConfiguration.resetOnLoadObserver
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 72, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrackedPersistentPrefStoreConfiguration.encodedSize = codec.kStructHeaderSize + 80;

  TrackedPersistentPrefStoreConfiguration.decode = function(decoder) {
    var packed;
    var val = new TrackedPersistentPrefStoreConfiguration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.unprotectedPrefFilename =
        decoder.decodeStructPointer(file_path$.FilePath);
    val.protectedPrefFilename =
        decoder.decodeStructPointer(file_path$.FilePath);
    val.trackingConfiguration =
        decoder.decodeArrayPointer(new codec.PointerTo(TrackedPreferenceMetadata));
    val.reportingIdsCount =
        decoder.decodeStruct(codec.Uint64);
    val.seed =
        decoder.decodeStruct(codec.String);
    val.legacyDeviceId =
        decoder.decodeStruct(codec.String);
    val.registrySeed =
        decoder.decodeStruct(codec.String);
    val.registryPath =
        decoder.decodeStructPointer(string16$.String16);
    val.validationDelegate =
        decoder.decodeStruct(new codec.NullableInterface(tracked_preference_validation_delegate$.TrackedPreferenceValidationDelegatePtr));
    val.resetOnLoadObserver =
        decoder.decodeStruct(new codec.NullableInterface(ResetOnLoadObserverPtr));
    return val;
  };

  TrackedPersistentPrefStoreConfiguration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrackedPersistentPrefStoreConfiguration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.unprotectedPrefFilename);
    encoder.encodeStructPointer(file_path$.FilePath, val.protectedPrefFilename);
    encoder.encodeArrayPointer(new codec.PointerTo(TrackedPreferenceMetadata), val.trackingConfiguration);
    encoder.encodeStruct(codec.Uint64, val.reportingIdsCount);
    encoder.encodeStruct(codec.String, val.seed);
    encoder.encodeStruct(codec.String, val.legacyDeviceId);
    encoder.encodeStruct(codec.String, val.registrySeed);
    encoder.encodeStructPointer(string16$.String16, val.registryPath);
    encoder.encodeStruct(new codec.NullableInterface(tracked_preference_validation_delegate$.TrackedPreferenceValidationDelegatePtr), val.validationDelegate);
    encoder.encodeStruct(new codec.NullableInterface(ResetOnLoadObserverPtr), val.resetOnLoadObserver);
  };
  function TrackedPreferenceMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  TrackedPreferenceMetadata.EnforcementLevel = {};
  TrackedPreferenceMetadata.EnforcementLevel.NO_ENFORCEMENT = 0;
  TrackedPreferenceMetadata.EnforcementLevel.ENFORCE_ON_LOAD = 1;
  TrackedPreferenceMetadata.EnforcementLevel.MIN_VALUE = 0;
  TrackedPreferenceMetadata.EnforcementLevel.MAX_VALUE = 1;

  TrackedPreferenceMetadata.EnforcementLevel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  TrackedPreferenceMetadata.EnforcementLevel.toKnownEnumValue = function(value) {
    return value;
  };

  TrackedPreferenceMetadata.EnforcementLevel.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  TrackedPreferenceMetadata.PrefTrackingStrategy = {};
  TrackedPreferenceMetadata.PrefTrackingStrategy.ATOMIC = 0;
  TrackedPreferenceMetadata.PrefTrackingStrategy.SPLIT = 1;
  TrackedPreferenceMetadata.PrefTrackingStrategy.MIN_VALUE = 0;
  TrackedPreferenceMetadata.PrefTrackingStrategy.MAX_VALUE = 1;

  TrackedPreferenceMetadata.PrefTrackingStrategy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  TrackedPreferenceMetadata.PrefTrackingStrategy.toKnownEnumValue = function(value) {
    return value;
  };

  TrackedPreferenceMetadata.PrefTrackingStrategy.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  TrackedPreferenceMetadata.ValueType = {};
  TrackedPreferenceMetadata.ValueType.IMPERSONAL = 0;
  TrackedPreferenceMetadata.ValueType.PERSONAL = 1;
  TrackedPreferenceMetadata.ValueType.MIN_VALUE = 0;
  TrackedPreferenceMetadata.ValueType.MAX_VALUE = 1;

  TrackedPreferenceMetadata.ValueType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  TrackedPreferenceMetadata.ValueType.toKnownEnumValue = function(value) {
    return value;
  };

  TrackedPreferenceMetadata.ValueType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  TrackedPreferenceMetadata.prototype.initDefaults_ = function() {
    this.reportingId = 0;
    this.name = null;
    this.enforcementLevel = 0;
    this.strategy = 0;
    this.valueType = 0;
  };
  TrackedPreferenceMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrackedPreferenceMetadata.validate = function(messageValidator, offset) {
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



    // validate TrackedPreferenceMetadata.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPreferenceMetadata.enforcementLevel
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, TrackedPreferenceMetadata.EnforcementLevel);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPreferenceMetadata.strategy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 20, TrackedPreferenceMetadata.PrefTrackingStrategy);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrackedPreferenceMetadata.valueType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, TrackedPreferenceMetadata.ValueType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrackedPreferenceMetadata.encodedSize = codec.kStructHeaderSize + 32;

  TrackedPreferenceMetadata.decode = function(decoder) {
    var packed;
    var val = new TrackedPreferenceMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reportingId =
        decoder.decodeStruct(codec.Uint64);
    val.name =
        decoder.decodeStruct(codec.String);
    val.enforcementLevel =
        decoder.decodeStruct(new codec.Enum(TrackedPreferenceMetadata.EnforcementLevel));
    val.strategy =
        decoder.decodeStruct(new codec.Enum(TrackedPreferenceMetadata.PrefTrackingStrategy));
    val.valueType =
        decoder.decodeStruct(new codec.Enum(TrackedPreferenceMetadata.ValueType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TrackedPreferenceMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrackedPreferenceMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.reportingId);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.Int32, val.enforcementLevel);
    encoder.encodeStruct(codec.Int32, val.strategy);
    encoder.encodeStruct(codec.Int32, val.valueType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ResetOnLoadObserver_OnResetOnLoad_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResetOnLoadObserver_OnResetOnLoad_Params.prototype.initDefaults_ = function() {
  };
  ResetOnLoadObserver_OnResetOnLoad_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResetOnLoadObserver_OnResetOnLoad_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ResetOnLoadObserver_OnResetOnLoad_Params.encodedSize = codec.kStructHeaderSize + 0;

  ResetOnLoadObserver_OnResetOnLoad_Params.decode = function(decoder) {
    var packed;
    var val = new ResetOnLoadObserver_OnResetOnLoad_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ResetOnLoadObserver_OnResetOnLoad_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResetOnLoadObserver_OnResetOnLoad_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kResetOnLoadObserver_OnResetOnLoad_Name = 186768449;

  function ResetOnLoadObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ResetOnLoadObserver,
                                                   handleOrPtrInfo);
  }

  function ResetOnLoadObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ResetOnLoadObserver, associatedInterfacePtrInfo);
  }

  ResetOnLoadObserverAssociatedPtr.prototype =
      Object.create(ResetOnLoadObserverPtr.prototype);
  ResetOnLoadObserverAssociatedPtr.prototype.constructor =
      ResetOnLoadObserverAssociatedPtr;

  function ResetOnLoadObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  ResetOnLoadObserverPtr.prototype.onResetOnLoad = function() {
    return ResetOnLoadObserverProxy.prototype.onResetOnLoad
        .apply(this.ptr.getProxy(), arguments);
  };

  ResetOnLoadObserverProxy.prototype.onResetOnLoad = function() {
    var params_ = new ResetOnLoadObserver_OnResetOnLoad_Params();
    var builder = new codec.MessageV0Builder(
        kResetOnLoadObserver_OnResetOnLoad_Name,
        codec.align(ResetOnLoadObserver_OnResetOnLoad_Params.encodedSize));
    builder.encodeStruct(ResetOnLoadObserver_OnResetOnLoad_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ResetOnLoadObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  ResetOnLoadObserverStub.prototype.onResetOnLoad = function() {
    return this.delegate_ && this.delegate_.onResetOnLoad && this.delegate_.onResetOnLoad();
  }

  ResetOnLoadObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kResetOnLoadObserver_OnResetOnLoad_Name:
      var params = reader.decodeStruct(ResetOnLoadObserver_OnResetOnLoad_Params);
      this.onResetOnLoad();
      return true;
    default:
      return false;
    }
  };

  ResetOnLoadObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateResetOnLoadObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kResetOnLoadObserver_OnResetOnLoad_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResetOnLoadObserver_OnResetOnLoad_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateResetOnLoadObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ResetOnLoadObserver = {
    name: 'prefs.mojom.ResetOnLoadObserver',
    kVersion: 0,
    ptrClass: ResetOnLoadObserverPtr,
    proxyClass: ResetOnLoadObserverProxy,
    stubClass: ResetOnLoadObserverStub,
    validateRequest: validateResetOnLoadObserverRequest,
    validateResponse: null,
  };
  ResetOnLoadObserverStub.prototype.validator = validateResetOnLoadObserverRequest;
  ResetOnLoadObserverProxy.prototype.validator = null;
  exports.TrackedPersistentPrefStoreConfiguration = TrackedPersistentPrefStoreConfiguration;
  exports.TrackedPreferenceMetadata = TrackedPreferenceMetadata;
  exports.ResetOnLoadObserver = ResetOnLoadObserver;
  exports.ResetOnLoadObserverPtr = ResetOnLoadObserverPtr;
  exports.ResetOnLoadObserverAssociatedPtr = ResetOnLoadObserverAssociatedPtr;
})();