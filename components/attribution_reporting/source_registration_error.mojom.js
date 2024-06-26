// components/attribution_reporting/source_registration_error.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/attribution_reporting/source_registration_error.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('attributionReporting.mojom');


  var SourceRegistrationError = {};
  SourceRegistrationError.kInvalidJson = 0;
  SourceRegistrationError.kRootWrongType = 1;
  SourceRegistrationError.kDestinationMissing = 2;
  SourceRegistrationError.kDestinationWrongType = 3;
  SourceRegistrationError.kDestinationUntrustworthy = 4;
  SourceRegistrationError.kDestinationListTooLong = 18;
  SourceRegistrationError.kFilterDataWrongType = 5;
  SourceRegistrationError.kFilterDataTooManyKeys = 6;
  SourceRegistrationError.kFilterDataHasSourceTypeKey = 7;
  SourceRegistrationError.kFilterDataHasLookbackWindowKey = 24;
  SourceRegistrationError.kFilterDataKeyTooLong = 8;
  SourceRegistrationError.kFilterDataListWrongType = 9;
  SourceRegistrationError.kFilterDataListTooLong = 10;
  SourceRegistrationError.kFilterDataValueWrongType = 11;
  SourceRegistrationError.kFilterDataValueTooLong = 12;
  SourceRegistrationError.kAggregationKeysWrongType = 13;
  SourceRegistrationError.kAggregationKeysTooManyKeys = 14;
  SourceRegistrationError.kAggregationKeysKeyTooLong = 15;
  SourceRegistrationError.kAggregationKeysValueWrongType = 16;
  SourceRegistrationError.kAggregationKeysValueWrongFormat = 17;
  SourceRegistrationError.kSourceEventIdValueInvalid = 19;
  SourceRegistrationError.kPriorityValueInvalid = 20;
  SourceRegistrationError.kExpiryValueInvalid = 21;
  SourceRegistrationError.kEventReportWindowValueInvalid = 22;
  SourceRegistrationError.kAggregatableReportWindowValueInvalid = 23;
  SourceRegistrationError.kMaxEventLevelReportsValueInvalid = 25;
  SourceRegistrationError.kEventReportWindowsWrongType = 26;
  SourceRegistrationError.kEventReportWindowsStartTimeWrongType = 27;
  SourceRegistrationError.kEventReportWindowsStartTimeInvalid = 28;
  SourceRegistrationError.kEventReportWindowsEndTimesMissing = 29;
  SourceRegistrationError.kEventReportWindowsEndTimesWrongType = 30;
  SourceRegistrationError.kEventReportWindowsEndTimesListEmpty = 31;
  SourceRegistrationError.kEventReportWindowsEndTimesListTooLong = 32;
  SourceRegistrationError.kEventReportWindowsEndTimeValueWrongType = 33;
  SourceRegistrationError.kEventReportWindowsEndTimeValueInvalid = 34;
  SourceRegistrationError.kEventReportWindowsEndTimeDurationLTEStart = 35;
  SourceRegistrationError.kBothEventReportWindowFieldsFound = 36;
  SourceRegistrationError.MIN_VALUE = 0;
  SourceRegistrationError.MAX_VALUE = 36;

  SourceRegistrationError.isKnownEnumValue = function(value) {
    switch (value) {
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
      return true;
    }
    return false;
  };

  SourceRegistrationError.toKnownEnumValue = function(value) {
    return value;
  };

  SourceRegistrationError.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.SourceRegistrationError = SourceRegistrationError;
})();