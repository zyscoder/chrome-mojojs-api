// content/common/thread_type_switcher.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/common/thread_type_switcher.mojom';
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
  var thread_type$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/thread_type.mojom', '../../mojo/public/mojom/base/thread_type.mojom.js');
  }



  function ThreadTypeSwitcher_SetThreadType_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ThreadTypeSwitcher_SetThreadType_Params.prototype.initDefaults_ = function() {
    this.platformThreadId = 0;
    this.threadType = 0;
  };
  ThreadTypeSwitcher_SetThreadType_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ThreadTypeSwitcher_SetThreadType_Params.validate = function(messageValidator, offset) {
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



    // validate ThreadTypeSwitcher_SetThreadType_Params.threadType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, thread_type$.ThreadType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ThreadTypeSwitcher_SetThreadType_Params.encodedSize = codec.kStructHeaderSize + 8;

  ThreadTypeSwitcher_SetThreadType_Params.decode = function(decoder) {
    var packed;
    var val = new ThreadTypeSwitcher_SetThreadType_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.platformThreadId =
        decoder.decodeStruct(codec.Int32);
    val.threadType =
        decoder.decodeStruct(new codec.Enum(thread_type$.ThreadType));
    return val;
  };

  ThreadTypeSwitcher_SetThreadType_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ThreadTypeSwitcher_SetThreadType_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.platformThreadId);
    encoder.encodeStruct(codec.Int32, val.threadType);
  };
  var kThreadTypeSwitcher_SetThreadType_Name = 1900636281;

  function ThreadTypeSwitcherPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ThreadTypeSwitcher,
                                                   handleOrPtrInfo);
  }

  function ThreadTypeSwitcherAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ThreadTypeSwitcher, associatedInterfacePtrInfo);
  }

  ThreadTypeSwitcherAssociatedPtr.prototype =
      Object.create(ThreadTypeSwitcherPtr.prototype);
  ThreadTypeSwitcherAssociatedPtr.prototype.constructor =
      ThreadTypeSwitcherAssociatedPtr;

  function ThreadTypeSwitcherProxy(receiver) {
    this.receiver_ = receiver;
  }
  ThreadTypeSwitcherPtr.prototype.setThreadType = function() {
    return ThreadTypeSwitcherProxy.prototype.setThreadType
        .apply(this.ptr.getProxy(), arguments);
  };

  ThreadTypeSwitcherProxy.prototype.setThreadType = function(platformThreadId, threadType) {
    var params_ = new ThreadTypeSwitcher_SetThreadType_Params();
    params_.platformThreadId = platformThreadId;
    params_.threadType = threadType;
    var builder = new codec.MessageV0Builder(
        kThreadTypeSwitcher_SetThreadType_Name,
        codec.align(ThreadTypeSwitcher_SetThreadType_Params.encodedSize));
    builder.encodeStruct(ThreadTypeSwitcher_SetThreadType_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ThreadTypeSwitcherStub(delegate) {
    this.delegate_ = delegate;
  }
  ThreadTypeSwitcherStub.prototype.setThreadType = function(platformThreadId, threadType) {
    return this.delegate_ && this.delegate_.setThreadType && this.delegate_.setThreadType(platformThreadId, threadType);
  }

  ThreadTypeSwitcherStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kThreadTypeSwitcher_SetThreadType_Name:
      var params = reader.decodeStruct(ThreadTypeSwitcher_SetThreadType_Params);
      this.setThreadType(params.platformThreadId, params.threadType);
      return true;
    default:
      return false;
    }
  };

  ThreadTypeSwitcherStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateThreadTypeSwitcherRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kThreadTypeSwitcher_SetThreadType_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ThreadTypeSwitcher_SetThreadType_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateThreadTypeSwitcherResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ThreadTypeSwitcher = {
    name: 'content.mojom.ThreadTypeSwitcher',
    kVersion: 0,
    ptrClass: ThreadTypeSwitcherPtr,
    proxyClass: ThreadTypeSwitcherProxy,
    stubClass: ThreadTypeSwitcherStub,
    validateRequest: validateThreadTypeSwitcherRequest,
    validateResponse: null,
  };
  ThreadTypeSwitcherStub.prototype.validator = validateThreadTypeSwitcherRequest;
  ThreadTypeSwitcherProxy.prototype.validator = null;
  exports.ThreadTypeSwitcher = ThreadTypeSwitcher;
  exports.ThreadTypeSwitcherPtr = ThreadTypeSwitcherPtr;
  exports.ThreadTypeSwitcherAssociatedPtr = ThreadTypeSwitcherAssociatedPtr;
})();