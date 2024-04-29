// third_party/blink/public/mojom/dom_storage/dom_storage.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/dom_storage/dom_storage.mojom';
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
  var session_storage_namespace$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/dom_storage/session_storage_namespace.mojom', 'session_storage_namespace.mojom.js');
  }
  var storage_area$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/dom_storage/storage_area.mojom', 'storage_area.mojom.js');
  }
  var storage_key$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/storage_key/storage_key.mojom', '../storage_key/storage_key.mojom.js');
  }
  var tokens$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/tokens/tokens.mojom', '../tokens/tokens.mojom.js');
  }



  function DomStorageProvider_BindDomStorage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DomStorageProvider_BindDomStorage_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
    this.client = new DomStorageClientPtr();
  };
  DomStorageProvider_BindDomStorage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DomStorageProvider_BindDomStorage_Params.validate = function(messageValidator, offset) {
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


    // validate DomStorageProvider_BindDomStorage_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DomStorageProvider_BindDomStorage_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DomStorageProvider_BindDomStorage_Params.encodedSize = codec.kStructHeaderSize + 16;

  DomStorageProvider_BindDomStorage_Params.decode = function(decoder) {
    var packed;
    var val = new DomStorageProvider_BindDomStorage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    val.client =
        decoder.decodeStruct(new codec.Interface(DomStorageClientPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DomStorageProvider_BindDomStorage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DomStorageProvider_BindDomStorage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.encodeStruct(new codec.Interface(DomStorageClientPtr), val.client);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DomStorage_OpenLocalStorage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DomStorage_OpenLocalStorage_Params.prototype.initDefaults_ = function() {
    this.storageKey = null;
    this.localFrameToken = null;
    this.area = new bindings.InterfaceRequest();
  };
  DomStorage_OpenLocalStorage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DomStorage_OpenLocalStorage_Params.validate = function(messageValidator, offset) {
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


    // validate DomStorage_OpenLocalStorage_Params.storageKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, storage_key$.StorageKey, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DomStorage_OpenLocalStorage_Params.localFrameToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, tokens$.LocalFrameToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DomStorage_OpenLocalStorage_Params.area
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DomStorage_OpenLocalStorage_Params.encodedSize = codec.kStructHeaderSize + 24;

  DomStorage_OpenLocalStorage_Params.decode = function(decoder) {
    var packed;
    var val = new DomStorage_OpenLocalStorage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.storageKey =
        decoder.decodeStructPointer(storage_key$.StorageKey);
    val.localFrameToken =
        decoder.decodeStructPointer(tokens$.LocalFrameToken);
    val.area =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DomStorage_OpenLocalStorage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DomStorage_OpenLocalStorage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(storage_key$.StorageKey, val.storageKey);
    encoder.encodeStructPointer(tokens$.LocalFrameToken, val.localFrameToken);
    encoder.encodeStruct(codec.InterfaceRequest, val.area);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DomStorage_BindSessionStorageNamespace_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DomStorage_BindSessionStorageNamespace_Params.prototype.initDefaults_ = function() {
    this.namespaceId = null;
    this.receiver = new bindings.InterfaceRequest();
  };
  DomStorage_BindSessionStorageNamespace_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DomStorage_BindSessionStorageNamespace_Params.validate = function(messageValidator, offset) {
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


    // validate DomStorage_BindSessionStorageNamespace_Params.namespaceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DomStorage_BindSessionStorageNamespace_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DomStorage_BindSessionStorageNamespace_Params.encodedSize = codec.kStructHeaderSize + 16;

  DomStorage_BindSessionStorageNamespace_Params.decode = function(decoder) {
    var packed;
    var val = new DomStorage_BindSessionStorageNamespace_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.namespaceId =
        decoder.decodeStruct(codec.String);
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DomStorage_BindSessionStorageNamespace_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DomStorage_BindSessionStorageNamespace_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.namespaceId);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DomStorage_BindSessionStorageArea_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DomStorage_BindSessionStorageArea_Params.prototype.initDefaults_ = function() {
    this.storageKey = null;
    this.localFrameToken = null;
    this.namespaceId = null;
    this.sessionNamespace = new bindings.InterfaceRequest();
  };
  DomStorage_BindSessionStorageArea_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DomStorage_BindSessionStorageArea_Params.validate = function(messageValidator, offset) {
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


    // validate DomStorage_BindSessionStorageArea_Params.storageKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, storage_key$.StorageKey, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DomStorage_BindSessionStorageArea_Params.localFrameToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, tokens$.LocalFrameToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DomStorage_BindSessionStorageArea_Params.namespaceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DomStorage_BindSessionStorageArea_Params.sessionNamespace
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DomStorage_BindSessionStorageArea_Params.encodedSize = codec.kStructHeaderSize + 32;

  DomStorage_BindSessionStorageArea_Params.decode = function(decoder) {
    var packed;
    var val = new DomStorage_BindSessionStorageArea_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.storageKey =
        decoder.decodeStructPointer(storage_key$.StorageKey);
    val.localFrameToken =
        decoder.decodeStructPointer(tokens$.LocalFrameToken);
    val.namespaceId =
        decoder.decodeStruct(codec.String);
    val.sessionNamespace =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DomStorage_BindSessionStorageArea_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DomStorage_BindSessionStorageArea_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(storage_key$.StorageKey, val.storageKey);
    encoder.encodeStructPointer(tokens$.LocalFrameToken, val.localFrameToken);
    encoder.encodeStruct(codec.String, val.namespaceId);
    encoder.encodeStruct(codec.InterfaceRequest, val.sessionNamespace);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params.prototype.initDefaults_ = function() {
  };
  DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params.validate = function(messageValidator, offset) {
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

  DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params.encodedSize = codec.kStructHeaderSize + 0;

  DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params.decode = function(decoder) {
    var packed;
    var val = new DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kDomStorageProvider_BindDomStorage_Name = 0;

  function DomStorageProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DomStorageProvider,
                                                   handleOrPtrInfo);
  }

  function DomStorageProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DomStorageProvider, associatedInterfacePtrInfo);
  }

  DomStorageProviderAssociatedPtr.prototype =
      Object.create(DomStorageProviderPtr.prototype);
  DomStorageProviderAssociatedPtr.prototype.constructor =
      DomStorageProviderAssociatedPtr;

  function DomStorageProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  DomStorageProviderPtr.prototype.bindDomStorage = function() {
    return DomStorageProviderProxy.prototype.bindDomStorage
        .apply(this.ptr.getProxy(), arguments);
  };

  DomStorageProviderProxy.prototype.bindDomStorage = function(receiver, client) {
    var params_ = new DomStorageProvider_BindDomStorage_Params();
    params_.receiver = receiver;
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kDomStorageProvider_BindDomStorage_Name,
        codec.align(DomStorageProvider_BindDomStorage_Params.encodedSize));
    builder.encodeStruct(DomStorageProvider_BindDomStorage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DomStorageProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  DomStorageProviderStub.prototype.bindDomStorage = function(receiver, client) {
    return this.delegate_ && this.delegate_.bindDomStorage && this.delegate_.bindDomStorage(receiver, client);
  }

  DomStorageProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDomStorageProvider_BindDomStorage_Name:
      var params = reader.decodeStruct(DomStorageProvider_BindDomStorage_Params);
      this.bindDomStorage(params.receiver, params.client);
      return true;
    default:
      return false;
    }
  };

  DomStorageProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDomStorageProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDomStorageProvider_BindDomStorage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DomStorageProvider_BindDomStorage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDomStorageProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DomStorageProvider = {
    name: 'blink.mojom.DomStorageProvider',
    kVersion: 0,
    ptrClass: DomStorageProviderPtr,
    proxyClass: DomStorageProviderProxy,
    stubClass: DomStorageProviderStub,
    validateRequest: validateDomStorageProviderRequest,
    validateResponse: null,
  };
  DomStorageProviderStub.prototype.validator = validateDomStorageProviderRequest;
  DomStorageProviderProxy.prototype.validator = null;
  var kDomStorage_OpenLocalStorage_Name = 0;
  var kDomStorage_BindSessionStorageNamespace_Name = 1;
  var kDomStorage_BindSessionStorageArea_Name = 2;

  function DomStoragePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DomStorage,
                                                   handleOrPtrInfo);
  }

  function DomStorageAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DomStorage, associatedInterfacePtrInfo);
  }

  DomStorageAssociatedPtr.prototype =
      Object.create(DomStoragePtr.prototype);
  DomStorageAssociatedPtr.prototype.constructor =
      DomStorageAssociatedPtr;

  function DomStorageProxy(receiver) {
    this.receiver_ = receiver;
  }
  DomStoragePtr.prototype.openLocalStorage = function() {
    return DomStorageProxy.prototype.openLocalStorage
        .apply(this.ptr.getProxy(), arguments);
  };

  DomStorageProxy.prototype.openLocalStorage = function(storageKey, localFrameToken, area) {
    var params_ = new DomStorage_OpenLocalStorage_Params();
    params_.storageKey = storageKey;
    params_.localFrameToken = localFrameToken;
    params_.area = area;
    var builder = new codec.MessageV0Builder(
        kDomStorage_OpenLocalStorage_Name,
        codec.align(DomStorage_OpenLocalStorage_Params.encodedSize));
    builder.encodeStruct(DomStorage_OpenLocalStorage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DomStoragePtr.prototype.bindSessionStorageNamespace = function() {
    return DomStorageProxy.prototype.bindSessionStorageNamespace
        .apply(this.ptr.getProxy(), arguments);
  };

  DomStorageProxy.prototype.bindSessionStorageNamespace = function(namespaceId, receiver) {
    var params_ = new DomStorage_BindSessionStorageNamespace_Params();
    params_.namespaceId = namespaceId;
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kDomStorage_BindSessionStorageNamespace_Name,
        codec.align(DomStorage_BindSessionStorageNamespace_Params.encodedSize));
    builder.encodeStruct(DomStorage_BindSessionStorageNamespace_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DomStoragePtr.prototype.bindSessionStorageArea = function() {
    return DomStorageProxy.prototype.bindSessionStorageArea
        .apply(this.ptr.getProxy(), arguments);
  };

  DomStorageProxy.prototype.bindSessionStorageArea = function(storageKey, localFrameToken, namespaceId, sessionNamespace) {
    var params_ = new DomStorage_BindSessionStorageArea_Params();
    params_.storageKey = storageKey;
    params_.localFrameToken = localFrameToken;
    params_.namespaceId = namespaceId;
    params_.sessionNamespace = sessionNamespace;
    var builder = new codec.MessageV0Builder(
        kDomStorage_BindSessionStorageArea_Name,
        codec.align(DomStorage_BindSessionStorageArea_Params.encodedSize));
    builder.encodeStruct(DomStorage_BindSessionStorageArea_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DomStorageStub(delegate) {
    this.delegate_ = delegate;
  }
  DomStorageStub.prototype.openLocalStorage = function(storageKey, localFrameToken, area) {
    return this.delegate_ && this.delegate_.openLocalStorage && this.delegate_.openLocalStorage(storageKey, localFrameToken, area);
  }
  DomStorageStub.prototype.bindSessionStorageNamespace = function(namespaceId, receiver) {
    return this.delegate_ && this.delegate_.bindSessionStorageNamespace && this.delegate_.bindSessionStorageNamespace(namespaceId, receiver);
  }
  DomStorageStub.prototype.bindSessionStorageArea = function(storageKey, localFrameToken, namespaceId, sessionNamespace) {
    return this.delegate_ && this.delegate_.bindSessionStorageArea && this.delegate_.bindSessionStorageArea(storageKey, localFrameToken, namespaceId, sessionNamespace);
  }

  DomStorageStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDomStorage_OpenLocalStorage_Name:
      var params = reader.decodeStruct(DomStorage_OpenLocalStorage_Params);
      this.openLocalStorage(params.storageKey, params.localFrameToken, params.area);
      return true;
    case kDomStorage_BindSessionStorageNamespace_Name:
      var params = reader.decodeStruct(DomStorage_BindSessionStorageNamespace_Params);
      this.bindSessionStorageNamespace(params.namespaceId, params.receiver);
      return true;
    case kDomStorage_BindSessionStorageArea_Name:
      var params = reader.decodeStruct(DomStorage_BindSessionStorageArea_Params);
      this.bindSessionStorageArea(params.storageKey, params.localFrameToken, params.namespaceId, params.sessionNamespace);
      return true;
    default:
      return false;
    }
  };

  DomStorageStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDomStorageRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDomStorage_OpenLocalStorage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DomStorage_OpenLocalStorage_Params;
      break;
      case kDomStorage_BindSessionStorageNamespace_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DomStorage_BindSessionStorageNamespace_Params;
      break;
      case kDomStorage_BindSessionStorageArea_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DomStorage_BindSessionStorageArea_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDomStorageResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DomStorage = {
    name: 'blink.mojom.DomStorage',
    kVersion: 0,
    ptrClass: DomStoragePtr,
    proxyClass: DomStorageProxy,
    stubClass: DomStorageStub,
    validateRequest: validateDomStorageRequest,
    validateResponse: null,
  };
  DomStorageStub.prototype.validator = validateDomStorageRequest;
  DomStorageProxy.prototype.validator = null;
  var kDomStorageClient_ResetStorageAreaAndNamespaceConnections_Name = 0;

  function DomStorageClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DomStorageClient,
                                                   handleOrPtrInfo);
  }

  function DomStorageClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DomStorageClient, associatedInterfacePtrInfo);
  }

  DomStorageClientAssociatedPtr.prototype =
      Object.create(DomStorageClientPtr.prototype);
  DomStorageClientAssociatedPtr.prototype.constructor =
      DomStorageClientAssociatedPtr;

  function DomStorageClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  DomStorageClientPtr.prototype.resetStorageAreaAndNamespaceConnections = function() {
    return DomStorageClientProxy.prototype.resetStorageAreaAndNamespaceConnections
        .apply(this.ptr.getProxy(), arguments);
  };

  DomStorageClientProxy.prototype.resetStorageAreaAndNamespaceConnections = function() {
    var params_ = new DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params();
    var builder = new codec.MessageV0Builder(
        kDomStorageClient_ResetStorageAreaAndNamespaceConnections_Name,
        codec.align(DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params.encodedSize));
    builder.encodeStruct(DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DomStorageClientStub(delegate) {
    this.delegate_ = delegate;
  }
  DomStorageClientStub.prototype.resetStorageAreaAndNamespaceConnections = function() {
    return this.delegate_ && this.delegate_.resetStorageAreaAndNamespaceConnections && this.delegate_.resetStorageAreaAndNamespaceConnections();
  }

  DomStorageClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDomStorageClient_ResetStorageAreaAndNamespaceConnections_Name:
      var params = reader.decodeStruct(DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params);
      this.resetStorageAreaAndNamespaceConnections();
      return true;
    default:
      return false;
    }
  };

  DomStorageClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDomStorageClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDomStorageClient_ResetStorageAreaAndNamespaceConnections_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DomStorageClient_ResetStorageAreaAndNamespaceConnections_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDomStorageClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DomStorageClient = {
    name: 'blink.mojom.DomStorageClient',
    kVersion: 0,
    ptrClass: DomStorageClientPtr,
    proxyClass: DomStorageClientProxy,
    stubClass: DomStorageClientStub,
    validateRequest: validateDomStorageClientRequest,
    validateResponse: null,
  };
  DomStorageClientStub.prototype.validator = validateDomStorageClientRequest;
  DomStorageClientProxy.prototype.validator = null;
  exports.DomStorageProvider = DomStorageProvider;
  exports.DomStorageProviderPtr = DomStorageProviderPtr;
  exports.DomStorageProviderAssociatedPtr = DomStorageProviderAssociatedPtr;
  exports.DomStorage = DomStorage;
  exports.DomStoragePtr = DomStoragePtr;
  exports.DomStorageAssociatedPtr = DomStorageAssociatedPtr;
  exports.DomStorageClient = DomStorageClient;
  exports.DomStorageClientPtr = DomStorageClientPtr;
  exports.DomStorageClientAssociatedPtr = DomStorageClientAssociatedPtr;
})();