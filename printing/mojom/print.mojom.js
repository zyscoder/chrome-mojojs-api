// printing/mojom/print.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'printing/mojom/print.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('printing.mojom');


  var ColorModel = {};
  ColorModel.kUnknownColorModel = 0;
  ColorModel.kGray = 1;
  ColorModel.kColor = 2;
  ColorModel.kCMYK = 3;
  ColorModel.kCMY = 4;
  ColorModel.kKCMY = 5;
  ColorModel.kCMYPlusK = 6;
  ColorModel.kBlack = 7;
  ColorModel.kGrayscale = 8;
  ColorModel.kRGB = 9;
  ColorModel.kRGB16 = 10;
  ColorModel.kRGBA = 11;
  ColorModel.kColorModeColor = 12;
  ColorModel.kColorModeMonochrome = 13;
  ColorModel.kHPColorColor = 14;
  ColorModel.kHPColorBlack = 15;
  ColorModel.kPrintoutModeNormal = 16;
  ColorModel.kPrintoutModeNormalGray = 17;
  ColorModel.kProcessColorModelCMYK = 18;
  ColorModel.kProcessColorModelGreyscale = 19;
  ColorModel.kProcessColorModelRGB = 20;
  ColorModel.kBrotherCUPSColor = 21;
  ColorModel.kBrotherCUPSMono = 22;
  ColorModel.kBrotherBRScript3Color = 23;
  ColorModel.kBrotherBRScript3Black = 24;
  ColorModel.kEpsonInkColor = 25;
  ColorModel.kEpsonInkMono = 26;
  ColorModel.kSharpARCModeCMColor = 27;
  ColorModel.kSharpARCModeCMBW = 28;
  ColorModel.kXeroxXRXColorAutomatic = 29;
  ColorModel.kXeroxXRXColorBW = 30;
  ColorModel.kColorModelLast = 30;
  ColorModel.kCanonCNColorModeColor = 31;
  ColorModel.kCanonCNColorModeMono = 32;
  ColorModel.kCanonCNIJGrayScaleOne = 33;
  ColorModel.kCanonCNIJGrayScaleZero = 34;
  ColorModel.kKonicaMinoltaSelectColorColor = 35;
  ColorModel.kKonicaMinoltaSelectColorGrayscale = 36;
  ColorModel.kOkiOKControlColor = 37;
  ColorModel.kOkiOKControlGray = 38;
  ColorModel.kXeroxXROutputColorPrintAsColor = 39;
  ColorModel.kXeroxXROutputColorPrintAsGrayscale = 40;
  ColorModel.kHpPjlColorAsGrayNo = 41;
  ColorModel.kHpPjlColorAsGrayYes = 42;
  ColorModel.MIN_VALUE = 0;
  ColorModel.MAX_VALUE = 42;
  ColorModel.DEFAULT_VALUE = 0;

  ColorModel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
      return true;
    }
    return false;
  };

  ColorModel.toKnownEnumValue = function(value) {
    if (this.isKnownEnumValue(value))
      return value;
    return this.DEFAULT_VALUE;
  };

  ColorModel.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var DuplexMode = {};
  DuplexMode.kUnknownDuplexMode = -1;
  DuplexMode.kSimplex = 0;
  DuplexMode.kLongEdge = 1;
  DuplexMode.kShortEdge = 2;
  DuplexMode.MIN_VALUE = -1;
  DuplexMode.MAX_VALUE = 2;
  DuplexMode.DEFAULT_VALUE = -1;

  DuplexMode.isKnownEnumValue = function(value) {
    switch (value) {
    case -1:
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  DuplexMode.toKnownEnumValue = function(value) {
    if (this.isKnownEnumValue(value))
      return value;
    return this.DEFAULT_VALUE;
  };

  DuplexMode.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PageOrientation = {};
  PageOrientation.kUpright = 0;
  PageOrientation.kRotateLeft = 1;
  PageOrientation.kRotateRight = 2;
  PageOrientation.MIN_VALUE = 0;
  PageOrientation.MAX_VALUE = 2;

  PageOrientation.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PageOrientation.toKnownEnumValue = function(value) {
    return value;
  };

  PageOrientation.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PrintScalingOption = {};
  PrintScalingOption.kNone = 0;
  PrintScalingOption.kFitToPrintableArea = 1;
  PrintScalingOption.kSourceSize = 2;
  PrintScalingOption.kFitToPaper = 3;
  PrintScalingOption.MIN_VALUE = 0;
  PrintScalingOption.MAX_VALUE = 3;

  PrintScalingOption.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  PrintScalingOption.toKnownEnumValue = function(value) {
    return value;
  };

  PrintScalingOption.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var SkiaDocumentType = {};
  SkiaDocumentType.kPDF = 0;
  SkiaDocumentType.kMSKP = 1;
  SkiaDocumentType.MIN_VALUE = 0;
  SkiaDocumentType.MAX_VALUE = 1;

  SkiaDocumentType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  SkiaDocumentType.toKnownEnumValue = function(value) {
    return value;
  };

  SkiaDocumentType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var MetafileDataType = {};
  MetafileDataType.kPDF = 0;
  MetafileDataType.MIN_VALUE = 0;
  MetafileDataType.MAX_VALUE = 0;

  MetafileDataType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
      return true;
    }
    return false;
  };

  MetafileDataType.toKnownEnumValue = function(value) {
    return value;
  };

  MetafileDataType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var MarginType = {};
  MarginType.kDefaultMargins = 0;
  MarginType.kNoMargins = 1;
  MarginType.kPrintableAreaMargins = 2;
  MarginType.kCustomMargins = 3;
  MarginType.MIN_VALUE = 0;
  MarginType.MAX_VALUE = 3;

  MarginType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  MarginType.toKnownEnumValue = function(value) {
    return value;
  };

  MarginType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ResultCode = {};
  ResultCode.kSuccess = 0;
  ResultCode.kFailed = 1;
  ResultCode.kAccessDenied = 2;
  ResultCode.kCanceled = 3;
  ResultCode.MIN_VALUE = 0;
  ResultCode.MAX_VALUE = 3;

  ResultCode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ResultCode.toKnownEnumValue = function(value) {
    return value;
  };

  ResultCode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var PrinterType = {};
  PrinterType.kPrivetDeprecated = 0;
  PrinterType.kExtension = 1;
  PrinterType.kPdf = 2;
  PrinterType.kLocal = 3;
  PrinterType.kCloudDeprecated = 4;
  PrinterType.MIN_VALUE = 0;
  PrinterType.MAX_VALUE = 4;

  PrinterType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  PrinterType.toKnownEnumValue = function(value) {
    return value;
  };

  PrinterType.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function PageSizeMargins(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageSizeMargins.prototype.initDefaults_ = function() {
    this.contentWidth = 0;
    this.contentHeight = 0;
    this.marginTop = 0;
    this.marginRight = 0;
    this.marginBottom = 0;
    this.marginLeft = 0;
  };
  PageSizeMargins.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageSizeMargins.validate = function(messageValidator, offset) {
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







    return validator.validationError.NONE;
  };

  PageSizeMargins.encodedSize = codec.kStructHeaderSize + 48;

  PageSizeMargins.decode = function(decoder) {
    var packed;
    var val = new PageSizeMargins();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.contentWidth =
        decoder.decodeStruct(codec.Double);
    val.contentHeight =
        decoder.decodeStruct(codec.Double);
    val.marginTop =
        decoder.decodeStruct(codec.Double);
    val.marginRight =
        decoder.decodeStruct(codec.Double);
    val.marginBottom =
        decoder.decodeStruct(codec.Double);
    val.marginLeft =
        decoder.decodeStruct(codec.Double);
    return val;
  };

  PageSizeMargins.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageSizeMargins.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Double, val.contentWidth);
    encoder.encodeStruct(codec.Double, val.contentHeight);
    encoder.encodeStruct(codec.Double, val.marginTop);
    encoder.encodeStruct(codec.Double, val.marginRight);
    encoder.encodeStruct(codec.Double, val.marginBottom);
    encoder.encodeStruct(codec.Double, val.marginLeft);
  };
  function PageRange(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PageRange.prototype.initDefaults_ = function() {
    this.from = 0;
    this.to = 0;
  };
  PageRange.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PageRange.validate = function(messageValidator, offset) {
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

  PageRange.encodedSize = codec.kStructHeaderSize + 8;

  PageRange.decode = function(decoder) {
    var packed;
    var val = new PageRange();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.from =
        decoder.decodeStruct(codec.Uint32);
    val.to =
        decoder.decodeStruct(codec.Uint32);
    return val;
  };

  PageRange.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PageRange.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.from);
    encoder.encodeStruct(codec.Uint32, val.to);
  };
  exports.ColorModel = ColorModel;
  exports.DuplexMode = DuplexMode;
  exports.PageOrientation = PageOrientation;
  exports.PrintScalingOption = PrintScalingOption;
  exports.SkiaDocumentType = SkiaDocumentType;
  exports.MetafileDataType = MetafileDataType;
  exports.MarginType = MarginType;
  exports.ResultCode = ResultCode;
  exports.PrinterType = PrinterType;
  exports.PageSizeMargins = PageSizeMargins;
  exports.PageRange = PageRange;
})();