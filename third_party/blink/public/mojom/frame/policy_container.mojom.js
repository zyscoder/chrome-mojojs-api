// third_party/blink/public/mojom/frame/policy_container.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/policy_container.mojom';
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
  var content_security_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/content_security_policy.mojom', '../../../../../services/network/public/mojom/content_security_policy.mojom.js');
  }
  var cross_origin_embedder_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cross_origin_embedder_policy.mojom', '../../../../../services/network/public/mojom/cross_origin_embedder_policy.mojom.js');
  }
  var ip_address_space$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address_space.mojom', '../../../../../services/network/public/mojom/ip_address_space.mojom.js');
  }
  var referrer_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/referrer_policy.mojom', '../../../../../services/network/public/mojom/referrer_policy.mojom.js');
  }
  var web_sandbox_flags$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/web_sandbox_flags.mojom', '../../../../../services/network/public/mojom/web_sandbox_flags.mojom.js');
  }



  function PolicyContainerPolicies(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PolicyContainerPolicies.prototype.initDefaults_ = function() {
    this.crossOriginEmbedderPolicy = null;
    this.referrerPolicy = referrer_policy$.ReferrerPolicy.kDefault;
    this.isCredentialless = false;
    this.canNavigateTopWithoutUserGesture = true;
    this.allowCrossOriginIsolation = false;
    this.contentSecurityPolicies = null;
    this.sandboxFlags = web_sandbox_flags$.WebSandboxFlags.kNone;
    this.ipAddressSpace = ip_address_space$.IPAddressSpace.kUnknown;
  };
  PolicyContainerPolicies.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PolicyContainerPolicies.validate = function(messageValidator, offset) {
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


    // validate PolicyContainerPolicies.crossOriginEmbedderPolicy
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, cross_origin_embedder_policy$.CrossOriginEmbedderPolicy, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PolicyContainerPolicies.referrerPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, referrer_policy$.ReferrerPolicy);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PolicyContainerPolicies.contentSecurityPolicies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(content_security_policy$.ContentSecurityPolicy), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate PolicyContainerPolicies.sandboxFlags
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, web_sandbox_flags$.WebSandboxFlags);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PolicyContainerPolicies.ipAddressSpace
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, ip_address_space$.IPAddressSpace);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  PolicyContainerPolicies.encodedSize = codec.kStructHeaderSize + 32;

  PolicyContainerPolicies.decode = function(decoder) {
    var packed;
    var val = new PolicyContainerPolicies();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.crossOriginEmbedderPolicy =
        decoder.decodeStructPointer(cross_origin_embedder_policy$.CrossOriginEmbedderPolicy);
    val.referrerPolicy =
        decoder.decodeStruct(new codec.Enum(referrer_policy$.ReferrerPolicy));
    packed = decoder.readUint8();
    val.isCredentialless = (packed >> 0) & 1 ? true : false;
    val.canNavigateTopWithoutUserGesture = (packed >> 1) & 1 ? true : false;
    val.allowCrossOriginIsolation = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.contentSecurityPolicies =
        decoder.decodeArrayPointer(new codec.PointerTo(content_security_policy$.ContentSecurityPolicy));
    val.sandboxFlags =
        decoder.decodeStruct(new codec.Enum(web_sandbox_flags$.WebSandboxFlags));
    val.ipAddressSpace =
        decoder.decodeStruct(new codec.Enum(ip_address_space$.IPAddressSpace));
    return val;
  };

  PolicyContainerPolicies.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PolicyContainerPolicies.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(cross_origin_embedder_policy$.CrossOriginEmbedderPolicy, val.crossOriginEmbedderPolicy);
    encoder.encodeStruct(codec.Int32, val.referrerPolicy);
    packed = 0;
    packed |= (val.isCredentialless & 1) << 0
    packed |= (val.canNavigateTopWithoutUserGesture & 1) << 1
    packed |= (val.allowCrossOriginIsolation & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(content_security_policy$.ContentSecurityPolicy), val.contentSecurityPolicies);
    encoder.encodeStruct(codec.Int32, val.sandboxFlags);
    encoder.encodeStruct(codec.Int32, val.ipAddressSpace);
  };
  function PolicyContainer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PolicyContainer.prototype.initDefaults_ = function() {
    this.policies = null;
    this.remote = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  PolicyContainer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PolicyContainer.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PolicyContainer.policies
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PolicyContainerPolicies, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PolicyContainer.remote
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PolicyContainer.encodedSize = codec.kStructHeaderSize + 16;

  PolicyContainer.decode = function(decoder) {
    var packed;
    var val = new PolicyContainer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.policies =
        decoder.decodeStructPointer(PolicyContainerPolicies);
    val.remote =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  PolicyContainer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PolicyContainer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PolicyContainerPolicies, val.policies);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.remote);
  };
  function PolicyContainerBindParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PolicyContainerBindParams.prototype.initDefaults_ = function() {
    this.receiver = new associatedBindings.AssociatedInterfaceRequest();
  };
  PolicyContainerBindParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PolicyContainerBindParams.validate = function(messageValidator, offset) {
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


    // validate PolicyContainerBindParams.receiver
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PolicyContainerBindParams.encodedSize = codec.kStructHeaderSize + 8;

  PolicyContainerBindParams.decode = function(decoder) {
    var packed;
    var val = new PolicyContainerBindParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PolicyContainerBindParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PolicyContainerBindParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PolicyContainerHost_SetReferrerPolicy_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PolicyContainerHost_SetReferrerPolicy_Params.prototype.initDefaults_ = function() {
    this.referrerPolicy = 0;
  };
  PolicyContainerHost_SetReferrerPolicy_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PolicyContainerHost_SetReferrerPolicy_Params.validate = function(messageValidator, offset) {
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


    // validate PolicyContainerHost_SetReferrerPolicy_Params.referrerPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, referrer_policy$.ReferrerPolicy);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PolicyContainerHost_SetReferrerPolicy_Params.encodedSize = codec.kStructHeaderSize + 8;

  PolicyContainerHost_SetReferrerPolicy_Params.decode = function(decoder) {
    var packed;
    var val = new PolicyContainerHost_SetReferrerPolicy_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.referrerPolicy =
        decoder.decodeStruct(new codec.Enum(referrer_policy$.ReferrerPolicy));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PolicyContainerHost_SetReferrerPolicy_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PolicyContainerHost_SetReferrerPolicy_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.referrerPolicy);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PolicyContainerHost_AddContentSecurityPolicies_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PolicyContainerHost_AddContentSecurityPolicies_Params.prototype.initDefaults_ = function() {
    this.contentSecurityPolicies = null;
  };
  PolicyContainerHost_AddContentSecurityPolicies_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PolicyContainerHost_AddContentSecurityPolicies_Params.validate = function(messageValidator, offset) {
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


    // validate PolicyContainerHost_AddContentSecurityPolicies_Params.contentSecurityPolicies
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(content_security_policy$.ContentSecurityPolicy), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PolicyContainerHost_AddContentSecurityPolicies_Params.encodedSize = codec.kStructHeaderSize + 8;

  PolicyContainerHost_AddContentSecurityPolicies_Params.decode = function(decoder) {
    var packed;
    var val = new PolicyContainerHost_AddContentSecurityPolicies_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.contentSecurityPolicies =
        decoder.decodeArrayPointer(new codec.PointerTo(content_security_policy$.ContentSecurityPolicy));
    return val;
  };

  PolicyContainerHost_AddContentSecurityPolicies_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PolicyContainerHost_AddContentSecurityPolicies_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(content_security_policy$.ContentSecurityPolicy), val.contentSecurityPolicies);
  };
  function PolicyContainerHost_IssueKeepAliveHandle_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PolicyContainerHost_IssueKeepAliveHandle_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  PolicyContainerHost_IssueKeepAliveHandle_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PolicyContainerHost_IssueKeepAliveHandle_Params.validate = function(messageValidator, offset) {
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


    // validate PolicyContainerHost_IssueKeepAliveHandle_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PolicyContainerHost_IssueKeepAliveHandle_Params.encodedSize = codec.kStructHeaderSize + 8;

  PolicyContainerHost_IssueKeepAliveHandle_Params.decode = function(decoder) {
    var packed;
    var val = new PolicyContainerHost_IssueKeepAliveHandle_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PolicyContainerHost_IssueKeepAliveHandle_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PolicyContainerHost_IssueKeepAliveHandle_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kPolicyContainerHost_SetReferrerPolicy_Name = 209429479;
  var kPolicyContainerHost_AddContentSecurityPolicies_Name = 286375242;
  var kPolicyContainerHost_IssueKeepAliveHandle_Name = 1556692415;

  function PolicyContainerHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PolicyContainerHost,
                                                   handleOrPtrInfo);
  }

  function PolicyContainerHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PolicyContainerHost, associatedInterfacePtrInfo);
  }

  PolicyContainerHostAssociatedPtr.prototype =
      Object.create(PolicyContainerHostPtr.prototype);
  PolicyContainerHostAssociatedPtr.prototype.constructor =
      PolicyContainerHostAssociatedPtr;

  function PolicyContainerHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  PolicyContainerHostPtr.prototype.setReferrerPolicy = function() {
    return PolicyContainerHostProxy.prototype.setReferrerPolicy
        .apply(this.ptr.getProxy(), arguments);
  };

  PolicyContainerHostProxy.prototype.setReferrerPolicy = function(referrerPolicy) {
    var params_ = new PolicyContainerHost_SetReferrerPolicy_Params();
    params_.referrerPolicy = referrerPolicy;
    var builder = new codec.MessageV0Builder(
        kPolicyContainerHost_SetReferrerPolicy_Name,
        codec.align(PolicyContainerHost_SetReferrerPolicy_Params.encodedSize));
    builder.encodeStruct(PolicyContainerHost_SetReferrerPolicy_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PolicyContainerHostPtr.prototype.addContentSecurityPolicies = function() {
    return PolicyContainerHostProxy.prototype.addContentSecurityPolicies
        .apply(this.ptr.getProxy(), arguments);
  };

  PolicyContainerHostProxy.prototype.addContentSecurityPolicies = function(contentSecurityPolicies) {
    var params_ = new PolicyContainerHost_AddContentSecurityPolicies_Params();
    params_.contentSecurityPolicies = contentSecurityPolicies;
    var builder = new codec.MessageV0Builder(
        kPolicyContainerHost_AddContentSecurityPolicies_Name,
        codec.align(PolicyContainerHost_AddContentSecurityPolicies_Params.encodedSize));
    builder.encodeStruct(PolicyContainerHost_AddContentSecurityPolicies_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PolicyContainerHostPtr.prototype.issueKeepAliveHandle = function() {
    return PolicyContainerHostProxy.prototype.issueKeepAliveHandle
        .apply(this.ptr.getProxy(), arguments);
  };

  PolicyContainerHostProxy.prototype.issueKeepAliveHandle = function(receiver) {
    var params_ = new PolicyContainerHost_IssueKeepAliveHandle_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kPolicyContainerHost_IssueKeepAliveHandle_Name,
        codec.align(PolicyContainerHost_IssueKeepAliveHandle_Params.encodedSize));
    builder.encodeStruct(PolicyContainerHost_IssueKeepAliveHandle_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PolicyContainerHostStub(delegate) {
    this.delegate_ = delegate;
  }
  PolicyContainerHostStub.prototype.setReferrerPolicy = function(referrerPolicy) {
    return this.delegate_ && this.delegate_.setReferrerPolicy && this.delegate_.setReferrerPolicy(referrerPolicy);
  }
  PolicyContainerHostStub.prototype.addContentSecurityPolicies = function(contentSecurityPolicies) {
    return this.delegate_ && this.delegate_.addContentSecurityPolicies && this.delegate_.addContentSecurityPolicies(contentSecurityPolicies);
  }
  PolicyContainerHostStub.prototype.issueKeepAliveHandle = function(receiver) {
    return this.delegate_ && this.delegate_.issueKeepAliveHandle && this.delegate_.issueKeepAliveHandle(receiver);
  }

  PolicyContainerHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPolicyContainerHost_SetReferrerPolicy_Name:
      var params = reader.decodeStruct(PolicyContainerHost_SetReferrerPolicy_Params);
      this.setReferrerPolicy(params.referrerPolicy);
      return true;
    case kPolicyContainerHost_AddContentSecurityPolicies_Name:
      var params = reader.decodeStruct(PolicyContainerHost_AddContentSecurityPolicies_Params);
      this.addContentSecurityPolicies(params.contentSecurityPolicies);
      return true;
    case kPolicyContainerHost_IssueKeepAliveHandle_Name:
      var params = reader.decodeStruct(PolicyContainerHost_IssueKeepAliveHandle_Params);
      this.issueKeepAliveHandle(params.receiver);
      return true;
    default:
      return false;
    }
  };

  PolicyContainerHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePolicyContainerHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPolicyContainerHost_SetReferrerPolicy_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PolicyContainerHost_SetReferrerPolicy_Params;
      break;
      case kPolicyContainerHost_AddContentSecurityPolicies_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PolicyContainerHost_AddContentSecurityPolicies_Params;
      break;
      case kPolicyContainerHost_IssueKeepAliveHandle_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PolicyContainerHost_IssueKeepAliveHandle_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePolicyContainerHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PolicyContainerHost = {
    name: 'blink.mojom.PolicyContainerHost',
    kVersion: 0,
    ptrClass: PolicyContainerHostPtr,
    proxyClass: PolicyContainerHostProxy,
    stubClass: PolicyContainerHostStub,
    validateRequest: validatePolicyContainerHostRequest,
    validateResponse: null,
  };
  PolicyContainerHostStub.prototype.validator = validatePolicyContainerHostRequest;
  PolicyContainerHostProxy.prototype.validator = null;

  function PolicyContainerHostKeepAliveHandlePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PolicyContainerHostKeepAliveHandle,
                                                   handleOrPtrInfo);
  }

  function PolicyContainerHostKeepAliveHandleAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PolicyContainerHostKeepAliveHandle, associatedInterfacePtrInfo);
  }

  PolicyContainerHostKeepAliveHandleAssociatedPtr.prototype =
      Object.create(PolicyContainerHostKeepAliveHandlePtr.prototype);
  PolicyContainerHostKeepAliveHandleAssociatedPtr.prototype.constructor =
      PolicyContainerHostKeepAliveHandleAssociatedPtr;

  function PolicyContainerHostKeepAliveHandleProxy(receiver) {
    this.receiver_ = receiver;
  }

  function PolicyContainerHostKeepAliveHandleStub(delegate) {
    this.delegate_ = delegate;
  }

  PolicyContainerHostKeepAliveHandleStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PolicyContainerHostKeepAliveHandleStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePolicyContainerHostKeepAliveHandleRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validatePolicyContainerHostKeepAliveHandleResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PolicyContainerHostKeepAliveHandle = {
    name: 'blink.mojom.PolicyContainerHostKeepAliveHandle',
    kVersion: 0,
    ptrClass: PolicyContainerHostKeepAliveHandlePtr,
    proxyClass: PolicyContainerHostKeepAliveHandleProxy,
    stubClass: PolicyContainerHostKeepAliveHandleStub,
    validateRequest: validatePolicyContainerHostKeepAliveHandleRequest,
    validateResponse: null,
  };
  PolicyContainerHostKeepAliveHandleStub.prototype.validator = validatePolicyContainerHostKeepAliveHandleRequest;
  PolicyContainerHostKeepAliveHandleProxy.prototype.validator = null;
  exports.PolicyContainerPolicies = PolicyContainerPolicies;
  exports.PolicyContainer = PolicyContainer;
  exports.PolicyContainerBindParams = PolicyContainerBindParams;
  exports.PolicyContainerHost = PolicyContainerHost;
  exports.PolicyContainerHostPtr = PolicyContainerHostPtr;
  exports.PolicyContainerHostAssociatedPtr = PolicyContainerHostAssociatedPtr;
  exports.PolicyContainerHostKeepAliveHandle = PolicyContainerHostKeepAliveHandle;
  exports.PolicyContainerHostKeepAliveHandlePtr = PolicyContainerHostKeepAliveHandlePtr;
  exports.PolicyContainerHostKeepAliveHandleAssociatedPtr = PolicyContainerHostKeepAliveHandleAssociatedPtr;
})();