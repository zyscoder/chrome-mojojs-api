// third_party/blink/public/mojom/choosers/file_chooser.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/choosers/file_chooser.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function FileChooserParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  FileChooserParams.Mode = {};
  FileChooserParams.Mode.kOpen = 0;
  FileChooserParams.Mode.kOpenMultiple = 1;
  FileChooserParams.Mode.kUploadFolder = 2;
  FileChooserParams.Mode.kSave = 3;
  FileChooserParams.Mode.MIN_VALUE = 0;
  FileChooserParams.Mode.MAX_VALUE = 3;

  FileChooserParams.Mode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  FileChooserParams.Mode.toKnownEnumValue = function(value) {
    return value;
  };

  FileChooserParams.Mode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  FileChooserParams.prototype.initDefaults_ = function() {
    this.mode = FileChooserParams.Mode.kOpen;
    this.needLocalPath = true;
    this.useMediaCapture = false;
    this.title = null;
    this.defaultFileName = null;
    this.selectedFiles = null;
    this.acceptTypes = null;
    this.requestor = null;
  };
  FileChooserParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileChooserParams.validate = function(messageValidator, offset) {
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


    // validate FileChooserParams.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, FileChooserParams.Mode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileChooserParams.title
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileChooserParams.defaultFileName
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileChooserParams.selectedFiles
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(file_path$.FilePath), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileChooserParams.acceptTypes
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(string16$.String16), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;




    // validate FileChooserParams.requestor
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileChooserParams.encodedSize = codec.kStructHeaderSize + 48;

  FileChooserParams.decode = function(decoder) {
    var packed;
    var val = new FileChooserParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mode =
        decoder.decodeStruct(new codec.Enum(FileChooserParams.Mode));
    packed = decoder.readUint8();
    val.needLocalPath = (packed >> 0) & 1 ? true : false;
    val.useMediaCapture = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.title =
        decoder.decodeStructPointer(string16$.String16);
    val.defaultFileName =
        decoder.decodeStructPointer(file_path$.FilePath);
    val.selectedFiles =
        decoder.decodeArrayPointer(new codec.PointerTo(file_path$.FilePath));
    val.acceptTypes =
        decoder.decodeArrayPointer(new codec.PointerTo(string16$.String16));
    val.requestor =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  FileChooserParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileChooserParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.mode);
    packed = 0;
    packed |= (val.needLocalPath & 1) << 0
    packed |= (val.useMediaCapture & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(string16$.String16, val.title);
    encoder.encodeStructPointer(file_path$.FilePath, val.defaultFileName);
    encoder.encodeArrayPointer(new codec.PointerTo(file_path$.FilePath), val.selectedFiles);
    encoder.encodeArrayPointer(new codec.PointerTo(string16$.String16), val.acceptTypes);
    encoder.encodeStructPointer(url$.Url, val.requestor);
  };
  function NativeFileInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NativeFileInfo.prototype.initDefaults_ = function() {
    this.filePath = null;
    this.displayName = null;
  };
  NativeFileInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NativeFileInfo.validate = function(messageValidator, offset) {
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


    // validate NativeFileInfo.filePath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NativeFileInfo.displayName
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, string16$.String16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NativeFileInfo.encodedSize = codec.kStructHeaderSize + 16;

  NativeFileInfo.decode = function(decoder) {
    var packed;
    var val = new NativeFileInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.filePath =
        decoder.decodeStructPointer(file_path$.FilePath);
    val.displayName =
        decoder.decodeStructPointer(string16$.String16);
    return val;
  };

  NativeFileInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NativeFileInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.filePath);
    encoder.encodeStructPointer(string16$.String16, val.displayName);
  };
  function FileSystemFileInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileSystemFileInfo.prototype.initDefaults_ = function() {
    this.url = null;
    this.modificationTime = null;
    this.length = 0;
  };
  FileSystemFileInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileSystemFileInfo.validate = function(messageValidator, offset) {
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


    // validate FileSystemFileInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileSystemFileInfo.modificationTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  FileSystemFileInfo.encodedSize = codec.kStructHeaderSize + 24;

  FileSystemFileInfo.decode = function(decoder) {
    var packed;
    var val = new FileSystemFileInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.modificationTime =
        decoder.decodeStructPointer(time$.Time);
    val.length =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  FileSystemFileInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileSystemFileInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(time$.Time, val.modificationTime);
    encoder.encodeStruct(codec.Int64, val.length);
  };
  function FileChooserResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileChooserResult.prototype.initDefaults_ = function() {
    this.files = null;
    this.baseDirectory = null;
  };
  FileChooserResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileChooserResult.validate = function(messageValidator, offset) {
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


    // validate FileChooserResult.files
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 16, FileChooserFileInfo, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FileChooserResult.baseDirectory
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileChooserResult.encodedSize = codec.kStructHeaderSize + 16;

  FileChooserResult.decode = function(decoder) {
    var packed;
    var val = new FileChooserResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.files =
        decoder.decodeArrayPointer(FileChooserFileInfo);
    val.baseDirectory =
        decoder.decodeStructPointer(file_path$.FilePath);
    return val;
  };

  FileChooserResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileChooserResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(FileChooserFileInfo, val.files);
    encoder.encodeStructPointer(file_path$.FilePath, val.baseDirectory);
  };
  function FileChooser_OpenFileChooser_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileChooser_OpenFileChooser_Params.prototype.initDefaults_ = function() {
    this.params = null;
  };
  FileChooser_OpenFileChooser_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileChooser_OpenFileChooser_Params.validate = function(messageValidator, offset) {
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


    // validate FileChooser_OpenFileChooser_Params.params
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, FileChooserParams, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileChooser_OpenFileChooser_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileChooser_OpenFileChooser_Params.decode = function(decoder) {
    var packed;
    var val = new FileChooser_OpenFileChooser_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.params =
        decoder.decodeStructPointer(FileChooserParams);
    return val;
  };

  FileChooser_OpenFileChooser_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileChooser_OpenFileChooser_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(FileChooserParams, val.params);
  };
  function FileChooser_OpenFileChooser_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileChooser_OpenFileChooser_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  FileChooser_OpenFileChooser_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileChooser_OpenFileChooser_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FileChooser_OpenFileChooser_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, FileChooserResult, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileChooser_OpenFileChooser_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileChooser_OpenFileChooser_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileChooser_OpenFileChooser_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(FileChooserResult);
    return val;
  };

  FileChooser_OpenFileChooser_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileChooser_OpenFileChooser_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(FileChooserResult, val.result);
  };
  function FileChooser_EnumerateChosenDirectory_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileChooser_EnumerateChosenDirectory_Params.prototype.initDefaults_ = function() {
    this.directoryPath = null;
  };
  FileChooser_EnumerateChosenDirectory_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileChooser_EnumerateChosenDirectory_Params.validate = function(messageValidator, offset) {
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


    // validate FileChooser_EnumerateChosenDirectory_Params.directoryPath
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, file_path$.FilePath, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileChooser_EnumerateChosenDirectory_Params.encodedSize = codec.kStructHeaderSize + 8;

  FileChooser_EnumerateChosenDirectory_Params.decode = function(decoder) {
    var packed;
    var val = new FileChooser_EnumerateChosenDirectory_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.directoryPath =
        decoder.decodeStructPointer(file_path$.FilePath);
    return val;
  };

  FileChooser_EnumerateChosenDirectory_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileChooser_EnumerateChosenDirectory_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(file_path$.FilePath, val.directoryPath);
  };
  function FileChooser_EnumerateChosenDirectory_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileChooser_EnumerateChosenDirectory_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  FileChooser_EnumerateChosenDirectory_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileChooser_EnumerateChosenDirectory_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FileChooser_EnumerateChosenDirectory_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, FileChooserResult, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileChooser_EnumerateChosenDirectory_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileChooser_EnumerateChosenDirectory_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileChooser_EnumerateChosenDirectory_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(FileChooserResult);
    return val;
  };

  FileChooser_EnumerateChosenDirectory_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileChooser_EnumerateChosenDirectory_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(FileChooserResult, val.result);
  };

  function FileChooserFileInfo(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  FileChooserFileInfo.Tags = {
    nativeFile: 0,
    fileSystem: 1,
  };

  FileChooserFileInfo.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  FileChooserFileInfo.prototype.initValue_ = function(value) {
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
        "nativeFile",
        "fileSystem",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a FileChooserFileInfo member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(FileChooserFileInfo.prototype, "nativeFile", {
    get: function() {
      if (this.$tag != FileChooserFileInfo.Tags.nativeFile) {
        throw new ReferenceError(
            "FileChooserFileInfo.nativeFile is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = FileChooserFileInfo.Tags.nativeFile;
      this.$data = value;
    }
  });
  Object.defineProperty(FileChooserFileInfo.prototype, "fileSystem", {
    get: function() {
      if (this.$tag != FileChooserFileInfo.Tags.fileSystem) {
        throw new ReferenceError(
            "FileChooserFileInfo.fileSystem is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = FileChooserFileInfo.Tags.fileSystem;
      this.$data = value;
    }
  });


    FileChooserFileInfo.encode = function(encoder, val) {
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
        case FileChooserFileInfo.Tags.nativeFile:
          encoder.encodeStructPointer(NativeFileInfo, val.nativeFile);
          break;
        case FileChooserFileInfo.Tags.fileSystem:
          encoder.encodeStructPointer(FileSystemFileInfo, val.fileSystem);
          break;
      }
      encoder.align();
    };


    FileChooserFileInfo.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new FileChooserFileInfo();
      var tag = decoder.readUint32();
      switch (tag) {
        case FileChooserFileInfo.Tags.nativeFile:
          result.nativeFile = decoder.decodeStructPointer(NativeFileInfo);
          break;
        case FileChooserFileInfo.Tags.fileSystem:
          result.fileSystem = decoder.decodeStructPointer(FileSystemFileInfo);
          break;
      }
      decoder.align();

      return result;
    };


    FileChooserFileInfo.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case FileChooserFileInfo.Tags.nativeFile:
          

    // validate FileChooserFileInfo.nativeFile
    err = messageValidator.validateStructPointer(data_offset, NativeFileInfo, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case FileChooserFileInfo.Tags.fileSystem:
          

    // validate FileChooserFileInfo.fileSystem
    err = messageValidator.validateStructPointer(data_offset, FileSystemFileInfo, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  FileChooserFileInfo.encodedSize = 16;
  var kFileChooser_OpenFileChooser_Name = 0;
  var kFileChooser_EnumerateChosenDirectory_Name = 1;

  function FileChooserPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FileChooser,
                                                   handleOrPtrInfo);
  }

  function FileChooserAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FileChooser, associatedInterfacePtrInfo);
  }

  FileChooserAssociatedPtr.prototype =
      Object.create(FileChooserPtr.prototype);
  FileChooserAssociatedPtr.prototype.constructor =
      FileChooserAssociatedPtr;

  function FileChooserProxy(receiver) {
    this.receiver_ = receiver;
  }
  FileChooserPtr.prototype.openFileChooser = function() {
    return FileChooserProxy.prototype.openFileChooser
        .apply(this.ptr.getProxy(), arguments);
  };

  FileChooserProxy.prototype.openFileChooser = function(params) {
    var params_ = new FileChooser_OpenFileChooser_Params();
    params_.params = params;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileChooser_OpenFileChooser_Name,
          codec.align(FileChooser_OpenFileChooser_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileChooser_OpenFileChooser_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileChooser_OpenFileChooser_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  FileChooserPtr.prototype.enumerateChosenDirectory = function() {
    return FileChooserProxy.prototype.enumerateChosenDirectory
        .apply(this.ptr.getProxy(), arguments);
  };

  FileChooserProxy.prototype.enumerateChosenDirectory = function(directoryPath) {
    var params_ = new FileChooser_EnumerateChosenDirectory_Params();
    params_.directoryPath = directoryPath;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileChooser_EnumerateChosenDirectory_Name,
          codec.align(FileChooser_EnumerateChosenDirectory_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileChooser_EnumerateChosenDirectory_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileChooser_EnumerateChosenDirectory_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FileChooserStub(delegate) {
    this.delegate_ = delegate;
  }
  FileChooserStub.prototype.openFileChooser = function(params) {
    return this.delegate_ && this.delegate_.openFileChooser && this.delegate_.openFileChooser(params);
  }
  FileChooserStub.prototype.enumerateChosenDirectory = function(directoryPath) {
    return this.delegate_ && this.delegate_.enumerateChosenDirectory && this.delegate_.enumerateChosenDirectory(directoryPath);
  }

  FileChooserStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FileChooserStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileChooser_OpenFileChooser_Name:
      var params = reader.decodeStruct(FileChooser_OpenFileChooser_Params);
      this.openFileChooser(params.params).then(function(response) {
        var responseParams =
            new FileChooser_OpenFileChooser_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kFileChooser_OpenFileChooser_Name,
            codec.align(FileChooser_OpenFileChooser_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileChooser_OpenFileChooser_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kFileChooser_EnumerateChosenDirectory_Name:
      var params = reader.decodeStruct(FileChooser_EnumerateChosenDirectory_Params);
      this.enumerateChosenDirectory(params.directoryPath).then(function(response) {
        var responseParams =
            new FileChooser_EnumerateChosenDirectory_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kFileChooser_EnumerateChosenDirectory_Name,
            codec.align(FileChooser_EnumerateChosenDirectory_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileChooser_EnumerateChosenDirectory_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFileChooserRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFileChooser_OpenFileChooser_Name:
        if (message.expectsResponse())
          paramsClass = FileChooser_OpenFileChooser_Params;
      break;
      case kFileChooser_EnumerateChosenDirectory_Name:
        if (message.expectsResponse())
          paramsClass = FileChooser_EnumerateChosenDirectory_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFileChooserResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFileChooser_OpenFileChooser_Name:
        if (message.isResponse())
          paramsClass = FileChooser_OpenFileChooser_ResponseParams;
        break;
      case kFileChooser_EnumerateChosenDirectory_Name:
        if (message.isResponse())
          paramsClass = FileChooser_EnumerateChosenDirectory_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FileChooser = {
    name: 'blink.mojom.FileChooser',
    kVersion: 0,
    ptrClass: FileChooserPtr,
    proxyClass: FileChooserProxy,
    stubClass: FileChooserStub,
    validateRequest: validateFileChooserRequest,
    validateResponse: validateFileChooserResponse,
  };
  FileChooserStub.prototype.validator = validateFileChooserRequest;
  FileChooserProxy.prototype.validator = validateFileChooserResponse;
  exports.FileChooserParams = FileChooserParams;
  exports.NativeFileInfo = NativeFileInfo;
  exports.FileSystemFileInfo = FileSystemFileInfo;
  exports.FileChooserResult = FileChooserResult;
  exports.FileChooserFileInfo = FileChooserFileInfo;
  exports.FileChooser = FileChooser;
  exports.FileChooserPtr = FileChooserPtr;
  exports.FileChooserAssociatedPtr = FileChooserAssociatedPtr;
})();