// third_party/blink/public/mojom/service_worker/service_worker_provider.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/service_worker/service_worker_provider.mojom';
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
  var url_loader_factory$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader_factory.mojom', '../../../../../services/network/public/mojom/url_loader_factory.mojom.js');
  }
  var browser_interface_broker$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/browser_interface_broker.mojom', '../browser_interface_broker.mojom.js');
  }
  var cache_storage$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/cache_storage/cache_storage.mojom', '../cache_storage/cache_storage.mojom.js');
  }
  var service_worker_container$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/service_worker/service_worker_container.mojom', 'service_worker_container.mojom.js');
  }
  var service_worker_container_type$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/service_worker/service_worker_container_type.mojom', 'service_worker_container_type.mojom.js');
  }
  var service_worker_object$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/service_worker/service_worker_object.mojom', 'service_worker_object.mojom.js');
  }
  var service_worker_worker_client$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/service_worker/service_worker_worker_client.mojom', 'service_worker_worker_client.mojom.js');
  }


  var NAVIGATION_SERVICE_WORKER_SPEC = "navigation:service_worker";

  function ServiceWorkerProviderInfoForStartWorker(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ServiceWorkerProviderInfoForStartWorker.prototype.initDefaults_ = function() {
    this.hostRemote = new associatedBindings.AssociatedInterfacePtrInfo();
    this.scriptLoaderFactoryRemote = new url_loader_factory$.URLLoaderFactoryPtr();
    this.cacheStorage = new cache_storage$.CacheStoragePtr();
    this.browserInterfaceBroker = new browser_interface_broker$.BrowserInterfaceBrokerPtr();
  };
  ServiceWorkerProviderInfoForStartWorker.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ServiceWorkerProviderInfoForStartWorker.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerProviderInfoForStartWorker.hostRemote
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerProviderInfoForStartWorker.scriptLoaderFactoryRemote
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerProviderInfoForStartWorker.cacheStorage
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ServiceWorkerProviderInfoForStartWorker.browserInterfaceBroker
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 24, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ServiceWorkerProviderInfoForStartWorker.encodedSize = codec.kStructHeaderSize + 32;

  ServiceWorkerProviderInfoForStartWorker.decode = function(decoder) {
    var packed;
    var val = new ServiceWorkerProviderInfoForStartWorker();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hostRemote =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    val.scriptLoaderFactoryRemote =
        decoder.decodeStruct(new codec.NullableInterface(url_loader_factory$.URLLoaderFactoryPtr));
    val.cacheStorage =
        decoder.decodeStruct(new codec.NullableInterface(cache_storage$.CacheStoragePtr));
    val.browserInterfaceBroker =
        decoder.decodeStruct(new codec.Interface(browser_interface_broker$.BrowserInterfaceBrokerPtr));
    return val;
  };

  ServiceWorkerProviderInfoForStartWorker.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ServiceWorkerProviderInfoForStartWorker.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.hostRemote);
    encoder.encodeStruct(new codec.NullableInterface(url_loader_factory$.URLLoaderFactoryPtr), val.scriptLoaderFactoryRemote);
    encoder.encodeStruct(new codec.NullableInterface(cache_storage$.CacheStoragePtr), val.cacheStorage);
    encoder.encodeStruct(new codec.Interface(browser_interface_broker$.BrowserInterfaceBrokerPtr), val.browserInterfaceBroker);
  };
  exports.NAVIGATION_SERVICE_WORKER_SPEC = NAVIGATION_SERVICE_WORKER_SPEC;
  exports.ServiceWorkerProviderInfoForStartWorker = ServiceWorkerProviderInfoForStartWorker;
})();