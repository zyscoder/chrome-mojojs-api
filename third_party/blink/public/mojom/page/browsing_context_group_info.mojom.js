// third_party/blink/public/mojom/page/browsing_context_group_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/page/browsing_context_group_info.mojom';
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
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }



  function BrowsingContextGroupInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BrowsingContextGroupInfo.prototype.initDefaults_ = function() {
    this.browsingContextGroupToken = null;
    this.coopRelatedGroupToken = null;
  };
  BrowsingContextGroupInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BrowsingContextGroupInfo.validate = function(messageValidator, offset) {
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


    // validate BrowsingContextGroupInfo.browsingContextGroupToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BrowsingContextGroupInfo.coopRelatedGroupToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BrowsingContextGroupInfo.encodedSize = codec.kStructHeaderSize + 16;

  BrowsingContextGroupInfo.decode = function(decoder) {
    var packed;
    var val = new BrowsingContextGroupInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.browsingContextGroupToken =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.coopRelatedGroupToken =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  BrowsingContextGroupInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BrowsingContextGroupInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.browsingContextGroupToken);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.coopRelatedGroupToken);
  };
  exports.BrowsingContextGroupInfo = BrowsingContextGroupInfo;
})();