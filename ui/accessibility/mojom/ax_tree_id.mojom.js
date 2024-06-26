// ui/accessibility/mojom/ax_tree_id.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/accessibility/mojom/ax_tree_id.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ax.mojom');
  var ax_enums$ =
      mojo.internal.exposeNamespace('ax.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/accessibility/ax_enums.mojom', '../ax_enums.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }




  function AXTreeID(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  AXTreeID.Tags = {
    unknown: 0,
    token: 1,
  };

  AXTreeID.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  AXTreeID.prototype.initValue_ = function(value) {
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
        "unknown",
        "token",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a AXTreeID member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(AXTreeID.prototype, "unknown", {
    get: function() {
      if (this.$tag != AXTreeID.Tags.unknown) {
        throw new ReferenceError(
            "AXTreeID.unknown is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = AXTreeID.Tags.unknown;
      this.$data = value;
    }
  });
  Object.defineProperty(AXTreeID.prototype, "token", {
    get: function() {
      if (this.$tag != AXTreeID.Tags.token) {
        throw new ReferenceError(
            "AXTreeID.token is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = AXTreeID.Tags.token;
      this.$data = value;
    }
  });


    AXTreeID.encode = function(encoder, val) {
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
        case AXTreeID.Tags.unknown:
          encoder.encodeStruct(codec.Uint8, val.unknown);
          break;
        case AXTreeID.Tags.token:
          encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.token);
          break;
      }
      encoder.align();
    };


    AXTreeID.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new AXTreeID();
      var tag = decoder.readUint32();
      switch (tag) {
        case AXTreeID.Tags.unknown:
          result.unknown = decoder.decodeStruct(codec.Uint8);
          break;
        case AXTreeID.Tags.token:
          result.token = decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
          break;
      }
      decoder.align();

      return result;
    };


    AXTreeID.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case AXTreeID.Tags.unknown:
          

          break;
        case AXTreeID.Tags.token:
          

    // validate AXTreeID.token
    err = messageValidator.validateStructPointer(data_offset, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  AXTreeID.encodedSize = 16;
  exports.AXTreeID = AXTreeID;
})();