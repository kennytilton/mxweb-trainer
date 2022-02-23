["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/listenermap.js"],"~:js","goog.provide(\"goog.events.ListenerMap\");\ngoog.require(\"goog.array\");\ngoog.require(\"goog.events.Listener\");\ngoog.require(\"goog.object\");\ngoog.requireType(\"goog.events.EventId\");\ngoog.requireType(\"goog.events.Listenable\");\ngoog.requireType(\"goog.events.ListenableKey\");\ngoog.events.ListenerMap = function(src) {\n  this.src = src;\n  this.listeners = {};\n  this.typeCount_ = 0;\n};\ngoog.events.ListenerMap.prototype.getTypeCount = function() {\n  return this.typeCount_;\n};\ngoog.events.ListenerMap.prototype.getListenerCount = function() {\n  var count = 0;\n  for (var type in this.listeners) {\n    count += this.listeners[type].length;\n  }\n  return count;\n};\ngoog.events.ListenerMap.prototype.add = function(type, listener, callOnce, opt_useCapture, opt_listenerScope) {\n  var typeStr = type.toString();\n  var listenerArray = this.listeners[typeStr];\n  if (!listenerArray) {\n    listenerArray = this.listeners[typeStr] = [];\n    this.typeCount_++;\n  }\n  var listenerObj;\n  var index = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);\n  if (index > -1) {\n    listenerObj = listenerArray[index];\n    if (!callOnce) {\n      listenerObj.callOnce = false;\n    }\n  } else {\n    listenerObj = new goog.events.Listener(listener, null, this.src, typeStr, !!opt_useCapture, opt_listenerScope);\n    listenerObj.callOnce = callOnce;\n    listenerArray.push(listenerObj);\n  }\n  return listenerObj;\n};\ngoog.events.ListenerMap.prototype.remove = function(type, listener, opt_useCapture, opt_listenerScope) {\n  var typeStr = type.toString();\n  if (!(typeStr in this.listeners)) {\n    return false;\n  }\n  var listenerArray = this.listeners[typeStr];\n  var index = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, opt_useCapture, opt_listenerScope);\n  if (index > -1) {\n    var listenerObj = listenerArray[index];\n    listenerObj.markAsRemoved();\n    goog.array.removeAt(listenerArray, index);\n    if (listenerArray.length == 0) {\n      delete this.listeners[typeStr];\n      this.typeCount_--;\n    }\n    return true;\n  }\n  return false;\n};\ngoog.events.ListenerMap.prototype.removeByKey = function(listener) {\n  var type = listener.type;\n  if (!(type in this.listeners)) {\n    return false;\n  }\n  var removed = goog.array.remove(this.listeners[type], listener);\n  if (removed) {\n    listener.markAsRemoved();\n    if (this.listeners[type].length == 0) {\n      delete this.listeners[type];\n      this.typeCount_--;\n    }\n  }\n  return removed;\n};\ngoog.events.ListenerMap.prototype.removeAll = function(opt_type) {\n  var typeStr = opt_type && opt_type.toString();\n  var count = 0;\n  for (var type in this.listeners) {\n    if (!typeStr || type == typeStr) {\n      var listenerArray = this.listeners[type];\n      for (var i = 0; i < listenerArray.length; i++) {\n        ++count;\n        listenerArray[i].markAsRemoved();\n      }\n      delete this.listeners[type];\n      this.typeCount_--;\n    }\n  }\n  return count;\n};\ngoog.events.ListenerMap.prototype.getListeners = function(type, capture) {\n  var listenerArray = this.listeners[type.toString()];\n  var rv = [];\n  if (listenerArray) {\n    for (var i = 0; i < listenerArray.length; ++i) {\n      var listenerObj = listenerArray[i];\n      if (listenerObj.capture == capture) {\n        rv.push(listenerObj);\n      }\n    }\n  }\n  return rv;\n};\ngoog.events.ListenerMap.prototype.getListener = function(type, listener, capture, opt_listenerScope) {\n  var listenerArray = this.listeners[type.toString()];\n  var i = -1;\n  if (listenerArray) {\n    i = goog.events.ListenerMap.findListenerIndex_(listenerArray, listener, capture, opt_listenerScope);\n  }\n  return i > -1 ? listenerArray[i] : null;\n};\ngoog.events.ListenerMap.prototype.hasListener = function(opt_type, opt_capture) {\n  var hasType = opt_type !== undefined;\n  var typeStr = hasType ? opt_type.toString() : \"\";\n  var hasCapture = opt_capture !== undefined;\n  return goog.object.some(this.listeners, function(listenerArray, type) {\n    for (var i = 0; i < listenerArray.length; ++i) {\n      if ((!hasType || listenerArray[i].type == typeStr) && (!hasCapture || listenerArray[i].capture == opt_capture)) {\n        return true;\n      }\n    }\n    return false;\n  });\n};\ngoog.events.ListenerMap.findListenerIndex_ = function(listenerArray, listener, opt_useCapture, opt_listenerScope) {\n  for (var i = 0; i < listenerArray.length; ++i) {\n    var listenerObj = listenerArray[i];\n    if (!listenerObj.removed && listenerObj.listener == listener && listenerObj.capture == !!opt_useCapture && listenerObj.handler == opt_listenerScope) {\n      return i;\n    }\n  }\n  return -1;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A map of listeners that provides utility functions to\n * deal with listeners on an event target. Used by\n * `goog.events.EventTarget`.\n *\n * WARNING: Do not use this class from outside goog.events package.\n *\n */\n\ngoog.provide('goog.events.ListenerMap');\n\ngoog.require('goog.array');\ngoog.require('goog.events.Listener');\ngoog.require('goog.object');\ngoog.requireType('goog.events.EventId');\ngoog.requireType('goog.events.Listenable');\ngoog.requireType('goog.events.ListenableKey');\n\n\n\n/**\n * Creates a new listener map.\n * @param {EventTarget|goog.events.Listenable} src The src object.\n * @constructor\n * @final\n */\ngoog.events.ListenerMap = function(src) {\n  'use strict';\n  /** @type {EventTarget|goog.events.Listenable} */\n  this.src = src;\n\n  /**\n   * Maps of event type to an array of listeners.\n   * @type {!Object<string, !Array<!goog.events.Listener>>}\n   */\n  this.listeners = {};\n\n  /**\n   * The count of types in this map that have registered listeners.\n   * @private {number}\n   */\n  this.typeCount_ = 0;\n};\n\n\n/**\n * @return {number} The count of event types in this map that actually\n *     have registered listeners.\n */\ngoog.events.ListenerMap.prototype.getTypeCount = function() {\n  'use strict';\n  return this.typeCount_;\n};\n\n\n/**\n * @return {number} Total number of registered listeners.\n */\ngoog.events.ListenerMap.prototype.getListenerCount = function() {\n  'use strict';\n  var count = 0;\n  for (var type in this.listeners) {\n    count += this.listeners[type].length;\n  }\n  return count;\n};\n\n\n/**\n * Adds an event listener. A listener can only be added once to an\n * object and if it is added again the key for the listener is\n * returned.\n *\n * Note that a one-off listener will not change an existing listener,\n * if any. On the other hand a normal listener will change existing\n * one-off listener to become a normal listener.\n *\n * @param {string|!goog.events.EventId} type The listener event type.\n * @param {!Function} listener This listener callback method.\n * @param {boolean} callOnce Whether the listener is a one-off\n *     listener.\n * @param {boolean=} opt_useCapture The capture mode of the listener.\n * @param {Object=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {!goog.events.ListenableKey} Unique key for the listener.\n */\ngoog.events.ListenerMap.prototype.add = function(\n    type, listener, callOnce, opt_useCapture, opt_listenerScope) {\n  'use strict';\n  var typeStr = type.toString();\n  var listenerArray = this.listeners[typeStr];\n  if (!listenerArray) {\n    listenerArray = this.listeners[typeStr] = [];\n    this.typeCount_++;\n  }\n\n  var listenerObj;\n  var index = goog.events.ListenerMap.findListenerIndex_(\n      listenerArray, listener, opt_useCapture, opt_listenerScope);\n  if (index > -1) {\n    listenerObj = listenerArray[index];\n    if (!callOnce) {\n      // Ensure that, if there is an existing callOnce listener, it is no\n      // longer a callOnce listener.\n      listenerObj.callOnce = false;\n    }\n  } else {\n    listenerObj = new goog.events.Listener(\n        listener, null, this.src, typeStr, !!opt_useCapture, opt_listenerScope);\n    listenerObj.callOnce = callOnce;\n    listenerArray.push(listenerObj);\n  }\n  return listenerObj;\n};\n\n\n/**\n * Removes a matching listener.\n * @param {string|!goog.events.EventId} type The listener event type.\n * @param {!Function} listener This listener callback method.\n * @param {boolean=} opt_useCapture The capture mode of the listener.\n * @param {Object=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {boolean} Whether any listener was removed.\n */\ngoog.events.ListenerMap.prototype.remove = function(\n    type, listener, opt_useCapture, opt_listenerScope) {\n  'use strict';\n  var typeStr = type.toString();\n  if (!(typeStr in this.listeners)) {\n    return false;\n  }\n\n  var listenerArray = this.listeners[typeStr];\n  var index = goog.events.ListenerMap.findListenerIndex_(\n      listenerArray, listener, opt_useCapture, opt_listenerScope);\n  if (index > -1) {\n    var listenerObj = listenerArray[index];\n    listenerObj.markAsRemoved();\n    goog.array.removeAt(listenerArray, index);\n    if (listenerArray.length == 0) {\n      delete this.listeners[typeStr];\n      this.typeCount_--;\n    }\n    return true;\n  }\n  return false;\n};\n\n\n/**\n * Removes the given listener object.\n * @param {!goog.events.ListenableKey} listener The listener to remove.\n * @return {boolean} Whether the listener is removed.\n */\ngoog.events.ListenerMap.prototype.removeByKey = function(listener) {\n  'use strict';\n  var type = listener.type;\n  if (!(type in this.listeners)) {\n    return false;\n  }\n\n  var removed = goog.array.remove(this.listeners[type], listener);\n  if (removed) {\n    /** @type {!goog.events.Listener} */ (listener).markAsRemoved();\n    if (this.listeners[type].length == 0) {\n      delete this.listeners[type];\n      this.typeCount_--;\n    }\n  }\n  return removed;\n};\n\n\n/**\n * Removes all listeners from this map. If opt_type is provided, only\n * listeners that match the given type are removed.\n * @param {string|!goog.events.EventId=} opt_type Type of event to remove.\n * @return {number} Number of listeners removed.\n */\ngoog.events.ListenerMap.prototype.removeAll = function(opt_type) {\n  'use strict';\n  var typeStr = opt_type && opt_type.toString();\n  var count = 0;\n  for (var type in this.listeners) {\n    if (!typeStr || type == typeStr) {\n      var listenerArray = this.listeners[type];\n      for (var i = 0; i < listenerArray.length; i++) {\n        ++count;\n        listenerArray[i].markAsRemoved();\n      }\n      delete this.listeners[type];\n      this.typeCount_--;\n    }\n  }\n  return count;\n};\n\n\n/**\n * Gets all listeners that match the given type and capture mode. The\n * returned array is a copy (but the listener objects are not).\n * @param {string|!goog.events.EventId} type The type of the listeners\n *     to retrieve.\n * @param {boolean} capture The capture mode of the listeners to retrieve.\n * @return {!Array<!goog.events.ListenableKey>} An array of matching\n *     listeners.\n */\ngoog.events.ListenerMap.prototype.getListeners = function(type, capture) {\n  'use strict';\n  var listenerArray = this.listeners[type.toString()];\n  var rv = [];\n  if (listenerArray) {\n    for (var i = 0; i < listenerArray.length; ++i) {\n      var listenerObj = listenerArray[i];\n      if (listenerObj.capture == capture) {\n        rv.push(listenerObj);\n      }\n    }\n  }\n  return rv;\n};\n\n\n/**\n * Gets the goog.events.ListenableKey for the event or null if no such\n * listener is in use.\n *\n * @param {string|!goog.events.EventId} type The type of the listener\n *     to retrieve.\n * @param {!Function} listener The listener function to get.\n * @param {boolean} capture Whether the listener is a capturing listener.\n * @param {Object=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {goog.events.ListenableKey} the found listener or null if not found.\n */\ngoog.events.ListenerMap.prototype.getListener = function(\n    type, listener, capture, opt_listenerScope) {\n  'use strict';\n  var listenerArray = this.listeners[type.toString()];\n  var i = -1;\n  if (listenerArray) {\n    i = goog.events.ListenerMap.findListenerIndex_(\n        listenerArray, listener, capture, opt_listenerScope);\n  }\n  return i > -1 ? listenerArray[i] : null;\n};\n\n\n/**\n * Whether there is a matching listener. If either the type or capture\n * parameters are unspecified, the function will match on the\n * remaining criteria.\n *\n * @param {string|!goog.events.EventId=} opt_type The type of the listener.\n * @param {boolean=} opt_capture The capture mode of the listener.\n * @return {boolean} Whether there is an active listener matching\n *     the requested type and/or capture phase.\n */\ngoog.events.ListenerMap.prototype.hasListener = function(\n    opt_type, opt_capture) {\n  'use strict';\n  var hasType = (opt_type !== undefined);\n  var typeStr = hasType ? opt_type.toString() : '';\n  var hasCapture = (opt_capture !== undefined);\n\n  return goog.object.some(this.listeners, function(listenerArray, type) {\n    'use strict';\n    for (var i = 0; i < listenerArray.length; ++i) {\n      if ((!hasType || listenerArray[i].type == typeStr) &&\n          (!hasCapture || listenerArray[i].capture == opt_capture)) {\n        return true;\n      }\n    }\n\n    return false;\n  });\n};\n\n\n/**\n * Finds the index of a matching goog.events.Listener in the given\n * listenerArray.\n * @param {!Array<!goog.events.Listener>} listenerArray Array of listener.\n * @param {!Function} listener The listener function.\n * @param {boolean=} opt_useCapture The capture flag for the listener.\n * @param {Object=} opt_listenerScope The listener scope.\n * @return {number} The index of the matching listener within the\n *     listenerArray.\n * @private\n */\ngoog.events.ListenerMap.findListenerIndex_ = function(\n    listenerArray, listener, opt_useCapture, opt_listenerScope) {\n  'use strict';\n  for (var i = 0; i < listenerArray.length; ++i) {\n    var listenerObj = listenerArray[i];\n    if (!listenerObj.removed && listenerObj.listener == listener &&\n        listenerObj.capture == !!opt_useCapture &&\n        listenerObj.handler == opt_listenerScope) {\n      return i;\n    }\n  }\n  return -1;\n};\n","~:compiled-at",1645592433506,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.listenermap.js\",\n\"lineCount\":137,\n\"mappings\":\"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\",\n\"sources\":[\"goog/events/listenermap.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A map of listeners that provides utility functions to\\n * deal with listeners on an event target. Used by\\n * `goog.events.EventTarget`.\\n *\\n * WARNING: Do not use this class from outside goog.events package.\\n *\\n */\\n\\ngoog.provide('goog.events.ListenerMap');\\n\\ngoog.require('goog.array');\\ngoog.require('goog.events.Listener');\\ngoog.require('goog.object');\\ngoog.requireType('goog.events.EventId');\\ngoog.requireType('goog.events.Listenable');\\ngoog.requireType('goog.events.ListenableKey');\\n\\n\\n\\n/**\\n * Creates a new listener map.\\n * @param {EventTarget|goog.events.Listenable} src The src object.\\n * @constructor\\n * @final\\n */\\ngoog.events.ListenerMap = function(src) {\\n  'use strict';\\n  /** @type {EventTarget|goog.events.Listenable} */\\n  this.src = src;\\n\\n  /**\\n   * Maps of event type to an array of listeners.\\n   * @type {!Object<string, !Array<!goog.events.Listener>>}\\n   */\\n  this.listeners = {};\\n\\n  /**\\n   * The count of types in this map that have registered listeners.\\n   * @private {number}\\n   */\\n  this.typeCount_ = 0;\\n};\\n\\n\\n/**\\n * @return {number} The count of event types in this map that actually\\n *     have registered listeners.\\n */\\ngoog.events.ListenerMap.prototype.getTypeCount = function() {\\n  'use strict';\\n  return this.typeCount_;\\n};\\n\\n\\n/**\\n * @return {number} Total number of registered listeners.\\n */\\ngoog.events.ListenerMap.prototype.getListenerCount = function() {\\n  'use strict';\\n  var count = 0;\\n  for (var type in this.listeners) {\\n    count += this.listeners[type].length;\\n  }\\n  return count;\\n};\\n\\n\\n/**\\n * Adds an event listener. A listener can only be added once to an\\n * object and if it is added again the key for the listener is\\n * returned.\\n *\\n * Note that a one-off listener will not change an existing listener,\\n * if any. On the other hand a normal listener will change existing\\n * one-off listener to become a normal listener.\\n *\\n * @param {string|!goog.events.EventId} type The listener event type.\\n * @param {!Function} listener This listener callback method.\\n * @param {boolean} callOnce Whether the listener is a one-off\\n *     listener.\\n * @param {boolean=} opt_useCapture The capture mode of the listener.\\n * @param {Object=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {!goog.events.ListenableKey} Unique key for the listener.\\n */\\ngoog.events.ListenerMap.prototype.add = function(\\n    type, listener, callOnce, opt_useCapture, opt_listenerScope) {\\n  'use strict';\\n  var typeStr = type.toString();\\n  var listenerArray = this.listeners[typeStr];\\n  if (!listenerArray) {\\n    listenerArray = this.listeners[typeStr] = [];\\n    this.typeCount_++;\\n  }\\n\\n  var listenerObj;\\n  var index = goog.events.ListenerMap.findListenerIndex_(\\n      listenerArray, listener, opt_useCapture, opt_listenerScope);\\n  if (index > -1) {\\n    listenerObj = listenerArray[index];\\n    if (!callOnce) {\\n      // Ensure that, if there is an existing callOnce listener, it is no\\n      // longer a callOnce listener.\\n      listenerObj.callOnce = false;\\n    }\\n  } else {\\n    listenerObj = new goog.events.Listener(\\n        listener, null, this.src, typeStr, !!opt_useCapture, opt_listenerScope);\\n    listenerObj.callOnce = callOnce;\\n    listenerArray.push(listenerObj);\\n  }\\n  return listenerObj;\\n};\\n\\n\\n/**\\n * Removes a matching listener.\\n * @param {string|!goog.events.EventId} type The listener event type.\\n * @param {!Function} listener This listener callback method.\\n * @param {boolean=} opt_useCapture The capture mode of the listener.\\n * @param {Object=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {boolean} Whether any listener was removed.\\n */\\ngoog.events.ListenerMap.prototype.remove = function(\\n    type, listener, opt_useCapture, opt_listenerScope) {\\n  'use strict';\\n  var typeStr = type.toString();\\n  if (!(typeStr in this.listeners)) {\\n    return false;\\n  }\\n\\n  var listenerArray = this.listeners[typeStr];\\n  var index = goog.events.ListenerMap.findListenerIndex_(\\n      listenerArray, listener, opt_useCapture, opt_listenerScope);\\n  if (index > -1) {\\n    var listenerObj = listenerArray[index];\\n    listenerObj.markAsRemoved();\\n    goog.array.removeAt(listenerArray, index);\\n    if (listenerArray.length == 0) {\\n      delete this.listeners[typeStr];\\n      this.typeCount_--;\\n    }\\n    return true;\\n  }\\n  return false;\\n};\\n\\n\\n/**\\n * Removes the given listener object.\\n * @param {!goog.events.ListenableKey} listener The listener to remove.\\n * @return {boolean} Whether the listener is removed.\\n */\\ngoog.events.ListenerMap.prototype.removeByKey = function(listener) {\\n  'use strict';\\n  var type = listener.type;\\n  if (!(type in this.listeners)) {\\n    return false;\\n  }\\n\\n  var removed = goog.array.remove(this.listeners[type], listener);\\n  if (removed) {\\n    /** @type {!goog.events.Listener} */ (listener).markAsRemoved();\\n    if (this.listeners[type].length == 0) {\\n      delete this.listeners[type];\\n      this.typeCount_--;\\n    }\\n  }\\n  return removed;\\n};\\n\\n\\n/**\\n * Removes all listeners from this map. If opt_type is provided, only\\n * listeners that match the given type are removed.\\n * @param {string|!goog.events.EventId=} opt_type Type of event to remove.\\n * @return {number} Number of listeners removed.\\n */\\ngoog.events.ListenerMap.prototype.removeAll = function(opt_type) {\\n  'use strict';\\n  var typeStr = opt_type && opt_type.toString();\\n  var count = 0;\\n  for (var type in this.listeners) {\\n    if (!typeStr || type == typeStr) {\\n      var listenerArray = this.listeners[type];\\n      for (var i = 0; i < listenerArray.length; i++) {\\n        ++count;\\n        listenerArray[i].markAsRemoved();\\n      }\\n      delete this.listeners[type];\\n      this.typeCount_--;\\n    }\\n  }\\n  return count;\\n};\\n\\n\\n/**\\n * Gets all listeners that match the given type and capture mode. The\\n * returned array is a copy (but the listener objects are not).\\n * @param {string|!goog.events.EventId} type The type of the listeners\\n *     to retrieve.\\n * @param {boolean} capture The capture mode of the listeners to retrieve.\\n * @return {!Array<!goog.events.ListenableKey>} An array of matching\\n *     listeners.\\n */\\ngoog.events.ListenerMap.prototype.getListeners = function(type, capture) {\\n  'use strict';\\n  var listenerArray = this.listeners[type.toString()];\\n  var rv = [];\\n  if (listenerArray) {\\n    for (var i = 0; i < listenerArray.length; ++i) {\\n      var listenerObj = listenerArray[i];\\n      if (listenerObj.capture == capture) {\\n        rv.push(listenerObj);\\n      }\\n    }\\n  }\\n  return rv;\\n};\\n\\n\\n/**\\n * Gets the goog.events.ListenableKey for the event or null if no such\\n * listener is in use.\\n *\\n * @param {string|!goog.events.EventId} type The type of the listener\\n *     to retrieve.\\n * @param {!Function} listener The listener function to get.\\n * @param {boolean} capture Whether the listener is a capturing listener.\\n * @param {Object=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {goog.events.ListenableKey} the found listener or null if not found.\\n */\\ngoog.events.ListenerMap.prototype.getListener = function(\\n    type, listener, capture, opt_listenerScope) {\\n  'use strict';\\n  var listenerArray = this.listeners[type.toString()];\\n  var i = -1;\\n  if (listenerArray) {\\n    i = goog.events.ListenerMap.findListenerIndex_(\\n        listenerArray, listener, capture, opt_listenerScope);\\n  }\\n  return i > -1 ? listenerArray[i] : null;\\n};\\n\\n\\n/**\\n * Whether there is a matching listener. If either the type or capture\\n * parameters are unspecified, the function will match on the\\n * remaining criteria.\\n *\\n * @param {string|!goog.events.EventId=} opt_type The type of the listener.\\n * @param {boolean=} opt_capture The capture mode of the listener.\\n * @return {boolean} Whether there is an active listener matching\\n *     the requested type and/or capture phase.\\n */\\ngoog.events.ListenerMap.prototype.hasListener = function(\\n    opt_type, opt_capture) {\\n  'use strict';\\n  var hasType = (opt_type !== undefined);\\n  var typeStr = hasType ? opt_type.toString() : '';\\n  var hasCapture = (opt_capture !== undefined);\\n\\n  return goog.object.some(this.listeners, function(listenerArray, type) {\\n    'use strict';\\n    for (var i = 0; i < listenerArray.length; ++i) {\\n      if ((!hasType || listenerArray[i].type == typeStr) &&\\n          (!hasCapture || listenerArray[i].capture == opt_capture)) {\\n        return true;\\n      }\\n    }\\n\\n    return false;\\n  });\\n};\\n\\n\\n/**\\n * Finds the index of a matching goog.events.Listener in the given\\n * listenerArray.\\n * @param {!Array<!goog.events.Listener>} listenerArray Array of listener.\\n * @param {!Function} listener The listener function.\\n * @param {boolean=} opt_useCapture The capture flag for the listener.\\n * @param {Object=} opt_listenerScope The listener scope.\\n * @return {number} The index of the matching listener within the\\n *     listenerArray.\\n * @private\\n */\\ngoog.events.ListenerMap.findListenerIndex_ = function(\\n    listenerArray, listener, opt_useCapture, opt_listenerScope) {\\n  'use strict';\\n  for (var i = 0; i < listenerArray.length; ++i) {\\n    var listenerObj = listenerArray[i];\\n    if (!listenerObj.removed && listenerObj.listener == listener &&\\n        listenerObj.capture == !!opt_useCapture &&\\n        listenerObj.handler == opt_listenerScope) {\\n      return i;\\n    }\\n  }\\n  return -1;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"events\",\"ListenerMap\",\"goog.events.ListenerMap\",\"src\",\"listeners\",\"typeCount_\",\"prototype\",\"getTypeCount\",\"goog.events.ListenerMap.prototype.getTypeCount\",\"getListenerCount\",\"goog.events.ListenerMap.prototype.getListenerCount\",\"count\",\"type\",\"length\",\"add\",\"goog.events.ListenerMap.prototype.add\",\"listener\",\"callOnce\",\"opt_useCapture\",\"opt_listenerScope\",\"typeStr\",\"toString\",\"listenerArray\",\"listenerObj\",\"index\",\"findListenerIndex_\",\"Listener\",\"push\",\"remove\",\"goog.events.ListenerMap.prototype.remove\",\"markAsRemoved\",\"array\",\"removeAt\",\"removeByKey\",\"goog.events.ListenerMap.prototype.removeByKey\",\"removed\",\"removeAll\",\"goog.events.ListenerMap.prototype.removeAll\",\"opt_type\",\"i\",\"getListeners\",\"goog.events.ListenerMap.prototype.getListeners\",\"capture\",\"rv\",\"getListener\",\"goog.events.ListenerMap.prototype.getListener\",\"hasListener\",\"goog.events.ListenerMap.prototype.hasListener\",\"opt_capture\",\"hasType\",\"undefined\",\"hasCapture\",\"object\",\"some\",\"goog.events.ListenerMap.findListenerIndex_\",\"handler\"]\n}\n"]