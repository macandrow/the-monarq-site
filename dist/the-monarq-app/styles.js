(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! HTML5 Boilerplate v6.1.0 | MIT License | https://html5boilerplate.com/ */\n\n/*\n * What follows is the result of much research on cross-browser styling.\n * Credit left inline and big thanks to Nicolas Gallagher, Jonathan Neal,\n * Kroc Camen, and the H5BP dev community and team.\n */\n\n/* ==========================================================================\n   Base styles: opinionated defaults\n   ========================================================================== */\n\nhtml {\n    color: #222;\n    font-size: 1em;\n    line-height: 1.4;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * Vendor-prefixed and regular ::selection selectors cannot be combined:\n * https://stackoverflow.com/a/16982510/7133471\n *\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n    vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n    resize: vertical;\n}\n\n/* ==========================================================================\n   Browser Upgrade Prompt\n   ========================================================================== */\n\n.browserupgrade {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n    background-size: cover;\n}\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n/*\n * Hide visually and from screen readers\n */\n\n.hidden {\n    display: none !important;\n}\n\n/*\n * Hide only visually, but have it available for screen readers:\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\n *\n * 1. For long content, line feeds are not interpreted as spaces and small width\n *    causes content to wrap 1 word per line:\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\n */\n\n.visuallyhidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap; /* 1 */\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element\n * to be focusable when navigated to via the keyboard:\n * https://www.drupal.org/node/897638\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto;\n    white-space: inherit;\n}\n\n/*\n * Hide visually and from screen readers, but maintain layout\n */\n\n.invisible {\n    visibility: hidden;\n}\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n\n.clearfix:before,\n.clearfix:after {\n    content: \" \"; /* 1 */\n    display: table; /* 2 */\n}\n\n.clearfix:after {\n    clear: both;\n}\n\n/* ==========================================================================\n   EXAMPLE Media Queries for Responsive Design.\n   These examples override the primary ('mobile first') styles.\n   Modify as content requires.\n   ========================================================================== */\n\n@media only screen and (min-width: 35em) {\n    /* Style adjustments for viewports that meet the condition */\n}\n\n@media print, (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx), (min-resolution: 120dpi) {\n    /* Style adjustments for high resolution devices */\n}\n\n/* ==========================================================================\n   Print styles.\n   Inlined to avoid the additional HTTP request:\n   https://www.phpied.com/delay-loading-your-print-css/\n   ========================================================================== */\n\n@media print {\n    *,\n    *:before,\n    *:after {\n        background: transparent !important;\n        color: #000 !important; /* Black prints faster */\n        box-shadow: none !important;\n        text-shadow: none !important;\n    }\n\n    a,\n    a:visited {\n        text-decoration: underline;\n    }\n\n    a[href]:after {\n        content: \" (\" attr(href) \")\";\n    }\n\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\";\n    }\n\n    /*\n     * Don't show links that are fragment identifiers,\n     * or use the `javascript:` pseudo protocol\n     */\n\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\";\n    }\n\n    pre {\n        white-space: pre-wrap !important;\n    }\n    pre,\n    blockquote {\n        border: 1px solid #999;\n        page-break-inside: avoid;\n    }\n\n    /*\n     * Printing Tables:\n     * http://css-discuss.incutio.com/wiki/Printing_Tables\n     */\n\n    thead {\n        display: table-header-group;\n    }\n\n    tr,\n    img {\n        page-break-inside: avoid;\n    }\n\n    p,\n    h2,\n    h3 {\n        orphans: 3;\n        widows: 3;\n    }\n\n    h2,\n    h3 {\n        page-break-after: avoid;\n    }\n}\n\n/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: 'salomeregular';\n  src: url('salome-webfont.eot');\n  src: url('salome-webfont.eot?#iefix') format(\"embedded-opentype\"), url('salome-webfont.woff2') format(\"woff2\"), url('salome-webfont.woff') format(\"woff\"), url('salome-webfont.ttf') format(\"truetype\"), url('salome-webfont.svg#salomeregular') format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\nbody, h1 {\n  transition: all .2s ease-out;\n  -o-transition: all .2s ease-out;\n  -moz-transition: all .2s ease-out;\n  -webkit-transition: all .2s ease-out;\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0); }\n\nbody {\n  font-family: brandon-grotesque,sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: #fff;\n  background-size: 60%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat; }\n\nbody.color-intro {\n    background-image: url(\"https://dummyimage.com/2500x2500/ffffff/fff.png\"); }\n\n.wrapper {\n  margin: 0 auto; }\n\nheader {\n  height: 30vh;\n  min-height: 240px; }\n\nh1 {\n  font-size: 2rem; }\n\n@media only screen and (min-width: 960px) {\n  .wrapper {\n    max-width: 1230px; }\n  h1 {\n    font-size: 5rem; }\n  body.color-fractures {\n    background-image: url('thumb_pattern_full_img146.jpg'); }\n  body.color-photography {\n    background-image: url('bg_img143.jpg'); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL21haW4uY3NzIiwic3JjL2Fzc2V0cy9jc3Mvbm9ybWFsaXplLmNzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1zaXRlL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFOzs7O0VBSUU7O0FBRUY7OytFQUUrRTs7QUFFL0U7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7RUFRRTs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7Ozs7RUFJRTs7QUFFRjs7Ozs7O0lBTUksc0JBQXNCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7OytFQUUrRTs7QUFFL0U7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFFaEIsc0JBQXNCO0FBQzFCOztBQUVBOzsrRUFFK0U7O0FBRy9FOzsrRUFFK0U7O0FBRS9FOztFQUVFOztBQUVGO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7Ozs7O0VBT0U7O0FBRUY7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQixFQUFFLE1BQU07QUFDL0I7O0FBRUE7Ozs7RUFJRTs7QUFFRjs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNB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QUNDLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDYixrQkFBa0I7RUFFckIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQVQ3QjtJQVdFLHdFQUF3RSxFQUFBOztBQVkxRTtFQUNDLGNBQWMsRUFBQTs7QUFHZjtFQUNDLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFTbEI7RUFDQyxlQUFlLEVBQUE7O0FBSWhCO0VBSUM7SUFDQyxpQkFBaUIsRUFBQTtFQUVsQjtJQUNFLGVBQWUsRUFBQTtFQUVqQjtJQUlFLHNEQUE4RSxFQUFBO0VBSmhGO0lBT0Usc0NBQThELEVBQUEsRUFDOUQiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIEhUTUw1IEJvaWxlcnBsYXRlIHY2LjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9odG1sNWJvaWxlcnBsYXRlLmNvbS8gKi9cblxuLypcbiAqIFdoYXQgZm9sbG93cyBpcyB0aGUgcmVzdWx0IG9mIG11Y2ggcmVzZWFyY2ggb24gY3Jvc3MtYnJvd3NlciBzdHlsaW5nLlxuICogQ3JlZGl0IGxlZnQgaW5saW5lIGFuZCBiaWcgdGhhbmtzIHRvIE5pY29sYXMgR2FsbGFnaGVyLCBKb25hdGhhbiBOZWFsLFxuICogS3JvYyBDYW1lbiwgYW5kIHRoZSBINUJQIGRldiBjb21tdW5pdHkgYW5kIHRlYW0uXG4gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEJhc2Ugc3R5bGVzOiBvcGluaW9uYXRlZCBkZWZhdWx0c1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuaHRtbCB7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLypcbiAqIFJlbW92ZSB0ZXh0LXNoYWRvdyBpbiBzZWxlY3Rpb24gaGlnaGxpZ2h0OlxuICogaHR0cHM6Ly90d2l0dGVyLmNvbS9taWtldGF5bHIvc3RhdHVzLzEyMjI4ODA1MzAxXG4gKlxuICogVmVuZG9yLXByZWZpeGVkIGFuZCByZWd1bGFyIDo6c2VsZWN0aW9uIHNlbGVjdG9ycyBjYW5ub3QgYmUgY29tYmluZWQ6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY5ODI1MTAvNzEzMzQ3MVxuICpcbiAqIEN1c3RvbWl6ZSB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB5b3VyIGRlc2lnbi5cbiAqL1xuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbiAqIEEgYmV0dGVyIGxvb2tpbmcgZGVmYXVsdCBob3Jpem9udGFsIHJ1bGVcbiAqL1xuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLypcbiAqIFJlbW92ZSB0aGUgZ2FwIGJldHdlZW4gYXVkaW8sIGNhbnZhcywgaWZyYW1lcyxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9pc3N1ZXMvNDQwXG4gKi9cblxuYXVkaW8sXG5jYW52YXMsXG5pZnJhbWUsXG5pbWcsXG5zdmcsXG52aWRlbyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLypcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cbiAqL1xuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuICogQWxsb3cgb25seSB2ZXJ0aWNhbCByZXNpemluZyBvZiB0ZXh0YXJlYXMuXG4gKi9cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBCcm93c2VyIFVwZ3JhZGUgUHJvbXB0XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uYnJvd3NlcnVwZ3JhZGUge1xuICAgIG1hcmdpbjogMC4yZW0gMDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDAuMmVtIDA7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBBdXRob3IncyBjdXN0b20gc3R5bGVzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBIZWxwZXIgY2xhc3Nlc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEhpZGUgdmlzdWFsbHkgYW5kIGZyb20gc2NyZWVuIHJlYWRlcnNcbiAqL1xuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4gKiBIaWRlIG9ubHkgdmlzdWFsbHksIGJ1dCBoYXZlIGl0IGF2YWlsYWJsZSBmb3Igc2NyZWVuIHJlYWRlcnM6XG4gKiBodHRwczovL3Nub29rLmNhL2FyY2hpdmVzL2h0bWxfYW5kX2Nzcy9oaWRpbmctY29udGVudC1mb3ItYWNjZXNzaWJpbGl0eVxuICpcbiAqIDEuIEZvciBsb25nIGNvbnRlbnQsIGxpbmUgZmVlZHMgYXJlIG5vdCBpbnRlcnByZXRlZCBhcyBzcGFjZXMgYW5kIHNtYWxsIHdpZHRoXG4gKiAgICBjYXVzZXMgY29udGVudCB0byB3cmFwIDEgd29yZCBwZXIgbGluZTpcbiAqICAgIGh0dHBzOi8vbWVkaXVtLmNvbS9AamVzc2ViZWFjaC9iZXdhcmUtc211c2hlZC1vZmYtc2NyZWVuLWFjY2Vzc2libGUtdGV4dC01OTUyYTRjMmNiZmVcbiAqL1xuXG4udmlzdWFsbHloaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogMSAqL1xufVxuXG4vKlxuICogRXh0ZW5kcyB0aGUgLnZpc3VhbGx5aGlkZGVuIGNsYXNzIHRvIGFsbG93IHRoZSBlbGVtZW50XG4gKiB0byBiZSBmb2N1c2FibGUgd2hlbiBuYXZpZ2F0ZWQgdG8gdmlhIHRoZSBrZXlib2FyZDpcbiAqIGh0dHBzOi8vd3d3LmRydXBhbC5vcmcvbm9kZS84OTc2MzhcbiAqL1xuXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmFjdGl2ZSxcbi52aXN1YWxseWhpZGRlbi5mb2N1c2FibGU6Zm9jdXMge1xuICAgIGNsaXA6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4vKlxuICogSGlkZSB2aXN1YWxseSBhbmQgZnJvbSBzY3JlZW4gcmVhZGVycywgYnV0IG1haW50YWluIGxheW91dFxuICovXG5cbi5pbnZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLypcbiAqIENsZWFyZml4OiBjb250YWluIGZsb2F0c1xuICpcbiAqIEZvciBtb2Rlcm4gYnJvd3NlcnNcbiAqIDEuIFRoZSBzcGFjZSBjb250ZW50IGlzIG9uZSB3YXkgdG8gYXZvaWQgYW4gT3BlcmEgYnVnIHdoZW4gdGhlXG4gKiAgICBgY29udGVudGVkaXRhYmxlYCBhdHRyaWJ1dGUgaXMgaW5jbHVkZWQgYW55d2hlcmUgZWxzZSBpbiB0aGUgZG9jdW1lbnQuXG4gKiAgICBPdGhlcndpc2UgaXQgY2F1c2VzIHNwYWNlIHRvIGFwcGVhciBhdCB0aGUgdG9wIGFuZCBib3R0b20gb2YgZWxlbWVudHNcbiAqICAgIHRoYXQgcmVjZWl2ZSB0aGUgYGNsZWFyZml4YCBjbGFzcy5cbiAqIDIuIFRoZSB1c2Ugb2YgYHRhYmxlYCByYXRoZXIgdGhhbiBgYmxvY2tgIGlzIG9ubHkgbmVjZXNzYXJ5IGlmIHVzaW5nXG4gKiAgICBgOmJlZm9yZWAgdG8gY29udGFpbiB0aGUgdG9wLW1hcmdpbnMgb2YgY2hpbGQgZWxlbWVudHMuXG4gKi9cblxuLmNsZWFyZml4OmJlZm9yZSxcbi5jbGVhcmZpeDphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7IC8qIDEgKi9cbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMiAqL1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgRVhBTVBMRSBNZWRpYSBRdWVyaWVzIGZvciBSZXNwb25zaXZlIERlc2lnbi5cbiAgIFRoZXNlIGV4YW1wbGVzIG92ZXJyaWRlIHRoZSBwcmltYXJ5ICgnbW9iaWxlIGZpcnN0Jykgc3R5bGVzLlxuICAgTW9kaWZ5IGFzIGNvbnRlbnQgcmVxdWlyZXMuXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1ZW0pIHtcbiAgICAvKiBTdHlsZSBhZGp1c3RtZW50cyBmb3Igdmlld3BvcnRzIHRoYXQgbWVldCB0aGUgY29uZGl0aW9uICovXG59XG5cbkBtZWRpYSBwcmludCxcbiAgICAgICAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjI1KSxcbiAgICAgICAobWluLXJlc29sdXRpb246IDEuMjVkcHB4KSxcbiAgICAgICAobWluLXJlc29sdXRpb246IDEyMGRwaSkge1xuICAgIC8qIFN0eWxlIGFkanVzdG1lbnRzIGZvciBoaWdoIHJlc29sdXRpb24gZGV2aWNlcyAqL1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgUHJpbnQgc3R5bGVzLlxuICAgSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6XG4gICBodHRwczovL3d3dy5waHBpZWQuY29tL2RlbGF5LWxvYWRpbmcteW91ci1wcmludC1jc3MvXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5AbWVkaWEgcHJpbnQge1xuICAgICosXG4gICAgKjpiZWZvcmUsXG4gICAgKjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8qIEJsYWNrIHByaW50cyBmYXN0ZXIgKi9cbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBhLFxuICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgIGFbaHJlZl06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAoXCIgYXR0cihocmVmKSBcIilcIjtcbiAgICB9XG5cbiAgICBhYmJyW3RpdGxlXTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKHRpdGxlKSBcIilcIjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXG4gICAgICogb3IgdXNlIHRoZSBgamF2YXNjcmlwdDpgIHBzZXVkbyBwcm90b2NvbFxuICAgICAqL1xuXG4gICAgYVtocmVmXj1cIiNcIl06YWZ0ZXIsXG4gICAgYVtocmVmXj1cImphdmFzY3JpcHQ6XCJdOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG5cbiAgICBwcmUge1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgcHJlLFxuICAgIGJsb2NrcXVvdGUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBQcmludGluZyBUYWJsZXM6XG4gICAgICogaHR0cDovL2Nzcy1kaXNjdXNzLmluY3V0aW8uY29tL3dpa2kvUHJpbnRpbmdfVGFibGVzXG4gICAgICovXG5cbiAgICB0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcbiAgICB9XG5cbiAgICB0cixcbiAgICBpbWcge1xuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gICAgfVxuXG4gICAgcCxcbiAgICBoMixcbiAgICBoMyB7XG4gICAgICAgIG9ycGhhbnM6IDM7XG4gICAgICAgIHdpZG93czogMztcbiAgICB9XG5cbiAgICBoMixcbiAgICBoMyB7XG4gICAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xuICAgIH1cbn1cbiIsIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIkBpbXBvcnQgXCJhc3NldHMvY3NzL21haW4uY3NzXCI7IFxuQGltcG9ydCBcImFzc2V0cy9jc3Mvbm9ybWFsaXplLmNzc1wiOyBcblxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICdzYWxvbWVyZWd1bGFyJztcblx0c3JjOiB1cmwoJ2Fzc2V0cy9jc3MvZm9udHMvc2Fsb21lLXdlYmZvbnQuZW90Jyk7XG5cdHNyYzogdXJsKCdhc3NldHMvY3NzL2ZvbnRzL3NhbG9tZS13ZWJmb250LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG5cdFx0XHQgdXJsKCdhc3NldHMvY3NzL2ZvbnRzL3NhbG9tZS13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuXHRcdFx0IHVybCgnYXNzZXRzL2Nzcy9mb250cy9zYWxvbWUtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG5cdFx0XHQgdXJsKCdhc3NldHMvY3NzL2ZvbnRzL3NhbG9tZS13ZWJmb250LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcblx0XHRcdCB1cmwoJ2Fzc2V0cy9jc3MvZm9udHMvc2Fsb21lLXdlYmZvbnQuc3ZnI3NhbG9tZXJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5ib2R5LGgxe1xuXHR0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1vdXQ7XG4tby10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1vdXQ7XG4tbW96LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlLW91dDtcbi13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2Utb3V0O1xudHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtcbi13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cblxuYm9keXtcblx0Zm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIC8vIGhlaWdodDogMTAwdmg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJhY2tncm91bmQtc2l6ZTogNjAlO1xuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdCYuY29sb3ItaW50cm97XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2R1bW15aW1hZ2UuY29tLzI1MDB4MjUwMC9mZmZmZmYvZmZmLnBuZycpO1xuXHR9XG5cblx0Ly8gJi5jb2xvci10ZXh0dXJlc3tcblx0Ly8gXHRiYWNrZ3JvdW5kLWltYWdlOiBsaWdodGdyZXk7XG5cdC8vIH1cblx0Ly8gJi5jb2xvci1wYWludGluZ3N7XG5cdC8vIFx0YmFja2dyb3VuZC1pbWFnZTppdm9yeTtcblx0Ly8gfVxufVxuXG5cbi53cmFwcGVyIHtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbmhlYWRlcntcblx0aGVpZ2h0OiAzMHZoO1xuXHRtaW4taGVpZ2h0OiAyNDBweDtcbn1cblxuLy8gbWFpbntcbi8vIFx0cGFkZGluZzogODBweCAxZW07XG4vLyBcdHdpZHRoOiAxMDB2dztcbi8vIFx0aGVpZ2h0OiAxMDB2aDtcbi8vIH1cblxuaDF7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTYwcHgpe1xuXHQvLyBtYWlue1xuXHQvLyBcdHBhZGRpbmc6IDgwcHggMDtcblx0Ly8gfVxuXHQud3JhcHBlcntcblx0XHRtYXgtd2lkdGg6IDEyMzBweDtcblx0fVxuXHRoMXtcblx0XHRcdGZvbnQtc2l6ZTogNXJlbTtcblx0fVxuXHRib2R5e1xuXHRcdC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9kdW1teWltYWdlLmNvbS8yNTAweDI1MDAvZmZmZmZmL2ZmZi5wbmcnKTtcblx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdCYuY29sb3ItZnJhY3R1cmVze1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9wYXR0ZXJuX2Z1bGxfaW1nMTQ2LmpwZycpO1xuXHRcdH1cblx0XHQmLmNvbG9yLXBob3RvZ3JhcGh5e1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3RodW1icy9iZ19pbWcxNDMuanBnJyk7XG5cdFx0fVxuXHR9XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/the-monarq-site/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map