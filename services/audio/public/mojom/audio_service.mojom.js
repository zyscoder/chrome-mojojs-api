// services/audio/public/mojom/audio_service.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/audio/public/mojom/audio_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('audio.mojom');
  var audio_stream_factory$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/audio_stream_factory.mojom', '../../../../media/mojo/mojom/audio_stream_factory.mojom.js');
  }
  var sandbox$ =
      mojo.internal.exposeNamespace('sandbox.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'sandbox/policy/mojom/sandbox.mojom', '../../../../sandbox/policy/mojom/sandbox.mojom.js');
  }
  var debug_recording$ =
      mojo.internal.exposeNamespace('audio.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/audio/public/mojom/debug_recording.mojom', 'debug_recording.mojom.js');
  }
  var device_notifications$ =
      mojo.internal.exposeNamespace('audio.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/audio/public/mojom/device_notifications.mojom', 'device_notifications.mojom.js');
  }
  var log_factory_manager$ =
      mojo.internal.exposeNamespace('audio.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/audio/public/mojom/log_factory_manager.mojom', 'log_factory_manager.mojom.js');
  }
  var system_info$ =
      mojo.internal.exposeNamespace('audio.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/audio/public/mojom/system_info.mojom', 'system_info.mojom.js');
  }
  var testing_api$ =
      mojo.internal.exposeNamespace('audio.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/audio/public/mojom/testing_api.mojom', 'testing_api.mojom.js');
  }



  function AudioService_BindSystemInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioService_BindSystemInfo_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  AudioService_BindSystemInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioService_BindSystemInfo_Params.validate = function(messageValidator, offset) {
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


    // validate AudioService_BindSystemInfo_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioService_BindSystemInfo_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioService_BindSystemInfo_Params.decode = function(decoder) {
    var packed;
    var val = new AudioService_BindSystemInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioService_BindSystemInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioService_BindSystemInfo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioService_BindDebugRecording_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioService_BindDebugRecording_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  AudioService_BindDebugRecording_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioService_BindDebugRecording_Params.validate = function(messageValidator, offset) {
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


    // validate AudioService_BindDebugRecording_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioService_BindDebugRecording_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioService_BindDebugRecording_Params.decode = function(decoder) {
    var packed;
    var val = new AudioService_BindDebugRecording_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioService_BindDebugRecording_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioService_BindDebugRecording_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioService_BindStreamFactory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioService_BindStreamFactory_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  AudioService_BindStreamFactory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioService_BindStreamFactory_Params.validate = function(messageValidator, offset) {
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


    // validate AudioService_BindStreamFactory_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioService_BindStreamFactory_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioService_BindStreamFactory_Params.decode = function(decoder) {
    var packed;
    var val = new AudioService_BindStreamFactory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioService_BindStreamFactory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioService_BindStreamFactory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioService_BindDeviceNotifier_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioService_BindDeviceNotifier_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  AudioService_BindDeviceNotifier_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioService_BindDeviceNotifier_Params.validate = function(messageValidator, offset) {
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


    // validate AudioService_BindDeviceNotifier_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioService_BindDeviceNotifier_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioService_BindDeviceNotifier_Params.decode = function(decoder) {
    var packed;
    var val = new AudioService_BindDeviceNotifier_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioService_BindDeviceNotifier_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioService_BindDeviceNotifier_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioService_BindLogFactoryManager_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioService_BindLogFactoryManager_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  AudioService_BindLogFactoryManager_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioService_BindLogFactoryManager_Params.validate = function(messageValidator, offset) {
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


    // validate AudioService_BindLogFactoryManager_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioService_BindLogFactoryManager_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioService_BindLogFactoryManager_Params.decode = function(decoder) {
    var packed;
    var val = new AudioService_BindLogFactoryManager_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioService_BindLogFactoryManager_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioService_BindLogFactoryManager_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioService_BindTestingApi_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioService_BindTestingApi_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  AudioService_BindTestingApi_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioService_BindTestingApi_Params.validate = function(messageValidator, offset) {
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


    // validate AudioService_BindTestingApi_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioService_BindTestingApi_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioService_BindTestingApi_Params.decode = function(decoder) {
    var packed;
    var val = new AudioService_BindTestingApi_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioService_BindTestingApi_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioService_BindTestingApi_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kAudioService_BindSystemInfo_Name = 117144495;
  var kAudioService_BindDebugRecording_Name = 1988429141;
  var kAudioService_BindStreamFactory_Name = 15682450;
  var kAudioService_BindDeviceNotifier_Name = 546692479;
  var kAudioService_BindLogFactoryManager_Name = 1565705035;
  var kAudioService_BindTestingApi_Name = 202083613;

  function AudioServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioService,
                                                   handleOrPtrInfo);
  }

  function AudioServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioService, associatedInterfacePtrInfo);
  }

  AudioServiceAssociatedPtr.prototype =
      Object.create(AudioServicePtr.prototype);
  AudioServiceAssociatedPtr.prototype.constructor =
      AudioServiceAssociatedPtr;

  function AudioServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioServicePtr.prototype.bindSystemInfo = function() {
    return AudioServiceProxy.prototype.bindSystemInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioServiceProxy.prototype.bindSystemInfo = function(receiver) {
    var params_ = new AudioService_BindSystemInfo_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kAudioService_BindSystemInfo_Name,
        codec.align(AudioService_BindSystemInfo_Params.encodedSize));
    builder.encodeStruct(AudioService_BindSystemInfo_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioServicePtr.prototype.bindDebugRecording = function() {
    return AudioServiceProxy.prototype.bindDebugRecording
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioServiceProxy.prototype.bindDebugRecording = function(receiver) {
    var params_ = new AudioService_BindDebugRecording_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kAudioService_BindDebugRecording_Name,
        codec.align(AudioService_BindDebugRecording_Params.encodedSize));
    builder.encodeStruct(AudioService_BindDebugRecording_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioServicePtr.prototype.bindStreamFactory = function() {
    return AudioServiceProxy.prototype.bindStreamFactory
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioServiceProxy.prototype.bindStreamFactory = function(receiver) {
    var params_ = new AudioService_BindStreamFactory_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kAudioService_BindStreamFactory_Name,
        codec.align(AudioService_BindStreamFactory_Params.encodedSize));
    builder.encodeStruct(AudioService_BindStreamFactory_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioServicePtr.prototype.bindDeviceNotifier = function() {
    return AudioServiceProxy.prototype.bindDeviceNotifier
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioServiceProxy.prototype.bindDeviceNotifier = function(receiver) {
    var params_ = new AudioService_BindDeviceNotifier_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kAudioService_BindDeviceNotifier_Name,
        codec.align(AudioService_BindDeviceNotifier_Params.encodedSize));
    builder.encodeStruct(AudioService_BindDeviceNotifier_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioServicePtr.prototype.bindLogFactoryManager = function() {
    return AudioServiceProxy.prototype.bindLogFactoryManager
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioServiceProxy.prototype.bindLogFactoryManager = function(receiver) {
    var params_ = new AudioService_BindLogFactoryManager_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kAudioService_BindLogFactoryManager_Name,
        codec.align(AudioService_BindLogFactoryManager_Params.encodedSize));
    builder.encodeStruct(AudioService_BindLogFactoryManager_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioServicePtr.prototype.bindTestingApi = function() {
    return AudioServiceProxy.prototype.bindTestingApi
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioServiceProxy.prototype.bindTestingApi = function(receiver) {
    var params_ = new AudioService_BindTestingApi_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kAudioService_BindTestingApi_Name,
        codec.align(AudioService_BindTestingApi_Params.encodedSize));
    builder.encodeStruct(AudioService_BindTestingApi_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioServiceStub.prototype.bindSystemInfo = function(receiver) {
    return this.delegate_ && this.delegate_.bindSystemInfo && this.delegate_.bindSystemInfo(receiver);
  }
  AudioServiceStub.prototype.bindDebugRecording = function(receiver) {
    return this.delegate_ && this.delegate_.bindDebugRecording && this.delegate_.bindDebugRecording(receiver);
  }
  AudioServiceStub.prototype.bindStreamFactory = function(receiver) {
    return this.delegate_ && this.delegate_.bindStreamFactory && this.delegate_.bindStreamFactory(receiver);
  }
  AudioServiceStub.prototype.bindDeviceNotifier = function(receiver) {
    return this.delegate_ && this.delegate_.bindDeviceNotifier && this.delegate_.bindDeviceNotifier(receiver);
  }
  AudioServiceStub.prototype.bindLogFactoryManager = function(receiver) {
    return this.delegate_ && this.delegate_.bindLogFactoryManager && this.delegate_.bindLogFactoryManager(receiver);
  }
  AudioServiceStub.prototype.bindTestingApi = function(receiver) {
    return this.delegate_ && this.delegate_.bindTestingApi && this.delegate_.bindTestingApi(receiver);
  }

  AudioServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioService_BindSystemInfo_Name:
      var params = reader.decodeStruct(AudioService_BindSystemInfo_Params);
      this.bindSystemInfo(params.receiver);
      return true;
    case kAudioService_BindDebugRecording_Name:
      var params = reader.decodeStruct(AudioService_BindDebugRecording_Params);
      this.bindDebugRecording(params.receiver);
      return true;
    case kAudioService_BindStreamFactory_Name:
      var params = reader.decodeStruct(AudioService_BindStreamFactory_Params);
      this.bindStreamFactory(params.receiver);
      return true;
    case kAudioService_BindDeviceNotifier_Name:
      var params = reader.decodeStruct(AudioService_BindDeviceNotifier_Params);
      this.bindDeviceNotifier(params.receiver);
      return true;
    case kAudioService_BindLogFactoryManager_Name:
      var params = reader.decodeStruct(AudioService_BindLogFactoryManager_Params);
      this.bindLogFactoryManager(params.receiver);
      return true;
    case kAudioService_BindTestingApi_Name:
      var params = reader.decodeStruct(AudioService_BindTestingApi_Params);
      this.bindTestingApi(params.receiver);
      return true;
    default:
      return false;
    }
  };

  AudioServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioService_BindSystemInfo_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioService_BindSystemInfo_Params;
      break;
      case kAudioService_BindDebugRecording_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioService_BindDebugRecording_Params;
      break;
      case kAudioService_BindStreamFactory_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioService_BindStreamFactory_Params;
      break;
      case kAudioService_BindDeviceNotifier_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioService_BindDeviceNotifier_Params;
      break;
      case kAudioService_BindLogFactoryManager_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioService_BindLogFactoryManager_Params;
      break;
      case kAudioService_BindTestingApi_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioService_BindTestingApi_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioServiceResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioService = {
    name: 'audio.mojom.AudioService',
    kVersion: 0,
    ptrClass: AudioServicePtr,
    proxyClass: AudioServiceProxy,
    stubClass: AudioServiceStub,
    validateRequest: validateAudioServiceRequest,
    validateResponse: null,
  };
  AudioServiceStub.prototype.validator = validateAudioServiceRequest;
  AudioServiceProxy.prototype.validator = null;
  exports.AudioService = AudioService;
  exports.AudioServicePtr = AudioServicePtr;
  exports.AudioServiceAssociatedPtr = AudioServiceAssociatedPtr;
})();