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

module.exports = [[module.i, "/*! HTML5 Boilerplate v6.1.0 | MIT License | https://html5boilerplate.com/ */\n\n/*\n * What follows is the result of much research on cross-browser styling.\n * Credit left inline and big thanks to Nicolas Gallagher, Jonathan Neal,\n * Kroc Camen, and the H5BP dev community and team.\n */\n\n/* ==========================================================================\n   Base styles: opinionated defaults\n   ========================================================================== */\n\nhtml {\n    color: #222;\n    font-size: 1em;\n    line-height: 1.4;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * Vendor-prefixed and regular ::selection selectors cannot be combined:\n * https://stackoverflow.com/a/16982510/7133471\n *\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n    vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n    resize: vertical;\n}\n\n/* ==========================================================================\n   Browser Upgrade Prompt\n   ========================================================================== */\n\n.browserupgrade {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n    background-size: cover;\n}\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\n\nbody{\n    transition: background .5s ease-out;\n}\n\n/* colours */\n\n/*.color-intro{\n    background: url(\"https://images.unsplash.com/photo-1543363950-725dc7180660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80\");\n}\n.color-tkb {\n  background: url(\"../images/fractures/Kal_img059-1.jpg\") repeat top left;\n}\n.color-huddle {\n  background: url(\"../images/fractures/Kal_img059-2.jpg\")  repeat top left;\n}\n.color-monarq {\n  background: url(\"../images/fractures/Kal_img059-3.jpg\") repeat top left;\n}*/\n\n@font-face {\n    font-family: 'salomeregular';\n    src: url('salome-webfont.eot');\n    src: url('salome-webfont.eot?#iefix') format('embedded-opentype'),\n         url('salome-webfont.woff2') format('woff2'),\n         url('salome-webfont.woff') format('woff'),\n         url('salome-webfont.ttf') format('truetype'),\n         url('salome-webfont.svg#salomeregular') format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n\n/*\n * Hide visually and from screen readers\n */\n\n.hidden {\n    display: none !important;\n}\n\n/*\n * Hide only visually, but have it available for screen readers:\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\n *\n * 1. For long content, line feeds are not interpreted as spaces and small width\n *    causes content to wrap 1 word per line:\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\n */\n\n.visuallyhidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap; /* 1 */\n}\n\n/*\n * Extends the .visuallyhidden class to allow the element\n * to be focusable when navigated to via the keyboard:\n * https://www.drupal.org/node/897638\n */\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto;\n    white-space: inherit;\n}\n\n/*\n * Hide visually and from screen readers, but maintain layout\n */\n\n.invisible {\n    visibility: hidden;\n}\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n\n.clearfix:before,\n.clearfix:after {\n    content: \" \"; /* 1 */\n    display: table; /* 2 */\n}\n\n.clearfix:after {\n    clear: both;\n}\n\n/* ==========================================================================\n   EXAMPLE Media Queries for Responsive Design.\n   These examples override the primary ('mobile first') styles.\n   Modify as content requires.\n   ========================================================================== */\n\n@media only screen and (min-width: 35em) {\n    /* Style adjustments for viewports that meet the condition */\n}\n\n@media print, (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx), (min-resolution: 120dpi) {\n    /* Style adjustments for high resolution devices */\n}\n\n/* ==========================================================================\n   Print styles.\n   Inlined to avoid the additional HTTP request:\n   https://www.phpied.com/delay-loading-your-print-css/\n   ========================================================================== */\n\n@media print {\n    *,\n    *:before,\n    *:after {\n        background: transparent !important;\n        color: #000 !important; /* Black prints faster */\n        box-shadow: none !important;\n        text-shadow: none !important;\n    }\n\n    a,\n    a:visited {\n        text-decoration: underline;\n    }\n\n    a[href]:after {\n        content: \" (\" attr(href) \")\";\n    }\n\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\";\n    }\n\n    /*\n     * Don't show links that are fragment identifiers,\n     * or use the `javascript:` pseudo protocol\n     */\n\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\";\n    }\n\n    pre {\n        white-space: pre-wrap !important;\n    }\n    pre,\n    blockquote {\n        border: 1px solid #999;\n        page-break-inside: avoid;\n    }\n\n    /*\n     * Printing Tables:\n     * http://css-discuss.incutio.com/wiki/Printing_Tables\n     */\n\n    thead {\n        display: table-header-group;\n    }\n\n    tr,\n    img {\n        page-break-inside: avoid;\n    }\n\n    p,\n    h2,\n    h3 {\n        orphans: 3;\n        widows: 3;\n    }\n\n    h2,\n    h3 {\n        page-break-after: avoid;\n    }\n}\n\n/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\nbody {\n  font-family: brandon-grotesque,sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: white;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  /* For IE8 and earlier */ }\n\nbody.color-fractures {\n    background: url('thumb_pattern_full_img146.jpg'); }\n\nbody.color-photography {\n    background: url('bg_img143.jpg'); }\n\nbody.color-textures {\n    background-color: lightgrey; }\n\nbody.color-paintings {\n    background-color: ivory; }\n\n.wrapper {\n  max-width: 1230px;\n  margin: 0 auto; }\n\n.row {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  min-height: 600px;\n  /*pointer-events: none;*/ }\n\nheader {\n  height: 30vh;\n  background-color: pink; }\n\n.flex-start {\n  align-self: flex-start; }\n\n.flex-end {\n  align-self: flex-end; }\n\n.center {\n  align-self: center; }\n\n.baseline {\n  align-self: baseline; }\n\n.stretch {\n  align-self: stretch; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL21haW4uY3NzIiwic3JjL2Fzc2V0cy9jc3Mvbm9ybWFsaXplLmNzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1zaXRlL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFOzs7O0VBSUU7O0FBRUY7OytFQUUrRTs7QUFFL0U7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7RUFRRTs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7Ozs7RUFJRTs7QUFFRjs7Ozs7O0lBTUksc0JBQXNCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7OytFQUUrRTs7QUFFL0U7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFFaEIsc0JBQXNCO0FBQzFCOztBQUVBOzsrRUFFK0U7O0FBRS9FO0lBSUksbUNBQW1DO0FBQ3ZDOztBQUVBLFlBQVk7O0FBQ1o7Ozs7Ozs7Ozs7O0VBV0U7O0FBRUY7SUFDSSw0QkFBNEI7SUFDNUIsOEJBQW9DO0lBQ3BDOzs7OzhEQUlnRTtJQUNoRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBOzsrRUFFK0U7O0FBRS9FOztFQUVFOztBQUVGO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7Ozs7O0VBT0U7O0FBRUY7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFdB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a0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN0QixZQUFZO0VBQ1oseUJBQXlCO0VBQUUsd0JBQUEsRUFBeUI7O0FBTnREO0lBUUUsZ0RBQXdFLEVBQUE7O0FBUjFFO0lBV0UsZ0NBQXdELEVBQUE7O0FBWDFEO0lBY0UsMkJBQTJCLEVBQUE7O0FBZDdCO0lBaUJFLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix3QkFBQSxFQUF5Qjs7QUFFMUI7RUFDQyxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7O0FBRXZCO0VBQWMsc0JBQXNCLEVBQUE7O0FBQ3BDO0VBQVksb0JBQW9CLEVBQUE7O0FBQ2hDO0VBQVUsa0JBQWtCLEVBQUE7O0FBQzVCO0VBQVksb0JBQW9CLEVBQUE7O0FBQ2hDO0VBQVcsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIEhUTUw1IEJvaWxlcnBsYXRlIHY2LjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9odG1sNWJvaWxlcnBsYXRlLmNvbS8gKi9cblxuLypcbiAqIFdoYXQgZm9sbG93cyBpcyB0aGUgcmVzdWx0IG9mIG11Y2ggcmVzZWFyY2ggb24gY3Jvc3MtYnJvd3NlciBzdHlsaW5nLlxuICogQ3JlZGl0IGxlZnQgaW5saW5lIGFuZCBiaWcgdGhhbmtzIHRvIE5pY29sYXMgR2FsbGFnaGVyLCBKb25hdGhhbiBOZWFsLFxuICogS3JvYyBDYW1lbiwgYW5kIHRoZSBINUJQIGRldiBjb21tdW5pdHkgYW5kIHRlYW0uXG4gKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEJhc2Ugc3R5bGVzOiBvcGluaW9uYXRlZCBkZWZhdWx0c1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuaHRtbCB7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLypcbiAqIFJlbW92ZSB0ZXh0LXNoYWRvdyBpbiBzZWxlY3Rpb24gaGlnaGxpZ2h0OlxuICogaHR0cHM6Ly90d2l0dGVyLmNvbS9taWtldGF5bHIvc3RhdHVzLzEyMjI4ODA1MzAxXG4gKlxuICogVmVuZG9yLXByZWZpeGVkIGFuZCByZWd1bGFyIDo6c2VsZWN0aW9uIHNlbGVjdG9ycyBjYW5ub3QgYmUgY29tYmluZWQ6XG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY5ODI1MTAvNzEzMzQ3MVxuICpcbiAqIEN1c3RvbWl6ZSB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB5b3VyIGRlc2lnbi5cbiAqL1xuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbiAqIEEgYmV0dGVyIGxvb2tpbmcgZGVmYXVsdCBob3Jpem9udGFsIHJ1bGVcbiAqL1xuXG5ociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLypcbiAqIFJlbW92ZSB0aGUgZ2FwIGJldHdlZW4gYXVkaW8sIGNhbnZhcywgaWZyYW1lcyxcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9pc3N1ZXMvNDQwXG4gKi9cblxuYXVkaW8sXG5jYW52YXMsXG5pZnJhbWUsXG5pbWcsXG5zdmcsXG52aWRlbyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLypcbiAqIFJlbW92ZSBkZWZhdWx0IGZpZWxkc2V0IHN0eWxlcy5cbiAqL1xuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuICogQWxsb3cgb25seSB2ZXJ0aWNhbCByZXNpemluZyBvZiB0ZXh0YXJlYXMuXG4gKi9cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBCcm93c2VyIFVwZ3JhZGUgUHJvbXB0XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uYnJvd3NlcnVwZ3JhZGUge1xuICAgIG1hcmdpbjogMC4yZW0gMDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDAuMmVtIDA7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBBdXRob3IncyBjdXN0b20gc3R5bGVzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5ib2R5e1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNXMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLW91dDtcbn1cblxuLyogY29sb3VycyAqL1xuLyouY29sb3ItaW50cm97XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDMzNjM5NTAtNzI1ZGM3MTgwNjYwP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAxJnE9ODBcIik7XG59XG4uY29sb3ItdGtiIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL2ZyYWN0dXJlcy9LYWxfaW1nMDU5LTEuanBnXCIpIHJlcGVhdCB0b3AgbGVmdDtcbn1cbi5jb2xvci1odWRkbGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvZnJhY3R1cmVzL0thbF9pbWcwNTktMi5qcGdcIikgIHJlcGVhdCB0b3AgbGVmdDtcbn1cbi5jb2xvci1tb25hcnEge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvZnJhY3R1cmVzL0thbF9pbWcwNTktMy5qcGdcIikgcmVwZWF0IHRvcCBsZWZ0O1xufSovXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnc2Fsb21lcmVndWxhcic7XG4gICAgc3JjOiB1cmwoJ2ZvbnRzL3NhbG9tZS13ZWJmb250LmVvdCcpO1xuICAgIHNyYzogdXJsKCdmb250cy9zYWxvbWUtd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICAgICAgICAgdXJsKCdmb250cy9zYWxvbWUtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgnZm9udHMvc2Fsb21lLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgdXJsKCdmb250cy9zYWxvbWUtd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgICB1cmwoJ2ZvbnRzL3NhbG9tZS13ZWJmb250LnN2ZyNzYWxvbWVyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEhlbHBlciBjbGFzc2VzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogSGlkZSB2aXN1YWxseSBhbmQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuICovXG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLypcbiAqIEhpZGUgb25seSB2aXN1YWxseSwgYnV0IGhhdmUgaXQgYXZhaWxhYmxlIGZvciBzY3JlZW4gcmVhZGVyczpcbiAqIGh0dHBzOi8vc25vb2suY2EvYXJjaGl2ZXMvaHRtbF9hbmRfY3NzL2hpZGluZy1jb250ZW50LWZvci1hY2Nlc3NpYmlsaXR5XG4gKlxuICogMS4gRm9yIGxvbmcgY29udGVudCwgbGluZSBmZWVkcyBhcmUgbm90IGludGVycHJldGVkIGFzIHNwYWNlcyBhbmQgc21hbGwgd2lkdGhcbiAqICAgIGNhdXNlcyBjb250ZW50IHRvIHdyYXAgMSB3b3JkIHBlciBsaW5lOlxuICogICAgaHR0cHM6Ly9tZWRpdW0uY29tL0BqZXNzZWJlYWNoL2Jld2FyZS1zbXVzaGVkLW9mZi1zY3JlZW4tYWNjZXNzaWJsZS10ZXh0LTU5NTJhNGMyY2JmZVxuICovXG5cbi52aXN1YWxseWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiAxICovXG59XG5cbi8qXG4gKiBFeHRlbmRzIHRoZSAudmlzdWFsbHloaWRkZW4gY2xhc3MgdG8gYWxsb3cgdGhlIGVsZW1lbnRcbiAqIHRvIGJlIGZvY3VzYWJsZSB3aGVuIG5hdmlnYXRlZCB0byB2aWEgdGhlIGtleWJvYXJkOlxuICogaHR0cHM6Ly93d3cuZHJ1cGFsLm9yZy9ub2RlLzg5NzYzOFxuICovXG5cbi52aXN1YWxseWhpZGRlbi5mb2N1c2FibGU6YWN0aXZlLFxuLnZpc3VhbGx5aGlkZGVuLmZvY3VzYWJsZTpmb2N1cyB7XG4gICAgY2xpcDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi8qXG4gKiBIaWRlIHZpc3VhbGx5IGFuZCBmcm9tIHNjcmVlbiByZWFkZXJzLCBidXQgbWFpbnRhaW4gbGF5b3V0XG4gKi9cblxuLmludmlzaWJsZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKlxuICogQ2xlYXJmaXg6IGNvbnRhaW4gZmxvYXRzXG4gKlxuICogRm9yIG1vZGVybiBicm93c2Vyc1xuICogMS4gVGhlIHNwYWNlIGNvbnRlbnQgaXMgb25lIHdheSB0byBhdm9pZCBhbiBPcGVyYSBidWcgd2hlbiB0aGVcbiAqICAgIGBjb250ZW50ZWRpdGFibGVgIGF0dHJpYnV0ZSBpcyBpbmNsdWRlZCBhbnl3aGVyZSBlbHNlIGluIHRoZSBkb2N1bWVudC5cbiAqICAgIE90aGVyd2lzZSBpdCBjYXVzZXMgc3BhY2UgdG8gYXBwZWFyIGF0IHRoZSB0b3AgYW5kIGJvdHRvbSBvZiBlbGVtZW50c1xuICogICAgdGhhdCByZWNlaXZlIHRoZSBgY2xlYXJmaXhgIGNsYXNzLlxuICogMi4gVGhlIHVzZSBvZiBgdGFibGVgIHJhdGhlciB0aGFuIGBibG9ja2AgaXMgb25seSBuZWNlc3NhcnkgaWYgdXNpbmdcbiAqICAgIGA6YmVmb3JlYCB0byBjb250YWluIHRoZSB0b3AtbWFyZ2lucyBvZiBjaGlsZCBlbGVtZW50cy5cbiAqL1xuXG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNsZWFyZml4OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAyICovXG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBFWEFNUExFIE1lZGlhIFF1ZXJpZXMgZm9yIFJlc3BvbnNpdmUgRGVzaWduLlxuICAgVGhlc2UgZXhhbXBsZXMgb3ZlcnJpZGUgdGhlIHByaW1hcnkgKCdtb2JpbGUgZmlyc3QnKSBzdHlsZXMuXG4gICBNb2RpZnkgYXMgY29udGVudCByZXF1aXJlcy5cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzVlbSkge1xuICAgIC8qIFN0eWxlIGFkanVzdG1lbnRzIGZvciB2aWV3cG9ydHMgdGhhdCBtZWV0IHRoZSBjb25kaXRpb24gKi9cbn1cblxuQG1lZGlhIHByaW50LFxuICAgICAgICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMjUpLFxuICAgICAgIChtaW4tcmVzb2x1dGlvbjogMS4yNWRwcHgpLFxuICAgICAgIChtaW4tcmVzb2x1dGlvbjogMTIwZHBpKSB7XG4gICAgLyogU3R5bGUgYWRqdXN0bWVudHMgZm9yIGhpZ2ggcmVzb2x1dGlvbiBkZXZpY2VzICovXG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBQcmludCBzdHlsZXMuXG4gICBJbmxpbmVkIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIEhUVFAgcmVxdWVzdDpcbiAgIGh0dHBzOi8vd3d3LnBocGllZC5jb20vZGVsYXktbG9hZGluZy15b3VyLXByaW50LWNzcy9cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBtZWRpYSBwcmludCB7XG4gICAgKixcbiAgICAqOmJlZm9yZSxcbiAgICAqOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlciAqL1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGEsXG4gICAgYTp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgYVtocmVmXTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKGhyZWYpIFwiKVwiO1xuICAgIH1cblxuICAgIGFiYnJbdGl0bGVdOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgKFwiIGF0dHIodGl0bGUpIFwiKVwiO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRG9uJ3Qgc2hvdyBsaW5rcyB0aGF0IGFyZSBmcmFnbWVudCBpZGVudGlmaWVycyxcbiAgICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXG4gICAgICovXG5cbiAgICBhW2hyZWZePVwiI1wiXTphZnRlcixcbiAgICBhW2hyZWZePVwiamF2YXNjcmlwdDpcIl06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cblxuICAgIHByZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBwcmUsXG4gICAgYmxvY2txdW90ZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFByaW50aW5nIFRhYmxlczpcbiAgICAgKiBodHRwOi8vY3NzLWRpc2N1c3MuaW5jdXRpby5jb20vd2lraS9QcmludGluZ19UYWJsZXNcbiAgICAgKi9cblxuICAgIHRoZWFkIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xuICAgIH1cblxuICAgIHRyLFxuICAgIGltZyB7XG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG5cbiAgICBwLFxuICAgIGgyLFxuICAgIGgzIHtcbiAgICAgICAgb3JwaGFuczogMztcbiAgICAgICAgd2lkb3dzOiAzO1xuICAgIH1cblxuICAgIGgyLFxuICAgIGgzIHtcbiAgICAgICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XG4gICAgfVxufVxuIiwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiQGltcG9ydCBcImFzc2V0cy9jc3MvbWFpbi5jc3NcIjsgXG5AaW1wb3J0IFwiYXNzZXRzL2Nzcy9ub3JtYWxpemUuY3NzXCI7IFxuLy8gQGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLmNzcyc7XG4vLyBAaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4uY3NzJztcblxuYm9keXtcblx0Zm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTsgLyogRm9yIElFOCBhbmQgZWFybGllciAqL1xuXHQmLmNvbG9yLWZyYWN0dXJlc3tcblx0XHRiYWNrZ3JvdW5kOnVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnJyk7XG5cdH1cblx0Ji5jb2xvci1waG90b2dyYXBoeXtcblx0XHRiYWNrZ3JvdW5kOnVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL2JnX2ltZzE0My5qcGcnKTtcblx0fVxuXHQmLmNvbG9yLXRleHR1cmVze1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcblx0fVxuXHQmLmNvbG9yLXBhaW50aW5nc3tcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOml2b3J5O1xuXHR9XG59XG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTIzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5yb3d7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRtaW4taGVpZ2h0OiA2MDBweDtcblx0Lypwb2ludGVyLWV2ZW50czogbm9uZTsqL1xufVxuaGVhZGVye1xuXHRoZWlnaHQ6IDMwdmg7XG5cdGJhY2tncm91bmQtY29sb3I6IHBpbms7XG59XG4uZmxleC1zdGFydCB7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cbi5mbGV4LWVuZCB7IGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XG4uY2VudGVyIHsgYWxpZ24tc2VsZjogY2VudGVyOyB9XG4uYmFzZWxpbmUgeyBhbGlnbi1zZWxmOiBiYXNlbGluZTsgfVxuLnN0cmV0Y2ggeyBhbGlnbi1zZWxmOiBzdHJldGNoOyB9XG5cblxuIl19 */", '', '']]

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

__webpack_require__(/*! /Applications/MAMP/htdocs/the-monarq-site/src/styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/the-monarq-site/node_modules/photoswipe/dist/photoswipe.css */"./node_modules/photoswipe/dist/photoswipe.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map