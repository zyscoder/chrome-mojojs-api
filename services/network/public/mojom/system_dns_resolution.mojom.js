// services/network/public/mojom/system_dns_resolution.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/system_dns_resolution.mojom';
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
  var address_list$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/address_list.mojom', 'address_list.mojom.js');
  }



  function SystemDnsResolver_Resolve_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SystemDnsResolver_Resolve_Params.prototype.initDefaults_ = function() {
    this.hostname = null;
    this.addrFamily = 0;
    this.flags = 0;
    this.network = 0;
  };
  SystemDnsResolver_Resolve_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SystemDnsResolver_Resolve_Params.validate = function(messageValidator, offset) {
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


    // validate SystemDnsResolver_Resolve_Params.hostname
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SystemDnsResolver_Resolve_Params.addrFamily
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, address_family$.AddressFamily);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  SystemDnsResolver_Resolve_Params.encodedSize = codec.kStructHeaderSize + 24;

  SystemDnsResolver_Resolve_Params.decode = function(decoder) {
    var packed;
    var val = new SystemDnsResolver_Resolve_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostname =
        decoder.decodeStruct(codec.NullableString);
    val.addrFamily =
        decoder.decodeStruct(new codec.Enum(address_family$.AddressFamily));
    val.flags =
        decoder.decodeStruct(codec.Int32);
    val.network =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  SystemDnsResolver_Resolve_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SystemDnsResolver_Resolve_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.hostname);
    encoder.encodeStruct(codec.Int32, val.addrFamily);
    encoder.encodeStruct(codec.Int32, val.flags);
    encoder.encodeStruct(codec.Uint64, val.network);
  };
  function SystemDnsResolver_Resolve_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SystemDnsResolver_Resolve_ResponseParams.prototype.initDefaults_ = function() {
    this.addrList = null;
    this.osError = 0;
    this.netError = 0;
  };
  SystemDnsResolver_Resolve_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SystemDnsResolver_Resolve_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate SystemDnsResolver_Resolve_ResponseParams.addrList
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, address_list$.AddressList, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  SystemDnsResolver_Resolve_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  SystemDnsResolver_Resolve_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new SystemDnsResolver_Resolve_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addrList =
        decoder.decodeStructPointer(address_list$.AddressList);
    val.osError =
        decoder.decodeStruct(codec.Int32);
    val.netError =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  SystemDnsResolver_Resolve_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SystemDnsResolver_Resolve_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(address_list$.AddressList, val.addrList);
    encoder.encodeStruct(codec.Int32, val.osError);
    encoder.encodeStruct(codec.Int32, val.netError);
  };
  var kSystemDnsResolver_Resolve_Name = 1471296340;

  function SystemDnsResolverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(SystemDnsResolver,
                                                   handleOrPtrInfo);
  }

  function SystemDnsResolverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        SystemDnsResolver, associatedInterfacePtrInfo);
  }

  SystemDnsResolverAssociatedPtr.prototype =
      Object.create(SystemDnsResolverPtr.prototype);
  SystemDnsResolverAssociatedPtr.prototype.constructor =
      SystemDnsResolverAssociatedPtr;

  function SystemDnsResolverProxy(receiver) {
    this.receiver_ = receiver;
  }
  SystemDnsResolverPtr.prototype.resolve = function() {
    return SystemDnsResolverProxy.prototype.resolve
        .apply(this.ptr.getProxy(), arguments);
  };

  SystemDnsResolverProxy.prototype.resolve = function(hostname, addrFamily, flags, network) {
    var params_ = new SystemDnsResolver_Resolve_Params();
    params_.hostname = hostname;
    params_.addrFamily = addrFamily;
    params_.flags = flags;
    params_.network = network;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kSystemDnsResolver_Resolve_Name,
          codec.align(SystemDnsResolver_Resolve_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(SystemDnsResolver_Resolve_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(SystemDnsResolver_Resolve_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function SystemDnsResolverStub(delegate) {
    this.delegate_ = delegate;
  }
  SystemDnsResolverStub.prototype.resolve = function(hostname, addrFamily, flags, network) {
    return this.delegate_ && this.delegate_.resolve && this.delegate_.resolve(hostname, addrFamily, flags, network);
  }

  SystemDnsResolverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  SystemDnsResolverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kSystemDnsResolver_Resolve_Name:
      var params = reader.decodeStruct(SystemDnsResolver_Resolve_Params);
      this.resolve(params.hostname, params.addrFamily, params.flags, params.network).then(function(response) {
        var responseParams =
            new SystemDnsResolver_Resolve_ResponseParams();
        responseParams.addrList = response.addrList;
        responseParams.osError = response.osError;
        responseParams.netError = response.netError;
        var builder = new codec.MessageV1Builder(
            kSystemDnsResolver_Resolve_Name,
            codec.align(SystemDnsResolver_Resolve_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(SystemDnsResolver_Resolve_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateSystemDnsResolverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kSystemDnsResolver_Resolve_Name:
        if (message.expectsResponse())
          paramsClass = SystemDnsResolver_Resolve_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateSystemDnsResolverResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kSystemDnsResolver_Resolve_Name:
        if (message.isResponse())
          paramsClass = SystemDnsResolver_Resolve_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var SystemDnsResolver = {
    name: 'network.mojom.SystemDnsResolver',
    kVersion: 0,
    ptrClass: SystemDnsResolverPtr,
    proxyClass: SystemDnsResolverProxy,
    stubClass: SystemDnsResolverStub,
    validateRequest: validateSystemDnsResolverRequest,
    validateResponse: validateSystemDnsResolverResponse,
  };
  SystemDnsResolverStub.prototype.validator = validateSystemDnsResolverRequest;
  SystemDnsResolverProxy.prototype.validator = validateSystemDnsResolverResponse;
  exports.SystemDnsResolver = SystemDnsResolver;
  exports.SystemDnsResolverPtr = SystemDnsResolverPtr;
  exports.SystemDnsResolverAssociatedPtr = SystemDnsResolverAssociatedPtr;
})();