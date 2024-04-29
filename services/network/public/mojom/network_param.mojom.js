// services/network/public/mojom/network_param.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_param.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var scheme_host_port$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/scheme_host_port.mojom', '../../../../url/mojom/scheme_host_port.mojom.js');
  }


  var ProxyScheme = {};
  ProxyScheme.kInvalid = 0;
  ProxyScheme.kDirect = 1;
  ProxyScheme.kHttp = 2;
  ProxyScheme.kSocks4 = 3;
  ProxyScheme.kSocks5 = 4;
  ProxyScheme.kHttps = 5;
  ProxyScheme.kQuic = 6;
  ProxyScheme.MIN_VALUE = 0;
  ProxyScheme.MAX_VALUE = 6;

  ProxyScheme.isKnownEnumValue = function(value) {
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

  ProxyScheme.toKnownEnumValue = function(value) {
    return value;
  };

  ProxyScheme.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function AuthChallengeInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthChallengeInfo.prototype.initDefaults_ = function() {
    this.isProxy = false;
    this.challenger = null;
    this.scheme = null;
    this.realm = null;
    this.challenge = null;
    this.path = null;
  };
  AuthChallengeInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthChallengeInfo.validate = function(messageValidator, offset) {
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



    // validate AuthChallengeInfo.challenger
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, scheme_host_port$.SchemeHostPort, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AuthChallengeInfo.scheme
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AuthChallengeInfo.realm
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AuthChallengeInfo.challenge
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AuthChallengeInfo.path
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AuthChallengeInfo.encodedSize = codec.kStructHeaderSize + 48;

  AuthChallengeInfo.decode = function(decoder) {
    var packed;
    var val = new AuthChallengeInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.isProxy = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.challenger =
        decoder.decodeStructPointer(scheme_host_port$.SchemeHostPort);
    val.scheme =
        decoder.decodeStruct(codec.String);
    val.realm =
        decoder.decodeStruct(codec.String);
    val.challenge =
        decoder.decodeStruct(codec.String);
    val.path =
        decoder.decodeStruct(codec.String);
    return val;
  };

  AuthChallengeInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthChallengeInfo.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.isProxy & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(scheme_host_port$.SchemeHostPort, val.challenger);
    encoder.encodeStruct(codec.String, val.scheme);
    encoder.encodeStruct(codec.String, val.realm);
    encoder.encodeStruct(codec.String, val.challenge);
    encoder.encodeStruct(codec.String, val.path);
  };
  function AuthCredentials(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AuthCredentials.prototype.initDefaults_ = function() {
  };
  AuthCredentials.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AuthCredentials.validate = function(messageValidator, offset) {
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

  AuthCredentials.encodedSize = codec.kStructHeaderSize + 0;

  AuthCredentials.decode = function(decoder) {
    var packed;
    var val = new AuthCredentials();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AuthCredentials.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AuthCredentials.encodedSize);
    encoder.writeUint32(0);
  };
  function CertVerifyResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  CertVerifyResult.prototype.initDefaults_ = function() {
  };
  CertVerifyResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  CertVerifyResult.validate = function(messageValidator, offset) {
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

  CertVerifyResult.encodedSize = codec.kStructHeaderSize + 0;

  CertVerifyResult.decode = function(decoder) {
    var packed;
    var val = new CertVerifyResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  CertVerifyResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(CertVerifyResult.encodedSize);
    encoder.writeUint32(0);
  };
  function HttpResponseHeaders(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpResponseHeaders.prototype.initDefaults_ = function() {
  };
  HttpResponseHeaders.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpResponseHeaders.validate = function(messageValidator, offset) {
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

  HttpResponseHeaders.encodedSize = codec.kStructHeaderSize + 0;

  HttpResponseHeaders.decode = function(decoder) {
    var packed;
    var val = new HttpResponseHeaders();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  HttpResponseHeaders.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpResponseHeaders.encodedSize);
    encoder.writeUint32(0);
  };
  function HttpVersion(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HttpVersion.prototype.initDefaults_ = function() {
    this.majorValue = 0;
    this.minorValue = 0;
  };
  HttpVersion.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HttpVersion.validate = function(messageValidator, offset) {
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

  HttpVersion.encodedSize = codec.kStructHeaderSize + 8;

  HttpVersion.decode = function(decoder) {
    var packed;
    var val = new HttpVersion();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.majorValue =
        decoder.decodeStruct(codec.Uint16);
    val.minorValue =
        decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HttpVersion.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HttpVersion.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint16, val.majorValue);
    encoder.encodeStruct(codec.Uint16, val.minorValue);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function HostPortPair(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HostPortPair.prototype.initDefaults_ = function() {
    this.host = null;
    this.port = 0;
  };
  HostPortPair.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HostPortPair.validate = function(messageValidator, offset) {
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


    // validate HostPortPair.host
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  HostPortPair.encodedSize = codec.kStructHeaderSize + 16;

  HostPortPair.decode = function(decoder) {
    var packed;
    var val = new HostPortPair();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.host =
        decoder.decodeStruct(codec.String);
    val.port =
        decoder.decodeStruct(codec.Uint16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HostPortPair.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HostPortPair.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.host);
    encoder.encodeStruct(codec.Uint16, val.port);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ProxyServer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ProxyServer.prototype.initDefaults_ = function() {
    this.scheme = 0;
    this.hostAndPort = null;
  };
  ProxyServer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ProxyServer.validate = function(messageValidator, offset) {
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


    // validate ProxyServer.scheme
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ProxyScheme);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ProxyServer.hostAndPort
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, HostPortPair, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ProxyServer.encodedSize = codec.kStructHeaderSize + 16;

  ProxyServer.decode = function(decoder) {
    var packed;
    var val = new ProxyServer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.scheme =
        decoder.decodeStruct(new codec.Enum(ProxyScheme));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.hostAndPort =
        decoder.decodeStructPointer(HostPortPair);
    return val;
  };

  ProxyServer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ProxyServer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.scheme);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(HostPortPair, val.hostAndPort);
  };
  function ResolveErrorInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResolveErrorInfo.prototype.initDefaults_ = function() {
    this.error = 0;
    this.isSecureNetworkError = false;
  };
  ResolveErrorInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResolveErrorInfo.validate = function(messageValidator, offset) {
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

  ResolveErrorInfo.encodedSize = codec.kStructHeaderSize + 8;

  ResolveErrorInfo.decode = function(decoder) {
    var packed;
    var val = new ResolveErrorInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.error =
        decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.isSecureNetworkError = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ResolveErrorInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResolveErrorInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.error);
    packed = 0;
    packed |= (val.isSecureNetworkError & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function SSLCertRequestInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SSLCertRequestInfo.prototype.initDefaults_ = function() {
    this.hostAndPort = null;
    this.isProxy = false;
    this.certAuthorities = null;
    this.signatureAlgorithms = null;
  };
  SSLCertRequestInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SSLCertRequestInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SSLCertRequestInfo.hostAndPort
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, HostPortPair, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate SSLCertRequestInfo.certAuthorities
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SSLCertRequestInfo.signatureAlgorithms
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 2, codec.Uint16, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SSLCertRequestInfo.encodedSize = codec.kStructHeaderSize + 32;

  SSLCertRequestInfo.decode = function(decoder) {
    var packed;
    var val = new SSLCertRequestInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostAndPort =
        decoder.decodeStructPointer(HostPortPair);
    packed = decoder.readUint8();
    val.isProxy = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.certAuthorities =
        decoder.decodeArrayPointer(codec.String);
    val.signatureAlgorithms =
        decoder.decodeArrayPointer(codec.Uint16);
    return val;
  };

  SSLCertRequestInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SSLCertRequestInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(HostPortPair, val.hostAndPort);
    packed = 0;
    packed |= (val.isProxy & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(codec.String, val.certAuthorities);
    encoder.encodeArrayPointer(codec.Uint16, val.signatureAlgorithms);
  };
  function SSLInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SSLInfo.prototype.initDefaults_ = function() {
  };
  SSLInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SSLInfo.validate = function(messageValidator, offset) {
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

  SSLInfo.encodedSize = codec.kStructHeaderSize + 0;

  SSLInfo.decode = function(decoder) {
    var packed;
    var val = new SSLInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  SSLInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SSLInfo.encodedSize);
    encoder.writeUint32(0);
  };
  function X509Certificate(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  X509Certificate.prototype.initDefaults_ = function() {
  };
  X509Certificate.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  X509Certificate.validate = function(messageValidator, offset) {
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

  X509Certificate.encodedSize = codec.kStructHeaderSize + 0;

  X509Certificate.decode = function(decoder) {
    var packed;
    var val = new X509Certificate();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  X509Certificate.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(X509Certificate.encodedSize);
    encoder.writeUint32(0);
  };
  function NetLogSource(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetLogSource.prototype.initDefaults_ = function() {
    this.sourceType = 0;
    this.sourceId = 0;
    this.startTime = null;
  };
  NetLogSource.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetLogSource.validate = function(messageValidator, offset) {
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




    // validate NetLogSource.startTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeTicks, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  NetLogSource.encodedSize = codec.kStructHeaderSize + 16;

  NetLogSource.decode = function(decoder) {
    var packed;
    var val = new NetLogSource();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sourceType =
        decoder.decodeStruct(codec.Uint32);
    val.sourceId =
        decoder.decodeStruct(codec.Uint32);
    val.startTime =
        decoder.decodeStructPointer(time$.TimeTicks);
    return val;
  };

  NetLogSource.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetLogSource.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.sourceType);
    encoder.encodeStruct(codec.Uint32, val.sourceId);
    encoder.encodeStructPointer(time$.TimeTicks, val.startTime);
  };
  exports.ProxyScheme = ProxyScheme;
  exports.AuthChallengeInfo = AuthChallengeInfo;
  exports.AuthCredentials = AuthCredentials;
  exports.CertVerifyResult = CertVerifyResult;
  exports.HttpResponseHeaders = HttpResponseHeaders;
  exports.HttpVersion = HttpVersion;
  exports.HostPortPair = HostPortPair;
  exports.ProxyServer = ProxyServer;
  exports.ResolveErrorInfo = ResolveErrorInfo;
  exports.SSLCertRequestInfo = SSLCertRequestInfo;
  exports.SSLInfo = SSLInfo;
  exports.X509Certificate = X509Certificate;
  exports.NetLogSource = NetLogSource;
})();