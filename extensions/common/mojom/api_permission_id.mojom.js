// extensions/common/mojom/api_permission_id.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/api_permission_id.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('extensions.mojom');


  var APIPermissionID = {};
  APIPermissionID.kInvalid = 0;
  APIPermissionID.kUnknown = 1;
  APIPermissionID.kAccessibilityFeaturesModify = 2;
  APIPermissionID.kAccessibilityFeaturesRead = 3;
  APIPermissionID.kAccessibilityPrivate = 4;
  APIPermissionID.kActiveTab = 5;
  APIPermissionID.kActivityLogPrivate = 6;
  APIPermissionID.kAlarms = 7;
  APIPermissionID.kAlphaEnabled = 8;
  APIPermissionID.kAlwaysOnTopWindows = 9;
  APIPermissionID.kAppView = 10;
  APIPermissionID.kAudio = 11;
  APIPermissionID.kAudioCapture = 12;
  APIPermissionID.kDeleted_AudioModem = 13;
  APIPermissionID.kAutofillPrivate = 14;
  APIPermissionID.kAutomation = 15;
  APIPermissionID.kAutoTestPrivate = 16;
  APIPermissionID.kBackground = 17;
  APIPermissionID.kBluetoothPrivate = 18;
  APIPermissionID.kBookmark = 19;
  APIPermissionID.kDeleted_BookmarkManagerPrivate = 20;
  APIPermissionID.kBrailleDisplayPrivate = 21;
  APIPermissionID.kBrowser = 22;
  APIPermissionID.kBrowsingData = 23;
  APIPermissionID.kDeleted_Cast = 24;
  APIPermissionID.kDeleted_CastStreaming = 25;
  APIPermissionID.kChromeosInfoPrivate = 26;
  APIPermissionID.kClipboardRead = 27;
  APIPermissionID.kClipboardWrite = 28;
  APIPermissionID.kDeleted_CloudPrintPrivate = 29;
  APIPermissionID.kCommandLinePrivate = 30;
  APIPermissionID.kCommandsAccessibility = 31;
  APIPermissionID.kContentSettings = 32;
  APIPermissionID.kContextMenus = 33;
  APIPermissionID.kCookie = 34;
  APIPermissionID.kDeleted_Copresence = 35;
  APIPermissionID.kDeleted_CopresencePrivate = 36;
  APIPermissionID.kDeleted_CryptotokenPrivate = 37;
  APIPermissionID.kDeleted_DataReductionProxy = 38;
  APIPermissionID.kDiagnostics = 39;
  APIPermissionID.kDeleted_Dial = 40;
  APIPermissionID.kDebugger = 41;
  APIPermissionID.kDeclarative = 42;
  APIPermissionID.kDeclarativeContent = 43;
  APIPermissionID.kDeclarativeWebRequest = 44;
  APIPermissionID.kDesktopCapture = 45;
  APIPermissionID.kDeleted_DesktopCapturePrivate = 46;
  APIPermissionID.kDeveloperPrivate = 47;
  APIPermissionID.kDevtools = 48;
  APIPermissionID.kDns = 49;
  APIPermissionID.kDocumentScan = 50;
  APIPermissionID.kDownloads = 51;
  APIPermissionID.kDeleted_DownloadsInternal = 52;
  APIPermissionID.kDownloadsOpen = 53;
  APIPermissionID.kDownloadsShelf = 54;
  APIPermissionID.kDeleted_EasyUnlockPrivate = 55;
  APIPermissionID.kEchoPrivate = 56;
  APIPermissionID.kDeleted_EmbeddedExtensionOptions = 57;
  APIPermissionID.kEnterprisePlatformKeys = 58;
  APIPermissionID.kEnterprisePlatformKeysPrivate = 59;
  APIPermissionID.kDeleted_ExperienceSamplingPrivate = 60;
  APIPermissionID.kExperimental = 61;
  APIPermissionID.kDeleted_ExtensionView = 62;
  APIPermissionID.kDeprecated_ExternallyConnectableAllUrls = 63;
  APIPermissionID.kFeedbackPrivate = 64;
  APIPermissionID.kFileBrowserHandler = 65;
  APIPermissionID.kDeleted_FileBrowserHandlerInternal = 66;
  APIPermissionID.kFileManagerPrivate = 67;
  APIPermissionID.kFileSystem = 68;
  APIPermissionID.kFileSystemDirectory = 69;
  APIPermissionID.kFileSystemProvider = 70;
  APIPermissionID.kFileSystemRequestFileSystem = 71;
  APIPermissionID.kFileSystemRetainEntries = 72;
  APIPermissionID.kFileSystemWrite = 73;
  APIPermissionID.kDeleted_FileSystemWriteDirectory = 74;
  APIPermissionID.kFirstRunPrivate = 75;
  APIPermissionID.kFontSettings = 76;
  APIPermissionID.kFullscreen = 77;
  APIPermissionID.kDeleted_GcdPrivate = 78;
  APIPermissionID.kGcm = 79;
  APIPermissionID.kGeolocation = 80;
  APIPermissionID.kHid = 81;
  APIPermissionID.kHistory = 82;
  APIPermissionID.kHomepage = 83;
  APIPermissionID.kHotwordPrivate = 84;
  APIPermissionID.kIdentity = 85;
  APIPermissionID.kIdentityEmail = 86;
  APIPermissionID.kDeleted_IdentityPrivate = 87;
  APIPermissionID.kIdltest = 88;
  APIPermissionID.kIdle = 89;
  APIPermissionID.kImeWindowEnabled = 90;
  APIPermissionID.kDeleted_InlineInstallPrivate = 91;
  APIPermissionID.kInput = 92;
  APIPermissionID.kInputMethodPrivate = 93;
  APIPermissionID.kDeleted_InterceptAllKeys = 94;
  APIPermissionID.kDeleted_LauncherSearchProvider = 95;
  APIPermissionID.kLocation = 96;
  APIPermissionID.kDeleted_LogPrivate = 97;
  APIPermissionID.kManagement = 98;
  APIPermissionID.kMediaGalleries = 99;
  APIPermissionID.kMediaPlayerPrivate = 100;
  APIPermissionID.kDeleted_MediaRouterPrivate = 101;
  APIPermissionID.kMetricsPrivate = 102;
  APIPermissionID.kMDns = 103;
  APIPermissionID.kDeleted_MusicManagerPrivate = 104;
  APIPermissionID.kNativeMessaging = 105;
  APIPermissionID.kDeleted_NetworkingConfig = 106;
  APIPermissionID.kNetworkingPrivate = 107;
  APIPermissionID.kDeleted_NotificationProvider = 108;
  APIPermissionID.kNotifications = 109;
  APIPermissionID.kOverrideEscFullscreen = 110;
  APIPermissionID.kPageCapture = 111;
  APIPermissionID.kPointerLock = 112;
  APIPermissionID.kPlatformKeys = 113;
  APIPermissionID.kDeleted_Plugin = 114;
  APIPermissionID.kPower = 115;
  APIPermissionID.kDeleted_PreferencesPrivate = 116;
  APIPermissionID.kDeleted_PrincipalsPrivate = 117;
  APIPermissionID.kPrinterProvider = 118;
  APIPermissionID.kPrivacy = 119;
  APIPermissionID.kProcesses = 120;
  APIPermissionID.kProxy = 121;
  APIPermissionID.kImageWriterPrivate = 122;
  APIPermissionID.kDeleted_ReadingListPrivate = 123;
  APIPermissionID.kRtcPrivate = 124;
  APIPermissionID.kSearchProvider = 125;
  APIPermissionID.kSearchEnginesPrivate = 126;
  APIPermissionID.kSerial = 127;
  APIPermissionID.kSessions = 128;
  APIPermissionID.kSettingsPrivate = 129;
  APIPermissionID.kDeleted_SignedInDevices = 130;
  APIPermissionID.kSocket = 131;
  APIPermissionID.kStartupPages = 132;
  APIPermissionID.kStorage = 133;
  APIPermissionID.kDeleted_StreamsPrivate = 134;
  APIPermissionID.kSyncFileSystem = 135;
  APIPermissionID.kSystemPrivate = 136;
  APIPermissionID.kSystemDisplay = 137;
  APIPermissionID.kSystemStorage = 138;
  APIPermissionID.kTab = 139;
  APIPermissionID.kTabCapture = 140;
  APIPermissionID.kTabCaptureForTab = 141;
  APIPermissionID.kTerminalPrivate = 142;
  APIPermissionID.kTopSites = 143;
  APIPermissionID.kTts = 144;
  APIPermissionID.kTtsEngine = 145;
  APIPermissionID.kUnlimitedStorage = 146;
  APIPermissionID.kU2fDevices = 147;
  APIPermissionID.kUsb = 148;
  APIPermissionID.kUsbDevice = 149;
  APIPermissionID.kVideoCapture = 150;
  APIPermissionID.kVirtualKeyboardPrivate = 151;
  APIPermissionID.kVpnProvider = 152;
  APIPermissionID.kWallpaper = 153;
  APIPermissionID.kDeleted_WallpaperPrivate = 154;
  APIPermissionID.kWebcamPrivate = 155;
  APIPermissionID.kDeleted_kWebConnectable = 156;
  APIPermissionID.kWebNavigation = 157;
  APIPermissionID.kWebRequest = 158;
  APIPermissionID.kWebRequestBlocking = 159;
  APIPermissionID.kWebrtcAudioPrivate = 160;
  APIPermissionID.kWebrtcDesktopCapturePrivate = 161;
  APIPermissionID.kWebrtcLoggingPrivate = 162;
  APIPermissionID.kWebstorePrivate = 163;
  APIPermissionID.kDeleted_WebstoreWidgetPrivate = 164;
  APIPermissionID.kWebView = 165;
  APIPermissionID.kWindowShape = 166;
  APIPermissionID.kDeleted_ScreenlockPrivate = 167;
  APIPermissionID.kSystemCpu = 168;
  APIPermissionID.kSystemMemory = 169;
  APIPermissionID.kSystemNetwork = 170;
  APIPermissionID.kSystemInfoCpu = 171;
  APIPermissionID.kSystemInfoMemory = 172;
  APIPermissionID.kBluetooth = 173;
  APIPermissionID.kBluetoothDevices = 174;
  APIPermissionID.kFavicon = 175;
  APIPermissionID.kFullAccess = 176;
  APIPermissionID.kHostReadOnly = 177;
  APIPermissionID.kHostReadWrite = 178;
  APIPermissionID.kHostsAll = 179;
  APIPermissionID.kHostsAllReadOnly = 180;
  APIPermissionID.kMediaGalleriesAllGalleriesCopyTo = 181;
  APIPermissionID.kMediaGalleriesAllGalleriesDelete = 182;
  APIPermissionID.kMediaGalleriesAllGalleriesRead = 183;
  APIPermissionID.kNetworkState = 184;
  APIPermissionID.kDeleted_OverrideBookmarksUI = 185;
  APIPermissionID.kShouldWarnAllHosts = 186;
  APIPermissionID.kSocketAnyHost = 187;
  APIPermissionID.kSocketDomainHosts = 188;
  APIPermissionID.kSocketSpecificHosts = 189;
  APIPermissionID.kDeleted_UsbDeviceList = 190;
  APIPermissionID.kUsbDeviceUnknownProduct = 191;
  APIPermissionID.kUsbDeviceUnknownVendor = 192;
  APIPermissionID.kUsersPrivate = 193;
  APIPermissionID.kPasswordsPrivate = 194;
  APIPermissionID.kLanguageSettingsPrivate = 195;
  APIPermissionID.kEnterpriseDeviceAttributes = 196;
  APIPermissionID.kCertificateProvider = 197;
  APIPermissionID.kResourcesPrivate = 198;
  APIPermissionID.kDeleted_DisplaySource = 199;
  APIPermissionID.kClipboard = 200;
  APIPermissionID.kNetworkingOnc = 201;
  APIPermissionID.kVirtualKeyboard = 202;
  APIPermissionID.kDeleted_NetworkingCastPrivate = 203;
  APIPermissionID.kMediaPerceptionPrivate = 204;
  APIPermissionID.kLockScreen = 205;
  APIPermissionID.kNewTabPageOverride = 206;
  APIPermissionID.kDeclarativeNetRequest = 207;
  APIPermissionID.kLockWindowFullscreenPrivate = 208;
  APIPermissionID.kWebrtcLoggingPrivateAudioDebug = 209;
  APIPermissionID.kEnterpriseReportingPrivate = 210;
  APIPermissionID.kCecPrivate = 211;
  APIPermissionID.kSafeBrowsingPrivate = 212;
  APIPermissionID.kDeleted_FileSystemRequestDownloads = 213;
  APIPermissionID.kDeleted_SystemPowerSource = 214;
  APIPermissionID.kArcAppsPrivate = 215;
  APIPermissionID.kEnterpriseHardwarePlatform = 216;
  APIPermissionID.kLoginScreenUi = 217;
  APIPermissionID.kDeclarativeNetRequestFeedback = 218;
  APIPermissionID.kTransientBackground = 219;
  APIPermissionID.kLogin = 220;
  APIPermissionID.kLoginScreenStorage = 221;
  APIPermissionID.kLoginState = 222;
  APIPermissionID.kPrintingMetrics = 223;
  APIPermissionID.kPrinting = 224;
  APIPermissionID.kCrashReportPrivate = 225;
  APIPermissionID.kDeleted_AutofillAssistantPrivate = 226;
  APIPermissionID.kEnterpriseNetworkingAttributes = 227;
  APIPermissionID.kSearch = 228;
  APIPermissionID.kTabGroups = 229;
  APIPermissionID.kScripting = 230;
  APIPermissionID.kWmDesksPrivate = 231;
  APIPermissionID.kWebAuthenticationProxy = 232;
  APIPermissionID.kDeclarativeNetRequestWithHostAccess = 233;
  APIPermissionID.kChromeOSTelemetry = 234;
  APIPermissionID.kSpeechRecognitionPrivate = 235;
  APIPermissionID.kChromeOSDiagnostics = 236;
  APIPermissionID.kChromeOSTelemetrySerialNumber = 237;
  APIPermissionID.kSharedStoragePrivate = 238;
  APIPermissionID.kEnterpriseRemoteApps = 239;
  APIPermissionID.kOffscreen = 240;
  APIPermissionID.kSidePanel = 241;
  APIPermissionID.kDownloadsUi = 242;
  APIPermissionID.kWebRequestAuthProvider = 243;
  APIPermissionID.kChromeOSTelemetryNetworkInformation = 244;
  APIPermissionID.kPdfViewerPrivate = 245;
  APIPermissionID.kSystemLog = 246;
  APIPermissionID.kSmartCardProviderPrivate = 247;
  APIPermissionID.kChromeOSEvents = 248;
  APIPermissionID.kChromeOSAttachedDeviceInfo = 249;
  APIPermissionID.kReadingList = 250;
  APIPermissionID.kImageLoaderPrivate = 251;
  APIPermissionID.kAccessibilityServicePrivate = 252;
  APIPermissionID.kUserScripts = 253;
  APIPermissionID.kChromeOSBluetoothPeripheralsInfo = 254;
  APIPermissionID.MIN_VALUE = 0;
  APIPermissionID.MAX_VALUE = 254;

  APIPermissionID.isKnownEnumValue = function(value) {
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
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
    case 123:
    case 124:
    case 125:
    case 126:
    case 127:
    case 128:
    case 129:
    case 130:
    case 131:
    case 132:
    case 133:
    case 134:
    case 135:
    case 136:
    case 137:
    case 138:
    case 139:
    case 140:
    case 141:
    case 142:
    case 143:
    case 144:
    case 145:
    case 146:
    case 147:
    case 148:
    case 149:
    case 150:
    case 151:
    case 152:
    case 153:
    case 154:
    case 155:
    case 156:
    case 157:
    case 158:
    case 159:
    case 160:
    case 161:
    case 162:
    case 163:
    case 164:
    case 165:
    case 166:
    case 167:
    case 168:
    case 169:
    case 170:
    case 171:
    case 172:
    case 173:
    case 174:
    case 175:
    case 176:
    case 177:
    case 178:
    case 179:
    case 180:
    case 181:
    case 182:
    case 183:
    case 184:
    case 185:
    case 186:
    case 187:
    case 188:
    case 189:
    case 190:
    case 191:
    case 192:
    case 193:
    case 194:
    case 195:
    case 196:
    case 197:
    case 198:
    case 199:
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
    case 205:
    case 206:
    case 207:
    case 208:
    case 209:
    case 210:
    case 211:
    case 212:
    case 213:
    case 214:
    case 215:
    case 216:
    case 217:
    case 218:
    case 219:
    case 220:
    case 221:
    case 222:
    case 223:
    case 224:
    case 225:
    case 226:
    case 227:
    case 228:
    case 229:
    case 230:
    case 231:
    case 232:
    case 233:
    case 234:
    case 235:
    case 236:
    case 237:
    case 238:
    case 239:
    case 240:
    case 241:
    case 242:
    case 243:
    case 244:
    case 245:
    case 246:
    case 247:
    case 248:
    case 249:
    case 250:
    case 251:
    case 252:
    case 253:
    case 254:
      return true;
    }
    return false;
  };

  APIPermissionID.toKnownEnumValue = function(value) {
    return value;
  };

  APIPermissionID.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.APIPermissionID = APIPermissionID;
})();