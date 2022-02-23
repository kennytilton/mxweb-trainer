["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/sanitizer/attributeallowlists.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.html.sanitizer.attributeallowlists\");\n  goog.module.declareLegacyNamespace();\n  const AllowedAttributes = {\"* ARIA-CHECKED\":true, \"* ARIA-COLCOUNT\":true, \"* ARIA-COLINDEX\":true, \"* ARIA-CONTROLS\":true, \"* ARIA-DESCRIBEDBY\":true, \"* ARIA-DISABLED\":true, \"* ARIA-EXPANDED\":true, \"* ARIA-GOOG-EDITABLE\":true, \"* ARIA-HASPOPUP\":true, \"* ARIA-HIDDEN\":true, \"* ARIA-LABEL\":true, \"* ARIA-LABELLEDBY\":true, \"* ARIA-MULTILINE\":true, \"* ARIA-MULTISELECTABLE\":true, \"* ARIA-ORIENTATION\":true, \"* ARIA-PLACEHOLDER\":true, \"* ARIA-READONLY\":true, \"* ARIA-REQUIRED\":true, \"* ARIA-ROLEDESCRIPTION\":true, \n  \"* ARIA-ROWCOUNT\":true, \"* ARIA-ROWINDEX\":true, \"* ARIA-SELECTED\":true, \"* ABBR\":true, \"* ACCEPT\":true, \"* ACCESSKEY\":true, \"* ALIGN\":true, \"* ALT\":true, \"* AUTOCOMPLETE\":true, \"* AXIS\":true, \"* BGCOLOR\":true, \"* BORDER\":true, \"* CELLPADDING\":true, \"* CELLSPACING\":true, \"* CHAROFF\":true, \"* CHAR\":true, \"* CHECKED\":true, \"* CLEAR\":true, \"* COLOR\":true, \"* COLSPAN\":true, \"* COLS\":true, \"* COMPACT\":true, \"* COORDS\":true, \"* DATETIME\":true, \"* DIR\":true, \"* DISABLED\":true, \"* ENCTYPE\":true, \"* FACE\":true, \n  \"* FRAME\":true, \"* HEIGHT\":true, \"* HREFLANG\":true, \"* HSPACE\":true, \"* ISMAP\":true, \"* LABEL\":true, \"* LANG\":true, \"* MAX\":true, \"* MAXLENGTH\":true, \"* METHOD\":true, \"* MULTIPLE\":true, \"* NOHREF\":true, \"* NOSHADE\":true, \"* NOWRAP\":true, \"* OPEN\":true, \"* READONLY\":true, \"* REQUIRED\":true, \"* REL\":true, \"* REV\":true, \"* ROLE\":true, \"* ROWSPAN\":true, \"* ROWS\":true, \"* RULES\":true, \"* SCOPE\":true, \"* SELECTED\":true, \"* SHAPE\":true, \"* SIZE\":true, \"* SPAN\":true, \"* START\":true, \"* SUMMARY\":true, \"* TABINDEX\":true, \n  \"* TITLE\":true, \"* TYPE\":true, \"* VALIGN\":true, \"* VALUE\":true, \"* VSPACE\":true, \"* WIDTH\":true};\n  exports.AllowedAttributes = AllowedAttributes;\n  const SanitizedAttributeAllowlist = {\"* USEMAP\":true, \"* ACTION\":true, \"* CITE\":true, \"* HREF\":true, \"* LONGDESC\":true, \"* SRC\":true, \"LINK HREF\":true, \"* FOR\":true, \"* HEADERS\":true, \"* NAME\":true, \"A TARGET\":true, \"* CLASS\":true, \"* ID\":true, \"* STYLE\":true};\n  exports.SanitizedAttributeAllowlist = SanitizedAttributeAllowlist;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n\n/**\n * @fileoverview Contains the attribute allowlists for use in the Html\n * sanitizer.\n */\n\ngoog.module('goog.html.sanitizer.attributeallowlists');\ngoog.module.declareLegacyNamespace();\n\n/**\n * An allowlist for attributes that are always safe and allowed by default.\n * The sanitizer only applies whitespace trimming to these.\n * @const @dict {boolean}\n */\nconst AllowedAttributes = {\n  '* ARIA-CHECKED': true,\n  '* ARIA-COLCOUNT': true,\n  '* ARIA-COLINDEX': true,\n  '* ARIA-CONTROLS': true,\n  '* ARIA-DESCRIBEDBY': true,\n  '* ARIA-DISABLED': true,\n  '* ARIA-EXPANDED': true,\n  '* ARIA-GOOG-EDITABLE': true,\n  '* ARIA-HASPOPUP': true,\n  '* ARIA-HIDDEN': true,\n  '* ARIA-LABEL': true,\n  '* ARIA-LABELLEDBY': true,\n  '* ARIA-MULTILINE': true,\n  '* ARIA-MULTISELECTABLE': true,\n  '* ARIA-ORIENTATION': true,\n  '* ARIA-PLACEHOLDER': true,\n  '* ARIA-READONLY': true,\n  '* ARIA-REQUIRED': true,\n  '* ARIA-ROLEDESCRIPTION': true,\n  '* ARIA-ROWCOUNT': true,\n  '* ARIA-ROWINDEX': true,\n  '* ARIA-SELECTED': true,\n  '* ABBR': true,\n  '* ACCEPT': true,\n  '* ACCESSKEY': true,\n  '* ALIGN': true,\n  '* ALT': true,\n  '* AUTOCOMPLETE': true,\n  '* AXIS': true,\n  '* BGCOLOR': true,\n  '* BORDER': true,\n  '* CELLPADDING': true,\n  '* CELLSPACING': true,\n  '* CHAROFF': true,\n  '* CHAR': true,\n  '* CHECKED': true,\n  '* CLEAR': true,\n  '* COLOR': true,\n  '* COLSPAN': true,\n  '* COLS': true,\n  '* COMPACT': true,\n  '* COORDS': true,\n  '* DATETIME': true,\n  '* DIR': true,\n  '* DISABLED': true,\n  '* ENCTYPE': true,\n  '* FACE': true,\n  '* FRAME': true,\n  '* HEIGHT': true,\n  '* HREFLANG': true,\n  '* HSPACE': true,\n  '* ISMAP': true,\n  '* LABEL': true,\n  '* LANG': true,\n  '* MAX': true,\n  '* MAXLENGTH': true,\n  '* METHOD': true,\n  '* MULTIPLE': true,\n  '* NOHREF': true,\n  '* NOSHADE': true,\n  '* NOWRAP': true,\n  '* OPEN': true,\n  '* READONLY': true,\n  '* REQUIRED': true,\n  '* REL': true,\n  '* REV': true,\n  '* ROLE': true,\n  '* ROWSPAN': true,\n  '* ROWS': true,\n  '* RULES': true,\n  '* SCOPE': true,\n  '* SELECTED': true,\n  '* SHAPE': true,\n  '* SIZE': true,\n  '* SPAN': true,\n  '* START': true,\n  '* SUMMARY': true,\n  '* TABINDEX': true,\n  '* TITLE': true,\n  '* TYPE': true,\n  '* VALIGN': true,\n  '* VALUE': true,\n  '* VSPACE': true,\n  '* WIDTH': true\n};\nexports.AllowedAttributes = AllowedAttributes;\n\n/**\n * An allowlist for attributes that are not safe to allow unrestricted, but are\n * made safe by default policies installed by the sanitizer in\n * goog.html.sanitizer.HtmlSanitizer.Builder.prototype.build, and thus allowed\n * by default under these policies.\n * @const @dict {boolean}\n */\nconst SanitizedAttributeAllowlist = {\n\n  // Attributes which can contain URL fragments\n  '* USEMAP': true,\n  // Attributes which can contain URLs\n  '* ACTION': true,\n  '* CITE': true,\n  '* HREF': true,\n  // Attributes which can cause network requests\n  '* LONGDESC': true,\n  '* SRC': true,\n  'LINK HREF': true,\n  // Prevents clobbering\n  '* FOR': true,\n  '* HEADERS': true,\n  '* NAME': true,\n  // Controls where a window is opened. Prevents tab-nabbing\n  'A TARGET': true,\n\n  // Attributes which could cause UI redressing.\n  '* CLASS': true,\n  '* ID': true,\n\n  // CSS style can cause network requests and XSSs\n  '* STYLE': true\n};\nexports.SanitizedAttributeAllowlist = SanitizedAttributeAllowlist;\n","~:compiled-at",1645592433456,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.sanitizer.attributeallowlists.js\",\n\"lineCount\":14,\n\"mappings\":\"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\",\n\"sources\":[\"goog/html/sanitizer/attributeallowlists.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n\\n/**\\n * @fileoverview Contains the attribute allowlists for use in the Html\\n * sanitizer.\\n */\\n\\ngoog.module('goog.html.sanitizer.attributeallowlists');\\ngoog.module.declareLegacyNamespace();\\n\\n/**\\n * An allowlist for attributes that are always safe and allowed by default.\\n * The sanitizer only applies whitespace trimming to these.\\n * @const @dict {boolean}\\n */\\nconst AllowedAttributes = {\\n  '* ARIA-CHECKED': true,\\n  '* ARIA-COLCOUNT': true,\\n  '* ARIA-COLINDEX': true,\\n  '* ARIA-CONTROLS': true,\\n  '* ARIA-DESCRIBEDBY': true,\\n  '* ARIA-DISABLED': true,\\n  '* ARIA-EXPANDED': true,\\n  '* ARIA-GOOG-EDITABLE': true,\\n  '* ARIA-HASPOPUP': true,\\n  '* ARIA-HIDDEN': true,\\n  '* ARIA-LABEL': true,\\n  '* ARIA-LABELLEDBY': true,\\n  '* ARIA-MULTILINE': true,\\n  '* ARIA-MULTISELECTABLE': true,\\n  '* ARIA-ORIENTATION': true,\\n  '* ARIA-PLACEHOLDER': true,\\n  '* ARIA-READONLY': true,\\n  '* ARIA-REQUIRED': true,\\n  '* ARIA-ROLEDESCRIPTION': true,\\n  '* ARIA-ROWCOUNT': true,\\n  '* ARIA-ROWINDEX': true,\\n  '* ARIA-SELECTED': true,\\n  '* ABBR': true,\\n  '* ACCEPT': true,\\n  '* ACCESSKEY': true,\\n  '* ALIGN': true,\\n  '* ALT': true,\\n  '* AUTOCOMPLETE': true,\\n  '* AXIS': true,\\n  '* BGCOLOR': true,\\n  '* BORDER': true,\\n  '* CELLPADDING': true,\\n  '* CELLSPACING': true,\\n  '* CHAROFF': true,\\n  '* CHAR': true,\\n  '* CHECKED': true,\\n  '* CLEAR': true,\\n  '* COLOR': true,\\n  '* COLSPAN': true,\\n  '* COLS': true,\\n  '* COMPACT': true,\\n  '* COORDS': true,\\n  '* DATETIME': true,\\n  '* DIR': true,\\n  '* DISABLED': true,\\n  '* ENCTYPE': true,\\n  '* FACE': true,\\n  '* FRAME': true,\\n  '* HEIGHT': true,\\n  '* HREFLANG': true,\\n  '* HSPACE': true,\\n  '* ISMAP': true,\\n  '* LABEL': true,\\n  '* LANG': true,\\n  '* MAX': true,\\n  '* MAXLENGTH': true,\\n  '* METHOD': true,\\n  '* MULTIPLE': true,\\n  '* NOHREF': true,\\n  '* NOSHADE': true,\\n  '* NOWRAP': true,\\n  '* OPEN': true,\\n  '* READONLY': true,\\n  '* REQUIRED': true,\\n  '* REL': true,\\n  '* REV': true,\\n  '* ROLE': true,\\n  '* ROWSPAN': true,\\n  '* ROWS': true,\\n  '* RULES': true,\\n  '* SCOPE': true,\\n  '* SELECTED': true,\\n  '* SHAPE': true,\\n  '* SIZE': true,\\n  '* SPAN': true,\\n  '* START': true,\\n  '* SUMMARY': true,\\n  '* TABINDEX': true,\\n  '* TITLE': true,\\n  '* TYPE': true,\\n  '* VALIGN': true,\\n  '* VALUE': true,\\n  '* VSPACE': true,\\n  '* WIDTH': true\\n};\\nexports.AllowedAttributes = AllowedAttributes;\\n\\n/**\\n * An allowlist for attributes that are not safe to allow unrestricted, but are\\n * made safe by default policies installed by the sanitizer in\\n * goog.html.sanitizer.HtmlSanitizer.Builder.prototype.build, and thus allowed\\n * by default under these policies.\\n * @const @dict {boolean}\\n */\\nconst SanitizedAttributeAllowlist = {\\n\\n  // Attributes which can contain URL fragments\\n  '* USEMAP': true,\\n  // Attributes which can contain URLs\\n  '* ACTION': true,\\n  '* CITE': true,\\n  '* HREF': true,\\n  // Attributes which can cause network requests\\n  '* LONGDESC': true,\\n  '* SRC': true,\\n  'LINK HREF': true,\\n  // Prevents clobbering\\n  '* FOR': true,\\n  '* HEADERS': true,\\n  '* NAME': true,\\n  // Controls where a window is opened. Prevents tab-nabbing\\n  'A TARGET': true,\\n\\n  // Attributes which could cause UI redressing.\\n  '* CLASS': true,\\n  '* ID': true,\\n\\n  // CSS style can cause network requests and XSSs\\n  '* STYLE': true\\n};\\nexports.SanitizedAttributeAllowlist = SanitizedAttributeAllowlist;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"AllowedAttributes\",\"exports\",\"SanitizedAttributeAllowlist\"]\n}\n"]