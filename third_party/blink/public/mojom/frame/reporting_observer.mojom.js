// third_party/blink/public/mojom/frame/reporting_observer.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/reporting_observer.mojom';
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
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function ReportBodyElement(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReportBodyElement.prototype.initDefaults_ = function() {
    this.name = null;
    this.value = null;
  };
  ReportBodyElement.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReportBodyElement.validate = function(messageValidator, offset) {
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


    // validate ReportBodyElement.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate ReportBodyElement.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReportBodyElement.encodedSize = codec.kStructHeaderSize + 16;

  ReportBodyElement.decode = function(decoder) {
    var packed;
    var val = new ReportBodyElement();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name =
        decoder.decodeStruct(codec.String);
    val.value =
        decoder.decodeStruct(codec.String);
    return val;
  };

  ReportBodyElement.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReportBodyElement.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.value);
  };
  function ReportBody(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReportBody.prototype.initDefaults_ = function() {
    this.body = null;
  };
  ReportBody.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReportBody.validate = function(messageValidator, offset) {
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


    // validate ReportBody.body
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(ReportBodyElement), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReportBody.encodedSize = codec.kStructHeaderSize + 8;

  ReportBody.decode = function(decoder) {
    var packed;
    var val = new ReportBody();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.body =
        decoder.decodeArrayPointer(new codec.PointerTo(ReportBodyElement));
    return val;
  };

  ReportBody.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReportBody.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(ReportBodyElement), val.body);
  };
  function Report(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Report.prototype.initDefaults_ = function() {
    this.type = null;
    this.url = null;
    this.body = null;
  };
  Report.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Report.validate = function(messageValidator, offset) {
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


    // validate Report.type
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Report.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Report.body
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, ReportBody, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Report.encodedSize = codec.kStructHeaderSize + 24;

  Report.decode = function(decoder) {
    var packed;
    var val = new Report();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(codec.String);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.body =
        decoder.decodeStructPointer(ReportBody);
    return val;
  };

  Report.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Report.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.type);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(ReportBody, val.body);
  };
  function ReportingObserver_Notify_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ReportingObserver_Notify_Params.prototype.initDefaults_ = function() {
    this.report = null;
  };
  ReportingObserver_Notify_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ReportingObserver_Notify_Params.validate = function(messageValidator, offset) {
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


    // validate ReportingObserver_Notify_Params.report
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, Report, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ReportingObserver_Notify_Params.encodedSize = codec.kStructHeaderSize + 8;

  ReportingObserver_Notify_Params.decode = function(decoder) {
    var packed;
    var val = new ReportingObserver_Notify_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.report =
        decoder.decodeStructPointer(Report);
    return val;
  };

  ReportingObserver_Notify_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ReportingObserver_Notify_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(Report, val.report);
  };
  var kReportingObserver_Notify_Name = 1541641863;

  function ReportingObserverPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ReportingObserver,
                                                   handleOrPtrInfo);
  }

  function ReportingObserverAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ReportingObserver, associatedInterfacePtrInfo);
  }

  ReportingObserverAssociatedPtr.prototype =
      Object.create(ReportingObserverPtr.prototype);
  ReportingObserverAssociatedPtr.prototype.constructor =
      ReportingObserverAssociatedPtr;

  function ReportingObserverProxy(receiver) {
    this.receiver_ = receiver;
  }
  ReportingObserverPtr.prototype.notify = function() {
    return ReportingObserverProxy.prototype.notify
        .apply(this.ptr.getProxy(), arguments);
  };

  ReportingObserverProxy.prototype.notify = function(report) {
    var params_ = new ReportingObserver_Notify_Params();
    params_.report = report;
    var builder = new codec.MessageV0Builder(
        kReportingObserver_Notify_Name,
        codec.align(ReportingObserver_Notify_Params.encodedSize));
    builder.encodeStruct(ReportingObserver_Notify_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ReportingObserverStub(delegate) {
    this.delegate_ = delegate;
  }
  ReportingObserverStub.prototype.notify = function(report) {
    return this.delegate_ && this.delegate_.notify && this.delegate_.notify(report);
  }

  ReportingObserverStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kReportingObserver_Notify_Name:
      var params = reader.decodeStruct(ReportingObserver_Notify_Params);
      this.notify(params.report);
      return true;
    default:
      return false;
    }
  };

  ReportingObserverStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateReportingObserverRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kReportingObserver_Notify_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ReportingObserver_Notify_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateReportingObserverResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ReportingObserver = {
    name: 'blink.mojom.ReportingObserver',
    kVersion: 0,
    ptrClass: ReportingObserverPtr,
    proxyClass: ReportingObserverProxy,
    stubClass: ReportingObserverStub,
    validateRequest: validateReportingObserverRequest,
    validateResponse: null,
  };
  ReportingObserverStub.prototype.validator = validateReportingObserverRequest;
  ReportingObserverProxy.prototype.validator = null;
  exports.ReportBodyElement = ReportBodyElement;
  exports.ReportBody = ReportBody;
  exports.Report = Report;
  exports.ReportingObserver = ReportingObserver;
  exports.ReportingObserverPtr = ReportingObserverPtr;
  exports.ReportingObserverAssociatedPtr = ReportingObserverAssociatedPtr;
})();