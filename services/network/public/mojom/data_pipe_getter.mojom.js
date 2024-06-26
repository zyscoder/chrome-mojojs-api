// services/network/public/mojom/data_pipe_getter.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/data_pipe_getter.mojom';
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



  function DataPipeGetter_Read_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DataPipeGetter_Read_Params.prototype.initDefaults_ = function() {
    this.pipe = null;
  };
  DataPipeGetter_Read_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DataPipeGetter_Read_Params.validate = function(messageValidator, offset) {
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


    // validate DataPipeGetter_Read_Params.pipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DataPipeGetter_Read_Params.encodedSize = codec.kStructHeaderSize + 8;

  DataPipeGetter_Read_Params.decode = function(decoder) {
    var packed;
    var val = new DataPipeGetter_Read_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pipe =
        decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DataPipeGetter_Read_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DataPipeGetter_Read_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.pipe);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DataPipeGetter_Read_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DataPipeGetter_Read_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
    this.size = 0;
  };
  DataPipeGetter_Read_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DataPipeGetter_Read_ResponseParams.validate = function(messageValidator, offset) {
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



    return validator.validationError.NONE;
  };

  DataPipeGetter_Read_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  DataPipeGetter_Read_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new DataPipeGetter_Read_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.size =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  DataPipeGetter_Read_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DataPipeGetter_Read_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint64, val.size);
  };
  function DataPipeGetter_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DataPipeGetter_Clone_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  DataPipeGetter_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DataPipeGetter_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate DataPipeGetter_Clone_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DataPipeGetter_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  DataPipeGetter_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new DataPipeGetter_Clone_Params();
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

  DataPipeGetter_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DataPipeGetter_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kDataPipeGetter_Read_Name = 1851688735;
  var kDataPipeGetter_Clone_Name = 1990342090;

  function DataPipeGetterPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DataPipeGetter,
                                                   handleOrPtrInfo);
  }

  function DataPipeGetterAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DataPipeGetter, associatedInterfacePtrInfo);
  }

  DataPipeGetterAssociatedPtr.prototype =
      Object.create(DataPipeGetterPtr.prototype);
  DataPipeGetterAssociatedPtr.prototype.constructor =
      DataPipeGetterAssociatedPtr;

  function DataPipeGetterProxy(receiver) {
    this.receiver_ = receiver;
  }
  DataPipeGetterPtr.prototype.read = function() {
    return DataPipeGetterProxy.prototype.read
        .apply(this.ptr.getProxy(), arguments);
  };

  DataPipeGetterProxy.prototype.read = function(pipe) {
    var params_ = new DataPipeGetter_Read_Params();
    params_.pipe = pipe;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDataPipeGetter_Read_Name,
          codec.align(DataPipeGetter_Read_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(DataPipeGetter_Read_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(DataPipeGetter_Read_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DataPipeGetterPtr.prototype.clone = function() {
    return DataPipeGetterProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  DataPipeGetterProxy.prototype.clone = function(receiver) {
    var params_ = new DataPipeGetter_Clone_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kDataPipeGetter_Clone_Name,
        codec.align(DataPipeGetter_Clone_Params.encodedSize));
    builder.encodeStruct(DataPipeGetter_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DataPipeGetterStub(delegate) {
    this.delegate_ = delegate;
  }
  DataPipeGetterStub.prototype.read = function(pipe) {
    return this.delegate_ && this.delegate_.read && this.delegate_.read(pipe);
  }
  DataPipeGetterStub.prototype.clone = function(receiver) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(receiver);
  }

  DataPipeGetterStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDataPipeGetter_Clone_Name:
      var params = reader.decodeStruct(DataPipeGetter_Clone_Params);
      this.clone(params.receiver);
      return true;
    default:
      return false;
    }
  };

  DataPipeGetterStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDataPipeGetter_Read_Name:
      var params = reader.decodeStruct(DataPipeGetter_Read_Params);
      this.read(params.pipe).then(function(response) {
        var responseParams =
            new DataPipeGetter_Read_ResponseParams();
        responseParams.status = response.status;
        responseParams.size = response.size;
        var builder = new codec.MessageV1Builder(
            kDataPipeGetter_Read_Name,
            codec.align(DataPipeGetter_Read_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(DataPipeGetter_Read_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateDataPipeGetterRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDataPipeGetter_Read_Name:
        if (message.expectsResponse())
          paramsClass = DataPipeGetter_Read_Params;
      break;
      case kDataPipeGetter_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DataPipeGetter_Clone_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDataPipeGetterResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDataPipeGetter_Read_Name:
        if (message.isResponse())
          paramsClass = DataPipeGetter_Read_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var DataPipeGetter = {
    name: 'network.mojom.DataPipeGetter',
    kVersion: 0,
    ptrClass: DataPipeGetterPtr,
    proxyClass: DataPipeGetterProxy,
    stubClass: DataPipeGetterStub,
    validateRequest: validateDataPipeGetterRequest,
    validateResponse: validateDataPipeGetterResponse,
  };
  DataPipeGetterStub.prototype.validator = validateDataPipeGetterRequest;
  DataPipeGetterProxy.prototype.validator = validateDataPipeGetterResponse;
  exports.DataPipeGetter = DataPipeGetter;
  exports.DataPipeGetterPtr = DataPipeGetterPtr;
  exports.DataPipeGetterAssociatedPtr = DataPipeGetterAssociatedPtr;
})();