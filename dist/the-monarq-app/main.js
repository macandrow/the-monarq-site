(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/pages/gallery/gallery.component.ts");








var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: '',
        pathMatch: 'full',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    },
    {
        path: 'gallery/:title',
        component: _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
    }
    // {
    //   path: 'gallery/:id',
    //   component: GalleryComponent
    // }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- header -->\r\n<app-header></app-header>\r\n\r\n<main>\r\n    <!-- routes will be rendered here -->\r\n    <router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import $ from 'jquery';
// // declare var jQuery : any;
// // declare var $ : any;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'The Monarq';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/pages/gallery/gallery.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                //  , HttpClientModule
            ],
            providers: [
                _services_gallery_service__WEBPACK_IMPORTED_MODULE_10__["GalleryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contact works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <span *ngIf=\"gallery !== undefined\">\r\n            <h1 class=\"text-center\">\r\n                {{gallery.title | uppercase}}\r\n            </h1>\r\n            <p>{{gallery.description}}    \r\n        </span>\r\n  \r\n        <!-- Galley wrapper that contains all items -->\r\n        <div *ngIf=\"gallery !== undefined\" id=\"gallery\" class=\"gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\r\n          <!-- Use figure for a more semantic html -->\r\n          <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\"  *ngFor=\"let slide of gallery.slides\">\r\n            <!-- Link to the big image, not mandatory, but usefull when there is no JS -->\r\n            <a href=\"https://unsplash.it/1200/900/?image=702\" attr.data-caption=\"{{slide.title}}>\" data-width=\"1200\" data-height=\"900\" itemprop=\"contentUrl\">\r\n              <!-- Thumbnail -->\r\n              <img src=\"https://unsplash.it/400/300/?image=702\" itemprop=\"thumbnail\" alt=\"Image description\">\r\n            </a>\r\n          </figure>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n<hr>\r\n\r\n  <!-- Some spacing 😉 -->\r\n  <div class=\"spacer\"></div>\r\n  \r\n  \r\n  <!-- Root element of PhotoSwipe. Must have class pswp. -->\r\n  <div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <!-- Background of PhotoSwipe. \r\n             It's a separate element as animating opacity is faster than rgba(). -->\r\n    <div class=\"pswp__bg\"></div>\r\n    <!-- Slides wrapper with overflow:hidden. -->\r\n    <div class=\"pswp__scroll-wrap\">\r\n      <!-- Container that holds slides. \r\n                PhotoSwipe keeps only 3 of them in the DOM to save memory.\r\n                Don't modify these 3 pswp__item elements, data is added later on. -->\r\n      <div class=\"pswp__container\">\r\n        <div class=\"pswp__item\"></div>\r\n        <div class=\"pswp__item\"></div>\r\n        <div class=\"pswp__item\"></div>\r\n      </div>\r\n      <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\r\n      <div class=\"pswp__ui pswp__ui--hidden\">\r\n        <div class=\"pswp__top-bar\">\r\n          <!--  Controls are self-explanatory. Order can be changed. -->\r\n          <div class=\"pswp__counter\"></div>\r\n          <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\r\n          <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\r\n          <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\r\n          <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\r\n          <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\r\n          <!-- element will get class pswp__preloader--active when preloader is running -->\r\n          <div class=\"pswp__preloader\">\r\n            <div class=\"pswp__preloader__icn\">\r\n              <div class=\"pswp__preloader__cut\">\r\n                <div class=\"pswp__preloader__donut\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\r\n          <div class=\"pswp__share-tooltip\"></div>\r\n        </div>\r\n        <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\r\n        </button>\r\n        <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\r\n        </button>\r\n        <div class=\"pswp__caption\">\r\n          <div class=\"pswp__caption__center\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 2em; }\n\n.pswp__caption__center {\n  text-align: center; }\n\nimg {\n  width: 100%; }\n\n.spacer {\n  height: 5em; }\n\n.gallery {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\nfigure {\n  flex: 1 0 260px;\n  margin: 20px 10px; }\n\nfigure a img {\n    width: 100%;\n    height: auto;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9DOlxcTUFNUFxcaHRkb2NzXFxuZXctZGFcXHRoZS1tb25hcnEtc2l0ZS9zcmNcXGFwcFxccGFnZXNcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSSxXQUFXLEVBQUE7O0FBQ2Y7RUFBd0Isa0JBQWtCLEVBQUE7O0FBTTFDO0VBQUssV0FBVyxFQUFBOztBQUNoQjtFQUFTLFdBQVcsRUFBQTs7QUFFcEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQU9oQztFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFGbkI7SUFJSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHttYXJnaW46IDJlbTt9XHJcbi5wc3dwX19jYXB0aW9uX19jZW50ZXIge3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi8vIGZpZ3VyZSB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIHdpZHRoOiAzMy4zMzMlO1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyB9XHJcbmltZyB7d2lkdGg6IDEwMCU7fVxyXG4uc3BhY2VyIHtoZWlnaHQ6IDVlbTt9XHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAvLyBmbGV4OiAxIDAgMzAwcHg7IC8qIGV4cGxhbmF0aW9uIGJlbG93ICovXHJcbiAgLy8gbWFyZ2luOiA1cHg7XHJcbiAgLy8gaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuZmlndXJlIHtcclxuICBmbGV4OiAxIDAgMjYwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgYSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.ts ***!
  \****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/gallery.service */ "./src/app/services/gallery.service.ts");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_7__);






