// extensions/common/mojom/automation_registry.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/automation_registry.mojom';
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
  var automation$ =
      mojo.internal.exposeNamespace('ax.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/accessibility/public/mojom/automation.mojom', '../../../services/accessibility/public/mojom/automation.mojom.js');
  }



  function RendererAutomationRegistry_BindAutomation_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererAutomationRegistry_BindAutomation_Params.prototype.initDefaults_ = function() {
    this.automation = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  RendererAutomationRegistry_BindAutomation_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererAutomationRegistry_BindAutomation_Params.validate = function(messageValidator, offset) {
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


    // validate RendererAutomationRegistry_BindAutomation_Params.automation
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererAutomationRegistry_BindAutomation_Params.encodedSize = codec.kStructHeaderSize + 8;

  RendererAutomationRegistry_BindAutomation_Params.decode = function(decoder) {
    var packed;
    var val = new RendererAutomationRegistry_BindAutomation_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.automation =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  RendererAutomationRegistry_BindAutomation_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererAutomationRegistry_BindAutomation_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.automation);
  };
  var kRendererAutomationRegistry_BindAutomation_Name = 1127025283;

  function RendererAutomationRegistryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RendererAutomationRegistry,
                                                   handleOrPtrInfo);
  }

  function RendererAutomationRegistryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RendererAutomationRegistry, associatedInterfacePtrInfo);
  }

  RendererAutomationRegistryAssociatedPtr.prototype =
      Object.create(RendererAutomationRegistryPtr.prototype);
  RendererAutomationRegistryAssociatedPtr.prototype.constructor =
      RendererAutomationRegistryAssociatedPtr;

  function RendererAutomationRegistryProxy(receiver) {
    this.receiver_ = receiver;
  }
  RendererAutomationRegistryPtr.prototype.bindAutomation = function() {
    return RendererAutomationRegistryProxy.prototype.bindAutomation
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererAutomationRegistryProxy.prototype.bindAutomation = function(automation) {
    var params_ = new RendererAutomationRegistry_BindAutomation_Params();
    params_.automation = automation;
    var builder = new codec.MessageV2Builder(
        kRendererAutomationRegistry_BindAutomation_Name,
        codec.align(RendererAutomationRegistry_BindAutomation_Params.encodedSize));
    builder.setPayload(RendererAutomationRegistry_BindAutomation_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function RendererAutomationRegistryStub(delegate) {
    this.delegate_ = delegate;
  }
  RendererAutomationRegistryStub.prototype.bindAutomation = function(automation) {
    return this.delegate_ && this.delegate_.bindAutomation && this.delegate_.bindAutomation(automation);
  }

  RendererAutomationRegistryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRendererAutomationRegistry_BindAutomation_Name:
      var params = reader.decodeStruct(RendererAutomationRegistry_BindAutomation_Params);
      this.bindAutomation(params.automation);
      return true;
    default:
      return false;
    }
  };

  RendererAutomationRegistryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateRendererAutomationRegistryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRendererAutomationRegistry_BindAutomation_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererAutomationRegistry_BindAutomation_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRendererAutomationRegistryResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var RendererAutomationRegistry = {
    name: 'extensions.mojom.RendererAutomationRegistry',
    kVersion: 0,
    ptrClass: RendererAutomationRegistryPtr,
    proxyClass: RendererAutomationRegistryProxy,
    stubClass: RendererAutomationRegistryStub,
    validateRequest: validateRendererAutomationRegistryRequest,
    validateResponse: null,
  };
  RendererAutomationRegistryStub.prototype.validator = validateRendererAutomationRegistryRequest;
  RendererAutomationRegistryProxy.prototype.validator = null;
  exports.RendererAutomationRegistry = RendererAutomationRegistry;
  exports.RendererAutomationRegistryPtr = RendererAutomationRegistryPtr;
  exports.RendererAutomationRegistryAssociatedPtr = RendererAutomationRegistryAssociatedPtr;
})();