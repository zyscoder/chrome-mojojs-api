// components/services/patch/public/mojom/file_patcher.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/services/patch/public/mojom/file_patcher.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('patch.mojom');
  var file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file.mojom', '../../../../../mojo/public/mojom/base/file.mojom.js');
  }
  var read_only_file$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/read_only_file.mojom', '../../../../../mojo/public/mojom/base/read_only_file.mojom.js');
  }
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../../../sandbox/policy/mojom/sandbox.mojom.js');
  }



  function FilePatcher_PatchFileBsdiff_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilePatcher_PatchFileBsdiff_Params.prototype.initDefaults_ = function() {
    this.inputFile = null;
    this.patchFile = null;
    this.outputFile = null;
  };
  FilePatcher_PatchFileBsdiff_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilePatcher_PatchFileBsdiff_Params.validate = function(messageValidator, offset) {
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


    // validate FilePatcher_PatchFileBsdiff_Params.inputFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, read_only_file$.ReadOnlyFile, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilePatcher_PatchFileBsdiff_Params.patchFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, read_only_file$.ReadOnlyFile, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilePatcher_PatchFileBsdiff_Params.outputFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, file$.File, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FilePatcher_PatchFileBsdiff_Params.encodedSize = codec.kStructHeaderSize + 24;

  FilePatcher_PatchFileBsdiff_Params.decode = function(decoder) {
    var packed;
    var val = new FilePatcher_PatchFileBsdiff_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.inputFile =
        decoder.decodeStructPointer(read_only_file$.ReadOnlyFile);
    val.patchFile =
        decoder.decodeStructPointer(read_only_file$.ReadOnlyFile);
    val.outputFile =
        decoder.decodeStructPointer(file$.File);
    return val;
  };

  FilePatcher_PatchFileBsdiff_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilePatcher_PatchFileBsdiff_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(read_only_file$.ReadOnlyFile, val.inputFile);
    encoder.encodeStructPointer(read_only_file$.ReadOnlyFile, val.patchFile);
    encoder.encodeStructPointer(file$.File, val.outputFile);
  };
  function FilePatcher_PatchFileBsdiff_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilePatcher_PatchFileBsdiff_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  FilePatcher_PatchFileBsdiff_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilePatcher_PatchFileBsdiff_ResponseParams.validate = function(messageValidator, offset) {
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

  FilePatcher_PatchFileBsdiff_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FilePatcher_PatchFileBsdiff_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FilePatcher_PatchFileBsdiff_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FilePatcher_PatchFileBsdiff_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilePatcher_PatchFileBsdiff_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FilePatcher_PatchFileCourgette_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilePatcher_PatchFileCourgette_Params.prototype.initDefaults_ = function() {
    this.inputFile = null;
    this.patchFile = null;
    this.outputFile = null;
  };
  FilePatcher_PatchFileCourgette_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilePatcher_PatchFileCourgette_Params.validate = function(messageValidator, offset) {
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


    // validate FilePatcher_PatchFileCourgette_Params.inputFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, read_only_file$.ReadOnlyFile, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilePatcher_PatchFileCourgette_Params.patchFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, read_only_file$.ReadOnlyFile, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilePatcher_PatchFileCourgette_Params.outputFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, file$.File, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FilePatcher_PatchFileCourgette_Params.encodedSize = codec.kStructHeaderSize + 24;

  FilePatcher_PatchFileCourgette_Params.decode = function(decoder) {
    var packed;
    var val = new FilePatcher_PatchFileCourgette_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.inputFile =
        decoder.decodeStructPointer(read_only_file$.ReadOnlyFile);
    val.patchFile =
        decoder.decodeStructPointer(read_only_file$.ReadOnlyFile);
    val.outputFile =
        decoder.decodeStructPointer(file$.File);
    return val;
  };

  FilePatcher_PatchFileCourgette_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilePatcher_PatchFileCourgette_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(read_only_file$.ReadOnlyFile, val.inputFile);
    encoder.encodeStructPointer(read_only_file$.ReadOnlyFile, val.patchFile);
    encoder.encodeStructPointer(file$.File, val.outputFile);
  };
  function FilePatcher_PatchFileCourgette_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilePatcher_PatchFileCourgette_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  FilePatcher_PatchFileCourgette_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilePatcher_PatchFileCourgette_ResponseParams.validate = function(messageValidator, offset) {
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

  FilePatcher_PatchFileCourgette_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FilePatcher_PatchFileCourgette_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FilePatcher_PatchFileCourgette_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FilePatcher_PatchFileCourgette_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilePatcher_PatchFileCourgette_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FilePatcher_PatchFilePuffPatch_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilePatcher_PatchFilePuffPatch_Params.prototype.initDefaults_ = function() {
    this.inputFile = null;
    this.patchFile = null;
    this.outputFile = null;
  };
  FilePatcher_PatchFilePuffPatch_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilePatcher_PatchFilePuffPatch_Params.validate = function(messageValidator, offset) {
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


    // validate FilePatcher_PatchFilePuffPatch_Params.inputFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, read_only_file$.ReadOnlyFile, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilePatcher_PatchFilePuffPatch_Params.patchFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, read_only_file$.ReadOnlyFile, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FilePatcher_PatchFilePuffPatch_Params.outputFile
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, file$.File, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FilePatcher_PatchFilePuffPatch_Params.encodedSize = codec.kStructHeaderSize + 24;

  FilePatcher_PatchFilePuffPatch_Params.decode = function(decoder) {
    var packed;
    var val = new FilePatcher_PatchFilePuffPatch_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.inputFile =
        decoder.decodeStructPointer(read_only_file$.ReadOnlyFile);
    val.patchFile =
        decoder.decodeStructPointer(read_only_file$.ReadOnlyFile);
    val.outputFile =
        decoder.decodeStructPointer(file$.File);
    return val;
  };

  FilePatcher_PatchFilePuffPatch_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilePatcher_PatchFilePuffPatch_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(read_only_file$.ReadOnlyFile, val.inputFile);
    encoder.encodeStructPointer(read_only_file$.ReadOnlyFile, val.patchFile);
    encoder.encodeStructPointer(file$.File, val.outputFile);
  };
  function FilePatcher_PatchFilePuffPatch_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FilePatcher_PatchFilePuffPatch_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  FilePatcher_PatchFilePuffPatch_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FilePatcher_PatchFilePuffPatch_ResponseParams.validate = function(messageValidator, offset) {
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

  FilePatcher_PatchFilePuffPatch_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FilePatcher_PatchFilePuffPatch_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FilePatcher_PatchFilePuffPatch_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FilePatcher_PatchFilePuffPatch_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FilePatcher_PatchFilePuffPatch_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kFilePatcher_PatchFileBsdiff_Name = 196762646;
  var kFilePatcher_PatchFileCourgette_Name = 538373707;
  var kFilePatcher_PatchFilePuffPatch_Name = 1207880371;

  function FilePatcherPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FilePatcher,
                                                   handleOrPtrInfo);
  }

  function FilePatcherAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FilePatcher, associatedInterfacePtrInfo);
  }

  FilePatcherAssociatedPtr.prototype =
      Object.create(FilePatcherPtr.prototype);
  FilePatcherAssociatedPtr.prototype.constructor =
      FilePatcherAssociatedPtr;

  function FilePatcherProxy(receiver) {
    this.receiver_ = receiver;
  }
  FilePatcherPtr.prototype.patchFileBsdiff = function() {
    return FilePatcherProxy.prototype.patchFileBsdiff
        .apply(this.ptr.getProxy(), arguments);
  };

  FilePatcherProxy.prototype.patchFileBsdiff = function(inputFile, patchFile, outputFile) {
    var params_ = new FilePatcher_PatchFileBsdiff_Params();
    params_.inputFile = inputFile;
    params_.patchFile = patchFile;
    params_.outputFile = outputFile;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFilePatcher_PatchFileBsdiff_Name,
          codec.align(FilePatcher_PatchFileBsdiff_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FilePatcher_PatchFileBsdiff_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FilePatcher_PatchFileBsdiff_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FilePatcherPtr.prototype.patchFileCourgette = function() {
    return FilePatcherProxy.prototype.patchFileCourgette
        .apply(this.ptr.getProxy(), arguments);
  };

  FilePatcherProxy.prototype.patchFileCourgette = function(inputFile, patchFile, outputFile) {
    var params_ = new FilePatcher_PatchFileCourgette_Params();
    params_.inputFile = inputFile;
    params_.patchFile = patchFile;
    params_.outputFile = outputFile;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFilePatcher_PatchFileCourgette_Name,
          codec.align(FilePatcher_PatchFileCourgette_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FilePatcher_PatchFileCourgette_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FilePatcher_PatchFileCourgette_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FilePatcherPtr.prototype.patchFilePuffPatch = function() {
    return FilePatcherProxy.prototype.patchFilePuffPatch
        .apply(this.ptr.getProxy(), arguments);
  };

  FilePatcherProxy.prototype.patchFilePuffPatch = function(inputFile, patchFile, outputFile) {
    var params_ = new FilePatcher_PatchFilePuffPatch_Params();
    params_.inputFile = inputFile;
    params_.patchFile = patchFile;
    params_.outputFile = outputFile;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFilePatcher_PatchFilePuffPatch_Name,
          codec.align(FilePatcher_PatchFilePuffPatch_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FilePatcher_PatchFilePuffPatch_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FilePatcher_PatchFilePuffPatch_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FilePatcherStub(delegate) {
    this.delegate_ = delegate;
  }
  FilePatcherStub.prototype.patchFileBsdiff = function(inputFile, patchFile, outputFile) {
    return this.delegate_ && this.delegate_.patchFileBsdiff && this.delegate_.patchFileBsdiff(inputFile, patchFile, outputFile);
  }
  FilePatcherStub.prototype.patchFileCourgette = function(inputFile, patchFile, outputFile) {
    return this.delegate_ && this.delegate_.patchFileCourgette && this.delegate_.patchFileCourgette(inputFile, patchFile, outputFile);
  }
  FilePatcherStub.prototype.patchFilePuffPatch = function(inputFile, patchFile, outputFile) {
    return this.delegate_ && this.delegate_.patchFilePuffPatch && this.delegate_.patchFilePuffPatch(inputFile, patchFile, outputFile);
  }

  FilePatcherStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FilePatcherStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFilePatcher_PatchFileBsdiff_Name:
      var params = reader.decodeStruct(FilePatcher_PatchFileBsdiff_Params);
      this.patchFileBsdiff(params.inputFile, params.patchFile, params.outputFile).then(function(response) {
        var responseParams =
            new FilePatcher_PatchFileBsdiff_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kFilePatcher_PatchFileBsdiff_Name,
            codec.align(FilePatcher_PatchFileBsdiff_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FilePatcher_PatchFileBsdiff_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFilePatcher_PatchFileCourgette_Name:
      var params = reader.decodeStruct(FilePatcher_PatchFileCourgette_Params);
      this.patchFileCourgette(params.inputFile, params.patchFile, params.outputFile).then(function(response) {
        var responseParams =
            new FilePatcher_PatchFileCourgette_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kFilePatcher_PatchFileCourgette_Name,
            codec.align(FilePatcher_PatchFileCourgette_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FilePatcher_PatchFileCourgette_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFilePatcher_PatchFilePuffPatch_Name:
      var params = reader.decodeStruct(FilePatcher_PatchFilePuffPatch_Params);
      this.patchFilePuffPatch(params.inputFile, params.patchFile, params.outputFile).then(function(response) {
        var responseParams =
            new FilePatcher_PatchFilePuffPatch_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kFilePatcher_PatchFilePuffPatch_Name,
            codec.align(FilePatcher_PatchFilePuffPatch_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FilePatcher_PatchFilePuffPatch_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFilePatcherRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFilePatcher_PatchFileBsdiff_Name:
        if (message.expectsResponse())
          paramsClass = FilePatcher_PatchFileBsdiff_Params;
      break;
      case kFilePatcher_PatchFileCourgette_Name:
        if (message.expectsResponse())
          paramsClass = FilePatcher_PatchFileCourgette_Params;
      break;
      case kFilePatcher_PatchFilePuffPatch_Name:
        if (message.expectsResponse())
          paramsClass = FilePatcher_PatchFilePuffPatch_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFilePatcherResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFilePatcher_PatchFileBsdiff_Name:
        if (message.isResponse())
          paramsClass = FilePatcher_PatchFileBsdiff_ResponseParams;
        break;
      case kFilePatcher_PatchFileCourgette_Name:
        if (message.isResponse())
          paramsClass = FilePatcher_PatchFileCourgette_ResponseParams;
        break;
      case kFilePatcher_PatchFilePuffPatch_Name:
        if (message.isResponse())
          paramsClass = FilePatcher_PatchFilePuffPatch_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FilePatcher = {
    name: 'patch.mojom.FilePatcher',
    kVersion: 0,
    ptrClass: FilePatcherPtr,
    proxyClass: FilePatcherProxy,
    stubClass: FilePatcherStub,
    validateRequest: validateFilePatcherRequest,
    validateResponse: validateFilePatcherResponse,
  };
  FilePatcherStub.prototype.validator = validateFilePatcherRequest;
  FilePatcherProxy.prototype.validator = validateFilePatcherResponse;
  exports.FilePatcher = FilePatcher;
  exports.FilePatcherPtr = FilePatcherPtr;
  exports.FilePatcherAssociatedPtr = FilePatcherAssociatedPtr;
})();