// services/viz/privileged/mojom/compositing/overlay_strategy.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/privileged/mojom/compositing/overlay_strategy.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('viz.mojom');


  var OverlayStrategy = {};
  OverlayStrategy.kFullscreen = 0;
  OverlayStrategy.kSingleOnTop = 1;
  OverlayStrategy.kUnderlay = 2;
  OverlayStrategy.MIN_VALUE = 0;
  OverlayStrategy.MAX_VALUE = 2;

  OverlayStrategy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  OverlayStrategy.toKnownEnumValue = function(value) {
    return value;
  };

  OverlayStrategy.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.OverlayStrategy = OverlayStrategy;
})();