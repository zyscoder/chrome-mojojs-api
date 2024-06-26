// gpu/ipc/common/gpu_peak_memory.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/gpu_peak_memory.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gpu.mojom');


  var GpuPeakMemoryAllocationSource = {};
  GpuPeakMemoryAllocationSource.UNKNOWN = 0;
  GpuPeakMemoryAllocationSource.COMMAND_BUFFER = 1;
  GpuPeakMemoryAllocationSource.SHARED_CONTEXT_STATE = 2;
  GpuPeakMemoryAllocationSource.SHARED_IMAGE_STUB = 3;
  GpuPeakMemoryAllocationSource.SKIA = 4;
  GpuPeakMemoryAllocationSource.MIN_VALUE = 0;
  GpuPeakMemoryAllocationSource.MAX_VALUE = 4;

  GpuPeakMemoryAllocationSource.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  GpuPeakMemoryAllocationSource.toKnownEnumValue = function(value) {
    return value;
  };

  GpuPeakMemoryAllocationSource.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.GpuPeakMemoryAllocationSource = GpuPeakMemoryAllocationSource;
})();