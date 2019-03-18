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
        path: 'gallery/:title/default',
        redirectTo: 'gallery/:title'
    },
    {
        path: 'gallery/:title/:album',
        component: _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
    },
    {
        path: 'gallery/:title',
        component: _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"]
    },
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

module.exports = "<!-- header -->\n<app-header></app-header>\n\n<main>\n    <!-- routes will be rendered here -->\n    <router-outlet></router-outlet>\n</main>\n"

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

module.exports = "<div class=\"wrapper\">\n    change layout to be\n    <br>    \n    circle bio pick\n    <br>\n    bio side by side with cv link to pdf social links\n    <br>\n    include cv at bottom?\n    \n    <div class=\"bio\">\n        <h1>Welcome</h1>\n        <p>“Since then, there has been considerable improvement. However, although women artists are now being exhibited more, their work is still not valued to the extent of the male artists’. We are still a psychological and cultural distance away from recognizing and valuing them.”</p>\n\n        <p>Earlier this year, Culture Type exhibition listings in the spring and summer included just a few shows devoted to black female artists. Far from exhaustive, the roundups were representative of the exhibitions on view at the time. Echoing Weems, “there has been considerable improvement” this fall, the season when art institutions generally present their marquee shows. But, as the artist’s comments also indicate, any sense of parity remains elusive.</p>\n                \n        <p> This selection of fall 2015 exhibitions features artists spanning three generations and represents many “firsts,” including “Dead Treez” at the Museum of Arts and Design, Ebony G. Patterson‘s first monographic museum show in New York (shown above):</p>\n    </div>\n    <div class=\"socialLinks\">links</div>\n    <aside>\n        <img src=\"https://picsum.photos/200/300/?random\" alt=\"\">\n    </aside>\n    <footer>Footer</footer>\n  </div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".socialLinks {\n  grid-area: socialLinks;\n  padding: 20px;\n  grid-template-rows: 100px 1fr; }\n\n.bio {\n  grid-area: bio;\n  padding: 20px; }\n\naside {\n  grid-area: sidebar; }\n\nfooter {\n  padding: 20px;\n  grid-area: footer; }\n\n.wrapper {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 3fr 1fr;\n  grid-template-areas: \"bio sidebar\"    \"bio socialLinks\"  \"footer footer\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1zaXRlL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFFdEIsYUFBYTtFQUNiLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLGNBQWM7RUFFZCxhQUFhLEVBQUE7O0FBRWY7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsd0VBR2lCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWxMaW5rcyB7XG4gIGdyaWQtYXJlYTogc29jaWFsTGlua3M7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZWQzMzA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xufVxuLmJpbyB7XG4gIGdyaWQtYXJlYTogYmlvO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBiZjZiO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuYXNpZGUge1xuICBncmlkLWFyZWE6IHNpZGViYXI7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICM0NWFhZjI7XG4gIFxufVxuZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZDk2NDQ7XG59XG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJiaW8gc2lkZWJhclwiICAgXG4gICAgXCJiaW8gc29jaWFsTGlua3NcIiBcbiAgICBcImZvb3RlciBmb290ZXJcIjtcbn0iXX0= */"

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

module.exports = "<span *ngIf=\"gallery !== undefined\">\n    <h1 class=\"text-center\">\n        {{gallery.title | uppercase}}\n    </h1>\n  <p>{{gallery.description}}</p>\n  <div *ngIf=\"albums && album === 'default'\">\n    <h4>Gallery Albums</h4>\n    <p *ngFor=\"let alb of albums\"><a [routerLink]=\"['/gallery',gallery.title,alb]\">{{alb}}</a></p>\n  </div>\n</span>\n\n<!-- Galley wrapper that contains all items -->\n<div *ngIf=\"gallery !== undefined\" id=\"gallery\" class=\"gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n  <!-- Use figure for a more semantic html -->\n\n\n  <span class=\"slide_thumbs\" *ngFor=\"let slide of activeSlides; let i = index;\">\n    <span *ngIf=\"slide.album == 'default' || album == slide.album\">\n      <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\" >\n        <!-- Link to the big image, not mandatory, but usefull when there is no JS -->\n        <a [href]=\"\" (click)=\"carousel(slide)\"  attr.data-caption=\"{{slide.title}}>\" itemprop=\"contentUrl\" attr.data-width=\"{{slide.w}}\" attr.data-height=\"{{slide.h}}\">\n          <!-- Thumbnail -->\n          <img [src]=\"slide.src\" itemprop=\"thumbnail\" alt=\"Image description\" [width]=\"slide.w\" [height]=\"slide.h\">\n        </a>\n      </figure>\n    </span>\n  </span>\n  <span *ngIf=\"albums.length > 1 && albums[0] !== '' && album == 'default'\">\n    <span class=\"slide_thumbs\" *ngFor=\"let alb2 of albums; let j = index;\">\n\n        <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\" >\n          <!-- Link to the big image, not mandatory, but usefull when there is no JS -->\n          <a [href]=\"\" (click)=\"galleryCarousel(alb2)\"  attr.data-caption=\"{{alb}}>\" itemprop=\"contentUrl\" attr.data-width=\"{{slide.w}}\" attr.data-height=\"{{slide.h}}\">\n            <!-- Thumbnail -->\n            <img [src]=\"getFirstImage(alb2)\" itemprop=\"thumbnail\" alt=\"Image description\" [width]=\"slide.w\" [height]=\"slide.h\">\n          </a>\n        </figure>\n      </span>\n    </span>\n\n</div>\n<hr>\n\n<!-- Some spacing 😉 -->\n<div class=\"spacer\"></div>\n\n\n<!-- Root element of PhotoSwipe. Must have class pswp. -->\n<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n<!-- Background of PhotoSwipe. \n     It's a separate element as animating opacity is faster than rgba(). -->\n<div class=\"pswp__bg\"></div>\n<!-- Slides wrapper with overflow:hidden. -->\n<div class=\"pswp__scroll-wrap\">\n<!-- Container that holds slides. \n        PhotoSwipe keeps only 3 of them in the DOM to save memory.\n        Don't modify these 3 pswp__item elements, data is added later on. -->\n<div class=\"pswp__container\">\n<div class=\"pswp__item\"></div>\n<div class=\"pswp__item\"></div>\n<div class=\"pswp__item\"></div>\n</div>\n<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n<div class=\"pswp__ui pswp__ui--hidden\">\n<div class=\"pswp__top-bar\">\n  <!--  Controls are self-explanatory. Order can be changed. -->\n  <div class=\"pswp__counter\"></div>\n  <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n  <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n  <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n  <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n  <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n  <!-- element will get class pswp__preloader--active when preloader is running -->\n  <div class=\"pswp__preloader\">\n    <div class=\"pswp__preloader__icn\">\n      <div class=\"pswp__preloader__cut\">\n        <div class=\"pswp__preloader__donut\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n  <div class=\"pswp__share-tooltip\"></div>\n</div>\n<button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n</button>\n<button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n</button>\n<div class=\"pswp__caption\">\n  <div class=\"pswp__caption__center\"></div>\n</div>\n</div>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\tStyles for basic PhotoSwipe functionality (sliding area, open/close transitions)\n*/\n/* pswp = photoswipe */\n.pswp {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  touch-action: none;\n  z-index: 1500;\n  -webkit-text-size-adjust: 100%;\n  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */\n  -webkit-backface-visibility: hidden;\n  outline: none; }\n.pswp * {\n    box-sizing: border-box; }\n.pswp img {\n    max-width: none; }\n/* style is added when JS option showHideOpacity is set to true */\n.pswp--animate_opacity {\n  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */\n  opacity: 0.001;\n  will-change: opacity;\n  /* for open/close transition */\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp--open {\n  display: block; }\n.pswp--zoom-allowed .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n.pswp--zoomed-in .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab; }\n.pswp--dragging .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing; }\n/*\n\tBackground is added as a separate element.\n\tAs animating opacity is much faster than animating rgba() background-color.\n*/\n.pswp__bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n.pswp__scroll-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n.pswp__container,\n.pswp__zoom-wrap {\n  touch-action: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n/* Prevent selection and tap highlights */\n.pswp__container,\n.pswp__img {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-touch-callout: none; }\n.pswp__zoom-wrap {\n  position: absolute;\n  width: 100%;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  /* for open/close transition */\n  transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1), -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp__bg {\n  will-change: opacity;\n  /* for open/close transition */\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp--animated-in .pswp__bg,\n.pswp--animated-in .pswp__zoom-wrap {\n  transition: none; }\n.pswp__container,\n.pswp__zoom-wrap {\n  -webkit-backface-visibility: hidden; }\n.pswp__item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden; }\n.pswp__img {\n  position: absolute;\n  width: auto;\n  height: auto;\n  top: 0;\n  left: 0; }\n/*\n\tstretched thumbnail or div placeholder element (see below)\n\tstyle is added to avoid flickering in webkit/blink when layers overlap\n*/\n.pswp__img--placeholder {\n  -webkit-backface-visibility: hidden; }\n/*\n\tdiv element that matches size of large image\n\tlarge image loads on top of it\n*/\n.pswp__img--placeholder--blank {\n  background: #222; }\n.pswp--ie .pswp__img {\n  width: 100% !important;\n  height: auto !important;\n  left: 0;\n  top: 0; }\n/*\n\tError message appears when image is not loaded\n\t(JS option errorMsg controls markup)\n*/\n.pswp__error-msg {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  margin-top: -8px;\n  color: #CCC; }\n.pswp__error-msg a {\n  color: #CCC;\n  text-decoration: underline; }\n/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\n\tContents:\n\n\t1. Buttons\n\t2. Share modal and links\n\t3. Index indicator (\"1 of X\" counter)\n\t4. Caption\n\t5. Loading indicator\n\t6. Additional styles (root element, top bar, idle state, hidden state, etc.)\n\n*/\n/*\n\t\n\t1. Buttons\n\n */\n/* <button> css reset */\n.pswp__button {\n  width: 44px;\n  height: 44px;\n  position: relative;\n  background: none;\n  cursor: pointer;\n  overflow: visible;\n  -webkit-appearance: none;\n  display: block;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  float: right;\n  opacity: 0.75;\n  transition: opacity 0.2s;\n  box-shadow: none; }\n.pswp__button:focus, .pswp__button:hover {\n    opacity: 1; }\n.pswp__button:active {\n    outline: none;\n    opacity: 0.9; }\n.pswp__button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n/* pswp__ui--over-close class it added when mouse is over element that should close gallery */\n.pswp__ui--over-close .pswp__button--close {\n  opacity: 1; }\n.pswp__button,\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  background: url('default-skin.png') 0 0 no-repeat;\n  background-size: 264px 88px;\n  width: 44px;\n  height: 44px; }\n@media (-webkit-min-device-pixel-ratio: 1.1), (-webkit-min-device-pixel-ratio: 1.09375), (min-resolution: 105dpi), (min-resolution: 1.1dppx) {\n  /* Serve SVG sprite if browser supports SVG and resolution is more than 105dpi */\n  .pswp--svg .pswp__button,\n  .pswp--svg .pswp__button--arrow--left:before,\n  .pswp--svg .pswp__button--arrow--right:before {\n    background-image: url('default-skin.svg'); }\n  .pswp--svg .pswp__button--arrow--left,\n  .pswp--svg .pswp__button--arrow--right {\n    background: none; } }\n.pswp__button--close {\n  background-position: 0 -44px; }\n.pswp__button--share {\n  background-position: -44px -44px; }\n.pswp__button--fs {\n  display: none; }\n.pswp--supports-fs .pswp__button--fs {\n  display: block; }\n.pswp--fs .pswp__button--fs {\n  background-position: -44px 0; }\n.pswp__button--zoom {\n  display: none;\n  background-position: -88px 0; }\n.pswp--zoom-allowed .pswp__button--zoom {\n  display: block; }\n.pswp--zoomed-in .pswp__button--zoom {\n  background-position: -132px 0; }\n/* no arrows on touch screens */\n.pswp--touch .pswp__button--arrow--left,\n.pswp--touch .pswp__button--arrow--right {\n  visibility: hidden; }\n/*\n\tArrow buttons hit area\n\t(icon is added to :before pseudo-element)\n*/\n.pswp__button--arrow--left,\n.pswp__button--arrow--right {\n  background: none;\n  top: 50%;\n  margin-top: -50px;\n  width: 70px;\n  height: 100px;\n  position: absolute; }\n.pswp__button--arrow--left {\n  left: 0; }\n.pswp__button--arrow--right {\n  right: 0; }\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  content: '';\n  top: 35px;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 30px;\n  width: 32px;\n  position: absolute; }\n.pswp__button--arrow--left:before {\n  left: 6px;\n  background-position: -138px -44px; }\n.pswp__button--arrow--right:before {\n  right: 6px;\n  background-position: -94px -44px; }\n/*\n\n\t2. Share modal/popup and links\n\n */\n.pswp__counter,\n.pswp__share-modal {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n.pswp__share-modal {\n  display: block;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  position: absolute;\n  z-index: 1600;\n  opacity: 0;\n  transition: opacity 0.25s ease-out;\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n.pswp__share-modal--hidden {\n  display: none; }\n.pswp__share-tooltip {\n  z-index: 1620;\n  position: absolute;\n  background: #FFF;\n  top: 56px;\n  border-radius: 2px;\n  display: block;\n  width: auto;\n  right: 44px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  -webkit-transform: translateY(6px);\n          transform: translateY(6px);\n  transition: -webkit-transform 0.25s;\n  transition: transform 0.25s;\n  transition: transform 0.25s, -webkit-transform 0.25s;\n  -webkit-backface-visibility: hidden;\n  will-change: transform; }\n.pswp__share-tooltip a {\n    display: block;\n    padding: 8px 12px;\n    color: #000;\n    text-decoration: none;\n    font-size: 14px;\n    line-height: 18px; }\n.pswp__share-tooltip a:hover {\n      text-decoration: none;\n      color: #000; }\n.pswp__share-tooltip a:first-child {\n      /* round corners on the first/last list item */\n      border-radius: 2px 2px 0 0; }\n.pswp__share-tooltip a:last-child {\n      border-radius: 0 0 2px 2px; }\n.pswp__share-modal--fade-in {\n  opacity: 1; }\n.pswp__share-modal--fade-in .pswp__share-tooltip {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n/* increase size of share links on touch devices */\n.pswp--touch .pswp__share-tooltip a {\n  padding: 16px 12px; }\na.pswp__share--facebook:before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -12px;\n  right: 15px;\n  border: 6px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #FFF;\n  -webkit-pointer-events: none;\n  -moz-pointer-events: none;\n  pointer-events: none; }\na.pswp__share--facebook:hover {\n  background: #3E5C9A;\n  color: #FFF; }\na.pswp__share--facebook:hover:before {\n    border-bottom-color: #3E5C9A; }\na.pswp__share--twitter:hover {\n  background: #55ACEE;\n  color: #FFF; }\na.pswp__share--pinterest:hover {\n  background: #CCC;\n  color: #CE272D; }\na.pswp__share--download:hover {\n  background: #DDD; }\n/*\n\n\t3. Index indicator (\"1 of X\" counter)\n\n */\n.pswp__counter {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 44px;\n  font-size: 13px;\n  line-height: 44px;\n  color: #FFF;\n  opacity: 0.75;\n  padding: 0 10px; }\n/*\n\t\n\t4. Caption\n\n */\n.pswp__caption {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  min-height: 44px; }\n.pswp__caption small {\n    font-size: 11px;\n    color: #BBB; }\n.pswp__caption__center {\n  text-align: left;\n  max-width: 420px;\n  margin: 0 auto;\n  font-size: 13px;\n  padding: 10px;\n  line-height: 20px;\n  color: #CCC; }\n.pswp__caption--empty {\n  display: none; }\n/* Fake caption element, used to calculate height of next/prev image */\n.pswp__caption--fake {\n  visibility: hidden; }\n/*\n\n\t5. Loading indicator (preloader)\n\n\tYou can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR\n\n */\n.pswp__preloader {\n  width: 44px;\n  height: 44px;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -22px;\n  opacity: 0;\n  transition: opacity 0.25s ease-out;\n  will-change: opacity;\n  direction: ltr; }\n.pswp__preloader__icn {\n  width: 20px;\n  height: 20px;\n  margin: 12px; }\n.pswp__preloader--active {\n  opacity: 1; }\n.pswp__preloader--active .pswp__preloader__icn {\n    /* We use .gif in browsers that don't support CSS animation */\n    background: url('preloader.gif') 0 0 no-repeat; }\n.pswp--css_animation .pswp__preloader--active {\n  opacity: 1; }\n.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {\n    -webkit-animation: clockwise 500ms linear infinite;\n            animation: clockwise 500ms linear infinite; }\n.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {\n    -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;\n            animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite; }\n.pswp--css_animation .pswp__preloader__icn {\n  background: none;\n  opacity: 0.75;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  margin: 0; }\n.pswp--css_animation .pswp__preloader__cut {\n  /* \n\t\t\tThe idea of animating inner circle is based on Polymer (\"material\") loading indicator \n\t\t\t by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html\n\t\t*/\n  position: relative;\n  width: 7px;\n  height: 14px;\n  overflow: hidden; }\n.pswp--css_animation .pswp__preloader__donut {\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: none;\n  margin: 0; }\n@media screen and (max-width: 1024px) {\n  .pswp__preloader {\n    position: relative;\n    left: auto;\n    top: auto;\n    margin: 0;\n    float: right; } }\n@-webkit-keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@-webkit-keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); } }\n@keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); } }\n/*\n\t\n\t6. Additional styles\n\n */\n/* root element of UI */\n.pswp__ui {\n  -webkit-font-smoothing: auto;\n  visibility: visible;\n  opacity: 1;\n  z-index: 1550; }\n/* top black bar with buttons and \"1 of X\" indicator */\n.pswp__top-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 44px;\n  width: 100%; }\n.pswp__caption,\n.pswp__top-bar,\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  -webkit-backface-visibility: hidden;\n  will-change: opacity;\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n/* pswp--has_mouse class is added only when two subsequent mousemove events occur */\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  visibility: visible; }\n.pswp__top-bar,\n.pswp__caption {\n  background-color: rgba(0, 0, 0, 0.5); }\n/* pswp__ui--fit class is added when main image \"fits\" between top bar and bottom bar (caption) */\n.pswp__ui--fit .pswp__top-bar,\n.pswp__ui--fit .pswp__caption {\n  background-color: rgba(0, 0, 0, 0.3); }\n/* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */\n.pswp__ui--idle .pswp__top-bar {\n  opacity: 0; }\n.pswp__ui--idle .pswp__button--arrow--left,\n.pswp__ui--idle .pswp__button--arrow--right {\n  opacity: 0; }\n/*\n\tpswp__ui--hidden class is added when controls are hidden\n\te.g. when user taps to toggle visibility of controls\n*/\n.pswp__ui--hidden .pswp__top-bar,\n.pswp__ui--hidden .pswp__caption,\n.pswp__ui--hidden .pswp__button--arrow--left,\n.pswp__ui--hidden .pswp__button--arrow--right {\n  /* Force paint & create composition layer for controls. */\n  opacity: 0.001; }\n/* pswp__ui--one-slide class is added when there is just one item in gallery */\n.pswp__ui--one-slide .pswp__button--arrow--left,\n.pswp__ui--one-slide .pswp__button--arrow--right,\n.pswp__ui--one-slide .pswp__counter {\n  display: none; }\n.pswp__element--disabled {\n  display: none !important; }\n.pswp--minimal--dark .pswp__top-bar {\n  background: none; }\nh1 {\n  margin: 2em; }\n.pswp__caption__center {\n  text-align: center; }\n.pswp--open {\n  color: #ffffff; }\n.pswp--animate_opacity,\n.pswp__bg,\n.pswp__caption,\n.pswp__top-bar,\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\nfigure {\n  display: inline-block;\n  width: 33.333%;\n  float: left; }\nimg {\n  width: 100%; }\n.spacer {\n  height: 5em; }\n.gallery {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-auto-rows: 250px; }\n.gallery .slide_thumbs .slide_thumbs_holder, .gallery .slide_thumbs img, .gallery .slide_thumbs figure {\n    width: 100%;\n    height: 100%;\n    display: block; }\n.gallery .slide_thumbs figure {\n    margin: 0;\n    transition: all .3s; }\n.gallery .slide_thumbs figure:hover {\n      cursor: pointer;\n      box-shadow: 6px 6px 18px 0px rgba(0, 0, 0, 0.3); }\n.gallery .slide_thumbs figure img {\n      -o-object-fit: cover;\n         object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1zaXRlL3NyYy9hc3NldHMvY3NzL3Bob3Rvc3dpcGUvbWFpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3RoZS1tb25hcnEtc2l0ZS9zcmMvYXNzZXRzL2Nzcy9waG90b3N3aXBlL19tYWluLXNldHRpbmdzLnNjc3MiLCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3RoZS1tb25hcnEtc2l0ZS9zcmMvYXNzZXRzL2Nzcy9waG90b3N3aXBlL2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4uc2NzcyIsIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1zaXRlL3NyYy9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUFBO0FBRUE7O0NDQ0M7QURRRCxzQkFBQTtBQUNBO0VBQ0MsYUFBYTtFQUNiLGtCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU07RUFDTixNQUFLO0VBQ0wsZ0JBQWdCO0VBRWhCLGtCQUFrQjtFQUNsQixhRWpCd0I7RUZrQnhCLDhCQUE4QjtFQUM5Qiw2RUFBQTtFQUNBLG1DQUFtQztFQUNuQyxhQUFhLEVBQUE7QUFkZDtJQWtCRyxzQkFBc0IsRUFBQTtBQWxCekI7SUF1QkUsZUFBZSxFQUFBO0FBSWpCLGlFQUFBO0FBQ0E7RUFDQyxtR0FBQTtFQUNBLGNBQWM7RUFDZCxvQkFBbUI7RUFDbkIsOEJBQUE7RUFDQSx1REFBaUYsRUFBQTtBQUdsRjtFQUNDLGNBQWMsRUFBQTtBQUdmO0VBQ0Msc0JBQUE7RUFDQSx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGVBQWUsRUFBQTtBQUdoQjtFQUNDLHNCQUFBO0VBQ0Esb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZ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LG1CQUFtQixFQUFBO0FBZnRCO01BaUJJLGVBQWU7TUFDZiwrQ0FBNEMsRUFBQTtBQWxCaEQ7TUFxQkksb0JBQWlCO1NBQWpCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIFBob3RvU3dpcGUgbWFpbiBDU1MgYnkgRG1pdHJ5IFNlbWVub3YgfCBwaG90b3N3aXBlLmNvbSB8IE1JVCBsaWNlbnNlICovXG5cbi8qXG5cdFN0eWxlcyBmb3IgYmFzaWMgUGhvdG9Td2lwZSBmdW5jdGlvbmFsaXR5IChzbGlkaW5nIGFyZWEsIG9wZW4vY2xvc2UgdHJhbnNpdGlvbnMpXG4qL1xuXG4vLyBQaG90b1N3aXBlIHVzZXMgQXV0b3ByZWZpeGVyLCBzbyB2ZW5kb3IgcHJlZml4ZWQgYXJlIGFkZGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBuZWVkZWQuXG5cbkBpbXBvcnQgXCJtYWluLXNldHRpbmdzXCI7XG5cbiBcbi8qIHBzd3AgPSBwaG90b3N3aXBlICovXG4ucHN3cCB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRsZWZ0OjA7XG5cdHRvcDowO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHQtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuXHR0b3VjaC1hY3Rpb246IG5vbmU7XG5cdHotaW5kZXg6ICRwc3dwX19yb290LXotaW5kZXg7XG5cdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcblx0LyogY3JlYXRlIHNlcGFyYXRlIGxheWVyLCB0byBhdm9pZCBwYWludCBvbiB3aW5kb3cub25zY3JvbGwgaW4gd2Via2l0L2JsaW5rICovXG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHRvdXRsaW5lOiBub25lO1xuXG5cdEBpZiAkcHN3cF9fYm94LXNpemluZy1ib3JkZXItYm94ID09IHRydWUge1xuXHRcdCoge1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHR9XG5cdH1cblx0XG5cdGltZyB7XG5cdFx0bWF4LXdpZHRoOiBub25lO1xuXHR9XG59XG5cbi8qIHN0eWxlIGlzIGFkZGVkIHdoZW4gSlMgb3B0aW9uIHNob3dIaWRlT3BhY2l0eSBpcyBzZXQgdG8gdHJ1ZSAqL1xuLnBzd3AtLWFuaW1hdGVfb3BhY2l0eSB7XG5cdC8qIDAuMDAxLCBiZWNhdXNlIG9wYWNpdHk6MCBkb2Vzbid0IHRyaWdnZXIgUGFpbnQgYWN0aW9uLCB3aGljaCBjYXVzZXMgbGFnIGF0IHN0YXJ0IG9mIHRyYW5zaXRpb24gKi9cblx0b3BhY2l0eTogMC4wMDE7XG5cdHdpbGwtY2hhbmdlOm9wYWNpdHk7XG5cdC8qIGZvciBvcGVuL2Nsb3NlIHRyYW5zaXRpb24gKi9cblx0dHJhbnNpdGlvbjogb3BhY2l0eSAkcHN3cF9fc2hvdy1oaWRlLXRyYW5zaXRpb24tZHVyYXRpb24gY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpO1xufVxuXG4ucHN3cC0tb3BlbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHN3cC0tem9vbS1hbGxvd2VkIC5wc3dwX19pbWcge1xuXHQvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuXHRjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcblx0Y3Vyc29yOiAtbW96LXpvb20taW47XG5cdGN1cnNvcjogem9vbS1pbjtcbn1cblxuLnBzd3AtLXpvb21lZC1pbiAucHN3cF9faW1nIHtcblx0LyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cblx0Y3Vyc29yOiAtd2Via2l0LWdyYWI7XG5cdGN1cnNvcjogLW1vei1ncmFiO1xuXHRjdXJzb3I6IGdyYWI7XG59XG5cbi5wc3dwLS1kcmFnZ2luZyAgLnBzd3BfX2ltZyB7XG5cdC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcblx0Y3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuXHRjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG4vKlxuXHRCYWNrZ3JvdW5kIGlzIGFkZGVkIGFzIGEgc2VwYXJhdGUgZWxlbWVudC5cblx0QXMgYW5pbWF0aW5nIG9wYWNpdHkgaXMgbXVjaCBmYXN0ZXIgdGhhbiBhbmltYXRpbmcgcmdiYSgpIGJhY2tncm91bmQtY29sb3IuXG4qL1xuLnBzd3BfX2JnIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGJhY2tncm91bmQ6ICRwc3dwX19iYWNrZ3JvdW5kLWNvbG9yO1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHR3aWxsLWNoYW5nZTpvcGFjaXR5O1xufVxuXG4ucHN3cF9fc2Nyb2xsLXdyYXAge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0b3ZlcmZsb3c6aGlkZGVuO1xufVxuXG4ucHN3cF9fY29udGFpbmVyLFxuLnBzd3BfX3pvb20td3JhcCB7XG5cdC1tcy10b3VjaC1hY3Rpb246IG5vbmU7IFxuXHR0b3VjaC1hY3Rpb246IG5vbmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xufVxuXG4vKiBQcmV2ZW50IHNlbGVjdGlvbiBhbmQgdGFwIGhpZ2hsaWdodHMgKi9cbi5wc3dwX19jb250YWluZXIsXG4ucHN3cF9faW1nIHtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcblx0LXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG4ucHN3cF9fem9vbS13cmFwIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcblx0LW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcblx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcblx0LyogZm9yIG9wZW4vY2xvc2UgdHJhbnNpdGlvbiAqL1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHBzd3BfX3Nob3ctaGlkZS10cmFuc2l0aW9uLWR1cmF0aW9uIGN1YmljLWJlemllciguNCwwLC4yMiwxKTtcbn1cblxuLnBzd3BfX2JnIHtcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG5cdC8qIGZvciBvcGVuL2Nsb3NlIHRyYW5zaXRpb24gKi9cblx0dHJhbnNpdGlvbjogb3BhY2l0eSAkcHN3cF9fc2hvdy1oaWRlLXRyYW5zaXRpb24tZHVyYXRpb24gY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpO1xufVxuXG4ucHN3cC0tYW5pbWF0ZWQtaW4ge1xuXHQucHN3cF9fYmcsXG5cdC5wc3dwX196b29tLXdyYXAge1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcblx0XHR0cmFuc2l0aW9uOiBub25lO1xuXHR9XG59XG5cbi5wc3dwX19jb250YWluZXIsXG4ucHN3cF9fem9vbS13cmFwIHtcblx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5wc3dwX19pdGVtIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wc3dwX19pbWcge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHRvcDogMDtcblx0bGVmdDogMDtcbn1cblxuLypcblx0c3RyZXRjaGVkIHRodW1ibmFpbCBvciBkaXYgcGxhY2Vob2xkZXIgZWxlbWVudCAoc2VlIGJlbG93KVxuXHRzdHlsZSBpcyBhZGRlZCB0byBhdm9pZCBmbGlja2VyaW5nIGluIHdlYmtpdC9ibGluayB3aGVuIGxheWVycyBvdmVybGFwXG4qL1xuLnBzd3BfX2ltZy0tcGxhY2Vob2xkZXIge1xuXHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLypcblx0ZGl2IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHNpemUgb2YgbGFyZ2UgaW1hZ2Vcblx0bGFyZ2UgaW1hZ2UgbG9hZHMgb24gdG9wIG9mIGl0XG4qL1xuLnBzd3BfX2ltZy0tcGxhY2Vob2xkZXItLWJsYW5rIHtcblx0YmFja2dyb3VuZDogJHBzd3BfX3BsYWNlaG9sZGVyLWNvbG9yO1xufVxuXG4ucHN3cC0taWUgLnBzd3BfX2ltZyB7XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG59XG5cbi8qXG5cdEVycm9yIG1lc3NhZ2UgYXBwZWFycyB3aGVuIGltYWdlIGlzIG5vdCBsb2FkZWRcblx0KEpTIG9wdGlvbiBlcnJvck1zZyBjb250cm9scyBtYXJrdXApXG4qL1xuLnBzd3BfX2Vycm9yLW1zZyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiA1MCU7XG5cdHdpZHRoOiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdG1hcmdpbi10b3A6IC04cHg7XG5cdGNvbG9yOiAkcHN3cF9fZXJyb3ItdGV4dC1jb2xvcjtcbn1cblxuLnBzd3BfX2Vycm9yLW1zZyBhIHtcblx0Y29sb3I6ICRwc3dwX19lcnJvci10ZXh0LWNvbG9yO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiIsIi8qISBQaG90b1N3aXBlIG1haW4gQ1NTIGJ5IERtaXRyeSBTZW1lbm92IHwgcGhvdG9zd2lwZS5jb20gfCBNSVQgbGljZW5zZSAqL1xuLypcblx0U3R5bGVzIGZvciBiYXNpYyBQaG90b1N3aXBlIGZ1bmN0aW9uYWxpdHkgKHNsaWRpbmcgYXJlYSwgb3Blbi9jbG9zZSB0cmFuc2l0aW9ucylcbiovXG4vKiBwc3dwID0gcGhvdG9zd2lwZSAqL1xuLnBzd3Age1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICB6LWluZGV4OiAxNTAwO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIGNyZWF0ZSBzZXBhcmF0ZSBsYXllciwgdG8gYXZvaWQgcGFpbnQgb24gd2luZG93Lm9uc2Nyb2xsIGluIHdlYmtpdC9ibGluayAqL1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTsgfVxuICAucHN3cCAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5wc3dwIGltZyB7XG4gICAgbWF4LXdpZHRoOiBub25lOyB9XG5cbi8qIHN0eWxlIGlzIGFkZGVkIHdoZW4gSlMgb3B0aW9uIHNob3dIaWRlT3BhY2l0eSBpcyBzZXQgdG8gdHJ1ZSAqL1xuLnBzd3AtLWFuaW1hdGVfb3BhY2l0eSB7XG4gIC8qIDAuMDAxLCBiZWNhdXNlIG9wYWNpdHk6MCBkb2Vzbid0IHRyaWdnZXIgUGFpbnQgYWN0aW9uLCB3aGljaCBjYXVzZXMgbGFnIGF0IHN0YXJ0IG9mIHRyYW5zaXRpb24gKi9cbiAgb3BhY2l0eTogMC4wMDE7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cblxuLnBzd3AtLW9wZW4ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4ucHN3cC0tem9vbS1hbGxvd2VkIC5wc3dwX19pbWcge1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcbiAgY3Vyc29yOiAtbW96LXpvb20taW47XG4gIGN1cnNvcjogem9vbS1pbjsgfVxuXG4ucHN3cC0tem9vbWVkLWluIC5wc3dwX19pbWcge1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiAtbW96LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjsgfVxuXG4ucHN3cC0tZHJhZ2dpbmcgLnBzd3BfX2ltZyB7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nOyB9XG5cbi8qXG5cdEJhY2tncm91bmQgaXMgYWRkZWQgYXMgYSBzZXBhcmF0ZSBlbGVtZW50LlxuXHRBcyBhbmltYXRpbmcgb3BhY2l0eSBpcyBtdWNoIGZhc3RlciB0aGFuIGFuaW1hdGluZyByZ2JhKCkgYmFja2dyb3VuZC1jb2xvci5cbiovXG4ucHN3cF9fYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7IH1cblxuLnBzd3BfX3Njcm9sbC13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnBzd3BfX2NvbnRhaW5lcixcbi5wc3dwX196b29tLXdyYXAge1xuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwOyB9XG5cbi8qIFByZXZlbnQgc2VsZWN0aW9uIGFuZCB0YXAgaGlnaGxpZ2h0cyAqL1xuLnBzd3BfX2NvbnRhaW5lcixcbi5wc3dwX19pbWcge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IH1cblxuLnBzd3BfX3pvb20td3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIC8qIGZvciBvcGVuL2Nsb3NlIHRyYW5zaXRpb24gKi9cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpOyB9XG5cbi5wc3dwX19iZyB7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuICAvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cblxuLnBzd3AtLWFuaW1hdGVkLWluIC5wc3dwX19iZyxcbi5wc3dwLS1hbmltYXRlZC1pbiAucHN3cF9fem9vbS13cmFwIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBub25lOyB9XG5cbi5wc3dwX19jb250YWluZXIsXG4ucHN3cF9fem9vbS13cmFwIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLnBzd3BfX2l0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ucHN3cF9faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7IH1cblxuLypcblx0c3RyZXRjaGVkIHRodW1ibmFpbCBvciBkaXYgcGxhY2Vob2xkZXIgZWxlbWVudCAoc2VlIGJlbG93KVxuXHRzdHlsZSBpcyBhZGRlZCB0byBhdm9pZCBmbGlja2VyaW5nIGluIHdlYmtpdC9ibGluayB3aGVuIGxheWVycyBvdmVybGFwXG4qL1xuLnBzd3BfX2ltZy0tcGxhY2Vob2xkZXIge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG4vKlxuXHRkaXYgZWxlbWVudCB0aGF0IG1hdGNoZXMgc2l6ZSBvZiBsYXJnZSBpbWFnZVxuXHRsYXJnZSBpbWFnZSBsb2FkcyBvbiB0b3Agb2YgaXRcbiovXG4ucHN3cF9faW1nLS1wbGFjZWhvbGRlci0tYmxhbmsge1xuICBiYWNrZ3JvdW5kOiAjMjIyOyB9XG5cbi5wc3dwLS1pZSAucHN3cF9faW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDsgfVxuXG4vKlxuXHRFcnJvciBtZXNzYWdlIGFwcGVhcnMgd2hlbiBpbWFnZSBpcyBub3QgbG9hZGVkXG5cdChKUyBvcHRpb24gZXJyb3JNc2cgY29udHJvbHMgbWFya3VwKVxuKi9cbi5wc3dwX19lcnJvci1tc2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBjb2xvcjogI0NDQzsgfVxuXG4ucHN3cF9fZXJyb3ItbXNnIGEge1xuICBjb2xvcjogI0NDQztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuLyohIFBob3RvU3dpcGUgRGVmYXVsdCBVSSBDU1MgYnkgRG1pdHJ5IFNlbWVub3YgfCBwaG90b3N3aXBlLmNvbSB8IE1JVCBsaWNlbnNlICovXG4vKlxuXG5cdENvbnRlbnRzOlxuXG5cdDEuIEJ1dHRvbnNcblx0Mi4gU2hhcmUgbW9kYWwgYW5kIGxpbmtzXG5cdDMuIEluZGV4IGluZGljYXRvciAoXCIxIG9mIFhcIiBjb3VudGVyKVxuXHQ0LiBDYXB0aW9uXG5cdDUuIExvYWRpbmcgaW5kaWNhdG9yXG5cdDYuIEFkZGl0aW9uYWwgc3R5bGVzIChyb290IGVsZW1lbnQsIHRvcCBiYXIsIGlkbGUgc3RhdGUsIGhpZGRlbiBzdGF0ZSwgZXRjLilcblxuKi9cbi8qXG5cdFxuXHQxLiBCdXR0b25zXG5cbiAqL1xuLyogPGJ1dHRvbj4gY3NzIHJlc2V0ICovXG4ucHN3cF9fYnV0dG9uIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvcGFjaXR5OiAwLjc1O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cbiAgLnBzd3BfX2J1dHRvbjpmb2N1cywgLnBzd3BfX2J1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAucHN3cF9fYnV0dG9uOmFjdGl2ZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjk7IH1cbiAgLnBzd3BfX2J1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7IH1cblxuLyogcHN3cF9fdWktLW92ZXItY2xvc2UgY2xhc3MgaXQgYWRkZWQgd2hlbiBtb3VzZSBpcyBvdmVyIGVsZW1lbnQgdGhhdCBzaG91bGQgY2xvc2UgZ2FsbGVyeSAqL1xuLnBzd3BfX3VpLS1vdmVyLWNsb3NlIC5wc3dwX19idXR0b24tLWNsb3NlIHtcbiAgb3BhY2l0eTogMTsgfVxuXG4ucHN3cF9fYnV0dG9uLFxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQ6YmVmb3JlLFxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvY3NzL3Bob3Rvc3dpcGUvZGVmYXVsdC1za2luL2RlZmF1bHQtc2tpbi5wbmdcIikgMCAwIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNjRweCA4OHB4O1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4OyB9XG5cbkBtZWRpYSAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjEpLCAobWluLXJlc29sdXRpb246IDEwNWRwaSksIChtaW4tcmVzb2x1dGlvbjogMS4xZHBweCkge1xuICAvKiBTZXJ2ZSBTVkcgc3ByaXRlIGlmIGJyb3dzZXIgc3VwcG9ydHMgU1ZHIGFuZCByZXNvbHV0aW9uIGlzIG1vcmUgdGhhbiAxMDVkcGkgKi9cbiAgLnBzd3AtLXN2ZyAucHN3cF9fYnV0dG9uLFxuICAucHN3cC0tc3ZnIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0OmJlZm9yZSxcbiAgLnBzd3AtLXN2ZyAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQ6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2Nzcy9waG90b3N3aXBlL2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4uc3ZnXCIpOyB9XG4gIC5wc3dwLS1zdmcgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4gIC5wc3dwLS1zdmcgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lOyB9IH1cblxuLnBzd3BfX2J1dHRvbi0tY2xvc2Uge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00NHB4OyB9XG5cbi5wc3dwX19idXR0b24tLXNoYXJlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ0cHggLTQ0cHg7IH1cblxuLnBzd3BfX2J1dHRvbi0tZnMge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5wc3dwLS1zdXBwb3J0cy1mcyAucHN3cF9fYnV0dG9uLS1mcyB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5wc3dwLS1mcyAucHN3cF9fYnV0dG9uLS1mcyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00NHB4IDA7IH1cblxuLnBzd3BfX2J1dHRvbi0tem9vbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04OHB4IDA7IH1cblxuLnBzd3AtLXpvb20tYWxsb3dlZCAucHN3cF9fYnV0dG9uLS16b29tIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnBzd3AtLXpvb21lZC1pbiAucHN3cF9fYnV0dG9uLS16b29tIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzMnB4IDA7IH1cblxuLyogbm8gYXJyb3dzIG9uIHRvdWNoIHNjcmVlbnMgKi9cbi5wc3dwLS10b3VjaCAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcbi5wc3dwLS10b3VjaCAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLypcblx0QXJyb3cgYnV0dG9ucyBoaXQgYXJlYVxuXHQoaWNvbiBpcyBhZGRlZCB0byA6YmVmb3JlIHBzZXVkby1lbGVtZW50KVxuKi9cbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0IHtcbiAgbGVmdDogMDsgfVxuXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuICByaWdodDogMDsgfVxuXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdDpiZWZvcmUsXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHRvcDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQ6YmVmb3JlIHtcbiAgbGVmdDogNnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTM4cHggLTQ0cHg7IH1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XG4gIHJpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NHB4IC00NHB4OyB9XG5cbi8qXG5cblx0Mi4gU2hhcmUgbW9kYWwvcG9wdXAgYW5kIGxpbmtzXG5cbiAqL1xuLnBzd3BfX2NvdW50ZXIsXG4ucHN3cF9fc2hhcmUtbW9kYWwge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuXG4ucHN3cF9fc2hhcmUtbW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTYwMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLW91dDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5OyB9XG5cbi5wc3dwX19zaGFyZS1tb2RhbC0taGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ucHN3cF9fc2hhcmUtdG9vbHRpcCB7XG4gIHotaW5kZXg6IDE2MjA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgdG9wOiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogYXV0bztcbiAgcmlnaHQ6IDQ0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsgfVxuICAucHN3cF9fc2hhcmUtdG9vbHRpcCBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4OyB9XG4gICAgLnBzd3BfX3NoYXJlLXRvb2x0aXAgYTpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzAwMDsgfVxuICAgIC5wc3dwX19zaGFyZS10b29sdGlwIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgLyogcm91bmQgY29ybmVycyBvbiB0aGUgZmlyc3QvbGFzdCBsaXN0IGl0ZW0gKi9cbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwOyB9XG4gICAgLnBzd3BfX3NoYXJlLXRvb2x0aXAgYTpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4OyB9XG5cbi5wc3dwX19zaGFyZS1tb2RhbC0tZmFkZS1pbiB7XG4gIG9wYWNpdHk6IDE7IH1cbiAgLnBzd3BfX3NoYXJlLW1vZGFsLS1mYWRlLWluIC5wc3dwX19zaGFyZS10b29sdGlwIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cblxuLyogaW5jcmVhc2Ugc2l6ZSBvZiBzaGFyZSBsaW5rcyBvbiB0b3VjaCBkZXZpY2VzICovXG4ucHN3cC0tdG91Y2ggLnBzd3BfX3NoYXJlLXRvb2x0aXAgYSB7XG4gIHBhZGRpbmc6IDE2cHggMTJweDsgfVxuXG5hLnBzd3BfX3NoYXJlLS1mYWNlYm9vazpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTJweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogNnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNGRkY7XG4gIC13ZWJraXQtcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC1tb3otcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbmEucHN3cF9fc2hhcmUtLWZhY2Vib29rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNFNUM5QTtcbiAgY29sb3I6ICNGRkY7IH1cbiAgYS5wc3dwX19zaGFyZS0tZmFjZWJvb2s6aG92ZXI6YmVmb3JlIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjM0U1QzlBOyB9XG5cbmEucHN3cF9fc2hhcmUtLXR3aXR0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xuICBjb2xvcjogI0ZGRjsgfVxuXG5hLnBzd3BfX3NoYXJlLS1waW50ZXJlc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBjb2xvcjogI0NFMjcyRDsgfVxuXG5hLnBzd3BfX3NoYXJlLS1kb3dubG9hZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNEREQ7IH1cblxuLypcblxuXHQzLiBJbmRleCBpbmRpY2F0b3IgKFwiMSBvZiBYXCIgY291bnRlcilcblxuICovXG4ucHN3cF9fY291bnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIGNvbG9yOiAjRkZGO1xuICBvcGFjaXR5OiAwLjc1O1xuICBwYWRkaW5nOiAwIDEwcHg7IH1cblxuLypcblx0XG5cdDQuIENhcHRpb25cblxuICovXG4ucHN3cF9fY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDRweDsgfVxuICAucHN3cF9fY2FwdGlvbiBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjQkJCOyB9XG5cbi5wc3dwX19jYXB0aW9uX19jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICNDQ0M7IH1cblxuLnBzd3BfX2NhcHRpb24tLWVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4vKiBGYWtlIGNhcHRpb24gZWxlbWVudCwgdXNlZCB0byBjYWxjdWxhdGUgaGVpZ2h0IG9mIG5leHQvcHJldiBpbWFnZSAqL1xuLnBzd3BfX2NhcHRpb24tLWZha2Uge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLypcblxuXHQ1LiBMb2FkaW5nIGluZGljYXRvciAocHJlbG9hZGVyKVxuXG5cdFlvdSBjYW4gcGxheSB3aXRoIGl0IGhlcmUgLSBodHRwOi8vY29kZXBlbi5pby9kaW1zZW1lbm92L3Blbi95eUJXb1JcblxuICovXG4ucHN3cF9fcHJlbG9hZGVyIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2Utb3V0O1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgZGlyZWN0aW9uOiBsdHI7IH1cblxuLnBzd3BfX3ByZWxvYWRlcl9faWNuIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAxMnB4OyB9XG5cbi5wc3dwX19wcmVsb2FkZXItLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7IH1cbiAgLnBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIC5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XG4gICAgLyogV2UgdXNlIC5naWYgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IENTUyBhbmltYXRpb24gKi9cbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2Nzcy9waG90b3N3aXBlL2RlZmF1bHQtc2tpbi9wcmVsb2FkZXIuZ2lmXCIpIDAgMCBuby1yZXBlYXQ7IH1cblxuLnBzd3AtLWNzc19hbmltYXRpb24gLnBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIHtcbiAgb3BhY2l0eTogMTsgfVxuICAucHN3cC0tY3NzX2FuaW1hdGlvbiAucHN3cF9fcHJlbG9hZGVyLS1hY3RpdmUgLnBzd3BfX3ByZWxvYWRlcl9faWNuIHtcbiAgICBhbmltYXRpb246IGNsb2Nrd2lzZSA1MDBtcyBsaW5lYXIgaW5maW5pdGU7IH1cbiAgLnBzd3AtLWNzc19hbmltYXRpb24gLnBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIC5wc3dwX19wcmVsb2FkZXJfX2RvbnV0IHtcbiAgICBhbmltYXRpb246IGRvbnV0LXJvdGF0ZSAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSkgaW5maW5pdGU7IH1cblxuLnBzd3AtLWNzc19hbmltYXRpb24gLnBzd3BfX3ByZWxvYWRlcl9faWNuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIG1hcmdpbjogMDsgfVxuXG4ucHN3cC0tY3NzX2FuaW1hdGlvbiAucHN3cF9fcHJlbG9hZGVyX19jdXQge1xuICAvKiBcblx0XHRcdFRoZSBpZGVhIG9mIGFuaW1hdGluZyBpbm5lciBjaXJjbGUgaXMgYmFzZWQgb24gUG9seW1lciAoXCJtYXRlcmlhbFwiKSBsb2FkaW5nIGluZGljYXRvciBcblx0XHRcdCBieSBLZWFudSBMZWUgaHR0cHM6Ly9ibG9nLmtlYW51bGVlLmNvbS8yMDE0LzEwLzIwL3RoZS10YWxlLW9mLXRocmVlLXNwaW5uZXJzLmh0bWxcblx0XHQqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ucHN3cC0tY3NzX2FuaW1hdGlvbiAucHN3cF9fcHJlbG9hZGVyX19kb251dCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBzd3BfX3ByZWxvYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdG9wOiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbG9hdDogcmlnaHQ7IH0gfVxuXG5Aa2V5ZnJhbWVzIGNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuQGtleWZyYW1lcyBkb251dC1yb3RhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQwZGVnKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfSB9XG5cbi8qXG5cdFxuXHQ2LiBBZGRpdGlvbmFsIHN0eWxlc1xuXG4gKi9cbi8qIHJvb3QgZWxlbWVudCBvZiBVSSAqL1xuLnBzd3BfX3VpIHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTU1MDsgfVxuXG4vKiB0b3AgYmxhY2sgYmFyIHdpdGggYnV0dG9ucyBhbmQgXCIxIG9mIFhcIiBpbmRpY2F0b3IgKi9cbi5wc3dwX190b3AtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnBzd3BfX2NhcHRpb24sXG4ucHN3cF9fdG9wLWJhcixcbi5wc3dwLS1oYXNfbW91c2UgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTsgfVxuXG4vKiBwc3dwLS1oYXNfbW91c2UgY2xhc3MgaXMgYWRkZWQgb25seSB3aGVuIHR3byBzdWJzZXF1ZW50IG1vdXNlbW92ZSBldmVudHMgb2NjdXIgKi9cbi5wc3dwLS1oYXNfbW91c2UgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuLnBzd3BfX3RvcC1iYXIsXG4ucHN3cF9fY2FwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuXG4vKiBwc3dwX191aS0tZml0IGNsYXNzIGlzIGFkZGVkIHdoZW4gbWFpbiBpbWFnZSBcImZpdHNcIiBiZXR3ZWVuIHRvcCBiYXIgYW5kIGJvdHRvbSBiYXIgKGNhcHRpb24pICovXG4ucHN3cF9fdWktLWZpdCAucHN3cF9fdG9wLWJhcixcbi5wc3dwX191aS0tZml0IC5wc3dwX19jYXB0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG5cbi8qIHBzd3BfX3VpLS1pZGxlIGNsYXNzIGlzIGFkZGVkIHdoZW4gbW91c2UgaXNuJ3QgbW92aW5nIGZvciBzZXZlcmFsIHNlY29uZHMgKEpTIG9wdGlvbiB0aW1lVG9JZGxlKSAqL1xuLnBzd3BfX3VpLS1pZGxlIC5wc3dwX190b3AtYmFyIHtcbiAgb3BhY2l0eTogMDsgfVxuXG4ucHN3cF9fdWktLWlkbGUgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cF9fdWktLWlkbGUgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcbiAgb3BhY2l0eTogMDsgfVxuXG4vKlxuXHRwc3dwX191aS0taGlkZGVuIGNsYXNzIGlzIGFkZGVkIHdoZW4gY29udHJvbHMgYXJlIGhpZGRlblxuXHRlLmcuIHdoZW4gdXNlciB0YXBzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5IG9mIGNvbnRyb2xzXG4qL1xuLnBzd3BfX3VpLS1oaWRkZW4gLnBzd3BfX3RvcC1iYXIsXG4ucHN3cF9fdWktLWhpZGRlbiAucHN3cF9fY2FwdGlvbixcbi5wc3dwX191aS0taGlkZGVuIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuLnBzd3BfX3VpLS1oaWRkZW4gLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcbiAgLyogRm9yY2UgcGFpbnQgJiBjcmVhdGUgY29tcG9zaXRpb24gbGF5ZXIgZm9yIGNvbnRyb2xzLiAqL1xuICBvcGFjaXR5OiAwLjAwMTsgfVxuXG4vKiBwc3dwX191aS0tb25lLXNsaWRlIGNsYXNzIGlzIGFkZGVkIHdoZW4gdGhlcmUgaXMganVzdCBvbmUgaXRlbSBpbiBnYWxsZXJ5ICovXG4ucHN3cF9fdWktLW9uZS1zbGlkZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcbi5wc3dwX191aS0tb25lLXNsaWRlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCxcbi5wc3dwX191aS0tb25lLXNsaWRlIC5wc3dwX19jb3VudGVyIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ucHN3cF9fZWxlbWVudC0tZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLnBzd3AtLW1pbmltYWwtLWRhcmsgLnBzd3BfX3RvcC1iYXIge1xuICBiYWNrZ3JvdW5kOiBub25lOyB9XG5cbmgxIHtcbiAgbWFyZ2luOiAyZW07IH1cblxuLnBzd3BfX2NhcHRpb25fX2NlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ucHN3cC0tb3BlbiB7XG4gIGNvbG9yOiAjZmZmZmZmOyB9XG5cbi5wc3dwLS1hbmltYXRlX29wYWNpdHksXG4ucHN3cF9fYmcsXG4ucHN3cF9fY2FwdGlvbixcbi5wc3dwX190b3AtYmFyLFxuLnBzd3AtLWhhc19tb3VzZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcbi5wc3dwLS1oYXNfbW91c2UgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpOyB9XG5cbmZpZ3VyZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMzLjMzMyU7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5zcGFjZXIge1xuICBoZWlnaHQ6IDVlbTsgfVxuXG4uZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiAyNTBweDsgfVxuICAuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIC5zbGlkZV90aHVtYnNfaG9sZGVyLCAuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIGltZywgLmdhbGxlcnkgLnNsaWRlX3RodW1icyBmaWd1cmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxuICAgIC5nYWxsZXJ5IC5zbGlkZV90aHVtYnMgZmlndXJlOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG4gICAgLmdhbGxlcnkgLnNsaWRlX3RodW1icyBmaWd1cmUgaW1nIHtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XG4iLCIkcHN3cF9fc2hvdy1oaWRlLXRyYW5zaXRpb24tZHVyYXRpb246IDMzM21zICFkZWZhdWx0O1xuJHBzd3BfX2NvbnRyb2xzLXRyYW5zaXRpb24tZHVyYXRpb246IDMzM21zICFkZWZhdWx0O1xuJHBzd3BfX2JhY2tncm91bmQtY29sb3I6ICMwMDAgIWRlZmF1bHQ7XG4kcHN3cF9fcGxhY2Vob2xkZXItY29sb3I6ICMyMjIgIWRlZmF1bHQ7XG4kcHN3cF9fYm94LXNpemluZy1ib3JkZXItYm94OiB0cnVlICFkZWZhdWx0OyAvLyBkaXNhYmxlIC5wc3dwICogeyBib3gtc2l6aW5nOmJvcmRlci1ib3ggfSAoaW4gY2FzZSB5b3UgYWxyZWFkeSBoYXZlIGl0IGluIHlvdXIgc2l0ZSBjc3MpXG4kcHN3cF9fcm9vdC16LWluZGV4OiAxNTAwICFkZWZhdWx0O1xuJHBzd3BfX2Fzc2V0cy1wYXRoOiAnJyAhZGVmYXVsdDsgLy8gcGF0aCB0byBza2luIGFzc2V0cyBmb2xkZXIgKHByZWxvYWRlciwgUE5HIGFuZCBTVkcgc3ByaXRlKVxuJHBzd3BfX2Vycm9yLXRleHQtY29sb3I6ICNDQ0MgIWRlZmF1bHQ7IC8vIFwiSW1hZ2Ugbm90IGxvYWRlZFwiIHRleHQgY29sb3JcbiRwc3dwX19pbmNsdWRlLW1pbmltYWwtc3R5bGU6IHRydWUgIWRlZmF1bHQ7IiwiLyohIFBob3RvU3dpcGUgRGVmYXVsdCBVSSBDU1MgYnkgRG1pdHJ5IFNlbWVub3YgfCBwaG90b3N3aXBlLmNvbSB8IE1JVCBsaWNlbnNlICovXG5cbi8qXG5cblx0Q29udGVudHM6XG5cblx0MS4gQnV0dG9uc1xuXHQyLiBTaGFyZSBtb2RhbCBhbmQgbGlua3Ncblx0My4gSW5kZXggaW5kaWNhdG9yIChcIjEgb2YgWFwiIGNvdW50ZXIpXG5cdDQuIENhcHRpb25cblx0NS4gTG9hZGluZyBpbmRpY2F0b3Jcblx0Ni4gQWRkaXRpb25hbCBzdHlsZXMgKHJvb3QgZWxlbWVudCwgdG9wIGJhciwgaWRsZSBzdGF0ZSwgaGlkZGVuIHN0YXRlLCBldGMuKVxuXG4qL1xuXG4vLyBQaG90b1N3aXBlIHVzZXMgQXV0b3ByZWZpeGVyLCBzbyB2ZW5kb3IgcHJlZml4ZWQgYXJlIGFkZGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBuZWVkZWQuXG5cblxuXG5AaW1wb3J0IFwiLi4vbWFpbi1zZXR0aW5nc1wiO1xuXG5cbi8qXG5cdFxuXHQxLiBCdXR0b25zXG5cbiAqL1xuXG4vKiA8YnV0dG9uPiBjc3MgcmVzZXQgKi9cbi5wc3dwX19idXR0b24ge1xuXHR3aWR0aDogNDRweDtcblx0aGVpZ2h0OiA0NHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJvcmRlcjogMDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRmbG9hdDogcmlnaHQ7XG5cdG9wYWNpdHk6IDAuNzU7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcblx0Ym94LXNoYWRvdzogbm9uZTtcblxuXHQmOmZvY3VzLFxuXHQmOmhvdmVyIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdFxuXHQmOmFjdGl2ZSB7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRvcGFjaXR5OiAwLjk7XG5cdH1cblxuXHQmOjotbW96LWZvY3VzLWlubmVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGJvcmRlcjogMFxuXHR9XG59XG5cbi8qIHBzd3BfX3VpLS1vdmVyLWNsb3NlIGNsYXNzIGl0IGFkZGVkIHdoZW4gbW91c2UgaXMgb3ZlciBlbGVtZW50IHRoYXQgc2hvdWxkIGNsb3NlIGdhbGxlcnkgKi9cbi5wc3dwX191aS0tb3Zlci1jbG9zZSAucHN3cF9fYnV0dG9uLS1jbG9zZSB7XG5cdG9wYWNpdHk6IDE7XG59XG5cbi5wc3dwX19idXR0b24sXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdDpiZWZvcmUsXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQ6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9jc3MvcGhvdG9zd2lwZS9kZWZhdWx0LXNraW4vZGVmYXVsdC1za2luLnBuZ1wiKSAwIDAgbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDI2NHB4IDg4cHg7XG5cdHdpZHRoOiA0NHB4O1xuXHRoZWlnaHQ6IDQ0cHg7XG59XG5cbkBtZWRpYSAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjEpLCAgKG1pbi1yZXNvbHV0aW9uOiAxMDVkcGkpLCAobWluLXJlc29sdXRpb246IDEuMWRwcHgpIHtcblxuXHQvKiBTZXJ2ZSBTVkcgc3ByaXRlIGlmIGJyb3dzZXIgc3VwcG9ydHMgU1ZHIGFuZCByZXNvbHV0aW9uIGlzIG1vcmUgdGhhbiAxMDVkcGkgKi9cbiAgICAucHN3cC0tc3ZnIC5wc3dwX19idXR0b24sXG4gICAgLnBzd3AtLXN2ZyAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdDpiZWZvcmUsXG5cdC5wc3dwLS1zdmcgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvY3NzL3Bob3Rvc3dpcGUvZGVmYXVsdC1za2luL2RlZmF1bHQtc2tpbi5zdmdcIik7XG4gICAgfVxuXG4gICAgLnBzd3AtLXN2ZyAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcblx0LnBzd3AtLXN2ZyAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuXHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdH1cbn1cblxuLnBzd3BfX2J1dHRvbi0tY2xvc2Uge1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00NHB4O1xufVxuXG4ucHN3cF9fYnV0dG9uLS1zaGFyZSB7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00NHB4IC00NHB4O1xufVxuXG4ucHN3cF9fYnV0dG9uLS1mcyB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wc3dwLS1zdXBwb3J0cy1mcyAucHN3cF9fYnV0dG9uLS1mcyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHN3cC0tZnMgLnBzd3BfX2J1dHRvbi0tZnMge1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDRweCAwO1xufVxuXG4ucHN3cF9fYnV0dG9uLS16b29tIHtcblx0ZGlzcGxheTogbm9uZTtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTg4cHggMDtcbn1cblxuLnBzd3AtLXpvb20tYWxsb3dlZCAucHN3cF9fYnV0dG9uLS16b29tIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5wc3dwLS16b29tZWQtaW4gLnBzd3BfX2J1dHRvbi0tem9vbSB7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xMzJweCAwO1xufVxuXG4vKiBubyBhcnJvd3Mgb24gdG91Y2ggc2NyZWVucyAqL1xuLnBzd3AtLXRvdWNoIHtcblx0LnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG5cdC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1x0XHRcblx0fVxufVxuXG4vKlxuXHRBcnJvdyBidXR0b25zIGhpdCBhcmVhXG5cdChpY29uIGlzIGFkZGVkIHRvIDpiZWZvcmUgcHNldWRvLWVsZW1lbnQpXG4qL1xuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHR0b3A6IDUwJTtcblx0bWFyZ2luLXRvcDogLTUwcHg7XG5cdHdpZHRoOiA3MHB4O1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0IHtcblx0bGVmdDogMDtcbn1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcblx0cmlnaHQ6IDA7XG59XG5cbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0OmJlZm9yZSxcbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodDpiZWZvcmUge1xuXHRjb250ZW50OiAnJztcblx0dG9wOiAzNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG5cdGhlaWdodDogMzBweDtcblx0d2lkdGg6IDMycHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQ6YmVmb3JlIHtcblx0bGVmdDogNnB4O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTM4cHggLTQ0cHg7XG59XG5cbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodDpiZWZvcmUge1xuXHRyaWdodDogNnB4O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTRweCAtNDRweDtcbn1cblxuXG4vKlxuXG5cdDIuIFNoYXJlIG1vZGFsL3BvcHVwIGFuZCBsaW5rc1xuXG4gKi9cblxuLnBzd3BfX2NvdW50ZXIsXG4ucHN3cF9fc2hhcmUtbW9kYWwge1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBzd3BfX3NoYXJlLW1vZGFsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6ICRwc3dwX19yb290LXotaW5kZXggKyAxMDA7XG5cdG9wYWNpdHk6IDA7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1vdXQ7XG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHR3aWxsLWNoYW5nZTogb3BhY2l0eTtcbn1cblxuLnBzd3BfX3NoYXJlLW1vZGFsLS1oaWRkZW4ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4ucHN3cF9fc2hhcmUtdG9vbHRpcCB7XG5cdHotaW5kZXg6ICRwc3dwX19yb290LXotaW5kZXggKyAxMjA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0YmFja2dyb3VuZDogI0ZGRjtcblx0dG9wOiA1NnB4O1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogYXV0bztcblx0cmlnaHQ6IDQ0cHg7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzO1xuXHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblxuXHRhIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRwYWRkaW5nOiA4cHggMTJweDtcblx0XHRjb2xvcjogIzAwMDtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHR9XG5cblx0XHRcblx0XHQmOmZpcnN0LWNoaWxkIHtcblx0XHRcdC8qIHJvdW5kIGNvcm5lcnMgb24gdGhlIGZpcnN0L2xhc3QgbGlzdCBpdGVtICovXG5cdFx0XHRib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcblx0XHR9XG5cdFx0XG5cdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xuXHRcdH1cblx0fVxufVxuXG4ucHN3cF9fc2hhcmUtbW9kYWwtLWZhZGUtaW4ge1xuXHRvcGFjaXR5OiAxO1xuXG5cdC5wc3dwX19zaGFyZS10b29sdGlwIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cbn1cblxuLyogaW5jcmVhc2Ugc2l6ZSBvZiBzaGFyZSBsaW5rcyBvbiB0b3VjaCBkZXZpY2VzICovXG4ucHN3cC0tdG91Y2ggLnBzd3BfX3NoYXJlLXRvb2x0aXAgYSB7XG5cdHBhZGRpbmc6IDE2cHggMTJweDtcbn1cblxuYS5wc3dwX19zaGFyZS0tZmFjZWJvb2sge1xuXHQmOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDA7XG5cdFx0aGVpZ2h0OiAwO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IC0xMnB4O1xuXHRcdHJpZ2h0OiAxNXB4O1xuXHRcdGJvcmRlcjogNnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI0ZGRjtcblx0XHQtd2Via2l0LXBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdC1tb3otcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdH1cblxuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiAjM0U1QzlBO1xuXHRcdGNvbG9yOiAjRkZGO1xuXG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogIzNFNUM5QTtcblx0XHR9XG5cdH1cbn1cblxuYS5wc3dwX19zaGFyZS0tdHdpdHRlciB7XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6ICM1NUFDRUU7XG5cdFx0Y29sb3I6ICNGRkY7XG5cdH1cbn1cblxuYS5wc3dwX19zaGFyZS0tcGludGVyZXN0IHtcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogI0NDQztcblx0XHRjb2xvcjogI0NFMjcyRDtcblx0fVxufVxuXG5hLnBzd3BfX3NoYXJlLS1kb3dubG9hZCB7XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6ICNEREQ7XG5cdH1cbn1cblxuXG4vKlxuXG5cdDMuIEluZGV4IGluZGljYXRvciAoXCIxIG9mIFhcIiBjb3VudGVyKVxuXG4gKi9cblxuLnBzd3BfX2NvdW50ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcblx0aGVpZ2h0OiA0NHB4O1xuXHRmb250LXNpemU6IDEzcHg7XG5cdGxpbmUtaGVpZ2h0OiA0NHB4O1xuXHRjb2xvcjogI0ZGRjtcblx0b3BhY2l0eTogMC43NTtcblx0cGFkZGluZzogMCAxMHB4O1xufVxuXG5cbi8qXG5cdFxuXHQ0LiBDYXB0aW9uXG5cbiAqL1xuXG4ucHN3cF9fY2FwdGlvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0Ym90dG9tOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogNDRweDtcblx0XG5cdHNtYWxsIHtcblx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0Y29sb3I6ICNCQkI7XG5cdH1cbn1cblxuLnBzd3BfX2NhcHRpb25fX2NlbnRlciB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdG1heC13aWR0aDogNDIwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRmb250LXNpemU6IDEzcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRjb2xvcjogI0NDQztcbn1cblxuLnBzd3BfX2NhcHRpb24tLWVtcHR5IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLyogRmFrZSBjYXB0aW9uIGVsZW1lbnQsIHVzZWQgdG8gY2FsY3VsYXRlIGhlaWdodCBvZiBuZXh0L3ByZXYgaW1hZ2UgKi9cbi5wc3dwX19jYXB0aW9uLS1mYWtlIHtcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5cbi8qXG5cblx0NS4gTG9hZGluZyBpbmRpY2F0b3IgKHByZWxvYWRlcilcblxuXHRZb3UgY2FuIHBsYXkgd2l0aCBpdCBoZXJlIC0gaHR0cDovL2NvZGVwZW4uaW8vZGltc2VtZW5vdi9wZW4veXlCV29SXG5cbiAqL1xuXG4ucHN3cF9fcHJlbG9hZGVyIHtcblx0d2lkdGg6IDQ0cHg7XG5cdGhlaWdodDogNDRweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDUwJTtcblx0bWFyZ2luLWxlZnQ6IC0yMnB4O1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2Utb3V0OyBcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG5cdGRpcmVjdGlvbjogbHRyO1xufVxuXG4ucHN3cF9fcHJlbG9hZGVyX19pY24ge1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRtYXJnaW46IDEycHg7XG59XG5cbi5wc3dwX19wcmVsb2FkZXItLWFjdGl2ZSB7XG5cdG9wYWNpdHk6IDE7XG5cblx0LnBzd3BfX3ByZWxvYWRlcl9faWNuIHtcblx0XHQvKiBXZSB1c2UgLmdpZiBpbiBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgQ1NTIGFuaW1hdGlvbiAqL1xuXHRcdGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvY3NzL3Bob3Rvc3dpcGUvZGVmYXVsdC1za2luL3ByZWxvYWRlci5naWZcIikgMCAwIG5vLXJlcGVhdDtcblx0fVxufVxuXG4ucHN3cC0tY3NzX2FuaW1hdGlvbiB7XG5cdC5wc3dwX19wcmVsb2FkZXItLWFjdGl2ZSB7XG5cdFx0b3BhY2l0eTogMTtcblxuXHRcdC5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XG5cdFx0XHRhbmltYXRpb246IGNsb2Nrd2lzZSA1MDBtcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0fVxuXG5cdFx0LnBzd3BfX3ByZWxvYWRlcl9fZG9udXQge1xuXHRcdFx0YW5pbWF0aW9uOiBkb251dC1yb3RhdGUgMTAwMG1zIGN1YmljLWJlemllciguNCwwLC4yMiwxKSBpbmZpbml0ZTtcblx0XHR9XG5cdH1cblx0XG5cdC5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRvcGFjaXR5OiAwLjc1O1xuXHRcdHdpZHRoOiAxNHB4O1xuXHRcdGhlaWdodDogMTRweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMTVweDtcblx0XHR0b3A6IDE1cHg7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cblx0XG5cdC5wc3dwX19wcmVsb2FkZXJfX2N1dCB7XG5cdFx0LyogXG5cdFx0XHRUaGUgaWRlYSBvZiBhbmltYXRpbmcgaW5uZXIgY2lyY2xlIGlzIGJhc2VkIG9uIFBvbHltZXIgKFwibWF0ZXJpYWxcIikgbG9hZGluZyBpbmRpY2F0b3IgXG5cdFx0XHQgYnkgS2VhbnUgTGVlIGh0dHBzOi8vYmxvZy5rZWFudWxlZS5jb20vMjAxNC8xMC8yMC90aGUtdGFsZS1vZi10aHJlZS1zcGlubmVycy5odG1sXG5cdFx0Ki9cblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0d2lkdGg6IDdweDtcblx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXG5cdC5wc3dwX19wcmVsb2FkZXJfX2RvbnV0IHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdHdpZHRoOiAxNHB4O1xuXHRcdGhlaWdodDogMTRweDtcblx0XHRib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXHQucHN3cF9fcHJlbG9hZGVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bGVmdDogYXV0bztcblx0XHR0b3A6IGF1dG87XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGZsb2F0OiByaWdodDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGNsb2Nrd2lzZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB9XG59XG5cbkBrZXlmcmFtZXMgZG9udXQtcm90YXRlIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKSB9XG4gIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC0xNDBkZWcpIH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApIH1cbn1cblxuXG4vKlxuXHRcblx0Ni4gQWRkaXRpb25hbCBzdHlsZXNcblxuICovXG5cbi8qIHJvb3QgZWxlbWVudCBvZiBVSSAqL1xuLnBzd3BfX3VpIHtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0b3BhY2l0eTogMTtcblx0ei1pbmRleDogJHBzd3BfX3Jvb3Qtei1pbmRleCArIDUwO1xufVxuXG4vKiB0b3AgYmxhY2sgYmFyIHdpdGggYnV0dG9ucyBhbmQgXCIxIG9mIFhcIiBpbmRpY2F0b3IgKi9cbi5wc3dwX190b3AtYmFyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdGhlaWdodDogNDRweDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5wc3dwX19jYXB0aW9uLFxuLnBzd3BfX3RvcC1iYXIsXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuLnBzd3AtLWhhc19tb3VzZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuXHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgXG5cdHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5ICRwc3dwX19jb250cm9scy10cmFuc2l0aW9uLWR1cmF0aW9uIGN1YmljLWJlemllciguNCwwLC4yMiwxKTtcbn1cblxuLyogcHN3cC0taGFzX21vdXNlIGNsYXNzIGlzIGFkZGVkIG9ubHkgd2hlbiB0d28gc3Vic2VxdWVudCBtb3VzZW1vdmUgZXZlbnRzIG9jY3VyICovXG4ucHN3cC0taGFzX21vdXNlIHtcblx0LnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG5cdC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0fVxufVxuXG4ucHN3cF9fdG9wLWJhcixcbi5wc3dwX19jYXB0aW9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xufVxuXG4vKiBwc3dwX191aS0tZml0IGNsYXNzIGlzIGFkZGVkIHdoZW4gbWFpbiBpbWFnZSBcImZpdHNcIiBiZXR3ZWVuIHRvcCBiYXIgYW5kIGJvdHRvbSBiYXIgKGNhcHRpb24pICovXG4ucHN3cF9fdWktLWZpdCB7XG5cdC5wc3dwX190b3AtYmFyLFxuXHQucHN3cF9fY2FwdGlvbiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xuXHR9XG59XG5cbi8qIHBzd3BfX3VpLS1pZGxlIGNsYXNzIGlzIGFkZGVkIHdoZW4gbW91c2UgaXNuJ3QgbW92aW5nIGZvciBzZXZlcmFsIHNlY29uZHMgKEpTIG9wdGlvbiB0aW1lVG9JZGxlKSAqL1xuXHRcbi5wc3dwX191aS0taWRsZSB7XG5cdC5wc3dwX190b3AtYmFyIHsgXG5cdFx0b3BhY2l0eTogMDsgXG5cdH1cblxuXHQucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcblx0LnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5cbi8qXG5cdHBzd3BfX3VpLS1oaWRkZW4gY2xhc3MgaXMgYWRkZWQgd2hlbiBjb250cm9scyBhcmUgaGlkZGVuXG5cdGUuZy4gd2hlbiB1c2VyIHRhcHMgdG8gdG9nZ2xlIHZpc2liaWxpdHkgb2YgY29udHJvbHNcbiovXG4ucHN3cF9fdWktLWhpZGRlbiB7XG5cdC5wc3dwX190b3AtYmFyLFxuXHQucHN3cF9fY2FwdGlvbixcblx0LnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG5cdC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG5cdFx0LyogRm9yY2UgcGFpbnQgJiBjcmVhdGUgY29tcG9zaXRpb24gbGF5ZXIgZm9yIGNvbnRyb2xzLiAqL1xuXHRcdG9wYWNpdHk6IDAuMDAxOyBcblx0fVxufVxuXG4vKiBwc3dwX191aS0tb25lLXNsaWRlIGNsYXNzIGlzIGFkZGVkIHdoZW4gdGhlcmUgaXMganVzdCBvbmUgaXRlbSBpbiBnYWxsZXJ5ICovXG4ucHN3cF9fdWktLW9uZS1zbGlkZSB7XG5cdC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuXHQucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQsXG5cdC5wc3dwX19jb3VudGVyIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi5wc3dwX19lbGVtZW50LS1kaXNhYmxlZCB7XG5cdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQGlmICRwc3dwX19pbmNsdWRlLW1pbmltYWwtc3R5bGUgPT0gdHJ1ZSB7XG5cdC5wc3dwLS1taW5pbWFsLS1kYXJrIHtcblx0XHQucHN3cF9fdG9wLWJhciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdH1cblx0fVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiQGltcG9ydCBcInNyYy9hc3NldHMvY3NzL3Bob3Rvc3dpcGUvbWFpbi5zY3NzXCI7IFxuQGltcG9ydCBcInNyYy9hc3NldHMvY3NzL3Bob3Rvc3dpcGUvZGVmYXVsdC1za2luL2RlZmF1bHQtc2tpbi5zY3NzXCI7IFxuXG5oMSB7bWFyZ2luOiAyZW07fVxuLnBzd3BfX2NhcHRpb25fX2NlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cblxuLnBzd3AtLW9wZW4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wc3dwLS1hbmltYXRlX29wYWNpdHksXG4ucHN3cF9fYmcsXG4ucHN3cF9fY2FwdGlvbixcbi5wc3dwX190b3AtYmFyLFxuLnBzd3AtLWhhc19tb3VzZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcbi5wc3dwLS1oYXNfbW91c2UgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0e1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllciguNCwwLC4yMiwxKTtcbn1cblxuZmlndXJlIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogMzMuMzMzJTtcblx0ZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgaW1nIHt3aWR0aDogMTAwJTt9XG5cbi5zcGFjZXIge2hlaWdodDogNWVtO31cbi5nYWxsZXJ5e1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWdhcDogMjBweDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuXHRncmlkLWF1dG8tcm93czogMjUwcHg7XG5cdC5zbGlkZV90aHVtYnN7XG5cdFx0LnNsaWRlX3RodW1ic19ob2xkZXIsIGltZywgZmlndXJle1xuXHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0XHRmaWd1cmV7XG5cdFx0XHRtYXJnaW46MDtcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcblx0XHRcdC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuM3M7XG5cdFx0XHQmOmhvdmVye1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDZweCA2cHggMThweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xuXHRcdFx0fVxuXHRcdFx0aW1ne1xuXHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5cblxuLy8gQG1lZGlhKG1heC13aWR0aDogMTMzM3B4KSB7XG4vLyBcdC5nYWxsZXJ5IC5zbGlkZV90aHVtYnMge1xuLy8gXHQgIGZsZXgtYmFzaXM6IDMzLjMzJTtcbi8vIFx0fVxuLy8gICB9XG4vLyBAbWVkaWEobWF4LXdpZHRoOiAxMDI0cHgpIHtcbi8vIFx0LmdhbGxlcnkgLnNsaWRlX3RodW1icyB7XG4vLyBcdFx0ZmxleC1iYXNpczogMzMuMzMlO1xuLy8gXHR9XG4vLyB9XG4vLyBAbWVkaWEobWF4LXdpZHRoOiA4MTVweCkge1xuLy8gXHQuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIHtcbi8vIFx0ICBmbGV4LWJhc2lzOiA1MCU7XG4vLyBcdH1cbi8vIH1cbi8vIEBtZWRpYShtYXgtd2lkdGg6IDU1NXB4KSB7XG4vLyBcdC5nYWxsZXJ5IC5zbGlkZV90aHVtYnMge1xuLy8gXHRcdGZsZXgtYmFzaXM6IDEwMCU7XG4vLyBcdH1cbi8vIH1cblxuIl19 */"

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
/* harmony import */ var photoswipe_dist_photoswipe_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! photoswipe/dist/photoswipe.min.js */ "./node_modules/photoswipe/dist/photoswipe.min.js");
/* harmony import */ var photoswipe_dist_photoswipe_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default.js */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/gallery.service */ "./src/app/services/gallery.service.ts");








