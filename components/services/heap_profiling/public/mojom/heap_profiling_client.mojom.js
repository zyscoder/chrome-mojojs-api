// components/services/heap_profiling/public/mojom/heap_profiling_client.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/services/heap_profiling/public/mojom/heap_profiling_client.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('heapProfiling.mojom');


  var StackMode = {};
  StackMode.NATIVE_WITH_THREAD_NAMES = 0;
  StackMode.NATIVE_WITHOUT_THREAD_NAMES = 1;
  StackMode.MIN_VALUE = 0;
  StackMode.MAX_VALUE = 1;

  StackMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  StackMode.toKnownEnumValue = function(value) {
    return value;
  };

  StackMode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var AllocatorType = {};
  AllocatorType.kMalloc = 0;
  AllocatorType.kPartitionAlloc = 1;
  AllocatorType.MIN_VALUE = 0;
  AllocatorType.MAX_VALUE = 1;

  AllocatorType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  AllocatorType.toKnownEnumValue = function(value) {
    return value;
  };

  AllocatorType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ProfilingParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingParams.prototype.initDefaults_ = function() {
    this.stackMode = 0;
    this.samplingRate = 0;
  };
  ProfilingParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingParams.validate = function(messageValidator, offset) {
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


    // validate ProfilingParams.stackMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, StackMode);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ProfilingParams.encodedSize = codec.kStructHeaderSize + 8;

  ProfilingParams.decode = function(decoder) {
    var packed;
    var val = new ProfilingParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.stackMode =
        decoder.decodeStruct(new codec.Enum(StackMode));
    val.samplingRate =
        decoder.decodeStruct(codec.Uint32);
    return val;
  };

  ProfilingParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.stackMode);
    encoder.encodeStruct(codec.Uint32, val.samplingRate);
  };
  function HeapProfileSample(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HeapProfileSample.prototype.initDefaults_ = function() {
    this.allocator = 0;
    this.size = 0;
    this.total = 0;
    this.contextId = 0;
    this.stack = null;
  };
  HeapProfileSample.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HeapProfileSample.validate = function(messageValidator, offset) {
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


    // validate HeapProfileSample.allocator
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AllocatorType);
    if (err !== validator.validationError.NONE)
        return err;





    // validate HeapProfileSample.stack
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, codec.Uint64, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HeapProfileSample.encodedSize = codec.kStructHeaderSize + 40;

  HeapProfileSample.decode = function(decoder) {
    var packed;
    var val = new HeapProfileSample();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.allocator =
        decoder.decodeStruct(new codec.Enum(AllocatorType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.size =
        decoder.decodeStruct(codec.Uint64);
    val.total =
        decoder.decodeStruct(codec.Uint64);
    val.contextId =
        decoder.decodeStruct(codec.Uint64);
    val.stack =
        decoder.decodeArrayPointer(codec.Uint64);
    return val;
  };

  HeapProfileSample.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HeapProfileSample.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.allocator);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.size);
    encoder.encodeStruct(codec.Uint64, val.total);
    encoder.encodeStruct(codec.Uint64, val.contextId);
    encoder.encodeArrayPointer(codec.Uint64, val.stack);
  };
  function HeapProfile(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HeapProfile.prototype.initDefaults_ = function() {
    this.samples = null;
    this.strings = null;
  };
  HeapProfile.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HeapProfile.validate = function(messageValidator, offset) {
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


    // validate HeapProfile.samples
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(HeapProfileSample), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate HeapProfile.strings
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.Uint64, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HeapProfile.encodedSize = codec.kStructHeaderSize + 16;

  HeapProfile.decode = function(decoder) {
    var packed;
    var val = new HeapProfile();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.samples =
        decoder.decodeArrayPointer(new codec.PointerTo(HeapProfileSample));
    val.strings =
        decoder.decodeMapPointer(codec.Uint64, codec.String);
    return val;
  };

  HeapProfile.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HeapProfile.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(HeapProfileSample), val.samples);
    encoder.encodeMapPointer(codec.Uint64, codec.String, val.strings);
  };
  function ProfilingClient_StartProfiling_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingClient_StartProfiling_Params.prototype.initDefaults_ = function() {
    this.params = null;
  };
  ProfilingClient_StartProfiling_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingClient_StartProfiling_Params.validate = function(messageValidator, offset) {
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


    // validate ProfilingClient_StartProfiling_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ProfilingParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProfilingClient_StartProfiling_Params.encodedSize = codec.kStructHeaderSize + 8;

  ProfilingClient_StartProfiling_Params.decode = function(decoder) {
    var packed;
    var val = new ProfilingClient_StartProfiling_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(ProfilingParams);
    return val;
  };

  ProfilingClient_StartProfiling_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingClient_StartProfiling_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ProfilingParams, val.params);
  };
  function ProfilingClient_StartProfiling_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingClient_StartProfiling_ResponseParams.prototype.initDefaults_ = function() {
  };
  ProfilingClient_StartProfiling_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingClient_StartProfiling_ResponseParams.validate = function(messageValidator, offset) {
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

  ProfilingClient_StartProfiling_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  ProfilingClient_StartProfiling_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProfilingClient_StartProfiling_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProfilingClient_StartProfiling_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingClient_StartProfiling_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function ProfilingClient_RetrieveHeapProfile_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingClient_RetrieveHeapProfile_Params.prototype.initDefaults_ = function() {
  };
  ProfilingClient_RetrieveHeapProfile_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingClient_RetrieveHeapProfile_Params.validate = function(messageValidator, offset) {
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

  ProfilingClient_RetrieveHeapProfile_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProfilingClient_RetrieveHeapProfile_Params.decode = function(decoder) {
    var packed;
    var val = new ProfilingClient_RetrieveHeapProfile_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProfilingClient_RetrieveHeapProfile_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingClient_RetrieveHeapProfile_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ProfilingClient_RetrieveHeapProfile_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingClient_RetrieveHeapProfile_ResponseParams.prototype.initDefaults_ = function() {
    this.profile = null;
  };
  ProfilingClient_RetrieveHeapProfile_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingClient_RetrieveHeapProfile_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ProfilingClient_RetrieveHeapProfile_ResponseParams.profile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, HeapProfile, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProfilingClient_RetrieveHeapProfile_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ProfilingClient_RetrieveHeapProfile_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProfilingClient_RetrieveHeapProfile_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.profile =
        decoder.decodeStructPointer(HeapProfile);
    return val;
  };

  ProfilingClient_RetrieveHeapProfile_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingClient_RetrieveHeapProfile_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(HeapProfile, val.profile);
  };
  function ProfilingClient_AddHeapProfileToTrace_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingClient_AddHeapProfileToTrace_Params.prototype.initDefaults_ = function() {
  };
  ProfilingClient_AddHeapProfileToTrace_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingClient_AddHeapProfileToTrace_Params.validate = function(messageValidator, offset) {
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

  ProfilingClient_AddHeapProfileToTrace_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProfilingClient_AddHeapProfileToTrace_Params.decode = function(decoder) {
    var packed;
    var val = new ProfilingClient_AddHeapProfileToTrace_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProfilingClient_AddHeapProfileToTrace_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingClient_AddHeapProfileToTrace_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ProfilingClient_AddHeapProfileToTrace_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingClient_AddHeapProfileToTrace_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  ProfilingClient_AddHeapProfileToTrace_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingClient_AddHeapProfileToTrace_ResponseParams.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  ProfilingClient_AddHeapProfileToTrace_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ProfilingClient_AddHeapProfileToTrace_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProfilingClient_AddHeapProfileToTrace_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ProfilingClient_AddHeapProfileToTrace_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingClient_AddHeapProfileToTrace_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kProfilingClient_StartProfiling_Name = 579662765;
  var kProfilingClient_RetrieveHeapProfile_Name = 301781241;
  var kProfilingClient_AddHeapProfileToTrace_Name = 827232103;

  function ProfilingClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProfilingClient,
                                                   handleOrPtrInfo);
  }

  function ProfilingClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProfilingClient, associatedInterfacePtrInfo);
  }

  ProfilingClientAssociatedPtr.prototype =
      Object.create(ProfilingClientPtr.prototype);
  ProfilingClientAssociatedPtr.prototype.constructor =
      ProfilingClientAssociatedPtr;

  function ProfilingClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProfilingClientPtr.prototype.startProfiling = function() {
    return ProfilingClientProxy.prototype.startProfiling
        .apply(this.ptr.getProxy(), arguments);
  };

  ProfilingClientProxy.prototype.startProfiling = function(params) {
    var params_ = new ProfilingClient_StartProfiling_Params();
    params_.params = params;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProfilingClient_StartProfiling_Name,
          codec.align(ProfilingClient_StartProfiling_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProfilingClient_StartProfiling_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProfilingClient_StartProfiling_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProfilingClientPtr.prototype.retrieveHeapProfile = function() {
    return ProfilingClientProxy.prototype.retrieveHeapProfile
        .apply(this.ptr.getProxy(), arguments);
  };

  ProfilingClientProxy.prototype.retrieveHeapProfile = function() {
    var params_ = new ProfilingClient_RetrieveHeapProfile_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProfilingClient_RetrieveHeapProfile_Name,
          codec.align(ProfilingClient_RetrieveHeapProfile_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProfilingClient_RetrieveHeapProfile_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProfilingClient_RetrieveHeapProfile_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProfilingClientPtr.prototype.addHeapProfileToTrace = function() {
    return ProfilingClientProxy.prototype.addHeapProfileToTrace
        .apply(this.ptr.getProxy(), arguments);
  };

  ProfilingClientProxy.prototype.addHeapProfileToTrace = function() {
    var params_ = new ProfilingClient_AddHeapProfileToTrace_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProfilingClient_AddHeapProfileToTrace_Name,
          codec.align(ProfilingClient_AddHeapProfileToTrace_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProfilingClient_AddHeapProfileToTrace_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProfilingClient_AddHeapProfileToTrace_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProfilingClientStub(delegate) {
    this.delegate_ = delegate;
  }
  ProfilingClientStub.prototype.startProfiling = function(params) {
    return this.delegate_ && this.delegate_.startProfiling && this.delegate_.startProfiling(params);
  }
  ProfilingClientStub.prototype.retrieveHeapProfile = function() {
    return this.delegate_ && this.delegate_.retrieveHeapProfile && this.delegate_.retrieveHeapProfile();
  }
  ProfilingClientStub.prototype.addHeapProfileToTrace = function() {
    return this.delegate_ && this.delegate_.addHeapProfileToTrace && this.delegate_.addHeapProfileToTrace();
  }

  ProfilingClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ProfilingClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProfilingClient_StartProfiling_Name:
      var params = reader.decodeStruct(ProfilingClient_StartProfiling_Params);
      this.startProfiling(params.params).then(function(response) {
        var responseParams =
            new ProfilingClient_StartProfiling_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kProfilingClient_StartProfiling_Name,
            codec.align(ProfilingClient_StartProfiling_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProfilingClient_StartProfiling_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kProfilingClient_RetrieveHeapProfile_Name:
      var params = reader.decodeStruct(ProfilingClient_RetrieveHeapProfile_Params);
      this.retrieveHeapProfile().then(function(response) {
        var responseParams =
            new ProfilingClient_RetrieveHeapProfile_ResponseParams();
        responseParams.profile = response.profile;
        var builder = new codec.MessageV1Builder(
            kProfilingClient_RetrieveHeapProfile_Name,
            codec.align(ProfilingClient_RetrieveHeapProfile_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProfilingClient_RetrieveHeapProfile_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kProfilingClient_AddHeapProfileToTrace_Name:
      var params = reader.decodeStruct(ProfilingClient_AddHeapProfileToTrace_Params);
      this.addHeapProfileToTrace().then(function(response) {
        var responseParams =
            new ProfilingClient_AddHeapProfileToTrace_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kProfilingClient_AddHeapProfileToTrace_Name,
            codec.align(ProfilingClient_AddHeapProfileToTrace_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProfilingClient_AddHeapProfileToTrace_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateProfilingClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProfilingClient_StartProfiling_Name:
        if (message.expectsResponse())
          paramsClass = ProfilingClient_StartProfiling_Params;
      break;
      case kProfilingClient_RetrieveHeapProfile_Name:
        if (message.expectsResponse())
          paramsClass = ProfilingClient_RetrieveHeapProfile_Params;
      break;
      case kProfilingClient_AddHeapProfileToTrace_Name:
        if (message.expectsResponse())
          paramsClass = ProfilingClient_AddHeapProfileToTrace_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProfilingClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProfilingClient_StartProfiling_Name:
        if (message.isResponse())
          paramsClass = ProfilingClient_StartProfiling_ResponseParams;
        break;
      case kProfilingClient_RetrieveHeapProfile_Name:
        if (message.isResponse())
          paramsClass = ProfilingClient_RetrieveHeapProfile_ResponseParams;
        break;
      case kProfilingClient_AddHeapProfileToTrace_Name:
        if (message.isResponse())
          paramsClass = ProfilingClient_AddHeapProfileToTrace_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ProfilingClient = {
    name: 'heap_profiling.mojom.ProfilingClient',
    kVersion: 0,
    ptrClass: ProfilingClientPtr,
    proxyClass: ProfilingClientProxy,
    stubClass: ProfilingClientStub,
    validateRequest: validateProfilingClientRequest,
    validateResponse: validateProfilingClientResponse,
  };
  ProfilingClientStub.prototype.validator = validateProfilingClientRequest;
  ProfilingClientProxy.prototype.validator = validateProfilingClientResponse;
  exports.StackMode = StackMode;
  exports.AllocatorType = AllocatorType;
  exports.ProfilingParams = ProfilingParams;
  exports.HeapProfileSample = HeapProfileSample;
  exports.HeapProfile = HeapProfile;
  exports.ProfilingClient = ProfilingClient;
  exports.ProfilingClientPtr = ProfilingClientPtr;
  exports.ProfilingClientAssociatedPtr = ProfilingClientAssociatedPtr;
})();