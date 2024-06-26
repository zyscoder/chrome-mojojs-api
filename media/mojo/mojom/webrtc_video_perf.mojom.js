// media/mojo/mojom/webrtc_video_perf.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/webrtc_video_perf.mojom';
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



  function WebrtcPredictionFeatures(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebrtcPredictionFeatures.prototype.initDefaults_ = function() {
    this.isDecodeStats = true;
    this.hardwareAccelerated = false;
    this.profile = 0;
    this.videoPixels = 0;
  };
  WebrtcPredictionFeatures.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebrtcPredictionFeatures.validate = function(messageValidator, offset) {
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



    // validate WebrtcPredictionFeatures.profile
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, media_types$.VideoCodecProfile);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  WebrtcPredictionFeatures.encodedSize = codec.kStructHeaderSize + 16;

  WebrtcPredictionFeatures.decode = function(decoder) {
    var packed;
    var val = new WebrtcPredictionFeatures();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isDecodeStats = (packed >> 0) & 1 ? true : false;
    val.hardwareAccelerated = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.profile =
        decoder.decodeStruct(new codec.Enum(media_types$.VideoCodecProfile));
    val.videoPixels =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WebrtcPredictionFeatures.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebrtcPredictionFeatures.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isDecodeStats & 1) << 0
    packed |= (val.hardwareAccelerated & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.profile);
    encoder.encodeStruct(codec.Int32, val.videoPixels);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WebrtcVideoStats(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebrtcVideoStats.prototype.initDefaults_ = function() {
    this.framesProcessed = 0;
    this.keyFramesProcessed = 0;
    this.p99ProcessingTimeMs = 0;
  };
  WebrtcVideoStats.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebrtcVideoStats.validate = function(messageValidator, offset) {
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




    return validator.validationError.NONE;
  };

  WebrtcVideoStats.encodedSize = codec.kStructHeaderSize + 16;

  WebrtcVideoStats.decode = function(decoder) {
    var packed;
    var val = new WebrtcVideoStats();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.framesProcessed =
        decoder.decodeStruct(codec.Uint32);
    val.keyFramesProcessed =
        decoder.decodeStruct(codec.Uint32);
    val.p99ProcessingTimeMs =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WebrtcVideoStats.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebrtcVideoStats.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.framesProcessed);
    encoder.encodeStruct(codec.Uint32, val.keyFramesProcessed);
    encoder.encodeStruct(codec.Float, val.p99ProcessingTimeMs);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WebrtcVideoPerfRecorder_UpdateRecord_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebrtcVideoPerfRecorder_UpdateRecord_Params.prototype.initDefaults_ = function() {
    this.features = null;
    this.videoStats = null;
  };
  WebrtcVideoPerfRecorder_UpdateRecord_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebrtcVideoPerfRecorder_UpdateRecord_Params.validate = function(messageValidator, offset) {
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


    // validate WebrtcVideoPerfRecorder_UpdateRecord_Params.features
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebrtcPredictionFeatures, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebrtcVideoPerfRecorder_UpdateRecord_Params.videoStats
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, WebrtcVideoStats, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebrtcVideoPerfRecorder_UpdateRecord_Params.encodedSize = codec.kStructHeaderSize + 16;

  WebrtcVideoPerfRecorder_UpdateRecord_Params.decode = function(decoder) {
    var packed;
    var val = new WebrtcVideoPerfRecorder_UpdateRecord_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.features =
        decoder.decodeStructPointer(WebrtcPredictionFeatures);
    val.videoStats =
        decoder.decodeStructPointer(WebrtcVideoStats);
    return val;
  };

  WebrtcVideoPerfRecorder_UpdateRecord_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebrtcVideoPerfRecorder_UpdateRecord_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebrtcPredictionFeatures, val.features);
    encoder.encodeStructPointer(WebrtcVideoStats, val.videoStats);
  };
  function WebrtcVideoPerfHistory_GetPerfInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebrtcVideoPerfHistory_GetPerfInfo_Params.prototype.initDefaults_ = function() {
    this.features = null;
    this.framesPerSecond = 0;
  };
  WebrtcVideoPerfHistory_GetPerfInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebrtcVideoPerfHistory_GetPerfInfo_Params.validate = function(messageValidator, offset) {
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


    // validate WebrtcVideoPerfHistory_GetPerfInfo_Params.features
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, WebrtcPredictionFeatures, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  WebrtcVideoPerfHistory_GetPerfInfo_Params.encodedSize = codec.kStructHeaderSize + 16;

  WebrtcVideoPerfHistory_GetPerfInfo_Params.decode = function(decoder) {
    var packed;
    var val = new WebrtcVideoPerfHistory_GetPerfInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.features =
        decoder.decodeStructPointer(WebrtcPredictionFeatures);
    val.framesPerSecond =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WebrtcVideoPerfHistory_GetPerfInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebrtcVideoPerfHistory_GetPerfInfo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(WebrtcPredictionFeatures, val.features);
    encoder.encodeStruct(codec.Int32, val.framesPerSecond);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.isSmooth = false;
  };
  WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams.validate = function(messageValidator, offset) {
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

  WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isSmooth = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isSmooth & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kWebrtcVideoPerfRecorder_UpdateRecord_Name = 30365069;

  function WebrtcVideoPerfRecorderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebrtcVideoPerfRecorder,
                                                   handleOrPtrInfo);
  }

  function WebrtcVideoPerfRecorderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebrtcVideoPerfRecorder, associatedInterfacePtrInfo);
  }

  WebrtcVideoPerfRecorderAssociatedPtr.prototype =
      Object.create(WebrtcVideoPerfRecorderPtr.prototype);
  WebrtcVideoPerfRecorderAssociatedPtr.prototype.constructor =
      WebrtcVideoPerfRecorderAssociatedPtr;

  function WebrtcVideoPerfRecorderProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebrtcVideoPerfRecorderPtr.prototype.updateRecord = function() {
    return WebrtcVideoPerfRecorderProxy.prototype.updateRecord
        .apply(this.ptr.getProxy(), arguments);
  };

  WebrtcVideoPerfRecorderProxy.prototype.updateRecord = function(features, videoStats) {
    var params_ = new WebrtcVideoPerfRecorder_UpdateRecord_Params();
    params_.features = features;
    params_.videoStats = videoStats;
    var builder = new codec.MessageV0Builder(
        kWebrtcVideoPerfRecorder_UpdateRecord_Name,
        codec.align(WebrtcVideoPerfRecorder_UpdateRecord_Params.encodedSize));
    builder.encodeStruct(WebrtcVideoPerfRecorder_UpdateRecord_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WebrtcVideoPerfRecorderStub(delegate) {
    this.delegate_ = delegate;
  }
  WebrtcVideoPerfRecorderStub.prototype.updateRecord = function(features, videoStats) {
    return this.delegate_ && this.delegate_.updateRecord && this.delegate_.updateRecord(features, videoStats);
  }

  WebrtcVideoPerfRecorderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebrtcVideoPerfRecorder_UpdateRecord_Name:
      var params = reader.decodeStruct(WebrtcVideoPerfRecorder_UpdateRecord_Params);
      this.updateRecord(params.features, params.videoStats);
      return true;
    default:
      return false;
    }
  };

  WebrtcVideoPerfRecorderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateWebrtcVideoPerfRecorderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebrtcVideoPerfRecorder_UpdateRecord_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebrtcVideoPerfRecorder_UpdateRecord_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebrtcVideoPerfRecorderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var WebrtcVideoPerfRecorder = {
    name: 'media.mojom.WebrtcVideoPerfRecorder',
    kVersion: 0,
    ptrClass: WebrtcVideoPerfRecorderPtr,
    proxyClass: WebrtcVideoPerfRecorderProxy,
    stubClass: WebrtcVideoPerfRecorderStub,
    validateRequest: validateWebrtcVideoPerfRecorderRequest,
    validateResponse: null,
  };
  WebrtcVideoPerfRecorderStub.prototype.validator = validateWebrtcVideoPerfRecorderRequest;
  WebrtcVideoPerfRecorderProxy.prototype.validator = null;
  var kWebrtcVideoPerfHistory_GetPerfInfo_Name = 847681501;

  function WebrtcVideoPerfHistoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebrtcVideoPerfHistory,
                                                   handleOrPtrInfo);
  }

  function WebrtcVideoPerfHistoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebrtcVideoPerfHistory, associatedInterfacePtrInfo);
  }

  WebrtcVideoPerfHistoryAssociatedPtr.prototype =
      Object.create(WebrtcVideoPerfHistoryPtr.prototype);
  WebrtcVideoPerfHistoryAssociatedPtr.prototype.constructor =
      WebrtcVideoPerfHistoryAssociatedPtr;

  function WebrtcVideoPerfHistoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebrtcVideoPerfHistoryPtr.prototype.getPerfInfo = function() {
    return WebrtcVideoPerfHistoryProxy.prototype.getPerfInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  WebrtcVideoPerfHistoryProxy.prototype.getPerfInfo = function(features, framesPerSecond) {
    var params_ = new WebrtcVideoPerfHistory_GetPerfInfo_Params();
    params_.features = features;
    params_.framesPerSecond = framesPerSecond;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kWebrtcVideoPerfHistory_GetPerfInfo_Name,
          codec.align(WebrtcVideoPerfHistory_GetPerfInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(WebrtcVideoPerfHistory_GetPerfInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function WebrtcVideoPerfHistoryStub(delegate) {
    this.delegate_ = delegate;
  }
  WebrtcVideoPerfHistoryStub.prototype.getPerfInfo = function(features, framesPerSecond) {
    return this.delegate_ && this.delegate_.getPerfInfo && this.delegate_.getPerfInfo(features, framesPerSecond);
  }

  WebrtcVideoPerfHistoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  WebrtcVideoPerfHistoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebrtcVideoPerfHistory_GetPerfInfo_Name:
      var params = reader.decodeStruct(WebrtcVideoPerfHistory_GetPerfInfo_Params);
      this.getPerfInfo(params.features, params.framesPerSecond).then(function(response) {
        var responseParams =
            new WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams();
        responseParams.isSmooth = response.isSmooth;
        var builder = new codec.MessageV1Builder(
            kWebrtcVideoPerfHistory_GetPerfInfo_Name,
            codec.align(WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateWebrtcVideoPerfHistoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebrtcVideoPerfHistory_GetPerfInfo_Name:
        if (message.expectsResponse())
          paramsClass = WebrtcVideoPerfHistory_GetPerfInfo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebrtcVideoPerfHistoryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kWebrtcVideoPerfHistory_GetPerfInfo_Name:
        if (message.isResponse())
          paramsClass = WebrtcVideoPerfHistory_GetPerfInfo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var WebrtcVideoPerfHistory = {
    name: 'media.mojom.WebrtcVideoPerfHistory',
    kVersion: 0,
    ptrClass: WebrtcVideoPerfHistoryPtr,
    proxyClass: WebrtcVideoPerfHistoryProxy,
    stubClass: WebrtcVideoPerfHistoryStub,
    validateRequest: validateWebrtcVideoPerfHistoryRequest,
    validateResponse: validateWebrtcVideoPerfHistoryResponse,
  };
  WebrtcVideoPerfHistoryStub.prototype.validator = validateWebrtcVideoPerfHistoryRequest;
  WebrtcVideoPerfHistoryProxy.prototype.validator = validateWebrtcVideoPerfHistoryResponse;
  exports.WebrtcPredictionFeatures = WebrtcPredictionFeatures;
  exports.WebrtcVideoStats = WebrtcVideoStats;
  exports.WebrtcVideoPerfRecorder = WebrtcVideoPerfRecorder;
  exports.WebrtcVideoPerfRecorderPtr = WebrtcVideoPerfRecorderPtr;
  exports.WebrtcVideoPerfRecorderAssociatedPtr = WebrtcVideoPerfRecorderAssociatedPtr;
  exports.WebrtcVideoPerfHistory = WebrtcVideoPerfHistory;
  exports.WebrtcVideoPerfHistoryPtr = WebrtcVideoPerfHistoryPtr;
  exports.WebrtcVideoPerfHistoryAssociatedPtr = WebrtcVideoPerfHistoryAssociatedPtr;
})();