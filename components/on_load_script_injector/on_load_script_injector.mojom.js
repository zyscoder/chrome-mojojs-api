// components/on_load_script_injector/on_load_script_injector.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/on_load_script_injector/on_load_script_injector.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('onLoadScriptInjector.mojom');
  var shared_memory$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/shared_memory.mojom', '../../mojo/public/mojom/base/shared_memory.mojom.js');
  }



  function OnLoadScriptInjector_AddOnLoadScript_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OnLoadScriptInjector_AddOnLoadScript_Params.prototype.initDefaults_ = function() {
    this.script = null;
  };
  OnLoadScriptInjector_AddOnLoadScript_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OnLoadScriptInjector_AddOnLoadScript_Params.validate = function(messageValidator, offset) {
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


    // validate OnLoadScriptInjector_AddOnLoadScript_Params.script
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, shared_memory$.ReadOnlySharedMemoryRegion, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OnLoadScriptInjector_AddOnLoadScript_Params.encodedSize = codec.kStructHeaderSize + 8;

  OnLoadScriptInjector_AddOnLoadScript_Params.decode = function(decoder) {
    var packed;
    var val = new OnLoadScriptInjector_AddOnLoadScript_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.script =
        decoder.decodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion);
    return val;
  };

  OnLoadScriptInjector_AddOnLoadScript_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OnLoadScriptInjector_AddOnLoadScript_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(shared_memory$.ReadOnlySharedMemoryRegion, val.script);
  };
  function OnLoadScriptInjector_ClearOnLoadScripts_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OnLoadScriptInjector_ClearOnLoadScripts_Params.prototype.initDefaults_ = function() {
  };
  OnLoadScriptInjector_ClearOnLoadScripts_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OnLoadScriptInjector_ClearOnLoadScripts_Params.validate = function(messageValidator, offset) {
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

  OnLoadScriptInjector_ClearOnLoadScripts_Params.encodedSize = codec.kStructHeaderSize + 0;

  OnLoadScriptInjector_ClearOnLoadScripts_Params.decode = function(decoder) {
    var packed;
    var val = new OnLoadScriptInjector_ClearOnLoadScripts_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  OnLoadScriptInjector_ClearOnLoadScripts_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OnLoadScriptInjector_ClearOnLoadScripts_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kOnLoadScriptInjector_AddOnLoadScript_Name = 26071993;
  var kOnLoadScriptInjector_ClearOnLoadScripts_Name = 1289124232;

  function OnLoadScriptInjectorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OnLoadScriptInjector,
                                                   handleOrPtrInfo);
  }

  function OnLoadScriptInjectorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OnLoadScriptInjector, associatedInterfacePtrInfo);
  }

  OnLoadScriptInjectorAssociatedPtr.prototype =
      Object.create(OnLoadScriptInjectorPtr.prototype);
  OnLoadScriptInjectorAssociatedPtr.prototype.constructor =
      OnLoadScriptInjectorAssociatedPtr;

  function OnLoadScriptInjectorProxy(receiver) {
    this.receiver_ = receiver;
  }
  OnLoadScriptInjectorPtr.prototype.addOnLoadScript = function() {
    return OnLoadScriptInjectorProxy.prototype.addOnLoadScript
        .apply(this.ptr.getProxy(), arguments);
  };

  OnLoadScriptInjectorProxy.prototype.addOnLoadScript = function(script) {
    var params_ = new OnLoadScriptInjector_AddOnLoadScript_Params();
    params_.script = script;
    var builder = new codec.MessageV0Builder(
        kOnLoadScriptInjector_AddOnLoadScript_Name,
        codec.align(OnLoadScriptInjector_AddOnLoadScript_Params.encodedSize));
    builder.encodeStruct(OnLoadScriptInjector_AddOnLoadScript_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  OnLoadScriptInjectorPtr.prototype.clearOnLoadScripts = function() {
    return OnLoadScriptInjectorProxy.prototype.clearOnLoadScripts
        .apply(this.ptr.getProxy(), arguments);
  };

  OnLoadScriptInjectorProxy.prototype.clearOnLoadScripts = function() {
    var params_ = new OnLoadScriptInjector_ClearOnLoadScripts_Params();
    var builder = new codec.MessageV0Builder(
        kOnLoadScriptInjector_ClearOnLoadScripts_Name,
        codec.align(OnLoadScriptInjector_ClearOnLoadScripts_Params.encodedSize));
    builder.encodeStruct(OnLoadScriptInjector_ClearOnLoadScripts_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function OnLoadScriptInjectorStub(delegate) {
    this.delegate_ = delegate;
  }
  OnLoadScriptInjectorStub.prototype.addOnLoadScript = function(script) {
    return this.delegate_ && this.delegate_.addOnLoadScript && this.delegate_.addOnLoadScript(script);
  }
  OnLoadScriptInjectorStub.prototype.clearOnLoadScripts = function() {
    return this.delegate_ && this.delegate_.clearOnLoadScripts && this.delegate_.clearOnLoadScripts();
  }

  OnLoadScriptInjectorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOnLoadScriptInjector_AddOnLoadScript_Name:
      var params = reader.decodeStruct(OnLoadScriptInjector_AddOnLoadScript_Params);
      this.addOnLoadScript(params.script);
      return true;
    case kOnLoadScriptInjector_ClearOnLoadScripts_Name:
      var params = reader.decodeStruct(OnLoadScriptInjector_ClearOnLoadScripts_Params);
      this.clearOnLoadScripts();
      return true;
    default:
      return false;
    }
  };

  OnLoadScriptInjectorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateOnLoadScriptInjectorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOnLoadScriptInjector_AddOnLoadScript_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OnLoadScriptInjector_AddOnLoadScript_Params;
      break;
      case kOnLoadScriptInjector_ClearOnLoadScripts_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OnLoadScriptInjector_ClearOnLoadScripts_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOnLoadScriptInjectorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var OnLoadScriptInjector = {
    name: 'on_load_script_injector.mojom.OnLoadScriptInjector',
    kVersion: 0,
    ptrClass: OnLoadScriptInjectorPtr,
    proxyClass: OnLoadScriptInjectorProxy,
    stubClass: OnLoadScriptInjectorStub,
    validateRequest: validateOnLoadScriptInjectorRequest,
    validateResponse: null,
  };
  OnLoadScriptInjectorStub.prototype.validator = validateOnLoadScriptInjectorRequest;
  OnLoadScriptInjectorProxy.prototype.validator = null;
  exports.OnLoadScriptInjector = OnLoadScriptInjector;
  exports.OnLoadScriptInjectorPtr = OnLoadScriptInjectorPtr;
  exports.OnLoadScriptInjectorAssociatedPtr = OnLoadScriptInjectorAssociatedPtr;
})();