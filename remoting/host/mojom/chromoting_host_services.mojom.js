// remoting/host/mojom/chromoting_host_services.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'remoting/host/mojom/chromoting_host_services.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('remoting.mojom');
  var webauthn_proxy$ =
      mojo.internal.exposeNamespace('remoting.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'remoting/host/mojom/webauthn_proxy.mojom', 'webauthn_proxy.mojom.js');
  }
  var remote_security_key$ =
      mojo.internal.exposeNamespace('remoting.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'remoting/host/mojom/remote_security_key.mojom', 'remote_security_key.mojom.js');
  }
  var remote_url_opener$ =
      mojo.internal.exposeNamespace('remoting.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'remoting/host/mojom/remote_url_opener.mojom', 'remote_url_opener.mojom.js');
  }



  function ChromotingHostServices_BindSessionServices_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ChromotingHostServices_BindSessionServices_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  ChromotingHostServices_BindSessionServices_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ChromotingHostServices_BindSessionServices_Params.validate = function(messageValidator, offset) {
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


    // validate ChromotingHostServices_BindSessionServices_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ChromotingHostServices_BindSessionServices_Params.encodedSize = codec.kStructHeaderSize + 8;

  ChromotingHostServices_BindSessionServices_Params.decode = function(decoder) {
    var packed;
    var val = new ChromotingHostServices_BindSessionServices_Params();
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

  ChromotingHostServices_BindSessionServices_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ChromotingHostServices_BindSessionServices_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ChromotingSessionServices_BindWebAuthnProxy_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ChromotingSessionServices_BindWebAuthnProxy_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  ChromotingSessionServices_BindWebAuthnProxy_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ChromotingSessionServices_BindWebAuthnProxy_Params.validate = function(messageValidator, offset) {
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


    // validate ChromotingSessionServices_BindWebAuthnProxy_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ChromotingSessionServices_BindWebAuthnProxy_Params.encodedSize = codec.kStructHeaderSize + 8;

  ChromotingSessionServices_BindWebAuthnProxy_Params.decode = function(decoder) {
    var packed;
    var val = new ChromotingSessionServices_BindWebAuthnProxy_Params();
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

  ChromotingSessionServices_BindWebAuthnProxy_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ChromotingSessionServices_BindWebAuthnProxy_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ChromotingSessionServices_BindRemoteUrlOpener_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ChromotingSessionServices_BindRemoteUrlOpener_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  ChromotingSessionServices_BindRemoteUrlOpener_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ChromotingSessionServices_BindRemoteUrlOpener_Params.validate = function(messageValidator, offset) {
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


    // validate ChromotingSessionServices_BindRemoteUrlOpener_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ChromotingSessionServices_BindRemoteUrlOpener_Params.encodedSize = codec.kStructHeaderSize + 8;

  ChromotingSessionServices_BindRemoteUrlOpener_Params.decode = function(decoder) {
    var packed;
    var val = new ChromotingSessionServices_BindRemoteUrlOpener_Params();
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

  ChromotingSessionServices_BindRemoteUrlOpener_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ChromotingSessionServices_BindRemoteUrlOpener_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kChromotingHostServices_BindSessionServices_Name = 186135581;

  function ChromotingHostServicesPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ChromotingHostServices,
                                                   handleOrPtrInfo);
  }

  function ChromotingHostServicesAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ChromotingHostServices, associatedInterfacePtrInfo);
  }

  ChromotingHostServicesAssociatedPtr.prototype =
      Object.create(ChromotingHostServicesPtr.prototype);
  ChromotingHostServicesAssociatedPtr.prototype.constructor =
      ChromotingHostServicesAssociatedPtr;

  function ChromotingHostServicesProxy(receiver) {
    this.receiver_ = receiver;
  }
  ChromotingHostServicesPtr.prototype.bindSessionServices = function() {
    return ChromotingHostServicesProxy.prototype.bindSessionServices
        .apply(this.ptr.getProxy(), arguments);
  };

  ChromotingHostServicesProxy.prototype.bindSessionServices = function(receiver) {
    var params_ = new ChromotingHostServices_BindSessionServices_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kChromotingHostServices_BindSessionServices_Name,
        codec.align(ChromotingHostServices_BindSessionServices_Params.encodedSize));
    builder.encodeStruct(ChromotingHostServices_BindSessionServices_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ChromotingHostServicesStub(delegate) {
    this.delegate_ = delegate;
  }
  ChromotingHostServicesStub.prototype.bindSessionServices = function(receiver) {
    return this.delegate_ && this.delegate_.bindSessionServices && this.delegate_.bindSessionServices(receiver);
  }

  ChromotingHostServicesStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kChromotingHostServices_BindSessionServices_Name:
      var params = reader.decodeStruct(ChromotingHostServices_BindSessionServices_Params);
      this.bindSessionServices(params.receiver);
      return true;
    default:
      return false;
    }
  };

  ChromotingHostServicesStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateChromotingHostServicesRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kChromotingHostServices_BindSessionServices_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ChromotingHostServices_BindSessionServices_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateChromotingHostServicesResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ChromotingHostServices = {
    name: 'remoting.mojom.ChromotingHostServices',
    kVersion: 0,
    ptrClass: ChromotingHostServicesPtr,
    proxyClass: ChromotingHostServicesProxy,
    stubClass: ChromotingHostServicesStub,
    validateRequest: validateChromotingHostServicesRequest,
    validateResponse: null,
  };
  ChromotingHostServicesStub.prototype.validator = validateChromotingHostServicesRequest;
  ChromotingHostServicesProxy.prototype.validator = null;
  var kChromotingSessionServices_BindWebAuthnProxy_Name = 1377176409;
  var kChromotingSessionServices_BindRemoteUrlOpener_Name = 2017161302;

  function ChromotingSessionServicesPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ChromotingSessionServices,
                                                   handleOrPtrInfo);
  }

  function ChromotingSessionServicesAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ChromotingSessionServices, associatedInterfacePtrInfo);
  }

  ChromotingSessionServicesAssociatedPtr.prototype =
      Object.create(ChromotingSessionServicesPtr.prototype);
  ChromotingSessionServicesAssociatedPtr.prototype.constructor =
      ChromotingSessionServicesAssociatedPtr;

  function ChromotingSessionServicesProxy(receiver) {
    this.receiver_ = receiver;
  }
  ChromotingSessionServicesPtr.prototype.bindWebAuthnProxy = function() {
    return ChromotingSessionServicesProxy.prototype.bindWebAuthnProxy
        .apply(this.ptr.getProxy(), arguments);
  };

  ChromotingSessionServicesProxy.prototype.bindWebAuthnProxy = function(receiver) {
    var params_ = new ChromotingSessionServices_BindWebAuthnProxy_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kChromotingSessionServices_BindWebAuthnProxy_Name,
        codec.align(ChromotingSessionServices_BindWebAuthnProxy_Params.encodedSize));
    builder.encodeStruct(ChromotingSessionServices_BindWebAuthnProxy_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ChromotingSessionServicesPtr.prototype.bindRemoteUrlOpener = function() {
    return ChromotingSessionServicesProxy.prototype.bindRemoteUrlOpener
        .apply(this.ptr.getProxy(), arguments);
  };

  ChromotingSessionServicesProxy.prototype.bindRemoteUrlOpener = function(receiver) {
    var params_ = new ChromotingSessionServices_BindRemoteUrlOpener_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kChromotingSessionServices_BindRemoteUrlOpener_Name,
        codec.align(ChromotingSessionServices_BindRemoteUrlOpener_Params.encodedSize));
    builder.encodeStruct(ChromotingSessionServices_BindRemoteUrlOpener_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ChromotingSessionServicesStub(delegate) {
    this.delegate_ = delegate;
  }
  ChromotingSessionServicesStub.prototype.bindWebAuthnProxy = function(receiver) {
    return this.delegate_ && this.delegate_.bindWebAuthnProxy && this.delegate_.bindWebAuthnProxy(receiver);
  }
  ChromotingSessionServicesStub.prototype.bindRemoteUrlOpener = function(receiver) {
    return this.delegate_ && this.delegate_.bindRemoteUrlOpener && this.delegate_.bindRemoteUrlOpener(receiver);
  }

  ChromotingSessionServicesStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kChromotingSessionServices_BindWebAuthnProxy_Name:
      var params = reader.decodeStruct(ChromotingSessionServices_BindWebAuthnProxy_Params);
      this.bindWebAuthnProxy(params.receiver);
      return true;
    case kChromotingSessionServices_BindRemoteUrlOpener_Name:
      var params = reader.decodeStruct(ChromotingSessionServices_BindRemoteUrlOpener_Params);
      this.bindRemoteUrlOpener(params.receiver);
      return true;
    default:
      return false;
    }
  };

  ChromotingSessionServicesStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateChromotingSessionServicesRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kChromotingSessionServices_BindWebAuthnProxy_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ChromotingSessionServices_BindWebAuthnProxy_Params;
      break;
      case kChromotingSessionServices_BindRemoteUrlOpener_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ChromotingSessionServices_BindRemoteUrlOpener_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateChromotingSessionServicesResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ChromotingSessionServices = {
    name: 'remoting.mojom.ChromotingSessionServices',
    kVersion: 0,
    ptrClass: ChromotingSessionServicesPtr,
    proxyClass: ChromotingSessionServicesProxy,
    stubClass: ChromotingSessionServicesStub,
    validateRequest: validateChromotingSessionServicesRequest,
    validateResponse: null,
  };
  ChromotingSessionServicesStub.prototype.validator = validateChromotingSessionServicesRequest;
  ChromotingSessionServicesProxy.prototype.validator = null;
  exports.ChromotingHostServices = ChromotingHostServices;
  exports.ChromotingHostServicesPtr = ChromotingHostServicesPtr;
  exports.ChromotingHostServicesAssociatedPtr = ChromotingHostServicesAssociatedPtr;
  exports.ChromotingSessionServices = ChromotingSessionServices;
  exports.ChromotingSessionServicesPtr = ChromotingSessionServicesPtr;
  exports.ChromotingSessionServicesAssociatedPtr = ChromotingSessionServicesAssociatedPtr;
})();