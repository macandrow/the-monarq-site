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

module.exports = "<span *ngIf=\"gallery !== undefined\">\n    <h1 class=\"text-center\">\n        {{gallery.title | uppercase}}\n    </h1>\n  <p>{{gallery.description}}</p>\n  <div *ngIf=\"albums && album === 'default'\">\n    <h4>Gallery Albums</h4>\n    <p *ngFor=\"let alb of albums\"><a [routerLink]=\"['/gallery',gallery.title,alb]\">{{alb}}</a></p>\n  </div>\n</span>\n\n<!-- Galley wrapper that contains all items -->\n<div *ngIf=\"gallery !== undefined\" id=\"gallery\" class=\"gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n  <!-- Use figure for a more semantic html -->\n\n\n  <span class=\"slide_thumbs\" *ngFor=\"let slide of activeSlides; let i = index;\">\n    <span *ngIf=\"slide.album == 'default' || album == slide.album\">\n      <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\" >\n        <!-- Link to the big image, not mandatory, but usefull when there is no JS -->\n        <a [href]=\"\" (click)=\"carousel(slide)\"  attr.data-caption=\"{{slide.title}}>\" itemprop=\"contentUrl\">\n          <!-- Thumbnail -->\n          <img [src]=\"slide.src\" itemprop=\"thumbnail\" alt=\"Image description\">\n        </a>\n      </figure>\n    </span>\n  </span>\n  <span *ngIf=\"albums.length > 1 && albums[0] !== '' && album == 'default'\">\n    <span class=\"slide_thumbs\" *ngFor=\"let alb2 of albums; let j = index;\">\n\n        <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\" >\n          <!-- Link to the big image, not mandatory, but usefull when there is no JS -->\n          <a [href]=\"\" (click)=\"galleryCarousel(alb2)\"  attr.data-caption=\"{{alb}}>\" itemprop=\"contentUrl\">\n            <!-- Thumbnail -->\n            <img [src]=\"getFirstImage(alb2)\" itemprop=\"thumbnail\" alt=\"Image description\">\n          </a>\n        </figure>\n      </span>\n    </span>\n\n</div>\n<hr>\n\n<!-- Some spacing 😉 -->\n<div class=\"spacer\"></div>\n\n\n<!-- Root element of PhotoSwipe. Must have class pswp. -->\n<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n<!-- Background of PhotoSwipe. \n     It's a separate element as animating opacity is faster than rgba(). -->\n<div class=\"pswp__bg\"></div>\n<!-- Slides wrapper with overflow:hidden. -->\n<div class=\"pswp__scroll-wrap\">\n<!-- Container that holds slides. \n        PhotoSwipe keeps only 3 of them in the DOM to save memory.\n        Don't modify these 3 pswp__item elements, data is added later on. -->\n<div class=\"pswp__container\">\n<div class=\"pswp__item\"></div>\n<div class=\"pswp__item\"></div>\n<div class=\"pswp__item\"></div>\n</div>\n<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n<div class=\"pswp__ui pswp__ui--hidden\">\n<div class=\"pswp__top-bar\">\n  <!--  Controls are self-explanatory. Order can be changed. -->\n  <div class=\"pswp__counter\"></div>\n  <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n  <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n  <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n  <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n  <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n  <!-- element will get class pswp__preloader--active when preloader is running -->\n  <div class=\"pswp__preloader\">\n    <div class=\"pswp__preloader__icn\">\n      <div class=\"pswp__preloader__cut\">\n        <div class=\"pswp__preloader__donut\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n  <div class=\"pswp__share-tooltip\"></div>\n</div>\n<button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n</button>\n<button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n</button>\n<div class=\"pswp__caption\">\n  <div class=\"pswp__caption__center\"></div>\n</div>\n</div>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 2em; }\n\n.pswp__caption__center {\n  text-align: center; }\n\nimg {\n  width: 100%; }\n\n.spacer {\n  height: 5em; }\n\n.gallery {\n  display: inline-block;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\nfigure {\n  flex: 1 0 260px;\n  margin: 20px 10px;\n  max-width: 20%;\n  float: left;\n  min-height: 220px; }\n\nfigure a img {\n    width: 100%;\n    height: auto;\n    display: block; }\n\nfigure a img:hover {\n    cursor: pointer; }\n\n.pswp--open {\n  color: #ffffff; }\n\n.pswp--animate_opacity,\n.pswp__bg,\n.pswp__caption,\n.pswp__top-bar,\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvdGhlLW1vbmFycS1zaXRlL3NyYy9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUksV0FBVyxFQUFBOztBQUNmO0VBQXdCLGtCQUFrQixFQUFBOztBQU0xQztFQUFLLFdBQVcsRUFBQTs7QUFDaEI7RUFBUyxXQUFXLEVBQUE7O0FBRXBCO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFPaEM7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBTG5CO0lBT0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjLEVBQUE7O0FBVGxCO0lBWUksZUFBZSxFQUFBOztBQUduQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7Ozs7OztFQU9FLHVEQUFrRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge21hcmdpbjogMmVtO31cbi5wc3dwX19jYXB0aW9uX19jZW50ZXIge3RleHQtYWxpZ246IGNlbnRlcjt9XG4vLyBmaWd1cmUge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiAzMy4zMzMlO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vIH1cbmltZyB7d2lkdGg6IDEwMCU7fVxuLnNwYWNlciB7aGVpZ2h0OiA1ZW07fVxuXG4uZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLy8gZmxleDogMSAwIDMwMHB4OyAvKiBleHBsYW5hdGlvbiBiZWxvdyAqL1xuICAvLyBtYXJnaW46IDVweDtcbiAgLy8gaGVpZ2h0OiAzMDBweDtcbn1cblxuZmlndXJlIHtcbiAgZmxleDogMSAwIDI2MHB4O1xuICBtYXJnaW46IDIwcHggMTBweDtcbiAgbWF4LXdpZHRoOiAyMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgYSBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGEgaW1nOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjs7XG4gIH1cbn1cbi5wc3dwLS1vcGVuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucHN3cC0tYW5pbWF0ZV9vcGFjaXR5LFxuLnBzd3BfX2JnLFxuLnBzd3BfX2NhcHRpb24sXG4ucHN3cF9fdG9wLWJhcixcbi5wc3dwLS1oYXNfbW91c2UgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllciguNCwwLC4yMiwxKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSk7XG59XG5cblxuIl19 */"

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
            styles: [('../../../../node_modules/photoswipe/dist/photoswipe.css').toString(),
                ('../../../../node_modules/photoswipe/dist/default-skin/default-skin.css').toString(), __webpack_require__(/*! ./gallery.component.scss */ "./src/app/pages/gallery/gallery.component.scss")]
        }),
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
            } /*,
            {
                src : "https://media.gettyimages.com/photos/camargue-woman-on-horseback-in-camargue-france-bouches-du-rhone-of-picture-id120665188",
                w : 1200,
                h : 900,
                title : "Image Caption",
                album : 'default'
            },
            {
                src : "https://media.gettyimages.com/photos/teamwork-picture-id183815157",
                w : 1200,
                h : 900,
                title : "Image Caption",
                album : 'default'
            }*/
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