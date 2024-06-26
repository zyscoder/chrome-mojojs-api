// services/network/public/mojom/network_interface_change_listener.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_interface_change_listener.mojom';
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
  var ip_address$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address.mojom', 'ip_address.mojom.js');
  }



  function IfAddrMsg(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IfAddrMsg.prototype.initDefaults_ = function() {
    this.ifaFamily = 0;
    this.ifaPrefixlen = 0;
    this.ifaFlags = 0;
    this.ifaScope = 0;
    this.ifaIndex = 0;
  };
  IfAddrMsg.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IfAddrMsg.validate = function(messageValidator, offset) {
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

  IfAddrMsg.encodedSize = codec.kStructHeaderSize + 8;

  IfAddrMsg.decode = function(decoder) {
    var packed;
    var val = new IfAddrMsg();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ifaFamily =
        decoder.decodeStruct(codec.Uint8);
    val.ifaPrefixlen =
        decoder.decodeStruct(codec.Uint8);
    val.ifaFlags =
        decoder.decodeStruct(codec.Uint8);
    val.ifaScope =
        decoder.decodeStruct(codec.Uint8);
    val.ifaIndex =
        decoder.decodeStruct(codec.Uint32);
    return val;
  };

  IfAddrMsg.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IfAddrMsg.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint8, val.ifaFamily);
    encoder.encodeStruct(codec.Uint8, val.ifaPrefixlen);
    encoder.encodeStruct(codec.Uint8, val.ifaFlags);
    encoder.encodeStruct(codec.Uint8, val.ifaScope);
    encoder.encodeStruct(codec.Uint32, val.ifaIndex);
  };
  function AddressMap(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AddressMap.prototype.initDefaults_ = function() {
    this.addressMap = null;
  };
  AddressMap.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AddressMap.validate = function(messageValidator, offset) {
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


    // validate AddressMap.addressMap
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, new codec.PointerTo(ip_address$.IPAddress), new codec.PointerTo(IfAddrMsg), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AddressMap.encodedSize = codec.kStructHeaderSize + 8;

  AddressMap.decode = function(decoder) {
    var packed;
    var val = new AddressMap();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addressMap =
        decoder.decodeMapPointer(new codec.PointerTo(ip_address$.IPAddress), new codec.PointerTo(IfAddrMsg));
    return val;
  };

  AddressMap.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AddressMap.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(new codec.PointerTo(ip_address$.IPAddress), new codec.PointerTo(IfAddrMsg), val.addressMap);
  };
  function OnlineLinks(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OnlineLinks.prototype.initDefaults_ = function() {
    this.onlineLinks = null;
  };
  OnlineLinks.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OnlineLinks.validate = function(messageValidator, offset) {
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


    // validate OnlineLinks.onlineLinks
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Int32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OnlineLinks.encodedSize = codec.kStructHeaderSize + 8;

  OnlineLinks.decode = function(decoder) {
    var packed;
    var val = new OnlineLinks();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.onlineLinks =
        decoder.decodeArrayPointer(codec.Int32);
    return val;
  };

  OnlineLinks.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OnlineLinks.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Int32, val.onlineLinks);
  };
  function InitialAddressMap(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InitialAddressMap.prototype.initDefaults_ = function() {
    this.addressMap = null;
    this.onlineLinks = null;
  };
  InitialAddressMap.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InitialAddressMap.validate = function(messageValidator, offset) {
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


    // validate InitialAddressMap.addressMap
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, AddressMap, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate InitialAddressMap.onlineLinks
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, OnlineLinks, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InitialAddressMap.encodedSize = codec.kStructHeaderSize + 16;

  InitialAddressMap.decode = function(decoder) {
    var packed;
    var val = new InitialAddressMap();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addressMap =
        decoder.decodeStructPointer(AddressMap);
    val.onlineLinks =
        decoder.decodeStructPointer(OnlineLinks);
    return val;
  };

  InitialAddressMap.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InitialAddressMap.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(AddressMap, val.addressMap);
    encoder.encodeStructPointer(OnlineLinks, val.onlineLinks);
  };
  function NetworkInterfaceChangeParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkInterfaceChangeParams.prototype.initDefaults_ = function() {
    this.addressMap = null;
    this.onlineLinks = null;
  };
  NetworkInterfaceChangeParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkInterfaceChangeParams.validate = function(messageValidator, offset) {
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


    // validate NetworkInterfaceChangeParams.addressMap
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, new codec.PointerTo(ip_address$.IPAddress), new codec.NullablePointerTo(IfAddrMsg), true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkInterfaceChangeParams.onlineLinks
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 8, false, codec.Int32, codec.PackedBool, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkInterfaceChangeParams.encodedSize = codec.kStructHeaderSize + 16;

  NetworkInterfaceChangeParams.decode = function(decoder) {
    var packed;
    var val = new NetworkInterfaceChangeParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.addressMap =
        decoder.decodeMapPointer(new codec.PointerTo(ip_address$.IPAddress), new codec.NullablePointerTo(IfAddrMsg));
    val.onlineLinks =
        decoder.decodeMapPointer(codec.Int32, codec.PackedBool);
    return val;
  };

  NetworkInterfaceChangeParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkInterfaceChangeParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(new codec.PointerTo(ip_address$.IPAddress), new codec.NullablePointerTo(IfAddrMsg), val.addressMap);
    encoder.encodeMapPointer(codec.Int32, codec.PackedBool, val.onlineLinks);
  };
  function NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.prototype.initDefaults_ = function() {
    this.params = null;
  };
  NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.validate = function(messageValidator, offset) {
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


    // validate NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, NetworkInterfaceChangeParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.decode = function(decoder) {
    var packed;
    var val = new NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(NetworkInterfaceChangeParams);
    return val;
  };

  NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(NetworkInterfaceChangeParams, val.params);
  };
  var kNetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Name = 454003061;

  function NetworkInterfaceChangeListenerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(NetworkInterfaceChangeListener,
                                                   handleOrPtrInfo);
  }

  function NetworkInterfaceChangeListenerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        NetworkInterfaceChangeListener, associatedInterfacePtrInfo);
  }

  NetworkInterfaceChangeListenerAssociatedPtr.prototype =
      Object.create(NetworkInterfaceChangeListenerPtr.prototype);
  NetworkInterfaceChangeListenerAssociatedPtr.prototype.constructor =
      NetworkInterfaceChangeListenerAssociatedPtr;

  function NetworkInterfaceChangeListenerProxy(receiver) {
    this.receiver_ = receiver;
  }
  NetworkInterfaceChangeListenerPtr.prototype.onNetworkInterfacesChanged = function() {
    return NetworkInterfaceChangeListenerProxy.prototype.onNetworkInterfacesChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  NetworkInterfaceChangeListenerProxy.prototype.onNetworkInterfacesChanged = function(params) {
    var params_ = new NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params();
    params_.params = params;
    var builder = new codec.MessageV0Builder(
        kNetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Name,
        codec.align(NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params.encodedSize));
    builder.encodeStruct(NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function NetworkInterfaceChangeListenerStub(delegate) {
    this.delegate_ = delegate;
  }
  NetworkInterfaceChangeListenerStub.prototype.onNetworkInterfacesChanged = function(params) {
    return this.delegate_ && this.delegate_.onNetworkInterfacesChanged && this.delegate_.onNetworkInterfacesChanged(params);
  }

  NetworkInterfaceChangeListenerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kNetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Name:
      var params = reader.decodeStruct(NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params);
      this.onNetworkInterfacesChanged(params.params);
      return true;
    default:
      return false;
    }
  };

  NetworkInterfaceChangeListenerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateNetworkInterfaceChangeListenerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kNetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = NetworkInterfaceChangeListener_OnNetworkInterfacesChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateNetworkInterfaceChangeListenerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var NetworkInterfaceChangeListener = {
    name: 'network.mojom.NetworkInterfaceChangeListener',
    kVersion: 0,
    ptrClass: NetworkInterfaceChangeListenerPtr,
    proxyClass: NetworkInterfaceChangeListenerProxy,
    stubClass: NetworkInterfaceChangeListenerStub,
    validateRequest: validateNetworkInterfaceChangeListenerRequest,
    validateResponse: null,
  };
  NetworkInterfaceChangeListenerStub.prototype.validator = validateNetworkInterfaceChangeListenerRequest;
  NetworkInterfaceChangeListenerProxy.prototype.validator = null;
  exports.IfAddrMsg = IfAddrMsg;
  exports.AddressMap = AddressMap;
  exports.OnlineLinks = OnlineLinks;
  exports.InitialAddressMap = InitialAddressMap;
  exports.NetworkInterfaceChangeParams = NetworkInterfaceChangeParams;
  exports.NetworkInterfaceChangeListener = NetworkInterfaceChangeListener;
  exports.NetworkInterfaceChangeListenerPtr = NetworkInterfaceChangeListenerPtr;
  exports.NetworkInterfaceChangeListenerAssociatedPtr = NetworkInterfaceChangeListenerAssociatedPtr;
})();