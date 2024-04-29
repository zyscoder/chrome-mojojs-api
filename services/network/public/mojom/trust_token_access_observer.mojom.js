// services/network/public/mojom/trust_token_access_observer.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/trust_token_access_observer.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }



  function TrustTokenIssuanceDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustTokenIssuanceDetails.prototype.initDefaults_ = function() {
    this.origin = null;
    this.issuer = null;
    this.blocked = false;
  };
  TrustTokenIssuanceDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenIssuanceDetails.validate = function(messageValidator, offset) {
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


    // validate TrustTokenIssuanceDetails.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenIssuanceDetails.issuer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  TrustTokenIssuanceDetails.encodedSize = codec.kStructHeaderSize + 24;

  TrustTokenIssuanceDetails.decode = function(decoder) {
    var packed;
    var val = new TrustTokenIssuanceDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin =
        decoder.decodeStructPointer(origin$.Origin);
    val.issuer =
        decoder.decodeStructPointer(origin$.Origin);
    packed = decoder.readUint8();
    val.blocked = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TrustTokenIssuanceDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenIssuanceDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStructPointer(origin$.Origin, val.issuer);
    packed = 0;
    packed |= (val.blocked & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TrustTokenRedemptionDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustTokenRedemptionDetails.prototype.initDefaults_ = function() {
    this.origin = null;
    this.issuer = null;
    this.blocked = false;
  };
  TrustTokenRedemptionDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenRedemptionDetails.validate = function(messageValidator, offset) {
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


    // validate TrustTokenRedemptionDetails.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenRedemptionDetails.issuer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  TrustTokenRedemptionDetails.encodedSize = codec.kStructHeaderSize + 24;

  TrustTokenRedemptionDetails.decode = function(decoder) {
    var packed;
    var val = new TrustTokenRedemptionDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin =
        decoder.decodeStructPointer(origin$.Origin);
    val.issuer =
        decoder.decodeStructPointer(origin$.Origin);
    packed = decoder.readUint8();
    val.blocked = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TrustTokenRedemptionDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenRedemptionDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStructPointer(origin$.Origin, val.issuer);
    packed = 0;
    packed |= (val.blocked & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TrustTokenSigningDetails(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustTokenSigningDetails.prototype.initDefaults_ = function() {
    this.origin = null;
    this.blocked = false;
  };
  TrustTokenSigningDetails.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenSigningDetails.validate = function(messageValidator, offset) {
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


    // validate TrustTokenSigningDetails.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  TrustTokenSigningDetails.encodedSize = codec.kStructHeaderSize + 16;

  TrustTokenSigningDetails.decode = function(decoder) {
    var packed;
    var val = new TrustTokenSigningDetails();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin =
        decoder.decodeStructPointer(origin$.Origin);
    packed = decoder.readUint8();
    val.blocked = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TrustTokenSigningDetails.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenSigningDetails.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    packed = 0;
    packed |= (val.blocked & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TrustTokenAccessObserver_OnTrustTokensAccessed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustTokenAccessObserver_OnTrustTokensAccessed_Params.prototype.initDefaults_ = function() {
    this.details = null;
  };
  TrustTokenAccessObserver_OnTrustTokensAccessed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenAccessObserver_OnTrustTokensAccessed_Params.validate = function(messageValidator, offset) {
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


    // validate TrustTokenAccessObserver_OnTrustTokensAccessed_Params.details
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, TrustTokenAccessDetails, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustTokenAccessObserver_OnTrustTokensAccessed_Params.encodedSize = codec.kStructHeaderSize + 16;

  TrustTokenAccessObserver_OnTrustTokensAccessed_Params.decode = function(decoder) {
    var packed;
    var val = new TrustTokenAccessObserver_OnTrustTokensAccessed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.details =
        decoder.decodeStruct(TrustTokenAccessDetails);
    return val;
  };

  TrustTokenAccessObserver_OnTrustTokensAccessed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenAccessObserver_OnTrustTokensAccessed_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(TrustTokenAccessDetails, val.details);
  };
  function TrustTokenAccessObserver_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustTokenAccessObserver_Clone_Params.prototype.initDefaults_ = function() {
    this.listener = new bindings.InterfaceRequest();
  };
  TrustTokenAccessObserver_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenAccessObserver_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate TrustTokenAccessObserver_Clone_Params.listener
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustTokenAccessObserver_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  TrustTokenAccessObserver_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new TrustTokenAccessObserver_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.listener =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TrustTokenAccessObserver_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenAccessObserver_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.listener);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TrustTokenAccessDetails(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  TrustTokenAccessDetails.Tags = {
    issuance: 0,
    redemption: 1,
    signing: 2,
  };

  TrustTokenAccessDetails.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  TrustTokenAccessDetails.prototype.initValue_ = function(value) {
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
        "issuance",
        "redemption",
        "signing",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a TrustTokenAccessDetails member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(TrustTokenAccessDetails.prototype, "issuance", {
    get: function() {
      if (this.$tag != TrustTokenAccessDetails.Tags.issuance) {
        throw new ReferenceError(
            "TrustTokenAccessDetails.issuance is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = TrustTokenAccessDetails.Tags.issuance;
      this.$data = value;
    }
  });
  Object.defineProperty(TrustTokenAccessDetails.prototype, "redemption", {
    get: function() {
      if (this.$tag != TrustTokenAccessDetails.Tags.redemption) {
        throw new ReferenceError(
            "TrustTokenAccessDetails.redemption is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = TrustTokenAccessDetails.Tags.redemption;
      this.$data = value;
    }
  });
  Object.defineProperty(TrustTokenAccessDetails.prototype, "signing", {
    get: function() {
      if (this.$tag != TrustTokenAccessDetails.Tags.signing) {
        throw new ReferenceError(
            "TrustTokenAccessDetails.signing is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = TrustTokenAccessDetails.Tags.signing;
      this.$data = value;
    }
  });


    TrustTokenAccessDetails.encode = function(encoder, val) {
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
        case TrustTokenAccessDetails.Tags.issuance:
          encoder.encodeStructPointer(TrustTokenIssuanceDetails, val.issuance);
          break;
        case TrustTokenAccessDetails.Tags.redemption:
          encoder.encodeStructPointer(TrustTokenRedemptionDetails, val.redemption);
          break;
        case TrustTokenAccessDetails.Tags.signing:
          encoder.encodeStructPointer(TrustTokenSigningDetails, val.signing);
          break;
      }
      encoder.align();
    };


    TrustTokenAccessDetails.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new TrustTokenAccessDetails();
      var tag = decoder.readUint32();
      switch (tag) {
        case TrustTokenAccessDetails.Tags.issuance:
          result.issuance = decoder.decodeStructPointer(TrustTokenIssuanceDetails);
          break;
        case TrustTokenAccessDetails.Tags.redemption:
          result.redemption = decoder.decodeStructPointer(TrustTokenRedemptionDetails);
          break;
        case TrustTokenAccessDetails.Tags.signing:
          result.signing = decoder.decodeStructPointer(TrustTokenSigningDetails);
          break;
      }
      decoder.align();

      return result;
    };


    TrustTokenAccessDetails.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case TrustTokenAccessDetails.Tags.issuance:
          

    // validate TrustTokenAccessDetails.issuance
    err = messageValidator.validateStructPointer(data_offset, TrustTokenIssuanceDetails, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case TrustTokenAccessDetails.Tags.redemption:
          

    // validate TrustTokenAccessDetails.redemption
    err = messageValidator.validateStructPointer(data_offset, TrustTokenRedemptionDetails, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case TrustTokenAccessDetails.Tags.signing:
          

    // validate TrustTokenAccessDetails.signing
    err = messageValidator.validateStructPointer(data_offset, TrustTokenSigningDetails, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  TrustTokenAccessDetails.encodedSize = 16;
  var kTrustTokenAccessObserver_OnTrustTokensAccessed_Name = 345993754;
  var kTrustTokenAccessObserver_Clone_Name = 56849919;

  function TrustTokenAccessObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TrustTokenAccessObserver,
                                                   handleOrPtrInfo);
  }

  function TrustTokenAccessObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TrustTokenAccessObserver, associatedInterfacePtrInfo);
  }

  TrustTokenAccessObserverAssociatedPtr.prototype =
      Object.create(TrustTokenAccessObserverPtr.prototype);
  TrustTokenAccessObserverAssociatedPtr.prototype.constructor =
      TrustTokenAccessObserverAssociatedPtr;

  function TrustTokenAccessObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  TrustTokenAccessObserverPtr.prototype.onTrustTokensAccessed = function() {
    return TrustTokenAccessObserverProxy.prototype.onTrustTokensAccessed
        .apply(this.ptr.getProxy(), arguments);
  };

  TrustTokenAccessObserverProxy.prototype.onTrustTokensAccessed = function(details) {
    var params_ = new TrustTokenAccessObserver_OnTrustTokensAccessed_Params();
    params_.details = details;
    var builder = new codec.MessageV0Builder(
        kTrustTokenAccessObserver_OnTrustTokensAccessed_Name,
        codec.align(TrustTokenAccessObserver_OnTrustTokensAccessed_Params.encodedSize));
    builder.encodeStruct(TrustTokenAccessObserver_OnTrustTokensAccessed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  TrustTokenAccessObserverPtr.prototype.clone = function() {
    return TrustTokenAccessObserverProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  TrustTokenAccessObserverProxy.prototype.clone = function(listener) {
    var params_ = new TrustTokenAccessObserver_Clone_Params();
    params_.listener = listener;
    var builder = new codec.MessageV0Builder(
        kTrustTokenAccessObserver_Clone_Name,
        codec.align(TrustTokenAccessObserver_Clone_Params.encodedSize));
    builder.encodeStruct(TrustTokenAccessObserver_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function TrustTokenAccessObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  TrustTokenAccessObserverStub.prototype.onTrustTokensAccessed = function(details) {
    return this.delegate_ && this.delegate_.onTrustTokensAccessed && this.delegate_.onTrustTokensAccessed(details);
  }
  TrustTokenAccessObserverStub.prototype.clone = function(listener) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(listener);
  }

  TrustTokenAccessObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTrustTokenAccessObserver_OnTrustTokensAccessed_Name:
      var params = reader.decodeStruct(TrustTokenAccessObserver_OnTrustTokensAccessed_Params);
      this.onTrustTokensAccessed(params.details);
      return true;
    case kTrustTokenAccessObserver_Clone_Name:
      var params = reader.decodeStruct(TrustTokenAccessObserver_Clone_Params);
      this.clone(params.listener);
      return true;
    default:
      return false;
    }
  };

  TrustTokenAccessObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateTrustTokenAccessObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTrustTokenAccessObserver_OnTrustTokensAccessed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TrustTokenAccessObserver_OnTrustTokensAccessed_Params;
      break;
      case kTrustTokenAccessObserver_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = TrustTokenAccessObserver_Clone_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTrustTokenAccessObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var TrustTokenAccessObserver = {
    name: 'network.mojom.TrustTokenAccessObserver',
    kVersion: 0,
    ptrClass: TrustTokenAccessObserverPtr,
    proxyClass: TrustTokenAccessObserverProxy,
    stubClass: TrustTokenAccessObserverStub,
    validateRequest: validateTrustTokenAccessObserverRequest,
    validateResponse: null,
  };
  TrustTokenAccessObserverStub.prototype.validator = validateTrustTokenAccessObserverRequest;
  TrustTokenAccessObserverProxy.prototype.validator = null;
  exports.TrustTokenIssuanceDetails = TrustTokenIssuanceDetails;
  exports.TrustTokenRedemptionDetails = TrustTokenRedemptionDetails;
  exports.TrustTokenSigningDetails = TrustTokenSigningDetails;
  exports.TrustTokenAccessDetails = TrustTokenAccessDetails;
  exports.TrustTokenAccessObserver = TrustTokenAccessObserver;
  exports.TrustTokenAccessObserverPtr = TrustTokenAccessObserverPtr;
  exports.TrustTokenAccessObserverAssociatedPtr = TrustTokenAccessObserverAssociatedPtr;
})();