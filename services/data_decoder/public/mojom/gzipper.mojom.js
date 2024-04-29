// services/data_decoder/public/mojom/gzipper.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/data_decoder/public/mojom/gzipper.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('dataDecoder.mojom');
  var big_buffer$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/big_buffer.mojom', '../../../../mojo/public/mojom/base/big_buffer.mojom.js');
  }



  function Gzipper_Deflate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gzipper_Deflate_Params.prototype.initDefaults_ = function() {
    this.data = null;
  };
  Gzipper_Deflate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gzipper_Deflate_Params.validate = function(messageValidator, offset) {
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


    // validate Gzipper_Deflate_Params.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gzipper_Deflate_Params.encodedSize = codec.kStructHeaderSize + 16;

  Gzipper_Deflate_Params.decode = function(decoder) {
    var packed;
    var val = new Gzipper_Deflate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  Gzipper_Deflate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gzipper_Deflate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  function Gzipper_Deflate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gzipper_Deflate_ResponseParams.prototype.initDefaults_ = function() {
    this.deflatedData = null;
  };
  Gzipper_Deflate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gzipper_Deflate_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Gzipper_Deflate_ResponseParams.deflatedData
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gzipper_Deflate_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Gzipper_Deflate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Gzipper_Deflate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.deflatedData =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  Gzipper_Deflate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gzipper_Deflate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.deflatedData);
  };
  function Gzipper_Inflate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gzipper_Inflate_Params.prototype.initDefaults_ = function() {
    this.data = null;
    this.maxUncompressedSize = 0;
  };
  Gzipper_Inflate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gzipper_Inflate_Params.validate = function(messageValidator, offset) {
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


    // validate Gzipper_Inflate_Params.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Gzipper_Inflate_Params.encodedSize = codec.kStructHeaderSize + 24;

  Gzipper_Inflate_Params.decode = function(decoder) {
    var packed;
    var val = new Gzipper_Inflate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    val.maxUncompressedSize =
        decoder.decodeStruct(codec.Uint64);
    return val;
  };

  Gzipper_Inflate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gzipper_Inflate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
    encoder.encodeStruct(codec.Uint64, val.maxUncompressedSize);
  };
  function Gzipper_Inflate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gzipper_Inflate_ResponseParams.prototype.initDefaults_ = function() {
    this.inflatedData = null;
  };
  Gzipper_Inflate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gzipper_Inflate_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Gzipper_Inflate_ResponseParams.inflatedData
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gzipper_Inflate_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Gzipper_Inflate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Gzipper_Inflate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.inflatedData =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  Gzipper_Inflate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gzipper_Inflate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.inflatedData);
  };
  function Gzipper_Compress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gzipper_Compress_Params.prototype.initDefaults_ = function() {
    this.data = null;
  };
  Gzipper_Compress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gzipper_Compress_Params.validate = function(messageValidator, offset) {
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


    // validate Gzipper_Compress_Params.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gzipper_Compress_Params.encodedSize = codec.kStructHeaderSize + 16;

  Gzipper_Compress_Params.decode = function(decoder) {
    var packed;
    var val = new Gzipper_Compress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  Gzipper_Compress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gzipper_Compress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  function Gzipper_Compress_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gzipper_Compress_ResponseParams.prototype.initDefaults_ = function() {
    this.compressedData = null;
  };
  Gzipper_Compress_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gzipper_Compress_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Gzipper_Compress_ResponseParams.compressedData
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gzipper_Compress_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Gzipper_Compress_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Gzipper_Compress_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.compressedData =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  Gzipper_Compress_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gzipper_Compress_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.compressedData);
  };
  function Gzipper_Uncompress_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gzipper_Uncompress_Params.prototype.initDefaults_ = function() {
    this.compressedData = null;
  };
  Gzipper_Uncompress_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gzipper_Uncompress_Params.validate = function(messageValidator, offset) {
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


    // validate Gzipper_Uncompress_Params.compressedData
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gzipper_Uncompress_Params.encodedSize = codec.kStructHeaderSize + 16;

  Gzipper_Uncompress_Params.decode = function(decoder) {
    var packed;
    var val = new Gzipper_Uncompress_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.compressedData =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  Gzipper_Uncompress_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gzipper_Uncompress_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.compressedData);
  };
  function Gzipper_Uncompress_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Gzipper_Uncompress_ResponseParams.prototype.initDefaults_ = function() {
    this.data = null;
  };
  Gzipper_Uncompress_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Gzipper_Uncompress_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Gzipper_Uncompress_ResponseParams.data
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, big_buffer$.BigBuffer, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Gzipper_Uncompress_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  Gzipper_Uncompress_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Gzipper_Uncompress_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeStruct(big_buffer$.BigBuffer);
    return val;
  };

  Gzipper_Uncompress_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Gzipper_Uncompress_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(big_buffer$.BigBuffer, val.data);
  };
  var kGzipper_Deflate_Name = 1954801729;
  var kGzipper_Inflate_Name = 2120855608;
  var kGzipper_Compress_Name = 1358436849;
  var kGzipper_Uncompress_Name = 1255055039;

  function GzipperPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Gzipper,
                                                   handleOrPtrInfo);
  }

  function GzipperAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Gzipper, associatedInterfacePtrInfo);
  }

  GzipperAssociatedPtr.prototype =
      Object.create(GzipperPtr.prototype);
  GzipperAssociatedPtr.prototype.constructor =
      GzipperAssociatedPtr;

  function GzipperProxy(receiver) {
    this.receiver_ = receiver;
  }
  GzipperPtr.prototype.deflate = function() {
    return GzipperProxy.prototype.deflate
        .apply(this.ptr.getProxy(), arguments);
  };

  GzipperProxy.prototype.deflate = function(data) {
    var params_ = new Gzipper_Deflate_Params();
    params_.data = data;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGzipper_Deflate_Name,
          codec.align(Gzipper_Deflate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Gzipper_Deflate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Gzipper_Deflate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GzipperPtr.prototype.inflate = function() {
    return GzipperProxy.prototype.inflate
        .apply(this.ptr.getProxy(), arguments);
  };

  GzipperProxy.prototype.inflate = function(data, maxUncompressedSize) {
    var params_ = new Gzipper_Inflate_Params();
    params_.data = data;
    params_.maxUncompressedSize = maxUncompressedSize;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGzipper_Inflate_Name,
          codec.align(Gzipper_Inflate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Gzipper_Inflate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Gzipper_Inflate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GzipperPtr.prototype.compress = function() {
    return GzipperProxy.prototype.compress
        .apply(this.ptr.getProxy(), arguments);
  };

  GzipperProxy.prototype.compress = function(data) {
    var params_ = new Gzipper_Compress_Params();
    params_.data = data;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGzipper_Compress_Name,
          codec.align(Gzipper_Compress_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Gzipper_Compress_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Gzipper_Compress_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  GzipperPtr.prototype.uncompress = function() {
    return GzipperProxy.prototype.uncompress
        .apply(this.ptr.getProxy(), arguments);
  };

  GzipperProxy.prototype.uncompress = function(compressedData) {
    var params_ = new Gzipper_Uncompress_Params();
    params_.compressedData = compressedData;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kGzipper_Uncompress_Name,
          codec.align(Gzipper_Uncompress_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Gzipper_Uncompress_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Gzipper_Uncompress_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function GzipperStub(delegate) {
    this.delegate_ = delegate;
  }
  GzipperStub.prototype.deflate = function(data) {
    return this.delegate_ && this.delegate_.deflate && this.delegate_.deflate(data);
  }
  GzipperStub.prototype.inflate = function(data, maxUncompressedSize) {
    return this.delegate_ && this.delegate_.inflate && this.delegate_.inflate(data, maxUncompressedSize);
  }
  GzipperStub.prototype.compress = function(data) {
    return this.delegate_ && this.delegate_.compress && this.delegate_.compress(data);
  }
  GzipperStub.prototype.uncompress = function(compressedData) {
    return this.delegate_ && this.delegate_.uncompress && this.delegate_.uncompress(compressedData);
  }

  GzipperStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  GzipperStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGzipper_Deflate_Name:
      var params = reader.decodeStruct(Gzipper_Deflate_Params);
      this.deflate(params.data).then(function(response) {
        var responseParams =
            new Gzipper_Deflate_ResponseParams();
        responseParams.deflatedData = response.deflatedData;
        var builder = new codec.MessageV1Builder(
            kGzipper_Deflate_Name,
            codec.align(Gzipper_Deflate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Gzipper_Deflate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGzipper_Inflate_Name:
      var params = reader.decodeStruct(Gzipper_Inflate_Params);
      this.inflate(params.data, params.maxUncompressedSize).then(function(response) {
        var responseParams =
            new Gzipper_Inflate_ResponseParams();
        responseParams.inflatedData = response.inflatedData;
        var builder = new codec.MessageV1Builder(
            kGzipper_Inflate_Name,
            codec.align(Gzipper_Inflate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Gzipper_Inflate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGzipper_Compress_Name:
      var params = reader.decodeStruct(Gzipper_Compress_Params);
      this.compress(params.data).then(function(response) {
        var responseParams =
            new Gzipper_Compress_ResponseParams();
        responseParams.compressedData = response.compressedData;
        var builder = new codec.MessageV1Builder(
            kGzipper_Compress_Name,
            codec.align(Gzipper_Compress_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Gzipper_Compress_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kGzipper_Uncompress_Name:
      var params = reader.decodeStruct(Gzipper_Uncompress_Params);
      this.uncompress(params.compressedData).then(function(response) {
        var responseParams =
            new Gzipper_Uncompress_ResponseParams();
        responseParams.data = response.data;
        var builder = new codec.MessageV1Builder(
            kGzipper_Uncompress_Name,
            codec.align(Gzipper_Uncompress_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Gzipper_Uncompress_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateGzipperRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kGzipper_Deflate_Name:
        if (message.expectsResponse())
          paramsClass = Gzipper_Deflate_Params;
      break;
      case kGzipper_Inflate_Name:
        if (message.expectsResponse())
          paramsClass = Gzipper_Inflate_Params;
      break;
      case kGzipper_Compress_Name:
        if (message.expectsResponse())
          paramsClass = Gzipper_Compress_Params;
      break;
      case kGzipper_Uncompress_Name:
        if (message.expectsResponse())
          paramsClass = Gzipper_Uncompress_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateGzipperResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kGzipper_Deflate_Name:
        if (message.isResponse())
          paramsClass = Gzipper_Deflate_ResponseParams;
        break;
      case kGzipper_Inflate_Name:
        if (message.isResponse())
          paramsClass = Gzipper_Inflate_ResponseParams;
        break;
      case kGzipper_Compress_Name:
        if (message.isResponse())
          paramsClass = Gzipper_Compress_ResponseParams;
        break;
      case kGzipper_Uncompress_Name:
        if (message.isResponse())
          paramsClass = Gzipper_Uncompress_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Gzipper = {
    name: 'data_decoder.mojom.Gzipper',
    kVersion: 0,
    ptrClass: GzipperPtr,
    proxyClass: GzipperProxy,
    stubClass: GzipperStub,
    validateRequest: validateGzipperRequest,
    validateResponse: validateGzipperResponse,
  };
  GzipperStub.prototype.validator = validateGzipperRequest;
  GzipperProxy.prototype.validator = validateGzipperResponse;
  exports.Gzipper = Gzipper;
  exports.GzipperPtr = GzipperPtr;
  exports.GzipperAssociatedPtr = GzipperAssociatedPtr;
})();