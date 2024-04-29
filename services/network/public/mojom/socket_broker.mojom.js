// services/network/public/mojom/socket_broker.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/socket_broker.mojom';
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
  var address_family$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/address_family.mojom', 'address_family.mojom.js');
  }
  var transferable_socket$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/transferable_socket.mojom', 'transferable_socket.mojom.js');
  }



  function SocketBroker_CreateTcpSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SocketBroker_CreateTcpSocket_Params.prototype.initDefaults_ = function() {
    this.addressFamily = 0;
  };
  SocketBroker_CreateTcpSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SocketBroker_CreateTcpSocket_Params.validate = function(messageValidator, offset) {
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


    // validate SocketBroker_CreateTcpSocket_Params.addressFamily
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, address_family$.AddressFamily);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SocketBroker_CreateTcpSocket_Params.encodedSize = codec.kStructHeaderSize + 8;

  SocketBroker_CreateTcpSocket_Params.decode = function(decoder) {
    var packed;
    var val = new SocketBroker_CreateTcpSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addressFamily =
        decoder.decodeStruct(new codec.Enum(address_family$.AddressFamily));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SocketBroker_CreateTcpSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SocketBroker_CreateTcpSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.addressFamily);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SocketBroker_CreateTcpSocket_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SocketBroker_CreateTcpSocket_ResponseParams.prototype.initDefaults_ = function() {
    this.createdSocket = null;
    this.rv = 0;
  };
  SocketBroker_CreateTcpSocket_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SocketBroker_CreateTcpSocket_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SocketBroker_CreateTcpSocket_ResponseParams.createdSocket
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transferable_socket$.TransferableSocket, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SocketBroker_CreateTcpSocket_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  SocketBroker_CreateTcpSocket_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SocketBroker_CreateTcpSocket_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.createdSocket =
        decoder.decodeStructPointer(transferable_socket$.TransferableSocket);
    val.rv =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SocketBroker_CreateTcpSocket_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SocketBroker_CreateTcpSocket_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transferable_socket$.TransferableSocket, val.createdSocket);
    encoder.encodeStruct(codec.Int32, val.rv);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SocketBroker_CreateUdpSocket_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SocketBroker_CreateUdpSocket_Params.prototype.initDefaults_ = function() {
    this.addressFamily = 0;
  };
  SocketBroker_CreateUdpSocket_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SocketBroker_CreateUdpSocket_Params.validate = function(messageValidator, offset) {
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


    // validate SocketBroker_CreateUdpSocket_Params.addressFamily
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, address_family$.AddressFamily);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SocketBroker_CreateUdpSocket_Params.encodedSize = codec.kStructHeaderSize + 8;

  SocketBroker_CreateUdpSocket_Params.decode = function(decoder) {
    var packed;
    var val = new SocketBroker_CreateUdpSocket_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addressFamily =
        decoder.decodeStruct(new codec.Enum(address_family$.AddressFamily));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SocketBroker_CreateUdpSocket_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SocketBroker_CreateUdpSocket_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.addressFamily);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SocketBroker_CreateUdpSocket_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SocketBroker_CreateUdpSocket_ResponseParams.prototype.initDefaults_ = function() {
    this.createdSocket = null;
    this.rv = 0;
  };
  SocketBroker_CreateUdpSocket_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SocketBroker_CreateUdpSocket_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SocketBroker_CreateUdpSocket_ResponseParams.createdSocket
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, transferable_socket$.TransferableSocket, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  SocketBroker_CreateUdpSocket_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  SocketBroker_CreateUdpSocket_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SocketBroker_CreateUdpSocket_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.createdSocket =
        decoder.decodeStructPointer(transferable_socket$.TransferableSocket);
    val.rv =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  SocketBroker_CreateUdpSocket_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SocketBroker_CreateUdpSocket_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(transferable_socket$.TransferableSocket, val.createdSocket);
    encoder.encodeStruct(codec.Int32, val.rv);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kSocketBroker_CreateTcpSocket_Name = 714981387;
  var kSocketBroker_CreateUdpSocket_Name = 719192977;

  function SocketBrokerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SocketBroker,
                                                   handleOrPtrInfo);
  }

  function SocketBrokerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SocketBroker, associatedInterfacePtrInfo);
  }

  SocketBrokerAssociatedPtr.prototype =
      Object.create(SocketBrokerPtr.prototype);
  SocketBrokerAssociatedPtr.prototype.constructor =
      SocketBrokerAssociatedPtr;

  function SocketBrokerProxy(receiver) {
    this.receiver_ = receiver;
  }
  SocketBrokerPtr.prototype.createTcpSocket = function() {
    return SocketBrokerProxy.prototype.createTcpSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  SocketBrokerProxy.prototype.createTcpSocket = function(addressFamily) {
    var params_ = new SocketBroker_CreateTcpSocket_Params();
    params_.addressFamily = addressFamily;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSocketBroker_CreateTcpSocket_Name,
          codec.align(SocketBroker_CreateTcpSocket_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SocketBroker_CreateTcpSocket_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SocketBroker_CreateTcpSocket_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  SocketBrokerPtr.prototype.createUdpSocket = function() {
    return SocketBrokerProxy.prototype.createUdpSocket
        .apply(this.ptr.getProxy(), arguments);
  };

  SocketBrokerProxy.prototype.createUdpSocket = function(addressFamily) {
    var params_ = new SocketBroker_CreateUdpSocket_Params();
    params_.addressFamily = addressFamily;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSocketBroker_CreateUdpSocket_Name,
          codec.align(SocketBroker_CreateUdpSocket_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SocketBroker_CreateUdpSocket_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SocketBroker_CreateUdpSocket_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SocketBrokerStub(delegate) {
    this.delegate_ = delegate;
  }
  SocketBrokerStub.prototype.createTcpSocket = function(addressFamily) {
    return this.delegate_ && this.delegate_.createTcpSocket && this.delegate_.createTcpSocket(addressFamily);
  }
  SocketBrokerStub.prototype.createUdpSocket = function(addressFamily) {
    return this.delegate_ && this.delegate_.createUdpSocket && this.delegate_.createUdpSocket(addressFamily);
  }

  SocketBrokerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  SocketBrokerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSocketBroker_CreateTcpSocket_Name:
      var params = reader.decodeStruct(SocketBroker_CreateTcpSocket_Params);
      this.createTcpSocket(params.addressFamily).then(function(response) {
        var responseParams =
            new SocketBroker_CreateTcpSocket_ResponseParams();
        responseParams.createdSocket = response.createdSocket;
        responseParams.rv = response.rv;
        var builder = new codec.MessageV1Builder(
            kSocketBroker_CreateTcpSocket_Name,
            codec.align(SocketBroker_CreateTcpSocket_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SocketBroker_CreateTcpSocket_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kSocketBroker_CreateUdpSocket_Name:
      var params = reader.decodeStruct(SocketBroker_CreateUdpSocket_Params);
      this.createUdpSocket(params.addressFamily).then(function(response) {
        var responseParams =
            new SocketBroker_CreateUdpSocket_ResponseParams();
        responseParams.createdSocket = response.createdSocket;
        responseParams.rv = response.rv;
        var builder = new codec.MessageV1Builder(
            kSocketBroker_CreateUdpSocket_Name,
            codec.align(SocketBroker_CreateUdpSocket_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SocketBroker_CreateUdpSocket_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSocketBrokerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSocketBroker_CreateTcpSocket_Name:
        if (message.expectsResponse())
          paramsClass = SocketBroker_CreateTcpSocket_Params;
      break;
      case kSocketBroker_CreateUdpSocket_Name:
        if (message.expectsResponse())
          paramsClass = SocketBroker_CreateUdpSocket_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSocketBrokerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSocketBroker_CreateTcpSocket_Name:
        if (message.isResponse())
          paramsClass = SocketBroker_CreateTcpSocket_ResponseParams;
        break;
      case kSocketBroker_CreateUdpSocket_Name:
        if (message.isResponse())
          paramsClass = SocketBroker_CreateUdpSocket_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SocketBroker = {
    name: 'network.mojom.SocketBroker',
    kVersion: 0,
    ptrClass: SocketBrokerPtr,
    proxyClass: SocketBrokerProxy,
    stubClass: SocketBrokerStub,
    validateRequest: validateSocketBrokerRequest,
    validateResponse: validateSocketBrokerResponse,
  };
  SocketBrokerStub.prototype.validator = validateSocketBrokerRequest;
  SocketBrokerProxy.prototype.validator = validateSocketBrokerResponse;
  exports.SocketBroker = SocketBroker;
  exports.SocketBrokerPtr = SocketBrokerPtr;
  exports.SocketBrokerAssociatedPtr = SocketBrokerAssociatedPtr;
})();