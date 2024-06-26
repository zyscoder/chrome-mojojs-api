// services/accessibility/public/mojom/accessibility_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/accessibility/public/mojom/accessibility_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ax.mojom');
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../../sandbox/policy/mojom/sandbox.mojom.js');
  }
  var automation$ =
      mojo.internal.exposeNamespace('ax.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/accessibility/public/mojom/automation.mojom', 'automation.mojom.js');
  }



  function AccessibilityService_BindAccessibilityServiceClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AccessibilityService_BindAccessibilityServiceClient_Params.prototype.initDefaults_ = function() {
    this.accessibilityServiceClient = new AccessibilityServiceClientPtr();
  };
  AccessibilityService_BindAccessibilityServiceClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AccessibilityService_BindAccessibilityServiceClient_Params.validate = function(messageValidator, offset) {
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


    // validate AccessibilityService_BindAccessibilityServiceClient_Params.accessibilityServiceClient
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AccessibilityService_BindAccessibilityServiceClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  AccessibilityService_BindAccessibilityServiceClient_Params.decode = function(decoder) {
    var packed;
    var val = new AccessibilityService_BindAccessibilityServiceClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.accessibilityServiceClient =
        decoder.decodeStruct(new codec.Interface(AccessibilityServiceClientPtr));
    return val;
  };

  AccessibilityService_BindAccessibilityServiceClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AccessibilityService_BindAccessibilityServiceClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(AccessibilityServiceClientPtr), val.accessibilityServiceClient);
  };
  function AccessibilityServiceClient_BindAutomation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AccessibilityServiceClient_BindAutomation_Params.prototype.initDefaults_ = function() {
    this.automation = new associatedBindings.AssociatedInterfacePtrInfo();
    this.automationClient = new bindings.InterfaceRequest();
  };
  AccessibilityServiceClient_BindAutomation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AccessibilityServiceClient_BindAutomation_Params.validate = function(messageValidator, offset) {
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


    // validate AccessibilityServiceClient_BindAutomation_Params.automation
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AccessibilityServiceClient_BindAutomation_Params.automationClient
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AccessibilityServiceClient_BindAutomation_Params.encodedSize = codec.kStructHeaderSize + 16;

  AccessibilityServiceClient_BindAutomation_Params.decode = function(decoder) {
    var packed;
    var val = new AccessibilityServiceClient_BindAutomation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.automation =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    val.automationClient =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AccessibilityServiceClient_BindAutomation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AccessibilityServiceClient_BindAutomation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.automation);
    encoder.encodeStruct(codec.InterfaceRequest, val.automationClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kAccessibilityService_BindAccessibilityServiceClient_Name = 1389524939;

  function AccessibilityServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AccessibilityService,
                                                   handleOrPtrInfo);
  }

  function AccessibilityServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AccessibilityService, associatedInterfacePtrInfo);
  }

  AccessibilityServiceAssociatedPtr.prototype =
      Object.create(AccessibilityServicePtr.prototype);
  AccessibilityServiceAssociatedPtr.prototype.constructor =
      AccessibilityServiceAssociatedPtr;

  function AccessibilityServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  AccessibilityServicePtr.prototype.bindAccessibilityServiceClient = function() {
    return AccessibilityServiceProxy.prototype.bindAccessibilityServiceClient
        .apply(this.ptr.getProxy(), arguments);
  };

  AccessibilityServiceProxy.prototype.bindAccessibilityServiceClient = function(accessibilityServiceClient) {
    var params_ = new AccessibilityService_BindAccessibilityServiceClient_Params();
    params_.accessibilityServiceClient = accessibilityServiceClient;
    var builder = new codec.MessageV0Builder(
        kAccessibilityService_BindAccessibilityServiceClient_Name,
        codec.align(AccessibilityService_BindAccessibilityServiceClient_Params.encodedSize));
    builder.encodeStruct(AccessibilityService_BindAccessibilityServiceClient_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AccessibilityServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  AccessibilityServiceStub.prototype.bindAccessibilityServiceClient = function(accessibilityServiceClient) {
    return this.delegate_ && this.delegate_.bindAccessibilityServiceClient && this.delegate_.bindAccessibilityServiceClient(accessibilityServiceClient);
  }

  AccessibilityServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAccessibilityService_BindAccessibilityServiceClient_Name:
      var params = reader.decodeStruct(AccessibilityService_BindAccessibilityServiceClient_Params);
      this.bindAccessibilityServiceClient(params.accessibilityServiceClient);
      return true;
    default:
      return false;
    }
  };

  AccessibilityServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAccessibilityServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAccessibilityService_BindAccessibilityServiceClient_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AccessibilityService_BindAccessibilityServiceClient_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAccessibilityServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AccessibilityService = {
    name: 'ax.mojom.AccessibilityService',
    kVersion: 0,
    ptrClass: AccessibilityServicePtr,
    proxyClass: AccessibilityServiceProxy,
    stubClass: AccessibilityServiceStub,
    validateRequest: validateAccessibilityServiceRequest,
    validateResponse: null,
  };
  AccessibilityServiceStub.prototype.validator = validateAccessibilityServiceRequest;
  AccessibilityServiceProxy.prototype.validator = null;
  var kAccessibilityServiceClient_BindAutomation_Name = 887424554;

  function AccessibilityServiceClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AccessibilityServiceClient,
                                                   handleOrPtrInfo);
  }

  function AccessibilityServiceClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AccessibilityServiceClient, associatedInterfacePtrInfo);
  }

  AccessibilityServiceClientAssociatedPtr.prototype =
      Object.create(AccessibilityServiceClientPtr.prototype);
  AccessibilityServiceClientAssociatedPtr.prototype.constructor =
      AccessibilityServiceClientAssociatedPtr;

  function AccessibilityServiceClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  AccessibilityServiceClientPtr.prototype.bindAutomation = function() {
    return AccessibilityServiceClientProxy.prototype.bindAutomation
        .apply(this.ptr.getProxy(), arguments);
  };

  AccessibilityServiceClientProxy.prototype.bindAutomation = function(automation, automationClient) {
    var params_ = new AccessibilityServiceClient_BindAutomation_Params();
    params_.automation = automation;
    params_.automationClient = automationClient;
    var builder = new codec.MessageV2Builder(
        kAccessibilityServiceClient_BindAutomation_Name,
        codec.align(AccessibilityServiceClient_BindAutomation_Params.encodedSize));
    builder.setPayload(AccessibilityServiceClient_BindAutomation_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AccessibilityServiceClientStub(delegate) {
    this.delegate_ = delegate;
  }
  AccessibilityServiceClientStub.prototype.bindAutomation = function(automation, automationClient) {
    return this.delegate_ && this.delegate_.bindAutomation && this.delegate_.bindAutomation(automation, automationClient);
  }

  AccessibilityServiceClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAccessibilityServiceClient_BindAutomation_Name:
      var params = reader.decodeStruct(AccessibilityServiceClient_BindAutomation_Params);
      this.bindAutomation(params.automation, params.automationClient);
      return true;
    default:
      return false;
    }
  };

  AccessibilityServiceClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAccessibilityServiceClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAccessibilityServiceClient_BindAutomation_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AccessibilityServiceClient_BindAutomation_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAccessibilityServiceClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AccessibilityServiceClient = {
    name: 'ax.mojom.AccessibilityServiceClient',
    kVersion: 0,
    ptrClass: AccessibilityServiceClientPtr,
    proxyClass: AccessibilityServiceClientProxy,
    stubClass: AccessibilityServiceClientStub,
    validateRequest: validateAccessibilityServiceClientRequest,
    validateResponse: null,
  };
  AccessibilityServiceClientStub.prototype.validator = validateAccessibilityServiceClientRequest;
  AccessibilityServiceClientProxy.prototype.validator = null;
  exports.AccessibilityService = AccessibilityService;
  exports.AccessibilityServicePtr = AccessibilityServicePtr;
  exports.AccessibilityServiceAssociatedPtr = AccessibilityServiceAssociatedPtr;
  exports.AccessibilityServiceClient = AccessibilityServiceClient;
  exports.AccessibilityServiceClientPtr = AccessibilityServiceClientPtr;
  exports.AccessibilityServiceClientAssociatedPtr = AccessibilityServiceClientAssociatedPtr;
})();