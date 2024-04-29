// ui/events/mojom/event.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/events/mojom/event.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var event_constants$ =
      mojo.internal.exposeNamespace('ui.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/events/mojom/event_constants.mojom', 'event_constants.mojom.js');
  }
  var keyboard_codes$ =
      mojo.internal.exposeNamespace('ui.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/events/mojom/keyboard_codes.mojom', 'keyboard_codes.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../gfx/geometry/mojom/geometry.mojom.js');
  }
  var latency_info$ =
      mojo.internal.exposeNamespace('ui.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/latency/mojom/latency_info.mojom', '../../latency/mojom/latency_info.mojom.js');
  }



  function KeyData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  KeyData.prototype.initDefaults_ = function() {
    this.keyCode = 0;
    this.domCode = 0;
    this.domKey = 0;
    this.isChar = false;
  };
  KeyData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  KeyData.validate = function(messageValidator, offset) {
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

  KeyData.encodedSize = codec.kStructHeaderSize + 16;

  KeyData.decode = function(decoder) {
    var packed;
    var val = new KeyData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.keyCode =
        decoder.decodeStruct(codec.Int32);
    val.domCode =
        decoder.decodeStruct(codec.Uint32);
    val.domKey =
        decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isChar = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  KeyData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(KeyData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.keyCode);
    encoder.encodeStruct(codec.Uint32, val.domCode);
    encoder.encodeStruct(codec.Int32, val.domKey);
    packed = 0;
    packed |= (val.isChar & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function LocationData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LocationData.prototype.initDefaults_ = function() {
    this.relativeLocation = null;
    this.rootLocation = null;
  };
  LocationData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LocationData.validate = function(messageValidator, offset) {
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


    // validate LocationData.relativeLocation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate LocationData.rootLocation
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.PointF, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LocationData.encodedSize = codec.kStructHeaderSize + 16;

  LocationData.decode = function(decoder) {
    var packed;
    var val = new LocationData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.relativeLocation =
        decoder.decodeStructPointer(geometry$.PointF);
    val.rootLocation =
        decoder.decodeStructPointer(geometry$.PointF);
    return val;
  };

  LocationData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LocationData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.PointF, val.relativeLocation);
    encoder.encodeStructPointer(geometry$.PointF, val.rootLocation);
  };
  function GesturePinchData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GesturePinchData.prototype.initDefaults_ = function() {
    this.scale = 0;
  };
  GesturePinchData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GesturePinchData.validate = function(messageValidator, offset) {
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

  GesturePinchData.encodedSize = codec.kStructHeaderSize + 8;

  GesturePinchData.decode = function(decoder) {
    var packed;
    var val = new GesturePinchData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scale =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GesturePinchData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GesturePinchData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.scale);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GestureSwipeData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GestureSwipeData.prototype.initDefaults_ = function() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
  };
  GestureSwipeData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GestureSwipeData.validate = function(messageValidator, offset) {
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

  GestureSwipeData.encodedSize = codec.kStructHeaderSize + 8;

  GestureSwipeData.decode = function(decoder) {
    var packed;
    var val = new GestureSwipeData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.left = (packed >> 0) & 1 ? true : false;
    val.right = (packed >> 1) & 1 ? true : false;
    val.up = (packed >> 2) & 1 ? true : false;
    val.down = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GestureSwipeData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GestureSwipeData.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.left & 1) << 0
    packed |= (val.right & 1) << 1
    packed |= (val.up & 1) << 2
    packed |= (val.down & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GestureData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GestureData.prototype.initDefaults_ = function() {
    this.location = null;
    this.deviceType = 0;
    this.details = null;
  };
  GestureData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GestureData.validate = function(messageValidator, offset) {
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


    // validate GestureData.location
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, LocationData, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GestureData.deviceType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, event_constants$.GestureDeviceType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GestureData.details
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 16, GestureDataDetails, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GestureData.encodedSize = codec.kStructHeaderSize + 32;

  GestureData.decode = function(decoder) {
    var packed;
    var val = new GestureData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.location =
        decoder.decodeStructPointer(LocationData);
    val.deviceType =
        decoder.decodeStruct(new codec.Enum(event_constants$.GestureDeviceType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.details =
        decoder.decodeStruct(GestureDataDetails);
    return val;
  };

  GestureData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GestureData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(LocationData, val.location);
    encoder.encodeStruct(codec.Int32, val.deviceType);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(GestureDataDetails, val.details);
  };
  function ScrollData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ScrollData.prototype.initDefaults_ = function() {
    this.location = null;
    this.xOffset = 0;
    this.yOffset = 0;
    this.xOffsetOrdinal = 0;
    this.yOffsetOrdinal = 0;
    this.fingerCount = 0;
    this.momentumPhase = 0;
    this.scrollEventPhase = 0;
  };
  ScrollData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ScrollData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ScrollData.location
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, LocationData, false);
    if (err !== validator.validationError.NONE)
        return err;







    // validate ScrollData.momentumPhase
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, event_constants$.EventMomentumPhase);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ScrollData.scrollEventPhase
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 32, event_constants$.ScrollEventPhase);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ScrollData.encodedSize = codec.kStructHeaderSize + 40;

  ScrollData.decode = function(decoder) {
    var packed;
    var val = new ScrollData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.location =
        decoder.decodeStructPointer(LocationData);
    val.xOffset =
        decoder.decodeStruct(codec.Float);
    val.yOffset =
        decoder.decodeStruct(codec.Float);
    val.xOffsetOrdinal =
        decoder.decodeStruct(codec.Float);
    val.yOffsetOrdinal =
        decoder.decodeStruct(codec.Float);
    val.fingerCount =
        decoder.decodeStruct(codec.Int32);
    val.momentumPhase =
        decoder.decodeStruct(new codec.Enum(event_constants$.EventMomentumPhase));
    val.scrollEventPhase =
        decoder.decodeStruct(new codec.Enum(event_constants$.ScrollEventPhase));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ScrollData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ScrollData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(LocationData, val.location);
    encoder.encodeStruct(codec.Float, val.xOffset);
    encoder.encodeStruct(codec.Float, val.yOffset);
    encoder.encodeStruct(codec.Float, val.xOffsetOrdinal);
    encoder.encodeStruct(codec.Float, val.yOffsetOrdinal);
    encoder.encodeStruct(codec.Int32, val.fingerCount);
    encoder.encodeStruct(codec.Int32, val.momentumPhase);
    encoder.encodeStruct(codec.Int32, val.scrollEventPhase);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PointerDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PointerDetails.prototype.initDefaults_ = function() {
    this.pointerType = 0;
    this.radiusX = 0;
    this.radiusY = 0;
    this.force = 0;
    this.tiltX = 0;
    this.tiltY = 0;
    this.tangentialPressure = 0;
    this.twist = 0;
    this.id = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  };
  PointerDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PointerDetails.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PointerDetails.pointerType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, event_constants$.EventPointerType);
    if (err !== validator.validationError.NONE)
        return err;











    return validator.validationError.NONE;
  };

  PointerDetails.encodedSize = codec.kStructHeaderSize + 48;

  PointerDetails.decode = function(decoder) {
    var packed;
    var val = new PointerDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pointerType =
        decoder.decodeStruct(new codec.Enum(event_constants$.EventPointerType));
    val.radiusX =
        decoder.decodeStruct(codec.Float);
    val.radiusY =
        decoder.decodeStruct(codec.Float);
    val.force =
        decoder.decodeStruct(codec.Float);
    val.tiltX =
        decoder.decodeStruct(codec.Float);
    val.tiltY =
        decoder.decodeStruct(codec.Float);
    val.tangentialPressure =
        decoder.decodeStruct(codec.Float);
    val.twist =
        decoder.decodeStruct(codec.Float);
    val.id =
        decoder.decodeStruct(codec.Int32);
    val.offsetX =
        decoder.decodeStruct(codec.Int32);
    val.offsetY =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PointerDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PointerDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.pointerType);
    encoder.encodeStruct(codec.Float, val.radiusX);
    encoder.encodeStruct(codec.Float, val.radiusY);
    encoder.encodeStruct(codec.Float, val.force);
    encoder.encodeStruct(codec.Float, val.tiltX);
    encoder.encodeStruct(codec.Float, val.tiltY);
    encoder.encodeStruct(codec.Float, val.tangentialPressure);
    encoder.encodeStruct(codec.Float, val.twist);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.encodeStruct(codec.Int32, val.offsetX);
    encoder.encodeStruct(codec.Int32, val.offsetY);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function MouseData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  MouseData.prototype.initDefaults_ = function() {
    this.changedButtonFlags = 0;
    this.location = null;
    this.pointerDetails = null;
    this.wheelOffset = null;
    this.tick120ths = null;
  };
  MouseData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  MouseData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate MouseData.location
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, LocationData, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MouseData.pointerDetails
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, PointerDetails, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MouseData.wheelOffset
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Vector2d, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate MouseData.tick120ths
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Vector2d, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  MouseData.encodedSize = codec.kStructHeaderSize + 40;

  MouseData.decode = function(decoder) {
    var packed;
    var val = new MouseData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.changedButtonFlags =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.location =
        decoder.decodeStructPointer(LocationData);
    val.pointerDetails =
        decoder.decodeStructPointer(PointerDetails);
    val.wheelOffset =
        decoder.decodeStructPointer(geometry$.Vector2d);
    val.tick120ths =
        decoder.decodeStructPointer(geometry$.Vector2d);
    return val;
  };

  MouseData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(MouseData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.changedButtonFlags);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(LocationData, val.location);
    encoder.encodeStructPointer(PointerDetails, val.pointerDetails);
    encoder.encodeStructPointer(geometry$.Vector2d, val.wheelOffset);
    encoder.encodeStructPointer(geometry$.Vector2d, val.tick120ths);
  };
  function TouchData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TouchData.prototype.initDefaults_ = function() {
    this.mayCauseScrolling = false;
    this.hovering = false;
    this.location = null;
    this.pointerDetails = null;
  };
  TouchData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TouchData.validate = function(messageValidator, offset) {
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




    // validate TouchData.location
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, LocationData, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TouchData.pointerDetails
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, PointerDetails, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TouchData.encodedSize = codec.kStructHeaderSize + 24;

  TouchData.decode = function(decoder) {
    var packed;
    var val = new TouchData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.mayCauseScrolling = (packed >> 0) & 1 ? true : false;
    val.hovering = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.location =
        decoder.decodeStructPointer(LocationData);
    val.pointerDetails =
        decoder.decodeStructPointer(PointerDetails);
    return val;
  };

  TouchData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TouchData.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.mayCauseScrolling & 1) << 0
    packed |= (val.hovering & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(LocationData, val.location);
    encoder.encodeStructPointer(PointerDetails, val.pointerDetails);
  };
  function Event(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Event.prototype.initDefaults_ = function() {
    this.action = 0;
    this.flags = 0;
    this.timeStamp = null;
    this.latency = null;
    this.keyData = null;
    this.gestureData = null;
    this.scrollData = null;
    this.touchData = null;
    this.mouseData = null;
    this.properties = null;
  };
  Event.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Event.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 80}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Event.action
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, event_constants$.EventType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate Event.timeStamp
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Event.latency
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, latency_info$.LatencyInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Event.keyData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, KeyData, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Event.gestureData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, GestureData, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Event.scrollData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, ScrollData, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Event.touchData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, TouchData, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Event.mouseData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, MouseData, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Event.properties
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 64, true, codec.String, new codec.ArrayOf(codec.Uint8), false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Event.encodedSize = codec.kStructHeaderSize + 72;

  Event.decode = function(decoder) {
    var packed;
    var val = new Event();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.action =
        decoder.decodeStruct(new codec.Enum(event_constants$.EventType));
    val.flags =
        decoder.decodeStruct(codec.Int32);
    val.timeStamp =
        decoder.decodeStructPointer(time$.TimeTicks);
    val.latency =
        decoder.decodeStructPointer(latency_info$.LatencyInfo);
    val.keyData =
        decoder.decodeStructPointer(KeyData);
    val.gestureData =
        decoder.decodeStructPointer(GestureData);
    val.scrollData =
        decoder.decodeStructPointer(ScrollData);
    val.touchData =
        decoder.decodeStructPointer(TouchData);
    val.mouseData =
        decoder.decodeStructPointer(MouseData);
    val.properties =
        decoder.decodeMapPointer(codec.String, new codec.ArrayOf(codec.Uint8));
    return val;
  };

  Event.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Event.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.action);
    encoder.encodeStruct(codec.Int32, val.flags);
    encoder.encodeStructPointer(time$.TimeTicks, val.timeStamp);
    encoder.encodeStructPointer(latency_info$.LatencyInfo, val.latency);
    encoder.encodeStructPointer(KeyData, val.keyData);
    encoder.encodeStructPointer(GestureData, val.gestureData);
    encoder.encodeStructPointer(ScrollData, val.scrollData);
    encoder.encodeStructPointer(TouchData, val.touchData);
    encoder.encodeStructPointer(MouseData, val.mouseData);
    encoder.encodeMapPointer(codec.String, new codec.ArrayOf(codec.Uint8), val.properties);
  };

  function GestureDataDetails(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  GestureDataDetails.Tags = {
    pinch: 0,
    swipe: 1,
  };

  GestureDataDetails.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  GestureDataDetails.prototype.initValue_ = function(value) {
    if (value == undefined) {
      return;
    }

    var keys = Object.keys(value);
    if (keys.length == 0) {
      return;
    }

    if (keys.length > 1) {
      throw new TypeError("You may set only one member on a union.");
    }

    var fields = [
        "pinch",
        "swipe",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a GestureDataDetails member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(GestureDataDetails.prototype, "pinch", {
    get: function() {
      if (this.$tag != GestureDataDetails.Tags.pinch) {
        throw new ReferenceError(
            "GestureDataDetails.pinch is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = GestureDataDetails.Tags.pinch;
      this.$data = value;
    }
  });
  Object.defineProperty(GestureDataDetails.prototype, "swipe", {
    get: function() {
      if (this.$tag != GestureDataDetails.Tags.swipe) {
        throw new ReferenceError(
            "GestureDataDetails.swipe is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = GestureDataDetails.Tags.swipe;
      this.$data = value;
    }
  });


    GestureDataDetails.encode = function(encoder, val) {
      if (val == null) {
        encoder.writeUint64(0);
        encoder.writeUint64(0);
        return;
      }
      if (val.$tag == undefined) {
        throw new TypeError("Cannot encode unions with an unknown member set.");
      }

      encoder.writeUint32(16);
      encoder.writeUint32(val.$tag);
      switch (val.$tag) {
        case GestureDataDetails.Tags.pinch:
          encoder.encodeStructPointer(GesturePinchData, val.pinch);
          break;
        case GestureDataDetails.Tags.swipe:
          encoder.encodeStructPointer(GestureSwipeData, val.swipe);
          break;
      }
      encoder.align();
    };


    GestureDataDetails.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new GestureDataDetails();
      var tag = decoder.readUint32();
      switch (tag) {
        case GestureDataDetails.Tags.pinch:
          result.pinch = decoder.decodeStructPointer(GesturePinchData);
          break;
        case GestureDataDetails.Tags.swipe:
          result.swipe = decoder.decodeStructPointer(GestureSwipeData);
          break;
      }
      decoder.align();

      return result;
    };


    GestureDataDetails.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case GestureDataDetails.Tags.pinch:
          

    // validate GestureDataDetails.pinch
    err = messageValidator.validateStructPointer(data_offset, GesturePinchData, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case GestureDataDetails.Tags.swipe:
          

    // validate GestureDataDetails.swipe
    err = messageValidator.validateStructPointer(data_offset, GestureSwipeData, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  GestureDataDetails.encodedSize = 16;
  exports.KeyData = KeyData;
  exports.LocationData = LocationData;
  exports.GesturePinchData = GesturePinchData;
  exports.GestureSwipeData = GestureSwipeData;
  exports.GestureData = GestureData;
  exports.ScrollData = ScrollData;
  exports.PointerDetails = PointerDetails;
  exports.MouseData = MouseData;
  exports.TouchData = TouchData;
  exports.Event = Event;
  exports.GestureDataDetails = GestureDataDetails;
})();