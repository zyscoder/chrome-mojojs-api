// mojo/public/interfaces/bindings/tests/test_data_view.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'mojo/public/interfaces/bindings/tests/test_data_view.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojo.test.dataView');


  var TestEnum = {};
  TestEnum.VALUE_0 = 0;
  TestEnum.VALUE_1 = 1;
  TestEnum.MIN_VALUE = 0;
  TestEnum.MAX_VALUE = 1;

  TestEnum.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  TestEnum.toKnownEnumValue = function(value) {
    return value;
  };

  TestEnum.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function NestedStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NestedStruct.prototype.initDefaults_ = function() {
    this.fInt32 = 0;
  };
  NestedStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NestedStruct.validate = function(messageValidator, offset) {
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

  NestedStruct.encodedSize = codec.kStructHeaderSize + 8;

  NestedStruct.decode = function(decoder) {
    var packed;
    var val = new NestedStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fInt32 =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  NestedStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NestedStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.fInt32);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TestNativeStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestNativeStruct.prototype.initDefaults_ = function() {
  };
  TestNativeStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestNativeStruct.validate = function(messageValidator, offset) {
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

  TestNativeStruct.encodedSize = codec.kStructHeaderSize + 0;

  TestNativeStruct.decode = function(decoder) {
    var packed;
    var val = new TestNativeStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  TestNativeStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestNativeStruct.encodedSize);
    encoder.writeUint32(0);
  };
  function TestStruct(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestStruct.prototype.initDefaults_ = function() {
    this.fString = null;
    this.fStruct = null;
    this.fNativeStruct = null;
    this.fBoolArray = null;
    this.fInt32Array = null;
    this.fEnumArray = null;
    this.fInterfaceArray = null;
    this.fNestedArray = null;
    this.fStructArray = null;
    this.fUnionArray = null;
    this.fMap = null;
  };
  TestStruct.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestStruct.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 96}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fString
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fStruct
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, NestedStruct, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fNativeStruct
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, TestNativeStruct, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fBoolArray
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 1, codec.PackedBool, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fInt32Array
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, codec.Int32, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fEnumArray
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 4, new codec.Enum(TestEnum), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fInterfaceArray
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, new codec.Interface(TestInterfacePtr), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fNestedArray
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 56, 8, new codec.ArrayOf(codec.Int32), false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fStructArray
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 64, 8, new codec.PointerTo(NestedStruct), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fUnionArray
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 72, 16, TestUnion, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TestStruct.fMap
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 80, false, codec.String, codec.Int32, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TestStruct.encodedSize = codec.kStructHeaderSize + 88;

  TestStruct.decode = function(decoder) {
    var packed;
    var val = new TestStruct();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fString =
        decoder.decodeStruct(codec.String);
    val.fStruct =
        decoder.decodeStructPointer(NestedStruct);
    val.fNativeStruct =
        decoder.decodeStructPointer(TestNativeStruct);
    val.fBoolArray =
        decoder.decodeArrayPointer(codec.PackedBool);
    val.fInt32Array =
        decoder.decodeArrayPointer(codec.Int32);
    val.fEnumArray =
        decoder.decodeArrayPointer(new codec.Enum(TestEnum));
    val.fInterfaceArray =
        decoder.decodeArrayPointer(new codec.Interface(TestInterfacePtr));
    val.fNestedArray =
        decoder.decodeArrayPointer(new codec.ArrayOf(codec.Int32));
    val.fStructArray =
        decoder.decodeArrayPointer(new codec.PointerTo(NestedStruct));
    val.fUnionArray =
        decoder.decodeArrayPointer(TestUnion);
    val.fMap =
        decoder.decodeMapPointer(codec.String, codec.Int32);
    return val;
  };

  TestStruct.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestStruct.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.fString);
    encoder.encodeStructPointer(NestedStruct, val.fStruct);
    encoder.encodeStructPointer(TestNativeStruct, val.fNativeStruct);
    encoder.encodeArrayPointer(codec.PackedBool, val.fBoolArray);
    encoder.encodeArrayPointer(codec.Int32, val.fInt32Array);
    encoder.encodeArrayPointer(new codec.Enum(TestEnum), val.fEnumArray);
    encoder.encodeArrayPointer(new codec.Interface(TestInterfacePtr), val.fInterfaceArray);
    encoder.encodeArrayPointer(new codec.ArrayOf(codec.Int32), val.fNestedArray);
    encoder.encodeArrayPointer(new codec.PointerTo(NestedStruct), val.fStructArray);
    encoder.encodeArrayPointer(TestUnion, val.fUnionArray);
    encoder.encodeMapPointer(codec.String, codec.Int32, val.fMap);
  };
  function TestInterface_Echo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestInterface_Echo_Params.prototype.initDefaults_ = function() {
    this.value = 0;
  };
  TestInterface_Echo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestInterface_Echo_Params.validate = function(messageValidator, offset) {
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

  TestInterface_Echo_Params.encodedSize = codec.kStructHeaderSize + 8;

  TestInterface_Echo_Params.decode = function(decoder) {
    var packed;
    var val = new TestInterface_Echo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.value =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TestInterface_Echo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestInterface_Echo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.value);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TestInterface_Echo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TestInterface_Echo_ResponseParams.prototype.initDefaults_ = function() {
    this.outValue = 0;
  };
  TestInterface_Echo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TestInterface_Echo_ResponseParams.validate = function(messageValidator, offset) {
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

  TestInterface_Echo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  TestInterface_Echo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new TestInterface_Echo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.outValue =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TestInterface_Echo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TestInterface_Echo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.outValue);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };

  function TestUnion(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  TestUnion.Tags = {
    fBool: 0,
    fInt32: 1,
  };

  TestUnion.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  TestUnion.prototype.initValue_ = function(value) {
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
        "fBool",
        "fInt32",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a TestUnion member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(TestUnion.prototype, "fBool", {
    get: function() {
      if (this.$tag != TestUnion.Tags.fBool) {
        throw new ReferenceError(
            "TestUnion.fBool is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = TestUnion.Tags.fBool;
      this.$data = value;
    }
  });
  Object.defineProperty(TestUnion.prototype, "fInt32", {
    get: function() {
      if (this.$tag != TestUnion.Tags.fInt32) {
        throw new ReferenceError(
            "TestUnion.fInt32 is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = TestUnion.Tags.fInt32;
      this.$data = value;
    }
  });


    TestUnion.encode = function(encoder, val) {
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
        case TestUnion.Tags.fBool:
          encoder.writeUint8(val.fBool ? 1 : 0);
          break;
        case TestUnion.Tags.fInt32:
          encoder.encodeStruct(codec.Int32, val.fInt32);
          break;
      }
      encoder.align();
    };


    TestUnion.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new TestUnion();
      var tag = decoder.readUint32();
      switch (tag) {
        case TestUnion.Tags.fBool:
          result.fBool = decoder.readUint8() ? true : false;
          break;
        case TestUnion.Tags.fInt32:
          result.fInt32 = decoder.decodeStruct(codec.Int32);
          break;
      }
      decoder.align();

      return result;
    };


    TestUnion.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case TestUnion.Tags.fBool:
          

          break;
        case TestUnion.Tags.fInt32:
          

          break;
      }

      return validator.validationError.NONE;
    };

  TestUnion.encodedSize = 16;
  var kTestInterface_Echo_Name = 0;

  function TestInterfacePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(TestInterface,
                                                   handleOrPtrInfo);
  }

  function TestInterfaceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        TestInterface, associatedInterfacePtrInfo);
  }

  TestInterfaceAssociatedPtr.prototype =
      Object.create(TestInterfacePtr.prototype);
  TestInterfaceAssociatedPtr.prototype.constructor =
      TestInterfaceAssociatedPtr;

  function TestInterfaceProxy(receiver) {
    this.receiver_ = receiver;
  }
  TestInterfacePtr.prototype.echo = function() {
    return TestInterfaceProxy.prototype.echo
        .apply(this.ptr.getProxy(), arguments);
  };

  TestInterfaceProxy.prototype.echo = function(value) {
    var params_ = new TestInterface_Echo_Params();
    params_.value = value;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kTestInterface_Echo_Name,
          codec.align(TestInterface_Echo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(TestInterface_Echo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(TestInterface_Echo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function TestInterfaceStub(delegate) {
    this.delegate_ = delegate;
  }
  TestInterfaceStub.prototype.echo = function(value) {
    return this.delegate_ && this.delegate_.echo && this.delegate_.echo(value);
  }

  TestInterfaceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  TestInterfaceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kTestInterface_Echo_Name:
      var params = reader.decodeStruct(TestInterface_Echo_Params);
      this.echo(params.value).then(function(response) {
        var responseParams =
            new TestInterface_Echo_ResponseParams();
        responseParams.outValue = response.outValue;
        var builder = new codec.MessageV1Builder(
            kTestInterface_Echo_Name,
            codec.align(TestInterface_Echo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(TestInterface_Echo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateTestInterfaceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kTestInterface_Echo_Name:
        if (message.expectsResponse())
          paramsClass = TestInterface_Echo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateTestInterfaceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kTestInterface_Echo_Name:
        if (message.isResponse())
          paramsClass = TestInterface_Echo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var TestInterface = {
    name: 'mojo.test.data_view.TestInterface',
    kVersion: 0,
    ptrClass: TestInterfacePtr,
    proxyClass: TestInterfaceProxy,
    stubClass: TestInterfaceStub,
    validateRequest: validateTestInterfaceRequest,
    validateResponse: validateTestInterfaceResponse,
  };
  TestInterfaceStub.prototype.validator = validateTestInterfaceRequest;
  TestInterfaceProxy.prototype.validator = validateTestInterfaceResponse;
  exports.TestEnum = TestEnum;
  exports.NestedStruct = NestedStruct;
  exports.TestNativeStruct = TestNativeStruct;
  exports.TestStruct = TestStruct;
  exports.TestUnion = TestUnion;
  exports.TestInterface = TestInterface;
  exports.TestInterfacePtr = TestInterfacePtr;
  exports.TestInterfaceAssociatedPtr = TestInterfaceAssociatedPtr;
})();