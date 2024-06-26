// ui/base/cursor/mojom/cursor_type.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/base/cursor/mojom/cursor_type.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');


  var CursorType = {};
  CursorType.kNull = -1;
  CursorType.kPointer = 0;
  CursorType.kCross = 1;
  CursorType.kHand = 2;
  CursorType.kIBeam = 3;
  CursorType.kWait = 4;
  CursorType.kHelp = 5;
  CursorType.kEastResize = 6;
  CursorType.kNorthResize = 7;
  CursorType.kNorthEastResize = 8;
  CursorType.kNorthWestResize = 9;
  CursorType.kSouthResize = 10;
  CursorType.kSouthEastResize = 11;
  CursorType.kSouthWestResize = 12;
  CursorType.kWestResize = 13;
  CursorType.kNorthSouthResize = 14;
  CursorType.kEastWestResize = 15;
  CursorType.kNorthEastSouthWestResize = 16;
  CursorType.kNorthWestSouthEastResize = 17;
  CursorType.kColumnResize = 18;
  CursorType.kRowResize = 19;
  CursorType.kMiddlePanning = 20;
  CursorType.kEastPanning = 21;
  CursorType.kNorthPanning = 22;
  CursorType.kNorthEastPanning = 23;
  CursorType.kNorthWestPanning = 24;
  CursorType.kSouthPanning = 25;
  CursorType.kSouthEastPanning = 26;
  CursorType.kSouthWestPanning = 27;
  CursorType.kWestPanning = 28;
  CursorType.kMove = 29;
  CursorType.kVerticalText = 30;
  CursorType.kCell = 31;
  CursorType.kContextMenu = 32;
  CursorType.kAlias = 33;
  CursorType.kProgress = 34;
  CursorType.kNoDrop = 35;
  CursorType.kCopy = 36;
  CursorType.kNone = 37;
  CursorType.kNotAllowed = 38;
  CursorType.kZoomIn = 39;
  CursorType.kZoomOut = 40;
  CursorType.kGrab = 41;
  CursorType.kGrabbing = 42;
  CursorType.kMiddlePanningVertical = 43;
  CursorType.kMiddlePanningHorizontal = 44;
  CursorType.kCustom = 45;
  CursorType.kDndNone = 46;
  CursorType.kDndMove = 47;
  CursorType.kDndCopy = 48;
  CursorType.kDndLink = 49;
  CursorType.kEastWestNoResize = 50;
  CursorType.kNorthSouthNoResize = 51;
  CursorType.kNorthEastSouthWestNoResize = 52;
  CursorType.kNorthWestSouthEastNoResize = 53;
  CursorType.MIN_VALUE = -1;
  CursorType.MAX_VALUE = 53;

  CursorType.isKnownEnumValue = function(value) {
    switch (value) {
    case -1:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
      return true;
    }
    return false;
  };

  CursorType.toKnownEnumValue = function(value) {
    return value;
  };

  CursorType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.CursorType = CursorType;
})();