// services/network/public/mojom/accept_ch_frame_observer.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/accept_ch_frame_observer.mojom';
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
  var http_request_headers$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/http_request_headers.mojom', 'http_request_headers.mojom.js');
  }
  var web_client_hints_types$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/web_client_hints_types.mojom', 'web_client_hints_types.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }



  function AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.prototype.initDefaults_ = function() {
    this.origin = null;
    this.acceptChFrame = null;
  };
  AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.validate = function(messageValidator, offset) {
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


    // validate AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.acceptChFrame
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, new codec.Enum(web_client_hints_types$.WebClientHintsType), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.encodedSize = codec.kStructHeaderSize + 16;

  AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.decode = function(decoder) {
    var packed;
    var val = new AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin =
        decoder.decodeStructPointer(origin$.Origin);
    val.acceptChFrame =
        decoder.decodeArrayPointer(new codec.Enum(web_client_hints_types$.WebClientHintsType));
    return val;
  };

  AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeArrayPointer(new codec.Enum(web_client_hints_types$.WebClientHintsType), val.acceptChFrame);
  };
  function AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams.validate = function(messageValidator, offset) {
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

  AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AcceptCHFrameObserver_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AcceptCHFrameObserver_Clone_Params.prototype.initDefaults_ = function() {
    this.listener = new bindings.InterfaceRequest();
  };
  AcceptCHFrameObserver_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AcceptCHFrameObserver_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate AcceptCHFrameObserver_Clone_Params.listener
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AcceptCHFrameObserver_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  AcceptCHFrameObserver_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new AcceptCHFrameObserver_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.listener =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AcceptCHFrameObserver_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AcceptCHFrameObserver_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.listener);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kAcceptCHFrameObserver_OnAcceptCHFrameReceived_Name = 303244255;
  var kAcceptCHFrameObserver_Clone_Name = 295278006;

  function AcceptCHFrameObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AcceptCHFrameObserver,
                                                   handleOrPtrInfo);
  }

  function AcceptCHFrameObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AcceptCHFrameObserver, associatedInterfacePtrInfo);
  }

  AcceptCHFrameObserverAssociatedPtr.prototype =
      Object.create(AcceptCHFrameObserverPtr.prototype);
  AcceptCHFrameObserverAssociatedPtr.prototype.constructor =
      AcceptCHFrameObserverAssociatedPtr;

  function AcceptCHFrameObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  AcceptCHFrameObserverPtr.prototype.onAcceptCHFrameReceived = function() {
    return AcceptCHFrameObserverProxy.prototype.onAcceptCHFrameReceived
        .apply(this.ptr.getProxy(), arguments);
  };

  AcceptCHFrameObserverProxy.prototype.onAcceptCHFrameReceived = function(origin, acceptChFrame) {
    var params_ = new AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params();
    params_.origin = origin;
    params_.acceptChFrame = acceptChFrame;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAcceptCHFrameObserver_OnAcceptCHFrameReceived_Name,
          codec.align(AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AcceptCHFrameObserverPtr.prototype.clone = function() {
    return AcceptCHFrameObserverProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  AcceptCHFrameObserverProxy.prototype.clone = function(listener) {
    var params_ = new AcceptCHFrameObserver_Clone_Params();
    params_.listener = listener;
    var builder = new codec.MessageV0Builder(
        kAcceptCHFrameObserver_Clone_Name,
        codec.align(AcceptCHFrameObserver_Clone_Params.encodedSize));
    builder.encodeStruct(AcceptCHFrameObserver_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AcceptCHFrameObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  AcceptCHFrameObserverStub.prototype.onAcceptCHFrameReceived = function(origin, acceptChFrame) {
    return this.delegate_ && this.delegate_.onAcceptCHFrameReceived && this.delegate_.onAcceptCHFrameReceived(origin, acceptChFrame);
  }
  AcceptCHFrameObserverStub.prototype.clone = function(listener) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(listener);
  }

  AcceptCHFrameObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAcceptCHFrameObserver_Clone_Name:
      var params = reader.decodeStruct(AcceptCHFrameObserver_Clone_Params);
      this.clone(params.listener);
      return true;
    default:
      return false;
    }
  };

  AcceptCHFrameObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAcceptCHFrameObserver_OnAcceptCHFrameReceived_Name:
      var params = reader.decodeStruct(AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params);
      this.onAcceptCHFrameReceived(params.origin, params.acceptChFrame).then(function(response) {
        var responseParams =
            new AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kAcceptCHFrameObserver_OnAcceptCHFrameReceived_Name,
            codec.align(AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAcceptCHFrameObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAcceptCHFrameObserver_OnAcceptCHFrameReceived_Name:
        if (message.expectsResponse())
          paramsClass = AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params;
      break;
      case kAcceptCHFrameObserver_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AcceptCHFrameObserver_Clone_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAcceptCHFrameObserverResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAcceptCHFrameObserver_OnAcceptCHFrameReceived_Name:
        if (message.isResponse())
          paramsClass = AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AcceptCHFrameObserver = {
    name: 'network.mojom.AcceptCHFrameObserver',
    kVersion: 0,
    ptrClass: AcceptCHFrameObserverPtr,
    proxyClass: AcceptCHFrameObserverProxy,
    stubClass: AcceptCHFrameObserverStub,
    validateRequest: validateAcceptCHFrameObserverRequest,
    validateResponse: validateAcceptCHFrameObserverResponse,
  };
  AcceptCHFrameObserverStub.prototype.validator = validateAcceptCHFrameObserverRequest;
  AcceptCHFrameObserverProxy.prototype.validator = validateAcceptCHFrameObserverResponse;
  exports.AcceptCHFrameObserver = AcceptCHFrameObserver;
  exports.AcceptCHFrameObserverPtr = AcceptCHFrameObserverPtr;
  exports.AcceptCHFrameObserverAssociatedPtr = AcceptCHFrameObserverAssociatedPtr;
})();