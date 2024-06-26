// ui/display/mojom/display_snapshot.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/display/mojom/display_snapshot.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('display.mojom');
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var display_constants$ =
      mojo.internal.exposeNamespace('display.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/display/mojom/display_constants.mojom', 'display_constants.mojom.js');
  }
  var display_mode$ =
      mojo.internal.exposeNamespace('display.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/display/mojom/display_mode.mojom', 'display_mode.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../gfx/geometry/mojom/geometry.mojom.js');
  }
  var color_space$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/color_space.mojom', '../../gfx/mojom/color_space.mojom.js');
  }
  var hdr_static_metadata$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/hdr_static_metadata.mojom', '../../gfx/mojom/hdr_static_metadata.mojom.js');
  }



  function DisplaySnapshot(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DisplaySnapshot.prototype.initDefaults_ = function() {
    this.displayId = 0;
    this.portDisplayId = 0;
    this.edidDisplayId = 0;
    this.connectorIndex = 0;
    this.isAspectPreservingScaling = false;
    this.hasOverscan = false;
    this.hasContentProtectionKey = false;
    this.hasColorCorrectionMatrix = false;
    this.colorCorrectionInLinearSpace = false;
    this.hasCurrentMode = false;
    this.hasNativeMode = false;
    this.type = 0;
    this.origin = null;
    this.physicalSize = null;
    this.baseConnectorId = 0;
    this.pathTopology = null;
    this.privacyScreenState = 0;
    this.bitsPerChannel = 0;
    this.colorSpace = null;
    this.hdrStaticMetadata = null;
    this.displayName = null;
    this.sysPath = null;
    this.modes = null;
    this.panelOrientation = 0;
    this.yearOfManufacture = 0;
    this.edid = null;
    this.currentModeIndex = 0;
    this.nativeModeIndex = 0;
    this.productCode = 0;
    this.maximumCursorSize = null;
    this.variableRefreshRateState = 0;
    this.vsyncRateMin = 0;
  };
  DisplaySnapshot.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DisplaySnapshot.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 176}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;






    // validate DisplaySnapshot.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Point, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplaySnapshot.physicalSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplaySnapshot.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 28, display_constants$.DisplayConnectionType);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DisplaySnapshot.pathTopology
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 56, 8, codec.Uint64, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;




    // validate DisplaySnapshot.privacyScreenState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 64, display_constants$.PrivacyScreenState);
    if (err !== validator.validationError.NONE)
        return err;





    // validate DisplaySnapshot.colorSpace
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 72, color_space$.ColorSpace, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate DisplaySnapshot.hdrStaticMetadata
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 80, hdr_static_metadata$.HDRStaticMetadata, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplaySnapshot.displayName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 88, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplaySnapshot.sysPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 96, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplaySnapshot.modes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 104, 8, new codec.PointerTo(display_mode$.DisplayMode), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplaySnapshot.panelOrientation
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 112, display_constants$.PanelOrientation);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplaySnapshot.edid
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 120, 1, codec.Uint8, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;








    // validate DisplaySnapshot.maximumCursorSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 152, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate DisplaySnapshot.variableRefreshRateState
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 160, display_constants$.VariableRefreshRateState);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  DisplaySnapshot.encodedSize = codec.kStructHeaderSize + 168;

  DisplaySnapshot.decode = function(decoder) {
    var packed;
    var val = new DisplaySnapshot();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.displayId =
        decoder.decodeStruct(codec.Int64);
    val.portDisplayId =
        decoder.decodeStruct(codec.Int64);
    val.edidDisplayId =
        decoder.decodeStruct(codec.Int64);
    val.connectorIndex =
        decoder.decodeStruct(codec.Uint16);
    packed = decoder.readUint8();
    val.isAspectPreservingScaling = (packed >> 0) & 1 ? true : false;
    val.hasOverscan = (packed >> 1) & 1 ? true : false;
    val.hasContentProtectionKey = (packed >> 2) & 1 ? true : false;
    val.hasColorCorrectionMatrix = (packed >> 3) & 1 ? true : false;
    val.colorCorrectionInLinearSpace = (packed >> 4) & 1 ? true : false;
    val.hasCurrentMode = (packed >> 5) & 1 ? true : false;
    val.hasNativeMode = (packed >> 6) & 1 ? true : false;
    decoder.skip(1);
    val.type =
        decoder.decodeStruct(new codec.Enum(display_constants$.DisplayConnectionType));
    val.origin =
        decoder.decodeStructPointer(geometry$.Point);
    val.physicalSize =
        decoder.decodeStructPointer(geometry$.Size);
    val.baseConnectorId =
        decoder.decodeStruct(codec.Uint64);
    val.pathTopology =
        decoder.decodeArrayPointer(codec.Uint64);
    val.privacyScreenState =
        decoder.decodeStruct(new codec.Enum(display_constants$.PrivacyScreenState));
    val.bitsPerChannel =
        decoder.decodeStruct(codec.Uint32);
    val.colorSpace =
        decoder.decodeStructPointer(color_space$.ColorSpace);
    val.hdrStaticMetadata =
        decoder.decodeStructPointer(hdr_static_metadata$.HDRStaticMetadata);
    val.displayName =
        decoder.decodeStruct(codec.String);
    val.sysPath =
        decoder.decodeStructPointer(file_path$.FilePath);
    val.modes =
        decoder.decodeArrayPointer(new codec.PointerTo(display_mode$.DisplayMode));
    val.panelOrientation =
        decoder.decodeStruct(new codec.Enum(display_constants$.PanelOrientation));
    val.yearOfManufacture =
        decoder.decodeStruct(codec.Int32);
    val.edid =
        decoder.decodeArrayPointer(codec.Uint8);
    val.currentModeIndex =
        decoder.decodeStruct(codec.Uint64);
    val.nativeModeIndex =
        decoder.decodeStruct(codec.Uint64);
    val.productCode =
        decoder.decodeStruct(codec.Int64);
    val.maximumCursorSize =
        decoder.decodeStructPointer(geometry$.Size);
    val.variableRefreshRateState =
        decoder.decodeStruct(new codec.Enum(display_constants$.VariableRefreshRateState));
    val.vsyncRateMin =
        decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DisplaySnapshot.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DisplaySnapshot.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.displayId);
    encoder.encodeStruct(codec.Int64, val.portDisplayId);
    encoder.encodeStruct(codec.Int64, val.edidDisplayId);
    encoder.encodeStruct(codec.Uint16, val.connectorIndex);
    packed = 0;
    packed |= (val.isAspectPreservingScaling & 1) << 0
    packed |= (val.hasOverscan & 1) << 1
    packed |= (val.hasContentProtectionKey & 1) << 2
    packed |= (val.hasColorCorrectionMatrix & 1) << 3
    packed |= (val.colorCorrectionInLinearSpace & 1) << 4
    packed |= (val.hasCurrentMode & 1) << 5
    packed |= (val.hasNativeMode & 1) << 6
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStructPointer(geometry$.Point, val.origin);
    encoder.encodeStructPointer(geometry$.Size, val.physicalSize);
    encoder.encodeStruct(codec.Uint64, val.baseConnectorId);
    encoder.encodeArrayPointer(codec.Uint64, val.pathTopology);
    encoder.encodeStruct(codec.Int32, val.privacyScreenState);
    encoder.encodeStruct(codec.Uint32, val.bitsPerChannel);
    encoder.encodeStructPointer(color_space$.ColorSpace, val.colorSpace);
    encoder.encodeStructPointer(hdr_static_metadata$.HDRStaticMetadata, val.hdrStaticMetadata);
    encoder.encodeStruct(codec.String, val.displayName);
    encoder.encodeStructPointer(file_path$.FilePath, val.sysPath);
    encoder.encodeArrayPointer(new codec.PointerTo(display_mode$.DisplayMode), val.modes);
    encoder.encodeStruct(codec.Int32, val.panelOrientation);
    encoder.encodeStruct(codec.Int32, val.yearOfManufacture);
    encoder.encodeArrayPointer(codec.Uint8, val.edid);
    encoder.encodeStruct(codec.Uint64, val.currentModeIndex);
    encoder.encodeStruct(codec.Uint64, val.nativeModeIndex);
    encoder.encodeStruct(codec.Int64, val.productCode);
    encoder.encodeStructPointer(geometry$.Size, val.maximumCursorSize);
    encoder.encodeStruct(codec.Int32, val.variableRefreshRateState);
    encoder.encodeStruct(codec.Uint16, val.vsyncRateMin);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.DisplaySnapshot = DisplaySnapshot;
})();