(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/photoswipe/dist/photoswipe.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/photoswipe/dist/photoswipe.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */\r\n/*\r\n\tStyles for basic PhotoSwipe functionality (sliding area, open/close transitions)\r\n*/\r\n/* pswp = photoswipe */\r\n.pswp {\r\n  display: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  overflow: hidden;\r\n  touch-action: none;\r\n  z-index: 1500;\r\n  -webkit-text-size-adjust: 100%;\r\n  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */\r\n  -webkit-backface-visibility: hidden;\r\n  outline: none; }\r\n.pswp * {\r\n    box-sizing: border-box; }\r\n.pswp img {\r\n    max-width: none; }\r\n/* style is added when JS option showHideOpacity is set to true */\r\n.pswp--animate_opacity {\r\n  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */\r\n  opacity: 0.001;\r\n  will-change: opacity;\r\n  /* for open/close transition */\r\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\r\n.pswp--open {\r\n  display: block; }\r\n.pswp--zoom-allowed .pswp__img {\r\n  /* autoprefixer: off */\r\n  cursor: -webkit-zoom-in;\r\n  cursor: -moz-zoom-in;\r\n  cursor: zoom-in; }\r\n.pswp--zoomed-in .pswp__img {\r\n  /* autoprefixer: off */\r\n  cursor: -webkit-grab;\r\n  cursor: -moz-grab;\r\n  cursor: grab; }\r\n.pswp--dragging .pswp__img {\r\n  /* autoprefixer: off */\r\n  cursor: -webkit-grabbing;\r\n  cursor: -moz-grabbing;\r\n  cursor: grabbing; }\r\n/*\r\n\tBackground is added as a separate element.\r\n\tAs animating opacity is much faster than animating rgba() background-color.\r\n*/\r\n.pswp__bg {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #000;\r\n  opacity: 0;\r\n  -webkit-transform: translateZ(0);\r\n          transform: translateZ(0);\r\n  -webkit-backface-visibility: hidden;\r\n  will-change: opacity; }\r\n.pswp__scroll-wrap {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden; }\r\n.pswp__container,\r\n.pswp__zoom-wrap {\r\n  touch-action: none;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0; }\r\n/* Prevent selection and tap highlights */\r\n.pswp__container,\r\n.pswp__img {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none; }\r\n.pswp__zoom-wrap {\r\n  position: absolute;\r\n  width: 100%;\r\n  -webkit-transform-origin: left top;\r\n  transform-origin: left top;\r\n  /* for open/close transition */\r\n  transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\r\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\r\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1), -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1); }\r\n.pswp__bg {\r\n  will-change: opacity;\r\n  /* for open/close transition */\r\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\r\n.pswp--animated-in .pswp__bg,\r\n.pswp--animated-in .pswp__zoom-wrap {\r\n  transition: none; }\r\n.pswp__container,\r\n.pswp__zoom-wrap {\r\n  -webkit-backface-visibility: hidden; }\r\n.pswp__item {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  overflow: hidden; }\r\n.pswp__img {\r\n  position: absolute;\r\n  width: auto;\r\n  height: auto;\r\n  top: 0;\r\n  left: 0; }\r\n/*\r\n\tstretched thumbnail or div placeholder element (see below)\r\n\tstyle is added to avoid flickering in webkit/blink when layers overlap\r\n*/\r\n.pswp__img--placeholder {\r\n  -webkit-backface-visibility: hidden; }\r\n/*\r\n\tdiv element that matches size of large image\r\n\tlarge image loads on top of it\r\n*/\r\n.pswp__img--placeholder--blank {\r\n  background: #222; }\r\n.pswp--ie .pswp__img {\r\n  width: 100% !important;\r\n  height: auto !important;\r\n  left: 0;\r\n  top: 0; }\r\n/*\r\n\tError message appears when image is not loaded\r\n\t(JS option errorMsg controls markup)\r\n*/\r\n.pswp__error-msg {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  margin-top: -8px;\r\n  color: #CCC; }\r\n.pswp__error-msg a {\r\n  color: #CCC;\r\n  text-decoration: underline; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9waG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFOztDQUVDO0FBQ0Qsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sZ0JBQWdCO0VBRWhCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZFQUE2RTtFQUM3RSxtQ0FBbUM7RUFDbkMsYUFBYSxFQUFFO0FBQ2Y7SUFFVSxzQkFBc0IsRUFBRTtBQUNsQztJQUNFLGVBQWUsRUFBRTtBQUVyQixpRUFBaUU7QUFDakU7RUFDRSxtR0FBbUc7RUFDbkcsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFFdEIsdURBQXVELEVBQUU7QUFFbkU7RUFDRSxjQUFjLEVBQUU7QUFFbEI7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixlQUFlLEVBQUU7QUFFbkI7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUU7QUFFaEI7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBRTtBQUVwQjs7O0NBR0M7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQ0FBZ0M7VUFDeEIsd0JBQXdCO0VBQ2hDLG1DQUFtQztFQUNuQyxvQkFBb0IsRUFBRTtBQUV4QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUU7QUFFcEI7O0VBR0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTLEVBQUU7QUFFYix5Q0FBeUM7QUFDekM7O0VBRUUseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7TUFDakIsaUJBQWlCO0VBQ3JCLHdDQUF3QztFQUN4QywyQkFBMkIsRUFBRTtBQUUvQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0NBQWtDO0VBRWxDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFFdEIsaUVBQXlEO0VBQXpELHlEQUF5RDtFQUF6RCxnSEFBeUQsRUFBRTtBQUVyRTtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFFdEIsdURBQXVELEVBQUU7QUFFbkU7O0VBR0UsZ0JBQWdCLEVBQUU7QUFFcEI7O0VBRUUsbUNBQW1DLEVBQUU7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULGdCQUFnQixFQUFFO0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU8sRUFBRTtBQUVYOzs7Q0FHQztBQUNEO0VBQ0UsbUNBQW1DLEVBQUU7QUFFdkM7OztDQUdDO0FBQ0Q7RUFDRSxnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsT0FBTztFQUNQLE1BQU0sRUFBRTtBQUVWOzs7Q0FHQztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUU7QUFFZjtFQUNFLFdBQVc7RUFDWCwwQkFBMEIsRUFBRSIsImZpbGUiOiJub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L3Bob3Rvc3dpcGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIFBob3RvU3dpcGUgbWFpbiBDU1MgYnkgRG1pdHJ5IFNlbWVub3YgfCBwaG90b3N3aXBlLmNvbSB8IE1JVCBsaWNlbnNlICovXHJcbi8qXHJcblx0U3R5bGVzIGZvciBiYXNpYyBQaG90b1N3aXBlIGZ1bmN0aW9uYWxpdHkgKHNsaWRpbmcgYXJlYSwgb3Blbi9jbG9zZSB0cmFuc2l0aW9ucylcclxuKi9cclxuLyogcHN3cCA9IHBob3Rvc3dpcGUgKi9cclxuLnBzd3Age1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XHJcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xyXG4gIHotaW5kZXg6IDE1MDA7XHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gIC8qIGNyZWF0ZSBzZXBhcmF0ZSBsYXllciwgdG8gYXZvaWQgcGFpbnQgb24gd2luZG93Lm9uc2Nyb2xsIGluIHdlYmtpdC9ibGluayAqL1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG91dGxpbmU6IG5vbmU7IH1cclxuICAucHN3cCAqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4gIC5wc3dwIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cclxuXHJcbi8qIHN0eWxlIGlzIGFkZGVkIHdoZW4gSlMgb3B0aW9uIHNob3dIaWRlT3BhY2l0eSBpcyBzZXQgdG8gdHJ1ZSAqL1xyXG4ucHN3cC0tYW5pbWF0ZV9vcGFjaXR5IHtcclxuICAvKiAwLjAwMSwgYmVjYXVzZSBvcGFjaXR5OjAgZG9lc24ndCB0cmlnZ2VyIFBhaW50IGFjdGlvbiwgd2hpY2ggY2F1c2VzIGxhZyBhdCBzdGFydCBvZiB0cmFuc2l0aW9uICovXHJcbiAgb3BhY2l0eTogMC4wMDE7XHJcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcbiAgLyogZm9yIG9wZW4vY2xvc2UgdHJhbnNpdGlvbiAqL1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cclxuXHJcbi5wc3dwLS1vcGVuIHtcclxuICBkaXNwbGF5OiBibG9jazsgfVxyXG5cclxuLnBzd3AtLXpvb20tYWxsb3dlZCAucHN3cF9faW1nIHtcclxuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xyXG4gIGN1cnNvcjogLXdlYmtpdC16b29tLWluO1xyXG4gIGN1cnNvcjogLW1vei16b29tLWluO1xyXG4gIGN1cnNvcjogem9vbS1pbjsgfVxyXG5cclxuLnBzd3AtLXpvb21lZC1pbiAucHN3cF9faW1nIHtcclxuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xyXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xyXG4gIGN1cnNvcjogLW1vei1ncmFiO1xyXG4gIGN1cnNvcjogZ3JhYjsgfVxyXG5cclxuLnBzd3AtLWRyYWdnaW5nIC5wc3dwX19pbWcge1xyXG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcclxuICBjdXJzb3I6IGdyYWJiaW5nOyB9XHJcblxyXG4vKlxyXG5cdEJhY2tncm91bmQgaXMgYWRkZWQgYXMgYSBzZXBhcmF0ZSBlbGVtZW50LlxyXG5cdEFzIGFuaW1hdGluZyBvcGFjaXR5IGlzIG11Y2ggZmFzdGVyIHRoYW4gYW5pbWF0aW5nIHJnYmEoKSBiYWNrZ3JvdW5kLWNvbG9yLlxyXG4qL1xyXG4ucHN3cF9fYmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5OyB9XHJcblxyXG4ucHN3cF9fc2Nyb2xsLXdyYXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG5cclxuLnBzd3BfX2NvbnRhaW5lcixcclxuLnBzd3BfX3pvb20td3JhcCB7XHJcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcclxuICB0b3VjaC1hY3Rpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDsgfVxyXG5cclxuLyogUHJldmVudCBzZWxlY3Rpb24gYW5kIHRhcCBoaWdobGlnaHRzICovXHJcbi5wc3dwX19jb250YWluZXIsXHJcbi5wc3dwX19pbWcge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyB9XHJcblxyXG4ucHN3cF9fem9vbS13cmFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgLyogZm9yIG9wZW4vY2xvc2UgdHJhbnNpdGlvbiAqL1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cclxuXHJcbi5wc3dwX19iZyB7XHJcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcbiAgLyogZm9yIG9wZW4vY2xvc2UgdHJhbnNpdGlvbiAqL1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cclxuXHJcbi5wc3dwLS1hbmltYXRlZC1pbiAucHN3cF9fYmcsXHJcbi5wc3dwLS1hbmltYXRlZC1pbiAucHN3cF9fem9vbS13cmFwIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogbm9uZTsgfVxyXG5cclxuLnBzd3BfX2NvbnRhaW5lcixcclxuLnBzd3BfX3pvb20td3JhcCB7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cclxuXHJcbi5wc3dwX19pdGVtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cclxuXHJcbi5wc3dwX19pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7IH1cclxuXHJcbi8qXHJcblx0c3RyZXRjaGVkIHRodW1ibmFpbCBvciBkaXYgcGxhY2Vob2xkZXIgZWxlbWVudCAoc2VlIGJlbG93KVxyXG5cdHN0eWxlIGlzIGFkZGVkIHRvIGF2b2lkIGZsaWNrZXJpbmcgaW4gd2Via2l0L2JsaW5rIHdoZW4gbGF5ZXJzIG92ZXJsYXBcclxuKi9cclxuLnBzd3BfX2ltZy0tcGxhY2Vob2xkZXIge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XHJcblxyXG4vKlxyXG5cdGRpdiBlbGVtZW50IHRoYXQgbWF0Y2hlcyBzaXplIG9mIGxhcmdlIGltYWdlXHJcblx0bGFyZ2UgaW1hZ2UgbG9hZHMgb24gdG9wIG9mIGl0XHJcbiovXHJcbi5wc3dwX19pbWctLXBsYWNlaG9sZGVyLS1ibGFuayB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjsgfVxyXG5cclxuLnBzd3AtLWllIC5wc3dwX19pbWcge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7IH1cclxuXHJcbi8qXHJcblx0RXJyb3IgbWVzc2FnZSBhcHBlYXJzIHdoZW4gaW1hZ2UgaXMgbm90IGxvYWRlZFxyXG5cdChKUyBvcHRpb24gZXJyb3JNc2cgY29udHJvbHMgbWFya3VwKVxyXG4qL1xyXG4ucHN3cF9fZXJyb3ItbXNnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgY29sb3I6ICNDQ0M7IH1cclxuXHJcbi5wc3dwX19lcnJvci1tc2cgYSB7XHJcbiAgY29sb3I6ICNDQ0M7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! HTML5 Boilerplate v6.1.0 | MIT License | https://html5boilerplate.com/ */\r\n\r\n/*\r\n * What follows is the result of much research on cross-browser styling.\r\n * Credit left inline and big thanks to Nicolas Gallagher, Jonathan Neal,\r\n * Kroc Camen, and the H5BP dev community and team.\r\n */\r\n\r\n/* ==========================================================================\r\n   Base styles: opinionated defaults\r\n   ========================================================================== */\r\n\r\nhtml {\r\n    color: #222;\r\n    font-size: 1em;\r\n    line-height: 1.4;\r\n}\r\n\r\n/*\r\n * Remove text-shadow in selection highlight:\r\n * https://twitter.com/miketaylr/status/12228805301\r\n *\r\n * Vendor-prefixed and regular ::selection selectors cannot be combined:\r\n * https://stackoverflow.com/a/16982510/7133471\r\n *\r\n * Customize the background color to match your design.\r\n */\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n/*\r\n * A better looking default horizontal rule\r\n */\r\n\r\nhr {\r\n    display: block;\r\n    height: 1px;\r\n    border: 0;\r\n    border-top: 1px solid #ccc;\r\n    margin: 1em 0;\r\n    padding: 0;\r\n}\r\n\r\n/*\r\n * Remove the gap between audio, canvas, iframes,\r\n * images, videos and the bottom of their containers:\r\n * https://github.com/h5bp/html5-boilerplate/issues/440\r\n */\r\n\r\naudio,\r\ncanvas,\r\niframe,\r\nimg,\r\nsvg,\r\nvideo {\r\n    vertical-align: middle;\r\n}\r\n\r\n/*\r\n * Remove default fieldset styles.\r\n */\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/*\r\n * Allow only vertical resizing of textareas.\r\n */\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n/* ==========================================================================\r\n   Browser Upgrade Prompt\r\n   ========================================================================== */\r\n\r\n.browserupgrade {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n    background-size: cover;\r\n}\r\n\r\n/* ==========================================================================\r\n   Author's custom styles\r\n   ========================================================================== */\r\n\r\nbody{\r\n    transition: background .5s ease-out;\r\n}\r\n\r\n/* colours */\r\n\r\n/*.color-intro{\r\n    background: url(\"https://images.unsplash.com/photo-1543363950-725dc7180660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80\");\r\n}\r\n.color-tkb {\r\n  background: url(\"../images/fractures/Kal_img059-1.jpg\") repeat top left;\r\n}\r\n.color-huddle {\r\n  background: url(\"../images/fractures/Kal_img059-2.jpg\")  repeat top left;\r\n}\r\n.color-monarq {\r\n  background: url(\"../images/fractures/Kal_img059-3.jpg\") repeat top left;\r\n}*/\r\n\r\n@font-face {\r\n    font-family: 'salomeregular';\r\n    src: url('salome-webfont.eot');\r\n    src: url('salome-webfont.eot?#iefix') format('embedded-opentype'),\r\n         url('salome-webfont.woff2') format('woff2'),\r\n         url('salome-webfont.woff') format('woff'),\r\n         url('salome-webfont.ttf') format('truetype'),\r\n         url('salome-webfont.svg#salomeregular') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n/* ==========================================================================\r\n   Helper classes\r\n   ========================================================================== */\r\n\r\n/*\r\n * Hide visually and from screen readers\r\n */\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n/*\r\n * Hide only visually, but have it available for screen readers:\r\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\r\n *\r\n * 1. For long content, line feeds are not interpreted as spaces and small width\r\n *    causes content to wrap 1 word per line:\r\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\r\n */\r\n\r\n.visuallyhidden {\r\n    border: 0;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    white-space: nowrap; /* 1 */\r\n}\r\n\r\n/*\r\n * Extends the .visuallyhidden class to allow the element\r\n * to be focusable when navigated to via the keyboard:\r\n * https://www.drupal.org/node/897638\r\n */\r\n\r\n.visuallyhidden.focusable:active,\r\n.visuallyhidden.focusable:focus {\r\n    clip: auto;\r\n    height: auto;\r\n    margin: 0;\r\n    overflow: visible;\r\n    position: static;\r\n    width: auto;\r\n    white-space: inherit;\r\n}\r\n\r\n/*\r\n * Hide visually and from screen readers, but maintain layout\r\n */\r\n\r\n.invisible {\r\n    visibility: hidden;\r\n}\r\n\r\n/*\r\n * Clearfix: contain floats\r\n *\r\n * For modern browsers\r\n * 1. The space content is one way to avoid an Opera bug when the\r\n *    `contenteditable` attribute is included anywhere else in the document.\r\n *    Otherwise it causes space to appear at the top and bottom of elements\r\n *    that receive the `clearfix` class.\r\n * 2. The use of `table` rather than `block` is only necessary if using\r\n *    `:before` to contain the top-margins of child elements.\r\n */\r\n\r\n.clearfix:before,\r\n.clearfix:after {\r\n    content: \" \"; /* 1 */\r\n    display: table; /* 2 */\r\n}\r\n\r\n.clearfix:after {\r\n    clear: both;\r\n}\r\n\r\n/* ==========================================================================\r\n   EXAMPLE Media Queries for Responsive Design.\r\n   These examples override the primary ('mobile first') styles.\r\n   Modify as content requires.\r\n   ========================================================================== */\r\n\r\n@media only screen and (min-width: 35em) {\r\n    /* Style adjustments for viewports that meet the condition */\r\n}\r\n\r\n@media print, (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx), (min-resolution: 120dpi) {\r\n    /* Style adjustments for high resolution devices */\r\n}\r\n\r\n/* ==========================================================================\r\n   Print styles.\r\n   Inlined to avoid the additional HTTP request:\r\n   https://www.phpied.com/delay-loading-your-print-css/\r\n   ========================================================================== */\r\n\r\n@media print {\r\n    *,\r\n    *:before,\r\n    *:after {\r\n        background: transparent !important;\r\n        color: #000 !important; /* Black prints faster */\r\n        box-shadow: none !important;\r\n        text-shadow: none !important;\r\n    }\r\n\r\n    a,\r\n    a:visited {\r\n        text-decoration: underline;\r\n    }\r\n\r\n    a[href]:after {\r\n        content: \" (\" attr(href) \")\";\r\n    }\r\n\r\n    abbr[title]:after {\r\n        content: \" (\" attr(title) \")\";\r\n    }\r\n\r\n    /*\r\n     * Don't show links that are fragment identifiers,\r\n     * or use the `javascript:` pseudo protocol\r\n     */\r\n\r\n    a[href^=\"#\"]:after,\r\n    a[href^=\"javascript:\"]:after {\r\n        content: \"\";\r\n    }\r\n\r\n    pre {\r\n        white-space: pre-wrap !important;\r\n    }\r\n    pre,\r\n    blockquote {\r\n        border: 1px solid #999;\r\n        page-break-inside: avoid;\r\n    }\r\n\r\n    /*\r\n     * Printing Tables:\r\n     * http://css-discuss.incutio.com/wiki/Printing_Tables\r\n     */\r\n\r\n    thead {\r\n        display: table-header-group;\r\n    }\r\n\r\n    tr,\r\n    img {\r\n        page-break-inside: avoid;\r\n    }\r\n\r\n    p,\r\n    h2,\r\n    h3 {\r\n        orphans: 3;\r\n        widows: 3;\r\n    }\r\n\r\n    h2,\r\n    h3 {\r\n        page-break-after: avoid;\r\n    }\r\n}\r\n\r\n/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\nbody {\n  font-family: brandon-grotesque,sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  background-color: white;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  /* For IE8 and earlier */ }\r\n\r\nbody.color-fractures {\n    background: url('thumb_pattern_full_img146.jpg'); }\r\n\r\nbody.color-photography {\n    background: url('bg_img143.jpg'); }\r\n\r\nbody.color-textures {\n    background-color: lightgrey; }\r\n\r\nbody.color-paintings {\n    background-color: ivory; }\r\n\r\n.wrapper {\n  max-width: 1230px;\n  margin: 0 auto; }\r\n\r\n.row {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  min-height: 600px;\n  /*pointer-events: none;*/ }\r\n\r\nheader {\n  height: 30vh;\n  background-color: pink; }\r\n\r\n.flex-start {\n  align-self: flex-start; }\r\n\r\n.flex-end {\n  align-self: flex-end; }\r\n\r\n.center {\n  align-self: center; }\r\n\r\n.baseline {\n  align-self: baseline; }\r\n\r\n.stretch {\n  align-self: stretch; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL21haW4uY3NzIiwic3JjL2Fzc2V0cy9jc3Mvbm9ybWFsaXplLmNzcyIsInNyYy9DOlxcTUFNUFxcaHRkb2NzXFxuZXctZGFcXHRoZS1tb25hcnEtc2l0ZS9zcmNcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7Ozs7RUFJRTs7QUFFRjs7K0VBRStFOztBQUUvRTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7OztFQVFFOztBQUVGO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTs7OztFQUlFOztBQUVGOzs7Ozs7SUFNSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTs7RUFFRTs7QUFFRjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7K0VBRStFOztBQUUvRTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUVoQixzQkFBc0I7QUFDMUI7O0FBRUE7OytFQUUrRTs7QUFFL0U7SUFJSSxtQ0FBbUM7QUFDdkM7O0FBRUEsWUFBWTs7QUFDWjs7Ozs7Ozs7Ozs7RUFXRTs7QUFFRjtJQUNJLDRCQUE0QjtJQUM1Qiw4QkFBb0M7SUFDcEM7Ozs7OERBSWdFO0lBQ2hFLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7OytFQUUrRTs7QUFFL0U7O0VBRUU7O0FBRUY7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7Ozs7Ozs7RUFPRTs7QUFFRjtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFD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QUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3RCLFlBQVk7RUFDWix5QkFBeUI7RUFBRSx3QkFBQSxFQUF5Qjs7QUFOdEQ7SUFRRSxnREFBd0UsRUFBQTs7QUFSMUU7SUFXRSxnQ0FBd0QsRUFBQTs7QUFYMUQ7SUFjRSwyQkFBMkIsRUFBQTs7QUFkN0I7SUFpQkUsdUJBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFaEI7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHdCQUFBLEVBQXlCOztBQUUxQjtFQUNDLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFFdkI7RUFBYyxzQkFBc0IsRUFBQTs7QUFDcEM7RUFBWSxvQkFBb0IsRUFBQTs7QUFDaEM7RUFBVSxrQkFBa0IsRUFBQTs7QUFDNUI7RUFBWSxvQkFBb0IsRUFBQTs7QUFDaEM7RUFBVyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgSFRNTDUgQm9pbGVycGxhdGUgdjYuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2h0bWw1Ym9pbGVycGxhdGUuY29tLyAqL1xyXG5cclxuLypcclxuICogV2hhdCBmb2xsb3dzIGlzIHRoZSByZXN1bHQgb2YgbXVjaCByZXNlYXJjaCBvbiBjcm9zcy1icm93c2VyIHN0eWxpbmcuXHJcbiAqIENyZWRpdCBsZWZ0IGlubGluZSBhbmQgYmlnIHRoYW5rcyB0byBOaWNvbGFzIEdhbGxhZ2hlciwgSm9uYXRoYW4gTmVhbCxcclxuICogS3JvYyBDYW1lbiwgYW5kIHRoZSBINUJQIGRldiBjb21tdW5pdHkgYW5kIHRlYW0uXHJcbiAqL1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQmFzZSBzdHlsZXM6IG9waW5pb25hdGVkIGRlZmF1bHRzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5odG1sIHtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4vKlxyXG4gKiBSZW1vdmUgdGV4dC1zaGFkb3cgaW4gc2VsZWN0aW9uIGhpZ2hsaWdodDpcclxuICogaHR0cHM6Ly90d2l0dGVyLmNvbS9taWtldGF5bHIvc3RhdHVzLzEyMjI4ODA1MzAxXHJcbiAqXHJcbiAqIFZlbmRvci1wcmVmaXhlZCBhbmQgcmVndWxhciA6OnNlbGVjdGlvbiBzZWxlY3RvcnMgY2Fubm90IGJlIGNvbWJpbmVkOlxyXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY5ODI1MTAvNzEzMzQ3MVxyXG4gKlxyXG4gKiBDdXN0b21pemUgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggeW91ciBkZXNpZ24uXHJcbiAqL1xyXG5cclxuOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLypcclxuICogQSBiZXR0ZXIgbG9va2luZyBkZWZhdWx0IGhvcml6b250YWwgcnVsZVxyXG4gKi9cclxuXHJcbmhyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKlxyXG4gKiBSZW1vdmUgdGhlIGdhcCBiZXR3ZWVuIGF1ZGlvLCBjYW52YXMsIGlmcmFtZXMsXHJcbiAqIGltYWdlcywgdmlkZW9zIGFuZCB0aGUgYm90dG9tIG9mIHRoZWlyIGNvbnRhaW5lcnM6XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2lzc3Vlcy80NDBcclxuICovXHJcblxyXG5hdWRpbyxcclxuY2FudmFzLFxyXG5pZnJhbWUsXHJcbmltZyxcclxuc3ZnLFxyXG52aWRlbyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBSZW1vdmUgZGVmYXVsdCBmaWVsZHNldCBzdHlsZXMuXHJcbiAqL1xyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLypcclxuICogQWxsb3cgb25seSB2ZXJ0aWNhbCByZXNpemluZyBvZiB0ZXh0YXJlYXMuXHJcbiAqL1xyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQnJvd3NlciBVcGdyYWRlIFByb21wdFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmJyb3dzZXJ1cGdyYWRlIHtcclxuICAgIG1hcmdpbjogMC4yZW0gMDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDA7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBBdXRob3IncyBjdXN0b20gc3R5bGVzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5ib2R5e1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiBjb2xvdXJzICovXHJcbi8qLmNvbG9yLWludHJve1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDMzNjM5NTAtNzI1ZGM3MTgwNjYwP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDAxJnE9ODBcIik7XHJcbn1cclxuLmNvbG9yLXRrYiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vaW1hZ2VzL2ZyYWN0dXJlcy9LYWxfaW1nMDU5LTEuanBnXCIpIHJlcGVhdCB0b3AgbGVmdDtcclxufVxyXG4uY29sb3ItaHVkZGxlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvZnJhY3R1cmVzL0thbF9pbWcwNTktMi5qcGdcIikgIHJlcGVhdCB0b3AgbGVmdDtcclxufVxyXG4uY29sb3ItbW9uYXJxIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvZnJhY3R1cmVzL0thbF9pbWcwNTktMy5qcGdcIikgcmVwZWF0IHRvcCBsZWZ0O1xyXG59Ki9cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdzYWxvbWVyZWd1bGFyJztcclxuICAgIHNyYzogdXJsKCdmb250cy9zYWxvbWUtd2ViZm9udC5lb3QnKTtcclxuICAgIHNyYzogdXJsKCdmb250cy9zYWxvbWUtd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgICB1cmwoJ2ZvbnRzL3NhbG9tZS13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxyXG4gICAgICAgICB1cmwoJ2ZvbnRzL3NhbG9tZS13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgICAgICAgdXJsKCdmb250cy9zYWxvbWUtd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICAgICAgIHVybCgnZm9udHMvc2Fsb21lLXdlYmZvbnQuc3ZnI3NhbG9tZXJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgSGVscGVyIGNsYXNzZXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qXHJcbiAqIEhpZGUgdmlzdWFsbHkgYW5kIGZyb20gc2NyZWVuIHJlYWRlcnNcclxuICovXHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLypcclxuICogSGlkZSBvbmx5IHZpc3VhbGx5LCBidXQgaGF2ZSBpdCBhdmFpbGFibGUgZm9yIHNjcmVlbiByZWFkZXJzOlxyXG4gKiBodHRwczovL3Nub29rLmNhL2FyY2hpdmVzL2h0bWxfYW5kX2Nzcy9oaWRpbmctY29udGVudC1mb3ItYWNjZXNzaWJpbGl0eVxyXG4gKlxyXG4gKiAxLiBGb3IgbG9uZyBjb250ZW50LCBsaW5lIGZlZWRzIGFyZSBub3QgaW50ZXJwcmV0ZWQgYXMgc3BhY2VzIGFuZCBzbWFsbCB3aWR0aFxyXG4gKiAgICBjYXVzZXMgY29udGVudCB0byB3cmFwIDEgd29yZCBwZXIgbGluZTpcclxuICogICAgaHR0cHM6Ly9tZWRpdW0uY29tL0BqZXNzZWJlYWNoL2Jld2FyZS1zbXVzaGVkLW9mZi1zY3JlZW4tYWNjZXNzaWJsZS10ZXh0LTU5NTJhNGMyY2JmZVxyXG4gKi9cclxuXHJcbi52aXN1YWxseWhpZGRlbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiAxICovXHJcbn1cclxuXHJcbi8qXHJcbiAqIEV4dGVuZHMgdGhlIC52aXN1YWxseWhpZGRlbiBjbGFzcyB0byBhbGxvdyB0aGUgZWxlbWVudFxyXG4gKiB0byBiZSBmb2N1c2FibGUgd2hlbiBuYXZpZ2F0ZWQgdG8gdmlhIHRoZSBrZXlib2FyZDpcclxuICogaHR0cHM6Ly93d3cuZHJ1cGFsLm9yZy9ub2RlLzg5NzYzOFxyXG4gKi9cclxuXHJcbi52aXN1YWxseWhpZGRlbi5mb2N1c2FibGU6YWN0aXZlLFxyXG4udmlzdWFsbHloaWRkZW4uZm9jdXNhYmxlOmZvY3VzIHtcclxuICAgIGNsaXA6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKlxyXG4gKiBIaWRlIHZpc3VhbGx5IGFuZCBmcm9tIHNjcmVlbiByZWFkZXJzLCBidXQgbWFpbnRhaW4gbGF5b3V0XHJcbiAqL1xyXG5cclxuLmludmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qXHJcbiAqIENsZWFyZml4OiBjb250YWluIGZsb2F0c1xyXG4gKlxyXG4gKiBGb3IgbW9kZXJuIGJyb3dzZXJzXHJcbiAqIDEuIFRoZSBzcGFjZSBjb250ZW50IGlzIG9uZSB3YXkgdG8gYXZvaWQgYW4gT3BlcmEgYnVnIHdoZW4gdGhlXHJcbiAqICAgIGBjb250ZW50ZWRpdGFibGVgIGF0dHJpYnV0ZSBpcyBpbmNsdWRlZCBhbnl3aGVyZSBlbHNlIGluIHRoZSBkb2N1bWVudC5cclxuICogICAgT3RoZXJ3aXNlIGl0IGNhdXNlcyBzcGFjZSB0byBhcHBlYXIgYXQgdGhlIHRvcCBhbmQgYm90dG9tIG9mIGVsZW1lbnRzXHJcbiAqICAgIHRoYXQgcmVjZWl2ZSB0aGUgYGNsZWFyZml4YCBjbGFzcy5cclxuICogMi4gVGhlIHVzZSBvZiBgdGFibGVgIHJhdGhlciB0aGFuIGBibG9ja2AgaXMgb25seSBuZWNlc3NhcnkgaWYgdXNpbmdcclxuICogICAgYDpiZWZvcmVgIHRvIGNvbnRhaW4gdGhlIHRvcC1tYXJnaW5zIG9mIGNoaWxkIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbi5jbGVhcmZpeDpiZWZvcmUsXHJcbi5jbGVhcmZpeDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjsgLyogMSAqL1xyXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDIgKi9cclxufVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBFWEFNUExFIE1lZGlhIFF1ZXJpZXMgZm9yIFJlc3BvbnNpdmUgRGVzaWduLlxyXG4gICBUaGVzZSBleGFtcGxlcyBvdmVycmlkZSB0aGUgcHJpbWFyeSAoJ21vYmlsZSBmaXJzdCcpIHN0eWxlcy5cclxuICAgTW9kaWZ5IGFzIGNvbnRlbnQgcmVxdWlyZXMuXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1ZW0pIHtcclxuICAgIC8qIFN0eWxlIGFkanVzdG1lbnRzIGZvciB2aWV3cG9ydHMgdGhhdCBtZWV0IHRoZSBjb25kaXRpb24gKi9cclxufVxyXG5cclxuQG1lZGlhIHByaW50LFxyXG4gICAgICAgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4yNSksXHJcbiAgICAgICAobWluLXJlc29sdXRpb246IDEuMjVkcHB4KSxcclxuICAgICAgIChtaW4tcmVzb2x1dGlvbjogMTIwZHBpKSB7XHJcbiAgICAvKiBTdHlsZSBhZGp1c3RtZW50cyBmb3IgaGlnaCByZXNvbHV0aW9uIGRldmljZXMgKi9cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUHJpbnQgc3R5bGVzLlxyXG4gICBJbmxpbmVkIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIEhUVFAgcmVxdWVzdDpcclxuICAgaHR0cHM6Ly93d3cucGhwaWVkLmNvbS9kZWxheS1sb2FkaW5nLXlvdXItcHJpbnQtY3NzL1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgICosXHJcbiAgICAqOmJlZm9yZSxcclxuICAgICo6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLyogQmxhY2sgcHJpbnRzIGZhc3RlciAqL1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGEsXHJcbiAgICBhOnZpc2l0ZWQge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGFbaHJlZl06YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKGhyZWYpIFwiKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGFiYnJbdGl0bGVdOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiAoXCIgYXR0cih0aXRsZSkgXCIpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIERvbid0IHNob3cgbGlua3MgdGhhdCBhcmUgZnJhZ21lbnQgaWRlbnRpZmllcnMsXHJcbiAgICAgKiBvciB1c2UgdGhlIGBqYXZhc2NyaXB0OmAgcHNldWRvIHByb3RvY29sXHJcbiAgICAgKi9cclxuXHJcbiAgICBhW2hyZWZePVwiI1wiXTphZnRlcixcclxuICAgIGFbaHJlZl49XCJqYXZhc2NyaXB0OlwiXTphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcmUge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgcHJlLFxyXG4gICAgYmxvY2txdW90ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIFByaW50aW5nIFRhYmxlczpcclxuICAgICAqIGh0dHA6Ly9jc3MtZGlzY3Vzcy5pbmN1dGlvLmNvbS93aWtpL1ByaW50aW5nX1RhYmxlc1xyXG4gICAgICovXHJcblxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgIH1cclxuXHJcbiAgICB0cixcclxuICAgIGltZyB7XHJcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgfVxyXG5cclxuICAgIHAsXHJcbiAgICBoMixcclxuICAgIGgzIHtcclxuICAgICAgICBvcnBoYW5zOiAzO1xyXG4gICAgICAgIHdpZG93czogMztcclxuICAgIH1cclxuXHJcbiAgICBoMixcclxuICAgIGgzIHtcclxuICAgICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuICAgIH1cclxufVxyXG4iLCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXHJcblxyXG4vKiBEb2N1bWVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXHJcbiAqL1xyXG5cclxuaHRtbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cclxufVxyXG5cclxuLyogU2VjdGlvbnNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxyXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW46IDAuNjdlbSAwO1xyXG59XHJcblxyXG4vKiBHcm91cGluZyBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cclxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXHJcbiAqL1xyXG5cclxuaHIge1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXHJcbiAgaGVpZ2h0OiAwOyAvKiAxICovXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5wcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbn1cclxuXHJcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cclxuXHJcbmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKipcclxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cclxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5hYmJyW3RpdGxlXSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmIsXHJcbnN0cm9uZyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5jb2RlLFxyXG5rYmQsXHJcbnNhbXAge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cclxuICogYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnN1Yixcclxuc3VwIHtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5zdWIge1xyXG4gIGJvdHRvbTogLTAuMjVlbTtcclxufVxyXG5cclxuc3VwIHtcclxuICB0b3A6IC0wLjVlbTtcclxufVxyXG5cclxuLyogRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuaW1nIHtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEZvcm1zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5vcHRncm91cCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cclxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cclxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xyXG4gIG1hcmdpbjogMDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXHJcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCB7IC8qIDEgKi9cclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxyXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3QgeyAvKiAxICovXHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuW3R5cGU9XCJidXR0b25cIl0sXHJcblt0eXBlPVwicmVzZXRcIl0sXHJcblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxyXG4gKi9cclxuXHJcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcclxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXHJcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXHJcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcclxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuZmllbGRzZXQge1xyXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXHJcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cclxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxyXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5sZWdlbmQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXHJcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXHJcbiAgcGFkZGluZzogMDsgLyogMyAqL1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXHJcbiAqL1xyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbnRleHRhcmVhIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxyXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuW3R5cGU9XCJjaGVja2JveFwiXSxcclxuW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cclxuICovXHJcblxyXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cclxuICovXHJcblxyXG5bdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cclxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxyXG4gKi9cclxuXHJcblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxyXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cclxuICBmb250OiBpbmhlcml0OyAvKiAyICovXHJcbn1cclxuXHJcbi8qIEludGVyYWN0aXZlXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuc3VtbWFyeSB7XHJcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG59XHJcblxyXG4vKiBNaXNjXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbnRlbXBsYXRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiQGltcG9ydCBcImFzc2V0cy9jc3MvbWFpbi5jc3NcIjsgXHJcbkBpbXBvcnQgXCJhc3NldHMvY3NzL25vcm1hbGl6ZS5jc3NcIjsgXHJcbi8vIEBpbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9waG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5jc3MnO1xyXG4vLyBAaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcGhvdG9zd2lwZS9kaXN0L2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4uY3NzJztcclxuXHJcbmJvZHl7XHJcblx0Zm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7IC8qIEZvciBJRTggYW5kIGVhcmxpZXIgKi9cclxuXHQmLmNvbG9yLWZyYWN0dXJlc3tcclxuXHRcdGJhY2tncm91bmQ6dXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGcnKTtcclxuXHR9XHJcblx0Ji5jb2xvci1waG90b2dyYXBoeXtcclxuXHRcdGJhY2tncm91bmQ6dXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvYmdfaW1nMTQzLmpwZycpO1xyXG5cdH1cclxuXHQmLmNvbG9yLXRleHR1cmVze1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG5cdH1cclxuXHQmLmNvbG9yLXBhaW50aW5nc3tcclxuXHRcdGJhY2tncm91bmQtY29sb3I6aXZvcnk7XHJcblx0fVxyXG59XHJcbi53cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDEyMzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ucm93e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG5cdC8qcG9pbnRlci1ldmVudHM6IG5vbmU7Ki9cclxufVxyXG5oZWFkZXJ7XHJcblx0aGVpZ2h0OiAzMHZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuLmZsZXgtc3RhcnQgeyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XHJcbi5mbGV4LWVuZCB7IGFsaWduLXNlbGY6IGZsZXgtZW5kOyB9XHJcbi5jZW50ZXIgeyBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cclxuLmJhc2VsaW5lIHsgYWxpZ24tc2VsZjogYmFzZWxpbmU7IH1cclxuLnN0cmV0Y2ggeyBhbGlnbi1zZWxmOiBzdHJldGNoOyB9XHJcblxyXG5cclxuIl19 */", '', '']]

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

__webpack_require__(/*! C:\MAMP\htdocs\new-da\the-monarq-site\src\styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\new-da\the-monarq-site\node_modules\photoswipe\dist\photoswipe.css */"./node_modules/photoswipe/dist/photoswipe.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map