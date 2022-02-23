goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.sanitizer.CssPropertySanitizer");
  goog.module.declareLegacyNamespace();
  var SafeUrl = goog.require("goog.html.SafeUrl");
  var googAsserts = goog.require("goog.asserts");
  var googObject = goog.require("goog.object");
  var googString = goog.require("goog.string");
  var ALLOWED_FUNCTIONS = googObject.createSet("rgb", "rgba", "alpha", "rect", "image", "linear-gradient", "radial-gradient", "repeating-linear-gradient", "repeating-radial-gradient", "cubic-bezier", "matrix", "perspective", "rotate", "rotate3d", "rotatex", "rotatey", "steps", "rotatez", "scale", "scale3d", "scalex", "scaley", "scalez", "skew", "skewx", "skewy", "translate", "translate3d", "translatex", "translatey", "translatez");
  var NORM_URL_REGEXP = /[\n\f\r"'()*<>]/g;
  var NORM_URL_REPLACEMENTS = {"\n":"%0a", "\f":"%0c", "\r":"%0d", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "*":"%2a", "\x3c":"%3c", "\x3e":"%3e"};
  function normalizeUrlChar(ch) {
    return googAsserts.assert(NORM_URL_REPLACEMENTS[ch]);
  }
  function getSafeUri(uri, propName, uriRewriter) {
    if (!uriRewriter) {
      return null;
    }
    var safeUri = uriRewriter(uri, propName);
    if (safeUri && SafeUrl.unwrap(safeUri) != SafeUrl.INNOCUOUS_STRING) {
      return 'url("' + SafeUrl.unwrap(safeUri).replace(NORM_URL_REGEXP, normalizeUrlChar) + '")';
    }
    return null;
  }
  exports.sanitizeProperty = function(propName, propValue, opt_uriRewriter) {
    propValue = googString.trim(propValue);
    if (propValue == "") {
      return null;
    }
    if (googString.caseInsensitiveStartsWith(propValue, "url(")) {
      if (!propValue.endsWith(")") || googString.countOf(propValue, "(") > 1 || googString.countOf(propValue, ")") > 1) {
        return null;
      }
      if (!opt_uriRewriter) {
        return null;
      }
      var uri = googString.stripQuotes(propValue.substring(4, propValue.length - 1), "\"'");
      return getSafeUri(uri, propName, opt_uriRewriter);
    } else if (propValue.indexOf("(") > 0) {
      if (/"|'/.test(propValue)) {
        return null;
      }
      var regex = /([\-\w]+)\(/g;
      var match;
      while (match = regex.exec(propValue)) {
        if (!(match[1].toLowerCase() in ALLOWED_FUNCTIONS)) {
          return null;
        }
      }
      return propValue;
    } else {
      return propValue;
    }
  };
  return exports;
});

//# sourceMappingURL=goog.html.sanitizer.csspropertysanitizer.js.map
