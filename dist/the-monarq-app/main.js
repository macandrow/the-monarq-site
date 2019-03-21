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
        path: 'gallery',
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

module.exports = "<header>\n    <div class=\"inner\">\n        <!-- <h1>the monarq</h1>    -->\n        <p>\n                Chicago born and Seattle based artist and designer Sabella’s move to Pacific Northwest led to a reexamination  of the factors that shaped her identity. New geography and culture sparked new ways of looking—at both external and internal landscapes. Her practice is an attempt to answer pressing questions: How do you make a home after leaving home behind? How do you integrate the past into potential futures? Channeling these concerns through photography, collage, pattern making, and portraiture, she has developed a multidisciplinary body of work that engages this fundamental yet elusive concept of selfhood. \n        </p>\n        <button>Full artist statement</button>\n        <!-- <img src=\"https://picsum.photos/200/200/?random\" alt=\"\" class=\"bioImage\"> -->\n    </div>\n</header>\n<div class=\"content\">\n    <div class=\"inner\">\n        <div class=\"cv\">\n            <h3 class=\"title\">Education</h3>\n            <span class=\"date\">2012</span>\n            <span class=\"event\">Lithography Workshop, Printmakers Collaborative, Chicago, IL</span>\n            <span class=\"date\">2011</span>\n            <span class=\"event\">Screenprint Intensive, Lillstreet Art, Chicago, IL</span>\n            <span class=\"date\">2009</span>\n            <span class=\"event\">\n                    BFA, Graphic Design, Drake University, Des Moines, IA <br>\n                    Concentration: Lithographic Printmaking <br>\n                    Minor: English Writing\n            </span>\n            <h3 class=\"title\">Selected Exhibitions\n                </h3>\n            <span class=\"date\">2019</span>\n            <span class=\"event\">Group exhibition, “Make me a World, 21st Annual Iowa African American Festival,\n                    Des Moines, IA</span>\n            <span class=\"date\">2018</span>\n            <span class=\"event\">Group exhibition, “Our Town: Reclaiming the Narrative”, Anderson Gallery, \n                    Des Moines, IA <br>\n                    Group exhibition, <i>“Cabinet of Curiosities”</i>, Union Street Gallery, Chicago, IL <br>\n                    Group exhibition, <i></i>“Open Source”</i>, LACDA, Los Angeles, CA <br>\n                    Solo exhibition, Cafe Ladro, Seattle, Wa\n            </span>\n            <span class=\"date\">2009</span>\n            <span class=\"event\">Group exhibition, <i>“Hair Down to There”</i>, Koehline Art Museum, Chicago, IL</span>\n            <span class=\"date\">2008</span>\n            <span class=\"event\">Group exhibition, <i>“Light Up”</i> Shijiazhuang, P. R. China</span>\n            <h3 class=\"collections\">Collections\n                </h3>\n            <span class=\"collectionList\">\n                    Private collections, Chicago, IL <br>\n                    Private collections, Seattle, WA <br>\n                    Private collections, Des Moines, IA\n            </span>\n\n        </div>\n        <div class=\"socialLinks\">\n                df\n        </div>\n        <aside>\n                <br>\n                bio side by side with cv link to pdf social links\n                <br>\n                include cv at bottom?\n        </aside>\n        <footer>Footer</footer>\n            \n\n    </div>\n\n</div>  \n\n\n<!-- <div class=\"bio\">\n    <h1>Welcome</h1>\n    <p>“Since then, there has been considerable improvement. However, although women artists are now being exhibited more, their work is still not valued to the extent of the male artists’. We are still a psychological and cultural distance away from recognizing and valuing them.”</p>\n\n    <p>Earlier this year, Culture Type exhibition listings in the spring and summer included just a few shows devoted to black female artists. Far from exhaustive, the roundups were representative of the exhibitions on view at the time. Echoing Weems, “there has been considerable improvement” this fall, the season when art institutions generally present their marquee shows. But, as the artist’s comments also indicate, any sense of parity remains elusive.</p>\n        \n    <p> This selection of fall 2015 exhibitions features artists spanning three generations and represents many “firsts,” including “Dead Treez” at the Museum of Arts and Design, Ebony G. Patterson‘s first monographic museum show in New York (shown above):</p>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: relative;\n  height: 60vh; }\n  header .inner {\n    background: url(\"https://picsum.photos/200/200/?random\") center right no-repeat 75%; }\n  header .inner h1 {\n      color: #4a5365; }\n  .content {\n  background-color: #dde1e6;\n  color: #4a5365; }\n  .content h1 {\n    color: #ffffff; }\n  .content .cv {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(30%) minmax(70%));\n    grid-template-areas: \"title title\"  \"date event\" \"collections collections\" \"collectionList collectionList\"; }\n  .content .cv .title {\n      grid-area: title; }\n  .content .cv .date {\n      grid-area: date; }\n  .content .cv .event {\n      grid-area: event; }\n  .content .cv .collections {\n      grid-area: collections; }\n  .content .cv .collectionList {\n      grid-area: collectionList; }\n  .socialLinks {\n  grid-area: socialLinks;\n  padding: 20px;\n  grid-template-rows: 100px 1fr; }\n  .bio {\n  grid-area: bio;\n  padding: 20px; }\n  aside {\n  grid-area: sidebar; }\n  footer {\n  padding: 20px;\n  grid-area: footer; }\n  .wrapper {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 3fr 1fr;\n  grid-template-areas: \"bio sidebar\"    \"bio socialLinks\"  \"footer footer\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWJlbGxhL0RvY3VtZW50cy9HaXRIdWIvdGhlLW1vbmFycS1zaXRlL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBRmI7SUFJRSxtRkFBbUYsRUFBQTtFQUpyRjtNQU1HLGNBQWEsRUFBQTtFQVloQjtFQUNJLHlCQUF3QjtFQUN4QixjQUFjLEVBQUE7RUFGbEI7SUFJUSxjQUFjLEVBQUE7RUFKdEI7SUFPRSxhQUFhO0lBR2IsaUVBQWlFO0lBQ2pFLDBHQUlnQyxFQUFBO0VBZmxDO01BaUJHLGdCQUFnQixFQUFBO0VBakJuQjtNQW9CRyxlQUFlLEVBQUE7RUFwQmxCO01BdUJHLGdCQUFnQixFQUFBO0VBdkJuQjtNQTBCRyxzQkFBc0IsRUFBQTtFQTFCekI7TUE2QkcseUJBQXlCLEVBQUE7RUFJNUI7RUFDRSxzQkFBc0I7RUFFdEIsYUFBYTtFQUNiLDZCQUE2QixFQUFBO0VBRS9CO0VBQ0UsY0FBYztFQUVkLGFBQWEsRUFBQTtFQUVmO0VBQ0Usa0JBQWtCLEVBQUE7RUFJcEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7RUFHbkI7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLDhCQUE4QjtFQUM5Qix3RUFHaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogNjB2aDtcblx0LmlubmVye1xuXHRcdGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8yMDAvP3JhbmRvbScpIGNlbnRlciByaWdodCBuby1yZXBlYXQgNzUlO1xuXHRcdGgxe1xuXHRcdFx0Y29sb3I6IzRhNTM2NTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vIGRpc3BsYXk6IGdyaWQ7XG4vLyBib3JkZXI6MXB4IHNvbGlkICMwMDA7XG4vLyBncmlkLWdhcDogMTBweDtcbi8vIFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAlLDFmcikgbWlubWF4KDcwJSwyZnIpKTtcblxuLmNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRlMWU2O1xuICAgIGNvbG9yOiAjNGE1MzY1O1xuICAgIGgxe1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcblx0fVxuXHQuY3Z7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHQvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwpO1xuXHRcdC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlICA3MCU7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAlKSBtaW5tYXgoNzAlKSk7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXG5cdFx0XHRcInRpdGxlIHRpdGxlXCIgXG5cdFx0XHRcImRhdGUgZXZlbnRcIlxuXHRcdFx0XCJjb2xsZWN0aW9ucyBjb2xsZWN0aW9uc1wiXG5cdFx0XHRcImNvbGxlY3Rpb25MaXN0IGNvbGxlY3Rpb25MaXN0XCI7XG5cdFx0LnRpdGxlIHtcblx0XHRcdGdyaWQtYXJlYTogdGl0bGU7XG5cdFx0fVxuXHRcdC5kYXRlIHtcblx0XHRcdGdyaWQtYXJlYTogZGF0ZTtcblx0XHR9XG5cdFx0LmV2ZW50IHtcblx0XHRcdGdyaWQtYXJlYTogZXZlbnQ7XG5cdFx0fVxuXHRcdC5jb2xsZWN0aW9uc3tcblx0XHRcdGdyaWQtYXJlYTogY29sbGVjdGlvbnM7XG5cdFx0fVxuXHRcdC5jb2xsZWN0aW9uTGlzdHtcblx0XHRcdGdyaWQtYXJlYTogY29sbGVjdGlvbkxpc3Q7XG5cdFx0fVxuXHR9XG59XG4uc29jaWFsTGlua3Mge1xuICBncmlkLWFyZWE6IHNvY2lhbExpbmtzO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkMzMwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbn1cbi5iaW8ge1xuICBncmlkLWFyZWE6IGJpbztcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYmY2YjtcbiAgcGFkZGluZzogMjBweDtcbn1cbmFzaWRlIHtcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhYWYyO1xuICBcbn1cbmZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ5NjQ0O1xufVxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiYmlvIHNpZGViYXJcIiAgIFxuICAgIFwiYmlvIHNvY2lhbExpbmtzXCIgXG4gICAgXCJmb290ZXIgZm9vdGVyXCI7XG59XG5cbi8vIC5pbm5lcntcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAuYmlvSW1hZ2UsIGgxe1xuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgdG9wOiBjYWxjKDUwJSAtIDQwcHgpO1xuLy8gICAgICAgbGVmdDogNTAlO1xuLy8gICAgICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuLy8gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbi8vICAgfVxuLy8gICAuYmlvSW1hZ2V7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgICBtYXJnaW46IDAgYXV0bztcbi8vICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgei1pbmRleDogMTtcbi8vICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgfSJdfQ== */"

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

