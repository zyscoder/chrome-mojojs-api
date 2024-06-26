// mojo/public/mojom/base/generic_pending_associated_receiver.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/mojom/base/generic_pending_associated_receiver.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojoBase.mojom');



  function GenericPendingAssociatedReceiver(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GenericPendingAssociatedReceiver.prototype.initDefaults_ = function() {
    this.interfaceName = null;
    this.receiver = new associatedBindings.AssociatedInterfaceRequest();
  };
  GenericPendingAssociatedReceiver.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GenericPendingAssociatedReceiver.validate = function(messageValidator, offset) {
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


    // validate GenericPendingAssociatedReceiver.interfaceName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate GenericPendingAssociatedReceiver.receiver
    err = messageValidator.validateAssociatedInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GenericPendingAssociatedReceiver.encodedSize = codec.kStructHeaderSize + 16;

  GenericPendingAssociatedReceiver.decode = function(decoder) {
    var packed;
    var val = new GenericPendingAssociatedReceiver();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.interfaceName =
        decoder.decodeStruct(codec.String);
    val.receiver =
        decoder.decodeStruct(codec.AssociatedInterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GenericPendingAssociatedReceiver.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GenericPendingAssociatedReceiver.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.interfaceName);
    encoder.encodeStruct(codec.AssociatedInterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function GenericAssociatedInterfacePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(GenericAssociatedInterface,
                                                   handleOrPtrInfo);
  }

  function GenericAssociatedInterfaceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        GenericAssociatedInterface, associatedInterfacePtrInfo);
  }

  GenericAssociatedInterfaceAssociatedPtr.prototype =
      Object.create(GenericAssociatedInterfacePtr.prototype);
  GenericAssociatedInterfaceAssociatedPtr.prototype.constructor =
      GenericAssociatedInterfaceAssociatedPtr;

  function GenericAssociatedInterfaceProxy(receiver) {
    this.receiver_ = receiver;
  }

  function GenericAssociatedInterfaceStub(delegate) {
    this.delegate_ = delegate;
  }

  GenericAssociatedInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  GenericAssociatedInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateGenericAssociatedInterfaceRequest(messageValidator) {
    return validator.validationError.NONE;
  }

  function validateGenericAssociatedInterfaceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var GenericAssociatedInterface = {
    name: 'mojo_base.mojom.GenericAssociatedInterface',
    kVersion: 0,
    ptrClass: GenericAssociatedInterfacePtr,
    proxyClass: GenericAssociatedInterfaceProxy,
    stubClass: GenericAssociatedInterfaceStub,
    validateRequest: validateGenericAssociatedInterfaceRequest,
    validateResponse: null,
  };
  GenericAssociatedInterfaceStub.prototype.validator = validateGenericAssociatedInterfaceRequest;
  GenericAssociatedInterfaceProxy.prototype.validator = null;
  exports.GenericPendingAssociatedReceiver = GenericPendingAssociatedReceiver;
  exports.GenericAssociatedInterface = GenericAssociatedInterface;
  exports.GenericAssociatedInterfacePtr = GenericAssociatedInterfacePtr;
  exports.GenericAssociatedInterfaceAssociatedPtr = GenericAssociatedInterfaceAssociatedPtr;
})();