//import {type} from 'os';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(galleryservice, route, router, location) {
        var _this = this;
        this.galleryservice = galleryservice;
        this.route = route;
        this.router = router;
        this.location = location;
        this.ps_gallery = null;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.album = route.snapshot.paramMap.get('album') !== null ? route.snapshot.paramMap.get('album') : 'default';
                _this.setActiveSlides();
            }
        });
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryservice.getGalleryTitles().subscribe(function (galleryTitles) { return _this.galleryTitles = galleryTitles; });
        this.route.params
            .switchMap(function (params) { return _this.galleryservice.getGalleryByTitle(params['title']); }) // (+) converts string id to a number
            .subscribe(function (gallery) {
            _this.albums = _this.galleryservice.getGalleryAlbums(gallery.title, gallery);
            _this.gallery = gallery;
            _this.setActiveSlides();
            _this.setPrevNext(gallery.title);
        });
    };
    GalleryComponent.prototype.galleryCarousel = function (i) {
        this.gallerySlides = this.gallery.slides.filter(function (slide) { return slide.album == i; });
        this.ps_element = document.querySelectorAll('.pswp')[0];
        this.ps_options = {
            index: i !== null ? i : 0,
            showAnimationDuration: 400,
            showHideOpacity: true,
            zoomEl: false,
            maxSpreadZoom: 1,
            getDoubleTapZoom: function (isMouseClick, item) {
                return item.initialZoomLevel;
            },
            pinchToClose: false
        };
        this.ps_gallery = new photoswipe_dist_photoswipe_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.ps_element, photoswipe_dist_photoswipe_ui_default_js__WEBPACK_IMPORTED_MODULE_5___default.a, this.gallerySlides, this.ps_options);
        this.ps_gallery.init();
    };
    GalleryComponent.prototype.carousel = function (slide) {
        this.ps_element = document.querySelectorAll('.pswp')[0];
        this.ps_options = {
            index: 0,
            showAnimationDuration: 400,
            showHideOpacity: true,
            zoomEl: false,
            maxSpreadZoom: 1,
            getDoubleTapZoom: function (isMouseClick, item) {
                return item.initialZoomLevel;
            },
            pinchToClose: false
        };
        console.log('--  SLIDE --');
        console.log(slide);
        console.log(this.activeSlides);
        this.ps_gallery = new photoswipe_dist_photoswipe_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.ps_element, photoswipe_dist_photoswipe_ui_default_js__WEBPACK_IMPORTED_MODULE_5___default.a, [slide], this.ps_options);
        this.ps_gallery.init();
    };
    GalleryComponent.prototype.getFirstImage = function (val) {
        this.firstImage = this.gallery.slides.find(function (x) { return x.album == val; });
        return typeof this.firstImage !== 'undefined' ? this.firstImage.src : '';
    };
    GalleryComponent.prototype.setActiveSlides = function () {
        var _this = this;
        if (this.gallery) {
            this.activeSlides = this.gallery.slides.filter(function (slide) { return slide.album == _this.album; });
        }
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
            styles: [('src/assets/css/photoswipe/default-skin/default-skin.scss').toString(),
                ('src/assets/css/photoswipe/main.scss').toString(), __webpack_require__(/*! ./gallery.component.scss */ "./src/app/pages/gallery/gallery.component.scss")]
        })
        // ('../../../../node_modules/photoswipe/dist/photoswipe.css').toString(),
        // ('../../../../node_modules/photoswipe/dist/default-skin/default-skin.css').toString(),
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_gallery_service__WEBPACK_IMPORTED_MODULE_7__["GalleryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
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

module.exports = "<header>\n\t<div class=\"row\" data-color=\"intro\">\n\t\t\t<h3>lorem ipsum boilerplate text intro</h3>\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\ttodo list:\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t\t<del>fix w/h of link to galleries from home for desktop and mobile</del>\n\t\t\t\t</li>\n\t\t\t\t<li> <del> add tilt.js to home</del></li>\n\t\t\t\t<li>\n\t\t\t\t\t\t<del>fix routes to galleries to huse ng-href https://angular.io/guide/ajs-quick-reference#ng-href</del>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tbuild server error pages, 404 etc\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tpage transitions\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t- shape overlays example in dls\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t- mobile menu\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t- style galleries\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t- contact form\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t- about page design with cv\n\t\t\t\t</li>\n\t\t\t</ul>\n\t</div>\n</header>\n\n<div *ngIf=\"galleries\" class=\"galleries\">\n\t<div *ngFor=\"let gallery of galleries; let i=index; let odd=odd; let even=even;\" class=\"row\" [ngClass]=\"{ odd: odd, even: even }\" attr.data-color=\"{{gallery.title}}\" >\n\t\t<div class=\"galleryPreview js-tilt\"  data-tilt>\n\t\t\t<div class=\"breakout\">\n\t\t\t\t<a class=\"desc\" [routerLink]=\"['/gallery', gallery.title]\">\n\t\t\t\t\t<h1 class=\"gallery-link\">{{gallery.title}}</h1>\n\t\t\t\t\t<p>description</p>\n\t\t\t\t</a>\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.tile {\n  display: block;\n  width: 300px;\n  height: 300px;\n  background: linear-gradient(135deg, #ff00ba 0%, #fae713 100%);\n  box-shadow: 0 3px 47px rgba(0, 0, 0, 0.2);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative; }\n.tile .inner {\n    display: block;\n    width: 200px;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translateZ(20px) translateX(-50%) translateY(-50%);\n            transform: translateZ(20px) translateX(-50%) translateY(-50%);\n    background: transparent;\n    text-align: center;\n    font-size: 40px;\n    line-height: 40px;\n    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);\n    color: white; }\nheader h1 {\n  text-align: center; }\n.galleries {\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n.galleries .row {\n    height: 60vh;\n    margin-bottom: 10px;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    display: flex; }\n.galleries .row .galleryPreview {\n      margin: 0 auto;\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-image: url('thumb_fractures.jpg');\n      background-size: 350px 350px;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 350px;\n      height: 350px;\n      -webkit-transform-style: preserve-3d;\n              transform-style: preserve-3d; }\n.galleries .row .galleryPreview .breakout {\n        position: relative; }\n.galleries .row .galleryPreview .breakout a.desc {\n          text-decoration: none;\n          -webkit-transform: translateZ(20px);\n                  transform: translateZ(20px);\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          height: 200px;\n          width: 100%;\n          margin-left: calc(-50% + 50%);\n          position: relative;\n          color: #222; }\n.galleries .row .galleryPreview .breakout a.desc h1 {\n            margin: 0;\n            font-family: 'salomeregular', Georgia, Serif; }\n.galleries .row .galleryPreview .breakout a.desc p {\n            font-size: 1.5rem; }\n.gallery {\n  background-size: cover; }\n.gallery   .gallery_img {\n    width: 100%;\n    height: 100%; }\n.gallery-link:hover {\n  cursor: pointer; }\n@media only screen and (min-width: 960px) {\n  .galleries .row {\n    height: 90vh; }\n    .galleries .row .desc {\n      flex: none;\n      height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy90aGUtbW9uYXJxLXNpdGUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBRWIsNkRBQTZEO0VBQzdELHlDQUF5QztFQUN6QyxvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLGtCQUFrQixFQUFBO0FBUm5CO0lBVUUsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QscUVBQTZEO1lBQTdELDZEQUE2RDtJQUM3RCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNENBQXlDO0lBQ3pDLFlBQVksRUFBQTtBQUlkO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0FBSHZCO0lBZ0JFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYSxFQUFBO0FBckJmO01BdUJHLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsNENBQXFFO01BQ3JFLDRCQUE0QjtNQUM1QiwyQkFBMkI7TUFDM0IsNEJBQTRCO01BQzVCLFlBQVk7TUFDWixhQUFhO01BQ2Isb0NBQTRCO2NBQTVCLDRCQUE0QixFQUFBO0FBbEMvQjtRQW9DSSxrQkFBa0IsRUFBQTtBQXBDdEI7VUFzQ0sscUJBQXFCO1VBQ3JCLG1DQUEyQjtrQkFBM0IsMkJBQTJCO1VBQzNCLGFBQWE7VUFDYixzQkFBc0I7VUFDdEIsdUJBQXVCO1VBQ3ZCLG1CQUFtQjtVQUNuQixhQUFhO1VBQ2IsV0FBVztVQUNYLDZCQUE2QjtVQUM3QixrQkFBa0I7VUFFbEIsV0FBVyxFQUFBO0FBakRoQjtZQW1ETSxTQUFTO1lBQ1QsNENBQTRDLEVBQUE7QUFwRGxEO1lBdURNLGlCQUFpQixFQUFBO0FBb0N2QjtFQUNDLHNCQUFzQixFQUFBO0FBRHZCO0lBR0UsV0FBVztJQUNYLFlBQVksRUFBQTtBQUdkO0VBQ0csZUFBZSxFQUFBO0FBSWxCO0VBQ0M7SUFFRSxZQUFZLEVBQUE7SUFGZDtNQUlHLFVBQVU7TUFFVixZQUFZLEVBQUEsRUFFWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50aWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmYwMGJhIDAlLCAjZmFlNzEzIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmYwMGJhIDAlLCAjZmFlNzEzIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDNweCA0N3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC50aWxlIC5pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KSB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBjb2xvcjogd2hpdGU7IH1cblxuaGVhZGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5nYWxsZXJpZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLmdhbGxlcmllcyAucm93IHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuZ2FsbGVyaWVzIC5yb3cgLmdhbGxlcnlQcmV2aWV3IHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9mcmFjdHVyZXMuanBnXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAzNTBweCAzNTBweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxuICAgICAgLmdhbGxlcmllcyAucm93IC5nYWxsZXJ5UHJldmlldyAuYnJlYWtvdXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgLmdhbGxlcmllcyAucm93IC5nYWxsZXJ5UHJldmlldyAuYnJlYWtvdXQgYS5kZXNjIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTUwJSArIDUwJSk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGNvbG9yOiAjMjIyOyB9XG4gICAgICAgICAgLmdhbGxlcmllcyAucm93IC5nYWxsZXJ5UHJldmlldyAuYnJlYWtvdXQgYS5kZXNjIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2Fsb21lcmVndWxhcicsIEdlb3JnaWEsIFNlcmlmOyB9XG4gICAgICAgICAgLmdhbGxlcmllcyAucm93IC5nYWxsZXJ5UHJldmlldyAuYnJlYWtvdXQgYS5kZXNjIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07IH1cblxuLmdhbGxlcnkge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG4gIC5nYWxsZXJ5IMKgwqAuZ2FsbGVyeV9pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgfVxuXG4uZ2FsbGVyeS1saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmdhbGxlcmllcyAucm93IHtcbiAgICBoZWlnaHQ6IDkwdmg7IH1cbiAgICAuZ2FsbGVyaWVzIC5yb3cgLmRlc2Mge1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIGhlaWdodDogYXV0bzsgfSB9XG4iLCIudGlsZXtcdFxuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDMwMHB4O1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjAwYmEgMCUsICNmYWU3MTMgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjAwYmEgMCUsICNmYWU3MTMgMTAwJSk7XG5cdGJveC1zaGFkb3c6IDAgM3B4IDQ3cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdC5pbm5lcntcdFx0XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDIwMHB4O1xuXHRcdGhlaWdodDogNDBweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA1MCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KSB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRsaW5lLWhlaWdodDogNDBweDtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwwLDAsMC4zKTtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cbn1cblxuaGVhZGVyIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYWxsZXJpZXN7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Ly8gaHRtbCB7XG5cdC8vIFx0d2lkdGg6IDEwMCU7XG5cdC8vIFx0aGVpZ2h0OiAxMDAlO1xuXHQvLyB9XG5cdFxuXG5cdFxuXHQucm93e1xuXHRcdC8vIGRpc3BsYXk6IGZsZXg7XG5cdFx0Ly8gZmxleDogMSAxIGF1dG87XG5cdFx0Ly8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0Ly8gYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDYwdmg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LmdhbGxlcnlQcmV2aWV3IHtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX2ZyYWN0dXJlcy5qcGcnKTtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogMzUwcHggMzUwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdFx0d2lkdGg6IDM1MHB4O1xuXHRcdFx0aGVpZ2h0OiAzNTBweDtcblx0XHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cdFx0XHQuYnJlYWtvdXQge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGEuZGVzYyB7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiBjYWxjKC01MCUgKyA1MCUpO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0XHRcdFx0aDF7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ3NhbG9tZXJlZ3VsYXInLCBHZW9yZ2lhLCBTZXJpZjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFxuXHRcdC8vIC5nYWxsZXJ5UHJldmlld3tcblx0XHQvLyBcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX2ZyYWN0dXJlcy5qcGcnKTtcblx0XHQvLyBcdGJhY2tncm91bmQtc2l6ZTogMzUwcHggMzUwcHg7XG5cdFx0Ly8gXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0Ly8gXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdC8vIFx0d2lkdGg6IDM1MHB4O1xuXHRcdC8vIFx0aGVpZ2h0OiAzNTBweDtcblx0XHQvLyB9XG5cdFx0Ly8gLmRlc2N7XG5cdFx0Ly8gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Ly8gXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0Ly8gXHRjb2xvcjogIzIyMjtcblx0XHQvLyBcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Ly8gXHRmbGV4OjE7XG5cdFx0Ly8gXHQvLyBmbGV4OiAxIDEgYXV0bztcblx0XHQvLyBcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0Ly8gXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvLyBcdC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Ly8gXHRoZWlnaHQ6IDEwMCU7XG5cdFx0Ly8gXHRoMXtcblx0XHQvLyBcdFx0bWFyZ2luOiAwO1xuXHRcdC8vIFx0XHRmb250LWZhbWlseTogJ3NhbG9tZXJlZ3VsYXInLCBHZW9yZ2lhLCBTZXJpZjtcblx0XHQvLyBcdH1cblx0XHQvLyBcdHB7XG5cdFx0Ly8gXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdC8vIFx0fVxuXHRcdH1cbiAgXHR9XG59XG5cblxuLmdhbGxlcnl7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdMKgwqAuZ2FsbGVyeV9pbWd7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG59XG4uZ2FsbGVyeS1saW5rOmhvdmVyIHtcbiAgXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk2MHB4KXtcblx0LmdhbGxlcmllcyB7XG5cdFx0LnJvd3tcblx0XHRcdGhlaWdodDogOTB2aDtcblx0XHRcdC5kZXNje1xuXHRcdFx0XHRmbGV4OiBub25lO1xuXHRcdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdC8vIGZsZXg6MTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5cbiJdfQ== */"

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
/* harmony import */ var tilt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tilt.js */ "./node_modules/tilt.js/src/tilt.jquery.js");
/* harmony import */ var tilt_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tilt_js__WEBPACK_IMPORTED_MODULE_3__);



