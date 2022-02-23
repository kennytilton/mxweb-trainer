goog.provide("goog.html.sanitizer.CssSanitizer");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.dom.TagName");
goog.require("goog.dom.safe");
goog.require("goog.html.CssSpecificity");
goog.require("goog.html.SafeStyle");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.sanitizer.CssPropertySanitizer");
goog.require("goog.html.sanitizer.noclobber");
goog.require("goog.html.uncheckedconversions");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.string.Const");
goog.require("goog.userAgent");
goog.require("goog.userAgent.product");
goog.html.sanitizer.CssSanitizer.SELECTOR_REGEX_ = !(goog.userAgent.IE && document.documentMode < 10) ? new RegExp("\\s*" + "([^\\s'\",]+" + "[^'\",]*" + ("(" + "('([^'\\r\\n\\f\\\\]|\\\\[^])*')|" + '("([^"\\r\\n\\f\\\\]|\\\\[^])*")|' + "[^'\",]" + ")*") + ")", "g") : null;
goog.html.sanitizer.CssSanitizer.CHROME_INCLUDE_VENDOR_PREFIX_WHITELIST_ = goog.object.createSet("-webkit-border-horizontal-spacing", "-webkit-border-vertical-spacing");
goog.html.sanitizer.CssSanitizer.withoutVendorPrefix_ = function(propName) {
  if (goog.userAgent.WEBKIT && propName in goog.html.sanitizer.CssSanitizer.CHROME_INCLUDE_VENDOR_PREFIX_WHITELIST_) {
    return propName;
  }
  return propName.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
};
goog.html.sanitizer.CssSanitizer.sanitizeStyleSheet_ = function(cssStyleSheet, containerId, uriRewriter) {
  var sanitizedRules = [];
  var cssRules = goog.html.sanitizer.CssSanitizer.getOnlyStyleRules_(goog.array.toArray(cssStyleSheet.cssRules));
  cssRules.forEach(function(cssRule) {
    if (containerId && !/[a-zA-Z][\w-:\.]*/.test(containerId)) {
      throw new Error("Invalid container id");
    }
    if (containerId && goog.userAgent.product.IE && document.documentMode == 10 && /\\['"]/.test(cssRule.selectorText)) {
      return;
    }
    var scopedSelector = containerId ? cssRule.selectorText.replace(goog.html.sanitizer.CssSanitizer.SELECTOR_REGEX_, "#" + containerId + " $1") : cssRule.selectorText;
    sanitizedRules.push(goog.html.SafeStyleSheet.createRule(scopedSelector, goog.html.sanitizer.CssSanitizer.sanitizeInlineStyle(cssRule.style, uriRewriter)));
  });
  return goog.html.SafeStyleSheet.concat(sanitizedRules);
};
goog.html.sanitizer.CssSanitizer.getOnlyStyleRules_ = function(cssRules) {
  return cssRules.filter(function(cssRule) {
    return cssRule instanceof CSSStyleRule || cssRule.type == CSSRule.STYLE_RULE;
  });
};
goog.html.sanitizer.CssSanitizer.sanitizeStyleSheetString = function(textContent, opt_containerId, opt_uriRewriter) {
  var styleTag = goog.html.sanitizer.CssSanitizer.safeParseHtmlAndGetInertElement("\x3cstyle\x3e" + textContent + "\x3c/style\x3e");
  if (styleTag == null || styleTag.sheet == null) {
    return goog.html.SafeStyleSheet.EMPTY;
  }
  var containerId = opt_containerId != undefined ? opt_containerId : null;
  return goog.html.sanitizer.CssSanitizer.sanitizeStyleSheet_(styleTag.sheet, containerId, opt_uriRewriter);
};
goog.html.sanitizer.CssSanitizer.safeParseHtmlAndGetInertElement = function(html) {
  if (goog.userAgent.IE && !goog.userAgent.isVersionOrHigher(10) || typeof goog.global.DOMParser != "function") {
    return null;
  }
  var safeHtml = goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Never attached to DOM."), "\x3chtml\x3e\x3chead\x3e\x3c/head\x3e\x3cbody\x3e" + html + "\x3c/body\x3e\x3c/html\x3e");
  return goog.dom.safe.parseFromStringHtml(new DOMParser(), safeHtml).body.children[0];
};
goog.html.sanitizer.CssSanitizer.sanitizeInlineStyle = function(cssStyle, opt_uriRewriter) {
  if (!cssStyle) {
    return goog.html.SafeStyle.EMPTY;
  }
  var cleanCssStyle = document.createElement("div").style;
  var cssPropNames = goog.html.sanitizer.CssSanitizer.getCssPropNames_(cssStyle);
  cssPropNames.forEach(function(propName) {
    var propNameWithoutPrefix = goog.html.sanitizer.CssSanitizer.withoutVendorPrefix_(propName);
    if (!goog.html.sanitizer.CssSanitizer.isDisallowedPropertyName_(propNameWithoutPrefix)) {
      var propValue = goog.html.sanitizer.noclobber.getCssPropertyValue(cssStyle, propName);
      var sanitizedValue = goog.html.sanitizer.CssPropertySanitizer.sanitizeProperty(propNameWithoutPrefix, propValue, opt_uriRewriter);
      if (sanitizedValue != null) {
        goog.html.sanitizer.noclobber.setCssProperty(cleanCssStyle, propNameWithoutPrefix, sanitizedValue);
      }
    }
  });
  return goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Output of CSS sanitizer"), cleanCssStyle.cssText || "");
};
goog.html.sanitizer.CssSanitizer.sanitizeInlineStyleString = function(cssText, opt_uriRewriter) {
  if (goog.userAgent.IE && document.documentMode < 10) {
    return goog.html.SafeStyle.EMPTY;
  }
  var div = goog.html.sanitizer.CssSanitizer.createInertDocument_().createElement("DIV");
  div.style.cssText = cssText;
  return goog.html.sanitizer.CssSanitizer.sanitizeInlineStyle(div.style, opt_uriRewriter);
};
goog.html.sanitizer.CssSanitizer.inlineStyleRules = function(element) {
  var styleTags = goog.html.sanitizer.noclobber.getElementsByTagName(element, "STYLE");
  var cssRules = goog.array.concatMap(styleTags, function(styleTag) {
    return goog.array.toArray(goog.html.sanitizer.noclobber.getElementStyleSheet(styleTag).cssRules);
  });
  cssRules = goog.html.sanitizer.CssSanitizer.getOnlyStyleRules_(cssRules);
  cssRules.sort(function(a, b) {
    var aSpecificity = goog.html.CssSpecificity.getSpecificity(a.selectorText);
    var bSpecificity = goog.html.CssSpecificity.getSpecificity(b.selectorText);
    return -goog.array.compare3(aSpecificity, bSpecificity);
  });
  var subTreeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, null, false);
  var currentElement;
  while (currentElement = subTreeWalker.nextNode()) {
    cssRules.forEach(function(rule) {
      if (!goog.html.sanitizer.noclobber.elementMatches(currentElement, rule.selectorText)) {
        return;
      }
      if (!rule.style) {
        return;
      }
      goog.html.sanitizer.CssSanitizer.mergeStyleDeclarations_(currentElement, rule.style);
    });
  }
  styleTags.forEach(goog.dom.removeNode);
};
goog.html.sanitizer.CssSanitizer.mergeStyleDeclarations_ = function(element, styleDeclaration) {
  var existingPropNames = goog.html.sanitizer.CssSanitizer.getCssPropNames_(element.style);
  var newPropNames = goog.html.sanitizer.CssSanitizer.getCssPropNames_(styleDeclaration);
  newPropNames.forEach(function(propName) {
    if (existingPropNames.indexOf(propName) >= 0) {
      return;
    }
    var propValue = goog.html.sanitizer.noclobber.getCssPropertyValue(styleDeclaration, propName);
    goog.html.sanitizer.noclobber.setCssProperty(element.style, propName, propValue);
  });
};
goog.html.sanitizer.CssSanitizer.createInertDocument_ = function() {
  var doc = document;
  if (typeof HTMLTemplateElement === "function") {
    doc = goog.dom.createElement(goog.dom.TagName.TEMPLATE).content.ownerDocument;
  }
  return doc.implementation.createHTMLDocument("");
};
goog.html.sanitizer.CssSanitizer.getCssPropNames_ = function(cssStyle) {
  var propNames = [];
  if (goog.isArrayLike(cssStyle)) {
    propNames = goog.array.toArray(cssStyle);
  } else {
    propNames = goog.object.getKeys(cssStyle);
    goog.array.remove(propNames, "cssText");
  }
  return propNames;
};
goog.html.sanitizer.CssSanitizer.isDisallowedPropertyName_ = function(propName) {
  return goog.string.startsWith(propName, "--") || goog.string.startsWith(propName, "var");
};

//# sourceMappingURL=goog.html.sanitizer.csssanitizer.js.map