// import PhotoSwipe from 'photoswipe'
// import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
// Core JS file

// UI JS file

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(galleryservice, route, location) {
        this.galleryservice = galleryservice;
        this.route = route;
        this.location = location;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryservice.getGalleryTitles().subscribe(function (galleryTitles) { return _this.galleryTitles = galleryTitles; });
        console.log('--------');
        console.log(this.galleryTitles);
        this.route.params
            .switchMap(function (params) { return _this.galleryservice.getGalleryByTitle(params['title']); }) // (+) converts string id to a number
            .subscribe(function (gallery) {
            console.log(gallery);
            _this.gallery = gallery;
            _this.setPrevNext(gallery.title);
        });
        'use strict';
        /* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */
        (function ($) {
            // Init empty gallery array
            var container = [];
            // Loop over gallery items and push it to the array
            $('#gallery').find('figure').each(function () {
                var $link = $(this).find('a'), item = {
                    src: $link.attr('href'),
                    w: $link.data('width'),
                    h: $link.data('height'),
                    title: $link.data('caption')
                };
                alert($link.data('caption'));
                container.push(item);
            });
            // Define click event on gallery item
            $('#gallery a').click(function (event) {
                // Prevent location change
                event.preventDefault();
                // Define object and gallery options
                var $pswp = $('.pswp')[0], options = {
                    index: $(this).parent('figure').index(),
                    bgOpacity: 0.85,
                    showHideOpacity: true
                };
                // Initialize PhotoSwipe
                var gallery = new photoswipe__WEBPACK_IMPORTED_MODULE_6__($pswp, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_7__, container, options);
                gallery.init();
            });
        }(jQuery));
    };
    GalleryComponent.prototype.setPrevNext = function (galleryId) {
        var index = this.galleryTitles.indexOf(galleryId);
        this.prev = this.galleryTitles[(this.galleryTitles.length + index - 1) % this.galleryTitles.length];
        this.next = this.galleryTitles[(this.galleryTitles.length + index + 1) % this.galleryTitles.length];
    };
    GalleryComponent.prototype.goBack = function () {
        this.location.back();
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/pages/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/pages/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_5__["GalleryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header data-color=\"intro\">\r\n\tlogo\r\n\t<h1>lorem ipsum boilerplate text intro</h1>\r\n</header>\r\n\r\n<div *ngIf=\"galleries\">\r\n\t<h2>By Title</h2>\r\n\t<div *ngFor=\"let gallery of galleries\" [routerLink]=\"['/gallery', gallery.title]\">\r\n\t\t<h1>{{gallery.title | uppercase}}</h1>\r\n\t</div>\r\n</div>\r\n\r\n<!-- <div *ngFor= \"let gallery of galleries\" [routerLink]=\"['/gallery', gallery.id]\"></div>\r\n\t<h1>{{gallery.title | uppercase}}</h1>\r\n\r\n</div> -->\r\n<hr>\r\n<!-- <div *ngIf=\"gallery\">\r\n\t\t{{gallery.title | uppercase}}\r\n</div> -->\r\n<hr>\r\n<!-- <div *ngFor=\"let gallery of galleries\" [routerLink]=\"['/gallery', gallery.id]\"> \r\n\t{{gallery.title | uppercase}}\r\n</div> -->\r\n<hr>\r\n<!-- <div *ngFor= \"let gallery of galleries\" (click)=\"onSelect(gallery)\">\r\n\t\t<h1>{{gallery.title}}</h1>\r\n\t\r\n\t</div> -->\r\n\t\r\n\r\n<!-- <div *ngIf=\"selectedGallery\">\r\n    <h3>Selected Gallery</h3>\r\n     <h2>{{selectedGallery.title}}</h2>\r\n     <h2>{{selectedGallery.description}}</h2>\r\n   </div> -->\r\n <!-- <app-gallery></app-gallery> -->\r\n<!-- <app-gallery [gallery]=\"selectedGallery\"></app-gallery> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nheader h1 {\n  text-align: center;\n  margin-top: 16vh;\n  margin-bottom: 21vh; }\n.row {\n  background-size: contain; }\n.row[data-color=\"fractures\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"photography\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"textures\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"paintings\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.gallery {\n  position: relative;\n  flex: none;\n  width: 30%;\n  height: calc(100vh - 16rem);\n  background-size: cover; }\n.gallery   .gallery_img {\n    width: 100%;\n    height: 100%; }\n.gallery .desc {\n    position: absolute;\n    bottom: 0;\n    padding-bottom: 5rem;\n    right: -15vw;\n    text-align: right;\n    width: 100%; }\n.gallery .desc h1 {\n      font-size: 5rem;\n      margin: 0;\n      font-family: 'salomeregular', Georgia, Serif; }\n.gallery .desc p {\n      font-size: 1.5rem; }\n.gallery.odd .desc {\n    text-align: right;\n    right: -15vw; }\n.gallery.even .desc {\n    text-align: left;\n    left: -15vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL0M6XFxNQU1QXFxodGRvY3NcXG5ldy1kYVxcdGhlLW1vbmFycS1zaXRlL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0Usd0JBQXdCLEVBQUE7QUFEMUI7SUFHSSxnRUFBeUYsRUFBQTtBQUg3RjtJQU1JLGdFQUF5RixFQUFBO0FBTjdGO0lBU0ksZ0VBQXlGLEVBQUE7QUFUN0Y7SUFZSSxnRUFBeUYsRUFBQTtBQUk3RjtFQUNFLGtCQUFrQjtFQUNuQixVQUFVO0VBQ1YsVUFBVTtFQUNWLDJCQUEyQjtFQUMxQixzQkFBc0IsRUFBQTtBQUx4QjtJQU9JLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFSaEI7SUFXSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQTtBQWhCZjtNQWtCTSxlQUFlO01BQ2YsU0FBUztNQUNULDRDQUE0QyxFQUFBO0FBcEJsRDtNQXVCTSxpQkFBaUIsRUFBQTtBQXZCdkI7SUEyQkksaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtBQTVCaEI7SUErQkksZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmhlYWRlciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZ2aDtcbiAgbWFyZ2luLWJvdHRvbTogMjF2aDsgfVxuXG4ucm93IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XG4gIC5yb3dbZGF0YS1jb2xvcj1cImZyYWN0dXJlc1wiXSAuZ2FsbGVyeV9pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9wYXR0ZXJuX2Z1bGxfaW1nMTQ2LmpwZ1wiKSByZXBlYXQgdG9wIGxlZnQ7IH1cbiAgLnJvd1tkYXRhLWNvbG9yPVwicGhvdG9ncmFwaHlcIl0gLmdhbGxlcnlfaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGdcIikgcmVwZWF0IHRvcCBsZWZ0OyB9XG4gIC5yb3dbZGF0YS1jb2xvcj1cInRleHR1cmVzXCJdIC5nYWxsZXJ5X2ltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnXCIpIHJlcGVhdCB0b3AgbGVmdDsgfVxuICAucm93W2RhdGEtY29sb3I9XCJwYWludGluZ3NcIl0gLmdhbGxlcnlfaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGdcIikgcmVwZWF0IHRvcCBsZWZ0OyB9XG5cbi5nYWxsZXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNnJlbSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cbiAgLmdhbGxlcnkgwqDCoC5nYWxsZXJ5X2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5nYWxsZXJ5IC5kZXNjIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICAgIHJpZ2h0OiAtMTV2dztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5nYWxsZXJ5IC5kZXNjIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnc2Fsb21lcmVndWxhcicsIEdlb3JnaWEsIFNlcmlmOyB9XG4gICAgLmdhbGxlcnkgLmRlc2MgcCB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTsgfVxuICAuZ2FsbGVyeS5vZGQgLmRlc2Mge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHJpZ2h0OiAtMTV2dzsgfVxuICAuZ2FsbGVyeS5ldmVuIC5kZXNjIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxlZnQ6IC0xNXZ3OyB9XG4iLCJoZWFkZXIgaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE2dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjF2aDtcclxufVxyXG4ucm93e1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAmW2RhdGEtY29sb3I9XCJmcmFjdHVyZXNcIl0gLmdhbGxlcnlfaW1ne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGcnKSByZXBlYXQgdG9wIGxlZnQ7XHJcbiAgfVxyXG4gICZbZGF0YS1jb2xvcj1cInBob3RvZ3JhcGh5XCJdIC5nYWxsZXJ5X2ltZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnJykgcmVwZWF0IHRvcCBsZWZ0O1xyXG4gIH1cclxuICAmW2RhdGEtY29sb3I9XCJ0ZXh0dXJlc1wiXSAuZ2FsbGVyeV9pbWd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9wYXR0ZXJuX2Z1bGxfaW1nMTQ2LmpwZycpIHJlcGVhdCB0b3AgbGVmdDtcclxuICB9XHJcbiAgJltkYXRhLWNvbG9yPVwicGFpbnRpbmdzXCJdIC5nYWxsZXJ5X2ltZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnJykgcmVwZWF0IHRvcCBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLmdhbGxlcnl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZsZXg6IG5vbmU7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNnJlbSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuwqDCoC5nYWxsZXJ5X2ltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuZGVzY3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgcmlnaHQ6IC0xNXZ3O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdzYWxvbWVyZWd1bGFyJywgR2VvcmdpYSwgU2VyaWY7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5vZGQgLmRlc2N7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHJpZ2h0OiAtMTV2dztcclxuICB9XHJcbiAgJi5ldmVuIC5kZXNje1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxlZnQ6IC0xNXZ3O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gallery.service */ "./src/app/services/gallery.service.ts");



// import { GALLERIES} from 'src/app/shared/galleries';
var HomeComponent = /** @class */ (function () {
    // constructor(private galleryService: GalleryService) {}
    function HomeComponent(galleryService) {
        this.galleryService = galleryService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryService.getGalleries()
            .subscribe(function (galleries) { return _this.galleries = galleries; });
        $(window).scroll(function () {
            // selectors
            var $window = $(window), $body = $('body'), $panel = $('.row');
            // Change 33% earlier than scroll position so colour is there when you arrive.
            var scroll = $window.scrollTop() + ($window.height() / 3);
            $panel.each(function () {
                var $this = $(this);
                // if position is within range of this panel.
                // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
                // Remember we set the scroll to 33% earlier in scroll var.
                if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                    // Remove all classes on body with color-
                    $body.removeClass(function (index, css) {
                        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
                    });
                    // Add class of currently active div
                    $body.addClass('color-' + $(this).data('color'));
                }
                else if ($window.scrollTop() == 0) {
                    $body.removeClass(function (index, css) {
                        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
                    });
                }
            });
        }).scroll();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/gallery.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/gallery.service.ts ***!
  \*********************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/galleries */ "./src/app/shared/galleries.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");






var GalleryService = /** @class */ (function () {
    function GalleryService() {
    }
    GalleryService.prototype.getGalleries = function () {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__["GALLERIES"]);
    };
    GalleryService.prototype.getGallery = function (id) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__["GALLERIES"].filter(function (gallery) { return (gallery.id === id); })[0]);
    };
    GalleryService.prototype.getGalleryIds = function () {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__["GALLERIES"].map(function (gallery) { return gallery.id; }));
    };
    GalleryService.prototype.getGalleryTitles = function () {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__["GALLERIES"].map(function (gallery) { return gallery.title; }));
    };
    GalleryService.prototype.getGalleryByTitle = function (title) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__["GALLERIES"].filter(function (gallery) { return (gallery.title === title); })[0]);
    };
    GalleryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/shared/galleries.ts":
