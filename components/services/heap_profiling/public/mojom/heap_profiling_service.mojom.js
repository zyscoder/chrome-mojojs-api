// components/services/heap_profiling/public/mojom/heap_profiling_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/services/heap_profiling/public/mojom/heap_profiling_service.mojom';
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
  var heap_profiling_client$ =
      mojo.internal.exposeNamespace('heapProfiling.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/services/heap_profiling/public/mojom/heap_profiling_client.mojom', 'heap_profiling_client.mojom.js');
  }
  var process_id$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/process_id.mojom', '../../../../../mojo/public/mojom/base/process_id.mojom.js');
  }


  var ProcessType = {};
  ProcessType.OTHER = 0;
  ProcessType.BROWSER = 1;
  ProcessType.RENDERER = 2;
  ProcessType.GPU = 3;
  ProcessType.LAST = 3;
  ProcessType.MIN_VALUE = 0;
  ProcessType.MAX_VALUE = 3;

  ProcessType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ProcessType.toKnownEnumValue = function(value) {
    return value;
  };

  ProcessType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ProfilingService_AddProfilingClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingService_AddProfilingClient_Params.prototype.initDefaults_ = function() {
    this.pid = null;
    this.client = new heap_profiling_client$.ProfilingClientPtr();
    this.processType = 0;
    this.params = null;
  };
  ProfilingService_AddProfilingClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingService_AddProfilingClient_Params.validate = function(messageValidator, offset) {
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


    // validate ProfilingService_AddProfilingClient_Params.pid
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, process_id$.ProcessId, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProfilingService_AddProfilingClient_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProfilingService_AddProfilingClient_Params.processType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, ProcessType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProfilingService_AddProfilingClient_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, heap_profiling_client$.ProfilingParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProfilingService_AddProfilingClient_Params.encodedSize = codec.kStructHeaderSize + 32;

  ProfilingService_AddProfilingClient_Params.decode = function(decoder) {
    var packed;
    var val = new ProfilingService_AddProfilingClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pid =
        decoder.decodeStructPointer(process_id$.ProcessId);
    val.client =
        decoder.decodeStruct(new codec.Interface(heap_profiling_client$.ProfilingClientPtr));
    val.processType =
        decoder.decodeStruct(new codec.Enum(ProcessType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.params =
        decoder.decodeStructPointer(heap_profiling_client$.ProfilingParams);
    return val;
  };

  ProfilingService_AddProfilingClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingService_AddProfilingClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(process_id$.ProcessId, val.pid);
    encoder.encodeStruct(new codec.Interface(heap_profiling_client$.ProfilingClientPtr), val.client);
    encoder.encodeStruct(codec.Int32, val.processType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(heap_profiling_client$.ProfilingParams, val.params);
  };
  function ProfilingService_AddProfilingClient_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingService_AddProfilingClient_ResponseParams.prototype.initDefaults_ = function() {
  };
  ProfilingService_AddProfilingClient_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingService_AddProfilingClient_ResponseParams.validate = function(messageValidator, offset) {
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

  ProfilingService_AddProfilingClient_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  ProfilingService_AddProfilingClient_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProfilingService_AddProfilingClient_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProfilingService_AddProfilingClient_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingService_AddProfilingClient_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function ProfilingService_GetProfiledPids_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingService_GetProfiledPids_Params.prototype.initDefaults_ = function() {
  };
  ProfilingService_GetProfiledPids_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingService_GetProfiledPids_Params.validate = function(messageValidator, offset) {
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

  ProfilingService_GetProfiledPids_Params.encodedSize = codec.kStructHeaderSize + 0;

  ProfilingService_GetProfiledPids_Params.decode = function(decoder) {
    var packed;
    var val = new ProfilingService_GetProfiledPids_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  ProfilingService_GetProfiledPids_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingService_GetProfiledPids_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function ProfilingService_GetProfiledPids_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProfilingService_GetProfiledPids_ResponseParams.prototype.initDefaults_ = function() {
    this.pids = null;
  };
  ProfilingService_GetProfiledPids_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProfilingService_GetProfiledPids_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate ProfilingService_GetProfiledPids_ResponseParams.pids
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(process_id$.ProcessId), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProfilingService_GetProfiledPids_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  ProfilingService_GetProfiledPids_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new ProfilingService_GetProfiledPids_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pids =
        decoder.decodeArrayPointer(new codec.PointerTo(process_id$.ProcessId));
    return val;
  };

  ProfilingService_GetProfiledPids_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProfilingService_GetProfiledPids_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(process_id$.ProcessId), val.pids);
  };
  var kProfilingService_AddProfilingClient_Name = 395875397;
  var kProfilingService_GetProfiledPids_Name = 464032349;

  function ProfilingServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ProfilingService,
                                                   handleOrPtrInfo);
  }

  function ProfilingServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ProfilingService, associatedInterfacePtrInfo);
  }

  ProfilingServiceAssociatedPtr.prototype =
      Object.create(ProfilingServicePtr.prototype);
  ProfilingServiceAssociatedPtr.prototype.constructor =
      ProfilingServiceAssociatedPtr;

  function ProfilingServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  ProfilingServicePtr.prototype.addProfilingClient = function() {
    return ProfilingServiceProxy.prototype.addProfilingClient
        .apply(this.ptr.getProxy(), arguments);
  };

  ProfilingServiceProxy.prototype.addProfilingClient = function(pid, client, processType, params) {
    var params_ = new ProfilingService_AddProfilingClient_Params();
    params_.pid = pid;
    params_.client = client;
    params_.processType = processType;
    params_.params = params;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProfilingService_AddProfilingClient_Name,
          codec.align(ProfilingService_AddProfilingClient_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProfilingService_AddProfilingClient_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProfilingService_AddProfilingClient_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  ProfilingServicePtr.prototype.getProfiledPids = function() {
    return ProfilingServiceProxy.prototype.getProfiledPids
        .apply(this.ptr.getProxy(), arguments);
  };

  ProfilingServiceProxy.prototype.getProfiledPids = function() {
    var params_ = new ProfilingService_GetProfiledPids_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kProfilingService_GetProfiledPids_Name,
          codec.align(ProfilingService_GetProfiledPids_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(ProfilingService_GetProfiledPids_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(ProfilingService_GetProfiledPids_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function ProfilingServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  ProfilingServiceStub.prototype.addProfilingClient = function(pid, client, processType, params) {
    return this.delegate_ && this.delegate_.addProfilingClient && this.delegate_.addProfilingClient(pid, client, processType, params);
  }
  ProfilingServiceStub.prototype.getProfiledPids = function() {
    return this.delegate_ && this.delegate_.getProfiledPids && this.delegate_.getProfiledPids();
  }

  ProfilingServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  ProfilingServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kProfilingService_AddProfilingClient_Name:
      var params = reader.decodeStruct(ProfilingService_AddProfilingClient_Params);
      this.addProfilingClient(params.pid, params.client, params.processType, params.params).then(function(response) {
        var responseParams =
            new ProfilingService_AddProfilingClient_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kProfilingService_AddProfilingClient_Name,
            codec.align(ProfilingService_AddProfilingClient_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProfilingService_AddProfilingClient_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kProfilingService_GetProfiledPids_Name:
      var params = reader.decodeStruct(ProfilingService_GetProfiledPids_Params);
      this.getProfiledPids().then(function(response) {
        var responseParams =
            new ProfilingService_GetProfiledPids_ResponseParams();
        responseParams.pids = response.pids;
        var builder = new codec.MessageV1Builder(
            kProfilingService_GetProfiledPids_Name,
            codec.align(ProfilingService_GetProfiledPids_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(ProfilingService_GetProfiledPids_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateProfilingServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kProfilingService_AddProfilingClient_Name:
        if (message.expectsResponse())
          paramsClass = ProfilingService_AddProfilingClient_Params;
      break;
      case kProfilingService_GetProfiledPids_Name:
        if (message.expectsResponse())
          paramsClass = ProfilingService_GetProfiledPids_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateProfilingServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kProfilingService_AddProfilingClient_Name:
        if (message.isResponse())
          paramsClass = ProfilingService_AddProfilingClient_ResponseParams;
        break;
      case kProfilingService_GetProfiledPids_Name:
        if (message.isResponse())
          paramsClass = ProfilingService_GetProfiledPids_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var ProfilingService = {
    name: 'heap_profiling.mojom.ProfilingService',
    kVersion: 0,
    ptrClass: ProfilingServicePtr,
    proxyClass: ProfilingServiceProxy,
    stubClass: ProfilingServiceStub,
    validateRequest: validateProfilingServiceRequest,
    validateResponse: validateProfilingServiceResponse,
  };
  ProfilingServiceStub.prototype.validator = validateProfilingServiceRequest;
  ProfilingServiceProxy.prototype.validator = validateProfilingServiceResponse;
  exports.ProcessType = ProcessType;
  exports.ProfilingService = ProfilingService;
  exports.ProfilingServicePtr = ProfilingServicePtr;
  exports.ProfilingServiceAssociatedPtr = ProfilingServiceAssociatedPtr;
})();