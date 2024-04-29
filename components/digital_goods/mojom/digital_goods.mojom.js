// components/digital_goods/mojom/digital_goods.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/digital_goods/mojom/digital_goods.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('payments.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }
  var payment_request_data$ =
      mojo.internal.exposeNamespace('payments.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'components/payments/mojom/payment_request_data.mojom', '../../payments/mojom/payment_request_data.mojom.js');
  }


  var BillingResponseCode = {};
  BillingResponseCode.kOk = 0;
  BillingResponseCode.kError = 1;
  BillingResponseCode.kItemAlreadyOwned = 2;
  BillingResponseCode.kItemNotOwned = 3;
  BillingResponseCode.kItemUnavailable = 4;
  BillingResponseCode.kClientAppUnavailable = 5;
  BillingResponseCode.kClientAppError = 6;
  BillingResponseCode.MIN_VALUE = 0;
  BillingResponseCode.MAX_VALUE = 6;

  BillingResponseCode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return true;
    }
    return false;
  };

  BillingResponseCode.toKnownEnumValue = function(value) {
    return value;
  };

  BillingResponseCode.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ItemType = {};
  ItemType.kUnknown = 0;
  ItemType.kProduct = 1;
  ItemType.kSubscription = 2;
  ItemType.MIN_VALUE = 0;
  ItemType.MAX_VALUE = 2;

  ItemType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ItemType.toKnownEnumValue = function(value) {
    return value;
  };

  ItemType.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var CreateDigitalGoodsResponseCode = {};
  CreateDigitalGoodsResponseCode.kOk = 0;
  CreateDigitalGoodsResponseCode.kError = 1;
  CreateDigitalGoodsResponseCode.kUnsupportedPaymentMethod = 2;
  CreateDigitalGoodsResponseCode.kUnsupportedContext = 3;
  CreateDigitalGoodsResponseCode.MIN_VALUE = 0;
  CreateDigitalGoodsResponseCode.MAX_VALUE = 3;

  CreateDigitalGoodsResponseCode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  CreateDigitalGoodsResponseCode.toKnownEnumValue = function(value) {
    return value;
  };

  CreateDigitalGoodsResponseCode.validate = function(enumValue) {
    const isExtensible = true;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ItemDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ItemDetails.prototype.initDefaults_ = function() {
    this.itemId = null;
    this.title = null;
    this.description = null;
    this.price = null;
    this.subscriptionPeriod = null;
    this.freeTrialPeriod = null;
    this.introductoryPrice = null;
    this.introductoryPricePeriod = null;
    this.introductoryPriceCycles = 0;
    this.type = 0;
    this.iconUrls = null;
  };
  ItemDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ItemDetails.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72},
      {version: 1, numBytes: 88}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ItemDetails.itemId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ItemDetails.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ItemDetails.description
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ItemDetails.price
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, payment_request_data$.PaymentCurrencyAmount, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ItemDetails.subscriptionPeriod
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ItemDetails.freeTrialPeriod
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ItemDetails.introductoryPrice
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, payment_request_data$.PaymentCurrencyAmount, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ItemDetails.introductoryPricePeriod
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, true)
    if (err !== validator.validationError.NONE)
        return err;




    // version check ItemDetails.type
    if (!messageValidator.isFieldInStructVersion(offset, 1))
      return validator.validationError.NONE;
    // validate ItemDetails.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 68, ItemType);
    if (err !== validator.validationError.NONE)
        return err;



    // version check ItemDetails.iconUrls
    if (!messageValidator.isFieldInStructVersion(offset, 1))
      return validator.validationError.NONE;
    // validate ItemDetails.iconUrls
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 72, 8, new codec.PointerTo(url$.Url), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ItemDetails.encodedSize = codec.kStructHeaderSize + 80;

  ItemDetails.decode = function(decoder) {
    var packed;
    var val = new ItemDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.itemId =
        decoder.decodeStruct(codec.String);
    val.title =
        decoder.decodeStruct(codec.String);
    val.description =
        decoder.decodeStruct(codec.String);
    val.price =
        decoder.decodeStructPointer(payment_request_data$.PaymentCurrencyAmount);
    val.subscriptionPeriod =
        decoder.decodeStruct(codec.NullableString);
    val.freeTrialPeriod =
        decoder.decodeStruct(codec.NullableString);
    val.introductoryPrice =
        decoder.decodeStructPointer(payment_request_data$.PaymentCurrencyAmount);
    val.introductoryPricePeriod =
        decoder.decodeStruct(codec.NullableString);
    if (version >= 1) {
      val.introductoryPriceCycles =
          decoder.decodeStruct(codec.Uint32);
    } else {
      val.introductoryPriceCycles = null;
    }
    if (version >= 1) {
      val.type =
          decoder.decodeStruct(new codec.Enum(ItemType));
    } else {
      val.type = null;
    }
    if (version >= 1) {
      val.iconUrls =
          decoder.decodeArrayPointer(new codec.PointerTo(url$.Url));
    } else {
      val.iconUrls = null;
    }
    return val;
  };

  ItemDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ItemDetails.encodedSize);
    encoder.writeUint32(1);
    encoder.encodeStruct(codec.String, val.itemId);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeStruct(codec.String, val.description);
    encoder.encodeStructPointer(payment_request_data$.PaymentCurrencyAmount, val.price);
    encoder.encodeStruct(codec.NullableString, val.subscriptionPeriod);
    encoder.encodeStruct(codec.NullableString, val.freeTrialPeriod);
    encoder.encodeStructPointer(payment_request_data$.PaymentCurrencyAmount, val.introductoryPrice);
    encoder.encodeStruct(codec.NullableString, val.introductoryPricePeriod);
    encoder.encodeStruct(codec.Uint32, val.introductoryPriceCycles);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeArrayPointer(new codec.PointerTo(url$.Url), val.iconUrls);
  };
  function PurchaseReference(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PurchaseReference.prototype.initDefaults_ = function() {
    this.itemId = null;
    this.purchaseToken = null;
  };
  PurchaseReference.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PurchaseReference.validate = function(messageValidator, offset) {
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


    // validate PurchaseReference.itemId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate PurchaseReference.purchaseToken
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PurchaseReference.encodedSize = codec.kStructHeaderSize + 16;

  PurchaseReference.decode = function(decoder) {
    var packed;
    var val = new PurchaseReference();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.itemId =
        decoder.decodeStruct(codec.String);
    val.purchaseToken =
        decoder.decodeStruct(codec.String);
    return val;
  };

  PurchaseReference.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PurchaseReference.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.itemId);
    encoder.encodeStruct(codec.String, val.purchaseToken);
  };
  exports.BillingResponseCode = BillingResponseCode;
  exports.ItemType = ItemType;
  exports.CreateDigitalGoodsResponseCode = CreateDigitalGoodsResponseCode;
  exports.ItemDetails = ItemDetails;
  exports.PurchaseReference = PurchaseReference;
})();