module.exports = "<span *ngIf=\"gallery !== undefined\">\n    <h1 class=\"text-center\">\n        {{gallery.title}}\n    </h1>\n  <p>{{gallery.description}}</p>\n  <div *ngIf=\"albums && album === 'default'\">\n    <h4>Gallery Albums</h4>\n    <p *ngFor=\"let alb of albums\"><a [routerLink]=\"['/gallery',gallery.title,alb]\">{{alb}}</a></p>\n  </div>\n</span>\n\n<!-- Galley wrapper that contains all items -->\n<div *ngIf=\"gallery !== undefined\" id=\"gallery\" class=\"gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n  <!-- Use figure for a more semantic html -->\n\n\n  <span class=\"slide_thumbs\" *ngFor=\"let slide of activeSlides; let i = index;\">\n    <span *ngIf=\"slide.album == 'default' || album == slide.album\">\n      <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\" >\n        <!-- Link to the big image, not mandatory, but usefull when there is no JS -->\n        <a [href]=\"\" (click)=\"carousel(slide)\"  attr.data-caption=\"{{slide.title}}>\" itemprop=\"contentUrl\" attr.data-width=\"{{slide.w}}\" attr.data-height=\"{{slide.h}}\">\n          <!-- Thumbnail -->\n          <img [src]=\"slide.src\" itemprop=\"thumbnail\" alt=\"Image description\" [width]=\"slide.w\" [height]=\"slide.h\">\n        </a>\n      </figure>\n    </span>\n  </span>\n  <span *ngIf=\"albums.length > 1 && albums[0] !== '' && album == 'default'\">\n    <span class=\"slide_thumbs\" *ngFor=\"let alb2 of albums; let j = index;\">\n\n        <figure itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\" >\n          <!-- Link to the big image, not mandatory, but usefull when there is no JS -->\n          <a [href]=\"\" (click)=\"galleryCarousel(alb2)\"  attr.data-caption=\"{{alb}}\" itemprop=\"contentUrl\" >\n            <!-- Thumbnail -->\n            <img [src]=\"getFirstImage(alb2)\" itemprop=\"thumbnail\" alt=\"Image description\">\n          </a>\n        </figure>\n      </span>\n    </span>\n\n</div>\n<hr>\n\n<!-- Some spacing 😉 -->\n<div class=\"spacer\"></div>\n\n\n<!-- Root element of PhotoSwipe. Must have class pswp. -->\n<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n<!-- Background of PhotoSwipe. \n     It's a separate element as animating opacity is faster than rgba(). -->\n<div class=\"pswp__bg\"></div>\n<!-- Slides wrapper with overflow:hidden. -->\n<div class=\"pswp__scroll-wrap\">\n<!-- Container that holds slides. \n        PhotoSwipe keeps only 3 of them in the DOM to save memory.\n        Don't modify these 3 pswp__item elements, data is added later on. -->\n<div class=\"pswp__container\">\n<div class=\"pswp__item\"></div>\n<div class=\"pswp__item\"></div>\n<div class=\"pswp__item\"></div>\n</div>\n<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n<div class=\"pswp__ui pswp__ui--hidden\">\n<div class=\"pswp__top-bar\">\n  <!--  Controls are self-explanatory. Order can be changed. -->\n  <div class=\"pswp__counter\"></div>\n  <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n  <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n  <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n  <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n  <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n  <!-- element will get class pswp__preloader--active when preloader is running -->\n  <div class=\"pswp__preloader\">\n    <div class=\"pswp__preloader__icn\">\n      <div class=\"pswp__preloader__cut\">\n        <div class=\"pswp__preloader__donut\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n  <div class=\"pswp__share-tooltip\"></div>\n</div>\n<button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n</button>\n<button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n</button>\n<div class=\"pswp__caption\">\n  <div class=\"pswp__caption__center\"></div>\n</div>\n</div>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\tStyles for basic PhotoSwipe functionality (sliding area, open/close transitions)\n*/\n/* pswp = photoswipe */\n.pswp {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  touch-action: none;\n  z-index: 1500;\n  -webkit-text-size-adjust: 100%;\n  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */\n  -webkit-backface-visibility: hidden;\n  outline: none; }\n.pswp * {\n    box-sizing: border-box; }\n.pswp img {\n    max-width: none; }\n/* style is added when JS option showHideOpacity is set to true */\n.pswp--animate_opacity {\n  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */\n  opacity: 0.001;\n  will-change: opacity;\n  /* for open/close transition */\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp--open {\n  display: block; }\n.pswp--zoom-allowed .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n.pswp--zoomed-in .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab; }\n.pswp--dragging .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing; }\n/*\n\tBackground is added as a separate element.\n\tAs animating opacity is much faster than animating rgba() background-color.\n*/\n.pswp__bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n.pswp__scroll-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n.pswp__container,\n.pswp__zoom-wrap {\n  touch-action: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n/* Prevent selection and tap highlights */\n.pswp__container,\n.pswp__img {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-touch-callout: none; }\n.pswp__zoom-wrap {\n  position: absolute;\n  width: 100%;\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  /* for open/close transition */\n  transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1), -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp__bg {\n  will-change: opacity;\n  /* for open/close transition */\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.pswp--animated-in .pswp__bg,\n.pswp--animated-in .pswp__zoom-wrap {\n  transition: none; }\n.pswp__container,\n.pswp__zoom-wrap {\n  -webkit-backface-visibility: hidden; }\n.pswp__item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden; }\n.pswp__img {\n  position: absolute;\n  width: auto;\n  height: auto;\n  top: 0;\n  left: 0; }\n/*\n\tstretched thumbnail or div placeholder element (see below)\n\tstyle is added to avoid flickering in webkit/blink when layers overlap\n*/\n.pswp__img--placeholder {\n  -webkit-backface-visibility: hidden; }\n/*\n\tdiv element that matches size of large image\n\tlarge image loads on top of it\n*/\n.pswp__img--placeholder--blank {\n  background: #222; }\n.pswp--ie .pswp__img {\n  width: 100% !important;\n  height: auto !important;\n  left: 0;\n  top: 0; }\n/*\n\tError message appears when image is not loaded\n\t(JS option errorMsg controls markup)\n*/\n.pswp__error-msg {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  margin-top: -8px;\n  color: #CCC; }\n.pswp__error-msg a {\n  color: #CCC;\n  text-decoration: underline; }\n/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\n\tContents:\n\n\t1. Buttons\n\t2. Share modal and links\n\t3. Index indicator (\"1 of X\" counter)\n\t4. Caption\n\t5. Loading indicator\n\t6. Additional styles (root element, top bar, idle state, hidden state, etc.)\n\n*/\n/*\n\t\n\t1. Buttons\n\n */\n/* <button> css reset */\n.pswp__button {\n  width: 44px;\n  height: 44px;\n  position: relative;\n  background: none;\n  cursor: pointer;\n  overflow: visible;\n  -webkit-appearance: none;\n  display: block;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  float: right;\n  opacity: 0.75;\n  transition: opacity 0.2s;\n  box-shadow: none; }\n.pswp__button:focus, .pswp__button:hover {\n    opacity: 1; }\n.pswp__button:active {\n    outline: none;\n    opacity: 0.9; }\n.pswp__button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n/* pswp__ui--over-close class it added when mouse is over element that should close gallery */\n.pswp__ui--over-close .pswp__button--close {\n  opacity: 1; }\n.pswp__button,\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  background: url('default-skin.png') 0 0 no-repeat;\n  background-size: 264px 88px;\n  width: 44px;\n  height: 44px; }\n@media (-webkit-min-device-pixel-ratio: 1.1), (-webkit-min-device-pixel-ratio: 1.09375), (min-resolution: 105dpi), (min-resolution: 1.1dppx) {\n  /* Serve SVG sprite if browser supports SVG and resolution is more than 105dpi */\n  .pswp--svg .pswp__button,\n  .pswp--svg .pswp__button--arrow--left:before,\n  .pswp--svg .pswp__button--arrow--right:before {\n    background-image: url('default-skin.svg'); }\n  .pswp--svg .pswp__button--arrow--left,\n  .pswp--svg .pswp__button--arrow--right {\n    background: none; } }\n.pswp__button--close {\n  background-position: 0 -44px; }\n.pswp__button--share {\n  background-position: -44px -44px; }\n.pswp__button--fs {\n  display: none; }\n.pswp--supports-fs .pswp__button--fs {\n  display: block; }\n.pswp--fs .pswp__button--fs {\n  background-position: -44px 0; }\n.pswp__button--zoom {\n  display: none;\n  background-position: -88px 0; }\n.pswp--zoom-allowed .pswp__button--zoom {\n  display: block; }\n.pswp--zoomed-in .pswp__button--zoom {\n  background-position: -132px 0; }\n/* no arrows on touch screens */\n.pswp--touch .pswp__button--arrow--left,\n.pswp--touch .pswp__button--arrow--right {\n  visibility: hidden; }\n/*\n\tArrow buttons hit area\n\t(icon is added to :before pseudo-element)\n*/\n.pswp__button--arrow--left,\n.pswp__button--arrow--right {\n  background: none;\n  top: 50%;\n  margin-top: -50px;\n  width: 70px;\n  height: 100px;\n  position: absolute; }\n.pswp__button--arrow--left {\n  left: 0; }\n.pswp__button--arrow--right {\n  right: 0; }\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  content: '';\n  top: 35px;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 30px;\n  width: 32px;\n  position: absolute; }\n.pswp__button--arrow--left:before {\n  left: 6px;\n  background-position: -138px -44px; }\n.pswp__button--arrow--right:before {\n  right: 6px;\n  background-position: -94px -44px; }\n/*\n\n\t2. Share modal/popup and links\n\n */\n.pswp__counter,\n.pswp__share-modal {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n.pswp__share-modal {\n  display: block;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  position: absolute;\n  z-index: 1600;\n  opacity: 0;\n  transition: opacity 0.25s ease-out;\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n.pswp__share-modal--hidden {\n  display: none; }\n.pswp__share-tooltip {\n  z-index: 1620;\n  position: absolute;\n  background: #FFF;\n  top: 56px;\n  border-radius: 2px;\n  display: block;\n  width: auto;\n  right: 44px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  -webkit-transform: translateY(6px);\n          transform: translateY(6px);\n  transition: -webkit-transform 0.25s;\n  transition: transform 0.25s;\n  transition: transform 0.25s, -webkit-transform 0.25s;\n  -webkit-backface-visibility: hidden;\n  will-change: transform; }\n.pswp__share-tooltip a {\n    display: block;\n    padding: 8px 12px;\n    color: #000;\n    text-decoration: none;\n    font-size: 14px;\n    line-height: 18px; }\n.pswp__share-tooltip a:hover {\n      text-decoration: none;\n      color: #000; }\n.pswp__share-tooltip a:first-child {\n      /* round corners on the first/last list item */\n      border-radius: 2px 2px 0 0; }\n.pswp__share-tooltip a:last-child {\n      border-radius: 0 0 2px 2px; }\n.pswp__share-modal--fade-in {\n  opacity: 1; }\n.pswp__share-modal--fade-in .pswp__share-tooltip {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n/* increase size of share links on touch devices */\n.pswp--touch .pswp__share-tooltip a {\n  padding: 16px 12px; }\na.pswp__share--facebook:before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -12px;\n  right: 15px;\n  border: 6px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #FFF;\n  -webkit-pointer-events: none;\n  -moz-pointer-events: none;\n  pointer-events: none; }\na.pswp__share--facebook:hover {\n  background: #3E5C9A;\n  color: #FFF; }\na.pswp__share--facebook:hover:before {\n    border-bottom-color: #3E5C9A; }\na.pswp__share--twitter:hover {\n  background: #55ACEE;\n  color: #FFF; }\na.pswp__share--pinterest:hover {\n  background: #CCC;\n  color: #CE272D; }\na.pswp__share--download:hover {\n  background: #DDD; }\n/*\n\n\t3. Index indicator (\"1 of X\" counter)\n\n */\n.pswp__counter {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 44px;\n  font-size: 13px;\n  line-height: 44px;\n  color: #FFF;\n  opacity: 0.75;\n  padding: 0 10px; }\n/*\n\t\n\t4. Caption\n\n */\n.pswp__caption {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  min-height: 44px; }\n.pswp__caption small {\n    font-size: 11px;\n    color: #BBB; }\n.pswp__caption__center {\n  text-align: left;\n  max-width: 420px;\n  margin: 0 auto;\n  font-size: 13px;\n  padding: 10px;\n  line-height: 20px;\n  color: #CCC; }\n.pswp__caption--empty {\n  display: none; }\n/* Fake caption element, used to calculate height of next/prev image */\n.pswp__caption--fake {\n  visibility: hidden; }\n/*\n\n\t5. Loading indicator (preloader)\n\n\tYou can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR\n\n */\n.pswp__preloader {\n  width: 44px;\n  height: 44px;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -22px;\n  opacity: 0;\n  transition: opacity 0.25s ease-out;\n  will-change: opacity;\n  direction: ltr; }\n.pswp__preloader__icn {\n  width: 20px;\n  height: 20px;\n  margin: 12px; }\n.pswp__preloader--active {\n  opacity: 1; }\n.pswp__preloader--active .pswp__preloader__icn {\n    /* We use .gif in browsers that don't support CSS animation */\n    background: url('preloader.gif') 0 0 no-repeat; }\n.pswp--css_animation .pswp__preloader--active {\n  opacity: 1; }\n.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {\n    -webkit-animation: clockwise 500ms linear infinite;\n            animation: clockwise 500ms linear infinite; }\n.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {\n    -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;\n            animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite; }\n.pswp--css_animation .pswp__preloader__icn {\n  background: none;\n  opacity: 0.75;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  margin: 0; }\n.pswp--css_animation .pswp__preloader__cut {\n  /* \n\t\t\tThe idea of animating inner circle is based on Polymer (\"material\") loading indicator \n\t\t\t by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html\n\t\t*/\n  position: relative;\n  width: 7px;\n  height: 14px;\n  overflow: hidden; }\n.pswp--css_animation .pswp__preloader__donut {\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: none;\n  margin: 0; }\n@media screen and (max-width: 1024px) {\n  .pswp__preloader {\n    position: relative;\n    left: auto;\n    top: auto;\n    margin: 0;\n    float: right; } }\n@-webkit-keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@-webkit-keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); } }\n@keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); } }\n/*\n\t\n\t6. Additional styles\n\n */\n/* root element of UI */\n.pswp__ui {\n  -webkit-font-smoothing: auto;\n  visibility: visible;\n  opacity: 1;\n  z-index: 1550; }\n/* top black bar with buttons and \"1 of X\" indicator */\n.pswp__top-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 44px;\n  width: 100%; }\n.pswp__caption,\n.pswp__top-bar,\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  -webkit-backface-visibility: hidden;\n  will-change: opacity;\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n/* pswp--has_mouse class is added only when two subsequent mousemove events occur */\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  visibility: visible; }\n.pswp__top-bar,\n.pswp__caption {\n  background-color: rgba(0, 0, 0, 0.5); }\n/* pswp__ui--fit class is added when main image \"fits\" between top bar and bottom bar (caption) */\n.pswp__ui--fit .pswp__top-bar,\n.pswp__ui--fit .pswp__caption {\n  background-color: rgba(0, 0, 0, 0.3); }\n/* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */\n.pswp__ui--idle .pswp__top-bar {\n  opacity: 0; }\n.pswp__ui--idle .pswp__button--arrow--left,\n.pswp__ui--idle .pswp__button--arrow--right {\n  opacity: 0; }\n/*\n\tpswp__ui--hidden class is added when controls are hidden\n\te.g. when user taps to toggle visibility of controls\n*/\n.pswp__ui--hidden .pswp__top-bar,\n.pswp__ui--hidden .pswp__caption,\n.pswp__ui--hidden .pswp__button--arrow--left,\n.pswp__ui--hidden .pswp__button--arrow--right {\n  /* Force paint & create composition layer for controls. */\n  opacity: 0.001; }\n/* pswp__ui--one-slide class is added when there is just one item in gallery */\n.pswp__ui--one-slide .pswp__button--arrow--left,\n.pswp__ui--one-slide .pswp__button--arrow--right,\n.pswp__ui--one-slide .pswp__counter {\n  display: none; }\n.pswp__element--disabled {\n  display: none !important; }\n.pswp--minimal--dark .pswp__top-bar {\n  background: none; }\nh1 {\n  margin: 2em; }\n.pswp__caption__center {\n  text-align: center; }\n.pswp--open {\n  color: #ffffff; }\n.pswp--animate_opacity,\n.pswp__bg,\n.pswp__caption,\n.pswp__top-bar,\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n.spacer {\n  height: 5em; }\n.gallery {\n  width: 1024px;\n  margin: 0 auto;\n  display: grid;\n  grid-gap: 60px;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); }\n.gallery .slide_thumbs .slide_thumbs_holder, .gallery .slide_thumbs img, .gallery .slide_thumbs figure {\n    width: 100%;\n    height: 100%;\n    display: block; }\n.gallery .slide_thumbs figure {\n    margin: 0;\n    transition: all .3s; }\n.gallery .slide_thumbs figure:hover {\n      cursor: pointer;\n      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3); }\n.gallery .slide_thumbs figure img {\n      -o-object-fit: cover;\n         object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWJlbGxhL0RvY3VtZW50cy9HaXRIdWIvdGhlLW1vbmFycS1zaXRlL3NyYy9hc3NldHMvY3NzL3Bob3Rvc3dpcGUvbWFpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FiZWxsYS9Eb2N1bWVudHMvR2l0SHViL3RoZS1tb25hcnEtc2l0ZS9zcmMvYXNzZXRzL2Nzcy9waG90b3N3aXBlL19tYWluLXNldHRpbmdzLnNjc3MiLCIvVXNlcnMvc2FiZWxsYS9Eb2N1bWVudHMvR2l0SHViL3RoZS1tb25hcnEtc2l0ZS9zcmMvYXNzZXRzL2Nzcy9waG90b3N3aXBlL2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4uc2NzcyIsIi9Vc2Vycy9zYWJlbGxhL0RvY3VtZW50cy9HaXRIdWIvdGhlLW1vbmFycS1zaXRlL3NyYy9hcHAvcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUFBO0FBRUE7O0NDQ0M7QURRRCxzQkFBQTtBQUNBO0VBQ0MsYUFBYTtFQUNiLGtCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU07RUFDTixNQUFLO0VBQ0wsZ0JBQWdCO0VBRWhCLGtCQUFrQjtFQUNsQixhRWpCd0I7RUZrQnhCLDhCQUE4QjtFQUM5Qiw2RUFBQTtFQUNBLG1DQUFtQztFQUNuQyxhQUFhLEVBQUE7QUFkZDtJQWtCRyxzQkFBc0IsRUFBQTtBQWxCekI7SUF1QkUsZUFBZSxFQUFBO0FBSWpCLGlFQUFBO0FBQ0E7RUFDQyxtR0FBQTtFQUNBLGNBQWM7RUFDZCxvQkFBbUI7RUFDbkIsOEJBQUE7RUFDQSx1REFBaUYsRUFBQTtBQUdsRjtFQUNDLGNBQWMsRUFBQTtBQUdmO0VBQ0Msc0JBQUE7RUFDQSx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGVBQWUsRUFBQTtBQUdoQjtFQUNDLHNCQUFBO0VBQ0Esb0JB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SUgsd0NBQXFDLEVBQUE7QUF2QnJEO01BMEJJLG9CQUFpQjtTQUFqQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBQaG90b1N3aXBlIG1haW4gQ1NTIGJ5IERtaXRyeSBTZW1lbm92IHwgcGhvdG9zd2lwZS5jb20gfCBNSVQgbGljZW5zZSAqL1xuXG4vKlxuXHRTdHlsZXMgZm9yIGJhc2ljIFBob3RvU3dpcGUgZnVuY3Rpb25hbGl0eSAoc2xpZGluZyBhcmVhLCBvcGVuL2Nsb3NlIHRyYW5zaXRpb25zKVxuKi9cblxuLy8gUGhvdG9Td2lwZSB1c2VzIEF1dG9wcmVmaXhlciwgc28gdmVuZG9yIHByZWZpeGVkIGFyZSBhZGRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gbmVlZGVkLlxuXG5AaW1wb3J0IFwibWFpbi1zZXR0aW5nc1wiO1xuXG4gXG4vKiBwc3dwID0gcGhvdG9zd2lwZSAqL1xuLnBzd3Age1xuXHRkaXNwbGF5OiBub25lO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDowO1xuXHR0b3A6MDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcblx0dG91Y2gtYWN0aW9uOiBub25lO1xuXHR6LWluZGV4OiAkcHN3cF9fcm9vdC16LWluZGV4O1xuXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG5cdC8qIGNyZWF0ZSBzZXBhcmF0ZSBsYXllciwgdG8gYXZvaWQgcGFpbnQgb24gd2luZG93Lm9uc2Nyb2xsIGluIHdlYmtpdC9ibGluayAqL1xuXHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0b3V0bGluZTogbm9uZTtcblxuXHRAaWYgJHBzd3BfX2JveC1zaXppbmctYm9yZGVyLWJveCA9PSB0cnVlIHtcblx0XHQqIHtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0fVxuXHR9XG5cdFxuXHRpbWcge1xuXHRcdG1heC13aWR0aDogbm9uZTtcblx0fVxufVxuXG4vKiBzdHlsZSBpcyBhZGRlZCB3aGVuIEpTIG9wdGlvbiBzaG93SGlkZU9wYWNpdHkgaXMgc2V0IHRvIHRydWUgKi9cbi5wc3dwLS1hbmltYXRlX29wYWNpdHkge1xuXHQvKiAwLjAwMSwgYmVjYXVzZSBvcGFjaXR5OjAgZG9lc24ndCB0cmlnZ2VyIFBhaW50IGFjdGlvbiwgd2hpY2ggY2F1c2VzIGxhZyBhdCBzdGFydCBvZiB0cmFuc2l0aW9uICovXG5cdG9wYWNpdHk6IDAuMDAxO1xuXHR3aWxsLWNoYW5nZTpvcGFjaXR5O1xuXHQvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgJHBzd3BfX3Nob3ctaGlkZS10cmFuc2l0aW9uLWR1cmF0aW9uIGN1YmljLWJlemllciguNCwwLC4yMiwxKTtcbn1cblxuLnBzd3AtLW9wZW4ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLnBzd3AtLXpvb20tYWxsb3dlZCAucHN3cF9faW1nIHtcblx0LyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cblx0Y3Vyc29yOiAtd2Via2l0LXpvb20taW47XG5cdGN1cnNvcjogLW1vei16b29tLWluO1xuXHRjdXJzb3I6IHpvb20taW47XG59XG5cbi5wc3dwLS16b29tZWQtaW4gLnBzd3BfX2ltZyB7XG5cdC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuXHRjdXJzb3I6IC1tb3otZ3JhYjtcblx0Y3Vyc29yOiBncmFiO1xufVxuXG4ucHN3cC0tZHJhZ2dpbmcgIC5wc3dwX19pbWcge1xuXHQvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuXHRjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG5cdGN1cnNvcjogLW1vei1ncmFiYmluZztcblx0Y3Vyc29yOiBncmFiYmluZztcbn1cblxuLypcblx0QmFja2dyb3VuZCBpcyBhZGRlZCBhcyBhIHNlcGFyYXRlIGVsZW1lbnQuXG5cdEFzIGFuaW1hdGluZyBvcGFjaXR5IGlzIG11Y2ggZmFzdGVyIHRoYW4gYW5pbWF0aW5nIHJnYmEoKSBiYWNrZ3JvdW5kLWNvbG9yLlxuKi9cbi5wc3dwX19iZyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiAkcHN3cF9fYmFja2dyb3VuZC1jb2xvcjtcblx0b3BhY2l0eTogMDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuXHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0d2lsbC1jaGFuZ2U6b3BhY2l0eTtcbn1cblxuLnBzd3BfX3Njcm9sbC13cmFwIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG92ZXJmbG93OmhpZGRlbjtcbn1cblxuLnBzd3BfX2NvbnRhaW5lcixcbi5wc3dwX196b29tLXdyYXAge1xuXHQtbXMtdG91Y2gtYWN0aW9uOiBub25lOyBcblx0dG91Y2gtYWN0aW9uOiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcbn1cblxuLyogUHJldmVudCBzZWxlY3Rpb24gYW5kIHRhcCBoaWdobGlnaHRzICovXG4ucHN3cF9fY29udGFpbmVyLFxuLnBzd3BfX2ltZyB7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG5cdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbn1cblxuLnBzd3BfX3pvb20td3JhcCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG5cdC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG5cdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcblx0dHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG5cdC8qIGZvciBvcGVuL2Nsb3NlIHRyYW5zaXRpb24gKi9cblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtICRwc3dwX19zaG93LWhpZGUtdHJhbnNpdGlvbi1kdXJhdGlvbiBjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSk7XG59XG5cbi5wc3dwX19iZyB7XG5cdHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xuXHQvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgJHBzd3BfX3Nob3ctaGlkZS10cmFuc2l0aW9uLWR1cmF0aW9uIGN1YmljLWJlemllciguNCwwLC4yMiwxKTtcbn1cblxuLnBzd3AtLWFuaW1hdGVkLWluIHtcblx0LnBzd3BfX2JnLFxuXHQucHN3cF9fem9vbS13cmFwIHtcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XG5cdFx0dHJhbnNpdGlvbjogbm9uZTtcblx0fVxufVxuXG4ucHN3cF9fY29udGFpbmVyLFxuLnBzd3BfX3pvb20td3JhcCB7XG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ucHN3cF9faXRlbSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHN3cF9faW1nIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG59XG5cbi8qXG5cdHN0cmV0Y2hlZCB0aHVtYm5haWwgb3IgZGl2IHBsYWNlaG9sZGVyIGVsZW1lbnQgKHNlZSBiZWxvdylcblx0c3R5bGUgaXMgYWRkZWQgdG8gYXZvaWQgZmxpY2tlcmluZyBpbiB3ZWJraXQvYmxpbmsgd2hlbiBsYXllcnMgb3ZlcmxhcFxuKi9cbi5wc3dwX19pbWctLXBsYWNlaG9sZGVyIHtcblx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8qXG5cdGRpdiBlbGVtZW50IHRoYXQgbWF0Y2hlcyBzaXplIG9mIGxhcmdlIGltYWdlXG5cdGxhcmdlIGltYWdlIGxvYWRzIG9uIHRvcCBvZiBpdFxuKi9cbi5wc3dwX19pbWctLXBsYWNlaG9sZGVyLS1ibGFuayB7XG5cdGJhY2tncm91bmQ6ICRwc3dwX19wbGFjZWhvbGRlci1jb2xvcjtcbn1cblxuLnBzd3AtLWllIC5wc3dwX19pbWcge1xuXHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuXHRoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xufVxuXG4vKlxuXHRFcnJvciBtZXNzYWdlIGFwcGVhcnMgd2hlbiBpbWFnZSBpcyBub3QgbG9hZGVkXG5cdChKUyBvcHRpb24gZXJyb3JNc2cgY29udHJvbHMgbWFya3VwKVxuKi9cbi5wc3dwX19lcnJvci1tc2cge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogNTAlO1xuXHR3aWR0aDogMTAwJTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRtYXJnaW4tdG9wOiAtOHB4O1xuXHRjb2xvcjogJHBzd3BfX2Vycm9yLXRleHQtY29sb3I7XG59XG5cbi5wc3dwX19lcnJvci1tc2cgYSB7XG5cdGNvbG9yOiAkcHN3cF9fZXJyb3ItdGV4dC1jb2xvcjtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4iLCIvKiEgUGhvdG9Td2lwZSBtYWluIENTUyBieSBEbWl0cnkgU2VtZW5vdiB8IHBob3Rvc3dpcGUuY29tIHwgTUlUIGxpY2Vuc2UgKi9cbi8qXG5cdFN0eWxlcyBmb3IgYmFzaWMgUGhvdG9Td2lwZSBmdW5jdGlvbmFsaXR5IChzbGlkaW5nIGFyZWEsIG9wZW4vY2xvc2UgdHJhbnNpdGlvbnMpXG4qL1xuLyogcHN3cCA9IHBob3Rvc3dpcGUgKi9cbi5wc3dwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgei1pbmRleDogMTUwMDtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiBjcmVhdGUgc2VwYXJhdGUgbGF5ZXIsIHRvIGF2b2lkIHBhaW50IG9uIHdpbmRvdy5vbnNjcm9sbCBpbiB3ZWJraXQvYmxpbmsgKi9cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIG91dGxpbmU6IG5vbmU7IH1cbiAgLnBzd3AgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAucHN3cCBpbWcge1xuICAgIG1heC13aWR0aDogbm9uZTsgfVxuXG4vKiBzdHlsZSBpcyBhZGRlZCB3aGVuIEpTIG9wdGlvbiBzaG93SGlkZU9wYWNpdHkgaXMgc2V0IHRvIHRydWUgKi9cbi5wc3dwLS1hbmltYXRlX29wYWNpdHkge1xuICAvKiAwLjAwMSwgYmVjYXVzZSBvcGFjaXR5OjAgZG9lc24ndCB0cmlnZ2VyIFBhaW50IGFjdGlvbiwgd2hpY2ggY2F1c2VzIGxhZyBhdCBzdGFydCBvZiB0cmFuc2l0aW9uICovXG4gIG9wYWNpdHk6IDAuMDAxO1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgLyogZm9yIG9wZW4vY2xvc2UgdHJhbnNpdGlvbiAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpOyB9XG5cbi5wc3dwLS1vcGVuIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnBzd3AtLXpvb20tYWxsb3dlZCAucHN3cF9faW1nIHtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgY3Vyc29yOiAtd2Via2l0LXpvb20taW47XG4gIGN1cnNvcjogLW1vei16b29tLWluO1xuICBjdXJzb3I6IHpvb20taW47IH1cblxuLnBzd3AtLXpvb21lZC1pbiAucHN3cF9faW1nIHtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogLW1vei1ncmFiO1xuICBjdXJzb3I6IGdyYWI7IH1cblxuLnBzd3AtLWRyYWdnaW5nIC5wc3dwX19pbWcge1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZzsgfVxuXG4vKlxuXHRCYWNrZ3JvdW5kIGlzIGFkZGVkIGFzIGEgc2VwYXJhdGUgZWxlbWVudC5cblx0QXMgYW5pbWF0aW5nIG9wYWNpdHkgaXMgbXVjaCBmYXN0ZXIgdGhhbiBhbmltYXRpbmcgcmdiYSgpIGJhY2tncm91bmQtY29sb3IuXG4qL1xuLnBzd3BfX2JnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5OyB9XG5cbi5wc3dwX19zY3JvbGwtd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5wc3dwX19jb250YWluZXIsXG4ucHN3cF9fem9vbS13cmFwIHtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDsgfVxuXG4vKiBQcmV2ZW50IHNlbGVjdGlvbiBhbmQgdGFwIGhpZ2hsaWdodHMgKi9cbi5wc3dwX19jb250YWluZXIsXG4ucHN3cF9faW1nIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyB9XG5cbi5wc3dwX196b29tLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAvKiBmb3Igb3Blbi9jbG9zZSB0cmFuc2l0aW9uICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTsgfVxuXG4ucHN3cF9fYmcge1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbiAgLyogZm9yIG9wZW4vY2xvc2UgdHJhbnNpdGlvbiAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMzM21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpOyB9XG5cbi5wc3dwLS1hbmltYXRlZC1pbiAucHN3cF9fYmcsXG4ucHN3cC0tYW5pbWF0ZWQtaW4gLnBzd3BfX3pvb20td3JhcCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogbm9uZTsgfVxuXG4ucHN3cF9fY29udGFpbmVyLFxuLnBzd3BfX3pvb20td3JhcCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5wc3dwX19pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnBzd3BfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwOyB9XG5cbi8qXG5cdHN0cmV0Y2hlZCB0aHVtYm5haWwgb3IgZGl2IHBsYWNlaG9sZGVyIGVsZW1lbnQgKHNlZSBiZWxvdylcblx0c3R5bGUgaXMgYWRkZWQgdG8gYXZvaWQgZmxpY2tlcmluZyBpbiB3ZWJraXQvYmxpbmsgd2hlbiBsYXllcnMgb3ZlcmxhcFxuKi9cbi5wc3dwX19pbWctLXBsYWNlaG9sZGVyIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuLypcblx0ZGl2IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHNpemUgb2YgbGFyZ2UgaW1hZ2Vcblx0bGFyZ2UgaW1hZ2UgbG9hZHMgb24gdG9wIG9mIGl0XG4qL1xuLnBzd3BfX2ltZy0tcGxhY2Vob2xkZXItLWJsYW5rIHtcbiAgYmFja2dyb3VuZDogIzIyMjsgfVxuXG4ucHN3cC0taWUgLnBzd3BfX2ltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7IH1cblxuLypcblx0RXJyb3IgbWVzc2FnZSBhcHBlYXJzIHdoZW4gaW1hZ2UgaXMgbm90IGxvYWRlZFxuXHQoSlMgb3B0aW9uIGVycm9yTXNnIGNvbnRyb2xzIG1hcmt1cClcbiovXG4ucHN3cF9fZXJyb3ItbXNnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgY29sb3I6ICNDQ0M7IH1cblxuLnBzd3BfX2Vycm9yLW1zZyBhIHtcbiAgY29sb3I6ICNDQ0M7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbi8qISBQaG90b1N3aXBlIERlZmF1bHQgVUkgQ1NTIGJ5IERtaXRyeSBTZW1lbm92IHwgcGhvdG9zd2lwZS5jb20gfCBNSVQgbGljZW5zZSAqL1xuLypcblxuXHRDb250ZW50czpcblxuXHQxLiBCdXR0b25zXG5cdDIuIFNoYXJlIG1vZGFsIGFuZCBsaW5rc1xuXHQzLiBJbmRleCBpbmRpY2F0b3IgKFwiMSBvZiBYXCIgY291bnRlcilcblx0NC4gQ2FwdGlvblxuXHQ1LiBMb2FkaW5nIGluZGljYXRvclxuXHQ2LiBBZGRpdGlvbmFsIHN0eWxlcyAocm9vdCBlbGVtZW50LCB0b3AgYmFyLCBpZGxlIHN0YXRlLCBoaWRkZW4gc3RhdGUsIGV0Yy4pXG5cbiovXG4vKlxuXHRcblx0MS4gQnV0dG9uc1xuXG4gKi9cbi8qIDxidXR0b24+IGNzcyByZXNldCAqL1xuLnBzd3BfX2J1dHRvbiB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiByaWdodDtcbiAgb3BhY2l0eTogMC43NTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBib3gtc2hhZG93OiBub25lOyB9XG4gIC5wc3dwX19idXR0b246Zm9jdXMsIC5wc3dwX19idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgLnBzd3BfX2J1dHRvbjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgb3BhY2l0eTogMC45OyB9XG4gIC5wc3dwX19idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwOyB9XG5cbi8qIHBzd3BfX3VpLS1vdmVyLWNsb3NlIGNsYXNzIGl0IGFkZGVkIHdoZW4gbW91c2UgaXMgb3ZlciBlbGVtZW50IHRoYXQgc2hvdWxkIGNsb3NlIGdhbGxlcnkgKi9cbi5wc3dwX191aS0tb3Zlci1jbG9zZSAucHN3cF9fYnV0dG9uLS1jbG9zZSB7XG4gIG9wYWNpdHk6IDE7IH1cblxuLnBzd3BfX2J1dHRvbixcbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0OmJlZm9yZSxcbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2Nzcy9waG90b3N3aXBlL2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4ucG5nXCIpIDAgMCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjY0cHggODhweDtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDsgfVxuXG5AbWVkaWEgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4xKSwgKG1pbi1yZXNvbHV0aW9uOiAxMDVkcGkpLCAobWluLXJlc29sdXRpb246IDEuMWRwcHgpIHtcbiAgLyogU2VydmUgU1ZHIHNwcml0ZSBpZiBicm93c2VyIHN1cHBvcnRzIFNWRyBhbmQgcmVzb2x1dGlvbiBpcyBtb3JlIHRoYW4gMTA1ZHBpICovXG4gIC5wc3dwLS1zdmcgLnBzd3BfX2J1dHRvbixcbiAgLnBzd3AtLXN2ZyAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdDpiZWZvcmUsXG4gIC5wc3dwLS1zdmcgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9jc3MvcGhvdG9zd2lwZS9kZWZhdWx0LXNraW4vZGVmYXVsdC1za2luLnN2Z1wiKTsgfVxuICAucHN3cC0tc3ZnIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuICAucHN3cC0tc3ZnIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTsgfSB9XG5cbi5wc3dwX19idXR0b24tLWNsb3NlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDRweDsgfVxuXG4ucHN3cF9fYnV0dG9uLS1zaGFyZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00NHB4IC00NHB4OyB9XG5cbi5wc3dwX19idXR0b24tLWZzIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ucHN3cC0tc3VwcG9ydHMtZnMgLnBzd3BfX2J1dHRvbi0tZnMge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4ucHN3cC0tZnMgLnBzd3BfX2J1dHRvbi0tZnMge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDRweCAwOyB9XG5cbi5wc3dwX19idXR0b24tLXpvb20ge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODhweCAwOyB9XG5cbi5wc3dwLS16b29tLWFsbG93ZWQgLnBzd3BfX2J1dHRvbi0tem9vbSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5wc3dwLS16b29tZWQtaW4gLnBzd3BfX2J1dHRvbi0tem9vbSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMzJweCAwOyB9XG5cbi8qIG5vIGFycm93cyBvbiB0b3VjaCBzY3JlZW5zICovXG4ucHN3cC0tdG91Y2ggLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cC0tdG91Y2ggLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi8qXG5cdEFycm93IGJ1dHRvbnMgaGl0IGFyZWFcblx0KGljb24gaXMgYWRkZWQgdG8gOmJlZm9yZSBwc2V1ZG8tZWxlbWVudClcbiovXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCB7XG4gIGxlZnQ6IDA7IH1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7IH1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQ6YmVmb3JlLFxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICB0b3A6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0OmJlZm9yZSB7XG4gIGxlZnQ6IDZweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzOHB4IC00NHB4OyB9XG5cbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodDpiZWZvcmUge1xuICByaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTRweCAtNDRweDsgfVxuXG4vKlxuXG5cdDIuIFNoYXJlIG1vZGFsL3BvcHVwIGFuZCBsaW5rc1xuXG4gKi9cbi5wc3dwX19jb3VudGVyLFxuLnBzd3BfX3NoYXJlLW1vZGFsIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cblxuLnBzd3BfX3NoYXJlLW1vZGFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE2MDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTsgfVxuXG4ucHN3cF9fc2hhcmUtbW9kYWwtLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLnBzd3BfX3NoYXJlLXRvb2x0aXAge1xuICB6LWluZGV4OiAxNjIwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRvcDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIHJpZ2h0OiA0NHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07IH1cbiAgLnBzd3BfX3NoYXJlLXRvb2x0aXAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDsgfVxuICAgIC5wc3dwX19zaGFyZS10b29sdGlwIGE6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMwMDA7IH1cbiAgICAucHN3cF9fc2hhcmUtdG9vbHRpcCBhOmZpcnN0LWNoaWxkIHtcbiAgICAgIC8qIHJvdW5kIGNvcm5lcnMgb24gdGhlIGZpcnN0L2xhc3QgbGlzdCBpdGVtICovXG4gICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDsgfVxuICAgIC5wc3dwX19zaGFyZS10b29sdGlwIGE6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDsgfVxuXG4ucHN3cF9fc2hhcmUtbW9kYWwtLWZhZGUtaW4ge1xuICBvcGFjaXR5OiAxOyB9XG4gIC5wc3dwX19zaGFyZS1tb2RhbC0tZmFkZS1pbiAucHN3cF9fc2hhcmUtdG9vbHRpcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG5cbi8qIGluY3JlYXNlIHNpemUgb2Ygc2hhcmUgbGlua3Mgb24gdG91Y2ggZGV2aWNlcyAqL1xuLnBzd3AtLXRvdWNoIC5wc3dwX19zaGFyZS10b29sdGlwIGEge1xuICBwYWRkaW5nOiAxNnB4IDEycHg7IH1cblxuYS5wc3dwX19zaGFyZS0tZmFjZWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEycHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3JkZXI6IDZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjRkZGO1xuICAtd2Via2l0LXBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtbW96LXBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG5hLnBzd3BfX3NoYXJlLS1mYWNlYm9vazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzRTVDOUE7XG4gIGNvbG9yOiAjRkZGOyB9XG4gIGEucHN3cF9fc2hhcmUtLWZhY2Vib29rOmhvdmVyOmJlZm9yZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzNFNUM5QTsgfVxuXG5hLnBzd3BfX3NoYXJlLS10d2l0dGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcbiAgY29sb3I6ICNGRkY7IH1cblxuYS5wc3dwX19zaGFyZS0tcGludGVyZXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0NDQztcbiAgY29sb3I6ICNDRTI3MkQ7IH1cblxuYS5wc3dwX19zaGFyZS0tZG93bmxvYWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjREREOyB9XG5cbi8qXG5cblx0My4gSW5kZXggaW5kaWNhdG9yIChcIjEgb2YgWFwiIGNvdW50ZXIpXG5cbiAqL1xuLnBzd3BfX2NvdW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgb3BhY2l0eTogMC43NTtcbiAgcGFkZGluZzogMCAxMHB4OyB9XG5cbi8qXG5cdFxuXHQ0LiBDYXB0aW9uXG5cbiAqL1xuLnBzd3BfX2NhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7IH1cbiAgLnBzd3BfX2NhcHRpb24gc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogI0JCQjsgfVxuXG4ucHN3cF9fY2FwdGlvbl9fY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjQ0NDOyB9XG5cbi5wc3dwX19jYXB0aW9uLS1lbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLyogRmFrZSBjYXB0aW9uIGVsZW1lbnQsIHVzZWQgdG8gY2FsY3VsYXRlIGhlaWdodCBvZiBuZXh0L3ByZXYgaW1hZ2UgKi9cbi5wc3dwX19jYXB0aW9uLS1mYWtlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi8qXG5cblx0NS4gTG9hZGluZyBpbmRpY2F0b3IgKHByZWxvYWRlcilcblxuXHRZb3UgY2FuIHBsYXkgd2l0aCBpdCBoZXJlIC0gaHR0cDovL2NvZGVwZW4uaW8vZGltc2VtZW5vdi9wZW4veXlCV29SXG5cbiAqL1xuLnBzd3BfX3ByZWxvYWRlciB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjJweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLW91dDtcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gIGRpcmVjdGlvbjogbHRyOyB9XG5cbi5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMTJweDsgfVxuXG4ucHN3cF9fcHJlbG9hZGVyLS1hY3RpdmUge1xuICBvcGFjaXR5OiAxOyB9XG4gIC5wc3dwX19wcmVsb2FkZXItLWFjdGl2ZSAucHN3cF9fcHJlbG9hZGVyX19pY24ge1xuICAgIC8qIFdlIHVzZSAuZ2lmIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBDU1MgYW5pbWF0aW9uICovXG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9jc3MvcGhvdG9zd2lwZS9kZWZhdWx0LXNraW4vcHJlbG9hZGVyLmdpZlwiKSAwIDAgbm8tcmVwZWF0OyB9XG5cbi5wc3dwLS1jc3NfYW5pbWF0aW9uIC5wc3dwX19wcmVsb2FkZXItLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7IH1cbiAgLnBzd3AtLWNzc19hbmltYXRpb24gLnBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIC5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XG4gICAgYW5pbWF0aW9uOiBjbG9ja3dpc2UgNTAwbXMgbGluZWFyIGluZmluaXRlOyB9XG4gIC5wc3dwLS1jc3NfYW5pbWF0aW9uIC5wc3dwX19wcmVsb2FkZXItLWFjdGl2ZSAucHN3cF9fcHJlbG9hZGVyX19kb251dCB7XG4gICAgYW5pbWF0aW9uOiBkb251dC1yb3RhdGUgMTAwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMjIsIDEpIGluZmluaXRlOyB9XG5cbi5wc3dwLS1jc3NfYW5pbWF0aW9uIC5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiAxNXB4O1xuICBtYXJnaW46IDA7IH1cblxuLnBzd3AtLWNzc19hbmltYXRpb24gLnBzd3BfX3ByZWxvYWRlcl9fY3V0IHtcbiAgLyogXG5cdFx0XHRUaGUgaWRlYSBvZiBhbmltYXRpbmcgaW5uZXIgY2lyY2xlIGlzIGJhc2VkIG9uIFBvbHltZXIgKFwibWF0ZXJpYWxcIikgbG9hZGluZyBpbmRpY2F0b3IgXG5cdFx0XHQgYnkgS2VhbnUgTGVlIGh0dHBzOi8vYmxvZy5rZWFudWxlZS5jb20vMjAxNC8xMC8yMC90aGUtdGFsZS1vZi10aHJlZS1zcGlubmVycy5odG1sXG5cdFx0Ki9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnBzd3AtLWNzc19hbmltYXRpb24gLnBzd3BfX3ByZWxvYWRlcl9fZG9udXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDA7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5wc3dwX19wcmVsb2FkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHRvcDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgZmxvYXQ6IHJpZ2h0OyB9IH1cblxuQGtleWZyYW1lcyBjbG9ja3dpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgZG9udXQtcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE0MGRlZyk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH0gfVxuXG4vKlxuXHRcblx0Ni4gQWRkaXRpb25hbCBzdHlsZXNcblxuICovXG4vKiByb290IGVsZW1lbnQgb2YgVUkgKi9cbi5wc3dwX191aSB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE1NTA7IH1cblxuLyogdG9wIGJsYWNrIGJhciB3aXRoIGJ1dHRvbnMgYW5kIFwiMSBvZiBYXCIgaW5kaWNhdG9yICovXG4ucHN3cF9fdG9wLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5wc3dwX19jYXB0aW9uLFxuLnBzd3BfX3RvcC1iYXIsXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuLnBzd3AtLWhhc19tb3VzZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yMiwgMSk7IH1cblxuLyogcHN3cC0taGFzX21vdXNlIGNsYXNzIGlzIGFkZGVkIG9ubHkgd2hlbiB0d28gc3Vic2VxdWVudCBtb3VzZW1vdmUgZXZlbnRzIG9jY3VyICovXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuLnBzd3AtLWhhc19tb3VzZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG5cbi5wc3dwX190b3AtYmFyLFxuLnBzd3BfX2NhcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLyogcHN3cF9fdWktLWZpdCBjbGFzcyBpcyBhZGRlZCB3aGVuIG1haW4gaW1hZ2UgXCJmaXRzXCIgYmV0d2VlbiB0b3AgYmFyIGFuZCBib3R0b20gYmFyIChjYXB0aW9uKSAqL1xuLnBzd3BfX3VpLS1maXQgLnBzd3BfX3RvcC1iYXIsXG4ucHN3cF9fdWktLWZpdCAucHN3cF9fY2FwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTsgfVxuXG4vKiBwc3dwX191aS0taWRsZSBjbGFzcyBpcyBhZGRlZCB3aGVuIG1vdXNlIGlzbid0IG1vdmluZyBmb3Igc2V2ZXJhbCBzZWNvbmRzIChKUyBvcHRpb24gdGltZVRvSWRsZSkgKi9cbi5wc3dwX191aS0taWRsZSAucHN3cF9fdG9wLWJhciB7XG4gIG9wYWNpdHk6IDA7IH1cblxuLnBzd3BfX3VpLS1pZGxlIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuLnBzd3BfX3VpLS1pZGxlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG4gIG9wYWNpdHk6IDA7IH1cblxuLypcblx0cHN3cF9fdWktLWhpZGRlbiBjbGFzcyBpcyBhZGRlZCB3aGVuIGNvbnRyb2xzIGFyZSBoaWRkZW5cblx0ZS5nLiB3aGVuIHVzZXIgdGFwcyB0byB0b2dnbGUgdmlzaWJpbGl0eSBvZiBjb250cm9sc1xuKi9cbi5wc3dwX191aS0taGlkZGVuIC5wc3dwX190b3AtYmFyLFxuLnBzd3BfX3VpLS1oaWRkZW4gLnBzd3BfX2NhcHRpb24sXG4ucHN3cF9fdWktLWhpZGRlbiAucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcbi5wc3dwX191aS0taGlkZGVuIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG4gIC8qIEZvcmNlIHBhaW50ICYgY3JlYXRlIGNvbXBvc2l0aW9uIGxheWVyIGZvciBjb250cm9scy4gKi9cbiAgb3BhY2l0eTogMC4wMDE7IH1cblxuLyogcHN3cF9fdWktLW9uZS1zbGlkZSBjbGFzcyBpcyBhZGRlZCB3aGVuIHRoZXJlIGlzIGp1c3Qgb25lIGl0ZW0gaW4gZ2FsbGVyeSAqL1xuLnBzd3BfX3VpLS1vbmUtc2xpZGUgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cF9fdWktLW9uZS1zbGlkZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQsXG4ucHN3cF9fdWktLW9uZS1zbGlkZSAucHN3cF9fY291bnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLnBzd3BfX2VsZW1lbnQtLWRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5wc3dwLS1taW5pbWFsLS1kYXJrIC5wc3dwX190b3AtYmFyIHtcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxuXG5oMSB7XG4gIG1hcmdpbjogMmVtOyB9XG5cbi5wc3dwX19jYXB0aW9uX19jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnBzd3AtLW9wZW4ge1xuICBjb2xvcjogI2ZmZmZmZjsgfVxuXG4ucHN3cC0tYW5pbWF0ZV9vcGFjaXR5LFxuLnBzd3BfX2JnLFxuLnBzd3BfX2NhcHRpb24sXG4ucHN3cF9fdG9wLWJhcixcbi5wc3dwLS1oYXNfbW91c2UgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIyLCAxKTsgfVxuXG4uc3BhY2VyIHtcbiAgaGVpZ2h0OiA1ZW07IH1cblxuLmdhbGxlcnkge1xuICB3aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDYwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIzMHB4LCAxZnIpKTsgfVxuICAuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIC5zbGlkZV90aHVtYnNfaG9sZGVyLCAuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIGltZywgLmdhbGxlcnkgLnNsaWRlX3RodW1icyBmaWd1cmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxuICAgIC5nYWxsZXJ5IC5zbGlkZV90aHVtYnMgZmlndXJlOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cbiAgICAuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIGZpZ3VyZSBpbWcge1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cbiIsIiRwc3dwX19zaG93LWhpZGUtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzMzbXMgIWRlZmF1bHQ7XG4kcHN3cF9fY29udHJvbHMtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzMzbXMgIWRlZmF1bHQ7XG4kcHN3cF9fYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhZGVmYXVsdDtcbiRwc3dwX19wbGFjZWhvbGRlci1jb2xvcjogIzIyMiAhZGVmYXVsdDtcbiRwc3dwX19ib3gtc2l6aW5nLWJvcmRlci1ib3g6IHRydWUgIWRlZmF1bHQ7IC8vIGRpc2FibGUgLnBzd3AgKiB7IGJveC1zaXppbmc6Ym9yZGVyLWJveCB9IChpbiBjYXNlIHlvdSBhbHJlYWR5IGhhdmUgaXQgaW4geW91ciBzaXRlIGNzcylcbiRwc3dwX19yb290LXotaW5kZXg6IDE1MDAgIWRlZmF1bHQ7XG4kcHN3cF9fYXNzZXRzLXBhdGg6ICcnICFkZWZhdWx0OyAvLyBwYXRoIHRvIHNraW4gYXNzZXRzIGZvbGRlciAocHJlbG9hZGVyLCBQTkcgYW5kIFNWRyBzcHJpdGUpXG4kcHN3cF9fZXJyb3ItdGV4dC1jb2xvcjogI0NDQyAhZGVmYXVsdDsgLy8gXCJJbWFnZSBub3QgbG9hZGVkXCIgdGV4dCBjb2xvclxuJHBzd3BfX2luY2x1ZGUtbWluaW1hbC1zdHlsZTogdHJ1ZSAhZGVmYXVsdDsiLCIvKiEgUGhvdG9Td2lwZSBEZWZhdWx0IFVJIENTUyBieSBEbWl0cnkgU2VtZW5vdiB8IHBob3Rvc3dpcGUuY29tIHwgTUlUIGxpY2Vuc2UgKi9cblxuLypcblxuXHRDb250ZW50czpcblxuXHQxLiBCdXR0b25zXG5cdDIuIFNoYXJlIG1vZGFsIGFuZCBsaW5rc1xuXHQzLiBJbmRleCBpbmRpY2F0b3IgKFwiMSBvZiBYXCIgY291bnRlcilcblx0NC4gQ2FwdGlvblxuXHQ1LiBMb2FkaW5nIGluZGljYXRvclxuXHQ2LiBBZGRpdGlvbmFsIHN0eWxlcyAocm9vdCBlbGVtZW50LCB0b3AgYmFyLCBpZGxlIHN0YXRlLCBoaWRkZW4gc3RhdGUsIGV0Yy4pXG5cbiovXG5cbi8vIFBob3RvU3dpcGUgdXNlcyBBdXRvcHJlZml4ZXIsIHNvIHZlbmRvciBwcmVmaXhlZCBhcmUgYWRkZWQgYXV0b21hdGljYWxseSB3aGVuIG5lZWRlZC5cblxuXG5cbkBpbXBvcnQgXCIuLi9tYWluLXNldHRpbmdzXCI7XG5cblxuLypcblx0XG5cdDEuIEJ1dHRvbnNcblxuICovXG5cbi8qIDxidXR0b24+IGNzcyByZXNldCAqL1xuLnBzd3BfX2J1dHRvbiB7XG5cdHdpZHRoOiA0NHB4O1xuXHRoZWlnaHQ6IDQ0cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRvdmVyZmxvdzogdmlzaWJsZTtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRkaXNwbGF5OiBibG9jaztcblx0Ym9yZGVyOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdGZsb2F0OiByaWdodDtcblx0b3BhY2l0eTogMC43NTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuXHRib3gtc2hhZG93OiBub25lO1xuXG5cdCY6Zm9jdXMsXG5cdCY6aG92ZXIge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0XG5cdCY6YWN0aXZlIHtcblx0XHRvdXRsaW5lOiBub25lO1xuXHRcdG9wYWNpdHk6IDAuOTtcblx0fVxuXG5cdCY6Oi1tb3otZm9jdXMtaW5uZXIge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Ym9yZGVyOiAwXG5cdH1cbn1cblxuLyogcHN3cF9fdWktLW92ZXItY2xvc2UgY2xhc3MgaXQgYWRkZWQgd2hlbiBtb3VzZSBpcyBvdmVyIGVsZW1lbnQgdGhhdCBzaG91bGQgY2xvc2UgZ2FsbGVyeSAqL1xuLnBzd3BfX3VpLS1vdmVyLWNsb3NlIC5wc3dwX19idXR0b24tLWNsb3NlIHtcblx0b3BhY2l0eTogMTtcbn1cblxuLnBzd3BfX2J1dHRvbixcbi5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0OmJlZm9yZSxcbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodDpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2Nzcy9waG90b3N3aXBlL2RlZmF1bHQtc2tpbi9kZWZhdWx0LXNraW4ucG5nXCIpIDAgMCBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogMjY0cHggODhweDtcblx0d2lkdGg6IDQ0cHg7XG5cdGhlaWdodDogNDRweDtcbn1cblxuQG1lZGlhICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMSksICAobWluLXJlc29sdXRpb246IDEwNWRwaSksIChtaW4tcmVzb2x1dGlvbjogMS4xZHBweCkge1xuXG5cdC8qIFNlcnZlIFNWRyBzcHJpdGUgaWYgYnJvd3NlciBzdXBwb3J0cyBTVkcgYW5kIHJlc29sdXRpb24gaXMgbW9yZSB0aGFuIDEwNWRwaSAqL1xuICAgIC5wc3dwLS1zdmcgLnBzd3BfX2J1dHRvbixcbiAgICAucHN3cC0tc3ZnIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0OmJlZm9yZSxcblx0LnBzd3AtLXN2ZyAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQ6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9jc3MvcGhvdG9zd2lwZS9kZWZhdWx0LXNraW4vZGVmYXVsdC1za2luLnN2Z1wiKTtcbiAgICB9XG5cbiAgICAucHN3cC0tc3ZnIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuXHQucHN3cC0tc3ZnIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0fVxufVxuXG4ucHN3cF9fYnV0dG9uLS1jbG9zZSB7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQ0cHg7XG59XG5cbi5wc3dwX19idXR0b24tLXNoYXJlIHtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTQ0cHggLTQ0cHg7XG59XG5cbi5wc3dwX19idXR0b24tLWZzIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnBzd3AtLXN1cHBvcnRzLWZzIC5wc3dwX19idXR0b24tLWZzIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5wc3dwLS1mcyAucHN3cF9fYnV0dG9uLS1mcyB7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IC00NHB4IDA7XG59XG5cbi5wc3dwX19idXR0b24tLXpvb20ge1xuXHRkaXNwbGF5OiBub25lO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODhweCAwO1xufVxuXG4ucHN3cC0tem9vbS1hbGxvd2VkIC5wc3dwX19idXR0b24tLXpvb20ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLnBzd3AtLXpvb21lZC1pbiAucHN3cF9fYnV0dG9uLS16b29tIHtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTEzMnB4IDA7XG59XG5cbi8qIG5vIGFycm93cyBvbiB0b3VjaCBzY3JlZW5zICovXG4ucHN3cC0tdG91Y2gge1xuXHQucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcblx0LnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHRcdFxuXHR9XG59XG5cbi8qXG5cdEFycm93IGJ1dHRvbnMgaGl0IGFyZWFcblx0KGljb24gaXMgYWRkZWQgdG8gOmJlZm9yZSBwc2V1ZG8tZWxlbWVudClcbiovXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcbi5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHRvcDogNTAlO1xuXHRtYXJnaW4tdG9wOiAtNTBweDtcblx0d2lkdGg6IDcwcHg7XG5cdGhlaWdodDogMTAwcHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQge1xuXHRsZWZ0OiAwO1xufVxuXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuXHRyaWdodDogMDtcbn1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQ6YmVmb3JlLFxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICcnO1xuXHR0b3A6IDM1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzJweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdDpiZWZvcmUge1xuXHRsZWZ0OiA2cHg7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IC0xMzhweCAtNDRweDtcbn1cblxuLnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0OmJlZm9yZSB7XG5cdHJpZ2h0OiA2cHg7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IC05NHB4IC00NHB4O1xufVxuXG5cbi8qXG5cblx0Mi4gU2hhcmUgbW9kYWwvcG9wdXAgYW5kIGxpbmtzXG5cbiAqL1xuXG4ucHN3cF9fY291bnRlcixcbi5wc3dwX19zaGFyZS1tb2RhbCB7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucHN3cF9fc2hhcmUtbW9kYWwge1xuXHRkaXNwbGF5OiBibG9jaztcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogJHBzd3BfX3Jvb3Qtei1pbmRleCArIDEwMDtcblx0b3BhY2l0eTogMDtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLW91dDtcblx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cdHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xufVxuXG4ucHN3cF9fc2hhcmUtbW9kYWwtLWhpZGRlbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wc3dwX19zaGFyZS10b29sdGlwIHtcblx0ei1pbmRleDogJHBzd3BfX3Jvb3Qtei1pbmRleCArIDEyMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRiYWNrZ3JvdW5kOiAjRkZGO1xuXHR0b3A6IDU2cHg7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiBhdXRvO1xuXHRyaWdodDogNDRweDtcblx0Ym94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG5cdGEge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHBhZGRpbmc6IDhweCAxMnB4O1xuXHRcdGNvbG9yOiAjMDAwO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdH1cblxuXHRcdFxuXHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0Lyogcm91bmQgY29ybmVycyBvbiB0aGUgZmlyc3QvbGFzdCBsaXN0IGl0ZW0gKi9cblx0XHRcdGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xuXHRcdH1cblx0XHRcblx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG5cdFx0fVxuXHR9XG59XG5cbi5wc3dwX19zaGFyZS1tb2RhbC0tZmFkZS1pbiB7XG5cdG9wYWNpdHk6IDE7XG5cblx0LnBzd3BfX3NoYXJlLXRvb2x0aXAge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxufVxuXG4vKiBpbmNyZWFzZSBzaXplIG9mIHNoYXJlIGxpbmtzIG9uIHRvdWNoIGRldmljZXMgKi9cbi5wc3dwLS10b3VjaCAucHN3cF9fc2hhcmUtdG9vbHRpcCBhIHtcblx0cGFkZGluZzogMTZweCAxMnB4O1xufVxuXG5hLnBzd3BfX3NoYXJlLS1mYWNlYm9vayB7XG5cdCY6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogMDtcblx0XHRoZWlnaHQ6IDA7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogLTEycHg7XG5cdFx0cmlnaHQ6IDE1cHg7XG5cdFx0Ym9yZGVyOiA2cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjRkZGO1xuXHRcdC13ZWJraXQtcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0LW1vei1wb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0fVxuXG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6ICMzRTVDOUE7XG5cdFx0Y29sb3I6ICNGRkY7XG5cblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjM0U1QzlBO1xuXHRcdH1cblx0fVxufVxuXG5hLnBzd3BfX3NoYXJlLS10d2l0dGVyIHtcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogIzU1QUNFRTtcblx0XHRjb2xvcjogI0ZGRjtcblx0fVxufVxuXG5hLnBzd3BfX3NoYXJlLS1waW50ZXJlc3Qge1xuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiAjQ0NDO1xuXHRcdGNvbG9yOiAjQ0UyNzJEO1xuXHR9XG59XG5cbmEucHN3cF9fc2hhcmUtLWRvd25sb2FkIHtcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogI0RERDtcblx0fVxufVxuXG5cbi8qXG5cblx0My4gSW5kZXggaW5kaWNhdG9yIChcIjEgb2YgWFwiIGNvdW50ZXIpXG5cbiAqL1xuXG4ucHN3cF9fY291bnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHRoZWlnaHQ6IDQ0cHg7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0bGluZS1oZWlnaHQ6IDQ0cHg7XG5cdGNvbG9yOiAjRkZGO1xuXHRvcGFjaXR5OiAwLjc1O1xuXHRwYWRkaW5nOiAwIDEwcHg7XG59XG5cblxuLypcblx0XG5cdDQuIENhcHRpb25cblxuICovXG5cbi5wc3dwX19jYXB0aW9uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRib3R0b206IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRtaW4taGVpZ2h0OiA0NHB4O1xuXHRcblx0c21hbGwge1xuXHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRjb2xvcjogI0JCQjtcblx0fVxufVxuXG4ucHN3cF9fY2FwdGlvbl9fY2VudGVyIHtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0bWF4LXdpZHRoOiA0MjBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0cGFkZGluZzogMTBweDtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdGNvbG9yOiAjQ0NDO1xufVxuXG4ucHN3cF9fY2FwdGlvbi0tZW1wdHkge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4vKiBGYWtlIGNhcHRpb24gZWxlbWVudCwgdXNlZCB0byBjYWxjdWxhdGUgaGVpZ2h0IG9mIG5leHQvcHJldiBpbWFnZSAqL1xuLnBzd3BfX2NhcHRpb24tLWZha2Uge1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cblxuLypcblxuXHQ1LiBMb2FkaW5nIGluZGljYXRvciAocHJlbG9hZGVyKVxuXG5cdFlvdSBjYW4gcGxheSB3aXRoIGl0IGhlcmUgLSBodHRwOi8vY29kZXBlbi5pby9kaW1zZW1lbm92L3Blbi95eUJXb1JcblxuICovXG5cbi5wc3dwX19wcmVsb2FkZXIge1xuXHR3aWR0aDogNDRweDtcblx0aGVpZ2h0OiA0NHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogNTAlO1xuXHRtYXJnaW4tbGVmdDogLTIycHg7XG5cdG9wYWNpdHk6IDA7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1vdXQ7IFxuXHR3aWxsLWNoYW5nZTogb3BhY2l0eTtcblx0ZGlyZWN0aW9uOiBsdHI7XG59XG5cbi5wc3dwX19wcmVsb2FkZXJfX2ljbiB7XG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdG1hcmdpbjogMTJweDtcbn1cblxuLnBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIHtcblx0b3BhY2l0eTogMTtcblxuXHQucHN3cF9fcHJlbG9hZGVyX19pY24ge1xuXHRcdC8qIFdlIHVzZSAuZ2lmIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBDU1MgYW5pbWF0aW9uICovXG5cdFx0YmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9jc3MvcGhvdG9zd2lwZS9kZWZhdWx0LXNraW4vcHJlbG9hZGVyLmdpZlwiKSAwIDAgbm8tcmVwZWF0O1xuXHR9XG59XG5cbi5wc3dwLS1jc3NfYW5pbWF0aW9uIHtcblx0LnBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIHtcblx0XHRvcGFjaXR5OiAxO1xuXG5cdFx0LnBzd3BfX3ByZWxvYWRlcl9faWNuIHtcblx0XHRcdGFuaW1hdGlvbjogY2xvY2t3aXNlIDUwMG1zIGxpbmVhciBpbmZpbml0ZTtcblx0XHR9XG5cblx0XHQucHN3cF9fcHJlbG9hZGVyX19kb251dCB7XG5cdFx0XHRhbmltYXRpb246IGRvbnV0LXJvdGF0ZSAxMDAwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpIGluZmluaXRlO1xuXHRcdH1cblx0fVxuXHRcblx0LnBzd3BfX3ByZWxvYWRlcl9faWNuIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdG9wYWNpdHk6IDAuNzU7XG5cdFx0d2lkdGg6IDE0cHg7XG5cdFx0aGVpZ2h0OiAxNHB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAxNXB4O1xuXHRcdHRvcDogMTVweDtcblx0XHRtYXJnaW46IDA7XG5cdH1cblxuXHRcblx0LnBzd3BfX3ByZWxvYWRlcl9fY3V0IHtcblx0XHQvKiBcblx0XHRcdFRoZSBpZGVhIG9mIGFuaW1hdGluZyBpbm5lciBjaXJjbGUgaXMgYmFzZWQgb24gUG9seW1lciAoXCJtYXRlcmlhbFwiKSBsb2FkaW5nIGluZGljYXRvciBcblx0XHRcdCBieSBLZWFudSBMZWUgaHR0cHM6Ly9ibG9nLmtlYW51bGVlLmNvbS8yMDE0LzEwLzIwL3RoZS10YWxlLW9mLXRocmVlLXNwaW5uZXJzLmh0bWxcblx0XHQqL1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogN3B4O1xuXHRcdGhlaWdodDogMTRweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG5cblx0LnBzd3BfX3ByZWxvYWRlcl9fZG9udXQge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0d2lkdGg6IDE0cHg7XG5cdFx0aGVpZ2h0OiAxNHB4O1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRtYXJnaW46IDA7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cdC5wc3dwX19wcmVsb2FkZXIge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRsZWZ0OiBhdXRvO1xuXHRcdHRvcDogYXV0bztcblx0XHRtYXJnaW46IDA7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgY2xvY2t3aXNlIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH1cbn1cblxuQGtleWZyYW1lcyBkb251dC1yb3RhdGUge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApIH1cbiAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTE0MGRlZykgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMCkgfVxufVxuXG5cbi8qXG5cdFxuXHQ2LiBBZGRpdGlvbmFsIHN0eWxlc1xuXG4gKi9cblxuLyogcm9vdCBlbGVtZW50IG9mIFVJICovXG4ucHN3cF9fdWkge1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRvcGFjaXR5OiAxO1xuXHR6LWluZGV4OiAkcHN3cF9fcm9vdC16LWluZGV4ICsgNTA7XG59XG5cbi8qIHRvcCBibGFjayBiYXIgd2l0aCBidXR0b25zIGFuZCBcIjEgb2YgWFwiIGluZGljYXRvciAqL1xuLnBzd3BfX3RvcC1iYXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcblx0aGVpZ2h0OiA0NHB4O1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnBzd3BfX2NhcHRpb24sXG4ucHN3cF9fdG9wLWJhcixcbi5wc3dwLS1oYXNfbW91c2UgLnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCB7XG5cdC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyBcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgJHBzd3BfX2NvbnRyb2xzLXRyYW5zaXRpb24tZHVyYXRpb24gY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpO1xufVxuXG4vKiBwc3dwLS1oYXNfbW91c2UgY2xhc3MgaXMgYWRkZWQgb25seSB3aGVuIHR3byBzdWJzZXF1ZW50IG1vdXNlbW92ZSBldmVudHMgb2NjdXIgKi9cbi5wc3dwLS1oYXNfbW91c2Uge1xuXHQucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcblx0LnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHR9XG59XG5cbi5wc3dwX190b3AtYmFyLFxuLnBzd3BfX2NhcHRpb24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG59XG5cbi8qIHBzd3BfX3VpLS1maXQgY2xhc3MgaXMgYWRkZWQgd2hlbiBtYWluIGltYWdlIFwiZml0c1wiIGJldHdlZW4gdG9wIGJhciBhbmQgYm90dG9tIGJhciAoY2FwdGlvbikgKi9cbi5wc3dwX191aS0tZml0IHtcblx0LnBzd3BfX3RvcC1iYXIsXG5cdC5wc3dwX19jYXB0aW9uIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG5cdH1cbn1cblxuLyogcHN3cF9fdWktLWlkbGUgY2xhc3MgaXMgYWRkZWQgd2hlbiBtb3VzZSBpc24ndCBtb3ZpbmcgZm9yIHNldmVyYWwgc2Vjb25kcyAoSlMgb3B0aW9uIHRpbWVUb0lkbGUpICovXG5cdFxuLnBzd3BfX3VpLS1pZGxlIHtcblx0LnBzd3BfX3RvcC1iYXIgeyBcblx0XHRvcGFjaXR5OiAwOyBcblx0fVxuXG5cdC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuXHQucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHQge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cbn1cblxuLypcblx0cHN3cF9fdWktLWhpZGRlbiBjbGFzcyBpcyBhZGRlZCB3aGVuIGNvbnRyb2xzIGFyZSBoaWRkZW5cblx0ZS5nLiB3aGVuIHVzZXIgdGFwcyB0byB0b2dnbGUgdmlzaWJpbGl0eSBvZiBjb250cm9sc1xuKi9cbi5wc3dwX191aS0taGlkZGVuIHtcblx0LnBzd3BfX3RvcC1iYXIsXG5cdC5wc3dwX19jYXB0aW9uLFxuXHQucHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdCxcblx0LnBzd3BfX2J1dHRvbi0tYXJyb3ctLXJpZ2h0IHtcblx0XHQvKiBGb3JjZSBwYWludCAmIGNyZWF0ZSBjb21wb3NpdGlvbiBsYXllciBmb3IgY29udHJvbHMuICovXG5cdFx0b3BhY2l0eTogMC4wMDE7IFxuXHR9XG59XG5cbi8qIHBzd3BfX3VpLS1vbmUtc2xpZGUgY2xhc3MgaXMgYWRkZWQgd2hlbiB0aGVyZSBpcyBqdXN0IG9uZSBpdGVtIGluIGdhbGxlcnkgKi9cbi5wc3dwX191aS0tb25lLXNsaWRlIHtcblx0LnBzd3BfX2J1dHRvbi0tYXJyb3ctLWxlZnQsXG5cdC5wc3dwX19idXR0b24tLWFycm93LS1yaWdodCxcblx0LnBzd3BfX2NvdW50ZXIge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLnBzd3BfX2VsZW1lbnQtLWRpc2FibGVkIHtcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AaWYgJHBzd3BfX2luY2x1ZGUtbWluaW1hbC1zdHlsZSA9PSB0cnVlIHtcblx0LnBzd3AtLW1pbmltYWwtLWRhcmsge1xuXHRcdC5wc3dwX190b3AtYmFyIHtcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9jc3MvcGhvdG9zd2lwZS9tYWluLnNjc3NcIjsgXG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9jc3MvcGhvdG9zd2lwZS9kZWZhdWx0LXNraW4vZGVmYXVsdC1za2luLnNjc3NcIjsgXG5cbmgxIHttYXJnaW46IDJlbTt9XG4ucHN3cF9fY2FwdGlvbl9fY2VudGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuXG4ucHN3cC0tb3BlbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnBzd3AtLWFuaW1hdGVfb3BhY2l0eSxcbi5wc3dwX19iZyxcbi5wc3dwX19jYXB0aW9uLFxuLnBzd3BfX3RvcC1iYXIsXG4ucHN3cC0taGFzX21vdXNlIC5wc3dwX19idXR0b24tLWFycm93LS1sZWZ0LFxuLnBzd3AtLWhhc19tb3VzZSAucHN3cF9fYnV0dG9uLS1hcnJvdy0tcmlnaHR7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAzMzNtcyBjdWJpYy1iZXppZXIoLjQsMCwuMjIsMSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIyLDEpO1xufVxuXG5cbi8vICAgaW1nIHt3aWR0aDogMTAwJTt9XG5cbi5zcGFjZXIge2hlaWdodDogNWVtO31cbi5nYWxsZXJ5e1xuICAgIHdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogNjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMzBweCwgMWZyKSk7XG5cdC8vIGdyaWQtYXV0by1yb3dzOiAyNTBweDtcblx0LnNsaWRlX3RodW1ic3tcblx0XHQuc2xpZGVfdGh1bWJzX2hvbGRlciwgaW1nLCBmaWd1cmV7XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHRcdGZpZ3VyZXtcblx0XHRcdG1hcmdpbjowO1xuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xuXHRcdFx0LW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zcztcblx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiA2cHggNnB4IDE4cHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA4cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDAsMCwwLDAuMyk7XG5cdFx0XHR9XG5cdFx0XHRpbWd7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5cblxuXG4vLyBAbWVkaWEobWF4LXdpZHRoOiAxMzMzcHgpIHtcbi8vIFx0LmdhbGxlcnkgLnNsaWRlX3RodW1icyB7XG4vLyBcdCAgZmxleC1iYXNpczogMzMuMzMlO1xuLy8gXHR9XG4vLyAgIH1cbi8vIEBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xuLy8gXHQuZ2FsbGVyeSAuc2xpZGVfdGh1bWJzIHtcbi8vIFx0XHRmbGV4LWJhc2lzOiAzMy4zMyU7XG4vLyBcdH1cbi8vIH1cbi8vIEBtZWRpYShtYXgtd2lkdGg6IDgxNXB4KSB7XG4vLyBcdC5nYWxsZXJ5IC5zbGlkZV90aHVtYnMge1xuLy8gXHQgIGZsZXgtYmFzaXM6IDUwJTtcbi8vIFx0fVxuLy8gfVxuLy8gQG1lZGlhKG1heC13aWR0aDogNTU1cHgpIHtcbi8vIFx0LmdhbGxlcnkgLnNsaWRlX3RodW1icyB7XG4vLyBcdFx0ZmxleC1iYXNpczogMTAwJTtcbi8vIFx0fVxuLy8gfVxuXG4iXX0= */"

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
            // showAnimationDuration: 400,
            showHideOpacity: true,
            hideAnimationDuration: 0,
            showAnimationDuration: 0,
            // history: true,
            // zoomEl: false,
            // maxSpreadZoom: 1,
            // getDoubleTapZoom: function(isMouseClick, item) {
            //     return item.initialZoomLevel;
            // },
            // pinchToClose: false,
            closeOnScroll: false,
        };
        this.ps_gallery = new photoswipe_dist_photoswipe_min_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.ps_element, photoswipe_dist_photoswipe_ui_default_js__WEBPACK_IMPORTED_MODULE_5___default.a, this.gallerySlides, this.ps_options);
        this.ps_gallery.init();
    };
    GalleryComponent.prototype.carousel = function (slide) {
        this.ps_element = document.querySelectorAll('.pswp')[0];
        this.ps_options = {
            index: 0,
            // showAnimationDuration: 400,
            showHideOpacity: true,
            hideAnimationDuration: 0,
            showAnimationDuration: 0,
            // history: true,
            // zoomEl: false,
            // maxSpreadZoom: 1,
            // getDoubleTapZoom: function(isMouseClick, item) {
            //     return item.initialZoomLevel;
            // },
            // pinchToClose: false,
            closeOnScroll: false,
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

module.exports = "<header>\n\t<div class=\"row inner\" data-color=\"intro\">\n\t\t\t<h3>the monarq is a multidisciplinary artist and designer from Chicago now based in Seattle.</h3>\n\t\t\t<p>I create under the moniker “the monarq” which is a multidisciplinary practice with a focus on analog photography, pattern making, and illustration. </p>\n\t</div>\n</header>\n\n<div *ngIf=\"galleries\" class=\"galleries\">\n\t<div *ngFor=\"let gallery of galleries; let i=index; let odd=odd; let even=even;\" class=\"row\" [ngClass]=\"{ odd: odd, even: even }\" attr.data-color=\"{{gallery.title}}\" >\n\t\t<div class=\"galleryPreview js-tilt\"  data-tilt>\n\t\t\t<div class=\"breakout\">\n\t\t\t\t<a class=\"desc\" [routerLink]=\"['/gallery', gallery.title]\">\n\t\t\t\t\t<h1 class=\"gallery-link\">{{gallery.title}}</h1>\n\t\t\t\t\t<p>description</p>\n\t\t\t\t</a>\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<ul>\n\t<li>\n\t\ttodo list:\n\t</li>\n\t<li>\n\t\t\t<del>fix w/h of link to galleries from home for desktop and mobile</del>\n\t</li>\n\t<li> <del> add tilt.js to home</del></li>\n\t<li>\n\t\t\t<del>fix routes to galleries to huse ng-href https://angular.io/guide/ajs-quick-reference#ng-href</del>\n\t</li>\n\t<li>\n\t\tbuild server error pages, 404 etc\n\t</li>\n\t<li>\n\t\tpage transitions\n\t</li>\n\t<li>\n\t\t- shape overlays example in dls\n\t</li>\n\t<li>\n\t\t- mobile menu\n\t</li>\n\t<li>\n\t\t- style galleries\n\t</li>\n\t<li>\n\t\t- contact form\n\t</li>\n\t<li>\n\t\t- about page design with cv\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.tile {\n  display: block;\n  width: 300px;\n  height: 300px;\n  background: linear-gradient(135deg, #ff00ba 0%, #fae713 100%);\n  box-shadow: 0 3px 47px rgba(0, 0, 0, 0.2);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative; }\n.tile .inner {\n    display: block;\n    width: 200px;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translateZ(20px) translateX(-50%) translateY(-50%);\n            transform: translateZ(20px) translateX(-50%) translateY(-50%);\n    background: transparent;\n    text-align: center;\n    font-size: 40px;\n    line-height: 40px;\n    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);\n    color: white; }\nheader h1 {\n  text-align: center; }\n.galleries {\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n.galleries .row {\n    height: 60vh;\n    margin-bottom: 10px;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    display: flex; }\n.galleries .row .galleryPreview {\n      margin: 0 auto;\n      position: relative;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-image: url('thumb_fractures.jpg');\n      background-size: 350px 350px;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 350px;\n      height: 350px;\n      -webkit-transform-style: preserve-3d;\n              transform-style: preserve-3d; }\n.galleries .row .galleryPreview .breakout {\n        position: relative; }\n.galleries .row .galleryPreview .breakout a.desc {\n          text-decoration: none;\n          -webkit-transform: translateZ(20px);\n                  transform: translateZ(20px);\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          height: 200px;\n          width: 100%;\n          margin-left: calc(-50% + 50%);\n          position: relative;\n          color: #222; }\n.galleries .row .galleryPreview .breakout a.desc h1 {\n            margin: 0;\n            font-family: 'salomeregular', Georgia, Serif; }\n.galleries .row .galleryPreview .breakout a.desc p {\n            font-size: 1.5rem; }\n.gallery {\n  background-size: cover; }\n.gallery   .gallery_img {\n    width: 100%;\n    height: 100%; }\n.gallery-link:hover {\n  cursor: pointer; }\n@media only screen and (min-width: 960px) {\n  .galleries .row {\n    height: 90vh; }\n    .galleries .row .desc {\n      flex: none;\n      height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NhYmVsbGEvRG9jdW1lbnRzL0dpdEh1Yi90aGUtbW9uYXJxLXNpdGUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBRWIsNkRBQTZEO0VBQzdELHlDQUF5QztFQUN6QyxvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLGtCQUFrQixFQUFBO0FBUm5CO0lBVUUsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QscUVBQTZEO1lBQTdELDZEQUE2RDtJQUM3RCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNENBQXlDO0lBQ3pDLFlBQVksRUFBQTtBQUlkO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0FBSHZCO0lBZ0JFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYSxFQUFBO0FBckJmO01BdUJHLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsNENBQXFFO01BQ3JFLDRCQUE0QjtNQUM1QiwyQkFBMkI7TUFDM0IsNEJBQTRCO01BQzVCLFlBQVk7TUFDWixhQUFhO01BQ2Isb0NBQTRCO2NBQTVCLDRCQUE0QixFQUFBO0FBbEMvQjtRQW9DSSxrQkFBa0IsRUFBQTtBQXBDdEI7VUFzQ0sscUJBQXFCO1VBQ3JCLG1DQUEyQjtrQkFBM0IsMkJBQTJCO1VBQzNCLGFBQWE7VUFDYixzQkFBc0I7VUFDdEIsdUJBQXVCO1VBQ3ZCLG1CQUFtQjtVQUNuQixhQUFhO1VBQ2IsV0FBVztVQUNYLDZCQUE2QjtVQUM3QixrQkFBa0I7VUFFbEIsV0FBVyxFQUFBO0FBakRoQjtZQW1ETSxTQUFTO1lBQ1QsNENBQTRDLEVBQUE7QUFwRGxEO1lBdURNLGlCQUFpQixFQUFBO0FBb0N2QjtFQUNDLHNCQUFzQixFQUFBO0FBRHZCO0lBR0UsV0FBVztJQUNYLFlBQVksRUFBQTtBQUdkO0VBQ0csZUFBZSxFQUFBO0FBSWxCO0VBQ0M7SUFFRSxZQUFZLEVBQUE7SUFGZDtNQUlHLFVBQVU7TUFFVixZQUFZLEVBQUEsRUFFWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50aWxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmYwMGJhIDAlLCAjZmFlNzEzIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmYwMGJhIDAlLCAjZmFlNzEzIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDNweCA0N3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC50aWxlIC5pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KSB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBjb2xvcjogd2hpdGU7IH1cblxuaGVhZGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5nYWxsZXJpZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLmdhbGxlcmllcyAucm93IHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuZ2FsbGVyaWVzIC5yb3cgLmdhbGxlcnlQcmV2aWV3IHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1hZ2VzL3RodW1icy90aHVtYl9mcmFjdHVyZXMuanBnXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAzNTBweCAzNTBweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxuICAgICAgLmdhbGxlcmllcyAucm93IC5nYWxsZXJ5UHJldmlldyAuYnJlYWtvdXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgLmdhbGxlcmllcyAucm93IC5nYWxsZXJ5UHJldmlldyAuYnJlYWtvdXQgYS5kZXNjIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTUwJSArIDUwJSk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGNvbG9yOiAjMjIyOyB9XG4gICAgICAgICAgLmdhbGxlcmllcyAucm93IC5nYWxsZXJ5UHJldmlldyAuYnJlYWtvdXQgYS5kZXNjIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2Fsb21lcmVndWxhcicsIEdlb3JnaWEsIFNlcmlmOyB9XG4gICAgICAgICAgLmdhbGxlcmllcyAucm93IC5nYWxsZXJ5UHJldmlldyAuYnJlYWtvdXQgYS5kZXNjIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07IH1cblxuLmdhbGxlcnkge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG4gIC5nYWxsZXJ5IMKgwqAuZ2FsbGVyeV9pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgfVxuXG4uZ2FsbGVyeS1saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcbiAgLmdhbGxlcmllcyAucm93IHtcbiAgICBoZWlnaHQ6IDkwdmg7IH1cbiAgICAuZ2FsbGVyaWVzIC5yb3cgLmRlc2Mge1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIGhlaWdodDogYXV0bzsgfSB9XG4iLCIudGlsZXtcdFxuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDMwMHB4O1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjAwYmEgMCUsICNmYWU3MTMgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjAwYmEgMCUsICNmYWU3MTMgMTAwJSk7XG5cdGJveC1zaGFkb3c6IDAgM3B4IDQ3cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdC5pbm5lcntcdFx0XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDIwMHB4O1xuXHRcdGhlaWdodDogNDBweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA1MCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KSB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRsaW5lLWhlaWdodDogNDBweDtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwwLDAsMC4zKTtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cbn1cblxuaGVhZGVyIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nYWxsZXJpZXN7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Ly8gaHRtbCB7XG5cdC8vIFx0d2lkdGg6IDEwMCU7XG5cdC8vIFx0aGVpZ2h0OiAxMDAlO1xuXHQvLyB9XG5cdFxuXG5cdFxuXHQucm93e1xuXHRcdC8vIGRpc3BsYXk6IGZsZXg7XG5cdFx0Ly8gZmxleDogMSAxIGF1dG87XG5cdFx0Ly8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0Ly8gYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDYwdmg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LmdhbGxlcnlQcmV2aWV3IHtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX2ZyYWN0dXJlcy5qcGcnKTtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogMzUwcHggMzUwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdFx0d2lkdGg6IDM1MHB4O1xuXHRcdFx0aGVpZ2h0OiAzNTBweDtcblx0XHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cdFx0XHQuYnJlYWtvdXQge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGEuZGVzYyB7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiBjYWxjKC01MCUgKyA1MCUpO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHQvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0XHRcdFx0aDF7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ3NhbG9tZXJlZ3VsYXInLCBHZW9yZ2lhLCBTZXJpZjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFxuXHRcdC8vIC5nYWxsZXJ5UHJldmlld3tcblx0XHQvLyBcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdGh1bWJzL3RodW1iX2ZyYWN0dXJlcy5qcGcnKTtcblx0XHQvLyBcdGJhY2tncm91bmQtc2l6ZTogMzUwcHggMzUwcHg7XG5cdFx0Ly8gXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0Ly8gXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdC8vIFx0d2lkdGg6IDM1MHB4O1xuXHRcdC8vIFx0aGVpZ2h0OiAzNTBweDtcblx0XHQvLyB9XG5cdFx0Ly8gLmRlc2N7XG5cdFx0Ly8gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Ly8gXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0Ly8gXHRjb2xvcjogIzIyMjtcblx0XHQvLyBcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Ly8gXHRmbGV4OjE7XG5cdFx0Ly8gXHQvLyBmbGV4OiAxIDEgYXV0bztcblx0XHQvLyBcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0Ly8gXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHQvLyBcdC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Ly8gXHRoZWlnaHQ6IDEwMCU7XG5cdFx0Ly8gXHRoMXtcblx0XHQvLyBcdFx0bWFyZ2luOiAwO1xuXHRcdC8vIFx0XHRmb250LWZhbWlseTogJ3NhbG9tZXJlZ3VsYXInLCBHZW9yZ2lhLCBTZXJpZjtcblx0XHQvLyBcdH1cblx0XHQvLyBcdHB7XG5cdFx0Ly8gXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdC8vIFx0fVxuXHRcdH1cbiAgXHR9XG59XG5cblxuLmdhbGxlcnl7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdMKgwqAuZ2FsbGVyeV9pbWd7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG59XG4uZ2FsbGVyeS1saW5rOmhvdmVyIHtcbiAgXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk2MHB4KXtcblx0LmdhbGxlcmllcyB7XG5cdFx0LnJvd3tcblx0XHRcdGhlaWdodDogOTB2aDtcblx0XHRcdC5kZXNje1xuXHRcdFx0XHRmbGV4OiBub25lO1xuXHRcdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHRcdC8vIGZsZXg6MTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5cbiJdfQ== */"

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
            },
            {
                src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
                w: 1200,
                h: 900,
                title: "Image Caption 2",
                album: 'second'
            },
            {
                src: "https://images.unsplash.com/photo-1543508282-5c1f427f023f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
                w: 1200,
                h: 900,
                title: "Image Caption 2",
                album: 'second'
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
                src: "/assets/images/texture_on_polaroid/img146.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img112.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img113.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img114.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img116.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img117_2.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img042.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img157.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img160.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img192.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img184.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img179.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img172.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img166.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img158.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img157.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img153.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img152.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img132.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img129.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img119.jpg",
                w: 900,
                h: 1067,
                title: "Texture on Polariod",
                album: 'texture-on-polaroid'
            },
            {
                src: "/assets/images/texture_on_polaroid/img116.jpg",
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
            // ,
            // {
            // 	src : "https://media.gettyimages.com/photos/camargue-woman-on-horseback-in-camargue-france-bouches-du-rhone-of-picture-id120665188",
            // 	w : 1200,
            // 	h : 900,
            // 	title : "Image Caption",
            // 	album : 'default'
            // },
            // {
            // 	src : "https://media.gettyimages.com/photos/teamwork-picture-id183815157",
            // 	w : 1200,
            // 	h : 900,
            // 	title : "Image Caption",
            // 	album : 'default'
            // }
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

module.exports = "<div class=\"navWrapper\">\n\t<nav class=\"inner\">\n\n        <img src=\"assets/images/logo-nav@2x.png\" width=\"72\" height=\"72\">\n\n        <!-- menu -->\n        <ul class=\"menu\" >\n            <li>\n                <a class=\"navbar-item\" routerLink=\"gallery\" routerLinkActive=\"active\"\n                [routerLinkActiveOptions]=\"{ exact: true }\">Gallery</a>\n            </li>\n            <!--<li><a class=\"navbar-item\" routerLink=\"gallery\">Gallery</a></li>-->\n            <li>\n                <a class=\"navbar-item\" routerLink=\"about\" routerLinkActive=\"active\">About the Artist</a>\n            </li>\n            <li>\n                <a class=\"navbar-item\" routerLink=\"contact\" routerLinkActive=\"active\">CV</a>\n            </li>\n            <li>\n                <a class=\"navbar-item\" routerLink=\"contact\" routerLinkActive=\"active\">Contact</a>\n            </li>\n        </ul>\n\n\t</nav>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navWrapper {\n  position: relative;\n  height: 80px;\n  width: 100%; }\n  .navWrapper nav {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center; }\n  .navWrapper nav .menu {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-end;\n      list-style-type: none;\n      padding: 0;\n      margin: 0; }\n  .navWrapper nav .menu a {\n        display: block;\n        text-decoration: none;\n        padding: .6em 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWJlbGxhL0RvY3VtZW50cy9HaXRIdWIvdGhlLW1vbmFycS1zaXRlL3NyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFrQjtFQUVsQixZQUFZO0VBQ1osV0FBVyxFQUFBO0VBSlo7SUFPRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQVZyQjtNQWNHLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1YsU0FBUyxFQUFBO0VBbkJaO1FBcUJJLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdldyYXBwZXJ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ly8gbWF4LXdpZHRoOiAxMjMwcHg7XG5cdGhlaWdodDogODBweDtcblx0d2lkdGg6IDEwMCU7XG5cdC8vIG1hcmdpbi1ib3R0b206IDgwcHg7XG5cdG5hdiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Ly8gcG9zaXRpb246IGZpeGVkO1xuXHRcdC8vIHdpZHRoOiAxMDAlO1x0XHQgIFxuXHRcdC5tZW51e1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0YXtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0cGFkZGluZzogLjZlbSAxZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9IFxufVxuXG4iXX0= */"

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

module.exports = __webpack_require__(/*! /Users/sabella/Documents/GitHub/the-monarq-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map