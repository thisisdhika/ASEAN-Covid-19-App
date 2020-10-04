"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b2) {
  extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b3) {
    d2.__proto__ = b3;
  } || function(d2, b3) {
    for (var p2 in b3)
      if (b3.hasOwnProperty(p2))
        d2[p2] = b3[p2];
  };
  return extendStatics(d, b2);
};
function __extends(d, b2) {
  extendStatics(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t[p2] = s[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = {label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: []}, f, y2, t, g2;
  return g2 = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
          return t;
        if (y2 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _2.label++;
            return {value: op[1], done: false};
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t[1]) {
              _2.label = t[1];
              t = op;
              break;
            }
            if (t && _2.label < t[2]) {
              _2.label = t[2];
              _2.ops.push(op);
              break;
            }
            if (t[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return {value: op[0] ? op[1] : void 0, done: true};
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r2, ar2 = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar2.push(r2.value);
  } catch (error) {
    e = {error};
  } finally {
    try {
      if (r2 && !r2.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i = 0; i < arguments.length; i++)
    ar2 = ar2.concat(__read(arguments[i]));
  return ar2;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k2++)
      r2[k2] = a[j2];
  return r2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deepCopy(value) {
  return deepExtend(void 0, value);
}
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      var dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === void 0) {
        target = {};
      }
      break;
    case Array:
      target = [];
      break;
    default:
      return source;
  }
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = function() {
  function Deferred2() {
    var _this = this;
    this.reject = function() {
    };
    this.resolve = function() {
    };
    this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  Deferred2.prototype.wrapCallback = function(callback) {
    var _this = this;
    return function(error, value) {
      if (error) {
        _this.reject(error);
      } else {
        _this.resolve(value);
      }
      if (typeof callback === "function") {
        _this.promise.catch(function() {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };
  return Deferred2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch (e) {
    return false;
  }
}
function isBrowser() {
  return typeof self === "object" && self.self === self;
}
function isBrowserExtension() {
  var runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isElectron() {
  return getUA().indexOf("Electron/") >= 0;
}
function isIE() {
  var ua2 = getUA();
  return ua2.indexOf("MSIE ") >= 0 || ua2.indexOf("Trident/") >= 0;
}
function isUWP() {
  return getUA().indexOf("MSAppHost/") >= 0;
}
function isIndexedDBAvailable() {
  return "indexedDB" in self && indexedDB != null;
}
function validateIndexedDBOpenable() {
  return new Promise(function(resolve, reject) {
    try {
      var preExist_1 = true;
      var DB_CHECK_NAME_1 = "validate-browser-context-for-indexeddb-analytics-module";
      var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
      request_1.onsuccess = function() {
        request_1.result.close();
        if (!preExist_1) {
          window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
        }
        resolve(true);
      };
      request_1.onupgradeneeded = function() {
        preExist_1 = false;
      };
      request_1.onerror = function() {
        var _a2;
        reject(((_a2 = request_1.error) === null || _a2 === void 0 ? void 0 : _a2.message) || "");
      };
    } catch (error) {
      reject(error);
    }
  });
}
function areCookiesEnabled() {
  if (!navigator || !navigator.cookieEnabled) {
    return false;
  }
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = "FirebaseError";
var FirebaseError = function(_super) {
  __extends(FirebaseError2, _super);
  function FirebaseError2(code, message) {
    var _this = _super.call(this, message) || this;
    _this.code = code;
    _this.name = ERROR_NAME;
    Object.setPrototypeOf(_this, FirebaseError2.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }
    return _this;
  }
  return FirebaseError2;
}(Error);
var ErrorFactory = function() {
  function ErrorFactory2(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  ErrorFactory2.prototype.create = function(code) {
    var data = [];
    for (var _i2 = 1; _i2 < arguments.length; _i2++) {
      data[_i2 - 1] = arguments[_i2];
    }
    var customData = data[0] || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : "Error";
    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage);
    for (var _a2 = 0, _b = Object.keys(customData); _a2 < _b.length; _a2++) {
      var key = _b[_a2];
      if (key.slice(-1) !== "_") {
        if (key in error) {
          console.warn('Overwriting FirebaseError base field "' + key + '" can cause unexpected behavior.');
        }
        error[key] = customData[key];
      }
    }
    return error;
  };
  return ErrorFactory2;
}();
function replaceTemplate(template, data) {
  return template.replace(PATTERN, function(_2, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}
var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
var ObserverProxy = function() {
  function ObserverProxy2(executor, onNoObservers) {
    var _this = this;
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    this.task.then(function() {
      executor(_this);
    }).catch(function(e) {
      _this.error(e);
    });
  }
  ObserverProxy2.prototype.next = function(value) {
    this.forEachObserver(function(observer) {
      observer.next(value);
    });
  };
  ObserverProxy2.prototype.error = function(error) {
    this.forEachObserver(function(observer) {
      observer.error(error);
    });
    this.close(error);
  };
  ObserverProxy2.prototype.complete = function() {
    this.forEachObserver(function(observer) {
      observer.complete();
    });
    this.close();
  };
  ObserverProxy2.prototype.subscribe = function(nextOrObserver, error, complete) {
    var _this = this;
    var observer;
    if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
      throw new Error("Missing Observer.");
    }
    if (implementsAnyMethods(nextOrObserver, [
      "next",
      "error",
      "complete"
    ])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error,
        complete
      };
    }
    if (observer.next === void 0) {
      observer.next = noop;
    }
    if (observer.error === void 0) {
      observer.error = noop;
    }
    if (observer.complete === void 0) {
      observer.complete = noop;
    }
    var unsub = this.unsubscribeOne.bind(this, this.observers.length);
    if (this.finalized) {
      this.task.then(function() {
        try {
          if (_this.finalError) {
            observer.error(_this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {
        }
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  };
  ObserverProxy2.prototype.unsubscribeOne = function(i) {
    if (this.observers === void 0 || this.observers[i] === void 0) {
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== void 0) {
      this.onNoObservers(this);
    }
  };
  ObserverProxy2.prototype.forEachObserver = function(fn2) {
    if (this.finalized) {
      return;
    }
    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn2);
    }
  };
  ObserverProxy2.prototype.sendOne = function(i, fn2) {
    var _this = this;
    this.task.then(function() {
      if (_this.observers !== void 0 && _this.observers[i] !== void 0) {
        try {
          fn2(_this.observers[i]);
        } catch (e) {
          if (typeof console !== "undefined" && console.error) {
            console.error(e);
          }
        }
      }
    });
  };
  ObserverProxy2.prototype.close = function(err) {
    var _this = this;
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (err !== void 0) {
      this.finalError = err;
    }
    this.task.then(function() {
      _this.observers = void 0;
      _this.onNoObservers = void 0;
    });
  };
  return ObserverProxy2;
}();
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (var _i2 = 0, methods_1 = methods; _i2 < methods_1.length; _i2++) {
    var method = methods_1[_i2];
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop() {
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_INTERVAL_MILLIS = 1e3;
var DEFAULT_BACKOFF_FACTOR = 2;
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
var RANDOM_FACTOR = 0.5;
function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
  if (intervalMillis === void 0) {
    intervalMillis = DEFAULT_INTERVAL_MILLIS;
  }
  if (backoffFactor === void 0) {
    backoffFactor = DEFAULT_BACKOFF_FACTOR;
  }
  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
  var randomWait = Math.round(RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
var Component = function() {
  function Component2(name2, instanceFactory, type) {
    this.name = name2;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
  }
  Component2.prototype.setInstantiationMode = function(mode) {
    this.instantiationMode = mode;
    return this;
  };
  Component2.prototype.setMultipleInstances = function(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };
  Component2.prototype.setServiceProps = function(props) {
    this.serviceProps = props;
    return this;
  };
  return Component2;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Provider = function() {
  function Provider2(name2, container) {
    this.name = name2;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
  }
  Provider2.prototype.get = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      try {
        var instance = this.getOrInitializeService(normalizedIdentifier);
        if (instance) {
          deferred.resolve(instance);
        }
      } catch (e) {
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };
  Provider2.prototype.getImmediate = function(options) {
    var _a2 = __assign({identifier: DEFAULT_ENTRY_NAME, optional: false}, options), identifier = _a2.identifier, optional = _a2.optional;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    try {
      var instance = this.getOrInitializeService(normalizedIdentifier);
      if (!instance) {
        if (optional) {
          return null;
        }
        throw Error("Service " + this.name + " is not available");
      }
      return instance;
    } catch (e) {
      if (optional) {
        return null;
      } else {
        throw e;
      }
    }
  };
  Provider2.prototype.getComponent = function() {
    return this.component;
  };
  Provider2.prototype.setComponent = function(component) {
    var e_1, _a2;
    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }
    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }
    this.component = component;
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService(DEFAULT_ENTRY_NAME);
      } catch (e) {
      }
    }
    try {
      for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          var instance = this.getOrInitializeService(normalizedIdentifier);
          instanceDeferred.resolve(instance);
        } catch (e) {
        }
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  Provider2.prototype.clearInstance = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }
    this.instancesDeferred.delete(identifier);
    this.instances.delete(identifier);
  };
  Provider2.prototype.delete = function() {
    return __awaiter(this, void 0, void 0, function() {
      var services;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4, Promise.all(__spread(services.filter(function(service) {
              return "INTERNAL" in service;
            }).map(function(service) {
              return service.INTERNAL.delete();
            }), services.filter(function(service) {
              return "_delete" in service;
            }).map(function(service) {
              return service._delete();
            })))];
          case 1:
            _a2.sent();
            return [2];
        }
      });
    });
  };
  Provider2.prototype.isComponentSet = function() {
    return this.component != null;
  };
  Provider2.prototype.getOrInitializeService = function(identifier) {
    var instance = this.instances.get(identifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
      this.instances.set(identifier, instance);
    }
    return instance || null;
  };
  Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier;
    }
  };
  return Provider2;
}();
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ComponentContainer = function() {
  function ComponentContainer2(name2) {
    this.name = name2;
    this.providers = new Map();
  }
  ComponentContainer2.prototype.addComponent = function(component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }
    provider.setComponent(component);
  };
  ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  };
  ComponentContainer2.prototype.getProvider = function(name2) {
    if (this.providers.has(name2)) {
      return this.providers.get(name2);
    }
    var provider = new Provider(name2, this);
    this.providers.set(name2, provider);
    return provider;
  };
  ComponentContainer2.prototype.getProviders = function() {
    return Array.from(this.providers.values());
  };
  return ComponentContainer2;
}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __spreadArrays$1() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k2++)
      r2[k2] = a[j2];
  return r2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var instances = [];
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  debug: LogLevel.DEBUG,
  verbose: LogLevel.VERBOSE,
  info: LogLevel.INFO,
  warn: LogLevel.WARN,
  error: LogLevel.ERROR,
  silent: LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = "log", _a[LogLevel.VERBOSE] = "log", _a[LogLevel.INFO] = "info", _a[LogLevel.WARN] = "warn", _a[LogLevel.ERROR] = "error", _a);
var defaultLogHandler = function(instance, logType) {
  var args = [];
  for (var _i2 = 2; _i2 < arguments.length; _i2++) {
    args[_i2 - 2] = arguments[_i2];
  }
  if (logType < instance.logLevel) {
    return;
  }
  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];
  if (method) {
    console[method].apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};
var Logger = function() {
  function Logger2(name2) {
    this.name = name2;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  Object.defineProperty(Logger2.prototype, "logLevel", {
    get: function() {
      return this._logLevel;
    },
    set: function(val) {
      if (!(val in LogLevel)) {
        throw new TypeError('Invalid value "' + val + '" assigned to `logLevel`');
      }
      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  });
  Logger2.prototype.setLogLevel = function(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  };
  Object.defineProperty(Logger2.prototype, "logHandler", {
    get: function() {
      return this._logHandler;
    },
    set: function(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger2.prototype, "userLogHandler", {
    get: function() {
      return this._userLogHandler;
    },
    set: function(val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Logger2.prototype.debug = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
    this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
  };
  Logger2.prototype.log = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
    this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
  };
  Logger2.prototype.info = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
    this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
  };
  Logger2.prototype.warn = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
    this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
  };
  Logger2.prototype.error = function() {
    var args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      args[_i2] = arguments[_i2];
    }
    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
    this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
  };
  return Logger2;
}();
function setLogLevel(level) {
  instances.forEach(function(inst) {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  var _loop_1 = function(instance2) {
    var customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance2.userLogHandler = null;
    } else {
      instance2.userLogHandler = function(instance3, level) {
        var args = [];
        for (var _i3 = 2; _i3 < arguments.length; _i3++) {
          args[_i3 - 2] = arguments[_i3];
        }
        var message = args.map(function(arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function(arg) {
          return arg;
        }).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance3.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance3.name
          });
        }
      };
    }
  };
  for (var _i2 = 0, instances_1 = instances; _i2 < instances_1.length; _i2++) {
    var instance = instances_1[_i2];
    _loop_1(instance);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var ERRORS = (_a$1 = {}, _a$1["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", _a$1["bad-app-name"] = "Illegal App name: '{$appName}", _a$1["duplicate-app"] = "Firebase App named '{$appName}' already exists", _a$1["app-deleted"] = "Firebase App named '{$appName}' already deleted", _a$1["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", _a$1["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", _a$1);
var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
var name$1 = "@firebase/app";
var version = "0.6.11";
var name$2 = "@firebase/analytics";
var name$3 = "@firebase/auth";
var name$4 = "@firebase/database";
var name$5 = "@firebase/functions";
var name$6 = "@firebase/installations";
var name$7 = "@firebase/messaging";
var name$8 = "@firebase/performance";
var name$9 = "@firebase/remote-config";
var name$a = "@firebase/storage";
var name$b = "@firebase/firestore";
var name$c = "firebase-wrapper";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1$1;
var DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
var PLATFORM_LOG_STRING = (_a$1$1 = {}, _a$1$1[name$1] = "fire-core", _a$1$1[name$2] = "fire-analytics", _a$1$1[name$3] = "fire-auth", _a$1$1[name$4] = "fire-rtdb", _a$1$1[name$5] = "fire-fn", _a$1$1[name$6] = "fire-iid", _a$1$1[name$7] = "fire-fcm", _a$1$1[name$8] = "fire-perf", _a$1$1[name$9] = "fire-rc", _a$1$1[name$a] = "fire-gcs", _a$1$1[name$b] = "fire-fst", _a$1$1["fire-js"] = "fire-js", _a$1$1[name$c] = "fire-js-all", _a$1$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new Logger("@firebase/app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = function() {
  function FirebaseAppImpl2(options, config, firebase_) {
    var e_1, _a2;
    var _this = this;
    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config.name;
    this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
    this.options_ = deepCopy(options);
    this.container = new ComponentContainer(config.name);
    this._addComponent(new Component("app", function() {
      return _this;
    }, "PUBLIC"));
    try {
      for (var _b = __values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var component = _c.value;
        this._addComponent(component);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  Object.defineProperty(FirebaseAppImpl2.prototype, "automaticDataCollectionEnabled", {
    get: function() {
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function(val) {
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl2.prototype, "name", {
    get: function() {
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl2.prototype, "options", {
    get: function() {
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: false,
    configurable: true
  });
  FirebaseAppImpl2.prototype.delete = function() {
    var _this = this;
    return new Promise(function(resolve) {
      _this.checkDestroyed_();
      resolve();
    }).then(function() {
      _this.firebase_.INTERNAL.removeApp(_this.name_);
      return Promise.all(_this.container.getProviders().map(function(provider) {
        return provider.delete();
      }));
    }).then(function() {
      _this.isDeleted_ = true;
    });
  };
  FirebaseAppImpl2.prototype._getService = function(name2, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME$1;
    }
    this.checkDestroyed_();
    return this.container.getProvider(name2).getImmediate({
      identifier: instanceIdentifier
    });
  };
  FirebaseAppImpl2.prototype._removeServiceInstance = function(name2, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME$1;
    }
    this.container.getProvider(name2).clearInstance(instanceIdentifier);
  };
  FirebaseAppImpl2.prototype._addComponent = function(component) {
    try {
      this.container.addComponent(component);
    } catch (e) {
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  };
  FirebaseAppImpl2.prototype._addOrOverwriteComponent = function(component) {
    this.container.addOrOverwriteComponent(component);
  };
  FirebaseAppImpl2.prototype.checkDestroyed_ = function() {
    if (this.isDeleted_) {
      throw ERROR_FACTORY.create("app-deleted", {appName: this.name_});
    }
  };
  return FirebaseAppImpl2;
}();
FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log("dc");
var version$1 = "7.20.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
  var apps = {};
  var components = new Map();
  var namespace = {
    __esModule: true,
    initializeApp: initializeApp2,
    app,
    registerVersion,
    setLogLevel,
    onLog,
    apps: null,
    SDK_VERSION: version$1,
    INTERNAL: {
      registerComponent,
      removeApp,
      components,
      useAsService
    }
  };
  namespace["default"] = namespace;
  Object.defineProperty(namespace, "apps", {
    get: getApps
  });
  function removeApp(name2) {
    delete apps[name2];
  }
  function app(name2) {
    name2 = name2 || DEFAULT_ENTRY_NAME$1;
    if (!contains(apps, name2)) {
      throw ERROR_FACTORY.create("no-app", {appName: name2});
    }
    return apps[name2];
  }
  app["App"] = firebaseAppImpl;
  function initializeApp2(options, rawConfig) {
    if (rawConfig === void 0) {
      rawConfig = {};
    }
    if (typeof rawConfig !== "object" || rawConfig === null) {
      var name_1 = rawConfig;
      rawConfig = {name: name_1};
    }
    var config = rawConfig;
    if (config.name === void 0) {
      config.name = DEFAULT_ENTRY_NAME$1;
    }
    var name2 = config.name;
    if (typeof name2 !== "string" || !name2) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name2)
      });
    }
    if (contains(apps, name2)) {
      throw ERROR_FACTORY.create("duplicate-app", {appName: name2});
    }
    var app2 = new firebaseAppImpl(options, config, namespace);
    apps[name2] = app2;
    return app2;
  }
  function getApps() {
    return Object.keys(apps).map(function(name2) {
      return apps[name2];
    });
  }
  function registerComponent(component) {
    var e_1, _a2;
    var componentName = component.name;
    if (components.has(componentName)) {
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC" ? namespace[componentName] : null;
    }
    components.set(componentName, component);
    if (component.type === "PUBLIC") {
      var serviceNamespace = function(appArg) {
        if (appArg === void 0) {
          appArg = app();
        }
        if (typeof appArg[componentName] !== "function") {
          throw ERROR_FACTORY.create("invalid-app-argument", {
            appName: componentName
          });
        }
        return appArg[componentName]();
      };
      if (component.serviceProps !== void 0) {
        deepExtend(serviceNamespace, component.serviceProps);
      }
      namespace[componentName] = serviceNamespace;
      firebaseAppImpl.prototype[componentName] = function() {
        var args = [];
        for (var _i2 = 0; _i2 < arguments.length; _i2++) {
          args[_i2] = arguments[_i2];
        }
        var serviceFxn = this._getService.bind(this, componentName);
        return serviceFxn.apply(this, component.multipleInstances ? args : []);
      };
    }
    try {
      for (var _b = __values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var appName = _c.value;
        apps[appName]._addComponent(component);
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return component.type === "PUBLIC" ? namespace[componentName] : null;
  }
  function registerVersion(libraryKeyOrName, version2, variant) {
    var _a2;
    var library = (_a2 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a2 !== void 0 ? _a2 : libraryKeyOrName;
    if (variant) {
      library += "-" + variant;
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version2.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      var warning = [
        'Unable to register library "' + library + '" with version "' + version2 + '":'
      ];
      if (libraryMismatch) {
        warning.push('library name "' + library + '" contains illegal characters (whitespace or "/")');
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push('version name "' + version2 + '" contains illegal characters (whitespace or "/")');
      }
      logger.warn(warning.join(" "));
      return;
    }
    registerComponent(new Component(library + "-version", function() {
      return {library, version: version2};
    }, "VERSION"));
  }
  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== "function") {
      throw ERROR_FACTORY.create("invalid-log-argument", {
        appName: name
      });
    }
    setUserLogHandler(logCallback, options);
  }
  function useAsService(app2, name2) {
    if (name2 === "serverAuth") {
      return null;
    }
    var useService = name2;
    return useService;
  }
  return namespace;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createFirebaseNamespace() {
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = __assign(__assign({}, namespace.INTERNAL), {
    createFirebaseNamespace,
    extendNamespace,
    createSubscribe,
    ErrorFactory,
    deepExtend
  });
  function extendNamespace(props) {
    deepExtend(namespace, props);
  }
  return namespace;
}
var firebase = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = function() {
  function PlatformLoggerService2(container) {
    this.container = container;
  }
  PlatformLoggerService2.prototype.getPlatformInfoString = function() {
    var providers = this.container.getProviders();
    return providers.map(function(provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function(logString) {
      return logString;
    }).join(" ");
  };
  return PlatformLoggerService2;
}();
function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase2, variant) {
  firebase2.INTERNAL.registerComponent(new Component("platform-logger", function(container) {
    return new PlatformLoggerService(container);
  }, "PRIVATE"));
  firebase2.registerVersion(name$1, version, variant);
  firebase2.registerVersion("fire-js", "");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if (isBrowser() && self.firebase !== void 0) {
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
  var sdkVersion = self.firebase.SDK_VERSION;
  if (sdkVersion && sdkVersion.indexOf("LITE") >= 0) {
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}
var initializeApp = firebase.initializeApp;
firebase.initializeApp = function() {
  var args = [];
  for (var _i2 = 0; _i2 < arguments.length; _i2++) {
    args[_i2] = arguments[_i2];
  }
  if (isNode()) {
    logger.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/rollup-plugin-node-resolve
      `);
  }
  return initializeApp.apply(void 0, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);
var name$d = "firebase";
var version$2 = "7.22.0";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase$1.registerVersion(name$d, version$2, "app");
(function() {
  var k2, aa2 = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b2, c) {
    a != Array.prototype && a != Object.prototype && (a[b2] = c.value);
  };
  function ba2(a) {
    a = [typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global, a];
    for (var b2 = 0; b2 < a.length; ++b2) {
      var c = a[b2];
      if (c && c.Math == Math)
        return c;
    }
    return globalThis;
  }
  var ca2 = ba2(this);
  function da2(a, b2) {
    if (b2) {
      var c = ca2;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b2 = b2(d);
      b2 != d && b2 != null && aa2(c, a, {configurable: true, writable: true, value: b2});
    }
  }
  function ea2(a) {
    var b2 = 0;
    return function() {
      return b2 < a.length ? {done: false, value: a[b2++]} : {done: true};
    };
  }
  function fa2(a) {
    var b2 = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    return b2 ? b2.call(a) : {next: ea2(a)};
  }
  da2("Promise", function(a) {
    function b2(g2) {
      this.b = 0;
      this.c = void 0;
      this.a = [];
      var h = this.f();
      try {
        g2(h.resolve, h.reject);
      } catch (m) {
        h.reject(m);
      }
    }
    function c() {
      this.a = null;
    }
    function d(g2) {
      return g2 instanceof b2 ? g2 : new b2(function(h) {
        h(g2);
      });
    }
    if (a)
      return a;
    c.prototype.b = function(g2) {
      if (this.a == null) {
        this.a = [];
        var h = this;
        this.c(function() {
          h.g();
        });
      }
      this.a.push(g2);
    };
    var e = ca2.setTimeout;
    c.prototype.c = function(g2) {
      e(g2, 0);
    };
    c.prototype.g = function() {
      for (; this.a && this.a.length; ) {
        var g2 = this.a;
        this.a = [];
        for (var h = 0; h < g2.length; ++h) {
          var m = g2[h];
          g2[h] = null;
          try {
            m();
          } catch (p2) {
            this.f(p2);
          }
        }
      }
      this.a = null;
    };
    c.prototype.f = function(g2) {
      this.c(function() {
        throw g2;
      });
    };
    b2.prototype.f = function() {
      function g2(p2) {
        return function(v2) {
          m || (m = true, p2.call(h, v2));
        };
      }
      var h = this, m = false;
      return {resolve: g2(this.m), reject: g2(this.g)};
    };
    b2.prototype.m = function(g2) {
      if (g2 === this)
        this.g(new TypeError("A Promise cannot resolve to itself"));
      else if (g2 instanceof b2)
        this.s(g2);
      else {
        a:
          switch (typeof g2) {
            case "object":
              var h = g2 != null;
              break a;
            case "function":
              h = true;
              break a;
            default:
              h = false;
          }
        h ? this.u(g2) : this.h(g2);
      }
    };
    b2.prototype.u = function(g2) {
      var h = void 0;
      try {
        h = g2.then;
      } catch (m) {
        this.g(m);
        return;
      }
      typeof h == "function" ? this.w(h, g2) : this.h(g2);
    };
    b2.prototype.g = function(g2) {
      this.i(2, g2);
    };
    b2.prototype.h = function(g2) {
      this.i(1, g2);
    };
    b2.prototype.i = function(g2, h) {
      if (this.b != 0)
        throw Error("Cannot settle(" + g2 + ", " + h + "): Promise already settled in state" + this.b);
      this.b = g2;
      this.c = h;
      this.l();
    };
    b2.prototype.l = function() {
      if (this.a != null) {
        for (var g2 = 0; g2 < this.a.length; ++g2)
          f.b(this.a[g2]);
        this.a = null;
      }
    };
    var f = new c();
    b2.prototype.s = function(g2) {
      var h = this.f();
      g2.Oa(h.resolve, h.reject);
    };
    b2.prototype.w = function(g2, h) {
      var m = this.f();
      try {
        g2.call(h, m.resolve, m.reject);
      } catch (p2) {
        m.reject(p2);
      }
    };
    b2.prototype.then = function(g2, h) {
      function m(A2, Q2) {
        return typeof A2 == "function" ? function(wa2) {
          try {
            p2(A2(wa2));
          } catch (ud2) {
            v2(ud2);
          }
        } : Q2;
      }
      var p2, v2, C2 = new b2(function(A2, Q2) {
        p2 = A2;
        v2 = Q2;
      });
      this.Oa(m(g2, p2), m(h, v2));
      return C2;
    };
    b2.prototype.catch = function(g2) {
      return this.then(void 0, g2);
    };
    b2.prototype.Oa = function(g2, h) {
      function m() {
        switch (p2.b) {
          case 1:
            g2(p2.c);
            break;
          case 2:
            h(p2.c);
            break;
          default:
            throw Error("Unexpected state: " + p2.b);
        }
      }
      var p2 = this;
      this.a == null ? f.b(m) : this.a.push(m);
    };
    b2.resolve = d;
    b2.reject = function(g2) {
      return new b2(function(h, m) {
        m(g2);
      });
    };
    b2.race = function(g2) {
      return new b2(function(h, m) {
        for (var p2 = fa2(g2), v2 = p2.next(); !v2.done; v2 = p2.next())
          d(v2.value).Oa(h, m);
      });
    };
    b2.all = function(g2) {
      var h = fa2(g2), m = h.next();
      return m.done ? d([]) : new b2(function(p2, v2) {
        function C2(wa2) {
          return function(ud2) {
            A2[wa2] = ud2;
            Q2--;
            Q2 == 0 && p2(A2);
          };
        }
        var A2 = [], Q2 = 0;
        do
          A2.push(void 0), Q2++, d(m.value).Oa(C2(A2.length - 1), v2), m = h.next();
        while (!m.done);
      });
    };
    return b2;
  });
  var ha2 = ha2 || {}, l = this || self, ia2 = /^[\w+/_-]+[=]{0,2}$/, ja2 = null;
  function ka2() {
  }
  function la2(a) {
    var b2 = typeof a;
    if (b2 == "object")
      if (a) {
        if (a instanceof Array)
          return "array";
        if (a instanceof Object)
          return b2;
        var c = Object.prototype.toString.call(a);
        if (c == "[object Window]")
          return "object";
        if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice"))
          return "array";
        if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))
          return "function";
      } else
        return "null";
    else if (b2 == "function" && typeof a.call == "undefined")
      return "object";
    return b2;
  }
  function ma2(a) {
    var b2 = la2(a);
    return b2 == "array" || b2 == "object" && typeof a.length == "number";
  }
  function na2(a) {
    return la2(a) == "function";
  }
  function n2(a) {
    var b2 = typeof a;
    return b2 == "object" && a != null || b2 == "function";
  }
  function oa2(a) {
    return Object.prototype.hasOwnProperty.call(a, pa2) && a[pa2] || (a[pa2] = ++qa2);
  }
  var pa2 = "closure_uid_" + (1e9 * Math.random() >>> 0), qa2 = 0;
  function ra2(a, b2, c) {
    return a.call.apply(a.bind, arguments);
  }
  function sa2(a, b2, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b2, e);
      };
    }
    return function() {
      return a.apply(b2, arguments);
    };
  }
  function q2(a, b2, c) {
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? q2 = ra2 : q2 = sa2;
    return q2.apply(null, arguments);
  }
  function ta2(a, b2) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  var ua2 = Date.now || function() {
    return +new Date();
  };
  function r2(a, b2) {
    function c() {
    }
    c.prototype = b2.prototype;
    a.Za = b2.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }
  function t(a, b2, c) {
    this.code = va2 + a;
    this.message = b2 || xa2[a] || "";
    this.a = c || null;
  }
  r2(t, Error);
  t.prototype.v = function() {
    var a = {code: this.code, message: this.message};
    this.a && (a.serverResponse = this.a);
    return a;
  };
  t.prototype.toJSON = function() {
    return this.v();
  };
  function ya2(a) {
    var b2 = a && a.code;
    return b2 ? new t(b2.substring(va2.length), a.message, a.serverResponse) : null;
  }
  var va2 = "auth/", xa2 = {
    "admin-restricted-operation": "This operation is restricted to administrators only.",
    "argument-error": "",
    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
    "cordova-not-ready": "Cordova framework is not ready.",
    "cors-unsupported": "This browser is not supported.",
    "credential-already-in-use": "This credential is already associated with a different user account.",
    "custom-token-mismatch": "The custom token corresponds to a different audience.",
    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
    "email-already-in-use": "The email address is already in use by another account.",
    "expired-action-code": "The action code has expired. ",
    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error": "An internal error has occurred.",
    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    "invalid-auth-event": "An internal error has occurred.",
    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
    "invalid-email": "The email address is badly formatted.",
    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
    "invalid-credential": "The supplied auth credential is malformed or has expired.",
    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "wrong-password": "The password is invalid or the user does not have a password.",
    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    "invalid-provider-id": "The specified provider ID is invalid.",
    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
    "missing-continue-uri": "A continue URL must be provided in the request.",
    "missing-iframe-start": "An internal error has occurred.",
    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
    "missing-multi-factor-info": "No second factor identifier is provided.",
    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
    "app-deleted": "This instance of FirebaseApp has been deleted.",
    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event": "An internal error has occurred.",
    "no-such-provider": "User was not linked to an account with the given provider.",
    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "provider-already-linked": "User can only be linked to one identity for the given provider.",
    "quota-exceeded": "The project's quota for this operation has been exceeded.",
    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
    "rejected-credential": "The request contains malformed or mismatching credentials.",
    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
    timeout: "The operation has timed out.",
    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
    "unverified-email": "The operation requires a verified email.",
    "user-cancelled": "The user did not grant your application the permissions it requested.",
    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "user-disabled": "The user account has been disabled by an administrator.",
    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "user-signed-out": "",
    "weak-password": "The password must be 6 characters long or more.",
    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
  };
  var za2 = {hd: {Ra: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token", Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/", id: "b"}, pd: {Ra: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", Xa: "https://securetoken.googleapis.com/v1/token", Ua: "https://identitytoolkit.googleapis.com/v2/", id: "p"}, rd: {
    Ra: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
    Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
    Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
    id: "s"
  }, sd: {Ra: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", Xa: "https://test-securetoken.sandbox.googleapis.com/v1/token", Ua: "https://test-identitytoolkit.sandbox.googleapis.com/v2/", id: "t"}};
  function Aa2(a) {
    for (var b2 in za2)
      if (za2[b2].id === a)
        return a = za2[b2], {firebaseEndpoint: a.Ra, secureTokenEndpoint: a.Xa, identityPlatformEndpoint: a.Ua};
    return null;
  }
  var Ba2;
  Ba2 = Aa2("__EID__") ? "__EID__" : void 0;
  function Ca2(a) {
    if (!a)
      return false;
    try {
      return !!a.$goog_Thenable;
    } catch (b2) {
      return false;
    }
  }
  function u2(a) {
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, u2);
    else {
      var b2 = Error().stack;
      b2 && (this.stack = b2);
    }
    a && (this.message = String(a));
  }
  r2(u2, Error);
  u2.prototype.name = "CustomError";
  function Da2(a, b2) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b2.length ? b2[e] : "%s");
    u2.call(this, c + a[d]);
  }
  r2(Da2, u2);
  Da2.prototype.name = "AssertionError";
  function Ea2(a, b2) {
    throw new Da2("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
  function Fa2(a, b2) {
    this.c = a;
    this.f = b2;
    this.b = 0;
    this.a = null;
  }
  Fa2.prototype.get = function() {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null;
    } else
      a = this.c();
    return a;
  };
  function Ga2(a, b2) {
    a.f(b2);
    100 > a.b && (a.b++, b2.next = a.a, a.a = b2);
  }
  function Ha2() {
    this.b = this.a = null;
  }
  var Ja2 = new Fa2(function() {
    return new Ia2();
  }, function(a) {
    a.reset();
  });
  Ha2.prototype.add = function(a, b2) {
    var c = Ja2.get();
    c.set(a, b2);
    this.b ? this.b.next = c : this.a = c;
    this.b = c;
  };
  function Ka2() {
    var a = La2, b2 = null;
    a.a && (b2 = a.a, a.a = a.a.next, a.a || (a.b = null), b2.next = null);
    return b2;
  }
  function Ia2() {
    this.next = this.b = this.a = null;
  }
  Ia2.prototype.set = function(a, b2) {
    this.a = a;
    this.b = b2;
    this.next = null;
  };
  Ia2.prototype.reset = function() {
    this.next = this.b = this.a = null;
  };
  var Ma2 = Array.prototype.indexOf ? function(a, b2) {
    return Array.prototype.indexOf.call(a, b2, void 0);
  } : function(a, b2) {
    if (typeof a === "string")
      return typeof b2 !== "string" || b2.length != 1 ? -1 : a.indexOf(b2, 0);
    for (var c = 0; c < a.length; c++)
      if (c in a && a[c] === b2)
        return c;
    return -1;
  }, w2 = Array.prototype.forEach ? function(a, b2, c) {
    Array.prototype.forEach.call(a, b2, c);
  } : function(a, b2, c) {
    for (var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0; f < d; f++)
      f in e && b2.call(c, e[f], f, a);
  };
  function Na2(a, b2) {
    for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
      d in c && b2.call(void 0, c[d], d, a);
  }
  var Oa2 = Array.prototype.filter ? function(a, b2) {
    return Array.prototype.filter.call(a, b2, void 0);
  } : function(a, b2) {
    for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g2 = 0; g2 < c; g2++)
      if (g2 in f) {
        var h = f[g2];
        b2.call(void 0, h, g2, a) && (d[e++] = h);
      }
    return d;
  }, Pa2 = Array.prototype.map ? function(a, b2) {
    return Array.prototype.map.call(a, b2, void 0);
  } : function(a, b2) {
    for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++)
      f in e && (d[f] = b2.call(void 0, e[f], f, a));
    return d;
  }, Qa2 = Array.prototype.some ? function(a, b2) {
    return Array.prototype.some.call(a, b2, void 0);
  } : function(a, b2) {
    for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b2.call(void 0, d[e], e, a))
        return true;
    return false;
  };
  function Ra2(a) {
    a: {
      var b2 = Sa2;
      for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b2.call(void 0, d[e], e, a)) {
          b2 = e;
          break a;
        }
      b2 = -1;
    }
    return 0 > b2 ? null : typeof a === "string" ? a.charAt(b2) : a[b2];
  }
  function Ta2(a, b2) {
    return 0 <= Ma2(a, b2);
  }
  function Ua2(a, b2) {
    b2 = Ma2(a, b2);
    var c;
    (c = 0 <= b2) && Array.prototype.splice.call(a, b2, 1);
    return c;
  }
  function Va2(a, b2) {
    var c = 0;
    Na2(a, function(d, e) {
      b2.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++;
    });
  }
  function Wa2(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Xa2(a) {
    var b2 = a.length;
    if (0 < b2) {
      for (var c = Array(b2), d = 0; d < b2; d++)
        c[d] = a[d];
      return c;
    }
    return [];
  }
  var Ya2 = String.prototype.trim ? function(a) {
    return a.trim();
  } : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }, Za2 = /&/g, $a2 = /</g, ab2 = />/g, bb2 = /"/g, cb2 = /'/g, db2 = /\x00/g, eb2 = /[\x00&<>"']/;
  function x2(a, b2) {
    return a.indexOf(b2) != -1;
  }
  function fb2(a, b2) {
    return a < b2 ? -1 : a > b2 ? 1 : 0;
  }
  var gb;
  a: {
    var hb2 = l.navigator;
    if (hb2) {
      var ib2 = hb2.userAgent;
      if (ib2) {
        gb = ib2;
        break a;
      }
    }
    gb = "";
  }
  function y2(a) {
    return x2(gb, a);
  }
  function jb2(a, b2) {
    for (var c in a)
      b2.call(void 0, a[c], c, a);
  }
  function kb2(a) {
    for (var b2 in a)
      return false;
    return true;
  }
  function lb2(a) {
    var b2 = {}, c;
    for (c in a)
      b2[c] = a[c];
    return b2;
  }
  var mb2 = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function z2(a, b2) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (var f = 0; f < mb2.length; f++)
        c = mb2[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function nb2(a, b2) {
    a: {
      try {
        var c = a && a.ownerDocument, d = c && (c.defaultView || c.parentWindow);
        d = d || l;
        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (g2) {
      }
      e = null;
    }
    if (e && typeof e[b2] != "undefined" && (!a || !(a instanceof e[b2]) && (a instanceof e.Location || a instanceof e.Element))) {
      if (n2(a))
        try {
          var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
        } catch (g2) {
          f = "<object could not be stringified>";
        }
      else
        f = a === void 0 ? "undefined" : a === null ? "null" : typeof a;
      Ea2("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, f);
    }
  }
  function ob2(a, b2) {
    this.a = a === pb2 && b2 || "";
    this.b = qb;
  }
  ob2.prototype.ra = true;
  ob2.prototype.qa = function() {
    return this.a;
  };
  ob2.prototype.toString = function() {
    return "Const{" + this.a + "}";
  };
  function rb2(a) {
    if (a instanceof ob2 && a.constructor === ob2 && a.b === qb)
      return a.a;
    Ea2("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  }
  var qb = {}, pb2 = {}, sb2 = new ob2(pb2, "");
  function tb2(a, b2) {
    this.a = a === ub2 && b2 || "";
    this.b = vb2;
  }
  tb2.prototype.ra = true;
  tb2.prototype.qa = function() {
    return this.a.toString();
  };
  tb2.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.a + "}";
  };
  function wb2(a) {
    if (a instanceof tb2 && a.constructor === tb2 && a.b === vb2)
      return a.a;
    Ea2("expected object of type TrustedResourceUrl, got '" + a + "' of type " + la2(a));
    return "type_error:TrustedResourceUrl";
  }
  function xb2(a, b2) {
    var c = rb2(a);
    if (!yb2.test(c))
      throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(zb2, function(d, e) {
      if (!Object.prototype.hasOwnProperty.call(b2, e))
        throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b2));
      d = b2[e];
      return d instanceof ob2 ? rb2(d) : encodeURIComponent(String(d));
    });
    return new tb2(ub2, a);
  }
  var zb2 = /%{(\w+)}/g, yb2 = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, vb2 = {}, ub2 = {};
  function Ab2(a, b2) {
    this.a = a === Bb2 && b2 || "";
    this.b = Cb2;
  }
  Ab2.prototype.ra = true;
  Ab2.prototype.qa = function() {
    return this.a.toString();
  };
  Ab2.prototype.toString = function() {
    return "SafeUrl{" + this.a + "}";
  };
  function Db2(a) {
    if (a instanceof Ab2 && a.constructor === Ab2 && a.b === Cb2)
      return a.a;
    Ea2("expected object of type SafeUrl, got '" + a + "' of type " + la2(a));
    return "type_error:SafeUrl";
  }
  var Eb2 = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Fb2(a) {
    if (a instanceof Ab2)
      return a;
    a = typeof a == "object" && a.ra ? a.qa() : String(a);
    Eb2.test(a) || (a = "about:invalid#zClosurez");
    return new Ab2(Bb2, a);
  }
  var Cb2 = {}, Bb2 = {};
  function Gb2() {
    this.a = "";
    this.b = Hb2;
  }
  Gb2.prototype.ra = true;
  Gb2.prototype.qa = function() {
    return this.a.toString();
  };
  Gb2.prototype.toString = function() {
    return "SafeHtml{" + this.a + "}";
  };
  function Ib2(a) {
    if (a instanceof Gb2 && a.constructor === Gb2 && a.b === Hb2)
      return a.a;
    Ea2("expected object of type SafeHtml, got '" + a + "' of type " + la2(a));
    return "type_error:SafeHtml";
  }
  var Hb2 = {};
  function Jb2(a) {
    var b2 = new Gb2();
    b2.a = a;
    return b2;
  }
  Jb2("<!DOCTYPE html>");
  var Kb2 = Jb2("");
  Jb2("<br>");
  function Lb2(a) {
    var b2 = new tb2(ub2, rb2(sb2));
    nb2(a, "HTMLIFrameElement");
    a.src = wb2(b2).toString();
  }
  function Mb2(a, b2) {
    nb2(a, "HTMLScriptElement");
    a.src = wb2(b2);
    if (ja2 === null)
      b: {
        b2 = l.document;
        if ((b2 = b2.querySelector && b2.querySelector("script[nonce]")) && (b2 = b2.nonce || b2.getAttribute("nonce")) && ia2.test(b2)) {
          ja2 = b2;
          break b;
        }
        ja2 = "";
      }
    b2 = ja2;
    b2 && a.setAttribute("nonce", b2);
  }
  function Nb2(a, b2) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
      d += c.shift() + e.shift();
    return d + c.join("%s");
  }
  function Ob2(a) {
    eb2.test(a) && (a.indexOf("&") != -1 && (a = a.replace(Za2, "&amp;")), a.indexOf("<") != -1 && (a = a.replace($a2, "&lt;")), a.indexOf(">") != -1 && (a = a.replace(ab2, "&gt;")), a.indexOf('"') != -1 && (a = a.replace(bb2, "&quot;")), a.indexOf("'") != -1 && (a = a.replace(cb2, "&#39;")), a.indexOf("\0") != -1 && (a = a.replace(db2, "&#0;")));
    return a;
  }
  function Pb2(a) {
    Pb2[" "](a);
    return a;
  }
  Pb2[" "] = ka2;
  function Qb2(a, b2) {
    var c = Rb2;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b2(a);
  }
  var Sb2 = y2("Opera"), Tb2 = y2("Trident") || y2("MSIE"), Ub2 = y2("Edge"), Vb2 = Ub2 || Tb2, Wb2 = y2("Gecko") && !(x2(gb.toLowerCase(), "webkit") && !y2("Edge")) && !(y2("Trident") || y2("MSIE")) && !y2("Edge"), Xb2 = x2(gb.toLowerCase(), "webkit") && !y2("Edge");
  function Yb2() {
    var a = l.document;
    return a ? a.documentMode : void 0;
  }
  var Zb2;
  a: {
    var $b2 = "", ac2 = function() {
      var a = gb;
      if (Wb2)
        return /rv:([^\);]+)(\)|;)/.exec(a);
      if (Ub2)
        return /Edge\/([\d\.]+)/.exec(a);
      if (Tb2)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (Xb2)
        return /WebKit\/(\S+)/.exec(a);
      if (Sb2)
        return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();
    ac2 && ($b2 = ac2 ? ac2[1] : "");
    if (Tb2) {
      var bc2 = Yb2();
      if (bc2 != null && bc2 > parseFloat($b2)) {
        Zb2 = String(bc2);
        break a;
      }
    }
    Zb2 = $b2;
  }
  var Rb2 = {};
  function cc2(a) {
    return Qb2(a, function() {
      for (var b2 = 0, c = Ya2(String(Zb2)).split("."), d = Ya2(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; b2 == 0 && f < e; f++) {
        var g2 = c[f] || "", h = d[f] || "";
        do {
          g2 = /(\d*)(\D*)(.*)/.exec(g2) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (g2[0].length == 0 && h[0].length == 0)
            break;
          b2 = fb2(g2[1].length == 0 ? 0 : parseInt(g2[1], 10), h[1].length == 0 ? 0 : parseInt(h[1], 10)) || fb2(g2[2].length == 0, h[2].length == 0) || fb2(g2[2], h[2]);
          g2 = g2[3];
          h = h[3];
        } while (b2 == 0);
      }
      return 0 <= b2;
    });
  }
  var dc2;
  dc2 = l.document && Tb2 ? Yb2() : void 0;
  try {
    new self.OffscreenCanvas(0, 0).getContext("2d");
  } catch (a) {
  }
  var ec2 = !Tb2 || 9 <= Number(dc2);
  function fc2(a) {
    var b2 = document;
    return typeof a === "string" ? b2.getElementById(a) : a;
  }
  function gc2(a, b2) {
    jb2(b2, function(c, d) {
      c && typeof c == "object" && c.ra && (c = c.qa());
      d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : hc2.hasOwnProperty(d) ? a.setAttribute(hc2[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c;
    });
  }
  var hc2 = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width"};
  function ic2(a, b2, c) {
    var d = arguments, e = document, f = String(d[0]), g2 = d[1];
    if (!ec2 && g2 && (g2.name || g2.type)) {
      f = ["<", f];
      g2.name && f.push(' name="', Ob2(g2.name), '"');
      if (g2.type) {
        f.push(' type="', Ob2(g2.type), '"');
        var h = {};
        z2(h, g2);
        delete h.type;
        g2 = h;
      }
      f.push(">");
      f = f.join("");
    }
    f = jc2(e, f);
    g2 && (typeof g2 === "string" ? f.className = g2 : Array.isArray(g2) ? f.className = g2.join(" ") : gc2(f, g2));
    2 < d.length && kc2(e, f, d);
    return f;
  }
  function kc2(a, b2, c) {
    function d(g2) {
      g2 && b2.appendChild(typeof g2 === "string" ? a.createTextNode(g2) : g2);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !ma2(f) || n2(f) && 0 < f.nodeType ? d(f) : w2(lc2(f) ? Xa2(f) : f, d);
    }
  }
  function jc2(a, b2) {
    b2 = String(b2);
    a.contentType === "application/xhtml+xml" && (b2 = b2.toLowerCase());
    return a.createElement(b2);
  }
  function lc2(a) {
    if (a && typeof a.length == "number") {
      if (n2(a))
        return typeof a.item == "function" || typeof a.item == "string";
      if (na2(a))
        return typeof a.item == "function";
    }
    return false;
  }
  function mc2(a) {
    l.setTimeout(function() {
      throw a;
    }, 0);
  }
  var nc2;
  function oc2() {
    var a = l.MessageChannel;
    typeof a === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener && !y2("Presto") && (a = function() {
      var e = jc2(document, "IFRAME");
      e.style.display = "none";
      Lb2(e);
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.write(Ib2(Kb2));
      e.close();
      var g2 = "callImmediate" + Math.random(), h = f.location.protocol == "file:" ? "*" : f.location.protocol + "//" + f.location.host;
      e = q2(function(m) {
        if ((h == "*" || m.origin == h) && m.data == g2)
          this.port1.onmessage();
      }, this);
      f.addEventListener("message", e, false);
      this.port1 = {};
      this.port2 = {postMessage: function() {
        f.postMessage(g2, h);
      }};
    });
    if (typeof a !== "undefined" && !y2("Trident") && !y2("MSIE")) {
      var b2 = new a(), c = {}, d = c;
      b2.port1.onmessage = function() {
        if (c.next !== void 0) {
          c = c.next;
          var e = c.Db;
          c.Db = null;
          e();
        }
      };
      return function(e) {
        d.next = {Db: e};
        d = d.next;
        b2.port2.postMessage(0);
      };
    }
    return function(e) {
      l.setTimeout(e, 0);
    };
  }
  function pc2(a, b2) {
    qc2 || rc2();
    sc || (qc2(), sc = true);
    La2.add(a, b2);
  }
  var qc2;
  function rc2() {
    if (l.Promise && l.Promise.resolve) {
      var a = l.Promise.resolve(void 0);
      qc2 = function() {
        a.then(tc2);
      };
    } else
      qc2 = function() {
        var b2 = tc2;
        !na2(l.setImmediate) || l.Window && l.Window.prototype && !y2("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (nc2 || (nc2 = oc2()), nc2(b2)) : l.setImmediate(b2);
      };
  }
  var sc = false, La2 = new Ha2();
  function tc2() {
    for (var a; a = Ka2(); ) {
      try {
        a.a.call(a.b);
      } catch (b2) {
        mc2(b2);
      }
      Ga2(Ja2, a);
    }
    sc = false;
  }
  function B2(a, b2) {
    this.a = uc2;
    this.i = void 0;
    this.f = this.b = this.c = null;
    this.g = this.h = false;
    if (a != ka2)
      try {
        var c = this;
        a.call(b2, function(d) {
          vc2(c, wc, d);
        }, function(d) {
          if (!(d instanceof xc2))
            try {
              if (d instanceof Error)
                throw d;
              throw Error("Promise rejected.");
            } catch (e) {
            }
          vc2(c, yc2, d);
        });
      } catch (d) {
        vc2(this, yc2, d);
      }
  }
  var uc2 = 0, wc = 2, yc2 = 3;
  function zc2() {
    this.next = this.f = this.b = this.g = this.a = null;
    this.c = false;
  }
  zc2.prototype.reset = function() {
    this.f = this.b = this.g = this.a = null;
    this.c = false;
  };
  var Ac2 = new Fa2(function() {
    return new zc2();
  }, function(a) {
    a.reset();
  });
  function Bc2(a, b2, c) {
    var d = Ac2.get();
    d.g = a;
    d.b = b2;
    d.f = c;
    return d;
  }
  function D2(a) {
    if (a instanceof B2)
      return a;
    var b2 = new B2(ka2);
    vc2(b2, wc, a);
    return b2;
  }
  function E2(a) {
    return new B2(function(b2, c) {
      c(a);
    });
  }
  function Cc2(a, b2, c) {
    Dc2(a, b2, c, null) || pc2(ta2(b2, a));
  }
  function Ec2(a) {
    return new B2(function(b2, c) {
      var d = a.length, e = [];
      if (d)
        for (var f = function(p2, v2) {
          d--;
          e[p2] = v2;
          d == 0 && b2(e);
        }, g2 = function(p2) {
          c(p2);
        }, h = 0, m; h < a.length; h++)
          m = a[h], Cc2(m, ta2(f, h), g2);
      else
        b2(e);
    });
  }
  function Fc2(a) {
    return new B2(function(b2) {
      var c = a.length, d = [];
      if (c)
        for (var e = function(h, m, p2) {
          c--;
          d[h] = m ? {Mb: true, value: p2} : {Mb: false, reason: p2};
          c == 0 && b2(d);
        }, f = 0, g2; f < a.length; f++)
          g2 = a[f], Cc2(g2, ta2(e, f, true), ta2(e, f, false));
      else
        b2(d);
    });
  }
  B2.prototype.then = function(a, b2, c) {
    return Gc2(this, na2(a) ? a : null, na2(b2) ? b2 : null, c);
  };
  B2.prototype.$goog_Thenable = true;
  k2 = B2.prototype;
  k2.ma = function(a, b2) {
    a = Bc2(a, a, b2);
    a.c = true;
    Hc2(this, a);
    return this;
  };
  k2.o = function(a, b2) {
    return Gc2(this, null, a, b2);
  };
  k2.cancel = function(a) {
    if (this.a == uc2) {
      var b2 = new xc2(a);
      pc2(function() {
        Ic2(this, b2);
      }, this);
    }
  };
  function Ic2(a, b2) {
    if (a.a == uc2)
      if (a.c) {
        var c = a.c;
        if (c.b) {
          for (var d = 0, e = null, f = null, g2 = c.b; g2 && (g2.c || (d++, g2.a == a && (e = g2), !(e && 1 < d))); g2 = g2.next)
            e || (f = g2);
          e && (c.a == uc2 && d == 1 ? Ic2(c, b2) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : Jc2(c), Kc2(c, e, yc2, b2)));
        }
        a.c = null;
      } else
        vc2(a, yc2, b2);
  }
  function Hc2(a, b2) {
    a.b || a.a != wc && a.a != yc2 || Lc2(a);
    a.f ? a.f.next = b2 : a.b = b2;
    a.f = b2;
  }
  function Gc2(a, b2, c, d) {
    var e = Bc2(null, null, null);
    e.a = new B2(function(f, g2) {
      e.g = b2 ? function(h) {
        try {
          var m = b2.call(d, h);
          f(m);
        } catch (p2) {
          g2(p2);
        }
      } : f;
      e.b = c ? function(h) {
        try {
          var m = c.call(d, h);
          m === void 0 && h instanceof xc2 ? g2(h) : f(m);
        } catch (p2) {
          g2(p2);
        }
      } : g2;
    });
    e.a.c = a;
    Hc2(a, e);
    return e.a;
  }
  k2.Yc = function(a) {
    this.a = uc2;
    vc2(this, wc, a);
  };
  k2.Zc = function(a) {
    this.a = uc2;
    vc2(this, yc2, a);
  };
  function vc2(a, b2, c) {
    a.a == uc2 && (a === c && (b2 = yc2, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Dc2(c, a.Yc, a.Zc, a) || (a.i = c, a.a = b2, a.c = null, Lc2(a), b2 != yc2 || c instanceof xc2 || Mc2(a, c)));
  }
  function Dc2(a, b2, c, d) {
    if (a instanceof B2)
      return Hc2(a, Bc2(b2 || ka2, c || null, d)), true;
    if (Ca2(a))
      return a.then(b2, c, d), true;
    if (n2(a))
      try {
        var e = a.then;
        if (na2(e))
          return Nc2(a, e, b2, c, d), true;
      } catch (f) {
        return c.call(d, f), true;
      }
    return false;
  }
  function Nc2(a, b2, c, d, e) {
    function f(m) {
      h || (h = true, d.call(e, m));
    }
    function g2(m) {
      h || (h = true, c.call(e, m));
    }
    var h = false;
    try {
      b2.call(a, g2, f);
    } catch (m) {
      f(m);
    }
  }
  function Lc2(a) {
    a.h || (a.h = true, pc2(a.ec, a));
  }
  function Jc2(a) {
    var b2 = null;
    a.b && (b2 = a.b, a.b = b2.next, b2.next = null);
    a.b || (a.f = null);
    return b2;
  }
  k2.ec = function() {
    for (var a; a = Jc2(this); )
      Kc2(this, a, this.a, this.i);
    this.h = false;
  };
  function Kc2(a, b2, c, d) {
    if (c == yc2 && b2.b && !b2.c)
      for (; a && a.g; a = a.c)
        a.g = false;
    if (b2.a)
      b2.a.c = null, Oc2(b2, c, d);
    else
      try {
        b2.c ? b2.g.call(b2.f) : Oc2(b2, c, d);
      } catch (e) {
        Pc2.call(null, e);
      }
    Ga2(Ac2, b2);
  }
  function Oc2(a, b2, c) {
    b2 == wc ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
  }
  function Mc2(a, b2) {
    a.g = true;
    pc2(function() {
      a.g && Pc2.call(null, b2);
    });
  }
  var Pc2 = mc2;
  function xc2(a) {
    u2.call(this, a);
  }
  r2(xc2, u2);
  xc2.prototype.name = "cancel";
  function Qc2() {
    this.wa = this.wa;
    this.na = this.na;
  }
  var Rc2 = 0;
  Qc2.prototype.wa = false;
  function Tc2(a) {
    if (!a.wa && (a.wa = true, a.Ba(), Rc2 != 0)) {
      var b2 = oa2(a);
    }
  }
  Qc2.prototype.Ba = function() {
    if (this.na)
      for (; this.na.length; )
        this.na.shift()();
  };
  var Uc2 = Object.freeze || function(a) {
    return a;
  };
  var Vc2 = !Tb2 || 9 <= Number(dc2), Wc2 = Tb2 && !cc2("9"), Xc2 = function() {
    if (!l.addEventListener || !Object.defineProperty)
      return false;
    var a = false, b2 = Object.defineProperty({}, "passive", {get: function() {
      a = true;
    }});
    try {
      l.addEventListener("test", ka2, b2), l.removeEventListener("test", ka2, b2);
    } catch (c) {
    }
    return a;
  }();
  function F2(a, b2) {
    this.type = a;
    this.b = this.target = b2;
    this.defaultPrevented = false;
  }
  F2.prototype.preventDefault = function() {
    this.defaultPrevented = true;
  };
  function Yc2(a, b2) {
    F2.call(this, a ? a.type : "");
    this.relatedTarget = this.b = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.pointerId = 0;
    this.pointerType = "";
    this.a = null;
    if (a) {
      var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.b = b2;
      if (b2 = a.relatedTarget) {
        if (Wb2) {
          a: {
            try {
              Pb2(b2.nodeName);
              var e = true;
              break a;
            } catch (f) {
            }
            e = false;
          }
          e || (b2 = null);
        }
      } else
        c == "mouseover" ? b2 = a.fromElement : c == "mouseout" && (b2 = a.toElement);
      this.relatedTarget = b2;
      d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = typeof a.pointerType === "string" ? a.pointerType : Zc2[a.pointerType] || "";
      this.a = a;
      a.defaultPrevented && this.preventDefault();
    }
  }
  r2(Yc2, F2);
  var Zc2 = Uc2({2: "touch", 3: "pen", 4: "mouse"});
  Yc2.prototype.preventDefault = function() {
    Yc2.Za.preventDefault.call(this);
    var a = this.a;
    if (a.preventDefault)
      a.preventDefault();
    else if (a.returnValue = false, Wc2)
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
          a.keyCode = -1;
      } catch (b2) {
      }
  };
  Yc2.prototype.f = function() {
    return this.a;
  };
  var $c2 = "closure_listenable_" + (1e6 * Math.random() | 0), ad2 = 0;
  function bd2(a, b2, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b2;
    this.type = c;
    this.capture = !!d;
    this.Ta = e;
    this.key = ++ad2;
    this.ua = this.Na = false;
  }
  function cd2(a) {
    a.ua = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Ta = null;
  }
  function dd2(a) {
    this.src = a;
    this.a = {};
    this.b = 0;
  }
  dd2.prototype.add = function(a, b2, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g2 = ed2(a, b2, d, e);
    -1 < g2 ? (b2 = a[g2], c || (b2.Na = false)) : (b2 = new bd2(b2, this.src, f, !!d, e), b2.Na = c, a.push(b2));
    return b2;
  };
  function fd2(a, b2) {
    var c = b2.type;
    c in a.a && Ua2(a.a[c], b2) && (cd2(b2), a.a[c].length == 0 && (delete a.a[c], a.b--));
  }
  function ed2(a, b2, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.ua && f.listener == b2 && f.capture == !!c && f.Ta == d)
        return e;
    }
    return -1;
  }
  var gd2 = "closure_lm_" + (1e6 * Math.random() | 0), hd2 = {};
  function jd2(a, b2, c, d, e) {
    if (d && d.once)
      kd2(a, b2, c, d, e);
    else if (Array.isArray(b2))
      for (var f = 0; f < b2.length; f++)
        jd2(a, b2[f], c, d, e);
    else
      c = ld2(c), a && a[$c2] ? md2(a, b2, c, n2(d) ? !!d.capture : !!d, e) : nd2(a, b2, c, false, d, e);
  }
  function nd2(a, b2, c, d, e, f) {
    if (!b2)
      throw Error("Invalid event type");
    var g2 = n2(e) ? !!e.capture : !!e, h = od2(a);
    h || (a[gd2] = h = new dd2(a));
    c = h.add(b2, c, d, g2, f);
    if (!c.proxy) {
      d = pd2();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        Xc2 || (e = g2), e === void 0 && (e = false), a.addEventListener(b2.toString(), d, e);
      else if (a.attachEvent)
        a.attachEvent(qd2(b2.toString()), d);
      else if (a.addListener && a.removeListener)
        a.addListener(d);
      else
        throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  function pd2() {
    var a = rd2, b2 = Vc2 ? function(c) {
      return a.call(b2.src, b2.listener, c);
    } : function(c) {
      c = a.call(b2.src, b2.listener, c);
      if (!c)
        return c;
    };
    return b2;
  }
  function kd2(a, b2, c, d, e) {
    if (Array.isArray(b2))
      for (var f = 0; f < b2.length; f++)
        kd2(a, b2[f], c, d, e);
    else
      c = ld2(c), a && a[$c2] ? sd2(a, b2, c, n2(d) ? !!d.capture : !!d, e) : nd2(a, b2, c, true, d, e);
  }
  function td2(a, b2, c, d, e) {
    if (Array.isArray(b2))
      for (var f = 0; f < b2.length; f++)
        td2(a, b2[f], c, d, e);
    else
      (d = n2(d) ? !!d.capture : !!d, c = ld2(c), a && a[$c2]) ? (a = a.u, b2 = String(b2).toString(), b2 in a.a && (f = a.a[b2], c = ed2(f, c, d, e), -1 < c && (cd2(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.a[b2], a.b--)))) : a && (a = od2(a)) && (b2 = a.a[b2.toString()], a = -1, b2 && (a = ed2(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && vd2(c));
  }
  function vd2(a) {
    if (typeof a !== "number" && a && !a.ua) {
      var b2 = a.src;
      if (b2 && b2[$c2])
        fd2(b2.u, a);
      else {
        var c = a.type, d = a.proxy;
        b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(qd2(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
        (c = od2(b2)) ? (fd2(c, a), c.b == 0 && (c.src = null, b2[gd2] = null)) : cd2(a);
      }
    }
  }
  function qd2(a) {
    return a in hd2 ? hd2[a] : hd2[a] = "on" + a;
  }
  function wd2(a, b2, c, d) {
    var e = true;
    if (a = od2(a)) {
      if (b2 = a.a[b2.toString()])
        for (b2 = b2.concat(), a = 0; a < b2.length; a++) {
          var f = b2[a];
          f && f.capture == c && !f.ua && (f = xd2(f, d), e = e && f !== false);
        }
    }
    return e;
  }
  function xd2(a, b2) {
    var c = a.listener, d = a.Ta || a.src;
    a.Na && vd2(a);
    return c.call(d, b2);
  }
  function rd2(a, b2) {
    if (a.ua)
      return true;
    if (!Vc2) {
      if (!b2)
        a: {
          b2 = ["window", "event"];
          for (var c = l, d = 0; d < b2.length; d++)
            if (c = c[b2[d]], c == null) {
              b2 = null;
              break a;
            }
          b2 = c;
        }
      d = b2;
      b2 = new Yc2(d, this);
      c = true;
      if (!(0 > d.keyCode || d.returnValue != void 0)) {
        a: {
          var e = false;
          if (d.keyCode == 0)
            try {
              d.keyCode = -1;
              break a;
            } catch (g2) {
              e = true;
            }
          if (e || d.returnValue == void 0)
            d.returnValue = true;
        }
        d = [];
        for (e = b2.b; e; e = e.parentNode)
          d.push(e);
        a = a.type;
        for (e = d.length - 1; 0 <= e; e--) {
          b2.b = d[e];
          var f = wd2(d[e], a, true, b2);
          c = c && f;
        }
        for (e = 0; e < d.length; e++)
          b2.b = d[e], f = wd2(d[e], a, false, b2), c = c && f;
      }
      return c;
    }
    return xd2(a, new Yc2(b2, this));
  }
  function od2(a) {
    a = a[gd2];
    return a instanceof dd2 ? a : null;
  }
  var yd2 = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function ld2(a) {
    if (na2(a))
      return a;
    a[yd2] || (a[yd2] = function(b2) {
      return a.handleEvent(b2);
    });
    return a[yd2];
  }
  function G2() {
    Qc2.call(this);
    this.u = new dd2(this);
    this.Yb = this;
    this.eb = null;
  }
  r2(G2, Qc2);
  G2.prototype[$c2] = true;
  G2.prototype.addEventListener = function(a, b2, c, d) {
    jd2(this, a, b2, c, d);
  };
  G2.prototype.removeEventListener = function(a, b2, c, d) {
    td2(this, a, b2, c, d);
  };
  G2.prototype.dispatchEvent = function(a) {
    var b2, c = this.eb;
    if (c)
      for (b2 = []; c; c = c.eb)
        b2.push(c);
    c = this.Yb;
    var d = a.type || a;
    if (typeof a === "string")
      a = new F2(a, c);
    else if (a instanceof F2)
      a.target = a.target || c;
    else {
      var e = a;
      a = new F2(d, c);
      z2(a, e);
    }
    e = true;
    if (b2)
      for (var f = b2.length - 1; 0 <= f; f--) {
        var g2 = a.b = b2[f];
        e = zd2(g2, d, true, a) && e;
      }
    g2 = a.b = c;
    e = zd2(g2, d, true, a) && e;
    e = zd2(g2, d, false, a) && e;
    if (b2)
      for (f = 0; f < b2.length; f++)
        g2 = a.b = b2[f], e = zd2(g2, d, false, a) && e;
    return e;
  };
  G2.prototype.Ba = function() {
    G2.Za.Ba.call(this);
    if (this.u) {
      var a = this.u, c;
      for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
          cd2(d[e]);
        delete a.a[c];
        a.b--;
      }
    }
    this.eb = null;
  };
  function md2(a, b2, c, d, e) {
    a.u.add(String(b2), c, false, d, e);
  }
  function sd2(a, b2, c, d, e) {
    a.u.add(String(b2), c, true, d, e);
  }
  function zd2(a, b2, c, d) {
    b2 = a.u.a[String(b2)];
    if (!b2)
      return true;
    b2 = b2.concat();
    for (var e = true, f = 0; f < b2.length; ++f) {
      var g2 = b2[f];
      if (g2 && !g2.ua && g2.capture == c) {
        var h = g2.listener, m = g2.Ta || g2.src;
        g2.Na && fd2(a.u, g2);
        e = h.call(m, d) !== false && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function Ad2(a, b2, c) {
    if (na2(a))
      c && (a = q2(a, c));
    else if (a && typeof a.handleEvent == "function")
      a = q2(a.handleEvent, a);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(b2) ? -1 : l.setTimeout(a, b2 || 0);
  }
  function Bd2(a) {
    var b2 = null;
    return new B2(function(c, d) {
      b2 = Ad2(function() {
        c(void 0);
      }, a);
      b2 == -1 && d(Error("Failed to schedule timer."));
    }).o(function(c) {
      l.clearTimeout(b2);
      throw c;
    });
  }
  function Cd2(a) {
    if (a.V && typeof a.V == "function")
      return a.V();
    if (typeof a === "string")
      return a.split("");
    if (ma2(a)) {
      for (var b2 = [], c = a.length, d = 0; d < c; d++)
        b2.push(a[d]);
      return b2;
    }
    b2 = [];
    c = 0;
    for (d in a)
      b2[c++] = a[d];
    return b2;
  }
  function Dd2(a) {
    if (a.X && typeof a.X == "function")
      return a.X();
    if (!a.V || typeof a.V != "function") {
      if (ma2(a) || typeof a === "string") {
        var b2 = [];
        a = a.length;
        for (var c = 0; c < a; c++)
          b2.push(c);
        return b2;
      }
      b2 = [];
      c = 0;
      for (var d in a)
        b2[c++] = d;
      return b2;
    }
  }
  function Ed2(a, b2) {
    if (a.forEach && typeof a.forEach == "function")
      a.forEach(b2, void 0);
    else if (ma2(a) || typeof a === "string")
      w2(a, b2, void 0);
    else
      for (var c = Dd2(a), d = Cd2(a), e = d.length, f = 0; f < e; f++)
        b2.call(void 0, d[f], c && c[f], a);
  }
  function Fd2(a, b2) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2)
        throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof Fd2)
        for (c = a.X(), d = 0; d < c.length; d++)
          this.set(c[d], a.get(c[d]));
      else
        for (d in a)
          this.set(d, a[d]);
  }
  k2 = Fd2.prototype;
  k2.V = function() {
    Gd2(this);
    for (var a = [], b2 = 0; b2 < this.a.length; b2++)
      a.push(this.b[this.a[b2]]);
    return a;
  };
  k2.X = function() {
    Gd2(this);
    return this.a.concat();
  };
  k2.clear = function() {
    this.b = {};
    this.c = this.a.length = 0;
  };
  function Gd2(a) {
    if (a.c != a.a.length) {
      for (var b2 = 0, c = 0; b2 < a.a.length; ) {
        var d = a.a[b2];
        Hd2(a.b, d) && (a.a[c++] = d);
        b2++;
      }
      a.a.length = c;
    }
    if (a.c != a.a.length) {
      var e = {};
      for (c = b2 = 0; b2 < a.a.length; )
        d = a.a[b2], Hd2(e, d) || (a.a[c++] = d, e[d] = 1), b2++;
      a.a.length = c;
    }
  }
  k2.get = function(a, b2) {
    return Hd2(this.b, a) ? this.b[a] : b2;
  };
  k2.set = function(a, b2) {
    Hd2(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b2;
  };
  k2.forEach = function(a, b2) {
    for (var c = this.X(), d = 0; d < c.length; d++) {
      var e = c[d], f = this.get(e);
      a.call(b2, f, e, this);
    }
  };
  function Hd2(a, b2) {
    return Object.prototype.hasOwnProperty.call(a, b2);
  }
  var Id2 = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function Jd2(a, b2) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else
          f = a[c];
        b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function Kd2(a, b2) {
    this.b = this.i = this.f = "";
    this.l = null;
    this.g = this.c = "";
    this.h = false;
    var c;
    a instanceof Kd2 ? (this.h = b2 !== void 0 ? b2 : a.h, Ld2(this, a.f), this.i = a.i, this.b = a.b, Md2(this, a.l), this.c = a.c, Nd2(this, Od2(a.a)), this.g = a.g) : a && (c = String(a).match(Id2)) ? (this.h = !!b2, Ld2(this, c[1] || "", true), this.i = Pd2(c[2] || ""), this.b = Pd2(c[3] || "", true), Md2(this, c[4]), this.c = Pd2(c[5] || "", true), Nd2(this, c[6] || "", true), this.g = Pd2(c[7] || "")) : (this.h = !!b2, this.a = new Qd(null, this.h));
  }
  Kd2.prototype.toString = function() {
    var a = [], b2 = this.f;
    b2 && a.push(Rd(b2, Sd, true), ":");
    var c = this.b;
    if (c || b2 == "file")
      a.push("//"), (b2 = this.i) && a.push(Rd(b2, Sd, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, c != null && a.push(":", String(c));
    if (c = this.c)
      this.b && c.charAt(0) != "/" && a.push("/"), a.push(Rd(c, c.charAt(0) == "/" ? Td : Ud, true));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", Rd(c, Vd));
    return a.join("");
  };
  Kd2.prototype.resolve = function(a) {
    var b2 = new Kd2(this), c = !!a.f;
    c ? Ld2(b2, a.f) : c = !!a.i;
    c ? b2.i = a.i : c = !!a.b;
    c ? b2.b = a.b : c = a.l != null;
    var d = a.c;
    if (c)
      Md2(b2, a.l);
    else if (c = !!a.c) {
      if (d.charAt(0) != "/")
        if (this.b && !this.c)
          d = "/" + d;
        else {
          var e = b2.c.lastIndexOf("/");
          e != -1 && (d = b2.c.substr(0, e + 1) + d);
        }
      e = d;
      if (e == ".." || e == ".")
        d = "";
      else if (x2(e, "./") || x2(e, "/.")) {
        d = e.lastIndexOf("/", 0) == 0;
        e = e.split("/");
        for (var f = [], g2 = 0; g2 < e.length; ) {
          var h = e[g2++];
          h == "." ? d && g2 == e.length && f.push("") : h == ".." ? ((1 < f.length || f.length == 1 && f[0] != "") && f.pop(), d && g2 == e.length && f.push("")) : (f.push(h), d = true);
        }
        d = f.join("/");
      } else
        d = e;
    }
    c ? b2.c = d : c = a.a.toString() !== "";
    c ? Nd2(b2, Od2(a.a)) : c = !!a.g;
    c && (b2.g = a.g);
    return b2;
  };
  function Ld2(a, b2, c) {
    a.f = c ? Pd2(b2, true) : b2;
    a.f && (a.f = a.f.replace(/:$/, ""));
  }
  function Md2(a, b2) {
    if (b2) {
      b2 = Number(b2);
      if (isNaN(b2) || 0 > b2)
        throw Error("Bad port number " + b2);
      a.l = b2;
    } else
      a.l = null;
  }
  function Nd2(a, b2, c) {
    b2 instanceof Qd ? (a.a = b2, Wd(a.a, a.h)) : (c || (b2 = Rd(b2, Xd)), a.a = new Qd(b2, a.h));
  }
  function H2(a, b2, c) {
    a.a.set(b2, c);
  }
  function Yd(a, b2) {
    return a.a.get(b2);
  }
  function Zd(a) {
    return a instanceof Kd2 ? new Kd2(a) : new Kd2(a, void 0);
  }
  function $d(a, b2) {
    var c = new Kd2(null, void 0);
    Ld2(c, "https");
    a && (c.b = a);
    b2 && (c.c = b2);
    return c;
  }
  function Pd2(a, b2) {
    return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function Rd(a, b2, c) {
    return typeof a === "string" ? (a = encodeURI(a).replace(b2, ae2), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function ae2(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var Sd = /[#\/\?@]/g, Ud = /[#\?:]/g, Td = /[#\?]/g, Xd = /[#\?@]/g, Vd = /#/g;
  function Qd(a, b2) {
    this.b = this.a = null;
    this.c = a || null;
    this.f = !!b2;
  }
  function be2(a) {
    a.a || (a.a = new Fd2(), a.b = 0, a.c && Jd2(a.c, function(b2, c) {
      a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
    }));
  }
  function ce2(a) {
    var b2 = Dd2(a);
    if (typeof b2 == "undefined")
      throw Error("Keys are undefined");
    var c = new Qd(null, void 0);
    a = Cd2(a);
    for (var d = 0; d < b2.length; d++) {
      var e = b2[d], f = a[d];
      Array.isArray(f) ? de2(c, e, f) : c.add(e, f);
    }
    return c;
  }
  k2 = Qd.prototype;
  k2.add = function(a, b2) {
    be2(this);
    this.c = null;
    a = ee2(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b2);
    this.b += 1;
    return this;
  };
  function fe2(a, b2) {
    be2(a);
    b2 = ee2(a, b2);
    Hd2(a.a.b, b2) && (a.c = null, a.b -= a.a.get(b2).length, a = a.a, Hd2(a.b, b2) && (delete a.b[b2], a.c--, a.a.length > 2 * a.c && Gd2(a)));
  }
  k2.clear = function() {
    this.a = this.c = null;
    this.b = 0;
  };
  function ge2(a, b2) {
    be2(a);
    b2 = ee2(a, b2);
    return Hd2(a.a.b, b2);
  }
  k2.forEach = function(a, b2) {
    be2(this);
    this.a.forEach(function(c, d) {
      w2(c, function(e) {
        a.call(b2, e, d, this);
      }, this);
    }, this);
  };
  k2.X = function() {
    be2(this);
    for (var a = this.a.V(), b2 = this.a.X(), c = [], d = 0; d < b2.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b2[d]);
    return c;
  };
  k2.V = function(a) {
    be2(this);
    var b2 = [];
    if (typeof a === "string")
      ge2(this, a) && (b2 = Wa2(b2, this.a.get(ee2(this, a))));
    else {
      a = this.a.V();
      for (var c = 0; c < a.length; c++)
        b2 = Wa2(b2, a[c]);
    }
    return b2;
  };
  k2.set = function(a, b2) {
    be2(this);
    this.c = null;
    a = ee2(this, a);
    ge2(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b2]);
    this.b += 1;
    return this;
  };
  k2.get = function(a, b2) {
    if (!a)
      return b2;
    a = this.V(a);
    return 0 < a.length ? String(a[0]) : b2;
  };
  function de2(a, b2, c) {
    fe2(a, b2);
    0 < c.length && (a.c = null, a.a.set(ee2(a, b2), Xa2(c)), a.b += c.length);
  }
  k2.toString = function() {
    if (this.c)
      return this.c;
    if (!this.a)
      return "";
    for (var a = [], b2 = this.a.X(), c = 0; c < b2.length; c++) {
      var d = b2[c], e = encodeURIComponent(String(d));
      d = this.V(d);
      for (var f = 0; f < d.length; f++) {
        var g2 = e;
        d[f] !== "" && (g2 += "=" + encodeURIComponent(String(d[f])));
        a.push(g2);
      }
    }
    return this.c = a.join("&");
  };
  function Od2(a) {
    var b2 = new Qd();
    b2.c = a.c;
    a.a && (b2.a = new Fd2(a.a), b2.b = a.b);
    return b2;
  }
  function ee2(a, b2) {
    b2 = String(b2);
    a.f && (b2 = b2.toLowerCase());
    return b2;
  }
  function Wd(a, b2) {
    b2 && !a.f && (be2(a), a.c = null, a.a.forEach(function(c, d) {
      var e = d.toLowerCase();
      d != e && (fe2(this, d), de2(this, e, c));
    }, a));
    a.f = b2;
  }
  function he2(a) {
    var b2 = [];
    ie2(new je2(), a, b2);
    return b2.join("");
  }
  function je2() {
  }
  function ie2(a, b2, c) {
    if (b2 == null)
      c.push("null");
    else {
      if (typeof b2 == "object") {
        if (Array.isArray(b2)) {
          var d = b2;
          b2 = d.length;
          c.push("[");
          for (var e = "", f = 0; f < b2; f++)
            c.push(e), ie2(a, d[f], c), e = ",";
          c.push("]");
          return;
        }
        if (b2 instanceof String || b2 instanceof Number || b2 instanceof Boolean)
          b2 = b2.valueOf();
        else {
          c.push("{");
          e = "";
          for (d in b2)
            Object.prototype.hasOwnProperty.call(b2, d) && (f = b2[d], typeof f != "function" && (c.push(e), ke2(d, c), c.push(":"), ie2(a, f, c), e = ","));
          c.push("}");
          return;
        }
      }
      switch (typeof b2) {
        case "string":
          ke2(b2, c);
          break;
        case "number":
          c.push(isFinite(b2) && !isNaN(b2) ? String(b2) : "null");
          break;
        case "boolean":
          c.push(String(b2));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b2);
      }
    }
  }
  var le2 = {'"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\u000b"}, me2 = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
  function ke2(a, b2) {
    b2.push('"', a.replace(me2, function(c) {
      var d = le2[c];
      d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), le2[c] = d);
      return d;
    }), '"');
  }
  function ne2() {
    var a = I2();
    return Tb2 && !!dc2 && dc2 == 11 || /Edge\/\d+/.test(a);
  }
  function oe2() {
    return l.window && l.window.location.href || self && self.location && self.location.href || "";
  }
  function pe2(a, b2) {
    b2 = b2 || l.window;
    var c = "about:blank";
    a && (c = Db2(Fb2(a)));
    b2.location.href = c;
  }
  function qe2(a, b2) {
    var c = [], d;
    for (d in a)
      d in b2 ? typeof a[d] != typeof b2[d] ? c.push(d) : typeof a[d] == "object" && a[d] != null && b2[d] != null ? 0 < qe2(a[d], b2[d]).length && c.push(d) : a[d] !== b2[d] && c.push(d) : c.push(d);
    for (d in b2)
      d in a || c.push(d);
    return c;
  }
  function re2() {
    var a = I2();
    a = se2(a) != te2 ? null : (a = a.match(/\sChrome\/(\d+)/i)) && a.length == 2 ? parseInt(a[1], 10) : null;
    return a && 30 > a ? false : !Tb2 || !dc2 || 9 < dc2;
  }
  function ue2(a) {
    a = (a || I2()).toLowerCase();
    return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? true : false;
  }
  function ve2(a) {
    a = a || l.window;
    try {
      a.close();
    } catch (b2) {
    }
  }
  function we2(a, b2, c) {
    var d = Math.floor(1e9 * Math.random()).toString();
    b2 = b2 || 500;
    c = c || 600;
    var e = (window.screen.availHeight - c) / 2, f = (window.screen.availWidth - b2) / 2;
    b2 = {width: b2, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: true, resizable: true, statusbar: true, toolbar: false};
    c = I2().toLowerCase();
    d && (b2.target = d, x2(c, "crios/") && (b2.target = "_blank"));
    se2(I2()) == xe2 && (a = a || "http://localhost", b2.scrollbars = true);
    c = a || "";
    (a = b2) || (a = {});
    d = window;
    b2 = c instanceof Ab2 ? c : Fb2(typeof c.href != "undefined" ? c.href : String(c));
    c = a.target || c.target;
    e = [];
    for (g2 in a)
      switch (g2) {
        case "width":
        case "height":
        case "top":
        case "left":
          e.push(g2 + "=" + a[g2]);
          break;
        case "target":
        case "noopener":
        case "noreferrer":
          break;
        default:
          e.push(g2 + "=" + (a[g2] ? 1 : 0));
      }
    var g2 = e.join(",");
    if ((y2("iPhone") && !y2("iPod") && !y2("iPad") || y2("iPad") || y2("iPod")) && d.navigator && d.navigator.standalone && c && c != "_self")
      g2 = jc2(document, "A"), nb2(g2, "HTMLAnchorElement"), b2 instanceof Ab2 || b2 instanceof Ab2 || (b2 = typeof b2 == "object" && b2.ra ? b2.qa() : String(b2), Eb2.test(b2) || (b2 = "about:invalid#zClosurez"), b2 = new Ab2(Bb2, b2)), g2.href = Db2(b2), g2.setAttribute("target", c), a.noreferrer && g2.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", true, true, d, 1), g2.dispatchEvent(a), g2 = {};
    else if (a.noreferrer) {
      if (g2 = d.open("", c, g2), a = Db2(b2), g2 && (Vb2 && x2(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g2.opener = null, a = Jb2('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Ob2(a) + '">'), d = g2.document))
        d.write(Ib2(a)), d.close();
    } else
      (g2 = d.open(Db2(b2), c, g2)) && a.noopener && (g2.opener = null);
    if (g2)
      try {
        g2.focus();
      } catch (h) {
      }
    return g2;
  }
  function ye2(a) {
    return new B2(function(b2) {
      function c() {
        Bd2(2e3).then(function() {
          if (!a || a.closed)
            b2();
          else
            return c();
        });
      }
      return c();
    });
  }
  var ze2 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Ae2 = /^[^@]+@[^@]+$/;
  function Be2() {
    var a = null;
    return new B2(function(b2) {
      l.document.readyState == "complete" ? b2() : (a = function() {
        b2();
      }, kd2(window, "load", a));
    }).o(function(b2) {
      td2(window, "load", a);
      throw b2;
    });
  }
  function Ce2() {
    return De2(void 0) ? Be2().then(function() {
      return new B2(function(a, b2) {
        var c = l.document, d = setTimeout(function() {
          b2(Error("Cordova framework is not ready."));
        }, 1e3);
        c.addEventListener("deviceready", function() {
          clearTimeout(d);
          a();
        }, false);
      });
    }) : E2(Error("Cordova must run in an Android or iOS file scheme."));
  }
  function De2(a) {
    a = a || I2();
    return !(Ee2() !== "file:" && Ee2() !== "ionic:" || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
  }
  function Fe2() {
    var a = l.window;
    try {
      return !(!a || a == a.top);
    } catch (b2) {
      return false;
    }
  }
  function Ge2() {
    return typeof l.WorkerGlobalScope !== "undefined" && typeof l.importScripts === "function";
  }
  function He2() {
    return firebase$1.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase$1.INTERNAL.hasOwnProperty("node") ? "Node" : Ge2() ? "Worker" : "Browser";
  }
  function Ie2() {
    var a = He2();
    return a === "ReactNative" || a === "Node";
  }
  function Je2() {
    for (var a = 50, b2 = []; 0 < a; )
      b2.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    return b2.join("");
  }
  var xe2 = "Firefox", te2 = "Chrome";
  function se2(a) {
    var b2 = a.toLowerCase();
    if (x2(b2, "opera/") || x2(b2, "opr/") || x2(b2, "opios/"))
      return "Opera";
    if (x2(b2, "iemobile"))
      return "IEMobile";
    if (x2(b2, "msie") || x2(b2, "trident/"))
      return "IE";
    if (x2(b2, "edge/"))
      return "Edge";
    if (x2(b2, "firefox/"))
      return xe2;
    if (x2(b2, "silk/"))
      return "Silk";
    if (x2(b2, "blackberry"))
      return "Blackberry";
    if (x2(b2, "webos"))
      return "Webos";
    if (!x2(b2, "safari/") || x2(b2, "chrome/") || x2(b2, "crios/") || x2(b2, "android"))
      if (!x2(b2, "chrome/") && !x2(b2, "crios/") || x2(b2, "edge/")) {
        if (x2(b2, "android"))
          return "Android";
        if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && a.length == 2)
          return a[1];
      } else
        return te2;
    else
      return "Safari";
    return "Other";
  }
  var Ke2 = {jd: "FirebaseCore-web", ld: "FirebaseUI-web"};
  function Le2(a, b2) {
    b2 = b2 || [];
    var c = [], d = {}, e;
    for (e in Ke2)
      d[Ke2[e]] = true;
    for (e = 0; e < b2.length; e++)
      typeof d[b2[e]] !== "undefined" && (delete d[b2[e]], c.push(b2[e]));
    c.sort();
    b2 = c;
    b2.length || (b2 = ["FirebaseCore-web"]);
    c = He2();
    c === "Browser" ? (d = I2(), c = se2(d)) : c === "Worker" && (d = I2(), c = se2(d) + "-" + c);
    return c + "/JsCore/" + a + "/" + b2.join(",");
  }
  function I2() {
    return l.navigator && l.navigator.userAgent || "";
  }
  function J2(a, b2) {
    a = a.split(".");
    b2 = b2 || l;
    for (var c = 0; c < a.length && typeof b2 == "object" && b2 != null; c++)
      b2 = b2[a[c]];
    c != a.length && (b2 = void 0);
    return b2;
  }
  function Me2() {
    try {
      var a = l.localStorage, b2 = Ne2();
      if (a)
        return a.setItem(b2, "1"), a.removeItem(b2), ne2() ? !!l.indexedDB : true;
    } catch (c) {
      return Ge2() && !!l.indexedDB;
    }
    return false;
  }
  function Oe2() {
    return (Pe2() || Ee2() === "chrome-extension:" || De2()) && !Ie2() && Me2() && !Ge2();
  }
  function Pe2() {
    return Ee2() === "http:" || Ee2() === "https:";
  }
  function Ee2() {
    return l.location && l.location.protocol || null;
  }
  function Qe2(a) {
    a = a || I2();
    return ue2(a) || se2(a) == xe2 ? false : true;
  }
  function Re2(a) {
    return typeof a === "undefined" ? null : he2(a);
  }
  function Se2(a) {
    var b2 = {}, c;
    for (c in a)
      a.hasOwnProperty(c) && a[c] !== null && a[c] !== void 0 && (b2[c] = a[c]);
    return b2;
  }
  function Te2(a) {
    if (a !== null)
      return JSON.parse(a);
  }
  function Ne2(a) {
    return a ? a : Math.floor(1e9 * Math.random()).toString();
  }
  function Ue2(a) {
    a = a || I2();
    return se2(a) == "Safari" || a.toLowerCase().match(/iphone|ipad|ipod/) ? false : true;
  }
  function Ve2() {
    var a = l.___jsl;
    if (a && a.H) {
      for (var b2 in a.H)
        if (a.H[b2].r = a.H[b2].r || [], a.H[b2].L = a.H[b2].L || [], a.H[b2].r = a.H[b2].L.concat(), a.CP)
          for (var c = 0; c < a.CP.length; c++)
            a.CP[c] = null;
    }
  }
  function We2(a, b2) {
    if (a > b2)
      throw Error("Short delay should be less than long delay!");
    this.a = a;
    this.c = b2;
    a = I2();
    b2 = He2();
    this.b = ue2(a) || b2 === "ReactNative";
  }
  We2.prototype.get = function() {
    var a = l.navigator;
    return (a && typeof a.onLine === "boolean" && (Pe2() || Ee2() === "chrome-extension:" || typeof a.connection !== "undefined") ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5e3, this.a);
  };
  function Xe2() {
    var a = l.document;
    return a && typeof a.visibilityState !== "undefined" ? a.visibilityState == "visible" : true;
  }
  function Ye2() {
    var a = l.document, b2 = null;
    return Xe2() || !a ? D2() : new B2(function(c) {
      b2 = function() {
        Xe2() && (a.removeEventListener("visibilitychange", b2, false), c());
      };
      a.addEventListener("visibilitychange", b2, false);
    }).o(function(c) {
      a.removeEventListener("visibilitychange", b2, false);
      throw c;
    });
  }
  function Ze2(a) {
    try {
      var b2 = new Date(parseInt(a, 10));
      if (!isNaN(b2.getTime()) && !/[^0-9]/.test(a))
        return b2.toUTCString();
    } catch (c) {
    }
    return null;
  }
  function $e2() {
    return !(!J2("fireauth.oauthhelper", l) && !J2("fireauth.iframe", l));
  }
  function af() {
    var a = l.navigator;
    return a && a.serviceWorker && a.serviceWorker.controller || null;
  }
  function bf() {
    var a = l.navigator;
    return a && a.serviceWorker ? D2().then(function() {
      return a.serviceWorker.ready;
    }).then(function(b2) {
      return b2.active || null;
    }).o(function() {
      return null;
    }) : D2(null);
  }
  var cf = {};
  function df(a) {
    cf[a] || (cf[a] = true, typeof console !== "undefined" && typeof console.warn === "function" && console.warn(a));
  }
  var ef;
  try {
    var ff = {};
    Object.defineProperty(ff, "abcd", {configurable: true, enumerable: true, value: 1});
    Object.defineProperty(ff, "abcd", {configurable: true, enumerable: true, value: 2});
    ef = ff.abcd == 2;
  } catch (a) {
    ef = false;
  }
  function K2(a, b2, c) {
    ef ? Object.defineProperty(a, b2, {configurable: true, enumerable: true, value: c}) : a[b2] = c;
  }
  function L2(a, b2) {
    if (b2)
      for (var c in b2)
        b2.hasOwnProperty(c) && K2(a, c, b2[c]);
  }
  function gf(a) {
    var b2 = {};
    L2(b2, a);
    return b2;
  }
  function hf(a) {
    var b2 = {}, c;
    for (c in a)
      a.hasOwnProperty(c) && (b2[c] = a[c]);
    return b2;
  }
  function jf(a, b2) {
    if (!b2 || !b2.length)
      return true;
    if (!a)
      return false;
    for (var c = 0; c < b2.length; c++) {
      var d = a[b2[c]];
      if (d === void 0 || d === null || d === "")
        return false;
    }
    return true;
  }
  function kf(a) {
    var b2 = a;
    if (typeof a == "object" && a != null) {
      b2 = "length" in a ? [] : {};
      for (var c in a)
        K2(b2, c, kf(a[c]));
    }
    return b2;
  }
  function lf(a) {
    var b2 = a && (a[mf] ? "phone" : null);
    if (b2 && a && a[nf]) {
      K2(this, "uid", a[nf]);
      K2(this, "displayName", a[of] || null);
      var c = null;
      a[pf] && (c = new Date(a[pf]).toUTCString());
      K2(this, "enrollmentTime", c);
      K2(this, "factorId", b2);
    } else
      throw new t("internal-error", "Internal assert: invalid MultiFactorInfo object");
  }
  lf.prototype.v = function() {
    return {uid: this.uid, displayName: this.displayName, factorId: this.factorId, enrollmentTime: this.enrollmentTime};
  };
  function qf(a) {
    try {
      var b2 = new rf(a);
    } catch (c) {
      b2 = null;
    }
    return b2;
  }
  var of = "displayName", pf = "enrolledAt", nf = "mfaEnrollmentId", mf = "phoneInfo";
  function rf(a) {
    lf.call(this, a);
    K2(this, "phoneNumber", a[mf]);
  }
  r2(rf, lf);
  rf.prototype.v = function() {
    var a = rf.Za.v.call(this);
    a.phoneNumber = this.phoneNumber;
    return a;
  };
  function sf(a) {
    var b2 = {}, c = a[tf], d = a[uf], e = a[vf];
    a = qf(a[wf]);
    if (!e || e != xf && e != yf && !c || e == yf && !d || e == zf && !a)
      throw Error("Invalid checkActionCode response!");
    e == yf ? (b2[Af] = c || null, b2[Bf] = c || null, b2[Cf] = d) : (b2[Af] = d || null, b2[Bf] = d || null, b2[Cf] = c || null);
    b2[Df] = a || null;
    K2(this, Ef, e);
    K2(this, Ff, kf(b2));
  }
  var zf = "REVERT_SECOND_FACTOR_ADDITION", xf = "EMAIL_SIGNIN", yf = "VERIFY_AND_CHANGE_EMAIL", tf = "email", wf = "mfaInfo", uf = "newEmail", vf = "requestType", Cf = "email", Af = "fromEmail", Df = "multiFactorInfo", Bf = "previousEmail", Ff = "data", Ef = "operation";
  function Gf(a) {
    a = Zd(a);
    var b2 = Yd(a, Hf) || null, c = Yd(a, If) || null, d = Yd(a, Jf) || null;
    d = d ? Kf[d] || null : null;
    if (!b2 || !c || !d)
      throw new t("argument-error", Hf + ", " + If + "and " + Jf + " are required in a valid action code URL.");
    L2(this, {apiKey: b2, operation: d, code: c, continueUrl: Yd(a, Lf) || null, languageCode: Yd(a, Mf) || null, tenantId: Yd(a, Nf) || null});
  }
  var Hf = "apiKey", If = "oobCode", Lf = "continueUrl", Mf = "languageCode", Jf = "mode", Nf = "tenantId", Kf = {recoverEmail: "RECOVER_EMAIL", resetPassword: "PASSWORD_RESET", revertSecondFactorAddition: zf, signIn: xf, verifyAndChangeEmail: yf, verifyEmail: "VERIFY_EMAIL"};
  function Of(a) {
    try {
      return new Gf(a);
    } catch (b2) {
      return null;
    }
  }
  function Pf(a) {
    var b2 = a[Qf];
    if (typeof b2 === "undefined")
      throw new t("missing-continue-uri");
    if (typeof b2 !== "string" || typeof b2 === "string" && !b2.length)
      throw new t("invalid-continue-uri");
    this.h = b2;
    this.b = this.a = null;
    this.g = false;
    var c = a[Rf];
    if (c && typeof c === "object") {
      b2 = c[Sf];
      var d = c[Tf];
      c = c[Uf];
      if (typeof b2 === "string" && b2.length) {
        this.a = b2;
        if (typeof d !== "undefined" && typeof d !== "boolean")
          throw new t("argument-error", Tf + " property must be a boolean when specified.");
        this.g = !!d;
        if (typeof c !== "undefined" && (typeof c !== "string" || typeof c === "string" && !c.length))
          throw new t("argument-error", Uf + " property must be a non empty string when specified.");
        this.b = c || null;
      } else {
        if (typeof b2 !== "undefined")
          throw new t("argument-error", Sf + " property must be a non empty string when specified.");
        if (typeof d !== "undefined" || typeof c !== "undefined")
          throw new t("missing-android-pkg-name");
      }
    } else if (typeof c !== "undefined")
      throw new t("argument-error", Rf + " property must be a non null object when specified.");
    this.f = null;
    if ((b2 = a[Vf]) && typeof b2 === "object")
      if (b2 = b2[Wf], typeof b2 === "string" && b2.length)
        this.f = b2;
      else {
        if (typeof b2 !== "undefined")
          throw new t("argument-error", Wf + " property must be a non empty string when specified.");
      }
    else if (typeof b2 !== "undefined")
      throw new t("argument-error", Vf + " property must be a non null object when specified.");
    b2 = a[Xf];
    if (typeof b2 !== "undefined" && typeof b2 !== "boolean")
      throw new t("argument-error", Xf + " property must be a boolean when specified.");
    this.c = !!b2;
    a = a[Yf];
    if (typeof a !== "undefined" && (typeof a !== "string" || typeof a === "string" && !a.length))
      throw new t("argument-error", Yf + " property must be a non empty string when specified.");
    this.i = a || null;
  }
  var Rf = "android", Yf = "dynamicLinkDomain", Xf = "handleCodeInApp", Vf = "iOS", Qf = "url", Tf = "installApp", Uf = "minimumVersion", Sf = "packageName", Wf = "bundleId";
  function Zf(a) {
    var b2 = {};
    b2.continueUrl = a.h;
    b2.canHandleCodeInApp = a.c;
    if (b2.androidPackageName = a.a)
      b2.androidMinimumVersion = a.b, b2.androidInstallApp = a.g;
    b2.iOSBundleId = a.f;
    b2.dynamicLinkDomain = a.i;
    for (var c in b2)
      b2[c] === null && delete b2[c];
    return b2;
  }
  function $f(a) {
    return Pa2(a, function(b2) {
      b2 = b2.toString(16);
      return 1 < b2.length ? b2 : "0" + b2;
    }).join("");
  }
  var ag = null;
  function bg(a) {
    var b2 = "";
    cg(a, function(c) {
      b2 += String.fromCharCode(c);
    });
    return b2;
  }
  function cg(a, b2) {
    function c(m) {
      for (; d < a.length; ) {
        var p2 = a.charAt(d++), v2 = ag[p2];
        if (v2 != null)
          return v2;
        if (!/^[\s\xa0]*$/.test(p2))
          throw Error("Unknown base64 encoding at char: " + p2);
      }
      return m;
    }
    dg();
    for (var d = 0; ; ) {
      var e = c(-1), f = c(0), g2 = c(64), h = c(64);
      if (h === 64 && e === -1)
        break;
      b2(e << 2 | f >> 4);
      g2 != 64 && (b2(f << 4 & 240 | g2 >> 2), h != 64 && b2(g2 << 6 & 192 | h));
    }
  }
  function dg() {
    if (!ag) {
      ag = {};
      for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b2 = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
        for (var d = a.concat(b2[c].split("")), e = 0; e < d.length; e++) {
          var f = d[e];
          ag[f] === void 0 && (ag[f] = e);
        }
    }
  }
  function eg(a) {
    var b2 = fg(a);
    if (!(b2 && b2.sub && b2.iss && b2.aud && b2.exp))
      throw Error("Invalid JWT");
    this.g = a;
    this.c = b2.exp;
    this.h = b2.sub;
    this.a = b2.provider_id || b2.firebase && b2.firebase.sign_in_provider || null;
    this.f = b2.firebase && b2.firebase.tenant || null;
    this.b = !!b2.is_anonymous || this.a == "anonymous";
  }
  eg.prototype.S = function() {
    return this.f;
  };
  eg.prototype.i = function() {
    return this.b;
  };
  eg.prototype.toString = function() {
    return this.g;
  };
  function gg(a) {
    try {
      return new eg(a);
    } catch (b2) {
      return null;
    }
  }
  function fg(a) {
    if (!a)
      return null;
    a = a.split(".");
    if (a.length != 3)
      return null;
    a = a[1];
    for (var b2 = (4 - a.length % 4) % 4, c = 0; c < b2; c++)
      a += ".";
    try {
      return JSON.parse(bg(a));
    } catch (d) {
    }
    return null;
  }
  var hg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "), ig = ["client_id", "response_type", "scope", "redirect_uri", "state"], jg = {kd: {Ha: "locale", ta: 700, sa: 600, ea: "facebook.com", Va: ig}, md: {Ha: null, ta: 500, sa: 750, ea: "github.com", Va: ig}, nd: {Ha: "hl", ta: 515, sa: 680, ea: "google.com", Va: ig}, td: {Ha: "lang", ta: 485, sa: 705, ea: "twitter.com", Va: hg}, gd: {Ha: "locale", ta: 640, sa: 600, ea: "apple.com", Va: []}};
  function kg(a) {
    for (var b2 in jg)
      if (jg[b2].ea == a)
        return jg[b2];
    return null;
  }
  function lg(a) {
    var b2 = {};
    b2["facebook.com"] = mg;
    b2["google.com"] = ng;
    b2["github.com"] = og;
    b2["twitter.com"] = pg;
    var c = a && a[qg];
    try {
      if (c)
        return b2[c] ? new b2[c](a) : new rg(a);
      if (typeof a[sg] !== "undefined")
        return new tg(a);
    } catch (d) {
    }
    return null;
  }
  var sg = "idToken", qg = "providerId";
  function tg(a) {
    var b2 = a[qg];
    if (!b2 && a[sg]) {
      var c = gg(a[sg]);
      c && c.a && (b2 = c.a);
    }
    if (!b2)
      throw Error("Invalid additional user info!");
    if (b2 == "anonymous" || b2 == "custom")
      b2 = null;
    c = false;
    typeof a.isNewUser !== "undefined" ? c = !!a.isNewUser : a.kind === "identitytoolkit#SignupNewUserResponse" && (c = true);
    K2(this, "providerId", b2);
    K2(this, "isNewUser", c);
  }
  function rg(a) {
    tg.call(this, a);
    a = Te2(a.rawUserInfo || "{}");
    K2(this, "profile", kf(a || {}));
  }
  r2(rg, tg);
  function mg(a) {
    rg.call(this, a);
    if (this.providerId != "facebook.com")
      throw Error("Invalid provider ID!");
  }
  r2(mg, rg);
  function og(a) {
    rg.call(this, a);
    if (this.providerId != "github.com")
      throw Error("Invalid provider ID!");
    K2(this, "username", this.profile && this.profile.login || null);
  }
  r2(og, rg);
  function ng(a) {
    rg.call(this, a);
    if (this.providerId != "google.com")
      throw Error("Invalid provider ID!");
  }
  r2(ng, rg);
  function pg(a) {
    rg.call(this, a);
    if (this.providerId != "twitter.com")
      throw Error("Invalid provider ID!");
    K2(this, "username", a.screenName || null);
  }
  r2(pg, rg);
  function ug(a) {
    var b2 = Zd(a), c = Yd(b2, "link"), d = Yd(Zd(c), "link");
    b2 = Yd(b2, "deep_link_id");
    return Yd(Zd(b2), "link") || b2 || d || c || a;
  }
  function vg(a, b2) {
    if (!a && !b2)
      throw new t("internal-error", "Internal assert: no raw session string available");
    if (a && b2)
      throw new t("internal-error", "Internal assert: unable to determine the session type");
    this.a = a || null;
    this.b = b2 || null;
    this.type = this.a ? wg : xg;
  }
  var wg = "enroll", xg = "signin";
  vg.prototype.Fa = function() {
    return this.a ? D2(this.a) : D2(this.b);
  };
  vg.prototype.v = function() {
    return this.type == wg ? {multiFactorSession: {idToken: this.a}} : {multiFactorSession: {pendingCredential: this.b}};
  };
  function yg() {
  }
  yg.prototype.ia = function() {
  };
  yg.prototype.b = function() {
  };
  yg.prototype.c = function() {
  };
  yg.prototype.v = function() {
  };
  function zg(a, b2) {
    return a.then(function(c) {
      if (c[Ag]) {
        var d = gg(c[Ag]);
        if (!d || b2 != d.h)
          throw new t("user-mismatch");
        return c;
      }
      throw new t("user-mismatch");
    }).o(function(c) {
      throw c && c.code && c.code == va2 + "user-not-found" ? new t("user-mismatch") : c;
    });
  }
  function Bg(a, b2) {
    if (b2)
      this.a = b2;
    else
      throw new t("internal-error", "failed to construct a credential");
    K2(this, "providerId", a);
    K2(this, "signInMethod", a);
  }
  Bg.prototype.ia = function(a) {
    return Cg(a, Dg(this));
  };
  Bg.prototype.b = function(a, b2) {
    var c = Dg(this);
    c.idToken = b2;
    return Eg(a, c);
  };
  Bg.prototype.c = function(a, b2) {
    return zg(Fg(a, Dg(this)), b2);
  };
  function Dg(a) {
    return {pendingToken: a.a, requestUri: "http://localhost"};
  }
  Bg.prototype.v = function() {
    return {providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a};
  };
  function Gg(a) {
    if (a && a.providerId && a.signInMethod && a.providerId.indexOf("saml.") == 0 && a.pendingToken)
      try {
        return new Bg(a.providerId, a.pendingToken);
      } catch (b2) {
      }
    return null;
  }
  function Hg(a, b2, c) {
    this.a = null;
    if (b2.idToken || b2.accessToken)
      b2.idToken && K2(this, "idToken", b2.idToken), b2.accessToken && K2(this, "accessToken", b2.accessToken), b2.nonce && !b2.pendingToken && K2(this, "nonce", b2.nonce), b2.pendingToken && (this.a = b2.pendingToken);
    else if (b2.oauthToken && b2.oauthTokenSecret)
      K2(this, "accessToken", b2.oauthToken), K2(this, "secret", b2.oauthTokenSecret);
    else
      throw new t("internal-error", "failed to construct a credential");
    K2(this, "providerId", a);
    K2(this, "signInMethod", c);
  }
  Hg.prototype.ia = function(a) {
    return Cg(a, Ig(this));
  };
  Hg.prototype.b = function(a, b2) {
    var c = Ig(this);
    c.idToken = b2;
    return Eg(a, c);
  };
  Hg.prototype.c = function(a, b2) {
    var c = Ig(this);
    return zg(Fg(a, c), b2);
  };
  function Ig(a) {
    var b2 = {};
    a.idToken && (b2.id_token = a.idToken);
    a.accessToken && (b2.access_token = a.accessToken);
    a.secret && (b2.oauth_token_secret = a.secret);
    b2.providerId = a.providerId;
    a.nonce && !a.a && (b2.nonce = a.nonce);
    b2 = {postBody: ce2(b2).toString(), requestUri: "http://localhost"};
    a.a && (delete b2.postBody, b2.pendingToken = a.a);
    return b2;
  }
  Hg.prototype.v = function() {
    var a = {providerId: this.providerId, signInMethod: this.signInMethod};
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    this.nonce && (a.nonce = this.nonce);
    this.a && (a.pendingToken = this.a);
    return a;
  };
  function Jg(a) {
    if (a && a.providerId && a.signInMethod) {
      var b2 = {idToken: a.oauthIdToken, accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken, oauthTokenSecret: a.oauthTokenSecret, oauthToken: a.oauthTokenSecret && a.oauthAccessToken, nonce: a.nonce, pendingToken: a.pendingToken};
      try {
        return new Hg(a.providerId, b2, a.signInMethod);
      } catch (c) {
      }
    }
    return null;
  }
  function Kg(a, b2) {
    this.Oc = b2 || [];
    L2(this, {providerId: a, isOAuthProvider: true});
    this.Fb = {};
    this.lb = (kg(a) || {}).Ha || null;
    this.kb = null;
  }
  Kg.prototype.Ia = function(a) {
    this.Fb = lb2(a);
    return this;
  };
  function Lg(a) {
    if (typeof a !== "string" || a.indexOf("saml.") != 0)
      throw new t("argument-error", 'SAML provider IDs must be prefixed with "saml."');
    Kg.call(this, a, []);
  }
  r2(Lg, Kg);
  function M2(a) {
    Kg.call(this, a, ig);
    this.a = [];
  }
  r2(M2, Kg);
  M2.prototype.Aa = function(a) {
    Ta2(this.a, a) || this.a.push(a);
    return this;
  };
  M2.prototype.Nb = function() {
    return Xa2(this.a);
  };
  M2.prototype.credential = function(a, b2) {
    var c;
    n2(a) ? c = {idToken: a.idToken || null, accessToken: a.accessToken || null, nonce: a.rawNonce || null} : c = {idToken: a || null, accessToken: b2 || null};
    if (!c.idToken && !c.accessToken)
      throw new t("argument-error", "credential failed: must provide the ID token and/or the access token.");
    return new Hg(this.providerId, c, this.providerId);
  };
  function Mg() {
    M2.call(this, "facebook.com");
  }
  r2(Mg, M2);
  K2(Mg, "PROVIDER_ID", "facebook.com");
  K2(Mg, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");
  function Ng(a) {
    if (!a)
      throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b2 = a;
    n2(a) && (b2 = a.accessToken);
    return new Mg().credential({accessToken: b2});
  }
  function Og() {
    M2.call(this, "github.com");
  }
  r2(Og, M2);
  K2(Og, "PROVIDER_ID", "github.com");
  K2(Og, "GITHUB_SIGN_IN_METHOD", "github.com");
  function Pg(a) {
    if (!a)
      throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b2 = a;
    n2(a) && (b2 = a.accessToken);
    return new Og().credential({accessToken: b2});
  }
  function Qg() {
    M2.call(this, "google.com");
    this.Aa("profile");
  }
  r2(Qg, M2);
  K2(Qg, "PROVIDER_ID", "google.com");
  K2(Qg, "GOOGLE_SIGN_IN_METHOD", "google.com");
  function Rg(a, b2) {
    var c = a;
    n2(a) && (c = a.idToken, b2 = a.accessToken);
    return new Qg().credential({idToken: c, accessToken: b2});
  }
  function Sg() {
    Kg.call(this, "twitter.com", hg);
  }
  r2(Sg, Kg);
  K2(Sg, "PROVIDER_ID", "twitter.com");
  K2(Sg, "TWITTER_SIGN_IN_METHOD", "twitter.com");
  function Tg(a, b2) {
    var c = a;
    n2(c) || (c = {oauthToken: a, oauthTokenSecret: b2});
    if (!c.oauthToken || !c.oauthTokenSecret)
      throw new t("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
    return new Hg("twitter.com", c, "twitter.com");
  }
  function Ug(a, b2, c) {
    this.a = a;
    this.f = b2;
    K2(this, "providerId", "password");
    K2(this, "signInMethod", c === Vg.EMAIL_LINK_SIGN_IN_METHOD ? Vg.EMAIL_LINK_SIGN_IN_METHOD : Vg.EMAIL_PASSWORD_SIGN_IN_METHOD);
  }
  Ug.prototype.ia = function(a) {
    return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? N2(a, Wg, {email: this.a, oobCode: this.f}) : N2(a, Xg, {email: this.a, password: this.f});
  };
  Ug.prototype.b = function(a, b2) {
    return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? N2(a, Yg, {idToken: b2, email: this.a, oobCode: this.f}) : N2(a, Zg, {idToken: b2, email: this.a, password: this.f});
  };
  Ug.prototype.c = function(a, b2) {
    return zg(this.ia(a), b2);
  };
  Ug.prototype.v = function() {
    return {email: this.a, password: this.f, signInMethod: this.signInMethod};
  };
  function $g(a) {
    return a && a.email && a.password ? new Ug(a.email, a.password, a.signInMethod) : null;
  }
  function Vg() {
    L2(this, {providerId: "password", isOAuthProvider: false});
  }
  function ah(a, b2) {
    b2 = bh(b2);
    if (!b2)
      throw new t("argument-error", "Invalid email link!");
    return new Ug(a, b2.code, Vg.EMAIL_LINK_SIGN_IN_METHOD);
  }
  function bh(a) {
    a = ug(a);
    return (a = Of(a)) && a.operation === xf ? a : null;
  }
  L2(Vg, {PROVIDER_ID: "password"});
  L2(Vg, {EMAIL_LINK_SIGN_IN_METHOD: "emailLink"});
  L2(Vg, {EMAIL_PASSWORD_SIGN_IN_METHOD: "password"});
  function ch(a) {
    if (!(a.bb && a.ab || a.Ja && a.da))
      throw new t("internal-error");
    this.a = a;
    K2(this, "providerId", "phone");
    this.ea = "phone";
    K2(this, "signInMethod", "phone");
  }
  ch.prototype.ia = function(a) {
    return a.cb(dh(this));
  };
  ch.prototype.b = function(a, b2) {
    var c = dh(this);
    c.idToken = b2;
    return N2(a, eh, c);
  };
  ch.prototype.c = function(a, b2) {
    var c = dh(this);
    c.operation = "REAUTH";
    a = N2(a, fh, c);
    return zg(a, b2);
  };
  ch.prototype.v = function() {
    var a = {providerId: "phone"};
    this.a.bb && (a.verificationId = this.a.bb);
    this.a.ab && (a.verificationCode = this.a.ab);
    this.a.Ja && (a.temporaryProof = this.a.Ja);
    this.a.da && (a.phoneNumber = this.a.da);
    return a;
  };
  function gh(a) {
    if (a && a.providerId === "phone" && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
      var b2 = {};
      w2(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(c) {
        a[c] && (b2[c] = a[c]);
      });
      return new ch(b2);
    }
    return null;
  }
  function dh(a) {
    return a.a.Ja && a.a.da ? {temporaryProof: a.a.Ja, phoneNumber: a.a.da} : {sessionInfo: a.a.bb, code: a.a.ab};
  }
  function hh(a) {
    try {
      this.a = a || firebase$1.auth();
    } catch (b2) {
      throw new t("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
    }
    L2(this, {providerId: "phone", isOAuthProvider: false});
  }
  hh.prototype.cb = function(a, b2) {
    var c = this.a.b;
    return D2(b2.verify()).then(function(d) {
      if (typeof d !== "string")
        throw new t("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
      switch (b2.type) {
        case "recaptcha":
          var e = n2(a) ? a.session : null, f = n2(a) ? a.phoneNumber : a, g2;
          e && e.type == wg ? g2 = e.Fa().then(function(h) {
            return ih(c, {idToken: h, phoneEnrollmentInfo: {phoneNumber: f, recaptchaToken: d}});
          }) : e && e.type == xg ? g2 = e.Fa().then(function(h) {
            return jh(c, {mfaPendingCredential: h, mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid, phoneSignInInfo: {recaptchaToken: d}});
          }) : g2 = kh(c, {phoneNumber: f, recaptchaToken: d});
          return g2.then(function(h) {
            typeof b2.reset === "function" && b2.reset();
            return h;
          }, function(h) {
            typeof b2.reset === "function" && b2.reset();
            throw h;
          });
        default:
          throw new t("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
      }
    });
  };
  function lh(a, b2) {
    if (!a)
      throw new t("missing-verification-id");
    if (!b2)
      throw new t("missing-verification-code");
    return new ch({bb: a, ab: b2});
  }
  L2(hh, {PROVIDER_ID: "phone"});
  L2(hh, {PHONE_SIGN_IN_METHOD: "phone"});
  function mh(a) {
    if (a.temporaryProof && a.phoneNumber)
      return new ch({Ja: a.temporaryProof, da: a.phoneNumber});
    var b2 = a && a.providerId;
    if (!b2 || b2 === "password")
      return null;
    var c = a && a.oauthAccessToken, d = a && a.oauthTokenSecret, e = a && a.nonce, f = a && a.oauthIdToken, g2 = a && a.pendingToken;
    try {
      switch (b2) {
        case "google.com":
          return Rg(f, c);
        case "facebook.com":
          return Ng(c);
        case "github.com":
          return Pg(c);
        case "twitter.com":
          return Tg(c, d);
        default:
          return c || d || f || g2 ? g2 ? b2.indexOf("saml.") == 0 ? new Bg(b2, g2) : new Hg(b2, {
            pendingToken: g2,
            idToken: a.oauthIdToken,
            accessToken: a.oauthAccessToken
          }, b2) : new M2(b2).credential({idToken: f, accessToken: c, rawNonce: e}) : null;
      }
    } catch (h) {
      return null;
    }
  }
  function nh(a) {
    if (!a.isOAuthProvider)
      throw new t("invalid-oauth-provider");
  }
  function oh(a, b2, c, d, e, f, g2) {
    this.c = a;
    this.b = b2 || null;
    this.g = c || null;
    this.f = d || null;
    this.i = f || null;
    this.h = g2 || null;
    this.a = e || null;
    if (this.g || this.a) {
      if (this.g && this.a)
        throw new t("invalid-auth-event");
      if (this.g && !this.f)
        throw new t("invalid-auth-event");
    } else
      throw new t("invalid-auth-event");
  }
  oh.prototype.getUid = function() {
    var a = [];
    a.push(this.c);
    this.b && a.push(this.b);
    this.f && a.push(this.f);
    this.h && a.push(this.h);
    return a.join("-");
  };
  oh.prototype.S = function() {
    return this.h;
  };
  oh.prototype.v = function() {
    return {type: this.c, eventId: this.b, urlResponse: this.g, sessionId: this.f, postBody: this.i, tenantId: this.h, error: this.a && this.a.v()};
  };
  function ph(a) {
    a = a || {};
    return a.type ? new oh(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && ya2(a.error), a.postBody, a.tenantId) : null;
  }
  function qh() {
    this.b = null;
    this.a = [];
  }
  var rh = null;
  function sh(a) {
    var b2 = rh;
    b2.a.push(a);
    b2.b || (b2.b = function(c) {
      for (var d = 0; d < b2.a.length; d++)
        b2.a[d](c);
    }, a = J2("universalLinks.subscribe", l), typeof a === "function" && a(null, b2.b));
  }
  function th(a) {
    var b2 = "unauthorized-domain", c = void 0, d = Zd(a);
    a = d.b;
    d = d.f;
    d == "chrome-extension" ? c = Nb2("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : d == "http" || d == "https" ? c = Nb2("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b2 = "operation-not-supported-in-this-environment";
    t.call(this, b2, c);
  }
  r2(th, t);
  function uh(a, b2, c) {
    t.call(this, a, c);
    a = b2 || {};
    a.Gb && K2(this, "email", a.Gb);
    a.da && K2(this, "phoneNumber", a.da);
    a.credential && K2(this, "credential", a.credential);
    a.Wb && K2(this, "tenantId", a.Wb);
  }
  r2(uh, t);
  uh.prototype.v = function() {
    var a = {code: this.code, message: this.message};
    this.email && (a.email = this.email);
    this.phoneNumber && (a.phoneNumber = this.phoneNumber);
    this.tenantId && (a.tenantId = this.tenantId);
    var b2 = this.credential && this.credential.v();
    b2 && z2(a, b2);
    return a;
  };
  uh.prototype.toJSON = function() {
    return this.v();
  };
  function vh(a) {
    if (a.code) {
      var b2 = a.code || "";
      b2.indexOf(va2) == 0 && (b2 = b2.substring(va2.length));
      var c = {credential: mh(a), Wb: a.tenantId};
      if (a.email)
        c.Gb = a.email;
      else if (a.phoneNumber)
        c.da = a.phoneNumber;
      else if (!c.credential)
        return new t(b2, a.message || void 0);
      return new uh(b2, c, a.message);
    }
    return null;
  }
  function wh() {
  }
  wh.prototype.c = null;
  function xh(a) {
    return a.c || (a.c = a.b());
  }
  var yh;
  function zh() {
  }
  r2(zh, wh);
  zh.prototype.a = function() {
    var a = Ah(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };
  zh.prototype.b = function() {
    var a = {};
    Ah(this) && (a[0] = true, a[1] = true);
    return a;
  };
  function Ah(a) {
    if (!a.f && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
      for (var b2 = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b2.length; c++) {
        var d = b2[c];
        try {
          return new ActiveXObject(d), a.f = d;
        } catch (e) {
        }
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.f;
  }
  yh = new zh();
  function Bh() {
  }
  r2(Bh, wh);
  Bh.prototype.a = function() {
    var a = new XMLHttpRequest();
    if ("withCredentials" in a)
      return a;
    if (typeof XDomainRequest != "undefined")
      return new Ch();
    throw Error("Unsupported browser");
  };
  Bh.prototype.b = function() {
    return {};
  };
  function Ch() {
    this.a = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseType = this.responseText = this.response = "";
    this.status = -1;
    this.statusText = "";
    this.a.onload = q2(this.oc, this);
    this.a.onerror = q2(this.Pb, this);
    this.a.onprogress = q2(this.pc, this);
    this.a.ontimeout = q2(this.tc, this);
  }
  k2 = Ch.prototype;
  k2.open = function(a, b2, c) {
    if (c != null && !c)
      throw Error("Only async requests are supported.");
    this.a.open(a, b2);
  };
  k2.send = function(a) {
    if (a)
      if (typeof a == "string")
        this.a.send(a);
      else
        throw Error("Only string data is supported");
    else
      this.a.send();
  };
  k2.abort = function() {
    this.a.abort();
  };
  k2.setRequestHeader = function() {
  };
  k2.getResponseHeader = function(a) {
    return a.toLowerCase() == "content-type" ? this.a.contentType : "";
  };
  k2.oc = function() {
    this.status = 200;
    this.response = this.responseText = this.a.responseText;
    Dh(this, 4);
  };
  k2.Pb = function() {
    this.status = 500;
    this.response = this.responseText = "";
    Dh(this, 4);
  };
  k2.tc = function() {
    this.Pb();
  };
  k2.pc = function() {
    this.status = 200;
    Dh(this, 1);
  };
  function Dh(a, b2) {
    a.readyState = b2;
    if (a.onreadystatechange)
      a.onreadystatechange();
  }
  k2.getAllResponseHeaders = function() {
    return "content-type: " + this.a.contentType;
  };
  function Eh(a, b2, c) {
    this.reset(a, b2, c, void 0, void 0);
  }
  Eh.prototype.a = null;
  Eh.prototype.reset = function(a, b2, c, d, e) {
    delete this.a;
  };
  function Gh(a) {
    this.f = a;
    this.b = this.c = this.a = null;
  }
  function Hh(a, b2) {
    this.name = a;
    this.value = b2;
  }
  Hh.prototype.toString = function() {
    return this.name;
  };
  var Ih = new Hh("SEVERE", 1e3), Jh = new Hh("WARNING", 900), Kh = new Hh("CONFIG", 700), Lh = new Hh("FINE", 500);
  function Mh(a) {
    if (a.c)
      return a.c;
    if (a.a)
      return Mh(a.a);
    Ea2("Root logger has no level set.");
    return null;
  }
  Gh.prototype.log = function(a, b2, c) {
    if (a.value >= Mh(this).value)
      for (na2(b2) && (b2 = b2()), a = new Eh(a, String(b2), this.f), c && (a.a = c), c = this; c; )
        c = c.a;
  };
  var Nh = {}, Oh = null;
  function Ph(a) {
    Oh || (Oh = new Gh(""), Nh[""] = Oh, Oh.c = Kh);
    var b2;
    if (!(b2 = Nh[a])) {
      b2 = new Gh(a);
      var c = a.lastIndexOf("."), d = a.substr(c + 1);
      c = Ph(a.substr(0, c));
      c.b || (c.b = {});
      c.b[d] = b2;
      b2.a = c;
      Nh[a] = b2;
    }
    return b2;
  }
  function Qh(a, b2) {
    a && a.log(Lh, b2, void 0);
  }
  function Rh(a) {
    this.f = a;
  }
  r2(Rh, wh);
  Rh.prototype.a = function() {
    return new Sh(this.f);
  };
  Rh.prototype.b = function(a) {
    return function() {
      return a;
    };
  }({});
  function Sh(a) {
    G2.call(this);
    this.s = a;
    this.readyState = Th;
    this.status = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.i = new Headers();
    this.b = null;
    this.m = "GET";
    this.g = "";
    this.a = false;
    this.h = Ph("goog.net.FetchXmlHttp");
    this.l = this.c = this.f = null;
  }
  r2(Sh, G2);
  var Th = 0;
  k2 = Sh.prototype;
  k2.open = function(a, b2) {
    if (this.readyState != Th)
      throw this.abort(), Error("Error reopening a connection");
    this.m = a;
    this.g = b2;
    this.readyState = 1;
    Uh(this);
  };
  k2.send = function(a) {
    if (this.readyState != 1)
      throw this.abort(), Error("need to call open() first. ");
    this.a = true;
    var b2 = {headers: this.i, method: this.m, credentials: void 0, cache: void 0};
    a && (b2.body = a);
    this.s.fetch(new Request(this.g, b2)).then(this.sc.bind(this), this.Sa.bind(this));
  };
  k2.abort = function() {
    this.response = this.responseText = "";
    this.i = new Headers();
    this.status = 0;
    this.c && this.c.cancel("Request was aborted.");
    1 <= this.readyState && this.a && this.readyState != 4 && (this.a = false, Vh(this, false));
    this.readyState = Th;
  };
  k2.sc = function(a) {
    this.a && (this.f = a, this.b || (this.b = a.headers, this.readyState = 2, Uh(this)), this.a && (this.readyState = 3, Uh(this), this.a && (this.responseType === "arraybuffer" ? a.arrayBuffer().then(this.qc.bind(this), this.Sa.bind(this)) : typeof l.ReadableStream !== "undefined" && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.l = new TextDecoder(), Wh(this)) : a.text().then(this.rc.bind(this), this.Sa.bind(this)))));
  };
  function Wh(a) {
    a.c.read().then(a.nc.bind(a)).catch(a.Sa.bind(a));
  }
  k2.nc = function(a) {
    if (this.a) {
      var b2 = this.l.decode(a.value ? a.value : new Uint8Array(0), {stream: !a.done});
      b2 && (this.response = this.responseText += b2);
      a.done ? Vh(this, true) : Uh(this);
      this.readyState == 3 && Wh(this);
    }
  };
  k2.rc = function(a) {
    this.a && (this.response = this.responseText = a, Vh(this, true));
  };
  k2.qc = function(a) {
    this.a && (this.response = a, Vh(this, true));
  };
  k2.Sa = function(a) {
    var b2 = this.h;
    b2 && b2.log(Jh, "Failed to fetch url " + this.g, a instanceof Error ? a : Error(a));
    this.a && Vh(this, true);
  };
  function Vh(a, b2) {
    b2 && a.f && (a.status = a.f.status, a.statusText = a.f.statusText);
    a.readyState = 4;
    a.f = null;
    a.c = null;
    a.l = null;
    Uh(a);
  }
  k2.setRequestHeader = function(a, b2) {
    this.i.append(a, b2);
  };
  k2.getResponseHeader = function(a) {
    return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.h) && a.log(Jh, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "");
  };
  k2.getAllResponseHeaders = function() {
    if (!this.b) {
      var a = this.h;
      a && a.log(Jh, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0);
      return "";
    }
    a = [];
    for (var b2 = this.b.entries(), c = b2.next(); !c.done; )
      c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
    return a.join("\r\n");
  };
  function Uh(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  function Xh(a) {
    G2.call(this);
    this.headers = new Fd2();
    this.D = a || null;
    this.c = false;
    this.B = this.a = null;
    this.h = this.P = this.l = "";
    this.f = this.O = this.i = this.N = false;
    this.g = 0;
    this.s = null;
    this.m = Yh;
    this.w = this.R = false;
  }
  r2(Xh, G2);
  var Yh = "";
  Xh.prototype.b = Ph("goog.net.XhrIo");
  var Zh = /^https?$/i, $h = ["POST", "PUT"];
  function ai2(a, b2, c, d, e) {
    if (a.a)
      throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b2);
    c = c ? c.toUpperCase() : "GET";
    a.l = b2;
    a.h = "";
    a.P = c;
    a.N = false;
    a.c = true;
    a.a = a.D ? a.D.a() : yh.a();
    a.B = a.D ? xh(a.D) : xh(yh);
    a.a.onreadystatechange = q2(a.Sb, a);
    try {
      Qh(a.b, bi2(a, "Opening Xhr")), a.O = true, a.a.open(c, String(b2), true), a.O = false;
    } catch (g2) {
      Qh(a.b, bi2(a, "Error opening Xhr: " + g2.message));
      ci2(a, g2);
      return;
    }
    b2 = d || "";
    var f = new Fd2(a.headers);
    e && Ed2(e, function(g2, h) {
      f.set(h, g2);
    });
    e = Ra2(f.X());
    d = l.FormData && b2 instanceof l.FormData;
    !Ta2($h, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(g2, h) {
      this.a.setRequestHeader(h, g2);
    }, a);
    a.m && (a.a.responseType = a.m);
    "withCredentials" in a.a && a.a.withCredentials !== a.R && (a.a.withCredentials = a.R);
    try {
      di2(a), 0 < a.g && (a.w = ei2(a.a), Qh(a.b, bi2(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.w)), a.w ? (a.a.timeout = a.g, a.a.ontimeout = q2(a.Ka, a)) : a.s = Ad2(a.Ka, a.g, a)), Qh(a.b, bi2(a, "Sending request")), a.i = true, a.a.send(b2), a.i = false;
    } catch (g2) {
      Qh(a.b, bi2(a, "Send error: " + g2.message)), ci2(a, g2);
    }
  }
  function ei2(a) {
    return Tb2 && cc2(9) && typeof a.timeout === "number" && a.ontimeout !== void 0;
  }
  function Sa2(a) {
    return a.toLowerCase() == "content-type";
  }
  k2 = Xh.prototype;
  k2.Ka = function() {
    typeof ha2 != "undefined" && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Qh(this.b, bi2(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
  };
  function ci2(a, b2) {
    a.c = false;
    a.a && (a.f = true, a.a.abort(), a.f = false);
    a.h = b2;
    fi2(a);
    gi2(a);
  }
  function fi2(a) {
    a.N || (a.N = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  }
  k2.abort = function() {
    this.a && this.c && (Qh(this.b, bi2(this, "Aborting")), this.c = false, this.f = true, this.a.abort(), this.f = false, this.dispatchEvent("complete"), this.dispatchEvent("abort"), gi2(this));
  };
  k2.Ba = function() {
    this.a && (this.c && (this.c = false, this.f = true, this.a.abort(), this.f = false), gi2(this, true));
    Xh.Za.Ba.call(this);
  };
  k2.Sb = function() {
    this.wa || (this.O || this.i || this.f ? hi2(this) : this.Hc());
  };
  k2.Hc = function() {
    hi2(this);
  };
  function hi2(a) {
    if (a.c && typeof ha2 != "undefined") {
      if (a.B[1] && ii2(a) == 4 && ji2(a) == 2)
        Qh(a.b, bi2(a, "Local request error detected and ignored"));
      else if (a.i && ii2(a) == 4)
        Ad2(a.Sb, 0, a);
      else if (a.dispatchEvent("readystatechange"), ii2(a) == 4) {
        Qh(a.b, bi2(a, "Request complete"));
        a.c = false;
        try {
          var b2 = ji2(a);
          a:
            switch (b2) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = true;
                break a;
              default:
                c = false;
            }
          var d;
          if (!(d = c)) {
            var e;
            if (e = b2 === 0) {
              var f = String(a.l).match(Id2)[1] || null;
              if (!f && l.self && l.self.location) {
                var g2 = l.self.location.protocol;
                f = g2.substr(0, g2.length - 1);
              }
              e = !Zh.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          if (d)
            a.dispatchEvent("complete"), a.dispatchEvent("success");
          else {
            try {
              var h = 2 < ii2(a) ? a.a.statusText : "";
            } catch (m) {
              Qh(a.b, "Can not get status: " + m.message), h = "";
            }
            a.h = h + " [" + ji2(a) + "]";
            fi2(a);
          }
        } finally {
          gi2(a);
        }
      }
    }
  }
  function gi2(a, b2) {
    if (a.a) {
      di2(a);
      var c = a.a, d = a.B[0] ? ka2 : null;
      a.a = null;
      a.B = null;
      b2 || a.dispatchEvent("ready");
      try {
        c.onreadystatechange = d;
      } catch (e) {
        (a = a.b) && a.log(Ih, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
      }
    }
  }
  function di2(a) {
    a.a && a.w && (a.a.ontimeout = null);
    a.s && (l.clearTimeout(a.s), a.s = null);
  }
  function ii2(a) {
    return a.a ? a.a.readyState : 0;
  }
  function ji2(a) {
    try {
      return 2 < ii2(a) ? a.a.status : -1;
    } catch (b2) {
      return -1;
    }
  }
  function ki2(a) {
    try {
      return a.a ? a.a.responseText : "";
    } catch (b2) {
      return Qh(a.b, "Can not get responseText: " + b2.message), "";
    }
  }
  k2.getResponse = function() {
    try {
      if (!this.a)
        return null;
      if ("response" in this.a)
        return this.a.response;
      switch (this.m) {
        case Yh:
        case "text":
          return this.a.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in this.a)
            return this.a.mozResponseArrayBuffer;
      }
      var a = this.b;
      a && a.log(Ih, "Response type " + this.m + " is not supported on this browser", void 0);
      return null;
    } catch (b2) {
      return Qh(this.b, "Can not get response: " + b2.message), null;
    }
  };
  function bi2(a, b2) {
    return b2 + " [" + a.P + " " + a.l + " " + ji2(a) + "]";
  }
  function li2(a) {
    var b2 = mi2;
    this.g = [];
    this.w = b2;
    this.s = a || null;
    this.f = this.a = false;
    this.c = void 0;
    this.u = this.B = this.i = false;
    this.h = 0;
    this.b = null;
    this.l = 0;
  }
  li2.prototype.cancel = function(a) {
    if (this.a)
      this.c instanceof li2 && this.c.cancel();
    else {
      if (this.b) {
        var b2 = this.b;
        delete this.b;
        a ? b2.cancel(a) : (b2.l--, 0 >= b2.l && b2.cancel());
      }
      this.w ? this.w.call(this.s, this) : this.u = true;
      this.a || (a = new ni2(this), oi2(this), pi2(this, false, a));
    }
  };
  li2.prototype.m = function(a, b2) {
    this.i = false;
    pi2(this, a, b2);
  };
  function pi2(a, b2, c) {
    a.a = true;
    a.c = c;
    a.f = !b2;
    qi2(a);
  }
  function oi2(a) {
    if (a.a) {
      if (!a.u)
        throw new ri2(a);
      a.u = false;
    }
  }
  function si2(a, b2) {
    ti2(a, null, b2, void 0);
  }
  function ti2(a, b2, c, d) {
    a.g.push([b2, c, d]);
    a.a && qi2(a);
  }
  li2.prototype.then = function(a, b2, c) {
    var d, e, f = new B2(function(g2, h) {
      d = g2;
      e = h;
    });
    ti2(this, d, function(g2) {
      g2 instanceof ni2 ? f.cancel() : e(g2);
    });
    return f.then(a, b2, c);
  };
  li2.prototype.$goog_Thenable = true;
  function ui2(a) {
    return Qa2(a.g, function(b2) {
      return na2(b2[1]);
    });
  }
  function qi2(a) {
    if (a.h && a.a && ui2(a)) {
      var b2 = a.h, c = vi2[b2];
      c && (l.clearTimeout(c.a), delete vi2[b2]);
      a.h = 0;
    }
    a.b && (a.b.l--, delete a.b);
    b2 = a.c;
    for (var d = c = false; a.g.length && !a.i; ) {
      var e = a.g.shift(), f = e[0], g2 = e[1];
      e = e[2];
      if (f = a.f ? g2 : f)
        try {
          var h = f.call(e || a.s, b2);
          h !== void 0 && (a.f = a.f && (h == b2 || h instanceof Error), a.c = b2 = h);
          if (Ca2(b2) || typeof l.Promise === "function" && b2 instanceof l.Promise)
            d = true, a.i = true;
        } catch (m) {
          b2 = m, a.f = true, ui2(a) || (c = true);
        }
    }
    a.c = b2;
    d && (h = q2(a.m, a, true), d = q2(a.m, a, false), b2 instanceof li2 ? (ti2(b2, h, d), b2.B = true) : b2.then(h, d));
    c && (b2 = new wi2(b2), vi2[b2.a] = b2, a.h = b2.a);
  }
  function ri2() {
    u2.call(this);
  }
  r2(ri2, u2);
  ri2.prototype.message = "Deferred has already fired";
  ri2.prototype.name = "AlreadyCalledError";
  function ni2() {
    u2.call(this);
  }
  r2(ni2, u2);
  ni2.prototype.message = "Deferred was canceled";
  ni2.prototype.name = "CanceledError";
  function wi2(a) {
    this.a = l.setTimeout(q2(this.c, this), 0);
    this.b = a;
  }
  wi2.prototype.c = function() {
    delete vi2[this.a];
    throw this.b;
  };
  var vi2 = {};
  function xi2(a) {
    var c = document, d = wb2(a).toString(), e = jc2(document, "SCRIPT"), f = {Tb: e, Ka: void 0}, g2 = new li2(f), h = null, m = 5e3;
    h = window.setTimeout(function() {
      yi2(e, true);
      var p2 = new zi2(Ai2, "Timeout reached for loading script " + d);
      oi2(g2);
      pi2(g2, false, p2);
    }, m), f.Ka = h;
    e.onload = e.onreadystatechange = function() {
      e.readyState && e.readyState != "loaded" && e.readyState != "complete" || (yi2(e, false, h), oi2(g2), pi2(g2, true, null));
    };
    e.onerror = function() {
      yi2(e, true, h);
      var p2 = new zi2(Bi2, "Error while loading script " + d);
      oi2(g2);
      pi2(g2, false, p2);
    };
    f = {};
    z2(f, {type: "text/javascript", charset: "UTF-8"});
    gc2(e, f);
    Mb2(e, a);
    Ci2(c).appendChild(e);
    return g2;
  }
  function Ci2(a) {
    var b2;
    return (b2 = (a || document).getElementsByTagName("HEAD")) && b2.length != 0 ? b2[0] : a.documentElement;
  }
  function mi2() {
    if (this && this.Tb) {
      var a = this.Tb;
      a && a.tagName == "SCRIPT" && yi2(a, true, this.Ka);
    }
  }
  function yi2(a, b2, c) {
    c != null && l.clearTimeout(c);
    a.onload = ka2;
    a.onerror = ka2;
    a.onreadystatechange = ka2;
    b2 && window.setTimeout(function() {
      a && a.parentNode && a.parentNode.removeChild(a);
    }, 0);
  }
  var Bi2 = 0, Ai2 = 1;
  function zi2(a, b2) {
    var c = "Jsloader error (code #" + a + ")";
    b2 && (c += ": " + b2);
    u2.call(this, c);
    this.code = a;
  }
  r2(zi2, u2);
  function Di2(a) {
    this.f = a;
  }
  r2(Di2, wh);
  Di2.prototype.a = function() {
    return new this.f();
  };
  Di2.prototype.b = function() {
    return {};
  };
  function Ei2(a, b2, c) {
    this.c = a;
    a = b2 || {};
    this.u = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
    this.m = a.secureTokenTimeout || Fi2;
    this.g = lb2(a.secureTokenHeaders || Gi2);
    this.h = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.l = a.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
    this.i = a.firebaseTimeout || Hi2;
    this.a = lb2(a.firebaseHeaders || Ii2);
    c && (this.a["X-Client-Version"] = c, this.g["X-Client-Version"] = c);
    c = He2() == "Node";
    c = l.XMLHttpRequest || c && firebase$1.INTERNAL.node && firebase$1.INTERNAL.node.XMLHttpRequest;
    if (!c && !Ge2())
      throw new t("internal-error", "The XMLHttpRequest compatibility library was not found.");
    this.f = void 0;
    Ge2() ? this.f = new Rh(self) : Ie2() ? this.f = new Di2(c) : this.f = new Bh();
    this.b = null;
  }
  var Ji2, Ag = "idToken", Fi2 = new We2(3e4, 6e4), Gi2 = {"Content-Type": "application/x-www-form-urlencoded"}, Hi2 = new We2(3e4, 6e4), Ii2 = {"Content-Type": "application/json"};
  function Ki2(a, b2) {
    b2 ? a.a["X-Firebase-Locale"] = b2 : delete a.a["X-Firebase-Locale"];
  }
  function Li2(a, b2) {
    b2 ? (a.a["X-Client-Version"] = b2, a.g["X-Client-Version"] = b2) : (delete a.a["X-Client-Version"], delete a.g["X-Client-Version"]);
  }
  Ei2.prototype.S = function() {
    return this.b;
  };
  function Mi2(a, b2, c, d, e, f, g2) {
    re2() || Ge2() ? a = q2(a.w, a) : (Ji2 || (Ji2 = new B2(function(h, m) {
      Ni2(h, m);
    })), a = q2(a.s, a));
    a(b2, c, d, e, f, g2);
  }
  Ei2.prototype.w = function(a, b2, c, d, e, f) {
    if (Ge2() && (typeof l.fetch === "undefined" || typeof l.Headers === "undefined" || typeof l.Request === "undefined"))
      throw new t("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
    var g2 = new Xh(this.f);
    if (f) {
      g2.g = Math.max(0, f);
      var h = setTimeout(function() {
        g2.dispatchEvent("timeout");
      }, f);
    }
    md2(g2, "complete", function() {
      h && clearTimeout(h);
      var m = null;
      try {
        m = JSON.parse(ki2(this)) || null;
      } catch (p2) {
        m = null;
      }
      b2 && b2(m);
    });
    sd2(g2, "ready", function() {
      h && clearTimeout(h);
      Tc2(this);
    });
    sd2(g2, "timeout", function() {
      h && clearTimeout(h);
      Tc2(this);
      b2 && b2(null);
    });
    ai2(g2, a, c, d, e);
  };
  var Oi2 = new ob2(pb2, "https://apis.google.com/js/client.js?onload=%{onload}"), Pi2 = "__fcb" + Math.floor(1e6 * Math.random()).toString();
  function Ni2(a, b2) {
    if (((window.gapi || {}).client || {}).request)
      a();
    else {
      l[Pi2] = function() {
        ((window.gapi || {}).client || {}).request ? a() : b2(Error("CORS_UNSUPPORTED"));
      };
      var c = xb2(Oi2, {onload: Pi2});
      si2(xi2(c), function() {
        b2(Error("CORS_UNSUPPORTED"));
      });
    }
  }
  Ei2.prototype.s = function(a, b2, c, d, e) {
    var f = this;
    Ji2.then(function() {
      window.gapi.client.setApiKey(f.c);
      var g2 = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({path: a, method: c, body: d, headers: e, authType: "none", callback: function(h) {
        window.gapi.auth.setToken(g2);
        b2 && b2(h);
      }});
    }).o(function(g2) {
      b2 && b2({error: {message: g2 && g2.message || "CORS_UNSUPPORTED"}});
    });
  };
  function Qi2(a, b2) {
    return new B2(function(c, d) {
      b2.grant_type == "refresh_token" && b2.refresh_token || b2.grant_type == "authorization_code" && b2.code ? Mi2(a, a.u + "?key=" + encodeURIComponent(a.c), function(e) {
        e ? e.error ? d(Ri2(e)) : e.access_token && e.refresh_token ? c(e) : d(new t("internal-error")) : d(new t("network-request-failed"));
      }, "POST", ce2(b2).toString(), a.g, a.m.get()) : d(new t("internal-error"));
    });
  }
  function Si2(a, b2, c, d, e, f, g2) {
    var h = Zd(b2 + c);
    H2(h, "key", a.c);
    g2 && H2(h, "cb", ua2().toString());
    var m = d == "GET";
    if (m)
      for (var p2 in e)
        e.hasOwnProperty(p2) && H2(h, p2, e[p2]);
    return new B2(function(v2, C2) {
      Mi2(a, h.toString(), function(A2) {
        A2 ? A2.error ? C2(Ri2(A2, f || {})) : v2(A2) : C2(new t("network-request-failed"));
      }, d, m ? void 0 : he2(Se2(e)), a.a, a.i.get());
    });
  }
  function Ti2(a) {
    a = a.email;
    if (typeof a !== "string" || !Ae2.test(a))
      throw new t("invalid-email");
  }
  function Ui2(a) {
    "email" in a && Ti2(a);
  }
  function Vi2(a, b2) {
    return N2(a, Wi2, {identifier: b2, continueUri: Pe2() ? oe2() : "http://localhost"}).then(function(c) {
      return c.signinMethods || [];
    });
  }
  function Xi2(a) {
    return N2(a, Yi2, {}).then(function(b2) {
      return b2.authorizedDomains || [];
    });
  }
  function O2(a) {
    if (!a[Ag]) {
      if (a.mfaPendingCredential)
        throw new t("multi-factor-auth-required", null, lb2(a));
      throw new t("internal-error");
    }
  }
  function Zi2(a) {
    if (a.phoneNumber || a.temporaryProof) {
      if (!a.phoneNumber || !a.temporaryProof)
        throw new t("internal-error");
    } else {
      if (!a.sessionInfo)
        throw new t("missing-verification-id");
      if (!a.code)
        throw new t("missing-verification-code");
    }
  }
  Ei2.prototype.vb = function() {
    return N2(this, $i2, {});
  };
  Ei2.prototype.xb = function(a, b2) {
    return N2(this, aj, {idToken: a, email: b2});
  };
  Ei2.prototype.yb = function(a, b2) {
    return N2(this, Zg, {idToken: a, password: b2});
  };
  var bj = {displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL"};
  k2 = Ei2.prototype;
  k2.zb = function(a, b2) {
    var c = {idToken: a}, d = [];
    jb2(bj, function(e, f) {
      var g2 = b2[f];
      g2 === null ? d.push(e) : f in b2 && (c[f] = g2);
    });
    d.length && (c.deleteAttribute = d);
    return N2(this, aj, c);
  };
  k2.rb = function(a, b2) {
    a = {requestType: "PASSWORD_RESET", email: a};
    z2(a, b2);
    return N2(this, cj, a);
  };
  k2.sb = function(a, b2) {
    a = {requestType: "EMAIL_SIGNIN", email: a};
    z2(a, b2);
    return N2(this, dj, a);
  };
  k2.qb = function(a, b2) {
    a = {requestType: "VERIFY_EMAIL", idToken: a};
    z2(a, b2);
    return N2(this, ej, a);
  };
  k2.Ab = function(a, b2, c) {
    a = {requestType: "VERIFY_AND_CHANGE_EMAIL", idToken: a, newEmail: b2};
    z2(a, c);
    return N2(this, fj, a);
  };
  function kh(a, b2) {
    return N2(a, gj, b2);
  }
  k2.cb = function(a) {
    return N2(this, hj, a);
  };
  function ih(a, b2) {
    return N2(a, ij, b2).then(function(c) {
      return c.phoneSessionInfo.sessionInfo;
    });
  }
  function jj(a) {
    if (!a.phoneVerificationInfo)
      throw new t("internal-error");
    if (!a.phoneVerificationInfo.sessionInfo)
      throw new t("missing-verification-id");
    if (!a.phoneVerificationInfo.code)
      throw new t("missing-verification-code");
  }
  function jh(a, b2) {
    return N2(a, kj, b2).then(function(c) {
      return c.phoneResponseInfo.sessionInfo;
    });
  }
  function lj(a, b2, c) {
    return N2(a, mj, {idToken: b2, deleteProvider: c});
  }
  function nj(a) {
    if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken)
      throw new t("internal-error");
  }
  function oj(a, b2) {
    b2.oauthIdToken && b2.providerId && b2.providerId.indexOf("oidc.") == 0 && !b2.pendingToken && (a.sessionId ? b2.nonce = a.sessionId : a.postBody && (a = new Qd(a.postBody), ge2(a, "nonce") && (b2.nonce = a.get("nonce"))));
    return b2;
  }
  function pj(a) {
    var b2 = null;
    a.needConfirmation ? (a.code = "account-exists-with-different-credential", b2 = vh(a)) : a.errorMessage == "FEDERATED_USER_ID_ALREADY_LINKED" ? (a.code = "credential-already-in-use", b2 = vh(a)) : a.errorMessage == "EMAIL_EXISTS" ? (a.code = "email-already-in-use", b2 = vh(a)) : a.errorMessage && (b2 = qj(a.errorMessage));
    if (b2)
      throw b2;
    O2(a);
  }
  function Cg(a, b2) {
    b2.returnIdpCredential = true;
    return N2(a, rj, b2);
  }
  function Eg(a, b2) {
    b2.returnIdpCredential = true;
    return N2(a, sj, b2);
  }
  function Fg(a, b2) {
    b2.returnIdpCredential = true;
    b2.autoCreate = false;
    return N2(a, tj, b2);
  }
  function uj(a) {
    if (!a.oobCode)
      throw new t("invalid-action-code");
  }
  k2.jb = function(a, b2) {
    return N2(this, vj, {oobCode: a, newPassword: b2});
  };
  k2.Pa = function(a) {
    return N2(this, wj, {oobCode: a});
  };
  k2.fb = function(a) {
    return N2(this, xj, {oobCode: a});
  };
  var xj = {endpoint: "setAccountInfo", A: uj, Y: "email", C: true}, wj = {endpoint: "resetPassword", A: uj, G: function(a) {
    var b2 = a.requestType;
    if (!b2 || !a.email && b2 != "EMAIL_SIGNIN" && b2 != "VERIFY_AND_CHANGE_EMAIL")
      throw new t("internal-error");
  }, C: true}, yj = {endpoint: "signupNewUser", A: function(a) {
    Ti2(a);
    if (!a.password)
      throw new t("weak-password");
  }, G: O2, U: true, C: true}, Wi2 = {endpoint: "createAuthUri", C: true}, zj = {endpoint: "deleteAccount", M: ["idToken"]}, mj = {endpoint: "setAccountInfo", M: ["idToken", "deleteProvider"], A: function(a) {
    if (la2(a.deleteProvider) != "array")
      throw new t("internal-error");
  }}, Wg = {endpoint: "emailLinkSignin", M: ["email", "oobCode"], A: Ti2, G: O2, U: true, C: true}, Yg = {endpoint: "emailLinkSignin", M: ["idToken", "email", "oobCode"], A: Ti2, G: O2, U: true}, Aj = {endpoint: "accounts/mfaEnrollment:finalize", M: ["idToken", "phoneVerificationInfo"], A: jj, G: O2, C: true, La: true}, Bj = {endpoint: "accounts/mfaSignIn:finalize", M: ["mfaPendingCredential", "phoneVerificationInfo"], A: jj, G: O2, C: true, La: true}, Cj = {endpoint: "getAccountInfo"}, dj = {
    endpoint: "getOobConfirmationCode",
    M: ["requestType"],
    A: function(a) {
      if (a.requestType != "EMAIL_SIGNIN")
        throw new t("internal-error");
      Ti2(a);
    },
    Y: "email",
    C: true
  }, ej = {endpoint: "getOobConfirmationCode", M: ["idToken", "requestType"], A: function(a) {
    if (a.requestType != "VERIFY_EMAIL")
      throw new t("internal-error");
  }, Y: "email", C: true}, fj = {endpoint: "getOobConfirmationCode", M: ["idToken", "newEmail", "requestType"], A: function(a) {
    if (a.requestType != "VERIFY_AND_CHANGE_EMAIL")
      throw new t("internal-error");
  }, Y: "email", C: true}, cj = {endpoint: "getOobConfirmationCode", M: ["requestType"], A: function(a) {
    if (a.requestType != "PASSWORD_RESET")
      throw new t("internal-error");
    Ti2(a);
  }, Y: "email", C: true}, Yi2 = {hb: true, endpoint: "getProjectConfig", Rb: "GET"}, Dj = {hb: true, endpoint: "getRecaptchaParam", Rb: "GET", G: function(a) {
    if (!a.recaptchaSiteKey)
      throw new t("internal-error");
  }}, vj = {endpoint: "resetPassword", A: uj, Y: "email", C: true}, gj = {endpoint: "sendVerificationCode", M: ["phoneNumber", "recaptchaToken"], Y: "sessionInfo", C: true}, aj = {endpoint: "setAccountInfo", M: ["idToken"], A: Ui2, U: true}, Zg = {endpoint: "setAccountInfo", M: ["idToken"], A: function(a) {
    Ui2(a);
    if (!a.password)
      throw new t("weak-password");
  }, G: O2, U: true}, $i2 = {endpoint: "signupNewUser", G: O2, U: true, C: true}, ij = {endpoint: "accounts/mfaEnrollment:start", M: ["idToken", "phoneEnrollmentInfo"], A: function(a) {
    if (!a.phoneEnrollmentInfo)
      throw new t("internal-error");
    if (!a.phoneEnrollmentInfo.phoneNumber)
      throw new t("missing-phone-number");
    if (!a.phoneEnrollmentInfo.recaptchaToken)
      throw new t("missing-app-credential");
  }, G: function(a) {
    if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
      throw new t("internal-error");
  }, C: true, La: true}, kj = {
    endpoint: "accounts/mfaSignIn:start",
    M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
    A: function(a) {
      if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
        throw new t("missing-app-credential");
    },
    G: function(a) {
      if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
        throw new t("internal-error");
    },
    C: true,
    La: true
  }, rj = {endpoint: "verifyAssertion", A: nj, Wa: oj, G: pj, U: true, C: true}, tj = {endpoint: "verifyAssertion", A: nj, Wa: oj, G: function(a) {
    if (a.errorMessage && a.errorMessage == "USER_NOT_FOUND")
      throw new t("user-not-found");
    if (a.errorMessage)
      throw qj(a.errorMessage);
    O2(a);
  }, U: true, C: true}, sj = {endpoint: "verifyAssertion", A: function(a) {
    nj(a);
    if (!a.idToken)
      throw new t("internal-error");
  }, Wa: oj, G: pj, U: true}, Ej = {endpoint: "verifyCustomToken", A: function(a) {
    if (!a.token)
      throw new t("invalid-custom-token");
  }, G: O2, U: true, C: true}, Xg = {endpoint: "verifyPassword", A: function(a) {
    Ti2(a);
    if (!a.password)
      throw new t("wrong-password");
  }, G: O2, U: true, C: true}, hj = {endpoint: "verifyPhoneNumber", A: Zi2, G: O2, C: true}, eh = {
    endpoint: "verifyPhoneNumber",
    A: function(a) {
      if (!a.idToken)
        throw new t("internal-error");
      Zi2(a);
    },
    G: function(a) {
      if (a.temporaryProof)
        throw a.code = "credential-already-in-use", vh(a);
      O2(a);
    }
  }, fh = {Eb: {USER_NOT_FOUND: "user-not-found"}, endpoint: "verifyPhoneNumber", A: Zi2, G: O2, C: true}, Fj = {endpoint: "accounts/mfaEnrollment:withdraw", M: ["idToken", "mfaEnrollmentId"], G: function(a) {
    if (!!a[Ag] ^ !!a.refreshToken)
      throw new t("internal-error");
  }, C: true, La: true};
  function N2(a, b2, c) {
    if (!jf(c, b2.M))
      return E2(new t("internal-error"));
    var d = !!b2.La, e = b2.Rb || "POST", f;
    return D2(c).then(b2.A).then(function() {
      b2.U && (c.returnSecureToken = true);
      b2.C && a.b && typeof c.tenantId === "undefined" && (c.tenantId = a.b);
      return d ? Si2(a, a.l, b2.endpoint, e, c, b2.Eb, b2.hb || false) : Si2(a, a.h, b2.endpoint, e, c, b2.Eb, b2.hb || false);
    }).then(function(g2) {
      f = g2;
      return b2.Wa ? b2.Wa(c, f) : f;
    }).then(b2.G).then(function() {
      if (!b2.Y)
        return f;
      if (!(b2.Y in f))
        throw new t("internal-error");
      return f[b2.Y];
    });
  }
  function qj(a) {
    return Ri2({error: {errors: [{message: a}], code: 400, message: a}});
  }
  function Ri2(a, b2) {
    var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
    var d = {keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized"};
    if (c = d[c] ? new t(d[c]) : null)
      return c;
    c = a.error && a.error.message || "";
    d = {
      INVALID_CUSTOM_TOKEN: "invalid-custom-token",
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_EMAIL: "invalid-email",
      INVALID_PASSWORD: "wrong-password",
      USER_DISABLED: "user-disabled",
      MISSING_PASSWORD: "internal-error",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
      INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
      INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
      INVALID_SENDER: "invalid-sender",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      INVALID_PROVIDER_ID: "invalid-provider-id",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      CORS_UNSUPPORTED: "cors-unsupported",
      DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
      INVALID_APP_ID: "invalid-app-id",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      WEAK_PASSWORD: "weak-password",
      OPERATION_NOT_ALLOWED: "operation-not-allowed",
      USER_CANCELLED: "user-cancelled",
      CAPTCHA_CHECK_FAILED: "captcha-check-failed",
      INVALID_APP_CREDENTIAL: "invalid-app-credential",
      INVALID_CODE: "invalid-verification-code",
      INVALID_PHONE_NUMBER: "invalid-phone-number",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_APP_CREDENTIAL: "missing-app-credential",
      MISSING_CODE: "missing-verification-code",
      MISSING_PHONE_NUMBER: "missing-phone-number",
      MISSING_SESSION_INFO: "missing-verification-id",
      QUOTA_EXCEEDED: "quota-exceeded",
      SESSION_EXPIRED: "code-expired",
      REJECTED_CREDENTIAL: "rejected-credential",
      INVALID_CONTINUE_URI: "invalid-continue-uri",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      INVALID_CERT_HASH: "invalid-cert-hash",
      UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
      INVALID_TENANT_ID: "invalid-tenant-id",
      TENANT_ID_MISMATCH: "tenant-id-mismatch",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
      UNVERIFIED_EMAIL: "unverified-email"
    };
    z2(d, b2 || {});
    b2 = (b2 = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b2.length ? b2[1] : void 0;
    for (var e in d)
      if (c.indexOf(e) === 0)
        return new t(d[e], b2);
    !b2 && a && (b2 = Re2(a));
    return new t("internal-error", b2);
  }
  function Gj(a) {
    this.b = a;
    this.a = null;
    this.nb = Hj(this);
  }
  function Hj(a) {
    return Ij().then(function() {
      return new B2(function(b2, c) {
        J2("gapi.iframes.getContext")().open({where: document.body, url: a.b, messageHandlersFilter: J2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: {style: {position: "absolute", top: "-100px", width: "1px", height: "1px"}}, dontclear: true}, function(d) {
          function e() {
            clearTimeout(f);
            b2();
          }
          a.a = d;
          a.a.restyle({setHideOnLeave: false});
          var f = setTimeout(function() {
            c(Error("Network Error"));
          }, Jj.get());
          d.ping(e).then(e, function() {
            c(Error("Network Error"));
          });
        });
      });
    });
  }
  function Kj(a, b2) {
    return a.nb.then(function() {
      return new B2(function(c) {
        a.a.send(b2.type, b2, c, J2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    });
  }
  function Lj(a, b2) {
    a.nb.then(function() {
      a.a.register("authEvent", b2, J2("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
    });
  }
  var Mj = new ob2(pb2, "https://apis.google.com/js/api.js?onload=%{onload}"), Nj = new We2(3e4, 6e4), Jj = new We2(5e3, 15e3), Oj = null;
  function Ij() {
    return Oj ? Oj : Oj = new B2(function(a, b2) {
      function c() {
        Ve2();
        J2("gapi.load")("gapi.iframes", {callback: a, ontimeout: function() {
          Ve2();
          b2(Error("Network Error"));
        }, timeout: Nj.get()});
      }
      if (J2("gapi.iframes.Iframe"))
        a();
      else if (J2("gapi.load"))
        c();
      else {
        var d = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
        l[d] = function() {
          J2("gapi.load") ? c() : b2(Error("Network Error"));
        };
        d = xb2(Mj, {onload: d});
        D2(xi2(d)).o(function() {
          b2(Error("Network Error"));
        });
      }
    }).o(function(a) {
      Oj = null;
      throw a;
    });
  }
  function Pj(a, b2, c) {
    this.i = a;
    this.g = b2;
    this.h = c;
    this.f = null;
    this.a = $d(this.i, "/__/auth/iframe");
    H2(this.a, "apiKey", this.g);
    H2(this.a, "appName", this.h);
    this.b = null;
    this.c = [];
  }
  Pj.prototype.toString = function() {
    this.f ? H2(this.a, "v", this.f) : fe2(this.a.a, "v");
    this.b ? H2(this.a, "eid", this.b) : fe2(this.a.a, "eid");
    this.c.length ? H2(this.a, "fw", this.c.join(",")) : fe2(this.a.a, "fw");
    return this.a.toString();
  };
  function Qj(a, b2, c, d, e) {
    this.s = a;
    this.m = b2;
    this.c = c;
    this.u = d;
    this.i = this.g = this.l = null;
    this.a = e;
    this.h = this.f = null;
  }
  Qj.prototype.ub = function(a) {
    this.h = a;
    return this;
  };
  Qj.prototype.toString = function() {
    var a = $d(this.s, "/__/auth/handler");
    H2(a, "apiKey", this.m);
    H2(a, "appName", this.c);
    H2(a, "authType", this.u);
    if (this.a.isOAuthProvider) {
      var b2 = this.a;
      try {
        var c = firebase$1.app(this.c).auth().ja();
      } catch (h) {
        c = null;
      }
      b2.kb = c;
      H2(a, "providerId", this.a.providerId);
      b2 = this.a;
      c = Se2(b2.Fb);
      for (var d in c)
        c[d] = c[d].toString();
      d = b2.Oc;
      c = lb2(c);
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        f in c && delete c[f];
      }
      b2.lb && b2.kb && !c[b2.lb] && (c[b2.lb] = b2.kb);
      kb2(c) || H2(a, "customParameters", Re2(c));
    }
    typeof this.a.Nb === "function" && (b2 = this.a.Nb(), b2.length && H2(a, "scopes", b2.join(",")));
    this.l ? H2(a, "redirectUrl", this.l) : fe2(a.a, "redirectUrl");
    this.g ? H2(a, "eventId", this.g) : fe2(a.a, "eventId");
    this.i ? H2(a, "v", this.i) : fe2(a.a, "v");
    if (this.b)
      for (var g2 in this.b)
        this.b.hasOwnProperty(g2) && !Yd(a, g2) && H2(a, g2, this.b[g2]);
    this.h ? H2(a, "tid", this.h) : fe2(a.a, "tid");
    this.f ? H2(a, "eid", this.f) : fe2(a.a, "eid");
    g2 = Rj(this.c);
    g2.length && H2(a, "fw", g2.join(","));
    return a.toString();
  };
  function Rj(a) {
    try {
      return firebase$1.app(a).auth().Ea();
    } catch (b2) {
      return [];
    }
  }
  function Sj(a, b2, c, d, e) {
    this.u = a;
    this.f = b2;
    this.b = c;
    this.c = d || null;
    this.h = e || null;
    this.m = this.s = this.w = null;
    this.g = [];
    this.l = this.a = null;
  }
  function Tj(a) {
    var b2 = oe2();
    return Xi2(a).then(function(c) {
      a: {
        var d = Zd(b2), e = d.f;
        d = d.b;
        for (var f = 0; f < c.length; f++) {
          var g2 = c[f];
          var h = d;
          var m = e;
          g2.indexOf("chrome-extension://") == 0 ? h = Zd(g2).b == h && m == "chrome-extension" : m != "http" && m != "https" ? h = false : ze2.test(g2) ? h = h == g2 : (g2 = g2.split(".").join("\\."), h = new RegExp("^(.+\\." + g2 + "|" + g2 + ")$", "i").test(h));
          if (h) {
            c = true;
            break a;
          }
        }
        c = false;
      }
      if (!c)
        throw new th(oe2());
    });
  }
  function Uj(a) {
    if (a.l)
      return a.l;
    a.l = Be2().then(function() {
      if (!a.s) {
        var b2 = a.c, c = a.h, d = Rj(a.b), e = new Pj(a.u, a.f, a.b);
        e.f = b2;
        e.b = c;
        e.c = Xa2(d || []);
        a.s = e.toString();
      }
      a.i = new Gj(a.s);
      Vj(a);
    });
    return a.l;
  }
  k2 = Sj.prototype;
  k2.Lb = function(a, b2, c) {
    var d = new t("popup-closed-by-user"), e = new t("web-storage-unsupported"), f = this, g2 = false;
    return this.ka().then(function() {
      Wj(f).then(function(h) {
        h || (a && ve2(a), b2(e), g2 = true);
      });
    }).o(function() {
    }).then(function() {
      if (!g2)
        return ye2(a);
    }).then(function() {
      if (!g2)
        return Bd2(c).then(function() {
          b2(d);
        });
    });
  };
  k2.Ub = function() {
    var a = I2();
    return !Qe2(a) && !Ue2(a);
  };
  k2.Qb = function() {
    return false;
  };
  k2.Jb = function(a, b2, c, d, e, f, g2, h) {
    if (!a)
      return E2(new t("popup-blocked"));
    if (g2 && !Qe2())
      return this.ka().o(function(p2) {
        ve2(a);
        e(p2);
      }), d(), D2();
    this.a || (this.a = Tj(Xj(this)));
    var m = this;
    return this.a.then(function() {
      var p2 = m.ka().o(function(v2) {
        ve2(a);
        e(v2);
        throw v2;
      });
      d();
      return p2;
    }).then(function() {
      nh(c);
      if (!g2) {
        var p2 = Yj(m.u, m.f, m.b, b2, c, null, f, m.c, void 0, m.h, h);
        pe2(p2, a);
      }
    }).o(function(p2) {
      p2.code == "auth/network-request-failed" && (m.a = null);
      throw p2;
    });
  };
  function Xj(a) {
    a.m || (a.w = a.c ? Le2(a.c, Rj(a.b)) : null, a.m = new Ei2(a.f, Aa2(a.h), a.w));
    return a.m;
  }
  k2.Kb = function(a, b2, c, d) {
    this.a || (this.a = Tj(Xj(this)));
    var e = this;
    return this.a.then(function() {
      nh(b2);
      var f = Yj(e.u, e.f, e.b, a, b2, oe2(), c, e.c, void 0, e.h, d);
      pe2(f);
    }).o(function(f) {
      f.code == "auth/network-request-failed" && (e.a = null);
      throw f;
    });
  };
  k2.ka = function() {
    var a = this;
    return Uj(this).then(function() {
      return a.i.nb;
    }).o(function() {
      a.a = null;
      throw new t("network-request-failed");
    });
  };
  k2.Xb = function() {
    return true;
  };
  function Yj(a, b2, c, d, e, f, g2, h, m, p2, v2) {
    a = new Qj(a, b2, c, d, e);
    a.l = f;
    a.g = g2;
    a.i = h;
    a.b = lb2(m || null);
    a.f = p2;
    return a.ub(v2).toString();
  }
  function Vj(a) {
    if (!a.i)
      throw Error("IfcHandler must be initialized!");
    Lj(a.i, function(b2) {
      var c = {};
      if (b2 && b2.authEvent) {
        var d = false;
        b2 = ph(b2.authEvent);
        for (c = 0; c < a.g.length; c++)
          d = a.g[c](b2) || d;
        c = {};
        c.status = d ? "ACK" : "ERROR";
        return D2(c);
      }
      c.status = "ERROR";
      return D2(c);
    });
  }
  function Wj(a) {
    var b2 = {type: "webStorageSupport"};
    return Uj(a).then(function() {
      return Kj(a.i, b2);
    }).then(function(c) {
      if (c && c.length && typeof c[0].webStorageSupport !== "undefined")
        return c[0].webStorageSupport;
      throw Error();
    });
  }
  k2.Ca = function(a) {
    this.g.push(a);
  };
  k2.Qa = function(a) {
    Va2(this.g, function(b2) {
      return b2 == a;
    });
  };
  function Zj(a) {
    this.a = a || firebase$1.INTERNAL.reactNative && firebase$1.INTERNAL.reactNative.AsyncStorage;
    if (!this.a)
      throw new t("internal-error", "The React Native compatibility library was not found.");
    this.type = "asyncStorage";
  }
  k2 = Zj.prototype;
  k2.get = function(a) {
    return D2(this.a.getItem(a)).then(function(b2) {
      return b2 && Te2(b2);
    });
  };
  k2.set = function(a, b2) {
    return D2(this.a.setItem(a, Re2(b2)));
  };
  k2.T = function(a) {
    return D2(this.a.removeItem(a));
  };
  k2.ba = function() {
  };
  k2.ha = function() {
  };
  function ak(a) {
    this.b = a;
    this.a = {};
    this.f = q2(this.c, this);
  }
  var bk = [];
  function ck() {
    var a = Ge2() ? self : null;
    w2(bk, function(c) {
      c.b == a && (b2 = c);
    });
    if (!b2) {
      var b2 = new ak(a);
      bk.push(b2);
    }
    return b2;
  }
  ak.prototype.c = function(a) {
    var b2 = a.data.eventType, c = a.data.eventId, d = this.a[b2];
    if (d && 0 < d.length) {
      a.ports[0].postMessage({status: "ack", eventId: c, eventType: b2, response: null});
      var e = [];
      w2(d, function(f) {
        e.push(D2().then(function() {
          return f(a.origin, a.data.data);
        }));
      });
      Fc2(e).then(function(f) {
        var g2 = [];
        w2(f, function(h) {
          g2.push({fulfilled: h.Mb, value: h.value, reason: h.reason ? h.reason.message : void 0});
        });
        w2(g2, function(h) {
          for (var m in h)
            typeof h[m] === "undefined" && delete h[m];
        });
        a.ports[0].postMessage({
          status: "done",
          eventId: c,
          eventType: b2,
          response: g2
        });
      });
    }
  };
  function dk(a, b2, c) {
    kb2(a.a) && a.b.addEventListener("message", a.f);
    typeof a.a[b2] === "undefined" && (a.a[b2] = []);
    a.a[b2].push(c);
  }
  function ek(a) {
    this.a = a;
  }
  ek.prototype.postMessage = function(a, b2) {
    this.a.postMessage(a, b2);
  };
  function fk(a) {
    this.c = a;
    this.b = false;
    this.a = [];
  }
  function gk(a, b2, c, d) {
    var e, f = c || {}, g2, h, m, p2 = null;
    if (a.b)
      return E2(Error("connection_unavailable"));
    var v2 = d ? 800 : 50, C2 = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    return new B2(function(A2, Q2) {
      C2 ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), C2.port1.start(), h = setTimeout(function() {
        Q2(Error("unsupported_event"));
      }, v2), g2 = function(wa2) {
        wa2.data.eventId === e && (wa2.data.status === "ack" ? (clearTimeout(h), m = setTimeout(function() {
          Q2(Error("timeout"));
        }, 3e3)) : wa2.data.status === "done" ? (clearTimeout(m), typeof wa2.data.response !== "undefined" ? A2(wa2.data.response) : Q2(Error("unknown_error"))) : (clearTimeout(h), clearTimeout(m), Q2(Error("invalid_response"))));
      }, p2 = {messageChannel: C2, onMessage: g2}, a.a.push(p2), C2.port1.addEventListener("message", g2), a.c.postMessage({eventType: b2, eventId: e, data: f}, [C2.port2])) : Q2(Error("connection_unavailable"));
    }).then(function(A2) {
      hk(a, p2);
      return A2;
    }).o(function(A2) {
      hk(a, p2);
      throw A2;
    });
  }
  function hk(a, b2) {
    if (b2) {
      var c = b2.messageChannel, d = b2.onMessage;
      c && (c.port1.removeEventListener("message", d), c.port1.close());
      Va2(a.a, function(e) {
        return e == b2;
      });
    }
  }
  fk.prototype.close = function() {
    for (; 0 < this.a.length; )
      hk(this, this.a[0]);
    this.b = true;
  };
  function ik() {
    if (!jk())
      throw new t("web-storage-unsupported");
    this.c = {};
    this.a = [];
    this.b = 0;
    this.u = l.indexedDB;
    this.type = "indexedDB";
    this.g = this.l = this.f = this.i = null;
    this.s = false;
    this.h = null;
    var a = this;
    Ge2() && self ? (this.l = ck(), dk(this.l, "keyChanged", function(b2, c) {
      return kk(a).then(function(d) {
        0 < d.length && w2(a.a, function(e) {
          e(d);
        });
        return {keyProcessed: Ta2(d, c.key)};
      });
    }), dk(this.l, "ping", function() {
      return D2(["keyChanged"]);
    })) : bf().then(function(b2) {
      if (a.h = b2)
        a.g = new fk(new ek(b2)), gk(a.g, "ping", null, true).then(function(c) {
          c[0].fulfilled && Ta2(c[0].value, "keyChanged") && (a.s = true);
        }).o(function() {
        });
    });
  }
  var lk;
  function mk(a) {
    return new B2(function(b2, c) {
      var d = a.u.deleteDatabase("firebaseLocalStorageDb");
      d.onsuccess = function() {
        b2();
      };
      d.onerror = function(e) {
        c(Error(e.target.error));
      };
    });
  }
  function nk(a) {
    return new B2(function(b2, c) {
      var d = a.u.open("firebaseLocalStorageDb", 1);
      d.onerror = function(e) {
        try {
          e.preventDefault();
        } catch (f) {
        }
        c(Error(e.target.error));
      };
      d.onupgradeneeded = function(e) {
        e = e.target.result;
        try {
          e.createObjectStore("firebaseLocalStorage", {keyPath: "fbase_key"});
        } catch (f) {
          c(f);
        }
      };
      d.onsuccess = function(e) {
        e = e.target.result;
        e.objectStoreNames.contains("firebaseLocalStorage") ? b2(e) : mk(a).then(function() {
          return nk(a);
        }).then(function(f) {
          b2(f);
        }).o(function(f) {
          c(f);
        });
      };
    });
  }
  function ok(a) {
    a.m || (a.m = nk(a));
    return a.m;
  }
  function jk() {
    try {
      return !!l.indexedDB;
    } catch (a) {
      return false;
    }
  }
  function pk(a) {
    return a.objectStore("firebaseLocalStorage");
  }
  function qk(a, b2) {
    return a.transaction(["firebaseLocalStorage"], b2 ? "readwrite" : "readonly");
  }
  function rk(a) {
    return new B2(function(b2, c) {
      a.onsuccess = function(d) {
        d && d.target ? b2(d.target.result) : b2();
      };
      a.onerror = function(d) {
        c(d.target.error);
      };
    });
  }
  k2 = ik.prototype;
  k2.set = function(a, b2) {
    var c = false, d, e = this;
    return ok(this).then(function(f) {
      d = f;
      f = pk(qk(d, true));
      return rk(f.get(a));
    }).then(function(f) {
      var g2 = pk(qk(d, true));
      if (f)
        return f.value = b2, rk(g2.put(f));
      e.b++;
      c = true;
      f = {};
      f.fbase_key = a;
      f.value = b2;
      return rk(g2.add(f));
    }).then(function() {
      e.c[a] = b2;
      return sk(e, a);
    }).ma(function() {
      c && e.b--;
    });
  };
  function sk(a, b2) {
    return a.g && a.h && af() === a.h ? gk(a.g, "keyChanged", {key: b2}, a.s).then(function() {
    }).o(function() {
    }) : D2();
  }
  k2.get = function(a) {
    return ok(this).then(function(b2) {
      return rk(pk(qk(b2, false)).get(a));
    }).then(function(b2) {
      return b2 && b2.value;
    });
  };
  k2.T = function(a) {
    var b2 = false, c = this;
    return ok(this).then(function(d) {
      b2 = true;
      c.b++;
      return rk(pk(qk(d, true))["delete"](a));
    }).then(function() {
      delete c.c[a];
      return sk(c, a);
    }).ma(function() {
      b2 && c.b--;
    });
  };
  function kk(a) {
    return ok(a).then(function(b2) {
      var c = pk(qk(b2, false));
      return c.getAll ? rk(c.getAll()) : new B2(function(d, e) {
        var f = [], g2 = c.openCursor();
        g2.onsuccess = function(h) {
          (h = h.target.result) ? (f.push(h.value), h["continue"]()) : d(f);
        };
        g2.onerror = function(h) {
          e(h.target.error);
        };
      });
    }).then(function(b2) {
      var c = {}, d = [];
      if (a.b == 0) {
        for (d = 0; d < b2.length; d++)
          c[b2[d].fbase_key] = b2[d].value;
        d = qe2(a.c, c);
        a.c = c;
      }
      return d;
    });
  }
  k2.ba = function(a) {
    this.a.length == 0 && tk(this);
    this.a.push(a);
  };
  k2.ha = function(a) {
    Va2(this.a, function(b2) {
      return b2 == a;
    });
    this.a.length == 0 && uk(this);
  };
  function tk(a) {
    function b2() {
      a.f = setTimeout(function() {
        a.i = kk(a).then(function(c) {
          0 < c.length && w2(a.a, function(d) {
            d(c);
          });
        }).then(function() {
          b2();
        }).o(function(c) {
          c.message != "STOP_EVENT" && b2();
        });
      }, 800);
    }
    uk(a);
    b2();
  }
  function uk(a) {
    a.i && a.i.cancel("STOP_EVENT");
    a.f && (clearTimeout(a.f), a.f = null);
  }
  function vk(a) {
    var b2 = this, c = null;
    this.a = [];
    this.type = "indexedDB";
    this.c = a;
    this.b = D2().then(function() {
      if (jk()) {
        var d = Ne2(), e = "__sak" + d;
        lk || (lk = new ik());
        c = lk;
        return c.set(e, d).then(function() {
          return c.get(e);
        }).then(function(f) {
          if (f !== d)
            throw Error("indexedDB not supported!");
          return c.T(e);
        }).then(function() {
          return c;
        }).o(function() {
          return b2.c;
        });
      }
      return b2.c;
    }).then(function(d) {
      b2.type = d.type;
      d.ba(function(e) {
        w2(b2.a, function(f) {
          f(e);
        });
      });
      return d;
    });
  }
  k2 = vk.prototype;
  k2.get = function(a) {
    return this.b.then(function(b2) {
      return b2.get(a);
    });
  };
  k2.set = function(a, b2) {
    return this.b.then(function(c) {
      return c.set(a, b2);
    });
  };
  k2.T = function(a) {
    return this.b.then(function(b2) {
      return b2.T(a);
    });
  };
  k2.ba = function(a) {
    this.a.push(a);
  };
  k2.ha = function(a) {
    Va2(this.a, function(b2) {
      return b2 == a;
    });
  };
  function wk() {
    this.a = {};
    this.type = "inMemory";
  }
  k2 = wk.prototype;
  k2.get = function(a) {
    return D2(this.a[a]);
  };
  k2.set = function(a, b2) {
    this.a[a] = b2;
    return D2();
  };
  k2.T = function(a) {
    delete this.a[a];
    return D2();
  };
  k2.ba = function() {
  };
  k2.ha = function() {
  };
  function xk() {
    if (!yk()) {
      if (He2() == "Node")
        throw new t("internal-error", "The LocalStorage compatibility library was not found.");
      throw new t("web-storage-unsupported");
    }
    this.a = zk() || firebase$1.INTERNAL.node.localStorage;
    this.type = "localStorage";
  }
  function zk() {
    try {
      var a = l.localStorage, b2 = Ne2();
      a && (a.setItem(b2, "1"), a.removeItem(b2));
      return a;
    } catch (c) {
      return null;
    }
  }
  function yk() {
    var a = He2() == "Node";
    a = zk() || a && firebase$1.INTERNAL.node && firebase$1.INTERNAL.node.localStorage;
    if (!a)
      return false;
    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), true;
    } catch (b2) {
      return false;
    }
  }
  k2 = xk.prototype;
  k2.get = function(a) {
    var b2 = this;
    return D2().then(function() {
      var c = b2.a.getItem(a);
      return Te2(c);
    });
  };
  k2.set = function(a, b2) {
    var c = this;
    return D2().then(function() {
      var d = Re2(b2);
      d === null ? c.T(a) : c.a.setItem(a, d);
    });
  };
  k2.T = function(a) {
    var b2 = this;
    return D2().then(function() {
      b2.a.removeItem(a);
    });
  };
  k2.ba = function(a) {
    l.window && jd2(l.window, "storage", a);
  };
  k2.ha = function(a) {
    l.window && td2(l.window, "storage", a);
  };
  function Ak() {
    this.type = "nullStorage";
  }
  k2 = Ak.prototype;
  k2.get = function() {
    return D2(null);
  };
  k2.set = function() {
    return D2();
  };
  k2.T = function() {
    return D2();
  };
  k2.ba = function() {
  };
  k2.ha = function() {
  };
  function Bk() {
    if (!Ck()) {
      if (He2() == "Node")
        throw new t("internal-error", "The SessionStorage compatibility library was not found.");
      throw new t("web-storage-unsupported");
    }
    this.a = Dk() || firebase$1.INTERNAL.node.sessionStorage;
    this.type = "sessionStorage";
  }
  function Dk() {
    try {
      var a = l.sessionStorage, b2 = Ne2();
      a && (a.setItem(b2, "1"), a.removeItem(b2));
      return a;
    } catch (c) {
      return null;
    }
  }
  function Ck() {
    var a = He2() == "Node";
    a = Dk() || a && firebase$1.INTERNAL.node && firebase$1.INTERNAL.node.sessionStorage;
    if (!a)
      return false;
    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), true;
    } catch (b2) {
      return false;
    }
  }
  k2 = Bk.prototype;
  k2.get = function(a) {
    var b2 = this;
    return D2().then(function() {
      var c = b2.a.getItem(a);
      return Te2(c);
    });
  };
  k2.set = function(a, b2) {
    var c = this;
    return D2().then(function() {
      var d = Re2(b2);
      d === null ? c.T(a) : c.a.setItem(a, d);
    });
  };
  k2.T = function(a) {
    var b2 = this;
    return D2().then(function() {
      b2.a.removeItem(a);
    });
  };
  k2.ba = function() {
  };
  k2.ha = function() {
  };
  function Ek() {
    var a = {};
    a.Browser = Fk;
    a.Node = Gk;
    a.ReactNative = Hk;
    a.Worker = Ik;
    this.a = a[He2()];
  }
  var Jk, Fk = {F: xk, $a: Bk}, Gk = {F: xk, $a: Bk}, Hk = {F: Zj, $a: Ak}, Ik = {F: xk, $a: Ak};
  var Kk = {od: "local", NONE: "none", qd: "session"};
  function Lk(a) {
    var b2 = new t("invalid-persistence-type"), c = new t("unsupported-persistence-type");
    a: {
      for (d in Kk)
        if (Kk[d] == a) {
          var d = true;
          break a;
        }
      d = false;
    }
    if (!d || typeof a !== "string")
      throw b2;
    switch (He2()) {
      case "ReactNative":
        if (a === "session")
          throw c;
        break;
      case "Node":
        if (a !== "none")
          throw c;
        break;
      case "Worker":
        if (a === "session" || !jk() && a !== "none")
          throw c;
        break;
      default:
        if (!Me2() && a !== "none")
          throw c;
    }
  }
  function Mk() {
    var a = !Ue2(I2()) && Fe2() ? true : false, b2 = Qe2(), c = Me2();
    this.m = a;
    this.h = b2;
    this.l = c;
    this.a = {};
    Jk || (Jk = new Ek());
    a = Jk;
    try {
      this.g = !ne2() && $e2() || !l.indexedDB ? new a.a.F() : new vk(Ge2() ? new wk() : new a.a.F());
    } catch (d) {
      this.g = new wk(), this.h = true;
    }
    try {
      this.i = new a.a.$a();
    } catch (d) {
      this.i = new wk();
    }
    this.u = new wk();
    this.f = q2(this.Vb, this);
    this.b = {};
  }
  var Nk;
  function Ok() {
    Nk || (Nk = new Mk());
    return Nk;
  }
  function Pk(a, b2) {
    switch (b2) {
      case "session":
        return a.i;
      case "none":
        return a.u;
      default:
        return a.g;
    }
  }
  function Qk(a, b2) {
    return "firebase:" + a.name + (b2 ? ":" + b2 : "");
  }
  function Rk(a, b2, c) {
    var d = Qk(b2, c), e = Pk(a, b2.F);
    return a.get(b2, c).then(function(f) {
      var g2 = null;
      try {
        g2 = Te2(l.localStorage.getItem(d));
      } catch (h) {
      }
      if (g2 && !f)
        return l.localStorage.removeItem(d), a.set(b2, g2, c);
      g2 && f && e.type != "localStorage" && l.localStorage.removeItem(d);
    });
  }
  k2 = Mk.prototype;
  k2.get = function(a, b2) {
    return Pk(this, a.F).get(Qk(a, b2));
  };
  function Sk(a, b2, c) {
    c = Qk(b2, c);
    b2.F == "local" && (a.b[c] = null);
    return Pk(a, b2.F).T(c);
  }
  k2.set = function(a, b2, c) {
    var d = Qk(a, c), e = this, f = Pk(this, a.F);
    return f.set(d, b2).then(function() {
      return f.get(d);
    }).then(function(g2) {
      a.F == "local" && (e.b[d] = g2);
    });
  };
  k2.addListener = function(a, b2, c) {
    a = Qk(a, b2);
    this.l && (this.b[a] = l.localStorage.getItem(a));
    kb2(this.a) && (Pk(this, "local").ba(this.f), this.h || (ne2() || !$e2()) && l.indexedDB || !this.l || Tk(this));
    this.a[a] || (this.a[a] = []);
    this.a[a].push(c);
  };
  k2.removeListener = function(a, b2, c) {
    a = Qk(a, b2);
    this.a[a] && (Va2(this.a[a], function(d) {
      return d == c;
    }), this.a[a].length == 0 && delete this.a[a]);
    kb2(this.a) && (Pk(this, "local").ha(this.f), Uk(this));
  };
  function Tk(a) {
    Uk(a);
    a.c = setInterval(function() {
      for (var b2 in a.a) {
        var c = l.localStorage.getItem(b2), d = a.b[b2];
        c != d && (a.b[b2] = c, c = new Yc2({type: "storage", key: b2, target: window, oldValue: d, newValue: c, a: true}), a.Vb(c));
      }
    }, 1e3);
  }
  function Uk(a) {
    a.c && (clearInterval(a.c), a.c = null);
  }
  k2.Vb = function(a) {
    if (a && a.f) {
      var b2 = a.a.key;
      if (b2 == null)
        for (var c in this.a) {
          var d = this.b[c];
          typeof d === "undefined" && (d = null);
          var e = l.localStorage.getItem(c);
          e !== d && (this.b[c] = e, this.ib(c));
        }
      else if (b2.indexOf("firebase:") == 0 && this.a[b2]) {
        typeof a.a.a !== "undefined" ? Pk(this, "local").ha(this.f) : Uk(this);
        if (this.m) {
          if (c = l.localStorage.getItem(b2), d = a.a.newValue, d !== c)
            d !== null ? l.localStorage.setItem(b2, d) : l.localStorage.removeItem(b2);
          else if (this.b[b2] === d && typeof a.a.a === "undefined")
            return;
        }
        var f = this;
        c = function() {
          if (typeof a.a.a !== "undefined" || f.b[b2] !== l.localStorage.getItem(b2))
            f.b[b2] = l.localStorage.getItem(b2), f.ib(b2);
        };
        Tb2 && dc2 && dc2 == 10 && l.localStorage.getItem(b2) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
      }
    } else
      w2(a, q2(this.ib, this));
  };
  k2.ib = function(a) {
    this.a[a] && w2(this.a[a], function(b2) {
      b2();
    });
  };
  function Vk(a) {
    this.a = a;
    this.b = Ok();
  }
  var Wk = {name: "authEvent", F: "local"};
  function Xk(a) {
    return a.b.get(Wk, a.a).then(function(b2) {
      return ph(b2);
    });
  }
  function Yk() {
    this.a = Ok();
  }
  function Zk() {
    this.b = -1;
  }
  function $k(a, b2) {
    this.b = al;
    this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
    this.g = this.c = 0;
    this.a = [];
    this.i = a;
    this.h = b2;
    this.l = l.Int32Array ? new Int32Array(64) : Array(64);
    bl === void 0 && (l.Int32Array ? bl = new Int32Array(cl) : bl = cl);
    this.reset();
  }
  var bl;
  r2($k, Zk);
  for (var al = 64, dl = al - 1, el = [], fl = 0; fl < dl; fl++)
    el[fl] = 0;
  var gl = Wa2(128, el);
  $k.prototype.reset = function() {
    this.g = this.c = 0;
    this.a = l.Int32Array ? new Int32Array(this.h) : Xa2(this.h);
  };
  function hl(a) {
    for (var b2 = a.f, c = a.l, d = 0, e = 0; e < b2.length; )
      c[d++] = b2[e] << 24 | b2[e + 1] << 16 | b2[e + 2] << 8 | b2[e + 3], e = 4 * d;
    for (b2 = 16; 64 > b2; b2++) {
      e = c[b2 - 15] | 0;
      d = c[b2 - 2] | 0;
      var f = (c[b2 - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0, g2 = (c[b2 - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
      c[b2] = f + g2 | 0;
    }
    d = a.a[0] | 0;
    e = a.a[1] | 0;
    var h = a.a[2] | 0, m = a.a[3] | 0, p2 = a.a[4] | 0, v2 = a.a[5] | 0, C2 = a.a[6] | 0;
    f = a.a[7] | 0;
    for (b2 = 0; 64 > b2; b2++) {
      var A2 = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
      g2 = p2 & v2 ^ ~p2 & C2;
      f = f + ((p2 >>> 6 | p2 << 26) ^ (p2 >>> 11 | p2 << 21) ^ (p2 >>> 25 | p2 << 7)) | 0;
      g2 = g2 + (bl[b2] | 0) | 0;
      g2 = f + (g2 + (c[b2] | 0) | 0) | 0;
      f = C2;
      C2 = v2;
      v2 = p2;
      p2 = m + g2 | 0;
      m = h;
      h = e;
      e = d;
      d = g2 + A2 | 0;
    }
    a.a[0] = a.a[0] + d | 0;
    a.a[1] = a.a[1] + e | 0;
    a.a[2] = a.a[2] + h | 0;
    a.a[3] = a.a[3] + m | 0;
    a.a[4] = a.a[4] + p2 | 0;
    a.a[5] = a.a[5] + v2 | 0;
    a.a[6] = a.a[6] + C2 | 0;
    a.a[7] = a.a[7] + f | 0;
  }
  function il(a, b2, c) {
    c === void 0 && (c = b2.length);
    var d = 0, e = a.c;
    if (typeof b2 === "string")
      for (; d < c; )
        a.f[e++] = b2.charCodeAt(d++), e == a.b && (hl(a), e = 0);
    else if (ma2(b2))
      for (; d < c; ) {
        var f = b2[d++];
        if (!(typeof f == "number" && 0 <= f && 255 >= f && f == (f | 0)))
          throw Error("message must be a byte array");
        a.f[e++] = f;
        e == a.b && (hl(a), e = 0);
      }
    else
      throw Error("message must be string or array");
    a.c = e;
    a.g += c;
  }
  var cl = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  function jl() {
    $k.call(this, 8, kl);
  }
  r2(jl, $k);
  var kl = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  function ll(a, b2, c, d, e) {
    this.u = a;
    this.i = b2;
    this.l = c;
    this.m = d || null;
    this.s = e || null;
    this.h = b2 + ":" + c;
    this.w = new Yk();
    this.g = new Vk(this.h);
    this.f = null;
    this.b = [];
    this.a = this.c = null;
  }
  function ml(a) {
    return new t("invalid-cordova-configuration", a);
  }
  k2 = ll.prototype;
  k2.ka = function() {
    return this.Ga ? this.Ga : this.Ga = Ce2().then(function() {
      if (typeof J2("universalLinks.subscribe", l) !== "function")
        throw ml("cordova-universal-links-plugin-fix is not installed");
      if (typeof J2("BuildInfo.packageName", l) === "undefined")
        throw ml("cordova-plugin-buildinfo is not installed");
      if (typeof J2("cordova.plugins.browsertab.openUrl", l) !== "function")
        throw ml("cordova-plugin-browsertab is not installed");
      if (typeof J2("cordova.InAppBrowser.open", l) !== "function")
        throw ml("cordova-plugin-inappbrowser is not installed");
    }, function() {
      throw new t("cordova-not-ready");
    });
  };
  function nl() {
    for (var a = 20, b2 = []; 0 < a; )
      b2.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    return b2.join("");
  }
  function ol(a) {
    var b2 = new jl();
    il(b2, a);
    a = [];
    var c = 8 * b2.g;
    56 > b2.c ? il(b2, gl, 56 - b2.c) : il(b2, gl, b2.b - (b2.c - 56));
    for (var d = 63; 56 <= d; d--)
      b2.f[d] = c & 255, c /= 256;
    hl(b2);
    for (d = c = 0; d < b2.i; d++)
      for (var e = 24; 0 <= e; e -= 8)
        a[c++] = b2.a[d] >> e & 255;
    return $f(a);
  }
  k2.Lb = function(a, b2) {
    b2(new t("operation-not-supported-in-this-environment"));
    return D2();
  };
  k2.Jb = function() {
    return E2(new t("operation-not-supported-in-this-environment"));
  };
  k2.Xb = function() {
    return false;
  };
  k2.Ub = function() {
    return true;
  };
  k2.Qb = function() {
    return true;
  };
  k2.Kb = function(a, b2, c, d) {
    if (this.c)
      return E2(new t("redirect-operation-pending"));
    var e = this, f = l.document, g2 = null, h = null, m = null, p2 = null;
    return this.c = D2().then(function() {
      nh(b2);
      return pl(e);
    }).then(function() {
      return ql(e, a, b2, c, d);
    }).then(function() {
      return new B2(function(v2, C2) {
        h = function() {
          var A2 = J2("cordova.plugins.browsertab.close", l);
          v2();
          typeof A2 === "function" && A2();
          e.a && typeof e.a.close === "function" && (e.a.close(), e.a = null);
          return false;
        };
        e.Ca(h);
        m = function() {
          g2 || (g2 = Bd2(2e3).then(function() {
            C2(new t("redirect-cancelled-by-user"));
          }));
        };
        p2 = function() {
          Xe2() && m();
        };
        f.addEventListener("resume", m, false);
        I2().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", p2, false);
      }).o(function(v2) {
        return rl(e).then(function() {
          throw v2;
        });
      });
    }).ma(function() {
      m && f.removeEventListener("resume", m, false);
      p2 && f.removeEventListener("visibilitychange", p2, false);
      g2 && g2.cancel();
      h && e.Qa(h);
      e.c = null;
    });
  };
  function ql(a, b2, c, d, e) {
    var f = nl(), g2 = new oh(b2, d, null, f, new t("no-auth-event"), null, e), h = J2("BuildInfo.packageName", l);
    if (typeof h !== "string")
      throw new t("invalid-cordova-configuration");
    var m = J2("BuildInfo.displayName", l), p2 = {};
    if (I2().toLowerCase().match(/iphone|ipad|ipod/))
      p2.ibi = h;
    else if (I2().toLowerCase().match(/android/))
      p2.apn = h;
    else
      return E2(new t("operation-not-supported-in-this-environment"));
    m && (p2.appDisplayName = m);
    f = ol(f);
    p2.sessionId = f;
    var v2 = Yj(a.u, a.i, a.l, b2, c, null, d, a.m, p2, a.s, e);
    return a.ka().then(function() {
      var C2 = a.h;
      return a.w.a.set(Wk, g2.v(), C2);
    }).then(function() {
      var C2 = J2("cordova.plugins.browsertab.isAvailable", l);
      if (typeof C2 !== "function")
        throw new t("invalid-cordova-configuration");
      var A2 = null;
      C2(function(Q2) {
        if (Q2) {
          A2 = J2("cordova.plugins.browsertab.openUrl", l);
          if (typeof A2 !== "function")
            throw new t("invalid-cordova-configuration");
          A2(v2);
        } else {
          A2 = J2("cordova.InAppBrowser.open", l);
          if (typeof A2 !== "function")
            throw new t("invalid-cordova-configuration");
          Q2 = I2();
          a.a = A2(v2, Q2.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || Q2.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
        }
      });
    });
  }
  function sl(a, b2) {
    for (var c = 0; c < a.b.length; c++)
      try {
        a.b[c](b2);
      } catch (d) {
      }
  }
  function pl(a) {
    a.f || (a.f = a.ka().then(function() {
      return new B2(function(b2) {
        function c(d) {
          b2(d);
          a.Qa(c);
          return false;
        }
        a.Ca(c);
        tl(a);
      });
    }));
    return a.f;
  }
  function rl(a) {
    var b2 = null;
    return Xk(a.g).then(function(c) {
      b2 = c;
      c = a.g;
      return Sk(c.b, Wk, c.a);
    }).then(function() {
      return b2;
    });
  }
  function tl(a) {
    function b2(g2) {
      d = true;
      e && e.cancel();
      rl(a).then(function(h) {
        var m = c;
        if (h && g2 && g2.url) {
          var p2 = null;
          m = ug(g2.url);
          m.indexOf("/__/auth/callback") != -1 && (p2 = Zd(m), p2 = Te2(Yd(p2, "firebaseError") || null), p2 = (p2 = typeof p2 === "object" ? ya2(p2) : null) ? new oh(h.c, h.b, null, null, p2, null, h.S()) : new oh(h.c, h.b, m, h.f, null, null, h.S()));
          m = p2 || c;
        }
        sl(a, m);
      });
    }
    var c = new oh("unknown", null, null, null, new t("no-auth-event")), d = false, e = Bd2(500).then(function() {
      return rl(a).then(function() {
        d || sl(a, c);
      });
    }), f = l.handleOpenURL;
    l.handleOpenURL = function(g2) {
      g2.toLowerCase().indexOf(J2("BuildInfo.packageName", l).toLowerCase() + "://") == 0 && b2({url: g2});
      if (typeof f === "function")
        try {
          f(g2);
        } catch (h) {
          console.error(h);
        }
    };
    rh || (rh = new qh());
    sh(b2);
  }
  k2.Ca = function(a) {
    this.b.push(a);
    pl(this).o(function(b2) {
      b2.code === "auth/invalid-cordova-configuration" && (b2 = new oh("unknown", null, null, null, new t("no-auth-event")), a(b2));
    });
  };
  k2.Qa = function(a) {
    Va2(this.b, function(b2) {
      return b2 == a;
    });
  };
  function ul(a) {
    this.a = a;
    this.b = Ok();
  }
  var vl = {name: "pendingRedirect", F: "session"};
  function wl(a) {
    return a.b.set(vl, "pending", a.a);
  }
  function xl(a) {
    return Sk(a.b, vl, a.a);
  }
  function yl(a) {
    return a.b.get(vl, a.a).then(function(b2) {
      return b2 == "pending";
    });
  }
  function zl(a, b2, c) {
    this.i = {};
    this.w = 0;
    this.D = a;
    this.u = b2;
    this.m = c;
    this.h = [];
    this.f = false;
    this.l = q2(this.s, this);
    this.b = new Al();
    this.B = new Bl();
    this.g = new ul(this.u + ":" + this.m);
    this.c = {};
    this.c.unknown = this.b;
    this.c.signInViaRedirect = this.b;
    this.c.linkViaRedirect = this.b;
    this.c.reauthViaRedirect = this.b;
    this.c.signInViaPopup = this.B;
    this.c.linkViaPopup = this.B;
    this.c.reauthViaPopup = this.B;
    this.a = Cl(this.D, this.u, this.m, Ba2);
  }
  function Cl(a, b2, c, d) {
    var e = firebase$1.SDK_VERSION || null;
    return De2() ? new ll(a, b2, c, e, d) : new Sj(a, b2, c, e, d);
  }
  zl.prototype.reset = function() {
    this.f = false;
    this.a.Qa(this.l);
    this.a = Cl(this.D, this.u, this.m);
    this.i = {};
  };
  function Dl(a) {
    a.f || (a.f = true, a.a.Ca(a.l));
    var b2 = a.a;
    return a.a.ka().o(function(c) {
      a.a == b2 && a.reset();
      throw c;
    });
  }
  function El(a) {
    a.a.Ub() && Dl(a).o(function(b2) {
      var c = new oh("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
      Fl(b2) && a.s(c);
    });
    a.a.Qb() || Gl(a.b);
  }
  function Hl(a, b2) {
    Ta2(a.h, b2) || a.h.push(b2);
    a.f || yl(a.g).then(function(c) {
      c ? xl(a.g).then(function() {
        Dl(a).o(function(d) {
          var e = new oh("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
          Fl(d) && a.s(e);
        });
      }) : El(a);
    }).o(function() {
      El(a);
    });
  }
  function Il(a, b2) {
    Va2(a.h, function(c) {
      return c == b2;
    });
  }
  zl.prototype.s = function(a) {
    if (!a)
      throw new t("invalid-auth-event");
    6e5 <= ua2() - this.w && (this.i = {}, this.w = 0);
    if (a && a.getUid() && this.i.hasOwnProperty(a.getUid()))
      return false;
    for (var b2 = false, c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      if (d.Cb(a.c, a.b)) {
        if (b2 = this.c[a.c])
          b2.h(a, d), a && (a.f || a.b) && (this.i[a.getUid()] = true, this.w = ua2());
        b2 = true;
        break;
      }
    }
    Gl(this.b);
    return b2;
  };
  var Jl = new We2(2e3, 1e4), Kl = new We2(3e4, 6e4);
  zl.prototype.pa = function() {
    return this.b.pa();
  };
  function Ll(a, b2, c, d, e, f, g2) {
    return a.a.Jb(b2, c, d, function() {
      a.f || (a.f = true, a.a.Ca(a.l));
    }, function() {
      a.reset();
    }, e, f, g2);
  }
  function Fl(a) {
    return a && a.code == "auth/cordova-not-ready" ? true : false;
  }
  function Ml(a, b2, c, d, e) {
    var f;
    return wl(a.g).then(function() {
      return a.a.Kb(b2, c, d, e).o(function(g2) {
        if (Fl(g2))
          throw new t("operation-not-supported-in-this-environment");
        f = g2;
        return xl(a.g).then(function() {
          throw f;
        });
      }).then(function() {
        return a.a.Xb() ? new B2(function() {
        }) : xl(a.g).then(function() {
          return a.pa();
        }).then(function() {
        }).o(function() {
        });
      });
    });
  }
  function Nl(a, b2, c, d, e) {
    return a.a.Lb(d, function(f) {
      b2.la(c, null, f, e);
    }, Jl.get());
  }
  var Ol = {};
  function Pl(a, b2, c) {
    var d = b2 + ":" + c;
    Ol[d] || (Ol[d] = new zl(a, b2, c));
    return Ol[d];
  }
  function Al() {
    this.b = null;
    this.f = [];
    this.c = [];
    this.a = null;
    this.i = this.g = false;
  }
  Al.prototype.reset = function() {
    this.b = null;
    this.a && (this.a.cancel(), this.a = null);
  };
  Al.prototype.h = function(a, b2) {
    if (a) {
      this.reset();
      this.g = true;
      var c = a.c, d = a.b, e = a.a && a.a.code == "auth/web-storage-unsupported", f = a.a && a.a.code == "auth/operation-not-supported-in-this-environment";
      this.i = !(!e && !f);
      c != "unknown" || e || f ? a.a ? (Ql(this, true, null, a.a), D2()) : b2.Da(c, d) ? Rl(this, a, b2) : E2(new t("invalid-auth-event")) : (Ql(this, false, null, null), D2());
    } else
      E2(new t("invalid-auth-event"));
  };
  function Gl(a) {
    a.g || (a.g = true, Ql(a, false, null, null));
  }
  function Sl(a) {
    a.g && !a.i && Ql(a, false, null, null);
  }
  function Rl(a, b2, c) {
    c = c.Da(b2.c, b2.b);
    var d = b2.g, e = b2.f, f = b2.i, g2 = b2.S(), h = !!b2.c.match(/Redirect$/);
    c(d, e, g2, f).then(function(m) {
      Ql(a, h, m, null);
    }).o(function(m) {
      Ql(a, h, null, m);
    });
  }
  function Tl(a, b2) {
    a.b = function() {
      return E2(b2);
    };
    if (a.c.length)
      for (var c = 0; c < a.c.length; c++)
        a.c[c](b2);
  }
  function Ul(a, b2) {
    a.b = function() {
      return D2(b2);
    };
    if (a.f.length)
      for (var c = 0; c < a.f.length; c++)
        a.f[c](b2);
  }
  function Ql(a, b2, c, d) {
    b2 ? d ? Tl(a, d) : Ul(a, c) : Ul(a, {user: null});
    a.f = [];
    a.c = [];
  }
  Al.prototype.pa = function() {
    var a = this;
    return new B2(function(b2, c) {
      a.b ? a.b().then(b2, c) : (a.f.push(b2), a.c.push(c), Vl(a));
    });
  };
  function Vl(a) {
    var b2 = new t("timeout");
    a.a && a.a.cancel();
    a.a = Bd2(Kl.get()).then(function() {
      a.b || (a.g = true, Ql(a, true, null, b2));
    });
  }
  function Bl() {
  }
  Bl.prototype.h = function(a, b2) {
    if (a) {
      var c = a.c, d = a.b;
      a.a ? (b2.la(a.c, null, a.a, a.b), D2()) : b2.Da(c, d) ? Wl(a, b2) : E2(new t("invalid-auth-event"));
    } else
      E2(new t("invalid-auth-event"));
  };
  function Wl(a, b2) {
    var c = a.b, d = a.c;
    b2.Da(d, c)(a.g, a.f, a.S(), a.i).then(function(e) {
      b2.la(d, e, null, c);
    }).o(function(e) {
      b2.la(d, null, e, c);
    });
  }
  function Xl() {
    this.Bb = false;
    Object.defineProperty(this, "appVerificationDisabled", {get: function() {
      return this.Bb;
    }, set: function(a) {
      this.Bb = a;
    }, enumerable: false});
  }
  function Yl(a, b2) {
    this.a = b2;
    K2(this, "verificationId", a);
  }
  Yl.prototype.confirm = function(a) {
    a = lh(this.verificationId, a);
    return this.a(a);
  };
  function Zl(a, b2, c, d) {
    return new hh(a).cb(b2, c).then(function(e) {
      return new Yl(e, d);
    });
  }
  function $l(a) {
    var b2 = fg(a);
    if (!(b2 && b2.exp && b2.auth_time && b2.iat))
      throw new t("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
    L2(this, {token: a, expirationTime: Ze2(1e3 * b2.exp), authTime: Ze2(1e3 * b2.auth_time), issuedAtTime: Ze2(1e3 * b2.iat), signInProvider: b2.firebase && b2.firebase.sign_in_provider ? b2.firebase.sign_in_provider : null, signInSecondFactor: b2.firebase && b2.firebase.sign_in_second_factor ? b2.firebase.sign_in_second_factor : null, claims: b2});
  }
  function am(a, b2, c) {
    var d = b2 && b2[bm];
    if (!d)
      throw new t("argument-error", "Internal assert: Invalid MultiFactorResolver");
    this.a = a;
    this.f = lb2(b2);
    this.g = c;
    this.c = new vg(null, d);
    this.b = [];
    var e = this;
    w2(b2[cm] || [], function(f) {
      (f = qf(f)) && e.b.push(f);
    });
    K2(this, "auth", this.a);
    K2(this, "session", this.c);
    K2(this, "hints", this.b);
  }
  var cm = "mfaInfo", bm = "mfaPendingCredential";
  am.prototype.Pc = function(a) {
    var b2 = this;
    return a.ob(this.a.b, this.c).then(function(c) {
      var d = lb2(b2.f);
      delete d[cm];
      delete d[bm];
      z2(d, c);
      return b2.g(d);
    });
  };
  function dm(a, b2, c, d) {
    t.call(this, "multi-factor-auth-required", d, b2);
    this.b = new am(a, b2, c);
    K2(this, "resolver", this.b);
  }
  r2(dm, t);
  function em(a, b2, c) {
    if (a && n2(a.serverResponse) && a.code === "auth/multi-factor-auth-required")
      try {
        return new dm(b2, a.serverResponse, c, a.message);
      } catch (d) {
      }
    return null;
  }
  function fm() {
  }
  fm.prototype.ob = function(a, b2, c) {
    return b2.type == wg ? gm(this, a, b2, c) : hm(this, a, b2);
  };
  function gm(a, b2, c, d) {
    return c.Fa().then(function(e) {
      e = {idToken: e};
      typeof d !== "undefined" && (e.displayName = d);
      z2(e, {phoneVerificationInfo: dh(a.a)});
      return N2(b2, Aj, e);
    });
  }
  function hm(a, b2, c) {
    return c.Fa().then(function(d) {
      d = {mfaPendingCredential: d};
      z2(d, {phoneVerificationInfo: dh(a.a)});
      return N2(b2, Bj, d);
    });
  }
  function im(a) {
    K2(this, "factorId", a.ea);
    this.a = a;
  }
  r2(im, fm);
  function jm(a) {
    im.call(this, a);
    if (this.a.ea != hh.PROVIDER_ID)
      throw new t("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
  }
  r2(jm, im);
  function km(a, b2) {
    F2.call(this, a);
    for (var c in b2)
      this[c] = b2[c];
  }
  r2(km, F2);
  function lm(a, b2) {
    this.a = a;
    this.b = [];
    this.c = q2(this.wc, this);
    jd2(this.a, "userReloaded", this.c);
    var c = [];
    b2 && b2.multiFactor && b2.multiFactor.enrolledFactors && w2(b2.multiFactor.enrolledFactors, function(d) {
      var e = null, f = {};
      if (d) {
        d.uid && (f[nf] = d.uid);
        d.displayName && (f[of] = d.displayName);
        d.enrollmentTime && (f[pf] = new Date(d.enrollmentTime).toISOString());
        d.phoneNumber && (f[mf] = d.phoneNumber);
        try {
          e = new rf(f);
        } catch (g2) {
        }
        d = e;
      } else
        d = null;
      d && c.push(d);
    });
    mm(this, c);
  }
  function nm(a) {
    var b2 = [];
    w2(a.mfaInfo || [], function(c) {
      (c = qf(c)) && b2.push(c);
    });
    return b2;
  }
  k2 = lm.prototype;
  k2.wc = function(a) {
    mm(this, nm(a.ed));
  };
  function mm(a, b2) {
    a.b = b2;
    K2(a, "enrolledFactors", b2);
  }
  k2.Ob = function() {
    return this.a.I().then(function(a) {
      return new vg(a, null);
    });
  };
  k2.dc = function(a, b2) {
    var c = this, d = this.a.a;
    return this.Ob().then(function(e) {
      return a.ob(d, e, b2);
    }).then(function(e) {
      om(c.a, e);
      return c.a.reload();
    });
  };
  k2.$c = function(a) {
    var b2 = this, c = typeof a === "string" ? a : a.uid, d = this.a.a;
    return this.a.I().then(function(e) {
      return N2(d, Fj, {idToken: e, mfaEnrollmentId: c});
    }).then(function(e) {
      var f = Oa2(b2.b, function(g2) {
        return g2.uid != c;
      });
      mm(b2, f);
      om(b2.a, e);
      return b2.a.reload().o(function(g2) {
        if (g2.code != "auth/user-token-expired")
          throw g2;
      });
    });
  };
  k2.v = function() {
    return {multiFactor: {enrolledFactors: Pa2(this.b, function(a) {
      return a.v();
    })}};
  };
  function pm(a, b2, c) {
    this.h = a;
    this.i = b2;
    this.g = c;
    this.c = 3e4;
    this.f = 96e4;
    this.b = null;
    this.a = this.c;
    if (this.f < this.c)
      throw Error("Proactive refresh lower bound greater than upper bound!");
  }
  pm.prototype.start = function() {
    this.a = this.c;
    qm(this, true);
  };
  function rm(a, b2) {
    if (b2)
      return a.a = a.c, a.g();
    b2 = a.a;
    a.a *= 2;
    a.a > a.f && (a.a = a.f);
    return b2;
  }
  function qm(a, b2) {
    a.stop();
    a.b = Bd2(rm(a, b2)).then(function() {
      return Ye2();
    }).then(function() {
      return a.h();
    }).then(function() {
      qm(a, true);
    }).o(function(c) {
      a.i(c) && qm(a, false);
    });
  }
  pm.prototype.stop = function() {
    this.b && (this.b.cancel(), this.b = null);
  };
  function sm(a) {
    this.c = a;
    this.b = this.a = null;
  }
  sm.prototype.v = function() {
    return {apiKey: this.c.c, refreshToken: this.a, accessToken: this.b && this.b.toString(), expirationTime: tm(this)};
  };
  function tm(a) {
    return a.b && 1e3 * a.b.c || 0;
  }
  function um(a, b2) {
    var c = b2.refreshToken;
    a.b = gg(b2[Ag] || "");
    a.a = c;
  }
  function vm(a, b2) {
    a.b = b2.b;
    a.a = b2.a;
  }
  function wm(a, b2) {
    return Qi2(a.c, b2).then(function(c) {
      a.b = gg(c.access_token);
      a.a = c.refresh_token;
      return {accessToken: a.b.toString(), refreshToken: a.a};
    }).o(function(c) {
      c.code == "auth/user-token-expired" && (a.a = null);
      throw c;
    });
  }
  sm.prototype.getToken = function(a) {
    a = !!a;
    return this.b && !this.a ? E2(new t("user-token-expired")) : a || !this.b || ua2() > tm(this) - 3e4 ? this.a ? wm(this, {grant_type: "refresh_token", refresh_token: this.a}) : D2(null) : D2({accessToken: this.b.toString(), refreshToken: this.a});
  };
  function xm(a, b2) {
    this.a = a || null;
    this.b = b2 || null;
    L2(this, {lastSignInTime: Ze2(b2 || null), creationTime: Ze2(a || null)});
  }
  function ym(a) {
    return new xm(a.a, a.b);
  }
  xm.prototype.v = function() {
    return {lastLoginAt: this.b, createdAt: this.a};
  };
  function zm(a, b2, c, d, e, f) {
    L2(this, {uid: a, displayName: d || null, photoURL: e || null, email: c || null, phoneNumber: f || null, providerId: b2});
  }
  function P2(a, b2, c) {
    this.N = [];
    this.l = a.apiKey;
    this.m = a.appName;
    this.s = a.authDomain || null;
    a = firebase$1.SDK_VERSION ? Le2(firebase$1.SDK_VERSION) : null;
    this.a = new Ei2(this.l, Aa2(Ba2), a);
    this.b = new sm(this.a);
    Am(this, b2[Ag]);
    um(this.b, b2);
    K2(this, "refreshToken", this.b.a);
    Bm(this, c || {});
    G2.call(this);
    this.P = false;
    this.s && Oe2() && (this.i = Pl(this.s, this.l, this.m));
    this.R = [];
    this.h = null;
    this.B = Cm(this);
    this.Z = q2(this.Ma, this);
    var d = this;
    this.oa = null;
    this.za = function(e) {
      d.va(e.g);
    };
    this.aa = null;
    this.W = [];
    this.ya = function(e) {
      Dm(d, e.c);
    };
    this.$ = null;
    this.O = new lm(this, c);
    K2(this, "multiFactor", this.O);
  }
  r2(P2, G2);
  P2.prototype.va = function(a) {
    this.oa = a;
    Ki2(this.a, a);
  };
  P2.prototype.ja = function() {
    return this.oa;
  };
  function Em(a, b2) {
    a.aa && td2(a.aa, "languageCodeChanged", a.za);
    (a.aa = b2) && jd2(b2, "languageCodeChanged", a.za);
  }
  function Dm(a, b2) {
    a.W = b2;
    Li2(a.a, firebase$1.SDK_VERSION ? Le2(firebase$1.SDK_VERSION, a.W) : null);
  }
  P2.prototype.Ea = function() {
    return Xa2(this.W);
  };
  function Fm(a, b2) {
    a.$ && td2(a.$, "frameworkChanged", a.ya);
    (a.$ = b2) && jd2(b2, "frameworkChanged", a.ya);
  }
  P2.prototype.Ma = function() {
    this.B.b && (this.B.stop(), this.B.start());
  };
  function Gm(a) {
    try {
      return firebase$1.app(a.m).auth();
    } catch (b2) {
      throw new t("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.m + "'!");
    }
  }
  function Cm(a) {
    return new pm(function() {
      return a.I(true);
    }, function(b2) {
      return b2 && b2.code == "auth/network-request-failed" ? true : false;
    }, function() {
      var b2 = tm(a.b) - ua2() - 3e5;
      return 0 < b2 ? b2 : 0;
    });
  }
  function Hm(a) {
    a.D || a.B.b || (a.B.start(), td2(a, "tokenChanged", a.Z), jd2(a, "tokenChanged", a.Z));
  }
  function Im(a) {
    td2(a, "tokenChanged", a.Z);
    a.B.stop();
  }
  function Am(a, b2) {
    a.xa = b2;
    K2(a, "_lat", b2);
  }
  function Jm(a, b2) {
    Va2(a.R, function(c) {
      return c == b2;
    });
  }
  function Km(a) {
    for (var b2 = [], c = 0; c < a.R.length; c++)
      b2.push(a.R[c](a));
    return Fc2(b2).then(function() {
      return a;
    });
  }
  function Lm(a) {
    a.i && !a.P && (a.P = true, Hl(a.i, a));
  }
  function Bm(a, b2) {
    L2(a, {uid: b2.uid, displayName: b2.displayName || null, photoURL: b2.photoURL || null, email: b2.email || null, emailVerified: b2.emailVerified || false, phoneNumber: b2.phoneNumber || null, isAnonymous: b2.isAnonymous || false, tenantId: b2.tenantId || null, metadata: new xm(b2.createdAt, b2.lastLoginAt), providerData: []});
    a.a.b = a.tenantId;
  }
  K2(P2.prototype, "providerId", "firebase");
  function Mm() {
  }
  function Nm(a) {
    return D2().then(function() {
      if (a.D)
        throw new t("app-deleted");
    });
  }
  function Om(a) {
    return Pa2(a.providerData, function(b2) {
      return b2.providerId;
    });
  }
  function Pm(a, b2) {
    b2 && (Qm(a, b2.providerId), a.providerData.push(b2));
  }
  function Qm(a, b2) {
    Va2(a.providerData, function(c) {
      return c.providerId == b2;
    });
  }
  function Rm(a, b2, c) {
    (b2 != "uid" || c) && a.hasOwnProperty(b2) && K2(a, b2, c);
  }
  function Sm(a, b2) {
    a != b2 && (L2(a, {uid: b2.uid, displayName: b2.displayName, photoURL: b2.photoURL, email: b2.email, emailVerified: b2.emailVerified, phoneNumber: b2.phoneNumber, isAnonymous: b2.isAnonymous, tenantId: b2.tenantId, providerData: []}), b2.metadata ? K2(a, "metadata", ym(b2.metadata)) : K2(a, "metadata", new xm()), w2(b2.providerData, function(c) {
      Pm(a, c);
    }), vm(a.b, b2.b), K2(a, "refreshToken", a.b.a), mm(a.O, b2.O.b));
  }
  k2 = P2.prototype;
  k2.reload = function() {
    var a = this;
    return R2(this, Nm(this).then(function() {
      return Tm(a).then(function() {
        return Km(a);
      }).then(Mm);
    }));
  };
  function Tm(a) {
    return a.I().then(function(b2) {
      var c = a.isAnonymous;
      return Um(a, b2).then(function() {
        c || Rm(a, "isAnonymous", false);
        return b2;
      });
    });
  }
  k2.mc = function(a) {
    return this.I(a).then(function(b2) {
      return new $l(b2);
    });
  };
  k2.I = function(a) {
    var b2 = this;
    return R2(this, Nm(this).then(function() {
      return b2.b.getToken(a);
    }).then(function(c) {
      if (!c)
        throw new t("internal-error");
      c.accessToken != b2.xa && (Am(b2, c.accessToken), b2.dispatchEvent(new km("tokenChanged")));
      Rm(b2, "refreshToken", c.refreshToken);
      return c.accessToken;
    }));
  };
  function om(a, b2) {
    b2[Ag] && a.xa != b2[Ag] && (um(a.b, b2), a.dispatchEvent(new km("tokenChanged")), Am(a, b2[Ag]), Rm(a, "refreshToken", a.b.a));
  }
  function Um(a, b2) {
    return N2(a.a, Cj, {idToken: b2}).then(q2(a.Ic, a));
  }
  k2.Ic = function(a) {
    a = a.users;
    if (!a || !a.length)
      throw new t("internal-error");
    a = a[0];
    Bm(this, {uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified, phoneNumber: a.phoneNumber, lastLoginAt: a.lastLoginAt, createdAt: a.createdAt, tenantId: a.tenantId});
    for (var b2 = Vm(a), c = 0; c < b2.length; c++)
      Pm(this, b2[c]);
    Rm(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    this.dispatchEvent(new km("userReloaded", {ed: a}));
  };
  function Vm(a) {
    return (a = a.providerUserInfo) && a.length ? Pa2(a, function(b2) {
      return new zm(b2.rawId, b2.providerId, b2.email, b2.displayName, b2.photoUrl, b2.phoneNumber);
    }) : [];
  }
  k2.Jc = function(a) {
    df("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
    return this.pb(a);
  };
  k2.pb = function(a) {
    var b2 = this, c = null;
    return R2(this, a.c(this.a, this.uid).then(function(d) {
      om(b2, d);
      c = Wm(b2, d, "reauthenticate");
      b2.h = null;
      return b2.reload();
    }).then(function() {
      return c;
    }), true);
  };
  function Xm(a, b2) {
    return Tm(a).then(function() {
      if (Ta2(Om(a), b2))
        return Km(a).then(function() {
          throw new t("provider-already-linked");
        });
    });
  }
  k2.Ac = function(a) {
    df("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
    return this.mb(a);
  };
  k2.mb = function(a) {
    var b2 = this, c = null;
    return R2(this, Xm(this, a.providerId).then(function() {
      return b2.I();
    }).then(function(d) {
      return a.b(b2.a, d);
    }).then(function(d) {
      c = Wm(b2, d, "link");
      return Ym(b2, d);
    }).then(function() {
      return c;
    }));
  };
  k2.Bc = function(a, b2) {
    var c = this;
    return R2(this, Xm(this, "phone").then(function() {
      return Zl(Gm(c), a, b2, q2(c.mb, c));
    }));
  };
  k2.Kc = function(a, b2) {
    var c = this;
    return R2(this, D2().then(function() {
      return Zl(Gm(c), a, b2, q2(c.pb, c));
    }), true);
  };
  function Wm(a, b2, c) {
    var d = mh(b2);
    b2 = lg(b2);
    return gf({user: a, credential: d, additionalUserInfo: b2, operationType: c});
  }
  function Ym(a, b2) {
    om(a, b2);
    return a.reload().then(function() {
      return a;
    });
  }
  k2.xb = function(a) {
    var b2 = this;
    return R2(this, this.I().then(function(c) {
      return b2.a.xb(c, a);
    }).then(function(c) {
      om(b2, c);
      return b2.reload();
    }));
  };
  k2.cd = function(a) {
    var b2 = this;
    return R2(this, this.I().then(function(c) {
      return a.b(b2.a, c);
    }).then(function(c) {
      om(b2, c);
      return b2.reload();
    }));
  };
  k2.yb = function(a) {
    var b2 = this;
    return R2(this, this.I().then(function(c) {
      return b2.a.yb(c, a);
    }).then(function(c) {
      om(b2, c);
      return b2.reload();
    }));
  };
  k2.zb = function(a) {
    if (a.displayName === void 0 && a.photoURL === void 0)
      return Nm(this);
    var b2 = this;
    return R2(this, this.I().then(function(c) {
      return b2.a.zb(c, {displayName: a.displayName, photoUrl: a.photoURL});
    }).then(function(c) {
      om(b2, c);
      Rm(b2, "displayName", c.displayName || null);
      Rm(b2, "photoURL", c.photoUrl || null);
      w2(b2.providerData, function(d) {
        d.providerId === "password" && (K2(d, "displayName", b2.displayName), K2(d, "photoURL", b2.photoURL));
      });
      return Km(b2);
    }).then(Mm));
  };
  k2.ad = function(a) {
    var b2 = this;
    return R2(this, Tm(this).then(function(c) {
      return Ta2(Om(b2), a) ? lj(b2.a, c, [a]).then(function(d) {
        var e = {};
        w2(d.providerUserInfo || [], function(f) {
          e[f.providerId] = true;
        });
        w2(Om(b2), function(f) {
          e[f] || Qm(b2, f);
        });
        e[hh.PROVIDER_ID] || K2(b2, "phoneNumber", null);
        return Km(b2);
      }) : Km(b2).then(function() {
        throw new t("no-such-provider");
      });
    }));
  };
  k2.delete = function() {
    var a = this;
    return R2(this, this.I().then(function(b2) {
      return N2(a.a, zj, {idToken: b2});
    }).then(function() {
      a.dispatchEvent(new km("userDeleted"));
    })).then(function() {
      for (var b2 = 0; b2 < a.N.length; b2++)
        a.N[b2].cancel("app-deleted");
      Em(a, null);
      Fm(a, null);
      a.N = [];
      a.D = true;
      Im(a);
      K2(a, "refreshToken", null);
      a.i && Il(a.i, a);
    });
  };
  k2.Cb = function(a, b2) {
    return a == "linkViaPopup" && (this.g || null) == b2 && this.f || a == "reauthViaPopup" && (this.g || null) == b2 && this.f || a == "linkViaRedirect" && (this.fa || null) == b2 || a == "reauthViaRedirect" && (this.fa || null) == b2 ? true : false;
  };
  k2.la = function(a, b2, c, d) {
    a != "linkViaPopup" && a != "reauthViaPopup" || d != (this.g || null) || (c && this.w ? this.w(c) : b2 && !c && this.f && this.f(b2), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w);
  };
  k2.Da = function(a, b2) {
    return a == "linkViaPopup" && b2 == (this.g || null) ? q2(this.Hb, this) : a == "reauthViaPopup" && b2 == (this.g || null) ? q2(this.Ib, this) : a == "linkViaRedirect" && (this.fa || null) == b2 ? q2(this.Hb, this) : a == "reauthViaRedirect" && (this.fa || null) == b2 ? q2(this.Ib, this) : null;
  };
  k2.Cc = function(a) {
    var b2 = this;
    return Zm(this, "linkViaPopup", a, function() {
      return Xm(b2, a.providerId).then(function() {
        return Km(b2);
      });
    }, false);
  };
  k2.Lc = function(a) {
    return Zm(this, "reauthViaPopup", a, function() {
      return D2();
    }, true);
  };
  function Zm(a, b2, c, d, e) {
    if (!Oe2())
      return E2(new t("operation-not-supported-in-this-environment"));
    if (a.h && !e)
      return E2(a.h);
    var f = kg(c.providerId), g2 = Ne2(a.uid + ":::"), h = null;
    (!Qe2() || Fe2()) && a.s && c.isOAuthProvider && (h = Yj(a.s, a.l, a.m, b2, c, null, g2, firebase$1.SDK_VERSION || null, null, null, a.tenantId));
    var m = we2(h, f && f.ta, f && f.sa);
    d = d().then(function() {
      $m(a);
      if (!e)
        return a.I().then(function() {
        });
    }).then(function() {
      return Ll(a.i, m, b2, c, g2, !!h, a.tenantId);
    }).then(function() {
      return new B2(function(p2, v2) {
        a.la(b2, null, new t("cancelled-popup-request"), a.g || null);
        a.f = p2;
        a.w = v2;
        a.g = g2;
        a.c = Nl(a.i, a, b2, m, g2);
      });
    }).then(function(p2) {
      m && ve2(m);
      return p2 ? gf(p2) : null;
    }).o(function(p2) {
      m && ve2(m);
      throw p2;
    });
    return R2(a, d, e);
  }
  k2.Dc = function(a) {
    var b2 = this;
    return an2(this, "linkViaRedirect", a, function() {
      return Xm(b2, a.providerId);
    }, false);
  };
  k2.Mc = function(a) {
    return an2(this, "reauthViaRedirect", a, function() {
      return D2();
    }, true);
  };
  function an2(a, b2, c, d, e) {
    if (!Oe2())
      return E2(new t("operation-not-supported-in-this-environment"));
    if (a.h && !e)
      return E2(a.h);
    var f = null, g2 = Ne2(a.uid + ":::");
    d = d().then(function() {
      $m(a);
      if (!e)
        return a.I().then(function() {
        });
    }).then(function() {
      a.fa = g2;
      return Km(a);
    }).then(function(h) {
      a.ga && (h = a.ga, h = h.b.set(bn2, a.v(), h.a));
      return h;
    }).then(function() {
      return Ml(a.i, b2, c, g2, a.tenantId);
    }).o(function(h) {
      f = h;
      if (a.ga)
        return cn2(a.ga);
      throw f;
    }).then(function() {
      if (f)
        throw f;
    });
    return R2(a, d, e);
  }
  function $m(a) {
    if (!a.i || !a.P) {
      if (a.i && !a.P)
        throw new t("internal-error");
      throw new t("auth-domain-config-required");
    }
  }
  k2.Hb = function(a, b2, c, d) {
    var e = this;
    this.c && (this.c.cancel(), this.c = null);
    var f = null;
    c = this.I().then(function(g2) {
      return Eg(e.a, {requestUri: a, postBody: d, sessionId: b2, idToken: g2});
    }).then(function(g2) {
      f = Wm(e, g2, "link");
      return Ym(e, g2);
    }).then(function() {
      return f;
    });
    return R2(this, c);
  };
  k2.Ib = function(a, b2, c, d) {
    var e = this;
    this.c && (this.c.cancel(), this.c = null);
    var f = null, g2 = D2().then(function() {
      return zg(Fg(e.a, {requestUri: a, sessionId: b2, postBody: d, tenantId: c}), e.uid);
    }).then(function(h) {
      f = Wm(e, h, "reauthenticate");
      om(e, h);
      e.h = null;
      return e.reload();
    }).then(function() {
      return f;
    });
    return R2(this, g2, true);
  };
  k2.qb = function(a) {
    var b2 = this, c = null;
    return R2(this, this.I().then(function(d) {
      c = d;
      return typeof a === "undefined" || kb2(a) ? {} : Zf(new Pf(a));
    }).then(function(d) {
      return b2.a.qb(c, d);
    }).then(function(d) {
      if (b2.email != d)
        return b2.reload();
    }).then(function() {
    }));
  };
  k2.Ab = function(a, b2) {
    var c = this, d = null;
    return R2(this, this.I().then(function(e) {
      d = e;
      return typeof b2 === "undefined" || kb2(b2) ? {} : Zf(new Pf(b2));
    }).then(function(e) {
      return c.a.Ab(d, a, e);
    }).then(function(e) {
      if (c.email != e)
        return c.reload();
    }).then(function() {
    }));
  };
  function R2(a, b2, c) {
    var d = dn2(a, b2, c);
    a.N.push(d);
    d.ma(function() {
      Ua2(a.N, d);
    });
    return d.o(function(e) {
      var f = null;
      e && e.code === "auth/multi-factor-auth-required" && (f = em(e.v(), Gm(a), q2(a.hc, a)));
      throw f || e;
    });
  }
  k2.hc = function(a) {
    var b2 = null, c = this;
    a = zg(D2(a), c.uid).then(function(d) {
      b2 = Wm(c, d, "reauthenticate");
      om(c, d);
      c.h = null;
      return c.reload();
    }).then(function() {
      return b2;
    });
    return R2(this, a, true);
  };
  function dn2(a, b2, c) {
    return a.h && !c ? (b2.cancel(), E2(a.h)) : b2.o(function(d) {
      !d || d.code != "auth/user-disabled" && d.code != "auth/user-token-expired" || (a.h || a.dispatchEvent(new km("userInvalidated")), a.h = d);
      throw d;
    });
  }
  k2.toJSON = function() {
    return this.v();
  };
  k2.v = function() {
    var a = {uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, tenantId: this.tenantId, providerData: [], apiKey: this.l, appName: this.m, authDomain: this.s, stsTokenManager: this.b.v(), redirectEventId: this.fa || null};
    this.metadata && z2(a, this.metadata.v());
    w2(this.providerData, function(b2) {
      a.providerData.push(hf(b2));
    });
    z2(a, this.O.v());
    return a;
  };
  function en2(a) {
    if (!a.apiKey)
      return null;
    var b2 = {apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName}, c = {};
    if (a.stsTokenManager && a.stsTokenManager.accessToken)
      c[Ag] = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null;
    else
      return null;
    var d = new P2(b2, c, a);
    a.providerData && w2(a.providerData, function(e) {
      e && Pm(d, gf(e));
    });
    a.redirectEventId && (d.fa = a.redirectEventId);
    return d;
  }
  function fn2(a, b2, c, d) {
    var e = new P2(a, b2);
    c && (e.ga = c);
    d && Dm(e, d);
    return e.reload().then(function() {
      return e;
    });
  }
  function gn2(a, b2, c, d) {
    var e = a.b, f = {};
    f[Ag] = e.b && e.b.toString();
    f.refreshToken = e.a;
    b2 = new P2(b2 || {apiKey: a.l, authDomain: a.s, appName: a.m}, f);
    c && (b2.ga = c);
    d && Dm(b2, d);
    Sm(b2, a);
    return b2;
  }
  function hn2(a) {
    this.a = a;
    this.b = Ok();
  }
  var bn2 = {name: "redirectUser", F: "session"};
  function cn2(a) {
    return Sk(a.b, bn2, a.a);
  }
  function jn2(a, b2) {
    return a.b.get(bn2, a.a).then(function(c) {
      c && b2 && (c.authDomain = b2);
      return en2(c || {});
    });
  }
  function kn2(a) {
    this.a = a;
    this.b = Ok();
    this.c = null;
    this.f = ln2(this);
    this.b.addListener(mn2("local"), this.a, q2(this.g, this));
  }
  kn2.prototype.g = function() {
    var a = this, b2 = mn2("local");
    nn2(this, function() {
      return D2().then(function() {
        return a.c && a.c.F != "local" ? a.b.get(b2, a.a) : null;
      }).then(function(c) {
        if (c)
          return on2(a, "local").then(function() {
            a.c = b2;
          });
      });
    });
  };
  function on2(a, b2) {
    var c = [], d;
    for (d in Kk)
      Kk[d] !== b2 && c.push(Sk(a.b, mn2(Kk[d]), a.a));
    c.push(Sk(a.b, pn2, a.a));
    return Ec2(c);
  }
  function ln2(a) {
    var b2 = mn2("local"), c = mn2("session"), d = mn2("none");
    return Rk(a.b, b2, a.a).then(function() {
      return a.b.get(c, a.a);
    }).then(function(e) {
      return e ? c : a.b.get(d, a.a).then(function(f) {
        return f ? d : a.b.get(b2, a.a).then(function(g2) {
          return g2 ? b2 : a.b.get(pn2, a.a).then(function(h) {
            return h ? mn2(h) : b2;
          });
        });
      });
    }).then(function(e) {
      a.c = e;
      return on2(a, e.F);
    }).o(function() {
      a.c || (a.c = b2);
    });
  }
  var pn2 = {name: "persistence", F: "session"};
  function mn2(a) {
    return {name: "authUser", F: a};
  }
  kn2.prototype.tb = function(a) {
    var b2 = null, c = this;
    Lk(a);
    return nn2(this, function() {
      return a != c.c.F ? c.b.get(c.c, c.a).then(function(d) {
        b2 = d;
        return on2(c, a);
      }).then(function() {
        c.c = mn2(a);
        if (b2)
          return c.b.set(c.c, b2, c.a);
      }) : D2();
    });
  };
  function qn2(a) {
    return nn2(a, function() {
      return a.b.set(pn2, a.c.F, a.a);
    });
  }
  function rn2(a, b2) {
    return nn2(a, function() {
      return a.b.set(a.c, b2.v(), a.a);
    });
  }
  function sn2(a) {
    return nn2(a, function() {
      return Sk(a.b, a.c, a.a);
    });
  }
  function tn2(a, b2) {
    return nn2(a, function() {
      return a.b.get(a.c, a.a).then(function(c) {
        c && b2 && (c.authDomain = b2);
        return en2(c || {});
      });
    });
  }
  function nn2(a, b2) {
    a.f = a.f.then(b2, b2);
    return a.f;
  }
  function un2(a) {
    this.l = false;
    K2(this, "settings", new Xl());
    K2(this, "app", a);
    if (S2(this).options && S2(this).options.apiKey)
      a = firebase$1.SDK_VERSION ? Le2(firebase$1.SDK_VERSION) : null, this.b = new Ei2(S2(this).options && S2(this).options.apiKey, Aa2(Ba2), a);
    else
      throw new t("invalid-api-key");
    this.P = [];
    this.m = [];
    this.O = [];
    this.$b = firebase$1.INTERNAL.createSubscribe(q2(this.xc, this));
    this.W = void 0;
    this.ac = firebase$1.INTERNAL.createSubscribe(q2(this.yc, this));
    vn2(this, null);
    this.i = new kn2(S2(this).options.apiKey + ":" + S2(this).name);
    this.B = new hn2(S2(this).options.apiKey + ":" + S2(this).name);
    this.Z = T2(this, wn2(this));
    this.h = T2(this, xn2(this));
    this.aa = false;
    this.oa = q2(this.Xc, this);
    this.Ma = q2(this.ca, this);
    this.xa = q2(this.jc, this);
    this.ya = q2(this.uc, this);
    this.za = q2(this.vc, this);
    this.a = null;
    yn2(this);
    this.INTERNAL = {};
    this.INTERNAL["delete"] = q2(this.delete, this);
    this.INTERNAL.logFramework = q2(this.Ec, this);
    this.s = 0;
    G2.call(this);
    zn2(this);
    this.N = [];
  }
  r2(un2, G2);
  function An2(a) {
    F2.call(this, "languageCodeChanged");
    this.g = a;
  }
  r2(An2, F2);
  function Bn2(a) {
    F2.call(this, "frameworkChanged");
    this.c = a;
  }
  r2(Bn2, F2);
  k2 = un2.prototype;
  k2.tb = function(a) {
    a = this.i.tb(a);
    return T2(this, a);
  };
  k2.va = function(a) {
    this.$ === a || this.l || (this.$ = a, Ki2(this.b, this.$), this.dispatchEvent(new An2(this.ja())));
  };
  k2.ja = function() {
    return this.$;
  };
  k2.dd = function() {
    var a = l.navigator;
    this.va(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
  };
  k2.Ec = function(a) {
    this.N.push(a);
    Li2(this.b, firebase$1.SDK_VERSION ? Le2(firebase$1.SDK_VERSION, this.N) : null);
    this.dispatchEvent(new Bn2(this.N));
  };
  k2.Ea = function() {
    return Xa2(this.N);
  };
  k2.ub = function(a) {
    this.R === a || this.l || (this.R = a, this.b.b = this.R);
  };
  k2.S = function() {
    return this.R;
  };
  function zn2(a) {
    Object.defineProperty(a, "lc", {get: function() {
      return this.ja();
    }, set: function(b2) {
      this.va(b2);
    }, enumerable: false});
    a.$ = null;
    Object.defineProperty(a, "ti", {get: function() {
      return this.S();
    }, set: function(b2) {
      this.ub(b2);
    }, enumerable: false});
    a.R = null;
  }
  k2.toJSON = function() {
    return {apiKey: S2(this).options.apiKey, authDomain: S2(this).options.authDomain, appName: S2(this).name, currentUser: U2(this) && U2(this).v()};
  };
  function Cn2(a) {
    return a.Zb || E2(new t("auth-domain-config-required"));
  }
  function yn2(a) {
    var b2 = S2(a).options.authDomain, c = S2(a).options.apiKey;
    b2 && Oe2() && (a.Zb = a.Z.then(function() {
      if (!a.l) {
        a.a = Pl(b2, c, S2(a).name);
        Hl(a.a, a);
        U2(a) && Lm(U2(a));
        if (a.D) {
          Lm(a.D);
          var d = a.D;
          d.va(a.ja());
          Em(d, a);
          d = a.D;
          Dm(d, a.N);
          Fm(d, a);
          a.D = null;
        }
        return a.a;
      }
    }));
  }
  k2.Cb = function(a, b2) {
    switch (a) {
      case "unknown":
      case "signInViaRedirect":
        return true;
      case "signInViaPopup":
        return this.g == b2 && !!this.f;
      default:
        return false;
    }
  };
  k2.la = function(a, b2, c, d) {
    a == "signInViaPopup" && this.g == d && (c && this.w ? this.w(c) : b2 && !c && this.f && this.f(b2), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w);
  };
  k2.Da = function(a, b2) {
    return a == "signInViaRedirect" || a == "signInViaPopup" && this.g == b2 && this.f ? q2(this.gc, this) : null;
  };
  k2.gc = function(a, b2, c, d) {
    var e = this, f = {requestUri: a, postBody: d, sessionId: b2, tenantId: c};
    this.c && (this.c.cancel(), this.c = null);
    return e.Z.then(function() {
      return Dn2(e, Cg(e.b, f));
    });
  };
  k2.Vc = function(a) {
    if (!Oe2())
      return E2(new t("operation-not-supported-in-this-environment"));
    var b2 = this, c = kg(a.providerId), d = Ne2(), e = null;
    (!Qe2() || Fe2()) && S2(this).options.authDomain && a.isOAuthProvider && (e = Yj(S2(this).options.authDomain, S2(this).options.apiKey, S2(this).name, "signInViaPopup", a, null, d, firebase$1.SDK_VERSION || null, null, null, this.S()));
    var f = we2(e, c && c.ta, c && c.sa);
    c = Cn2(this).then(function(g2) {
      return Ll(g2, f, "signInViaPopup", a, d, !!e, b2.S());
    }).then(function() {
      return new B2(function(g2, h) {
        b2.la("signInViaPopup", null, new t("cancelled-popup-request"), b2.g);
        b2.f = g2;
        b2.w = h;
        b2.g = d;
        b2.c = Nl(b2.a, b2, "signInViaPopup", f, d);
      });
    }).then(function(g2) {
      f && ve2(f);
      return g2 ? gf(g2) : null;
    }).o(function(g2) {
      f && ve2(f);
      throw g2;
    });
    return T2(this, c);
  };
  k2.Wc = function(a) {
    if (!Oe2())
      return E2(new t("operation-not-supported-in-this-environment"));
    var b2 = this, c = Cn2(this).then(function() {
      return qn2(b2.i);
    }).then(function() {
      return Ml(b2.a, "signInViaRedirect", a, void 0, b2.S());
    });
    return T2(this, c);
  };
  function En2(a) {
    if (!Oe2())
      return E2(new t("operation-not-supported-in-this-environment"));
    var b2 = Cn2(a).then(function() {
      return a.a.pa();
    }).then(function(c) {
      return c ? gf(c) : null;
    });
    return T2(a, b2);
  }
  k2.pa = function() {
    var a = this;
    return En2(this).then(function(b2) {
      a.a && Sl(a.a.b);
      return b2;
    }).o(function(b2) {
      a.a && Sl(a.a.b);
      throw b2;
    });
  };
  k2.bd = function(a) {
    if (!a)
      return E2(new t("null-user"));
    if (this.R != a.tenantId)
      return E2(new t("tenant-id-mismatch"));
    var b2 = this, c = {};
    c.apiKey = S2(this).options.apiKey;
    c.authDomain = S2(this).options.authDomain;
    c.appName = S2(this).name;
    var d = gn2(a, c, b2.B, b2.Ea());
    return T2(this, this.h.then(function() {
      if (S2(b2).options.apiKey != a.l)
        return d.reload();
    }).then(function() {
      if (U2(b2) && a.uid == U2(b2).uid)
        return Sm(U2(b2), a), b2.ca(a);
      vn2(b2, d);
      Lm(d);
      return b2.ca(d);
    }).then(function() {
      Fn2(b2);
    }));
  };
  function Gn2(a, b2) {
    var c = {};
    c.apiKey = S2(a).options.apiKey;
    c.authDomain = S2(a).options.authDomain;
    c.appName = S2(a).name;
    return a.Z.then(function() {
      return fn2(c, b2, a.B, a.Ea());
    }).then(function(d) {
      if (U2(a) && d.uid == U2(a).uid)
        return Sm(U2(a), d), a.ca(d);
      vn2(a, d);
      Lm(d);
      return a.ca(d);
    }).then(function() {
      Fn2(a);
    });
  }
  function vn2(a, b2) {
    U2(a) && (Jm(U2(a), a.Ma), td2(U2(a), "tokenChanged", a.xa), td2(U2(a), "userDeleted", a.ya), td2(U2(a), "userInvalidated", a.za), Im(U2(a)));
    b2 && (b2.R.push(a.Ma), jd2(b2, "tokenChanged", a.xa), jd2(b2, "userDeleted", a.ya), jd2(b2, "userInvalidated", a.za), 0 < a.s && Hm(b2));
    K2(a, "currentUser", b2);
    b2 && (b2.va(a.ja()), Em(b2, a), Dm(b2, a.N), Fm(b2, a));
  }
  k2.wb = function() {
    var a = this, b2 = this.h.then(function() {
      a.a && Sl(a.a.b);
      if (!U2(a))
        return D2();
      vn2(a, null);
      return sn2(a.i).then(function() {
        Fn2(a);
      });
    });
    return T2(this, b2);
  };
  function Hn2(a) {
    var b2 = jn2(a.B, S2(a).options.authDomain).then(function(c) {
      if (a.D = c)
        c.ga = a.B;
      return cn2(a.B);
    });
    return T2(a, b2);
  }
  function wn2(a) {
    var b2 = S2(a).options.authDomain, c = Hn2(a).then(function() {
      return tn2(a.i, b2);
    }).then(function(d) {
      return d ? (d.ga = a.B, a.D && (a.D.fa || null) == (d.fa || null) ? d : d.reload().then(function() {
        return rn2(a.i, d).then(function() {
          return d;
        });
      }).o(function(e) {
        return e.code == "auth/network-request-failed" ? d : sn2(a.i);
      })) : null;
    }).then(function(d) {
      vn2(a, d || null);
    });
    return T2(a, c);
  }
  function xn2(a) {
    return a.Z.then(function() {
      return En2(a);
    }).o(function() {
    }).then(function() {
      if (!a.l)
        return a.oa();
    }).o(function() {
    }).then(function() {
      if (!a.l) {
        a.aa = true;
        var b2 = a.i;
        b2.b.addListener(mn2("local"), b2.a, a.oa);
      }
    });
  }
  k2.Xc = function() {
    var a = this;
    return tn2(this.i, S2(this).options.authDomain).then(function(b2) {
      if (!a.l) {
        var c;
        if (c = U2(a) && b2) {
          c = U2(a).uid;
          var d = b2.uid;
          c = c === void 0 || c === null || c === "" || d === void 0 || d === null || d === "" ? false : c == d;
        }
        if (c)
          return Sm(U2(a), b2), U2(a).I();
        if (U2(a) || b2)
          vn2(a, b2), b2 && (Lm(b2), b2.ga = a.B), a.a && Hl(a.a, a), Fn2(a);
      }
    });
  };
  k2.ca = function(a) {
    return rn2(this.i, a);
  };
  k2.jc = function() {
    Fn2(this);
    this.ca(U2(this));
  };
  k2.uc = function() {
    this.wb();
  };
  k2.vc = function() {
    this.wb();
  };
  function Dn2(a, b2) {
    var c = null, d = null;
    return T2(a, b2.then(function(e) {
      c = mh(e);
      d = lg(e);
      return Gn2(a, e);
    }, function(e) {
      var f = null;
      e && e.code === "auth/multi-factor-auth-required" && (f = em(e.v(), a, q2(a.ic, a)));
      throw f || e;
    }).then(function() {
      return gf({user: U2(a), credential: c, additionalUserInfo: d, operationType: "signIn"});
    }));
  }
  k2.ic = function(a) {
    var b2 = this;
    return this.h.then(function() {
      return Dn2(b2, D2(a));
    });
  };
  k2.xc = function(a) {
    var b2 = this;
    this.addAuthTokenListener(function() {
      a.next(U2(b2));
    });
  };
  k2.yc = function(a) {
    var b2 = this;
    In2(this, function() {
      a.next(U2(b2));
    });
  };
  k2.Gc = function(a, b2, c) {
    var d = this;
    this.aa && Promise.resolve().then(function() {
      typeof a === "function" ? a(U2(d)) : typeof a.next === "function" && a.next(U2(d));
    });
    return this.$b(a, b2, c);
  };
  k2.Fc = function(a, b2, c) {
    var d = this;
    this.aa && Promise.resolve().then(function() {
      d.W = d.getUid();
      typeof a === "function" ? a(U2(d)) : typeof a.next === "function" && a.next(U2(d));
    });
    return this.ac(a, b2, c);
  };
  k2.kc = function(a) {
    var b2 = this, c = this.h.then(function() {
      return U2(b2) ? U2(b2).I(a).then(function(d) {
        return {accessToken: d};
      }) : null;
    });
    return T2(this, c);
  };
  k2.Rc = function(a) {
    var b2 = this;
    return this.h.then(function() {
      return Dn2(b2, N2(b2.b, Ej, {token: a}));
    }).then(function(c) {
      var d = c.user;
      Rm(d, "isAnonymous", false);
      b2.ca(d);
      return c;
    });
  };
  k2.Sc = function(a, b2) {
    var c = this;
    return this.h.then(function() {
      return Dn2(c, N2(c.b, Xg, {email: a, password: b2}));
    });
  };
  k2.cc = function(a, b2) {
    var c = this;
    return this.h.then(function() {
      return Dn2(c, N2(c.b, yj, {email: a, password: b2}));
    });
  };
  k2.Ya = function(a) {
    var b2 = this;
    return this.h.then(function() {
      return Dn2(b2, a.ia(b2.b));
    });
  };
  k2.Qc = function(a) {
    df("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
    return this.Ya(a);
  };
  k2.vb = function() {
    var a = this;
    return this.h.then(function() {
      var b2 = U2(a);
      if (b2 && b2.isAnonymous) {
        var c = gf({providerId: null, isNewUser: false});
        return gf({user: b2, credential: null, additionalUserInfo: c, operationType: "signIn"});
      }
      return Dn2(a, a.b.vb()).then(function(d) {
        var e = d.user;
        Rm(e, "isAnonymous", true);
        a.ca(e);
        return d;
      });
    });
  };
  function S2(a) {
    return a.app;
  }
  function U2(a) {
    return a.currentUser;
  }
  k2.getUid = function() {
    return U2(this) && U2(this).uid || null;
  };
  function Jn2(a) {
    return U2(a) && U2(a)._lat || null;
  }
  function Fn2(a) {
    if (a.aa) {
      for (var b2 = 0; b2 < a.m.length; b2++)
        if (a.m[b2])
          a.m[b2](Jn2(a));
      if (a.W !== a.getUid() && a.O.length) {
        for (a.W = a.getUid(), b2 = 0; b2 < a.O.length; b2++)
          if (a.O[b2])
            a.O[b2](Jn2(a));
      }
    }
  }
  k2.bc = function(a) {
    this.addAuthTokenListener(a);
    this.s++;
    0 < this.s && U2(this) && Hm(U2(this));
  };
  k2.Nc = function(a) {
    var b2 = this;
    w2(this.m, function(c) {
      c == a && b2.s--;
    });
    0 > this.s && (this.s = 0);
    this.s == 0 && U2(this) && Im(U2(this));
    this.removeAuthTokenListener(a);
  };
  k2.addAuthTokenListener = function(a) {
    var b2 = this;
    this.m.push(a);
    T2(this, this.h.then(function() {
      b2.l || Ta2(b2.m, a) && a(Jn2(b2));
    }));
  };
  k2.removeAuthTokenListener = function(a) {
    Va2(this.m, function(b2) {
      return b2 == a;
    });
  };
  function In2(a, b2) {
    a.O.push(b2);
    T2(a, a.h.then(function() {
      !a.l && Ta2(a.O, b2) && a.W !== a.getUid() && (a.W = a.getUid(), b2(Jn2(a)));
    }));
  }
  k2.delete = function() {
    this.l = true;
    for (var a = 0; a < this.P.length; a++)
      this.P[a].cancel("app-deleted");
    this.P = [];
    this.i && (a = this.i, a.b.removeListener(mn2("local"), a.a, this.oa));
    this.a && (Il(this.a, this), Sl(this.a.b));
    return Promise.resolve();
  };
  function T2(a, b2) {
    a.P.push(b2);
    b2.ma(function() {
      Ua2(a.P, b2);
    });
    return b2;
  }
  k2.fc = function(a) {
    return T2(this, Vi2(this.b, a));
  };
  k2.zc = function(a) {
    return !!bh(a);
  };
  k2.sb = function(a, b2) {
    var c = this;
    return T2(this, D2().then(function() {
      var d = new Pf(b2);
      if (!d.c)
        throw new t("argument-error", Xf + " must be true when sending sign in link to email");
      return Zf(d);
    }).then(function(d) {
      return c.b.sb(a, d);
    }).then(function() {
    }));
  };
  k2.fd = function(a) {
    return this.Pa(a).then(function(b2) {
      return b2.data.email;
    });
  };
  k2.jb = function(a, b2) {
    return T2(this, this.b.jb(a, b2).then(function() {
    }));
  };
  k2.Pa = function(a) {
    return T2(this, this.b.Pa(a).then(function(b2) {
      return new sf(b2);
    }));
  };
  k2.fb = function(a) {
    return T2(this, this.b.fb(a).then(function() {
    }));
  };
  k2.rb = function(a, b2) {
    var c = this;
    return T2(this, D2().then(function() {
      return typeof b2 === "undefined" || kb2(b2) ? {} : Zf(new Pf(b2));
    }).then(function(d) {
      return c.b.rb(a, d);
    }).then(function() {
    }));
  };
  k2.Uc = function(a, b2) {
    return T2(this, Zl(this, a, b2, q2(this.Ya, this)));
  };
  k2.Tc = function(a, b2) {
    var c = this;
    return T2(this, D2().then(function() {
      var d = b2 || oe2(), e = ah(a, d);
      d = bh(d);
      if (!d)
        throw new t("argument-error", "Invalid email link!");
      if (d.tenantId !== c.S())
        throw new t("tenant-id-mismatch");
      return c.Ya(e);
    }));
  };
  function Kn2() {
  }
  Kn2.prototype.render = function() {
  };
  Kn2.prototype.reset = function() {
  };
  Kn2.prototype.getResponse = function() {
  };
  Kn2.prototype.execute = function() {
  };
  function Ln2() {
    this.a = {};
    this.b = 1e12;
  }
  var Mn2 = null;
  Ln2.prototype.render = function(a, b2) {
    this.a[this.b.toString()] = new Nn2(a, b2);
    return this.b++;
  };
  Ln2.prototype.reset = function(a) {
    var b2 = On2(this, a);
    a = Pn2(a);
    b2 && a && (b2.delete(), delete this.a[a]);
  };
  Ln2.prototype.getResponse = function(a) {
    return (a = On2(this, a)) ? a.getResponse() : null;
  };
  Ln2.prototype.execute = function(a) {
    (a = On2(this, a)) && a.execute();
  };
  function On2(a, b2) {
    return (b2 = Pn2(b2)) ? a.a[b2] || null : null;
  }
  function Pn2(a) {
    return (a = typeof a === "undefined" ? 1e12 : a) ? a.toString() : null;
  }
  function Nn2(a, b2) {
    this.g = false;
    this.c = b2;
    this.a = this.b = null;
    this.h = this.c.size !== "invisible";
    this.f = fc2(a);
    var c = this;
    this.i = function() {
      c.execute();
    };
    this.h ? this.execute() : jd2(this.f, "click", this.i);
  }
  Nn2.prototype.getResponse = function() {
    Qn2(this);
    return this.b;
  };
  Nn2.prototype.execute = function() {
    Qn2(this);
    var a = this;
    this.a || (this.a = setTimeout(function() {
      a.b = Je2();
      var b2 = a.c.callback, c = a.c["expired-callback"];
      if (b2)
        try {
          b2(a.b);
        } catch (d) {
        }
      a.a = setTimeout(function() {
        a.a = null;
        a.b = null;
        if (c)
          try {
            c();
          } catch (d) {
          }
        a.h && a.execute();
      }, 6e4);
    }, 500));
  };
  Nn2.prototype.delete = function() {
    Qn2(this);
    this.g = true;
    clearTimeout(this.a);
    this.a = null;
    td2(this.f, "click", this.i);
  };
  function Qn2(a) {
    if (a.g)
      throw Error("reCAPTCHA mock was already deleted!");
  }
  function Rn2() {
  }
  K2(Rn2, "FACTOR_ID", "phone");
  function Sn2() {
  }
  Sn2.prototype.g = function() {
    Mn2 || (Mn2 = new Ln2());
    return D2(Mn2);
  };
  Sn2.prototype.c = function() {
  };
  var Tn2 = null;
  function Un2() {
    this.b = l.grecaptcha ? Infinity : 0;
    this.f = null;
    this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString();
  }
  var Vn2 = new ob2(pb2, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"), Wn2 = new We2(3e4, 6e4);
  Un2.prototype.g = function(a) {
    var b2 = this;
    return new B2(function(c, d) {
      var e = setTimeout(function() {
        d(new t("network-request-failed"));
      }, Wn2.get());
      if (!l.grecaptcha || a !== b2.f && !b2.b) {
        l[b2.a] = function() {
          if (l.grecaptcha) {
            b2.f = a;
            var g2 = l.grecaptcha.render;
            l.grecaptcha.render = function(h, m) {
              h = g2(h, m);
              b2.b++;
              return h;
            };
            clearTimeout(e);
            c(l.grecaptcha);
          } else
            clearTimeout(e), d(new t("internal-error"));
          delete l[b2.a];
        };
        var f = xb2(Vn2, {onload: b2.a, hl: a || ""});
        D2(xi2(f)).o(function() {
          clearTimeout(e);
          d(new t("internal-error", "Unable to load external reCAPTCHA dependencies!"));
        });
      } else
        clearTimeout(e), c(l.grecaptcha);
    });
  };
  Un2.prototype.c = function() {
    this.b--;
  };
  var Xn2 = null;
  function Yn2(a, b2, c, d, e, f, g2) {
    K2(this, "type", "recaptcha");
    this.c = this.f = null;
    this.D = false;
    this.u = b2;
    this.g = null;
    g2 ? (Tn2 || (Tn2 = new Sn2()), g2 = Tn2) : (Xn2 || (Xn2 = new Un2()), g2 = Xn2);
    this.m = g2;
    this.a = c || {theme: "light", type: "image"};
    this.h = [];
    if (this.a[Zn2])
      throw new t("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
    this.i = this.a[$n2] === "invisible";
    if (!l.document)
      throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
    if (!fc2(b2) || !this.i && fc2(b2).hasChildNodes())
      throw new t("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
    this.s = new Ei2(a, f || null, e || null);
    this.w = d || function() {
      return null;
    };
    var h = this;
    this.l = [];
    var m = this.a[ao2];
    this.a[ao2] = function(v2) {
      bo2(h, v2);
      if (typeof m === "function")
        m(v2);
      else if (typeof m === "string") {
        var C2 = J2(m, l);
        typeof C2 === "function" && C2(v2);
      }
    };
    var p2 = this.a[co2];
    this.a[co2] = function() {
      bo2(h, null);
      if (typeof p2 === "function")
        p2();
      else if (typeof p2 === "string") {
        var v2 = J2(p2, l);
        typeof v2 === "function" && v2();
      }
    };
  }
  var ao2 = "callback", co2 = "expired-callback", Zn2 = "sitekey", $n2 = "size";
  function bo2(a, b2) {
    for (var c = 0; c < a.l.length; c++)
      try {
        a.l[c](b2);
      } catch (d) {
      }
  }
  function eo2(a, b2) {
    Va2(a.l, function(c) {
      return c == b2;
    });
  }
  function fo2(a, b2) {
    a.h.push(b2);
    b2.ma(function() {
      Ua2(a.h, b2);
    });
    return b2;
  }
  k2 = Yn2.prototype;
  k2.Ga = function() {
    var a = this;
    return this.f ? this.f : this.f = fo2(this, D2().then(function() {
      if (Pe2() && !Ge2())
        return Be2();
      throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
    }).then(function() {
      return a.m.g(a.w());
    }).then(function(b2) {
      a.g = b2;
      return N2(a.s, Dj, {});
    }).then(function(b2) {
      a.a[Zn2] = b2.recaptchaSiteKey;
    }).o(function(b2) {
      a.f = null;
      throw b2;
    }));
  };
  k2.render = function() {
    go2(this);
    var a = this;
    return fo2(this, this.Ga().then(function() {
      if (a.c === null) {
        var b2 = a.u;
        if (!a.i) {
          var c = fc2(b2);
          b2 = ic2("DIV");
          c.appendChild(b2);
        }
        a.c = a.g.render(b2, a.a);
      }
      return a.c;
    }));
  };
  k2.verify = function() {
    go2(this);
    var a = this;
    return fo2(this, this.render().then(function(b2) {
      return new B2(function(c) {
        var d = a.g.getResponse(b2);
        if (d)
          c(d);
        else {
          var e = function(f) {
            f && (eo2(a, e), c(f));
          };
          a.l.push(e);
          a.i && a.g.execute(a.c);
        }
      });
    }));
  };
  k2.reset = function() {
    go2(this);
    this.c !== null && this.g.reset(this.c);
  };
  function go2(a) {
    if (a.D)
      throw new t("internal-error", "RecaptchaVerifier instance has been destroyed.");
  }
  k2.clear = function() {
    go2(this);
    this.D = true;
    this.m.c();
    for (var a = 0; a < this.h.length; a++)
      this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");
    if (!this.i) {
      a = fc2(this.u);
      for (var b2; b2 = a.firstChild; )
        a.removeChild(b2);
    }
  };
  function ho2(a, b2, c) {
    var d = false;
    try {
      this.b = c || firebase$1.app();
    } catch (g2) {
      throw new t("argument-error", "No firebase.app.App instance is currently initialized.");
    }
    if (this.b.options && this.b.options.apiKey)
      c = this.b.options.apiKey;
    else
      throw new t("invalid-api-key");
    var e = this, f = null;
    try {
      f = this.b.auth().Ea();
    } catch (g2) {
    }
    try {
      d = this.b.auth().settings.appVerificationDisabledForTesting;
    } catch (g2) {
    }
    f = firebase$1.SDK_VERSION ? Le2(firebase$1.SDK_VERSION, f) : null;
    Yn2.call(this, c, a, b2, function() {
      try {
        var g2 = e.b.auth().ja();
      } catch (h) {
        g2 = null;
      }
      return g2;
    }, f, Aa2(Ba2), d);
  }
  r2(ho2, Yn2);
  function io2(a, b2, c, d) {
    a: {
      c = Array.prototype.slice.call(c);
      var e = 0;
      for (var f = false, g2 = 0; g2 < b2.length; g2++)
        if (b2[g2].optional)
          f = true;
        else {
          if (f)
            throw new t("internal-error", "Argument validator encountered a required argument after an optional argument.");
          e++;
        }
      f = b2.length;
      if (c.length < e || f < c.length)
        d = "Expected " + (e == f ? e == 1 ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";
      else {
        for (e = 0; e < c.length; e++)
          if (f = b2[e].optional && c[e] === void 0, !b2[e].K(c[e]) && !f) {
            b2 = b2[e];
            if (0 > e || e >= jo2.length)
              throw new t("internal-error", "Argument validator received an unsupported number of arguments.");
            c = jo2[e];
            d = (d ? "" : c + " argument ") + (b2.name ? '"' + b2.name + '" ' : "") + "must be " + b2.J + ".";
            break a;
          }
        d = null;
      }
    }
    if (d)
      throw new t("argument-error", a + " failed: " + d);
  }
  var jo2 = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");
  function V2(a, b2) {
    return {name: a || "", J: "a valid string", optional: !!b2, K: function(c) {
      return typeof c === "string";
    }};
  }
  function ko2(a, b2) {
    return {name: a || "", J: "a boolean", optional: !!b2, K: function(c) {
      return typeof c === "boolean";
    }};
  }
  function W2(a, b2) {
    return {name: a || "", J: "a valid object", optional: !!b2, K: n2};
  }
  function lo2(a, b2) {
    return {name: a || "", J: "a function", optional: !!b2, K: function(c) {
      return typeof c === "function";
    }};
  }
  function mo2(a, b2) {
    return {name: a || "", J: "null", optional: !!b2, K: function(c) {
      return c === null;
    }};
  }
  function no2() {
    return {name: "", J: "an HTML element", optional: false, K: function(a) {
      return !!(a && a instanceof Element);
    }};
  }
  function oo2() {
    return {name: "auth", J: "an instance of Firebase Auth", optional: true, K: function(a) {
      return !!(a && a instanceof un2);
    }};
  }
  function po2() {
    return {name: "app", J: "an instance of Firebase App", optional: true, K: function(a) {
      return !!(a && a instanceof firebase$1.app.App);
    }};
  }
  function qo2(a) {
    return {name: a ? a + "Credential" : "credential", J: a ? "a valid " + a + " credential" : "a valid credential", optional: false, K: function(b2) {
      if (!b2)
        return false;
      var c = !a || b2.providerId === a;
      return !(!b2.ia || !c);
    }};
  }
  function ro2() {
    return {name: "multiFactorAssertion", J: "a valid multiFactorAssertion", optional: false, K: function(a) {
      return a ? !!a.ob : false;
    }};
  }
  function so2() {
    return {name: "authProvider", J: "a valid Auth provider", optional: false, K: function(a) {
      return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
    }};
  }
  function to2(a, b2) {
    return n2(a) && typeof a.type === "string" && a.type === b2 && typeof a.Fa === "function";
  }
  function uo2(a) {
    return n2(a) && typeof a.uid === "string";
  }
  function vo2() {
    return {name: "applicationVerifier", J: "an implementation of firebase.auth.ApplicationVerifier", optional: false, K: function(a) {
      return !(!a || typeof a.type !== "string" || typeof a.verify !== "function");
    }};
  }
  function X2(a, b2, c, d) {
    return {name: c || "", J: a.J + " or " + b2.J, optional: !!d, K: function(e) {
      return a.K(e) || b2.K(e);
    }};
  }
  function Y2(a, b2) {
    for (var c in b2) {
      var d = b2[c].name;
      a[d] = wo2(d, a[c], b2[c].j);
    }
  }
  function xo2(a, b2) {
    for (var c in b2) {
      var d = b2[c].name;
      d !== c && Object.defineProperty(a, d, {get: ta2(function(e) {
        return this[e];
      }, c), set: ta2(function(e, f, g2, h) {
        io2(e, [g2], [h], true);
        this[f] = h;
      }, d, c, b2[c].gb), enumerable: true});
    }
  }
  function Z2(a, b2, c, d) {
    a[b2] = wo2(b2, c, d);
  }
  function wo2(a, b2, c) {
    function d() {
      var g2 = Array.prototype.slice.call(arguments);
      io2(e, c, g2);
      return b2.apply(this, g2);
    }
    if (!c)
      return b2;
    var e = yo2(a), f;
    for (f in b2)
      d[f] = b2[f];
    for (f in b2.prototype)
      d.prototype[f] = b2.prototype[f];
    return d;
  }
  function yo2(a) {
    a = a.split(".");
    return a[a.length - 1];
  }
  Y2(un2.prototype, {
    fb: {name: "applyActionCode", j: [V2("code")]},
    Pa: {name: "checkActionCode", j: [V2("code")]},
    jb: {name: "confirmPasswordReset", j: [V2("code"), V2("newPassword")]},
    cc: {name: "createUserWithEmailAndPassword", j: [V2("email"), V2("password")]},
    fc: {name: "fetchSignInMethodsForEmail", j: [V2("email")]},
    pa: {name: "getRedirectResult", j: []},
    zc: {name: "isSignInWithEmailLink", j: [V2("emailLink")]},
    Fc: {name: "onAuthStateChanged", j: [X2(W2(), lo2(), "nextOrObserver"), lo2("opt_error", true), lo2("opt_completed", true)]},
    Gc: {
      name: "onIdTokenChanged",
      j: [X2(W2(), lo2(), "nextOrObserver"), lo2("opt_error", true), lo2("opt_completed", true)]
    },
    rb: {name: "sendPasswordResetEmail", j: [V2("email"), X2(W2("opt_actionCodeSettings", true), mo2(null, true), "opt_actionCodeSettings", true)]},
    sb: {name: "sendSignInLinkToEmail", j: [V2("email"), W2("actionCodeSettings")]},
    tb: {name: "setPersistence", j: [V2("persistence")]},
    Qc: {name: "signInAndRetrieveDataWithCredential", j: [qo2()]},
    vb: {name: "signInAnonymously", j: []},
    Ya: {name: "signInWithCredential", j: [qo2()]},
    Rc: {name: "signInWithCustomToken", j: [V2("token")]},
    Sc: {name: "signInWithEmailAndPassword", j: [V2("email"), V2("password")]},
    Tc: {name: "signInWithEmailLink", j: [V2("email"), V2("emailLink", true)]},
    Uc: {name: "signInWithPhoneNumber", j: [V2("phoneNumber"), vo2()]},
    Vc: {name: "signInWithPopup", j: [so2()]},
    Wc: {name: "signInWithRedirect", j: [so2()]},
    bd: {name: "updateCurrentUser", j: [X2(function(a) {
      return {name: "user", J: "an instance of Firebase User", optional: !!a, K: function(b2) {
        return !!(b2 && b2 instanceof P2);
      }};
    }(), mo2(), "user")]},
    wb: {name: "signOut", j: []},
    toJSON: {name: "toJSON", j: [V2(null, true)]},
    dd: {name: "useDeviceLanguage", j: []},
    fd: {name: "verifyPasswordResetCode", j: [V2("code")]}
  });
  xo2(un2.prototype, {lc: {name: "languageCode", gb: X2(V2(), mo2(), "languageCode")}, ti: {name: "tenantId", gb: X2(V2(), mo2(), "tenantId")}});
  un2.Persistence = Kk;
  un2.Persistence.LOCAL = "local";
  un2.Persistence.SESSION = "session";
  un2.Persistence.NONE = "none";
  Y2(P2.prototype, {
    delete: {name: "delete", j: []},
    mc: {name: "getIdTokenResult", j: [ko2("opt_forceRefresh", true)]},
    I: {name: "getIdToken", j: [ko2("opt_forceRefresh", true)]},
    Ac: {name: "linkAndRetrieveDataWithCredential", j: [qo2()]},
    mb: {name: "linkWithCredential", j: [qo2()]},
    Bc: {name: "linkWithPhoneNumber", j: [V2("phoneNumber"), vo2()]},
    Cc: {name: "linkWithPopup", j: [so2()]},
    Dc: {name: "linkWithRedirect", j: [so2()]},
    Jc: {name: "reauthenticateAndRetrieveDataWithCredential", j: [qo2()]},
    pb: {name: "reauthenticateWithCredential", j: [qo2()]},
    Kc: {
      name: "reauthenticateWithPhoneNumber",
      j: [V2("phoneNumber"), vo2()]
    },
    Lc: {name: "reauthenticateWithPopup", j: [so2()]},
    Mc: {name: "reauthenticateWithRedirect", j: [so2()]},
    reload: {name: "reload", j: []},
    qb: {name: "sendEmailVerification", j: [X2(W2("opt_actionCodeSettings", true), mo2(null, true), "opt_actionCodeSettings", true)]},
    toJSON: {name: "toJSON", j: [V2(null, true)]},
    ad: {name: "unlink", j: [V2("provider")]},
    xb: {name: "updateEmail", j: [V2("email")]},
    yb: {name: "updatePassword", j: [V2("password")]},
    cd: {name: "updatePhoneNumber", j: [qo2("phone")]},
    zb: {name: "updateProfile", j: [W2("profile")]},
    Ab: {name: "verifyBeforeUpdateEmail", j: [V2("email"), X2(W2("opt_actionCodeSettings", true), mo2(null, true), "opt_actionCodeSettings", true)]}
  });
  Y2(Ln2.prototype, {execute: {name: "execute"}, render: {name: "render"}, reset: {name: "reset"}, getResponse: {name: "getResponse"}});
  Y2(Kn2.prototype, {execute: {name: "execute"}, render: {name: "render"}, reset: {name: "reset"}, getResponse: {name: "getResponse"}});
  Y2(B2.prototype, {ma: {name: "finally"}, o: {name: "catch"}, then: {name: "then"}});
  xo2(Xl.prototype, {appVerificationDisabled: {name: "appVerificationDisabledForTesting", gb: ko2("appVerificationDisabledForTesting")}});
  Y2(Yl.prototype, {confirm: {name: "confirm", j: [V2("verificationCode")]}});
  Z2(yg, "fromJSON", function(a) {
    a = typeof a === "string" ? JSON.parse(a) : a;
    for (var b2, c = [Jg, $g, gh, Gg], d = 0; d < c.length; d++)
      if (b2 = c[d](a))
        return b2;
    return null;
  }, [X2(V2(), W2(), "json")]);
  Z2(Vg, "credential", function(a, b2) {
    return new Ug(a, b2);
  }, [V2("email"), V2("password")]);
  Y2(Ug.prototype, {v: {name: "toJSON", j: [V2(null, true)]}});
  Y2(Mg.prototype, {Aa: {name: "addScope", j: [V2("scope")]}, Ia: {name: "setCustomParameters", j: [W2("customOAuthParameters")]}});
  Z2(Mg, "credential", Ng, [X2(V2(), W2(), "token")]);
  Z2(Vg, "credentialWithLink", ah, [V2("email"), V2("emailLink")]);
  Y2(Og.prototype, {Aa: {name: "addScope", j: [V2("scope")]}, Ia: {name: "setCustomParameters", j: [W2("customOAuthParameters")]}});
  Z2(Og, "credential", Pg, [X2(V2(), W2(), "token")]);
  Y2(Qg.prototype, {Aa: {name: "addScope", j: [V2("scope")]}, Ia: {name: "setCustomParameters", j: [W2("customOAuthParameters")]}});
  Z2(Qg, "credential", Rg, [X2(V2(), X2(W2(), mo2()), "idToken"), X2(V2(), mo2(), "accessToken", true)]);
  Y2(Sg.prototype, {Ia: {name: "setCustomParameters", j: [W2("customOAuthParameters")]}});
  Z2(Sg, "credential", Tg, [X2(V2(), W2(), "token"), V2("secret", true)]);
  Y2(M2.prototype, {Aa: {name: "addScope", j: [V2("scope")]}, credential: {name: "credential", j: [X2(V2(), X2(W2(), mo2()), "optionsOrIdToken"), X2(V2(), mo2(), "accessToken", true)]}, Ia: {name: "setCustomParameters", j: [W2("customOAuthParameters")]}});
  Y2(Hg.prototype, {v: {name: "toJSON", j: [V2(null, true)]}});
  Y2(Bg.prototype, {v: {name: "toJSON", j: [V2(null, true)]}});
  Z2(hh, "credential", lh, [V2("verificationId"), V2("verificationCode")]);
  Y2(hh.prototype, {cb: {name: "verifyPhoneNumber", j: [X2(V2(), function(a, b2) {
    return {name: a || "phoneInfoOptions", J: "valid phone info options", optional: !!b2, K: function(c) {
      return c ? c.session && c.phoneNumber ? to2(c.session, wg) && typeof c.phoneNumber === "string" : c.session && c.multiFactorHint ? to2(c.session, xg) && uo2(c.multiFactorHint) : c.session && c.multiFactorUid ? to2(c.session, xg) && typeof c.multiFactorUid === "string" : c.phoneNumber ? typeof c.phoneNumber === "string" : false : false;
    }};
  }(), "phoneInfoOptions"), vo2()]}});
  Y2(ch.prototype, {v: {name: "toJSON", j: [V2(null, true)]}});
  Y2(t.prototype, {toJSON: {name: "toJSON", j: [V2(null, true)]}});
  Y2(uh.prototype, {toJSON: {name: "toJSON", j: [V2(null, true)]}});
  Y2(th.prototype, {toJSON: {name: "toJSON", j: [V2(null, true)]}});
  Y2(dm.prototype, {toJSON: {name: "toJSON", j: [V2(null, true)]}});
  Y2(am.prototype, {Pc: {name: "resolveSignIn", j: [ro2()]}});
  Y2(lm.prototype, {Ob: {name: "getSession", j: []}, dc: {name: "enroll", j: [ro2(), V2("displayName", true)]}, $c: {name: "unenroll", j: [X2({name: "multiFactorInfo", J: "a valid multiFactorInfo", optional: false, K: uo2}, V2(), "multiFactorInfoIdentifier")]}});
  Y2(ho2.prototype, {clear: {name: "clear", j: []}, render: {name: "render", j: []}, verify: {name: "verify", j: []}});
  Z2(Gf, "parseLink", Of, [V2("link")]);
  Z2(Rn2, "assertion", function(a) {
    return new jm(a);
  }, [qo2("phone")]);
  (function() {
    if (typeof firebase$1 !== "undefined" && firebase$1.INTERNAL && firebase$1.INTERNAL.registerComponent) {
      var a = {ActionCodeInfo: {Operation: {EMAIL_SIGNIN: xf, PASSWORD_RESET: "PASSWORD_RESET", RECOVER_EMAIL: "RECOVER_EMAIL", REVERT_SECOND_FACTOR_ADDITION: zf, VERIFY_AND_CHANGE_EMAIL: yf, VERIFY_EMAIL: "VERIFY_EMAIL"}}, Auth: un2, AuthCredential: yg, Error: t};
      Z2(a, "EmailAuthProvider", Vg, []);
      Z2(a, "FacebookAuthProvider", Mg, []);
      Z2(a, "GithubAuthProvider", Og, []);
      Z2(a, "GoogleAuthProvider", Qg, []);
      Z2(a, "TwitterAuthProvider", Sg, []);
      Z2(a, "OAuthProvider", M2, [V2("providerId")]);
      Z2(a, "SAMLAuthProvider", Lg, [V2("providerId")]);
      Z2(a, "PhoneAuthProvider", hh, [oo2()]);
      Z2(a, "RecaptchaVerifier", ho2, [X2(V2(), no2(), "recaptchaContainer"), W2("recaptchaParameters", true), po2()]);
      Z2(a, "ActionCodeURL", Gf, []);
      Z2(a, "PhoneMultiFactorGenerator", Rn2, []);
      firebase$1.INTERNAL.registerComponent({name: "auth", instanceFactory: function(b2) {
        b2 = b2.getProvider("app").getImmediate();
        return new un2(b2);
      }, multipleInstances: false, serviceProps: a, instantiationMode: "LAZY", type: "PUBLIC"});
      firebase$1.INTERNAL.registerComponent({
        name: "auth-internal",
        instanceFactory: function(b2) {
          b2 = b2.getProvider("auth").getImmediate();
          return {getUid: q2(b2.getUid, b2), getToken: q2(b2.kc, b2), addAuthTokenListener: q2(b2.bc, b2), removeAuthTokenListener: q2(b2.Nc, b2)};
        },
        multipleInstances: false,
        instantiationMode: "LAZY",
        type: "PRIVATE"
      });
      firebase$1.registerVersion("@firebase/auth", "0.14.9");
      firebase$1.INTERNAL.extendNamespace({User: P2});
    } else
      throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
  })();
}).apply(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
function toArray(arr) {
  return Array.prototype.slice.call(arr);
}
function promisifyRequest(request) {
  return new Promise(function(resolve, reject) {
    request.onsuccess = function() {
      resolve(request.result);
    };
    request.onerror = function() {
      reject(request.error);
    };
  });
}
function promisifyRequestCall(obj, method, args) {
  var request;
  var p2 = new Promise(function(resolve, reject) {
    request = obj[method].apply(obj, args);
    promisifyRequest(request).then(resolve, reject);
  });
  p2.request = request;
  return p2;
}
function promisifyCursorRequestCall(obj, method, args) {
  var p2 = promisifyRequestCall(obj, method, args);
  return p2.then(function(value) {
    if (!value)
      return;
    return new Cursor(value, p2.request);
  });
}
function proxyProperties(ProxyClass, targetProp, properties) {
  properties.forEach(function(prop) {
    Object.defineProperty(ProxyClass.prototype, prop, {
      get: function() {
        return this[targetProp][prop];
      },
      set: function(val) {
        this[targetProp][prop] = val;
      }
    });
  });
}
function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return promisifyRequestCall(this[targetProp], prop, arguments);
    };
  });
}
function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return this[targetProp][prop].apply(this[targetProp], arguments);
    };
  });
}
function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return promisifyCursorRequestCall(this[targetProp], prop, arguments);
    };
  });
}
function Index(index) {
  this._index = index;
}
proxyProperties(Index, "_index", [
  "name",
  "keyPath",
  "multiEntry",
  "unique"
]);
proxyRequestMethods(Index, "_index", IDBIndex, [
  "get",
  "getKey",
  "getAll",
  "getAllKeys",
  "count"
]);
proxyCursorRequestMethods(Index, "_index", IDBIndex, [
  "openCursor",
  "openKeyCursor"
]);
function Cursor(cursor, request) {
  this._cursor = cursor;
  this._request = request;
}
proxyProperties(Cursor, "_cursor", [
  "direction",
  "key",
  "primaryKey",
  "value"
]);
proxyRequestMethods(Cursor, "_cursor", IDBCursor, [
  "update",
  "delete"
]);
["advance", "continue", "continuePrimaryKey"].forEach(function(methodName) {
  if (!(methodName in IDBCursor.prototype))
    return;
  Cursor.prototype[methodName] = function() {
    var cursor = this;
    var args = arguments;
    return Promise.resolve().then(function() {
      cursor._cursor[methodName].apply(cursor._cursor, args);
      return promisifyRequest(cursor._request).then(function(value) {
        if (!value)
          return;
        return new Cursor(value, cursor._request);
      });
    });
  };
});
function ObjectStore(store) {
  this._store = store;
}
ObjectStore.prototype.createIndex = function() {
  return new Index(this._store.createIndex.apply(this._store, arguments));
};
ObjectStore.prototype.index = function() {
  return new Index(this._store.index.apply(this._store, arguments));
};
proxyProperties(ObjectStore, "_store", [
  "name",
  "keyPath",
  "indexNames",
  "autoIncrement"
]);
proxyRequestMethods(ObjectStore, "_store", IDBObjectStore, [
  "put",
  "add",
  "delete",
  "clear",
  "get",
  "getAll",
  "getKey",
  "getAllKeys",
  "count"
]);
proxyCursorRequestMethods(ObjectStore, "_store", IDBObjectStore, [
  "openCursor",
  "openKeyCursor"
]);
proxyMethods(ObjectStore, "_store", IDBObjectStore, [
  "deleteIndex"
]);
function Transaction(idbTransaction) {
  this._tx = idbTransaction;
  this.complete = new Promise(function(resolve, reject) {
    idbTransaction.oncomplete = function() {
      resolve();
    };
    idbTransaction.onerror = function() {
      reject(idbTransaction.error);
    };
    idbTransaction.onabort = function() {
      reject(idbTransaction.error);
    };
  });
}
Transaction.prototype.objectStore = function() {
  return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
};
proxyProperties(Transaction, "_tx", [
  "objectStoreNames",
  "mode"
]);
proxyMethods(Transaction, "_tx", IDBTransaction, [
  "abort"
]);
function UpgradeDB(db2, oldVersion, transaction) {
  this._db = db2;
  this.oldVersion = oldVersion;
  this.transaction = new Transaction(transaction);
}
UpgradeDB.prototype.createObjectStore = function() {
  return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
};
proxyProperties(UpgradeDB, "_db", [
  "name",
  "version",
  "objectStoreNames"
]);
proxyMethods(UpgradeDB, "_db", IDBDatabase, [
  "deleteObjectStore",
  "close"
]);
function DB(db2) {
  this._db = db2;
}
DB.prototype.transaction = function() {
  return new Transaction(this._db.transaction.apply(this._db, arguments));
};
proxyProperties(DB, "_db", [
  "name",
  "version",
  "objectStoreNames"
]);
proxyMethods(DB, "_db", IDBDatabase, [
  "close"
]);
["openCursor", "openKeyCursor"].forEach(function(funcName) {
  [ObjectStore, Index].forEach(function(Constructor) {
    if (!(funcName in Constructor.prototype))
      return;
    Constructor.prototype[funcName.replace("open", "iterate")] = function() {
      var args = toArray(arguments);
      var callback = args[args.length - 1];
      var nativeObject = this._store || this._index;
      var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
      request.onsuccess = function() {
        callback(request.result);
      };
    };
  });
});
[Index, ObjectStore].forEach(function(Constructor) {
  if (Constructor.prototype.getAll)
    return;
  Constructor.prototype.getAll = function(query, count) {
    var instance = this;
    var items = [];
    return new Promise(function(resolve) {
      instance.iterateCursor(query, function(cursor) {
        if (!cursor) {
          resolve(items);
          return;
        }
        items.push(cursor.value);
        if (count !== void 0 && items.length == count) {
          resolve(items);
          return;
        }
        cursor.continue();
      });
    });
  };
});
function openDb(name2, version2, upgradeCallback) {
  var p2 = promisifyRequestCall(indexedDB, "open", [name2, version2]);
  var request = p2.request;
  if (request) {
    request.onupgradeneeded = function(event) {
      if (upgradeCallback) {
        upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
      }
    };
  }
  return p2.then(function(db2) {
    return new DB(db2);
  });
}
var name$e = "@firebase/installations";
var version$3 = "0.4.17";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 1e4;
var PACKAGE_VERSION = "w:" + version$3;
var INTERNAL_AUTH_VERSION = "FIS_v2";
var INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
var SERVICE = "installations";
var SERVICE_NAME = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$2;
var ERROR_DESCRIPTION_MAP = (_a$2 = {}, _a$2["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', _a$2["not-registered"] = "Firebase Installation is not registered.", _a$2["installation-not-found"] = "Firebase Installation not found.", _a$2["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a$2["app-offline"] = "Could not process request. Application offline.", _a$2["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", _a$2);
var ERROR_FACTORY$1 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
function isServerError(error) {
  return error instanceof FirebaseError && error.code.includes("request-failed");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_a2) {
  var projectId = _a2.projectId;
  return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
function getErrorFromResponse(requestName, response) {
  return __awaiter(this, void 0, void 0, function() {
    var responseJson, errorData;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, response.json()];
        case 1:
          responseJson = _a2.sent();
          errorData = responseJson.error;
          return [2, ERROR_FACTORY$1.create("request-failed", {
            requestName,
            serverCode: errorData.code,
            serverMessage: errorData.message,
            serverStatus: errorData.status
          })];
      }
    });
  });
}
function getHeaders(_a2) {
  var apiKey = _a2.apiKey;
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function getHeadersWithAuth(appConfig, _a2) {
  var refreshToken = _a2.refreshToken;
  var headers = getHeaders(appConfig);
  headers.append("Authorization", getAuthorizationHeader(refreshToken));
  return headers;
}
function retryIfServerError(fn2) {
  return __awaiter(this, void 0, void 0, function() {
    var result;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, fn2()];
        case 1:
          result = _a2.sent();
          if (result.status >= 500 && result.status < 600) {
            return [2, fn2()];
          }
          return [2, result];
      }
    });
  });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  return Number(responseExpiresIn.replace("s", "000"));
}
function getAuthorizationHeader(refreshToken) {
  return INTERNAL_AUTH_VERSION + " " + refreshToken;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallationRequest(appConfig, _a2) {
  var fid = _a2.fid;
  return __awaiter(this, void 0, void 0, function() {
    var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          endpoint = getInstallationsEndpoint(appConfig);
          headers = getHeaders(appConfig);
          body = {
            fid,
            authVersion: INTERNAL_AUTH_VERSION,
            appId: appConfig.appId,
            sdkVersion: PACKAGE_VERSION
          };
          request = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
          };
          return [4, retryIfServerError(function() {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _b.sent();
          if (!response.ok)
            return [3, 3];
          return [4, response.json()];
        case 2:
          responseValue = _b.sent();
          registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
          };
          return [2, registeredInstallationEntry];
        case 3:
          return [4, getErrorFromResponse("Create Installation", response)];
        case 4:
          throw _b.sent();
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sleep(ms2) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms2);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
  var b64 = btoa(String.fromCharCode.apply(String, __spread(array)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = "";
function generateFid() {
  try {
    var fidByteArray = new Uint8Array(17);
    var crypto_1 = self.crypto || self.msCrypto;
    crypto_1.getRandomValues(fidByteArray);
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    var fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a2) {
    return INVALID_FID;
  }
}
function encode(fidByteArray) {
  var b64String = bufferToBase64UrlSafe(fidByteArray);
  return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getKey(appConfig) {
  return appConfig.appName + "!" + appConfig.appId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fidChangeCallbacks = new Map();
function fidChanged(appConfig, fid) {
  var key = getKey(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
  getBroadcastChannel();
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    callbackSet = new Set();
    fidChangeCallbacks.set(key, callbackSet);
  }
  callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
  var key = getKey(appConfig);
  var callbackSet = fidChangeCallbacks.get(key);
  if (!callbackSet) {
    return;
  }
  callbackSet.delete(callback);
  if (callbackSet.size === 0) {
    fidChangeCallbacks.delete(key);
  }
  closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
  var e_1, _a2;
  var callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  try {
    for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
      var callback = callbacks_1_1.value;
      callback(fid);
    }
  } catch (e_1_1) {
    e_1 = {error: e_1_1};
  } finally {
    try {
      if (callbacks_1_1 && !callbacks_1_1.done && (_a2 = callbacks_1.return))
        _a2.call(callbacks_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
}
function broadcastFidChange(key, fid) {
  var channel = getBroadcastChannel();
  if (channel) {
    channel.postMessage({key, fid});
  }
  closeBroadcastChannel();
}
var broadcastChannel = null;
function getBroadcastChannel() {
  if (!broadcastChannel && "BroadcastChannel" in self) {
    broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
    broadcastChannel.onmessage = function(e) {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = "firebase-installations-database";
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = "firebase-installations-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDb(DATABASE_NAME, DATABASE_VERSION, function(upgradeDB) {
      switch (upgradeDB.oldVersion) {
        case 0:
          upgradeDB.createObjectStore(OBJECT_STORE_NAME);
      }
    });
  }
  return dbPromise;
}
function set(appConfig, value) {
  return __awaiter(this, void 0, void 0, function() {
    var key, db2, tx, objectStore, oldValue;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db2 = _a2.sent();
          tx = db2.transaction(OBJECT_STORE_NAME, "readwrite");
          objectStore = tx.objectStore(OBJECT_STORE_NAME);
          return [4, objectStore.get(key)];
        case 2:
          oldValue = _a2.sent();
          return [4, objectStore.put(value, key)];
        case 3:
          _a2.sent();
          return [4, tx.complete];
        case 4:
          _a2.sent();
          if (!oldValue || oldValue.fid !== value.fid) {
            fidChanged(appConfig, value.fid);
          }
          return [2, value];
      }
    });
  });
}
function remove(appConfig) {
  return __awaiter(this, void 0, void 0, function() {
    var key, db2, tx;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db2 = _a2.sent();
          tx = db2.transaction(OBJECT_STORE_NAME, "readwrite");
          return [4, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
        case 2:
          _a2.sent();
          return [4, tx.complete];
        case 3:
          _a2.sent();
          return [2];
      }
    });
  });
}
function update(appConfig, updateFn) {
  return __awaiter(this, void 0, void 0, function() {
    var key, db2, tx, store, oldValue, newValue;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          key = getKey(appConfig);
          return [4, getDbPromise()];
        case 1:
          db2 = _a2.sent();
          tx = db2.transaction(OBJECT_STORE_NAME, "readwrite");
          store = tx.objectStore(OBJECT_STORE_NAME);
          return [4, store.get(key)];
        case 2:
          oldValue = _a2.sent();
          newValue = updateFn(oldValue);
          if (!(newValue === void 0))
            return [3, 4];
          return [4, store.delete(key)];
        case 3:
          _a2.sent();
          return [3, 6];
        case 4:
          return [4, store.put(newValue, key)];
        case 5:
          _a2.sent();
          _a2.label = 6;
        case 6:
          return [4, tx.complete];
        case 7:
          _a2.sent();
          if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
            fidChanged(appConfig, newValue.fid);
          }
          return [2, newValue];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationEntry(appConfig) {
  return __awaiter(this, void 0, void 0, function() {
    var registrationPromise, installationEntry;
    var _a2;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [4, update(appConfig, function(oldEntry) {
            var installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
            var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry2);
            registrationPromise = entryWithPromise.registrationPromise;
            return entryWithPromise.installationEntry;
          })];
        case 1:
          installationEntry = _b.sent();
          if (!(installationEntry.fid === INVALID_FID))
            return [3, 3];
          _a2 = {};
          return [4, registrationPromise];
        case 2:
          return [2, (_a2.installationEntry = _b.sent(), _a2)];
        case 3:
          return [2, {
            installationEntry,
            registrationPromise
          }];
      }
    });
  });
}
function updateOrCreateInstallationEntry(oldEntry) {
  var entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
  };
  return clearTimedOutRequest(entry);
}
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
  if (installationEntry.registrationStatus === 0) {
    if (!navigator.onLine) {
      var registrationPromiseWithError = Promise.reject(ERROR_FACTORY$1.create("app-offline"));
      return {
        installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    var inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    };
    var registrationPromise = registerInstallation(appConfig, inProgressEntry);
    return {installationEntry: inProgressEntry, registrationPromise};
  } else if (installationEntry.registrationStatus === 1) {
    return {
      installationEntry,
      registrationPromise: waitUntilFidRegistration(appConfig)
    };
  } else {
    return {installationEntry};
  }
}
function registerInstallation(appConfig, installationEntry) {
  return __awaiter(this, void 0, void 0, function() {
    var registeredInstallationEntry, e_1;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          _a2.trys.push([0, 2, , 7]);
          return [4, createInstallationRequest(appConfig, installationEntry)];
        case 1:
          registeredInstallationEntry = _a2.sent();
          return [2, set(appConfig, registeredInstallationEntry)];
        case 2:
          e_1 = _a2.sent();
          if (!(isServerError(e_1) && e_1.serverCode === 409))
            return [3, 4];
          return [4, remove(appConfig)];
        case 3:
          _a2.sent();
          return [3, 6];
        case 4:
          return [4, set(appConfig, {
            fid: installationEntry.fid,
            registrationStatus: 0
          })];
        case 5:
          _a2.sent();
          _a2.label = 6;
        case 6:
          throw e_1;
        case 7:
          return [2];
      }
    });
  });
}
function waitUntilFidRegistration(appConfig) {
  return __awaiter(this, void 0, void 0, function() {
    var entry, _a2, installationEntry, registrationPromise;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [4, updateInstallationRequest(appConfig)];
        case 1:
          entry = _b.sent();
          _b.label = 2;
        case 2:
          if (!(entry.registrationStatus === 1))
            return [3, 5];
          return [4, sleep(100)];
        case 3:
          _b.sent();
          return [4, updateInstallationRequest(appConfig)];
        case 4:
          entry = _b.sent();
          return [3, 2];
        case 5:
          if (!(entry.registrationStatus === 0))
            return [3, 7];
          return [4, getInstallationEntry(appConfig)];
        case 6:
          _a2 = _b.sent(), installationEntry = _a2.installationEntry, registrationPromise = _a2.registrationPromise;
          if (registrationPromise) {
            return [2, registrationPromise];
          } else {
            return [2, installationEntry];
          }
        case 7:
          return [2, entry];
      }
    });
  });
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, function(oldEntry) {
    if (!oldEntry) {
      throw ERROR_FACTORY$1.create("installation-not-found");
    }
    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
    };
  }
  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthTokenRequest(_a2, installationEntry) {
  var appConfig = _a2.appConfig, platformLoggerProvider = _a2.platformLoggerProvider;
  return __awaiter(this, void 0, void 0, function() {
    var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          platformLogger = platformLoggerProvider.getImmediate({
            optional: true
          });
          if (platformLogger) {
            headers.append("x-firebase-client", platformLogger.getPlatformInfoString());
          }
          body = {
            installation: {
              sdkVersion: PACKAGE_VERSION
            }
          };
          request = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
          };
          return [4, retryIfServerError(function() {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _b.sent();
          if (!response.ok)
            return [3, 3];
          return [4, response.json()];
        case 2:
          responseValue = _b.sent();
          completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
          return [2, completedAuthToken];
        case 3:
          return [4, getErrorFromResponse("Generate Auth Token", response)];
        case 4:
          throw _b.sent();
      }
    });
  });
}
function getGenerateAuthTokenEndpoint(appConfig, _a2) {
  var fid = _a2.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function refreshAuthToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  return __awaiter(this, void 0, void 0, function() {
    var tokenPromise, entry, authToken, _a2;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [4, update(dependencies.appConfig, function(oldEntry) {
            if (!isEntryRegistered(oldEntry)) {
              throw ERROR_FACTORY$1.create("not-registered");
            }
            var oldAuthToken = oldEntry.authToken;
            if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
              return oldEntry;
            } else if (oldAuthToken.requestStatus === 1) {
              tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
              return oldEntry;
            } else {
              if (!navigator.onLine) {
                throw ERROR_FACTORY$1.create("app-offline");
              }
              var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
              tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
              return inProgressEntry;
            }
          })];
        case 1:
          entry = _b.sent();
          if (!tokenPromise)
            return [3, 3];
          return [4, tokenPromise];
        case 2:
          _a2 = _b.sent();
          return [3, 4];
        case 3:
          _a2 = entry.authToken;
          _b.label = 4;
        case 4:
          authToken = _a2;
          return [2, authToken];
      }
    });
  });
}
function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
  return __awaiter(this, void 0, void 0, function() {
    var entry, authToken;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, updateAuthTokenRequest(dependencies.appConfig)];
        case 1:
          entry = _a2.sent();
          _a2.label = 2;
        case 2:
          if (!(entry.authToken.requestStatus === 1))
            return [3, 5];
          return [4, sleep(100)];
        case 3:
          _a2.sent();
          return [4, updateAuthTokenRequest(dependencies.appConfig)];
        case 4:
          entry = _a2.sent();
          return [3, 2];
        case 5:
          authToken = entry.authToken;
          if (authToken.requestStatus === 0) {
            return [2, refreshAuthToken(dependencies, forceRefresh)];
          } else {
            return [2, authToken];
          }
      }
    });
  });
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, function(oldEntry) {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY$1.create("not-registered");
    }
    var oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return __assign(__assign({}, oldEntry), {authToken: {requestStatus: 0}});
    }
    return oldEntry;
  });
}
function fetchAuthTokenFromServer(dependencies, installationEntry) {
  return __awaiter(this, void 0, void 0, function() {
    var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          _a2.trys.push([0, 3, , 8]);
          return [4, generateAuthTokenRequest(dependencies, installationEntry)];
        case 1:
          authToken = _a2.sent();
          updatedInstallationEntry = __assign(__assign({}, installationEntry), {authToken});
          return [4, set(dependencies.appConfig, updatedInstallationEntry)];
        case 2:
          _a2.sent();
          return [2, authToken];
        case 3:
          e_1 = _a2.sent();
          if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404)))
            return [3, 5];
          return [4, remove(dependencies.appConfig)];
        case 4:
          _a2.sent();
          return [3, 7];
        case 5:
          updatedInstallationEntry = __assign(__assign({}, installationEntry), {authToken: {requestStatus: 0}});
          return [4, set(dependencies.appConfig, updatedInstallationEntry)];
        case 6:
          _a2.sent();
          _a2.label = 7;
        case 7:
          throw e_1;
        case 8:
          return [2];
      }
    });
  });
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
}
function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  var now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  var inProgressAuthToken = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return __assign(__assign({}, oldEntry), {authToken: inProgressAuthToken});
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getId(dependencies) {
  return __awaiter(this, void 0, void 0, function() {
    var _a2, installationEntry, registrationPromise;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          return [4, getInstallationEntry(dependencies.appConfig)];
        case 1:
          _a2 = _b.sent(), installationEntry = _a2.installationEntry, registrationPromise = _a2.registrationPromise;
          if (registrationPromise) {
            registrationPromise.catch(console.error);
          } else {
            refreshAuthToken(dependencies).catch(console.error);
          }
          return [2, installationEntry.fid];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getToken(dependencies, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  return __awaiter(this, void 0, void 0, function() {
    var authToken;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, completeInstallationRegistration(dependencies.appConfig)];
        case 1:
          _a2.sent();
          return [4, refreshAuthToken(dependencies, forceRefresh)];
        case 2:
          authToken = _a2.sent();
          return [2, authToken.token];
      }
    });
  });
}
function completeInstallationRegistration(appConfig) {
  return __awaiter(this, void 0, void 0, function() {
    var registrationPromise;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, getInstallationEntry(appConfig)];
        case 1:
          registrationPromise = _a2.sent().registrationPromise;
          if (!registrationPromise)
            return [3, 3];
          return [4, registrationPromise];
        case 2:
          _a2.sent();
          _a2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallationRequest(appConfig, installationEntry) {
  return __awaiter(this, void 0, void 0, function() {
    var endpoint, headers, request, response;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          endpoint = getDeleteEndpoint(appConfig, installationEntry);
          headers = getHeadersWithAuth(appConfig, installationEntry);
          request = {
            method: "DELETE",
            headers
          };
          return [4, retryIfServerError(function() {
            return fetch(endpoint, request);
          })];
        case 1:
          response = _a2.sent();
          if (!!response.ok)
            return [3, 3];
          return [4, getErrorFromResponse("Delete Installation", response)];
        case 2:
          throw _a2.sent();
        case 3:
          return [2];
      }
    });
  });
}
function getDeleteEndpoint(appConfig, _a2) {
  var fid = _a2.fid;
  return getInstallationsEndpoint(appConfig) + "/" + fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallation(dependencies) {
  return __awaiter(this, void 0, void 0, function() {
    var appConfig, entry;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          appConfig = dependencies.appConfig;
          return [4, update(appConfig, function(oldEntry) {
            if (oldEntry && oldEntry.registrationStatus === 0) {
              return void 0;
            }
            return oldEntry;
          })];
        case 1:
          entry = _a2.sent();
          if (!entry)
            return [3, 6];
          if (!(entry.registrationStatus === 1))
            return [3, 2];
          throw ERROR_FACTORY$1.create("delete-pending-registration");
        case 2:
          if (!(entry.registrationStatus === 2))
            return [3, 6];
          if (!!navigator.onLine)
            return [3, 3];
          throw ERROR_FACTORY$1.create("app-offline");
        case 3:
          return [4, deleteInstallationRequest(appConfig, entry)];
        case 4:
          _a2.sent();
          return [4, remove(appConfig)];
        case 5:
          _a2.sent();
          _a2.label = 6;
        case 6:
          return [2];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function onIdChange(_a2, callback) {
  var appConfig = _a2.appConfig;
  addCallback(appConfig, callback);
  return function() {
    removeCallback(appConfig, callback);
  };
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
  var e_1, _a2;
  if (!app || !app.options) {
    throw getMissingValueError("App Configuration");
  }
  if (!app.name) {
    throw getMissingValueError("App Name");
  }
  var configKeys = [
    "projectId",
    "apiKey",
    "appId"
  ];
  try {
    for (var configKeys_1 = __values(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
      var keyName = configKeys_1_1.value;
      if (!app.options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
  } catch (e_1_1) {
    e_1 = {error: e_1_1};
  } finally {
    try {
      if (configKeys_1_1 && !configKeys_1_1.done && (_a2 = configKeys_1.return))
        _a2.call(configKeys_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return {
    appName: app.name,
    projectId: app.options.projectId,
    apiKey: app.options.apiKey,
    appId: app.options.appId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY$1.create("missing-app-config-values", {
    valueName
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerInstallations(instance) {
  var installationsName = "installations";
  instance.INTERNAL.registerComponent(new Component(installationsName, function(container) {
    var app = container.getProvider("app").getImmediate();
    var appConfig = extractAppConfig(app);
    var platformLoggerProvider = container.getProvider("platform-logger");
    var dependencies = {
      appConfig,
      platformLoggerProvider
    };
    var installations = {
      app,
      getId: function() {
        return getId(dependencies);
      },
      getToken: function(forceRefresh) {
        return getToken(dependencies, forceRefresh);
      },
      delete: function() {
        return deleteInstallation(dependencies);
      },
      onIdChange: function(callback) {
        return onIdChange(dependencies, callback);
      }
    };
    return installations;
  }, "PUBLIC"));
  instance.registerVersion(name$e, version$3);
}
registerInstallations(firebase$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var GA_FID_KEY = "firebase_id";
var ORIGIN_KEY = "origin";
var FETCH_TIMEOUT_MILLIS = 60 * 1e3;
var DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
var GTAG_URL = "https://www.googletagmanager.com/gtag/js";
var GtagCommand;
(function(GtagCommand2) {
  GtagCommand2["EVENT"] = "event";
  GtagCommand2["SET"] = "set";
  GtagCommand2["CONFIG"] = "config";
})(GtagCommand || (GtagCommand = {}));
var EventName;
(function(EventName2) {
  EventName2["ADD_SHIPPING_INFO"] = "add_shipping_info";
  EventName2["ADD_PAYMENT_INFO"] = "add_payment_info";
  EventName2["ADD_TO_CART"] = "add_to_cart";
  EventName2["ADD_TO_WISHLIST"] = "add_to_wishlist";
  EventName2["BEGIN_CHECKOUT"] = "begin_checkout";
  EventName2["CHECKOUT_PROGRESS"] = "checkout_progress";
  EventName2["EXCEPTION"] = "exception";
  EventName2["GENERATE_LEAD"] = "generate_lead";
  EventName2["LOGIN"] = "login";
  EventName2["PAGE_VIEW"] = "page_view";
  EventName2["PURCHASE"] = "purchase";
  EventName2["REFUND"] = "refund";
  EventName2["REMOVE_FROM_CART"] = "remove_from_cart";
  EventName2["SCREEN_VIEW"] = "screen_view";
  EventName2["SEARCH"] = "search";
  EventName2["SELECT_CONTENT"] = "select_content";
  EventName2["SELECT_ITEM"] = "select_item";
  EventName2["SELECT_PROMOTION"] = "select_promotion";
  EventName2["SET_CHECKOUT_OPTION"] = "set_checkout_option";
  EventName2["SHARE"] = "share";
  EventName2["SIGN_UP"] = "sign_up";
  EventName2["TIMING_COMPLETE"] = "timing_complete";
  EventName2["VIEW_CART"] = "view_cart";
  EventName2["VIEW_ITEM"] = "view_item";
  EventName2["VIEW_ITEM_LIST"] = "view_item_list";
  EventName2["VIEW_PROMOTION"] = "view_promotion";
  EventName2["VIEW_SEARCH_RESULTS"] = "view_search_results";
})(EventName || (EventName = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function logEvent(gtagFunction, initializationPromise, eventName, eventParams, options) {
  return __awaiter(this, void 0, void 0, function() {
    var measurementId, params;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (!(options && options.global))
            return [3, 1];
          gtagFunction(GtagCommand.EVENT, eventName, eventParams);
          return [2];
        case 1:
          return [4, initializationPromise];
        case 2:
          measurementId = _a2.sent();
          params = __assign(__assign({}, eventParams), {send_to: measurementId});
          gtagFunction(GtagCommand.EVENT, eventName, params);
          _a2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function setCurrentScreen(gtagFunction, initializationPromise, screenName, options) {
  return __awaiter(this, void 0, void 0, function() {
    var measurementId;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (!(options && options.global))
            return [3, 1];
          gtagFunction(GtagCommand.SET, {screen_name: screenName});
          return [2, Promise.resolve()];
        case 1:
          return [4, initializationPromise];
        case 2:
          measurementId = _a2.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            screen_name: screenName
          });
          _a2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function setUserId(gtagFunction, initializationPromise, id2, options) {
  return __awaiter(this, void 0, void 0, function() {
    var measurementId;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (!(options && options.global))
            return [3, 1];
          gtagFunction(GtagCommand.SET, {user_id: id2});
          return [2, Promise.resolve()];
        case 1:
          return [4, initializationPromise];
        case 2:
          measurementId = _a2.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            user_id: id2
          });
          _a2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function setUserProperties(gtagFunction, initializationPromise, properties, options) {
  return __awaiter(this, void 0, void 0, function() {
    var flatProperties, _i2, _a2, key, measurementId;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          if (!(options && options.global))
            return [3, 1];
          flatProperties = {};
          for (_i2 = 0, _a2 = Object.keys(properties); _i2 < _a2.length; _i2++) {
            key = _a2[_i2];
            flatProperties["user_properties." + key] = properties[key];
          }
          gtagFunction(GtagCommand.SET, flatProperties);
          return [2, Promise.resolve()];
        case 1:
          return [4, initializationPromise];
        case 2:
          measurementId = _b.sent();
          gtagFunction(GtagCommand.CONFIG, measurementId, {
            update: true,
            user_properties: properties
          });
          _b.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function setAnalyticsCollectionEnabled(initializationPromise, enabled) {
  return __awaiter(this, void 0, void 0, function() {
    var measurementId;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          return [4, initializationPromise];
        case 1:
          measurementId = _a2.sent();
          window["ga-disable-" + measurementId] = !enabled;
          return [2];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger$1 = new Logger("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function insertScriptTag(dataLayerName2) {
  var script = document.createElement("script");
  script.src = GTAG_URL + "?l=" + dataLayerName2;
  script.async = true;
  document.head.appendChild(script);
}
function getOrCreateDataLayer(dataLayerName2) {
  var dataLayer = [];
  if (Array.isArray(window[dataLayerName2])) {
    dataLayer = window[dataLayerName2];
  } else {
    window[dataLayerName2] = dataLayer;
  }
  return dataLayer;
}
function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
  return __awaiter(this, void 0, void 0, function() {
    var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          correspondingAppId = measurementIdToAppId2[measurementId];
          _a2.label = 1;
        case 1:
          _a2.trys.push([1, 7, , 8]);
          if (!correspondingAppId)
            return [3, 3];
          return [4, initializationPromisesMap2[correspondingAppId]];
        case 2:
          _a2.sent();
          return [3, 6];
        case 3:
          return [4, Promise.all(dynamicConfigPromisesList2)];
        case 4:
          dynamicConfigResults = _a2.sent();
          foundConfig = dynamicConfigResults.find(function(config) {
            return config.measurementId === measurementId;
          });
          if (!foundConfig)
            return [3, 6];
          return [4, initializationPromisesMap2[foundConfig.appId]];
        case 5:
          _a2.sent();
          _a2.label = 6;
        case 6:
          return [3, 8];
        case 7:
          e_1 = _a2.sent();
          logger$1.error(e_1);
          return [3, 8];
        case 8:
          gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
          return [2];
      }
    });
  });
}
function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
  return __awaiter(this, void 0, void 0, function() {
    var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _loop_1, _i2, gaSendToList_1, sendToId, state_1, e_2;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          _a2.trys.push([0, 4, , 5]);
          initializationPromisesToWaitFor = [];
          if (!(gtagParams && gtagParams["send_to"]))
            return [3, 2];
          gaSendToList = gtagParams["send_to"];
          if (!Array.isArray(gaSendToList)) {
            gaSendToList = [gaSendToList];
          }
          return [4, Promise.all(dynamicConfigPromisesList2)];
        case 1:
          dynamicConfigResults = _a2.sent();
          _loop_1 = function(sendToId2) {
            var foundConfig = dynamicConfigResults.find(function(config) {
              return config.measurementId === sendToId2;
            });
            var initializationPromise = foundConfig && initializationPromisesMap2[foundConfig.appId];
            if (initializationPromise) {
              initializationPromisesToWaitFor.push(initializationPromise);
            } else {
              initializationPromisesToWaitFor = [];
              return "break";
            }
          };
          for (_i2 = 0, gaSendToList_1 = gaSendToList; _i2 < gaSendToList_1.length; _i2++) {
            sendToId = gaSendToList_1[_i2];
            state_1 = _loop_1(sendToId);
            if (state_1 === "break")
              break;
          }
          _a2.label = 2;
        case 2:
          if (initializationPromisesToWaitFor.length === 0) {
            initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
          }
          return [4, Promise.all(initializationPromisesToWaitFor)];
        case 3:
          _a2.sent();
          gtagCore(GtagCommand.EVENT, measurementId, gtagParams || {});
          return [3, 5];
        case 4:
          e_2 = _a2.sent();
          logger$1.error(e_2);
          return [3, 5];
        case 5:
          return [2];
      }
    });
  });
}
function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
  function gtagWrapper(command, idOrNameOrParams, gtagParams) {
    return __awaiter(this, void 0, void 0, function() {
      var e_3;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            _a2.trys.push([0, 6, , 7]);
            if (!(command === GtagCommand.EVENT))
              return [3, 2];
            return [4, gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, idOrNameOrParams, gtagParams)];
          case 1:
            _a2.sent();
            return [3, 5];
          case 2:
            if (!(command === GtagCommand.CONFIG))
              return [3, 4];
            return [4, gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, idOrNameOrParams, gtagParams)];
          case 3:
            _a2.sent();
            return [3, 5];
          case 4:
            gtagCore(GtagCommand.SET, idOrNameOrParams);
            _a2.label = 5;
          case 5:
            return [3, 7];
          case 6:
            e_3 = _a2.sent();
            logger$1.error(e_3);
            return [3, 7];
          case 7:
            return [2];
        }
      });
    });
  }
  return gtagWrapper;
}
function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
  var gtagCore = function() {
    var _args = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      _args[_i2] = arguments[_i2];
    }
    window[dataLayerName2].push(arguments);
  };
  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
    gtagCore = window[gtagFunctionName];
  }
  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
  return {
    gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
function findGtagScriptOnPage() {
  var scriptTags = window.document.getElementsByTagName("script");
  for (var _i2 = 0, _a2 = Object.values(scriptTags); _i2 < _a2.length; _i2++) {
    var tag = _a2[_i2];
    if (tag.src && tag.src.includes(GTAG_URL)) {
      return tag;
    }
  }
  return null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$3;
var ERRORS$1 = (_a$3 = {}, _a$3["already-exists"] = "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.", _a$3["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.", _a$3["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate: {$reason}", _a$3["indexedDB-unsupported"] = "IndexedDB is not supported by current browswer", _a$3["invalid-indexedDB-context"] = "Environment doesn't support IndexedDB: {$errorInfo}. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments", _a$3["cookies-not-enabled"] = "Cookies are not enabled in this browser environment. Analytics requires cookies to be enabled.", _a$3["invalid-analytics-context"] = "Firebase Analytics is not supported in browser extensions.", _a$3["fetch-throttle"] = "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.", _a$3["config-fetch-failed"] = "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}", _a$3["no-api-key"] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.', _a$3["no-app-id"] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.', _a$3["indexedDB-unsupported"] = "IndexedDB is not supported by current browswer", _a$3["invalid-indexedDB-context"] = "Environment doesn't support IndexedDB: {$errorInfo}. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments", _a$3["cookies-not-enabled"] = "Cookies are not enabled in this browser environment. Analytics requires cookies to be enabled.", _a$3);
var ERROR_FACTORY$2 = new ErrorFactory("analytics", "Analytics", ERRORS$1);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LONG_RETRY_FACTOR = 30;
var BASE_INTERVAL_MILLIS = 1e3;
var RetryData = function() {
  function RetryData2(throttleMetadata, intervalMillis) {
    if (throttleMetadata === void 0) {
      throttleMetadata = {};
    }
    if (intervalMillis === void 0) {
      intervalMillis = BASE_INTERVAL_MILLIS;
    }
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }
  RetryData2.prototype.getThrottleMetadata = function(appId) {
    return this.throttleMetadata[appId];
  };
  RetryData2.prototype.setThrottleMetadata = function(appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  };
  RetryData2.prototype.deleteThrottleMetadata = function(appId) {
    delete this.throttleMetadata[appId];
  };
  return RetryData2;
}();
var defaultRetryData = new RetryData();
function getHeaders$1(apiKey) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function fetchDynamicConfig(appFields) {
  var _a2;
  return __awaiter(this, void 0, void 0, function() {
    var appId, apiKey, request, appUrl, response, errorMessage, jsonResponse, _ignored_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          appId = appFields.appId, apiKey = appFields.apiKey;
          request = {
            method: "GET",
            headers: getHeaders$1(apiKey)
          };
          appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
          return [4, fetch(appUrl, request)];
        case 1:
          response = _b.sent();
          if (!(response.status !== 200 && response.status !== 304))
            return [3, 6];
          errorMessage = "";
          _b.label = 2;
        case 2:
          _b.trys.push([2, 4, , 5]);
          return [4, response.json()];
        case 3:
          jsonResponse = _b.sent();
          if ((_a2 = jsonResponse.error) === null || _a2 === void 0 ? void 0 : _a2.message) {
            errorMessage = jsonResponse.error.message;
          }
          return [3, 5];
        case 4:
          _ignored_1 = _b.sent();
          return [3, 5];
        case 5:
          throw ERROR_FACTORY$2.create("config-fetch-failed", {
            httpStatus: response.status,
            responseMessage: errorMessage
          });
        case 6:
          return [2, response.json()];
      }
    });
  });
}
function fetchDynamicConfigWithRetry(app, retryData, timeoutMillis) {
  if (retryData === void 0) {
    retryData = defaultRetryData;
  }
  return __awaiter(this, void 0, void 0, function() {
    var _a2, appId, apiKey, measurementId, throttleMetadata, signal;
    var _this = this;
    return __generator(this, function(_b) {
      _a2 = app.options, appId = _a2.appId, apiKey = _a2.apiKey, measurementId = _a2.measurementId;
      if (!appId) {
        throw ERROR_FACTORY$2.create("no-app-id");
      }
      if (!apiKey) {
        if (measurementId) {
          return [2, {
            measurementId,
            appId
          }];
        }
        throw ERROR_FACTORY$2.create("no-api-key");
      }
      throttleMetadata = retryData.getThrottleMetadata(appId) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
      };
      signal = new AnalyticsAbortSignal();
      setTimeout(function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a3) {
            signal.abort();
            return [2];
          });
        });
      }, timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
      return [2, attemptFetchDynamicConfigWithRetry({appId, apiKey, measurementId}, throttleMetadata, signal, retryData)];
    });
  });
}
function attemptFetchDynamicConfigWithRetry(appFields, _a2, signal, retryData) {
  var throttleEndTimeMillis = _a2.throttleEndTimeMillis, backoffCount = _a2.backoffCount;
  if (retryData === void 0) {
    retryData = defaultRetryData;
  }
  return __awaiter(this, void 0, void 0, function() {
    var appId, measurementId, e_1, response, e_2, backoffMillis, throttleMetadata;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          appId = appFields.appId, measurementId = appFields.measurementId;
          _b.label = 1;
        case 1:
          _b.trys.push([1, 3, , 4]);
          return [4, setAbortableTimeout(signal, throttleEndTimeMillis)];
        case 2:
          _b.sent();
          return [3, 4];
        case 3:
          e_1 = _b.sent();
          if (measurementId) {
            logger$1.warn("Timed out fetching this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (' provided in the "measurementId" field in the local Firebase config. [' + e_1.message + "]"));
            return [2, {appId, measurementId}];
          }
          throw e_1;
        case 4:
          _b.trys.push([4, 6, , 7]);
          return [4, fetchDynamicConfig(appFields)];
        case 5:
          response = _b.sent();
          retryData.deleteThrottleMetadata(appId);
          return [2, response];
        case 6:
          e_2 = _b.sent();
          if (!isRetriableError(e_2)) {
            retryData.deleteThrottleMetadata(appId);
            if (measurementId) {
              logger$1.warn("Failed to fetch this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (' provided in the "measurementId" field in the local Firebase config. [' + e_2.message + "]"));
              return [2, {appId, measurementId}];
            } else {
              throw e_2;
            }
          }
          backoffMillis = Number(e_2.httpStatus) === 503 ? calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : calculateBackoffMillis(backoffCount, retryData.intervalMillis);
          throttleMetadata = {
            throttleEndTimeMillis: Date.now() + backoffMillis,
            backoffCount: backoffCount + 1
          };
          retryData.setThrottleMetadata(appId, throttleMetadata);
          logger$1.debug("Calling attemptFetch again in " + backoffMillis + " millis");
          return [2, attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData)];
        case 7:
          return [2];
      }
    });
  });
}
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise(function(resolve, reject) {
    var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    var timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(function() {
      clearTimeout(timeout);
      reject(ERROR_FACTORY$2.create("fetch-throttle", {
        throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof FirebaseError)) {
    return false;
  }
  var httpStatus = Number(e["httpStatus"]);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
var AnalyticsAbortSignal = function() {
  function AnalyticsAbortSignal2() {
    this.listeners = [];
  }
  AnalyticsAbortSignal2.prototype.addEventListener = function(listener) {
    this.listeners.push(listener);
  };
  AnalyticsAbortSignal2.prototype.abort = function() {
    this.listeners.forEach(function(listener) {
      return listener();
    });
  };
  return AnalyticsAbortSignal2;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function initializeIds(app, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore) {
  return __awaiter(this, void 0, void 0, function() {
    var dynamicConfigPromise, _a2, dynamicConfig, fid;
    var _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
          dynamicConfigPromise.then(function(config) {
            measurementIdToAppId2[config.measurementId] = config.appId;
            if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
              logger$1.warn("The measurement ID in the local Firebase config (" + app.options.measurementId + ")" + (" does not match the measurement ID fetched from the server (" + config.measurementId + ").") + " To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.");
            }
          }).catch(function(e) {
            return logger$1.error(e);
          });
          dynamicConfigPromisesList2.push(dynamicConfigPromise);
          return [4, Promise.all([
            dynamicConfigPromise,
            installations.getId()
          ])];
        case 1:
          _a2 = _c.sent(), dynamicConfig = _a2[0], fid = _a2[1];
          gtagCore("js", new Date());
          gtagCore(GtagCommand.CONFIG, dynamicConfig.measurementId, (_b = {}, _b[GA_FID_KEY] = fid, _b[ORIGIN_KEY] = "firebase", _b.update = true, _b));
          return [2, dynamicConfig.measurementId];
      }
    });
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var initializationPromisesMap = {};
var dynamicConfigPromisesList = [];
var measurementIdToAppId = {};
var dataLayerName = "dataLayer";
var gtagName = "gtag";
var gtagCoreFunction;
var wrappedGtagFunction;
var globalInitDone = false;
function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY$2.create("already-initialized");
  }
  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }
  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
function factory(app, installations) {
  if (isBrowserExtension()) {
    throw ERROR_FACTORY$2.create("invalid-analytics-context");
  }
  if (!areCookiesEnabled()) {
    throw ERROR_FACTORY$2.create("cookies-not-enabled");
  }
  if (!isIndexedDBAvailable()) {
    throw ERROR_FACTORY$2.create("indexedDB-unsupported");
  }
  validateIndexedDBOpenable().catch(function(error) {
    var analyticsError = ERROR_FACTORY$2.create("invalid-indexedDB-context", {
      errorInfo: error
    });
    logger$1.warn(analyticsError.message);
  });
  var appId = app.options.appId;
  if (!appId) {
    throw ERROR_FACTORY$2.create("no-app-id");
  }
  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger$1.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest' + (" measurement ID for this Firebase app. Falling back to the measurement ID " + app.options.measurementId) + ' provided in the "measurementId" field in the local Firebase config.');
    } else {
      throw ERROR_FACTORY$2.create("no-api-key");
    }
  }
  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY$2.create("already-exists", {
      id: appId
    });
  }
  if (!globalInitDone) {
    if (!findGtagScriptOnPage()) {
      insertScriptTag(dataLayerName);
    }
    getOrCreateDataLayer(dataLayerName);
    var _a2 = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName), wrappedGtag = _a2.wrappedGtag, gtagCore = _a2.gtagCore;
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  }
  initializationPromisesMap[appId] = initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction);
  var analyticsInstance = {
    app,
    logEvent: function(eventName, eventParams, options) {
      logEvent(wrappedGtagFunction, initializationPromisesMap[appId], eventName, eventParams, options).catch(function(e) {
        return logger$1.error(e);
      });
    },
    setCurrentScreen: function(screenName, options) {
      setCurrentScreen(wrappedGtagFunction, initializationPromisesMap[appId], screenName, options).catch(function(e) {
        return logger$1.error(e);
      });
    },
    setUserId: function(id2, options) {
      setUserId(wrappedGtagFunction, initializationPromisesMap[appId], id2, options).catch(function(e) {
        return logger$1.error(e);
      });
    },
    setUserProperties: function(properties, options) {
      setUserProperties(wrappedGtagFunction, initializationPromisesMap[appId], properties, options).catch(function(e) {
        return logger$1.error(e);
      });
    },
    setAnalyticsCollectionEnabled: function(enabled) {
      setAnalyticsCollectionEnabled(initializationPromisesMap[appId], enabled).catch(function(e) {
        return logger$1.error(e);
      });
    },
    INTERNAL: {
      delete: function() {
        delete initializationPromisesMap[appId];
        return Promise.resolve();
      }
    }
  };
  return analyticsInstance;
}
var name$f = "@firebase/analytics";
var version$4 = "0.5.0";
var ANALYTICS_TYPE = "analytics";
function registerAnalytics(instance) {
  instance.INTERNAL.registerComponent(new Component(ANALYTICS_TYPE, function(container) {
    var app = container.getProvider("app").getImmediate();
    var installations = container.getProvider("installations").getImmediate();
    return factory(app, installations);
  }, "PUBLIC").setServiceProps({
    settings,
    EventName,
    isSupported
  }));
  instance.INTERNAL.registerComponent(new Component("analytics-internal", internalFactory, "PRIVATE"));
  instance.registerVersion(name$f, version$4);
  function internalFactory(container) {
    try {
      var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: analytics.logEvent
      };
    } catch (e) {
      throw ERROR_FACTORY$2.create("interop-component-reg-failed", {
        reason: e
      });
    }
  }
}
registerAnalytics(firebase$1);
function isSupported() {
  return __awaiter(this, void 0, void 0, function() {
    var isDBOpenable, error_1;
    return __generator(this, function(_a2) {
      switch (_a2.label) {
        case 0:
          if (isBrowserExtension()) {
            return [2, false];
          }
          if (!areCookiesEnabled()) {
            return [2, false];
          }
          if (!isIndexedDBAvailable()) {
            return [2, false];
          }
          _a2.label = 1;
        case 1:
          _a2.trys.push([1, 3, , 4]);
          return [4, validateIndexedDBOpenable()];
        case 2:
          isDBOpenable = _a2.sent();
          return [2, isDBOpenable];
        case 3:
          error_1 = _a2.sent();
          return [2, false];
        case 4:
          return [2];
      }
    });
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics$1 = function(d, b2) {
  extendStatics$1 = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b3) {
    d2.__proto__ = b3;
  } || function(d2, b3) {
    for (var p2 in b3)
      if (b3.hasOwnProperty(p2))
        d2[p2] = b3[p2];
  };
  return extendStatics$1(d, b2);
};
function __extends$1(d, b2) {
  extendStatics$1(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
function __values$1(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var g, goog = goog || {}, k = commonjsGlobal || self;
function aa() {
}
function ba(a) {
  var b2 = typeof a;
  return b2 != "object" ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
}
function ca(a) {
  var b2 = ba(a);
  return b2 == "array" || b2 == "object" && typeof a.length == "number";
}
function n(a) {
  var b2 = typeof a;
  return b2 == "object" && a != null || b2 == "function";
}
function da(a) {
  return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
}
var ea = "closure_uid_" + (1e9 * Math.random() >>> 0), fa = 0;
function ha(a, b2, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b2, c) {
  if (!a)
    throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b2, e);
    };
  }
  return function() {
    return a.apply(b2, arguments);
  };
}
function p(a, b2, c) {
  Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? p = ha : p = ja;
  return p.apply(null, arguments);
}
function ka(a, b2) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}
var q = Date.now;
function r(a, b2) {
  function c() {
  }
  c.prototype = b2.prototype;
  a.S = b2.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
}
function u() {
  this.j = this.j;
  this.i = this.i;
}
var la = 0;
u.prototype.j = false;
u.prototype.ja = function() {
  if (!this.j && (this.j = true, this.G(), la != 0)) {
    var a = da(this);
  }
};
u.prototype.G = function() {
  if (this.i)
    for (; this.i.length; )
      this.i.shift()();
};
var na = Array.prototype.indexOf ? function(a, b2) {
  return Array.prototype.indexOf.call(a, b2, void 0);
} : function(a, b2) {
  if (typeof a === "string")
    return typeof b2 !== "string" || b2.length != 1 ? -1 : a.indexOf(b2, 0);
  for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b2)
      return c;
  return -1;
}, oa = Array.prototype.forEach ? function(a, b2, c) {
  Array.prototype.forEach.call(a, b2, c);
} : function(a, b2, c) {
  for (var d = a.length, e = typeof a === "string" ? a.split("") : a, f = 0; f < d; f++)
    f in e && b2.call(c, e[f], f, a);
};
function pa(a) {
  a: {
    var b2 = qa;
    for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b2.call(void 0, d[e], e, a)) {
        b2 = e;
        break a;
      }
    b2 = -1;
  }
  return 0 > b2 ? null : typeof a === "string" ? a.charAt(b2) : a[b2];
}
function ra(a) {
  return Array.prototype.concat.apply([], arguments);
}
function sa(a) {
  var b2 = a.length;
  if (0 < b2) {
    for (var c = Array(b2), d = 0; d < b2; d++)
      c[d] = a[d];
    return c;
  }
  return [];
}
function ta(a) {
  return /^[\s\xa0]*$/.test(a);
}
var ua = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function v(a, b2) {
  return a.indexOf(b2) != -1;
}
function xa(a, b2) {
  return a < b2 ? -1 : a > b2 ? 1 : 0;
}
var w;
a: {
  var ya = k.navigator;
  if (ya) {
    var za = ya.userAgent;
    if (za) {
      w = za;
      break a;
    }
  }
  w = "";
}
function Aa(a, b2, c) {
  for (var d in a)
    b2.call(c, a[d], d, a);
}
function Ba(a) {
  var b2 = {};
  for (var c in a)
    b2[c] = a[c];
  return b2;
}
var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Da(a, b2) {
  var c, d;
  for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
      a[c] = d[c];
    for (var f = 0; f < Ca.length; f++)
      c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
function Ea(a) {
  Ea[" "](a);
  return a;
}
Ea[" "] = aa;
function Fa(a, b2) {
  var c = Ga;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b2(a);
}
var Ha = v(w, "Opera"), x = v(w, "Trident") || v(w, "MSIE"), Ia = v(w, "Edge"), Ja = Ia || x, Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), La = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function Ma() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var Na;
a: {
  var Oa = "", Pa = function() {
    var a = w;
    if (Ka)
      return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ia)
      return /Edge\/([\d\.]+)/.exec(a);
    if (x)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (La)
      return /WebKit\/(\S+)/.exec(a);
    if (Ha)
      return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();
  Pa && (Oa = Pa ? Pa[1] : "");
  if (x) {
    var Qa = Ma();
    if (Qa != null && Qa > parseFloat(Oa)) {
      Na = String(Qa);
      break a;
    }
  }
  Na = Oa;
}
var Ga = {};
function Ra(a) {
  return Fa(a, function() {
    {
      var b2 = 0;
      var e = ua(String(Na)).split("."), f = ua(String(a)).split("."), h = Math.max(e.length, f.length);
      for (var m = 0; b2 == 0 && m < h; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
          c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
          d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
          if (c[0].length == 0 && d[0].length == 0)
            break;
          b2 = xa(c[1].length == 0 ? 0 : parseInt(c[1], 10), d[1].length == 0 ? 0 : parseInt(d[1], 10)) || xa(c[2].length == 0, d[2].length == 0) || xa(c[2], d[2]);
          c = c[3];
          d = d[3];
        } while (b2 == 0);
      }
    }
    return 0 <= b2;
  });
}
var Sa;
if (k.document && x) {
  var Ta = Ma();
  Sa = Ta ? Ta : parseInt(Na, 10) || void 0;
} else
  Sa = void 0;
var Ua = Sa;
var Va = !x || 9 <= Number(Ua), Wa = x && !Ra("9"), Xa = function() {
  if (!k.addEventListener || !Object.defineProperty)
    return false;
  var a = false, b2 = Object.defineProperty({}, "passive", {get: function() {
    a = true;
  }});
  try {
    k.addEventListener("test", aa, b2), k.removeEventListener("test", aa, b2);
  } catch (c) {
  }
  return a;
}();
function y(a, b2) {
  this.type = a;
  this.a = this.target = b2;
  this.defaultPrevented = false;
}
y.prototype.b = function() {
  this.defaultPrevented = true;
};
function A(a, b2) {
  y.call(this, a ? a.type : "");
  this.relatedTarget = this.a = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.pointerId = 0;
  this.pointerType = "";
  this.c = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b2;
    if (b2 = a.relatedTarget) {
      if (Ka) {
        a: {
          try {
            Ea(b2.nodeName);
            var e = true;
            break a;
          } catch (f) {
          }
          e = false;
        }
        e || (b2 = null);
      }
    } else
      c == "mouseover" ? b2 = a.fromElement : c == "mouseout" && (b2 = a.toElement);
    this.relatedTarget = b2;
    d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = typeof a.pointerType === "string" ? a.pointerType : Ya[a.pointerType] || "";
    this.c = a;
    a.defaultPrevented && this.b();
  }
}
r(A, y);
var Ya = {2: "touch", 3: "pen", 4: "mouse"};
A.prototype.b = function() {
  A.S.b.call(this);
  var a = this.c;
  if (a.preventDefault)
    a.preventDefault();
  else if (a.returnValue = false, Wa)
    try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
        a.keyCode = -1;
    } catch (b2) {
    }
};
var C = "closure_listenable_" + (1e6 * Math.random() | 0), Za = 0;
function $a(a, b2, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b2;
  this.type = c;
  this.capture = !!d;
  this.ca = e;
  this.key = ++Za;
  this.Y = this.Z = false;
}
function ab(a) {
  a.Y = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ca = null;
}
function bb(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
bb.prototype.add = function(a, b2, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var h = cb(a, b2, d, e);
  -1 < h ? (b2 = a[h], c || (b2.Z = false)) : (b2 = new $a(b2, this.src, f, !!d, e), b2.Z = c, a.push(b2));
  return b2;
};
function db(a, b2) {
  var c = b2.type;
  if (c in a.a) {
    var d = a.a[c], e = na(d, b2), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (ab(b2), a.a[c].length == 0 && (delete a.a[c], a.b--));
  }
}
function cb(a, b2, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b2 && f.capture == !!c && f.ca == d)
      return e;
  }
  return -1;
}
var eb = "closure_lm_" + (1e6 * Math.random() | 0), fb = {};
function hb(a, b2, c, d, e) {
  if (d && d.once)
    return ib(a, b2, c, d, e);
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++)
      hb(a, b2[f], c, d, e);
    return null;
  }
  c = jb(c);
  return a && a[C] ? a.va(b2, c, n(d) ? !!d.capture : !!d, e) : kb(a, b2, c, false, d, e);
}
function kb(a, b2, c, d, e, f) {
  if (!b2)
    throw Error("Invalid event type");
  var h = n(e) ? !!e.capture : !!e;
  if (h && !Va)
    return null;
  var m = lb(a);
  m || (a[eb] = m = new bb(a));
  c = m.add(b2, c, d, h, f);
  if (c.proxy)
    return c;
  d = mb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener)
    Xa || (e = h), e === void 0 && (e = false), a.addEventListener(b2.toString(), d, e);
  else if (a.attachEvent)
    a.attachEvent(nb(b2.toString()), d);
  else if (a.addListener && a.removeListener)
    a.addListener(d);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}
function mb() {
  var a = ob, b2 = Va ? function(c) {
    return a.call(b2.src, b2.listener, c);
  } : function(c) {
    c = a.call(b2.src, b2.listener, c);
    if (!c)
      return c;
  };
  return b2;
}
function ib(a, b2, c, d, e) {
  if (Array.isArray(b2)) {
    for (var f = 0; f < b2.length; f++)
      ib(a, b2[f], c, d, e);
    return null;
  }
  c = jb(c);
  return a && a[C] ? a.wa(b2, c, n(d) ? !!d.capture : !!d, e) : kb(a, b2, c, true, d, e);
}
function pb(a, b2, c, d, e) {
  if (Array.isArray(b2))
    for (var f = 0; f < b2.length; f++)
      pb(a, b2[f], c, d, e);
  else
    (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C]) ? (a = a.c, b2 = String(b2).toString(), b2 in a.a && (f = a.a[b2], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.a[b2], a.b--)))) : a && (a = lb(a)) && (b2 = a.a[b2.toString()], a = -1, b2 && (a = cb(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && rb(c));
}
function rb(a) {
  if (typeof a !== "number" && a && !a.Y) {
    var b2 = a.src;
    if (b2 && b2[C])
      db(b2.c, a);
    else {
      var c = a.type, d = a.proxy;
      b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(nb(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
      (c = lb(b2)) ? (db(c, a), c.b == 0 && (c.src = null, b2[eb] = null)) : ab(a);
    }
  }
}
function nb(a) {
  return a in fb ? fb[a] : fb[a] = "on" + a;
}
function sb(a, b2) {
  var c = a.listener, d = a.ca || a.src;
  a.Z && rb(a);
  return c.call(d, b2);
}
function ob(a, b2) {
  if (a.Y)
    return true;
  if (!Va) {
    if (!b2)
      a: {
        b2 = ["window", "event"];
        for (var c = k, d = 0; d < b2.length; d++)
          if (c = c[b2[d]], c == null) {
            b2 = null;
            break a;
          }
        b2 = c;
      }
    b2 = new A(b2, this);
    return sb(a, b2);
  }
  return sb(a, new A(b2, this));
}
function lb(a) {
  a = a[eb];
  return a instanceof bb ? a : null;
}
var tb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function jb(a) {
  if (ba(a) == "function")
    return a;
  a[tb] || (a[tb] = function(b2) {
    return a.handleEvent(b2);
  });
  return a[tb];
}
function D() {
  u.call(this);
  this.c = new bb(this);
  this.J = this;
  this.C = null;
}
r(D, u);
D.prototype[C] = true;
g = D.prototype;
g.addEventListener = function(a, b2, c, d) {
  hb(this, a, b2, c, d);
};
g.removeEventListener = function(a, b2, c, d) {
  pb(this, a, b2, c, d);
};
g.dispatchEvent = function(a) {
  var b2, c = this.C;
  if (c)
    for (b2 = []; c; c = c.C)
      b2.push(c);
  c = this.J;
  var d = a.type || a;
  if (typeof a === "string")
    a = new y(a, c);
  else if (a instanceof y)
    a.target = a.target || c;
  else {
    var e = a;
    a = new y(d, c);
    Da(a, e);
  }
  e = true;
  if (b2)
    for (var f = b2.length - 1; 0 <= f; f--) {
      var h = a.a = b2[f];
      e = ub(h, d, true, a) && e;
    }
  h = a.a = c;
  e = ub(h, d, true, a) && e;
  e = ub(h, d, false, a) && e;
  if (b2)
    for (f = 0; f < b2.length; f++)
      h = a.a = b2[f], e = ub(h, d, false, a) && e;
  return e;
};
g.G = function() {
  D.S.G.call(this);
  if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0; e < d.length; e++)
        ab(d[e]);
      delete a.a[c];
      a.b--;
    }
  }
  this.C = null;
};
g.va = function(a, b2, c, d) {
  return this.c.add(String(a), b2, false, c, d);
};
g.wa = function(a, b2, c, d) {
  return this.c.add(String(a), b2, true, c, d);
};
function ub(a, b2, c, d) {
  b2 = a.c.a[String(b2)];
  if (!b2)
    return true;
  b2 = b2.concat();
  for (var e = true, f = 0; f < b2.length; ++f) {
    var h = b2[f];
    if (h && !h.Y && h.capture == c) {
      var m = h.listener, l = h.ca || h.src;
      h.Z && db(a.c, h);
      e = m.call(l, d) !== false && e;
    }
  }
  return e && !d.defaultPrevented;
}
var vb = k.JSON.stringify;
function wb() {
  this.b = this.a = null;
}
var yb = new (function() {
  function class_1(a, b2, c) {
    this.f = c;
    this.c = a;
    this.g = b2;
    this.b = 0;
    this.a = null;
  }
  class_1.prototype.get = function() {
    var a;
    0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
    return a;
  };
  return class_1;
}())(function() {
  return new xb();
}, function(a) {
  a.reset();
}, 100);
wb.prototype.add = function(a, b2) {
  var c = yb.get();
  c.set(a, b2);
  this.b ? this.b.next = c : this.a = c;
  this.b = c;
};
function zb() {
  var a = Ab, b2 = null;
  a.a && (b2 = a.a, a.a = a.a.next, a.a || (a.b = null), b2.next = null);
  return b2;
}
function xb() {
  this.next = this.b = this.a = null;
}
xb.prototype.set = function(a, b2) {
  this.a = a;
  this.b = b2;
  this.next = null;
};
xb.prototype.reset = function() {
  this.next = this.b = this.a = null;
};
function Bb(a) {
  k.setTimeout(function() {
    throw a;
  }, 0);
}
function Cb(a, b2) {
  Db || Eb();
  Fb || (Db(), Fb = true);
  Ab.add(a, b2);
}
var Db;
function Eb() {
  var a = k.Promise.resolve(void 0);
  Db = function() {
    a.then(Gb);
  };
}
var Fb = false, Ab = new wb();
function Gb() {
  for (var a; a = zb(); ) {
    try {
      a.a.call(a.b);
    } catch (c) {
      Bb(c);
    }
    var b2 = yb;
    b2.g(a);
    b2.b < b2.f && (b2.b++, a.next = b2.a, b2.a = a);
  }
  Fb = false;
}
function Hb(a, b2) {
  D.call(this);
  this.b = a || 1;
  this.a = b2 || k;
  this.f = p(this.Ya, this);
  this.g = q();
}
r(Hb, D);
g = Hb.prototype;
g.aa = false;
g.M = null;
g.Ya = function() {
  if (this.aa) {
    var a = q() - this.g;
    0 < a && a < 0.8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
  }
};
g.start = function() {
  this.aa = true;
  this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q());
};
function Ib(a) {
  a.aa = false;
  a.M && (a.a.clearTimeout(a.M), a.M = null);
}
g.G = function() {
  Hb.S.G.call(this);
  Ib(this);
  delete this.a;
};
function Jb(a, b2, c) {
  if (ba(a) == "function")
    c && (a = p(a, c));
  else if (a && typeof a.handleEvent == "function")
    a = p(a.handleEvent, a);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(b2) ? -1 : k.setTimeout(a, b2 || 0);
}
function Kb(a) {
  a.a = Jb(function() {
    a.a = null;
    a.c && (a.c = false, Kb(a));
  }, a.h);
  var b2 = a.b;
  a.b = null;
  a.g.apply(null, b2);
}
var Lb = function(_super) {
  __extends$1(Lb2, _super);
  function Lb2(a, b2, c) {
    var _this = _super.call(this) || this;
    _this.g = c != null ? a.bind(c) : a;
    _this.h = b2;
    _this.b = null;
    _this.c = false;
    _this.a = null;
    return _this;
  }
  Lb2.prototype.f = function(a) {
    this.b = arguments;
    this.a ? this.c = true : Kb(this);
  };
  Lb2.prototype.G = function() {
    _super.prototype.G.call(this);
    this.a && (k.clearTimeout(this.a), this.a = null, this.c = false, this.b = null);
  };
  return Lb2;
}(u);
function E(a) {
  u.call(this);
  this.b = a;
  this.a = {};
}
r(E, u);
var Mb = [];
function Nb(a, b2, c, d) {
  Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb);
  for (var e = 0; e < c.length; e++) {
    var f = hb(b2, c[e], d || a.handleEvent, false, a.b || a);
    if (!f)
      break;
    a.a[f.key] = f;
  }
}
function Ob(a) {
  Aa(a.a, function(b2, c) {
    this.a.hasOwnProperty(c) && rb(b2);
  }, a);
  a.a = {};
}
E.prototype.G = function() {
  E.S.G.call(this);
  Ob(this);
};
E.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Pb() {
  this.a = true;
}
function Qb(a, b2, c, d, e, f) {
  a.info(function() {
    if (a.a)
      if (f) {
        var h = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
          var t = m[l].split("=");
          if (1 < t.length) {
            var B2 = t[0];
            t = t[1];
            var z2 = B2.split("_");
            h = 2 <= z2.length && z2[1] == "type" ? h + (B2 + "=" + t + "&") : h + (B2 + "=redacted&");
          }
        }
      } else
        h = null;
    else
      h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + h;
  });
}
function Rb(a, b2, c, d, e, f, h) {
  a.info(function() {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + h;
  });
}
function F(a, b2, c, d) {
  a.info(function() {
    return "XMLHTTP TEXT (" + b2 + "): " + Sb(a, c) + (d ? " " + d : "");
  });
}
function Tb(a, b2) {
  a.info(function() {
    return "TIMEOUT: " + b2;
  });
}
Pb.prototype.info = function() {
};
function Sb(a, b2) {
  if (!a.a)
    return b2;
  if (!b2)
    return null;
  try {
    var c = JSON.parse(b2);
    if (c) {
      for (a = 0; a < c.length; a++)
        if (Array.isArray(c[a])) {
          var d = c[a];
          if (!(2 > d.length)) {
            var e = d[1];
            if (Array.isArray(e) && !(1 > e.length)) {
              var f = e[0];
              if (f != "noop" && f != "stop" && f != "close")
                for (var h = 1; h < e.length; h++)
                  e[h] = "";
            }
          }
        }
    }
    return vb(c);
  } catch (m) {
    return b2;
  }
}
var Ub = null;
function Vb() {
  return Ub = Ub || new D();
}
function Wb(a) {
  y.call(this, "serverreachability", a);
}
r(Wb, y);
function G(a) {
  var b2 = Vb();
  b2.dispatchEvent(new Wb(b2, a));
}
function Xb(a) {
  y.call(this, "statevent", a);
}
r(Xb, y);
function H(a) {
  var b2 = Vb();
  b2.dispatchEvent(new Xb(b2, a));
}
function Yb(a) {
  y.call(this, "timingevent", a);
}
r(Yb, y);
function I(a, b2) {
  if (ba(a) != "function")
    throw Error("Fn must not be null and must be a function");
  return k.setTimeout(function() {
    a();
  }, b2);
}
var Zb = {NO_ERROR: 0, Za: 1, gb: 2, fb: 3, bb: 4, eb: 5, hb: 6, Da: 7, TIMEOUT: 8, kb: 9};
var $b = {ab: "complete", ob: "success", Ea: "error", Da: "abort", mb: "ready", nb: "readystatechange", TIMEOUT: "timeout", ib: "incrementaldata", lb: "progress", cb: "downloadprogress", pb: "uploadprogress"};
function ac() {
}
ac.prototype.a = null;
function bc(a) {
  var b2;
  (b2 = a.a) || (b2 = a.a = {});
  return b2;
}
function cc() {
}
var J = {OPEN: "a", $a: "b", Ea: "c", jb: "d"};
function dc() {
  y.call(this, "d");
}
r(dc, y);
function ec() {
  y.call(this, "c");
}
r(ec, y);
var fc;
function gc() {
}
r(gc, ac);
fc = new gc();
function K(a, b2, c, d) {
  this.g = a;
  this.c = b2;
  this.f = c;
  this.T = d || 1;
  this.J = new E(this);
  this.P = hc;
  a = Ja ? 125 : void 0;
  this.R = new Hb(a);
  this.B = null;
  this.b = false;
  this.j = this.l = this.i = this.H = this.u = this.U = this.o = null;
  this.s = [];
  this.a = null;
  this.D = 0;
  this.h = this.m = null;
  this.N = -1;
  this.A = false;
  this.O = 0;
  this.F = null;
  this.W = this.C = this.V = this.I = false;
}
var hc = 45e3, ic = {}, jc = {};
g = K.prototype;
g.setTimeout = function(a) {
  this.P = a;
};
function kc(a, b2, c) {
  a.H = 1;
  a.i = lc(L(b2));
  a.j = c;
  a.I = true;
  mc(a, null);
}
function mc(a, b2) {
  a.u = q();
  M(a);
  a.l = L(a.i);
  var c = a.l, d = a.T;
  Array.isArray(d) || (d = [String(d)]);
  nc(c.b, "t", d);
  a.D = 0;
  a.a = oc(a.g, a.g.C ? b2 : null);
  0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O));
  Nb(a.J, a.a, "readystatechange", a.Wa);
  b2 = a.B ? Ba(a.B) : {};
  a.j ? (a.m || (a.m = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b2)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b2));
  G(1);
  Qb(a.c, a.m, a.l, a.f, a.T, a.j);
}
g.Wa = function(a) {
  a = a.target;
  var b2 = this.F;
  b2 && N(a) == 3 ? b2.f() : this.Ca(a);
};
g.Ca = function(a) {
  try {
    if (a == this.a)
      a: {
        var b2 = N(this.a), c = this.a.ua(), d = this.a.X();
        if (!(3 > b2 || b2 == 3 && !Ja && !this.a.$())) {
          this.A || b2 != 4 || c == 7 || (c == 8 || 0 >= d ? G(3) : G(2));
          pc(this);
          var e = this.a.X();
          this.N = e;
          var f = this.a.$();
          this.b = e == 200;
          Rb(this.c, this.m, this.l, this.f, this.T, b2, e);
          if (this.b) {
            if (this.V && !this.C) {
              b: {
                if (this.a) {
                  var h, m = this.a;
                  if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta(h)) {
                    var l = h;
                    break b;
                  }
                }
                l = null;
              }
              if (l)
                F(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = true, qc(this, l);
              else {
                this.b = false;
                this.h = 3;
                H(12);
                O(this);
                rc(this);
                break a;
              }
            }
            this.I ? (tc(this, b2, f), Ja && this.b && b2 == 3 && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F(this.c, this.f, f, null), qc(this, f));
            b2 == 4 && O(this);
            this.b && !this.A && (b2 == 4 ? uc(this.g, this) : (this.b = false, M(this)));
          } else
            e == 400 && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H(12)) : (this.h = 0, H(13)), O(this), rc(this);
        }
      }
  } catch (t) {
  } finally {
  }
};
function tc(a, b2, c) {
  for (var d = true; !a.A && a.D < c.length; ) {
    var e = vc(a, c);
    if (e == jc) {
      b2 == 4 && (a.h = 4, H(14), d = false);
      F(a.c, a.f, null, "[Incomplete Response]");
      break;
    } else if (e == ic) {
      a.h = 4;
      H(15);
      F(a.c, a.f, c, "[Invalid Chunk]");
      d = false;
      break;
    } else
      F(a.c, a.f, e, null), qc(a, e);
  }
  b2 == 4 && c.length == 0 && (a.h = 1, H(16), d = false);
  a.b = a.b && d;
  d ? 0 < c.length && !a.W && (a.W = true, b2 = a.g, b2.a == a && b2.V && !b2.F && (b2.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b2), b2.F = true)) : (F(a.c, a.f, c, "[Invalid Chunked Response]"), O(a), rc(a));
}
g.Va = function() {
  if (this.a) {
    var a = N(this.a), b2 = this.a.$();
    this.D < b2.length && (pc(this), tc(this, a, b2), this.b && a != 4 && M(this));
  }
};
function vc(a, b2) {
  var c = a.D, d = b2.indexOf("\n", c);
  if (d == -1)
    return jc;
  c = Number(b2.substring(c, d));
  if (isNaN(c))
    return ic;
  d += 1;
  if (d + c > b2.length)
    return jc;
  b2 = b2.substr(d, c);
  a.D = d + c;
  return b2;
}
g.cancel = function() {
  this.A = true;
  O(this);
};
function M(a) {
  a.U = q() + a.P;
  yc(a, a.P);
}
function yc(a, b2) {
  if (a.o != null)
    throw Error("WatchDog timer not null");
  a.o = I(p(a.Ua, a), b2);
}
function pc(a) {
  a.o && (k.clearTimeout(a.o), a.o = null);
}
g.Ua = function() {
  this.o = null;
  var a = q();
  0 <= a - this.U ? (Tb(this.c, this.l), this.H != 2 && (G(3), H(17)), O(this), this.h = 2, rc(this)) : yc(this, this.U - a);
};
function rc(a) {
  a.g.v == 0 || a.A || uc(a.g, a);
}
function O(a) {
  pc(a);
  var b2 = a.F;
  b2 && typeof b2.ja == "function" && b2.ja();
  a.F = null;
  Ib(a.R);
  Ob(a.J);
  a.a && (b2 = a.a, a.a = null, b2.abort(), b2.ja());
}
function qc(a, b2) {
  try {
    var c = a.g;
    if (c.v != 0 && (c.a == a || zc(c.b, a))) {
      if (c.I = a.N, !a.C && zc(c.b, a) && c.v == 3) {
        try {
          var d = c.ka.a.parse(b2);
        } catch (sc) {
          d = null;
        }
        if (Array.isArray(d) && d.length == 3) {
          var e = d;
          if (e[0] == 0)
            a: {
              if (!c.j) {
                if (c.a)
                  if (c.a.u + 3e3 < a.u)
                    Ac(c), Bc(c);
                  else
                    break a;
                Cc(c);
                H(18);
              }
            }
          else
            c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && c.o == 0 && !c.m && (c.m = I(p(c.Ra, c), 6e3));
          if (1 >= Dc(c.b) && c.ea) {
            try {
              c.ea();
            } catch (sc) {
            }
            c.ea = void 0;
          }
        } else
          P(c, 11);
      } else if ((a.C || c.a == a) && Ac(c), !ta(b2))
        for (b2 = d = c.ka.a.parse(b2), d = 0; d < b2.length; d++)
          if (e = b2[d], c.P = e[0], e = e[1], c.v == 2)
            if (e[0] == "c") {
              c.J = e[1];
              c.ga = e[2];
              var f = e[3];
              f != null && (c.ha = f, c.c.info("VER=" + c.ha));
              var h = e[4];
              h != null && (c.pa = h, c.c.info("SVER=" + c.pa));
              var m = e[5];
              if (m != null && typeof m === "number" && 0 < m) {
                var l = 1.5 * m;
                c.D = l;
                c.c.info("backChannelRequestTimeoutMs_=" + l);
              }
              l = c;
              var t = a.a;
              if (t) {
                var B2 = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (B2) {
                  var z2 = l.b;
                  !z2.a && (v(B2, "spdy") || v(B2, "quic") || v(B2, "h2")) && (z2.f = z2.g, z2.a = new Set(), z2.b && (Ec(z2, z2.b), z2.b = null));
                }
                if (l.A) {
                  var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") : null;
                  qb && (l.na = qb, Q(l.B, l.A, qb));
                }
              }
              c.v = 3;
              c.f && c.f.ta();
              c.V && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
              l = c;
              var va2 = a;
              l.la = Fc(l, l.C ? l.ga : null, l.fa);
              if (va2.C) {
                Gc(l.b, va2);
                var wa2 = va2, wc = l.D;
                wc && wa2.setTimeout(wc);
                wa2.o && (pc(wa2), M(wa2));
                l.a = va2;
              } else
                Hc(l);
              0 < c.g.length && Ic(c);
            } else
              e[0] != "stop" && e[0] != "close" || P(c, 7);
          else
            c.v == 3 && (e[0] == "stop" || e[0] == "close" ? e[0] == "stop" ? P(c, 7) : Jc(c) : e[0] != "noop" && c.f && c.f.sa(e), c.o = 0);
    }
    G(4);
  } catch (sc) {
  }
}
function Kc(a) {
  if (a.K && typeof a.K == "function")
    return a.K();
  if (typeof a === "string")
    return a.split("");
  if (ca(a)) {
    for (var b2 = [], c = a.length, d = 0; d < c; d++)
      b2.push(a[d]);
    return b2;
  }
  b2 = [];
  c = 0;
  for (d in a)
    b2[c++] = a[d];
  return a = b2;
}
function Lc(a, b2) {
  if (a.forEach && typeof a.forEach == "function")
    a.forEach(b2, void 0);
  else if (ca(a) || typeof a === "string")
    oa(a, b2, void 0);
  else {
    if (a.L && typeof a.L == "function")
      var c = a.L();
    else if (a.K && typeof a.K == "function")
      c = void 0;
    else if (ca(a) || typeof a === "string") {
      c = [];
      for (var d = a.length, e = 0; e < d; e++)
        c.push(e);
    } else
      for (e in c = [], d = 0, a)
        c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
      b2.call(void 0, d[f], c && c[f], a);
  }
}
function R(a, b2) {
  this.b = {};
  this.a = [];
  this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2)
      throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
      this.set(arguments[d], arguments[d + 1]);
  } else if (a)
    if (a instanceof R)
      for (c = a.L(), d = 0; d < c.length; d++)
        this.set(c[d], a.get(c[d]));
    else
      for (d in a)
        this.set(d, a[d]);
}
g = R.prototype;
g.K = function() {
  Mc(this);
  for (var a = [], b2 = 0; b2 < this.a.length; b2++)
    a.push(this.b[this.a[b2]]);
  return a;
};
g.L = function() {
  Mc(this);
  return this.a.concat();
};
function Mc(a) {
  if (a.c != a.a.length) {
    for (var b2 = 0, c = 0; b2 < a.a.length; ) {
      var d = a.a[b2];
      S(a.b, d) && (a.a[c++] = d);
      b2++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    var e = {};
    for (c = b2 = 0; b2 < a.a.length; )
      d = a.a[b2], S(e, d) || (a.a[c++] = d, e[d] = 1), b2++;
    a.a.length = c;
  }
}
g.get = function(a, b2) {
  return S(this.b, a) ? this.b[a] : b2;
};
g.set = function(a, b2) {
  S(this.b, a) || (this.c++, this.a.push(a));
  this.b[a] = b2;
};
g.forEach = function(a, b2) {
  for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b2, f, e, this);
  }
};
function S(a, b2) {
  return Object.prototype.hasOwnProperty.call(a, b2);
}
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b2) {
  if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="), e = null;
      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else
        f = a[c];
      b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}
function T(a, b2) {
  this.c = this.j = this.f = "";
  this.h = null;
  this.i = this.g = "";
  this.a = false;
  if (a instanceof T) {
    this.a = b2 !== void 0 ? b2 : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b2 = a.b;
    var c = new U();
    c.c = b2.c;
    b2.a && (c.a = new R(b2.a), c.b = b2.b);
    Sc(this, c);
    this.i = a.i;
  } else
    a && (c = String(a).match(Nc)) ? (this.a = !!b2, Pc(this, c[1] || "", true), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", true), Rc(this, c[4]), this.g = Tc(c[5] || "", true), Sc(this, c[6] || "", true), this.i = Tc(c[7] || "")) : (this.a = !!b2, this.b = new U(null, this.a));
}
T.prototype.toString = function() {
  var a = [], b2 = this.f;
  b2 && a.push(Uc(b2, Vc, true), ":");
  var c = this.c;
  if (c || b2 == "file")
    a.push("//"), (b2 = this.j) && a.push(Uc(b2, Vc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, c != null && a.push(":", String(c));
  if (c = this.g)
    this.c && c.charAt(0) != "/" && a.push("/"), a.push(Uc(c, c.charAt(0) == "/" ? Wc : Xc, true));
  (c = this.b.toString()) && a.push("?", c);
  (c = this.i) && a.push("#", Uc(c, Yc));
  return a.join("");
};
function L(a) {
  return new T(a);
}
function Pc(a, b2, c) {
  a.f = c ? Tc(b2, true) : b2;
  a.f && (a.f = a.f.replace(/:$/, ""));
}
function Qc(a, b2, c) {
  a.c = c ? Tc(b2, true) : b2;
}
function Rc(a, b2) {
  if (b2) {
    b2 = Number(b2);
    if (isNaN(b2) || 0 > b2)
      throw Error("Bad port number " + b2);
    a.h = b2;
  } else
    a.h = null;
}
function Sc(a, b2, c) {
  b2 instanceof U ? (a.b = b2, Zc(a.b, a.a)) : (c || (b2 = Uc(b2, $c)), a.b = new U(b2, a.a));
}
function Q(a, b2, c) {
  a.b.set(b2, c);
}
function lc(a) {
  Q(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
  return a;
}
function ad(a) {
  return a instanceof T ? L(a) : new T(a, void 0);
}
function bd(a, b2, c, d) {
  var e = new T(null, void 0);
  a && Pc(e, a);
  b2 && Qc(e, b2);
  c && Rc(e, c);
  d && (e.g = d);
  return e;
}
function Tc(a, b2) {
  return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function Uc(a, b2, c) {
  return typeof a === "string" ? (a = encodeURI(a).replace(b2, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function cd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var Vc = /[#\/\?@]/g, Xc = /[#\?:]/g, Wc = /[#\?]/g, $c = /[#\?@]/g, Yc = /#/g;
function U(a, b2) {
  this.b = this.a = null;
  this.c = a || null;
  this.f = !!b2;
}
function V(a) {
  a.a || (a.a = new R(), a.b = 0, a.c && Oc(a.c, function(b2, c) {
    a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
  }));
}
g = U.prototype;
g.add = function(a, b2) {
  V(this);
  this.c = null;
  a = W(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b2);
  this.b += 1;
  return this;
};
function dd(a, b2) {
  V(a);
  b2 = W(a, b2);
  S(a.a.b, b2) && (a.c = null, a.b -= a.a.get(b2).length, a = a.a, S(a.b, b2) && (delete a.b[b2], a.c--, a.a.length > 2 * a.c && Mc(a)));
}
function ed(a, b2) {
  V(a);
  b2 = W(a, b2);
  return S(a.a.b, b2);
}
g.forEach = function(a, b2) {
  V(this);
  this.a.forEach(function(c, d) {
    oa(c, function(e) {
      a.call(b2, e, d, this);
    }, this);
  }, this);
};
g.L = function() {
  V(this);
  for (var a = this.a.K(), b2 = this.a.L(), c = [], d = 0; d < b2.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
      c.push(b2[d]);
  return c;
};
g.K = function(a) {
  V(this);
  var b2 = [];
  if (typeof a === "string")
    ed(this, a) && (b2 = ra(b2, this.a.get(W(this, a))));
  else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
      b2 = ra(b2, a[c]);
  }
  return b2;
};
g.set = function(a, b2) {
  V(this);
  this.c = null;
  a = W(this, a);
  ed(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b2]);
  this.b += 1;
  return this;
};
g.get = function(a, b2) {
  if (!a)
    return b2;
  a = this.K(a);
  return 0 < a.length ? String(a[0]) : b2;
};
function nc(a, b2, c) {
  dd(a, b2);
  0 < c.length && (a.c = null, a.a.set(W(a, b2), sa(c)), a.b += c.length);
}
g.toString = function() {
  if (this.c)
    return this.c;
  if (!this.a)
    return "";
  for (var a = [], b2 = this.a.L(), c = 0; c < b2.length; c++) {
    var d = b2[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
      var h = e;
      d[f] !== "" && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.c = a.join("&");
};
function W(a, b2) {
  b2 = String(b2);
  a.f && (b2 = b2.toLowerCase());
  return b2;
}
function Zc(a, b2) {
  b2 && !a.f && (V(a), a.c = null, a.a.forEach(function(c, d) {
    var e = d.toLowerCase();
    d != e && (dd(this, d), nc(this, e, c));
  }, a));
  a.f = b2;
}
function fd(a, b2) {
  this.b = a;
  this.a = b2;
}
function gd(a) {
  this.g = a || hd;
  k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().qb);
  this.f = a ? this.g : 1;
  this.a = null;
  1 < this.f && (this.a = new Set());
  this.b = null;
  this.c = [];
}
var hd = 10;
function id(a) {
  return a.b ? true : a.a ? a.a.size >= a.f : false;
}
function Dc(a) {
  return a.b ? 1 : a.a ? a.a.size : 0;
}
function zc(a, b2) {
  return a.b ? a.b == b2 : a.a ? a.a.has(b2) : false;
}
function Ec(a, b2) {
  a.a ? a.a.add(b2) : a.b = b2;
}
function Gc(a, b2) {
  a.b && a.b == b2 ? a.b = null : a.a && a.a.has(b2) && a.a.delete(b2);
}
gd.prototype.cancel = function() {
  var e_1, _a2;
  this.c = jd(this);
  if (this.b)
    this.b.cancel(), this.b = null;
  else if (this.a && this.a.size !== 0) {
    try {
      for (var _b = __values$1(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var a = _c.value;
        a.cancel();
      }
    } catch (e_1_1) {
      e_1 = {error: e_1_1};
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    this.a.clear();
  }
};
function jd(a) {
  var e_2, _a2;
  if (a.b != null)
    return a.c.concat(a.b.s);
  if (a.a != null && a.a.size !== 0) {
    var b2 = a.c;
    try {
      for (var _b = __values$1(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var c = _c.value;
        b2 = b2.concat(c.s);
      }
    } catch (e_2_1) {
      e_2 = {error: e_2_1};
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return b2;
  }
  return sa(a.c);
}
function kd() {
}
kd.prototype.stringify = function(a) {
  return k.JSON.stringify(a, void 0);
};
kd.prototype.parse = function(a) {
  return k.JSON.parse(a, void 0);
};
function ld() {
  this.a = new kd();
}
function md(a, b2, c) {
  var d = c || "";
  try {
    Lc(a, function(e, f) {
      var h = e;
      n(e) && (h = vb(e));
      b2.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}
function nd(a, b2) {
  var c = new Pb();
  if (k.Image) {
    var d = new Image();
    d.onload = ka(od, c, d, "TestLoadImage: loaded", true, b2);
    d.onerror = ka(od, c, d, "TestLoadImage: error", false, b2);
    d.onabort = ka(od, c, d, "TestLoadImage: abort", false, b2);
    d.ontimeout = ka(od, c, d, "TestLoadImage: timeout", false, b2);
    k.setTimeout(function() {
      if (d.ontimeout)
        d.ontimeout();
    }, 1e4);
    d.src = a;
  } else
    b2(false);
}
function od(a, b2, c, d, e) {
  try {
    b2.onload = null, b2.onerror = null, b2.onabort = null, b2.ontimeout = null, e(d);
  } catch (f) {
  }
}
var pd = k.JSON.parse;
function X(a) {
  D.call(this);
  this.headers = new R();
  this.H = a || null;
  this.b = false;
  this.s = this.a = null;
  this.B = "";
  this.h = 0;
  this.f = "";
  this.g = this.A = this.l = this.u = false;
  this.o = 0;
  this.m = null;
  this.I = qd;
  this.D = this.F = false;
}
r(X, D);
var qd = "", rd = /^https?$/i, sd = ["POST", "PUT"];
g = X.prototype;
g.ba = function(a, b2, c, d) {
  if (this.a)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
  b2 = b2 ? b2.toUpperCase() : "GET";
  this.B = a;
  this.f = "";
  this.h = 0;
  this.u = false;
  this.b = true;
  this.a = new XMLHttpRequest();
  this.s = this.H ? bc(this.H) : bc(fc);
  this.a.onreadystatechange = p(this.za, this);
  try {
    this.A = true, this.a.open(b2, String(a), true), this.A = false;
  } catch (f) {
    td(this, f);
    return;
  }
  a = c || "";
  var e = new R(this.headers);
  d && Lc(d, function(f, h) {
    e.set(h, f);
  });
  d = pa(e.L());
  c = k.FormData && a instanceof k.FormData;
  !(0 <= na(sd, b2)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function(f, h) {
    this.a.setRequestHeader(h, f);
  }, this);
  this.I && (this.a.responseType = this.I);
  "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
  try {
    ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = true, this.a.send(a), this.l = false;
  } catch (f) {
    td(this, f);
  }
};
function vd(a) {
  return x && Ra(9) && typeof a.timeout === "number" && a.ontimeout !== void 0;
}
function qa(a) {
  return a.toLowerCase() == "content-type";
}
g.xa = function() {
  typeof goog != "undefined" && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8));
};
function td(a, b2) {
  a.b = false;
  a.a && (a.g = true, a.a.abort(), a.g = false);
  a.f = b2;
  a.h = 5;
  wd(a);
  xd(a);
}
function wd(a) {
  a.u || (a.u = true, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
g.abort = function(a) {
  this.a && this.b && (this.b = false, this.g = true, this.a.abort(), this.g = false, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this));
};
g.G = function() {
  this.a && (this.b && (this.b = false, this.g = true, this.a.abort(), this.g = false), xd(this, true));
  X.S.G.call(this);
};
g.za = function() {
  this.j || (this.A || this.l || this.g ? yd(this) : this.Ta());
};
g.Ta = function() {
  yd(this);
};
function yd(a) {
  if (a.b && typeof goog != "undefined" && (!a.s[1] || N(a) != 4 || a.X() != 2)) {
    if (a.l && N(a) == 4)
      Jb(a.za, 0, a);
    else if (a.dispatchEvent("readystatechange"), N(a) == 4) {
      a.b = false;
      try {
        var b2 = a.X();
        a:
          switch (b2) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = true;
              break a;
            default:
              c = false;
          }
        var d;
        if (!(d = c)) {
          var e;
          if (e = b2 === 0) {
            var f = String(a.B).match(Nc)[1] || null;
            if (!f && k.self && k.self.location) {
              var h = k.self.location.protocol;
              f = h.substr(0, h.length - 1);
            }
            e = !rd.test(f ? f.toLowerCase() : "");
          }
          d = e;
        }
        if (d)
          a.dispatchEvent("complete"), a.dispatchEvent("success");
        else {
          a.h = 6;
          try {
            var m = 2 < N(a) ? a.a.statusText : "";
          } catch (l) {
            m = "";
          }
          a.f = m + " [" + a.X() + "]";
          wd(a);
        }
      } finally {
        xd(a);
      }
    }
  }
}
function xd(a, b2) {
  if (a.a) {
    ud(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b2 || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function ud(a) {
  a.a && a.D && (a.a.ontimeout = null);
  a.m && (k.clearTimeout(a.m), a.m = null);
}
function N(a) {
  return a.a ? a.a.readyState : 0;
}
g.X = function() {
  try {
    return 2 < N(this) ? this.a.status : -1;
  } catch (a) {
    return -1;
  }
};
g.$ = function() {
  try {
    return this.a ? this.a.responseText : "";
  } catch (a) {
    return "";
  }
};
g.Na = function(a) {
  if (this.a) {
    var b2 = this.a.responseText;
    a && b2.indexOf(a) == 0 && (b2 = b2.substring(a.length));
    return pd(b2);
  }
};
g.ua = function() {
  return this.h;
};
g.Qa = function() {
  return typeof this.f === "string" ? this.f : String(this.f);
};
function zd(a) {
  var b2 = "";
  Aa(a, function(c, d) {
    b2 += d;
    b2 += ":";
    b2 += c;
    b2 += "\r\n";
  });
  return b2;
}
function Ad(a, b2, c) {
  a: {
    for (d in c) {
      var d = false;
      break a;
    }
    d = true;
  }
  d || (c = zd(c), typeof a === "string" ? c != null && encodeURIComponent(String(c)) : Q(a, b2, c));
}
function Bd(a, b2, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
}
function Cd(a) {
  this.pa = 0;
  this.g = [];
  this.c = new Pb();
  this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
  this.La = this.R = 0;
  this.Ia = Bd("failFast", false, a);
  this.H = this.m = this.j = this.h = this.f = null;
  this.T = true;
  this.I = this.oa = this.P = -1;
  this.U = this.o = this.u = 0;
  this.Fa = Bd("baseRetryDelayMs", 5e3, a);
  this.Ma = Bd("retryDelaySeedMs", 1e4, a);
  this.Ja = Bd("forwardChannelMaxRetries", 2, a);
  this.ma = Bd("forwardChannelRequestTimeoutMs", 2e4, a);
  this.Ka = a && a.g || void 0;
  this.D = void 0;
  this.C = a && a.supportsCrossDomainXhr || false;
  this.J = "";
  this.b = new gd(a && a.concurrentRequestLimit);
  this.ka = new ld();
  this.da = a && a.fastHandshake || false;
  this.Ga = a && a.b || false;
  a && a.f && (this.c.a = false);
  a && a.forceLongPolling && (this.T = false);
  this.V = !this.da && this.T && a && a.c || false;
  this.ea = void 0;
  this.N = 0;
  this.F = false;
  this.s = null;
}
g = Cd.prototype;
g.ha = 8;
g.v = 1;
function Jc(a) {
  Dd(a);
  if (a.v == 3) {
    var b2 = a.R++, c = L(a.B);
    Q(c, "SID", a.J);
    Q(c, "RID", b2);
    Q(c, "TYPE", "terminate");
    Ed(a, c);
    b2 = new K(a, a.c, b2, void 0);
    b2.H = 2;
    b2.i = lc(L(c));
    c = false;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b2.i.toString(), ""));
    !c && k.Image && (new Image().src = b2.i, c = true);
    c || (b2.a = oc(b2.g, null), b2.a.ba(b2.i));
    b2.u = q();
    M(b2);
  }
  Fd(a);
}
function Bc(a) {
  a.a && (xc(a), a.a.cancel(), a.a = null);
}
function Dd(a) {
  Bc(a);
  a.j && (k.clearTimeout(a.j), a.j = null);
  Ac(a);
  a.b.cancel();
  a.h && (typeof a.h === "number" && k.clearTimeout(a.h), a.h = null);
}
function Gd(a, b2) {
  a.g.push(new fd(a.La++, b2));
  a.v == 3 && Ic(a);
}
function Ic(a) {
  id(a.b) || a.h || (a.h = true, Cb(a.Ba, a), a.u = 0);
}
function Hd(a, b2) {
  if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return false;
  if (a.h)
    return a.g = b2.s.concat(a.g), true;
  if (a.v == 1 || a.v == 2 || a.u >= (a.Ia ? 0 : a.Ja))
    return false;
  a.h = I(p(a.Ba, a, b2), Id(a, a.u));
  a.u++;
  return true;
}
g.Ba = function(a) {
  if (this.h)
    if (this.h = null, this.v == 1) {
      if (!a) {
        this.R = Math.floor(1e5 * Math.random());
        a = this.R++;
        var b2 = new K(this, this.c, a, void 0), c = this.l;
        this.O && (c ? (c = Ba(c), Da(c, this.O)) : c = this.O);
        this.i === null && (b2.B = c);
        var d;
        if (this.da)
          a: {
            for (var e = d = 0; e < this.g.length; e++) {
              b: {
                var f = this.g[e];
                if ("__data__" in f.a && (f = f.a.__data__, typeof f === "string")) {
                  f = f.length;
                  break b;
                }
                f = void 0;
              }
              if (f === void 0)
                break;
              d += f;
              if (4096 < d) {
                d = e;
                break a;
              }
              if (d === 4096 || e === this.g.length - 1) {
                d = e + 1;
                break a;
              }
            }
            d = 1e3;
          }
        else
          d = 1e3;
        d = Jd(this, b2, d);
        e = L(this.B);
        Q(e, "RID", a);
        Q(e, "CVER", 22);
        this.A && Q(e, "X-HTTP-Session-Id", this.A);
        Ed(this, e);
        this.i && c && Ad(e, this.i, c);
        Ec(this.b, b2);
        this.Ga && Q(e, "TYPE", "init");
        this.da ? (Q(e, "$req", d), Q(e, "SID", "null"), b2.V = true, kc(b2, e, null)) : kc(b2, e, d);
        this.v = 2;
      }
    } else
      this.v == 3 && (a ? Kd(this, a) : this.g.length == 0 || id(this.b) || Kd(this));
};
function Kd(a, b2) {
  var c;
  b2 ? c = b2.f : c = a.R++;
  var d = L(a.B);
  Q(d, "SID", a.J);
  Q(d, "RID", c);
  Q(d, "AID", a.P);
  Ed(a, d);
  a.i && a.l && Ad(d, a.i, a.l);
  c = new K(a, a.c, c, a.u + 1);
  a.i === null && (c.B = a.l);
  b2 && (a.g = b2.s.concat(a.g));
  b2 = Jd(a, c, 1e3);
  c.setTimeout(Math.round(0.5 * a.ma) + Math.round(0.5 * a.ma * Math.random()));
  Ec(a.b, c);
  kc(c, d, b2);
}
function Ed(a, b2) {
  a.f && Lc({}, function(c, d) {
    Q(b2, d, c);
  });
}
function Jd(a, b2, c) {
  c = Math.min(a.g.length, c);
  var d = a.f ? p(a.f.Ha, a.f, a) : null;
  a:
    for (var e = a.g, f = -1; ; ) {
      var h = ["count=" + c];
      f == -1 ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
      for (var m = true, l = 0; l < c; l++) {
        var t = e[l].b, B2 = e[l].a;
        t -= f;
        if (0 > t)
          f = Math.max(0, e[l].b - 100), m = false;
        else
          try {
            md(B2, h, "req" + t + "_");
          } catch (z2) {
            d && d(B2);
          }
      }
      if (m) {
        d = h.join("&");
        break a;
      }
    }
  a = a.g.splice(0, c);
  b2.s = a;
  return d;
}
function Hc(a) {
  a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0);
}
function Cc(a) {
  if (a.a || a.j || 3 <= a.o)
    return false;
  a.U++;
  a.j = I(p(a.Aa, a), Id(a, a.o));
  a.o++;
  return true;
}
g.Aa = function() {
  this.j = null;
  Ld(this);
  if (this.V && !(this.F || this.a == null || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = I(p(this.Sa, this), a);
  }
};
g.Sa = function() {
  this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = false, this.F = true, Bc(this), Ld(this));
};
function xc(a) {
  a.s != null && (k.clearTimeout(a.s), a.s = null);
}
function Ld(a) {
  a.a = new K(a, a.c, "rpc", a.U);
  a.i === null && (a.a.B = a.l);
  a.a.O = 0;
  var b2 = L(a.la);
  Q(b2, "RID", "rpc");
  Q(b2, "SID", a.J);
  Q(b2, "CI", a.H ? "0" : "1");
  Q(b2, "AID", a.P);
  Ed(a, b2);
  Q(b2, "TYPE", "xmlhttp");
  a.i && a.l && Ad(b2, a.i, a.l);
  a.D && a.a.setTimeout(a.D);
  var c = a.a;
  a = a.ga;
  c.H = 1;
  c.i = lc(L(b2));
  c.j = null;
  c.I = true;
  mc(c, a);
}
g.Ra = function() {
  this.m != null && (this.m = null, Bc(this), Cc(this), H(19));
};
function Ac(a) {
  a.m != null && (k.clearTimeout(a.m), a.m = null);
}
function uc(a, b2) {
  var c = null;
  if (a.a == b2) {
    Ac(a);
    xc(a);
    a.a = null;
    var d = 2;
  } else if (zc(a.b, b2))
    c = b2.s, Gc(a.b, b2), d = 1;
  else
    return;
  a.I = b2.N;
  if (a.v != 0) {
    if (b2.b)
      if (d == 1) {
        c = b2.j ? b2.j.length : 0;
        b2 = q() - b2.u;
        var e = a.u;
        d = Vb();
        d.dispatchEvent(new Yb(d, c, b2, e));
        Ic(a);
      } else
        Hc(a);
    else if (e = b2.h, e == 3 || e == 0 && 0 < a.I || !(d == 1 && Hd(a, b2) || d == 2 && Cc(a)))
      switch (c && 0 < c.length && (b2 = a.b, b2.c = b2.c.concat(c)), e) {
        case 1:
          P(a, 5);
          break;
        case 4:
          P(a, 10);
          break;
        case 3:
          P(a, 6);
          break;
        default:
          P(a, 2);
      }
  }
}
function Id(a, b2) {
  var c = a.Fa + Math.floor(Math.random() * a.Ma);
  a.f || (c *= 2);
  return c * b2;
}
function P(a, b2) {
  a.c.info("Error code " + b2);
  if (b2 == 2) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Xa, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), k.location && k.location.protocol == "http" || Pc(c, "https"), lc(c));
    nd(c.toString(), d);
  } else
    H(2);
  a.v = 0;
  a.f && a.f.ra(b2);
  Fd(a);
  Dd(a);
}
g.Xa = function(a) {
  a ? (this.c.info("Successfully pinged google.com"), H(2)) : (this.c.info("Failed to ping google.com"), H(1));
};
function Fd(a) {
  a.v = 0;
  a.I = -1;
  if (a.f) {
    if (jd(a.b).length != 0 || a.g.length != 0)
      a.b.c.length = 0, sa(a.g), a.g.length = 0;
    a.f.qa();
  }
}
function Fc(a, b2, c) {
  var d = ad(c);
  if (d.c != "")
    b2 && Qc(d, b2 + "." + d.c), Rc(d, d.h);
  else {
    var e = k.location;
    d = bd(e.protocol, b2 ? b2 + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.W && Aa(a.W, function(f, h) {
    Q(d, h, f);
  });
  b2 = a.A;
  c = a.na;
  b2 && c && Q(d, b2, c);
  Q(d, "VER", a.ha);
  Ed(a, d);
  return d;
}
function oc(a, b2) {
  if (b2 && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object.");
  b2 = new X(a.Ka);
  b2.F = a.C;
  return b2;
}
function Md() {
}
g = Md.prototype;
g.ta = function() {
};
g.sa = function() {
};
g.ra = function() {
};
g.qa = function() {
};
g.Ha = function() {
};
function Nd() {
  if (x && !(10 <= Number(Ua)))
    throw Error("Environmental error: no available transport.");
}
Nd.prototype.a = function(a, b2) {
  return new Y(a, b2);
};
function Y(a, b2) {
  D.call(this);
  this.a = new Cd(b2);
  this.l = a;
  this.b = b2 && b2.messageUrlParams || null;
  a = b2 && b2.messageHeaders || null;
  b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {"X-Client-Protocol": "webchannel"});
  this.a.l = a;
  a = b2 && b2.initMessageHeaders || null;
  b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = {"X-WebChannel-Content-Type": b2.messageContentType});
  b2 && b2.a && (a ? a["X-WebChannel-Client-Profile"] = b2.a : a = {"X-WebChannel-Client-Profile": b2.a});
  this.a.O = a;
  (a = b2 && b2.httpHeadersOverwriteParam) && !ta(a) && (this.a.i = a);
  this.h = b2 && b2.supportsCrossDomainXhr || false;
  this.g = b2 && b2.sendRawJson || false;
  (b2 = b2 && b2.httpSessionIdParam) && !ta(b2) && (this.a.A = b2, a = this.b, a !== null && b2 in a && (a = this.b, b2 in a && delete a[b2]));
  this.f = new Z(this);
}
r(Y, D);
g = Y.prototype;
g.addEventListener = function(a, b2, c, d) {
  Y.S.addEventListener.call(this, a, b2, c, d);
};
g.removeEventListener = function(a, b2, c, d) {
  Y.S.removeEventListener.call(this, a, b2, c, d);
};
g.Oa = function() {
  this.a.f = this.f;
  this.h && (this.a.C = true);
  var a = this.a, b2 = this.l, c = this.b || void 0;
  H(0);
  a.fa = b2;
  a.W = c || {};
  a.H = a.T;
  a.B = Fc(a, null, a.fa);
  Ic(a);
};
g.close = function() {
  Jc(this.a);
};
g.Pa = function(a) {
  if (typeof a === "string") {
    var b2 = {};
    b2.__data__ = a;
    Gd(this.a, b2);
  } else
    this.g ? (b2 = {}, b2.__data__ = vb(a), Gd(this.a, b2)) : Gd(this.a, a);
};
g.G = function() {
  this.a.f = null;
  delete this.f;
  Jc(this.a);
  delete this.a;
  Y.S.G.call(this);
};
function Od(a) {
  dc.call(this);
  var b2 = a.__sm__;
  if (b2) {
    a: {
      for (var c in b2) {
        a = c;
        break a;
      }
      a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = b2 !== null && a in b2 ? b2[a] : void 0) : this.data = b2;
  } else
    this.data = a;
}
r(Od, dc);
function Pd() {
  ec.call(this);
  this.status = 1;
}
r(Pd, ec);
function Z(a) {
  this.a = a;
}
r(Z, Md);
Z.prototype.ta = function() {
  this.a.dispatchEvent("a");
};
Z.prototype.sa = function(a) {
  this.a.dispatchEvent(new Od(a));
};
Z.prototype.ra = function(a) {
  this.a.dispatchEvent(new Pd(a));
};
Z.prototype.qa = function() {
  this.a.dispatchEvent("b");
};
Nd.prototype.createWebChannel = Nd.prototype.a;
Y.prototype.send = Y.prototype.Pa;
Y.prototype.open = Y.prototype.Oa;
Y.prototype.close = Y.prototype.close;
Zb.NO_ERROR = 0;
Zb.TIMEOUT = 8;
Zb.HTTP_ERROR = 6;
$b.COMPLETE = "complete";
cc.EventType = J;
J.OPEN = "a";
J.CLOSE = "b";
J.ERROR = "c";
J.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.X;
X.prototype.getResponseJson = X.prototype.Na;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var esm = {createWebChannelTransport: function() {
  return new Nd();
}, ErrorCode: Zb, EventType: $b, WebChannel: cc, XhrIo: X};
var esm_1 = esm.createWebChannelTransport;
var esm_2 = esm.ErrorCode;
var esm_3 = esm.EventType;
var esm_4 = esm.WebChannel;
var esm_5 = esm.XhrIo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var b = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss"
}, I$1 = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, n3) || this).code = t, r2.message = n3, r2.name = "FirebaseError", r2.toString = function() {
      return r2.name + ": [code=" + r2.code + "]: " + r2.message;
    }, r2;
  }
  return __extends(n2, e), n2;
}(Error), E$1 = new Logger("@firebase/firestore");
function _() {
  return E$1.logLevel;
}
function T$1(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++)
    e[n2 - 1] = arguments[n2];
  if (E$1.logLevel <= LogLevel.DEBUG) {
    var i = e.map(S$1);
    E$1.debug.apply(E$1, __spreadArrays(["Firestore (7.22.0): " + t], i));
  }
}
function N$1(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++)
    e[n2 - 1] = arguments[n2];
  if (E$1.logLevel <= LogLevel.ERROR) {
    var i = e.map(S$1);
    E$1.error.apply(E$1, __spreadArrays(["Firestore (7.22.0): " + t], i));
  }
}
function A$1(t) {
  for (var e = [], n2 = 1; n2 < arguments.length; n2++)
    e[n2 - 1] = arguments[n2];
  if (E$1.logLevel <= LogLevel.WARN) {
    var i = e.map(S$1);
    E$1.warn.apply(E$1, __spreadArrays(["Firestore (7.22.0): " + t], i));
  }
}
function S$1(t) {
  if (typeof t == "string")
    return t;
  try {
    return e = t, JSON.stringify(e);
  } catch (e2) {
    return t;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D$1(t) {
  t === void 0 && (t = "Unexpected state");
  var e = "FIRESTORE (7.22.0) INTERNAL ASSERTION FAILED: " + t;
  throw N$1(e), new Error(e);
}
function x$1(t, e) {
  t || D$1();
}
function k$1(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O$1(t) {
  var e = 0;
  for (var n2 in t)
    Object.prototype.hasOwnProperty.call(t, n2) && e++;
  return e;
}
function R$1(t, e) {
  for (var n2 in t)
    Object.prototype.hasOwnProperty.call(t, n2) && e(n2, t[n2]);
}
function L$1(t) {
  for (var e in t)
    if (Object.prototype.hasOwnProperty.call(t, e))
      return false;
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U$1 = function() {
  function t(t2, e, n2) {
    e === void 0 ? e = 0 : e > t2.length && D$1(), n2 === void 0 ? n2 = t2.length - e : n2 > t2.length - e && D$1(), this.segments = t2, this.offset = e, this.t = n2;
  }
  return Object.defineProperty(t.prototype, "length", {
    get: function() {
      return this.t;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(e) {
    return t.i(this, e) === 0;
  }, t.prototype.child = function(e) {
    var n2 = this.segments.slice(this.offset, this.limit());
    return e instanceof t ? e.forEach(function(t2) {
      n2.push(t2);
    }) : n2.push(e), this.o(n2);
  }, t.prototype.limit = function() {
    return this.offset + this.length;
  }, t.prototype.u = function(t2) {
    return t2 = t2 === void 0 ? 1 : t2, this.o(this.segments, this.offset + t2, this.length - t2);
  }, t.prototype.h = function() {
    return this.o(this.segments, this.offset, this.length - 1);
  }, t.prototype.l = function() {
    return this.segments[this.offset];
  }, t.prototype._ = function() {
    return this.get(this.length - 1);
  }, t.prototype.get = function(t2) {
    return this.segments[this.offset + t2];
  }, t.prototype.m = function() {
    return this.length === 0;
  }, t.prototype.T = function(t2) {
    if (t2.length < this.length)
      return false;
    for (var e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }, t.prototype.I = function(t2) {
    if (this.length + 1 !== t2.length)
      return false;
    for (var e = 0; e < this.length; e++)
      if (this.get(e) !== t2.get(e))
        return false;
    return true;
  }, t.prototype.forEach = function(t2) {
    for (var e = this.offset, n2 = this.limit(); e < n2; e++)
      t2(this.segments[e]);
  }, t.prototype.A = function() {
    return this.segments.slice(this.offset, this.limit());
  }, t.i = function(t2, e) {
    for (var n2 = Math.min(t2.length, e.length), r2 = 0; r2 < n2; r2++) {
      var i = t2.get(r2), o = e.get(r2);
      if (i < o)
        return -1;
      if (i > o)
        return 1;
    }
    return t2.length < e.length ? -1 : t2.length > e.length ? 1 : 0;
  }, t;
}(), P$1 = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2.prototype.o = function(t, e2, r2) {
    return new n2(t, e2, r2);
  }, n2.prototype.R = function() {
    return this.A().join("/");
  }, n2.prototype.toString = function() {
    return this.R();
  }, n2.P = function() {
    for (var t = [], e2 = 0; e2 < arguments.length; e2++)
      t[e2] = arguments[e2];
    for (var r2 = [], i = 0, o = t; i < o.length; i++) {
      var s = o[i];
      if (s.indexOf("//") >= 0)
        throw new I$1(b.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them.");
      r2.push.apply(r2, s.split("/").filter(function(t2) {
        return t2.length > 0;
      }));
    }
    return new n2(r2);
  }, n2.g = function() {
    return new n2([]);
  }, n2;
}(U$1), V$1 = /^[_a-zA-Z][_a-zA-Z0-9]*$/, C$1 = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2.prototype.o = function(t, e2, r2) {
    return new n2(t, e2, r2);
  }, n2.V = function(t) {
    return V$1.test(t);
  }, n2.prototype.R = function() {
    return this.A().map(function(t) {
      return t = t.replace("\\", "\\\\").replace("`", "\\`"), n2.V(t) || (t = "`" + t + "`"), t;
    }).join(".");
  }, n2.prototype.toString = function() {
    return this.R();
  }, n2.prototype.p = function() {
    return this.length === 1 && this.get(0) === "__name__";
  }, n2.v = function() {
    return new n2(["__name__"]);
  }, n2.S = function(t) {
    for (var e2 = [], r2 = "", i = 0, o = function() {
      if (r2.length === 0)
        throw new I$1(b.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      e2.push(r2), r2 = "";
    }, s = false; i < t.length; ) {
      var u2 = t[i];
      if (u2 === "\\") {
        if (i + 1 === t.length)
          throw new I$1(b.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        var a = t[i + 1];
        if (a !== "\\" && a !== "." && a !== "`")
          throw new I$1(b.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        r2 += a, i += 2;
      } else
        u2 === "`" ? (s = !s, i++) : u2 !== "." || s ? (r2 += u2, i++) : (o(), i++);
    }
    if (o(), s)
      throw new I$1(b.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new n2(e2);
  }, n2.g = function() {
    return new n2([]);
  }, n2;
}(U$1), M$1 = function() {
  function t(t2) {
    this.path = t2;
  }
  return t.D = function(e) {
    return new t(P$1.P(e));
  }, t.C = function(e) {
    return new t(P$1.P(e).u(5));
  }, t.prototype.N = function(t2) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t2;
  }, t.prototype.isEqual = function(t2) {
    return t2 !== null && P$1.i(this.path, t2.path) === 0;
  }, t.prototype.toString = function() {
    return this.path.toString();
  }, t.i = function(t2, e) {
    return P$1.i(t2.path, e.path);
  }, t.F = function(t2) {
    return t2.length % 2 == 0;
  }, t.$ = function(e) {
    return new t(new P$1(e.slice()));
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F$1(t, e) {
  if (e.length !== 0)
    throw new I$1(b.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + rt(e.length, "argument") + ".");
}
function q$1(t, e, n2) {
  if (e.length !== n2)
    throw new I$1(b.INVALID_ARGUMENT, "Function " + t + "() requires " + rt(n2, "argument") + ", but was called with " + rt(e.length, "argument") + ".");
}
function G$1(t, e, n2) {
  if (e.length < n2)
    throw new I$1(b.INVALID_ARGUMENT, "Function " + t + "() requires at least " + rt(n2, "argument") + ", but was called with " + rt(e.length, "argument") + ".");
}
function B(t, e, n2, r2) {
  if (e.length < n2 || e.length > r2)
    throw new I$1(b.INVALID_ARGUMENT, "Function " + t + "() requires between " + n2 + " and " + r2 + " arguments, but was called with " + rt(e.length, "argument") + ".");
}
function j(t, e, n2, r2) {
  H$1(t, e, nt(n2) + " argument", r2);
}
function z(t, e, n2, r2) {
  r2 !== void 0 && j(t, e, n2, r2);
}
function Q$1(t, e, n2, r2) {
  H$1(t, e, n2 + " option", r2);
}
function K$1(t, e, n2, r2) {
  r2 !== void 0 && Q$1(t, e, n2, r2);
}
function W$1(t, e, n2, r2, i) {
  r2 !== void 0 && function(t2, e2, n3, r3, i2) {
    for (var o = [], s = 0, u2 = i2; s < u2.length; s++) {
      var a = u2[s];
      if (a === r3)
        return;
      o.push(X$1(a));
    }
    var c = X$1(r3);
    throw new I$1(b.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t2 + '() for option "' + n3 + '". Acceptable values: ' + o.join(", "));
  }(t, 0, n2, r2, i);
}
function Y$1(t, e, n2, r2) {
  if (!e.some(function(t2) {
    return t2 === r2;
  }))
    throw new I$1(b.INVALID_ARGUMENT, "Invalid value " + X$1(r2) + " provided to function " + t + "() for its " + nt(n2) + " argument. Acceptable values: " + e.join(", "));
  return r2;
}
function H$1(t, e, n2, r2) {
  if (!(e === "object" ? $(r2) : e === "non-empty string" ? typeof r2 == "string" && r2 !== "" : typeof r2 === e)) {
    var i = X$1(r2);
    throw new I$1(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + n2 + " to be of type " + e + ", but it was: " + i);
  }
}
function $(t) {
  return typeof t == "object" && t !== null && (Object.getPrototypeOf(t) === Object.prototype || Object.getPrototypeOf(t) === null);
}
function X$1(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "string")
    return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean")
    return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array)
      return "an array";
    var e = function(t2) {
      if (t2.constructor) {
        var e2 = /function\s+([^\s(]+)\s*\(/.exec(t2.constructor.toString());
        if (e2 && e2.length > 1)
          return e2[1];
      }
      return null;
    }(t);
    return e ? "a custom " + e + " object" : "an object";
  }
  return typeof t == "function" ? "a function" : D$1();
}
function J$1(t, e, n2) {
  if (n2 === void 0)
    throw new I$1(b.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + nt(e) + " argument, but it was undefined.");
}
function Z$1(t, e, n2) {
  R$1(e, function(e2, r2) {
    if (n2.indexOf(e2) < 0)
      throw new I$1(b.INVALID_ARGUMENT, "Unknown option '" + e2 + "' passed to function " + t + "(). Available options: " + n2.join(", "));
  });
}
function tt(t, e, n2, r2) {
  var i = X$1(r2);
  return new I$1(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + nt(n2) + " argument to be a " + e + ", but it was: " + i);
}
function et(t, e, n2) {
  if (n2 <= 0)
    throw new I$1(b.INVALID_ARGUMENT, "Function " + t + "() requires its " + nt(e) + " argument to be a positive number, but it was: " + n2 + ".");
}
function nt(t) {
  switch (t) {
    case 1:
      return "first";
    case 2:
      return "second";
    case 3:
      return "third";
    default:
      return t + "th";
  }
}
function rt(t, e) {
  return t + " " + e + (t === 1 ? "" : "s");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function it(t) {
  var e = typeof self != "undefined" && (self.crypto || self.msCrypto), n2 = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function")
    e.getRandomValues(n2);
  else
    for (var r2 = 0; r2 < t; r2++)
      n2[r2] = Math.floor(256 * Math.random());
  return n2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ot = function() {
  function t() {
  }
  return t.k = function() {
    for (var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t2.length) * t2.length, n2 = ""; n2.length < 20; )
      for (var r2 = it(40), i = 0; i < r2.length; ++i)
        n2.length < 20 && r2[i] < e && (n2 += t2.charAt(r2[i] % t2.length));
    return n2;
  }, t;
}();
function st(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function ut(t, e, n2) {
  return t.length === e.length && t.every(function(t2, r2) {
    return n2(t2, e[r2]);
  });
}
function at(t) {
  return t + "\0";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ct = function() {
  function t(t2) {
    this.M = t2;
  }
  return t.fromBase64String = function(e) {
    return new t(atob(e));
  }, t.fromUint8Array = function(e) {
    return new t(function(t2) {
      for (var e2 = "", n2 = 0; n2 < t2.length; ++n2)
        e2 += String.fromCharCode(t2[n2]);
      return e2;
    }(e));
  }, t.prototype.toBase64 = function() {
    return t2 = this.M, btoa(t2);
    var t2;
  }, t.prototype.toUint8Array = function() {
    return function(t2) {
      for (var e = new Uint8Array(t2.length), n2 = 0; n2 < t2.length; n2++)
        e[n2] = t2.charCodeAt(n2);
      return e;
    }(this.M);
  }, t.prototype.O = function() {
    return 2 * this.M.length;
  }, t.prototype.L = function(t2) {
    return st(this.M, t2.M);
  }, t.prototype.isEqual = function(t2) {
    return this.M === t2.M;
  }, t;
}();
ct.B = new ct("");
var ht = function() {
  function t(t2) {
    this.q = t2;
  }
  return t.fromBase64String = function(e) {
    try {
      return new t(ct.fromBase64String(e));
    } catch (e2) {
      throw new I$1(b.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e2);
    }
  }, t.fromUint8Array = function(e) {
    return new t(ct.fromUint8Array(e));
  }, t.prototype.toBase64 = function() {
    return this.q.toBase64();
  }, t.prototype.toUint8Array = function() {
    return this.q.toUint8Array();
  }, t.prototype.toString = function() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }, t.prototype.isEqual = function(t2) {
    return this.q.isEqual(t2.q);
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft() {
  if (typeof Uint8Array == "undefined")
    throw new I$1(b.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}
function lt() {
  if (typeof atob == "undefined")
    throw new I$1(b.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}
var pt = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2.fromBase64String = function(t) {
    q$1("Blob.fromBase64String", arguments, 1), j("Blob.fromBase64String", "string", 1, t), lt();
    try {
      return new n2(ct.fromBase64String(t));
    } catch (t2) {
      throw new I$1(b.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t2);
    }
  }, n2.fromUint8Array = function(t) {
    if (q$1("Blob.fromUint8Array", arguments, 1), ft(), !(t instanceof Uint8Array))
      throw tt("Blob.fromUint8Array", "Uint8Array", 1, t);
    return new n2(ct.fromUint8Array(t));
  }, n2.prototype.toBase64 = function() {
    return q$1("Blob.toBase64", arguments, 0), lt(), e.prototype.toBase64.call(this);
  }, n2.prototype.toUint8Array = function() {
    return q$1("Blob.toUint8Array", arguments, 0), ft(), e.prototype.toUint8Array.call(this);
  }, n2.prototype.toString = function() {
    return "Blob(base64: " + this.toBase64() + ")";
  }, n2;
}(ht), dt = function(t, e, n2, r2, i) {
  this.U = t, this.persistenceKey = e, this.host = n2, this.ssl = r2, this.forceLongPolling = i;
}, vt = function() {
  function t(t2, e) {
    this.projectId = t2, this.database = e || "(default)";
  }
  return Object.defineProperty(t.prototype, "W", {
    get: function() {
      return this.database === "(default)";
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(e) {
    return e instanceof t && e.projectId === this.projectId && e.database === this.database;
  }, t.prototype.L = function(t2) {
    return st(this.projectId, t2.projectId) || st(this.database, t2.database);
  }, t;
}(), yt = function() {
  function t(t2, e) {
    this.j = t2, this.K = e, this.G = {};
  }
  return t.prototype.get = function(t2) {
    var e = this.j(t2), n2 = this.G[e];
    if (n2 !== void 0)
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        var o = i[r2], s = o[0], u2 = o[1];
        if (this.K(s, t2))
          return u2;
      }
  }, t.prototype.has = function(t2) {
    return this.get(t2) !== void 0;
  }, t.prototype.set = function(t2, e) {
    var n2 = this.j(t2), r2 = this.G[n2];
    if (r2 !== void 0) {
      for (var i = 0; i < r2.length; i++)
        if (this.K(r2[i][0], t2))
          return void (r2[i] = [t2, e]);
      r2.push([t2, e]);
    } else
      this.G[n2] = [[t2, e]];
  }, t.prototype.delete = function(t2) {
    var e = this.j(t2), n2 = this.G[e];
    if (n2 === void 0)
      return false;
    for (var r2 = 0; r2 < n2.length; r2++)
      if (this.K(n2[r2][0], t2))
        return n2.length === 1 ? delete this.G[e] : n2.splice(r2, 1), true;
    return false;
  }, t.prototype.forEach = function(t2) {
    R$1(this.G, function(e, n2) {
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        var o = i[r2], s = o[0], u2 = o[1];
        t2(s, u2);
      }
    });
  }, t.prototype.m = function() {
    return L$1(this.G);
  }, t;
}(), mt = function() {
  function t(t2, e) {
    if (this.seconds = t2, this.nanoseconds = e, e < 0)
      throw new I$1(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9)
      throw new I$1(b.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t2 < -62135596800)
      throw new I$1(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
    if (t2 >= 253402300800)
      throw new I$1(b.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t2);
  }
  return t.now = function() {
    return t.fromMillis(Date.now());
  }, t.fromDate = function(e) {
    return t.fromMillis(e.getTime());
  }, t.fromMillis = function(e) {
    var n2 = Math.floor(e / 1e3);
    return new t(n2, 1e6 * (e - 1e3 * n2));
  }, t.prototype.toDate = function() {
    return new Date(this.toMillis());
  }, t.prototype.toMillis = function() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }, t.prototype.H = function(t2) {
    return this.seconds === t2.seconds ? st(this.nanoseconds, t2.nanoseconds) : st(this.seconds, t2.seconds);
  }, t.prototype.isEqual = function(t2) {
    return t2.seconds === this.seconds && t2.nanoseconds === this.nanoseconds;
  }, t.prototype.toString = function() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }, t.prototype.toJSON = function() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }, t.prototype.valueOf = function() {
    var t2 = this.seconds - -62135596800;
    return String(t2).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }, t;
}(), gt = function() {
  function t(t2) {
    this.timestamp = t2;
  }
  return t.Y = function(e) {
    return new t(e);
  }, t.min = function() {
    return new t(new mt(0, 0));
  }, t.prototype.L = function(t2) {
    return this.timestamp.H(t2.timestamp);
  }, t.prototype.isEqual = function(t2) {
    return this.timestamp.isEqual(t2.timestamp);
  }, t.prototype.J = function() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }, t.prototype.toString = function() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }, t.prototype.X = function() {
    return this.timestamp;
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(t) {
  return t == null;
}
function bt(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function It(t) {
  return typeof t == "number" && Number.isInteger(t) && !bt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Et = function(t, e, n2, r2, i, o, s) {
  e === void 0 && (e = null), n2 === void 0 && (n2 = []), r2 === void 0 && (r2 = []), i === void 0 && (i = null), o === void 0 && (o = null), s === void 0 && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n2, this.filters = r2, this.limit = i, this.startAt = o, this.endAt = s, this.Z = null;
};
function _t(t, e, n2, r2, i, o, s) {
  return e === void 0 && (e = null), n2 === void 0 && (n2 = []), r2 === void 0 && (r2 = []), i === void 0 && (i = null), o === void 0 && (o = null), s === void 0 && (s = null), new Et(t, e, n2, r2, i, o, s);
}
function Tt(t) {
  var e = k$1(t);
  if (e.Z === null) {
    var n2 = e.path.R();
    e.collectionGroup !== null && (n2 += "|cg:" + e.collectionGroup), n2 += "|f:", n2 += e.filters.map(function(t2) {
      return function(t3) {
        return t3.field.R() + t3.op.toString() + de(t3.value);
      }(t2);
    }).join(","), n2 += "|ob:", n2 += e.orderBy.map(function(t2) {
      return (e2 = t2).field.R() + e2.dir;
      var e2;
    }).join(","), wt(e.limit) || (n2 += "|l:", n2 += e.limit), e.startAt && (n2 += "|lb:", n2 += yr(e.startAt)), e.endAt && (n2 += "|ub:", n2 += yr(e.endAt)), e.Z = n2;
  }
  return e.Z;
}
function Nt(t, e) {
  if (t.limit !== e.limit)
    return false;
  if (t.orderBy.length !== e.orderBy.length)
    return false;
  for (var n2 = 0; n2 < t.orderBy.length; n2++)
    if (!Ir(t.orderBy[n2], e.orderBy[n2]))
      return false;
  if (t.filters.length !== e.filters.length)
    return false;
  for (var r2 = 0; r2 < t.filters.length; r2++)
    if (i = t.filters[r2], o = e.filters[r2], i.op !== o.op || !i.field.isEqual(o.field) || !he(i.value, o.value))
      return false;
  var i, o;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!gr(t.startAt, e.startAt) && gr(t.endAt, e.endAt);
}
function At(t) {
  return M$1.F(t.path) && t.collectionGroup === null && t.filters.length === 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St, Dt, xt = function() {
  function t(t2, e, n2, r2, i, o, s) {
    i === void 0 && (i = gt.min()), o === void 0 && (o = gt.min()), s === void 0 && (s = ct.B), this.target = t2, this.targetId = e, this.tt = n2, this.sequenceNumber = r2, this.et = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
  }
  return t.prototype.nt = function(e) {
    return new t(this.target, this.targetId, this.tt, e, this.et, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }, t.prototype.st = function(e, n2) {
    return new t(this.target, this.targetId, this.tt, this.sequenceNumber, n2, this.lastLimboFreeSnapshotVersion, e);
  }, t.prototype.it = function(e) {
    return new t(this.target, this.targetId, this.tt, this.sequenceNumber, this.et, e, this.resumeToken);
  }, t;
}(), kt = function(t) {
  this.count = t;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(t) {
  switch (t) {
    case b.OK:
      return D$1();
    case b.CANCELLED:
    case b.UNKNOWN:
    case b.DEADLINE_EXCEEDED:
    case b.RESOURCE_EXHAUSTED:
    case b.INTERNAL:
    case b.UNAVAILABLE:
    case b.UNAUTHENTICATED:
      return false;
    case b.INVALID_ARGUMENT:
    case b.NOT_FOUND:
    case b.ALREADY_EXISTS:
    case b.PERMISSION_DENIED:
    case b.FAILED_PRECONDITION:
    case b.ABORTED:
    case b.OUT_OF_RANGE:
    case b.UNIMPLEMENTED:
    case b.DATA_LOSS:
      return true;
    default:
      return D$1();
  }
}
function Rt(t) {
  if (t === void 0)
    return N$1("GRPC error has no .code"), b.UNKNOWN;
  switch (t) {
    case St.OK:
      return b.OK;
    case St.CANCELLED:
      return b.CANCELLED;
    case St.UNKNOWN:
      return b.UNKNOWN;
    case St.DEADLINE_EXCEEDED:
      return b.DEADLINE_EXCEEDED;
    case St.RESOURCE_EXHAUSTED:
      return b.RESOURCE_EXHAUSTED;
    case St.INTERNAL:
      return b.INTERNAL;
    case St.UNAVAILABLE:
      return b.UNAVAILABLE;
    case St.UNAUTHENTICATED:
      return b.UNAUTHENTICATED;
    case St.INVALID_ARGUMENT:
      return b.INVALID_ARGUMENT;
    case St.NOT_FOUND:
      return b.NOT_FOUND;
    case St.ALREADY_EXISTS:
      return b.ALREADY_EXISTS;
    case St.PERMISSION_DENIED:
      return b.PERMISSION_DENIED;
    case St.FAILED_PRECONDITION:
      return b.FAILED_PRECONDITION;
    case St.ABORTED:
      return b.ABORTED;
    case St.OUT_OF_RANGE:
      return b.OUT_OF_RANGE;
    case St.UNIMPLEMENTED:
      return b.UNIMPLEMENTED;
    case St.DATA_LOSS:
      return b.DATA_LOSS;
    default:
      return D$1();
  }
}
(Dt = St || (St = {}))[Dt.OK = 0] = "OK", Dt[Dt.CANCELLED = 1] = "CANCELLED", Dt[Dt.UNKNOWN = 2] = "UNKNOWN", Dt[Dt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Dt[Dt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Dt[Dt.NOT_FOUND = 5] = "NOT_FOUND", Dt[Dt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Dt[Dt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Dt[Dt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Dt[Dt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Dt[Dt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Dt[Dt.ABORTED = 10] = "ABORTED", Dt[Dt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Dt[Dt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Dt[Dt.INTERNAL = 13] = "INTERNAL", Dt[Dt.UNAVAILABLE = 14] = "UNAVAILABLE", Dt[Dt.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lt = function() {
  function t(t2, e) {
    this.i = t2, this.root = e || Pt.EMPTY;
  }
  return t.prototype.rt = function(e, n2) {
    return new t(this.i, this.root.rt(e, n2, this.i).copy(null, null, Pt.ot, null, null));
  }, t.prototype.remove = function(e) {
    return new t(this.i, this.root.remove(e, this.i).copy(null, null, Pt.ot, null, null));
  }, t.prototype.get = function(t2) {
    for (var e = this.root; !e.m(); ) {
      var n2 = this.i(t2, e.key);
      if (n2 === 0)
        return e.value;
      n2 < 0 ? e = e.left : n2 > 0 && (e = e.right);
    }
    return null;
  }, t.prototype.indexOf = function(t2) {
    for (var e = 0, n2 = this.root; !n2.m(); ) {
      var r2 = this.i(t2, n2.key);
      if (r2 === 0)
        return e + n2.left.size;
      r2 < 0 ? n2 = n2.left : (e += n2.left.size + 1, n2 = n2.right);
    }
    return -1;
  }, t.prototype.m = function() {
    return this.root.m();
  }, Object.defineProperty(t.prototype, "size", {
    get: function() {
      return this.root.size;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.at = function() {
    return this.root.at();
  }, t.prototype.ct = function() {
    return this.root.ct();
  }, t.prototype.ut = function(t2) {
    return this.root.ut(t2);
  }, t.prototype.forEach = function(t2) {
    this.ut(function(e, n2) {
      return t2(e, n2), false;
    });
  }, t.prototype.toString = function() {
    var t2 = [];
    return this.ut(function(e, n2) {
      return t2.push(e + ":" + n2), false;
    }), "{" + t2.join(", ") + "}";
  }, t.prototype.ht = function(t2) {
    return this.root.ht(t2);
  }, t.prototype.lt = function() {
    return new Ut(this.root, null, this.i, false);
  }, t.prototype._t = function(t2) {
    return new Ut(this.root, t2, this.i, false);
  }, t.prototype.ft = function() {
    return new Ut(this.root, null, this.i, true);
  }, t.prototype.dt = function(t2) {
    return new Ut(this.root, t2, this.i, true);
  }, t;
}(), Ut = function() {
  function t(t2, e, n2, r2) {
    this.wt = r2, this.Tt = [];
    for (var i = 1; !t2.m(); )
      if (i = e ? n2(t2.key, e) : 1, r2 && (i *= -1), i < 0)
        t2 = this.wt ? t2.left : t2.right;
      else {
        if (i === 0) {
          this.Tt.push(t2);
          break;
        }
        this.Tt.push(t2), t2 = this.wt ? t2.right : t2.left;
      }
  }
  return t.prototype.Et = function() {
    var t2 = this.Tt.pop(), e = {
      key: t2.key,
      value: t2.value
    };
    if (this.wt)
      for (t2 = t2.left; !t2.m(); )
        this.Tt.push(t2), t2 = t2.right;
    else
      for (t2 = t2.right; !t2.m(); )
        this.Tt.push(t2), t2 = t2.left;
    return e;
  }, t.prototype.It = function() {
    return this.Tt.length > 0;
  }, t.prototype.At = function() {
    if (this.Tt.length === 0)
      return null;
    var t2 = this.Tt[this.Tt.length - 1];
    return {
      key: t2.key,
      value: t2.value
    };
  }, t;
}(), Pt = function() {
  function t(e, n2, r2, i, o) {
    this.key = e, this.value = n2, this.color = r2 != null ? r2 : t.RED, this.left = i != null ? i : t.EMPTY, this.right = o != null ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  return t.prototype.copy = function(e, n2, r2, i, o) {
    return new t(e != null ? e : this.key, n2 != null ? n2 : this.value, r2 != null ? r2 : this.color, i != null ? i : this.left, o != null ? o : this.right);
  }, t.prototype.m = function() {
    return false;
  }, t.prototype.ut = function(t2) {
    return this.left.ut(t2) || t2(this.key, this.value) || this.right.ut(t2);
  }, t.prototype.ht = function(t2) {
    return this.right.ht(t2) || t2(this.key, this.value) || this.left.ht(t2);
  }, t.prototype.min = function() {
    return this.left.m() ? this : this.left.min();
  }, t.prototype.at = function() {
    return this.min().key;
  }, t.prototype.ct = function() {
    return this.right.m() ? this.key : this.right.ct();
  }, t.prototype.rt = function(t2, e, n2) {
    var r2 = this, i = n2(t2, r2.key);
    return (r2 = i < 0 ? r2.copy(null, null, null, r2.left.rt(t2, e, n2), null) : i === 0 ? r2.copy(null, e, null, null, null) : r2.copy(null, null, null, null, r2.right.rt(t2, e, n2))).Rt();
  }, t.prototype.Pt = function() {
    if (this.left.m())
      return t.EMPTY;
    var e = this;
    return e.left.gt() || e.left.left.gt() || (e = e.yt()), (e = e.copy(null, null, null, e.left.Pt(), null)).Rt();
  }, t.prototype.remove = function(e, n2) {
    var r2, i = this;
    if (n2(e, i.key) < 0)
      i.left.m() || i.left.gt() || i.left.left.gt() || (i = i.yt()), i = i.copy(null, null, null, i.left.remove(e, n2), null);
    else {
      if (i.left.gt() && (i = i.Vt()), i.right.m() || i.right.gt() || i.right.left.gt() || (i = i.bt()), n2(e, i.key) === 0) {
        if (i.right.m())
          return t.EMPTY;
        r2 = i.right.min(), i = i.copy(r2.key, r2.value, null, null, i.right.Pt());
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n2));
    }
    return i.Rt();
  }, t.prototype.gt = function() {
    return this.color;
  }, t.prototype.Rt = function() {
    var t2 = this;
    return t2.right.gt() && !t2.left.gt() && (t2 = t2.vt()), t2.left.gt() && t2.left.left.gt() && (t2 = t2.Vt()), t2.left.gt() && t2.right.gt() && (t2 = t2.St()), t2;
  }, t.prototype.yt = function() {
    var t2 = this.St();
    return t2.right.left.gt() && (t2 = (t2 = (t2 = t2.copy(null, null, null, null, t2.right.Vt())).vt()).St()), t2;
  }, t.prototype.bt = function() {
    var t2 = this.St();
    return t2.left.left.gt() && (t2 = (t2 = t2.Vt()).St()), t2;
  }, t.prototype.vt = function() {
    var e = this.copy(null, null, t.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }, t.prototype.Vt = function() {
    var e = this.copy(null, null, t.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }, t.prototype.St = function() {
    var t2 = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t2, e);
  }, t.prototype.Dt = function() {
    var t2 = this.Ct();
    return Math.pow(2, t2) <= this.size + 1;
  }, t.prototype.Ct = function() {
    if (this.gt() && this.left.gt())
      throw D$1();
    if (this.right.gt())
      throw D$1();
    var t2 = this.left.Ct();
    if (t2 !== this.right.Ct())
      throw D$1();
    return t2 + (this.gt() ? 0 : 1);
  }, t;
}();
Pt.EMPTY = null, Pt.RED = true, Pt.ot = false, Pt.EMPTY = new (function() {
  function t() {
    this.size = 0;
  }
  return Object.defineProperty(t.prototype, "key", {
    get: function() {
      throw D$1();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "value", {
    get: function() {
      throw D$1();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "color", {
    get: function() {
      throw D$1();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "left", {
    get: function() {
      throw D$1();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "right", {
    get: function() {
      throw D$1();
    },
    enumerable: false,
    configurable: true
  }), t.prototype.copy = function(t2, e, n2, r2, i) {
    return this;
  }, t.prototype.rt = function(t2, e, n2) {
    return new Pt(t2, e);
  }, t.prototype.remove = function(t2, e) {
    return this;
  }, t.prototype.m = function() {
    return true;
  }, t.prototype.ut = function(t2) {
    return false;
  }, t.prototype.ht = function(t2) {
    return false;
  }, t.prototype.at = function() {
    return null;
  }, t.prototype.ct = function() {
    return null;
  }, t.prototype.gt = function() {
    return false;
  }, t.prototype.Dt = function() {
    return true;
  }, t.prototype.Ct = function() {
    return 0;
  }, t;
}())();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vt = function() {
  function t(t2) {
    this.i = t2, this.data = new Lt(this.i);
  }
  return t.prototype.has = function(t2) {
    return this.data.get(t2) !== null;
  }, t.prototype.first = function() {
    return this.data.at();
  }, t.prototype.last = function() {
    return this.data.ct();
  }, Object.defineProperty(t.prototype, "size", {
    get: function() {
      return this.data.size;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.indexOf = function(t2) {
    return this.data.indexOf(t2);
  }, t.prototype.forEach = function(t2) {
    this.data.ut(function(e, n2) {
      return t2(e), false;
    });
  }, t.prototype.Nt = function(t2, e) {
    for (var n2 = this.data._t(t2[0]); n2.It(); ) {
      var r2 = n2.Et();
      if (this.i(r2.key, t2[1]) >= 0)
        return;
      e(r2.key);
    }
  }, t.prototype.Ft = function(t2, e) {
    var n2;
    for (n2 = e !== void 0 ? this.data._t(e) : this.data.lt(); n2.It(); )
      if (!t2(n2.Et().key))
        return;
  }, t.prototype.$t = function(t2) {
    var e = this.data._t(t2);
    return e.It() ? e.Et().key : null;
  }, t.prototype.lt = function() {
    return new Ct(this.data.lt());
  }, t.prototype._t = function(t2) {
    return new Ct(this.data._t(t2));
  }, t.prototype.add = function(t2) {
    return this.copy(this.data.remove(t2).rt(t2, true));
  }, t.prototype.delete = function(t2) {
    return this.has(t2) ? this.copy(this.data.remove(t2)) : this;
  }, t.prototype.m = function() {
    return this.data.m();
  }, t.prototype.xt = function(t2) {
    var e = this;
    return e.size < t2.size && (e = t2, t2 = this), t2.forEach(function(t3) {
      e = e.add(t3);
    }), e;
  }, t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      return false;
    if (this.size !== e.size)
      return false;
    for (var n2 = this.data.lt(), r2 = e.data.lt(); n2.It(); ) {
      var i = n2.Et().key, o = r2.Et().key;
      if (this.i(i, o) !== 0)
        return false;
    }
    return true;
  }, t.prototype.A = function() {
    var t2 = [];
    return this.forEach(function(e) {
      t2.push(e);
    }), t2;
  }, t.prototype.toString = function() {
    var t2 = [];
    return this.forEach(function(e) {
      return t2.push(e);
    }), "SortedSet(" + t2.toString() + ")";
  }, t.prototype.copy = function(e) {
    var n2 = new t(this.i);
    return n2.data = e, n2;
  }, t;
}(), Ct = function() {
  function t(t2) {
    this.kt = t2;
  }
  return t.prototype.Et = function() {
    return this.kt.Et().key;
  }, t.prototype.It = function() {
    return this.kt.It();
  }, t;
}(), Mt = new Lt(M$1.i);
function Ft() {
  return Mt;
}
function qt() {
  return Ft();
}
var Gt = new Lt(M$1.i);
function Bt() {
  return Gt;
}
var jt = new Lt(M$1.i), zt = new Vt(M$1.i);
function Qt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var n2 = zt, r2 = 0, i = t; r2 < i.length; r2++) {
    var o = i[r2];
    n2 = n2.add(o);
  }
  return n2;
}
var Kt = new Vt(st);
function Wt() {
  return Kt;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yt = function() {
  function t(t2) {
    this.i = t2 ? function(e, n2) {
      return t2(e, n2) || M$1.i(e.key, n2.key);
    } : function(t3, e) {
      return M$1.i(t3.key, e.key);
    }, this.Mt = Bt(), this.Ot = new Lt(this.i);
  }
  return t.Lt = function(e) {
    return new t(e.i);
  }, t.prototype.has = function(t2) {
    return this.Mt.get(t2) != null;
  }, t.prototype.get = function(t2) {
    return this.Mt.get(t2);
  }, t.prototype.first = function() {
    return this.Ot.at();
  }, t.prototype.last = function() {
    return this.Ot.ct();
  }, t.prototype.m = function() {
    return this.Ot.m();
  }, t.prototype.indexOf = function(t2) {
    var e = this.Mt.get(t2);
    return e ? this.Ot.indexOf(e) : -1;
  }, Object.defineProperty(t.prototype, "size", {
    get: function() {
      return this.Ot.size;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.forEach = function(t2) {
    this.Ot.ut(function(e, n2) {
      return t2(e), false;
    });
  }, t.prototype.add = function(t2) {
    var e = this.delete(t2.key);
    return e.copy(e.Mt.rt(t2.key, t2), e.Ot.rt(t2, null));
  }, t.prototype.delete = function(t2) {
    var e = this.get(t2);
    return e ? this.copy(this.Mt.remove(t2), this.Ot.remove(e)) : this;
  }, t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      return false;
    if (this.size !== e.size)
      return false;
    for (var n2 = this.Ot.lt(), r2 = e.Ot.lt(); n2.It(); ) {
      var i = n2.Et().key, o = r2.Et().key;
      if (!i.isEqual(o))
        return false;
    }
    return true;
  }, t.prototype.toString = function() {
    var t2 = [];
    return this.forEach(function(e) {
      t2.push(e.toString());
    }), t2.length === 0 ? "DocumentSet ()" : "DocumentSet (\n  " + t2.join("  \n") + "\n)";
  }, t.prototype.copy = function(e, n2) {
    var r2 = new t();
    return r2.i = this.i, r2.Mt = e, r2.Ot = n2, r2;
  }, t;
}(), Ht = function() {
  function t() {
    this.Bt = new Lt(M$1.i);
  }
  return t.prototype.track = function(t2) {
    var e = t2.doc.key, n2 = this.Bt.get(e);
    n2 ? t2.type !== 0 && n2.type === 3 ? this.Bt = this.Bt.rt(e, t2) : t2.type === 3 && n2.type !== 1 ? this.Bt = this.Bt.rt(e, {
      type: n2.type,
      doc: t2.doc
    }) : t2.type === 2 && n2.type === 2 ? this.Bt = this.Bt.rt(e, {
      type: 2,
      doc: t2.doc
    }) : t2.type === 2 && n2.type === 0 ? this.Bt = this.Bt.rt(e, {
      type: 0,
      doc: t2.doc
    }) : t2.type === 1 && n2.type === 0 ? this.Bt = this.Bt.remove(e) : t2.type === 1 && n2.type === 2 ? this.Bt = this.Bt.rt(e, {
      type: 1,
      doc: n2.doc
    }) : t2.type === 0 && n2.type === 1 ? this.Bt = this.Bt.rt(e, {
      type: 2,
      doc: t2.doc
    }) : D$1() : this.Bt = this.Bt.rt(e, t2);
  }, t.prototype.qt = function() {
    var t2 = [];
    return this.Bt.ut(function(e, n2) {
      t2.push(n2);
    }), t2;
  }, t;
}(), $t = function() {
  function t(t2, e, n2, r2, i, o, s, u2) {
    this.query = t2, this.docs = e, this.Ut = n2, this.docChanges = r2, this.Qt = i, this.fromCache = o, this.Wt = s, this.jt = u2;
  }
  return t.Kt = function(e, n2, r2, i) {
    var o = [];
    return n2.forEach(function(t2) {
      o.push({
        type: 0,
        doc: t2
      });
    }), new t(e, n2, Yt.Lt(n2), o, r2, i, true, false);
  }, Object.defineProperty(t.prototype, "hasPendingWrites", {
    get: function() {
      return !this.Qt.m();
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(t2) {
    if (!(this.fromCache === t2.fromCache && this.Wt === t2.Wt && this.Qt.isEqual(t2.Qt) && er(this.query, t2.query) && this.docs.isEqual(t2.docs) && this.Ut.isEqual(t2.Ut)))
      return false;
    var e = this.docChanges, n2 = t2.docChanges;
    if (e.length !== n2.length)
      return false;
    for (var r2 = 0; r2 < e.length; r2++)
      if (e[r2].type !== n2[r2].type || !e[r2].doc.isEqual(n2[r2].doc))
        return false;
    return true;
  }, t;
}(), Xt = function() {
  function t(t2, e, n2, r2, i) {
    this.et = t2, this.Gt = e, this.zt = n2, this.Ht = r2, this.Yt = i;
  }
  return t.Jt = function(e, n2) {
    var r2 = new Map();
    return r2.set(e, Jt.Xt(e, n2)), new t(gt.min(), r2, Wt(), Ft(), Qt());
  }, t;
}(), Jt = function() {
  function t(t2, e, n2, r2, i) {
    this.resumeToken = t2, this.Zt = e, this.te = n2, this.ee = r2, this.ne = i;
  }
  return t.Xt = function(e, n2) {
    return new t(ct.B, n2, Qt(), Qt(), Qt());
  }, t;
}(), Zt = function(t, e, n2, r2) {
  this.se = t, this.removedTargetIds = e, this.key = n2, this.ie = r2;
}, te = function(t, e) {
  this.targetId = t, this.re = e;
}, ee = function(t, e, n2, r2) {
  n2 === void 0 && (n2 = ct.B), r2 === void 0 && (r2 = null), this.state = t, this.targetIds = e, this.resumeToken = n2, this.cause = r2;
}, ne = function() {
  function t() {
    this.oe = 0, this.ae = oe(), this.ce = ct.B, this.ue = false, this.he = true;
  }
  return Object.defineProperty(t.prototype, "Zt", {
    get: function() {
      return this.ue;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "resumeToken", {
    get: function() {
      return this.ce;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "le", {
    get: function() {
      return this.oe !== 0;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "_e", {
    get: function() {
      return this.he;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.fe = function(t2) {
    t2.O() > 0 && (this.he = true, this.ce = t2);
  }, t.prototype.de = function() {
    var t2 = Qt(), e = Qt(), n2 = Qt();
    return this.ae.forEach(function(r2, i) {
      switch (i) {
        case 0:
          t2 = t2.add(r2);
          break;
        case 2:
          e = e.add(r2);
          break;
        case 1:
          n2 = n2.add(r2);
          break;
        default:
          D$1();
      }
    }), new Jt(this.ce, this.ue, t2, e, n2);
  }, t.prototype.we = function() {
    this.he = false, this.ae = oe();
  }, t.prototype.me = function(t2, e) {
    this.he = true, this.ae = this.ae.rt(t2, e);
  }, t.prototype.Te = function(t2) {
    this.he = true, this.ae = this.ae.remove(t2);
  }, t.prototype.Ee = function() {
    this.oe += 1;
  }, t.prototype.Ie = function() {
    this.oe -= 1;
  }, t.prototype.Ae = function() {
    this.he = true, this.ue = true;
  }, t;
}(), re = function() {
  function t(t2) {
    this.Re = t2, this.Pe = new Map(), this.ge = Ft(), this.ye = ie(), this.Ve = new Vt(st);
  }
  return t.prototype.pe = function(t2) {
    for (var e = 0, n2 = t2.se; e < n2.length; e++) {
      var r2 = n2[e];
      t2.ie instanceof Fn ? this.be(r2, t2.ie) : t2.ie instanceof qn && this.ve(r2, t2.key, t2.ie);
    }
    for (var i = 0, o = t2.removedTargetIds; i < o.length; i++) {
      var s = o[i];
      this.ve(s, t2.key, t2.ie);
    }
  }, t.prototype.Se = function(t2) {
    var e = this;
    this.De(t2, function(n2) {
      var r2 = e.Ce(n2);
      switch (t2.state) {
        case 0:
          e.Ne(n2) && r2.fe(t2.resumeToken);
          break;
        case 1:
          r2.Ie(), r2.le || r2.we(), r2.fe(t2.resumeToken);
          break;
        case 2:
          r2.Ie(), r2.le || e.removeTarget(n2);
          break;
        case 3:
          e.Ne(n2) && (r2.Ae(), r2.fe(t2.resumeToken));
          break;
        case 4:
          e.Ne(n2) && (e.Fe(n2), r2.fe(t2.resumeToken));
          break;
        default:
          D$1();
      }
    });
  }, t.prototype.De = function(t2, e) {
    var n2 = this;
    t2.targetIds.length > 0 ? t2.targetIds.forEach(e) : this.Pe.forEach(function(t3, r2) {
      n2.Ne(r2) && e(r2);
    });
  }, t.prototype.$e = function(t2) {
    var e = t2.targetId, n2 = t2.re.count, r2 = this.xe(e);
    if (r2) {
      var i = r2.target;
      if (At(i))
        if (n2 === 0) {
          var o = new M$1(i.path);
          this.ve(e, o, new qn(o, gt.min()));
        } else
          x$1(n2 === 1);
      else
        this.ke(e) !== n2 && (this.Fe(e), this.Ve = this.Ve.add(e));
    }
  }, t.prototype.Me = function(t2) {
    var e = this, n2 = new Map();
    this.Pe.forEach(function(r3, i2) {
      var o = e.xe(i2);
      if (o) {
        if (r3.Zt && At(o.target)) {
          var s = new M$1(o.target.path);
          e.ge.get(s) !== null || e.Oe(i2, s) || e.ve(i2, s, new qn(s, t2));
        }
        r3._e && (n2.set(i2, r3.de()), r3.we());
      }
    });
    var r2 = Qt();
    this.ye.forEach(function(t3, n3) {
      var i2 = true;
      n3.Ft(function(t4) {
        var n4 = e.xe(t4);
        return !n4 || n4.tt === 2 || (i2 = false, false);
      }), i2 && (r2 = r2.add(t3));
    });
    var i = new Xt(t2, n2, this.Ve, this.ge, r2);
    return this.ge = Ft(), this.ye = ie(), this.Ve = new Vt(st), i;
  }, t.prototype.be = function(t2, e) {
    if (this.Ne(t2)) {
      var n2 = this.Oe(t2, e.key) ? 2 : 0;
      this.Ce(t2).me(e.key, n2), this.ge = this.ge.rt(e.key, e), this.ye = this.ye.rt(e.key, this.Le(e.key).add(t2));
    }
  }, t.prototype.ve = function(t2, e, n2) {
    if (this.Ne(t2)) {
      var r2 = this.Ce(t2);
      this.Oe(t2, e) ? r2.me(e, 1) : r2.Te(e), this.ye = this.ye.rt(e, this.Le(e).delete(t2)), n2 && (this.ge = this.ge.rt(e, n2));
    }
  }, t.prototype.removeTarget = function(t2) {
    this.Pe.delete(t2);
  }, t.prototype.ke = function(t2) {
    var e = this.Ce(t2).de();
    return this.Re.Be(t2).size + e.te.size - e.ne.size;
  }, t.prototype.Ee = function(t2) {
    this.Ce(t2).Ee();
  }, t.prototype.Ce = function(t2) {
    var e = this.Pe.get(t2);
    return e || (e = new ne(), this.Pe.set(t2, e)), e;
  }, t.prototype.Le = function(t2) {
    var e = this.ye.get(t2);
    return e || (e = new Vt(st), this.ye = this.ye.rt(t2, e)), e;
  }, t.prototype.Ne = function(t2) {
    var e = this.xe(t2) !== null;
    return e || T$1("WatchChangeAggregator", "Detected inactive target", t2), e;
  }, t.prototype.xe = function(t2) {
    var e = this.Pe.get(t2);
    return e && e.le ? null : this.Re.qe(t2);
  }, t.prototype.Fe = function(t2) {
    var e = this;
    this.Pe.set(t2, new ne()), this.Re.Be(t2).forEach(function(n2) {
      e.ve(t2, n2, null);
    });
  }, t.prototype.Oe = function(t2, e) {
    return this.Re.Be(t2).has(e);
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ie() {
  return new Lt(M$1.i);
}
function oe() {
  return new Lt(M$1.i);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(t) {
  var e, n2;
  return ((n2 = (((e = t == null ? void 0 : t.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}).__type__) === null || n2 === void 0 ? void 0 : n2.stringValue) === "server_timestamp";
}
function ue(t) {
  var e = ve(t.mapValue.fields.__local_write_time__.timestampValue);
  return new mt(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ae = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function ce(t) {
  return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? se(t) ? 4 : 10 : D$1();
}
function he(t, e) {
  var n2 = ce(t);
  if (n2 !== ce(e))
    return false;
  switch (n2) {
    case 0:
      return true;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return ue(t).isEqual(ue(e));
    case 3:
      return function(t2, e2) {
        if (typeof t2.timestampValue == "string" && typeof e2.timestampValue == "string" && t2.timestampValue.length === e2.timestampValue.length)
          return t2.timestampValue === e2.timestampValue;
        var n3 = ve(t2.timestampValue), r2 = ve(e2.timestampValue);
        return n3.seconds === r2.seconds && n3.nanos === r2.nanos;
      }(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return function(t2, e2) {
        return me(t2.bytesValue).isEqual(me(e2.bytesValue));
      }(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return function(t2, e2) {
        return ye(t2.geoPointValue.latitude) === ye(e2.geoPointValue.latitude) && ye(t2.geoPointValue.longitude) === ye(e2.geoPointValue.longitude);
      }(t, e);
    case 2:
      return function(t2, e2) {
        if ("integerValue" in t2 && "integerValue" in e2)
          return ye(t2.integerValue) === ye(e2.integerValue);
        if ("doubleValue" in t2 && "doubleValue" in e2) {
          var n3 = ye(t2.doubleValue), r2 = ye(e2.doubleValue);
          return n3 === r2 ? bt(n3) === bt(r2) : isNaN(n3) && isNaN(r2);
        }
        return false;
      }(t, e);
    case 9:
      return ut(t.arrayValue.values || [], e.arrayValue.values || [], he);
    case 10:
      return function(t2, e2) {
        var n3 = t2.mapValue.fields || {}, r2 = e2.mapValue.fields || {};
        if (O$1(n3) !== O$1(r2))
          return false;
        for (var i in n3)
          if (n3.hasOwnProperty(i) && (r2[i] === void 0 || !he(n3[i], r2[i])))
            return false;
        return true;
      }(t, e);
    default:
      return D$1();
  }
}
function fe(t, e) {
  return (t.values || []).find(function(t2) {
    return he(t2, e);
  }) !== void 0;
}
function le(t, e) {
  var n2 = ce(t), r2 = ce(e);
  if (n2 !== r2)
    return st(n2, r2);
  switch (n2) {
    case 0:
      return 0;
    case 1:
      return st(t.booleanValue, e.booleanValue);
    case 2:
      return function(t2, e2) {
        var n3 = ye(t2.integerValue || t2.doubleValue), r3 = ye(e2.integerValue || e2.doubleValue);
        return n3 < r3 ? -1 : n3 > r3 ? 1 : n3 === r3 ? 0 : isNaN(n3) ? isNaN(r3) ? 0 : -1 : 1;
      }(t, e);
    case 3:
      return pe(t.timestampValue, e.timestampValue);
    case 4:
      return pe(ue(t), ue(e));
    case 5:
      return st(t.stringValue, e.stringValue);
    case 6:
      return function(t2, e2) {
        var n3 = me(t2), r3 = me(e2);
        return n3.L(r3);
      }(t.bytesValue, e.bytesValue);
    case 7:
      return function(t2, e2) {
        for (var n3 = t2.split("/"), r3 = e2.split("/"), i = 0; i < n3.length && i < r3.length; i++) {
          var o = st(n3[i], r3[i]);
          if (o !== 0)
            return o;
        }
        return st(n3.length, r3.length);
      }(t.referenceValue, e.referenceValue);
    case 8:
      return function(t2, e2) {
        var n3 = st(ye(t2.latitude), ye(e2.latitude));
        return n3 !== 0 ? n3 : st(ye(t2.longitude), ye(e2.longitude));
      }(t.geoPointValue, e.geoPointValue);
    case 9:
      return function(t2, e2) {
        for (var n3 = t2.values || [], r3 = e2.values || [], i = 0; i < n3.length && i < r3.length; ++i) {
          var o = le(n3[i], r3[i]);
          if (o)
            return o;
        }
        return st(n3.length, r3.length);
      }(t.arrayValue, e.arrayValue);
    case 10:
      return function(t2, e2) {
        var n3 = t2.fields || {}, r3 = Object.keys(n3), i = e2.fields || {}, o = Object.keys(i);
        r3.sort(), o.sort();
        for (var s = 0; s < r3.length && s < o.length; ++s) {
          var u2 = st(r3[s], o[s]);
          if (u2 !== 0)
            return u2;
          var a = le(n3[r3[s]], i[o[s]]);
          if (a !== 0)
            return a;
        }
        return st(r3.length, o.length);
      }(t.mapValue, e.mapValue);
    default:
      throw D$1();
  }
}
function pe(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return st(t, e);
  var n2 = ve(t), r2 = ve(e), i = st(n2.seconds, r2.seconds);
  return i !== 0 ? i : st(n2.nanos, r2.nanos);
}
function de(t) {
  return function t2(e) {
    return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t3) {
      var e2 = ve(t3);
      return "time(" + e2.seconds + "," + e2.nanos + ")";
    }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? me(e.bytesValue).toBase64() : "referenceValue" in e ? (r2 = e.referenceValue, M$1.C(r2).toString()) : "geoPointValue" in e ? "geo(" + (n2 = e.geoPointValue).latitude + "," + n2.longitude + ")" : "arrayValue" in e ? function(e2) {
      for (var n3 = "[", r3 = true, i = 0, o = e2.values || []; i < o.length; i++) {
        var s = o[i];
        r3 ? r3 = false : n3 += ",", n3 += t2(s);
      }
      return n3 + "]";
    }(e.arrayValue) : "mapValue" in e ? function(e2) {
      for (var n3 = "{", r3 = true, i = 0, o = Object.keys(e2.fields || {}).sort(); i < o.length; i++) {
        var s = o[i];
        r3 ? r3 = false : n3 += ",", n3 += s + ":" + t2(e2.fields[s]);
      }
      return n3 + "}";
    }(e.mapValue) : D$1();
    var n2, r2;
  }(t);
}
function ve(t) {
  if (x$1(!!t), typeof t == "string") {
    var e = 0, n2 = ae.exec(t);
    if (x$1(!!n2), n2[1]) {
      var r2 = n2[1];
      r2 = (r2 + "000000000").substr(0, 9), e = Number(r2);
    }
    var i = new Date(t);
    return {
      seconds: Math.floor(i.getTime() / 1e3),
      nanos: e
    };
  }
  return {
    seconds: ye(t.seconds),
    nanos: ye(t.nanos)
  };
}
function ye(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function me(t) {
  return typeof t == "string" ? ct.fromBase64String(t) : ct.fromUint8Array(t);
}
function ge(t, e) {
  return {
    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.R()
  };
}
function we(t) {
  return !!t && "integerValue" in t;
}
function be(t) {
  return !!t && "arrayValue" in t;
}
function Ie(t) {
  return !!t && "nullValue" in t;
}
function Ee(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function _e(t) {
  return !!t && "mapValue" in t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Te = {
  asc: "ASCENDING",
  desc: "DESCENDING"
}, Ne = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}, Ae = function(t, e) {
  this.U = t, this.Ue = e;
};
function Se(t) {
  return {
    integerValue: "" + t
  };
}
function De(t, e) {
  if (t.Ue) {
    if (isNaN(e))
      return {
        doubleValue: "NaN"
      };
    if (e === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (e === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: bt(e) ? "-0" : e
  };
}
function xe(t, e) {
  return It(e) ? Se(e) : De(t, e);
}
function ke(t, e) {
  return t.Ue ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
function Oe(t, e) {
  return t.Ue ? e.toBase64() : e.toUint8Array();
}
function Re(t, e) {
  return ke(t, e.X());
}
function Le(t) {
  return x$1(!!t), gt.Y(function(t2) {
    var e = ve(t2);
    return new mt(e.seconds, e.nanos);
  }(t));
}
function Ue(t, e) {
  return function(t2) {
    return new P$1(["projects", t2.projectId, "databases", t2.database]);
  }(t).child("documents").child(e).R();
}
function Pe(t) {
  var e = P$1.P(t);
  return x$1(nn(e)), e;
}
function Ve(t, e) {
  return Ue(t.U, e.path);
}
function Ce(t, e) {
  var n2 = Pe(e);
  return x$1(n2.get(1) === t.U.projectId), x$1(!n2.get(3) && !t.U.database || n2.get(3) === t.U.database), new M$1(Ge(n2));
}
function Me(t, e) {
  return Ue(t.U, e);
}
function Fe(t) {
  var e = Pe(t);
  return e.length === 4 ? P$1.g() : Ge(e);
}
function qe(t) {
  return new P$1(["projects", t.U.projectId, "databases", t.U.database]).R();
}
function Ge(t) {
  return x$1(t.length > 4 && t.get(4) === "documents"), t.u(5);
}
function Be(t, e, n2) {
  return {
    name: Ve(t, e),
    fields: n2.proto.mapValue.fields
  };
}
function je(t, e) {
  var n2;
  if (e instanceof Sn)
    n2 = {
      update: Be(t, e.key, e.value)
    };
  else if (e instanceof Ln)
    n2 = {
      delete: Ve(t, e.key)
    };
  else if (e instanceof Dn)
    n2 = {
      update: Be(t, e.key, e.data),
      updateMask: en(e.Qe)
    };
  else if (e instanceof kn)
    n2 = {
      transform: {
        document: Ve(t, e.key),
        fieldTransforms: e.fieldTransforms.map(function(t2) {
          return function(t3, e2) {
            var n3 = e2.transform;
            if (n3 instanceof an)
              return {
                fieldPath: e2.field.R(),
                setToServerValue: "REQUEST_TIME"
              };
            if (n3 instanceof cn)
              return {
                fieldPath: e2.field.R(),
                appendMissingElements: {
                  values: n3.elements
                }
              };
            if (n3 instanceof fn)
              return {
                fieldPath: e2.field.R(),
                removeAllFromArray: {
                  values: n3.elements
                }
              };
            if (n3 instanceof pn)
              return {
                fieldPath: e2.field.R(),
                increment: n3.We
              };
            throw D$1();
          }(0, t2);
        })
      }
    };
  else {
    if (!(e instanceof Un))
      return D$1();
    n2 = {
      verify: Ve(t, e.key)
    };
  }
  return e.Ke.je || (n2.currentDocument = function(t2, e2) {
    return e2.updateTime !== void 0 ? {
      updateTime: Re(t2, e2.updateTime)
    } : e2.exists !== void 0 ? {
      exists: e2.exists
    } : D$1();
  }(t, e.Ke)), n2;
}
function ze(t, e) {
  var n2 = e.currentDocument ? function(t2) {
    return t2.updateTime !== void 0 ? wn.updateTime(Le(t2.updateTime)) : t2.exists !== void 0 ? wn.exists(t2.exists) : wn.Ge();
  }(e.currentDocument) : wn.Ge();
  if (e.update) {
    e.update.name;
    var r2 = Ce(t, e.update.name), i = new Pn({
      mapValue: {
        fields: e.update.fields
      }
    });
    if (e.updateMask) {
      var o = function(t2) {
        var e2 = t2.fieldPaths || [];
        return new yn(e2.map(function(t3) {
          return C$1.S(t3);
        }));
      }(e.updateMask);
      return new Dn(r2, i, o, n2);
    }
    return new Sn(r2, i, n2);
  }
  if (e.delete) {
    var s = Ce(t, e.delete);
    return new Ln(s, n2);
  }
  if (e.transform) {
    var u2 = Ce(t, e.transform.document), a = e.transform.fieldTransforms.map(function(e2) {
      return function(t2, e3) {
        var n3 = null;
        if ("setToServerValue" in e3)
          x$1(e3.setToServerValue === "REQUEST_TIME"), n3 = new an();
        else if ("appendMissingElements" in e3) {
          var r3 = e3.appendMissingElements.values || [];
          n3 = new cn(r3);
        } else if ("removeAllFromArray" in e3) {
          var i2 = e3.removeAllFromArray.values || [];
          n3 = new fn(i2);
        } else
          "increment" in e3 ? n3 = new pn(t2, e3.increment) : D$1();
        var o2 = C$1.S(e3.fieldPath);
        return new mn(o2, n3);
      }(t, e2);
    });
    return x$1(n2.exists === true), new kn(u2, a);
  }
  if (e.verify) {
    var c = Ce(t, e.verify);
    return new Un(c, n2);
  }
  return D$1();
}
function Qe(t, e) {
  return {
    documents: [Me(t, e.path)]
  };
}
function Ke(t, e) {
  var n2 = {
    structuredQuery: {}
  }, r2 = e.path;
  e.collectionGroup !== null ? (n2.parent = Me(t, r2), n2.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: true
  }]) : (n2.parent = Me(t, r2.h()), n2.structuredQuery.from = [{
    collectionId: r2._()
  }]);
  var i = function(t2) {
    if (t2.length !== 0) {
      var e2 = t2.map(function(t3) {
        return function(t4) {
          if (t4.op === "==") {
            if (Ee(t4.value))
              return {
                unaryFilter: {
                  field: Xe(t4.field),
                  op: "IS_NAN"
                }
              };
            if (Ie(t4.value))
              return {
                unaryFilter: {
                  field: Xe(t4.field),
                  op: "IS_NULL"
                }
              };
          } else if (t4.op === "!=") {
            if (Ee(t4.value))
              return {
                unaryFilter: {
                  field: Xe(t4.field),
                  op: "IS_NOT_NAN"
                }
              };
            if (Ie(t4.value))
              return {
                unaryFilter: {
                  field: Xe(t4.field),
                  op: "IS_NOT_NULL"
                }
              };
          }
          return {
            fieldFilter: {
              field: Xe(t4.field),
              op: $e(t4.op),
              value: t4.value
            }
          };
        }(t3);
      });
      return e2.length === 1 ? e2[0] : {
        compositeFilter: {
          op: "AND",
          filters: e2
        }
      };
    }
  }(e.filters);
  i && (n2.structuredQuery.where = i);
  var o = function(t2) {
    if (t2.length !== 0)
      return t2.map(function(t3) {
        return function(t4) {
          return {
            field: Xe(t4.field),
            direction: He(t4.dir)
          };
        }(t3);
      });
  }(e.orderBy);
  o && (n2.structuredQuery.orderBy = o);
  var s = function(t2, e2) {
    return t2.Ue || wt(e2) ? e2 : {
      value: e2
    };
  }(t, e.limit);
  return s !== null && (n2.structuredQuery.limit = s), e.startAt && (n2.structuredQuery.startAt = We(e.startAt)), e.endAt && (n2.structuredQuery.endAt = We(e.endAt)), n2;
}
function We(t) {
  return {
    before: t.before,
    values: t.position
  };
}
function Ye(t) {
  var e = !!t.before, n2 = t.values || [];
  return new vr(n2, e);
}
function He(t) {
  return Te[t];
}
function $e(t) {
  return Ne[t];
}
function Xe(t) {
  return {
    fieldPath: t.R()
  };
}
function Je(t) {
  return C$1.S(t.fieldPath);
}
function Ze(t) {
  return sr.create(Je(t.fieldFilter.field), function(t2) {
    switch (t2) {
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      case "OPERATOR_UNSPECIFIED":
      default:
        return D$1();
    }
  }(t.fieldFilter.op), t.fieldFilter.value);
}
function tn(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      var e = Je(t.unaryFilter.field);
      return sr.create(e, "==", {
        doubleValue: NaN
      });
    case "IS_NULL":
      var n2 = Je(t.unaryFilter.field);
      return sr.create(n2, "==", {
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      var r2 = Je(t.unaryFilter.field);
      return sr.create(r2, "!=", {
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      var i = Je(t.unaryFilter.field);
      return sr.create(i, "!=", {
        nullValue: "NULL_VALUE"
      });
    case "OPERATOR_UNSPECIFIED":
    default:
      return D$1();
  }
}
function en(t) {
  var e = [];
  return t.fields.forEach(function(t2) {
    return e.push(t2.R());
  }), {
    fieldPaths: e
  };
}
function nn(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rn = function() {
  this.ze = void 0;
};
function on(t, e, n2) {
  return t instanceof an ? function(t2, e2) {
    var n3 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t2.seconds,
            nanos: t2.nanoseconds
          }
        }
      }
    };
    return e2 && (n3.fields.__previous_value__ = e2), {
      mapValue: n3
    };
  }(n2, e) : t instanceof cn ? hn(t, e) : t instanceof fn ? ln(t, e) : function(t2, e2) {
    var n3 = un(t2, e2), r2 = dn(n3) + dn(t2.We);
    return we(n3) && we(t2.We) ? Se(r2) : De(t2.serializer, r2);
  }(t, e);
}
function sn(t, e, n2) {
  return t instanceof cn ? hn(t, e) : t instanceof fn ? ln(t, e) : n2;
}
function un(t, e) {
  return t instanceof pn ? we(n2 = e) || function(t2) {
    return !!t2 && "doubleValue" in t2;
  }(n2) ? e : {
    integerValue: 0
  } : null;
  var n2;
}
var an = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2;
}(rn), cn = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this) || this).elements = t, n3;
  }
  return __extends(n2, e), n2;
}(rn);
function hn(t, e) {
  for (var n2 = vn(e), r2 = function(t2) {
    n2.some(function(e2) {
      return he(e2, t2);
    }) || n2.push(t2);
  }, i = 0, o = t.elements; i < o.length; i++) {
    r2(o[i]);
  }
  return {
    arrayValue: {
      values: n2
    }
  };
}
var fn = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this) || this).elements = t, n3;
  }
  return __extends(n2, e), n2;
}(rn);
function ln(t, e) {
  for (var n2 = vn(e), r2 = function(t2) {
    n2 = n2.filter(function(e2) {
      return !he(e2, t2);
    });
  }, i = 0, o = t.elements; i < o.length; i++) {
    r2(o[i]);
  }
  return {
    arrayValue: {
      values: n2
    }
  };
}
var pn = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).serializer = t, r2.We = n3, r2;
  }
  return __extends(n2, e), n2;
}(rn);
function dn(t) {
  return ye(t.integerValue || t.doubleValue);
}
function vn(t) {
  return be(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yn = function() {
  function t(t2) {
    this.fields = t2, t2.sort(C$1.i);
  }
  return t.prototype.He = function(t2) {
    for (var e = 0, n2 = this.fields; e < n2.length; e++) {
      if (n2[e].T(t2))
        return true;
    }
    return false;
  }, t.prototype.isEqual = function(t2) {
    return ut(this.fields, t2.fields, function(t3, e) {
      return t3.isEqual(e);
    });
  }, t;
}(), mn = function(t, e) {
  this.field = t, this.transform = e;
};
var gn = function(t, e) {
  this.version = t, this.transformResults = e;
}, wn = function() {
  function t(t2, e) {
    this.updateTime = t2, this.exists = e;
  }
  return t.Ge = function() {
    return new t();
  }, t.exists = function(e) {
    return new t(void 0, e);
  }, t.updateTime = function(e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "je", {
    get: function() {
      return this.updateTime === void 0 && this.exists === void 0;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(t2) {
    return this.exists === t2.exists && (this.updateTime ? !!t2.updateTime && this.updateTime.isEqual(t2.updateTime) : !t2.updateTime);
  }, t;
}();
function bn(t, e) {
  return t.updateTime !== void 0 ? e instanceof Fn && e.version.isEqual(t.updateTime) : t.exists === void 0 || t.exists === e instanceof Fn;
}
var In = function() {
};
function En(t, e, n2) {
  return t instanceof Sn ? function(t2, e2, n3) {
    return new Fn(t2.key, n3.version, t2.value, {
      hasCommittedMutations: true
    });
  }(t, 0, n2) : t instanceof Dn ? function(t2, e2, n3) {
    if (!bn(t2.Ke, e2))
      return new Gn(t2.key, n3.version);
    var r2 = xn(t2, e2);
    return new Fn(t2.key, n3.version, r2, {
      hasCommittedMutations: true
    });
  }(t, e, n2) : t instanceof kn ? function(t2, e2, n3) {
    if (x$1(n3.transformResults != null), !bn(t2.Ke, e2))
      return new Gn(t2.key, n3.version);
    var r2 = On(t2, e2), i = function(t3, e3, n4) {
      var r3 = [];
      x$1(t3.length === n4.length);
      for (var i2 = 0; i2 < n4.length; i2++) {
        var o2 = t3[i2], s2 = o2.transform, u2 = null;
        e3 instanceof Fn && (u2 = e3.field(o2.field)), r3.push(sn(s2, u2, n4[i2]));
      }
      return r3;
    }(t2.fieldTransforms, e2, n3.transformResults), o = n3.version, s = Rn(t2, r2.data(), i);
    return new Fn(t2.key, o, s, {
      hasCommittedMutations: true
    });
  }(t, e, n2) : function(t2, e2, n3) {
    return new qn(t2.key, n3.version, {
      hasCommittedMutations: true
    });
  }(t, 0, n2);
}
function _n(t, e, n2, r2) {
  return t instanceof Sn ? function(t2, e2) {
    if (!bn(t2.Ke, e2))
      return e2;
    var n3 = An(e2);
    return new Fn(t2.key, n3, t2.value, {
      Ye: true
    });
  }(t, e) : t instanceof Dn ? function(t2, e2) {
    if (!bn(t2.Ke, e2))
      return e2;
    var n3 = An(e2), r3 = xn(t2, e2);
    return new Fn(t2.key, n3, r3, {
      Ye: true
    });
  }(t, e) : t instanceof kn ? function(t2, e2, n3, r3) {
    if (!bn(t2.Ke, e2))
      return e2;
    var i = On(t2, e2), o = function(t3, e3, n4, r4) {
      for (var i2 = [], o2 = 0, s2 = t3; o2 < s2.length; o2++) {
        var u2 = s2[o2], a = u2.transform, c = null;
        n4 instanceof Fn && (c = n4.field(u2.field)), c === null && r4 instanceof Fn && (c = r4.field(u2.field)), i2.push(on(a, c, e3));
      }
      return i2;
    }(t2.fieldTransforms, n3, e2, r3), s = Rn(t2, i.data(), o);
    return new Fn(t2.key, i.version, s, {
      Ye: true
    });
  }(t, e, r2, n2) : function(t2, e2) {
    return bn(t2.Ke, e2) ? new qn(t2.key, gt.min()) : e2;
  }(t, e);
}
function Tn(t, e) {
  return t instanceof kn ? function(t2, e2) {
    for (var n2 = null, r2 = 0, i = t2.fieldTransforms; r2 < i.length; r2++) {
      var o = i[r2], s = e2 instanceof Fn ? e2.field(o.field) : void 0, u2 = un(o.transform, s || null);
      u2 != null && (n2 = n2 == null ? new Vn().set(o.field, u2) : n2.set(o.field, u2));
    }
    return n2 ? n2.Je() : null;
  }(t, e) : null;
}
function Nn(t, e) {
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ke.isEqual(e.Ke) && (t.type === 0 ? t.value.isEqual(e.value) : t.type === 1 ? t.data.isEqual(e.data) && t.Qe.isEqual(e.Qe) : t.type !== 2 || ut(t.fieldTransforms, t.fieldTransforms, function(t2, e2) {
    return function(t3, e3) {
      return t3.field.isEqual(e3.field) && function(t4, e4) {
        return t4 instanceof cn && e4 instanceof cn || t4 instanceof fn && e4 instanceof fn ? ut(t4.elements, e4.elements, he) : t4 instanceof pn && e4 instanceof pn ? he(t4.We, e4.We) : t4 instanceof an && e4 instanceof an;
      }(t3.transform, e3.transform);
    }(t2, e2);
  }));
}
function An(t) {
  return t instanceof Fn ? t.version : gt.min();
}
var Sn = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this) || this).key = t, i.value = n3, i.Ke = r2, i.type = 0, i;
  }
  return __extends(n2, e), n2;
}(In), Dn = function(e) {
  function n2(t, n3, r2, i) {
    var o = this;
    return (o = e.call(this) || this).key = t, o.data = n3, o.Qe = r2, o.Ke = i, o.type = 1, o;
  }
  return __extends(n2, e), n2;
}(In);
function xn(t, e) {
  return function(t2, e2) {
    var n2 = new Vn(e2);
    return t2.Qe.fields.forEach(function(e3) {
      if (!e3.m()) {
        var r2 = t2.data.field(e3);
        r2 !== null ? n2.set(e3, r2) : n2.delete(e3);
      }
    }), n2.Je();
  }(t, e instanceof Fn ? e.data() : Pn.empty());
}
var kn = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).key = t, r2.fieldTransforms = n3, r2.type = 2, r2.Ke = wn.exists(true), r2;
  }
  return __extends(n2, e), n2;
}(In);
function On(t, e) {
  return e;
}
function Rn(t, e, n2) {
  for (var r2 = new Vn(e), i = 0; i < t.fieldTransforms.length; i++) {
    var o = t.fieldTransforms[i];
    r2.set(o.field, n2[i]);
  }
  return r2.Je();
}
var Ln = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).key = t, r2.Ke = n3, r2.type = 3, r2;
  }
  return __extends(n2, e), n2;
}(In), Un = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).key = t, r2.Ke = n3, r2.type = 4, r2;
  }
  return __extends(n2, e), n2;
}(In), Pn = function() {
  function t(t2) {
    this.proto = t2;
  }
  return t.empty = function() {
    return new t({
      mapValue: {}
    });
  }, t.prototype.field = function(t2) {
    if (t2.m())
      return this.proto;
    for (var e = this.proto, n2 = 0; n2 < t2.length - 1; ++n2) {
      if (!e.mapValue.fields)
        return null;
      if (!_e(e = e.mapValue.fields[t2.get(n2)]))
        return null;
    }
    return (e = (e.mapValue.fields || {})[t2._()]) || null;
  }, t.prototype.isEqual = function(t2) {
    return he(this.proto, t2.proto);
  }, t;
}(), Vn = function() {
  function t(t2) {
    t2 === void 0 && (t2 = Pn.empty()), this.Xe = t2, this.Ze = new Map();
  }
  return t.prototype.set = function(t2, e) {
    return this.tn(t2, e), this;
  }, t.prototype.delete = function(t2) {
    return this.tn(t2, null), this;
  }, t.prototype.tn = function(t2, e) {
    for (var n2 = this.Ze, r2 = 0; r2 < t2.length - 1; ++r2) {
      var i = t2.get(r2), o = n2.get(i);
      o instanceof Map ? n2 = o : o && ce(o) === 10 ? (o = new Map(Object.entries(o.mapValue.fields || {})), n2.set(i, o), n2 = o) : (o = new Map(), n2.set(i, o), n2 = o);
    }
    n2.set(t2._(), e);
  }, t.prototype.Je = function() {
    var t2 = this.en(C$1.g(), this.Ze);
    return t2 != null ? new Pn(t2) : this.Xe;
  }, t.prototype.en = function(t2, e) {
    var n2 = this, r2 = false, i = this.Xe.field(t2), o = _e(i) ? Object.assign({}, i.mapValue.fields) : {};
    return e.forEach(function(e2, i2) {
      if (e2 instanceof Map) {
        var s = n2.en(t2.child(i2), e2);
        s != null && (o[i2] = s, r2 = true);
      } else
        e2 !== null ? (o[i2] = e2, r2 = true) : o.hasOwnProperty(i2) && (delete o[i2], r2 = true);
    }), r2 ? {
      mapValue: {
        fields: o
      }
    } : null;
  }, t;
}();
function Cn(t) {
  var e = [];
  return R$1(t.fields || {}, function(t2, n2) {
    var r2 = new C$1([t2]);
    if (_e(n2)) {
      var i = Cn(n2.mapValue).fields;
      if (i.length === 0)
        e.push(r2);
      else
        for (var o = 0, s = i; o < s.length; o++) {
          var u2 = s[o];
          e.push(r2.child(u2));
        }
    } else
      e.push(r2);
  }), new yn(e);
}
var Mn = function(t, e) {
  this.key = t, this.version = e;
}, Fn = function(e) {
  function n2(t, n3, r2, i) {
    var o = this;
    return (o = e.call(this, t, n3) || this).nn = r2, o.Ye = !!i.Ye, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
  }
  return __extends(n2, e), n2.prototype.field = function(t) {
    return this.nn.field(t);
  }, n2.prototype.data = function() {
    return this.nn;
  }, n2.prototype.sn = function() {
    return this.nn.proto;
  }, n2.prototype.isEqual = function(t) {
    return t instanceof n2 && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ye === t.Ye && this.hasCommittedMutations === t.hasCommittedMutations && this.nn.isEqual(t.nn);
  }, n2.prototype.toString = function() {
    return "Document(" + this.key + ", " + this.version + ", " + this.nn.toString() + ", {hasLocalMutations: " + this.Ye + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
  }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
    get: function() {
      return this.Ye || this.hasCommittedMutations;
    },
    enumerable: false,
    configurable: true
  }), n2;
}(Mn), qn = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this, t, n3) || this).hasCommittedMutations = !(!r2 || !r2.hasCommittedMutations), i;
  }
  return __extends(n2, e), n2.prototype.toString = function() {
    return "NoDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
    get: function() {
      return this.hasCommittedMutations;
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.isEqual = function(t) {
    return t instanceof n2 && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
  }, n2;
}(Mn), Gn = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2.prototype.toString = function() {
    return "UnknownDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(n2.prototype, "hasPendingWrites", {
    get: function() {
      return true;
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.isEqual = function(t) {
    return t instanceof n2 && t.version.isEqual(this.version) && t.key.isEqual(this.key);
  }, n2;
}(Mn), Bn = function(t, e, n2, r2, i, o, s, u2) {
  e === void 0 && (e = null), n2 === void 0 && (n2 = []), r2 === void 0 && (r2 = []), i === void 0 && (i = null), o === void 0 && (o = "F"), s === void 0 && (s = null), u2 === void 0 && (u2 = null), this.path = t, this.collectionGroup = e, this.rn = n2, this.filters = r2, this.limit = i, this.on = o, this.startAt = s, this.endAt = u2, this.an = null, this.cn = null, this.startAt, this.endAt;
};
function jn(t, e, n2, r2, i, o, s, u2) {
  return new Bn(t, e, n2, r2, i, o, s, u2);
}
function zn(t) {
  return new Bn(t);
}
function Qn(t) {
  return !wt(t.limit) && t.on === "F";
}
function Kn(t) {
  return !wt(t.limit) && t.on === "L";
}
function Wn(t) {
  return t.rn.length > 0 ? t.rn[0].field : null;
}
function Yn(t) {
  for (var e = 0, n2 = t.filters; e < n2.length; e++) {
    var r2 = n2[e];
    if (r2.un())
      return r2.field;
  }
  return null;
}
function Hn(t) {
  return t.collectionGroup !== null;
}
function $n(t) {
  var e = k$1(t);
  if (e.an === null) {
    e.an = [];
    var n2 = Yn(e), r2 = Wn(e);
    if (n2 !== null && r2 === null)
      n2.p() || e.an.push(new wr(n2)), e.an.push(new wr(C$1.v(), "asc"));
    else {
      for (var i = false, o = 0, s = e.rn; o < s.length; o++) {
        var u2 = s[o];
        e.an.push(u2), u2.field.p() && (i = true);
      }
      if (!i) {
        var a = e.rn.length > 0 ? e.rn[e.rn.length - 1].dir : "asc";
        e.an.push(new wr(C$1.v(), a));
      }
    }
  }
  return e.an;
}
function Xn(t) {
  var e = k$1(t);
  if (!e.cn)
    if (e.on === "F")
      e.cn = _t(e.path, e.collectionGroup, $n(e), e.filters, e.limit, e.startAt, e.endAt);
    else {
      for (var n2 = [], r2 = 0, i = $n(e); r2 < i.length; r2++) {
        var o = i[r2], s = o.dir === "desc" ? "asc" : "desc";
        n2.push(new wr(o.field, s));
      }
      var u2 = e.endAt ? new vr(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new vr(e.startAt.position, !e.startAt.before) : null;
      e.cn = _t(e.path, e.collectionGroup, n2, e.filters, e.limit, u2, a);
    }
  return e.cn;
}
function Jn(t, e, n2) {
  return new Bn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), e, n2, t.startAt, t.endAt);
}
function Zn(t, e) {
  return new Bn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), t.limit, t.on, e, t.endAt);
}
function tr(t, e) {
  return new Bn(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), t.limit, t.on, t.startAt, e);
}
function er(t, e) {
  return Nt(Xn(t), Xn(e)) && t.on === e.on;
}
function nr(t) {
  return Tt(Xn(t)) + "|lt:" + t.on;
}
function rr(t) {
  return "Query(target=" + function(t2) {
    var e = t2.path.R();
    return t2.collectionGroup !== null && (e += " collectionGroup=" + t2.collectionGroup), t2.filters.length > 0 && (e += ", filters: [" + t2.filters.map(function(t3) {
      return (e2 = t3).field.R() + " " + e2.op + " " + de(e2.value);
      var e2;
    }).join(", ") + "]"), wt(t2.limit) || (e += ", limit: " + t2.limit), t2.orderBy.length > 0 && (e += ", orderBy: [" + t2.orderBy.map(function(t3) {
      return (e2 = t3).field.R() + " (" + e2.dir + ")";
      var e2;
    }).join(", ") + "]"), t2.startAt && (e += ", startAt: " + yr(t2.startAt)), t2.endAt && (e += ", endAt: " + yr(t2.endAt)), "Target(" + e + ")";
  }(Xn(t)) + "; limitType=" + t.on + ")";
}
function ir(t, e) {
  return function(t2, e2) {
    var n2 = e2.key.path;
    return t2.collectionGroup !== null ? e2.key.N(t2.collectionGroup) && t2.path.T(n2) : M$1.F(t2.path) ? t2.path.isEqual(n2) : t2.path.I(n2);
  }(t, e) && function(t2, e2) {
    for (var n2 = 0, r2 = t2.rn; n2 < r2.length; n2++) {
      var i = r2[n2];
      if (!i.field.p() && e2.field(i.field) === null)
        return false;
    }
    return true;
  }(t, e) && function(t2, e2) {
    for (var n2 = 0, r2 = t2.filters; n2 < r2.length; n2++) {
      if (!r2[n2].matches(e2))
        return false;
    }
    return true;
  }(t, e) && function(t2, e2) {
    return !(t2.startAt && !mr(t2.startAt, $n(t2), e2)) && (!t2.endAt || !mr(t2.endAt, $n(t2), e2));
  }(t, e);
}
function or(t) {
  return function(e, n2) {
    for (var r2 = false, i = 0, o = $n(t); i < o.length; i++) {
      var s = o[i], u2 = br(s, e, n2);
      if (u2 !== 0)
        return u2;
      r2 = r2 || s.field.p();
    }
    return 0;
  };
}
var sr = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this) || this).field = t, i.op = n3, i.value = r2, i;
  }
  return __extends(n2, e), n2.create = function(t, e2, r2) {
    if (t.p())
      return e2 === "in" || e2 === "not-in" ? this.hn(t, e2, r2) : new ur(t, e2, r2);
    if (Ie(r2)) {
      if (e2 !== "==" && e2 !== "!=")
        throw new I$1(b.INVALID_ARGUMENT, "Invalid query. Null only supports '==' and '!=' comparisons.");
      return new n2(t, e2, r2);
    }
    if (Ee(r2)) {
      if (e2 !== "==" && e2 !== "!=")
        throw new I$1(b.INVALID_ARGUMENT, "Invalid query. NaN only supports '==' and '!=' comparisons.");
      return new n2(t, e2, r2);
    }
    return e2 === "array-contains" ? new fr(t, r2) : e2 === "in" ? new lr(t, r2) : e2 === "not-in" ? new pr(t, r2) : e2 === "array-contains-any" ? new dr(t, r2) : new n2(t, e2, r2);
  }, n2.hn = function(t, e2, n3) {
    return e2 === "in" ? new ar(t, n3) : new cr(t, n3);
  }, n2.prototype.matches = function(t) {
    var e2 = t.field(this.field);
    return this.op === "!=" ? e2 !== null && this.ln(le(e2, this.value)) : e2 !== null && ce(this.value) === ce(e2) && this.ln(le(e2, this.value));
  }, n2.prototype.ln = function(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return t === 0;
      case "!=":
        return t !== 0;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return D$1();
    }
  }, n2.prototype.un = function() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }, n2;
}(function() {
});
var ur = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this, t, n3, r2) || this).key = M$1.C(r2.referenceValue), i;
  }
  return __extends(n2, e), n2.prototype.matches = function(t) {
    var e2 = M$1.i(t.key, this.key);
    return this.ln(e2);
  }, n2;
}(sr), ar = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t, "in", n3) || this).keys = hr("in", n3), r2;
  }
  return __extends(n2, e), n2.prototype.matches = function(t) {
    return this.keys.some(function(e2) {
      return e2.isEqual(t.key);
    });
  }, n2;
}(sr), cr = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t, "not-in", n3) || this).keys = hr("not-in", n3), r2;
  }
  return __extends(n2, e), n2.prototype.matches = function(t) {
    return !this.keys.some(function(e2) {
      return e2.isEqual(t.key);
    });
  }, n2;
}(sr);
function hr(t, e) {
  var n2;
  return (((n2 = e.arrayValue) === null || n2 === void 0 ? void 0 : n2.values) || []).map(function(t2) {
    return M$1.C(t2.referenceValue);
  });
}
var fr = function(e) {
  function n2(t, n3) {
    return e.call(this, t, "array-contains", n3) || this;
  }
  return __extends(n2, e), n2.prototype.matches = function(t) {
    var e2 = t.field(this.field);
    return be(e2) && fe(e2.arrayValue, this.value);
  }, n2;
}(sr), lr = function(e) {
  function n2(t, n3) {
    return e.call(this, t, "in", n3) || this;
  }
  return __extends(n2, e), n2.prototype.matches = function(t) {
    var e2 = t.field(this.field);
    return e2 !== null && fe(this.value.arrayValue, e2);
  }, n2;
}(sr), pr = function(e) {
  function n2(t, n3) {
    return e.call(this, t, "not-in", n3) || this;
  }
  return __extends(n2, e), n2.prototype.matches = function(t) {
    if (fe(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    var e2 = t.field(this.field);
    return e2 !== null && !fe(this.value.arrayValue, e2);
  }, n2;
}(sr), dr = function(e) {
  function n2(t, n3) {
    return e.call(this, t, "array-contains-any", n3) || this;
  }
  return __extends(n2, e), n2.prototype.matches = function(t) {
    var e2 = this, n3 = t.field(this.field);
    return !(!be(n3) || !n3.arrayValue.values) && n3.arrayValue.values.some(function(t2) {
      return fe(e2.value.arrayValue, t2);
    });
  }, n2;
}(sr), vr = function(t, e) {
  this.position = t, this.before = e;
};
function yr(t) {
  return (t.before ? "b" : "a") + ":" + t.position.map(function(t2) {
    return de(t2);
  }).join(",");
}
function mr(t, e, n2) {
  for (var r2 = 0, i = 0; i < t.position.length; i++) {
    var o = e[i], s = t.position[i];
    if (r2 = o.field.p() ? M$1.i(M$1.C(s.referenceValue), n2.key) : le(s, n2.field(o.field)), o.dir === "desc" && (r2 *= -1), r2 !== 0)
      break;
  }
  return t.before ? r2 <= 0 : r2 < 0;
}
function gr(t, e) {
  if (t === null)
    return e === null;
  if (e === null)
    return false;
  if (t.before !== e.before || t.position.length !== e.position.length)
    return false;
  for (var n2 = 0; n2 < t.position.length; n2++)
    if (!he(t.position[n2], e.position[n2]))
      return false;
  return true;
}
var wr = function(t, e) {
  e === void 0 && (e = "asc"), this.field = t, this.dir = e;
};
function br(t, e, n2) {
  var r2 = t.field.p() ? M$1.i(e.key, n2.key) : function(t2, e2, n3) {
    var r3 = e2.field(t2), i = n3.field(t2);
    return r3 !== null && i !== null ? le(r3, i) : D$1();
  }(t.field, e, n2);
  switch (t.dir) {
    case "asc":
      return r2;
    case "desc":
      return -1 * r2;
    default:
      return D$1();
  }
}
function Ir(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Er = function() {
  var t = this;
  this.promise = new Promise(function(e, n2) {
    t.resolve = e, t.reject = n2;
  });
}, _r = function() {
  function t(t2, e, n2, r2, i) {
    n2 === void 0 && (n2 = 1e3), r2 === void 0 && (r2 = 1.5), i === void 0 && (i = 6e4), this._n = t2, this.fn = e, this.dn = n2, this.wn = r2, this.mn = i, this.Tn = 0, this.En = null, this.In = Date.now(), this.reset();
  }
  return t.prototype.reset = function() {
    this.Tn = 0;
  }, t.prototype.An = function() {
    this.Tn = this.mn;
  }, t.prototype.Rn = function(t2) {
    var e = this;
    this.cancel();
    var n2 = Math.floor(this.Tn + this.Pn()), r2 = Math.max(0, Date.now() - this.In), i = Math.max(0, n2 - r2);
    i > 0 && T$1("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Tn + " ms, delay with jitter: " + n2 + " ms, last attempt: " + r2 + " ms ago)"), this.En = this._n.gn(this.fn, i, function() {
      return e.In = Date.now(), t2();
    }), this.Tn *= this.wn, this.Tn < this.dn && (this.Tn = this.dn), this.Tn > this.mn && (this.Tn = this.mn);
  }, t.prototype.yn = function() {
    this.En !== null && (this.En.Vn(), this.En = null);
  }, t.prototype.cancel = function() {
    this.En !== null && (this.En.cancel(), this.En = null);
  }, t.prototype.Pn = function() {
    return (Math.random() - 0.5) * this.Tn;
  }, t;
}(), Tr = function() {
  function t(t2) {
    var e = this;
    this.pn = null, this.bn = null, this.result = void 0, this.error = void 0, this.vn = false, this.Sn = false, t2(function(t3) {
      e.vn = true, e.result = t3, e.pn && e.pn(t3);
    }, function(t3) {
      e.vn = true, e.error = t3, e.bn && e.bn(t3);
    });
  }
  return t.prototype.catch = function(t2) {
    return this.next(void 0, t2);
  }, t.prototype.next = function(e, n2) {
    var r2 = this;
    return this.Sn && D$1(), this.Sn = true, this.vn ? this.error ? this.Dn(n2, this.error) : this.Cn(e, this.result) : new t(function(t2, i) {
      r2.pn = function(n3) {
        r2.Cn(e, n3).next(t2, i);
      }, r2.bn = function(e2) {
        r2.Dn(n2, e2).next(t2, i);
      };
    });
  }, t.prototype.Nn = function() {
    var t2 = this;
    return new Promise(function(e, n2) {
      t2.next(e, n2);
    });
  }, t.prototype.Fn = function(e) {
    try {
      var n2 = e();
      return n2 instanceof t ? n2 : t.resolve(n2);
    } catch (e2) {
      return t.reject(e2);
    }
  }, t.prototype.Cn = function(e, n2) {
    return e ? this.Fn(function() {
      return e(n2);
    }) : t.resolve(n2);
  }, t.prototype.Dn = function(e, n2) {
    return e ? this.Fn(function() {
      return e(n2);
    }) : t.reject(n2);
  }, t.resolve = function(e) {
    return new t(function(t2, n2) {
      t2(e);
    });
  }, t.reject = function(e) {
    return new t(function(t2, n2) {
      n2(e);
    });
  }, t.$n = function(e) {
    return new t(function(t2, n2) {
      var r2 = 0, i = 0, o = false;
      e.forEach(function(e2) {
        ++r2, e2.next(function() {
          ++i, o && i === r2 && t2();
        }, function(t3) {
          return n2(t3);
        });
      }), o = true, i === r2 && t2();
    });
  }, t.xn = function(e) {
    for (var n2 = t.resolve(false), r2 = function(e2) {
      n2 = n2.next(function(n3) {
        return n3 ? t.resolve(n3) : e2();
      });
    }, i = 0, o = e; i < o.length; i++) {
      r2(o[i]);
    }
    return n2;
  }, t.forEach = function(t2, e) {
    var n2 = this, r2 = [];
    return t2.forEach(function(t3, i) {
      r2.push(e.call(n2, t3, i));
    }), this.$n(r2);
  }, t;
}(), Nr = function() {
  function t(e, n2, r2) {
    this.name = e, this.version = n2, this.kn = r2, t.Mn(getUA()) === 12.2 && N$1("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  return t.delete = function(t2) {
    return T$1("SimpleDb", "Removing database:", t2), Or(window.indexedDB.deleteDatabase(t2)).Nn();
  }, t.On = function() {
    if (typeof indexedDB == "undefined")
      return false;
    if (t.Ln())
      return true;
    var e = getUA(), n2 = t.Mn(e), r2 = 0 < n2 && n2 < 10, i = t.Bn(e), o = 0 < i && i < 4.5;
    return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r2 || o);
  }, t.Ln = function() {
    var t2;
    return typeof process != "undefined" && ((t2 = {NODE_ENV: "production"}) === null || t2 === void 0 ? void 0 : t2.qn) === "YES";
  }, t.Un = function(t2, e) {
    return t2.store(e);
  }, t.Mn = function(t2) {
    var e = t2.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n2 = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }, t.Bn = function(t2) {
    var e = t2.match(/Android ([\d.]+)/i), n2 = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n2);
  }, t.prototype.Qn = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.db ? [3, 2] : (T$1("SimpleDb", "Opening database:", this.name), t2 = this, [4, new Promise(function(t3, n3) {
              var r2 = indexedDB.open(e.name, e.version);
              r2.onsuccess = function(e2) {
                var n4 = e2.target.result;
                t3(n4);
              }, r2.onblocked = function() {
                n3(new Sr("Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
              }, r2.onerror = function(t4) {
                var e2 = t4.target.error;
                e2.name === "VersionError" ? n3(new I$1(b.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n3(new Sr(e2));
              }, r2.onupgradeneeded = function(t4) {
                T$1("SimpleDb", 'Database "' + e.name + '" requires upgrade from version:', t4.oldVersion);
                var n4 = t4.target.result;
                e.kn.createOrUpgrade(n4, r2.transaction, t4.oldVersion, e.version).next(function() {
                  T$1("SimpleDb", "Database upgrade to version " + e.version + " complete");
                });
              };
            })]);
          case 1:
            t2.db = n2.sent(), n2.label = 2;
          case 2:
            return [2, (this.Wn && (this.db.onversionchange = function(t3) {
              return e.Wn(t3);
            }), this.db)];
        }
      });
    });
  }, t.prototype.jn = function(t2) {
    this.Wn = t2, this.db && (this.db.onversionchange = function(e) {
      return t2(e);
    });
  }, t.prototype.runTransaction = function(t2, r2, i) {
    return __awaiter(this, void 0, void 0, function() {
      var e, o, s, u2, a;
      return __generator(this, function(c) {
        switch (c.label) {
          case 0:
            e = t2 === "readonly", o = 0, s = function() {
              var t3, s2, a2, c2, h;
              return __generator(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    ++o, n2.label = 1;
                  case 1:
                    return n2.trys.push([1, 4, , 5]), [4, u2.Qn()];
                  case 2:
                    return u2.db = n2.sent(), t3 = xr.open(u2.db, e ? "readonly" : "readwrite", r2), s2 = i(t3).catch(function(e2) {
                      return t3.abort(e2), Tr.reject(e2);
                    }).Nn(), a2 = {}, s2.catch(function() {
                    }), [4, t3.Kn];
                  case 3:
                    return [2, (a2.value = (n2.sent(), s2), a2)];
                  case 4:
                    return c2 = n2.sent(), h = c2.name !== "FirebaseError" && o < 3, T$1("SimpleDb", "Transaction failed with error:", c2.message, "Retrying:", h), u2.close(), h ? [3, 5] : [2, {
                      value: Promise.reject(c2)
                    }];
                  case 5:
                    return [2];
                }
              });
            }, u2 = this, c.label = 1;
          case 1:
            return [5, s()];
          case 2:
            if (typeof (a = c.sent()) == "object")
              return [2, a.value];
            c.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.close = function() {
    this.db && this.db.close(), this.db = void 0;
  }, t;
}(), Ar = function() {
  function t(t2) {
    this.Gn = t2, this.zn = false, this.Hn = null;
  }
  return Object.defineProperty(t.prototype, "vn", {
    get: function() {
      return this.zn;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "Yn", {
    get: function() {
      return this.Hn;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "cursor", {
    set: function(t2) {
      this.Gn = t2;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.done = function() {
    this.zn = true;
  }, t.prototype.Jn = function(t2) {
    this.Hn = t2;
  }, t.prototype.delete = function() {
    return Or(this.Gn.delete());
  }, t;
}(), Sr = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this, b.UNAVAILABLE, "IndexedDB transaction failed: " + t) || this).name = "IndexedDbTransactionError", n3;
  }
  return __extends(n2, e), n2;
}(I$1);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dr(t) {
  return t.name === "IndexedDbTransactionError";
}
var xr = function() {
  function t(t2) {
    var e = this;
    this.transaction = t2, this.aborted = false, this.Xn = new Er(), this.transaction.oncomplete = function() {
      e.Xn.resolve();
    }, this.transaction.onabort = function() {
      t2.error ? e.Xn.reject(new Sr(t2.error)) : e.Xn.resolve();
    }, this.transaction.onerror = function(t3) {
      var n2 = Lr(t3.target.error);
      e.Xn.reject(new Sr(n2));
    };
  }
  return t.open = function(e, n2, r2) {
    try {
      return new t(e.transaction(r2, n2));
    } catch (e2) {
      throw new Sr(e2);
    }
  }, Object.defineProperty(t.prototype, "Kn", {
    get: function() {
      return this.Xn.promise;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.abort = function(t2) {
    t2 && this.Xn.reject(t2), this.aborted || (T$1("SimpleDb", "Aborting transaction:", t2 ? t2.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
  }, t.prototype.store = function(t2) {
    var e = this.transaction.objectStore(t2);
    return new kr(e);
  }, t;
}(), kr = function() {
  function t(t2) {
    this.store = t2;
  }
  return t.prototype.put = function(t2, e) {
    var n2;
    return e !== void 0 ? (T$1("SimpleDb", "PUT", this.store.name, t2, e), n2 = this.store.put(e, t2)) : (T$1("SimpleDb", "PUT", this.store.name, "<auto-key>", t2), n2 = this.store.put(t2)), Or(n2);
  }, t.prototype.add = function(t2) {
    return T$1("SimpleDb", "ADD", this.store.name, t2, t2), Or(this.store.add(t2));
  }, t.prototype.get = function(t2) {
    var e = this;
    return Or(this.store.get(t2)).next(function(n2) {
      return n2 === void 0 && (n2 = null), T$1("SimpleDb", "GET", e.store.name, t2, n2), n2;
    });
  }, t.prototype.delete = function(t2) {
    return T$1("SimpleDb", "DELETE", this.store.name, t2), Or(this.store.delete(t2));
  }, t.prototype.count = function() {
    return T$1("SimpleDb", "COUNT", this.store.name), Or(this.store.count());
  }, t.prototype.Zn = function(t2, e) {
    var n2 = this.cursor(this.options(t2, e)), r2 = [];
    return this.ts(n2, function(t3, e2) {
      r2.push(e2);
    }).next(function() {
      return r2;
    });
  }, t.prototype.es = function(t2, e) {
    T$1("SimpleDb", "DELETE ALL", this.store.name);
    var n2 = this.options(t2, e);
    n2.ns = false;
    var r2 = this.cursor(n2);
    return this.ts(r2, function(t3, e2, n3) {
      return n3.delete();
    });
  }, t.prototype.ss = function(t2, e) {
    var n2;
    e ? n2 = t2 : (n2 = {}, e = t2);
    var r2 = this.cursor(n2);
    return this.ts(r2, e);
  }, t.prototype.rs = function(t2) {
    var e = this.cursor({});
    return new Tr(function(n2, r2) {
      e.onerror = function(t3) {
        var e2 = Lr(t3.target.error);
        r2(e2);
      }, e.onsuccess = function(e2) {
        var r3 = e2.target.result;
        r3 ? t2(r3.primaryKey, r3.value).next(function(t3) {
          t3 ? r3.continue() : n2();
        }) : n2();
      };
    });
  }, t.prototype.ts = function(t2, e) {
    var n2 = [];
    return new Tr(function(r2, i) {
      t2.onerror = function(t3) {
        i(t3.target.error);
      }, t2.onsuccess = function(t3) {
        var i2 = t3.target.result;
        if (i2) {
          var o = new Ar(i2), s = e(i2.primaryKey, i2.value, o);
          if (s instanceof Tr) {
            var u2 = s.catch(function(t4) {
              return o.done(), Tr.reject(t4);
            });
            n2.push(u2);
          }
          o.vn ? r2() : o.Yn === null ? i2.continue() : i2.continue(o.Yn);
        } else
          r2();
      };
    }).next(function() {
      return Tr.$n(n2);
    });
  }, t.prototype.options = function(t2, e) {
    var n2 = void 0;
    return t2 !== void 0 && (typeof t2 == "string" ? n2 = t2 : e = t2), {
      index: n2,
      range: e
    };
  }, t.prototype.cursor = function(t2) {
    var e = "next";
    if (t2.reverse && (e = "prev"), t2.index) {
      var n2 = this.store.index(t2.index);
      return t2.ns ? n2.openKeyCursor(t2.range, e) : n2.openCursor(t2.range, e);
    }
    return this.store.openCursor(t2.range, e);
  }, t;
}();
function Or(t) {
  return new Tr(function(e, n2) {
    t.onsuccess = function(t2) {
      var n3 = t2.target.result;
      e(n3);
    }, t.onerror = function(t2) {
      var e2 = Lr(t2.target.error);
      n2(e2);
    };
  });
}
var Rr = false;
function Lr(t) {
  var e = Nr.Mn(getUA());
  if (e >= 12.2 && e < 13) {
    var n2 = "An internal error was encountered in the Indexed Database server";
    if (t.message.indexOf(n2) >= 0) {
      var r2 = new I$1("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n2 + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
      return Rr || (Rr = true, setTimeout(function() {
        throw r2;
      }, 0)), r2;
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ur() {
  return typeof window != "undefined" ? window : null;
}
function Pr() {
  return typeof document != "undefined" ? document : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vr = function() {
  function t(t2, e, n2, r2, i) {
    this.os = t2, this.fn = e, this.cs = n2, this.op = r2, this.us = i, this.hs = new Er(), this.then = this.hs.promise.then.bind(this.hs.promise), this.hs.promise.catch(function(t3) {
    });
  }
  return t.ls = function(e, n2, r2, i, o) {
    var s = new t(e, n2, Date.now() + r2, i, o);
    return s.start(r2), s;
  }, t.prototype.start = function(t2) {
    var e = this;
    this._s = setTimeout(function() {
      return e.fs();
    }, t2);
  }, t.prototype.Vn = function() {
    return this.fs();
  }, t.prototype.cancel = function(t2) {
    this._s !== null && (this.clearTimeout(), this.hs.reject(new I$1(b.CANCELLED, "Operation cancelled" + (t2 ? ": " + t2 : ""))));
  }, t.prototype.fs = function() {
    var t2 = this;
    this.os.ds(function() {
      return t2._s !== null ? (t2.clearTimeout(), t2.op().then(function(e) {
        return t2.hs.resolve(e);
      })) : Promise.resolve();
    });
  }, t.prototype.clearTimeout = function() {
    this._s !== null && (this.us(this), clearTimeout(this._s), this._s = null);
  }, t;
}(), Cr = function() {
  function t() {
    var t2 = this;
    this.ws = Promise.resolve(), this.Ts = [], this.Es = false, this.Is = [], this.As = null, this.Rs = false, this.Ps = [], this.gs = new _r(this, "async_queue_retry"), this.ys = function() {
      var e2 = Pr();
      e2 && T$1("AsyncQueue", "Visibility state changed to  ", e2.visibilityState), t2.gs.yn();
    };
    var e = Pr();
    e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this.ys);
  }
  return Object.defineProperty(t.prototype, "Vs", {
    get: function() {
      return this.Es;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.ds = function(t2) {
    this.enqueue(t2);
  }, t.prototype.ps = function(t2) {
    this.bs(), this.vs(t2);
  }, t.prototype.Ss = function() {
    if (!this.Es) {
      this.Es = true;
      var t2 = Pr();
      t2 && typeof t2.removeEventListener == "function" && t2.removeEventListener("visibilitychange", this.ys);
    }
  }, t.prototype.enqueue = function(t2) {
    return this.bs(), this.Es ? new Promise(function(t3) {
    }) : this.vs(t2);
  }, t.prototype.Ds = function(t2) {
    var e = this;
    this.Ts.push(t2), this.ds(function() {
      return e.Cs();
    });
  }, t.prototype.Cs = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (this.Ts.length === 0)
              return [3, 5];
            n2.label = 1;
          case 1:
            return n2.trys.push([1, 3, , 4]), [4, this.Ts[0]()];
          case 2:
            return n2.sent(), this.Ts.shift(), this.gs.reset(), [3, 4];
          case 3:
            if (!Dr(t2 = n2.sent()))
              throw t2;
            return T$1("AsyncQueue", "Operation failed with retryable error: " + t2), [3, 4];
          case 4:
            this.Ts.length > 0 && this.gs.Rn(function() {
              return e.Cs();
            }), n2.label = 5;
          case 5:
            return [2];
        }
      });
    });
  }, t.prototype.vs = function(t2) {
    var e = this, n2 = this.ws.then(function() {
      return e.Rs = true, t2().catch(function(t3) {
        throw e.As = t3, e.Rs = false, N$1("INTERNAL UNHANDLED ERROR: ", function(t4) {
          var e2 = t4.message || "";
          return t4.stack && (e2 = t4.stack.includes(t4.message) ? t4.stack : t4.message + "\n" + t4.stack), e2;
        }(t3)), t3;
      }).then(function(t3) {
        return e.Rs = false, t3;
      });
    });
    return this.ws = n2, n2;
  }, t.prototype.gn = function(t2, e, n2) {
    var r2 = this;
    this.bs(), this.Ps.indexOf(t2) > -1 && (e = 0);
    var i = Vr.ls(this, t2, e, n2, function(t3) {
      return r2.Ns(t3);
    });
    return this.Is.push(i), i;
  }, t.prototype.bs = function() {
    this.As && D$1();
  }, t.prototype.Fs = function() {
  }, t.prototype.$s = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2;
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return [4, t2 = this.ws];
          case 1:
            e.sent(), e.label = 2;
          case 2:
            if (t2 !== this.ws)
              return [3, 0];
            e.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, t.prototype.xs = function(t2) {
    for (var e = 0, n2 = this.Is; e < n2.length; e++) {
      if (n2[e].fn === t2)
        return true;
    }
    return false;
  }, t.prototype.ks = function(t2) {
    var e = this;
    return this.$s().then(function() {
      e.Is.sort(function(t3, e2) {
        return t3.cs - e2.cs;
      });
      for (var n2 = 0, r2 = e.Is; n2 < r2.length; n2++) {
        var i = r2[n2];
        if (i.Vn(), t2 !== "all" && i.fn === t2)
          break;
      }
      return e.$s();
    });
  }, t.prototype.Ms = function(t2) {
    this.Ps.push(t2);
  }, t.prototype.Ns = function(t2) {
    var e = this.Is.indexOf(t2);
    this.Is.splice(e, 1);
  }, t;
}();
function Mr(t, e) {
  if (N$1("AsyncQueue", e + ": " + t), Dr(t))
    return new I$1(b.UNAVAILABLE, e + ": " + t);
  throw t;
}
var Fr = function() {
  this.Os = void 0, this.listeners = [];
}, qr = function() {
  this.Ls = new yt(function(t) {
    return nr(t);
  }, er), this.onlineState = "Unknown", this.Bs = new Set();
};
function Gr(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o, s, u2, a, c;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          if (e = k$1(t), i = r2.query, o = false, (s = e.Ls.get(i)) || (o = true, s = new Fr()), !o)
            return [3, 4];
          n2.label = 1;
        case 1:
          return n2.trys.push([1, 3, , 4]), u2 = s, [4, e.qs(i)];
        case 2:
          return u2.Os = n2.sent(), [3, 4];
        case 3:
          return a = n2.sent(), c = Mr(a, "Initialization of query '" + rr(r2.query) + "' failed"), [2, void r2.onError(c)];
        case 4:
          return e.Ls.set(i, s), s.listeners.push(r2), r2.Us(e.onlineState), s.Os && r2.Qs(s.Os) && Qr(e), [2];
      }
    });
  });
}
function Br(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o, s, u2;
    return __generator(this, function(n2) {
      return e = k$1(t), i = r2.query, o = false, (s = e.Ls.get(i)) && (u2 = s.listeners.indexOf(r2)) >= 0 && (s.listeners.splice(u2, 1), o = s.listeners.length === 0), o ? [2, (e.Ls.delete(i), e.Ws(i))] : [2];
    });
  });
}
function jr(t, e) {
  for (var n2 = k$1(t), r2 = false, i = 0, o = e; i < o.length; i++) {
    var s = o[i], u2 = s.query, a = n2.Ls.get(u2);
    if (a) {
      for (var c = 0, h = a.listeners; c < h.length; c++) {
        h[c].Qs(s) && (r2 = true);
      }
      a.Os = s;
    }
  }
  r2 && Qr(n2);
}
function zr(t, e, n2) {
  var r2 = k$1(t), i = r2.Ls.get(e);
  if (i)
    for (var o = 0, s = i.listeners; o < s.length; o++) {
      s[o].onError(n2);
    }
  r2.Ls.delete(e);
}
function Qr(t) {
  t.Bs.forEach(function(t2) {
    t2.next();
  });
}
var Kr = function() {
  function t(t2, e, n2) {
    this.query = t2, this.js = e, this.Ks = false, this.Gs = null, this.onlineState = "Unknown", this.options = n2 || {};
  }
  return t.prototype.Qs = function(t2) {
    if (!this.options.includeMetadataChanges) {
      for (var e = [], n2 = 0, r2 = t2.docChanges; n2 < r2.length; n2++) {
        var i = r2[n2];
        i.type !== 3 && e.push(i);
      }
      t2 = new $t(t2.query, t2.docs, t2.Ut, e, t2.Qt, t2.fromCache, t2.Wt, true);
    }
    var o = false;
    return this.Ks ? this.zs(t2) && (this.js.next(t2), o = true) : this.Hs(t2, this.onlineState) && (this.Ys(t2), o = true), this.Gs = t2, o;
  }, t.prototype.onError = function(t2) {
    this.js.error(t2);
  }, t.prototype.Us = function(t2) {
    this.onlineState = t2;
    var e = false;
    return this.Gs && !this.Ks && this.Hs(this.Gs, t2) && (this.Ys(this.Gs), e = true), e;
  }, t.prototype.Hs = function(t2, e) {
    if (!t2.fromCache)
      return true;
    var n2 = e !== "Offline";
    return !(this.options.Js && n2 || t2.docs.m() && e !== "Offline");
  }, t.prototype.zs = function(t2) {
    if (t2.docChanges.length > 0)
      return true;
    var e = this.Gs && this.Gs.hasPendingWrites !== t2.hasPendingWrites;
    return !(!t2.Wt && !e) && this.options.includeMetadataChanges === true;
  }, t.prototype.Ys = function(t2) {
    t2 = $t.Kt(t2.query, t2.docs, t2.Qt, t2.fromCache), this.Ks = true, this.js.next(t2);
  }, t;
}(), Wr = function() {
  function t(t2) {
    this.uid = t2;
  }
  return t.prototype.Xs = function() {
    return this.uid != null;
  }, t.prototype.Zs = function() {
    return this.Xs() ? "uid:" + this.uid : "anonymous-user";
  }, t.prototype.isEqual = function(t2) {
    return t2.uid === this.uid;
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wr.UNAUTHENTICATED = new Wr(null), Wr.ti = new Wr("google-credentials-uid"), Wr.ei = new Wr("first-party-uid");
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yr = function() {
  function t(t2, e) {
    var n2 = this;
    this.previousValue = t2, e && (e.ni = function(t3) {
      return n2.si(t3);
    }, this.ii = function(t3) {
      return e.ri(t3);
    });
  }
  return t.prototype.si = function(t2) {
    return this.previousValue = Math.max(t2, this.previousValue), this.previousValue;
  }, t.prototype.next = function() {
    var t2 = ++this.previousValue;
    return this.ii && this.ii(t2), t2;
  }, t;
}();
function Hr(t, e) {
  return "firestore_clients_" + t + "_" + e;
}
function $r(t, e, n2) {
  var r2 = "firestore_mutations_" + t + "_" + n2;
  return e.Xs() && (r2 += "_" + e.uid), r2;
}
function Xr(t, e) {
  return "firestore_targets_" + t + "_" + e;
}
Yr.oi = -1;
var Jr = function() {
  function t(t2, e, n2, r2) {
    this.user = t2, this.batchId = e, this.state = n2, this.error = r2;
  }
  return t.ai = function(e, n2, r2) {
    var i = JSON.parse(r2), o = typeof i == "object" && ["pending", "acknowledged", "rejected"].indexOf(i.state) !== -1 && (i.error === void 0 || typeof i.error == "object"), s = void 0;
    return o && i.error && ((o = typeof i.error.message == "string" && typeof i.error.code == "string") && (s = new I$1(i.error.code, i.error.message))), o ? new t(e, n2, i.state, s) : (N$1("SharedClientState", "Failed to parse mutation state for ID '" + n2 + "': " + r2), null);
  }, t.prototype.ci = function() {
    var t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }, t;
}(), Zr = function() {
  function t(t2, e, n2) {
    this.targetId = t2, this.state = e, this.error = n2;
  }
  return t.ai = function(e, n2) {
    var r2 = JSON.parse(n2), i = typeof r2 == "object" && ["not-current", "current", "rejected"].indexOf(r2.state) !== -1 && (r2.error === void 0 || typeof r2.error == "object"), o = void 0;
    return i && r2.error && ((i = typeof r2.error.message == "string" && typeof r2.error.code == "string") && (o = new I$1(r2.error.code, r2.error.message))), i ? new t(e, r2.state, o) : (N$1("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n2), null);
  }, t.prototype.ci = function() {
    var t2 = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t2.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t2);
  }, t;
}(), ti = function() {
  function t(t2, e) {
    this.clientId = t2, this.activeTargetIds = e;
  }
  return t.ai = function(e, n2) {
    for (var r2 = JSON.parse(n2), i = typeof r2 == "object" && r2.activeTargetIds instanceof Array, o = Wt(), s = 0; i && s < r2.activeTargetIds.length; ++s)
      i = It(r2.activeTargetIds[s]), o = o.add(r2.activeTargetIds[s]);
    return i ? new t(e, o) : (N$1("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n2), null);
  }, t;
}(), ei = function() {
  function t(t2, e) {
    this.clientId = t2, this.onlineState = e;
  }
  return t.ai = function(e) {
    var n2 = JSON.parse(e);
    return typeof n2 == "object" && ["Unknown", "Online", "Offline"].indexOf(n2.onlineState) !== -1 && typeof n2.clientId == "string" ? new t(n2.clientId, n2.onlineState) : (N$1("SharedClientState", "Failed to parse online state: " + e), null);
  }, t;
}(), ni = function() {
  function t() {
    this.activeTargetIds = Wt();
  }
  return t.prototype.ui = function(t2) {
    this.activeTargetIds = this.activeTargetIds.add(t2);
  }, t.prototype.hi = function(t2) {
    this.activeTargetIds = this.activeTargetIds.delete(t2);
  }, t.prototype.ci = function() {
    var t2 = {
      activeTargetIds: this.activeTargetIds.A(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t2);
  }, t;
}(), ri = function() {
  function t(t2, e, n2, r2, i) {
    this.window = t2, this._n = e, this.persistenceKey = n2, this.li = r2, this._i = null, this.fi = null, this.ni = null, this.di = this.wi.bind(this), this.mi = new Lt(st), this.Ti = false, this.Ei = [];
    var o = n2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.Ii = Hr(this.persistenceKey, this.li), this.Ai = function(t3) {
      return "firestore_sequence_number_" + t3;
    }(this.persistenceKey), this.mi = this.mi.rt(this.li, new ni()), this.Ri = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Pi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.gi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.yi = function(t3) {
      return "firestore_online_state_" + t3;
    }(this.persistenceKey), this.window.addEventListener("storage", this.di);
  }
  return t.On = function(t2) {
    return !(!t2 || !t2.localStorage);
  }, t.prototype.start = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e, r2, i, o, s, u2, a, c, h, f, l = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this._i.Vi()];
          case 1:
            for (t2 = n2.sent(), e = 0, r2 = t2; e < r2.length; e++)
              (i = r2[e]) !== this.li && (o = this.getItem(Hr(this.persistenceKey, i))) && (s = ti.ai(i, o)) && (this.mi = this.mi.rt(s.clientId, s));
            for (this.pi(), (u2 = this.storage.getItem(this.yi)) && (a = this.bi(u2)) && this.vi(a), c = 0, h = this.Ei; c < h.length; c++)
              f = h[c], this.wi(f);
            return this.Ei = [], this.window.addEventListener("unload", function() {
              return l.Si();
            }), this.Ti = true, [2];
        }
      });
    });
  }, t.prototype.ri = function(t2) {
    this.setItem(this.Ai, JSON.stringify(t2));
  }, t.prototype.Di = function() {
    return this.Ci(this.mi);
  }, t.prototype.Ni = function(t2) {
    var e = false;
    return this.mi.forEach(function(n2, r2) {
      r2.activeTargetIds.has(t2) && (e = true);
    }), e;
  }, t.prototype.Fi = function(t2) {
    this.$i(t2, "pending");
  }, t.prototype.xi = function(t2, e, n2) {
    this.$i(t2, e, n2), this.ki(t2);
  }, t.prototype.Mi = function(t2) {
    var e = "not-current";
    if (this.Ni(t2)) {
      var n2 = this.storage.getItem(Xr(this.persistenceKey, t2));
      if (n2) {
        var r2 = Zr.ai(t2, n2);
        r2 && (e = r2.state);
      }
    }
    return this.Oi.ui(t2), this.pi(), e;
  }, t.prototype.Li = function(t2) {
    this.Oi.hi(t2), this.pi();
  }, t.prototype.Bi = function(t2) {
    return this.Oi.activeTargetIds.has(t2);
  }, t.prototype.qi = function(t2) {
    this.removeItem(Xr(this.persistenceKey, t2));
  }, t.prototype.Ui = function(t2, e, n2) {
    this.Qi(t2, e, n2);
  }, t.prototype.Wi = function(t2, e, n2) {
    var r2 = this;
    e.forEach(function(t3) {
      r2.ki(t3);
    }), this.currentUser = t2, n2.forEach(function(t3) {
      r2.Fi(t3);
    });
  }, t.prototype.ji = function(t2) {
    this.Ki(t2);
  }, t.prototype.Si = function() {
    this.Ti && (this.window.removeEventListener("storage", this.di), this.removeItem(this.Ii), this.Ti = false);
  }, t.prototype.getItem = function(t2) {
    var e = this.storage.getItem(t2);
    return T$1("SharedClientState", "READ", t2, e), e;
  }, t.prototype.setItem = function(t2, e) {
    T$1("SharedClientState", "SET", t2, e), this.storage.setItem(t2, e);
  }, t.prototype.removeItem = function(t2) {
    T$1("SharedClientState", "REMOVE", t2), this.storage.removeItem(t2);
  }, t.prototype.wi = function(t2) {
    var r2 = this, i = t2;
    if (i.storageArea === this.storage) {
      if (T$1("SharedClientState", "EVENT", i.key, i.newValue), i.key === this.Ii)
        return void N$1("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this._n.Ds(function() {
        return __awaiter(r2, void 0, void 0, function() {
          var t3, e, r3, o, s, u2;
          return __generator(this, function(n2) {
            if (this.Ti) {
              if (i.key !== null)
                if (this.Ri.test(i.key)) {
                  if (i.newValue == null)
                    return t3 = this.Gi(i.key), [2, this.zi(t3, null)];
                  if (e = this.Hi(i.key, i.newValue))
                    return [2, this.zi(e.clientId, e)];
                } else if (this.Pi.test(i.key)) {
                  if (i.newValue !== null && (r3 = this.Yi(i.key, i.newValue)))
                    return [2, this.Ji(r3)];
                } else if (this.gi.test(i.key)) {
                  if (i.newValue !== null && (o = this.Xi(i.key, i.newValue)))
                    return [2, this.Zi(o)];
                } else if (i.key === this.yi) {
                  if (i.newValue !== null && (s = this.bi(i.newValue)))
                    return [2, this.vi(s)];
                } else
                  i.key === this.Ai && (u2 = function(t4) {
                    var e2 = Yr.oi;
                    if (t4 != null)
                      try {
                        var n3 = JSON.parse(t4);
                        x$1(typeof n3 == "number"), e2 = n3;
                      } catch (t5) {
                        N$1("SharedClientState", "Failed to read sequence number from WebStorage", t5);
                      }
                    return e2;
                  }(i.newValue)) !== Yr.oi && this.ni(u2);
            } else
              this.Ei.push(i);
            return [2];
          });
        });
      });
    }
  }, Object.defineProperty(t.prototype, "Oi", {
    get: function() {
      return this.mi.get(this.li);
    },
    enumerable: false,
    configurable: true
  }), t.prototype.pi = function() {
    this.setItem(this.Ii, this.Oi.ci());
  }, t.prototype.$i = function(t2, e, n2) {
    var r2 = new Jr(this.currentUser, t2, e, n2), i = $r(this.persistenceKey, this.currentUser, t2);
    this.setItem(i, r2.ci());
  }, t.prototype.ki = function(t2) {
    var e = $r(this.persistenceKey, this.currentUser, t2);
    this.removeItem(e);
  }, t.prototype.Ki = function(t2) {
    var e = {
      clientId: this.li,
      onlineState: t2
    };
    this.storage.setItem(this.yi, JSON.stringify(e));
  }, t.prototype.Qi = function(t2, e, n2) {
    var r2 = Xr(this.persistenceKey, t2), i = new Zr(t2, e, n2);
    this.setItem(r2, i.ci());
  }, t.prototype.Gi = function(t2) {
    var e = this.Ri.exec(t2);
    return e ? e[1] : null;
  }, t.prototype.Hi = function(t2, e) {
    var n2 = this.Gi(t2);
    return ti.ai(n2, e);
  }, t.prototype.Yi = function(t2, e) {
    var n2 = this.Pi.exec(t2), r2 = Number(n2[1]), i = n2[2] !== void 0 ? n2[2] : null;
    return Jr.ai(new Wr(i), r2, e);
  }, t.prototype.Xi = function(t2, e) {
    var n2 = this.gi.exec(t2), r2 = Number(n2[1]);
    return Zr.ai(r2, e);
  }, t.prototype.bi = function(t2) {
    return ei.ai(t2);
  }, t.prototype.Ji = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        return t2.user.uid === this.currentUser.uid ? [2, this._i.tr(t2.batchId, t2.state, t2.error)] : (T$1("SharedClientState", "Ignoring mutation for non-active user " + t2.user.uid), [2]);
      });
    });
  }, t.prototype.Zi = function(t2) {
    return this._i.er(t2.targetId, t2.state, t2.error);
  }, t.prototype.zi = function(t2, e) {
    var n2 = this, r2 = e ? this.mi.rt(t2, e) : this.mi.remove(t2), i = this.Ci(this.mi), o = this.Ci(r2), s = [], u2 = [];
    return o.forEach(function(t3) {
      i.has(t3) || s.push(t3);
    }), i.forEach(function(t3) {
      o.has(t3) || u2.push(t3);
    }), this._i.nr(s, u2).then(function() {
      n2.mi = r2;
    });
  }, t.prototype.vi = function(t2) {
    this.mi.get(t2.clientId) && this.fi(t2.onlineState);
  }, t.prototype.Ci = function(t2) {
    var e = Wt();
    return t2.forEach(function(t3, n2) {
      e = e.xt(n2.activeTargetIds);
    }), e;
  }, t;
}(), ii = function() {
  function t() {
    this.sr = new ni(), this.ir = {}, this.fi = null, this.ni = null;
  }
  return t.prototype.Fi = function(t2) {
  }, t.prototype.xi = function(t2, e, n2) {
  }, t.prototype.Mi = function(t2) {
    return this.sr.ui(t2), this.ir[t2] || "not-current";
  }, t.prototype.Ui = function(t2, e, n2) {
    this.ir[t2] = e;
  }, t.prototype.Li = function(t2) {
    this.sr.hi(t2);
  }, t.prototype.Bi = function(t2) {
    return this.sr.activeTargetIds.has(t2);
  }, t.prototype.qi = function(t2) {
    delete this.ir[t2];
  }, t.prototype.Di = function() {
    return this.sr.activeTargetIds;
  }, t.prototype.Ni = function(t2) {
    return this.sr.activeTargetIds.has(t2);
  }, t.prototype.start = function() {
    return this.sr = new ni(), Promise.resolve();
  }, t.prototype.Wi = function(t2, e, n2) {
  }, t.prototype.ji = function(t2) {
  }, t.prototype.Si = function() {
  }, t.prototype.ri = function(t2) {
  }, t;
}(), oi = function() {
  function t(t2, e, n2, r2) {
    this.batchId = t2, this.rr = e, this.baseMutations = n2, this.mutations = r2;
  }
  return t.prototype.ar = function(t2, e, n2) {
    for (var r2 = n2.cr, i = 0; i < this.mutations.length; i++) {
      var o = this.mutations[i];
      o.key.isEqual(t2) && (e = En(o, e, r2[i]));
    }
    return e;
  }, t.prototype.ur = function(t2, e) {
    for (var n2 = 0, r2 = this.baseMutations; n2 < r2.length; n2++) {
      var i = r2[n2];
      i.key.isEqual(t2) && (e = _n(i, e, e, this.rr));
    }
    for (var o = e, s = 0, u2 = this.mutations; s < u2.length; s++) {
      var a = u2[s];
      a.key.isEqual(t2) && (e = _n(a, e, o, this.rr));
    }
    return e;
  }, t.prototype.hr = function(t2) {
    var e = this, n2 = t2;
    return this.mutations.forEach(function(r2) {
      var i = e.ur(r2.key, t2.get(r2.key));
      i && (n2 = n2.rt(r2.key, i));
    }), n2;
  }, t.prototype.keys = function() {
    return this.mutations.reduce(function(t2, e) {
      return t2.add(e.key);
    }, Qt());
  }, t.prototype.isEqual = function(t2) {
    return this.batchId === t2.batchId && ut(this.mutations, t2.mutations, function(t3, e) {
      return Nn(t3, e);
    }) && ut(this.baseMutations, t2.baseMutations, function(t3, e) {
      return Nn(t3, e);
    });
  }, t;
}(), si = function() {
  function t(t2, e, n2, r2) {
    this.batch = t2, this.lr = e, this.cr = n2, this._r = r2;
  }
  return t.from = function(e, n2, r2) {
    x$1(e.mutations.length === r2.length);
    for (var i = jt, o = e.mutations, s = 0; s < o.length; s++)
      i = i.rt(o[s].key, r2[s].version);
    return new t(e, n2, r2, i);
  }, t;
}(), ui = function() {
  function t() {
    this.dr = new yt(function(t2) {
      return t2.toString();
    }, function(t2, e) {
      return t2.isEqual(e);
    }), this.wr = false;
  }
  return Object.defineProperty(t.prototype, "readTime", {
    get: function() {
      return this.mr;
    },
    set: function(t2) {
      this.mr = t2;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.Tr = function(t2, e) {
    this.Er(), this.readTime = e, this.dr.set(t2.key, t2);
  }, t.prototype.Ir = function(t2, e) {
    this.Er(), e && (this.readTime = e), this.dr.set(t2, null);
  }, t.prototype.Ar = function(t2, e) {
    this.Er();
    var n2 = this.dr.get(e);
    return n2 !== void 0 ? Tr.resolve(n2) : this.Rr(t2, e);
  }, t.prototype.getEntries = function(t2, e) {
    return this.Pr(t2, e);
  }, t.prototype.apply = function(t2) {
    return this.Er(), this.wr = true, this.gr(t2);
  }, t.prototype.Er = function() {
  }, t;
}(), ai = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", ci = function() {
  function t() {
    this.yr = [];
  }
  return t.prototype.Vr = function(t2) {
    this.yr.push(t2);
  }, t.prototype.pr = function() {
    this.yr.forEach(function(t2) {
      return t2();
    });
  }, t;
}(), hi = function() {
  function t(t2, e, n2) {
    this.br = t2, this.vr = e, this.Sr = n2;
  }
  return t.prototype.Dr = function(t2, e) {
    var n2 = this;
    return this.vr.Cr(t2, e).next(function(r2) {
      return n2.Nr(t2, e, r2);
    });
  }, t.prototype.Nr = function(t2, e, n2) {
    return this.br.Ar(t2, e).next(function(t3) {
      for (var r2 = 0, i = n2; r2 < i.length; r2++) {
        t3 = i[r2].ur(e, t3);
      }
      return t3;
    });
  }, t.prototype.Fr = function(t2, e, n2) {
    var r2 = qt();
    return e.forEach(function(t3, e2) {
      for (var i = 0, o = n2; i < o.length; i++) {
        e2 = o[i].ur(t3, e2);
      }
      r2 = r2.rt(t3, e2);
    }), r2;
  }, t.prototype.$r = function(t2, e) {
    var n2 = this;
    return this.br.getEntries(t2, e).next(function(e2) {
      return n2.kr(t2, e2);
    });
  }, t.prototype.kr = function(t2, e) {
    var n2 = this;
    return this.vr.Mr(t2, e).next(function(r2) {
      var i = n2.Fr(t2, e, r2), o = Ft();
      return i.forEach(function(t3, e2) {
        e2 || (e2 = new qn(t3, gt.min())), o = o.rt(t3, e2);
      }), o;
    });
  }, t.prototype.Or = function(t2, e, n2) {
    return function(t3) {
      return M$1.F(t3.path) && t3.collectionGroup === null && t3.filters.length === 0;
    }(e) ? this.Lr(t2, e.path) : Hn(e) ? this.Br(t2, e, n2) : this.qr(t2, e, n2);
  }, t.prototype.Lr = function(t2, e) {
    return this.Dr(t2, new M$1(e)).next(function(t3) {
      var e2 = Bt();
      return t3 instanceof Fn && (e2 = e2.rt(t3.key, t3)), e2;
    });
  }, t.prototype.Br = function(t2, e, n2) {
    var r2 = this, i = e.collectionGroup, o = Bt();
    return this.Sr.Ur(t2, i).next(function(s) {
      return Tr.forEach(s, function(s2) {
        var u2 = function(t3, e2) {
          return new Bn(e2, null, t3.rn.slice(), t3.filters.slice(), t3.limit, t3.on, t3.startAt, t3.endAt);
        }(e, s2.child(i));
        return r2.qr(t2, u2, n2).next(function(t3) {
          t3.forEach(function(t4, e2) {
            o = o.rt(t4, e2);
          });
        });
      }).next(function() {
        return o;
      });
    });
  }, t.prototype.qr = function(t2, e, n2) {
    var r2, i, o = this;
    return this.br.Or(t2, e, n2).next(function(n3) {
      return r2 = n3, o.vr.Qr(t2, e);
    }).next(function(e2) {
      return i = e2, o.Wr(t2, i, r2).next(function(t3) {
        r2 = t3;
        for (var e3 = 0, n3 = i; e3 < n3.length; e3++)
          for (var o2 = n3[e3], s = 0, u2 = o2.mutations; s < u2.length; s++) {
            var a = u2[s], c = a.key, h = r2.get(c), f = _n(a, h, h, o2.rr);
            r2 = f instanceof Fn ? r2.rt(c, f) : r2.remove(c);
          }
      });
    }).next(function() {
      return r2.forEach(function(t3, n3) {
        ir(e, n3) || (r2 = r2.remove(t3));
      }), r2;
    });
  }, t.prototype.Wr = function(t2, e, n2) {
    for (var r2 = Qt(), i = 0, o = e; i < o.length; i++)
      for (var s = 0, u2 = o[i].mutations; s < u2.length; s++) {
        var a = u2[s];
        a instanceof Dn && n2.get(a.key) === null && (r2 = r2.add(a.key));
      }
    var c = n2;
    return this.br.getEntries(t2, r2).next(function(t3) {
      return t3.forEach(function(t4, e2) {
        e2 !== null && e2 instanceof Fn && (c = c.rt(t4, e2));
      }), c;
    });
  }, t;
}(), fi = function() {
  function t(t2, e, n2, r2) {
    this.targetId = t2, this.fromCache = e, this.jr = n2, this.Kr = r2;
  }
  return t.Gr = function(e, n2) {
    for (var r2 = Qt(), i = Qt(), o = 0, s = n2.docChanges; o < s.length; o++) {
      var u2 = s[o];
      switch (u2.type) {
        case 0:
          r2 = r2.add(u2.doc.key);
          break;
        case 1:
          i = i.add(u2.doc.key);
      }
    }
    return new t(e, n2.fromCache, r2, i);
  }, t;
}();
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function li(t, e) {
  var n2 = t[0], r2 = t[1], i = e[0], o = e[1], s = st(n2, i);
  return s === 0 ? st(r2, o) : s;
}
var pi = function() {
  function t(t2) {
    this.zr = t2, this.buffer = new Vt(li), this.Hr = 0;
  }
  return t.prototype.Yr = function() {
    return ++this.Hr;
  }, t.prototype.Jr = function(t2) {
    var e = [t2, this.Yr()];
    if (this.buffer.size < this.zr)
      this.buffer = this.buffer.add(e);
    else {
      var n2 = this.buffer.last();
      li(e, n2) < 0 && (this.buffer = this.buffer.delete(n2).add(e));
    }
  }, Object.defineProperty(t.prototype, "maxValue", {
    get: function() {
      return this.buffer.last()[0];
    },
    enumerable: false,
    configurable: true
  }), t;
}(), di = {
  Xr: false,
  Zr: 0,
  eo: 0,
  no: 0
}, vi = function() {
  function t(t2, e, n2) {
    this.so = t2, this.io = e, this.ro = n2;
  }
  return t.oo = function(e) {
    return new t(e, t.ao, t.co);
  }, t;
}();
vi.uo = -1, vi.ho = 1048576, vi.lo = 41943040, vi.ao = 10, vi.co = 1e3, vi._o = new vi(vi.lo, vi.ao, vi.co), vi.fo = new vi(vi.uo, 0, 0);
var yi = function() {
  function t(t2, e) {
    this.do = t2, this.os = e, this.wo = false, this.mo = null;
  }
  return t.prototype.start = function(t2) {
    this.do.params.so !== vi.uo && this.To(t2);
  }, t.prototype.stop = function() {
    this.mo && (this.mo.cancel(), this.mo = null);
  }, Object.defineProperty(t.prototype, "Ti", {
    get: function() {
      return this.mo !== null;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.To = function(t2) {
    var r2 = this, i = this.wo ? 3e5 : 6e4;
    T$1("LruGarbageCollector", "Garbage collection scheduled in " + i + "ms"), this.mo = this.os.gn("lru_garbage_collection", i, function() {
      return __awaiter(r2, void 0, void 0, function() {
        var e;
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              this.mo = null, this.wo = true, n2.label = 1;
            case 1:
              return n2.trys.push([1, 3, , 7]), [4, t2.Eo(this.do)];
            case 2:
              return n2.sent(), [3, 7];
            case 3:
              return Dr(e = n2.sent()) ? (T$1("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
            case 4:
              return [4, Lo(e)];
            case 5:
              n2.sent(), n2.label = 6;
            case 6:
              return [3, 7];
            case 7:
              return [4, this.To(t2)];
            case 8:
              return n2.sent(), [2];
          }
        });
      });
    });
  }, t;
}(), mi = function() {
  function t(t2, e) {
    this.Io = t2, this.params = e;
  }
  return t.prototype.Ao = function(t2, e) {
    return this.Io.Ro(t2).next(function(t3) {
      return Math.floor(e / 100 * t3);
    });
  }, t.prototype.Po = function(t2, e) {
    var n2 = this;
    if (e === 0)
      return Tr.resolve(Yr.oi);
    var r2 = new pi(e);
    return this.Io.De(t2, function(t3) {
      return r2.Jr(t3.sequenceNumber);
    }).next(function() {
      return n2.Io.yo(t2, function(t3) {
        return r2.Jr(t3);
      });
    }).next(function() {
      return r2.maxValue;
    });
  }, t.prototype.Vo = function(t2, e, n2) {
    return this.Io.Vo(t2, e, n2);
  }, t.prototype.po = function(t2, e) {
    return this.Io.po(t2, e);
  }, t.prototype.bo = function(t2, e) {
    var n2 = this;
    return this.params.so === vi.uo ? (T$1("LruGarbageCollector", "Garbage collection skipped; disabled"), Tr.resolve(di)) : this.vo(t2).next(function(r2) {
      return r2 < n2.params.so ? (T$1("LruGarbageCollector", "Garbage collection skipped; Cache size " + r2 + " is lower than threshold " + n2.params.so), di) : n2.So(t2, e);
    });
  }, t.prototype.vo = function(t2) {
    return this.Io.vo(t2);
  }, t.prototype.So = function(t2, e) {
    var n2, r2, i, o, u2, a, c, h = this, f = Date.now();
    return this.Ao(t2, this.params.io).next(function(e2) {
      return e2 > h.params.ro ? (T$1("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.ro + " from " + e2), r2 = h.params.ro) : r2 = e2, o = Date.now(), h.Po(t2, r2);
    }).next(function(r3) {
      return n2 = r3, u2 = Date.now(), h.Vo(t2, n2, e);
    }).next(function(e2) {
      return i = e2, a = Date.now(), h.po(t2, n2);
    }).next(function(t3) {
      return c = Date.now(), _() <= LogLevel.DEBUG && T$1("LruGarbageCollector", "LRU Garbage Collection\n	Counted targets in " + (o - f) + "ms\n	Determined least recently used " + r2 + " in " + (u2 - o) + "ms\n	Removed " + i + " targets in " + (a - u2) + "ms\n	Removed " + t3 + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - f) + "ms"), Tr.resolve({
        Xr: true,
        Zr: r2,
        eo: i,
        no: t3
      });
    });
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gi(t) {
  for (var e = "", n2 = 0; n2 < t.length; n2++)
    e.length > 0 && (e = bi(e)), e = wi(t.get(n2), e);
  return bi(e);
}
function wi(t, e) {
  for (var n2 = e, r2 = t.length, i = 0; i < r2; i++) {
    var o = t.charAt(i);
    switch (o) {
      case "\0":
        n2 += "";
        break;
      case "":
        n2 += "";
        break;
      default:
        n2 += o;
    }
  }
  return n2;
}
function bi(t) {
  return t + "";
}
function Ii(t) {
  var e = t.length;
  if (x$1(e >= 2), e === 2)
    return x$1(t.charAt(0) === "" && t.charAt(1) === ""), P$1.g();
  for (var n2 = e - 2, r2 = [], i = "", o = 0; o < e; ) {
    var s = t.indexOf("", o);
    switch ((s < 0 || s > n2) && D$1(), t.charAt(s + 1)) {
      case "":
        var u2 = t.substring(o, s), a = void 0;
        i.length === 0 ? a = u2 : (a = i += u2, i = ""), r2.push(a);
        break;
      case "":
        i += t.substring(o, s), i += "\0";
        break;
      case "":
        i += t.substring(o, s + 1);
        break;
      default:
        D$1();
    }
    o = s + 2;
  }
  return new P$1(r2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ei = function(t) {
  this.Do = t;
};
function _i(t, e) {
  if (e.document)
    return function(t2, e2, n3) {
      var r3 = Ce(t2, e2.name), i2 = Le(e2.updateTime), o2 = new Pn({
        mapValue: {
          fields: e2.fields
        }
      });
      return new Fn(r3, i2, o2, {
        hasCommittedMutations: !!n3
      });
    }(t.Do, e.document, !!e.hasCommittedMutations);
  if (e.noDocument) {
    var n2 = M$1.$(e.noDocument.path), r2 = Di(e.noDocument.readTime);
    return new qn(n2, r2, {
      hasCommittedMutations: !!e.hasCommittedMutations
    });
  }
  if (e.unknownDocument) {
    var i = M$1.$(e.unknownDocument.path), o = Di(e.unknownDocument.version);
    return new Gn(i, o);
  }
  return D$1();
}
function Ti(t, e, n2) {
  var r2 = Ni(n2), i = e.key.path.h().A();
  if (e instanceof Fn) {
    var o = function(t2, e2) {
      return {
        name: Ve(t2, e2.key),
        fields: e2.sn().mapValue.fields,
        updateTime: ke(t2, e2.version.X())
      };
    }(t.Do, e), s = e.hasCommittedMutations;
    return new Zi(null, null, o, s, r2, i);
  }
  if (e instanceof qn) {
    var u2 = e.key.path.A(), a = Si(e.version), c = e.hasCommittedMutations;
    return new Zi(null, new Xi(u2, a), null, c, r2, i);
  }
  if (e instanceof Gn) {
    var h = e.key.path.A(), f = Si(e.version);
    return new Zi(new Ji(h, f), null, null, true, r2, i);
  }
  return D$1();
}
function Ni(t) {
  var e = t.X();
  return [e.seconds, e.nanoseconds];
}
function Ai(t) {
  var e = new mt(t[0], t[1]);
  return gt.Y(e);
}
function Si(t) {
  var e = t.X();
  return new Ki(e.seconds, e.nanoseconds);
}
function Di(t) {
  var e = new mt(t.seconds, t.nanoseconds);
  return gt.Y(e);
}
function xi(t, e) {
  var n2 = (e.baseMutations || []).map(function(e2) {
    return ze(t.Do, e2);
  }), r2 = e.mutations.map(function(e2) {
    return ze(t.Do, e2);
  }), i = mt.fromMillis(e.localWriteTimeMs);
  return new oi(e.batchId, i, n2, r2);
}
function ki(t) {
  var e, n2, r2 = Di(t.readTime), i = t.lastLimboFreeSnapshotVersion !== void 0 ? Di(t.lastLimboFreeSnapshotVersion) : gt.min();
  return t.query.documents !== void 0 ? (x$1((n2 = t.query).documents.length === 1), e = Xn(zn(Fe(n2.documents[0])))) : e = function(t2) {
    var e2 = Fe(t2.parent), n3 = t2.structuredQuery, r3 = n3.from ? n3.from.length : 0, i2 = null;
    if (r3 > 0) {
      x$1(r3 === 1);
      var o = n3.from[0];
      o.allDescendants ? i2 = o.collectionId : e2 = e2.child(o.collectionId);
    }
    var s = [];
    n3.where && (s = function t3(e3) {
      return e3 ? e3.unaryFilter !== void 0 ? [tn(e3)] : e3.fieldFilter !== void 0 ? [Ze(e3)] : e3.compositeFilter !== void 0 ? e3.compositeFilter.filters.map(function(e4) {
        return t3(e4);
      }).reduce(function(t4, e4) {
        return t4.concat(e4);
      }) : D$1() : [];
    }(n3.where));
    var u2 = [];
    n3.orderBy && (u2 = n3.orderBy.map(function(t3) {
      return function(t4) {
        return new wr(Je(t4.field), function(t5) {
          switch (t5) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(t4.direction));
      }(t3);
    }));
    var a = null;
    n3.limit && (a = function(t3) {
      var e3;
      return wt(e3 = typeof t3 == "object" ? t3.value : t3) ? null : e3;
    }(n3.limit));
    var c = null;
    n3.startAt && (c = Ye(n3.startAt));
    var h = null;
    return n3.endAt && (h = Ye(n3.endAt)), Xn(jn(e2, i2, u2, s, a, "F", c, h));
  }(t.query), new xt(e, t.targetId, 0, t.lastListenSequenceNumber, r2, i, ct.fromBase64String(t.resumeToken));
}
function Oi(t, e) {
  var n2, r2 = Si(e.et), i = Si(e.lastLimboFreeSnapshotVersion);
  n2 = At(e.target) ? Qe(t.Do, e.target) : Ke(t.Do, e.target);
  var o = e.resumeToken.toBase64();
  return new eo(e.targetId, Tt(e.target), r2, o, e.sequenceNumber, i, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ri = function() {
  function t(t2, e, n2, r2) {
    this.userId = t2, this.serializer = e, this.Sr = n2, this.Co = r2, this.No = {};
  }
  return t.Fo = function(e, n2, r2, i) {
    return x$1(e.uid !== ""), new t(e.Xs() ? e.uid : "", n2, r2, i);
  }, t.prototype.$o = function(t2) {
    var e = true, n2 = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return Pi(t2).ss({
      index: Hi.userMutationsIndex,
      range: n2
    }, function(t3, n3, r2) {
      e = false, r2.done();
    }).next(function() {
      return e;
    });
  }, t.prototype.xo = function(t2, e, n2, r2) {
    var i = this, o = Vi(t2), s = Pi(t2);
    return s.add({}).next(function(u2) {
      x$1(typeof u2 == "number");
      for (var a = new oi(u2, e, n2, r2), c = function(t3, e2, n3) {
        var r3 = n3.baseMutations.map(function(e3) {
          return je(t3.Do, e3);
        }), i2 = n3.mutations.map(function(e3) {
          return je(t3.Do, e3);
        });
        return new Hi(e2, n3.batchId, n3.rr.toMillis(), r3, i2);
      }(i.serializer, i.userId, a), h = [], f = new Vt(function(t3, e2) {
        return st(t3.R(), e2.R());
      }), l = 0, p2 = r2; l < p2.length; l++) {
        var d = p2[l], v2 = $i.key(i.userId, d.key.path, u2);
        f = f.add(d.key.path.h()), h.push(s.put(c)), h.push(o.put(v2, $i.PLACEHOLDER));
      }
      return f.forEach(function(e2) {
        h.push(i.Sr.ko(t2, e2));
      }), t2.Vr(function() {
        i.No[u2] = a.keys();
      }), Tr.$n(h).next(function() {
        return a;
      });
    });
  }, t.prototype.Mo = function(t2, e) {
    var n2 = this;
    return Pi(t2).get(e).next(function(t3) {
      return t3 ? (x$1(t3.userId === n2.userId), xi(n2.serializer, t3)) : null;
    });
  }, t.prototype.Oo = function(t2, e) {
    var n2 = this;
    return this.No[e] ? Tr.resolve(this.No[e]) : this.Mo(t2, e).next(function(t3) {
      if (t3) {
        var r2 = t3.keys();
        return n2.No[e] = r2, r2;
      }
      return null;
    });
  }, t.prototype.Lo = function(t2, e) {
    var n2 = this, r2 = e + 1, i = IDBKeyRange.lowerBound([this.userId, r2]), o = null;
    return Pi(t2).ss({
      index: Hi.userMutationsIndex,
      range: i
    }, function(t3, e2, i2) {
      e2.userId === n2.userId && (x$1(e2.batchId >= r2), o = xi(n2.serializer, e2)), i2.done();
    }).next(function() {
      return o;
    });
  }, t.prototype.Bo = function(t2) {
    var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]), n2 = -1;
    return Pi(t2).ss({
      index: Hi.userMutationsIndex,
      range: e,
      reverse: true
    }, function(t3, e2, r2) {
      n2 = e2.batchId, r2.done();
    }).next(function() {
      return n2;
    });
  }, t.prototype.qo = function(t2) {
    var e = this, n2 = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return Pi(t2).Zn(Hi.userMutationsIndex, n2).next(function(t3) {
      return t3.map(function(t4) {
        return xi(e.serializer, t4);
      });
    });
  }, t.prototype.Cr = function(t2, e) {
    var n2 = this, r2 = $i.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r2), o = [];
    return Vi(t2).ss({
      range: i
    }, function(r3, i2, s) {
      var u2 = r3[0], a = r3[1], c = r3[2], h = Ii(a);
      if (u2 === n2.userId && e.path.isEqual(h))
        return Pi(t2).get(c).next(function(t3) {
          if (!t3)
            throw D$1();
          x$1(t3.userId === n2.userId), o.push(xi(n2.serializer, t3));
        });
      s.done();
    }).next(function() {
      return o;
    });
  }, t.prototype.Mr = function(t2, e) {
    var n2 = this, r2 = new Vt(st), i = [];
    return e.forEach(function(e2) {
      var o = $i.prefixForPath(n2.userId, e2.path), s = IDBKeyRange.lowerBound(o), u2 = Vi(t2).ss({
        range: s
      }, function(t3, i2, o2) {
        var s2 = t3[0], u3 = t3[1], a = t3[2], c = Ii(u3);
        s2 === n2.userId && e2.path.isEqual(c) ? r2 = r2.add(a) : o2.done();
      });
      i.push(u2);
    }), Tr.$n(i).next(function() {
      return n2.Uo(t2, r2);
    });
  }, t.prototype.Qr = function(t2, e) {
    var n2 = this, r2 = e.path, i = r2.length + 1, o = $i.prefixForPath(this.userId, r2), s = IDBKeyRange.lowerBound(o), u2 = new Vt(st);
    return Vi(t2).ss({
      range: s
    }, function(t3, e2, o2) {
      var s2 = t3[0], a = t3[1], c = t3[2], h = Ii(a);
      s2 === n2.userId && r2.T(h) ? h.length === i && (u2 = u2.add(c)) : o2.done();
    }).next(function() {
      return n2.Uo(t2, u2);
    });
  }, t.prototype.Uo = function(t2, e) {
    var n2 = this, r2 = [], i = [];
    return e.forEach(function(e2) {
      i.push(Pi(t2).get(e2).next(function(t3) {
        if (t3 === null)
          throw D$1();
        x$1(t3.userId === n2.userId), r2.push(xi(n2.serializer, t3));
      }));
    }), Tr.$n(i).next(function() {
      return r2;
    });
  }, t.prototype.Qo = function(t2, e) {
    var n2 = this;
    return Ui(t2.Wo, this.userId, e).next(function(r2) {
      return t2.Vr(function() {
        n2.jo(e.batchId);
      }), Tr.forEach(r2, function(e2) {
        return n2.Co.Ko(t2, e2);
      });
    });
  }, t.prototype.jo = function(t2) {
    delete this.No[t2];
  }, t.prototype.Go = function(t2) {
    var e = this;
    return this.$o(t2).next(function(n2) {
      if (!n2)
        return Tr.resolve();
      var r2 = IDBKeyRange.lowerBound($i.prefixForUser(e.userId)), i = [];
      return Vi(t2).ss({
        range: r2
      }, function(t3, n3, r3) {
        if (t3[0] === e.userId) {
          var o = Ii(t3[1]);
          i.push(o);
        } else
          r3.done();
      }).next(function() {
        x$1(i.length === 0);
      });
    });
  }, t.prototype.zo = function(t2, e) {
    return Li(t2, this.userId, e);
  }, t.prototype.Ho = function(t2) {
    var e = this;
    return Ci(t2).get(this.userId).next(function(t3) {
      return t3 || new Yi(e.userId, -1, "");
    });
  }, t;
}();
function Li(t, e, n2) {
  var r2 = $i.prefixForPath(e, n2.path), i = r2[1], o = IDBKeyRange.lowerBound(r2), s = false;
  return Vi(t).ss({
    range: o,
    ns: true
  }, function(t2, n3, r3) {
    var o2 = t2[0], u2 = t2[1];
    t2[2];
    o2 === e && u2 === i && (s = true), r3.done();
  }).next(function() {
    return s;
  });
}
function Ui(t, e, n2) {
  var r2 = t.store(Hi.store), i = t.store($i.store), o = [], s = IDBKeyRange.only(n2.batchId), u2 = 0, a = r2.ss({
    range: s
  }, function(t2, e2, n3) {
    return u2++, n3.delete();
  });
  o.push(a.next(function() {
    x$1(u2 === 1);
  }));
  for (var c = [], h = 0, f = n2.mutations; h < f.length; h++) {
    var l = f[h], p2 = $i.key(e, l.key.path, n2.batchId);
    o.push(i.delete(p2)), c.push(l.key);
  }
  return Tr.$n(o).next(function() {
    return c;
  });
}
function Pi(t) {
  return go.Un(t, Hi.store);
}
function Vi(t) {
  return go.Un(t, $i.store);
}
function Ci(t) {
  return go.Un(t, Yi.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mi = function() {
  function t(t2, e) {
    this.serializer = t2, this.Sr = e;
  }
  return t.prototype.Tr = function(t2, e, n2) {
    return qi(t2).put(Gi(e), n2);
  }, t.prototype.Ir = function(t2, e) {
    var n2 = qi(t2), r2 = Gi(e);
    return n2.delete(r2);
  }, t.prototype.updateMetadata = function(t2, e) {
    var n2 = this;
    return this.getMetadata(t2).next(function(r2) {
      return r2.byteSize += e, n2.Yo(t2, r2);
    });
  }, t.prototype.Ar = function(t2, e) {
    var n2 = this;
    return qi(t2).get(Gi(e)).next(function(t3) {
      return n2.Jo(t3);
    });
  }, t.prototype.Xo = function(t2, e) {
    var n2 = this;
    return qi(t2).get(Gi(e)).next(function(t3) {
      var e2 = n2.Jo(t3);
      return e2 ? {
        Zo: e2,
        size: Bi(t3)
      } : null;
    });
  }, t.prototype.getEntries = function(t2, e) {
    var n2 = this, r2 = qt();
    return this.ta(t2, e, function(t3, e2) {
      var i = n2.Jo(e2);
      r2 = r2.rt(t3, i);
    }).next(function() {
      return r2;
    });
  }, t.prototype.ea = function(t2, e) {
    var n2 = this, r2 = qt(), i = new Lt(M$1.i);
    return this.ta(t2, e, function(t3, e2) {
      var o = n2.Jo(e2);
      o ? (r2 = r2.rt(t3, o), i = i.rt(t3, Bi(e2))) : (r2 = r2.rt(t3, null), i = i.rt(t3, 0));
    }).next(function() {
      return {
        na: r2,
        sa: i
      };
    });
  }, t.prototype.ta = function(t2, e, n2) {
    if (e.m())
      return Tr.resolve();
    var r2 = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()), i = e.lt(), o = i.Et();
    return qi(t2).ss({
      range: r2
    }, function(t3, e2, r3) {
      for (var s = M$1.$(t3); o && M$1.i(o, s) < 0; )
        n2(o, null), o = i.Et();
      o && o.isEqual(s) && (n2(o, e2), o = i.It() ? i.Et() : null), o ? r3.Jn(o.path.A()) : r3.done();
    }).next(function() {
      for (; o; )
        n2(o, null), o = i.It() ? i.Et() : null;
    });
  }, t.prototype.Or = function(t2, e, n2) {
    var r2 = this, i = Bt(), o = e.path.length + 1, s = {};
    if (n2.isEqual(gt.min())) {
      var u2 = e.path.A();
      s.range = IDBKeyRange.lowerBound(u2);
    } else {
      var a = e.path.A(), c = Ni(n2);
      s.range = IDBKeyRange.lowerBound([a, c], true), s.index = Zi.collectionReadTimeIndex;
    }
    return qi(t2).ss(s, function(t3, n3, s2) {
      if (t3.length === o) {
        var u3 = _i(r2.serializer, n3);
        e.path.T(u3.key.path) ? u3 instanceof Fn && ir(e, u3) && (i = i.rt(u3.key, u3)) : s2.done();
      }
    }).next(function() {
      return i;
    });
  }, t.prototype.ia = function(t2, e) {
    var n2 = this, r2 = Ft(), i = Ni(e), o = qi(t2), s = IDBKeyRange.lowerBound(i, true);
    return o.ss({
      index: Zi.readTimeIndex,
      range: s
    }, function(t3, e2) {
      var o2 = _i(n2.serializer, e2);
      r2 = r2.rt(o2.key, o2), i = e2.readTime;
    }).next(function() {
      return {
        ra: r2,
        readTime: Ai(i)
      };
    });
  }, t.prototype.oa = function(t2) {
    var e = qi(t2), n2 = gt.min();
    return e.ss({
      index: Zi.readTimeIndex,
      reverse: true
    }, function(t3, e2, r2) {
      e2.readTime && (n2 = Ai(e2.readTime)), r2.done();
    }).next(function() {
      return n2;
    });
  }, t.prototype.aa = function(e) {
    return new t.ca(this, !!e && e.ua);
  }, t.prototype.ha = function(t2) {
    return this.getMetadata(t2).next(function(t3) {
      return t3.byteSize;
    });
  }, t.prototype.getMetadata = function(t2) {
    return Fi(t2).get(to.key).next(function(t3) {
      return x$1(!!t3), t3;
    });
  }, t.prototype.Yo = function(t2, e) {
    return Fi(t2).put(to.key, e);
  }, t.prototype.Jo = function(t2) {
    if (t2) {
      var e = _i(this.serializer, t2);
      return e instanceof qn && e.version.isEqual(gt.min()) ? null : e;
    }
    return null;
  }, t;
}();
function Fi(t) {
  return go.Un(t, to.store);
}
function qi(t) {
  return go.Un(t, Zi.store);
}
function Gi(t) {
  return t.path.A();
}
function Bi(t) {
  var e;
  if (t.document)
    e = t.document;
  else if (t.unknownDocument)
    e = t.unknownDocument;
  else {
    if (!t.noDocument)
      throw D$1();
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Mi.ca = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).la = t, r2.ua = n3, r2._a = new yt(function(t2) {
      return t2.toString();
    }, function(t2, e2) {
      return t2.isEqual(e2);
    }), r2;
  }
  return __extends(n2, e), n2.prototype.gr = function(t) {
    var e2 = this, n3 = [], r2 = 0, i = new Vt(function(t2, e3) {
      return st(t2.R(), e3.R());
    });
    return this.dr.forEach(function(o, s) {
      var u2 = e2._a.get(o);
      if (s) {
        var a = Ti(e2.la.serializer, s, e2.readTime);
        i = i.add(o.path.h());
        var c = Bi(a);
        r2 += c - u2, n3.push(e2.la.Tr(t, o, a));
      } else if (r2 -= u2, e2.ua) {
        var h = Ti(e2.la.serializer, new qn(o, gt.min()), e2.readTime);
        n3.push(e2.la.Tr(t, o, h));
      } else
        n3.push(e2.la.Ir(t, o));
    }), i.forEach(function(r3) {
      n3.push(e2.la.Sr.ko(t, r3));
    }), n3.push(this.la.updateMetadata(t, r2)), Tr.$n(n3);
  }, n2.prototype.Rr = function(t, e2) {
    var n3 = this;
    return this.la.Xo(t, e2).next(function(t2) {
      return t2 === null ? (n3._a.set(e2, 0), null) : (n3._a.set(e2, t2.size), t2.Zo);
    });
  }, n2.prototype.Pr = function(t, e2) {
    var n3 = this;
    return this.la.ea(t, e2).next(function(t2) {
      var e3 = t2.na;
      return t2.sa.forEach(function(t3, e4) {
        n3._a.set(t3, e4);
      }), e3;
    });
  }, n2;
}(ui);
var ji = function() {
  function t() {
    this.fa = new zi();
  }
  return t.prototype.ko = function(t2, e) {
    return this.fa.add(e), Tr.resolve();
  }, t.prototype.Ur = function(t2, e) {
    return Tr.resolve(this.fa.getEntries(e));
  }, t;
}(), zi = function() {
  function t() {
    this.index = {};
  }
  return t.prototype.add = function(t2) {
    var e = t2._(), n2 = t2.h(), r2 = this.index[e] || new Vt(P$1.i), i = !r2.has(n2);
    return this.index[e] = r2.add(n2), i;
  }, t.prototype.has = function(t2) {
    var e = t2._(), n2 = t2.h(), r2 = this.index[e];
    return r2 && r2.has(n2);
  }, t.prototype.getEntries = function(t2) {
    return (this.index[t2] || new Vt(P$1.i)).A();
  }, t;
}(), Qi = function() {
  function t(t2) {
    this.serializer = t2;
  }
  return t.prototype.createOrUpgrade = function(t2, e, n2, r2) {
    var i = this;
    x$1(n2 < r2 && n2 >= 0 && r2 <= 10);
    var o = new xr(e);
    n2 < 1 && r2 >= 1 && (function(t3) {
      t3.createObjectStore(Wi.store);
    }(t2), function(t3) {
      t3.createObjectStore(Yi.store, {
        keyPath: Yi.keyPath
      }), t3.createObjectStore(Hi.store, {
        keyPath: Hi.keyPath,
        autoIncrement: true
      }).createIndex(Hi.userMutationsIndex, Hi.userMutationsKeyPath, {
        unique: true
      }), t3.createObjectStore($i.store);
    }(t2), oo(t2), function(t3) {
      t3.createObjectStore(Zi.store);
    }(t2));
    var s = Tr.resolve();
    return n2 < 3 && r2 >= 3 && (n2 !== 0 && (function(t3) {
      t3.deleteObjectStore(no.store), t3.deleteObjectStore(eo.store), t3.deleteObjectStore(ro.store);
    }(t2), oo(t2)), s = s.next(function() {
      return function(t3) {
        var e2 = t3.store(ro.store), n3 = new ro(0, 0, gt.min().X(), 0);
        return e2.put(ro.key, n3);
      }(o);
    })), n2 < 4 && r2 >= 4 && (n2 !== 0 && (s = s.next(function() {
      return function(t3, e2) {
        return e2.store(Hi.store).Zn().next(function(n3) {
          t3.deleteObjectStore(Hi.store), t3.createObjectStore(Hi.store, {
            keyPath: Hi.keyPath,
            autoIncrement: true
          }).createIndex(Hi.userMutationsIndex, Hi.userMutationsKeyPath, {
            unique: true
          });
          var r3 = e2.store(Hi.store), i2 = n3.map(function(t4) {
            return r3.put(t4);
          });
          return Tr.$n(i2);
        });
      }(t2, o);
    })), s = s.next(function() {
      !function(t3) {
        t3.createObjectStore(so.store, {
          keyPath: so.keyPath
        });
      }(t2);
    })), n2 < 5 && r2 >= 5 && (s = s.next(function() {
      return i.removeAcknowledgedMutations(o);
    })), n2 < 6 && r2 >= 6 && (s = s.next(function() {
      return function(t3) {
        t3.createObjectStore(to.store);
      }(t2), i.addDocumentGlobal(o);
    })), n2 < 7 && r2 >= 7 && (s = s.next(function() {
      return i.ensureSequenceNumbers(o);
    })), n2 < 8 && r2 >= 8 && (s = s.next(function() {
      return i.createCollectionParentIndex(t2, o);
    })), n2 < 9 && r2 >= 9 && (s = s.next(function() {
      !function(t3) {
        t3.objectStoreNames.contains("remoteDocumentChanges") && t3.deleteObjectStore("remoteDocumentChanges");
      }(t2), function(t3) {
        var e2 = t3.objectStore(Zi.store);
        e2.createIndex(Zi.readTimeIndex, Zi.readTimeIndexPath, {
          unique: false
        }), e2.createIndex(Zi.collectionReadTimeIndex, Zi.collectionReadTimeIndexPath, {
          unique: false
        });
      }(e);
    })), n2 < 10 && r2 >= 10 && (s = s.next(function() {
      return i.rewriteCanonicalIds(o);
    })), s;
  }, t.prototype.addDocumentGlobal = function(t2) {
    var e = 0;
    return t2.store(Zi.store).ss(function(t3, n2) {
      e += Bi(n2);
    }).next(function() {
      var n2 = new to(e);
      return t2.store(to.store).put(to.key, n2);
    });
  }, t.prototype.removeAcknowledgedMutations = function(t2) {
    var e = this, n2 = t2.store(Yi.store), r2 = t2.store(Hi.store);
    return n2.Zn().next(function(n3) {
      return Tr.forEach(n3, function(n4) {
        var i = IDBKeyRange.bound([n4.userId, -1], [n4.userId, n4.lastAcknowledgedBatchId]);
        return r2.Zn(Hi.userMutationsIndex, i).next(function(r3) {
          return Tr.forEach(r3, function(r4) {
            x$1(r4.userId === n4.userId);
            var i2 = xi(e.serializer, r4);
            return Ui(t2, n4.userId, i2).next(function() {
            });
          });
        });
      });
    });
  }, t.prototype.ensureSequenceNumbers = function(t2) {
    var e = t2.store(no.store), n2 = t2.store(Zi.store);
    return t2.store(ro.store).get(ro.key).next(function(t3) {
      var r2 = [];
      return n2.ss(function(n3, i) {
        var o = new P$1(n3), s = function(t4) {
          return [0, gi(t4)];
        }(o);
        r2.push(e.get(s).next(function(n4) {
          return n4 ? Tr.resolve() : function(n5) {
            return e.put(new no(0, gi(n5), t3.highestListenSequenceNumber));
          }(o);
        }));
      }).next(function() {
        return Tr.$n(r2);
      });
    });
  }, t.prototype.createCollectionParentIndex = function(t2, e) {
    t2.createObjectStore(io.store, {
      keyPath: io.keyPath
    });
    var n2 = e.store(io.store), r2 = new zi(), i = function(t3) {
      if (r2.add(t3)) {
        var e2 = t3._(), i2 = t3.h();
        return n2.put({
          collectionId: e2,
          parent: gi(i2)
        });
      }
    };
    return e.store(Zi.store).ss({
      ns: true
    }, function(t3, e2) {
      var n3 = new P$1(t3);
      return i(n3.h());
    }).next(function() {
      return e.store($i.store).ss({
        ns: true
      }, function(t3, e2) {
        t3[0];
        var n3 = t3[1], r3 = (t3[2], Ii(n3));
        return i(r3.h());
      });
    });
  }, t.prototype.rewriteCanonicalIds = function(t2) {
    var e = this, n2 = t2.store(eo.store);
    return n2.ss(function(t3, r2) {
      var i = ki(r2), o = Oi(e.serializer, i);
      return n2.put(o);
    });
  }, t;
}(), Ki = function(t, e) {
  this.seconds = t, this.nanoseconds = e;
}, Wi = function(t, e, n2) {
  this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n2;
};
Wi.store = "owner", Wi.key = "owner";
var Yi = function(t, e, n2) {
  this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n2;
};
Yi.store = "mutationQueues", Yi.keyPath = "userId";
var Hi = function(t, e, n2, r2, i) {
  this.userId = t, this.batchId = e, this.localWriteTimeMs = n2, this.baseMutations = r2, this.mutations = i;
};
Hi.store = "mutations", Hi.keyPath = "batchId", Hi.userMutationsIndex = "userMutationsIndex", Hi.userMutationsKeyPath = ["userId", "batchId"];
var $i = function() {
  function t() {
  }
  return t.prefixForUser = function(t2) {
    return [t2];
  }, t.prefixForPath = function(t2, e) {
    return [t2, gi(e)];
  }, t.key = function(t2, e, n2) {
    return [t2, gi(e), n2];
  }, t;
}();
$i.store = "documentMutations", $i.PLACEHOLDER = new $i();
var Xi = function(t, e) {
  this.path = t, this.readTime = e;
}, Ji = function(t, e) {
  this.path = t, this.version = e;
}, Zi = function(t, e, n2, r2, i, o) {
  this.unknownDocument = t, this.noDocument = e, this.document = n2, this.hasCommittedMutations = r2, this.readTime = i, this.parentPath = o;
};
Zi.store = "remoteDocuments", Zi.readTimeIndex = "readTimeIndex", Zi.readTimeIndexPath = "readTime", Zi.collectionReadTimeIndex = "collectionReadTimeIndex", Zi.collectionReadTimeIndexPath = ["parentPath", "readTime"];
var to = function(t) {
  this.byteSize = t;
};
to.store = "remoteDocumentGlobal", to.key = "remoteDocumentGlobalKey";
var eo = function(t, e, n2, r2, i, o, s) {
  this.targetId = t, this.canonicalId = e, this.readTime = n2, this.resumeToken = r2, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};
eo.store = "targets", eo.keyPath = "targetId", eo.queryTargetsIndexName = "queryTargetsIndex", eo.queryTargetsKeyPath = ["canonicalId", "targetId"];
var no = function(t, e, n2) {
  this.targetId = t, this.path = e, this.sequenceNumber = n2;
};
no.store = "targetDocuments", no.keyPath = ["targetId", "path"], no.documentTargetsIndex = "documentTargetsIndex", no.documentTargetsKeyPath = ["path", "targetId"];
var ro = function(t, e, n2, r2) {
  this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n2, this.targetCount = r2;
};
ro.key = "targetGlobalKey", ro.store = "targetGlobal";
var io = function(t, e) {
  this.collectionId = t, this.parent = e;
};
function oo(t) {
  t.createObjectStore(no.store, {
    keyPath: no.keyPath
  }).createIndex(no.documentTargetsIndex, no.documentTargetsKeyPath, {
    unique: true
  }), t.createObjectStore(eo.store, {
    keyPath: eo.keyPath
  }).createIndex(eo.queryTargetsIndexName, eo.queryTargetsKeyPath, {
    unique: true
  }), t.createObjectStore(ro.store);
}
io.store = "collectionParents", io.keyPath = ["collectionId", "parent"];
var so = function(t, e, n2, r2) {
  this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n2, this.inForeground = r2;
};
so.store = "clientMetadata", so.keyPath = "clientId";
var uo = __spreadArrays(__spreadArrays(__spreadArrays([Yi.store, Hi.store, $i.store, Zi.store, eo.store, Wi.store, ro.store, no.store], [so.store]), [to.store]), [io.store]), ao = function() {
  function t() {
    this.da = new zi();
  }
  return t.prototype.ko = function(t2, e) {
    var n2 = this;
    if (!this.da.has(e)) {
      var r2 = e._(), i = e.h();
      t2.Vr(function() {
        n2.da.add(e);
      });
      var o = {
        collectionId: r2,
        parent: gi(i)
      };
      return co(t2).put(o);
    }
    return Tr.resolve();
  }, t.prototype.Ur = function(t2, e) {
    var n2 = [], r2 = IDBKeyRange.bound([e, ""], [at(e), ""], false, true);
    return co(t2).Zn(r2).next(function(t3) {
      for (var r3 = 0, i = t3; r3 < i.length; r3++) {
        var o = i[r3];
        if (o.collectionId !== e)
          break;
        n2.push(Ii(o.parent));
      }
      return n2;
    });
  }, t;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function co(t) {
  return go.Un(t, io.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ho = function() {
  function t(t2) {
    this.wa = t2;
  }
  return t.prototype.next = function() {
    return this.wa += 2, this.wa;
  }, t.ma = function() {
    return new t(0);
  }, t.Ta = function() {
    return new t(-1);
  }, t;
}(), fo = function() {
  function t(t2, e) {
    this.Co = t2, this.serializer = e;
  }
  return t.prototype.Ea = function(t2) {
    var e = this;
    return this.Ia(t2).next(function(n2) {
      var r2 = new ho(n2.highestTargetId);
      return n2.highestTargetId = r2.next(), e.Aa(t2, n2).next(function() {
        return n2.highestTargetId;
      });
    });
  }, t.prototype.Ra = function(t2) {
    return this.Ia(t2).next(function(t3) {
      return gt.Y(new mt(t3.lastRemoteSnapshotVersion.seconds, t3.lastRemoteSnapshotVersion.nanoseconds));
    });
  }, t.prototype.Pa = function(t2) {
    return this.Ia(t2).next(function(t3) {
      return t3.highestListenSequenceNumber;
    });
  }, t.prototype.ga = function(t2, e, n2) {
    var r2 = this;
    return this.Ia(t2).next(function(i) {
      return i.highestListenSequenceNumber = e, n2 && (i.lastRemoteSnapshotVersion = n2.X()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r2.Aa(t2, i);
    });
  }, t.prototype.ya = function(t2, e) {
    var n2 = this;
    return this.Va(t2, e).next(function() {
      return n2.Ia(t2).next(function(r2) {
        return r2.targetCount += 1, n2.pa(e, r2), n2.Aa(t2, r2);
      });
    });
  }, t.prototype.ba = function(t2, e) {
    return this.Va(t2, e);
  }, t.prototype.va = function(t2, e) {
    var n2 = this;
    return this.Sa(t2, e.targetId).next(function() {
      return lo(t2).delete(e.targetId);
    }).next(function() {
      return n2.Ia(t2);
    }).next(function(e2) {
      return x$1(e2.targetCount > 0), e2.targetCount -= 1, n2.Aa(t2, e2);
    });
  }, t.prototype.Vo = function(t2, e, n2) {
    var r2 = this, i = 0, o = [];
    return lo(t2).ss(function(s, u2) {
      var a = ki(u2);
      a.sequenceNumber <= e && n2.get(a.targetId) === null && (i++, o.push(r2.va(t2, a)));
    }).next(function() {
      return Tr.$n(o);
    }).next(function() {
      return i;
    });
  }, t.prototype.De = function(t2, e) {
    return lo(t2).ss(function(t3, n2) {
      var r2 = ki(n2);
      e(r2);
    });
  }, t.prototype.Ia = function(t2) {
    return po(t2).get(ro.key).next(function(t3) {
      return x$1(t3 !== null), t3;
    });
  }, t.prototype.Aa = function(t2, e) {
    return po(t2).put(ro.key, e);
  }, t.prototype.Va = function(t2, e) {
    return lo(t2).put(Oi(this.serializer, e));
  }, t.prototype.pa = function(t2, e) {
    var n2 = false;
    return t2.targetId > e.highestTargetId && (e.highestTargetId = t2.targetId, n2 = true), t2.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t2.sequenceNumber, n2 = true), n2;
  }, t.prototype.Da = function(t2) {
    return this.Ia(t2).next(function(t3) {
      return t3.targetCount;
    });
  }, t.prototype.Ca = function(t2, e) {
    var n2 = Tt(e), r2 = IDBKeyRange.bound([n2, Number.NEGATIVE_INFINITY], [n2, Number.POSITIVE_INFINITY]), i = null;
    return lo(t2).ss({
      range: r2,
      index: eo.queryTargetsIndexName
    }, function(t3, n3, r3) {
      var o = ki(n3);
      Nt(e, o.target) && (i = o, r3.done());
    }).next(function() {
      return i;
    });
  }, t.prototype.Na = function(t2, e, n2) {
    var r2 = this, i = [], o = vo(t2);
    return e.forEach(function(e2) {
      var s = gi(e2.path);
      i.push(o.put(new no(n2, s))), i.push(r2.Co.Fa(t2, n2, e2));
    }), Tr.$n(i);
  }, t.prototype.$a = function(t2, e, n2) {
    var r2 = this, i = vo(t2);
    return Tr.forEach(e, function(e2) {
      var o = gi(e2.path);
      return Tr.$n([i.delete([n2, o]), r2.Co.xa(t2, n2, e2)]);
    });
  }, t.prototype.Sa = function(t2, e) {
    var n2 = vo(t2), r2 = IDBKeyRange.bound([e], [e + 1], false, true);
    return n2.delete(r2);
  }, t.prototype.ka = function(t2, e) {
    var n2 = IDBKeyRange.bound([e], [e + 1], false, true), r2 = vo(t2), i = Qt();
    return r2.ss({
      range: n2,
      ns: true
    }, function(t3, e2, n3) {
      var r3 = Ii(t3[1]), o = new M$1(r3);
      i = i.add(o);
    }).next(function() {
      return i;
    });
  }, t.prototype.zo = function(t2, e) {
    var n2 = gi(e.path), r2 = IDBKeyRange.bound([n2], [at(n2)], false, true), i = 0;
    return vo(t2).ss({
      index: no.documentTargetsIndex,
      ns: true,
      range: r2
    }, function(t3, e2, n3) {
      var r3 = t3[0];
      t3[1];
      r3 !== 0 && (i++, n3.done());
    }).next(function() {
      return i > 0;
    });
  }, t.prototype.qe = function(t2, e) {
    return lo(t2).get(e).next(function(t3) {
      return t3 ? ki(t3) : null;
    });
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lo(t) {
  return go.Un(t, eo.store);
}
function po(t) {
  return go.Un(t, ro.store);
}
function vo(t) {
  return go.Un(t, no.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yo = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", mo = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this) || this).Wo = t, r2.Ma = n3, r2;
  }
  return __extends(n2, e), n2;
}(ci), go = function() {
  function t(e, n2, r2, i, o, s, u2, a, c, h) {
    if (this.allowTabSynchronization = e, this.persistenceKey = n2, this.clientId = r2, this._n = o, this.window = s, this.document = u2, this.Oa = c, this.La = h, this.Ba = null, this.qa = false, this.isPrimary = false, this.networkEnabled = true, this.Ua = null, this.inForeground = false, this.Qa = null, this.Wa = null, this.ja = Number.NEGATIVE_INFINITY, this.Ka = function(t2) {
      return Promise.resolve();
    }, !t.On())
      throw new I$1(b.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.Co = new Io(this, i), this.Ga = n2 + "main", this.serializer = new Ei(a), this.za = new Nr(this.Ga, 10, new Qi(this.serializer)), this.Ha = new fo(this.Co, this.serializer), this.Sr = new ao(), this.br = new Mi(this.serializer, this.Sr), this.window && this.window.localStorage ? this.Ya = this.window.localStorage : (this.Ya = null, h === false && N$1("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  return t.Un = function(t2, e) {
    if (t2 instanceof mo)
      return Nr.Un(t2.Wo, e);
    throw D$1();
  }, t.prototype.start = function() {
    var t2 = this;
    return this.Ja().then(function() {
      if (!t2.isPrimary && !t2.allowTabSynchronization)
        throw new I$1(b.FAILED_PRECONDITION, yo);
      return t2.Xa(), t2.Za(), t2.tc(), t2.runTransaction("getHighestListenSequenceNumber", "readonly", function(e) {
        return t2.Ha.Pa(e);
      });
    }).then(function(e) {
      t2.Ba = new Yr(e, t2.Oa);
    }).then(function() {
      t2.qa = true;
    }).catch(function(e) {
      return t2.za && t2.za.close(), Promise.reject(e);
    });
  }, t.prototype.ec = function(t2) {
    var r2 = this;
    return this.Ka = function(i) {
      return __awaiter(r2, void 0, void 0, function() {
        return __generator(this, function(e) {
          return this.Ti ? [2, t2(i)] : [2];
        });
      });
    }, t2(this.isPrimary);
  }, t.prototype.nc = function(t2) {
    var r2 = this;
    this.za.jn(function(i) {
      return __awaiter(r2, void 0, void 0, function() {
        return __generator(this, function(e) {
          switch (e.label) {
            case 0:
              return i.newVersion === null ? [4, t2()] : [3, 2];
            case 1:
              e.sent(), e.label = 2;
            case 2:
              return [2];
          }
        });
      });
    });
  }, t.prototype.sc = function(t2) {
    var r2 = this;
    this.networkEnabled !== t2 && (this.networkEnabled = t2, this._n.ds(function() {
      return __awaiter(r2, void 0, void 0, function() {
        return __generator(this, function(t3) {
          switch (t3.label) {
            case 0:
              return this.Ti ? [4, this.Ja()] : [3, 2];
            case 1:
              t3.sent(), t3.label = 2;
            case 2:
              return [2];
          }
        });
      });
    }));
  }, t.prototype.Ja = function() {
    var t2 = this;
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function(e) {
      return bo(e).put(new so(t2.clientId, Date.now(), t2.networkEnabled, t2.inForeground)).next(function() {
        if (t2.isPrimary)
          return t2.ic(e).next(function(e2) {
            e2 || (t2.isPrimary = false, t2._n.Ds(function() {
              return t2.Ka(false);
            }));
          });
      }).next(function() {
        return t2.rc(e);
      }).next(function(n2) {
        return t2.isPrimary && !n2 ? t2.oc(e).next(function() {
          return false;
        }) : !!n2 && t2.ac(e).next(function() {
          return true;
        });
      });
    }).catch(function(e) {
      if (Dr(e))
        return T$1("IndexedDbPersistence", "Failed to extend owner lease: ", e), t2.isPrimary;
      if (!t2.allowTabSynchronization)
        throw e;
      return T$1("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), false;
    }).then(function(e) {
      t2.isPrimary !== e && t2._n.Ds(function() {
        return t2.Ka(e);
      }), t2.isPrimary = e;
    });
  }, t.prototype.ic = function(t2) {
    var e = this;
    return wo(t2).get(Wi.key).next(function(t3) {
      return Tr.resolve(e.cc(t3));
    });
  }, t.prototype.uc = function(t2) {
    return bo(t2).delete(this.clientId);
  }, t.prototype.hc = function() {
    return __awaiter(this, void 0, void 0, function() {
      var e, r2, i, o, s = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return !this.isPrimary || this.lc(this.ja, 18e5) ? [3, 2] : (this.ja = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(e2) {
              var n3 = t.Un(e2, so.store);
              return n3.Zn().next(function(t2) {
                var e3 = s._c(t2, 18e5), r3 = t2.filter(function(t3) {
                  return e3.indexOf(t3) === -1;
                });
                return Tr.forEach(r3, function(t3) {
                  return n3.delete(t3.clientId);
                }).next(function() {
                  return r3;
                });
              });
            }).catch(function() {
              return [];
            })]);
          case 1:
            if (e = n2.sent(), this.Ya)
              for (r2 = 0, i = e; r2 < i.length; r2++)
                o = i[r2], this.Ya.removeItem(this.fc(o.clientId));
            n2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.tc = function() {
    var t2 = this;
    this.Wa = this._n.gn("client_metadata_refresh", 4e3, function() {
      return t2.Ja().then(function() {
        return t2.hc();
      }).then(function() {
        return t2.tc();
      });
    });
  }, t.prototype.cc = function(t2) {
    return !!t2 && t2.ownerId === this.clientId;
  }, t.prototype.rc = function(t2) {
    var e = this;
    return this.La ? Tr.resolve(true) : wo(t2).get(Wi.key).next(function(n2) {
      if (n2 !== null && e.lc(n2.leaseTimestampMs, 5e3) && !e.dc(n2.ownerId)) {
        if (e.cc(n2) && e.networkEnabled)
          return true;
        if (!e.cc(n2)) {
          if (!n2.allowTabSynchronization)
            throw new I$1(b.FAILED_PRECONDITION, yo);
          return false;
        }
      }
      return !(!e.networkEnabled || !e.inForeground) || bo(t2).Zn().next(function(t3) {
        return e._c(t3, 5e3).find(function(t4) {
          if (e.clientId !== t4.clientId) {
            var n3 = !e.networkEnabled && t4.networkEnabled, r2 = !e.inForeground && t4.inForeground, i = e.networkEnabled === t4.networkEnabled;
            if (n3 || r2 && i)
              return true;
          }
          return false;
        }) === void 0;
      });
    }).next(function(t3) {
      return e.isPrimary !== t3 && T$1("IndexedDbPersistence", "Client " + (t3 ? "is" : "is not") + " eligible for a primary lease."), t3;
    });
  }, t.prototype.Si = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2 = this;
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return this.qa = false, this.wc(), this.Wa && (this.Wa.cancel(), this.Wa = null), this.mc(), this.Tc(), [4, this.za.runTransaction("readwrite", [Wi.store, so.store], function(e2) {
              var n2 = new mo(e2, Yr.oi);
              return t2.oc(n2).next(function() {
                return t2.uc(n2);
              });
            })];
          case 1:
            return e.sent(), this.za.close(), this.Ec(), [2];
        }
      });
    });
  }, t.prototype._c = function(t2, e) {
    var n2 = this;
    return t2.filter(function(t3) {
      return n2.lc(t3.updateTimeMs, e) && !n2.dc(t3.clientId);
    });
  }, t.prototype.Vi = function() {
    var t2 = this;
    return this.runTransaction("getActiveClients", "readonly", function(e) {
      return bo(e).Zn().next(function(e2) {
        return t2._c(e2, 18e5).map(function(t3) {
          return t3.clientId;
        });
      });
    });
  }, Object.defineProperty(t.prototype, "Ti", {
    get: function() {
      return this.qa;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.Ic = function(t2) {
    return Ri.Fo(t2, this.serializer, this.Sr, this.Co);
  }, t.prototype.Ac = function() {
    return this.Ha;
  }, t.prototype.Rc = function() {
    return this.br;
  }, t.prototype.Pc = function() {
    return this.Sr;
  }, t.prototype.runTransaction = function(t2, e, n2) {
    var r2 = this;
    T$1("IndexedDbPersistence", "Starting transaction:", t2);
    var i, o = e === "readonly" ? "readonly" : "readwrite";
    return this.za.runTransaction(o, uo, function(o2) {
      return i = new mo(o2, r2.Ba ? r2.Ba.next() : Yr.oi), e === "readwrite-primary" ? r2.ic(i).next(function(t3) {
        return !!t3 || r2.rc(i);
      }).next(function(e2) {
        if (!e2)
          throw N$1("Failed to obtain primary lease for action '" + t2 + "'."), r2.isPrimary = false, r2._n.Ds(function() {
            return r2.Ka(false);
          }), new I$1(b.FAILED_PRECONDITION, ai);
        return n2(i);
      }).next(function(t3) {
        return r2.ac(i).next(function() {
          return t3;
        });
      }) : r2.gc(i).next(function() {
        return n2(i);
      });
    }).then(function(t3) {
      return i.pr(), t3;
    });
  }, t.prototype.gc = function(t2) {
    var e = this;
    return wo(t2).get(Wi.key).next(function(t3) {
      if (t3 !== null && e.lc(t3.leaseTimestampMs, 5e3) && !e.dc(t3.ownerId) && !e.cc(t3) && !(e.La || e.allowTabSynchronization && t3.allowTabSynchronization))
        throw new I$1(b.FAILED_PRECONDITION, yo);
    });
  }, t.prototype.ac = function(t2) {
    var e = new Wi(this.clientId, this.allowTabSynchronization, Date.now());
    return wo(t2).put(Wi.key, e);
  }, t.On = function() {
    return Nr.On();
  }, t.prototype.oc = function(t2) {
    var e = this, n2 = wo(t2);
    return n2.get(Wi.key).next(function(t3) {
      return e.cc(t3) ? (T$1("IndexedDbPersistence", "Releasing primary lease."), n2.delete(Wi.key)) : Tr.resolve();
    });
  }, t.prototype.lc = function(t2, e) {
    var n2 = Date.now();
    return !(t2 < n2 - e || t2 > n2 && (N$1("Detected an update time that is in the future: " + t2 + " > " + n2), 1));
  }, t.prototype.Xa = function() {
    var t2 = this;
    this.document !== null && typeof this.document.addEventListener == "function" && (this.Qa = function() {
      t2._n.ds(function() {
        return t2.inForeground = t2.document.visibilityState === "visible", t2.Ja();
      });
    }, this.document.addEventListener("visibilitychange", this.Qa), this.inForeground = this.document.visibilityState === "visible");
  }, t.prototype.mc = function() {
    this.Qa && (this.document.removeEventListener("visibilitychange", this.Qa), this.Qa = null);
  }, t.prototype.Za = function() {
    var t2, e = this;
    typeof ((t2 = this.window) === null || t2 === void 0 ? void 0 : t2.addEventListener) == "function" && (this.Ua = function() {
      e.wc(), e._n.ds(function() {
        return e.Si();
      });
    }, this.window.addEventListener("unload", this.Ua));
  }, t.prototype.Tc = function() {
    this.Ua && (this.window.removeEventListener("unload", this.Ua), this.Ua = null);
  }, t.prototype.dc = function(t2) {
    var e;
    try {
      var n2 = ((e = this.Ya) === null || e === void 0 ? void 0 : e.getItem(this.fc(t2))) !== null;
      return T$1("IndexedDbPersistence", "Client '" + t2 + "' " + (n2 ? "is" : "is not") + " zombied in LocalStorage"), n2;
    } catch (t3) {
      return N$1("IndexedDbPersistence", "Failed to get zombied client id.", t3), false;
    }
  }, t.prototype.wc = function() {
    if (this.Ya)
      try {
        this.Ya.setItem(this.fc(this.clientId), String(Date.now()));
      } catch (t2) {
        N$1("Failed to set zombie client id.", t2);
      }
  }, t.prototype.Ec = function() {
    if (this.Ya)
      try {
        this.Ya.removeItem(this.fc(this.clientId));
      } catch (t2) {
      }
  }, t.prototype.fc = function(t2) {
    return "firestore_zombie_" + this.persistenceKey + "_" + t2;
  }, t;
}();
function wo(t) {
  return go.Un(t, Wi.store);
}
function bo(t) {
  return go.Un(t, so.store);
}
var Io = function() {
  function t(t2, e) {
    this.db = t2, this.do = new mi(this, e);
  }
  return t.prototype.Ro = function(t2) {
    var e = this.yc(t2);
    return this.db.Ac().Da(t2).next(function(t3) {
      return e.next(function(e2) {
        return t3 + e2;
      });
    });
  }, t.prototype.yc = function(t2) {
    var e = 0;
    return this.yo(t2, function(t3) {
      e++;
    }).next(function() {
      return e;
    });
  }, t.prototype.De = function(t2, e) {
    return this.db.Ac().De(t2, e);
  }, t.prototype.yo = function(t2, e) {
    return this.Vc(t2, function(t3, n2) {
      return e(n2);
    });
  }, t.prototype.Fa = function(t2, e, n2) {
    return Eo(t2, n2);
  }, t.prototype.xa = function(t2, e, n2) {
    return Eo(t2, n2);
  }, t.prototype.Vo = function(t2, e, n2) {
    return this.db.Ac().Vo(t2, e, n2);
  }, t.prototype.Ko = function(t2, e) {
    return Eo(t2, e);
  }, t.prototype.bc = function(t2, e) {
    return function(t3, e2) {
      var n2 = false;
      return Ci(t3).rs(function(r2) {
        return Li(t3, r2, e2).next(function(t4) {
          return t4 && (n2 = true), Tr.resolve(!t4);
        });
      }).next(function() {
        return n2;
      });
    }(t2, e);
  }, t.prototype.po = function(t2, e) {
    var n2 = this, r2 = this.db.Rc().aa(), i = [], o = 0;
    return this.Vc(t2, function(s, u2) {
      if (u2 <= e) {
        var a = n2.bc(t2, s).next(function(e2) {
          if (!e2)
            return o++, r2.Ar(t2, s).next(function() {
              return r2.Ir(s), vo(t2).delete([0, gi(s.path)]);
            });
        });
        i.push(a);
      }
    }).next(function() {
      return Tr.$n(i);
    }).next(function() {
      return r2.apply(t2);
    }).next(function() {
      return o;
    });
  }, t.prototype.removeTarget = function(t2, e) {
    var n2 = e.nt(t2.Ma);
    return this.db.Ac().ba(t2, n2);
  }, t.prototype.vc = function(t2, e) {
    return Eo(t2, e);
  }, t.prototype.Vc = function(t2, e) {
    var n2, r2 = vo(t2), i = Yr.oi;
    return r2.ss({
      index: no.documentTargetsIndex
    }, function(t3, r3) {
      var o = t3[0], s = (t3[1], r3.path), u2 = r3.sequenceNumber;
      o === 0 ? (i !== Yr.oi && e(new M$1(Ii(n2)), i), i = u2, n2 = s) : i = Yr.oi;
    }).next(function() {
      i !== Yr.oi && e(new M$1(Ii(n2)), i);
    });
  }, t.prototype.vo = function(t2) {
    return this.db.Rc().ha(t2);
  }, t;
}();
function Eo(t, e) {
  return vo(t).put(function(t2, e2) {
    return new no(0, gi(t2.path), e2);
  }(e, t.Ma));
}
function _o(t, e) {
  var n2 = t.projectId;
  return t.W || (n2 += "." + t.database), "firestore/" + e + "/" + n2 + "/";
}
var To = function() {
  function t(t2, e, n2) {
    this.persistence = t2, this.Sc = e, this.Dc = new Lt(st), this.Cc = new yt(function(t3) {
      return Tt(t3);
    }, Nt), this.Nc = gt.min(), this.vr = t2.Ic(n2), this.Fc = t2.Rc(), this.Ha = t2.Ac(), this.$c = new hi(this.Fc, this.vr, this.persistence.Pc()), this.Sc.xc(this.$c);
  }
  return t.prototype.Eo = function(t2) {
    var e = this;
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function(n2) {
      return t2.bo(n2, e.Dc);
    });
  }, t;
}();
function No(t, e) {
  var n2 = k$1(t);
  return n2.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function(t2) {
    var r2 = e.batch.keys(), i = n2.Fc.aa({
      ua: true
    });
    return function(t3, e2, n3, r3) {
      var i2 = n3.batch, o = i2.keys(), s = Tr.resolve();
      return o.forEach(function(t4) {
        s = s.next(function() {
          return r3.Ar(e2, t4);
        }).next(function(e3) {
          var o2 = e3, s2 = n3._r.get(t4);
          x$1(s2 !== null), (!o2 || o2.version.L(s2) < 0) && ((o2 = i2.ar(t4, o2, n3)) && r3.Tr(o2, n3.lr));
        });
      }), s.next(function() {
        return t3.vr.Qo(e2, i2);
      });
    }(n2, t2, e, i).next(function() {
      return i.apply(t2);
    }).next(function() {
      return n2.vr.Go(t2);
    }).next(function() {
      return n2.$c.$r(t2, r2);
    });
  });
}
function Ao(t) {
  var e = k$1(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function(t2) {
    return e.Ha.Ra(t2);
  });
}
function So(t, e) {
  var n2 = k$1(t), r2 = e.et, i = n2.Dc;
  return n2.persistence.runTransaction("Apply remote event", "readwrite-primary", function(t2) {
    var o = n2.Fc.aa({
      ua: true
    });
    i = n2.Dc;
    var s = [];
    e.Gt.forEach(function(e2, o2) {
      var u3 = i.get(o2);
      if (u3) {
        s.push(n2.Ha.$a(t2, e2.ne, o2).next(function() {
          return n2.Ha.Na(t2, e2.te, o2);
        }));
        var a2 = e2.resumeToken;
        if (a2.O() > 0) {
          var c2 = u3.st(a2, r2).nt(t2.Ma);
          i = i.rt(o2, c2), function(t3, e3, n3) {
            return x$1(e3.resumeToken.O() > 0), t3.resumeToken.O() === 0 || (e3.et.J() - t3.et.J() >= 3e8 || n3.te.size + n3.ee.size + n3.ne.size > 0);
          }(u3, c2, e2) && s.push(n2.Ha.ba(t2, c2));
        }
      }
    });
    var u2 = Ft(), a = Qt();
    if (e.Ht.forEach(function(t3, e2) {
      a = a.add(t3);
    }), s.push(o.getEntries(t2, a).next(function(i2) {
      e.Ht.forEach(function(a2, c2) {
        var h = i2.get(a2);
        c2 instanceof qn && c2.version.isEqual(gt.min()) ? (o.Ir(a2, r2), u2 = u2.rt(a2, c2)) : h == null || c2.version.L(h.version) > 0 || c2.version.L(h.version) === 0 && h.hasPendingWrites ? (o.Tr(c2, r2), u2 = u2.rt(a2, c2)) : T$1("LocalStore", "Ignoring outdated watch update for ", a2, ". Current version:", h.version, " Watch version:", c2.version), e.Yt.has(a2) && s.push(n2.persistence.Co.vc(t2, a2));
      });
    })), !r2.isEqual(gt.min())) {
      var c = n2.Ha.Ra(t2).next(function(e2) {
        return n2.Ha.ga(t2, t2.Ma, r2);
      });
      s.push(c);
    }
    return Tr.$n(s).next(function() {
      return o.apply(t2);
    }).next(function() {
      return n2.$c.kr(t2, u2);
    });
  }).then(function(t2) {
    return n2.Dc = i, t2;
  });
}
function Do(t, e) {
  var n2 = k$1(t);
  return n2.persistence.runTransaction("Get next mutation batch", "readonly", function(t2) {
    return e === void 0 && (e = -1), n2.vr.Lo(t2, e);
  });
}
function xo(t, e) {
  var n2 = k$1(t);
  return n2.persistence.runTransaction("Allocate target", "readwrite", function(t2) {
    var r2;
    return n2.Ha.Ca(t2, e).next(function(i) {
      return i ? (r2 = i, Tr.resolve(r2)) : n2.Ha.Ea(t2).next(function(i2) {
        return r2 = new xt(e, i2, 0, t2.Ma), n2.Ha.ya(t2, r2).next(function() {
          return r2;
        });
      });
    });
  }).then(function(t2) {
    var r2 = n2.Dc.get(t2.targetId);
    return (r2 === null || t2.et.L(r2.et) > 0) && (n2.Dc = n2.Dc.rt(t2.targetId, t2), n2.Cc.set(e, t2.targetId)), t2;
  });
}
function ko(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o, s, u2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = k$1(t), o = e.Dc.get(r2), s = i ? "readwrite" : "readwrite-primary", n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 5]), i ? [3, 3] : [4, e.persistence.runTransaction("Release target", s, function(t2) {
            return e.persistence.Co.removeTarget(t2, o);
          })];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return [3, 5];
        case 4:
          if (!Dr(u2 = n2.sent()))
            throw u2;
          return T$1("LocalStore", "Failed to update sequence numbers for target " + r2 + ": " + u2), [3, 5];
        case 5:
          return e.Dc = e.Dc.remove(r2), e.Cc.delete(o.target), [2];
      }
    });
  });
}
function Oo(t, e, n2) {
  var r2 = k$1(t), i = gt.min(), o = Qt();
  return r2.persistence.runTransaction("Execute query", "readonly", function(t2) {
    return function(t3, e2, n3) {
      var r3 = k$1(t3), i2 = r3.Cc.get(n3);
      return i2 !== void 0 ? Tr.resolve(r3.Dc.get(i2)) : r3.Ha.Ca(e2, n3);
    }(r2, t2, Xn(e)).next(function(e2) {
      if (e2)
        return i = e2.lastLimboFreeSnapshotVersion, r2.Ha.ka(t2, e2.targetId).next(function(t3) {
          o = t3;
        });
    }).next(function() {
      return r2.Sc.Or(t2, e, n2 ? i : gt.min(), n2 ? o : Qt());
    }).next(function(t3) {
      return {
        documents: t3,
        kc: o
      };
    });
  });
}
function Ro(t, e) {
  var n2 = k$1(t), r2 = k$1(n2.Ha), i = n2.Dc.get(e);
  return i ? Promise.resolve(i.target) : n2.persistence.runTransaction("Get target data", "readonly", function(t2) {
    return r2.qe(t2, e).next(function(t3) {
      return t3 ? t3.target : null;
    });
  });
}
function Lo(t) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      if (t.code !== b.FAILED_PRECONDITION || t.message !== ai)
        throw t;
      return T$1("LocalStore", "Unexpectedly lost primary lease"), [2];
    });
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Uo = function() {
  function t() {
    this.Mc = new Vt(Po.Oc), this.Lc = new Vt(Po.Bc);
  }
  return t.prototype.m = function() {
    return this.Mc.m();
  }, t.prototype.Fa = function(t2, e) {
    var n2 = new Po(t2, e);
    this.Mc = this.Mc.add(n2), this.Lc = this.Lc.add(n2);
  }, t.prototype.qc = function(t2, e) {
    var n2 = this;
    t2.forEach(function(t3) {
      return n2.Fa(t3, e);
    });
  }, t.prototype.xa = function(t2, e) {
    this.Uc(new Po(t2, e));
  }, t.prototype.Qc = function(t2, e) {
    var n2 = this;
    t2.forEach(function(t3) {
      return n2.xa(t3, e);
    });
  }, t.prototype.Wc = function(t2) {
    var e = this, n2 = new M$1(new P$1([])), r2 = new Po(n2, t2), i = new Po(n2, t2 + 1), o = [];
    return this.Lc.Nt([r2, i], function(t3) {
      e.Uc(t3), o.push(t3.key);
    }), o;
  }, t.prototype.jc = function() {
    var t2 = this;
    this.Mc.forEach(function(e) {
      return t2.Uc(e);
    });
  }, t.prototype.Uc = function(t2) {
    this.Mc = this.Mc.delete(t2), this.Lc = this.Lc.delete(t2);
  }, t.prototype.Kc = function(t2) {
    var e = new M$1(new P$1([])), n2 = new Po(e, t2), r2 = new Po(e, t2 + 1), i = Qt();
    return this.Lc.Nt([n2, r2], function(t3) {
      i = i.add(t3.key);
    }), i;
  }, t.prototype.zo = function(t2) {
    var e = new Po(t2, 0), n2 = this.Mc.$t(e);
    return n2 !== null && t2.isEqual(n2.key);
  }, t;
}(), Po = function() {
  function t(t2, e) {
    this.key = t2, this.Gc = e;
  }
  return t.Oc = function(t2, e) {
    return M$1.i(t2.key, e.key) || st(t2.Gc, e.Gc);
  }, t.Bc = function(t2, e) {
    return st(t2.Gc, e.Gc) || M$1.i(t2.key, e.key);
  }, t;
}(), Vo = function(t, e) {
  this.user = e, this.type = "OAuth", this.zc = {}, this.zc.Authorization = "Bearer " + t;
}, Co = function() {
  function t() {
    this.Hc = null;
  }
  return t.prototype.getToken = function() {
    return Promise.resolve(null);
  }, t.prototype.Yc = function() {
  }, t.prototype.Jc = function(t2) {
    this.Hc = t2, t2(Wr.UNAUTHENTICATED);
  }, t.prototype.Xc = function() {
    this.Hc = null;
  }, t;
}(), Mo = function() {
  function t(t2) {
    var e = this;
    this.Zc = null, this.currentUser = Wr.UNAUTHENTICATED, this.tu = false, this.eu = 0, this.Hc = null, this.forceRefresh = false, this.Zc = function() {
      e.eu++, e.currentUser = e.nu(), e.tu = true, e.Hc && e.Hc(e.currentUser);
    }, this.eu = 0, this.auth = t2.getImmediate({
      optional: true
    }), this.auth ? this.auth.addAuthTokenListener(this.Zc) : (this.Zc(null), t2.get().then(function(t3) {
      e.auth = t3, e.Zc && e.auth.addAuthTokenListener(e.Zc);
    }, function() {
    }));
  }
  return t.prototype.getToken = function() {
    var t2 = this, e = this.eu, n2 = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(n2).then(function(n3) {
      return t2.eu !== e ? (T$1("FirebaseCredentialsProvider", "getToken aborted due to token change."), t2.getToken()) : n3 ? (x$1(typeof n3.accessToken == "string"), new Vo(n3.accessToken, t2.currentUser)) : null;
    }) : Promise.resolve(null);
  }, t.prototype.Yc = function() {
    this.forceRefresh = true;
  }, t.prototype.Jc = function(t2) {
    this.Hc = t2, this.tu && t2(this.currentUser);
  }, t.prototype.Xc = function() {
    this.auth && this.auth.removeAuthTokenListener(this.Zc), this.Zc = null, this.Hc = null;
  }, t.prototype.nu = function() {
    var t2 = this.auth && this.auth.getUid();
    return x$1(t2 === null || typeof t2 == "string"), new Wr(t2);
  }, t;
}(), Fo = function() {
  function t(t2, e) {
    this.su = t2, this.iu = e, this.type = "FirstParty", this.user = Wr.ei;
  }
  return Object.defineProperty(t.prototype, "zc", {
    get: function() {
      var t2 = {
        "X-Goog-AuthUser": this.iu
      }, e = this.su.auth.getAuthHeaderValueForFirstParty([]);
      return e && (t2.Authorization = e), t2;
    },
    enumerable: false,
    configurable: true
  }), t;
}(), qo = function() {
  function t(t2, e) {
    this.su = t2, this.iu = e;
  }
  return t.prototype.getToken = function() {
    return Promise.resolve(new Fo(this.su, this.iu));
  }, t.prototype.Jc = function(t2) {
    t2(Wr.ei);
  }, t.prototype.Xc = function() {
  }, t.prototype.Yc = function() {
  }, t;
}(), Go = function() {
  function t(t2, e, n2, r2, i, o) {
    this._n = t2, this.ru = n2, this.ou = r2, this.au = i, this.listener = o, this.state = 0, this.cu = 0, this.uu = null, this.stream = null, this.gs = new _r(t2, e);
  }
  return t.prototype.hu = function() {
    return this.state === 1 || this.state === 2 || this.state === 4;
  }, t.prototype.lu = function() {
    return this.state === 2;
  }, t.prototype.start = function() {
    this.state !== 3 ? this.auth() : this._u();
  }, t.prototype.stop = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return this.hu() ? [4, this.close(0)] : [3, 2];
          case 1:
            t2.sent(), t2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.fu = function() {
    this.state = 0, this.gs.reset();
  }, t.prototype.du = function() {
    var t2 = this;
    this.lu() && this.uu === null && (this.uu = this._n.gn(this.ru, 6e4, function() {
      return t2.wu();
    }));
  }, t.prototype.mu = function(t2) {
    this.Tu(), this.stream.send(t2);
  }, t.prototype.wu = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        return this.lu() ? [2, this.close(0)] : [2];
      });
    });
  }, t.prototype.Tu = function() {
    this.uu && (this.uu.cancel(), this.uu = null);
  }, t.prototype.close = function(t2, r2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return this.Tu(), this.gs.cancel(), this.cu++, t2 !== 3 ? this.gs.reset() : r2 && r2.code === b.RESOURCE_EXHAUSTED ? (N$1(r2.toString()), N$1("Using maximum backoff delay to prevent overloading the backend."), this.gs.An()) : r2 && r2.code === b.UNAUTHENTICATED && this.au.Yc(), this.stream !== null && (this.Eu(), this.stream.close(), this.stream = null), this.state = t2, [4, this.listener.Iu(r2)];
          case 1:
            return e.sent(), [2];
        }
      });
    });
  }, t.prototype.Eu = function() {
  }, t.prototype.auth = function() {
    var t2 = this;
    this.state = 1;
    var e = this.Au(this.cu), n2 = this.cu;
    this.au.getToken().then(function(e2) {
      t2.cu === n2 && t2.Ru(e2);
    }, function(n3) {
      e(function() {
        var e2 = new I$1(b.UNKNOWN, "Fetching auth token failed: " + n3.message);
        return t2.Pu(e2);
      });
    });
  }, t.prototype.Ru = function(t2) {
    var e = this, n2 = this.Au(this.cu);
    this.stream = this.gu(t2), this.stream.yu(function() {
      n2(function() {
        return e.state = 2, e.listener.yu();
      });
    }), this.stream.Iu(function(t3) {
      n2(function() {
        return e.Pu(t3);
      });
    }), this.stream.onMessage(function(t3) {
      n2(function() {
        return e.onMessage(t3);
      });
    });
  }, t.prototype._u = function() {
    var t2 = this;
    this.state = 4, this.gs.Rn(function() {
      return __awaiter(t2, void 0, void 0, function() {
        return __generator(this, function(t3) {
          return this.state = 0, this.start(), [2];
        });
      });
    });
  }, t.prototype.Pu = function(t2) {
    return T$1("PersistentStream", "close with error: " + t2), this.stream = null, this.close(3, t2);
  }, t.prototype.Au = function(t2) {
    var e = this;
    return function(n2) {
      e._n.ds(function() {
        return e.cu === t2 ? n2() : (T$1("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
      });
    };
  }, t;
}(), Bo = function(e) {
  function n2(t, n3, r2, i, o) {
    var s = this;
    return (s = e.call(this, t, "listen_stream_connection_backoff", "listen_stream_idle", n3, r2, o) || this).serializer = i, s;
  }
  return __extends(n2, e), n2.prototype.gu = function(t) {
    return this.ou.Vu("Listen", t);
  }, n2.prototype.onMessage = function(t) {
    this.gs.reset();
    var e2 = function(t2, e3) {
      var n4;
      if ("targetChange" in e3) {
        e3.targetChange;
        var r2 = function(t3) {
          return t3 === "NO_CHANGE" ? 0 : t3 === "ADD" ? 1 : t3 === "REMOVE" ? 2 : t3 === "CURRENT" ? 3 : t3 === "RESET" ? 4 : D$1();
        }(e3.targetChange.targetChangeType || "NO_CHANGE"), i = e3.targetChange.targetIds || [], o = function(t3, e4) {
          return t3.Ue ? (x$1(e4 === void 0 || typeof e4 == "string"), ct.fromBase64String(e4 || "")) : (x$1(e4 === void 0 || e4 instanceof Uint8Array), ct.fromUint8Array(e4 || new Uint8Array()));
        }(t2, e3.targetChange.resumeToken), s = e3.targetChange.cause, u2 = s && function(t3) {
          var e4 = t3.code === void 0 ? b.UNKNOWN : Rt(t3.code);
          return new I$1(e4, t3.message || "");
        }(s);
        n4 = new ee(r2, i, o, u2 || null);
      } else if ("documentChange" in e3) {
        e3.documentChange;
        var a = e3.documentChange;
        a.document, a.document.name, a.document.updateTime;
        var c = Ce(t2, a.document.name), h = Le(a.document.updateTime), f = new Pn({
          mapValue: {
            fields: a.document.fields
          }
        }), l = new Fn(c, h, f, {}), p2 = a.targetIds || [], d = a.removedTargetIds || [];
        n4 = new Zt(p2, d, l.key, l);
      } else if ("documentDelete" in e3) {
        e3.documentDelete;
        var v2 = e3.documentDelete;
        v2.document;
        var y2 = Ce(t2, v2.document), m = v2.readTime ? Le(v2.readTime) : gt.min(), g2 = new qn(y2, m), w2 = v2.removedTargetIds || [];
        n4 = new Zt([], w2, g2.key, g2);
      } else if ("documentRemove" in e3) {
        e3.documentRemove;
        var E2 = e3.documentRemove;
        E2.document;
        var _2 = Ce(t2, E2.document), T2 = E2.removedTargetIds || [];
        n4 = new Zt([], T2, _2, null);
      } else {
        if (!("filter" in e3))
          return D$1();
        e3.filter;
        var N2 = e3.filter;
        N2.targetId;
        var A2 = N2.count || 0, S2 = new kt(A2), k2 = N2.targetId;
        n4 = new te(k2, S2);
      }
      return n4;
    }(this.serializer, t), n3 = function(t2) {
      if (!("targetChange" in t2))
        return gt.min();
      var e3 = t2.targetChange;
      return e3.targetIds && e3.targetIds.length ? gt.min() : e3.readTime ? Le(e3.readTime) : gt.min();
    }(t);
    return this.listener.pu(e2, n3);
  }, n2.prototype.bu = function(t) {
    var e2 = {};
    e2.database = qe(this.serializer), e2.addTarget = function(t2, e3) {
      var n4, r2 = e3.target;
      return (n4 = At(r2) ? {
        documents: Qe(t2, r2)
      } : {
        query: Ke(t2, r2)
      }).targetId = e3.targetId, e3.resumeToken.O() > 0 && (n4.resumeToken = Oe(t2, e3.resumeToken)), n4;
    }(this.serializer, t);
    var n3 = function(t2, e3) {
      var n4 = function(t3, e4) {
        switch (e4) {
          case 0:
            return null;
          case 1:
            return "existence-filter-mismatch";
          case 2:
            return "limbo-document";
          default:
            return D$1();
        }
      }(0, e3.tt);
      return n4 == null ? null : {
        "goog-listen-tags": n4
      };
    }(this.serializer, t);
    n3 && (e2.labels = n3), this.mu(e2);
  }, n2.prototype.vu = function(t) {
    var e2 = {};
    e2.database = qe(this.serializer), e2.removeTarget = t, this.mu(e2);
  }, n2;
}(Go), jo = function(e) {
  function n2(t, n3, r2, i, o) {
    var s = this;
    return (s = e.call(this, t, "write_stream_connection_backoff", "write_stream_idle", n3, r2, o) || this).serializer = i, s.Su = false, s;
  }
  return __extends(n2, e), Object.defineProperty(n2.prototype, "Du", {
    get: function() {
      return this.Su;
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.start = function() {
    this.Su = false, this.lastStreamToken = void 0, e.prototype.start.call(this);
  }, n2.prototype.Eu = function() {
    this.Su && this.Cu([]);
  }, n2.prototype.gu = function(t) {
    return this.ou.Vu("Write", t);
  }, n2.prototype.onMessage = function(t) {
    if (x$1(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Su) {
      this.gs.reset();
      var e2 = function(t2, e3) {
        return t2 && t2.length > 0 ? (x$1(e3 !== void 0), t2.map(function(t3) {
          return function(t4, e4) {
            var n4 = t4.updateTime ? Le(t4.updateTime) : Le(e4);
            n4.isEqual(gt.min()) && (n4 = Le(e4));
            var r2 = null;
            return t4.transformResults && t4.transformResults.length > 0 && (r2 = t4.transformResults), new gn(n4, r2);
          }(t3, e3);
        })) : [];
      }(t.writeResults, t.commitTime), n3 = Le(t.commitTime);
      return this.listener.Nu(n3, e2);
    }
    return x$1(!t.writeResults || t.writeResults.length === 0), this.Su = true, this.listener.Fu();
  }, n2.prototype.$u = function() {
    var t = {};
    t.database = qe(this.serializer), this.mu(t);
  }, n2.prototype.Cu = function(t) {
    var e2 = this, n3 = {
      streamToken: this.lastStreamToken,
      writes: t.map(function(t2) {
        return je(e2.serializer, t2);
      })
    };
    this.mu(n3);
  }, n2;
}(Go), zo = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this) || this).credentials = t, i.ou = n3, i.serializer = r2, i.xu = false, i;
  }
  return __extends(n2, e), n2.prototype.ku = function() {
    if (this.xu)
      throw new I$1(b.FAILED_PRECONDITION, "The client has already been terminated.");
  }, n2.prototype.Mu = function(t, e2, n3) {
    var r2 = this;
    return this.ku(), this.credentials.getToken().then(function(i) {
      return r2.ou.Mu(t, e2, n3, i);
    }).catch(function(t2) {
      throw t2.code === b.UNAUTHENTICATED && r2.credentials.Yc(), t2;
    });
  }, n2.prototype.Ou = function(t, e2, n3) {
    var r2 = this;
    return this.ku(), this.credentials.getToken().then(function(i) {
      return r2.ou.Ou(t, e2, n3, i);
    }).catch(function(t2) {
      throw t2.code === b.UNAUTHENTICATED && r2.credentials.Yc(), t2;
    });
  }, n2.prototype.terminate = function() {
    this.xu = false;
  }, n2;
}(function() {
}), Qo = function() {
  function t(t2, e) {
    this.os = t2, this.fi = e, this.state = "Unknown", this.Lu = 0, this.Bu = null, this.qu = true;
  }
  return t.prototype.Uu = function() {
    var t2 = this;
    this.Lu === 0 && (this.Qu("Unknown"), this.Bu = this.os.gn("online_state_timeout", 1e4, function() {
      return t2.Bu = null, t2.Wu("Backend didn't respond within 10 seconds."), t2.Qu("Offline"), Promise.resolve();
    }));
  }, t.prototype.ju = function(t2) {
    this.state === "Online" ? this.Qu("Unknown") : (this.Lu++, this.Lu >= 1 && (this.Ku(), this.Wu("Connection failed 1 times. Most recent error: " + t2.toString()), this.Qu("Offline")));
  }, t.prototype.set = function(t2) {
    this.Ku(), this.Lu = 0, t2 === "Online" && (this.qu = false), this.Qu(t2);
  }, t.prototype.Qu = function(t2) {
    t2 !== this.state && (this.state = t2, this.fi(t2));
  }, t.prototype.Wu = function(t2) {
    var e = "Could not reach Cloud Firestore backend. " + t2 + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
    this.qu ? (N$1(e), this.qu = false) : T$1("OnlineStateTracker", e);
  }, t.prototype.Ku = function() {
    this.Bu !== null && (this.Bu.cancel(), this.Bu = null);
  }, t;
}(), Ko = function(t, r2, i, o, s) {
  var u2 = this;
  this.Gu = t, this.zu = r2, this.os = i, this.Hu = {}, this.Yu = [], this.Ju = new Map(), this.Xu = new Set(), this.Zu = [], this.th = s, this.th.eh(function(t2) {
    i.ds(function() {
      return __awaiter(u2, void 0, void 0, function() {
        return __generator(this, function(t3) {
          switch (t3.label) {
            case 0:
              return ns(this) ? (T$1("RemoteStore", "Restarting streams for network reachability change."), [4, function(t4) {
                return __awaiter(this, void 0, void 0, function() {
                  var e;
                  return __generator(this, function(n2) {
                    switch (n2.label) {
                      case 0:
                        return (e = k$1(t4)).Xu.add(4), [4, Yo(e)];
                      case 1:
                        return n2.sent(), e.nh.set("Unknown"), e.Xu.delete(4), [4, Wo(e)];
                      case 2:
                        return n2.sent(), [2];
                    }
                  });
                });
              }(this)]) : [3, 2];
            case 1:
              t3.sent(), t3.label = 2;
            case 2:
              return [2];
          }
        });
      });
    });
  }), this.nh = new Qo(i, o);
};
function Wo(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e, r2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          if (!ns(t))
            return [3, 4];
          e = 0, r2 = t.Zu, n2.label = 1;
        case 1:
          return e < r2.length ? [4, (0, r2[e])(true)] : [3, 4];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function Yo(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e, r2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = 0, r2 = t.Zu, n2.label = 1;
        case 1:
          return e < r2.length ? [4, (0, r2[e])(false)] : [3, 4];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return e++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function Ho(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = k$1(t), T$1("RemoteStore", "RemoteStore shutting down."), e.Xu.add(5), [4, Yo(e)];
        case 1:
          return n2.sent(), e.th.Si(), e.nh.set("Unknown"), [2];
      }
    });
  });
}
function $o(t, e) {
  var n2 = k$1(t);
  n2.Ju.has(e.targetId) || (n2.Ju.set(e.targetId, e), es(n2) ? ts(n2) : ms(n2).lu() && Jo(n2, e));
}
function Xo(t, e) {
  var n2 = k$1(t), r2 = ms(n2);
  n2.Ju.delete(e), r2.lu() && Zo(n2, e), n2.Ju.size === 0 && (r2.lu() ? r2.du() : ns(n2) && n2.nh.set("Unknown"));
}
function Jo(t, e) {
  t.sh.Ee(e.targetId), ms(t).bu(e);
}
function Zo(t, e) {
  t.sh.Ee(e), ms(t).vu(e);
}
function ts(t) {
  t.sh = new re({
    Be: function(e) {
      return t.Hu.Be(e);
    },
    qe: function(e) {
      return t.Ju.get(e) || null;
    }
  }), ms(t).start(), t.nh.Uu();
}
function es(t) {
  return ns(t) && !ms(t).hu() && t.Ju.size > 0;
}
function ns(t) {
  return k$1(t).Xu.size === 0;
}
function rs(t) {
  t.sh = void 0;
}
function is(t) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      return t.Ju.forEach(function(e2, n2) {
        Jo(t, e2);
      }), [2];
    });
  });
}
function os(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      return rs(t), es(t) ? (t.nh.ju(r2), ts(t)) : t.nh.set("Unknown"), [2];
    });
  });
}
function ss(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var o, s, u2;
    return __generator(this, function(a) {
      switch (a.label) {
        case 0:
          if (t.nh.set("Online"), !(r2 instanceof ee && r2.state === 2 && r2.cause))
            return [3, 6];
          a.label = 1;
        case 1:
          return a.trys.push([1, 3, , 5]), [
            4,
            function(t2, r3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, i2, o2, s2;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      e = r3.cause, i2 = 0, o2 = r3.targetIds, n2.label = 1;
                    case 1:
                      return i2 < o2.length ? (s2 = o2[i2], t2.Ju.has(s2) ? [4, t2.Hu.ih(s2, e)] : [3, 3]) : [3, 5];
                    case 2:
                      n2.sent(), t2.Ju.delete(s2), t2.sh.removeTarget(s2), n2.label = 3;
                    case 3:
                      n2.label = 4;
                    case 4:
                      return i2++, [3, 1];
                    case 5:
                      return [2];
                  }
                });
              });
            }(t, r2)
          ];
        case 2:
          return a.sent(), [3, 5];
        case 3:
          return o = a.sent(), T$1("RemoteStore", "Failed to remove targets %s: %s ", r2.targetIds.join(","), o), [4, us(t, o)];
        case 4:
          return a.sent(), [3, 5];
        case 5:
          return [3, 13];
        case 6:
          if (r2 instanceof Zt ? t.sh.pe(r2) : r2 instanceof te ? t.sh.$e(r2) : t.sh.Se(r2), i.isEqual(gt.min()))
            return [3, 13];
          a.label = 7;
        case 7:
          return a.trys.push([7, 11, , 13]), [4, Ao(t.Gu)];
        case 8:
          return s = a.sent(), i.L(s) >= 0 ? [
            4,
            function(t2, e) {
              var n2 = t2.sh.Me(e);
              return n2.Gt.forEach(function(n3, r3) {
                if (n3.resumeToken.O() > 0) {
                  var i2 = t2.Ju.get(r3);
                  i2 && t2.Ju.set(r3, i2.st(n3.resumeToken, e));
                }
              }), n2.zt.forEach(function(e2) {
                var n3 = t2.Ju.get(e2);
                if (n3) {
                  t2.Ju.set(e2, n3.st(ct.B, n3.et)), Zo(t2, e2);
                  var r3 = new xt(n3.target, e2, 1, n3.sequenceNumber);
                  Jo(t2, r3);
                }
              }), t2.Hu.rh(n2);
            }(t, i)
          ] : [3, 10];
        case 9:
          a.sent(), a.label = 10;
        case 10:
          return [3, 13];
        case 11:
          return T$1("RemoteStore", "Failed to raise snapshot:", u2 = a.sent()), [4, us(t, u2)];
        case 12:
          return a.sent(), [3, 13];
        case 13:
          return [2];
      }
    });
  });
}
function us(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var o = this;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          if (!Dr(r2))
            throw r2;
          return t.Xu.add(1), [4, Yo(t)];
        case 1:
          return s.sent(), t.nh.set("Offline"), i || (i = function() {
            return Ao(t.Gu);
          }), t.os.Ds(function() {
            return __awaiter(o, void 0, void 0, function() {
              return __generator(this, function(e) {
                switch (e.label) {
                  case 0:
                    return T$1("RemoteStore", "Retrying IndexedDB access"), [4, i()];
                  case 1:
                    return e.sent(), t.Xu.delete(1), [4, Wo(t)];
                  case 2:
                    return e.sent(), [2];
                }
              });
            });
          }), [2];
      }
    });
  });
}
function as(t, e) {
  return e().catch(function(n2) {
    return us(t, n2, e);
  });
}
function cs(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e, r2, i, o, s;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = k$1(t), r2 = gs(e), i = e.Yu.length > 0 ? e.Yu[e.Yu.length - 1].batchId : -1, n2.label = 1;
        case 1:
          if (!function(t2) {
            return ns(t2) && t2.Yu.length < 10;
          }(e))
            return [3, 7];
          n2.label = 2;
        case 2:
          return n2.trys.push([2, 4, , 6]), [4, Do(e.Gu, i)];
        case 3:
          return (o = n2.sent()) === null ? (e.Yu.length === 0 && r2.du(), [3, 7]) : (i = o.batchId, function(t2, e2) {
            t2.Yu.push(e2);
            var n3 = gs(t2);
            n3.lu() && n3.Du && n3.Cu(e2.mutations);
          }(e, o), [3, 6]);
        case 4:
          return s = n2.sent(), [4, us(e, s)];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [3, 1];
        case 7:
          return hs(e) && fs(e), [2];
      }
    });
  });
}
function hs(t) {
  return ns(t) && !gs(t).hu() && t.Yu.length > 0;
}
function fs(t) {
  gs(t).start();
}
function ls(t) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(e) {
      return gs(t).$u(), [2];
    });
  });
}
function ps(t) {
  return __awaiter(this, void 0, void 0, function() {
    var e, r2, i, o;
    return __generator(this, function(n2) {
      for (e = gs(t), r2 = 0, i = t.Yu; r2 < i.length; r2++)
        o = i[r2], e.Cu(o.mutations);
      return [2];
    });
  });
}
function ds(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = t.Yu.shift(), o = si.from(e, r2, i), [4, as(t, function() {
            return t.Hu.oh(o);
          })];
        case 1:
          return n2.sent(), [4, cs(t)];
        case 2:
          return n2.sent(), [2];
      }
    });
  });
}
function vs(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(i) {
      switch (i.label) {
        case 0:
          return r2 && gs(t).Du ? [4, function(t2, r3) {
            return __awaiter(this, void 0, void 0, function() {
              var e, i2;
              return __generator(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    return Ot(i2 = r3.code) && i2 !== b.ABORTED ? (e = t2.Yu.shift(), gs(t2).fu(), [4, as(t2, function() {
                      return t2.Hu.ah(e.batchId, r3);
                    })]) : [3, 3];
                  case 1:
                    return n2.sent(), [4, cs(t2)];
                  case 2:
                    n2.sent(), n2.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          }(t, r2)] : [3, 2];
        case 1:
          i.sent(), i.label = 2;
        case 2:
          return hs(t) && fs(t), [2];
      }
    });
  });
}
function ys(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = k$1(t), r2 ? (e.Xu.delete(2), [4, Wo(e)]) : [3, 2];
        case 1:
          return n2.sent(), [3, 5];
        case 2:
          return (i = r2) ? [3, 4] : (e.Xu.add(2), [4, Yo(e)]);
        case 3:
          n2.sent(), i = e.nh.set("Unknown"), n2.label = 4;
        case 4:
          n2.label = 5;
        case 5:
          return [2];
      }
    });
  });
}
function ms(t) {
  var r2 = this;
  return t.uh || (t.uh = function(t2, e, n2) {
    var r3 = k$1(t2);
    return r3.ku(), new Bo(e, r3.ou, r3.credentials, r3.serializer, n2);
  }(t.zu, t.os, {
    yu: is.bind(null, t),
    Iu: os.bind(null, t),
    pu: ss.bind(null, t)
  }), t.Zu.push(function(i) {
    return __awaiter(r2, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return i ? (t.uh.fu(), es(t) ? ts(t) : t.nh.set("Unknown"), [3, 3]) : [3, 1];
          case 1:
            return [4, t.uh.stop()];
          case 2:
            e.sent(), rs(t), e.label = 3;
          case 3:
            return [2];
        }
      });
    });
  })), t.uh;
}
function gs(t) {
  var r2 = this;
  return t.hh || (t.hh = function(t2, e, n2) {
    var r3 = k$1(t2);
    return r3.ku(), new jo(e, r3.ou, r3.credentials, r3.serializer, n2);
  }(t.zu, t.os, {
    yu: ls.bind(null, t),
    Iu: vs.bind(null, t),
    Fu: ps.bind(null, t),
    Nu: ds.bind(null, t)
  }), t.Zu.push(function(i) {
    return __awaiter(r2, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return i ? (t.hh.fu(), [4, cs(t)]) : [3, 2];
          case 1:
            return e.sent(), [3, 4];
          case 2:
            return [4, t.hh.stop()];
          case 3:
            e.sent(), t.Yu.length > 0 && (T$1("RemoteStore", "Stopping write stream with " + t.Yu.length + " pending writes"), t.Yu = []), e.label = 4;
          case 4:
            return [2];
        }
      });
    });
  })), t.hh;
}
var ws = function(t) {
  this.key = t;
}, bs = function(t) {
  this.key = t;
}, Is = function() {
  function t(t2, e) {
    this.query = t2, this.lh = e, this._h = null, this.Zt = false, this.fh = Qt(), this.Qt = Qt(), this.dh = or(t2), this.wh = new Yt(this.dh);
  }
  return Object.defineProperty(t.prototype, "mh", {
    get: function() {
      return this.lh;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.Th = function(t2, e) {
    var n2 = this, r2 = e ? e.Eh : new Ht(), i = e ? e.wh : this.wh, o = e ? e.Qt : this.Qt, s = i, u2 = false, a = Qn(this.query) && i.size === this.query.limit ? i.last() : null, c = Kn(this.query) && i.size === this.query.limit ? i.first() : null;
    if (t2.ut(function(t3, e2) {
      var h2 = i.get(t3), f = e2 instanceof Fn ? e2 : null;
      f && (f = ir(n2.query, f) ? f : null);
      var l = !!h2 && n2.Qt.has(h2.key), p2 = !!f && (f.Ye || n2.Qt.has(f.key) && f.hasCommittedMutations), d = false;
      h2 && f ? h2.data().isEqual(f.data()) ? l !== p2 && (r2.track({
        type: 3,
        doc: f
      }), d = true) : n2.Ih(h2, f) || (r2.track({
        type: 2,
        doc: f
      }), d = true, (a && n2.dh(f, a) > 0 || c && n2.dh(f, c) < 0) && (u2 = true)) : !h2 && f ? (r2.track({
        type: 0,
        doc: f
      }), d = true) : h2 && !f && (r2.track({
        type: 1,
        doc: h2
      }), d = true, (a || c) && (u2 = true)), d && (f ? (s = s.add(f), o = p2 ? o.add(t3) : o.delete(t3)) : (s = s.delete(t3), o = o.delete(t3)));
    }), Qn(this.query) || Kn(this.query))
      for (; s.size > this.query.limit; ) {
        var h = Qn(this.query) ? s.last() : s.first();
        s = s.delete(h.key), o = o.delete(h.key), r2.track({
          type: 1,
          doc: h
        });
      }
    return {
      wh: s,
      Eh: r2,
      Ah: u2,
      Qt: o
    };
  }, t.prototype.Ih = function(t2, e) {
    return t2.Ye && e.hasCommittedMutations && !e.Ye;
  }, t.prototype.gr = function(t2, e, n2) {
    var r2 = this, i = this.wh;
    this.wh = t2.wh, this.Qt = t2.Qt;
    var o = t2.Eh.qt();
    o.sort(function(t3, e2) {
      return function(t4, e3) {
        var n3 = function(t5) {
          switch (t5) {
            case 0:
              return 1;
            case 2:
            case 3:
              return 2;
            case 1:
              return 0;
            default:
              return D$1();
          }
        };
        return n3(t4) - n3(e3);
      }(t3.type, e2.type) || r2.dh(t3.doc, e2.doc);
    }), this.Rh(n2);
    var s = e ? this.Ph() : [], u2 = this.fh.size === 0 && this.Zt ? 1 : 0, a = u2 !== this._h;
    return this._h = u2, o.length !== 0 || a ? {
      snapshot: new $t(this.query, t2.wh, i, o, t2.Qt, u2 === 0, a, false),
      gh: s
    } : {
      gh: s
    };
  }, t.prototype.Us = function(t2) {
    return this.Zt && t2 === "Offline" ? (this.Zt = false, this.gr({
      wh: this.wh,
      Eh: new Ht(),
      Qt: this.Qt,
      Ah: false
    }, false)) : {
      gh: []
    };
  }, t.prototype.yh = function(t2) {
    return !this.lh.has(t2) && !!this.wh.has(t2) && !this.wh.get(t2).Ye;
  }, t.prototype.Rh = function(t2) {
    var e = this;
    t2 && (t2.te.forEach(function(t3) {
      return e.lh = e.lh.add(t3);
    }), t2.ee.forEach(function(t3) {
    }), t2.ne.forEach(function(t3) {
      return e.lh = e.lh.delete(t3);
    }), this.Zt = t2.Zt);
  }, t.prototype.Ph = function() {
    var t2 = this;
    if (!this.Zt)
      return [];
    var e = this.fh;
    this.fh = Qt(), this.wh.forEach(function(e2) {
      t2.yh(e2.key) && (t2.fh = t2.fh.add(e2.key));
    });
    var n2 = [];
    return e.forEach(function(e2) {
      t2.fh.has(e2) || n2.push(new bs(e2));
    }), this.fh.forEach(function(t3) {
      e.has(t3) || n2.push(new ws(t3));
    }), n2;
  }, t.prototype.Vh = function(t2) {
    this.lh = t2.kc, this.fh = Qt();
    var e = this.Th(t2.documents);
    return this.gr(e, true);
  }, t.prototype.ph = function() {
    return $t.Kt(this.query, this.wh, this.Qt, this._h === 0);
  }, t;
}(), Es = function(t, e, n2) {
  this.query = t, this.targetId = e, this.view = n2;
}, _s = function(t) {
  this.key = t, this.bh = false;
}, Ts = function() {
  function t(t2, e, n2, r2, i, o) {
    this.Gu = t2, this.Sh = e, this.Dh = n2, this.Ch = r2, this.currentUser = i, this.Nh = o, this.Fh = {}, this.$h = new yt(function(t3) {
      return nr(t3);
    }, er), this.xh = new Map(), this.kh = [], this.Mh = new Lt(M$1.i), this.Oh = new Map(), this.Lh = new Uo(), this.Bh = {}, this.qh = new Map(), this.Uh = ho.Ta(), this.onlineState = "Unknown", this.Qh = void 0;
  }
  return Object.defineProperty(t.prototype, "Wh", {
    get: function() {
      return this.Qh === true;
    },
    enumerable: false,
    configurable: true
  }), t;
}();
function Ns(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o, s, u2, a;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = Xs(t), (s = e.$h.get(r2)) ? (i = s.targetId, e.Ch.Mi(i), o = s.view.ph(), [3, 4]) : [3, 1];
        case 1:
          return [4, xo(e.Gu, Xn(r2))];
        case 2:
          return u2 = n2.sent(), a = e.Ch.Mi(u2.targetId), i = u2.targetId, [4, As(e, r2, i, a === "current")];
        case 3:
          o = n2.sent(), e.Wh && $o(e.Sh, u2), n2.label = 4;
        case 4:
          return [2, o];
      }
    });
  });
}
function As(t, r2, i, o) {
  return __awaiter(this, void 0, void 0, function() {
    var s, u2, a, c, h, f;
    return __generator(this, function(l) {
      switch (l.label) {
        case 0:
          return t.jh = function(r3, i2, o2) {
            return function(t2, r4, i3, o3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, s2, u3;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = r4.view.Th(i3), e.Ah ? [4, Oo(t2.Gu, r4.query, false).then(function(t3) {
                        var n3 = t3.documents;
                        return r4.view.Th(n3, e);
                      })] : [3, 2];
                    case 1:
                      e = n2.sent(), n2.label = 2;
                    case 2:
                      return s2 = o3 && o3.Gt.get(r4.targetId), u3 = r4.view.gr(e, t2.Wh, s2), [2, (Cs(t2, r4.targetId, u3.gh), u3.snapshot)];
                  }
                });
              });
            }(t, r3, i2, o2);
          }, [4, Oo(t.Gu, r2, true)];
        case 1:
          return s = l.sent(), u2 = new Is(r2, s.kc), a = u2.Th(s.documents), c = Jt.Xt(i, o && t.onlineState !== "Offline"), h = u2.gr(a, t.Wh, c), Cs(t, i, h.gh), f = new Es(r2, i, u2), [2, (t.$h.set(r2, f), t.xh.has(i) ? t.xh.get(i).push(r2) : t.xh.set(i, [r2]), h.snapshot)];
      }
    });
  });
}
function Ss(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e = k$1(t), i = e.$h.get(r2), (o = e.xh.get(i.targetId)).length > 1 ? [2, (e.xh.set(i.targetId, o.filter(function(t2) {
            return !er(t2, r2);
          })), void e.$h.delete(r2))] : e.Wh ? (e.Ch.Li(i.targetId), e.Ch.Ni(i.targetId) ? [3, 2] : [4, ko(e.Gu, i.targetId, false).then(function() {
            e.Ch.qi(i.targetId), Xo(e.Sh, i.targetId), Ps(e, i.targetId);
          }).catch(Lo)]) : [3, 3];
        case 1:
          n2.sent(), n2.label = 2;
        case 2:
          return [3, 5];
        case 3:
          return Ps(e, i.targetId), [4, ko(e.Gu, i.targetId, true)];
        case 4:
          n2.sent(), n2.label = 5;
        case 5:
          return [2];
      }
    });
  });
}
function Ds(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = k$1(t), n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, So(e.Gu, r2)];
        case 2:
          return i = n2.sent(), r2.Gt.forEach(function(t2, n3) {
            var r3 = e.Oh.get(n3);
            r3 && (x$1(t2.te.size + t2.ee.size + t2.ne.size <= 1), t2.te.size > 0 ? r3.bh = true : t2.ee.size > 0 ? x$1(r3.bh) : t2.ne.size > 0 && (x$1(r3.bh), r3.bh = false));
          }), [4, qs(e, i, r2)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, Lo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function xs(t, e, n2) {
  var r2 = k$1(t);
  if (r2.Wh && n2 === 0 || !r2.Wh && n2 === 1) {
    var i = [];
    r2.$h.forEach(function(t2, n3) {
      var r3 = n3.view.Us(e);
      r3.snapshot && i.push(r3.snapshot);
    }), function(t2, e2) {
      var n3 = k$1(t2);
      n3.onlineState = e2;
      var r3 = false;
      n3.Ls.forEach(function(t3, n4) {
        for (var i2 = 0, o = n4.listeners; i2 < o.length; i2++) {
          o[i2].Us(e2) && (r3 = true);
        }
      }), r3 && Qr(n3);
    }(r2.Dh, e), i.length && r2.Fh.pu(i), r2.onlineState = e, r2.Wh && r2.Ch.ji(e);
  }
}
function ks(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o, s, u2, a, c;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return (e = k$1(t)).Ch.Ui(r2, "rejected", i), o = e.Oh.get(r2), (s = o && o.key) ? (u2 = (u2 = new Lt(M$1.i)).rt(s, new qn(s, gt.min())), a = Qt().add(s), c = new Xt(gt.min(), new Map(), new Vt(st), u2, a), [4, Ds(e, c)]) : [3, 2];
        case 1:
          return n2.sent(), e.Mh = e.Mh.remove(s), e.Oh.delete(r2), Fs(e), [3, 4];
        case 2:
          return [4, ko(e.Gu, r2, false).then(function() {
            return Ps(e, r2, i);
          }).catch(Lo)];
        case 3:
          n2.sent(), n2.label = 4;
        case 4:
          return [2];
      }
    });
  });
}
function Os(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = k$1(t), i = r2.batch.batchId, n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, No(e.Gu, r2)];
        case 2:
          return o = n2.sent(), Us(e, i, null), Ls(e, i), e.Ch.xi(i, "acknowledged"), [4, qs(e, o)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, Lo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function Rs(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = k$1(t), n2.label = 1;
        case 1:
          return n2.trys.push([1, 4, , 6]), [4, function(t2, e2) {
            var n3 = k$1(t2);
            return n3.persistence.runTransaction("Reject batch", "readwrite-primary", function(t3) {
              var r3;
              return n3.vr.Mo(t3, e2).next(function(e3) {
                return x$1(e3 !== null), r3 = e3.keys(), n3.vr.Qo(t3, e3);
              }).next(function() {
                return n3.vr.Go(t3);
              }).next(function() {
                return n3.$c.$r(t3, r3);
              });
            });
          }(e.Gu, r2)];
        case 2:
          return o = n2.sent(), Us(e, r2, i), Ls(e, r2), e.Ch.xi(r2, "rejected", i), [4, qs(e, o)];
        case 3:
          return n2.sent(), [3, 6];
        case 4:
          return [4, Lo(n2.sent())];
        case 5:
          return n2.sent(), [3, 6];
        case 6:
          return [2];
      }
    });
  });
}
function Ls(t, e) {
  (t.qh.get(e) || []).forEach(function(t2) {
    t2.resolve();
  }), t.qh.delete(e);
}
function Us(t, e, n2) {
  var r2 = k$1(t), i = r2.Bh[r2.currentUser.Zs()];
  if (i) {
    var o = i.get(e);
    o && (n2 ? o.reject(n2) : o.resolve(), i = i.remove(e)), r2.Bh[r2.currentUser.Zs()] = i;
  }
}
function Ps(t, e, n2) {
  n2 === void 0 && (n2 = null), t.Ch.Li(e);
  for (var r2 = 0, i = t.xh.get(e); r2 < i.length; r2++) {
    var o = i[r2];
    t.$h.delete(o), n2 && t.Fh.Kh(o, n2);
  }
  t.xh.delete(e), t.Wh && t.Lh.Wc(e).forEach(function(e2) {
    t.Lh.zo(e2) || Vs(t, e2);
  });
}
function Vs(t, e) {
  var n2 = t.Mh.get(e);
  n2 !== null && (Xo(t.Sh, n2), t.Mh = t.Mh.remove(e), t.Oh.delete(n2), Fs(t));
}
function Cs(t, e, n2) {
  for (var r2 = 0, i = n2; r2 < i.length; r2++) {
    var o = i[r2];
    o instanceof ws ? (t.Lh.Fa(o.key, e), Ms(t, o)) : o instanceof bs ? (T$1("SyncEngine", "Document no longer in limbo: " + o.key), t.Lh.xa(o.key, e), t.Lh.zo(o.key) || Vs(t, o.key)) : D$1();
  }
}
function Ms(t, e) {
  var n2 = e.key;
  t.Mh.get(n2) || (T$1("SyncEngine", "New document in limbo: " + n2), t.kh.push(n2), Fs(t));
}
function Fs(t) {
  for (; t.kh.length > 0 && t.Mh.size < t.Nh; ) {
    var e = t.kh.shift(), n2 = t.Uh.next();
    t.Oh.set(n2, new _s(e)), t.Mh = t.Mh.rt(e, n2), $o(t.Sh, new xt(Xn(zn(e.path)), n2, 2, Yr.oi));
  }
}
function qs(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var o, s, u2, a;
    return __generator(this, function(c) {
      switch (c.label) {
        case 0:
          return o = k$1(t), s = [], u2 = [], a = [], o.$h.m() ? [3, 3] : (o.$h.forEach(function(t2, e) {
            a.push(o.jh(e, r2, i).then(function(t3) {
              if (t3) {
                o.Wh && o.Ch.Ui(e.targetId, t3.fromCache ? "not-current" : "current"), s.push(t3);
                var n2 = fi.Gr(e.targetId, t3);
                u2.push(n2);
              }
            }));
          }), [4, Promise.all(a)]);
        case 1:
          return c.sent(), o.Fh.pu(s), [4, function(t2, r3) {
            return __awaiter(this, void 0, void 0, function() {
              var e, i2, o2, s2, u3, a2, c2, h, f;
              return __generator(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    e = k$1(t2), n2.label = 1;
                  case 1:
                    return n2.trys.push([1, 3, , 4]), [4, e.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function(t3) {
                      return Tr.forEach(r3, function(n3) {
                        return Tr.forEach(n3.jr, function(r4) {
                          return e.persistence.Co.Fa(t3, n3.targetId, r4);
                        }).next(function() {
                          return Tr.forEach(n3.Kr, function(r4) {
                            return e.persistence.Co.xa(t3, n3.targetId, r4);
                          });
                        });
                      });
                    })];
                  case 2:
                    return n2.sent(), [3, 4];
                  case 3:
                    if (!Dr(i2 = n2.sent()))
                      throw i2;
                    return T$1("LocalStore", "Failed to update sequence numbers: " + i2), [3, 4];
                  case 4:
                    for (o2 = 0, s2 = r3; o2 < s2.length; o2++)
                      u3 = s2[o2], a2 = u3.targetId, u3.fromCache || (c2 = e.Dc.get(a2), h = c2.et, f = c2.it(h), e.Dc = e.Dc.rt(a2, f));
                    return [2];
                }
              });
            });
          }(o.Gu, u2)];
        case 2:
          c.sent(), c.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function Gs(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var i, o;
    return __generator(this, function(s) {
      switch (s.label) {
        case 0:
          return (i = k$1(t)).currentUser.isEqual(r2) ? [3, 3] : (T$1("SyncEngine", "User change. New user:", r2.Zs()), [
            4,
            function(t2, r3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, i2, o2, s2;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = k$1(t2), i2 = e.vr, o2 = e.$c, [4, e.persistence.runTransaction("Handle user change", "readonly", function(t3) {
                        var n3;
                        return e.vr.qo(t3).next(function(s3) {
                          return n3 = s3, i2 = e.persistence.Ic(r3), o2 = new hi(e.Fc, i2, e.persistence.Pc()), i2.qo(t3);
                        }).next(function(e2) {
                          for (var r4 = [], i3 = [], s3 = Qt(), u2 = 0, a = n3; u2 < a.length; u2++) {
                            var c = a[u2];
                            r4.push(c.batchId);
                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                              var l = f[h];
                              s3 = s3.add(l.key);
                            }
                          }
                          for (var p2 = 0, d = e2; p2 < d.length; p2++) {
                            var v2 = d[p2];
                            i3.push(v2.batchId);
                            for (var y2 = 0, m = v2.mutations; y2 < m.length; y2++) {
                              var g2 = m[y2];
                              s3 = s3.add(g2.key);
                            }
                          }
                          return o2.$r(t3, s3).next(function(t4) {
                            return {
                              Gh: t4,
                              zh: r4,
                              Hh: i3
                            };
                          });
                        });
                      })];
                    case 1:
                      return s2 = n2.sent(), [2, (e.vr = i2, e.$c = o2, e.Sc.xc(e.$c), s2)];
                  }
                });
              });
            }(i.Gu, r2)
          ]);
        case 1:
          return o = s.sent(), i.currentUser = r2, function(t2, e) {
            t2.qh.forEach(function(t3) {
              t3.forEach(function(t4) {
                t4.reject(new I$1(b.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
              });
            }), t2.qh.clear();
          }(i), i.Ch.Wi(r2, o.zh, o.Hh), [4, qs(i, o.Gh)];
        case 2:
          s.sent(), s.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function Bs(t, e) {
  var n2 = k$1(t), r2 = n2.Oh.get(e);
  if (r2 && r2.bh)
    return Qt().add(r2.key);
  var i = Qt(), o = n2.xh.get(e);
  if (!o)
    return i;
  for (var s = 0, u2 = o; s < u2.length; s++) {
    var a = u2[s], c = n2.$h.get(a);
    i = i.xt(c.view.mh);
  }
  return i;
}
function js(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return [4, Oo((e = k$1(t)).Gu, r2.query, true)];
        case 1:
          return i = n2.sent(), o = r2.view.Vh(i), [2, (e.Wh && Cs(e, r2.targetId, o.gh), o)];
      }
    });
  });
}
function zs(t, r2, i, o) {
  return __awaiter(this, void 0, void 0, function() {
    var e, s;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return [4, function(t2, e2) {
            var n3 = k$1(t2), r3 = k$1(n3.vr);
            return n3.persistence.runTransaction("Lookup mutation documents", "readonly", function(t3) {
              return r3.Oo(t3, e2).next(function(e3) {
                return e3 ? n3.$c.$r(t3, e3) : Tr.resolve(null);
              });
            });
          }((e = k$1(t)).Gu, r2)];
        case 1:
          return (s = n2.sent()) === null ? [3, 6] : i !== "pending" ? [3, 3] : [4, cs(e.Sh)];
        case 2:
          return n2.sent(), [3, 4];
        case 3:
          i === "acknowledged" || i === "rejected" ? (Us(e, r2, o || null), Ls(e, r2), function(t2, e2) {
            k$1(k$1(t2).vr).jo(e2);
          }(e.Gu, r2)) : D$1(), n2.label = 4;
        case 4:
          return [4, qs(e, s)];
        case 5:
          return n2.sent(), [3, 7];
        case 6:
          T$1("SyncEngine", "Cannot apply mutation batch with id: " + r2), n2.label = 7;
        case 7:
          return [2];
      }
    });
  });
}
function Qs(t, r2) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i, o, s, u2, a, c, h;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return Xs(e = k$1(t)), Js(e), r2 !== true || e.Qh === true ? [3, 3] : (i = e.Ch.Di(), [4, Ks(e, i.A())]);
        case 1:
          return o = n2.sent(), e.Qh = true, [4, ys(e.Sh, true)];
        case 2:
          for (n2.sent(), s = 0, u2 = o; s < u2.length; s++)
            a = u2[s], $o(e.Sh, a);
          return [3, 7];
        case 3:
          return r2 !== false || e.Qh === false ? [3, 7] : (c = [], h = Promise.resolve(), e.xh.forEach(function(t2, n3) {
            e.Ch.Bi(n3) ? c.push(n3) : h = h.then(function() {
              return Ps(e, n3), ko(e.Gu, n3, true);
            }), Xo(e.Sh, n3);
          }), [4, h]);
        case 4:
          return n2.sent(), [4, Ks(e, c)];
        case 5:
          return n2.sent(), function(t2) {
            var e2 = k$1(t2);
            e2.Oh.forEach(function(t3, n3) {
              Xo(e2.Sh, n3);
            }), e2.Lh.jc(), e2.Oh = new Map(), e2.Mh = new Lt(M$1.i);
          }(e), e.Qh = false, [4, ys(e.Sh, false)];
        case 6:
          n2.sent(), n2.label = 7;
        case 7:
          return [2];
      }
    });
  });
}
function Ks(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, i2, o, s, u2, a, c, h, f, l, p2, d, v2, y2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          e = k$1(t), i2 = [], o = [], s = 0, u2 = r2, n2.label = 1;
        case 1:
          return s < u2.length ? (a = u2[s], c = void 0, (h = e.xh.get(a)) && h.length !== 0 ? [4, xo(e.Gu, Xn(h[0]))] : [3, 7]) : [3, 13];
        case 2:
          c = n2.sent(), f = 0, l = h, n2.label = 3;
        case 3:
          return f < l.length ? (p2 = l[f], d = e.$h.get(p2), [4, js(e, d)]) : [3, 6];
        case 4:
          (v2 = n2.sent()).snapshot && o.push(v2.snapshot), n2.label = 5;
        case 5:
          return f++, [3, 3];
        case 6:
          return [3, 11];
        case 7:
          return [4, Ro(e.Gu, a)];
        case 8:
          return y2 = n2.sent(), [4, xo(e.Gu, y2)];
        case 9:
          return c = n2.sent(), [4, As(e, Ws(y2), a, false)];
        case 10:
          n2.sent(), n2.label = 11;
        case 11:
          i2.push(c), n2.label = 12;
        case 12:
          return s++, [3, 1];
        case 13:
          return [2, (e.Fh.pu(o), i2)];
      }
    });
  });
}
function Ws(t) {
  return jn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt);
}
function Ys(t) {
  var e = k$1(t);
  return k$1(k$1(e.Gu).persistence).Vi();
}
function Hs(t, r2, i, o) {
  return __awaiter(this, void 0, void 0, function() {
    var e, s, u2;
    return __generator(this, function(n2) {
      switch (n2.label) {
        case 0:
          return (e = k$1(t)).Qh ? (T$1("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
        case 1:
          if (!e.xh.has(r2))
            return [3, 8];
          switch (i) {
            case "current":
            case "not-current":
              return [3, 2];
            case "rejected":
              return [3, 5];
          }
          return [3, 7];
        case 2:
          return [4, function(t2) {
            var e2 = k$1(t2), n3 = k$1(e2.Fc);
            return e2.persistence.runTransaction("Get new document changes", "readonly", function(t3) {
              return n3.ia(t3, e2.Nc);
            }).then(function(t3) {
              var n4 = t3.ra, r3 = t3.readTime;
              return e2.Nc = r3, n4;
            });
          }(e.Gu)];
        case 3:
          return s = n2.sent(), u2 = Xt.Jt(r2, i === "current"), [4, qs(e, s, u2)];
        case 4:
          return n2.sent(), [3, 8];
        case 5:
          return [4, ko(e.Gu, r2, true)];
        case 6:
          return n2.sent(), Ps(e, r2, o), [3, 8];
        case 7:
          D$1(), n2.label = 8;
        case 8:
          return [2];
      }
    });
  });
}
function $s(t, r2, i) {
  return __awaiter(this, void 0, void 0, function() {
    var e, o, s, u2, a, c, h, f, l, p2;
    return __generator(this, function(d) {
      switch (d.label) {
        case 0:
          if (!(e = Xs(t)).Qh)
            return [3, 10];
          o = 0, s = r2, d.label = 1;
        case 1:
          return o < s.length ? (u2 = s[o], e.xh.has(u2) ? (T$1("SyncEngine", "Adding an already active target " + u2), [3, 5]) : [4, Ro(e.Gu, u2)]) : [3, 6];
        case 2:
          return a = d.sent(), [4, xo(e.Gu, a)];
        case 3:
          return c = d.sent(), [4, As(e, Ws(a), c.targetId, false)];
        case 4:
          d.sent(), $o(e.Sh, c), d.label = 5;
        case 5:
          return o++, [3, 1];
        case 6:
          h = function(t2) {
            return __generator(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return e.xh.has(t2) ? [4, ko(e.Gu, t2, false).then(function() {
                    Xo(e.Sh, t2), Ps(e, t2);
                  }).catch(Lo)] : [3, 2];
                case 1:
                  n2.sent(), n2.label = 2;
                case 2:
                  return [2];
              }
            });
          }, f = 0, l = i, d.label = 7;
        case 7:
          return f < l.length ? (p2 = l[f], [5, h(p2)]) : [3, 10];
        case 8:
          d.sent(), d.label = 9;
        case 9:
          return f++, [3, 7];
        case 10:
          return [2];
      }
    });
  });
}
function Xs(t) {
  var e = k$1(t);
  return e.Sh.Hu.rh = Ds.bind(null, e), e.Sh.Hu.Be = Bs.bind(null, e), e.Sh.Hu.ih = ks.bind(null, e), e.Fh.pu = jr.bind(null, e.Dh), e.Fh.Kh = zr.bind(null, e.Dh), e;
}
function Js(t) {
  var e = k$1(t);
  return e.Sh.Hu.oh = Os.bind(null, e), e.Sh.Hu.ah = Rs.bind(null, e), e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zs = function() {
  function t() {
  }
  return t.prototype.xc = function(t2) {
    this.Yh = t2;
  }, t.prototype.Or = function(t2, e, n2, r2) {
    var i = this;
    return function(t3) {
      return t3.filters.length === 0 && t3.limit === null && t3.startAt == null && t3.endAt == null && (t3.rn.length === 0 || t3.rn.length === 1 && t3.rn[0].field.p());
    }(e) || n2.isEqual(gt.min()) ? this.Jh(t2, e) : this.Yh.$r(t2, r2).next(function(o) {
      var u2 = i.Xh(e, o);
      return (Qn(e) || Kn(e)) && i.Ah(e.on, u2, r2, n2) ? i.Jh(t2, e) : (_() <= LogLevel.DEBUG && T$1("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n2.toString(), rr(e)), i.Yh.Or(t2, e, n2).next(function(t3) {
        return u2.forEach(function(e2) {
          t3 = t3.rt(e2.key, e2);
        }), t3;
      }));
    });
  }, t.prototype.Xh = function(t2, e) {
    var n2 = new Vt(or(t2));
    return e.forEach(function(e2, r2) {
      r2 instanceof Fn && ir(t2, r2) && (n2 = n2.add(r2));
    }), n2;
  }, t.prototype.Ah = function(t2, e, n2, r2) {
    if (n2.size !== e.size)
      return true;
    var i = t2 === "F" ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.L(r2) > 0);
  }, t.prototype.Jh = function(t2, e) {
    return _() <= LogLevel.DEBUG && T$1("IndexFreeQueryEngine", "Using full collection scan to execute query:", rr(e)), this.Yh.Or(t2, e, gt.min());
  }, t;
}(), tu = function() {
  function t(t2, e) {
    this.Sr = t2, this.Co = e, this.vr = [], this.Zh = 1, this.tl = new Vt(Po.Oc);
  }
  return t.prototype.$o = function(t2) {
    return Tr.resolve(this.vr.length === 0);
  }, t.prototype.xo = function(t2, e, n2, r2) {
    var i = this.Zh;
    this.Zh++, this.vr.length > 0 && this.vr[this.vr.length - 1];
    var o = new oi(i, e, n2, r2);
    this.vr.push(o);
    for (var s = 0, u2 = r2; s < u2.length; s++) {
      var a = u2[s];
      this.tl = this.tl.add(new Po(a.key, i)), this.Sr.ko(t2, a.key.path.h());
    }
    return Tr.resolve(o);
  }, t.prototype.Mo = function(t2, e) {
    return Tr.resolve(this.el(e));
  }, t.prototype.Lo = function(t2, e) {
    var n2 = e + 1, r2 = this.nl(n2), i = r2 < 0 ? 0 : r2;
    return Tr.resolve(this.vr.length > i ? this.vr[i] : null);
  }, t.prototype.Bo = function() {
    return Tr.resolve(this.vr.length === 0 ? -1 : this.Zh - 1);
  }, t.prototype.qo = function(t2) {
    return Tr.resolve(this.vr.slice());
  }, t.prototype.Cr = function(t2, e) {
    var n2 = this, r2 = new Po(e, 0), i = new Po(e, Number.POSITIVE_INFINITY), o = [];
    return this.tl.Nt([r2, i], function(t3) {
      var e2 = n2.el(t3.Gc);
      o.push(e2);
    }), Tr.resolve(o);
  }, t.prototype.Mr = function(t2, e) {
    var n2 = this, r2 = new Vt(st);
    return e.forEach(function(t3) {
      var e2 = new Po(t3, 0), i = new Po(t3, Number.POSITIVE_INFINITY);
      n2.tl.Nt([e2, i], function(t4) {
        r2 = r2.add(t4.Gc);
      });
    }), Tr.resolve(this.sl(r2));
  }, t.prototype.Qr = function(t2, e) {
    var n2 = e.path, r2 = n2.length + 1, i = n2;
    M$1.F(i) || (i = i.child(""));
    var o = new Po(new M$1(i), 0), s = new Vt(st);
    return this.tl.Ft(function(t3) {
      var e2 = t3.key.path;
      return !!n2.T(e2) && (e2.length === r2 && (s = s.add(t3.Gc)), true);
    }, o), Tr.resolve(this.sl(s));
  }, t.prototype.sl = function(t2) {
    var e = this, n2 = [];
    return t2.forEach(function(t3) {
      var r2 = e.el(t3);
      r2 !== null && n2.push(r2);
    }), n2;
  }, t.prototype.Qo = function(t2, e) {
    var n2 = this;
    x$1(this.il(e.batchId, "removed") === 0), this.vr.shift();
    var r2 = this.tl;
    return Tr.forEach(e.mutations, function(i) {
      var o = new Po(i.key, e.batchId);
      return r2 = r2.delete(o), n2.Co.Ko(t2, i.key);
    }).next(function() {
      n2.tl = r2;
    });
  }, t.prototype.jo = function(t2) {
  }, t.prototype.zo = function(t2, e) {
    var n2 = new Po(e, 0), r2 = this.tl.$t(n2);
    return Tr.resolve(e.isEqual(r2 && r2.key));
  }, t.prototype.Go = function(t2) {
    return this.vr.length, Tr.resolve();
  }, t.prototype.il = function(t2, e) {
    return this.nl(t2);
  }, t.prototype.nl = function(t2) {
    return this.vr.length === 0 ? 0 : t2 - this.vr[0].batchId;
  }, t.prototype.el = function(t2) {
    var e = this.nl(t2);
    return e < 0 || e >= this.vr.length ? null : this.vr[e];
  }, t;
}(), eu = function() {
  function t(t2, e) {
    this.Sr = t2, this.rl = e, this.docs = new Lt(M$1.i), this.size = 0;
  }
  return t.prototype.Tr = function(t2, e, n2) {
    var r2 = e.key, i = this.docs.get(r2), o = i ? i.size : 0, s = this.rl(e);
    return this.docs = this.docs.rt(r2, {
      Zo: e,
      size: s,
      readTime: n2
    }), this.size += s - o, this.Sr.ko(t2, r2.path.h());
  }, t.prototype.Ir = function(t2) {
    var e = this.docs.get(t2);
    e && (this.docs = this.docs.remove(t2), this.size -= e.size);
  }, t.prototype.Ar = function(t2, e) {
    var n2 = this.docs.get(e);
    return Tr.resolve(n2 ? n2.Zo : null);
  }, t.prototype.getEntries = function(t2, e) {
    var n2 = this, r2 = qt();
    return e.forEach(function(t3) {
      var e2 = n2.docs.get(t3);
      r2 = r2.rt(t3, e2 ? e2.Zo : null);
    }), Tr.resolve(r2);
  }, t.prototype.Or = function(t2, e, n2) {
    for (var r2 = Bt(), i = new M$1(e.path.child("")), o = this.docs._t(i); o.It(); ) {
      var s = o.Et(), u2 = s.key, a = s.value, c = a.Zo, h = a.readTime;
      if (!e.path.T(u2.path))
        break;
      h.L(n2) <= 0 || c instanceof Fn && ir(e, c) && (r2 = r2.rt(c.key, c));
    }
    return Tr.resolve(r2);
  }, t.prototype.ol = function(t2, e) {
    return Tr.forEach(this.docs, function(t3) {
      return e(t3);
    });
  }, t.prototype.aa = function(e) {
    return new t.ca(this);
  }, t.prototype.ha = function(t2) {
    return Tr.resolve(this.size);
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
eu.ca = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this) || this).la = t, n3;
  }
  return __extends(n2, e), n2.prototype.gr = function(t) {
    var e2 = this, n3 = [];
    return this.dr.forEach(function(r2, i) {
      i ? n3.push(e2.la.Tr(t, i, e2.readTime)) : e2.la.Ir(r2);
    }), Tr.$n(n3);
  }, n2.prototype.Rr = function(t, e2) {
    return this.la.Ar(t, e2);
  }, n2.prototype.Pr = function(t, e2) {
    return this.la.getEntries(t, e2);
  }, n2;
}(ui);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nu = function() {
  function t(t2) {
    this.persistence = t2, this.al = new yt(function(t3) {
      return Tt(t3);
    }, Nt), this.lastRemoteSnapshotVersion = gt.min(), this.highestTargetId = 0, this.cl = 0, this.ul = new Uo(), this.targetCount = 0, this.hl = ho.ma();
  }
  return t.prototype.De = function(t2, e) {
    return this.al.forEach(function(t3, n2) {
      return e(n2);
    }), Tr.resolve();
  }, t.prototype.Ra = function(t2) {
    return Tr.resolve(this.lastRemoteSnapshotVersion);
  }, t.prototype.Pa = function(t2) {
    return Tr.resolve(this.cl);
  }, t.prototype.Ea = function(t2) {
    return this.highestTargetId = this.hl.next(), Tr.resolve(this.highestTargetId);
  }, t.prototype.ga = function(t2, e, n2) {
    return n2 && (this.lastRemoteSnapshotVersion = n2), e > this.cl && (this.cl = e), Tr.resolve();
  }, t.prototype.Va = function(t2) {
    this.al.set(t2.target, t2);
    var e = t2.targetId;
    e > this.highestTargetId && (this.hl = new ho(e), this.highestTargetId = e), t2.sequenceNumber > this.cl && (this.cl = t2.sequenceNumber);
  }, t.prototype.ya = function(t2, e) {
    return this.Va(e), this.targetCount += 1, Tr.resolve();
  }, t.prototype.ba = function(t2, e) {
    return this.Va(e), Tr.resolve();
  }, t.prototype.va = function(t2, e) {
    return this.al.delete(e.target), this.ul.Wc(e.targetId), this.targetCount -= 1, Tr.resolve();
  }, t.prototype.Vo = function(t2, e, n2) {
    var r2 = this, i = 0, o = [];
    return this.al.forEach(function(s, u2) {
      u2.sequenceNumber <= e && n2.get(u2.targetId) === null && (r2.al.delete(s), o.push(r2.Sa(t2, u2.targetId)), i++);
    }), Tr.$n(o).next(function() {
      return i;
    });
  }, t.prototype.Da = function(t2) {
    return Tr.resolve(this.targetCount);
  }, t.prototype.Ca = function(t2, e) {
    var n2 = this.al.get(e) || null;
    return Tr.resolve(n2);
  }, t.prototype.Na = function(t2, e, n2) {
    return this.ul.qc(e, n2), Tr.resolve();
  }, t.prototype.$a = function(t2, e, n2) {
    this.ul.Qc(e, n2);
    var r2 = this.persistence.Co, i = [];
    return r2 && e.forEach(function(e2) {
      i.push(r2.Ko(t2, e2));
    }), Tr.$n(i);
  }, t.prototype.Sa = function(t2, e) {
    return this.ul.Wc(e), Tr.resolve();
  }, t.prototype.ka = function(t2, e) {
    var n2 = this.ul.Kc(e);
    return Tr.resolve(n2);
  }, t.prototype.zo = function(t2, e) {
    return Tr.resolve(this.ul.zo(e));
  }, t;
}(), ru = function() {
  function t(t2) {
    var e = this;
    this.ll = {}, this.Ba = new Yr(0), this.qa = false, this.qa = true, this.Co = t2(this), this.Ha = new nu(this), this.Sr = new ji(), this.br = new eu(this.Sr, function(t3) {
      return e.Co._l(t3);
    });
  }
  return t.prototype.start = function() {
    return Promise.resolve();
  }, t.prototype.Si = function() {
    return this.qa = false, Promise.resolve();
  }, Object.defineProperty(t.prototype, "Ti", {
    get: function() {
      return this.qa;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.nc = function() {
  }, t.prototype.sc = function() {
  }, t.prototype.Pc = function() {
    return this.Sr;
  }, t.prototype.Ic = function(t2) {
    var e = this.ll[t2.Zs()];
    return e || (e = new tu(this.Sr, this.Co), this.ll[t2.Zs()] = e), e;
  }, t.prototype.Ac = function() {
    return this.Ha;
  }, t.prototype.Rc = function() {
    return this.br;
  }, t.prototype.runTransaction = function(t2, e, n2) {
    var r2 = this;
    T$1("MemoryPersistence", "Starting transaction:", t2);
    var i = new iu(this.Ba.next());
    return this.Co.fl(), n2(i).next(function(t3) {
      return r2.Co.dl(i).next(function() {
        return t3;
      });
    }).Nn().then(function(t3) {
      return i.pr(), t3;
    });
  }, t.prototype.wl = function(t2, e) {
    return Tr.xn(Object.values(this.ll).map(function(n2) {
      return function() {
        return n2.zo(t2, e);
      };
    }));
  }, t;
}(), iu = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this) || this).Ma = t, n3;
  }
  return __extends(n2, e), n2;
}(ci), ou = function() {
  function t(t2) {
    this.persistence = t2, this.ml = new Uo(), this.Tl = null;
  }
  return t.El = function(e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "Il", {
    get: function() {
      if (this.Tl)
        return this.Tl;
      throw D$1();
    },
    enumerable: false,
    configurable: true
  }), t.prototype.Fa = function(t2, e, n2) {
    return this.ml.Fa(n2, e), this.Il.delete(n2.toString()), Tr.resolve();
  }, t.prototype.xa = function(t2, e, n2) {
    return this.ml.xa(n2, e), this.Il.add(n2.toString()), Tr.resolve();
  }, t.prototype.Ko = function(t2, e) {
    return this.Il.add(e.toString()), Tr.resolve();
  }, t.prototype.removeTarget = function(t2, e) {
    var n2 = this;
    this.ml.Wc(e.targetId).forEach(function(t3) {
      return n2.Il.add(t3.toString());
    });
    var r2 = this.persistence.Ac();
    return r2.ka(t2, e.targetId).next(function(t3) {
      t3.forEach(function(t4) {
        return n2.Il.add(t4.toString());
      });
    }).next(function() {
      return r2.va(t2, e);
    });
  }, t.prototype.fl = function() {
    this.Tl = new Set();
  }, t.prototype.dl = function(t2) {
    var e = this, n2 = this.persistence.Rc().aa();
    return Tr.forEach(this.Il, function(r2) {
      var i = M$1.D(r2);
      return e.Al(t2, i).next(function(t3) {
        t3 || n2.Ir(i);
      });
    }).next(function() {
      return e.Tl = null, n2.apply(t2);
    });
  }, t.prototype.vc = function(t2, e) {
    var n2 = this;
    return this.Al(t2, e).next(function(t3) {
      t3 ? n2.Il.delete(e.toString()) : n2.Il.add(e.toString());
    });
  }, t.prototype._l = function(t2) {
    return 0;
  }, t.prototype.Al = function(t2, e) {
    var n2 = this;
    return Tr.xn([function() {
      return Tr.resolve(n2.ml.zo(e));
    }, function() {
      return n2.persistence.Ac().zo(t2, e);
    }, function() {
      return n2.persistence.wl(t2, e);
    }]);
  }, t;
}(), su = function() {
  function t(t2) {
    this.Rl = t2.Rl, this.Pl = t2.Pl;
  }
  return t.prototype.yu = function(t2) {
    this.gl = t2;
  }, t.prototype.Iu = function(t2) {
    this.yl = t2;
  }, t.prototype.onMessage = function(t2) {
    this.Vl = t2;
  }, t.prototype.close = function() {
    this.Pl();
  }, t.prototype.send = function(t2) {
    this.Rl(t2);
  }, t.prototype.pl = function() {
    this.gl();
  }, t.prototype.bl = function(t2) {
    this.yl(t2);
  }, t.prototype.vl = function(t2) {
    this.Vl(t2);
  }, t;
}(), uu = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
}, au = function(e) {
  function n2(t) {
    var n3 = this;
    return (n3 = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n3;
  }
  return __extends(n2, e), n2.prototype.$l = function(t, e2, n3, r2) {
    return new Promise(function(i, o) {
      var s = new esm_5();
      s.listenOnce(esm_3.COMPLETE, function() {
        try {
          switch (s.getLastErrorCode()) {
            case esm_2.NO_ERROR:
              var e3 = s.getResponseJson();
              T$1("Connection", "XHR received:", JSON.stringify(e3)), i(e3);
              break;
            case esm_2.TIMEOUT:
              T$1("Connection", 'RPC "' + t + '" timed out'), o(new I$1(b.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case esm_2.HTTP_ERROR:
              var n4 = s.getStatus();
              if (T$1("Connection", 'RPC "' + t + '" failed with status:', n4, "response text:", s.getResponseText()), n4 > 0) {
                var r3 = s.getResponseJson().error;
                if (r3 && r3.status && r3.message) {
                  var u3 = function(t2) {
                    var e4 = t2.toLowerCase().replace("_", "-");
                    return Object.values(b).indexOf(e4) >= 0 ? e4 : b.UNKNOWN;
                  }(r3.status);
                  o(new I$1(u3, r3.message));
                } else
                  o(new I$1(b.UNKNOWN, "Server responded with status " + s.getStatus()));
              } else
                o(new I$1(b.UNAVAILABLE, "Connection failed."));
              break;
            default:
              D$1();
          }
        } finally {
          T$1("Connection", 'RPC "' + t + '" completed.');
        }
      });
      var u2 = JSON.stringify(r2);
      s.send(e2, "POST", u2, n3, 15);
    });
  }, n2.prototype.Vu = function(t, e2) {
    var n3 = [this.Dl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"], r2 = esm_1(), i = {
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        database: "projects/" + this.U.projectId + "/databases/" + this.U.database
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling
    };
    this.Fl(i.initMessageHeaders, e2), isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (i.httpHeadersOverwriteParam = "$httpHeaders");
    var o = n3.join("");
    T$1("Connection", "Creating WebChannel: " + o, i);
    var s = r2.createWebChannel(o, i), u2 = false, d = false, v2 = new su({
      Rl: function(t2) {
        d ? T$1("Connection", "Not sending because WebChannel is closed:", t2) : (u2 || (T$1("Connection", "Opening WebChannel transport."), s.open(), u2 = true), T$1("Connection", "WebChannel sending:", t2), s.send(t2));
      },
      Pl: function() {
        return s.close();
      }
    }), y2 = function(t2, e3) {
      s.listen(t2, function(t3) {
        try {
          e3(t3);
        } catch (t4) {
          setTimeout(function() {
            throw t4;
          }, 0);
        }
      });
    };
    return y2(esm_4.EventType.OPEN, function() {
      d || T$1("Connection", "WebChannel transport opened.");
    }), y2(esm_4.EventType.CLOSE, function() {
      d || (d = true, T$1("Connection", "WebChannel transport closed"), v2.bl());
    }), y2(esm_4.EventType.ERROR, function(t2) {
      d || (d = true, A$1("Connection", "WebChannel transport errored:", t2), v2.bl(new I$1(b.UNAVAILABLE, "The operation could not be completed")));
    }), y2(esm_4.EventType.MESSAGE, function(t2) {
      var e3;
      if (!d) {
        var n4 = t2.data[0];
        x$1(!!n4);
        var r3 = n4, i2 = r3.error || ((e3 = r3[0]) === null || e3 === void 0 ? void 0 : e3.error);
        if (i2) {
          T$1("Connection", "WebChannel received error:", i2);
          var o2 = i2.status, u3 = function(t3) {
            var e4 = St[t3];
            if (e4 !== void 0)
              return Rt(e4);
          }(o2), a = i2.message;
          u3 === void 0 && (u3 = b.INTERNAL, a = "Unknown error status: " + o2 + " with message " + i2.message), d = true, v2.bl(new I$1(u3, a)), s.close();
        } else
          T$1("Connection", "WebChannel received:", n4), v2.vl(n4);
      }
    }), setTimeout(function() {
      v2.pl();
    }, 0), v2;
  }, n2;
}(function() {
  function t(t2) {
    this.Sl = t2, this.U = t2.U;
    var e = t2.ssl ? "https" : "http";
    this.Dl = e + "://" + t2.host, this.Cl = "projects/" + this.U.projectId + "/databases/" + this.U.database + "/documents";
  }
  return t.prototype.Mu = function(t2, e, n2, r2) {
    var i = this.Nl(t2, e);
    T$1("RestConnection", "Sending: ", i, n2);
    var o = {};
    return this.Fl(o, r2), this.$l(t2, i, o, n2).then(function(t3) {
      return T$1("RestConnection", "Received: ", t3), t3;
    }, function(e2) {
      throw A$1("RestConnection", t2 + " failed with error: ", e2, "url: ", i, "request:", n2), e2;
    });
  }, t.prototype.Ou = function(t2, e, n2, r2) {
    return this.Mu(t2, e, n2, r2);
  }, t.prototype.Fl = function(t2, e) {
    if (t2["X-Goog-Api-Client"] = "gl-js/ fire/7.22.0", t2["Content-Type"] = "text/plain", e)
      for (var n2 in e.zc)
        e.zc.hasOwnProperty(n2) && (t2[n2] = e.zc[n2]);
  }, t.prototype.Nl = function(t2, e) {
    var n2 = uu[t2];
    return this.Dl + "/v1/" + e + ":" + n2;
  }, t;
}()), cu = function() {
  function t() {
    var t2 = this;
    this.xl = function() {
      return t2.kl();
    }, this.Ml = function() {
      return t2.Ol();
    }, this.Ll = [], this.Bl();
  }
  return t.prototype.eh = function(t2) {
    this.Ll.push(t2);
  }, t.prototype.Si = function() {
    window.removeEventListener("online", this.xl), window.removeEventListener("offline", this.Ml);
  }, t.prototype.Bl = function() {
    window.addEventListener("online", this.xl), window.addEventListener("offline", this.Ml);
  }, t.prototype.kl = function() {
    T$1("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (var t2 = 0, e = this.Ll; t2 < e.length; t2++) {
      (0, e[t2])(0);
    }
  }, t.prototype.Ol = function() {
    T$1("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (var t2 = 0, e = this.Ll; t2 < e.length; t2++) {
      (0, e[t2])(1);
    }
  }, t.On = function() {
    return typeof window != "undefined" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
  }, t;
}(), hu = function() {
  function t() {
  }
  return t.prototype.eh = function(t2) {
  }, t.prototype.Si = function() {
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fu(t) {
  return new Ae(t, true);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lu = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", pu = function() {
  function t() {
  }
  return t.prototype.initialize = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            return this.Ch = this.ql(t2), this.persistence = this.Ul(t2), [4, this.persistence.start()];
          case 1:
            return e.sent(), this.Ql = this.Wl(t2), this.Gu = this.jl(t2), [2];
        }
      });
    });
  }, t.prototype.Wl = function(t2) {
    return null;
  }, t.prototype.jl = function(t2) {
    return e = this.persistence, n2 = new Zs(), r2 = t2.Kl, new To(e, n2, r2);
    var e, n2, r2;
  }, t.prototype.Ul = function(t2) {
    if (t2.persistenceSettings.Gl)
      throw new I$1(b.FAILED_PRECONDITION, lu);
    return new ru(ou.El);
  }, t.prototype.ql = function(t2) {
    return new ii();
  }, t.prototype.terminate = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return this.Ql && this.Ql.stop(), [4, this.Ch.Si()];
          case 1:
            return t2.sent(), [4, this.persistence.Si()];
          case 2:
            return t2.sent(), [2];
        }
      });
    });
  }, t.prototype.clearPersistence = function(t2, e) {
    throw new I$1(b.FAILED_PRECONDITION, lu);
  }, t;
}(), du = function(r2) {
  function i() {
    return r2 !== null && r2.apply(this, arguments) || this;
  }
  return __extends(i, r2), i.prototype.initialize = function(t) {
    return __awaiter(this, void 0, void 0, function() {
      var i2, o = this;
      return __generator(this, function(s) {
        switch (s.label) {
          case 0:
            return [4, r2.prototype.initialize.call(this, t)];
          case 1:
            return s.sent(), i2 = this.zl._i, this.Ch instanceof ri ? (this.Ch._i = {
              tr: zs.bind(null, i2),
              er: Hs.bind(null, i2),
              nr: $s.bind(null, i2),
              Vi: Ys.bind(null, i2)
            }, [4, this.Ch.start()]) : [3, 3];
          case 2:
            s.sent(), s.label = 3;
          case 3:
            return [4, this.persistence.ec(function(t2) {
              return __awaiter(o, void 0, void 0, function() {
                return __generator(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [4, Qs(this.zl._i, t2)];
                    case 1:
                      return e.sent(), this.Ql && (t2 && !this.Ql.Ti ? this.Ql.start(this.Gu) : t2 || this.Ql.stop()), [2];
                  }
                });
              });
            })];
          case 4:
            return s.sent(), [2];
        }
      });
    });
  }, i.prototype.ql = function(t) {
    if (t.persistenceSettings.Gl && t.persistenceSettings.synchronizeTabs) {
      var e = Ur();
      if (!ri.On(e))
        throw new I$1(b.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
      var n2 = _o(t.Sl.U, t.Sl.persistenceKey);
      return new ri(e, t.os, n2, t.clientId, t.Kl);
    }
    return new ii();
  }, i;
}(function(r2) {
  function i(t) {
    var e = this;
    return (e = r2.call(this) || this).zl = t, e;
  }
  return __extends(i, r2), i.prototype.initialize = function(t) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(i2) {
        switch (i2.label) {
          case 0:
            return [4, r2.prototype.initialize.call(this, t)];
          case 1:
            return i2.sent(), [4, function(t2) {
              return __awaiter(this, void 0, void 0, function() {
                var e, r3;
                return __generator(this, function(n2) {
                  return e = k$1(t2), r3 = k$1(e.Fc), [2, e.persistence.runTransaction("Synchronize last document change read time", "readonly", function(t3) {
                    return r3.oa(t3);
                  }).then(function(t3) {
                    e.Nc = t3;
                  })];
                });
              });
            }(this.Gu)];
          case 2:
            return i2.sent(), [4, this.zl.initialize(this, t)];
          case 3:
            return i2.sent(), [4, Js(this.zl._i)];
          case 4:
            return i2.sent(), [4, cs(this.zl.Sh)];
          case 5:
            return i2.sent(), [2];
        }
      });
    });
  }, i.prototype.Wl = function(t) {
    var e = this.persistence.Co.do;
    return new yi(e, t.os);
  }, i.prototype.Ul = function(t) {
    var e = _o(t.Sl.U, t.Sl.persistenceKey), n2 = fu(t.Sl.U);
    return new go(t.persistenceSettings.synchronizeTabs, e, t.clientId, vi.oo(t.persistenceSettings.cacheSizeBytes), t.os, Ur(), Pr(), n2, this.Ch, t.persistenceSettings.La);
  }, i.prototype.ql = function(t) {
    return new ii();
  }, i.prototype.clearPersistence = function(t, r3) {
    return function(t2) {
      return __awaiter(this, void 0, void 0, function() {
        var e;
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              return Nr.On() ? (e = t2 + "main", [4, Nr.delete(e)]) : [2, Promise.resolve()];
            case 1:
              return n2.sent(), [2];
          }
        });
      });
    }(_o(t, r3));
  }, i;
}(pu)), vu = function() {
  function t() {
  }
  return t.prototype.initialize = function(t2, r2) {
    return __awaiter(this, void 0, void 0, function() {
      var e = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.Gu ? [3, 2] : (this.Gu = t2.Gu, this.Ch = t2.Ch, this.zu = this.Hl(r2), this.Sh = this.Yl(r2), this.Dh = this.Jl(r2), this._i = this.Xl(r2), this.Ch.fi = function(t3) {
              return xs(e._i, t3, 1);
            }, this.Sh.Hu.Zl = Gs.bind(null, this._i), [4, ys(this.Sh, this._i.Wh)]);
          case 1:
            n2.sent(), n2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.Jl = function(t2) {
    return new qr();
  }, t.prototype.Hl = function(t2) {
    var e, n2 = fu(t2.Sl.U), r2 = (e = t2.Sl, new au(e));
    return function(t3, e2, n3) {
      return new zo(t3, e2, n3);
    }(t2.credentials, r2, n2);
  }, t.prototype.Yl = function(t2) {
    var e, n2, r2, i, o, s = this;
    return e = this.Gu, n2 = this.zu, r2 = t2.os, i = function(t3) {
      return xs(s._i, t3, 0);
    }, o = cu.On() ? new cu() : new hu(), new Ko(e, n2, r2, i, o);
  }, t.prototype.Xl = function(t2) {
    return function(t3, e, n2, r2, i, o, s) {
      var u2 = new Ts(t3, e, n2, r2, i, o);
      return s && (u2.Qh = true), u2;
    }(this.Gu, this.Sh, this.Dh, this.Ch, t2.Kl, t2.Nh, !t2.persistenceSettings.Gl || !t2.persistenceSettings.synchronizeTabs);
  }, t.prototype.terminate = function() {
    return Ho(this.Sh);
  }, t;
}(), yu = function() {
  function t(t2) {
    this.observer = t2, this.muted = false;
  }
  return t.prototype.next = function(t2) {
    this.observer.next && this.t_(this.observer.next, t2);
  }, t.prototype.error = function(t2) {
    this.observer.error ? this.t_(this.observer.error, t2) : console.error("Uncaught Error in snapshot listener:", t2);
  }, t.prototype.e_ = function() {
    this.muted = true;
  }, t.prototype.t_ = function(t2, e) {
    var n2 = this;
    this.muted || setTimeout(function() {
      n2.muted || t2(e);
    }, 0);
  }, t;
}(), mu = function(t) {
  !function(t2, e2, n2, r2) {
    if (!(e2 instanceof Array) || e2.length < 1)
      throw new I$1(b.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + rt(1, "element") + ".");
  }(0, t);
  for (var e = 0; e < t.length; ++e)
    if (j("FieldPath", "string", e, t[e]), t[e].length === 0)
      throw new I$1(b.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
  this.n_ = new C$1(t);
}, gu = function(e) {
  function n2() {
    for (var t = [], n3 = 0; n3 < arguments.length; n3++)
      t[n3] = arguments[n3];
    return e.call(this, t) || this;
  }
  return __extends(n2, e), n2.documentId = function() {
    return new n2(C$1.v().R());
  }, n2.prototype.isEqual = function(t) {
    if (!(t instanceof n2))
      throw tt("isEqual", "FieldPath", 1, t);
    return this.n_.isEqual(t.n_);
  }, n2;
}(mu), wu = new RegExp("[~\\*/\\[\\]]"), bu = function(t) {
  this.s_ = t;
}, Iu = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2.prototype.i_ = function(t) {
    if (t.r_ !== 2)
      throw t.r_ === 1 ? t.o_(this.s_ + "() can only appear at the top level of your update data") : t.o_(this.s_ + "() cannot be used with set() unless you pass {merge:true}");
    return t.Qe.push(t.path), null;
  }, n2.prototype.isEqual = function(t) {
    return t instanceof n2;
  }, n2;
}(bu);
function Eu(t, e, n2) {
  return new Uu({
    r_: 3,
    a_: e.settings.a_,
    methodName: t.s_,
    c_: n2
  }, e.U, e.serializer, e.ignoreUndefinedProperties);
}
var _u = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2.prototype.i_ = function(t) {
    return new mn(t.path, new an());
  }, n2.prototype.isEqual = function(t) {
    return t instanceof n2;
  }, n2;
}(bu), Tu = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t) || this).u_ = n3, r2;
  }
  return __extends(n2, e), n2.prototype.i_ = function(t) {
    var e2 = Eu(this, t, true), n3 = this.u_.map(function(t2) {
      return qu(t2, e2);
    }), r2 = new cn(n3);
    return new mn(t.path, r2);
  }, n2.prototype.isEqual = function(t) {
    return this === t;
  }, n2;
}(bu), Nu = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t) || this).u_ = n3, r2;
  }
  return __extends(n2, e), n2.prototype.i_ = function(t) {
    var e2 = Eu(this, t, true), n3 = this.u_.map(function(t2) {
      return qu(t2, e2);
    }), r2 = new fn(n3);
    return new mn(t.path, r2);
  }, n2.prototype.isEqual = function(t) {
    return this === t;
  }, n2;
}(bu), Au = function(e) {
  function n2(t, n3) {
    var r2 = this;
    return (r2 = e.call(this, t) || this).h_ = n3, r2;
  }
  return __extends(n2, e), n2.prototype.i_ = function(t) {
    var e2 = new pn(t.serializer, xe(t.serializer, this.h_));
    return new mn(t.path, e2);
  }, n2.prototype.isEqual = function(t) {
    return this === t;
  }, n2;
}(bu), Su = function() {
  function t(t2, e) {
    if (q$1("GeoPoint", arguments, 2), j("GeoPoint", "number", 1, t2), j("GeoPoint", "number", 2, e), !isFinite(t2) || t2 < -90 || t2 > 90)
      throw new I$1(b.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t2);
    if (!isFinite(e) || e < -180 || e > 180)
      throw new I$1(b.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this.l_ = t2, this.__ = e;
  }
  return Object.defineProperty(t.prototype, "latitude", {
    get: function() {
      return this.l_;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "longitude", {
    get: function() {
      return this.__;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(t2) {
    return this.l_ === t2.l_ && this.__ === t2.__;
  }, t.prototype.toJSON = function() {
    return {
      latitude: this.l_,
      longitude: this.__
    };
  }, t.prototype.H = function(t2) {
    return st(this.l_, t2.l_) || st(this.__, t2.__);
  }, t;
}(), Du = function(t) {
  this.f_ = t;
}, xu = /^__.*__$/, ku = function(t, e, n2) {
  this.d_ = t, this.w_ = e, this.m_ = n2;
}, Ou = function() {
  function t(t2, e, n2) {
    this.data = t2, this.Qe = e, this.fieldTransforms = n2;
  }
  return t.prototype.T_ = function(t2, e) {
    var n2 = [];
    return this.Qe !== null ? n2.push(new Dn(t2, this.data, this.Qe, e)) : n2.push(new Sn(t2, this.data, e)), this.fieldTransforms.length > 0 && n2.push(new kn(t2, this.fieldTransforms)), n2;
  }, t;
}(), Ru = function() {
  function t(t2, e, n2) {
    this.data = t2, this.Qe = e, this.fieldTransforms = n2;
  }
  return t.prototype.T_ = function(t2, e) {
    var n2 = [new Dn(t2, this.data, this.Qe, e)];
    return this.fieldTransforms.length > 0 && n2.push(new kn(t2, this.fieldTransforms)), n2;
  }, t;
}();
function Lu(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw D$1();
  }
}
var Uu = function() {
  function t(t2, e, n2, r2, i, o) {
    this.settings = t2, this.U = e, this.serializer = n2, this.ignoreUndefinedProperties = r2, i === void 0 && this.E_(), this.fieldTransforms = i || [], this.Qe = o || [];
  }
  return Object.defineProperty(t.prototype, "path", {
    get: function() {
      return this.settings.path;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "r_", {
    get: function() {
      return this.settings.r_;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.I_ = function(e) {
    return new t(Object.assign(Object.assign({}, this.settings), e), this.U, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Qe);
  }, t.prototype.A_ = function(t2) {
    var e, n2 = (e = this.path) === null || e === void 0 ? void 0 : e.child(t2), r2 = this.I_({
      path: n2,
      c_: false
    });
    return r2.R_(t2), r2;
  }, t.prototype.P_ = function(t2) {
    var e, n2 = (e = this.path) === null || e === void 0 ? void 0 : e.child(t2), r2 = this.I_({
      path: n2,
      c_: false
    });
    return r2.E_(), r2;
  }, t.prototype.g_ = function(t2) {
    return this.I_({
      path: void 0,
      c_: true
    });
  }, t.prototype.o_ = function(t2) {
    return Ku(t2, this.settings.methodName, this.settings.y_ || false, this.path, this.settings.a_);
  }, t.prototype.contains = function(t2) {
    return this.Qe.find(function(e) {
      return t2.T(e);
    }) !== void 0 || this.fieldTransforms.find(function(e) {
      return t2.T(e.field);
    }) !== void 0;
  }, t.prototype.E_ = function() {
    if (this.path)
      for (var t2 = 0; t2 < this.path.length; t2++)
        this.R_(this.path.get(t2));
  }, t.prototype.R_ = function(t2) {
    if (t2.length === 0)
      throw this.o_("Document fields must not be empty");
    if (Lu(this.r_) && xu.test(t2))
      throw this.o_('Document fields cannot begin and end with "__"');
  }, t;
}(), Pu = function() {
  function t(t2, e, n2) {
    this.U = t2, this.ignoreUndefinedProperties = e, this.serializer = n2 || fu(t2);
  }
  return t.prototype.V_ = function(t2, e, n2, r2) {
    return r2 === void 0 && (r2 = false), new Uu({
      r_: t2,
      methodName: e,
      a_: n2,
      path: C$1.g(),
      c_: false,
      y_: r2
    }, this.U, this.serializer, this.ignoreUndefinedProperties);
  }, t;
}();
function Vu(t, e, n2, r2, i, o) {
  o === void 0 && (o = {});
  var s = t.V_(o.merge || o.mergeFields ? 2 : 0, e, n2, i);
  ju("Data must be an object, but it was:", s, r2);
  var u2, a, c = Gu(r2, s);
  if (o.merge)
    u2 = new yn(s.Qe), a = s.fieldTransforms;
  else if (o.mergeFields) {
    for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
      var p2 = l[f], d = void 0;
      if (p2 instanceof mu)
        d = p2.n_;
      else {
        if (typeof p2 != "string")
          throw D$1();
        d = Qu(e, p2, n2);
      }
      if (!s.contains(d))
        throw new I$1(b.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
      Wu(h, d) || h.push(d);
    }
    u2 = new yn(h), a = s.fieldTransforms.filter(function(t2) {
      return u2.He(t2.field);
    });
  } else
    u2 = null, a = s.fieldTransforms;
  return new Ou(new Pn(c), u2, a);
}
function Cu(t, e, n2, r2) {
  var i = t.V_(1, e, n2);
  ju("Data must be an object, but it was:", i, r2);
  var o = [], s = new Vn();
  R$1(r2, function(t2, r3) {
    var u3 = Qu(e, t2, n2), a = i.P_(u3);
    if (r3 instanceof Iu || r3 instanceof Du && r3.f_ instanceof Iu)
      o.push(u3);
    else {
      var c = qu(r3, a);
      c != null && (o.push(u3), s.set(u3, c));
    }
  });
  var u2 = new yn(o);
  return new Ru(s.Je(), u2, i.fieldTransforms);
}
function Mu(t, e, n2, r2, i, o) {
  var s = t.V_(1, e, n2), u2 = [zu(e, r2, n2)], a = [i];
  if (o.length % 2 != 0)
    throw new I$1(b.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
  for (var c = 0; c < o.length; c += 2)
    u2.push(zu(e, o[c])), a.push(o[c + 1]);
  for (var h = [], f = new Vn(), l = u2.length - 1; l >= 0; --l)
    if (!Wu(h, u2[l])) {
      var p2 = u2[l], d = a[l], v2 = s.P_(p2);
      if (d instanceof Iu || d instanceof Du && d.f_ instanceof Iu)
        h.push(p2);
      else {
        var y2 = qu(d, v2);
        y2 != null && (h.push(p2), f.set(p2, y2));
      }
    }
  var m = new yn(h);
  return new Ru(f.Je(), m, s.fieldTransforms);
}
function Fu(t, e, n2, r2) {
  return r2 === void 0 && (r2 = false), qu(n2, t.V_(r2 ? 4 : 3, e));
}
function qu(t, e) {
  if (t instanceof Du && (t = t.f_), Bu(t))
    return ju("Unsupported field value:", e, t), Gu(t, e);
  if (t instanceof bu)
    return function(t2, e2) {
      if (!Lu(e2.r_))
        throw e2.o_(t2.s_ + "() can only be used with update() and set()");
      if (!e2.path)
        throw e2.o_(t2.s_ + "() is not currently supported inside arrays");
      var n2 = t2.i_(e2);
      n2 && e2.fieldTransforms.push(n2);
    }(t, e), null;
  if (e.path && e.Qe.push(e.path), t instanceof Array) {
    if (e.settings.c_ && e.r_ !== 4)
      throw e.o_("Nested arrays are not supported");
    return function(t2, e2) {
      for (var n2 = [], r2 = 0, i = 0, o = t2; i < o.length; i++) {
        var s = qu(o[i], e2.g_(r2));
        s == null && (s = {
          nullValue: "NULL_VALUE"
        }), n2.push(s), r2++;
      }
      return {
        arrayValue: {
          values: n2
        }
      };
    }(t, e);
  }
  return function(t2, e2) {
    if (t2 === null)
      return {
        nullValue: "NULL_VALUE"
      };
    if (typeof t2 == "number")
      return xe(e2.serializer, t2);
    if (typeof t2 == "boolean")
      return {
        booleanValue: t2
      };
    if (typeof t2 == "string")
      return {
        stringValue: t2
      };
    if (t2 instanceof Date) {
      var n2 = mt.fromDate(t2);
      return {
        timestampValue: ke(e2.serializer, n2)
      };
    }
    if (t2 instanceof mt) {
      var r2 = new mt(t2.seconds, 1e3 * Math.floor(t2.nanoseconds / 1e3));
      return {
        timestampValue: ke(e2.serializer, r2)
      };
    }
    if (t2 instanceof Su)
      return {
        geoPointValue: {
          latitude: t2.latitude,
          longitude: t2.longitude
        }
      };
    if (t2 instanceof ht)
      return {
        bytesValue: Oe(e2.serializer, t2.q)
      };
    if (t2 instanceof ku) {
      var i = e2.U, o = t2.d_;
      if (!o.isEqual(i))
        throw e2.o_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
      return {
        referenceValue: Ue(t2.d_ || e2.U, t2.w_.path)
      };
    }
    if (t2 === void 0 && e2.ignoreUndefinedProperties)
      return null;
    throw e2.o_("Unsupported field value: " + X$1(t2));
  }(t, e);
}
function Gu(t, e) {
  var n2 = {};
  return L$1(t) ? e.path && e.path.length > 0 && e.Qe.push(e.path) : R$1(t, function(t2, r2) {
    var i = qu(r2, e.A_(t2));
    i != null && (n2[t2] = i);
  }), {
    mapValue: {
      fields: n2
    }
  };
}
function Bu(t) {
  return !(typeof t != "object" || t === null || t instanceof Array || t instanceof Date || t instanceof mt || t instanceof Su || t instanceof ht || t instanceof ku || t instanceof bu);
}
function ju(t, e, n2) {
  if (!Bu(n2) || !$(n2)) {
    var r2 = X$1(n2);
    throw r2 === "an object" ? e.o_(t + " a custom object") : e.o_(t + " " + r2);
  }
}
function zu(t, e, n2) {
  if (e instanceof mu)
    return e.n_;
  if (typeof e == "string")
    return Qu(t, e);
  throw Ku("Field path arguments must be of type string or FieldPath.", t, false, void 0, n2);
}
function Qu(t, e, n2) {
  try {
    return function(t2) {
      if (t2.search(wu) >= 0)
        throw new I$1(b.INVALID_ARGUMENT, "Invalid field path (" + t2 + "). Paths must not contain '~', '*', '/', '[', or ']'");
      try {
        return new (gu.bind.apply(gu, __spreadArrays([void 0], t2.split("."))))();
      } catch (e2) {
        throw new I$1(b.INVALID_ARGUMENT, "Invalid field path (" + t2 + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      }
    }(e).n_;
  } catch (e2) {
    throw Ku((i = e2) instanceof Error ? i.message : i.toString(), t, false, void 0, n2);
  }
  var i;
}
function Ku(t, e, n2, r2, i) {
  var o = r2 && !r2.m(), s = i !== void 0, u2 = "Function " + e + "() called with invalid data";
  n2 && (u2 += " (via `toFirestore()`)");
  var a = "";
  return (o || s) && (a += " (found", o && (a += " in field " + r2), s && (a += " in document " + i), a += ")"), new I$1(b.INVALID_ARGUMENT, (u2 += ". ") + t + a);
}
function Wu(t, e) {
  return t.some(function(t2) {
    return t2.isEqual(e);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yu = function() {
  function t(t2) {
    this.zu = t2, this.p_ = new Map(), this.mutations = [], this.b_ = false, this.v_ = null, this.S_ = new Set();
  }
  return t.prototype.D_ = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var r2, i = this;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            if (this.C_(), this.mutations.length > 0)
              throw new I$1(b.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
            return [4, function(t3, r3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, i2, o2, s, u2, a;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = k$1(t3), i2 = qe(e.serializer) + "/documents", o2 = {
                        documents: r3.map(function(t4) {
                          return Ve(e.serializer, t4);
                        })
                      }, [4, e.Ou("BatchGetDocuments", i2, o2)];
                    case 1:
                      return s = n2.sent(), u2 = new Map(), s.forEach(function(t4) {
                        var n3 = function(t5, e2) {
                          return "found" in e2 ? function(t6, e3) {
                            x$1(!!e3.found), e3.found.name, e3.found.updateTime;
                            var n4 = Ce(t6, e3.found.name), r4 = Le(e3.found.updateTime), i3 = new Pn({
                              mapValue: {
                                fields: e3.found.fields
                              }
                            });
                            return new Fn(n4, r4, i3, {});
                          }(t5, e2) : "missing" in e2 ? function(t6, e3) {
                            x$1(!!e3.missing), x$1(!!e3.readTime);
                            var n4 = Ce(t6, e3.missing), r4 = Le(e3.readTime);
                            return new qn(n4, r4);
                          }(t5, e2) : D$1();
                        }(e.serializer, t4);
                        u2.set(n3.key.toString(), n3);
                      }), a = [], [2, (r3.forEach(function(t4) {
                        var e2 = u2.get(t4.toString());
                        x$1(!!e2), a.push(e2);
                      }), a)];
                  }
                });
              });
            }(this.zu, t2)];
          case 1:
            return [2, ((r2 = o.sent()).forEach(function(t3) {
              t3 instanceof qn || t3 instanceof Fn ? i.N_(t3) : D$1();
            }), r2)];
        }
      });
    });
  }, t.prototype.set = function(t2, e) {
    this.write(e.T_(t2, this.Ke(t2))), this.S_.add(t2.toString());
  }, t.prototype.update = function(t2, e) {
    try {
      this.write(e.T_(t2, this.F_(t2)));
    } catch (t3) {
      this.v_ = t3;
    }
    this.S_.add(t2.toString());
  }, t.prototype.delete = function(t2) {
    this.write([new Ln(t2, this.Ke(t2))]), this.S_.add(t2.toString());
  }, t.prototype.commit = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, r2 = this;
      return __generator(this, function(i) {
        switch (i.label) {
          case 0:
            if (this.C_(), this.v_)
              throw this.v_;
            return t2 = this.p_, this.mutations.forEach(function(e) {
              t2.delete(e.key.toString());
            }), t2.forEach(function(t3, e) {
              var n2 = M$1.D(e);
              r2.mutations.push(new Un(n2, r2.Ke(n2)));
            }), [4, function(t3, r3) {
              return __awaiter(this, void 0, void 0, function() {
                var e, i2, o;
                return __generator(this, function(n2) {
                  switch (n2.label) {
                    case 0:
                      return e = k$1(t3), i2 = qe(e.serializer) + "/documents", o = {
                        writes: r3.map(function(t4) {
                          return je(e.serializer, t4);
                        })
                      }, [4, e.Mu("Commit", i2, o)];
                    case 1:
                      return n2.sent(), [2];
                  }
                });
              });
            }(this.zu, this.mutations)];
          case 1:
            return i.sent(), this.b_ = true, [2];
        }
      });
    });
  }, t.prototype.N_ = function(t2) {
    var e;
    if (t2 instanceof Fn)
      e = t2.version;
    else {
      if (!(t2 instanceof qn))
        throw D$1();
      e = gt.min();
    }
    var n2 = this.p_.get(t2.key.toString());
    if (n2) {
      if (!e.isEqual(n2))
        throw new I$1(b.ABORTED, "Document version changed between two reads.");
    } else
      this.p_.set(t2.key.toString(), e);
  }, t.prototype.Ke = function(t2) {
    var e = this.p_.get(t2.toString());
    return !this.S_.has(t2.toString()) && e ? wn.updateTime(e) : wn.Ge();
  }, t.prototype.F_ = function(t2) {
    var e = this.p_.get(t2.toString());
    if (!this.S_.has(t2.toString()) && e) {
      if (e.isEqual(gt.min()))
        throw new I$1(b.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return wn.updateTime(e);
    }
    return wn.exists(true);
  }, t.prototype.write = function(t2) {
    this.C_(), this.mutations = this.mutations.concat(t2);
  }, t.prototype.C_ = function() {
  }, t;
}(), Hu = function() {
  function t(t2, e, n2, r2) {
    this.os = t2, this.zu = e, this.updateFunction = n2, this.hs = r2, this.x_ = 5, this.gs = new _r(this.os, "transaction_retry");
  }
  return t.prototype.run = function() {
    this.k_();
  }, t.prototype.k_ = function() {
    var t2 = this;
    this.gs.Rn(function() {
      return __awaiter(t2, void 0, void 0, function() {
        var t3, e, r2 = this;
        return __generator(this, function(n2) {
          return t3 = new Yu(this.zu), (e = this.M_(t3)) && e.then(function(e2) {
            r2.os.ds(function() {
              return t3.commit().then(function() {
                r2.hs.resolve(e2);
              }).catch(function(t4) {
                r2.O_(t4);
              });
            });
          }).catch(function(t4) {
            r2.O_(t4);
          }), [2];
        });
      });
    });
  }, t.prototype.M_ = function(t2) {
    try {
      var e = this.updateFunction(t2);
      return !wt(e) && e.catch && e.then ? e : (this.hs.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t3) {
      return this.hs.reject(t3), null;
    }
  }, t.prototype.O_ = function(t2) {
    var e = this;
    this.x_ > 0 && this.L_(t2) ? (this.x_ -= 1, this.os.ds(function() {
      return e.k_(), Promise.resolve();
    })) : this.hs.reject(t2);
  }, t.prototype.L_ = function(t2) {
    if (t2.name === "FirebaseError") {
      var e = t2.code;
      return e === "aborted" || e === "failed-precondition" || !Ot(e);
    }
    return false;
  }, t;
}(), $u = function() {
  function t(t2, e) {
    this.credentials = t2, this.os = e, this.clientId = ot.k(), this.B_ = new Er();
  }
  return t.prototype.start = function(t2, r2, i, o) {
    var s = this;
    this.q_(), this.Sl = t2;
    var u2 = new Er(), a = false;
    return this.credentials.Jc(function(t3) {
      if (!a)
        return a = true, T$1("FirestoreClient", "Initializing. user=", t3.uid), s.U_(r2, i, o, t3, u2).then(s.B_.resolve, s.B_.reject);
      s.os.Ds(function() {
        return function(t4, r3) {
          return __awaiter(this, void 0, void 0, function() {
            var e, i2;
            return __generator(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return (e = k$1(t4)).os.Fs(), T$1("RemoteStore", "RemoteStore received new credentials"), i2 = ns(e), e.Xu.add(3), [4, Yo(e)];
                case 1:
                  return n2.sent(), i2 && e.nh.set("Unknown"), [4, e.Hu.Zl(r3)];
                case 2:
                  return n2.sent(), e.Xu.delete(3), [4, Wo(e)];
                case 3:
                  return n2.sent(), [2];
              }
            });
          });
        }(s.Sh, t3);
      });
    }), this.os.ds(function() {
      return s.B_.promise;
    }), u2.promise;
  }, t.prototype.enableNetwork = function() {
    var t2 = this;
    return this.q_(), this.os.enqueue(function() {
      return t2.persistence.sc(true), function(t3) {
        var e = k$1(t3);
        return e.Xu.delete(0), Wo(e);
      }(t2.Sh);
    });
  }, t.prototype.U_ = function(t2, r2, i, o, s) {
    return __awaiter(this, void 0, void 0, function() {
      var u2, a, c = this;
      return __generator(this, function(h) {
        switch (h.label) {
          case 0:
            return h.trys.push([0, 3, , 4]), u2 = {
              os: this.os,
              Sl: this.Sl,
              clientId: this.clientId,
              credentials: this.credentials,
              Kl: o,
              Nh: 100,
              persistenceSettings: i
            }, [4, t2.initialize(u2)];
          case 1:
            return h.sent(), [4, r2.initialize(t2, u2)];
          case 2:
            return h.sent(), this.persistence = t2.persistence, this.Ch = t2.Ch, this.Gu = t2.Gu, this.Ql = t2.Ql, this.zu = r2.zu, this.Sh = r2.Sh, this._i = r2._i, this.Q_ = r2.Dh, this.Q_.qs = Ns.bind(null, this._i), this.Q_.Ws = Ss.bind(null, this._i), this.persistence.nc(function() {
              return __awaiter(c, void 0, void 0, function() {
                return __generator(this, function(t3) {
                  switch (t3.label) {
                    case 0:
                      return [4, this.terminate()];
                    case 1:
                      return t3.sent(), [2];
                  }
                });
              });
            }), s.resolve(), [3, 4];
          case 3:
            if (a = h.sent(), s.reject(a), !this.W_(a))
              throw a;
            return [2, (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + a), this.U_(new pu(), new vu(), {
              Gl: false
            }, o, s))];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.W_ = function(t2) {
    return t2.name === "FirebaseError" ? t2.code === b.FAILED_PRECONDITION || t2.code === b.UNIMPLEMENTED : !(typeof DOMException != "undefined" && t2 instanceof DOMException) || t2.code === 22 || t2.code === 20 || t2.code === 11;
  }, t.prototype.q_ = function() {
    if (this.os.Vs)
      throw new I$1(b.FAILED_PRECONDITION, "The client has already been terminated.");
  }, t.prototype.disableNetwork = function() {
    var t2 = this;
    return this.q_(), this.os.enqueue(function() {
      return t2.persistence.sc(false), function(t3) {
        return __awaiter(this, void 0, void 0, function() {
          var e;
          return __generator(this, function(n2) {
            switch (n2.label) {
              case 0:
                return (e = k$1(t3)).Xu.add(0), [4, Yo(e)];
              case 1:
                return n2.sent(), e.nh.set("Offline"), [2];
            }
          });
        });
      }(t2.Sh);
    });
  }, t.prototype.terminate = function() {
    var t2 = this;
    this.os.Ss();
    var r2 = new Er();
    return this.os.ps(function() {
      return __awaiter(t2, void 0, void 0, function() {
        var t3, e;
        return __generator(this, function(n2) {
          switch (n2.label) {
            case 0:
              return n2.trys.push([0, 4, , 5]), this.Ql && this.Ql.stop(), [4, Ho(this.Sh)];
            case 1:
              return n2.sent(), [4, this.Ch.Si()];
            case 2:
              return n2.sent(), [4, this.persistence.Si()];
            case 3:
              return n2.sent(), this.credentials.Xc(), r2.resolve(), [3, 5];
            case 4:
              return t3 = n2.sent(), e = Mr(t3, "Failed to shutdown persistence"), r2.reject(e), [3, 5];
            case 5:
              return [2];
          }
        });
      });
    }), r2.promise;
  }, t.prototype.waitForPendingWrites = function() {
    var t2 = this;
    this.q_();
    var r2 = new Er();
    return this.os.ds(function() {
      return function(t3, r3) {
        return __awaiter(this, void 0, void 0, function() {
          var e, i, o, s, u2;
          return __generator(this, function(n2) {
            switch (n2.label) {
              case 0:
                ns((e = k$1(t3)).Sh) || T$1("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), n2.label = 1;
              case 1:
                return n2.trys.push([1, 3, , 4]), [4, function(t4) {
                  var e2 = k$1(t4);
                  return e2.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function(t5) {
                    return e2.vr.Bo(t5);
                  });
                }(e.Gu)];
              case 2:
                return (i = n2.sent()) === -1 ? [2, void r3.resolve()] : ((o = e.qh.get(i) || []).push(r3), e.qh.set(i, o), [3, 4]);
              case 3:
                return s = n2.sent(), u2 = Mr(s, "Initialization of waitForPendingWrites() operation failed"), r3.reject(u2), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }(t2._i, r2);
    }), r2.promise;
  }, t.prototype.listen = function(t2, e, n2) {
    var r2 = this;
    this.q_();
    var i = new yu(n2), o = new Kr(t2, i, e);
    return this.os.ds(function() {
      return Gr(r2.Q_, o);
    }), function() {
      i.e_(), r2.os.ds(function() {
        return Br(r2.Q_, o);
      });
    };
  }, t.prototype.j_ = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var r2, i = this;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            return this.q_(), [4, this.B_.promise];
          case 1:
            return o.sent(), r2 = new Er(), [2, (this.os.ds(function() {
              return function(t3, r3, i2) {
                return __awaiter(this, void 0, void 0, function() {
                  var e, o2, s;
                  return __generator(this, function(n2) {
                    switch (n2.label) {
                      case 0:
                        return n2.trys.push([0, 2, , 3]), [4, function(t4, e2) {
                          var n3 = k$1(t4);
                          return n3.persistence.runTransaction("read document", "readonly", function(t5) {
                            return n3.$c.Dr(t5, e2);
                          });
                        }(t3, r3)];
                      case 1:
                        return (e = n2.sent()) instanceof Fn ? i2.resolve(e) : e instanceof qn ? i2.resolve(null) : i2.reject(new I$1(b.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                      case 2:
                        return o2 = n2.sent(), s = Mr(o2, "Failed to get document '" + r3 + " from cache"), i2.reject(s), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                });
              }(i.Gu, t2, r2);
            }), r2.promise)];
        }
      });
    });
  }, t.prototype.K_ = function(t2, r2) {
    return r2 === void 0 && (r2 = {}), __awaiter(this, void 0, void 0, function() {
      var e, i = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.q_(), [4, this.B_.promise];
          case 1:
            return n2.sent(), e = new Er(), [2, (this.os.ds(function() {
              return function(t3, e2, n3, r3, i2) {
                var o = new yu({
                  next: function(o2) {
                    e2.ds(function() {
                      return Br(t3, s);
                    });
                    var u2 = o2.docs.has(n3);
                    !u2 && o2.fromCache ? i2.reject(new I$1(b.UNAVAILABLE, "Failed to get document because the client is offline.")) : u2 && o2.fromCache && r3 && r3.source === "server" ? i2.reject(new I$1(b.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i2.resolve(o2);
                  },
                  error: function(t4) {
                    return i2.reject(t4);
                  }
                }), s = new Kr(zn(n3.path), o, {
                  includeMetadataChanges: true,
                  Js: true
                });
                return Gr(t3, s);
              }(i.Q_, i.os, t2, r2, e);
            }), e.promise)];
        }
      });
    });
  }, t.prototype.G_ = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      var r2, i = this;
      return __generator(this, function(o) {
        switch (o.label) {
          case 0:
            return this.q_(), [4, this.B_.promise];
          case 1:
            return o.sent(), r2 = new Er(), [2, (this.os.ds(function() {
              return function(t3, r3, i2) {
                return __awaiter(this, void 0, void 0, function() {
                  var e, o2, s, u2, a, c;
                  return __generator(this, function(n2) {
                    switch (n2.label) {
                      case 0:
                        return n2.trys.push([0, 2, , 3]), [4, Oo(t3, r3, true)];
                      case 1:
                        return e = n2.sent(), o2 = new Is(r3, e.kc), s = o2.Th(e.documents), u2 = o2.gr(s, false), i2.resolve(u2.snapshot), [3, 3];
                      case 2:
                        return a = n2.sent(), c = Mr(a, "Failed to execute query '" + r3 + " against cache"), i2.reject(c), [3, 3];
                      case 3:
                        return [2];
                    }
                  });
                });
              }(i.Gu, t2, r2);
            }), r2.promise)];
        }
      });
    });
  }, t.prototype.z_ = function(t2, r2) {
    return r2 === void 0 && (r2 = {}), __awaiter(this, void 0, void 0, function() {
      var e, i = this;
      return __generator(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.q_(), [4, this.B_.promise];
          case 1:
            return n2.sent(), e = new Er(), [2, (this.os.ds(function() {
              return function(t3, e2, n3, r3, i2) {
                var o = new yu({
                  next: function(n4) {
                    e2.ds(function() {
                      return Br(t3, s);
                    }), n4.fromCache && r3.source === "server" ? i2.reject(new I$1(b.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i2.resolve(n4);
                  },
                  error: function(t4) {
                    return i2.reject(t4);
                  }
                }), s = new Kr(n3, o, {
                  includeMetadataChanges: true,
                  Js: true
                });
                return Gr(t3, s);
              }(i.Q_, i.os, t2, r2, e);
            }), e.promise)];
        }
      });
    });
  }, t.prototype.write = function(t2) {
    var r2 = this;
    this.q_();
    var i = new Er();
    return this.os.ds(function() {
      return function(t3, r3, i2) {
        return __awaiter(this, void 0, void 0, function() {
          var e, o, s, u2;
          return __generator(this, function(n2) {
            switch (n2.label) {
              case 0:
                e = Js(t3), n2.label = 1;
              case 1:
                return n2.trys.push([1, 5, , 6]), [
                  4,
                  function(t4, e2) {
                    var n3, r4 = k$1(t4), i3 = mt.now(), o2 = e2.reduce(function(t5, e3) {
                      return t5.add(e3.key);
                    }, Qt());
                    return r4.persistence.runTransaction("Locally write mutations", "readwrite", function(t5) {
                      return r4.$c.$r(t5, o2).next(function(o3) {
                        n3 = o3;
                        for (var s2 = [], u3 = 0, a = e2; u3 < a.length; u3++) {
                          var c = a[u3], h = Tn(c, n3.get(c.key));
                          h != null && s2.push(new Dn(c.key, h, Cn(h.proto.mapValue), wn.exists(true)));
                        }
                        return r4.vr.xo(t5, i3, s2, e2);
                      });
                    }).then(function(t5) {
                      var e3 = t5.hr(n3);
                      return {
                        batchId: t5.batchId,
                        dr: e3
                      };
                    });
                  }(e.Gu, r3)
                ];
              case 2:
                return o = n2.sent(), e.Ch.Fi(o.batchId), function(t4, e2, n3) {
                  var r4 = t4.Bh[t4.currentUser.Zs()];
                  r4 || (r4 = new Lt(st)), r4 = r4.rt(e2, n3), t4.Bh[t4.currentUser.Zs()] = r4;
                }(e, o.batchId, i2), [4, qs(e, o.dr)];
              case 3:
                return n2.sent(), [4, cs(e.Sh)];
              case 4:
                return n2.sent(), [3, 6];
              case 5:
                return s = n2.sent(), u2 = Mr(s, "Failed to persist write"), i2.reject(u2), [3, 6];
              case 6:
                return [2];
            }
          });
        });
      }(r2._i, t2, i);
    }), i.promise;
  }, t.prototype.U = function() {
    return this.Sl.U;
  }, t.prototype.H_ = function(t2) {
    var r2 = this;
    this.q_();
    var i = new yu(t2);
    return this.os.ds(function() {
      return __awaiter(r2, void 0, void 0, function() {
        return __generator(this, function(t3) {
          return [2, function(t4, e) {
            k$1(t4).Bs.add(e), e.next();
          }(this.Q_, i)];
        });
      });
    }), function() {
      i.e_(), r2.os.ds(function() {
        return __awaiter(r2, void 0, void 0, function() {
          return __generator(this, function(t3) {
            return [2, function(t4, e) {
              k$1(t4).Bs.delete(e);
            }(this.Q_, i)];
          });
        });
      });
    };
  }, Object.defineProperty(t.prototype, "Y_", {
    get: function() {
      return this.os.Vs;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.transaction = function(t2) {
    var e = this;
    this.q_();
    var n2 = new Er();
    return this.os.ds(function() {
      return new Hu(e.os, e.zu, t2, n2).run(), Promise.resolve();
    }), n2.promise;
  }, t;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xu(t) {
  return function(t2, e) {
    if (typeof t2 != "object" || t2 === null)
      return false;
    for (var n2 = t2, r2 = 0, i = ["next", "error", "complete"]; r2 < i.length; r2++) {
      var o = i[r2];
      if (o in n2 && typeof n2[o] == "function")
        return true;
    }
    return false;
  }(t);
}
var Ju = function() {
  function t(t2, e, n2, r2, i) {
    this.U = t2, this.timestampsInSnapshots = e, this.J_ = n2, this.X_ = r2, this.Z_ = i;
  }
  return t.prototype.tf = function(t2) {
    switch (ce(t2)) {
      case 0:
        return null;
      case 1:
        return t2.booleanValue;
      case 2:
        return ye(t2.integerValue || t2.doubleValue);
      case 3:
        return this.ef(t2.timestampValue);
      case 4:
        return this.nf(t2);
      case 5:
        return t2.stringValue;
      case 6:
        return this.Z_(me(t2.bytesValue));
      case 7:
        return this.sf(t2.referenceValue);
      case 8:
        return this.if(t2.geoPointValue);
      case 9:
        return this.rf(t2.arrayValue);
      case 10:
        return this.af(t2.mapValue);
      default:
        throw D$1();
    }
  }, t.prototype.af = function(t2) {
    var e = this, n2 = {};
    return R$1(t2.fields || {}, function(t3, r2) {
      n2[t3] = e.tf(r2);
    }), n2;
  }, t.prototype.if = function(t2) {
    return new Su(ye(t2.latitude), ye(t2.longitude));
  }, t.prototype.rf = function(t2) {
    var e = this;
    return (t2.values || []).map(function(t3) {
      return e.tf(t3);
    });
  }, t.prototype.nf = function(t2) {
    switch (this.J_) {
      case "previous":
        var e = function t3(e2) {
          var n2 = e2.mapValue.fields.__previous_value__;
          return se(n2) ? t3(n2) : n2;
        }(t2);
        return e == null ? null : this.tf(e);
      case "estimate":
        return this.ef(ue(t2));
      default:
        return null;
    }
  }, t.prototype.ef = function(t2) {
    var e = ve(t2), n2 = new mt(e.seconds, e.nanos);
    return this.timestampsInSnapshots ? n2 : n2.toDate();
  }, t.prototype.sf = function(t2) {
    var e = P$1.P(t2);
    x$1(nn(e));
    var n2 = new vt(e.get(1), e.get(3)), r2 = new M$1(e.u(5));
    return n2.isEqual(this.U) || N$1("Document " + r2 + " contains a document reference within a different database (" + n2.projectId + "/" + n2.database + ") which is not supported. It will be treated as a reference in the current database (" + this.U.projectId + "/" + this.U.database + ") instead."), this.X_(r2);
  }, t;
}(), Zu = vi.uo, ta$1 = function() {
  function t(t2) {
    var e, n2, r2, i;
    if (t2.host === void 0) {
      if (t2.ssl !== void 0)
        throw new I$1(b.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      Q$1("settings", "non-empty string", "host", t2.host), this.host = t2.host, K$1("settings", "boolean", "ssl", t2.ssl), this.ssl = (e = t2.ssl) === null || e === void 0 || e;
    if (Z$1("settings", t2, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties"]), K$1("settings", "object", "credentials", t2.credentials), this.credentials = t2.credentials, K$1("settings", "boolean", "timestampsInSnapshots", t2.timestampsInSnapshots), K$1("settings", "boolean", "ignoreUndefinedProperties", t2.ignoreUndefinedProperties), t2.timestampsInSnapshots === true ? N$1("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : t2.timestampsInSnapshots === false && N$1("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = (n2 = t2.timestampsInSnapshots) === null || n2 === void 0 || n2, this.ignoreUndefinedProperties = (r2 = t2.ignoreUndefinedProperties) !== null && r2 !== void 0 && r2, K$1("settings", "number", "cacheSizeBytes", t2.cacheSizeBytes), t2.cacheSizeBytes === void 0)
      this.cacheSizeBytes = vi.lo;
    else {
      if (t2.cacheSizeBytes !== Zu && t2.cacheSizeBytes < vi.ho)
        throw new I$1(b.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + vi.ho);
      this.cacheSizeBytes = t2.cacheSizeBytes;
    }
    K$1("settings", "boolean", "experimentalForceLongPolling", t2.experimentalForceLongPolling), this.experimentalForceLongPolling = (i = t2.experimentalForceLongPolling) !== null && i !== void 0 && i;
  }
  return t.prototype.isEqual = function(t2) {
    return this.host === t2.host && this.ssl === t2.ssl && this.timestampsInSnapshots === t2.timestampsInSnapshots && this.credentials === t2.credentials && this.cacheSizeBytes === t2.cacheSizeBytes && this.experimentalForceLongPolling === t2.experimentalForceLongPolling && this.ignoreUndefinedProperties === t2.ignoreUndefinedProperties;
  }, t;
}(), ea$1 = function() {
  function t(r2, i, o, s) {
    var u2 = this;
    if (o === void 0 && (o = new pu()), s === void 0 && (s = new vu()), this.cf = o, this.uf = s, this.hf = null, this.lf = new Cr(), this.INTERNAL = {
      delete: function() {
        return __awaiter(u2, void 0, void 0, function() {
          return __generator(this, function(t2) {
            switch (t2.label) {
              case 0:
                return this._f(), [4, this.ff.terminate()];
              case 1:
                return t2.sent(), [2];
            }
          });
        });
      }
    }, typeof r2.options == "object") {
      var a = r2;
      this.hf = a, this.d_ = t.df(a), this.wf = a.name, this.mf = new Mo(i);
    } else {
      var c = r2;
      if (!c.projectId)
        throw new I$1(b.INVALID_ARGUMENT, "Must provide projectId");
      this.d_ = new vt(c.projectId, c.database), this.wf = "[DEFAULT]", this.mf = new Co();
    }
    this.Tf = new ta$1({});
  }
  return Object.defineProperty(t.prototype, "Ef", {
    get: function() {
      return this.If || (this.If = new Pu(this.d_, this.Tf.ignoreUndefinedProperties)), this.If;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.settings = function(t2) {
    q$1("Firestore.settings", arguments, 1), j("Firestore.settings", "object", 1, t2), t2.merge && delete (t2 = Object.assign(Object.assign({}, this.Tf), t2)).merge;
    var e = new ta$1(t2);
    if (this.ff && !this.Tf.isEqual(e))
      throw new I$1(b.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
    this.Tf = e, e.credentials !== void 0 && (this.mf = function(t3) {
      if (!t3)
        return new Co();
      switch (t3.type) {
        case "gapi":
          var e2 = t3.client;
          return x$1(!(typeof e2 != "object" || e2 === null || !e2.auth || !e2.auth.getAuthHeaderValueForFirstParty)), new qo(e2, t3.sessionIndex || "0");
        case "provider":
          return t3.client;
        default:
          throw new I$1(b.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
      }
    }(e.credentials));
  }, t.prototype.enableNetwork = function() {
    return this._f(), this.ff.enableNetwork();
  }, t.prototype.disableNetwork = function() {
    return this._f(), this.ff.disableNetwork();
  }, t.prototype.enablePersistence = function(t2) {
    var e, n2;
    if (this.ff)
      throw new I$1(b.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
    var r2 = false, i = false;
    if (t2 && (t2.experimentalTabSynchronization !== void 0 && N$1("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r2 = (n2 = (e = t2.synchronizeTabs) !== null && e !== void 0 ? e : t2.experimentalTabSynchronization) !== null && n2 !== void 0 && n2, i = !!t2.experimentalForceOwningTab && t2.experimentalForceOwningTab, r2 && i))
      throw new I$1(b.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
    return this.Af(this.cf, this.uf, {
      Gl: true,
      cacheSizeBytes: this.Tf.cacheSizeBytes,
      synchronizeTabs: r2,
      La: i
    });
  }, t.prototype.clearPersistence = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, r2 = this;
      return __generator(this, function(i) {
        if (this.ff !== void 0 && !this.ff.Y_)
          throw new I$1(b.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
        return t2 = new Er(), [2, (this.lf.ps(function() {
          return __awaiter(r2, void 0, void 0, function() {
            var e;
            return __generator(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return n2.trys.push([0, 2, , 3]), [4, this.cf.clearPersistence(this.d_, this.wf)];
                case 1:
                  return n2.sent(), t2.resolve(), [3, 3];
                case 2:
                  return e = n2.sent(), t2.reject(e), [3, 3];
                case 3:
                  return [2];
              }
            });
          });
        }), t2.promise)];
      });
    });
  }, t.prototype.terminate = function() {
    return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
  }, Object.defineProperty(t.prototype, "Rf", {
    get: function() {
      return this._f(), this.ff.Y_;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.waitForPendingWrites = function() {
    return this._f(), this.ff.waitForPendingWrites();
  }, t.prototype.onSnapshotsInSync = function(t2) {
    if (this._f(), Xu(t2))
      return this.ff.H_(t2);
    j("Firestore.onSnapshotsInSync", "function", 1, t2);
    var e = {
      next: t2
    };
    return this.ff.H_(e);
  }, t.prototype._f = function() {
    return this.ff || this.Af(new pu(), new vu(), {
      Gl: false
    }), this.ff;
  }, t.prototype.Pf = function() {
    return new dt(this.d_, this.wf, this.Tf.host, this.Tf.ssl, this.Tf.experimentalForceLongPolling);
  }, t.prototype.Af = function(t2, e, n2) {
    var r2 = this.Pf();
    return this.ff = new $u(this.mf, this.lf), this.ff.start(r2, t2, e, n2);
  }, t.df = function(t2) {
    if (e = t2.options, !Object.prototype.hasOwnProperty.call(e, "projectId"))
      throw new I$1(b.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
    var e, n2 = t2.options.projectId;
    if (!n2 || typeof n2 != "string")
      throw new I$1(b.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
    return new vt(n2);
  }, Object.defineProperty(t.prototype, "app", {
    get: function() {
      if (!this.hf)
        throw new I$1(b.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this.hf;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.collection = function(t2) {
    return q$1("Firestore.collection", arguments, 1), j("Firestore.collection", "non-empty string", 1, t2), this._f(), new ya$1(P$1.P(t2), this, null);
  }, t.prototype.doc = function(t2) {
    return q$1("Firestore.doc", arguments, 1), j("Firestore.doc", "non-empty string", 1, t2), this._f(), ia.gf(P$1.P(t2), this, null);
  }, t.prototype.collectionGroup = function(t2) {
    if (q$1("Firestore.collectionGroup", arguments, 1), j("Firestore.collectionGroup", "non-empty string", 1, t2), t2.indexOf("/") >= 0)
      throw new I$1(b.INVALID_ARGUMENT, "Invalid collection ID '" + t2 + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
    return this._f(), new da$1(function(t3) {
      return new Bn(P$1.g(), t3);
    }(t2), this, null);
  }, t.prototype.runTransaction = function(t2) {
    var e = this;
    return q$1("Firestore.runTransaction", arguments, 1), j("Firestore.runTransaction", "function", 1, t2), this._f().transaction(function(n2) {
      return t2(new na$1(e, n2));
    });
  }, t.prototype.batch = function() {
    return this._f(), new ra$1(this);
  }, Object.defineProperty(t, "logLevel", {
    get: function() {
      switch (_()) {
        case LogLevel.DEBUG:
          return "debug";
        case LogLevel.ERROR:
          return "error";
        case LogLevel.SILENT:
          return "silent";
        case LogLevel.WARN:
          return "warn";
        case LogLevel.INFO:
          return "info";
        case LogLevel.VERBOSE:
          return "verbose";
        default:
          return "error";
      }
    },
    enumerable: false,
    configurable: true
  }), t.setLogLevel = function(t2) {
    var e;
    q$1("Firestore.setLogLevel", arguments, 1), Y$1("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t2), e = t2, E$1.setLogLevel(e);
  }, t.prototype.yf = function() {
    return this.Tf.timestampsInSnapshots;
  }, t.prototype.Vf = function() {
    return this.Tf;
  }, t;
}(), na$1 = function() {
  function t(t2, e) {
    this.pf = t2, this.bf = e;
  }
  return t.prototype.get = function(t2) {
    var e = this;
    q$1("Transaction.get", arguments, 1);
    var n2 = ba$1("Transaction.get", t2, this.pf);
    return this.bf.D_([n2.w_]).then(function(t3) {
      if (!t3 || t3.length !== 1)
        return D$1();
      var r2 = t3[0];
      if (r2 instanceof qn)
        return new sa$1(e.pf, n2.w_, null, false, false, n2.m_);
      if (r2 instanceof Fn)
        return new sa$1(e.pf, n2.w_, r2, false, false, n2.m_);
      throw D$1();
    });
  }, t.prototype.set = function(t2, e, n2) {
    B("Transaction.set", arguments, 2, 3);
    var r2 = ba$1("Transaction.set", t2, this.pf);
    n2 = ma("Transaction.set", n2);
    var i = Ea$1(r2.m_, e, n2), o = Vu(this.pf.Ef, "Transaction.set", r2.w_, i, r2.m_ !== null, n2);
    return this.bf.set(r2.w_, o), this;
  }, t.prototype.update = function(t2, e, n2) {
    for (var r2, i, o = [], s = 3; s < arguments.length; s++)
      o[s - 3] = arguments[s];
    return typeof e == "string" || e instanceof gu ? (G$1("Transaction.update", arguments, 3), r2 = ba$1("Transaction.update", t2, this.pf), i = Mu(this.pf.Ef, "Transaction.update", r2.w_, e, n2, o)) : (q$1("Transaction.update", arguments, 2), r2 = ba$1("Transaction.update", t2, this.pf), i = Cu(this.pf.Ef, "Transaction.update", r2.w_, e)), this.bf.update(r2.w_, i), this;
  }, t.prototype.delete = function(t2) {
    q$1("Transaction.delete", arguments, 1);
    var e = ba$1("Transaction.delete", t2, this.pf);
    return this.bf.delete(e.w_), this;
  }, t;
}(), ra$1 = function() {
  function t(t2) {
    this.pf = t2, this.vf = [], this.Sf = false;
  }
  return t.prototype.set = function(t2, e, n2) {
    B("WriteBatch.set", arguments, 2, 3), this.Df();
    var r2 = ba$1("WriteBatch.set", t2, this.pf);
    n2 = ma("WriteBatch.set", n2);
    var i = Ea$1(r2.m_, e, n2), o = Vu(this.pf.Ef, "WriteBatch.set", r2.w_, i, r2.m_ !== null, n2);
    return this.vf = this.vf.concat(o.T_(r2.w_, wn.Ge())), this;
  }, t.prototype.update = function(t2, e, n2) {
    for (var r2, i, o = [], s = 3; s < arguments.length; s++)
      o[s - 3] = arguments[s];
    return this.Df(), typeof e == "string" || e instanceof gu ? (G$1("WriteBatch.update", arguments, 3), r2 = ba$1("WriteBatch.update", t2, this.pf), i = Mu(this.pf.Ef, "WriteBatch.update", r2.w_, e, n2, o)) : (q$1("WriteBatch.update", arguments, 2), r2 = ba$1("WriteBatch.update", t2, this.pf), i = Cu(this.pf.Ef, "WriteBatch.update", r2.w_, e)), this.vf = this.vf.concat(i.T_(r2.w_, wn.exists(true))), this;
  }, t.prototype.delete = function(t2) {
    q$1("WriteBatch.delete", arguments, 1), this.Df();
    var e = ba$1("WriteBatch.delete", t2, this.pf);
    return this.vf = this.vf.concat(new Ln(e.w_, wn.Ge())), this;
  }, t.prototype.commit = function() {
    return this.Df(), this.Sf = true, this.vf.length > 0 ? this.pf._f().write(this.vf) : Promise.resolve();
  }, t.prototype.Df = function() {
    if (this.Sf)
      throw new I$1(b.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }, t;
}(), ia = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    return (i = e.call(this, n3.d_, t, r2) || this).w_ = t, i.firestore = n3, i.m_ = r2, i.ff = i.firestore._f(), i;
  }
  return __extends(n2, e), n2.gf = function(t, e2, r2) {
    if (t.length % 2 != 0)
      throw new I$1(b.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.R() + " has " + t.length);
    return new n2(new M$1(t), e2, r2);
  }, Object.defineProperty(n2.prototype, "id", {
    get: function() {
      return this.w_.path._();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(n2.prototype, "parent", {
    get: function() {
      return new ya$1(this.w_.path.h(), this.firestore, this.m_);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(n2.prototype, "path", {
    get: function() {
      return this.w_.path.R();
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.collection = function(t) {
    if (q$1("DocumentReference.collection", arguments, 1), j("DocumentReference.collection", "non-empty string", 1, t), !t)
      throw new I$1(b.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
    var e2 = P$1.P(t);
    return new ya$1(this.w_.path.child(e2), this.firestore, null);
  }, n2.prototype.isEqual = function(t) {
    if (!(t instanceof n2))
      throw tt("isEqual", "DocumentReference", 1, t);
    return this.firestore === t.firestore && this.w_.isEqual(t.w_) && this.m_ === t.m_;
  }, n2.prototype.set = function(t, e2) {
    B("DocumentReference.set", arguments, 1, 2), e2 = ma("DocumentReference.set", e2);
    var n3 = Ea$1(this.m_, t, e2), r2 = Vu(this.firestore.Ef, "DocumentReference.set", this.w_, n3, this.m_ !== null, e2);
    return this.ff.write(r2.T_(this.w_, wn.Ge()));
  }, n2.prototype.update = function(t, e2) {
    for (var n3, r2 = [], i = 2; i < arguments.length; i++)
      r2[i - 2] = arguments[i];
    return typeof t == "string" || t instanceof gu ? (G$1("DocumentReference.update", arguments, 2), n3 = Mu(this.firestore.Ef, "DocumentReference.update", this.w_, t, e2, r2)) : (q$1("DocumentReference.update", arguments, 1), n3 = Cu(this.firestore.Ef, "DocumentReference.update", this.w_, t)), this.ff.write(n3.T_(this.w_, wn.exists(true)));
  }, n2.prototype.delete = function() {
    return q$1("DocumentReference.delete", arguments, 0), this.ff.write([new Ln(this.w_, wn.Ge())]);
  }, n2.prototype.onSnapshot = function() {
    for (var t, e2, n3, r2 = this, i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    B("DocumentReference.onSnapshot", arguments, 1, 4);
    var s = {
      includeMetadataChanges: false
    }, u2 = 0;
    typeof i[u2] != "object" || Xu(i[u2]) || (Z$1("DocumentReference.onSnapshot", s = i[u2], ["includeMetadataChanges"]), K$1("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u2++);
    var a = {
      includeMetadataChanges: s.includeMetadataChanges
    };
    if (Xu(i[u2])) {
      var c = i[u2];
      i[u2] = (t = c.next) === null || t === void 0 ? void 0 : t.bind(c), i[u2 + 1] = (e2 = c.error) === null || e2 === void 0 ? void 0 : e2.bind(c), i[u2 + 2] = (n3 = c.complete) === null || n3 === void 0 ? void 0 : n3.bind(c);
    } else
      j("DocumentReference.onSnapshot", "function", u2, i[u2]), z("DocumentReference.onSnapshot", "function", u2 + 1, i[u2 + 1]), z("DocumentReference.onSnapshot", "function", u2 + 2, i[u2 + 2]);
    var h = {
      next: function(t2) {
        i[u2] && i[u2](r2.Cf(t2));
      },
      error: i[u2 + 1],
      complete: i[u2 + 2]
    };
    return this.ff.listen(zn(this.w_.path), a, h);
  }, n2.prototype.get = function(t) {
    var e2 = this;
    B("DocumentReference.get", arguments, 0, 1), wa("DocumentReference.get", t);
    var n3 = this.firestore._f();
    return t && t.source === "cache" ? n3.j_(this.w_).then(function(t2) {
      return new sa$1(e2.firestore, e2.w_, t2, true, t2 instanceof Fn && t2.Ye, e2.m_);
    }) : n3.K_(this.w_, t).then(function(t2) {
      return e2.Cf(t2);
    });
  }, n2.prototype.withConverter = function(t) {
    return new n2(this.w_, this.firestore, t);
  }, n2.prototype.Cf = function(t) {
    var e2 = t.docs.get(this.w_);
    return new sa$1(this.firestore, this.w_, e2, t.fromCache, t.hasPendingWrites, this.m_);
  }, n2;
}(ku), oa$1 = function() {
  function t(t2, e) {
    this.hasPendingWrites = t2, this.fromCache = e;
  }
  return t.prototype.isEqual = function(t2) {
    return this.hasPendingWrites === t2.hasPendingWrites && this.fromCache === t2.fromCache;
  }, t;
}(), sa$1 = function() {
  function t(t2, e, n2, r2, i, o) {
    this.pf = t2, this.w_ = e, this.Nf = n2, this.Ff = r2, this.$f = i, this.m_ = o;
  }
  return t.prototype.data = function(t2) {
    var e = this;
    if (B("DocumentSnapshot.data", arguments, 0, 1), t2 = ga("DocumentSnapshot.data", t2), this.Nf) {
      if (this.m_) {
        var n2 = new ua$1(this.pf, this.w_, this.Nf, this.Ff, this.$f, null);
        return this.m_.fromFirestore(n2, t2);
      }
      return new Ju(this.pf.d_, this.pf.yf(), t2.serverTimestamps || "none", function(t3) {
        return new ia(t3, e.pf, null);
      }, function(t3) {
        return new pt(t3);
      }).tf(this.Nf.sn());
    }
  }, t.prototype.get = function(t2, e) {
    var n2 = this;
    if (B("DocumentSnapshot.get", arguments, 1, 2), e = ga("DocumentSnapshot.get", e), this.Nf) {
      var r2 = this.Nf.data().field(zu("DocumentSnapshot.get", t2, this.w_));
      if (r2 !== null)
        return new Ju(this.pf.d_, this.pf.yf(), e.serverTimestamps || "none", function(t3) {
          return new ia(t3, n2.pf, n2.m_);
        }, function(t3) {
          return new pt(t3);
        }).tf(r2);
    }
  }, Object.defineProperty(t.prototype, "id", {
    get: function() {
      return this.w_.path._();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "ref", {
    get: function() {
      return new ia(this.w_, this.pf, this.m_);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "exists", {
    get: function() {
      return this.Nf !== null;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "metadata", {
    get: function() {
      return new oa$1(this.$f, this.Ff);
    },
    enumerable: false,
    configurable: true
  }), t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      throw tt("isEqual", "DocumentSnapshot", 1, e);
    return this.pf === e.pf && this.Ff === e.Ff && this.w_.isEqual(e.w_) && (this.Nf === null ? e.Nf === null : this.Nf.isEqual(e.Nf)) && this.m_ === e.m_;
  }, t;
}(), ua$1 = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2.prototype.data = function(t) {
    return e.prototype.data.call(this, t);
  }, n2;
}(sa$1);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function aa$1(t, e, n2, r2, i, o, s) {
  var u2;
  if (i.p()) {
    if (o === "array-contains" || o === "array-contains-any")
      throw new I$1(b.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
    if (o === "in" || o === "not-in") {
      fa$1(s, o);
      for (var a = [], c = 0, h = s; c < h.length; c++) {
        var f = h[c];
        a.push(ha$1(r2, t, f));
      }
      u2 = {
        arrayValue: {
          values: a
        }
      };
    } else
      u2 = ha$1(r2, t, s);
  } else
    o !== "in" && o !== "not-in" && o !== "array-contains-any" || fa$1(s, o), u2 = Fu(n2, e, s, o === "in" || o === "not-in");
  var l = sr.create(i, o, u2);
  return function(t2, e2) {
    if (e2.un()) {
      var n3 = Yn(t2);
      if (n3 !== null && !n3.isEqual(e2.field))
        throw new I$1(b.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n3.toString() + "' and '" + e2.field.toString() + "'");
      var r3 = Wn(t2);
      r3 !== null && la$1(t2, e2.field, r3);
    }
    var i2 = function(t3, e3) {
      for (var n4 = 0, r4 = t3.filters; n4 < r4.length; n4++) {
        var i3 = r4[n4];
        if (e3.indexOf(i3.op) >= 0)
          return i3.op;
      }
      return null;
    }(t2, function(t3) {
      switch (t3) {
        case "!=":
          return ["!=", "not-in"];
        case "array-contains":
          return ["array-contains", "array-contains-any", "not-in"];
        case "in":
          return ["array-contains-any", "in", "not-in"];
        case "array-contains-any":
          return ["array-contains", "array-contains-any", "in", "not-in"];
        case "not-in":
          return ["array-contains", "array-contains-any", "in", "not-in", "!="];
        default:
          return [];
      }
    }(e2.op));
    if (i2 !== null)
      throw i2 === e2.op ? new I$1(b.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e2.op.toString() + "' filter.") : new I$1(b.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e2.op.toString() + "' filters with '" + i2.toString() + "' filters.");
  }(t, l), l;
}
function ca$1(t, e, n2) {
  if (t.startAt !== null)
    throw new I$1(b.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
  if (t.endAt !== null)
    throw new I$1(b.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
  var r2 = new wr(e, n2);
  return function(t2, e2) {
    if (Wn(t2) === null) {
      var n3 = Yn(t2);
      n3 !== null && la$1(t2, n3, e2.field);
    }
  }(t, r2), r2;
}
function ha$1(t, e, n2) {
  if (typeof n2 == "string") {
    if (n2 === "")
      throw new I$1(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!Hn(e) && n2.indexOf("/") !== -1)
      throw new I$1(b.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n2 + "' contains a '/' character.");
    var r2 = e.path.child(P$1.P(n2));
    if (!M$1.F(r2))
      throw new I$1(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r2 + "' is not because it has an odd number of segments (" + r2.length + ").");
    return ge(t, new M$1(r2));
  }
  if (n2 instanceof ku)
    return ge(t, n2.w_);
  throw new I$1(b.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + X$1(n2) + ".");
}
function fa$1(t, e) {
  if (!Array.isArray(t) || t.length === 0)
    throw new I$1(b.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
  if (t.length > 10)
    throw new I$1(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
  if (e === "in" || e === "array-contains-any") {
    if (t.indexOf(null) >= 0)
      throw new I$1(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
    if (t.filter(function(t2) {
      return Number.isNaN(t2);
    }).length > 0)
      throw new I$1(b.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
  }
}
function la$1(t, e, n2) {
  if (!n2.isEqual(e))
    throw new I$1(b.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n2.toString() + "' instead.");
}
function pa$1(t) {
  if (Kn(t) && t.rn.length === 0)
    throw new I$1(b.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var da$1 = function() {
  function t(t2, e, n2) {
    this.xf = t2, this.firestore = e, this.m_ = n2;
  }
  return t.prototype.where = function(e, n2, r2) {
    q$1("Query.where", arguments, 3), J$1("Query.where", 3, r2);
    var i = Y$1("Query.where", ["<", "<=", "==", "!=", ">=", ">", "array-contains", "in", "array-contains-any", "not-in"], 2, n2), o = zu("Query.where", e), s = aa$1(this.xf, "Query.where", this.firestore.Ef, this.firestore.d_, o, i, r2);
    return new t(function(t2, e2) {
      var n3 = t2.filters.concat([e2]);
      return new Bn(t2.path, t2.collectionGroup, t2.rn.slice(), n3, t2.limit, t2.on, t2.startAt, t2.endAt);
    }(this.xf, s), this.firestore, this.m_);
  }, t.prototype.orderBy = function(e, n2) {
    var r2;
    if (B("Query.orderBy", arguments, 1, 2), z("Query.orderBy", "non-empty string", 2, n2), n2 === void 0 || n2 === "asc")
      r2 = "asc";
    else {
      if (n2 !== "desc")
        throw new I$1(b.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n2 + "', expected 'asc' or 'desc'.");
      r2 = "desc";
    }
    var i = zu("Query.orderBy", e), o = ca$1(this.xf, i, r2);
    return new t(function(t2, e2) {
      var n3 = t2.rn.concat([e2]);
      return new Bn(t2.path, t2.collectionGroup, n3, t2.filters.slice(), t2.limit, t2.on, t2.startAt, t2.endAt);
    }(this.xf, o), this.firestore, this.m_);
  }, t.prototype.limit = function(e) {
    return q$1("Query.limit", arguments, 1), j("Query.limit", "number", 1, e), et("Query.limit", 1, e), new t(Jn(this.xf, e, "F"), this.firestore, this.m_);
  }, t.prototype.limitToLast = function(e) {
    return q$1("Query.limitToLast", arguments, 1), j("Query.limitToLast", "number", 1, e), et("Query.limitToLast", 1, e), new t(Jn(this.xf, e, "L"), this.firestore, this.m_);
  }, t.prototype.startAt = function(e) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    G$1("Query.startAt", arguments, 1);
    var i = this.kf("Query.startAt", e, n2, true);
    return new t(Zn(this.xf, i), this.firestore, this.m_);
  }, t.prototype.startAfter = function(e) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    G$1("Query.startAfter", arguments, 1);
    var i = this.kf("Query.startAfter", e, n2, false);
    return new t(Zn(this.xf, i), this.firestore, this.m_);
  }, t.prototype.endBefore = function(e) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    G$1("Query.endBefore", arguments, 1);
    var i = this.kf("Query.endBefore", e, n2, true);
    return new t(tr(this.xf, i), this.firestore, this.m_);
  }, t.prototype.endAt = function(e) {
    for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
      n2[r2 - 1] = arguments[r2];
    G$1("Query.endAt", arguments, 1);
    var i = this.kf("Query.endAt", e, n2, false);
    return new t(tr(this.xf, i), this.firestore, this.m_);
  }, t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      throw tt("isEqual", "Query", 1, e);
    return this.firestore === e.firestore && er(this.xf, e.xf) && this.m_ === e.m_;
  }, t.prototype.withConverter = function(e) {
    return new t(this.xf, this.firestore, e);
  }, t.prototype.kf = function(t2, e, n2, i) {
    if (J$1(t2, 1, e), e instanceof sa$1)
      return q$1(t2, __spreadArrays([e], n2), 1), function(t3, e2, n3, r2, i2) {
        if (!r2)
          throw new I$1(b.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n3 + "().");
        for (var o2 = [], s = 0, u2 = $n(t3); s < u2.length; s++) {
          var a = u2[s];
          if (a.field.p())
            o2.push(ge(e2, r2.key));
          else {
            var c = r2.field(a.field);
            if (se(c))
              throw new I$1(b.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (c === null) {
              var h = a.field.R();
              throw new I$1(b.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
            }
            o2.push(c);
          }
        }
        return new vr(o2, i2);
      }(this.xf, this.firestore.d_, t2, e.Nf, i);
    var o = [e].concat(n2);
    return function(t3, e2, n3, r2, i2, o2) {
      var s = t3.rn;
      if (i2.length > s.length)
        throw new I$1(b.INVALID_ARGUMENT, "Too many arguments provided to " + r2 + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
      for (var u2 = [], a = 0; a < i2.length; a++) {
        var c = i2[a];
        if (s[a].field.p()) {
          if (typeof c != "string")
            throw new I$1(b.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r2 + "(), but got a " + typeof c);
          if (!Hn(t3) && c.indexOf("/") !== -1)
            throw new I$1(b.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r2 + "() must be a plain document ID, but '" + c + "' contains a slash.");
          var h = t3.path.child(P$1.P(c));
          if (!M$1.F(h))
            throw new I$1(b.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r2 + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
          var f = new M$1(h);
          u2.push(ge(e2, f));
        } else {
          var l = Fu(n3, r2, c);
          u2.push(l);
        }
      }
      return new vr(u2, o2);
    }(this.xf, this.firestore.d_, this.firestore.Ef, t2, o, i);
  }, t.prototype.onSnapshot = function() {
    for (var t2, e, n2, r2 = this, i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    B("Query.onSnapshot", arguments, 1, 4);
    var s = {}, u2 = 0;
    if (typeof i[u2] != "object" || Xu(i[u2]) || (Z$1("Query.onSnapshot", s = i[u2], ["includeMetadataChanges"]), K$1("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u2++), Xu(i[u2])) {
      var a = i[u2];
      i[u2] = (t2 = a.next) === null || t2 === void 0 ? void 0 : t2.bind(a), i[u2 + 1] = (e = a.error) === null || e === void 0 ? void 0 : e.bind(a), i[u2 + 2] = (n2 = a.complete) === null || n2 === void 0 ? void 0 : n2.bind(a);
    } else
      j("Query.onSnapshot", "function", u2, i[u2]), z("Query.onSnapshot", "function", u2 + 1, i[u2 + 1]), z("Query.onSnapshot", "function", u2 + 2, i[u2 + 2]);
    var c = {
      next: function(t3) {
        i[u2] && i[u2](new va(r2.firestore, r2.xf, t3, r2.m_));
      },
      error: i[u2 + 1],
      complete: i[u2 + 2]
    };
    return pa$1(this.xf), this.firestore._f().listen(this.xf, s, c);
  }, t.prototype.get = function(t2) {
    var e = this;
    B("Query.get", arguments, 0, 1), wa("Query.get", t2), pa$1(this.xf);
    var n2 = this.firestore._f();
    return (t2 && t2.source === "cache" ? n2.G_(this.xf) : n2.z_(this.xf, t2)).then(function(t3) {
      return new va(e.firestore, e.xf, t3, e.m_);
    });
  }, t;
}(), va = function() {
  function t(t2, e, n2, r2) {
    this.pf = t2, this.Mf = e, this.Of = n2, this.m_ = r2, this.Lf = null, this.Bf = null, this.metadata = new oa$1(n2.hasPendingWrites, n2.fromCache);
  }
  return Object.defineProperty(t.prototype, "docs", {
    get: function() {
      var t2 = [];
      return this.forEach(function(e) {
        return t2.push(e);
      }), t2;
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "empty", {
    get: function() {
      return this.Of.docs.m();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(t.prototype, "size", {
    get: function() {
      return this.Of.docs.size;
    },
    enumerable: false,
    configurable: true
  }), t.prototype.forEach = function(t2, e) {
    var n2 = this;
    B("QuerySnapshot.forEach", arguments, 1, 2), j("QuerySnapshot.forEach", "function", 1, t2), this.Of.docs.forEach(function(r2) {
      t2.call(e, n2.qf(r2, n2.metadata.fromCache, n2.Of.Qt.has(r2.key)));
    });
  }, Object.defineProperty(t.prototype, "query", {
    get: function() {
      return new da$1(this.Mf, this.pf, this.m_);
    },
    enumerable: false,
    configurable: true
  }), t.prototype.docChanges = function(t2) {
    t2 && (Z$1("QuerySnapshot.docChanges", t2, ["includeMetadataChanges"]), K$1("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t2.includeMetadataChanges));
    var e = !(!t2 || !t2.includeMetadataChanges);
    if (e && this.Of.jt)
      throw new I$1(b.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this.Lf && this.Bf === e || (this.Lf = function(t3, e2, n2) {
      if (t3.Ut.m()) {
        var r2 = 0;
        return t3.docChanges.map(function(e3) {
          var i2 = n2(e3.doc, t3.fromCache, t3.Qt.has(e3.doc.key));
          return e3.doc, {
            type: "added",
            doc: i2,
            oldIndex: -1,
            newIndex: r2++
          };
        });
      }
      var i = t3.Ut;
      return t3.docChanges.filter(function(t4) {
        return e2 || t4.type !== 3;
      }).map(function(e3) {
        var r3 = n2(e3.doc, t3.fromCache, t3.Qt.has(e3.doc.key)), o = -1, s = -1;
        return e3.type !== 0 && (o = i.indexOf(e3.doc.key), i = i.delete(e3.doc.key)), e3.type !== 1 && (s = (i = i.add(e3.doc)).indexOf(e3.doc.key)), {
          type: Ia$1(e3.type),
          doc: r3,
          oldIndex: o,
          newIndex: s
        };
      });
    }(this.Of, e, this.qf.bind(this)), this.Bf = e), this.Lf;
  }, t.prototype.isEqual = function(e) {
    if (!(e instanceof t))
      throw tt("isEqual", "QuerySnapshot", 1, e);
    return this.pf === e.pf && er(this.Mf, e.Mf) && this.Of.isEqual(e.Of) && this.m_ === e.m_;
  }, t.prototype.qf = function(t2, e, n2) {
    return new ua$1(this.pf, t2.key, t2, e, n2, this.m_);
  }, t;
}(), ya$1 = function(e) {
  function n2(t, n3, r2) {
    var i = this;
    if ((i = e.call(this, zn(t), n3, r2) || this).Uf = t, t.length % 2 != 1)
      throw new I$1(b.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.R() + " has " + t.length);
    return i;
  }
  return __extends(n2, e), Object.defineProperty(n2.prototype, "id", {
    get: function() {
      return this.xf.path._();
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(n2.prototype, "parent", {
    get: function() {
      var t = this.xf.path.h();
      return t.m() ? null : new ia(new M$1(t), this.firestore, null);
    },
    enumerable: false,
    configurable: true
  }), Object.defineProperty(n2.prototype, "path", {
    get: function() {
      return this.xf.path.R();
    },
    enumerable: false,
    configurable: true
  }), n2.prototype.doc = function(t) {
    B("CollectionReference.doc", arguments, 0, 1), arguments.length === 0 && (t = ot.k()), j("CollectionReference.doc", "non-empty string", 1, t);
    var e2 = P$1.P(t);
    return ia.gf(this.xf.path.child(e2), this.firestore, this.m_);
  }, n2.prototype.add = function(t) {
    q$1("CollectionReference.add", arguments, 1);
    var e2 = this.m_ ? this.m_.toFirestore(t) : t;
    j("CollectionReference.add", "object", 1, e2);
    var n3 = this.doc();
    return new ia(n3.w_, this.firestore, null).set(e2).then(function() {
      return n3;
    });
  }, n2.prototype.withConverter = function(t) {
    return new n2(this.Uf, this.firestore, t);
  }, n2;
}(da$1);
function ma(t, e) {
  if (e === void 0)
    return {
      merge: false
    };
  if (Z$1(t, e, ["merge", "mergeFields"]), K$1(t, "boolean", "merge", e.merge), function(t2, e2, n2, r2, i) {
    r2 !== void 0 && function(t3, e3, n3, r3, i2) {
      if (!(r3 instanceof Array))
        throw new I$1(b.INVALID_ARGUMENT, "Function " + t3 + "() requires its " + e3 + " option to be an array, but it was: " + X$1(r3));
      for (var o = 0; o < r3.length; ++o)
        if (!i2(r3[o]))
          throw new I$1(b.INVALID_ARGUMENT, "Function " + t3 + "() requires all " + e3 + " elements to be " + n3 + ", but the value at index " + o + " was: " + X$1(r3[o]));
    }(t2, e2, n2, r2, i);
  }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function(t2) {
    return typeof t2 == "string" || t2 instanceof gu;
  }), e.mergeFields !== void 0 && e.merge !== void 0)
    throw new I$1(b.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
  return e;
}
function ga(t, e) {
  return e === void 0 ? {} : (Z$1(t, e, ["serverTimestamps"]), W$1(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e);
}
function wa(t, e) {
  z(t, "object", 1, e), e && (Z$1(t, e, ["source"]), W$1(t, 0, "source", e.source, ["default", "server", "cache"]));
}
function ba$1(t, e, n2) {
  if (e instanceof ku) {
    if (e.firestore !== n2)
      throw new I$1(b.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return e;
  }
  throw tt(t, "DocumentReference", 1, e);
}
function Ia$1(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return D$1();
  }
}
function Ea$1(t, e, n2) {
  return t ? n2 && (n2.merge || n2.mergeFields) ? t.toFirestore(e, n2) : t.toFirestore(e) : e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$4 = function(e) {
  function n2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n2, e), n2.serverTimestamp = function() {
    F$1("FieldValue.serverTimestamp", arguments);
    var t = new _u("serverTimestamp");
    return t.s_ = "FieldValue.serverTimestamp", new n2(t);
  }, n2.delete = function() {
    F$1("FieldValue.delete", arguments);
    var t = new Iu("deleteField");
    return t.s_ = "FieldValue.delete", new n2(t);
  }, n2.arrayUnion = function() {
    for (var t = [], e2 = 0; e2 < arguments.length; e2++)
      t[e2] = arguments[e2];
    G$1("FieldValue.arrayUnion", arguments, 1);
    var r2 = function() {
      for (var t2 = [], e3 = 0; e3 < arguments.length; e3++)
        t2[e3] = arguments[e3];
      return G$1("arrayUnion()", arguments, 1), new Tu("arrayUnion", t2);
    }.apply(void 0, t);
    return r2.s_ = "FieldValue.arrayUnion", new n2(r2);
  }, n2.arrayRemove = function() {
    for (var t = [], e2 = 0; e2 < arguments.length; e2++)
      t[e2] = arguments[e2];
    G$1("FieldValue.arrayRemove", arguments, 1);
    var r2 = function() {
      for (var t2 = [], e3 = 0; e3 < arguments.length; e3++)
        t2[e3] = arguments[e3];
      return G$1("arrayRemove()", arguments, 1), new Nu("arrayRemove", t2);
    }.apply(void 0, t);
    return r2.s_ = "FieldValue.arrayRemove", new n2(r2);
  }, n2.increment = function(t) {
    j("FieldValue.increment", "number", 1, t), q$1("FieldValue.increment", arguments, 1);
    var e2 = function(t2) {
      return new Au("increment", t2);
    }(t);
    return e2.s_ = "FieldValue.increment", new n2(e2);
  }, n2.prototype.isEqual = function(t) {
    return this.f_.isEqual(t.f_);
  }, n2;
}(Du), Ta$1 = {
  Firestore: ea$1,
  GeoPoint: Su,
  Timestamp: mt,
  Blob: pt,
  Transaction: na$1,
  WriteBatch: ra$1,
  DocumentReference: ia,
  DocumentSnapshot: sa$1,
  Query: da$1,
  QueryDocumentSnapshot: ua$1,
  QuerySnapshot: va,
  CollectionReference: ya$1,
  FieldPath: gu,
  FieldValue: _a$4,
  setLogLevel: ea$1.setLogLevel,
  CACHE_SIZE_UNLIMITED: Zu
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Na$1(t) {
  !function(t2, e) {
    t2.INTERNAL.registerComponent(new Component("firestore", function(t3) {
      return function(t4, e2) {
        var n2 = new vu(), r2 = new du(n2);
        return new ea$1(t4, e2, r2, n2);
      }(t3.getProvider("app").getImmediate(), t3.getProvider("auth-internal"));
    }, "PUBLIC").setServiceProps(Object.assign({}, Ta$1)));
  }(t), t.registerVersion("@firebase/firestore", "1.17.2");
}
Na$1(firebase$1);
firebase$1.initializeApp({
  apiKey: "AIzaSyD7MY8GJu82plLaz65psC6gfWcekbPxH4o",
  authDomain: "ac19app.firebaseapp.com",
  databaseURL: "https://ac19app.firebaseio.com",
  projectId: "ac19app",
  storageBucket: "ac19app.appspot.com",
  messagingSenderId: "371296486007",
  appId: "1:371296486007:web:cf30421514995d73a17c72",
  measurementId: "G-TRDM7FP7LH"
});
var firebase$2 = {
  name: "firebase",
  module: firebase$1,
  hasGlobal: true
};
exports.default = firebase$2;

//# sourceMappingURL=firebase.08d6c47c.js.map