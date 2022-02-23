goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.sanitizer.SafeDomTreeProcessor");
  goog.module.declareLegacyNamespace();
  var Const = goog.require("goog.string.Const");
  var ElementWeakMap = goog.require("goog.html.sanitizer.ElementWeakMap");
  var Logger = goog.require("goog.log.Logger");
  var NodeType = goog.require("goog.dom.NodeType");
  var TagName = goog.require("goog.dom.TagName");
  var googDom = goog.require("goog.dom");
  var googLog = goog.require("goog.log");
  var noclobber = goog.require("goog.html.sanitizer.noclobber");
  var safe = goog.require("goog.dom.safe");
  var uncheckedconversions = goog.require("goog.html.uncheckedconversions");
  var userAgent = goog.require("goog.userAgent");
  var logger = googLog.getLogger("goog.html.sanitizer.SafeDomTreeProcessor");
  var SAFE_PARSING_SUPPORTED = !userAgent.IE || userAgent.isDocumentModeOrHigher(10);
  var HTML_SANITIZER_TEMPLATE_SUPPORTED = !userAgent.IE || document.documentMode == null;
  function getDomTreeWalker(html) {
    var iteratorParent;
    var safeHtml = uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(Const.from("Never attached to DOM."), html);
    var templateElement = document.createElement("template");
    if (HTML_SANITIZER_TEMPLATE_SUPPORTED && "content" in templateElement) {
      safe.unsafeSetInnerHtmlDoNotUseOrElse(templateElement, safeHtml);
      iteratorParent = templateElement.content;
    } else {
      var doc = document.implementation.createHTMLDocument("x");
      iteratorParent = doc.body;
      safe.unsafeSetInnerHtmlDoNotUseOrElse(doc.body, safeHtml);
    }
    return document.createTreeWalker(iteratorParent, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
  }
  var SafeDomTreeProcessor = function() {
  };
  SafeDomTreeProcessor.prototype.processToString = function(html) {
    if (!SAFE_PARSING_SUPPORTED) {
      return "";
    }
    var newTree = this.processToTree(html);
    if (noclobber.getElementAttributes(newTree).length > 0) {
      var newRoot = googDom.createElement(TagName.SPAN);
      newRoot.appendChild(newTree);
      newTree = newRoot;
    }
    var serializedNewTree = (new XMLSerializer()).serializeToString(newTree);
    return serializedNewTree.slice(serializedNewTree.indexOf("\x3e") + 1, serializedNewTree.lastIndexOf("\x3c/"));
  };
  SafeDomTreeProcessor.prototype.processToTree = function(html) {
    if (!SAFE_PARSING_SUPPORTED) {
      return googDom.createElement(TagName.SPAN);
    }
    var newRoot = googDom.createElement(TagName.SPAN);
    this.processRoot(newRoot);
    html = this.preProcessHtml(html);
    var originalTreeWalker = getDomTreeWalker(html);
    var elementMap = ElementWeakMap.newWeakMap();
    var originalNode;
    while (originalNode = originalTreeWalker.nextNode()) {
      var newNode = this.createNode_(originalNode);
      if (!newNode) {
        googDom.removeChildren(originalNode);
        continue;
      }
      if (noclobber.isNodeElement(newNode)) {
        elementMap.set(originalNode, newNode);
      }
      var originalParent = noclobber.getParentNode(originalNode);
      var isParentRoot = false;
      if (originalParent) {
        var originalParentNodeType = noclobber.getNodeType(originalParent);
        var originalParentNodeName = noclobber.getNodeName(originalParent).toLowerCase();
        var originalGrandParent = noclobber.getParentNode(originalParent);
        if (originalParentNodeType == NodeType.DOCUMENT_FRAGMENT && !originalGrandParent) {
          isParentRoot = true;
        } else if (originalParentNodeName == "body" && originalGrandParent) {
          var dirtyGreatGrandParent = noclobber.getParentNode(originalGrandParent);
          if (dirtyGreatGrandParent && !noclobber.getParentNode(dirtyGreatGrandParent)) {
            isParentRoot = true;
          }
        }
        var newParent = null;
        if (isParentRoot || !originalParent) {
          newParent = newRoot;
        } else if (noclobber.isNodeElement(originalParent)) {
          newParent = elementMap.get(originalParent);
        }
        if (newParent.content) {
          newParent = newParent.content;
        }
        newParent.appendChild(newNode);
      }
    }
    if (elementMap.clear) {
      elementMap.clear();
    }
    return newRoot;
  };
  SafeDomTreeProcessor.prototype.processRoot = function(newRoot) {
  };
  SafeDomTreeProcessor.prototype.preProcessHtml = function(html) {
  };
  SafeDomTreeProcessor.prototype.createNode_ = function(originalNode) {
    var nodeType = noclobber.getNodeType(originalNode);
    switch(nodeType) {
      case NodeType.TEXT:
        return this.createTextNode(originalNode);
      case NodeType.ELEMENT:
        return this.createElement_(noclobber.assertNodeIsElement(originalNode));
      default:
        googLog.warning(logger, "Dropping unknown node type: " + nodeType);
        return null;
    }
  };
  SafeDomTreeProcessor.prototype.createTextNode = function(originalNode) {
  };
  SafeDomTreeProcessor.prototype.createElement_ = function(originalElement) {
    if (noclobber.getNodeName(originalElement).toUpperCase() == "TEMPLATE") {
      return null;
    }
    var newElement = this.createElementWithoutAttributes(originalElement);
    if (!newElement) {
      return null;
    }
    this.processElementAttributes_(originalElement, newElement);
    return newElement;
  };
  SafeDomTreeProcessor.prototype.createElementWithoutAttributes = function(originalElement) {
  };
  SafeDomTreeProcessor.prototype.processElementAttributes_ = function(originalElement, newElement) {
    var attributes = noclobber.getElementAttributes(originalElement);
    if (attributes == null) {
      return;
    }
    for (var i = 0, attribute; attribute = attributes[i]; i++) {
      if (attribute.specified) {
        var newValue = this.processElementAttribute(originalElement, attribute);
        if (newValue !== null) {
          noclobber.setElementAttribute(newElement, attribute.name, newValue);
        }
      }
    }
  };
  SafeDomTreeProcessor.prototype.processElementAttribute = function(element, attribute) {
  };
  SafeDomTreeProcessor.SAFE_PARSING_SUPPORTED = SAFE_PARSING_SUPPORTED;
  exports = SafeDomTreeProcessor;
  return exports;
});

//# sourceMappingURL=goog.html.sanitizer.safedomtreeprocessor.js.map
