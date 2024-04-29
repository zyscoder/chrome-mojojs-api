// mojo/public/interfaces/bindings/tests/ping_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/interfaces/bindings/tests/ping_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojo.test');



  function PingService_Ping_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PingService_Ping_Params.prototype.initDefaults_ = function() {
  };
  PingService_Ping_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PingService_Ping_Params.validate = function(messageValidator, offset) {
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

  PingService_Ping_Params.encodedSize = codec.kStructHeaderSize + 0;

  PingService_Ping_Params.decode = function(decoder) {
    var packed;
    var val = new PingService_Ping_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PingService_Ping_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PingService_Ping_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PingService_Ping_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PingService_Ping_ResponseParams.prototype.initDefaults_ = function() {
  };
  PingService_Ping_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PingService_Ping_ResponseParams.validate = function(messageValidator, offset) {
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

  PingService_Ping_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  PingService_Ping_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PingService_Ping_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PingService_Ping_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PingService_Ping_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function EchoService_Echo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_Echo_Params.prototype.initDefaults_ = function() {
    this.testData = null;
  };
  EchoService_Echo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_Echo_Params.validate = function(messageValidator, offset) {
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


    // validate EchoService_Echo_Params.testData
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_Echo_Params.encodedSize = codec.kStructHeaderSize + 8;

  EchoService_Echo_Params.decode = function(decoder) {
    var packed;
    var val = new EchoService_Echo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.testData =
        decoder.decodeStruct(codec.String);
    return val;
  };

  EchoService_Echo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_Echo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.testData);
  };
  function EchoService_Echo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EchoService_Echo_ResponseParams.prototype.initDefaults_ = function() {
    this.echoData = null;
  };
  EchoService_Echo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EchoService_Echo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate EchoService_Echo_ResponseParams.echoData
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EchoService_Echo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  EchoService_Echo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new EchoService_Echo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.echoData =
        decoder.decodeStruct(codec.String);
    return val;
  };

  EchoService_Echo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EchoService_Echo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.echoData);
  };
  function HandleTrampoline_BounceOne_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HandleTrampoline_BounceOne_Params.prototype.initDefaults_ = function() {
    this.one = null;
  };
  HandleTrampoline_BounceOne_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HandleTrampoline_BounceOne_Params.validate = function(messageValidator, offset) {
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


    // validate HandleTrampoline_BounceOne_Params.one
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HandleTrampoline_BounceOne_Params.encodedSize = codec.kStructHeaderSize + 8;

  HandleTrampoline_BounceOne_Params.decode = function(decoder) {
    var packed;
    var val = new HandleTrampoline_BounceOne_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.one =
        decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HandleTrampoline_BounceOne_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HandleTrampoline_BounceOne_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.one);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function HandleTrampoline_BounceOne_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HandleTrampoline_BounceOne_ResponseParams.prototype.initDefaults_ = function() {
    this.one = null;
  };
  HandleTrampoline_BounceOne_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HandleTrampoline_BounceOne_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate HandleTrampoline_BounceOne_ResponseParams.one
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HandleTrampoline_BounceOne_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HandleTrampoline_BounceOne_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HandleTrampoline_BounceOne_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.one =
        decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HandleTrampoline_BounceOne_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HandleTrampoline_BounceOne_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.one);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function HandleTrampoline_BounceTwo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HandleTrampoline_BounceTwo_Params.prototype.initDefaults_ = function() {
    this.one = null;
    this.two = null;
  };
  HandleTrampoline_BounceTwo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HandleTrampoline_BounceTwo_Params.validate = function(messageValidator, offset) {
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


    // validate HandleTrampoline_BounceTwo_Params.one
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate HandleTrampoline_BounceTwo_Params.two
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HandleTrampoline_BounceTwo_Params.encodedSize = codec.kStructHeaderSize + 8;

  HandleTrampoline_BounceTwo_Params.decode = function(decoder) {
    var packed;
    var val = new HandleTrampoline_BounceTwo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.one =
        decoder.decodeStruct(codec.Handle);
    val.two =
        decoder.decodeStruct(codec.Handle);
    return val;
  };

  HandleTrampoline_BounceTwo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HandleTrampoline_BounceTwo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.one);
    encoder.encodeStruct(codec.Handle, val.two);
  };
  function HandleTrampoline_BounceTwo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HandleTrampoline_BounceTwo_ResponseParams.prototype.initDefaults_ = function() {
    this.one = null;
    this.two = null;
  };
  HandleTrampoline_BounceTwo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HandleTrampoline_BounceTwo_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate HandleTrampoline_BounceTwo_ResponseParams.one
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate HandleTrampoline_BounceTwo_ResponseParams.two
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HandleTrampoline_BounceTwo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HandleTrampoline_BounceTwo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HandleTrampoline_BounceTwo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.one =
        decoder.decodeStruct(codec.Handle);
    val.two =
        decoder.decodeStruct(codec.Handle);
    return val;
  };

  HandleTrampoline_BounceTwo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HandleTrampoline_BounceTwo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.one);
    encoder.encodeStruct(codec.Handle, val.two);
  };
  var kPingService_Ping_Name = 0;

  function PingServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PingService,
                                                   handleOrPtrInfo);
  }

  function PingServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PingService, associatedInterfacePtrInfo);
  }

  PingServiceAssociatedPtr.prototype =
      Object.create(PingServicePtr.prototype);
  PingServiceAssociatedPtr.prototype.constructor =
      PingServiceAssociatedPtr;

  function PingServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  PingServicePtr.prototype.ping = function() {
    return PingServiceProxy.prototype.ping
        .apply(this.ptr.getProxy(), arguments);
  };

  PingServiceProxy.prototype.ping = function() {
    var params_ = new PingService_Ping_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPingService_Ping_Name,
          codec.align(PingService_Ping_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PingService_Ping_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PingService_Ping_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PingServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  PingServiceStub.prototype.ping = function() {
    return this.delegate_ && this.delegate_.ping && this.delegate_.ping();
  }

  PingServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PingServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPingService_Ping_Name:
      var params = reader.decodeStruct(PingService_Ping_Params);
      this.ping().then(function(response) {
        var responseParams =
            new PingService_Ping_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kPingService_Ping_Name,
            codec.align(PingService_Ping_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PingService_Ping_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePingServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPingService_Ping_Name:
        if (message.expectsResponse())
          paramsClass = PingService_Ping_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePingServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPingService_Ping_Name:
        if (message.isResponse())
          paramsClass = PingService_Ping_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PingService = {
    name: 'mojo.test.PingService',
    kVersion: 0,
    ptrClass: PingServicePtr,
    proxyClass: PingServiceProxy,
    stubClass: PingServiceStub,
    validateRequest: validatePingServiceRequest,
    validateResponse: validatePingServiceResponse,
  };
  PingServiceStub.prototype.validator = validatePingServiceRequest;
  PingServiceProxy.prototype.validator = validatePingServiceResponse;
  var kEchoService_Echo_Name = 0;

  function EchoServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(EchoService,
                                                   handleOrPtrInfo);
  }

  function EchoServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        EchoService, associatedInterfacePtrInfo);
  }

  EchoServiceAssociatedPtr.prototype =
      Object.create(EchoServicePtr.prototype);
  EchoServiceAssociatedPtr.prototype.constructor =
      EchoServiceAssociatedPtr;

  function EchoServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  EchoServicePtr.prototype.echo = function() {
    return EchoServiceProxy.prototype.echo
        .apply(this.ptr.getProxy(), arguments);
  };

  EchoServiceProxy.prototype.echo = function(testData) {
    var params_ = new EchoService_Echo_Params();
    params_.testData = testData;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kEchoService_Echo_Name,
          codec.align(EchoService_Echo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(EchoService_Echo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(EchoService_Echo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function EchoServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  EchoServiceStub.prototype.echo = function(testData) {
    return this.delegate_ && this.delegate_.echo && this.delegate_.echo(testData);
  }

  EchoServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  EchoServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kEchoService_Echo_Name:
      var params = reader.decodeStruct(EchoService_Echo_Params);
      this.echo(params.testData).then(function(response) {
        var responseParams =
            new EchoService_Echo_ResponseParams();
        responseParams.echoData = response.echoData;
        var builder = new codec.MessageV1Builder(
            kEchoService_Echo_Name,
            codec.align(EchoService_Echo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(EchoService_Echo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateEchoServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kEchoService_Echo_Name:
        if (message.expectsResponse())
          paramsClass = EchoService_Echo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateEchoServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kEchoService_Echo_Name:
        if (message.isResponse())
          paramsClass = EchoService_Echo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var EchoService = {
    name: 'mojo.test.EchoService',
    kVersion: 0,
    ptrClass: EchoServicePtr,
    proxyClass: EchoServiceProxy,
    stubClass: EchoServiceStub,
    validateRequest: validateEchoServiceRequest,
    validateResponse: validateEchoServiceResponse,
  };
  EchoServiceStub.prototype.validator = validateEchoServiceRequest;
  EchoServiceProxy.prototype.validator = validateEchoServiceResponse;
  var kHandleTrampoline_BounceOne_Name = 0;
  var kHandleTrampoline_BounceTwo_Name = 1;

  function HandleTrampolinePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(HandleTrampoline,
                                                   handleOrPtrInfo);
  }

  function HandleTrampolineAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        HandleTrampoline, associatedInterfacePtrInfo);
  }

  HandleTrampolineAssociatedPtr.prototype =
      Object.create(HandleTrampolinePtr.prototype);
  HandleTrampolineAssociatedPtr.prototype.constructor =
      HandleTrampolineAssociatedPtr;

  function HandleTrampolineProxy(receiver) {
    this.receiver_ = receiver;
  }
  HandleTrampolinePtr.prototype.bounceOne = function() {
    return HandleTrampolineProxy.prototype.bounceOne
        .apply(this.ptr.getProxy(), arguments);
  };

  HandleTrampolineProxy.prototype.bounceOne = function(one) {
    var params_ = new HandleTrampoline_BounceOne_Params();
    params_.one = one;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kHandleTrampoline_BounceOne_Name,
          codec.align(HandleTrampoline_BounceOne_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HandleTrampoline_BounceOne_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HandleTrampoline_BounceOne_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  HandleTrampolinePtr.prototype.bounceTwo = function() {
    return HandleTrampolineProxy.prototype.bounceTwo
        .apply(this.ptr.getProxy(), arguments);
  };

  HandleTrampolineProxy.prototype.bounceTwo = function(one, two) {
    var params_ = new HandleTrampoline_BounceTwo_Params();
    params_.one = one;
    params_.two = two;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kHandleTrampoline_BounceTwo_Name,
          codec.align(HandleTrampoline_BounceTwo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HandleTrampoline_BounceTwo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HandleTrampoline_BounceTwo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HandleTrampolineStub(delegate) {
    this.delegate_ = delegate;
  }
  HandleTrampolineStub.prototype.bounceOne = function(one) {
    return this.delegate_ && this.delegate_.bounceOne && this.delegate_.bounceOne(one);
  }
  HandleTrampolineStub.prototype.bounceTwo = function(one, two) {
    return this.delegate_ && this.delegate_.bounceTwo && this.delegate_.bounceTwo(one, two);
  }

  HandleTrampolineStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  HandleTrampolineStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHandleTrampoline_BounceOne_Name:
      var params = reader.decodeStruct(HandleTrampoline_BounceOne_Params);
      this.bounceOne(params.one).then(function(response) {
        var responseParams =
            new HandleTrampoline_BounceOne_ResponseParams();
        responseParams.one = response.one;
        var builder = new codec.MessageV1Builder(
            kHandleTrampoline_BounceOne_Name,
            codec.align(HandleTrampoline_BounceOne_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HandleTrampoline_BounceOne_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kHandleTrampoline_BounceTwo_Name:
      var params = reader.decodeStruct(HandleTrampoline_BounceTwo_Params);
      this.bounceTwo(params.one, params.two).then(function(response) {
        var responseParams =
            new HandleTrampoline_BounceTwo_ResponseParams();
        responseParams.one = response.one;
        responseParams.two = response.two;
        var builder = new codec.MessageV1Builder(
            kHandleTrampoline_BounceTwo_Name,
            codec.align(HandleTrampoline_BounceTwo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HandleTrampoline_BounceTwo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateHandleTrampolineRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHandleTrampoline_BounceOne_Name:
        if (message.expectsResponse())
          paramsClass = HandleTrampoline_BounceOne_Params;
      break;
      case kHandleTrampoline_BounceTwo_Name:
        if (message.expectsResponse())
          paramsClass = HandleTrampoline_BounceTwo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHandleTrampolineResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHandleTrampoline_BounceOne_Name:
        if (message.isResponse())
          paramsClass = HandleTrampoline_BounceOne_ResponseParams;
        break;
      case kHandleTrampoline_BounceTwo_Name:
        if (message.isResponse())
          paramsClass = HandleTrampoline_BounceTwo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HandleTrampoline = {
    name: 'mojo.test.HandleTrampoline',
    kVersion: 0,
    ptrClass: HandleTrampolinePtr,
    proxyClass: HandleTrampolineProxy,
    stubClass: HandleTrampolineStub,
    validateRequest: validateHandleTrampolineRequest,
    validateResponse: validateHandleTrampolineResponse,
  };
  HandleTrampolineStub.prototype.validator = validateHandleTrampolineRequest;
  HandleTrampolineProxy.prototype.validator = validateHandleTrampolineResponse;
  exports.PingService = PingService;
  exports.PingServicePtr = PingServicePtr;
  exports.PingServiceAssociatedPtr = PingServiceAssociatedPtr;
  exports.EchoService = EchoService;
  exports.EchoServicePtr = EchoServicePtr;
  exports.EchoServiceAssociatedPtr = EchoServiceAssociatedPtr;
  exports.HandleTrampoline = HandleTrampoline;
  exports.HandleTrampolinePtr = HandleTrampolinePtr;
  exports.HandleTrampolineAssociatedPtr = HandleTrampolineAssociatedPtr;
})();