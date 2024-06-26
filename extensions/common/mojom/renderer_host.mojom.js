// extensions/common/mojom/renderer_host.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/renderer_host.mojom';
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
  var values$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/values.mojom', '../../../mojo/public/mojom/base/values.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function RendererHost_AddAPIActionToActivityLog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererHost_AddAPIActionToActivityLog_Params.prototype.initDefaults_ = function() {
    this.extensionId = null;
    this.callName = null;
    this.args = null;
    this.extra = null;
  };
  RendererHost_AddAPIActionToActivityLog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererHost_AddAPIActionToActivityLog_Params.validate = function(messageValidator, offset) {
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


    // validate RendererHost_AddAPIActionToActivityLog_Params.extensionId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddAPIActionToActivityLog_Params.callName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddAPIActionToActivityLog_Params.args
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, values$.ListValue, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddAPIActionToActivityLog_Params.extra
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererHost_AddAPIActionToActivityLog_Params.encodedSize = codec.kStructHeaderSize + 32;

  RendererHost_AddAPIActionToActivityLog_Params.decode = function(decoder) {
    var packed;
    var val = new RendererHost_AddAPIActionToActivityLog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.extensionId =
        decoder.decodeStruct(codec.String);
    val.callName =
        decoder.decodeStruct(codec.String);
    val.args =
        decoder.decodeStructPointer(values$.ListValue);
    val.extra =
        decoder.decodeStruct(codec.String);
    return val;
  };

  RendererHost_AddAPIActionToActivityLog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererHost_AddAPIActionToActivityLog_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.extensionId);
    encoder.encodeStruct(codec.String, val.callName);
    encoder.encodeStructPointer(values$.ListValue, val.args);
    encoder.encodeStruct(codec.String, val.extra);
  };
  function RendererHost_AddEventToActivityLog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererHost_AddEventToActivityLog_Params.prototype.initDefaults_ = function() {
    this.extensionId = null;
    this.callName = null;
    this.args = null;
    this.extra = null;
  };
  RendererHost_AddEventToActivityLog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererHost_AddEventToActivityLog_Params.validate = function(messageValidator, offset) {
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


    // validate RendererHost_AddEventToActivityLog_Params.extensionId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddEventToActivityLog_Params.callName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddEventToActivityLog_Params.args
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, values$.ListValue, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddEventToActivityLog_Params.extra
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RendererHost_AddEventToActivityLog_Params.encodedSize = codec.kStructHeaderSize + 32;

  RendererHost_AddEventToActivityLog_Params.decode = function(decoder) {
    var packed;
    var val = new RendererHost_AddEventToActivityLog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.extensionId =
        decoder.decodeStruct(codec.String);
    val.callName =
        decoder.decodeStruct(codec.String);
    val.args =
        decoder.decodeStructPointer(values$.ListValue);
    val.extra =
        decoder.decodeStruct(codec.String);
    return val;
  };

  RendererHost_AddEventToActivityLog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererHost_AddEventToActivityLog_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.extensionId);
    encoder.encodeStruct(codec.String, val.callName);
    encoder.encodeStructPointer(values$.ListValue, val.args);
    encoder.encodeStruct(codec.String, val.extra);
  };
  function RendererHost_AddDOMActionToActivityLog_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RendererHost_AddDOMActionToActivityLog_Params.prototype.initDefaults_ = function() {
    this.extensionId = null;
    this.callName = null;
    this.args = null;
    this.url = null;
    this.urlTitle = null;
    this.callType = 0;
  };
  RendererHost_AddDOMActionToActivityLog_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RendererHost_AddDOMActionToActivityLog_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddDOMActionToActivityLog_Params.extensionId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddDOMActionToActivityLog_Params.callName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddDOMActionToActivityLog_Params.args
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, values$.ListValue, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddDOMActionToActivityLog_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RendererHost_AddDOMActionToActivityLog_Params.urlTitle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  RendererHost_AddDOMActionToActivityLog_Params.encodedSize = codec.kStructHeaderSize + 48;

  RendererHost_AddDOMActionToActivityLog_Params.decode = function(decoder) {
    var packed;
    var val = new RendererHost_AddDOMActionToActivityLog_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.extensionId =
        decoder.decodeStruct(codec.String);
    val.callName =
        decoder.decodeStruct(codec.String);
    val.args =
        decoder.decodeStructPointer(values$.ListValue);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.urlTitle =
        decoder.decodeStructPointer(string16$.String16);
    val.callType =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  RendererHost_AddDOMActionToActivityLog_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RendererHost_AddDOMActionToActivityLog_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.extensionId);
    encoder.encodeStruct(codec.String, val.callName);
    encoder.encodeStructPointer(values$.ListValue, val.args);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(string16$.String16, val.urlTitle);
    encoder.encodeStruct(codec.Int32, val.callType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kRendererHost_AddAPIActionToActivityLog_Name = 1727052723;
  var kRendererHost_AddEventToActivityLog_Name = 1302745057;
  var kRendererHost_AddDOMActionToActivityLog_Name = 2144045652;

  function RendererHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RendererHost,
                                                   handleOrPtrInfo);
  }

  function RendererHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RendererHost, associatedInterfacePtrInfo);
  }

  RendererHostAssociatedPtr.prototype =
      Object.create(RendererHostPtr.prototype);
  RendererHostAssociatedPtr.prototype.constructor =
      RendererHostAssociatedPtr;

  function RendererHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  RendererHostPtr.prototype.addAPIActionToActivityLog = function() {
    return RendererHostProxy.prototype.addAPIActionToActivityLog
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererHostProxy.prototype.addAPIActionToActivityLog = function(extensionId, callName, args, extra) {
    var params_ = new RendererHost_AddAPIActionToActivityLog_Params();
    params_.extensionId = extensionId;
    params_.callName = callName;
    params_.args = args;
    params_.extra = extra;
    var builder = new codec.MessageV0Builder(
        kRendererHost_AddAPIActionToActivityLog_Name,
        codec.align(RendererHost_AddAPIActionToActivityLog_Params.encodedSize));
    builder.encodeStruct(RendererHost_AddAPIActionToActivityLog_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererHostPtr.prototype.addEventToActivityLog = function() {
    return RendererHostProxy.prototype.addEventToActivityLog
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererHostProxy.prototype.addEventToActivityLog = function(extensionId, callName, args, extra) {
    var params_ = new RendererHost_AddEventToActivityLog_Params();
    params_.extensionId = extensionId;
    params_.callName = callName;
    params_.args = args;
    params_.extra = extra;
    var builder = new codec.MessageV0Builder(
        kRendererHost_AddEventToActivityLog_Name,
        codec.align(RendererHost_AddEventToActivityLog_Params.encodedSize));
    builder.encodeStruct(RendererHost_AddEventToActivityLog_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  RendererHostPtr.prototype.addDOMActionToActivityLog = function() {
    return RendererHostProxy.prototype.addDOMActionToActivityLog
        .apply(this.ptr.getProxy(), arguments);
  };

  RendererHostProxy.prototype.addDOMActionToActivityLog = function(extensionId, callName, args, url, urlTitle, callType) {
    var params_ = new RendererHost_AddDOMActionToActivityLog_Params();
    params_.extensionId = extensionId;
    params_.callName = callName;
    params_.args = args;
    params_.url = url;
    params_.urlTitle = urlTitle;
    params_.callType = callType;
    var builder = new codec.MessageV0Builder(
        kRendererHost_AddDOMActionToActivityLog_Name,
        codec.align(RendererHost_AddDOMActionToActivityLog_Params.encodedSize));
    builder.encodeStruct(RendererHost_AddDOMActionToActivityLog_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function RendererHostStub(delegate) {
    this.delegate_ = delegate;
  }
  RendererHostStub.prototype.addAPIActionToActivityLog = function(extensionId, callName, args, extra) {
    return this.delegate_ && this.delegate_.addAPIActionToActivityLog && this.delegate_.addAPIActionToActivityLog(extensionId, callName, args, extra);
  }
  RendererHostStub.prototype.addEventToActivityLog = function(extensionId, callName, args, extra) {
    return this.delegate_ && this.delegate_.addEventToActivityLog && this.delegate_.addEventToActivityLog(extensionId, callName, args, extra);
  }
  RendererHostStub.prototype.addDOMActionToActivityLog = function(extensionId, callName, args, url, urlTitle, callType) {
    return this.delegate_ && this.delegate_.addDOMActionToActivityLog && this.delegate_.addDOMActionToActivityLog(extensionId, callName, args, url, urlTitle, callType);
  }

  RendererHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRendererHost_AddAPIActionToActivityLog_Name:
      var params = reader.decodeStruct(RendererHost_AddAPIActionToActivityLog_Params);
      this.addAPIActionToActivityLog(params.extensionId, params.callName, params.args, params.extra);
      return true;
    case kRendererHost_AddEventToActivityLog_Name:
      var params = reader.decodeStruct(RendererHost_AddEventToActivityLog_Params);
      this.addEventToActivityLog(params.extensionId, params.callName, params.args, params.extra);
      return true;
    case kRendererHost_AddDOMActionToActivityLog_Name:
      var params = reader.decodeStruct(RendererHost_AddDOMActionToActivityLog_Params);
      this.addDOMActionToActivityLog(params.extensionId, params.callName, params.args, params.url, params.urlTitle, params.callType);
      return true;
    default:
      return false;
    }
  };

  RendererHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateRendererHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRendererHost_AddAPIActionToActivityLog_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererHost_AddAPIActionToActivityLog_Params;
      break;
      case kRendererHost_AddEventToActivityLog_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererHost_AddEventToActivityLog_Params;
      break;
      case kRendererHost_AddDOMActionToActivityLog_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RendererHost_AddDOMActionToActivityLog_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRendererHostResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var RendererHost = {
    name: 'extensions.mojom.RendererHost',
    kVersion: 0,
    ptrClass: RendererHostPtr,
    proxyClass: RendererHostProxy,
    stubClass: RendererHostStub,
    validateRequest: validateRendererHostRequest,
    validateResponse: null,
  };
  RendererHostStub.prototype.validator = validateRendererHostRequest;
  RendererHostProxy.prototype.validator = null;
  exports.RendererHost = RendererHost;
  exports.RendererHostPtr = RendererHostPtr;
  exports.RendererHostAssociatedPtr = RendererHostAssociatedPtr;
})();