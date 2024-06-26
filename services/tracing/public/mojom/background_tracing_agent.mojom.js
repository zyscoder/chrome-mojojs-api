// services/tracing/public/mojom/background_tracing_agent.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/tracing/public/mojom/background_tracing_agent.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('tracing.mojom');



  function BackgroundTracingRule(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundTracingRule.prototype.initDefaults_ = function() {
    this.ruleId = null;
  };
  BackgroundTracingRule.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundTracingRule.validate = function(messageValidator, offset) {
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


    // validate BackgroundTracingRule.ruleId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundTracingRule.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundTracingRule.decode = function(decoder) {
    var packed;
    var val = new BackgroundTracingRule();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ruleId =
        decoder.decodeStruct(codec.String);
    return val;
  };

  BackgroundTracingRule.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundTracingRule.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.ruleId);
  };
  function BackgroundTracingAgentClient_OnInitialized_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundTracingAgentClient_OnInitialized_Params.prototype.initDefaults_ = function() {
  };
  BackgroundTracingAgentClient_OnInitialized_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundTracingAgentClient_OnInitialized_Params.validate = function(messageValidator, offset) {
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

  BackgroundTracingAgentClient_OnInitialized_Params.encodedSize = codec.kStructHeaderSize + 0;

  BackgroundTracingAgentClient_OnInitialized_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundTracingAgentClient_OnInitialized_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BackgroundTracingAgentClient_OnInitialized_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundTracingAgentClient_OnInitialized_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.prototype.initDefaults_ = function() {
    this.rule = null;
  };
  BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.validate = function(messageValidator, offset) {
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


    // validate BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.rule
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, BackgroundTracingRule, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rule =
        decoder.decodeStructPointer(BackgroundTracingRule);
    return val;
  };

  BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(BackgroundTracingRule, val.rule);
  };
  function BackgroundTracingAgent_SetUMACallback_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundTracingAgent_SetUMACallback_Params.prototype.initDefaults_ = function() {
    this.rule = null;
    this.histogramName = null;
    this.histogramLowerValue = 0;
    this.histogramUpperValue = 0;
  };
  BackgroundTracingAgent_SetUMACallback_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundTracingAgent_SetUMACallback_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundTracingAgent_SetUMACallback_Params.rule
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, BackgroundTracingRule, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundTracingAgent_SetUMACallback_Params.histogramName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  BackgroundTracingAgent_SetUMACallback_Params.encodedSize = codec.kStructHeaderSize + 24;

  BackgroundTracingAgent_SetUMACallback_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundTracingAgent_SetUMACallback_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rule =
        decoder.decodeStructPointer(BackgroundTracingRule);
    val.histogramName =
        decoder.decodeStruct(codec.String);
    val.histogramLowerValue =
        decoder.decodeStruct(codec.Int32);
    val.histogramUpperValue =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  BackgroundTracingAgent_SetUMACallback_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundTracingAgent_SetUMACallback_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(BackgroundTracingRule, val.rule);
    encoder.encodeStruct(codec.String, val.histogramName);
    encoder.encodeStruct(codec.Int32, val.histogramLowerValue);
    encoder.encodeStruct(codec.Int32, val.histogramUpperValue);
  };
  function BackgroundTracingAgent_ClearUMACallback_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundTracingAgent_ClearUMACallback_Params.prototype.initDefaults_ = function() {
    this.rule = null;
  };
  BackgroundTracingAgent_ClearUMACallback_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundTracingAgent_ClearUMACallback_Params.validate = function(messageValidator, offset) {
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


    // validate BackgroundTracingAgent_ClearUMACallback_Params.rule
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, BackgroundTracingRule, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundTracingAgent_ClearUMACallback_Params.encodedSize = codec.kStructHeaderSize + 8;

  BackgroundTracingAgent_ClearUMACallback_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundTracingAgent_ClearUMACallback_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rule =
        decoder.decodeStructPointer(BackgroundTracingRule);
    return val;
  };

  BackgroundTracingAgent_ClearUMACallback_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundTracingAgent_ClearUMACallback_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(BackgroundTracingRule, val.rule);
  };
  function BackgroundTracingAgentProvider_Create_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BackgroundTracingAgentProvider_Create_Params.prototype.initDefaults_ = function() {
    this.tracingProcessId = 0;
    this.client = new BackgroundTracingAgentClientPtr();
    this.agent = new bindings.InterfaceRequest();
  };
  BackgroundTracingAgentProvider_Create_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BackgroundTracingAgentProvider_Create_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate BackgroundTracingAgentProvider_Create_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BackgroundTracingAgentProvider_Create_Params.agent
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BackgroundTracingAgentProvider_Create_Params.encodedSize = codec.kStructHeaderSize + 24;

  BackgroundTracingAgentProvider_Create_Params.decode = function(decoder) {
    var packed;
    var val = new BackgroundTracingAgentProvider_Create_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tracingProcessId =
        decoder.decodeStruct(codec.Uint64);
    val.client =
        decoder.decodeStruct(new codec.Interface(BackgroundTracingAgentClientPtr));
    val.agent =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  BackgroundTracingAgentProvider_Create_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BackgroundTracingAgentProvider_Create_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.tracingProcessId);
    encoder.encodeStruct(new codec.Interface(BackgroundTracingAgentClientPtr), val.client);
    encoder.encodeStruct(codec.InterfaceRequest, val.agent);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kBackgroundTracingAgentClient_OnInitialized_Name = 1136449458;
  var kBackgroundTracingAgentClient_OnTriggerBackgroundTrace_Name = 148331605;

  function BackgroundTracingAgentClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BackgroundTracingAgentClient,
                                                   handleOrPtrInfo);
  }

  function BackgroundTracingAgentClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BackgroundTracingAgentClient, associatedInterfacePtrInfo);
  }

  BackgroundTracingAgentClientAssociatedPtr.prototype =
      Object.create(BackgroundTracingAgentClientPtr.prototype);
  BackgroundTracingAgentClientAssociatedPtr.prototype.constructor =
      BackgroundTracingAgentClientAssociatedPtr;

  function BackgroundTracingAgentClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  BackgroundTracingAgentClientPtr.prototype.onInitialized = function() {
    return BackgroundTracingAgentClientProxy.prototype.onInitialized
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundTracingAgentClientProxy.prototype.onInitialized = function() {
    var params_ = new BackgroundTracingAgentClient_OnInitialized_Params();
    var builder = new codec.MessageV0Builder(
        kBackgroundTracingAgentClient_OnInitialized_Name,
        codec.align(BackgroundTracingAgentClient_OnInitialized_Params.encodedSize));
    builder.encodeStruct(BackgroundTracingAgentClient_OnInitialized_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BackgroundTracingAgentClientPtr.prototype.onTriggerBackgroundTrace = function() {
    return BackgroundTracingAgentClientProxy.prototype.onTriggerBackgroundTrace
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundTracingAgentClientProxy.prototype.onTriggerBackgroundTrace = function(rule) {
    var params_ = new BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params();
    params_.rule = rule;
    var builder = new codec.MessageV0Builder(
        kBackgroundTracingAgentClient_OnTriggerBackgroundTrace_Name,
        codec.align(BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params.encodedSize));
    builder.encodeStruct(BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BackgroundTracingAgentClientStub(delegate) {
    this.delegate_ = delegate;
  }
  BackgroundTracingAgentClientStub.prototype.onInitialized = function() {
    return this.delegate_ && this.delegate_.onInitialized && this.delegate_.onInitialized();
  }
  BackgroundTracingAgentClientStub.prototype.onTriggerBackgroundTrace = function(rule) {
    return this.delegate_ && this.delegate_.onTriggerBackgroundTrace && this.delegate_.onTriggerBackgroundTrace(rule);
  }

  BackgroundTracingAgentClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundTracingAgentClient_OnInitialized_Name:
      var params = reader.decodeStruct(BackgroundTracingAgentClient_OnInitialized_Params);
      this.onInitialized();
      return true;
    case kBackgroundTracingAgentClient_OnTriggerBackgroundTrace_Name:
      var params = reader.decodeStruct(BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params);
      this.onTriggerBackgroundTrace(params.rule);
      return true;
    default:
      return false;
    }
  };

  BackgroundTracingAgentClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBackgroundTracingAgentClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBackgroundTracingAgentClient_OnInitialized_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundTracingAgentClient_OnInitialized_Params;
      break;
      case kBackgroundTracingAgentClient_OnTriggerBackgroundTrace_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundTracingAgentClient_OnTriggerBackgroundTrace_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBackgroundTracingAgentClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BackgroundTracingAgentClient = {
    name: 'tracing.mojom.BackgroundTracingAgentClient',
    kVersion: 0,
    ptrClass: BackgroundTracingAgentClientPtr,
    proxyClass: BackgroundTracingAgentClientProxy,
    stubClass: BackgroundTracingAgentClientStub,
    validateRequest: validateBackgroundTracingAgentClientRequest,
    validateResponse: null,
  };
  BackgroundTracingAgentClientStub.prototype.validator = validateBackgroundTracingAgentClientRequest;
  BackgroundTracingAgentClientProxy.prototype.validator = null;
  var kBackgroundTracingAgent_SetUMACallback_Name = 1304212387;
  var kBackgroundTracingAgent_ClearUMACallback_Name = 1511849651;

  function BackgroundTracingAgentPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BackgroundTracingAgent,
                                                   handleOrPtrInfo);
  }

  function BackgroundTracingAgentAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BackgroundTracingAgent, associatedInterfacePtrInfo);
  }

  BackgroundTracingAgentAssociatedPtr.prototype =
      Object.create(BackgroundTracingAgentPtr.prototype);
  BackgroundTracingAgentAssociatedPtr.prototype.constructor =
      BackgroundTracingAgentAssociatedPtr;

  function BackgroundTracingAgentProxy(receiver) {
    this.receiver_ = receiver;
  }
  BackgroundTracingAgentPtr.prototype.setUMACallback = function() {
    return BackgroundTracingAgentProxy.prototype.setUMACallback
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundTracingAgentProxy.prototype.setUMACallback = function(rule, histogramName, histogramLowerValue, histogramUpperValue) {
    var params_ = new BackgroundTracingAgent_SetUMACallback_Params();
    params_.rule = rule;
    params_.histogramName = histogramName;
    params_.histogramLowerValue = histogramLowerValue;
    params_.histogramUpperValue = histogramUpperValue;
    var builder = new codec.MessageV0Builder(
        kBackgroundTracingAgent_SetUMACallback_Name,
        codec.align(BackgroundTracingAgent_SetUMACallback_Params.encodedSize));
    builder.encodeStruct(BackgroundTracingAgent_SetUMACallback_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BackgroundTracingAgentPtr.prototype.clearUMACallback = function() {
    return BackgroundTracingAgentProxy.prototype.clearUMACallback
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundTracingAgentProxy.prototype.clearUMACallback = function(rule) {
    var params_ = new BackgroundTracingAgent_ClearUMACallback_Params();
    params_.rule = rule;
    var builder = new codec.MessageV0Builder(
        kBackgroundTracingAgent_ClearUMACallback_Name,
        codec.align(BackgroundTracingAgent_ClearUMACallback_Params.encodedSize));
    builder.encodeStruct(BackgroundTracingAgent_ClearUMACallback_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BackgroundTracingAgentStub(delegate) {
    this.delegate_ = delegate;
  }
  BackgroundTracingAgentStub.prototype.setUMACallback = function(rule, histogramName, histogramLowerValue, histogramUpperValue) {
    return this.delegate_ && this.delegate_.setUMACallback && this.delegate_.setUMACallback(rule, histogramName, histogramLowerValue, histogramUpperValue);
  }
  BackgroundTracingAgentStub.prototype.clearUMACallback = function(rule) {
    return this.delegate_ && this.delegate_.clearUMACallback && this.delegate_.clearUMACallback(rule);
  }

  BackgroundTracingAgentStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundTracingAgent_SetUMACallback_Name:
      var params = reader.decodeStruct(BackgroundTracingAgent_SetUMACallback_Params);
      this.setUMACallback(params.rule, params.histogramName, params.histogramLowerValue, params.histogramUpperValue);
      return true;
    case kBackgroundTracingAgent_ClearUMACallback_Name:
      var params = reader.decodeStruct(BackgroundTracingAgent_ClearUMACallback_Params);
      this.clearUMACallback(params.rule);
      return true;
    default:
      return false;
    }
  };

  BackgroundTracingAgentStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBackgroundTracingAgentRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBackgroundTracingAgent_SetUMACallback_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundTracingAgent_SetUMACallback_Params;
      break;
      case kBackgroundTracingAgent_ClearUMACallback_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundTracingAgent_ClearUMACallback_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBackgroundTracingAgentResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BackgroundTracingAgent = {
    name: 'tracing.mojom.BackgroundTracingAgent',
    kVersion: 0,
    ptrClass: BackgroundTracingAgentPtr,
    proxyClass: BackgroundTracingAgentProxy,
    stubClass: BackgroundTracingAgentStub,
    validateRequest: validateBackgroundTracingAgentRequest,
    validateResponse: null,
  };
  BackgroundTracingAgentStub.prototype.validator = validateBackgroundTracingAgentRequest;
  BackgroundTracingAgentProxy.prototype.validator = null;
  var kBackgroundTracingAgentProvider_Create_Name = 2015520873;

  function BackgroundTracingAgentProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BackgroundTracingAgentProvider,
                                                   handleOrPtrInfo);
  }

  function BackgroundTracingAgentProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BackgroundTracingAgentProvider, associatedInterfacePtrInfo);
  }

  BackgroundTracingAgentProviderAssociatedPtr.prototype =
      Object.create(BackgroundTracingAgentProviderPtr.prototype);
  BackgroundTracingAgentProviderAssociatedPtr.prototype.constructor =
      BackgroundTracingAgentProviderAssociatedPtr;

  function BackgroundTracingAgentProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  BackgroundTracingAgentProviderPtr.prototype.create = function() {
    return BackgroundTracingAgentProviderProxy.prototype.create
        .apply(this.ptr.getProxy(), arguments);
  };

  BackgroundTracingAgentProviderProxy.prototype.create = function(tracingProcessId, client, agent) {
    var params_ = new BackgroundTracingAgentProvider_Create_Params();
    params_.tracingProcessId = tracingProcessId;
    params_.client = client;
    params_.agent = agent;
    var builder = new codec.MessageV0Builder(
        kBackgroundTracingAgentProvider_Create_Name,
        codec.align(BackgroundTracingAgentProvider_Create_Params.encodedSize));
    builder.encodeStruct(BackgroundTracingAgentProvider_Create_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BackgroundTracingAgentProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  BackgroundTracingAgentProviderStub.prototype.create = function(tracingProcessId, client, agent) {
    return this.delegate_ && this.delegate_.create && this.delegate_.create(tracingProcessId, client, agent);
  }

  BackgroundTracingAgentProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBackgroundTracingAgentProvider_Create_Name:
      var params = reader.decodeStruct(BackgroundTracingAgentProvider_Create_Params);
      this.create(params.tracingProcessId, params.client, params.agent);
      return true;
    default:
      return false;
    }
  };

  BackgroundTracingAgentProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBackgroundTracingAgentProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBackgroundTracingAgentProvider_Create_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BackgroundTracingAgentProvider_Create_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBackgroundTracingAgentProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BackgroundTracingAgentProvider = {
    name: 'tracing.mojom.BackgroundTracingAgentProvider',
    kVersion: 0,
    ptrClass: BackgroundTracingAgentProviderPtr,
    proxyClass: BackgroundTracingAgentProviderProxy,
    stubClass: BackgroundTracingAgentProviderStub,
    validateRequest: validateBackgroundTracingAgentProviderRequest,
    validateResponse: null,
  };
  BackgroundTracingAgentProviderStub.prototype.validator = validateBackgroundTracingAgentProviderRequest;
  BackgroundTracingAgentProviderProxy.prototype.validator = null;
  exports.BackgroundTracingRule = BackgroundTracingRule;
  exports.BackgroundTracingAgentClient = BackgroundTracingAgentClient;
  exports.BackgroundTracingAgentClientPtr = BackgroundTracingAgentClientPtr;
  exports.BackgroundTracingAgentClientAssociatedPtr = BackgroundTracingAgentClientAssociatedPtr;
  exports.BackgroundTracingAgent = BackgroundTracingAgent;
  exports.BackgroundTracingAgentPtr = BackgroundTracingAgentPtr;
  exports.BackgroundTracingAgentAssociatedPtr = BackgroundTracingAgentAssociatedPtr;
  exports.BackgroundTracingAgentProvider = BackgroundTracingAgentProvider;
  exports.BackgroundTracingAgentProviderPtr = BackgroundTracingAgentProviderPtr;
  exports.BackgroundTracingAgentProviderAssociatedPtr = BackgroundTracingAgentProviderAssociatedPtr;
})();