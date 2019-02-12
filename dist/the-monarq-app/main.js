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

module.exports = "        <span>\n            <h1 class=\"text-center\">\n                {{gallery.title | uppercase}}\n            </h1>\n            <p>{{gallery.description}}    \n        </span>\n  \n        <!-- Galley wrapper that contains all items -->\n        <div id=\"gallery\" class=\"gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n          <!-- Use figure for a more semantic html -->\n          <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\"  *ngFor=\"let slide of gallery.slides\">\n            <!-- Link to the big image, not mandatory, but usefull when there is no JS -->\n            <a href=\"https://unsplash.it/1200/900/?image=702\" attr.data-caption=\"{{slide.title}}>\" data-width=\"1200\" data-height=\"900\" itemprop=\"contentUrl\">\n              <!-- Thumbnail -->\n              <img src=\"https://unsplash.it/400/300/?image=702\" itemprop=\"thumbnail\" alt=\"Image description\">\n            </a>\n          </figure>\n\n        </div>\n\n\n\n\n<hr>\n\n  <!-- Some spacing 😉 -->\n  <div class=\"spacer\"></div>\n  \n  \n  <!-- Root element of PhotoSwipe. Must have class pswp. -->\n  <div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <!-- Background of PhotoSwipe. \n             It's a separate element as animating opacity is faster than rgba(). -->\n    <div class=\"pswp__bg\"></div>\n    <!-- Slides wrapper with overflow:hidden. -->\n    <div class=\"pswp__scroll-wrap\">\n      <!-- Container that holds slides. \n                PhotoSwipe keeps only 3 of them in the DOM to save memory.\n                Don't modify these 3 pswp__item elements, data is added later on. -->\n      <div class=\"pswp__container\">\n        <div class=\"pswp__item\"></div>\n        <div class=\"pswp__item\"></div>\n        <div class=\"pswp__item\"></div>\n      </div>\n      <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n      <div class=\"pswp__ui pswp__ui--hidden\">\n        <div class=\"pswp__top-bar\">\n          <!--  Controls are self-explanatory. Order can be changed. -->\n          <div class=\"pswp__counter\"></div>\n          <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n          <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n          <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n          <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n          <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n          <!-- element will get class pswp__preloader--active when preloader is running -->\n          <div class=\"pswp__preloader\">\n            <div class=\"pswp__preloader__icn\">\n              <div class=\"pswp__preloader__cut\">\n                <div class=\"pswp__preloader__donut\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n          <div class=\"pswp__share-tooltip\"></div>\n        </div>\n        <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n        </button>\n        <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n        </button>\n        <div class=\"pswp__caption\">\n          <div class=\"pswp__caption__center\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  \n  \n"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 2em; }\n\n.pswp__caption__center {\n  text-align: center; }\n\nimg {\n  width: 100%; }\n\n.spacer {\n  height: 5em; }\n\n.gallery {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\nfigure {\n  flex: 1 0 260px;\n  margin: 20px 10px; }\n\nfigure a img {\n    width: 100%;\n    height: auto;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1zaXRlL3NyYy9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUksV0FBVyxFQUFBOztBQUNmO0VBQXdCLGtCQUFrQixFQUFBOztBQU0xQztFQUFLLFdBQVcsRUFBQTs7QUFDaEI7RUFBUyxXQUFXLEVBQUE7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFPaEM7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRm5CO0lBSUksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7bWFyZ2luOiAyZW07fVxuLnBzd3BfX2NhcHRpb25fX2NlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cbi8vIGZpZ3VyZSB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgd2lkdGg6IDMzLjMzMyU7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gfVxuaW1nIHt3aWR0aDogMTAwJTt9XG4uc3BhY2VyIHtoZWlnaHQ6IDVlbTt9XG5cbi5nYWxsZXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLy8gZmxleDogMSAwIDMwMHB4OyAvKiBleHBsYW5hdGlvbiBiZWxvdyAqL1xuICAvLyBtYXJnaW46IDVweDtcbiAgLy8gaGVpZ2h0OiAzMDBweDtcbn1cblxuZmlndXJlIHtcbiAgZmxleDogMSAwIDI2MHB4O1xuICBtYXJnaW46IDIwcHggMTBweDtcbiAgYSBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */"

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
        this.galleryservice.getGalleryIds().subscribe(function (galleryIds) { return _this.galleryIds = galleryIds; });
        this.route.params
            .switchMap(function (params) { return _this.galleryservice.getGallery(+params['id']); }) // (+) converts string id to a number
            .subscribe(function (gallery) { _this.gallery = gallery; _this.setPrevNext(gallery.id); });
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

module.exports = "@charset \"UTF-8\";\nheader h1 {\n  text-align: center;\n  margin-top: 16vh;\n  margin-bottom: 21vh; }\n.row {\n  background-size: contain; }\n.row[data-color=\"fractures\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"photography\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"textures\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.row[data-color=\"paintings\"] .gallery_img {\n    background: url('thumb_pattern_full_img146.jpg') repeat top left; }\n.gallery {\n  position: relative;\n  flex: none;\n  width: 30%;\n  height: calc(100vh - 16rem);\n  background-size: cover; }\n.gallery   .gallery_img {\n    width: 100%;\n    height: 100%; }\n.gallery .desc {\n    position: absolute;\n    bottom: 0;\n    padding-bottom: 5rem;\n    right: -15vw;\n    text-align: right;\n    width: 100%; }\n.gallery .desc h1 {\n      font-size: 5rem;\n      margin: 0;\n      font-family: 'salomeregular', Georgia, Serif; }\n.gallery .desc p {\n      font-size: 1.5rem; }\n.gallery.odd .desc {\n    text-align: right;\n    right: -15vw; }\n.gallery.even .desc {\n    text-align: left;\n    left: -15vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy90aGUtbW9uYXJxLXNpdGUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtBQUVyQjtFQUNFLHdCQUF3QixFQUFBO0FBRDFCO0lBR0ksZ0VBQXlGLEVBQUE7QUFIN0Y7SUFNSSxnRUFBeUYsRUFBQTtBQU43RjtJQVNJLGdFQUF5RixFQUFBO0FBVDdGO0lBWUksZ0VBQXlGLEVBQUE7QUFJN0Y7RUFDRSxrQkFBa0I7RUFDbkIsVUFBVTtFQUNWLFVBQVU7RUFDViwyQkFBMkI7RUFDMUIsc0JBQXNCLEVBQUE7QUFMeEI7SUFPSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0FBUmhCO0lBV0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXLEVBQUE7QUFoQmY7TUFrQk0sZUFBZTtNQUNmLFNBQVM7TUFDVCw0Q0FBNEMsRUFBQTtBQXBCbEQ7TUF1Qk0saUJBQWlCLEVBQUE7QUF2QnZCO0lBMkJJLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7QUE1QmhCO0lBK0JJLGdCQUFnQjtJQUNoQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5oZWFkZXIgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2dmg7XG4gIG1hcmdpbi1ib3R0b206IDIxdmg7IH1cblxuLnJvdyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxuICAucm93W2RhdGEtY29sb3I9XCJmcmFjdHVyZXNcIl0gLmdhbGxlcnlfaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGdcIikgcmVwZWF0IHRvcCBsZWZ0OyB9XG4gIC5yb3dbZGF0YS1jb2xvcj1cInBob3RvZ3JhcGh5XCJdIC5nYWxsZXJ5X2ltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnXCIpIHJlcGVhdCB0b3AgbGVmdDsgfVxuICAucm93W2RhdGEtY29sb3I9XCJ0ZXh0dXJlc1wiXSAuZ2FsbGVyeV9pbWcge1xuICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9wYXR0ZXJuX2Z1bGxfaW1nMTQ2LmpwZ1wiKSByZXBlYXQgdG9wIGxlZnQ7IH1cbiAgLnJvd1tkYXRhLWNvbG9yPVwicGFpbnRpbmdzXCJdIC5nYWxsZXJ5X2ltZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnXCIpIHJlcGVhdCB0b3AgbGVmdDsgfVxuXG4uZ2FsbGVyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTZyZW0pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG4gIC5nYWxsZXJ5IMKgwqAuZ2FsbGVyeV9pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAuZ2FsbGVyeSAuZGVzYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICByaWdodDogLTE1dnc7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuZ2FsbGVyeSAuZGVzYyBoMSB7XG4gICAgICBmb250LXNpemU6IDVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LWZhbWlseTogJ3NhbG9tZXJlZ3VsYXInLCBHZW9yZ2lhLCBTZXJpZjsgfVxuICAgIC5nYWxsZXJ5IC5kZXNjIHAge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07IH1cbiAgLmdhbGxlcnkub2RkIC5kZXNjIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICByaWdodDogLTE1dnc7IH1cbiAgLmdhbGxlcnkuZXZlbiAuZGVzYyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZWZ0OiAtMTV2dzsgfVxuIiwiaGVhZGVyIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2dmg7XG4gIG1hcmdpbi1ib3R0b206IDIxdmg7XG59XG4ucm93e1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICZbZGF0YS1jb2xvcj1cImZyYWN0dXJlc1wiXSAuZ2FsbGVyeV9pbWd7XG4gICAgYmFja2dyb3VuZDogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy90aHVtYnMvdGh1bWJfcGF0dGVybl9mdWxsX2ltZzE0Ni5qcGcnKSByZXBlYXQgdG9wIGxlZnQ7XG4gIH1cbiAgJltkYXRhLWNvbG9yPVwicGhvdG9ncmFwaHlcIl0gLmdhbGxlcnlfaW1ne1xuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnJykgcmVwZWF0IHRvcCBsZWZ0O1xuICB9XG4gICZbZGF0YS1jb2xvcj1cInRleHR1cmVzXCJdIC5nYWxsZXJ5X2ltZ3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9wYXR0ZXJuX2Z1bGxfaW1nMTQ2LmpwZycpIHJlcGVhdCB0b3AgbGVmdDtcbiAgfVxuICAmW2RhdGEtY29sb3I9XCJwYWludGluZ3NcIl0gLmdhbGxlcnlfaW1ne1xuICAgIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX3BhdHRlcm5fZnVsbF9pbWcxNDYuanBnJykgcmVwZWF0IHRvcCBsZWZ0O1xuICB9XG59XG5cbi5nYWxsZXJ5e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZsZXg6IG5vbmU7XG5cdHdpZHRoOiAzMCU7XG5cdGhlaWdodDogY2FsYygxMDB2aCAtIDE2cmVtKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbsKgwqAuZ2FsbGVyeV9pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5kZXNje1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gICAgcmlnaHQ6IC0xNXZ3O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGgxe1xuICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6ICdzYWxvbWVyZWd1bGFyJywgR2VvcmdpYSwgU2VyaWY7XG4gICAgfVxuICAgIHB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gIH1cbiAgJi5vZGQgLmRlc2N7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcmlnaHQ6IC0xNXZ3O1xuICB9XG4gICYuZXZlbiAuZGVzY3tcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxlZnQ6IC0xNXZ3O1xuICB9XG59XG5cblxuXG5cbiJdfQ== */"

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
                title: "Sea side, south shore"
            },
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Image Caption 1"
            },
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
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
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Sea side, south shore"
            },
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
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

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/the-monarq-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map