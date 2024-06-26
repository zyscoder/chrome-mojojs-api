// third_party/blink/public/mojom/performance_manager/v8_detailed_memory_reporter.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/performance_manager/v8_detailed_memory_reporter.mojom';
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
  var tokens$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/tokens/tokens.mojom', '../tokens/tokens.mojom.js');
  }



  function PerContextV8MemoryUsage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PerContextV8MemoryUsage.prototype.initDefaults_ = function() {
    this.token = null;
    this.bytesUsed = 0;
    this.url = null;
  };
  PerContextV8MemoryUsage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PerContextV8MemoryUsage.validate = function(messageValidator, offset) {
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


    // validate PerContextV8MemoryUsage.token
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, tokens$.ExecutionContextToken, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate PerContextV8MemoryUsage.url
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PerContextV8MemoryUsage.encodedSize = codec.kStructHeaderSize + 32;

  PerContextV8MemoryUsage.decode = function(decoder) {
    var packed;
    var val = new PerContextV8MemoryUsage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token =
        decoder.decodeStruct(tokens$.ExecutionContextToken);
    val.bytesUsed =
        decoder.decodeStruct(codec.Uint64);
    val.url =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  PerContextV8MemoryUsage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PerContextV8MemoryUsage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(tokens$.ExecutionContextToken, val.token);
    encoder.encodeStruct(codec.Uint64, val.bytesUsed);
    encoder.encodeStruct(codec.NullableString, val.url);
  };
  function PerContextCanvasMemoryUsage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PerContextCanvasMemoryUsage.prototype.initDefaults_ = function() {
    this.token = null;
    this.bytesUsed = 0;
  };
  PerContextCanvasMemoryUsage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PerContextCanvasMemoryUsage.validate = function(messageValidator, offset) {
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


    // validate PerContextCanvasMemoryUsage.token
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, tokens$.ExecutionContextToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  PerContextCanvasMemoryUsage.encodedSize = codec.kStructHeaderSize + 24;

  PerContextCanvasMemoryUsage.decode = function(decoder) {
    var packed;
    var val = new PerContextCanvasMemoryUsage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token =
        decoder.decodeStruct(tokens$.ExecutionContextToken);
    val.bytesUsed =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  PerContextCanvasMemoryUsage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PerContextCanvasMemoryUsage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(tokens$.ExecutionContextToken, val.token);
    encoder.encodeStruct(codec.Uint64, val.bytesUsed);
  };
  function PerIsolateV8MemoryUsage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PerIsolateV8MemoryUsage.prototype.initDefaults_ = function() {
    this.numDetachedContexts = 0;
    this.detachedBytesUsed = 0;
    this.sharedBytesUsed = 0;
    this.blinkBytesUsed = 0;
    this.contexts = null;
    this.canvasContexts = null;
  };
  PerIsolateV8MemoryUsage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PerIsolateV8MemoryUsage.validate = function(messageValidator, offset) {
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






    // validate PerIsolateV8MemoryUsage.contexts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(PerContextV8MemoryUsage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PerIsolateV8MemoryUsage.canvasContexts
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(PerContextCanvasMemoryUsage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PerIsolateV8MemoryUsage.encodedSize = codec.kStructHeaderSize + 48;

  PerIsolateV8MemoryUsage.decode = function(decoder) {
    var packed;
    var val = new PerIsolateV8MemoryUsage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.numDetachedContexts =
        decoder.decodeStruct(codec.Uint64);
    val.detachedBytesUsed =
        decoder.decodeStruct(codec.Uint64);
    val.sharedBytesUsed =
        decoder.decodeStruct(codec.Uint64);
    val.blinkBytesUsed =
        decoder.decodeStruct(codec.Uint64);
    val.contexts =
        decoder.decodeArrayPointer(new codec.PointerTo(PerContextV8MemoryUsage));
    val.canvasContexts =
        decoder.decodeArrayPointer(new codec.PointerTo(PerContextCanvasMemoryUsage));
    return val;
  };

  PerIsolateV8MemoryUsage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PerIsolateV8MemoryUsage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint64, val.numDetachedContexts);
    encoder.encodeStruct(codec.Uint64, val.detachedBytesUsed);
    encoder.encodeStruct(codec.Uint64, val.sharedBytesUsed);
    encoder.encodeStruct(codec.Uint64, val.blinkBytesUsed);
    encoder.encodeArrayPointer(new codec.PointerTo(PerContextV8MemoryUsage), val.contexts);
    encoder.encodeArrayPointer(new codec.PointerTo(PerContextCanvasMemoryUsage), val.canvasContexts);
  };
  function PerProcessV8MemoryUsage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PerProcessV8MemoryUsage.prototype.initDefaults_ = function() {
    this.isolates = null;
  };
  PerProcessV8MemoryUsage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PerProcessV8MemoryUsage.validate = function(messageValidator, offset) {
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


    // validate PerProcessV8MemoryUsage.isolates
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(PerIsolateV8MemoryUsage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PerProcessV8MemoryUsage.encodedSize = codec.kStructHeaderSize + 8;

  PerProcessV8MemoryUsage.decode = function(decoder) {
    var packed;
    var val = new PerProcessV8MemoryUsage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.isolates =
        decoder.decodeArrayPointer(new codec.PointerTo(PerIsolateV8MemoryUsage));
    return val;
  };

  PerProcessV8MemoryUsage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PerProcessV8MemoryUsage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(PerIsolateV8MemoryUsage), val.isolates);
  };
  function V8DetailedMemoryReporter_GetV8MemoryUsage_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  V8DetailedMemoryReporter_GetV8MemoryUsage_Params.prototype.initDefaults_ = function() {
    this.mode = 0;
  };
  V8DetailedMemoryReporter_GetV8MemoryUsage_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  V8DetailedMemoryReporter_GetV8MemoryUsage_Params.validate = function(messageValidator, offset) {
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


    // validate V8DetailedMemoryReporter_GetV8MemoryUsage_Params.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, V8DetailedMemoryReporter.Mode);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  V8DetailedMemoryReporter_GetV8MemoryUsage_Params.encodedSize = codec.kStructHeaderSize + 8;

  V8DetailedMemoryReporter_GetV8MemoryUsage_Params.decode = function(decoder) {
    var packed;
    var val = new V8DetailedMemoryReporter_GetV8MemoryUsage_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mode =
        decoder.decodeStruct(new codec.Enum(V8DetailedMemoryReporter.Mode));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  V8DetailedMemoryReporter_GetV8MemoryUsage_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(V8DetailedMemoryReporter_GetV8MemoryUsage_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.mode);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.prototype.initDefaults_ = function() {
    this.memoryUsage = null;
  };
  V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.memoryUsage
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, PerProcessV8MemoryUsage, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.memoryUsage =
        decoder.decodeStructPointer(PerProcessV8MemoryUsage);
    return val;
  };

  V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(PerProcessV8MemoryUsage, val.memoryUsage);
  };
  var kV8DetailedMemoryReporter_GetV8MemoryUsage_Name = 0;

  function V8DetailedMemoryReporterPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(V8DetailedMemoryReporter,
                                                   handleOrPtrInfo);
  }

  function V8DetailedMemoryReporterAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        V8DetailedMemoryReporter, associatedInterfacePtrInfo);
  }

  V8DetailedMemoryReporterAssociatedPtr.prototype =
      Object.create(V8DetailedMemoryReporterPtr.prototype);
  V8DetailedMemoryReporterAssociatedPtr.prototype.constructor =
      V8DetailedMemoryReporterAssociatedPtr;

  function V8DetailedMemoryReporterProxy(receiver) {
    this.receiver_ = receiver;
  }
  V8DetailedMemoryReporterPtr.prototype.getV8MemoryUsage = function() {
    return V8DetailedMemoryReporterProxy.prototype.getV8MemoryUsage
        .apply(this.ptr.getProxy(), arguments);
  };

  V8DetailedMemoryReporterProxy.prototype.getV8MemoryUsage = function(mode) {
    var params_ = new V8DetailedMemoryReporter_GetV8MemoryUsage_Params();
    params_.mode = mode;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kV8DetailedMemoryReporter_GetV8MemoryUsage_Name,
          codec.align(V8DetailedMemoryReporter_GetV8MemoryUsage_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(V8DetailedMemoryReporter_GetV8MemoryUsage_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function V8DetailedMemoryReporterStub(delegate) {
    this.delegate_ = delegate;
  }
  V8DetailedMemoryReporterStub.prototype.getV8MemoryUsage = function(mode) {
    return this.delegate_ && this.delegate_.getV8MemoryUsage && this.delegate_.getV8MemoryUsage(mode);
  }

  V8DetailedMemoryReporterStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  V8DetailedMemoryReporterStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kV8DetailedMemoryReporter_GetV8MemoryUsage_Name:
      var params = reader.decodeStruct(V8DetailedMemoryReporter_GetV8MemoryUsage_Params);
      this.getV8MemoryUsage(params.mode).then(function(response) {
        var responseParams =
            new V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams();
        responseParams.memoryUsage = response.memoryUsage;
        var builder = new codec.MessageV1Builder(
            kV8DetailedMemoryReporter_GetV8MemoryUsage_Name,
            codec.align(V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateV8DetailedMemoryReporterRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kV8DetailedMemoryReporter_GetV8MemoryUsage_Name:
        if (message.expectsResponse())
          paramsClass = V8DetailedMemoryReporter_GetV8MemoryUsage_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateV8DetailedMemoryReporterResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kV8DetailedMemoryReporter_GetV8MemoryUsage_Name:
        if (message.isResponse())
          paramsClass = V8DetailedMemoryReporter_GetV8MemoryUsage_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var V8DetailedMemoryReporter = {
    name: 'blink.mojom.V8DetailedMemoryReporter',
    kVersion: 0,
    ptrClass: V8DetailedMemoryReporterPtr,
    proxyClass: V8DetailedMemoryReporterProxy,
    stubClass: V8DetailedMemoryReporterStub,
    validateRequest: validateV8DetailedMemoryReporterRequest,
    validateResponse: validateV8DetailedMemoryReporterResponse,
  };
  V8DetailedMemoryReporter.Mode = {};
  V8DetailedMemoryReporter.Mode.DEFAULT = 0;
  V8DetailedMemoryReporter.Mode.EAGER = 1;
  V8DetailedMemoryReporter.Mode.LAZY = 2;
  V8DetailedMemoryReporter.Mode.MIN_VALUE = 0;
  V8DetailedMemoryReporter.Mode.MAX_VALUE = 2;

  V8DetailedMemoryReporter.Mode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  V8DetailedMemoryReporter.Mode.toKnownEnumValue = function(value) {
    return value;
  };

  V8DetailedMemoryReporter.Mode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  V8DetailedMemoryReporterStub.prototype.validator = validateV8DetailedMemoryReporterRequest;
  V8DetailedMemoryReporterProxy.prototype.validator = validateV8DetailedMemoryReporterResponse;
  exports.PerContextV8MemoryUsage = PerContextV8MemoryUsage;
  exports.PerContextCanvasMemoryUsage = PerContextCanvasMemoryUsage;
  exports.PerIsolateV8MemoryUsage = PerIsolateV8MemoryUsage;
  exports.PerProcessV8MemoryUsage = PerProcessV8MemoryUsage;
  exports.V8DetailedMemoryReporter = V8DetailedMemoryReporter;
  exports.V8DetailedMemoryReporterPtr = V8DetailedMemoryReporterPtr;
  exports.V8DetailedMemoryReporterAssociatedPtr = V8DetailedMemoryReporterAssociatedPtr;
})();