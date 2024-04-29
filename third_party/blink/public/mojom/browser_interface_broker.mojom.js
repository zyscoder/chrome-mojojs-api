// third_party/blink/public/mojom/browser_interface_broker.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/browser_interface_broker.mojom';
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
  var generic_pending_receiver$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/generic_pending_receiver.mojom', '../../../../mojo/public/mojom/base/generic_pending_receiver.mojom.js');
  }



  function BrowserInterfaceBroker_GetInterface_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BrowserInterfaceBroker_GetInterface_Params.prototype.initDefaults_ = function() {
    this.receiver = null;
  };
  BrowserInterfaceBroker_GetInterface_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BrowserInterfaceBroker_GetInterface_Params.validate = function(messageValidator, offset) {
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


    // validate BrowserInterfaceBroker_GetInterface_Params.receiver
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, generic_pending_receiver$.GenericPendingReceiver, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BrowserInterfaceBroker_GetInterface_Params.encodedSize = codec.kStructHeaderSize + 8;

  BrowserInterfaceBroker_GetInterface_Params.decode = function(decoder) {
    var packed;
    var val = new BrowserInterfaceBroker_GetInterface_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStructPointer(generic_pending_receiver$.GenericPendingReceiver);
    return val;
  };

  BrowserInterfaceBroker_GetInterface_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BrowserInterfaceBroker_GetInterface_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(generic_pending_receiver$.GenericPendingReceiver, val.receiver);
  };
  var kBrowserInterfaceBroker_GetInterface_Name = 0;

  function BrowserInterfaceBrokerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BrowserInterfaceBroker,
                                                   handleOrPtrInfo);
  }

  function BrowserInterfaceBrokerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BrowserInterfaceBroker, associatedInterfacePtrInfo);
  }

  BrowserInterfaceBrokerAssociatedPtr.prototype =
      Object.create(BrowserInterfaceBrokerPtr.prototype);
  BrowserInterfaceBrokerAssociatedPtr.prototype.constructor =
      BrowserInterfaceBrokerAssociatedPtr;

  function BrowserInterfaceBrokerProxy(receiver) {
    this.receiver_ = receiver;
  }
  BrowserInterfaceBrokerPtr.prototype.getInterface = function() {
    return BrowserInterfaceBrokerProxy.prototype.getInterface
        .apply(this.ptr.getProxy(), arguments);
  };

  BrowserInterfaceBrokerProxy.prototype.getInterface = function(receiver) {
    var params_ = new BrowserInterfaceBroker_GetInterface_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kBrowserInterfaceBroker_GetInterface_Name,
        codec.align(BrowserInterfaceBroker_GetInterface_Params.encodedSize));
    builder.encodeStruct(BrowserInterfaceBroker_GetInterface_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function BrowserInterfaceBrokerStub(delegate) {
    this.delegate_ = delegate;
  }
  BrowserInterfaceBrokerStub.prototype.getInterface = function(receiver) {
    return this.delegate_ && this.delegate_.getInterface && this.delegate_.getInterface(receiver);
  }

  BrowserInterfaceBrokerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBrowserInterfaceBroker_GetInterface_Name:
      var params = reader.decodeStruct(BrowserInterfaceBroker_GetInterface_Params);
      this.getInterface(params.receiver);
      return true;
    default:
      return false;
    }
  };

  BrowserInterfaceBrokerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateBrowserInterfaceBrokerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBrowserInterfaceBroker_GetInterface_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BrowserInterfaceBroker_GetInterface_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBrowserInterfaceBrokerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var BrowserInterfaceBroker = {
    name: 'blink.mojom.BrowserInterfaceBroker',
    kVersion: 0,
    ptrClass: BrowserInterfaceBrokerPtr,
    proxyClass: BrowserInterfaceBrokerProxy,
    stubClass: BrowserInterfaceBrokerStub,
    validateRequest: validateBrowserInterfaceBrokerRequest,
    validateResponse: null,
  };
  BrowserInterfaceBrokerStub.prototype.validator = validateBrowserInterfaceBrokerRequest;
  BrowserInterfaceBrokerProxy.prototype.validator = null;
  exports.BrowserInterfaceBroker = BrowserInterfaceBroker;
  exports.BrowserInterfaceBrokerPtr = BrowserInterfaceBrokerPtr;
  exports.BrowserInterfaceBrokerAssociatedPtr = BrowserInterfaceBrokerAssociatedPtr;
})();