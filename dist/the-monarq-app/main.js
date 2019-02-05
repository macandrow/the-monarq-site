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
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/pages/gallery/gallery.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








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
        path: 'gallery/:title/:id',
        component: _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"]
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
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- header -->\n<app-header></app-header>\n\n<main>\n    <!-- routes will be rendered here -->\n    <router-outlet></router-outlet>\n</main>\n"

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
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/pages/gallery/gallery.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/gallery.service */ "./src/app/services/gallery.service.ts");












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
                _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                //  , HttpClientModule
            ],
            providers: [
                _services_gallery_service__WEBPACK_IMPORTED_MODULE_11__["GalleryService"]
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

module.exports = "<p>\n  about works!\n</p>\n"

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

module.exports = "<p>\n  contact works!\n</p>\n"

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

module.exports = "<div *ngIf=\"gallery\" >\n  <h3>{{gallery.title | uppercase}}</h3>\n<div>\n  \n<p>{{gallery.description}}\n      \n<div *ngFor=\"let slide of gallery.slides\">\n  {{slide.w}}\n  {{slide.h}}\n  {{slide.title}}\n</div>\n\n<div>\n  <button [routerLink]=\"['/gallery', gallery.title, prev]\">Prev</button>\n  \n  <button [routerLink]=\"['/gallery', gallery.title, next]\">Next</button>\n</div>\n  \n\n<!-- Galley wrapper that contains all items -->\n<div class=\"gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n\n  <!-- Use figure for a more semantic html -->\n  <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\" *ngFor=\"let slide of gallery.slides\">\n    \n    <a attr.href=\"{{slide.src}}\" attr.data-caption=\"{{slide.title}}\" attr.data-width=\"{{slide.w}}\" attr.data-height=\"{{slide.h}}\" itemprop=\"contentUrl\">\n      <!-- Thumbnail -->\n      <img attr.src=\"{{slide.src}}\" itemprop=\"thumbnail\" alt=\"Image description\">\n    </a>\n    \n    \n    \n  </figure>\n\n\n\n</div>\n <!-- Root element of PhotoSwipe. Must have class pswp. -->\n <div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\n    <!-- Background of PhotoSwipe. \n         It's a separate element as animating opacity is faster than rgba(). -->\n    <div class=\"pswp__bg\"></div>\n\n    <!-- Slides wrapper with overflow:hidden. -->\n    <div class=\"pswp__scroll-wrap\">\n\n        <!-- Container that holds slides. \n            PhotoSwipe keeps only 3 of them in the DOM to save memory.\n            Don't modify these 3 pswp__item elements, data is added later on. -->\n        <div class=\"pswp__container\">\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n        </div>\n\n        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n        <div class=\"pswp__ui pswp__ui--hidden\">\n\n            <div class=\"pswp__top-bar\">\n\n                <!--  Controls are self-explanatory. Order can be changed. -->\n\n                <div class=\"pswp__counter\"></div>\n\n                <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n\n                <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n\n                <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n\n                <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n\n                <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n                <!-- element will get class pswp__preloader--active when preloader is running -->\n                <div class=\"pswp__preloader\">\n                    <div class=\"pswp__preloader__icn\">\n                      <div class=\"pswp__preloader__cut\">\n                        <div class=\"pswp__preloader__donut\"></div>\n                      </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                <div class=\"pswp__share-tooltip\"></div> \n            </div>\n\n            <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n            </button>\n\n            <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n            </button>\n\n            <div class=\"pswp__caption\">\n                <div class=\"pswp__caption__center\"></div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div> \n"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 2em; }\n\n.pswp__caption__center {\n  text-align: center; }\n\nimg {\n  width: 100%; }\n\n.spacer {\n  height: 5em; }\n\n.gallery {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\nfigure {\n  flex: 1 0 260px;\n  margin: 20px 10px; }\n\nfigure a img {\n    width: 100%;\n    height: auto;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1hcHAvc3JjL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSSxXQUFXLEVBQUE7O0FBQ2Y7RUFBd0Isa0JBQWtCLEVBQUE7O0FBTTFDO0VBQUssV0FBVyxFQUFBOztBQUNoQjtFQUFTLFdBQVcsRUFBQTs7QUFFcEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQU9oQztFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFGbkI7SUFJSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHttYXJnaW46IDJlbTt9XG4ucHN3cF9fY2FwdGlvbl9fY2VudGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLy8gZmlndXJlIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICB3aWR0aDogMzMuMzMzJTtcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyB9XG5pbWcge3dpZHRoOiAxMDAlO31cbi5zcGFjZXIge2hlaWdodDogNWVtO31cblxuLmdhbGxlcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAvLyBmbGV4OiAxIDAgMzAwcHg7IC8qIGV4cGxhbmF0aW9uIGJlbG93ICovXG4gIC8vIG1hcmdpbjogNXB4O1xuICAvLyBoZWlnaHQ6IDMwMHB4O1xufVxuXG5maWd1cmUge1xuICBmbGV4OiAxIDAgMjYwcHg7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xuICBhIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_8__);







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
        jquery__WEBPACK_IMPORTED_MODULE_6__(function () {
            // Init empty gallery array
            var container = [];
            // Loop over gallery items and push it to the array
            jquery__WEBPACK_IMPORTED_MODULE_6__('.gallery').find('figure').each(function () {
                var $link = jquery__WEBPACK_IMPORTED_MODULE_6__(this).find('a'), item = {
                    src: $link.attr('href'),
                    w: $link.data('width'),
                    h: $link.data('height'),
                    title: $link.data('caption')
                };
                container.push(item);
            });
            // Define click event on gallery item
            jquery__WEBPACK_IMPORTED_MODULE_6__('.gallery a').click(function (event) {
                // Prevent location change
                event.preventDefault();
                // Define object and gallery options
                var $pswp = jquery__WEBPACK_IMPORTED_MODULE_6__('.pswp')[0], options = {
                    index: jquery__WEBPACK_IMPORTED_MODULE_6__(this).parent('figure').index(),
                    bgOpacity: 0.85,
                    showHideOpacity: true
                };
                // Initialize PhotoSwipe
                var gallery = new photoswipe__WEBPACK_IMPORTED_MODULE_7__($pswp, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_8__, container, options);
                gallery.init();
            });
        });
        this.galleryservice.getGalleryIds().subscribe(function (galleryIds) { return _this.galleryIds = galleryIds; });
        this.route.params
            .switchMap(function (params) { return _this.galleryservice.getGallery(+params['id']); }) // (+) converts string id to a number
            .subscribe(function (gallery) { _this.gallery = gallery; _this.setPrevNext(gallery.id); });
    };
    GalleryComponent.prototype.setPrevNext = function (galleryId) {
        var index = this.galleryIds.indexOf(galleryId);
        this.prev = this.galleryIds[(this.galleryIds.length + index - 1) % this.galleryIds.length];
        this.next = this.galleryIds[(this.galleryIds.length + index + 1) % this.galleryIds.length];
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_5__["GalleryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
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

module.exports = "<header data-color=\"intro\">\n\tlogo\n\t<h1>lorem ipsum boilerplate text intro</h1>\n</header>\n\n<div *ngIf=\"galleries\">\n\t<div *ngFor=\"let gallery of galleries\" [routerLink]=\"['/gallery', gallery.title, gallery.id]\">\n\t\t<h1>{{gallery.title | uppercase}}</h1>\n\t</div>\n</div>\n\n<!-- <div *ngFor= \"let gallery of galleries\" [routerLink]=\"['/gallery', gallery.id]\"></div>\n\t<h1>{{gallery.title | uppercase}}</h1>\n\n</div> -->\n<hr>\n<!-- <div *ngIf=\"gallery\">\n\t\t{{gallery.title | uppercase}}\n</div> -->\n<hr>\n<!-- <div *ngFor=\"let gallery of galleries\" [routerLink]=\"['/gallery', gallery.id]\"> \n\t{{gallery.title | uppercase}}\n</div> -->\n<hr>\n<!-- <div *ngFor= \"let gallery of galleries\" (click)=\"onSelect(gallery)\">\n\t\t<h1>{{gallery.title}}</h1>\n\t\n\t</div> -->\n\t\n\n<!-- <div *ngIf=\"selectedGallery\">\n    <h3>Selected Gallery</h3>\n     <h2>{{selectedGallery.title}}</h2>\n     <h2>{{selectedGallery.description}}</h2>\n   </div> -->\n <!-- <app-gallery></app-gallery> -->\n<!-- <app-gallery [gallery]=\"selectedGallery\"></app-gallery> -->\n\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nheader h1 {\n  text-align: center;\n  margin-top: 16vh;\n  margin-bottom: 21vh; }\n.row {\n  background-size: contain; }\n.row[data-color=\"fractures\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"photography\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"textures\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"paintings\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.gallery {\n  position: relative;\n  flex: none;\n  width: 30%;\n  height: calc(100vh - 16rem);\n  background-size: cover; }\n.gallery   .gallery_img {\n    width: 100%;\n    height: 100%; }\n.gallery .desc {\n    position: absolute;\n    bottom: 0;\n    padding-bottom: 5rem;\n    right: -15vw;\n    text-align: right;\n    width: 100%; }\n.gallery .desc h1 {\n      font-size: 5rem;\n      margin: 0;\n      font-family: 'salomeregular', Georgia, Serif; }\n.gallery .desc p {\n      font-size: 1.5rem; }\n.gallery.odd .desc {\n    text-align: right;\n    right: -15vw; }\n.gallery.even .desc {\n    text-align: left;\n    left: -15vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy90aGUtbW9uYXJxLWFwcC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0Usd0JBQXdCLEVBQUE7QUFEMUI7SUFHSSxnRUFBeUYsRUFBQTtBQUg3RjtJQU1JLGdFQUF5RixFQUFBO0FBTjdGO0lBU0ksZ0VBQXlGLEVBQUE7QUFUN0Y7SUFZSSxnRUFBeUYsRUFBQTtBQUk3RjtFQUNFLGtCQUFrQjtFQUNuQixVQUFVO0VBQ1YsVUFBVTtFQUNWLDJCQUEyQjtFQUMxQixzQkFBc0IsRUFBQTtBQUx4QjtJQU9JLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFSaEI7SUFXSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQTtBQWhCZjtNQWtCTSxlQUFlO01BQ2YsU0FBUztNQUNULDRDQUE0QyxFQUFBO0FBcEJsRDtNQXVCTSxpQkFBaUIsRUFBQTtBQXZCdkI7SUEyQkksaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtBQTVCaEI7SUErQkksZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmhlYWRlciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZ2aDtcbiAgbWFyZ2luLWJvdHRvbTogMjF2aDsgfVxuXG4ucm93IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XG4gIC5yb3dbZGF0YS1jb2xvcj1cImZyYWN0dXJlc1wiXSAuZ2FsbGVyeV9pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9wYXR0ZXJuX2Z1bGxfaW1nMTQ2LmpwZ1wiKSByZXBlYXQgdG9wIGxlZnQ7IH1cbiAgLnJvd1tkYXRhLWNvbG9yPVwicGhvdG9ncmFwaHlcIl0gLmdhbGxlcnlfaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGdcIikgcmVwZWF0IHRvcCBsZWZ0OyB9XG4gIC5yb3dbZGF0YS1jb2xvcj1cInRleHR1cmVzXCJdIC5nYWxsZXJ5X2ltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnXCIpIHJlcGVhdCB0b3AgbGVmdDsgfVxuICAucm93W2RhdGEtY29sb3I9XCJwYWludGluZ3NcIl0gLmdhbGxlcnlfaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGdcIikgcmVwZWF0IHRvcCBsZWZ0OyB9XG5cbi5nYWxsZXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiBub25lO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNnJlbSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cbiAgLmdhbGxlcnkgwqDCoC5nYWxsZXJ5X2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5nYWxsZXJ5IC5kZXNjIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICAgIHJpZ2h0OiAtMTV2dztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5nYWxsZXJ5IC5kZXNjIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnc2Fsb21lcmVndWxhcicsIEdlb3JnaWEsIFNlcmlmOyB9XG4gICAgLmdhbGxlcnkgLmRlc2MgcCB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTsgfVxuICAuZ2FsbGVyeS5vZGQgLmRlc2Mge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHJpZ2h0OiAtMTV2dzsgfVxuICAuZ2FsbGVyeS5ldmVuIC5kZXNjIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxlZnQ6IC0xNXZ3OyB9XG4iLCJoZWFkZXIgaDF7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZ2aDtcbiAgbWFyZ2luLWJvdHRvbTogMjF2aDtcbn1cbi5yb3d7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgJltkYXRhLWNvbG9yPVwiZnJhY3R1cmVzXCJdIC5nYWxsZXJ5X2ltZ3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9wYXR0ZXJuX2Z1bGxfaW1nMTQ2LmpwZycpIHJlcGVhdCB0b3AgbGVmdDtcbiAgfVxuICAmW2RhdGEtY29sb3I9XCJwaG90b2dyYXBoeVwiXSAuZ2FsbGVyeV9pbWd7XG4gICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGcnKSByZXBlYXQgdG9wIGxlZnQ7XG4gIH1cbiAgJltkYXRhLWNvbG9yPVwidGV4dHVyZXNcIl0gLmdhbGxlcnlfaW1ne1xuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnJykgcmVwZWF0IHRvcCBsZWZ0O1xuICB9XG4gICZbZGF0YS1jb2xvcj1cInBhaW50aW5nc1wiXSAuZ2FsbGVyeV9pbWd7XG4gICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGcnKSByZXBlYXQgdG9wIGxlZnQ7XG4gIH1cbn1cblxuLmdhbGxlcnl7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZmxleDogbm9uZTtcblx0d2lkdGg6IDMwJTtcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZyZW0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuwqDCoC5nYWxsZXJ5X2ltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmRlc2N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICByaWdodDogLTE1dnc7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaDF7XG4gICAgICBmb250LXNpemU6IDVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LWZhbWlseTogJ3NhbG9tZXJlZ3VsYXInLCBHZW9yZ2lhLCBTZXJpZjtcbiAgICB9XG4gICAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgfVxuICAmLm9kZCAuZGVzY3tcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICByaWdodDogLTE1dnc7XG4gIH1cbiAgJi5ldmVuIC5kZXNje1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGVmdDogLTE1dnc7XG4gIH1cbn1cblxuXG5cblxuIl19 */"

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
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__["GALLERIES"]).delay(2000);
    };
    GalleryService.prototype.getGallery = function (id) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__["GALLERIES"].filter(function (gallery) { return (gallery.id === id); })[0]).delay(2000);
    };
    GalleryService.prototype.getGalleryIds = function () {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(src_app_shared_galleries__WEBPACK_IMPORTED_MODULE_2__["GALLERIES"].map(function (gallery) { return gallery.id; }));
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
                src: "https://unsplash.it/1200/900/?image=702",
                w: 1200,
                h: 900,
                title: "Sea side, south shore"
            },
            {
                src: "https://unsplash.it/1200/900/?image=695",
                w: 1200,
                h: 900,
                title: "Image Caption 1"
            },
            {
                src: "https://unsplash.it/1200/900/?image=675",
                w: 1200,
                h: 900,
                title: "Image Caption 2"
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
                src: "https://unsplash.it/1200/900/?image=702",
                w: 1200,
                h: 900,
                title: "Sea side, south shore"
            },
            {
                src: "https://unsplash.it/1200/900/?image=695",
                w: 1200,
                h: 900,
                title: "Image Caption"
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

module.exports = "<nav class=\"navbar\">\n\n  <!-- logo -->\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\">\n      <img src=\"assets/images/logo-nav@2x.png\">\n    </a>\n  </div>\n\n  <!-- menu -->\n  <div class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      <a class=\"navbar-item\" routerLink=\"\">Home</a>\n      <a class=\"navbar-item\" routerLink=\"gallery\">Gallery</a>\n      <a class=\"navbar-item\" routerLink=\"contact\">Contact</a>\n      <a class=\"navbar-item\" routerLink=\"about\">About</a>\n    </div>\n  </div>\n\n</nav>"

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

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/the-monarq-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map