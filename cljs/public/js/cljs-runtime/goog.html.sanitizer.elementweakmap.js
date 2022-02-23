goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.sanitizer.ElementWeakMap");
  goog.module.declareLegacyNamespace();
  var noclobber = goog.require("goog.html.sanitizer.noclobber");
  var NATIVE_WEAKMAP_SUPPORTED = typeof WeakMap != "undefined" && WeakMap.toString().indexOf("[native code]") != -1;
  var DATA_ATTRIBUTE_NAME_PREFIX = "data-elementweakmap-index-";
  var weakMapCount = 0;
  var ElementWeakMap = function() {
    this.keys_ = [];
    this.values_ = [];
    this.dataAttributeName_ = DATA_ATTRIBUTE_NAME_PREFIX + weakMapCount++;
  };
  ElementWeakMap.prototype.set = function(elementKey, value) {
    if (noclobber.hasElementAttribute(elementKey, this.dataAttributeName_)) {
      var itemIndex = parseInt(noclobber.getElementAttribute(elementKey, this.dataAttributeName_), 10);
      this.values_[itemIndex] = value;
    } else {
      var itemIndex = this.values_.push(value) - 1;
      noclobber.setElementAttribute(elementKey, this.dataAttributeName_, itemIndex.toString());
      this.keys_.push(elementKey);
    }
    return this;
  };
  ElementWeakMap.prototype.get = function(elementKey) {
    if (!noclobber.hasElementAttribute(elementKey, this.dataAttributeName_)) {
      return undefined;
    }
    var itemIndex = parseInt(noclobber.getElementAttribute(elementKey, this.dataAttributeName_), 10);
    return this.values_[itemIndex];
  };
  ElementWeakMap.prototype.clear = function() {
    this.keys_.forEach(function(el) {
      noclobber.removeElementAttribute(el, this.dataAttributeName_);
    }, this);
    this.keys_ = [];
    this.values_ = [];
  };
  ElementWeakMap.newWeakMap = function() {
    return NATIVE_WEAKMAP_SUPPORTED ? new WeakMap() : new ElementWeakMap();
  };
  exports = ElementWeakMap;
  return exports;
});

//# sourceMappingURL=goog.html.sanitizer.elementweakmap.js.map
