// services/video_capture/public/mojom/device.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/video_capture/public/mojom/device.mojom';
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
  var video_capture_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/capture/mojom/video_capture_types.mojom', '../../../../media/capture/mojom/video_capture_types.mojom.js');
  }
  var image_capture$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/capture/mojom/image_capture.mojom', '../../../../media/capture/mojom/image_capture.mojom.js');
  }
  var video_frame_handler$ =
      mojo.internal.exposeNamespace('videoCapture.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/video_capture/public/mojom/video_frame_handler.mojom', 'video_frame_handler.mojom.js');
  }



  function Device_Start_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_Start_Params.prototype.initDefaults_ = function() {
    this.requestedSettings = null;
    this.handler = new video_frame_handler$.VideoFrameHandlerPtr();
  };
  Device_Start_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_Start_Params.validate = function(messageValidator, offset) {
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


    // validate Device_Start_Params.requestedSettings
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, video_capture_types$.VideoCaptureParams, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Device_Start_Params.handler
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Device_Start_Params.encodedSize = codec.kStructHeaderSize + 16;

  Device_Start_Params.decode = function(decoder) {
    var packed;
    var val = new Device_Start_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestedSettings =
        decoder.decodeStructPointer(video_capture_types$.VideoCaptureParams);
    val.handler =
        decoder.decodeStruct(new codec.Interface(video_frame_handler$.VideoFrameHandlerPtr));
    return val;
  };

  Device_Start_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_Start_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(video_capture_types$.VideoCaptureParams, val.requestedSettings);
    encoder.encodeStruct(new codec.Interface(video_frame_handler$.VideoFrameHandlerPtr), val.handler);
  };
  function Device_MaybeSuspend_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_MaybeSuspend_Params.prototype.initDefaults_ = function() {
  };
  Device_MaybeSuspend_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_MaybeSuspend_Params.validate = function(messageValidator, offset) {
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

  Device_MaybeSuspend_Params.encodedSize = codec.kStructHeaderSize + 0;

  Device_MaybeSuspend_Params.decode = function(decoder) {
    var packed;
    var val = new Device_MaybeSuspend_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Device_MaybeSuspend_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_MaybeSuspend_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Device_Resume_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_Resume_Params.prototype.initDefaults_ = function() {
  };
  Device_Resume_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_Resume_Params.validate = function(messageValidator, offset) {
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

  Device_Resume_Params.encodedSize = codec.kStructHeaderSize + 0;

  Device_Resume_Params.decode = function(decoder) {
    var packed;
    var val = new Device_Resume_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Device_Resume_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_Resume_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Device_GetPhotoState_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_GetPhotoState_Params.prototype.initDefaults_ = function() {
  };
  Device_GetPhotoState_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_GetPhotoState_Params.validate = function(messageValidator, offset) {
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

  Device_GetPhotoState_Params.encodedSize = codec.kStructHeaderSize + 0;

  Device_GetPhotoState_Params.decode = function(decoder) {
    var packed;
    var val = new Device_GetPhotoState_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Device_GetPhotoState_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_GetPhotoState_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Device_GetPhotoState_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_GetPhotoState_ResponseParams.prototype.initDefaults_ = function() {
    this.capabilities = null;
  };
  Device_GetPhotoState_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_GetPhotoState_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Device_GetPhotoState_ResponseParams.capabilities
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, image_capture$.PhotoState, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Device_GetPhotoState_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Device_GetPhotoState_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Device_GetPhotoState_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.capabilities =
        decoder.decodeStructPointer(image_capture$.PhotoState);
    return val;
  };

  Device_GetPhotoState_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_GetPhotoState_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(image_capture$.PhotoState, val.capabilities);
  };
  function Device_SetPhotoOptions_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_SetPhotoOptions_Params.prototype.initDefaults_ = function() {
    this.settings = null;
  };
  Device_SetPhotoOptions_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_SetPhotoOptions_Params.validate = function(messageValidator, offset) {
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


    // validate Device_SetPhotoOptions_Params.settings
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, image_capture$.PhotoSettings, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Device_SetPhotoOptions_Params.encodedSize = codec.kStructHeaderSize + 8;

  Device_SetPhotoOptions_Params.decode = function(decoder) {
    var packed;
    var val = new Device_SetPhotoOptions_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.settings =
        decoder.decodeStructPointer(image_capture$.PhotoSettings);
    return val;
  };

  Device_SetPhotoOptions_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_SetPhotoOptions_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(image_capture$.PhotoSettings, val.settings);
  };
  function Device_SetPhotoOptions_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_SetPhotoOptions_ResponseParams.prototype.initDefaults_ = function() {
    this.success = false;
  };
  Device_SetPhotoOptions_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_SetPhotoOptions_ResponseParams.validate = function(messageValidator, offset) {
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

  Device_SetPhotoOptions_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Device_SetPhotoOptions_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Device_SetPhotoOptions_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Device_SetPhotoOptions_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_SetPhotoOptions_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function Device_TakePhoto_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_TakePhoto_Params.prototype.initDefaults_ = function() {
  };
  Device_TakePhoto_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_TakePhoto_Params.validate = function(messageValidator, offset) {
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

  Device_TakePhoto_Params.encodedSize = codec.kStructHeaderSize + 0;

  Device_TakePhoto_Params.decode = function(decoder) {
    var packed;
    var val = new Device_TakePhoto_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Device_TakePhoto_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_TakePhoto_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function Device_TakePhoto_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_TakePhoto_ResponseParams.prototype.initDefaults_ = function() {
    this.blob = null;
  };
  Device_TakePhoto_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_TakePhoto_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate Device_TakePhoto_ResponseParams.blob
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, image_capture$.Blob, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Device_TakePhoto_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  Device_TakePhoto_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new Device_TakePhoto_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.blob =
        decoder.decodeStructPointer(image_capture$.Blob);
    return val;
  };

  Device_TakePhoto_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_TakePhoto_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(image_capture$.Blob, val.blob);
  };
  function Device_ProcessFeedback_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_ProcessFeedback_Params.prototype.initDefaults_ = function() {
    this.feedback = null;
  };
  Device_ProcessFeedback_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_ProcessFeedback_Params.validate = function(messageValidator, offset) {
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


    // validate Device_ProcessFeedback_Params.feedback
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, video_capture_types$.VideoCaptureFeedback, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Device_ProcessFeedback_Params.encodedSize = codec.kStructHeaderSize + 8;

  Device_ProcessFeedback_Params.decode = function(decoder) {
    var packed;
    var val = new Device_ProcessFeedback_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.feedback =
        decoder.decodeStructPointer(video_capture_types$.VideoCaptureFeedback);
    return val;
  };

  Device_ProcessFeedback_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_ProcessFeedback_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(video_capture_types$.VideoCaptureFeedback, val.feedback);
  };
  function Device_RequestRefreshFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Device_RequestRefreshFrame_Params.prototype.initDefaults_ = function() {
  };
  Device_RequestRefreshFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Device_RequestRefreshFrame_Params.validate = function(messageValidator, offset) {
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

  Device_RequestRefreshFrame_Params.encodedSize = codec.kStructHeaderSize + 0;

  Device_RequestRefreshFrame_Params.decode = function(decoder) {
    var packed;
    var val = new Device_RequestRefreshFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  Device_RequestRefreshFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Device_RequestRefreshFrame_Params.encodedSize);
    encoder.writeUint32(0);
  };
  var kDevice_Start_Name = 1253171479;
  var kDevice_MaybeSuspend_Name = 1523974711;
  var kDevice_Resume_Name = 23779957;
  var kDevice_GetPhotoState_Name = 1976882769;
  var kDevice_SetPhotoOptions_Name = 92650405;
  var kDevice_TakePhoto_Name = 845916797;
  var kDevice_ProcessFeedback_Name = 1656268228;
  var kDevice_RequestRefreshFrame_Name = 1062325615;

  function DevicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Device,
                                                   handleOrPtrInfo);
  }

  function DeviceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Device, associatedInterfacePtrInfo);
  }

  DeviceAssociatedPtr.prototype =
      Object.create(DevicePtr.prototype);
  DeviceAssociatedPtr.prototype.constructor =
      DeviceAssociatedPtr;

  function DeviceProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevicePtr.prototype.start = function() {
    return DeviceProxy.prototype.start
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceProxy.prototype.start = function(requestedSettings, handler) {
    var params_ = new Device_Start_Params();
    params_.requestedSettings = requestedSettings;
    params_.handler = handler;
    var builder = new codec.MessageV0Builder(
        kDevice_Start_Name,
        codec.align(Device_Start_Params.encodedSize));
    builder.encodeStruct(Device_Start_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DevicePtr.prototype.maybeSuspend = function() {
    return DeviceProxy.prototype.maybeSuspend
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceProxy.prototype.maybeSuspend = function() {
    var params_ = new Device_MaybeSuspend_Params();
    var builder = new codec.MessageV0Builder(
        kDevice_MaybeSuspend_Name,
        codec.align(Device_MaybeSuspend_Params.encodedSize));
    builder.encodeStruct(Device_MaybeSuspend_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DevicePtr.prototype.resume = function() {
    return DeviceProxy.prototype.resume
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceProxy.prototype.resume = function() {
    var params_ = new Device_Resume_Params();
    var builder = new codec.MessageV0Builder(
        kDevice_Resume_Name,
        codec.align(Device_Resume_Params.encodedSize));
    builder.encodeStruct(Device_Resume_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DevicePtr.prototype.getPhotoState = function() {
    return DeviceProxy.prototype.getPhotoState
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceProxy.prototype.getPhotoState = function() {
    var params_ = new Device_GetPhotoState_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDevice_GetPhotoState_Name,
          codec.align(Device_GetPhotoState_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Device_GetPhotoState_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Device_GetPhotoState_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DevicePtr.prototype.setPhotoOptions = function() {
    return DeviceProxy.prototype.setPhotoOptions
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceProxy.prototype.setPhotoOptions = function(settings) {
    var params_ = new Device_SetPhotoOptions_Params();
    params_.settings = settings;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDevice_SetPhotoOptions_Name,
          codec.align(Device_SetPhotoOptions_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Device_SetPhotoOptions_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Device_SetPhotoOptions_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DevicePtr.prototype.takePhoto = function() {
    return DeviceProxy.prototype.takePhoto
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceProxy.prototype.takePhoto = function() {
    var params_ = new Device_TakePhoto_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDevice_TakePhoto_Name,
          codec.align(Device_TakePhoto_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(Device_TakePhoto_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(Device_TakePhoto_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  DevicePtr.prototype.processFeedback = function() {
    return DeviceProxy.prototype.processFeedback
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceProxy.prototype.processFeedback = function(feedback) {
    var params_ = new Device_ProcessFeedback_Params();
    params_.feedback = feedback;
    var builder = new codec.MessageV0Builder(
        kDevice_ProcessFeedback_Name,
        codec.align(Device_ProcessFeedback_Params.encodedSize));
    builder.encodeStruct(Device_ProcessFeedback_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  DevicePtr.prototype.requestRefreshFrame = function() {
    return DeviceProxy.prototype.requestRefreshFrame
        .apply(this.ptr.getProxy(), arguments);
  };

  DeviceProxy.prototype.requestRefreshFrame = function() {
    var params_ = new Device_RequestRefreshFrame_Params();
    var builder = new codec.MessageV0Builder(
        kDevice_RequestRefreshFrame_Name,
        codec.align(Device_RequestRefreshFrame_Params.encodedSize));
    builder.encodeStruct(Device_RequestRefreshFrame_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DeviceStub(delegate) {
    this.delegate_ = delegate;
  }
  DeviceStub.prototype.start = function(requestedSettings, handler) {
    return this.delegate_ && this.delegate_.start && this.delegate_.start(requestedSettings, handler);
  }
  DeviceStub.prototype.maybeSuspend = function() {
    return this.delegate_ && this.delegate_.maybeSuspend && this.delegate_.maybeSuspend();
  }
  DeviceStub.prototype.resume = function() {
    return this.delegate_ && this.delegate_.resume && this.delegate_.resume();
  }
  DeviceStub.prototype.getPhotoState = function() {
    return this.delegate_ && this.delegate_.getPhotoState && this.delegate_.getPhotoState();
  }
  DeviceStub.prototype.setPhotoOptions = function(settings) {
    return this.delegate_ && this.delegate_.setPhotoOptions && this.delegate_.setPhotoOptions(settings);
  }
  DeviceStub.prototype.takePhoto = function() {
    return this.delegate_ && this.delegate_.takePhoto && this.delegate_.takePhoto();
  }
  DeviceStub.prototype.processFeedback = function(feedback) {
    return this.delegate_ && this.delegate_.processFeedback && this.delegate_.processFeedback(feedback);
  }
  DeviceStub.prototype.requestRefreshFrame = function() {
    return this.delegate_ && this.delegate_.requestRefreshFrame && this.delegate_.requestRefreshFrame();
  }

  DeviceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevice_Start_Name:
      var params = reader.decodeStruct(Device_Start_Params);
      this.start(params.requestedSettings, params.handler);
      return true;
    case kDevice_MaybeSuspend_Name:
      var params = reader.decodeStruct(Device_MaybeSuspend_Params);
      this.maybeSuspend();
      return true;
    case kDevice_Resume_Name:
      var params = reader.decodeStruct(Device_Resume_Params);
      this.resume();
      return true;
    case kDevice_ProcessFeedback_Name:
      var params = reader.decodeStruct(Device_ProcessFeedback_Params);
      this.processFeedback(params.feedback);
      return true;
    case kDevice_RequestRefreshFrame_Name:
      var params = reader.decodeStruct(Device_RequestRefreshFrame_Params);
      this.requestRefreshFrame();
      return true;
    default:
      return false;
    }
  };

  DeviceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevice_GetPhotoState_Name:
      var params = reader.decodeStruct(Device_GetPhotoState_Params);
      this.getPhotoState().then(function(response) {
        var responseParams =
            new Device_GetPhotoState_ResponseParams();
        responseParams.capabilities = response.capabilities;
        var builder = new codec.MessageV1Builder(
            kDevice_GetPhotoState_Name,
            codec.align(Device_GetPhotoState_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Device_GetPhotoState_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kDevice_SetPhotoOptions_Name:
      var params = reader.decodeStruct(Device_SetPhotoOptions_Params);
      this.setPhotoOptions(params.settings).then(function(response) {
        var responseParams =
            new Device_SetPhotoOptions_ResponseParams();
        responseParams.success = response.success;
        var builder = new codec.MessageV1Builder(
            kDevice_SetPhotoOptions_Name,
            codec.align(Device_SetPhotoOptions_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Device_SetPhotoOptions_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kDevice_TakePhoto_Name:
      var params = reader.decodeStruct(Device_TakePhoto_Params);
      this.takePhoto().then(function(response) {
        var responseParams =
            new Device_TakePhoto_ResponseParams();
        responseParams.blob = response.blob;
        var builder = new codec.MessageV1Builder(
            kDevice_TakePhoto_Name,
            codec.align(Device_TakePhoto_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(Device_TakePhoto_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateDeviceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevice_Start_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Device_Start_Params;
      break;
      case kDevice_MaybeSuspend_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Device_MaybeSuspend_Params;
      break;
      case kDevice_Resume_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Device_Resume_Params;
      break;
      case kDevice_GetPhotoState_Name:
        if (message.expectsResponse())
          paramsClass = Device_GetPhotoState_Params;
      break;
      case kDevice_SetPhotoOptions_Name:
        if (message.expectsResponse())
          paramsClass = Device_SetPhotoOptions_Params;
      break;
      case kDevice_TakePhoto_Name:
        if (message.expectsResponse())
          paramsClass = Device_TakePhoto_Params;
      break;
      case kDevice_ProcessFeedback_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Device_ProcessFeedback_Params;
      break;
      case kDevice_RequestRefreshFrame_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Device_RequestRefreshFrame_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDeviceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDevice_GetPhotoState_Name:
        if (message.isResponse())
          paramsClass = Device_GetPhotoState_ResponseParams;
        break;
      case kDevice_SetPhotoOptions_Name:
        if (message.isResponse())
          paramsClass = Device_SetPhotoOptions_ResponseParams;
        break;
      case kDevice_TakePhoto_Name:
        if (message.isResponse())
          paramsClass = Device_TakePhoto_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var Device = {
    name: 'video_capture.mojom.Device',
    kVersion: 0,
    ptrClass: DevicePtr,
    proxyClass: DeviceProxy,
    stubClass: DeviceStub,
    validateRequest: validateDeviceRequest,
    validateResponse: validateDeviceResponse,
  };
  DeviceStub.prototype.validator = validateDeviceRequest;
  DeviceProxy.prototype.validator = validateDeviceResponse;
  exports.Device = Device;
  exports.DevicePtr = DevicePtr;
  exports.DeviceAssociatedPtr = DeviceAssociatedPtr;
})();