// services/video_capture/public/mojom/video_effects_manager.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/video_capture/public/mojom/video_effects_manager.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('videoCapture.mojom');
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }


  var SetConfigurationResult = {};
  SetConfigurationResult.kOk = 0;
  SetConfigurationResult.kError = 1;
  SetConfigurationResult.MIN_VALUE = 0;
  SetConfigurationResult.MAX_VALUE = 1;

  SetConfigurationResult.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  SetConfigurationResult.toKnownEnumValue = function(value) {
    return value;
  };

  SetConfigurationResult.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ImageEnhancement(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ImageEnhancement.prototype.initDefaults_ = function() {
    this.lighting = false;
  };
  ImageEnhancement.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ImageEnhancement.validate = function(messageValidator, offset) {
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

  ImageEnhancement.encodedSize = codec.kStructHeaderSize + 8;

  ImageEnhancement.decode = function(decoder) {
    var packed;
    var val = new ImageEnhancement();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.lighting = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ImageEnhancement.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ImageEnhancement.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.lighting & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Blur(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Blur.prototype.initDefaults_ = function() {
    this.kernel = 0;
    this.sigma = 0;
  };
  Blur.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Blur.validate = function(messageValidator, offset) {
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

  Blur.encodedSize = codec.kStructHeaderSize + 8;

  Blur.decode = function(decoder) {
    var packed;
    var val = new Blur();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.kernel =
        decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    val.sigma =
        decoder.decodeStruct(codec.Float);
    return val;
  };

  Blur.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Blur.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.kernel);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Float, val.sigma);
  };
  function Masking(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Masking.prototype.initDefaults_ = function() {
    this.backgroundBlur = null;
  };
  Masking.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Masking.validate = function(messageValidator, offset) {
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


    // validate Masking.backgroundBlur
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Blur, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Masking.encodedSize = codec.kStructHeaderSize + 8;

  Masking.decode = function(decoder) {
    var packed;
    var val = new Masking();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.backgroundBlur =
        decoder.decodeStructPointer(Blur);
    return val;
  };

  Masking.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Masking.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Blur, val.backgroundBlur);
  };
  function Framing(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Framing.prototype.initDefaults_ = function() {
    this.paddingRatios = null;
  };
  Framing.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Framing.validate = function(messageValidator, offset) {
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


    // validate Framing.paddingRatios
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.InsetsF, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Framing.encodedSize = codec.kStructHeaderSize + 8;

  Framing.decode = function(decoder) {
    var packed;
    var val = new Framing();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.paddingRatios =
        decoder.decodeStructPointer(geometry$.InsetsF);
    return val;
  };

  Framing.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Framing.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.InsetsF, val.paddingRatios);
  };
  function VideoEffectsConfiguration(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEffectsConfiguration.prototype.initDefaults_ = function() {
    this.imageEnhancement = null;
    this.masking = null;
    this.framing = null;
  };
  VideoEffectsConfiguration.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEffectsConfiguration.validate = function(messageValidator, offset) {
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


    // validate VideoEffectsConfiguration.imageEnhancement
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, ImageEnhancement, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoEffectsConfiguration.masking
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, Masking, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VideoEffectsConfiguration.framing
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, Framing, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEffectsConfiguration.encodedSize = codec.kStructHeaderSize + 24;

  VideoEffectsConfiguration.decode = function(decoder) {
    var packed;
    var val = new VideoEffectsConfiguration();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.imageEnhancement =
        decoder.decodeStructPointer(ImageEnhancement);
    val.masking =
        decoder.decodeStructPointer(Masking);
    val.framing =
        decoder.decodeStructPointer(Framing);
    return val;
  };

  VideoEffectsConfiguration.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEffectsConfiguration.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(ImageEnhancement, val.imageEnhancement);
    encoder.encodeStructPointer(Masking, val.masking);
    encoder.encodeStructPointer(Framing, val.framing);
  };
  function VideoEffectsConfigurationObserver_OnConfigurationChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.prototype.initDefaults_ = function() {
    this.configuration = null;
  };
  VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.validate = function(messageValidator, offset) {
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


    // validate VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.configuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VideoEffectsConfiguration, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEffectsConfigurationObserver_OnConfigurationChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.configuration =
        decoder.decodeStructPointer(VideoEffectsConfiguration);
    return val;
  };

  VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VideoEffectsConfiguration, val.configuration);
  };
  function VideoEffectsManager_GetConfiguration_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEffectsManager_GetConfiguration_Params.prototype.initDefaults_ = function() {
  };
  VideoEffectsManager_GetConfiguration_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEffectsManager_GetConfiguration_Params.validate = function(messageValidator, offset) {
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

  VideoEffectsManager_GetConfiguration_Params.encodedSize = codec.kStructHeaderSize + 0;

  VideoEffectsManager_GetConfiguration_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEffectsManager_GetConfiguration_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VideoEffectsManager_GetConfiguration_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEffectsManager_GetConfiguration_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VideoEffectsManager_GetConfiguration_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEffectsManager_GetConfiguration_ResponseParams.prototype.initDefaults_ = function() {
    this.configuration = null;
  };
  VideoEffectsManager_GetConfiguration_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEffectsManager_GetConfiguration_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VideoEffectsManager_GetConfiguration_ResponseParams.configuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VideoEffectsConfiguration, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEffectsManager_GetConfiguration_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VideoEffectsManager_GetConfiguration_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VideoEffectsManager_GetConfiguration_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.configuration =
        decoder.decodeStructPointer(VideoEffectsConfiguration);
    return val;
  };

  VideoEffectsManager_GetConfiguration_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEffectsManager_GetConfiguration_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VideoEffectsConfiguration, val.configuration);
  };
  function VideoEffectsManager_SetConfiguration_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEffectsManager_SetConfiguration_Params.prototype.initDefaults_ = function() {
    this.configuration = null;
  };
  VideoEffectsManager_SetConfiguration_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEffectsManager_SetConfiguration_Params.validate = function(messageValidator, offset) {
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


    // validate VideoEffectsManager_SetConfiguration_Params.configuration
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VideoEffectsConfiguration, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEffectsManager_SetConfiguration_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoEffectsManager_SetConfiguration_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEffectsManager_SetConfiguration_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.configuration =
        decoder.decodeStructPointer(VideoEffectsConfiguration);
    return val;
  };

  VideoEffectsManager_SetConfiguration_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEffectsManager_SetConfiguration_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VideoEffectsConfiguration, val.configuration);
  };
  function VideoEffectsManager_SetConfiguration_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEffectsManager_SetConfiguration_ResponseParams.prototype.initDefaults_ = function() {
    this.result = 0;
  };
  VideoEffectsManager_SetConfiguration_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEffectsManager_SetConfiguration_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate VideoEffectsManager_SetConfiguration_ResponseParams.result
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, SetConfigurationResult);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEffectsManager_SetConfiguration_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VideoEffectsManager_SetConfiguration_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VideoEffectsManager_SetConfiguration_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStruct(new codec.Enum(SetConfigurationResult));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VideoEffectsManager_SetConfiguration_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEffectsManager_SetConfiguration_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.result);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VideoEffectsManager_AddObserver_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VideoEffectsManager_AddObserver_Params.prototype.initDefaults_ = function() {
    this.observer = new VideoEffectsConfigurationObserverPtr();
  };
  VideoEffectsManager_AddObserver_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VideoEffectsManager_AddObserver_Params.validate = function(messageValidator, offset) {
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


    // validate VideoEffectsManager_AddObserver_Params.observer
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VideoEffectsManager_AddObserver_Params.encodedSize = codec.kStructHeaderSize + 8;

  VideoEffectsManager_AddObserver_Params.decode = function(decoder) {
    var packed;
    var val = new VideoEffectsManager_AddObserver_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.observer =
        decoder.decodeStruct(new codec.Interface(VideoEffectsConfigurationObserverPtr));
    return val;
  };

  VideoEffectsManager_AddObserver_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VideoEffectsManager_AddObserver_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(VideoEffectsConfigurationObserverPtr), val.observer);
  };
  var kVideoEffectsConfigurationObserver_OnConfigurationChanged_Name = 1204209342;

  function VideoEffectsConfigurationObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VideoEffectsConfigurationObserver,
                                                   handleOrPtrInfo);
  }

  function VideoEffectsConfigurationObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VideoEffectsConfigurationObserver, associatedInterfacePtrInfo);
  }

  VideoEffectsConfigurationObserverAssociatedPtr.prototype =
      Object.create(VideoEffectsConfigurationObserverPtr.prototype);
  VideoEffectsConfigurationObserverAssociatedPtr.prototype.constructor =
      VideoEffectsConfigurationObserverAssociatedPtr;

  function VideoEffectsConfigurationObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  VideoEffectsConfigurationObserverPtr.prototype.onConfigurationChanged = function() {
    return VideoEffectsConfigurationObserverProxy.prototype.onConfigurationChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEffectsConfigurationObserverProxy.prototype.onConfigurationChanged = function(configuration) {
    var params_ = new VideoEffectsConfigurationObserver_OnConfigurationChanged_Params();
    params_.configuration = configuration;
    var builder = new codec.MessageV0Builder(
        kVideoEffectsConfigurationObserver_OnConfigurationChanged_Name,
        codec.align(VideoEffectsConfigurationObserver_OnConfigurationChanged_Params.encodedSize));
    builder.encodeStruct(VideoEffectsConfigurationObserver_OnConfigurationChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VideoEffectsConfigurationObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  VideoEffectsConfigurationObserverStub.prototype.onConfigurationChanged = function(configuration) {
    return this.delegate_ && this.delegate_.onConfigurationChanged && this.delegate_.onConfigurationChanged(configuration);
  }

  VideoEffectsConfigurationObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoEffectsConfigurationObserver_OnConfigurationChanged_Name:
      var params = reader.decodeStruct(VideoEffectsConfigurationObserver_OnConfigurationChanged_Params);
      this.onConfigurationChanged(params.configuration);
      return true;
    default:
      return false;
    }
  };

  VideoEffectsConfigurationObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateVideoEffectsConfigurationObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVideoEffectsConfigurationObserver_OnConfigurationChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoEffectsConfigurationObserver_OnConfigurationChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVideoEffectsConfigurationObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var VideoEffectsConfigurationObserver = {
    name: 'video_capture.mojom.VideoEffectsConfigurationObserver',
    kVersion: 0,
    ptrClass: VideoEffectsConfigurationObserverPtr,
    proxyClass: VideoEffectsConfigurationObserverProxy,
    stubClass: VideoEffectsConfigurationObserverStub,
    validateRequest: validateVideoEffectsConfigurationObserverRequest,
    validateResponse: null,
  };
  VideoEffectsConfigurationObserverStub.prototype.validator = validateVideoEffectsConfigurationObserverRequest;
  VideoEffectsConfigurationObserverProxy.prototype.validator = null;
  var kVideoEffectsManager_GetConfiguration_Name = 490647412;
  var kVideoEffectsManager_SetConfiguration_Name = 1463304573;
  var kVideoEffectsManager_AddObserver_Name = 2112766568;

  function VideoEffectsManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VideoEffectsManager,
                                                   handleOrPtrInfo);
  }

  function VideoEffectsManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VideoEffectsManager, associatedInterfacePtrInfo);
  }

  VideoEffectsManagerAssociatedPtr.prototype =
      Object.create(VideoEffectsManagerPtr.prototype);
  VideoEffectsManagerAssociatedPtr.prototype.constructor =
      VideoEffectsManagerAssociatedPtr;

  function VideoEffectsManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  VideoEffectsManagerPtr.prototype.getConfiguration = function() {
    return VideoEffectsManagerProxy.prototype.getConfiguration
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEffectsManagerProxy.prototype.getConfiguration = function() {
    var params_ = new VideoEffectsManager_GetConfiguration_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVideoEffectsManager_GetConfiguration_Name,
          codec.align(VideoEffectsManager_GetConfiguration_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VideoEffectsManager_GetConfiguration_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VideoEffectsManager_GetConfiguration_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VideoEffectsManagerPtr.prototype.setConfiguration = function() {
    return VideoEffectsManagerProxy.prototype.setConfiguration
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEffectsManagerProxy.prototype.setConfiguration = function(configuration) {
    var params_ = new VideoEffectsManager_SetConfiguration_Params();
    params_.configuration = configuration;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVideoEffectsManager_SetConfiguration_Name,
          codec.align(VideoEffectsManager_SetConfiguration_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VideoEffectsManager_SetConfiguration_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VideoEffectsManager_SetConfiguration_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VideoEffectsManagerPtr.prototype.addObserver = function() {
    return VideoEffectsManagerProxy.prototype.addObserver
        .apply(this.ptr.getProxy(), arguments);
  };

  VideoEffectsManagerProxy.prototype.addObserver = function(observer) {
    var params_ = new VideoEffectsManager_AddObserver_Params();
    params_.observer = observer;
    var builder = new codec.MessageV0Builder(
        kVideoEffectsManager_AddObserver_Name,
        codec.align(VideoEffectsManager_AddObserver_Params.encodedSize));
    builder.encodeStruct(VideoEffectsManager_AddObserver_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VideoEffectsManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  VideoEffectsManagerStub.prototype.getConfiguration = function() {
    return this.delegate_ && this.delegate_.getConfiguration && this.delegate_.getConfiguration();
  }
  VideoEffectsManagerStub.prototype.setConfiguration = function(configuration) {
    return this.delegate_ && this.delegate_.setConfiguration && this.delegate_.setConfiguration(configuration);
  }
  VideoEffectsManagerStub.prototype.addObserver = function(observer) {
    return this.delegate_ && this.delegate_.addObserver && this.delegate_.addObserver(observer);
  }

  VideoEffectsManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoEffectsManager_AddObserver_Name:
      var params = reader.decodeStruct(VideoEffectsManager_AddObserver_Params);
      this.addObserver(params.observer);
      return true;
    default:
      return false;
    }
  };

  VideoEffectsManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVideoEffectsManager_GetConfiguration_Name:
      var params = reader.decodeStruct(VideoEffectsManager_GetConfiguration_Params);
      this.getConfiguration().then(function(response) {
        var responseParams =
            new VideoEffectsManager_GetConfiguration_ResponseParams();
        responseParams.configuration = response.configuration;
        var builder = new codec.MessageV1Builder(
            kVideoEffectsManager_GetConfiguration_Name,
            codec.align(VideoEffectsManager_GetConfiguration_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VideoEffectsManager_GetConfiguration_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVideoEffectsManager_SetConfiguration_Name:
      var params = reader.decodeStruct(VideoEffectsManager_SetConfiguration_Params);
      this.setConfiguration(params.configuration).then(function(response) {
        var responseParams =
            new VideoEffectsManager_SetConfiguration_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kVideoEffectsManager_SetConfiguration_Name,
            codec.align(VideoEffectsManager_SetConfiguration_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VideoEffectsManager_SetConfiguration_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVideoEffectsManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVideoEffectsManager_GetConfiguration_Name:
        if (message.expectsResponse())
          paramsClass = VideoEffectsManager_GetConfiguration_Params;
      break;
      case kVideoEffectsManager_SetConfiguration_Name:
        if (message.expectsResponse())
          paramsClass = VideoEffectsManager_SetConfiguration_Params;
      break;
      case kVideoEffectsManager_AddObserver_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VideoEffectsManager_AddObserver_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVideoEffectsManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVideoEffectsManager_GetConfiguration_Name:
        if (message.isResponse())
          paramsClass = VideoEffectsManager_GetConfiguration_ResponseParams;
        break;
      case kVideoEffectsManager_SetConfiguration_Name:
        if (message.isResponse())
          paramsClass = VideoEffectsManager_SetConfiguration_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VideoEffectsManager = {
    name: 'video_capture.mojom.VideoEffectsManager',
    kVersion: 0,
    ptrClass: VideoEffectsManagerPtr,
    proxyClass: VideoEffectsManagerProxy,
    stubClass: VideoEffectsManagerStub,
    validateRequest: validateVideoEffectsManagerRequest,
    validateResponse: validateVideoEffectsManagerResponse,
  };
  VideoEffectsManagerStub.prototype.validator = validateVideoEffectsManagerRequest;
  VideoEffectsManagerProxy.prototype.validator = validateVideoEffectsManagerResponse;
  exports.SetConfigurationResult = SetConfigurationResult;
  exports.ImageEnhancement = ImageEnhancement;
  exports.Blur = Blur;
  exports.Masking = Masking;
  exports.Framing = Framing;
  exports.VideoEffectsConfiguration = VideoEffectsConfiguration;
  exports.VideoEffectsConfigurationObserver = VideoEffectsConfigurationObserver;
  exports.VideoEffectsConfigurationObserverPtr = VideoEffectsConfigurationObserverPtr;
  exports.VideoEffectsConfigurationObserverAssociatedPtr = VideoEffectsConfigurationObserverAssociatedPtr;
  exports.VideoEffectsManager = VideoEffectsManager;
  exports.VideoEffectsManagerPtr = VideoEffectsManagerPtr;
  exports.VideoEffectsManagerAssociatedPtr = VideoEffectsManagerAssociatedPtr;
})();