// services/network/public/mojom/structured_headers.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/structured_headers.mojom';
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
  var byte_string$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/byte_string.mojom', '../../../../mojo/public/mojom/base/byte_string.mojom.js');
  }



  function StructuredHeadersParameter(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructuredHeadersParameter.prototype.initDefaults_ = function() {
    this.key = null;
    this.item = null;
  };
  StructuredHeadersParameter.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructuredHeadersParameter.validate = function(messageValidator, offset) {
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


    // validate StructuredHeadersParameter.key
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate StructuredHeadersParameter.item
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 8, StructuredHeadersItem, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructuredHeadersParameter.encodedSize = codec.kStructHeaderSize + 24;

  StructuredHeadersParameter.decode = function(decoder) {
    var packed;
    var val = new StructuredHeadersParameter();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.key =
        decoder.decodeStruct(codec.String);
    val.item =
        decoder.decodeStruct(StructuredHeadersItem);
    return val;
  };

  StructuredHeadersParameter.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructuredHeadersParameter.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.key);
    encoder.encodeStruct(StructuredHeadersItem, val.item);
  };
  function StructuredHeadersParameterizedItem(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructuredHeadersParameterizedItem.prototype.initDefaults_ = function() {
    this.item = null;
    this.parameters = null;
  };
  StructuredHeadersParameterizedItem.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructuredHeadersParameterizedItem.validate = function(messageValidator, offset) {
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


    // validate StructuredHeadersParameterizedItem.item
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 0, StructuredHeadersItem, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate StructuredHeadersParameterizedItem.parameters
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(StructuredHeadersParameter), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructuredHeadersParameterizedItem.encodedSize = codec.kStructHeaderSize + 24;

  StructuredHeadersParameterizedItem.decode = function(decoder) {
    var packed;
    var val = new StructuredHeadersParameterizedItem();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.item =
        decoder.decodeStruct(StructuredHeadersItem);
    val.parameters =
        decoder.decodeArrayPointer(new codec.PointerTo(StructuredHeadersParameter));
    return val;
  };

  StructuredHeadersParameterizedItem.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructuredHeadersParameterizedItem.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(StructuredHeadersItem, val.item);
    encoder.encodeArrayPointer(new codec.PointerTo(StructuredHeadersParameter), val.parameters);
  };
  function StructuredHeadersParameterizedMember(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StructuredHeadersParameterizedMember.prototype.initDefaults_ = function() {
    this.member = null;
    this.memberIsInnerList = false;
    this.parameters = null;
  };
  StructuredHeadersParameterizedMember.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StructuredHeadersParameterizedMember.validate = function(messageValidator, offset) {
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


    // validate StructuredHeadersParameterizedMember.member
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(StructuredHeadersParameterizedItem), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    // validate StructuredHeadersParameterizedMember.parameters
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(StructuredHeadersParameter), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  StructuredHeadersParameterizedMember.encodedSize = codec.kStructHeaderSize + 24;

  StructuredHeadersParameterizedMember.decode = function(decoder) {
    var packed;
    var val = new StructuredHeadersParameterizedMember();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.member =
        decoder.decodeArrayPointer(new codec.PointerTo(StructuredHeadersParameterizedItem));
    packed = decoder.readUint8();
    val.memberIsInnerList = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.parameters =
        decoder.decodeArrayPointer(new codec.PointerTo(StructuredHeadersParameter));
    return val;
  };

  StructuredHeadersParameterizedMember.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StructuredHeadersParameterizedMember.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(StructuredHeadersParameterizedItem), val.member);
    packed = 0;
    packed |= (val.memberIsInnerList & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(StructuredHeadersParameter), val.parameters);
  };

  function StructuredHeadersItem(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  StructuredHeadersItem.Tags = {
    nullValue: 0,
    integerValue: 1,
    decimalValue: 2,
    stringValue: 3,
    tokenValue: 4,
    byteSequenceValue: 5,
    booleanValue: 6,
  };

  StructuredHeadersItem.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  StructuredHeadersItem.prototype.initValue_ = function(value) {
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
        "nullValue",
        "integerValue",
        "decimalValue",
        "stringValue",
        "tokenValue",
        "byteSequenceValue",
        "booleanValue",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a StructuredHeadersItem member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(StructuredHeadersItem.prototype, "nullValue", {
    get: function() {
      if (this.$tag != StructuredHeadersItem.Tags.nullValue) {
        throw new ReferenceError(
            "StructuredHeadersItem.nullValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = StructuredHeadersItem.Tags.nullValue;
      this.$data = value;
    }
  });
  Object.defineProperty(StructuredHeadersItem.prototype, "integerValue", {
    get: function() {
      if (this.$tag != StructuredHeadersItem.Tags.integerValue) {
        throw new ReferenceError(
            "StructuredHeadersItem.integerValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = StructuredHeadersItem.Tags.integerValue;
      this.$data = value;
    }
  });
  Object.defineProperty(StructuredHeadersItem.prototype, "decimalValue", {
    get: function() {
      if (this.$tag != StructuredHeadersItem.Tags.decimalValue) {
        throw new ReferenceError(
            "StructuredHeadersItem.decimalValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = StructuredHeadersItem.Tags.decimalValue;
      this.$data = value;
    }
  });
  Object.defineProperty(StructuredHeadersItem.prototype, "stringValue", {
    get: function() {
      if (this.$tag != StructuredHeadersItem.Tags.stringValue) {
        throw new ReferenceError(
            "StructuredHeadersItem.stringValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = StructuredHeadersItem.Tags.stringValue;
      this.$data = value;
    }
  });
  Object.defineProperty(StructuredHeadersItem.prototype, "tokenValue", {
    get: function() {
      if (this.$tag != StructuredHeadersItem.Tags.tokenValue) {
        throw new ReferenceError(
            "StructuredHeadersItem.tokenValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = StructuredHeadersItem.Tags.tokenValue;
      this.$data = value;
    }
  });
  Object.defineProperty(StructuredHeadersItem.prototype, "byteSequenceValue", {
    get: function() {
      if (this.$tag != StructuredHeadersItem.Tags.byteSequenceValue) {
        throw new ReferenceError(
            "StructuredHeadersItem.byteSequenceValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = StructuredHeadersItem.Tags.byteSequenceValue;
      this.$data = value;
    }
  });
  Object.defineProperty(StructuredHeadersItem.prototype, "booleanValue", {
    get: function() {
      if (this.$tag != StructuredHeadersItem.Tags.booleanValue) {
        throw new ReferenceError(
            "StructuredHeadersItem.booleanValue is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = StructuredHeadersItem.Tags.booleanValue;
      this.$data = value;
    }
  });


    StructuredHeadersItem.encode = function(encoder, val) {
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
        case StructuredHeadersItem.Tags.nullValue:
          encoder.encodeStruct(codec.Uint8, val.nullValue);
          break;
        case StructuredHeadersItem.Tags.integerValue:
          encoder.encodeStruct(codec.Int64, val.integerValue);
          break;
        case StructuredHeadersItem.Tags.decimalValue:
          encoder.encodeStruct(codec.Double, val.decimalValue);
          break;
        case StructuredHeadersItem.Tags.stringValue:
          encoder.encodeStruct(codec.String, val.stringValue);
          break;
        case StructuredHeadersItem.Tags.tokenValue:
          encoder.encodeStruct(codec.String, val.tokenValue);
          break;
        case StructuredHeadersItem.Tags.byteSequenceValue:
          encoder.encodeStructPointer(byte_string$.ByteString, val.byteSequenceValue);
          break;
        case StructuredHeadersItem.Tags.booleanValue:
          encoder.writeUint8(val.booleanValue ? 1 : 0);
          break;
      }
      encoder.align();
    };


    StructuredHeadersItem.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new StructuredHeadersItem();
      var tag = decoder.readUint32();
      switch (tag) {
        case StructuredHeadersItem.Tags.nullValue:
          result.nullValue = decoder.decodeStruct(codec.Uint8);
          break;
        case StructuredHeadersItem.Tags.integerValue:
          result.integerValue = decoder.decodeStruct(codec.Int64);
          break;
        case StructuredHeadersItem.Tags.decimalValue:
          result.decimalValue = decoder.decodeStruct(codec.Double);
          break;
        case StructuredHeadersItem.Tags.stringValue:
          result.stringValue = decoder.decodeStruct(codec.String);
          break;
        case StructuredHeadersItem.Tags.tokenValue:
          result.tokenValue = decoder.decodeStruct(codec.String);
          break;
        case StructuredHeadersItem.Tags.byteSequenceValue:
          result.byteSequenceValue = decoder.decodeStructPointer(byte_string$.ByteString);
          break;
        case StructuredHeadersItem.Tags.booleanValue:
          result.booleanValue = decoder.readUint8() ? true : false;
          break;
      }
      decoder.align();

      return result;
    };


    StructuredHeadersItem.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case StructuredHeadersItem.Tags.nullValue:
          

          break;
        case StructuredHeadersItem.Tags.integerValue:
          

          break;
        case StructuredHeadersItem.Tags.decimalValue:
          

          break;
        case StructuredHeadersItem.Tags.stringValue:
          

    // validate StructuredHeadersItem.stringValue
    err = messageValidator.validateStringPointer(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case StructuredHeadersItem.Tags.tokenValue:
          

    // validate StructuredHeadersItem.tokenValue
    err = messageValidator.validateStringPointer(data_offset, false)
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case StructuredHeadersItem.Tags.byteSequenceValue:
          

    // validate StructuredHeadersItem.byteSequenceValue
    err = messageValidator.validateStructPointer(data_offset, byte_string$.ByteString, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case StructuredHeadersItem.Tags.booleanValue:
          

          break;
      }

      return validator.validationError.NONE;
    };

  StructuredHeadersItem.encodedSize = 16;
  exports.StructuredHeadersParameter = StructuredHeadersParameter;
  exports.StructuredHeadersParameterizedItem = StructuredHeadersParameterizedItem;
  exports.StructuredHeadersParameterizedMember = StructuredHeadersParameterizedMember;
  exports.StructuredHeadersItem = StructuredHeadersItem;
})();