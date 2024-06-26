// third_party/blink/public/mojom/loader/code_cache.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/code_cache.mojom';
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
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var CodeCacheType = {};
  CodeCacheType.kJavascript = 0;
  CodeCacheType.kWebAssembly = 1;
  CodeCacheType.MIN_VALUE = 0;
  CodeCacheType.MAX_VALUE = 1;

  CodeCacheType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  CodeCacheType.toKnownEnumValue = function(value) {
    return value;
  };

  CodeCacheType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function CodeCacheHost_DidGenerateCacheableMetadata_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CodeCacheHost_DidGenerateCacheableMetadata_Params.prototype.initDefaults_ = function() {
    this.cacheType = 0;
    this.url = null;
    this.expectedResponseTime = null;
    this.data = null;
  };
  CodeCacheHost_DidGenerateCacheableMetadata_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CodeCacheHost_DidGenerateCacheableMetadata_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_DidGenerateCacheableMetadata_Params.cacheType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CodeCacheType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_DidGenerateCacheableMetadata_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_DidGenerateCacheableMetadata_Params.expectedResponseTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_DidGenerateCacheableMetadata_Params.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 24, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CodeCacheHost_DidGenerateCacheableMetadata_Params.encodedSize = codec.kStructHeaderSize + 40;

  CodeCacheHost_DidGenerateCacheableMetadata_Params.decode = function(decoder) {
    var packed;
    var val = new CodeCacheHost_DidGenerateCacheableMetadata_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cacheType =
        decoder.decodeStruct(new codec.Enum(CodeCacheType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.expectedResponseTime =
        decoder.decodeStructPointer(time$.Time);
    val.data =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  CodeCacheHost_DidGenerateCacheableMetadata_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CodeCacheHost_DidGenerateCacheableMetadata_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.cacheType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(time$.Time, val.expectedResponseTime);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  function CodeCacheHost_FetchCachedCode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CodeCacheHost_FetchCachedCode_Params.prototype.initDefaults_ = function() {
    this.cacheType = 0;
    this.url = null;
  };
  CodeCacheHost_FetchCachedCode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CodeCacheHost_FetchCachedCode_Params.validate = function(messageValidator, offset) {
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


    // validate CodeCacheHost_FetchCachedCode_Params.cacheType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CodeCacheType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_FetchCachedCode_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CodeCacheHost_FetchCachedCode_Params.encodedSize = codec.kStructHeaderSize + 16;

  CodeCacheHost_FetchCachedCode_Params.decode = function(decoder) {
    var packed;
    var val = new CodeCacheHost_FetchCachedCode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cacheType =
        decoder.decodeStruct(new codec.Enum(CodeCacheType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  CodeCacheHost_FetchCachedCode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CodeCacheHost_FetchCachedCode_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.cacheType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.url);
  };
  function CodeCacheHost_FetchCachedCode_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CodeCacheHost_FetchCachedCode_ResponseParams.prototype.initDefaults_ = function() {
    this.responseTime = null;
    this.data = null;
  };
  CodeCacheHost_FetchCachedCode_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CodeCacheHost_FetchCachedCode_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate CodeCacheHost_FetchCachedCode_ResponseParams.responseTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_FetchCachedCode_ResponseParams.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CodeCacheHost_FetchCachedCode_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  CodeCacheHost_FetchCachedCode_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new CodeCacheHost_FetchCachedCode_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.responseTime =
        decoder.decodeStructPointer(time$.Time);
    val.data =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  CodeCacheHost_FetchCachedCode_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CodeCacheHost_FetchCachedCode_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.Time, val.responseTime);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  function CodeCacheHost_ClearCodeCacheEntry_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CodeCacheHost_ClearCodeCacheEntry_Params.prototype.initDefaults_ = function() {
    this.cacheType = 0;
    this.url = null;
  };
  CodeCacheHost_ClearCodeCacheEntry_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CodeCacheHost_ClearCodeCacheEntry_Params.validate = function(messageValidator, offset) {
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


    // validate CodeCacheHost_ClearCodeCacheEntry_Params.cacheType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, CodeCacheType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_ClearCodeCacheEntry_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CodeCacheHost_ClearCodeCacheEntry_Params.encodedSize = codec.kStructHeaderSize + 16;

  CodeCacheHost_ClearCodeCacheEntry_Params.decode = function(decoder) {
    var packed;
    var val = new CodeCacheHost_ClearCodeCacheEntry_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cacheType =
        decoder.decodeStruct(new codec.Enum(CodeCacheType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  CodeCacheHost_ClearCodeCacheEntry_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CodeCacheHost_ClearCodeCacheEntry_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.cacheType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url$.Url, val.url);
  };
  function CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.expectedResponseTime = null;
    this.data = null;
    this.cacheStorageCacheName = null;
  };
  CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.expectedResponseTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 16, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.cacheStorageCacheName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.encodedSize = codec.kStructHeaderSize + 40;

  CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.decode = function(decoder) {
    var packed;
    var val = new CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.expectedResponseTime =
        decoder.decodeStructPointer(time$.Time);
    val.data =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    val.cacheStorageCacheName =
        decoder.decodeStruct(codec.String);
    return val;
  };

  CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(time$.Time, val.expectedResponseTime);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
    encoder.encodeStruct(codec.String, val.cacheStorageCacheName);
  };
  var kCodeCacheHost_DidGenerateCacheableMetadata_Name = 0;
  var kCodeCacheHost_FetchCachedCode_Name = 1;
  var kCodeCacheHost_ClearCodeCacheEntry_Name = 2;
  var kCodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Name = 3;

  function CodeCacheHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(CodeCacheHost,
                                                   handleOrPtrInfo);
  }

  function CodeCacheHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        CodeCacheHost, associatedInterfacePtrInfo);
  }

  CodeCacheHostAssociatedPtr.prototype =
      Object.create(CodeCacheHostPtr.prototype);
  CodeCacheHostAssociatedPtr.prototype.constructor =
      CodeCacheHostAssociatedPtr;

  function CodeCacheHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  CodeCacheHostPtr.prototype.didGenerateCacheableMetadata = function() {
    return CodeCacheHostProxy.prototype.didGenerateCacheableMetadata
        .apply(this.ptr.getProxy(), arguments);
  };

  CodeCacheHostProxy.prototype.didGenerateCacheableMetadata = function(cacheType, url, expectedResponseTime, data) {
    var params_ = new CodeCacheHost_DidGenerateCacheableMetadata_Params();
    params_.cacheType = cacheType;
    params_.url = url;
    params_.expectedResponseTime = expectedResponseTime;
    params_.data = data;
    var builder = new codec.MessageV0Builder(
        kCodeCacheHost_DidGenerateCacheableMetadata_Name,
        codec.align(CodeCacheHost_DidGenerateCacheableMetadata_Params.encodedSize));
    builder.encodeStruct(CodeCacheHost_DidGenerateCacheableMetadata_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CodeCacheHostPtr.prototype.fetchCachedCode = function() {
    return CodeCacheHostProxy.prototype.fetchCachedCode
        .apply(this.ptr.getProxy(), arguments);
  };

  CodeCacheHostProxy.prototype.fetchCachedCode = function(cacheType, url) {
    var params_ = new CodeCacheHost_FetchCachedCode_Params();
    params_.cacheType = cacheType;
    params_.url = url;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kCodeCacheHost_FetchCachedCode_Name,
          codec.align(CodeCacheHost_FetchCachedCode_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(CodeCacheHost_FetchCachedCode_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(CodeCacheHost_FetchCachedCode_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  CodeCacheHostPtr.prototype.clearCodeCacheEntry = function() {
    return CodeCacheHostProxy.prototype.clearCodeCacheEntry
        .apply(this.ptr.getProxy(), arguments);
  };

  CodeCacheHostProxy.prototype.clearCodeCacheEntry = function(cacheType, url) {
    var params_ = new CodeCacheHost_ClearCodeCacheEntry_Params();
    params_.cacheType = cacheType;
    params_.url = url;
    var builder = new codec.MessageV0Builder(
        kCodeCacheHost_ClearCodeCacheEntry_Name,
        codec.align(CodeCacheHost_ClearCodeCacheEntry_Params.encodedSize));
    builder.encodeStruct(CodeCacheHost_ClearCodeCacheEntry_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  CodeCacheHostPtr.prototype.didGenerateCacheableMetadataInCacheStorage = function() {
    return CodeCacheHostProxy.prototype.didGenerateCacheableMetadataInCacheStorage
        .apply(this.ptr.getProxy(), arguments);
  };

  CodeCacheHostProxy.prototype.didGenerateCacheableMetadataInCacheStorage = function(url, expectedResponseTime, data, cacheStorageCacheName) {
    var params_ = new CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params();
    params_.url = url;
    params_.expectedResponseTime = expectedResponseTime;
    params_.data = data;
    params_.cacheStorageCacheName = cacheStorageCacheName;
    var builder = new codec.MessageV0Builder(
        kCodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Name,
        codec.align(CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params.encodedSize));
    builder.encodeStruct(CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function CodeCacheHostStub(delegate) {
    this.delegate_ = delegate;
  }
  CodeCacheHostStub.prototype.didGenerateCacheableMetadata = function(cacheType, url, expectedResponseTime, data) {
    return this.delegate_ && this.delegate_.didGenerateCacheableMetadata && this.delegate_.didGenerateCacheableMetadata(cacheType, url, expectedResponseTime, data);
  }
  CodeCacheHostStub.prototype.fetchCachedCode = function(cacheType, url) {
    return this.delegate_ && this.delegate_.fetchCachedCode && this.delegate_.fetchCachedCode(cacheType, url);
  }
  CodeCacheHostStub.prototype.clearCodeCacheEntry = function(cacheType, url) {
    return this.delegate_ && this.delegate_.clearCodeCacheEntry && this.delegate_.clearCodeCacheEntry(cacheType, url);
  }
  CodeCacheHostStub.prototype.didGenerateCacheableMetadataInCacheStorage = function(url, expectedResponseTime, data, cacheStorageCacheName) {
    return this.delegate_ && this.delegate_.didGenerateCacheableMetadataInCacheStorage && this.delegate_.didGenerateCacheableMetadataInCacheStorage(url, expectedResponseTime, data, cacheStorageCacheName);
  }

  CodeCacheHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCodeCacheHost_DidGenerateCacheableMetadata_Name:
      var params = reader.decodeStruct(CodeCacheHost_DidGenerateCacheableMetadata_Params);
      this.didGenerateCacheableMetadata(params.cacheType, params.url, params.expectedResponseTime, params.data);
      return true;
    case kCodeCacheHost_ClearCodeCacheEntry_Name:
      var params = reader.decodeStruct(CodeCacheHost_ClearCodeCacheEntry_Params);
      this.clearCodeCacheEntry(params.cacheType, params.url);
      return true;
    case kCodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Name:
      var params = reader.decodeStruct(CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params);
      this.didGenerateCacheableMetadataInCacheStorage(params.url, params.expectedResponseTime, params.data, params.cacheStorageCacheName);
      return true;
    default:
      return false;
    }
  };

  CodeCacheHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kCodeCacheHost_FetchCachedCode_Name:
      var params = reader.decodeStruct(CodeCacheHost_FetchCachedCode_Params);
      this.fetchCachedCode(params.cacheType, params.url).then(function(response) {
        var responseParams =
            new CodeCacheHost_FetchCachedCode_ResponseParams();
        responseParams.responseTime = response.responseTime;
        responseParams.data = response.data;
        var builder = new codec.MessageV1Builder(
            kCodeCacheHost_FetchCachedCode_Name,
            codec.align(CodeCacheHost_FetchCachedCode_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(CodeCacheHost_FetchCachedCode_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateCodeCacheHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kCodeCacheHost_DidGenerateCacheableMetadata_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CodeCacheHost_DidGenerateCacheableMetadata_Params;
      break;
      case kCodeCacheHost_FetchCachedCode_Name:
        if (message.expectsResponse())
          paramsClass = CodeCacheHost_FetchCachedCode_Params;
      break;
      case kCodeCacheHost_ClearCodeCacheEntry_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CodeCacheHost_ClearCodeCacheEntry_Params;
      break;
      case kCodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = CodeCacheHost_DidGenerateCacheableMetadataInCacheStorage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateCodeCacheHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kCodeCacheHost_FetchCachedCode_Name:
        if (message.isResponse())
          paramsClass = CodeCacheHost_FetchCachedCode_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var CodeCacheHost = {
    name: 'blink.mojom.CodeCacheHost',
    kVersion: 0,
    ptrClass: CodeCacheHostPtr,
    proxyClass: CodeCacheHostProxy,
    stubClass: CodeCacheHostStub,
    validateRequest: validateCodeCacheHostRequest,
    validateResponse: validateCodeCacheHostResponse,
  };
  CodeCacheHostStub.prototype.validator = validateCodeCacheHostRequest;
  CodeCacheHostProxy.prototype.validator = validateCodeCacheHostResponse;
  exports.CodeCacheType = CodeCacheType;
  exports.CodeCacheHost = CodeCacheHost;
  exports.CodeCacheHostPtr = CodeCacheHostPtr;
  exports.CodeCacheHostAssociatedPtr = CodeCacheHostAssociatedPtr;
})();