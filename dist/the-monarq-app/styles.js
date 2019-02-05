(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/photoswipe/dist/photoswipe.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/photoswipe/dist/photoswipe.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\tStyles for basic PhotoSwipe functionality (sliding area, open/close transitions)\n*/\n/* pswp = photoswipe */\n.pswp {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  touch-action: none;\n  z-index: 1500;\n  -webkit-text-size-adjust: 100%;\n  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */\n  -webkit-backface-visibility: hidden;\n  outline: none; }\n.pswp * {\n    box-sizing: border-box; }\n.pswp img {\n    max-width: none; }\n/* style is added when JS option showHideOpacity is set to true */\n.pswp--animate_opacity {\n  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */\n  opacity: 0.001;\n  will-change: opacity;\n  /* for open/close transition */\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp--open {\n  display: block; }\n.pswp--zoom-allowed .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n.pswp--zoomed-in .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab; }\n.pswp--dragging .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing; }\n/*\n\tBackground is added as a separate element.\n\tAs animating opacity is much faster than animating rgba() background-color.\n*/\n.pswp__bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n.pswp__scroll-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n.pswp__container,\n.pswp__zoom-wrap {\n  touch-action: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n/* Prevent selection and tap highlights */\n.pswp__container,\n.pswp__img {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none; }\n.pswp__zoom-wrap {\n  position: absolute;\n  width: 100%;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  /* for open/close transition */\n  transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1), -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp__bg {\n  will-change: opacity;\n  /* for open/close transition */\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp--animated-in .pswp__bg,\n.pswp--animated-in .pswp__zoom-wrap {\n  transition: none; }\n.pswp__container,\n.pswp__zoom-wrap {\n  -webkit-backface-visibility: hidden; }\n.pswp__item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden; }\n.pswp__img {\n  position: absolute;\n  width: auto;\n  height: auto;\n  top: 0;\n  left: 0; }\n/*\n\tstretched thumbnail or div placeholder element (see below)\n\tstyle is added to avoid flickering in webkit/blink when layers overlap\n*/\n.pswp__img--placeholder {\n  -webkit-backface-visibility: hidden; }\n/*\n\tdiv element that matches size of large image\n\tlarge image loads on top of it\n*/\n.pswp__img--placeholder--blank {\n  background: #222; }\n.pswp--ie .pswp__img {\n  width: 100% !important;\n  height: auto !important;\n  left: 0;\n  top: 0; }\n/*\n\tError message appears when image is not loaded\n\t(JS option errorMsg controls markup)\n*/\n.pswp__error-msg {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  margin-top: -8px;\n  color: #CCC; }\n.pswp__error-msg a {\n  color: #CCC;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9waG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFOztDQUVDO0FBQ0Qsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sZ0JBQWdCO0VBRWhCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZFQUE2RTtFQUM3RSxtQ0FBbUM7RUFDbkMsYUFBYSxFQUFFO0FBQ2Y7SUFFVSxzQkFBc0IsRUFBRTtBQUNsQztJQUNFLGVBQWUsRUFBRTtBQUVyQixpRUFBaUU7QUFDakU7RUFDRSxtR0FBbUc7RUFDbkcsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFFdEIsdURBQXVELEVBQUU7QUFFbkU7RUFDRSxjQUFjLEVBQUU7QUFFbEI7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixlQUFlLEVBQUU7QUFFbkI7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUU7QUFFaEI7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBRTtBQUVwQjs7O0NBR0M7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQ0FBZ0M7VUFDeEIsd0JBQXdCO0VBQ2hDLG1DQUFtQztFQUNuQyxvQkFBb0IsRUFBRTtBQUV4QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUU7QUFFcEI7O0VBR0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTLEVBQUU7QUFFYix5Q0FBeUM7QUFDekM7O0VBRUUseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7TUFDakIsaUJBQWlCO0VBQ3JCLHdDQUF3QztFQUN4QywyQkFBMkIsRUFBRTtBQUUvQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0NBQWtDO0VBRWxDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFFdEIsaUVBQXlEO0VBQXpELHlEQUF5RDtFQUF6RCxnSEFBeUQsRUFBRTtBQUVyRTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFFdEIsdURBQXVELEVBQUU7QUFFbkU7O0VBR0UsZ0JBQWdCLEVBQUU7QUFFcEI7O0VBRUUsbUNBQW1DLEVBQUU7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULGdCQUFnQixFQUFFO0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU8sRUFBRTtBQUVYOzs7Q0FHQztBQUNEO0VBQ0UsbUNBQW1DLEVBQUU7QUFFdkM7OztDQUdDO0FBQ0Q7RUFDRSxnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsT0FBTztFQUNQLE1BQU0sRUFBRTtBQUVWOzs7Q0FHQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUU7QUFFZjtFQUNFLFdBQVc7RUFDWCwwQkFBMEIsRUFBRSIsImZpbGUiOiJub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIFBob3RvU3dpcGUgbWFpbiBDU1MgYnkgRG1pdHJ5IFNlbWVub3YgfCBwaG90b3N3aXBlLmNvbSB8IE1JVCBsaWNlbnNlICovXG4vKlxuXHRTdHlsZXMgZm9yIGJhc2ljIFBob3RvU3dpcGUgZnVuY3Rpb25hbGl0eSAoc2xpZGluZyBhcmVhLCBvcGVuL2Nsb3NlIHRyYW5zaXRpb25zKVxuKi9cbi8qIHBzd3AgPSBwaG90b3N3aXBlICovXG4ucHN3cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIHotaW5kZXg6IDE1MDA7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogY3JlYXRlIHNlcGFyYXRlIGxheWVyLCB0byBhdm9pZCBwYWludCBvbiB3aW5kb3cub25zY3JvbGwgaW4gd2Via2l0L2JsaW5rICovXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvdXRsaW5lOiBub25lOyB9XG4gIC5wc3dwICoge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLnBzd3AgaW1nIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cblxuLyogc3R5bGUgaXMgYWRkZWQgd2hlbiBKUyBvcHRpb24gc2hvd0hpZGVPcGFjaXR5IGlzIHNldCB0byB0cnVlICovXG4ucHN3cC0tYW5pbWF0ZV9vcGFjaXR5IHtcbiAgLyogMC4wMDEsIGJlY2F1c2Ugb3BhY2l0eTowIGRvZXNuJ3QgdHJpZ2dlciBQYWludCBhY3Rpb24sIHdoaWNoIGNhdXNlcyBsYWcgYXQgc3RhcnQgb2YgdHJhbnNpdGlvbiAqL1xuICBvcGFjaXR5OiAwLjAwMTtcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gIC8qIGZvciBvcGVuL2Nsb3NlIHRyYW5zaXRpb24gKi9cbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cblxuLnBzd3AtLW9wZW4ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4ucHN3cC0tem9vbS1hbGxvd2VkIC5wc3dwX19pbWcge1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcbiAgY3Vyc29yOiAtbW96LXpvb20taW47XG4gIGN1cnNvcjogem9vbS1pbjsgfVxuXG4ucHN3cC0tem9vbWVkLWluIC5wc3dwX19pbWcge1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiAtbW96LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjsgfVxuXG4ucHN3cC0tZHJhZ2dpbmcgLnBzd3BfX2ltZyB7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nOyB9XG5cbi8qXG5cdEJhY2tncm91bmQgaXMgYWRkZWQgYXMgYSBzZXBhcmF0ZSBlbGVtZW50LlxuXHRBcyBhbmltYXRpbmcgb3BhY2l0eSBpcyBtdWNoIGZhc3RlciB0aGFuIGFuaW1hdGluZyByZ2JhKCkgYmFja2dyb3VuZC1jb2xvci5cbiovXG4ucHN3cF9fYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7IH1cblxuLnBzd3BfX3Njcm9sbC13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnBzd3BfX2NvbnRhaW5lcixcbi5wc3dwX196b29tLXdyYXAge1xuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwOyB9XG5cbi8qIFByZXZlbnQgc2VsZWN0aW9uIGFuZCB0YXAgaGlnaGxpZ2h0cyAqL1xuLnBzd3BfX2NvbnRhaW5lcixcbi5wc3dwX19pbWcge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyB9XG5cbi5wc3dwX196b29tLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpOyB9XG5cbi5wc3dwX19iZyB7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpOyB9XG5cbi5wc3dwLS1hbmltYXRlZC1pbiAucHN3cF9fYmcsXG4ucHN3cC0tYW5pbWF0ZWQtaW4gLnBzd3BfX3pvb20td3JhcCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogbm9uZTsgfVxuXG4ucHN3cF9fY29udGFpbmVyLFxuLnBzd3BfX3pvb20td3JhcCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5wc3dwX19pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnBzd3BfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwOyB9XG5cbi8qXG5cdHN0cmV0Y2hlZCB0aHVtYm5haWwgb3IgZGl2IHBsYWNlaG9sZGVyIGVsZW1lbnQgKHNlZSBiZWxvdylcblx0c3R5bGUgaXMgYWRkZWQgdG8gYXZvaWQgZmxpY2tlcmluZyBpbiB3ZWJraXQvYmxpbmsgd2hlbiBsYXllcnMgb3ZlcmxhcFxuKi9cbi5wc3dwX19pbWctLXBsYWNlaG9sZGVyIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLypcblx0ZGl2IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHNpemUgb2YgbGFyZ2UgaW1hZ2Vcblx0bGFyZ2UgaW1hZ2UgbG9hZHMgb24gdG9wIG9mIGl0XG4qL1xuLnBzd3BfX2ltZy0tcGxhY2Vob2xkZXItLWJsYW5rIHtcbiAgYmFja2dyb3VuZDogIzIyMjsgfVxuXG4ucHN3cC0taWUgLnBzd3BfX2ltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7IH1cblxuLypcblx0RXJyb3IgbWVzc2FnZSBhcHBlYXJzIHdoZW4gaW1hZ2UgaXMgbm90IGxvYWRlZFxuXHQoSlMgb3B0aW9uIGVycm9yTXNnIGNvbnRyb2xzIG1hcmt1cClcbiovXG4ucHN3cF9fZXJyb3ItbXNnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgY29sb3I6ICNDQ0M7IH1cblxuLnBzd3BfX2Vycm9yLW1zZyBhIHtcbiAgY29sb3I6ICNDQ0M7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! HTML5 Boilerplate v6.1.0 | MIT License | https://html5boilerplate.com/ */\n\n/*\n * What follows is the result of much research on cross-browser styling.\n * Credit left inline and big thanks to Nicolas Gallagher, Jonathan Neal,\n * Kroc Camen, and the H5BP dev community and team.\n */\n\n/* ==========================================================================\n   Base styles: opinionated defaults\n   ========================================================================== */\n\nhtml {\n    color: #222;\n    font-size: 1em;\n    line-height: 1.4;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * Vendor-prefixed and regular ::selection selectors cannot be combined:\n * https://stackoverflow.com/a/16982510/7133471\n *\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n    vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n    resize: vertical;\n}\n\n/* ==========================================================================\n   Browser Upgrade Prompt\n   ========================================================================== */\n\n.browserupgrade {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n    background-size: cover;\n}\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\n\nbody{\n    transition: background .5s ease-out;\n}\n\n/* colours */\n\n/*.color-intro{\n    background: url(\"https://images.unsplash.com/photo-1543363950-725dc7180660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80\");\n}\n.color-tkb {\n  background: url(\"../images/fractures/Kal_img059-1.jpg\") repeat top left;\n}\n.color-huddle {\n  background: url(\"../images/fractures/Kal_img059-2.jpg\")  repeat top left;\n}\n.color-monarq {\n  background: url(\"../images/fractures/Kal_img059-3.jpg\") repeat top left;\n}*/\n\n@font-face {\n    font-family: 'salomeregular';\n    src: url('salome-webfont.eot');\n    src: url('salome-webfont.eot?#iefix') format('embedded-opentype'),\n         url('salome-webfont.woff2') format('woff2'),\n         url('salome-webfont.woff') format('woff'),\n         url('salome-webfont.ttf') format('truetype'),\n         url('salome-webfont.svg#salomeregular') format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n/*\n * Hide visually and from screen readers\n */\n\n.hidden {\n    display: none !important;\n}\n\n/*\n * Hide only visually, but have it available for screen readers:\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\n *\n * 1. For long content, line feeds are not interpreted as spaces and small width\n *    causes content to wrap 1 word per line:\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\n */\n\n.visuallyhidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap; /* 1 */\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element\n * to be focusable when navigated to via the keyboard:\n * https://www.drupal.org/node/897638\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto;\n    white-space: inherit;\n}\n\n/*\n * Hide visually and from screen readers, but maintain layout\n */\n\n.invisible {\n    visibility: hidden;\n}\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n\n.clearfix:before,\n.clearfix:after {\n    content: \" \"; /* 1 */\n    display: table; /* 2 */\n}\n\n.clearfix:after {\n    clear: both;\n}\n\n/* ==========================================================================\n   EXAMPLE Media Queries for Responsive Design.\n   These examples override the primary ('mobile first') styles.\n   Modify as content requires.\n   ========================================================================== */\n\n@media only screen and (min-width: 35em) {\n    /* Style adjustments for viewports that meet the condition */\n}\n\n@media print, (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx), (min-resolution: 120dpi) {\n    /* Style adjustments for high resolution devices */\n}\n\n/* ==========================================================================\n   Print styles.\n   Inlined to avoid the additional HTTP request:\n   https://www.phpied.com/delay-loading-your-print-css/\n   ========================================================================== */\n\n@media print {\n    *,\n    *:before,\n    *:after {\n        background: transparent !important;\n        color: #000 !important; /* Black prints faster */\n        box-shadow: none !important;\n        text-shadow: none !important;\n    }\n\n    a,\n    a:visited {\n        text-decoration: underline;\n    }\n\n    a[href]:after {\n        content: \" (\" attr(href) \")\";\n    }\n\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\";\n    }\n\n    /*\n     * Don't show links that are fragment identifiers,\n     * or use the `javascript:` pseudo protocol\n     */\n\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\";\n    }\n\n    pre {\n        white-space: pre-wrap !important;\n    }\n    pre,\n    blockquote {\n        border: 1px solid #999;\n        page-break-inside: avoid;\n    }\n\n    /*\n     * Printing Tables:\n     * http://css-discuss.incutio.com/wiki/Printing_Tables\n     */\n\n    thead {\n        display: table-header-group;\n    }\n\n    tr,\n    img {\n        page-break-inside: avoid;\n    }\n\n    p,\n    h2,\n    h3 {\n        orphans: 3;\n        widows: 3;\n    }\n\n    h2,\n    h3 {\n        page-break-after: avoid;\n    }\n}\n\n/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\nbody {\n  font-family: brandon-grotesque,sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: white;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  /* For IE8 and earlier */ }\n\nbody.color-fractures {\n    background: url('thumb_pattern_full_img146.jpg'); }\n\nbody.color-photography {\n    background: url('bg_img143.jpg'); }\n\nbody.color-textures {\n    background-color: lightgrey; }\n\nbody.color-paintings {\n    background-color: ivory; }\n\n.wrapper {\n  max-width: 1230px;\n  margin: 0 auto; }\n\n.row {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  min-height: 600px;\n  /*pointer-events: none;*/ }\n\nheader {\n  height: 30vh;\n  background-color: pink; }\n\n.flex-start {\n  align-self: flex-start; }\n\n.flex-end {\n  align-self: flex-end; }\n\n.center {\n  align-self: center; }\n\n.baseline {\n  align-self: baseline; }\n\n.stretch {\n  align-self: stretch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL21haW4uY3NzIiwic3JjL2Fzc2V0cy9jc3Mvbm9ybWFsaXplLmNzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1hcHAvc3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7Ozs7RUFJRTs7QUFFRjs7K0VBRStFOztBQUUvRTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7OztFQVFFOztBQUVGO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTs7OztFQUlFOztBQUVGOzs7Ozs7SUFNSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7K0VBRStFOztBQUUvRTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUVoQixzQkFBc0I7QUFDMUI7O0FBRUE7OytFQUUrRTs7QUFFL0U7SUFJSSxtQ0FBbUM7QUFDdkM7O0FBRUEsWUFBWTs7QUFDWjs7Ozs7Ozs7Ozs7RUFXRTs7QUFFRjtJQUNJLDRCQUE0QjtJQUM1Qiw4QkFBb0M7SUFDcEM7Ozs7OERBSWdFO0lBQ2hFLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7OytFQUUrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7Ozs7Ozs7RUFPRTs7QUFFRjtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CLEVBQUUsTUFBTTtBQUMvQjs7QUFFQTs7OztFQUlFOztBQUVGOztJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7Ozs7OztFQVVFOztBQUVGOztJQUVJLFlBQVksRUFBRSxNQUFNO0lBQ3BCLGNBQWMsRUFBRSxNQUFNO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOzs7OytFQUkrRTs7QUFFL0U7SUFDSSw0REFBNEQ7QUFDaEU7O0FBRUE7SUFJSSxrREFBa0Q7QUFDdEQ7O0FBRUE7Ozs7K0VBSStFOztBQUUvRTtJQUNJOzs7UUFHSSxrQ0FBa0M7UUFDbEMsc0JBQXNCLEVBQUUsd0JBQXdCO1FBRWhELDJCQUEyQjtRQUMzQiw0QkFBNEI7SUFDaEM7O0lBRUE7O1FBRUksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBOzs7TUFHRTs7SUFFRjs7UUFFSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxnQ0FBZ0M7SUFDcEM7SUFDQTs7UUFFSSxzQkFBc0I7UUFDdEIsd0JBQXdCO0lBQzVCOztJQUVBOzs7TUFHRTs7SUFFRjtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTs7UUFFSSx3QkFBd0I7SUFDNUI7O0lBRUE7OztRQUdJLFVBQVU7UUFDVixTQUFTO0lBQ2I7O0lBRUE7O1FBRUksdUJBQXVCO0lBQzNCO0FBQ0o7O0FDalRBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMseUNBQWlDO1VBQWpDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FDL1VBO0VBQ0MseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3RCLFlBQVk7RUFDWix5QkFBeUI7RUFBRSx3QkFBQSxFQUF5Qjs7QUFOdEQ7SUFRRSxnREFBd0UsRUFBQTs7QUFSMUU7SUFXRSxnQ0FBd0QsRUFBQTs7QUFYMUQ7SUFjRSwyQkFBMkIsRUFBQTs7QUFkN0I7SUFpQkUsdUJBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFaEI7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHdCQUFBLEVBQXlCOztBQUUxQjtFQUNDLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFFdkI7RUFBYyxzQkFBc0IsRUFBQTs7QUFDcEM7RUFBWSxvQkFBb0IsRUFBQTs7QUFDaEM7RUFBVSxrQkFBa0IsRUFBQTs7QUFDNUI7RUFBWSxvQkFBb0IsRUFBQTs7QUFDaEM7RUFBVyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgSFRNTDUgQm9pbGVycGxhdGUgdjYuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2h0bWw1Ym9pbGVycGxhdGUuY29tLyAqL1xuXG4vKlxuICogV2hhdCBmb2xsb3dzIGlzIHRoZSByZXN1bHQgb2YgbXVjaCByZXNlYXJjaCBvbiBjcm9zcy1icm93c2VyIHN0eWxpbmcuXG4gKiBDcmVkaXQgbGVmdCBpbmxpbmUgYW5kIGJpZyB0aGFua3MgdG8gTmljb2xhcyBHYWxsYWdoZXIsIEpvbmF0aGFuIE5lYWwsXG4gKiBLcm9jIENhbWVuLCBhbmQgdGhlIEg1QlAgZGV2IGNvbW11bml0eSBhbmQgdGVhbS5cbiAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgQmFzZSBzdHlsZXM6IG9waW5pb25hdGVkIGRlZmF1bHRzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5odG1sIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4vKlxuICogUmVtb3ZlIHRleHQtc2hhZG93IGluIHNlbGVjdGlvbiBoaWdobGlnaHQ6XG4gKiBodHRwczovL3R3aXR0ZXIuY29tL21pa2V0YXlsci9zdGF0dXMvMTIyMjg4MDUzMDFcbiAqXG4gKiBWZW5kb3ItcHJlZml4ZWQgYW5kIHJlZ3VsYXIgOjpzZWxlY3Rpb24gc2VsZWN0b3JzIGNhbm5vdCBiZSBjb21iaW5lZDpcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjk4MjUxMC83MTMzNDcxXG4gKlxuICogQ3VzdG9taXplIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHlvdXIgZGVzaWduLlxuICovXG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4vKlxuICogQSBiZXR0ZXIgbG9va2luZyBkZWZhdWx0IGhvcml6b250YWwgcnVsZVxuICovXG5cbmhyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuICogUmVtb3ZlIHRoZSBnYXAgYmV0d2VlbiBhdWRpbywgY2FudmFzLCBpZnJhbWVzLFxuICogaW1hZ2VzLCB2aWRlb3MgYW5kIHRoZSBib3R0b20gb2YgdGhlaXIgY29udGFpbmVyczpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2lzc3Vlcy80NDBcbiAqL1xuXG5hdWRpbyxcbmNhbnZhcyxcbmlmcmFtZSxcbmltZyxcbnN2ZyxcbnZpZGVvIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKlxuICogUmVtb3ZlIGRlZmF1bHQgZmllbGRzZXQgc3R5bGVzLlxuICovXG5cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi8qXG4gKiBBbGxvdyBvbmx5IHZlcnRpY2FsIHJlc2l6aW5nIG9mIHRleHRhcmVhcy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEJyb3dzZXIgVXBncmFkZSBQcm9tcHRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi5icm93c2VydXBncmFkZSB7XG4gICAgbWFyZ2luOiAwLjJlbSAwO1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMC4yZW0gMDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEF1dGhvcidzIGN1c3RvbSBzdHlsZXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmJvZHl7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2Utb3V0O1xufVxuXG4vKiBjb2xvdXJzICovXG4vKi5jb2xvci1pbnRyb3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MzM2Mzk1MC03MjVkYzcxODA2NjA/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwMDEmcT04MFwiKTtcbn1cbi5jb2xvci10a2Ige1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvZnJhY3R1cmVzL0thbF9pbWcwNTktMS5qcGdcIikgcmVwZWF0IHRvcCBsZWZ0O1xufVxuLmNvbG9yLWh1ZGRsZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy9mcmFjdHVyZXMvS2FsX2ltZzA1OS0yLmpwZ1wiKSAgcmVwZWF0IHRvcCBsZWZ0O1xufVxuLmNvbG9yLW1vbmFycSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2ltYWdlcy9mcmFjdHVyZXMvS2FsX2ltZzA1OS0zLmpwZ1wiKSByZXBlYXQgdG9wIGxlZnQ7XG59Ki9cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdzYWxvbWVyZWd1bGFyJztcbiAgICBzcmM6IHVybCgnZm9udHMvc2Fsb21lLXdlYmZvbnQuZW90Jyk7XG4gICAgc3JjOiB1cmwoJ2ZvbnRzL3NhbG9tZS13ZWJmb250LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgICB1cmwoJ2ZvbnRzL3NhbG9tZS13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgdXJsKCdmb250cy9zYWxvbWUtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICB1cmwoJ2ZvbnRzL3NhbG9tZS13ZWJmb250LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICAgIHVybCgnZm9udHMvc2Fsb21lLXdlYmZvbnQuc3ZnI3NhbG9tZXJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgSGVscGVyIGNsYXNzZXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBIaWRlIHZpc3VhbGx5IGFuZCBmcm9tIHNjcmVlbiByZWFkZXJzXG4gKi9cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKlxuICogSGlkZSBvbmx5IHZpc3VhbGx5LCBidXQgaGF2ZSBpdCBhdmFpbGFibGUgZm9yIHNjcmVlbiByZWFkZXJzOlxuICogaHR0cHM6Ly9zbm9vay5jYS9hcmNoaXZlcy9odG1sX2FuZF9jc3MvaGlkaW5nLWNvbnRlbnQtZm9yLWFjY2Vzc2liaWxpdHlcbiAqXG4gKiAxLiBGb3IgbG9uZyBjb250ZW50LCBsaW5lIGZlZWRzIGFyZSBub3QgaW50ZXJwcmV0ZWQgYXMgc3BhY2VzIGFuZCBzbWFsbCB3aWR0aFxuICogICAgY2F1c2VzIGNvbnRlbnQgdG8gd3JhcCAxIHdvcmQgcGVyIGxpbmU6XG4gKiAgICBodHRwczovL21lZGl1bS5jb20vQGplc3NlYmVhY2gvYmV3YXJlLXNtdXNoZWQtb2ZmLXNjcmVlbi1hY2Nlc3NpYmxlLXRleHQtNTk1MmE0YzJjYmZlXG4gKi9cblxuLnZpc3VhbGx5aGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIDEgKi9cbn1cblxuLypcbiAqIEV4dGVuZHMgdGhlIC52aXN1YWxseWhpZGRlbiBjbGFzcyB0byBhbGxvdyB0aGUgZWxlbWVudFxuICogdG8gYmUgZm9jdXNhYmxlIHdoZW4gbmF2aWdhdGVkIHRvIHZpYSB0aGUga2V5Ym9hcmQ6XG4gKiBodHRwczovL3d3dy5kcnVwYWwub3JnL25vZGUvODk3NjM4XG4gKi9cblxuLnZpc3VhbGx5aGlkZGVuLmZvY3VzYWJsZTphY3RpdmUsXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmZvY3VzIHtcbiAgICBjbGlwOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbn1cblxuLypcbiAqIEhpZGUgdmlzdWFsbHkgYW5kIGZyb20gc2NyZWVuIHJlYWRlcnMsIGJ1dCBtYWludGFpbiBsYXlvdXRcbiAqL1xuXG4uaW52aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8qXG4gKiBDbGVhcmZpeDogY29udGFpbiBmbG9hdHNcbiAqXG4gKiBGb3IgbW9kZXJuIGJyb3dzZXJzXG4gKiAxLiBUaGUgc3BhY2UgY29udGVudCBpcyBvbmUgd2F5IHRvIGF2b2lkIGFuIE9wZXJhIGJ1ZyB3aGVuIHRoZVxuICogICAgYGNvbnRlbnRlZGl0YWJsZWAgYXR0cmlidXRlIGlzIGluY2x1ZGVkIGFueXdoZXJlIGVsc2UgaW4gdGhlIGRvY3VtZW50LlxuICogICAgT3RoZXJ3aXNlIGl0IGNhdXNlcyBzcGFjZSB0byBhcHBlYXIgYXQgdGhlIHRvcCBhbmQgYm90dG9tIG9mIGVsZW1lbnRzXG4gKiAgICB0aGF0IHJlY2VpdmUgdGhlIGBjbGVhcmZpeGAgY2xhc3MuXG4gKiAyLiBUaGUgdXNlIG9mIGB0YWJsZWAgcmF0aGVyIHRoYW4gYGJsb2NrYCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB1c2luZ1xuICogICAgYDpiZWZvcmVgIHRvIGNvbnRhaW4gdGhlIHRvcC1tYXJnaW5zIG9mIGNoaWxkIGVsZW1lbnRzLlxuICovXG5cbi5jbGVhcmZpeDpiZWZvcmUsXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiOyAvKiAxICovXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDIgKi9cbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEVYQU1QTEUgTWVkaWEgUXVlcmllcyBmb3IgUmVzcG9uc2l2ZSBEZXNpZ24uXG4gICBUaGVzZSBleGFtcGxlcyBvdmVycmlkZSB0aGUgcHJpbWFyeSAoJ21vYmlsZSBmaXJzdCcpIHN0eWxlcy5cbiAgIE1vZGlmeSBhcyBjb250ZW50IHJlcXVpcmVzLlxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNWVtKSB7XG4gICAgLyogU3R5bGUgYWRqdXN0bWVudHMgZm9yIHZpZXdwb3J0cyB0aGF0IG1lZXQgdGhlIGNvbmRpdGlvbiAqL1xufVxuXG5AbWVkaWEgcHJpbnQsXG4gICAgICAgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4yNSksXG4gICAgICAgKG1pbi1yZXNvbHV0aW9uOiAxLjI1ZHBweCksXG4gICAgICAgKG1pbi1yZXNvbHV0aW9uOiAxMjBkcGkpIHtcbiAgICAvKiBTdHlsZSBhZGp1c3RtZW50cyBmb3IgaGlnaCByZXNvbHV0aW9uIGRldmljZXMgKi9cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIFByaW50IHN0eWxlcy5cbiAgIElubGluZWQgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgSFRUUCByZXF1ZXN0OlxuICAgaHR0cHM6Ly93d3cucGhwaWVkLmNvbS9kZWxheS1sb2FkaW5nLXlvdXItcHJpbnQtY3NzL1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuQG1lZGlhIHByaW50IHtcbiAgICAqLFxuICAgICo6YmVmb3JlLFxuICAgICo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvKiBCbGFjayBwcmludHMgZmFzdGVyICovXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgYSxcbiAgICBhOnZpc2l0ZWQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICBhW2hyZWZdOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgKFwiIGF0dHIoaHJlZikgXCIpXCI7XG4gICAgfVxuXG4gICAgYWJiclt0aXRsZV06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAoXCIgYXR0cih0aXRsZSkgXCIpXCI7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBEb24ndCBzaG93IGxpbmtzIHRoYXQgYXJlIGZyYWdtZW50IGlkZW50aWZpZXJzLFxuICAgICAqIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcbiAgICAgKi9cblxuICAgIGFbaHJlZl49XCIjXCJdOmFmdGVyLFxuICAgIGFbaHJlZl49XCJqYXZhc2NyaXB0OlwiXTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuXG4gICAgcHJlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHByZSxcbiAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUHJpbnRpbmcgVGFibGVzOlxuICAgICAqIGh0dHA6Ly9jc3MtZGlzY3Vzcy5pbmN1dGlvLmNvbS93aWtpL1ByaW50aW5nX1RhYmxlc1xuICAgICAqL1xuXG4gICAgdGhlYWQge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG4gICAgfVxuXG4gICAgdHIsXG4gICAgaW1nIHtcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIH1cblxuICAgIHAsXG4gICAgaDIsXG4gICAgaDMge1xuICAgICAgICBvcnBoYW5zOiAzO1xuICAgICAgICB3aWRvd3M6IDM7XG4gICAgfVxuXG4gICAgaDIsXG4gICAgaDMge1xuICAgICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcbiAgICB9XG59XG4iLCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCJAaW1wb3J0IFwiYXNzZXRzL2Nzcy9tYWluLmNzc1wiOyBcbkBpbXBvcnQgXCJhc3NldHMvY3NzL25vcm1hbGl6ZS5jc3NcIjsgXG4vLyBAaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuY3NzJztcbi8vIEBpbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9waG90b3N3aXBlL2Rpc3QvZGVmYXVsdC1za2luL2RlZmF1bHQtc2tpbi5jc3MnO1xuXG5ib2R5e1xuXHRmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWUsc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApOyAvKiBGb3IgSUU4IGFuZCBlYXJsaWVyICovXG5cdCYuY29sb3ItZnJhY3R1cmVze1xuXHRcdGJhY2tncm91bmQ6dXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGcnKTtcblx0fVxuXHQmLmNvbG9yLXBob3RvZ3JhcGh5e1xuXHRcdGJhY2tncm91bmQ6dXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvYmdfaW1nMTQzLmpwZycpO1xuXHR9XG5cdCYuY29sb3ItdGV4dHVyZXN7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXHR9XG5cdCYuY29sb3ItcGFpbnRpbmdze1xuXHRcdGJhY2tncm91bmQtY29sb3I6aXZvcnk7XG5cdH1cbn1cbi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMjMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnJvd3tcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwdmg7XG5cdG1pbi1oZWlnaHQ6IDYwMHB4O1xuXHQvKnBvaW50ZXItZXZlbnRzOiBub25lOyovXG59XG5oZWFkZXJ7XG5cdGhlaWdodDogMzB2aDtcblx0YmFja2dyb3VuZC1jb2xvcjogcGluaztcbn1cbi5mbGV4LXN0YXJ0IHsgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxuLmZsZXgtZW5kIHsgYWxpZ24tc2VsZjogZmxleC1lbmQ7IH1cbi5jZW50ZXIgeyBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cbi5iYXNlbGluZSB7IGFsaWduLXNlbGY6IGJhc2VsaW5lOyB9XG4uc3RyZXRjaCB7IGFsaWduLXNlbGY6IHN0cmV0Y2g7IH1cblxuXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe.css":
/*!*****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./photoswipe.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/photoswipe/dist/photoswipe.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
/*!*****************************************************************************!*\
  !*** multi ./src/styles.scss ./node_modules/photoswipe/dist/photoswipe.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/MAMP/htdocs/the-monarq-app/src/styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/the-monarq-app/node_modules/photoswipe/dist/photoswipe.css */"./node_modules/photoswipe/dist/photoswipe.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map