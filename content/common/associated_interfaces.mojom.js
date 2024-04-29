// content/common/associated_interfaces.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/common/associated_interfaces.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('content.mojom');
  var associated_interfaces$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/associated_interfaces/associated_interfaces.mojom', '../../third_party/blink/public/mojom/associated_interfaces/associated_interfaces.mojom.js');
  }



  function RouteProvider_GetRoute_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RouteProvider_GetRoute_Params.prototype.initDefaults_ = function() {
    this.routingId = 0;
    this.receiver = new associatedBindings.AssociatedInterfaceRequest();
  };
  RouteProvider_GetRoute_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RouteProvider_GetRoute_Params.validate = function(messageValidator, offset) {
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



    // validate RouteProvider_GetRoute_Params.receiver
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RouteProvider_GetRoute_Params.encodedSize = codec.kStructHeaderSize + 8;

  RouteProvider_GetRoute_Params.decode = function(decoder) {
    var packed;
    var val = new RouteProvider_GetRoute_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.routingId =
        decoder.decodeStruct(codec.Int32);
    val.receiver =
        decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    return val;
  };

  RouteProvider_GetRoute_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RouteProvider_GetRoute_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.routingId);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.receiver);
  };
  var kRouteProvider_GetRoute_Name = 1967220656;

  function RouteProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(RouteProvider,
                                                   handleOrPtrInfo);
  }

  function RouteProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        RouteProvider, associatedInterfacePtrInfo);
  }

  RouteProviderAssociatedPtr.prototype =
      Object.create(RouteProviderPtr.prototype);
  RouteProviderAssociatedPtr.prototype.constructor =
      RouteProviderAssociatedPtr;

  function RouteProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  RouteProviderPtr.prototype.getRoute = function() {
    return RouteProviderProxy.prototype.getRoute
        .apply(this.ptr.getProxy(), arguments);
  };

  RouteProviderProxy.prototype.getRoute = function(routingId, receiver) {
    var params_ = new RouteProvider_GetRoute_Params();
    params_.routingId = routingId;
    params_.receiver = receiver;
    var builder = new codec.MessageV2Builder(
        kRouteProvider_GetRoute_Name,
        codec.align(RouteProvider_GetRoute_Params.encodedSize));
    builder.setPayload(RouteProvider_GetRoute_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function RouteProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  RouteProviderStub.prototype.getRoute = function(routingId, receiver) {
    return this.delegate_ && this.delegate_.getRoute && this.delegate_.getRoute(routingId, receiver);
  }

  RouteProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kRouteProvider_GetRoute_Name:
      var params = reader.decodeStruct(RouteProvider_GetRoute_Params);
      this.getRoute(params.routingId, params.receiver);
      return true;
    default:
      return false;
    }
  };

  RouteProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateRouteProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kRouteProvider_GetRoute_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = RouteProvider_GetRoute_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateRouteProviderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var RouteProvider = {
    name: 'content.mojom.RouteProvider',
    kVersion: 0,
    ptrClass: RouteProviderPtr,
    proxyClass: RouteProviderProxy,
    stubClass: RouteProviderStub,
    validateRequest: validateRouteProviderRequest,
    validateResponse: null,
  };
  RouteProviderStub.prototype.validator = validateRouteProviderRequest;
  RouteProviderProxy.prototype.validator = null;
  exports.RouteProvider = RouteProvider;
  exports.RouteProviderPtr = RouteProviderPtr;
  exports.RouteProviderAssociatedPtr = RouteProviderAssociatedPtr;
})();