/*!*************************************!*\
  !*** ./src/app/shared/galleries.ts ***!
  \*************************************/
/*! exports provided: GALLERIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GALLERIES", function() { return GALLERIES; });
var GALLERIES = [
    {
        id: 0,
        title: "fractures",
        description: "123SC",
        thumbnail: "sfsfd",
        dataColor: "fractures",
        slides: [
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Sea side, south shore",
                album: 'default'
            },
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Image Caption 1",
                album: 'default'
            },
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Image Caption 2",
                album: 'default'
            }
        ]
    },
    {
        id: 1,
        title: "photography",
        description: "I will be photography",
        thumbnail: " hello",
        dataColor: "photography",
        slides: [
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Sea side, south shore",
                album: 'default'
            },
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'default'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n\r\n  <!-- logo -->\r\n  <div class=\"navbar-brand\">\r\n    <a class=\"navbar-item\">\r\n      <img src=\"assets/images/logo-nav@2x.png\">\r\n    </a>\r\n  </div>\r\n\r\n  <!-- menu -->\r\n  <div class=\"navbar-menu\">\r\n    <div class=\"navbar-start\">\r\n      <a class=\"navbar-item\" routerLink=\"\">Home</a>\r\n      <a class=\"navbar-item\" routerLink=\"gallery\">Gallery</a>\r\n      <a class=\"navbar-item\" routerLink=\"contact\">Contact</a>\r\n      <a class=\"navbar-item\" routerLink=\"about\">About</a>\r\n    </div>\r\n  </div>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MAMP\htdocs\new-da\the-monarq-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map