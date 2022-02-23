goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.CssSpecificity");
  goog.module.declareLegacyNamespace();
  var userAgent = goog.require("goog.userAgent");
  var userAgentProduct = goog.require("goog.userAgent.product");
  var specificityCache = {};
  function getSpecificity(selector) {
    if (userAgentProduct.IE && !userAgent.isVersionOrHigher(9)) {
      return [0, 0, 0, 0];
    }
    var specificity = specificityCache.hasOwnProperty(selector) ? specificityCache[selector] : null;
    if (specificity) {
      return specificity;
    }
    if (Object.keys(specificityCache).length > 1 << 16) {
      specificityCache = {};
    }
    specificity = calculateSpecificity(selector);
    specificityCache[selector] = specificity;
    return specificity;
  }
  function replaceWithEmptyText(selector, specificity, regex, typeIndex) {
    return selector.replace(regex, function(match) {
      specificity[typeIndex] += 1;
      return Array(match.length + 1).join(" ");
    });
  }
  function replaceWithPlainText(selector, regex) {
    return selector.replace(regex, function(match) {
      return Array(match.length + 1).join("A");
    });
  }
  function calculateSpecificity(selector) {
    var specificity = [0, 0, 0, 0];
    var escapeHexadecimalRegex = new RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g");
    var escapeHexadecimalRegex2 = new RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
    var escapeSpecialCharacter = /\\./g;
    selector = replaceWithPlainText(selector, escapeHexadecimalRegex);
    selector = replaceWithPlainText(selector, escapeHexadecimalRegex2);
    selector = replaceWithPlainText(selector, escapeSpecialCharacter);
    var pseudoClassWithNotRegex = new RegExp(":not\\(([^\\)]*)\\)", "g");
    selector = selector.replace(pseudoClassWithNotRegex, "     $1 ");
    var rulesRegex = new RegExp("{[^]*", "gm");
    selector = selector.replace(rulesRegex, "");
    var attributeRegex = new RegExp("(\\[[^\\]]+\\])", "g");
    selector = replaceWithEmptyText(selector, specificity, attributeRegex, 2);
    var idRegex = new RegExp("(#[^\\#\\s\\+\x3e~\\.\\[:]+)", "g");
    selector = replaceWithEmptyText(selector, specificity, idRegex, 1);
    var classRegex = new RegExp("(\\.[^\\s\\+\x3e~\\.\\[:]+)", "g");
    selector = replaceWithEmptyText(selector, specificity, classRegex, 2);
    var pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi;
    selector = replaceWithEmptyText(selector, specificity, pseudoElementRegex, 3);
    var pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi;
    selector = replaceWithEmptyText(selector, specificity, pseudoClassWithBracketsRegex, 2);
    var pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g;
    selector = replaceWithEmptyText(selector, specificity, pseudoClassRegex, 2);
    selector = selector.replace(/[\*\s\+>~]/g, " ");
    selector = selector.replace(/[#\.]/g, " ");
    var elementRegex = /([^\s\+>~\.\[:]+)/g;
    selector = replaceWithEmptyText(selector, specificity, elementRegex, 3);
    return specificity;
  }
  exports = {getSpecificity:getSpecificity};
  return exports;
});

//# sourceMappingURL=goog.html.cssspecificity.js.map
