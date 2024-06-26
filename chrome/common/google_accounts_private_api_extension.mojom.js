// chrome/common/google_accounts_private_api_extension.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/common/google_accounts_private_api_extension.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('chrome.mojom');



  function GoogleAccountsPrivateApiExtension_SetConsentResult_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GoogleAccountsPrivateApiExtension_SetConsentResult_Params.prototype.initDefaults_ = function() {
    this.consentResult = null;
  };
  GoogleAccountsPrivateApiExtension_SetConsentResult_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GoogleAccountsPrivateApiExtension_SetConsentResult_Params.validate = function(messageValidator, offset) {
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


    // validate GoogleAccountsPrivateApiExtension_SetConsentResult_Params.consentResult
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GoogleAccountsPrivateApiExtension_SetConsentResult_Params.encodedSize = codec.kStructHeaderSize + 8;

  GoogleAccountsPrivateApiExtension_SetConsentResult_Params.decode = function(decoder) {
    var packed;
    var val = new GoogleAccountsPrivateApiExtension_SetConsentResult_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.consentResult =
        decoder.decodeStruct(codec.String);
    return val;
  };

  GoogleAccountsPrivateApiExtension_SetConsentResult_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GoogleAccountsPrivateApiExtension_SetConsentResult_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.consentResult);
  };
  var kGoogleAccountsPrivateApiExtension_SetConsentResult_Name = 163704585;

  function GoogleAccountsPrivateApiExtensionPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(GoogleAccountsPrivateApiExtension,
                                                   handleOrPtrInfo);
  }

  function GoogleAccountsPrivateApiExtensionAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        GoogleAccountsPrivateApiExtension, associatedInterfacePtrInfo);
  }

  GoogleAccountsPrivateApiExtensionAssociatedPtr.prototype =
      Object.create(GoogleAccountsPrivateApiExtensionPtr.prototype);
  GoogleAccountsPrivateApiExtensionAssociatedPtr.prototype.constructor =
      GoogleAccountsPrivateApiExtensionAssociatedPtr;

  function GoogleAccountsPrivateApiExtensionProxy(receiver) {
    this.receiver_ = receiver;
  }
  GoogleAccountsPrivateApiExtensionPtr.prototype.setConsentResult = function() {
    return GoogleAccountsPrivateApiExtensionProxy.prototype.setConsentResult
        .apply(this.ptr.getProxy(), arguments);
  };

  GoogleAccountsPrivateApiExtensionProxy.prototype.setConsentResult = function(consentResult) {
    var params_ = new GoogleAccountsPrivateApiExtension_SetConsentResult_Params();
    params_.consentResult = consentResult;
    var builder = new codec.MessageV0Builder(
        kGoogleAccountsPrivateApiExtension_SetConsentResult_Name,
        codec.align(GoogleAccountsPrivateApiExtension_SetConsentResult_Params.encodedSize));
    builder.encodeStruct(GoogleAccountsPrivateApiExtension_SetConsentResult_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function GoogleAccountsPrivateApiExtensionStub(delegate) {
    this.delegate_ = delegate;
  }
  GoogleAccountsPrivateApiExtensionStub.prototype.setConsentResult = function(consentResult) {
    return this.delegate_ && this.delegate_.setConsentResult && this.delegate_.setConsentResult(consentResult);
  }

  GoogleAccountsPrivateApiExtensionStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kGoogleAccountsPrivateApiExtension_SetConsentResult_Name:
      var params = reader.decodeStruct(GoogleAccountsPrivateApiExtension_SetConsentResult_Params);
      this.setConsentResult(params.consentResult);
      return true;
    default:
      return false;
    }
  };

  GoogleAccountsPrivateApiExtensionStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateGoogleAccountsPrivateApiExtensionRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kGoogleAccountsPrivateApiExtension_SetConsentResult_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = GoogleAccountsPrivateApiExtension_SetConsentResult_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateGoogleAccountsPrivateApiExtensionResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var GoogleAccountsPrivateApiExtension = {
    name: 'chrome.mojom.GoogleAccountsPrivateApiExtension',
    kVersion: 0,
    ptrClass: GoogleAccountsPrivateApiExtensionPtr,
    proxyClass: GoogleAccountsPrivateApiExtensionProxy,
    stubClass: GoogleAccountsPrivateApiExtensionStub,
    validateRequest: validateGoogleAccountsPrivateApiExtensionRequest,
    validateResponse: null,
  };
  GoogleAccountsPrivateApiExtensionStub.prototype.validator = validateGoogleAccountsPrivateApiExtensionRequest;
  GoogleAccountsPrivateApiExtensionProxy.prototype.validator = null;
  exports.GoogleAccountsPrivateApiExtension = GoogleAccountsPrivateApiExtension;
  exports.GoogleAccountsPrivateApiExtensionPtr = GoogleAccountsPrivateApiExtensionPtr;
  exports.GoogleAccountsPrivateApiExtensionAssociatedPtr = GoogleAccountsPrivateApiExtensionAssociatedPtr;
})();