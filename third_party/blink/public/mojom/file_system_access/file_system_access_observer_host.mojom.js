// third_party/blink/public/mojom/file_system_access/file_system_access_observer_host.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/file_system_access/file_system_access_observer_host.mojom';
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
  var file_system_access_error$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/file_system_access/file_system_access_error.mojom', 'file_system_access_error.mojom.js');
  }
  var file_system_access_observer$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/file_system_access/file_system_access_observer.mojom', 'file_system_access_observer.mojom.js');
  }
  var file_system_access_transfer_token$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/file_system_access/file_system_access_transfer_token.mojom', 'file_system_access_transfer_token.mojom.js');
  }



  function FileSystemAccessObserverHost_Observe_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemAccessObserverHost_Observe_Params.prototype.initDefaults_ = function() {
    this.token = new file_system_access_transfer_token$.FileSystemAccessTransferTokenPtr();
    this.isRecursive = false;
  };
  FileSystemAccessObserverHost_Observe_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileSystemAccessObserverHost_Observe_Params.validate = function(messageValidator, offset) {
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


    // validate FileSystemAccessObserverHost_Observe_Params.token
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileSystemAccessObserverHost_Observe_Params.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemAccessObserverHost_Observe_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemAccessObserverHost_Observe_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token =
        decoder.decodeStruct(new codec.Interface(file_system_access_transfer_token$.FileSystemAccessTransferTokenPtr));
    packed = decoder.readUint8();
    val.isRecursive = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemAccessObserverHost_Observe_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemAccessObserverHost_Observe_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(file_system_access_transfer_token$.FileSystemAccessTransferTokenPtr), val.token);
    packed = 0;
    packed |= (val.isRecursive & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemAccessObserverHost_Observe_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemAccessObserverHost_Observe_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
    this.observerReceiver = new bindings.InterfaceRequest();
  };
  FileSystemAccessObserverHost_Observe_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileSystemAccessObserverHost_Observe_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FileSystemAccessObserverHost_Observe_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_system_access_error$.FileSystemAccessError, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemAccessObserverHost_Observe_ResponseParams.observerReceiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemAccessObserverHost_Observe_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  FileSystemAccessObserverHost_Observe_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileSystemAccessObserverHost_Observe_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(file_system_access_error$.FileSystemAccessError);
    val.observerReceiver =
        decoder.decodeStruct(codec.NullableInterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FileSystemAccessObserverHost_Observe_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemAccessObserverHost_Observe_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_system_access_error$.FileSystemAccessError, val.result);
    encoder.encodeStruct(codec.NullableInterfaceRequest, val.observerReceiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FileSystemAccessObserverHost_Unobserve_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemAccessObserverHost_Unobserve_Params.prototype.initDefaults_ = function() {
    this.token = new file_system_access_transfer_token$.FileSystemAccessTransferTokenPtr();
  };
  FileSystemAccessObserverHost_Unobserve_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileSystemAccessObserverHost_Unobserve_Params.validate = function(messageValidator, offset) {
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


    // validate FileSystemAccessObserverHost_Unobserve_Params.token
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileSystemAccessObserverHost_Unobserve_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileSystemAccessObserverHost_Unobserve_Params.decode = function(decoder) {
    var packed;
    var val = new FileSystemAccessObserverHost_Unobserve_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.token =
        decoder.decodeStruct(new codec.Interface(file_system_access_transfer_token$.FileSystemAccessTransferTokenPtr));
    return val;
  };

  FileSystemAccessObserverHost_Unobserve_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemAccessObserverHost_Unobserve_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(file_system_access_transfer_token$.FileSystemAccessTransferTokenPtr), val.token);
  };
  var kFileSystemAccessObserverHost_Observe_Name = 0;
  var kFileSystemAccessObserverHost_Unobserve_Name = 1;

  function FileSystemAccessObserverHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FileSystemAccessObserverHost,
                                                   handleOrPtrInfo);
  }

  function FileSystemAccessObserverHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FileSystemAccessObserverHost, associatedInterfacePtrInfo);
  }

  FileSystemAccessObserverHostAssociatedPtr.prototype =
      Object.create(FileSystemAccessObserverHostPtr.prototype);
  FileSystemAccessObserverHostAssociatedPtr.prototype.constructor =
      FileSystemAccessObserverHostAssociatedPtr;

  function FileSystemAccessObserverHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  FileSystemAccessObserverHostPtr.prototype.observe = function() {
    return FileSystemAccessObserverHostProxy.prototype.observe
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemAccessObserverHostProxy.prototype.observe = function(token, isRecursive) {
    var params_ = new FileSystemAccessObserverHost_Observe_Params();
    params_.token = token;
    params_.isRecursive = isRecursive;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileSystemAccessObserverHost_Observe_Name,
          codec.align(FileSystemAccessObserverHost_Observe_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileSystemAccessObserverHost_Observe_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileSystemAccessObserverHost_Observe_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileSystemAccessObserverHostPtr.prototype.unobserve = function() {
    return FileSystemAccessObserverHostProxy.prototype.unobserve
        .apply(this.ptr.getProxy(), arguments);
  };

  FileSystemAccessObserverHostProxy.prototype.unobserve = function(token) {
    var params_ = new FileSystemAccessObserverHost_Unobserve_Params();
    params_.token = token;
    var builder = new codec.MessageV0Builder(
        kFileSystemAccessObserverHost_Unobserve_Name,
        codec.align(FileSystemAccessObserverHost_Unobserve_Params.encodedSize));
    builder.encodeStruct(FileSystemAccessObserverHost_Unobserve_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function FileSystemAccessObserverHostStub(delegate) {
    this.delegate_ = delegate;
  }
  FileSystemAccessObserverHostStub.prototype.observe = function(token, isRecursive) {
    return this.delegate_ && this.delegate_.observe && this.delegate_.observe(token, isRecursive);
  }
  FileSystemAccessObserverHostStub.prototype.unobserve = function(token) {
    return this.delegate_ && this.delegate_.unobserve && this.delegate_.unobserve(token);
  }

  FileSystemAccessObserverHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileSystemAccessObserverHost_Unobserve_Name:
      var params = reader.decodeStruct(FileSystemAccessObserverHost_Unobserve_Params);
      this.unobserve(params.token);
      return true;
    default:
      return false;
    }
  };

  FileSystemAccessObserverHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileSystemAccessObserverHost_Observe_Name:
      var params = reader.decodeStruct(FileSystemAccessObserverHost_Observe_Params);
      this.observe(params.token, params.isRecursive).then(function(response) {
        var responseParams =
            new FileSystemAccessObserverHost_Observe_ResponseParams();
        responseParams.result = response.result;
        responseParams.observerReceiver = response.observerReceiver;
        var builder = new codec.MessageV1Builder(
            kFileSystemAccessObserverHost_Observe_Name,
            codec.align(FileSystemAccessObserverHost_Observe_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileSystemAccessObserverHost_Observe_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFileSystemAccessObserverHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFileSystemAccessObserverHost_Observe_Name:
        if (message.expectsResponse())
          paramsClass = FileSystemAccessObserverHost_Observe_Params;
      break;
      case kFileSystemAccessObserverHost_Unobserve_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = FileSystemAccessObserverHost_Unobserve_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFileSystemAccessObserverHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFileSystemAccessObserverHost_Observe_Name:
        if (message.isResponse())
          paramsClass = FileSystemAccessObserverHost_Observe_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FileSystemAccessObserverHost = {
    name: 'blink.mojom.FileSystemAccessObserverHost',
    kVersion: 0,
    ptrClass: FileSystemAccessObserverHostPtr,
    proxyClass: FileSystemAccessObserverHostProxy,
    stubClass: FileSystemAccessObserverHostStub,
    validateRequest: validateFileSystemAccessObserverHostRequest,
    validateResponse: validateFileSystemAccessObserverHostResponse,
  };
  FileSystemAccessObserverHostStub.prototype.validator = validateFileSystemAccessObserverHostRequest;
  FileSystemAccessObserverHostProxy.prototype.validator = validateFileSystemAccessObserverHostResponse;
  exports.FileSystemAccessObserverHost = FileSystemAccessObserverHost;
  exports.FileSystemAccessObserverHostPtr = FileSystemAccessObserverHostPtr;
  exports.FileSystemAccessObserverHostAssociatedPtr = FileSystemAccessObserverHostAssociatedPtr;
})();