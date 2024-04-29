// services/network/public/mojom/network_anonymization_key.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_anonymization_key.mojom';
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
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var schemeful_site$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/schemeful_site.mojom', 'schemeful_site.mojom.js');
  }



  function EmptyNetworkAnonymizationKey(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  EmptyNetworkAnonymizationKey.prototype.initDefaults_ = function() {
  };
  EmptyNetworkAnonymizationKey.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  EmptyNetworkAnonymizationKey.validate = function(messageValidator, offset) {
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

  EmptyNetworkAnonymizationKey.encodedSize = codec.kStructHeaderSize + 0;

  EmptyNetworkAnonymizationKey.decode = function(decoder) {
    var packed;
    var val = new EmptyNetworkAnonymizationKey();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  EmptyNetworkAnonymizationKey.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(EmptyNetworkAnonymizationKey.encodedSize);
    encoder.writeUint32(0);
  };
  function NonEmptyNetworkAnonymizationKey(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NonEmptyNetworkAnonymizationKey.prototype.initDefaults_ = function() {
    this.topFrameSite = null;
    this.isCrossSite = false;
    this.nonce = null;
  };
  NonEmptyNetworkAnonymizationKey.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NonEmptyNetworkAnonymizationKey.validate = function(messageValidator, offset) {
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


    // validate NonEmptyNetworkAnonymizationKey.topFrameSite
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, schemeful_site$.SchemefulSite, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate NonEmptyNetworkAnonymizationKey.nonce
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NonEmptyNetworkAnonymizationKey.encodedSize = codec.kStructHeaderSize + 24;

  NonEmptyNetworkAnonymizationKey.decode = function(decoder) {
    var packed;
    var val = new NonEmptyNetworkAnonymizationKey();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.topFrameSite =
        decoder.decodeStructPointer(schemeful_site$.SchemefulSite);
    packed = decoder.readUint8();
    val.isCrossSite = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.nonce =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  NonEmptyNetworkAnonymizationKey.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NonEmptyNetworkAnonymizationKey.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(schemeful_site$.SchemefulSite, val.topFrameSite);
    packed = 0;
    packed |= (val.isCrossSite & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.nonce);
  };

  function NetworkAnonymizationKey(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  NetworkAnonymizationKey.Tags = {
    empty: 0,
    nonEmpty: 1,
  };

  NetworkAnonymizationKey.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  NetworkAnonymizationKey.prototype.initValue_ = function(value) {
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
        "empty",
        "nonEmpty",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a NetworkAnonymizationKey member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(NetworkAnonymizationKey.prototype, "empty", {
    get: function() {
      if (this.$tag != NetworkAnonymizationKey.Tags.empty) {
        throw new ReferenceError(
            "NetworkAnonymizationKey.empty is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = NetworkAnonymizationKey.Tags.empty;
      this.$data = value;
    }
  });
  Object.defineProperty(NetworkAnonymizationKey.prototype, "nonEmpty", {
    get: function() {
      if (this.$tag != NetworkAnonymizationKey.Tags.nonEmpty) {
        throw new ReferenceError(
            "NetworkAnonymizationKey.nonEmpty is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = NetworkAnonymizationKey.Tags.nonEmpty;
      this.$data = value;
    }
  });


    NetworkAnonymizationKey.encode = function(encoder, val) {
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
        case NetworkAnonymizationKey.Tags.empty:
          encoder.encodeStructPointer(EmptyNetworkAnonymizationKey, val.empty);
          break;
        case NetworkAnonymizationKey.Tags.nonEmpty:
          encoder.encodeStructPointer(NonEmptyNetworkAnonymizationKey, val.nonEmpty);
          break;
      }
      encoder.align();
    };


    NetworkAnonymizationKey.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new NetworkAnonymizationKey();
      var tag = decoder.readUint32();
      switch (tag) {
        case NetworkAnonymizationKey.Tags.empty:
          result.empty = decoder.decodeStructPointer(EmptyNetworkAnonymizationKey);
          break;
        case NetworkAnonymizationKey.Tags.nonEmpty:
          result.nonEmpty = decoder.decodeStructPointer(NonEmptyNetworkAnonymizationKey);
          break;
      }
      decoder.align();

      return result;
    };


    NetworkAnonymizationKey.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case NetworkAnonymizationKey.Tags.empty:
          

    // validate NetworkAnonymizationKey.empty
    err = messageValidator.validateStructPointer(data_offset, EmptyNetworkAnonymizationKey, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case NetworkAnonymizationKey.Tags.nonEmpty:
          

    // validate NetworkAnonymizationKey.nonEmpty
    err = messageValidator.validateStructPointer(data_offset, NonEmptyNetworkAnonymizationKey, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  NetworkAnonymizationKey.encodedSize = 16;
  exports.EmptyNetworkAnonymizationKey = EmptyNetworkAnonymizationKey;
  exports.NonEmptyNetworkAnonymizationKey = NonEmptyNetworkAnonymizationKey;
  exports.NetworkAnonymizationKey = NetworkAnonymizationKey;
})();