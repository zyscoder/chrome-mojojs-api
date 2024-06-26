// components/url_rewrite/mojom/url_request_rewrite.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/url_rewrite/mojom/url_request_rewrite.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('urlRewrite.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }


  var UrlRequestAccessPolicy = {};
  UrlRequestAccessPolicy.kAllow = 0;
  UrlRequestAccessPolicy.kDeny = 1;
  UrlRequestAccessPolicy.MIN_VALUE = 0;
  UrlRequestAccessPolicy.MAX_VALUE = 1;

  UrlRequestAccessPolicy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  UrlRequestAccessPolicy.toKnownEnumValue = function(value) {
    return value;
  };

  UrlRequestAccessPolicy.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function UrlRequestRewriteRules(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlRequestRewriteRules.prototype.initDefaults_ = function() {
    this.rules = null;
  };
  UrlRequestRewriteRules.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlRequestRewriteRules.validate = function(messageValidator, offset) {
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


    // validate UrlRequestRewriteRules.rules
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(UrlRequestRule), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlRequestRewriteRules.encodedSize = codec.kStructHeaderSize + 8;

  UrlRequestRewriteRules.decode = function(decoder) {
    var packed;
    var val = new UrlRequestRewriteRules();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rules =
        decoder.decodeArrayPointer(new codec.PointerTo(UrlRequestRule));
    return val;
  };

  UrlRequestRewriteRules.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlRequestRewriteRules.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(UrlRequestRule), val.rules);
  };
  function UrlRequestRule(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlRequestRule.prototype.initDefaults_ = function() {
    this.hostsFilter = null;
    this.schemesFilter = null;
    this.actions = null;
  };
  UrlRequestRule.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlRequestRule.validate = function(messageValidator, offset) {
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


    // validate UrlRequestRule.hostsFilter
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UrlRequestRule.schemesFilter
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, codec.String, true, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate UrlRequestRule.actions
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 16, UrlRequestAction, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlRequestRule.encodedSize = codec.kStructHeaderSize + 24;

  UrlRequestRule.decode = function(decoder) {
    var packed;
    var val = new UrlRequestRule();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostsFilter =
        decoder.decodeArrayPointer(codec.String);
    val.schemesFilter =
        decoder.decodeArrayPointer(codec.String);
    val.actions =
        decoder.decodeArrayPointer(UrlRequestAction);
    return val;
  };

  UrlRequestRule.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlRequestRule.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.hostsFilter);
    encoder.encodeArrayPointer(codec.String, val.schemesFilter);
    encoder.encodeArrayPointer(UrlRequestAction, val.actions);
  };
  function UrlRequestRewriteAddHeaders(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlRequestRewriteAddHeaders.prototype.initDefaults_ = function() {
    this.headers = null;
  };
  UrlRequestRewriteAddHeaders.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlRequestRewriteAddHeaders.validate = function(messageValidator, offset) {
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


    // validate UrlRequestRewriteAddHeaders.headers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(UrlHeader), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlRequestRewriteAddHeaders.encodedSize = codec.kStructHeaderSize + 8;

  UrlRequestRewriteAddHeaders.decode = function(decoder) {
    var packed;
    var val = new UrlRequestRewriteAddHeaders();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.headers =
        decoder.decodeArrayPointer(new codec.PointerTo(UrlHeader));
    return val;
  };

  UrlRequestRewriteAddHeaders.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlRequestRewriteAddHeaders.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(UrlHeader), val.headers);
  };
  function UrlHeader(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlHeader.prototype.initDefaults_ = function() {
    this.name = null;
    this.value = null;
  };
  UrlHeader.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlHeader.validate = function(messageValidator, offset) {
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


    // validate UrlHeader.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UrlHeader.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlHeader.encodedSize = codec.kStructHeaderSize + 16;

  UrlHeader.decode = function(decoder) {
    var packed;
    var val = new UrlHeader();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name =
        decoder.decodeStruct(codec.String);
    val.value =
        decoder.decodeStruct(codec.String);
    return val;
  };

  UrlHeader.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlHeader.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.value);
  };
  function UrlRequestRewriteRemoveHeader(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlRequestRewriteRemoveHeader.prototype.initDefaults_ = function() {
    this.queryPattern = null;
    this.headerName = null;
  };
  UrlRequestRewriteRemoveHeader.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlRequestRewriteRemoveHeader.validate = function(messageValidator, offset) {
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


    // validate UrlRequestRewriteRemoveHeader.queryPattern
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UrlRequestRewriteRemoveHeader.headerName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlRequestRewriteRemoveHeader.encodedSize = codec.kStructHeaderSize + 16;

  UrlRequestRewriteRemoveHeader.decode = function(decoder) {
    var packed;
    var val = new UrlRequestRewriteRemoveHeader();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.queryPattern =
        decoder.decodeStruct(codec.NullableString);
    val.headerName =
        decoder.decodeStruct(codec.String);
    return val;
  };

  UrlRequestRewriteRemoveHeader.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlRequestRewriteRemoveHeader.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.NullableString, val.queryPattern);
    encoder.encodeStruct(codec.String, val.headerName);
  };
  function UrlRequestRewriteSubstituteQueryPattern(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlRequestRewriteSubstituteQueryPattern.prototype.initDefaults_ = function() {
    this.pattern = null;
    this.substitution = null;
  };
  UrlRequestRewriteSubstituteQueryPattern.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlRequestRewriteSubstituteQueryPattern.validate = function(messageValidator, offset) {
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


    // validate UrlRequestRewriteSubstituteQueryPattern.pattern
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UrlRequestRewriteSubstituteQueryPattern.substitution
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlRequestRewriteSubstituteQueryPattern.encodedSize = codec.kStructHeaderSize + 16;

  UrlRequestRewriteSubstituteQueryPattern.decode = function(decoder) {
    var packed;
    var val = new UrlRequestRewriteSubstituteQueryPattern();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pattern =
        decoder.decodeStruct(codec.String);
    val.substitution =
        decoder.decodeStruct(codec.String);
    return val;
  };

  UrlRequestRewriteSubstituteQueryPattern.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlRequestRewriteSubstituteQueryPattern.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.pattern);
    encoder.encodeStruct(codec.String, val.substitution);
  };
  function UrlRequestRewriteReplaceUrl(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlRequestRewriteReplaceUrl.prototype.initDefaults_ = function() {
    this.urlEndsWith = null;
    this.newUrl = null;
  };
  UrlRequestRewriteReplaceUrl.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlRequestRewriteReplaceUrl.validate = function(messageValidator, offset) {
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


    // validate UrlRequestRewriteReplaceUrl.urlEndsWith
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate UrlRequestRewriteReplaceUrl.newUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlRequestRewriteReplaceUrl.encodedSize = codec.kStructHeaderSize + 16;

  UrlRequestRewriteReplaceUrl.decode = function(decoder) {
    var packed;
    var val = new UrlRequestRewriteReplaceUrl();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.urlEndsWith =
        decoder.decodeStruct(codec.String);
    val.newUrl =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  UrlRequestRewriteReplaceUrl.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlRequestRewriteReplaceUrl.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.urlEndsWith);
    encoder.encodeStructPointer(url$.Url, val.newUrl);
  };
  function UrlRequestRewriteAppendToQuery(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlRequestRewriteAppendToQuery.prototype.initDefaults_ = function() {
    this.query = null;
  };
  UrlRequestRewriteAppendToQuery.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlRequestRewriteAppendToQuery.validate = function(messageValidator, offset) {
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


    // validate UrlRequestRewriteAppendToQuery.query
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlRequestRewriteAppendToQuery.encodedSize = codec.kStructHeaderSize + 8;

  UrlRequestRewriteAppendToQuery.decode = function(decoder) {
    var packed;
    var val = new UrlRequestRewriteAppendToQuery();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.query =
        decoder.decodeStruct(codec.String);
    return val;
  };

  UrlRequestRewriteAppendToQuery.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlRequestRewriteAppendToQuery.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.query);
  };
  function UrlRequestRulesReceiver_OnRulesUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UrlRequestRulesReceiver_OnRulesUpdated_Params.prototype.initDefaults_ = function() {
    this.rules = null;
  };
  UrlRequestRulesReceiver_OnRulesUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UrlRequestRulesReceiver_OnRulesUpdated_Params.validate = function(messageValidator, offset) {
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


    // validate UrlRequestRulesReceiver_OnRulesUpdated_Params.rules
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, UrlRequestRewriteRules, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UrlRequestRulesReceiver_OnRulesUpdated_Params.encodedSize = codec.kStructHeaderSize + 8;

  UrlRequestRulesReceiver_OnRulesUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new UrlRequestRulesReceiver_OnRulesUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.rules =
        decoder.decodeStructPointer(UrlRequestRewriteRules);
    return val;
  };

  UrlRequestRulesReceiver_OnRulesUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UrlRequestRulesReceiver_OnRulesUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(UrlRequestRewriteRules, val.rules);
  };

  function UrlRequestAction(value) {
    this.initDefault_();
    this.initValue_(value);
  }


  UrlRequestAction.Tags = {
    addHeaders: 0,
    removeHeader: 1,
    substituteQueryPattern: 2,
    replaceUrl: 3,
    appendToQuery: 4,
    policy: 5,
  };

  UrlRequestAction.prototype.initDefault_ = function() {
    this.$data = null;
    this.$tag = undefined;
  }

  UrlRequestAction.prototype.initValue_ = function(value) {
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
        "addHeaders",
        "removeHeader",
        "substituteQueryPattern",
        "replaceUrl",
        "appendToQuery",
        "policy",
    ];

    if (fields.indexOf(keys[0]) < 0) {
      throw new ReferenceError(keys[0] + " is not a UrlRequestAction member.");

    }

    this[keys[0]] = value[keys[0]];
  }
  Object.defineProperty(UrlRequestAction.prototype, "addHeaders", {
    get: function() {
      if (this.$tag != UrlRequestAction.Tags.addHeaders) {
        throw new ReferenceError(
            "UrlRequestAction.addHeaders is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = UrlRequestAction.Tags.addHeaders;
      this.$data = value;
    }
  });
  Object.defineProperty(UrlRequestAction.prototype, "removeHeader", {
    get: function() {
      if (this.$tag != UrlRequestAction.Tags.removeHeader) {
        throw new ReferenceError(
            "UrlRequestAction.removeHeader is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = UrlRequestAction.Tags.removeHeader;
      this.$data = value;
    }
  });
  Object.defineProperty(UrlRequestAction.prototype, "substituteQueryPattern", {
    get: function() {
      if (this.$tag != UrlRequestAction.Tags.substituteQueryPattern) {
        throw new ReferenceError(
            "UrlRequestAction.substituteQueryPattern is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = UrlRequestAction.Tags.substituteQueryPattern;
      this.$data = value;
    }
  });
  Object.defineProperty(UrlRequestAction.prototype, "replaceUrl", {
    get: function() {
      if (this.$tag != UrlRequestAction.Tags.replaceUrl) {
        throw new ReferenceError(
            "UrlRequestAction.replaceUrl is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = UrlRequestAction.Tags.replaceUrl;
      this.$data = value;
    }
  });
  Object.defineProperty(UrlRequestAction.prototype, "appendToQuery", {
    get: function() {
      if (this.$tag != UrlRequestAction.Tags.appendToQuery) {
        throw new ReferenceError(
            "UrlRequestAction.appendToQuery is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = UrlRequestAction.Tags.appendToQuery;
      this.$data = value;
    }
  });
  Object.defineProperty(UrlRequestAction.prototype, "policy", {
    get: function() {
      if (this.$tag != UrlRequestAction.Tags.policy) {
        throw new ReferenceError(
            "UrlRequestAction.policy is not currently set.");
      }
      return this.$data;
    },

    set: function(value) {
      this.$tag = UrlRequestAction.Tags.policy;
      this.$data = value;
    }
  });


    UrlRequestAction.encode = function(encoder, val) {
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
        case UrlRequestAction.Tags.addHeaders:
          encoder.encodeStructPointer(UrlRequestRewriteAddHeaders, val.addHeaders);
          break;
        case UrlRequestAction.Tags.removeHeader:
          encoder.encodeStructPointer(UrlRequestRewriteRemoveHeader, val.removeHeader);
          break;
        case UrlRequestAction.Tags.substituteQueryPattern:
          encoder.encodeStructPointer(UrlRequestRewriteSubstituteQueryPattern, val.substituteQueryPattern);
          break;
        case UrlRequestAction.Tags.replaceUrl:
          encoder.encodeStructPointer(UrlRequestRewriteReplaceUrl, val.replaceUrl);
          break;
        case UrlRequestAction.Tags.appendToQuery:
          encoder.encodeStructPointer(UrlRequestRewriteAppendToQuery, val.appendToQuery);
          break;
        case UrlRequestAction.Tags.policy:
          encoder.encodeStruct(codec.Int32, val.policy);
          break;
      }
      encoder.align();
    };


    UrlRequestAction.decode = function(decoder) {
      var size = decoder.readUint32();
      if (size == 0) {
        decoder.readUint32();
        decoder.readUint64();
        return null;
      }

      var result = new UrlRequestAction();
      var tag = decoder.readUint32();
      switch (tag) {
        case UrlRequestAction.Tags.addHeaders:
          result.addHeaders = decoder.decodeStructPointer(UrlRequestRewriteAddHeaders);
          break;
        case UrlRequestAction.Tags.removeHeader:
          result.removeHeader = decoder.decodeStructPointer(UrlRequestRewriteRemoveHeader);
          break;
        case UrlRequestAction.Tags.substituteQueryPattern:
          result.substituteQueryPattern = decoder.decodeStructPointer(UrlRequestRewriteSubstituteQueryPattern);
          break;
        case UrlRequestAction.Tags.replaceUrl:
          result.replaceUrl = decoder.decodeStructPointer(UrlRequestRewriteReplaceUrl);
          break;
        case UrlRequestAction.Tags.appendToQuery:
          result.appendToQuery = decoder.decodeStructPointer(UrlRequestRewriteAppendToQuery);
          break;
        case UrlRequestAction.Tags.policy:
          result.policy = decoder.decodeStruct(new codec.Enum(UrlRequestAccessPolicy));
          break;
      }
      decoder.align();

      return result;
    };


    UrlRequestAction.validate = function(messageValidator, offset) {
      var size = messageValidator.decodeUnionSize(offset);
      if (size != 16) {
        return validator.validationError.INVALID_UNION_SIZE;
      }

      var tag = messageValidator.decodeUnionTag(offset);
      var data_offset = offset + 8;
      var err;
      switch (tag) {
        case UrlRequestAction.Tags.addHeaders:
          

    // validate UrlRequestAction.addHeaders
    err = messageValidator.validateStructPointer(data_offset, UrlRequestRewriteAddHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UrlRequestAction.Tags.removeHeader:
          

    // validate UrlRequestAction.removeHeader
    err = messageValidator.validateStructPointer(data_offset, UrlRequestRewriteRemoveHeader, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UrlRequestAction.Tags.substituteQueryPattern:
          

    // validate UrlRequestAction.substituteQueryPattern
    err = messageValidator.validateStructPointer(data_offset, UrlRequestRewriteSubstituteQueryPattern, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UrlRequestAction.Tags.replaceUrl:
          

    // validate UrlRequestAction.replaceUrl
    err = messageValidator.validateStructPointer(data_offset, UrlRequestRewriteReplaceUrl, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UrlRequestAction.Tags.appendToQuery:
          

    // validate UrlRequestAction.appendToQuery
    err = messageValidator.validateStructPointer(data_offset, UrlRequestRewriteAppendToQuery, false);
    if (err !== validator.validationError.NONE)
        return err;
          break;
        case UrlRequestAction.Tags.policy:
          

    // validate UrlRequestAction.policy
    err = messageValidator.validateEnum(data_offset, UrlRequestAccessPolicy);
    if (err !== validator.validationError.NONE)
        return err;
          break;
      }

      return validator.validationError.NONE;
    };

  UrlRequestAction.encodedSize = 16;
  var kUrlRequestRulesReceiver_OnRulesUpdated_Name = 1836597478;

  function UrlRequestRulesReceiverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(UrlRequestRulesReceiver,
                                                   handleOrPtrInfo);
  }

  function UrlRequestRulesReceiverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        UrlRequestRulesReceiver, associatedInterfacePtrInfo);
  }

  UrlRequestRulesReceiverAssociatedPtr.prototype =
      Object.create(UrlRequestRulesReceiverPtr.prototype);
  UrlRequestRulesReceiverAssociatedPtr.prototype.constructor =
      UrlRequestRulesReceiverAssociatedPtr;

  function UrlRequestRulesReceiverProxy(receiver) {
    this.receiver_ = receiver;
  }
  UrlRequestRulesReceiverPtr.prototype.onRulesUpdated = function() {
    return UrlRequestRulesReceiverProxy.prototype.onRulesUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  UrlRequestRulesReceiverProxy.prototype.onRulesUpdated = function(rules) {
    var params_ = new UrlRequestRulesReceiver_OnRulesUpdated_Params();
    params_.rules = rules;
    var builder = new codec.MessageV0Builder(
        kUrlRequestRulesReceiver_OnRulesUpdated_Name,
        codec.align(UrlRequestRulesReceiver_OnRulesUpdated_Params.encodedSize));
    builder.encodeStruct(UrlRequestRulesReceiver_OnRulesUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function UrlRequestRulesReceiverStub(delegate) {
    this.delegate_ = delegate;
  }
  UrlRequestRulesReceiverStub.prototype.onRulesUpdated = function(rules) {
    return this.delegate_ && this.delegate_.onRulesUpdated && this.delegate_.onRulesUpdated(rules);
  }

  UrlRequestRulesReceiverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUrlRequestRulesReceiver_OnRulesUpdated_Name:
      var params = reader.decodeStruct(UrlRequestRulesReceiver_OnRulesUpdated_Params);
      this.onRulesUpdated(params.rules);
      return true;
    default:
      return false;
    }
  };

  UrlRequestRulesReceiverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateUrlRequestRulesReceiverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUrlRequestRulesReceiver_OnRulesUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UrlRequestRulesReceiver_OnRulesUpdated_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUrlRequestRulesReceiverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var UrlRequestRulesReceiver = {
    name: 'url_rewrite.mojom.UrlRequestRulesReceiver',
    kVersion: 0,
    ptrClass: UrlRequestRulesReceiverPtr,
    proxyClass: UrlRequestRulesReceiverProxy,
    stubClass: UrlRequestRulesReceiverStub,
    validateRequest: validateUrlRequestRulesReceiverRequest,
    validateResponse: null,
  };
  UrlRequestRulesReceiverStub.prototype.validator = validateUrlRequestRulesReceiverRequest;
  UrlRequestRulesReceiverProxy.prototype.validator = null;
  exports.UrlRequestAccessPolicy = UrlRequestAccessPolicy;
  exports.UrlRequestRewriteRules = UrlRequestRewriteRules;
  exports.UrlRequestRule = UrlRequestRule;
  exports.UrlRequestRewriteAddHeaders = UrlRequestRewriteAddHeaders;
  exports.UrlHeader = UrlHeader;
  exports.UrlRequestRewriteRemoveHeader = UrlRequestRewriteRemoveHeader;
  exports.UrlRequestRewriteSubstituteQueryPattern = UrlRequestRewriteSubstituteQueryPattern;
  exports.UrlRequestRewriteReplaceUrl = UrlRequestRewriteReplaceUrl;
  exports.UrlRequestRewriteAppendToQuery = UrlRequestRewriteAppendToQuery;
  exports.UrlRequestAction = UrlRequestAction;
  exports.UrlRequestRulesReceiver = UrlRequestRulesReceiver;
  exports.UrlRequestRulesReceiverPtr = UrlRequestRulesReceiverPtr;
  exports.UrlRequestRulesReceiverAssociatedPtr = UrlRequestRulesReceiverAssociatedPtr;
})();