// content/common/frame_messages.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/common/frame_messages.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('content.mojom');
  var interface_provider$ =
      mojo.internal.exposeNamespace('serviceManager.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/service_manager/public/mojom/interface_provider.mojom', '../../services/service_manager/public/mojom/interface_provider.mojom.js');
  }
  var browser_interface_broker$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/browser_interface_broker.mojom', '../../third_party/blink/public/mojom/browser_interface_broker.mojom.js');
  }



  function DidCommitProvisionalLoadInterfaceParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DidCommitProvisionalLoadInterfaceParams.prototype.initDefaults_ = function() {
    this.browserInterfaceBrokerReceiver = new bindings.InterfaceRequest();
  };
  DidCommitProvisionalLoadInterfaceParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DidCommitProvisionalLoadInterfaceParams.validate = function(messageValidator, offset) {
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


    // validate DidCommitProvisionalLoadInterfaceParams.browserInterfaceBrokerReceiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DidCommitProvisionalLoadInterfaceParams.encodedSize = codec.kStructHeaderSize + 8;

  DidCommitProvisionalLoadInterfaceParams.decode = function(decoder) {
    var packed;
    var val = new DidCommitProvisionalLoadInterfaceParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.browserInterfaceBrokerReceiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DidCommitProvisionalLoadInterfaceParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DidCommitProvisionalLoadInterfaceParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.browserInterfaceBrokerReceiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.DidCommitProvisionalLoadInterfaceParams = DidCommitProvisionalLoadInterfaceParams;
})();