// import { GALLERIES} from 'src/app/shared/galleries';
// import Tilt from 'tilt.js';
// const tilt = require('tilt');

// import * as $ from 'jquery';
var tilt = $('.js-tilt').tilt();
var HomeComponent = /** @class */ (function () {
    function HomeComponent(galleryService) {
        this.galleryService = galleryService;
        this.title = 'Look jQuery Animation working in action!';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryService.getGalleries().subscribe(function (galleries) { return _this.galleries = galleries; });
        $(document).ready(function () {
            $('.js-tilt').tilt({
                scale: 1,
                perspective: 500,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                glare: true,
                maxGlare: .25,
            });
        });
        $(window).scroll(function () {
            // selectors
            var $window = $(window), $body = $('body'), $panel = $('.row');
            // Change 33% earlier than scroll position so colour is there when you arrive.
            var scroll = $window.scrollTop() + ($window.height() / 5);
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
                    $body.addClass('color-intro');
                }
            });
        }).scroll();
        // const body = document.getElementsByTagName('body')[0];
        // body.classList.add('auth');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        // body.classList.remove('color-fractures', 'color-photography', 'me');
        body.removeAttribute('class');
    }; // onSelect(gallery: Gallery){
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
    GalleryService.prototype.getGalleryAlbums = function (title, gallery) {
        return Array.from(new Set(gallery.slides.filter(function (s) { return s.album !== 'default'; }).map(function (slide) { return slide.album; })));
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
        slides: [
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Sea side, south shore",
                album: 'default'
            },
            {
                src: "https://media.gettyimages.com/photos/rainbow-colored-fan-picture-id172980469",
                w: 1200,
                h: 900,
                title: "Image Caption 1",
                album: 'default'
            },
            {
                src: "https://media.gettyimages.com/photos/young-couple-choosing-the-right-color-for-their-wall-while-renovating-picture-id922010262",
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
        slides: [
            {
                src: "assets/images/texture_on_polaroid/img146.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img112.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img113.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img114.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img116.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img117_2.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img042.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img157.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img160.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img192.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img184.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img179.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img172.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img166.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img158.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img157.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img153.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img152.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img132.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img129.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img119.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "assets/images/texture_on_polaroid/img116.jpg",
                w: 900,
                h: 1067,
                title: "Aura",
                album: 'aura'
            },
            {
                src: "https://media.gettyimages.com/photos/the-house-used-in-the-american-sitcom-the-brady-bunch-has-been-listed-picture-id1001904568",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'at-home'
            },
            {
                src: "https://media.gettyimages.com/photos/modern-architecture-in-chile-from-raimundo-anguita-in-hacienda-picture-id976189812",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'at-home'
            },
            {
                src: "https://media.gettyimages.com/photos/mother-and-father-watching-young-daughter-play-picture-id659856897",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'at-home'
            },
            {
                src: "https://media.gettyimages.com/photos/newlyconstructed-home-is-offered-for-sale-on-april-24-2018-in-chicago-picture-id950869234",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'at-home'
            },
            {
                src: "https://media.gettyimages.com/photos/dilapidated-haunted-house-in-maine-picture-id149267319",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'at-home'
            },
            {
                src: "https://media.gettyimages.com/photos/autumn-in-bostons-brighton-neighborhood-picture-id1032330550",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'at-home'
            },
            {
                src: "https://media.gettyimages.com/photos/passenger-train-is-seen-on-the-great-belt-bridge-after-a-railway-on-picture-id1076538784",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'by-train'
            },
            {
                src: "https://media.gettyimages.com/photos/emegency-crews-work-at-the-scene-of-a-amtrak-train-derailment-on-18-picture-id894968984",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'by-train'
            },
            {
                src: "https://media.gettyimages.com/photos/scenic-view-of-train-on-viaduct-in-switzerland-picture-id898687414",
                w: 1200,
                h: 900,
                title: "Image Caption",
                album: 'by-train'
            }
        ]
    },
    {
        id: 3,
        title: "testing",
        description: "123SC",
        thumbnail: "sfsfd",
        slides: [
            {
                src: "https://media.gettyimages.com/photos/son-looking-at-photos-on-smartphone-with-dad-picture-id902907098",
                w: 1200,
                h: 900,
                title: "Sea side, south shore",
                album: 'default'
            },
            {
                src: "https://media.gettyimages.com/photos/rainbow-colored-fan-picture-id172980469",
                w: 1200,
                h: 900,
                title: "Image Caption 1",
                album: 'default'
            },
            {
                src: "https://media.gettyimages.com/photos/young-couple-choosing-the-right-color-for-their-wall-while-renovating-picture-id922010262",
                w: 1200,
                h: 900,
                title: "Image Caption 2",
                album: 'default'
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navWrapper\">\n\t<nav>\n\n\t<img src=\"assets/images/logo-nav@2x.png\" width=\"72\" height=\"72\">\n\n\t<!-- menu -->\n\t<ul class=\"menu\" >\n\t\t<li>\n\t\t\t<a class=\"navbar-item\" routerLink=\"\">Home</a>\n\t\t</li>\n\t\t<!--<li><a class=\"navbar-item\" routerLink=\"gallery\">Gallery</a></li>-->\n\t\t<li>\n\t\t\t<a class=\"navbar-item\" routerLink=\"contact\">Contact</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a class=\"navbar-item\" routerLink=\"about\">About</a>\n\t\t</li>\n\t</ul>\n\n\t</nav>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navWrapper {\n  position: relative;\n  max-width: 1230px;\n  height: 80px;\n  width: 100%;\n  margin-bottom: 80px; }\n  .navWrapper nav {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center; }\n  .navWrapper nav .menu {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-end;\n      list-style-type: none;\n      padding: 0;\n      margin: 0; }\n  .navWrapper nav .menu a {\n        display: block;\n        text-decoration: none;\n        padding: .6em 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1zaXRlL3NyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTtFQUxwQjtJQU9FLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLG1CQUFtQixFQUFBO0VBVnJCO01BY0csYUFBYTtNQUNiLGVBQWU7TUFDZix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLFVBQVU7TUFDVixTQUFTLEVBQUE7RUFuQlo7UUFxQkksY0FBYztRQUNkLHFCQUFxQjtRQUNyQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2V3JhcHBlcntcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXgtd2lkdGg6IDEyMzBweDtcblx0aGVpZ2h0OiA4MHB4O1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWJvdHRvbTogODBweDtcblx0bmF2IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHQvLyBwb3NpdGlvbjogZml4ZWQ7XG5cdFx0Ly8gd2lkdGg6IDEwMCU7XHRcdCAgXG5cdFx0Lm1lbnV7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRhe1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAuNmVtIDFlbTtcblx0XHRcdH1cblx0XHR9XG5cdH0gXG59XG5cbiJdfQ== */"

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