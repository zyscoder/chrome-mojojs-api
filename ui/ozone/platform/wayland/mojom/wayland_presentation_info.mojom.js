// ui/ozone/platform/wayland/mojom/wayland_presentation_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/ozone/platform/wayland/mojom/wayland_presentation_info.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('wl.mojom');
  var presentation_feedback$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/presentation_feedback.mojom', '../../../../gfx/mojom/presentation_feedback.mojom.js');
  }



  function WaylandPresentationInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WaylandPresentationInfo.prototype.initDefaults_ = function() {
    this.frameId = 0;
    this.feedback = null;
  };
  WaylandPresentationInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WaylandPresentationInfo.validate = function(messageValidator, offset) {
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



    // validate WaylandPresentationInfo.feedback
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, presentation_feedback$.PresentationFeedback, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WaylandPresentationInfo.encodedSize = codec.kStructHeaderSize + 16;

  WaylandPresentationInfo.decode = function(decoder) {
    var packed;
    var val = new WaylandPresentationInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameId =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.feedback =
        decoder.decodeStructPointer(presentation_feedback$.PresentationFeedback);
    return val;
  };

  WaylandPresentationInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WaylandPresentationInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.frameId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(presentation_feedback$.PresentationFeedback, val.feedback);
  };
  exports.WaylandPresentationInfo = WaylandPresentationInfo;
})();