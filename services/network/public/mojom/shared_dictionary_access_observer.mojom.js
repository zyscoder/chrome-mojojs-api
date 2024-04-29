// services/network/public/mojom/shared_dictionary_access_observer.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/shared_dictionary_access_observer.mojom';
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
  var shared_dictionary_isolation_key$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/shared_dictionary_isolation_key.mojom', 'shared_dictionary_isolation_key.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }



  function SharedDictionaryAccessDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  SharedDictionaryAccessDetails.Type = {};
  SharedDictionaryAccessDetails.Type.kRead = 0;
  SharedDictionaryAccessDetails.Type.kWrite = 1;
  SharedDictionaryAccessDetails.Type.MIN_VALUE = 0;
  SharedDictionaryAccessDetails.Type.MAX_VALUE = 1;

  SharedDictionaryAccessDetails.Type.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  SharedDictionaryAccessDetails.Type.toKnownEnumValue = function(value) {
    return value;
  };

  SharedDictionaryAccessDetails.Type.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  SharedDictionaryAccessDetails.prototype.initDefaults_ = function() {
    this.type = 0;
    this.isBlocked = false;
    this.url = null;
    this.isolationKey = null;
  };
  SharedDictionaryAccessDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedDictionaryAccessDetails.validate = function(messageValidator, offset) {
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


    // validate SharedDictionaryAccessDetails.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SharedDictionaryAccessDetails.Type);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedDictionaryAccessDetails.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SharedDictionaryAccessDetails.isolationKey
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, shared_dictionary_isolation_key$.SharedDictionaryIsolationKey, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SharedDictionaryAccessDetails.encodedSize = codec.kStructHeaderSize + 24;

  SharedDictionaryAccessDetails.decode = function(decoder) {
    var packed;
    var val = new SharedDictionaryAccessDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(new codec.Enum(SharedDictionaryAccessDetails.Type));
    packed = decoder.readUint8();
    val.isBlocked = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.isolationKey =
        decoder.decodeStructPointer(shared_dictionary_isolation_key$.SharedDictionaryIsolationKey);
    return val;
  };

  SharedDictionaryAccessDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedDictionaryAccessDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    packed = 0;
    packed |= (val.isBlocked & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(shared_dictionary_isolation_key$.SharedDictionaryIsolationKey, val.isolationKey);
  };
  function SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.prototype.initDefaults_ = function() {
    this.details = null;
  };
  SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.validate = function(messageValidator, offset) {
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


    // validate SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.details
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, SharedDictionaryAccessDetails, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.encodedSize = codec.kStructHeaderSize + 8;

  SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.decode = function(decoder) {
    var packed;
    var val = new SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.details =
        decoder.decodeStructPointer(SharedDictionaryAccessDetails);
    return val;
  };

  SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(SharedDictionaryAccessDetails, val.details);
  };
  function SharedDictionaryAccessObserver_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SharedDictionaryAccessObserver_Clone_Params.prototype.initDefaults_ = function() {
    this.observer = new bindings.InterfaceRequest();
  };
  SharedDictionaryAccessObserver_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SharedDictionaryAccessObserver_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate SharedDictionaryAccessObserver_Clone_Params.observer
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SharedDictionaryAccessObserver_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  SharedDictionaryAccessObserver_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new SharedDictionaryAccessObserver_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SharedDictionaryAccessObserver_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SharedDictionaryAccessObserver_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.observer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kSharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Name = 296170010;
  var kSharedDictionaryAccessObserver_Clone_Name = 1843642335;

  function SharedDictionaryAccessObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SharedDictionaryAccessObserver,
                                                   handleOrPtrInfo);
  }

  function SharedDictionaryAccessObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SharedDictionaryAccessObserver, associatedInterfacePtrInfo);
  }

  SharedDictionaryAccessObserverAssociatedPtr.prototype =
      Object.create(SharedDictionaryAccessObserverPtr.prototype);
  SharedDictionaryAccessObserverAssociatedPtr.prototype.constructor =
      SharedDictionaryAccessObserverAssociatedPtr;

  function SharedDictionaryAccessObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  SharedDictionaryAccessObserverPtr.prototype.onSharedDictionaryAccessed = function() {
    return SharedDictionaryAccessObserverProxy.prototype.onSharedDictionaryAccessed
        .apply(this.ptr.getProxy(), arguments);
  };

  SharedDictionaryAccessObserverProxy.prototype.onSharedDictionaryAccessed = function(details) {
    var params_ = new SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params();
    params_.details = details;
    var builder = new codec.MessageV0Builder(
        kSharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Name,
        codec.align(SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params.encodedSize));
    builder.encodeStruct(SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  SharedDictionaryAccessObserverPtr.prototype.clone = function() {
    return SharedDictionaryAccessObserverProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  SharedDictionaryAccessObserverProxy.prototype.clone = function(observer) {
    var params_ = new SharedDictionaryAccessObserver_Clone_Params();
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kSharedDictionaryAccessObserver_Clone_Name,
        codec.align(SharedDictionaryAccessObserver_Clone_Params.encodedSize));
    builder.encodeStruct(SharedDictionaryAccessObserver_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function SharedDictionaryAccessObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  SharedDictionaryAccessObserverStub.prototype.onSharedDictionaryAccessed = function(details) {
    return this.delegate_ && this.delegate_.onSharedDictionaryAccessed && this.delegate_.onSharedDictionaryAccessed(details);
  }
  SharedDictionaryAccessObserverStub.prototype.clone = function(observer) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(observer);
  }

  SharedDictionaryAccessObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Name:
      var params = reader.decodeStruct(SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params);
      this.onSharedDictionaryAccessed(params.details);
      return true;
    case kSharedDictionaryAccessObserver_Clone_Name:
      var params = reader.decodeStruct(SharedDictionaryAccessObserver_Clone_Params);
      this.clone(params.observer);
      return true;
    default:
      return false;
    }
  };

  SharedDictionaryAccessObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateSharedDictionaryAccessObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SharedDictionaryAccessObserver_OnSharedDictionaryAccessed_Params;
      break;
      case kSharedDictionaryAccessObserver_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = SharedDictionaryAccessObserver_Clone_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSharedDictionaryAccessObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var SharedDictionaryAccessObserver = {
    name: 'network.mojom.SharedDictionaryAccessObserver',
    kVersion: 0,
    ptrClass: SharedDictionaryAccessObserverPtr,
    proxyClass: SharedDictionaryAccessObserverProxy,
    stubClass: SharedDictionaryAccessObserverStub,
    validateRequest: validateSharedDictionaryAccessObserverRequest,
    validateResponse: null,
  };
  SharedDictionaryAccessObserverStub.prototype.validator = validateSharedDictionaryAccessObserverRequest;
  SharedDictionaryAccessObserverProxy.prototype.validator = null;
  exports.SharedDictionaryAccessDetails = SharedDictionaryAccessDetails;
  exports.SharedDictionaryAccessObserver = SharedDictionaryAccessObserver;
  exports.SharedDictionaryAccessObserverPtr = SharedDictionaryAccessObserverPtr;
  exports.SharedDictionaryAccessObserverAssociatedPtr = SharedDictionaryAccessObserverAssociatedPtr;
})();