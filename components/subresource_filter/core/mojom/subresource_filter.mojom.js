// components/subresource_filter/core/mojom/subresource_filter.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/subresource_filter/core/mojom/subresource_filter.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('subresourceFilter.mojom');
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../../mojo/public/mojom/base/file.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }


  var ActivationLevel = {};
  ActivationLevel.kDisabled = 0;
  ActivationLevel.kDryRun = 1;
  ActivationLevel.kEnabled = 2;
  ActivationLevel.MIN_VALUE = 0;
  ActivationLevel.MAX_VALUE = 2;

  ActivationLevel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ActivationLevel.toKnownEnumValue = function(value) {
    return value;
  };

  ActivationLevel.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AdsViolation = {};
  AdsViolation.kMobileAdDensityByHeightAbove30 = 0;
  AdsViolation.kHeavyAdsInterventionAtHostLimit = 1;
  AdsViolation.kLargeStickyAd = 2;
  AdsViolation.kOverlayPopupAd = 3;
  AdsViolation.MIN_VALUE = 0;
  AdsViolation.MAX_VALUE = 3;

  AdsViolation.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  AdsViolation.toKnownEnumValue = function(value) {
    return value;
  };

  AdsViolation.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ActivationState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ActivationState.prototype.initDefaults_ = function() {
    this.activationLevel = ActivationLevel.kDisabled;
    this.filteringDisabledForDocument = false;
    this.genericBlockingRulesDisabled = false;
    this.measurePerformance = false;
    this.enableLogging = false;
  };
  ActivationState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ActivationState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ActivationState.activationLevel
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ActivationLevel);
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  ActivationState.encodedSize = codec.kStructHeaderSize + 8;

  ActivationState.decode = function(decoder) {
    var packed;
    var val = new ActivationState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.activationLevel =
        decoder.decodeStruct(new codec.Enum(ActivationLevel));
    packed = decoder.readUint8();
    val.filteringDisabledForDocument = (packed >> 0) & 1 ? true : false;
    val.genericBlockingRulesDisabled = (packed >> 1) & 1 ? true : false;
    val.measurePerformance = (packed >> 2) & 1 ? true : false;
    val.enableLogging = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ActivationState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ActivationState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.activationLevel);
    packed = 0;
    packed |= (val.filteringDisabledForDocument & 1) << 0
    packed |= (val.genericBlockingRulesDisabled & 1) << 1
    packed |= (val.measurePerformance & 1) << 2
    packed |= (val.enableLogging & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DocumentLoadStatistics(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DocumentLoadStatistics.prototype.initDefaults_ = function() {
    this.numLoadsTotal = 0;
    this.numLoadsEvaluated = 0;
    this.numLoadsMatchingRules = 0;
    this.numLoadsDisallowed = 0;
    this.evaluationTotalWallDuration = null;
    this.evaluationTotalCpuDuration = null;
  };
  DocumentLoadStatistics.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DocumentLoadStatistics.validate = function(messageValidator, offset) {
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






    // validate DocumentLoadStatistics.evaluationTotalWallDuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DocumentLoadStatistics.evaluationTotalCpuDuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DocumentLoadStatistics.encodedSize = codec.kStructHeaderSize + 32;

  DocumentLoadStatistics.decode = function(decoder) {
    var packed;
    var val = new DocumentLoadStatistics();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.numLoadsTotal =
        decoder.decodeStruct(codec.Int32);
    val.numLoadsEvaluated =
        decoder.decodeStruct(codec.Int32);
    val.numLoadsMatchingRules =
        decoder.decodeStruct(codec.Int32);
    val.numLoadsDisallowed =
        decoder.decodeStruct(codec.Int32);
    val.evaluationTotalWallDuration =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.evaluationTotalCpuDuration =
        decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  DocumentLoadStatistics.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DocumentLoadStatistics.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.numLoadsTotal);
    encoder.encodeStruct(codec.Int32, val.numLoadsEvaluated);
    encoder.encodeStruct(codec.Int32, val.numLoadsMatchingRules);
    encoder.encodeStruct(codec.Int32, val.numLoadsDisallowed);
    encoder.encodeStructPointer(time$.TimeDelta, val.evaluationTotalWallDuration);
    encoder.encodeStructPointer(time$.TimeDelta, val.evaluationTotalCpuDuration);
  };
  function SubresourceFilterRulesetObserver_SetRulesetForProcess_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.prototype.initDefaults_ = function() {
    this.rulesetFile = null;
  };
  SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.rulesetFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file$.File, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.encodedSize = codec.kStructHeaderSize + 8;

  SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.decode = function(decoder) {
    var packed;
    var val = new SubresourceFilterRulesetObserver_SetRulesetForProcess_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rulesetFile =
        decoder.decodeStructPointer(file$.File);
    return val;
  };

  SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file$.File, val.rulesetFile);
  };
  var kSubresourceFilterRulesetObserver_SetRulesetForProcess_Name = 1022315329;

  function SubresourceFilterRulesetObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SubresourceFilterRulesetObserver,
                                                   handleOrPtrInfo);
  }

  function SubresourceFilterRulesetObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SubresourceFilterRulesetObserver, associatedInterfacePtrInfo);
  }

  SubresourceFilterRulesetObserverAssociatedPtr.prototype =
      Object.create(SubresourceFilterRulesetObserverPtr.prototype);
  SubresourceFilterRulesetObserverAssociatedPtr.prototype.constructor =
      SubresourceFilterRulesetObserverAssociatedPtr;

  function SubresourceFilterRulesetObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  SubresourceFilterRulesetObserverPtr.prototype.setRulesetForProcess = function() {
    return SubresourceFilterRulesetObserverProxy.prototype.setRulesetForProcess
        .apply(this.ptr.getProxy(), arguments);
  };

  SubresourceFilterRulesetObserverProxy.prototype.setRulesetForProcess = function(rulesetFile) {
    var params_ = new SubresourceFilterRulesetObserver_SetRulesetForProcess_Params();
    params_.rulesetFile = rulesetFile;
    var builder = new codec.MessageV0Builder(
        kSubresourceFilterRulesetObserver_SetRulesetForProcess_Name,
        codec.align(SubresourceFilterRulesetObserver_SetRulesetForProcess_Params.encodedSize));
    builder.encodeStruct(SubresourceFilterRulesetObserver_SetRulesetForProcess_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SubresourceFilterRulesetObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  SubresourceFilterRulesetObserverStub.prototype.setRulesetForProcess = function(rulesetFile) {
    return this.delegate_ && this.delegate_.setRulesetForProcess && this.delegate_.setRulesetForProcess(rulesetFile);
  }

  SubresourceFilterRulesetObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSubresourceFilterRulesetObserver_SetRulesetForProcess_Name:
      var params = reader.decodeStruct(SubresourceFilterRulesetObserver_SetRulesetForProcess_Params);
      this.setRulesetForProcess(params.rulesetFile);
      return true;
    default:
      return false;
    }
  };

  SubresourceFilterRulesetObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSubresourceFilterRulesetObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSubresourceFilterRulesetObserver_SetRulesetForProcess_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SubresourceFilterRulesetObserver_SetRulesetForProcess_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSubresourceFilterRulesetObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SubresourceFilterRulesetObserver = {
    name: 'subresource_filter.mojom.SubresourceFilterRulesetObserver',
    kVersion: 0,
    ptrClass: SubresourceFilterRulesetObserverPtr,
    proxyClass: SubresourceFilterRulesetObserverProxy,
    stubClass: SubresourceFilterRulesetObserverStub,
    validateRequest: validateSubresourceFilterRulesetObserverRequest,
    validateResponse: null,
  };
  SubresourceFilterRulesetObserverStub.prototype.validator = validateSubresourceFilterRulesetObserverRequest;
  SubresourceFilterRulesetObserverProxy.prototype.validator = null;
  exports.ActivationLevel = ActivationLevel;
  exports.AdsViolation = AdsViolation;
  exports.ActivationState = ActivationState;
  exports.DocumentLoadStatistics = DocumentLoadStatistics;
  exports.SubresourceFilterRulesetObserver = SubresourceFilterRulesetObserver;
  exports.SubresourceFilterRulesetObserverPtr = SubresourceFilterRulesetObserverPtr;
  exports.SubresourceFilterRulesetObserverAssociatedPtr = SubresourceFilterRulesetObserverAssociatedPtr;
})();