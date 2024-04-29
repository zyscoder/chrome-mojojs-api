// services/shape_detection/public/mojom/facedetection.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/shape_detection/public/mojom/facedetection.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('shapeDetection.mojom');
  var bitmap$ =
      mojo.internal.exposeNamespace('skia.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'skia/public/mojom/bitmap.mojom', '../../../../skia/public/mojom/bitmap.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }


  var LandmarkType = {};
  LandmarkType.MOUTH = 0;
  LandmarkType.EYE = 1;
  LandmarkType.NOSE = 2;
  LandmarkType.MIN_VALUE = 0;
  LandmarkType.MAX_VALUE = 2;

  LandmarkType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  LandmarkType.toKnownEnumValue = function(value) {
    return value;
  };

  LandmarkType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function Landmark(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Landmark.prototype.initDefaults_ = function() {
    this.locations = null;
    this.type = 0;
  };
  Landmark.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Landmark.validate = function(messageValidator, offset) {
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


    // validate Landmark.locations
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(geometry$.PointF), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Landmark.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, LandmarkType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Landmark.encodedSize = codec.kStructHeaderSize + 16;

  Landmark.decode = function(decoder) {
    var packed;
    var val = new Landmark();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.locations =
        decoder.decodeArrayPointer(new codec.PointerTo(geometry$.PointF));
    val.type =
        decoder.decodeStruct(new codec.Enum(LandmarkType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  Landmark.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Landmark.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.PointF), val.locations);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FaceDetectionResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FaceDetectionResult.prototype.initDefaults_ = function() {
    this.boundingBox = null;
    this.landmarks = null;
  };
  FaceDetectionResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FaceDetectionResult.validate = function(messageValidator, offset) {
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


    // validate FaceDetectionResult.boundingBox
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FaceDetectionResult.landmarks
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(Landmark), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FaceDetectionResult.encodedSize = codec.kStructHeaderSize + 16;

  FaceDetectionResult.decode = function(decoder) {
    var packed;
    var val = new FaceDetectionResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.boundingBox =
        decoder.decodeStructPointer(geometry$.RectF);
    val.landmarks =
        decoder.decodeArrayPointer(new codec.PointerTo(Landmark));
    return val;
  };

  FaceDetectionResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FaceDetectionResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.RectF, val.boundingBox);
    encoder.encodeArrayPointer(new codec.PointerTo(Landmark), val.landmarks);
  };
  function FaceDetectorOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FaceDetectorOptions.prototype.initDefaults_ = function() {
    this.maxDetectedFaces = 0;
    this.fastMode = false;
  };
  FaceDetectorOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FaceDetectorOptions.validate = function(messageValidator, offset) {
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

  FaceDetectorOptions.encodedSize = codec.kStructHeaderSize + 8;

  FaceDetectorOptions.decode = function(decoder) {
    var packed;
    var val = new FaceDetectorOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.maxDetectedFaces =
        decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.fastMode = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FaceDetectorOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FaceDetectorOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.maxDetectedFaces);
    packed = 0;
    packed |= (val.fastMode & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FaceDetection_Detect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FaceDetection_Detect_Params.prototype.initDefaults_ = function() {
    this.bitmapData = null;
  };
  FaceDetection_Detect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FaceDetection_Detect_Params.validate = function(messageValidator, offset) {
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


    // validate FaceDetection_Detect_Params.bitmapData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, bitmap$.BitmapN32, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FaceDetection_Detect_Params.encodedSize = codec.kStructHeaderSize + 8;

  FaceDetection_Detect_Params.decode = function(decoder) {
    var packed;
    var val = new FaceDetection_Detect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.bitmapData =
        decoder.decodeStructPointer(bitmap$.BitmapN32);
    return val;
  };

  FaceDetection_Detect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FaceDetection_Detect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(bitmap$.BitmapN32, val.bitmapData);
  };
  function FaceDetection_Detect_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FaceDetection_Detect_ResponseParams.prototype.initDefaults_ = function() {
    this.results = null;
  };
  FaceDetection_Detect_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FaceDetection_Detect_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FaceDetection_Detect_ResponseParams.results
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(FaceDetectionResult), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FaceDetection_Detect_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FaceDetection_Detect_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FaceDetection_Detect_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.results =
        decoder.decodeArrayPointer(new codec.PointerTo(FaceDetectionResult));
    return val;
  };

  FaceDetection_Detect_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FaceDetection_Detect_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(FaceDetectionResult), val.results);
  };
  var kFaceDetection_Detect_Name = 1602410957;

  function FaceDetectionPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FaceDetection,
                                                   handleOrPtrInfo);
  }

  function FaceDetectionAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FaceDetection, associatedInterfacePtrInfo);
  }

  FaceDetectionAssociatedPtr.prototype =
      Object.create(FaceDetectionPtr.prototype);
  FaceDetectionAssociatedPtr.prototype.constructor =
      FaceDetectionAssociatedPtr;

  function FaceDetectionProxy(receiver) {
    this.receiver_ = receiver;
  }
  FaceDetectionPtr.prototype.detect = function() {
    return FaceDetectionProxy.prototype.detect
        .apply(this.ptr.getProxy(), arguments);
  };

  FaceDetectionProxy.prototype.detect = function(bitmapData) {
    var params_ = new FaceDetection_Detect_Params();
    params_.bitmapData = bitmapData;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFaceDetection_Detect_Name,
          codec.align(FaceDetection_Detect_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FaceDetection_Detect_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FaceDetection_Detect_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FaceDetectionStub(delegate) {
    this.delegate_ = delegate;
  }
  FaceDetectionStub.prototype.detect = function(bitmapData) {
    return this.delegate_ && this.delegate_.detect && this.delegate_.detect(bitmapData);
  }

  FaceDetectionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FaceDetectionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFaceDetection_Detect_Name:
      var params = reader.decodeStruct(FaceDetection_Detect_Params);
      this.detect(params.bitmapData).then(function(response) {
        var responseParams =
            new FaceDetection_Detect_ResponseParams();
        responseParams.results = response.results;
        var builder = new codec.MessageV1Builder(
            kFaceDetection_Detect_Name,
            codec.align(FaceDetection_Detect_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FaceDetection_Detect_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFaceDetectionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFaceDetection_Detect_Name:
        if (message.expectsResponse())
          paramsClass = FaceDetection_Detect_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFaceDetectionResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFaceDetection_Detect_Name:
        if (message.isResponse())
          paramsClass = FaceDetection_Detect_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FaceDetection = {
    name: 'shape_detection.mojom.FaceDetection',
    kVersion: 0,
    ptrClass: FaceDetectionPtr,
    proxyClass: FaceDetectionProxy,
    stubClass: FaceDetectionStub,
    validateRequest: validateFaceDetectionRequest,
    validateResponse: validateFaceDetectionResponse,
  };
  FaceDetectionStub.prototype.validator = validateFaceDetectionRequest;
  FaceDetectionProxy.prototype.validator = validateFaceDetectionResponse;
  exports.LandmarkType = LandmarkType;
  exports.Landmark = Landmark;
  exports.FaceDetectionResult = FaceDetectionResult;
  exports.FaceDetectorOptions = FaceDetectorOptions;
  exports.FaceDetection = FaceDetection;
  exports.FaceDetectionPtr = FaceDetectionPtr;
  exports.FaceDetectionAssociatedPtr = FaceDetectionAssociatedPtr;
})();