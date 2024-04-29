// media/mojo/mojom/audio_encoder.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/audio_encoder.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var media_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/media_types.mojom', 'media_types.mojom.js');
  }
  var audio_parameters$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/audio_parameters.mojom', 'audio_parameters.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }


  var AacOutputFormat = {};
  AacOutputFormat.kAAC = 0;
  AacOutputFormat.kADTS = 1;
  AacOutputFormat.MIN_VALUE = 0;
  AacOutputFormat.MAX_VALUE = 1;

  AacOutputFormat.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  AacOutputFormat.toKnownEnumValue = function(value) {
    return value;
  };

  AacOutputFormat.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function AacAudioEncoderConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AacAudioEncoderConfig.prototype.initDefaults_ = function() {
    this.format = 0;
  };
  AacAudioEncoderConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AacAudioEncoderConfig.validate = function(messageValidator, offset) {
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


    // validate AacAudioEncoderConfig.format
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, AacOutputFormat);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AacAudioEncoderConfig.encodedSize = codec.kStructHeaderSize + 8;

  AacAudioEncoderConfig.decode = function(decoder) {
    var packed;
    var val = new AacAudioEncoderConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.format =
        decoder.decodeStruct(new codec.Enum(AacOutputFormat));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AacAudioEncoderConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AacAudioEncoderConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.format);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioEncoderConfig(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioEncoderConfig.prototype.initDefaults_ = function() {
    this.codec = 0;
    this.channelCount = 0;
    this.sampleRate = 0;
    this.bitrate = 0;
    this.aac = null;
  };
  AudioEncoderConfig.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioEncoderConfig.validate = function(messageValidator, offset) {
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


    // validate AudioEncoderConfig.codec
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.AudioCodec);
    if (err !== validator.validationError.NONE)
        return err;





    // validate AudioEncoderConfig.aac
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, AacAudioEncoderConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioEncoderConfig.encodedSize = codec.kStructHeaderSize + 24;

  AudioEncoderConfig.decode = function(decoder) {
    var packed;
    var val = new AudioEncoderConfig();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.codec =
        decoder.decodeStruct(new codec.Enum(media_types$.AudioCodec));
    val.channelCount =
        decoder.decodeStruct(codec.Uint8);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.sampleRate =
        decoder.decodeStruct(codec.Uint32);
    val.bitrate =
        decoder.decodeStruct(codec.Uint32);
    val.aac =
        decoder.decodeStructPointer(AacAudioEncoderConfig);
    return val;
  };

  AudioEncoderConfig.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioEncoderConfig.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.codec);
    encoder.encodeStruct(codec.Uint8, val.channelCount);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Uint32, val.sampleRate);
    encoder.encodeStruct(codec.Uint32, val.bitrate);
    encoder.encodeStructPointer(AacAudioEncoderConfig, val.aac);
  };
  function EncodedAudioBuffer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EncodedAudioBuffer.prototype.initDefaults_ = function() {
    this.params = null;
    this.timestamp = null;
    this.duration = null;
    this.data = null;
  };
  EncodedAudioBuffer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EncodedAudioBuffer.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate EncodedAudioBuffer.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, audio_parameters$.AudioParameters, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate EncodedAudioBuffer.timestamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate EncodedAudioBuffer.duration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate EncodedAudioBuffer.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  EncodedAudioBuffer.encodedSize = codec.kStructHeaderSize + 32;

  EncodedAudioBuffer.decode = function(decoder) {
    var packed;
    var val = new EncodedAudioBuffer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(audio_parameters$.AudioParameters);
    val.timestamp =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.duration =
        decoder.decodeStructPointer(time$.TimeDelta);
    val.data =
        decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  EncodedAudioBuffer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EncodedAudioBuffer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(audio_parameters$.AudioParameters, val.params);
    encoder.encodeStructPointer(time$.TimeDelta, val.timestamp);
    encoder.encodeStructPointer(time$.TimeDelta, val.duration);
    encoder.encodeArrayPointer(codec.Uint8, val.data);
  };
  function AudioEncoder_Initialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioEncoder_Initialize_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
    this.config = null;
  };
  AudioEncoder_Initialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioEncoder_Initialize_Params.validate = function(messageValidator, offset) {
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


    // validate AudioEncoder_Initialize_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioEncoder_Initialize_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, AudioEncoderConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioEncoder_Initialize_Params.encodedSize = codec.kStructHeaderSize + 16;

  AudioEncoder_Initialize_Params.decode = function(decoder) {
    var packed;
    var val = new AudioEncoder_Initialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    val.config =
        decoder.decodeStructPointer(AudioEncoderConfig);
    return val;
  };

  AudioEncoder_Initialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioEncoder_Initialize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
    encoder.encodeStructPointer(AudioEncoderConfig, val.config);
  };
  function AudioEncoder_Initialize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioEncoder_Initialize_ResponseParams.prototype.initDefaults_ = function() {
    this.status = null;
  };
  AudioEncoder_Initialize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioEncoder_Initialize_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AudioEncoder_Initialize_ResponseParams.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.EncoderStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioEncoder_Initialize_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AudioEncoder_Initialize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioEncoder_Initialize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStructPointer(media_types$.EncoderStatus);
    return val;
  };

  AudioEncoder_Initialize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioEncoder_Initialize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.EncoderStatus, val.status);
  };
  function AudioEncoder_Encode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioEncoder_Encode_Params.prototype.initDefaults_ = function() {
    this.buffer = null;
  };
  AudioEncoder_Encode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioEncoder_Encode_Params.validate = function(messageValidator, offset) {
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


    // validate AudioEncoder_Encode_Params.buffer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.AudioBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioEncoder_Encode_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioEncoder_Encode_Params.decode = function(decoder) {
    var packed;
    var val = new AudioEncoder_Encode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer =
        decoder.decodeStructPointer(media_types$.AudioBuffer);
    return val;
  };

  AudioEncoder_Encode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioEncoder_Encode_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.AudioBuffer, val.buffer);
  };
  function AudioEncoder_Encode_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioEncoder_Encode_ResponseParams.prototype.initDefaults_ = function() {
    this.status = null;
  };
  AudioEncoder_Encode_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioEncoder_Encode_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AudioEncoder_Encode_ResponseParams.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.EncoderStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioEncoder_Encode_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AudioEncoder_Encode_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioEncoder_Encode_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStructPointer(media_types$.EncoderStatus);
    return val;
  };

  AudioEncoder_Encode_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioEncoder_Encode_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.EncoderStatus, val.status);
  };
  function AudioEncoder_Flush_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioEncoder_Flush_Params.prototype.initDefaults_ = function() {
  };
  AudioEncoder_Flush_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioEncoder_Flush_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioEncoder_Flush_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioEncoder_Flush_Params.decode = function(decoder) {
    var packed;
    var val = new AudioEncoder_Flush_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioEncoder_Flush_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioEncoder_Flush_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioEncoder_Flush_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioEncoder_Flush_ResponseParams.prototype.initDefaults_ = function() {
    this.status = null;
  };
  AudioEncoder_Flush_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioEncoder_Flush_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AudioEncoder_Flush_ResponseParams.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.EncoderStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioEncoder_Flush_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AudioEncoder_Flush_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioEncoder_Flush_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStructPointer(media_types$.EncoderStatus);
    return val;
  };

  AudioEncoder_Flush_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioEncoder_Flush_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.EncoderStatus, val.status);
  };
  function AudioEncoderClient_OnEncodedBufferReady_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioEncoderClient_OnEncodedBufferReady_Params.prototype.initDefaults_ = function() {
    this.buffer = null;
    this.description = null;
  };
  AudioEncoderClient_OnEncodedBufferReady_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioEncoderClient_OnEncodedBufferReady_Params.validate = function(messageValidator, offset) {
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


    // validate AudioEncoderClient_OnEncodedBufferReady_Params.buffer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, EncodedAudioBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioEncoderClient_OnEncodedBufferReady_Params.description
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioEncoderClient_OnEncodedBufferReady_Params.encodedSize = codec.kStructHeaderSize + 16;

  AudioEncoderClient_OnEncodedBufferReady_Params.decode = function(decoder) {
    var packed;
    var val = new AudioEncoderClient_OnEncodedBufferReady_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer =
        decoder.decodeStructPointer(EncodedAudioBuffer);
    val.description =
        decoder.decodeArrayPointer(codec.Uint8);
    return val;
  };

  AudioEncoderClient_OnEncodedBufferReady_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioEncoderClient_OnEncodedBufferReady_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(EncodedAudioBuffer, val.buffer);
    encoder.encodeArrayPointer(codec.Uint8, val.description);
  };
  var kAudioEncoder_Initialize_Name = 903873338;
  var kAudioEncoder_Encode_Name = 737230485;
  var kAudioEncoder_Flush_Name = 941967890;

  function AudioEncoderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioEncoder,
                                                   handleOrPtrInfo);
  }

  function AudioEncoderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioEncoder, associatedInterfacePtrInfo);
  }

  AudioEncoderAssociatedPtr.prototype =
      Object.create(AudioEncoderPtr.prototype);
  AudioEncoderAssociatedPtr.prototype.constructor =
      AudioEncoderAssociatedPtr;

  function AudioEncoderProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioEncoderPtr.prototype.initialize = function() {
    return AudioEncoderProxy.prototype.initialize
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioEncoderProxy.prototype.initialize = function(client, config) {
    var params_ = new AudioEncoder_Initialize_Params();
    params_.client = client;
    params_.config = config;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV2Builder(
          kAudioEncoder_Initialize_Name,
          codec.align(AudioEncoder_Initialize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.setPayload(AudioEncoder_Initialize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioEncoder_Initialize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AudioEncoderPtr.prototype.encode = function() {
    return AudioEncoderProxy.prototype.encode
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioEncoderProxy.prototype.encode = function(buffer) {
    var params_ = new AudioEncoder_Encode_Params();
    params_.buffer = buffer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioEncoder_Encode_Name,
          codec.align(AudioEncoder_Encode_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioEncoder_Encode_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioEncoder_Encode_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AudioEncoderPtr.prototype.flush = function() {
    return AudioEncoderProxy.prototype.flush
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioEncoderProxy.prototype.flush = function() {
    var params_ = new AudioEncoder_Flush_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioEncoder_Flush_Name,
          codec.align(AudioEncoder_Flush_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioEncoder_Flush_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioEncoder_Flush_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AudioEncoderStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioEncoderStub.prototype.initialize = function(client, config) {
    return this.delegate_ && this.delegate_.initialize && this.delegate_.initialize(client, config);
  }
  AudioEncoderStub.prototype.encode = function(buffer) {
    return this.delegate_ && this.delegate_.encode && this.delegate_.encode(buffer);
  }
  AudioEncoderStub.prototype.flush = function() {
    return this.delegate_ && this.delegate_.flush && this.delegate_.flush();
  }

  AudioEncoderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  AudioEncoderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioEncoder_Initialize_Name:
      var params = reader.decodeStruct(AudioEncoder_Initialize_Params);
      this.initialize(params.client, params.config).then(function(response) {
        var responseParams =
            new AudioEncoder_Initialize_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV2Builder(
            kAudioEncoder_Initialize_Name,
            codec.align(AudioEncoder_Initialize_ResponseParams
                .encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.setPayload(AudioEncoder_Initialize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAudioEncoder_Encode_Name:
      var params = reader.decodeStruct(AudioEncoder_Encode_Params);
      this.encode(params.buffer).then(function(response) {
        var responseParams =
            new AudioEncoder_Encode_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kAudioEncoder_Encode_Name,
            codec.align(AudioEncoder_Encode_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioEncoder_Encode_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAudioEncoder_Flush_Name:
      var params = reader.decodeStruct(AudioEncoder_Flush_Params);
      this.flush().then(function(response) {
        var responseParams =
            new AudioEncoder_Flush_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kAudioEncoder_Flush_Name,
            codec.align(AudioEncoder_Flush_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioEncoder_Flush_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAudioEncoderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioEncoder_Initialize_Name:
        if (message.expectsResponse())
          paramsClass = AudioEncoder_Initialize_Params;
      break;
      case kAudioEncoder_Encode_Name:
        if (message.expectsResponse())
          paramsClass = AudioEncoder_Encode_Params;
      break;
      case kAudioEncoder_Flush_Name:
        if (message.expectsResponse())
          paramsClass = AudioEncoder_Flush_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioEncoderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAudioEncoder_Initialize_Name:
        if (message.isResponse())
          paramsClass = AudioEncoder_Initialize_ResponseParams;
        break;
      case kAudioEncoder_Encode_Name:
        if (message.isResponse())
          paramsClass = AudioEncoder_Encode_ResponseParams;
        break;
      case kAudioEncoder_Flush_Name:
        if (message.isResponse())
          paramsClass = AudioEncoder_Flush_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AudioEncoder = {
    name: 'media.mojom.AudioEncoder',
    kVersion: 0,
    ptrClass: AudioEncoderPtr,
    proxyClass: AudioEncoderProxy,
    stubClass: AudioEncoderStub,
    validateRequest: validateAudioEncoderRequest,
    validateResponse: validateAudioEncoderResponse,
  };
  AudioEncoderStub.prototype.validator = validateAudioEncoderRequest;
  AudioEncoderProxy.prototype.validator = validateAudioEncoderResponse;
  var kAudioEncoderClient_OnEncodedBufferReady_Name = 1453881188;

  function AudioEncoderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioEncoderClient,
                                                   handleOrPtrInfo);
  }

  function AudioEncoderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioEncoderClient, associatedInterfacePtrInfo);
  }

  AudioEncoderClientAssociatedPtr.prototype =
      Object.create(AudioEncoderClientPtr.prototype);
  AudioEncoderClientAssociatedPtr.prototype.constructor =
      AudioEncoderClientAssociatedPtr;

  function AudioEncoderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioEncoderClientPtr.prototype.onEncodedBufferReady = function() {
    return AudioEncoderClientProxy.prototype.onEncodedBufferReady
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioEncoderClientProxy.prototype.onEncodedBufferReady = function(buffer, description) {
    var params_ = new AudioEncoderClient_OnEncodedBufferReady_Params();
    params_.buffer = buffer;
    params_.description = description;
    var builder = new codec.MessageV0Builder(
        kAudioEncoderClient_OnEncodedBufferReady_Name,
        codec.align(AudioEncoderClient_OnEncodedBufferReady_Params.encodedSize));
    builder.encodeStruct(AudioEncoderClient_OnEncodedBufferReady_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioEncoderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioEncoderClientStub.prototype.onEncodedBufferReady = function(buffer, description) {
    return this.delegate_ && this.delegate_.onEncodedBufferReady && this.delegate_.onEncodedBufferReady(buffer, description);
  }

  AudioEncoderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioEncoderClient_OnEncodedBufferReady_Name:
      var params = reader.decodeStruct(AudioEncoderClient_OnEncodedBufferReady_Params);
      this.onEncodedBufferReady(params.buffer, params.description);
      return true;
    default:
      return false;
    }
  };

  AudioEncoderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioEncoderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioEncoderClient_OnEncodedBufferReady_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioEncoderClient_OnEncodedBufferReady_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioEncoderClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioEncoderClient = {
    name: 'media.mojom.AudioEncoderClient',
    kVersion: 0,
    ptrClass: AudioEncoderClientPtr,
    proxyClass: AudioEncoderClientProxy,
    stubClass: AudioEncoderClientStub,
    validateRequest: validateAudioEncoderClientRequest,
    validateResponse: null,
  };
  AudioEncoderClientStub.prototype.validator = validateAudioEncoderClientRequest;
  AudioEncoderClientProxy.prototype.validator = null;
  exports.AacOutputFormat = AacOutputFormat;
  exports.AacAudioEncoderConfig = AacAudioEncoderConfig;
  exports.AudioEncoderConfig = AudioEncoderConfig;
  exports.EncodedAudioBuffer = EncodedAudioBuffer;
  exports.AudioEncoder = AudioEncoder;
  exports.AudioEncoderPtr = AudioEncoderPtr;
  exports.AudioEncoderAssociatedPtr = AudioEncoderAssociatedPtr;
  exports.AudioEncoderClient = AudioEncoderClient;
  exports.AudioEncoderClientPtr = AudioEncoderClientPtr;
  exports.AudioEncoderClientAssociatedPtr = AudioEncoderClientAssociatedPtr;
})();