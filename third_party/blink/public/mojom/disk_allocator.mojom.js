// third_party/blink/public/mojom/disk_allocator.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/disk_allocator.mojom';
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
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../../mojo/public/mojom/base/file.mojom.js');
  }



  function DiskAllocator_ProvideTemporaryFile_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DiskAllocator_ProvideTemporaryFile_Params.prototype.initDefaults_ = function() {
    this.file = null;
  };
  DiskAllocator_ProvideTemporaryFile_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DiskAllocator_ProvideTemporaryFile_Params.validate = function(messageValidator, offset) {
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


    // validate DiskAllocator_ProvideTemporaryFile_Params.file
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file$.File, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DiskAllocator_ProvideTemporaryFile_Params.encodedSize = codec.kStructHeaderSize + 8;

  DiskAllocator_ProvideTemporaryFile_Params.decode = function(decoder) {
    var packed;
    var val = new DiskAllocator_ProvideTemporaryFile_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.file =
        decoder.decodeStructPointer(file$.File);
    return val;
  };

  DiskAllocator_ProvideTemporaryFile_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DiskAllocator_ProvideTemporaryFile_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file$.File, val.file);
  };
  var kDiskAllocator_ProvideTemporaryFile_Name = 0;

  function DiskAllocatorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DiskAllocator,
                                                   handleOrPtrInfo);
  }

  function DiskAllocatorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DiskAllocator, associatedInterfacePtrInfo);
  }

  DiskAllocatorAssociatedPtr.prototype =
      Object.create(DiskAllocatorPtr.prototype);
  DiskAllocatorAssociatedPtr.prototype.constructor =
      DiskAllocatorAssociatedPtr;

  function DiskAllocatorProxy(receiver) {
    this.receiver_ = receiver;
  }
  DiskAllocatorPtr.prototype.provideTemporaryFile = function() {
    return DiskAllocatorProxy.prototype.provideTemporaryFile
        .apply(this.ptr.getProxy(), arguments);
  };

  DiskAllocatorProxy.prototype.provideTemporaryFile = function(file) {
    var params_ = new DiskAllocator_ProvideTemporaryFile_Params();
    params_.file = file;
    var builder = new codec.MessageV0Builder(
        kDiskAllocator_ProvideTemporaryFile_Name,
        codec.align(DiskAllocator_ProvideTemporaryFile_Params.encodedSize));
    builder.encodeStruct(DiskAllocator_ProvideTemporaryFile_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DiskAllocatorStub(delegate) {
    this.delegate_ = delegate;
  }
  DiskAllocatorStub.prototype.provideTemporaryFile = function(file) {
    return this.delegate_ && this.delegate_.provideTemporaryFile && this.delegate_.provideTemporaryFile(file);
  }

  DiskAllocatorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDiskAllocator_ProvideTemporaryFile_Name:
      var params = reader.decodeStruct(DiskAllocator_ProvideTemporaryFile_Params);
      this.provideTemporaryFile(params.file);
      return true;
    default:
      return false;
    }
  };

  DiskAllocatorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDiskAllocatorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDiskAllocator_ProvideTemporaryFile_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DiskAllocator_ProvideTemporaryFile_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDiskAllocatorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DiskAllocator = {
    name: 'blink.mojom.DiskAllocator',
    kVersion: 0,
    ptrClass: DiskAllocatorPtr,
    proxyClass: DiskAllocatorProxy,
    stubClass: DiskAllocatorStub,
    validateRequest: validateDiskAllocatorRequest,
    validateResponse: null,
  };
  DiskAllocatorStub.prototype.validator = validateDiskAllocatorRequest;
  DiskAllocatorProxy.prototype.validator = null;
  exports.DiskAllocator = DiskAllocator;
  exports.DiskAllocatorPtr = DiskAllocatorPtr;
  exports.DiskAllocatorAssociatedPtr = DiskAllocatorAssociatedPtr;
})();