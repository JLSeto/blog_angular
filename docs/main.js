(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/set000/blog_angular/PortfolioBlog/src/main.ts */"zUnb");


/***/ }),

/***/ "11Hd":
/*!****************************************************!*\
  !*** ./src/app/helpers/modules/material.module.ts ***!
  \****************************************************/
/*! exports provided: MyDateAdapter, MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDateAdapter", function() { return MyDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");





























class MyDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["NativeDateAdapter"] {
    getDateNames() {
        const dateNames = [];
        for (let i = 0; i < 31; i++) {
            dateNames[i] = String(i + 1);
        }
        return dateNames;
    }
}
MyDateAdapter.ɵfac = function MyDateAdapter_Factory(t) { return ɵMyDateAdapter_BaseFactory(t || MyDateAdapter); };
MyDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjectable"]({ token: MyDateAdapter, factory: MyDateAdapter.ɵfac });
const ɵMyDateAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetInheritedFactory"](MyDateAdapter);
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"], useValue: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_NATIVE_DATE_FORMATS"] },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"], useClass: MyDateAdapter }
    ], imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"]
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"]] }); })();


/***/ }),

/***/ "79G0":
/*!****************************************************!*\
  !*** ./src/app/helpers/services/helper.service.ts ***!
  \****************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HelperService {
    constructor(router) {
        this.router = router;
        this.isMobile = false;
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.checkifMobile();
    }
    checkifMobile() {
        this.isMobile = (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) ? true : false;
    }
    getIsMobile() {
        return this.isMobile;
    }
    setInnerDimensions(data) {
        this.innerHeight = data.height;
        this.innerWidth = data.width;
    }
    getInnerWidth() {
        return this.innerWidth;
    }
    getInnerHeight() {
        return this.innerHeight;
    }
    routerNavigateProject(link) {
        this.router.navigate(['projects/' + link]);
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "CPGx":
/*!**********************************************!*\
  !*** ./src/app/frogger/frogger.component.ts ***!
  \**********************************************/
/*! exports provided: FroggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FroggerComponent", function() { return FroggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/services/helper.service */ "79G0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





const _c0 = ["canvas"];
function FroggerComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.resetCounter);
} }
class FroggerComponent {
    constructor(hS, cd) {
        this.hS = hS;
        this.cd = cd;
        //Display Messages
        this.gameMsg = '';
        this.ctx = null;
        //Engine
        this.lastTime = Date.now();
        //App
        this.allEnemies = [];
        this.player = null;
        this.keyItem = null;
        this.gotKey = false;
        this.resetCounter = -1;
        this.winCounter = 0;
        this.loseCounter = 0;
        //Start Engine
        this.main = () => {
            let now = Date.now();
            let dt = (now - this.lastTime) / 1000.0;
            this.update(dt);
            this.render();
            this.lastTime = now;
            window.requestAnimationFrame(this.main);
        };
        this.init = () => {
            //this.reset();
            this.lastTime = Date.now();
            this.main();
        };
        this.Resources = new Resources();
        this.Resources.load([
            './assets/frogger/char-boy.png',
            './assets/frogger/enemy-bug.png',
            './assets/frogger/Heart.png',
            './assets/frogger/stone-block.png',
            './assets/frogger/char-cat-girl.png',
            './assets/frogger/Gem Blue.png',
            './assets/frogger/Key.png',
            './assets/frogger/water-block.png',
            './assets/frogger/char-horn-girl.png',
            './assets/frogger/Gem Green.png',
            './assets/frogger/Rock.png',
            './assets/frogger/char-pink-girl.png',
            './assets/frogger/Gem Orange.png',
            './assets/frogger/Selector.png',
            './assets/frogger/char-princess-girl.png',
            './assets/frogger/grass-block.png',
            './assets/frogger/Star.png',
        ]);
    }
    ngOnInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.canvas.nativeElement.width = 505;
        this.canvas.nativeElement.height = 606;
        this.keyItem = new KeyItem(this.ctx, this.Resources, this.cd);
        this.player = new Player(this.ctx, this.Resources, this.cd, this.keyItem);
        for (let i = 0; i < 2; i++) {
            this.allEnemies.push(new Enemy(this.ctx, this.Resources, this.cd, this.player));
        }
        this.Resources.onReady(this.init); //initialize
        document.addEventListener('keyup', (e) => {
            this.player.handleInput(e.key);
        });
        window.addEventListener("keydown", function (e) {
            if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        }, false);
    }
    update(dt) {
        this.checkCollisions();
        this.updateEntities(dt);
    }
    checkCollisions() {
        if (this.gotKey) {
            return;
        }
        if (true) {
        }
        if (this.player.x == this.keyItem.x && this.player.y == this.keyItem.y) {
            this.resetCounter = 3;
            this.gotKey = true;
            this.gameMsg = 'You Win! Resetting in ';
            this.player.disable = true;
            this.keyItem.disable = true;
            this.winCounter++;
            var refreshInteval = setInterval(() => {
                this.resetCounter--;
                if (this.resetCounter <= 0) {
                    this.player.disable = false;
                    this.keyItem.disable = false;
                    this.gameMsg = '';
                    this.player.x = 202; //0 is first column. 101 is 2nd.
                    this.player.y = 374.5; //41.5 is middle of a row 41.5*9
                    this.gotKey = false;
                    for (let i = 0; i < 2; i++) {
                        this.allEnemies.push(new Enemy(this.ctx, this.Resources, this.cd, this.player));
                    }
                    clearInterval(refreshInteval);
                }
            }, 1000);
        }
    }
    updateEntities(dt) {
        this.allEnemies.forEach((enemy) => {
            let x = enemy.update(dt);
            if (x) {
                this.loseCounter++;
            }
        });
        this.player.update();
    }
    render() {
        var _a;
        let rowImages = [
            './assets/frogger/water-block.png',
            './assets/frogger/stone-block.png',
            './assets/frogger/stone-block.png',
            './assets/frogger/stone-block.png',
            './assets/frogger/stone-block.png',
            './assets/frogger/grass-block.png' // Row 2 of 2 of grass
        ], numRows = 6, numCols = 5, row, col;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                if (row == 0 && col == numCols - 1) {
                    this.ctx.drawImage(this.Resources.get('./assets/frogger/stone-block.png'), col * 101, row * 83);
                }
                else {
                    this.ctx.drawImage(this.Resources.get(rowImages[row]), col * 101, row * 83);
                }
            }
        }
        this.renderEntities();
    }
    renderEntities() {
        this.allEnemies.forEach(function (enemy) {
            enemy.render();
        });
        this.player.render();
        this.keyItem.render();
    }
}
FroggerComponent.ɵfac = function FroggerComponent_Factory(t) { return new (t || FroggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FroggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FroggerComponent, selectors: [["app-frogger"]], viewQuery: function FroggerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 19, vars: 4, consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 2, "width", "100%"], ["canvas", ""], [2, "text-align", "right"], [1, "frogger-caption", 3, "click"], [4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxLayoutGap", "16px"], ["fxLayout", "column", "fxLayoutAlign", "start start"], ["mat-stroked-button", "", 2, "color", "#ff4048", "border-radius", "50px", 3, "click"]], template: function FroggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figcaption", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FroggerComponent_Template_span_click_5_listener() { return ctx.hS.routerNavigateProject("frogger"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Frogger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FroggerComponent_span_9_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FroggerComponent_Template_button_click_17_listener() { return ctx.player.changeCharacter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Change Character");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.gameMsg, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resetCounter > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wins: ", ctx.winCounter, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Losses: ", ctx.loseCounter, "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".frogger-caption[_ngcontent-%COMP%] {\n  font-size: 10px;\n  cursor: pointer;\n}\n\n.frogger-caption[_ngcontent-%COMP%]:hover {\n  color: #64B5F6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb2dnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImZyb2dnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJvZ2dlci1jYXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTBweDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZnJvZ2dlci1jYXB0aW9uOmhvdmVye1xuICAgIGNvbG9yOiAjNjRCNUY2O1xufSJdfQ== */"] });
class Enemy {
    constructor(ctx, resources, cd, player) {
        this.ctx = ctx;
        this.resources = resources;
        this.cd = cd;
        this.player = player;
        this.sprite = './assets/frogger/enemy-bug.png';
        this.x = -101;
        this.y = 0;
        this.speed = Math.floor(Math.random() * 400);
        this.randomEnemies = function () {
            var set = [42.5, 125.5, 208.5, 291.5];
            var rndm = Math.floor(Math.random() * 4);
            return set[rndm];
        };
        this.update = (dt) => {
            this.x += this.speed * dt;
            this.x = (this.x > 505) ? (-101) : (this.x + 1);
            let minRange = Math.floor(this.x - 50);
            let maxRange = Math.floor(this.x + 50);
            if (this.y == this.player.y) {
                if ((this.player.x > minRange && this.player.x < this.x) || (this.player.x > this.x && this.player.x < maxRange)) {
                    this.player.x = 202; //0 is first column. 101 is 2nd.
                    this.player.y = 374.5; //41.5 is middle of a row 41.5*9
                    return true;
                }
            }
            return false;
        };
        this.render = () => {
            var _a, _b;
            (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.drawImage(this.resources.get(this.sprite), this.x, this.y);
            (_b = this.ctx) === null || _b === void 0 ? void 0 : _b.save();
            //this.cd.detectChanges();
        };
        this.y = this.randomEnemies();
    }
}
class Resources {
    constructor() {
        //Resources
        this.resourceCache = {};
        this.loading = [];
        this.readyCallbacks = [];
    }
    load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach((url) => {
                this._load(url);
            });
        }
        else {
            this._load(urlOrArr);
        }
    }
    _load(url) {
        if (this.resourceCache[url]) {
            return this.resourceCache[url];
        }
        else {
            let img = new Image();
            img.onload = () => {
                this.resourceCache[url] = img;
                if (this.isReady()) {
                    this.readyCallbacks.forEach(function (func) { func(); });
                }
            };
            this.resourceCache[url] = false;
            img.src = url;
        }
    }
    get(url) {
        return this.resourceCache[url];
    }
    isReady() {
        let ready = true;
        for (var k in this.resourceCache) {
            if (this.resourceCache.hasOwnProperty(k) &&
                !this.resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }
    onReady(func) {
        this.readyCallbacks.push(func);
    }
}
class Player {
    constructor(ctx, resources, cd, keyItem) {
        this.ctx = ctx;
        this.resources = resources;
        this.cd = cd;
        this.keyItem = keyItem;
        this.sprite = './assets/frogger/char-boy.png';
        this.charIdx = 0;
        this.x = 202;
        this.y = 374.5;
        this.disable = false;
        this.update = () => {
            if (this.disable) {
                return;
            }
            if (this.x > 404 || this.x < 0 || this.y > 415 || this.y < 0) {
                this.x = 202;
                this.y = 374.5;
            }
        };
        this.handleInput = (keys) => {
            if (this.disable) {
                return;
            }
            switch (keys) {
                case 'ArrowUp':
                    this.y -= 83;
                    break;
                case 'ArrowDown':
                    this.y += 83;
                    break;
                case 'ArrowLeft':
                    this.x -= 101;
                    break;
                case 'ArrowRight':
                    this.x += 101;
                    break;
            }
        };
        this.render = () => {
            var _a, _b;
            (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.drawImage(this.resources.get(this.sprite), this.x, this.y);
            (_b = this.ctx) === null || _b === void 0 ? void 0 : _b.save();
            this.cd.detectChanges();
        };
        this.arrChar =
            [
                './assets/frogger/char-boy.png',
                './assets/frogger/char-cat-girl.png',
                './assets/frogger/char-horn-girl.png',
                './assets/frogger/char-pink-girl.png',
                './assets/frogger/char-princess-girl.png',
            ];
    }
    changeCharacter() {
        this.charIdx = (this.charIdx >= this.arrChar.length - 1) ? 0 : (this.charIdx + 1);
        this.sprite = this.arrChar[this.charIdx];
    }
}
class KeyItem {
    constructor(ctx, resources, cd) {
        this.ctx = ctx;
        this.resources = resources;
        this.cd = cd;
        this.disable = false;
        this.sprite = './assets/frogger/Key.png';
        this.x = 404;
        this.y = -40.5;
        this.render = () => {
            var _a, _b;
            if (this.disable) {
                return;
            }
            else {
                (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.drawImage(this.resources.get(this.sprite), this.x, this.y);
                (_b = this.ctx) === null || _b === void 0 ? void 0 : _b.save();
                this.cd.detectChanges();
            }
        };
    }
}


/***/ }),

/***/ "H9mi":
/*!***************************************************!*\
  !*** ./src/app/helpers/pipes/displayDate.pipe.ts ***!
  \***************************************************/
/*! exports provided: DisplayDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDatePipe", function() { return DisplayDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DisplayDatePipe {
    constructor() {
        this.displayLang = 'en-US'; //'ja-JP';
        this.date_options = { year: 'numeric', month: 'long', day: 'numeric' };
    }
    transform(date) {
        if (!date) {
            return '';
        }
        else {
            return new Date(date).toLocaleDateString(this.displayLang, this.date_options);
        }
    }
}
DisplayDatePipe.ɵfac = function DisplayDatePipe_Factory(t) { return new (t || DisplayDatePipe)(); };
DisplayDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "displayDate", type: DisplayDatePipe, pure: true });


/***/ }),

/***/ "KHKH":
/*!*****************************************!*\
  !*** ./src/app/projects/iframe-view.ts ***!
  \*****************************************/
/*! exports provided: iFrameView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iFrameView", function() { return iFrameView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class iFrameView {
    constructor(dom) {
        this.dom = dom;
        this.x = (Math.random()).toString();
        this._iframeSrc = '';
    }
    set iframeSrc(s) {
        this._iframeSrc = this.dom.bypassSecurityTrustResourceUrl(s);
    }
    ngOnInit() {
    }
}
iFrameView.ɵfac = function iFrameView_Factory(t) { return new (t || iFrameView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
iFrameView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: iFrameView, selectors: [["app-iframesrc"]], inputs: { iframeSrc: "iframeSrc" }, decls: 2, vars: 2, consts: [[1, "videoWrapper"], ["frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "id", "src"]], template: function iFrameView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "iframe", ctx.x, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx._iframeSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, styles: [".ftop-container[_ngcontent-%COMP%] {\n  font-size: 120%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", sans-serif;\n  color: #333333;\n  letter-spacing: 1px;\n}\n\n.extraPadding[_ngcontent-%COMP%] {\n  padding-top: 125px;\n  padding-bottom: 25px;\n}\n\n.toptop[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, white 50%, #ECEFF1 0%);\n  min-height: calc(100vh - 40px);\n  margin-bottom: 10px;\n  padding-top: 25px;\n}\n\n.toptopPadd[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n\n.toptop2[_ngcontent-%COMP%] {\n  min-height: calc(80vh - 40px);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 24px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 550;\n  line-height: 69.4px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 20px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 36.4px;\n}\n\n[_nghost-%COMP%]     .h3-deep {\n  font-family: \"Varela Round\";\n  font-size: 16px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 600;\n  margin-top: 12px;\n  margin-bottom: 4px;\n}\n\n.projects-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.projects-card[_ngcontent-%COMP%]:hover {\n  background-color: #e8f0ff;\n}\n\n.projects-title[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 16.5px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 28.4px;\n}\n\n.projects-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 14px;\n  font-style: italic;\n  font-variant: normal;\n  font-weight: 400;\n  color: #646464;\n}\n\n.projects-description[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n}\n\n.frontpage-links[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #1e88e5;\n  text-decoration: none;\n}\n\n.frontpage-links[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.other-stuff[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  background: #D7CCC8;\n  width: 100%;\n}\n\n.nav-circle[_ngcontent-%COMP%] {\n  height: auto;\n  width: 300px;\n  overflow: hidden;\n  display: flex;\n  min-width: 30px;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0px;\n  display: block;\n}\n\n.logos-signin[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.projects-img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  height: auto;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0px;\n  display: block;\n}\n\n.videoWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  \n  padding-top: 25px;\n  height: 0;\n  width: 100%;\n  height: 100%;\n  border: 0.5px solid #d5d5d5;\n}\n\n.videoWrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.projects-button-no-link[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  color: #505050;\n  background-color: white;\n  cursor: default;\n  pointer-events: none;\n  margin-bottom: 8px;\n  text-overflow: ellipsis;\n}\n\n.projects-button-pink[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  color: #ff4048;\n  background-color: white;\n  margin-bottom: 8px;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG1IQUFBO0VBQ0EsY0FBQTtFQUFnQixtQkFBQTtBQUVwQjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDRTtFQUNFLDREQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0U7RUFDRSxpQkFBQTtBQUVKOztBQUNFO0VBRUUsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQTZCLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0Isb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0IsbUJBQUE7QUFNOUc7O0FBSEU7RUFDRSwyQkFBQTtFQUE2QixlQUFBO0VBQWlCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGdCQUFBO0VBQWtCLG1CQUFBO0FBVzlHOztBQVJFO0VBQ0UsMkJBQUE7RUFBNkIsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixrQkFBQTtBQWlCaEk7O0FBZEk7RUFDSSxlQUFBO0FBaUJSOztBQWRJO0VBQ0kseUJBQUE7QUFpQlI7O0FBZEk7RUFDSSwyQkFBQTtFQUE2QixpQkFBQTtFQUFtQixrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixtQkFBQTtBQXNCcEg7O0FBbkJJO0VBQ0ksMkJBQUE7RUFBNkIsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixjQUFBO0FBMkJsSDs7QUF4Qkk7RUFDSSwyQkFBQTtFQUE2QixlQUFBO0VBQWlCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGdCQUFBO0FBK0JoRzs7QUEzQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBOEJKOztBQTNCRTtFQUNFLDBCQUFBO0FBOEJKOztBQTVCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQStCSjs7QUE1QkU7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBOEJKOztBQTNCQTtFQUNJLFdBQUE7QUE4Qko7O0FBMUJFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUE2Qko7O0FBMUJFO0VBQ0Qsa0JBQUE7RUFDQSxzQkFBQTtFQUF3QixTQUFBO0VBQ3hCLGlCQUFBO0VBQ0csU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUE4Qko7O0FBM0JBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBOEJEOztBQTNCQTtFQUNJLG1CQUFBO0VBQXFCLGNBQUE7RUFDckIsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBK0JKOztBQTVCQTtFQUNJLG1CQUFBO0VBQXFCLGNBQUE7RUFDckIsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBZ0NKIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ0b3AtY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDEyMCU7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgVWJ1bnR1LCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMzMzMzM7IGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuZXh0cmFQYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMTI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIH1cblxuICAudG9wdG9wIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlIDUwJSwgI0VDRUZGMSAwJSk7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gIH1cblxuICAudG9wdG9wUGFkZCB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gIH1cblxuICAudG9wdG9wMiB7XG4gICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzOTNhM2EgNTAlLCB3aGl0ZSA1MCUpO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoODB2aCAtIDQwcHgpO1xuICB9XG5cbiAgaDF7XG4gICAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDU1MDsgbGluZS1oZWlnaHQ6IDY5LjRweDtcbiAgfVxuXG4gIGgye1xuICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDIwcHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA1MDA7IGxpbmUtaGVpZ2h0OiAzNi40cHg7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLmgzLWRlZXB7XG4gICAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCI7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luLXRvcDogMTJweDsgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG5cbiAgICAucHJvamVjdHMtY2FyZHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5wcm9qZWN0cy1jYXJkOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMGZmO1xuICAgIH1cbiAgICBcbiAgICAucHJvamVjdHMtdGl0bGV7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDE2LjVweDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDUwMDsgbGluZS1oZWlnaHQ6IDI4LjRweDtcbiAgICB9XG5cbiAgICAucHJvamVjdHMtc3VidGl0bGV7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDE0cHg7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA0MDA7IGNvbG9yOiAjNjQ2NDY0OyBcbiAgICB9XG5cbiAgICAucHJvamVjdHMtZGVzY3JpcHRpb257XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDE0cHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgXG4gIC5mcm9udHBhZ2UtbGlua3N7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMWU4OGU1O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5mcm9udHBhZ2UtbGlua3M6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLm90aGVyLXN0dWZme1xuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxuICAgIGJhY2tncm91bmQ6ICNEN0NDQzg7IFxuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm5hdi1jaXJjbGVcbntcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDs7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4gIFxuLmxvZ29zLXNpZ25pbntcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuXG5cbiAgLnByb2plY3RzLWltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHB4OztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC52aWRlb1dyYXBwZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cblx0cGFkZGluZy10b3A6IDI1cHg7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNkNWQ1ZDU7XG59XG5cbi52aWRlb1dyYXBwZXIgaWZyYW1lIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9qZWN0cy1idXR0b24tbm8tbGlua3tcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyBjb2xvcjogIzUwNTA1MDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIGN1cnNvcjogZGVmYXVsdDsgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnByb2plY3RzLWJ1dHRvbi1waW5re1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IGNvbG9yOiAjZmY0MDQ4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"] });


/***/ }),

/***/ "Q3oP":
/*!*****************************************************!*\
  !*** ./src/app/helpers/services/sidenav.service.ts ***!
  \*****************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SidenavService {
    constructor() {
        this.sidenav = null;
    }
    setSidenav(sidenav) {
        this.sidenav = sidenav;
    }
    open() {
        return this.sidenav.open();
    }
    close() {
        return this.sidenav.close();
    }
    toggle() {
        console.log(this.sidenav);
        this.sidenav.toggle();
    }
}
SidenavService.ɵfac = function SidenavService_Factory(t) { return new (t || SidenavService)(); };
SidenavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidenavService, factory: SidenavService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/services/helper.service */ "79G0");
/* harmony import */ var _helpers_services_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/services/sidenav.service */ "Q3oP");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["sidenav"];
class AppComponent {
    constructor(hS, sN) {
        this.hS = hS;
        this.sN = sN;
        this.title = 'JLSeto';
        this.hS.checkifMobile();
    }
    ngAfterViewInit() {
        this.sN.setSidenav(this.sidenav); //Control the sidenav from navbar component
        console.log(this.sidenav);
    }
    onResize(event) {
        this.hS.setInnerDimensions({ width: event.target.innerWidth, height: event.target.innerHeight });
        this.hS.checkifMobile();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_services_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 0, consts: [[1, "app-outer"], [1, "example-sidenav-container"], ["mode", "over"], ["sidenav", ""], ["routerLink", "/", "mat-list-item", ""], [1, "nav-mat-list"], ["routerLink", "/projects", "mat-list-item", ""], ["routerLink", "/blog", "mat-list-item", ""], ["id", "mat-sidenav-content"], ["sbtop", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-content", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: [".fooicon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 6.5px;\n  cursor: pointer;\n}\n\n#searchnav[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.linkblack[_ngcontent-%COMP%] {\n  color: rgba(32, 31, 31, 0.466);\n  font-size: 0.8em;\n}\n\n.fcontainer[_ngcontent-%COMP%] {\n  border-top: 1.5px solid #d5d5d5;\n  font-size: 0.9em;\n  text-align: left;\n  margin-top: 25px;\n  margin-bottom: 16px;\n}\n\n.footerlinks[_ngcontent-%COMP%]:hover {\n  color: #4141fa;\n  cursor: pointer;\n}\n\n.footerlinks[_ngcontent-%COMP%] {\n  color: rgba(32, 31, 31, 0.466);\n}\n\na[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n}\n\n.a-toolbar[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  text-decoration: none;\n}\n\n.a-toolbar[_ngcontent-%COMP%] {\n  color: #ffffffee;\n  text-decoration: none;\n}\n\n.mbutton-toolbar[_ngcontent-%COMP%]:hover {\n  background: #afafaf;\n}\n\ninput[type=search][_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 1pt 1pt #4abdd1;\n  outline: none;\n}\n\nmat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #333333;\n  box-shadow: 0 1px 4px 0 rgba(32, 33, 36, 0.28);\n  min-height: 45px;\n  max-height: 45px;\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  opacity: 0.9;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  background: #fffffffb;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 7px;\n  margin-right: 12px;\n}\n\n.inputinput[_ngcontent-%COMP%] {\n  background-color: white;\n  padding-left: 18px;\n  height: 24px;\n  font-family: din-round, sans-serif;\n  font-size: 14px;\n  box-shadow: 0 0 1pt 1pt #bcd1d4;\n}\n\n.input-container[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 3pt 2pt #00ffea;\n  border-radius: 8px;\n  background: transparent;\n}\n\n.searchfoo[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  padding: 0;\n  outline: none;\n  height: 32px;\n  line-height: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nlabel[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 150px;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nh5[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n  margin: 0;\n}\n\nhr[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n  border: 0;\n  box-sizing: content-box;\n  height: 1px;\n  margin: 0;\n  min-height: 1px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n  display: block;\n  height: auto;\n  max-width: 100%;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  color: inherit;\n  font-family: inherit;\n  font-size: 100%;\n  line-height: normal;\n  margin: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n\n\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  overflow: hidden;\n  display: flex;\n  min-width: 32px;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0px;\n}\n\n.circle2[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  overflow: hidden;\n  display: flex;\n  min-width: 40px;\n  justify-content: left;\n  align-items: left;\n  margin-top: 2px;\n  margin-left: 8px;\n}\n\n.div-style[_ngcontent-%COMP%] {\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.flist[_ngcontent-%COMP%]:hover {\n  background-color: #f0e8e8;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.talkhover[_ngcontent-%COMP%]:hover {\n  background-color: #c0e59d;\n  border-radius: 8px 8px 0 0;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: helvetica;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.online-status[_ngcontent-%COMP%] {\n  height: 10px;\n  min-width: 10px;\n  background-color: green;\n  border-radius: 50%;\n  margin-top: 20px;\n  left: -8px;\n  display: inline-block;\n  position: relative;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.nav-mat-list[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 100%;\n  min-width: 100px;\n  text-align: center;\n}\n\n.nav-mat-list[_ngcontent-%COMP%] {\n  font-size: 15px;\n  text-align: center;\n}\n\n.mat-drawer-inner-container[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNJLFlBQUE7QUFDTjs7QUFJRTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUFETjs7QUFJRTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFJRTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRE47O0FBSUU7RUFDSSw4QkFBQTtBQUROOztBQU1FO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFNRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFNRTtFQUNFLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSwrQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFPRTtFQUNFLG1CQUFBO0VBRUEsOENBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUEwQix5QkFBQTtFQUMxQixNQUFBO0VBQVEseUNBQUE7RUFDUixhQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1FO0VBQ0UscUJBQUE7QUFISjs7QUFRRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFFO0VBR0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQVBKOztBQVdFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBUko7O0FBV0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUko7O0FBYUU7RUFDRSxrQkFBQTtBQVZKOztBQWFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVZKOztBQWdCRTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWJOOztBQWdCRTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQWJOOztBQWdCRTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBYk47O0FBZ0JFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWJKOztBQWdCRTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBYk47O0FBZ0JFO0VBQUksU0FBQTtBQVpOOztBQWNFLG9DQUFBOztBQUdBLHNDQUFBOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFmSjs7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFmSjs7QUFrQkE7RUFDRSxlQUFBO0VBRUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUNBLHdDQUFBO0FBakJGOztBQW9CQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUNBLHdDQUFBO0FBbEJGOztBQXFCQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUVBLHVCQUFBO0VBQ0Esd0NBQUE7QUFuQkY7O0FBc0JBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQW5CRjs7QUFzQkE7RUFFRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBcEJGOztBQXVCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQXBCRjs7QUF1QkE7RUFDRTswRkFBQTtFQUVBLE9BQUE7QUFwQkY7O0FBdUJBO0VBQ0U7K0RBQUE7RUFFQSxPQUFBO0FBcEJGOztBQXVCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFwQkY7O0FBd0JBO0VBQ0UsZ0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FBckJGOztBQXdCQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtBQXJCRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNi41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAjc2VhcmNobmF2IHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgXG4gIC8vIC0tLS0gRm9vdGVyIFN0dWZmIC0tLS1cbiAgLmxpbmtibGFjayB7XG4gICAgICBjb2xvcjogcmdiYSgzMiwgMzEsIDMxLCAwLjQ2Nik7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG4gIFxuICAuZmNvbnRhaW5lciB7XG4gICAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjZDVkNWQ1O1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICBcbiAgLmZvb3RlcmxpbmtzOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2IoNjUsIDY1LCAyNTApO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuZm9vdGVybGlua3Mge1xuICAgICAgY29sb3I6cmdiYSgzMiwgMzEsIDMxLCAwLjQ2Nik7XG4gIH1cbiAgXG4gIC8vIC0tLS0gRW5kIEZvb3RlciBTdHVmZiAtLS0tXG4gIFxuICBhIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAuYS10b29sYmFyOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAuYS10b29sYmFyIHtcbiAgICBjb2xvcjogI2ZmZmZmZmVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5tYnV0dG9uLXRvb2xiYXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigxNzUsIDE3NSwgMTc1KTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHQgMXB0IHJnYig3NCwgMTg5LCAyMDkpO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4gIFxuICBcbiAgbWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gICAgLy9ib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDkwLCAxMDQsIDc4KTtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDMyLDMzLDM2LC4yOCk7XG4gICAgbWluLWhlaWdodDogNDVweDtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xuICAgIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gICAgei1pbmRleDogMTAwMDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgXG4gIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZmYjsgLy93ZWJzaXRlIGJhY2tncm91bmRcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmYWZhZmM7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuXG4gIC5pbnB1dGlucHV0IFxuICB7XG4gICAgLy9iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL3N2Zy90d290b25lX3NlYXJjaF9ibGFja18xOGRwLnBuZykgbm8tcmVwZWF0IGxlZnQgY2VudGVyIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IGRpbi1yb3VuZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB0IDFwdCByZ2IoMTg4LCAyMDksIDIxMik7XG5cbiAgfVxuICBcbiAgLmlucHV0LWNvbnRhaW5lcjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNwdCAycHQgcmdiKDAsIDI1NSwgMjM0KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5zZWFyY2hmb297XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLy9wYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgXG4gIH1cbiAgXG4gIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIGxhYmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTUwcHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMjBweDtcbiAgICAvL3NiYWNrZ3JvdW5kOiB1cmwoXCIuL2Jhc2VsaW5lLXNlYXJjaC0yNHB4LnN2Z1wiKSBjZW50ZXIgLyBjb250YWluIG5vLXJlcGVhdDtcbiAgfVxuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIGZpZWxkc2V0IHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIGg1IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgaHIge1xuICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWluLWhlaWdodDogMXB4O1xuICB9XG4gIFxuICBpbWcge1xuICAgIGJvcmRlcjogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBpbnB1dCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgcCB7IG1hcmdpbjogMDsgfVxuICBcbiAgLyogLS0tLS0tLS0tLSBMSVZFLUNIQVQgLS0tLS0tLS0tLSAqL1xuXG4gIFxuICAvKiAtLS0tLS0tLS0tIE5ldy1NZXNzYWdlIC0tLS0tLS0tLS0gKi9cbiAgXG5cbiAgLmNpcmNsZXtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDMycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDs7XG4gIH1cblxuICAuY2lyY2xlMntcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG5cbi5kaXYtc3R5bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZsaXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjMyLCAyMzIpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGFsa2hvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMjI5LCAxNTcpO1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gIGRpc3BsYXk6IGZsZXggO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub25saW5lLXN0YXR1cyBcbntcbiAgaGVpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGxlZnQ6IC04cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gIGZsZXg6IDE7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDE7XG59XG5cbi5uYXYtbWF0LWxpc3R7XG4gIGZvbnQtc2l6ZTogMTVweDsgXG4gIHdpZHRoOiAxMDAlOyBcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2LW1hdC1saXN0e1xuICBmb250LXNpemU6IDE1cHg7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVye1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _helpers_modules_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/modules/material.module */ "11Hd");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./frontpage/frontpage.component */ "u5FN");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _helpers_pipes_displayDate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/pipes/displayDate.pipe */ "H9mi");
/* harmony import */ var _projects_iframe_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/iframe-view */ "KHKH");
/* harmony import */ var _frogger_frogger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./frogger/frogger.component */ "CPGx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _helpers_modules_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_7__["FrontpageComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
        _helpers_pipes_displayDate_pipe__WEBPACK_IMPORTED_MODULE_9__["DisplayDatePipe"],
        _projects_iframe_view__WEBPACK_IMPORTED_MODULE_10__["iFrameView"],
        _frogger_frogger_component__WEBPACK_IMPORTED_MODULE_11__["FroggerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _helpers_modules_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/services/helper.service */ "79G0");
/* harmony import */ var _helpers_services_sidenav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/services/sidenav.service */ "Q3oP");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function NavbarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.sidenav.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", obj_r6.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r6.desc);
} }
function NavbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_div_4_button_1_Template, 3, 2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.navLinks);
} }
function NavbarComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const local_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", local_r8.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", local_r8.desc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_div_6_div_1_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.locSrc);
} }
class NavbarComponent {
    constructor(hS, sidenav, router) {
        this.hS = hS;
        this.sidenav = sidenav;
        this.router = router;
        this.title = 'J.S';
        this.baseURL = '';
        this._routerSub = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY; //Check when the navigation ends, and then get profile info to prevent multiple requests
        this.locSrc =
            [
                { desc: './assets/twitter.svg', link: 'https://twitter.com/Jset0' },
                { desc: './assets/github.png', link: 'https://github.com/JLSeto' },
                { desc: './assets/linkedin.png', link: 'https://www.linkedin.com/in/jimmy-seto/' }
            ];
        this.navLinks =
            [
                { desc: 'About', link: '/' },
                { desc: 'Projects', link: 'projects' },
                { desc: 'Blog', link: 'blog' }
            ];
        this._routerSub = router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.baseURL = val.url.split('?')[0];
            }
        });
    }
    ngOnInit() {
    }
    toggle() {
        this.sidenav.toggle();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_helpers_services_sidenav_service__WEBPACK_IMPORTED_MODULE_4__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 7, vars: 3, consts: [["fxFlex", ""], ["color", "primary", "mat-elevation-z8", "true"], ["fxLayout", "row", "fxLayoutGap", "12px"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "12px", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "16px", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "material-icons-outlined"], ["mat-button", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "routerLink"], [1, "nav-links", 2, "color", "white"], ["fxLayout", "row", "fxLayoutGap", "16px"], ["style", "display: block;", 4, "ngFor", "ngForOf"], [2, "display", "block"], ["target", "_blank", 3, "href"], [1, "nav-circle", 3, "src"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-toolbar-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavbarComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NavbarComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavbarComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hS.getIsMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hS.getIsMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hS.getIsMobile() && ctx.baseURL != "/");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"]], styles: [".nav-circle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: auto;\n  width: 30px;\n  overflow: hidden;\n  display: flex;\n  min-width: 30px;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0px;\n  display: block;\n}\n\n.nav-circle[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFFSSxZQUFBO0FBREoiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1jaXJjbGVcbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDs7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXYtY2lyY2xlOmhvdmVyXG57XG4gICAgb3BhY2l0eTogMC44O1xufVxuIl19 */"] });


/***/ }),

/***/ "u5FN":
/*!**************************************************!*\
  !*** ./src/app/frontpage/frontpage.component.ts ***!
  \**************************************************/
/*! exports provided: FrontpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontpageComponent", function() { return FrontpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/services/helper.service */ "79G0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _frogger_frogger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frogger/frogger.component */ "CPGx");






const _c0 = function (a0) { return { "text-align": a0 }; };
class FrontpageComponent {
    constructor(hS, cd) {
        this.hS = hS;
        this.cd = cd;
        this.faviconImg = './assets/favicon.png';
        this.resume = './assets/Jimmy_ResumeS.pdf';
        this.mailTo = 'mailto:jseto@jimmyseto.com';
    }
    ngOnInit() {
    }
    downloadResume() {
        let link = document.createElement('a');
        link.href = this.resume;
        link.download = "JimmySeto_Resume.pdf";
        link.click();
        link.remove();
    }
}
FrontpageComponent.ɵfac = function FrontpageComponent_Factory(t) { return new (t || FrontpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FrontpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrontpageComponent, selectors: [["app-frontpage"]], decls: 29, vars: 9, consts: [["fxLayout.gt-sm", "row", "fxLayoutAlign.gt-sm", "center center", "fxLayout.lt-lg", "column", "fxLayoutAlign.lt-lg", "start start", "fxLayoutGap", "20px", 1, "ftop-container", 3, "ngClass"], ["fxShow", "true", "fxHide.lt-md", "", "fxFlex", "8"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "start start", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "center stretch", "fxLayoutGap", "20px", 2, "padding-left", "10px", "padding-right", "10px"], ["fxFlex", "", 3, "ngStyle"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "nav-circle", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "start start", "fxLayoutAlign.lt-md", "center center"], ["target", "_blank", 1, "frontpage-links", 3, "href"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxLayoutGap", "18px"], [1, "logos-signin"], ["href", "https://twitter.com/Jset0", "target", "_blank"], [2, "width", "100%", "height", "auto", 3, "src"], ["href", "https://github.com/JLSeto", "target", "_blank"], ["href", "https://www.linkedin.com/in/jimmy-seto/", "target", "_blank"], ["fxFlex", ""]], template: function FrontpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hi, I'm Jimmy. Welcome to my blog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I like programming, electronics, and learning new technologies. The main purpose of this site is to keep notes on stuff I studied, personal projects, and other open source tech stuff. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "jseto@jimmyseto.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-frogger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hS.getInnerWidth() > 959 ? "toptop" : "toptopPadd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.hS.getInnerHeight() > 959 ? "start" : "center"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.faviconImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.mailTo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/twitter.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/github.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "./assets/linkedin.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"], _frogger_frogger_component__WEBPACK_IMPORTED_MODULE_5__["FroggerComponent"]], styles: [".ftop-container[_ngcontent-%COMP%] {\n  font-size: 120%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", sans-serif;\n  color: #333333;\n  letter-spacing: 1px;\n}\n\n.extraPadding[_ngcontent-%COMP%] {\n  padding-top: 125px;\n  padding-bottom: 25px;\n}\n\n.toptop[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, white 50%, #F0F2F5 50%);\n  min-height: calc(100vh - 40px);\n  margin-bottom: 10px;\n  padding-top: 25px;\n}\n\n.toptopPadd[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n\n.toptop2[_ngcontent-%COMP%] {\n  min-height: calc(80vh - 40px);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 60px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 650;\n  line-height: 69.4px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 30px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 36.4px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 18px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 32.4px;\n}\n\n.frontpage-links[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #1e88e5;\n  text-decoration: none;\n}\n\n.frontpage-links[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.other-stuff[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  background: #D7CCC8;\n  width: 100%;\n}\n\n.nav-circle[_ngcontent-%COMP%] {\n  height: auto;\n  width: 300px;\n  overflow: hidden;\n  display: flex;\n  min-width: 30px;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0px;\n  display: block;\n}\n\n.logos-signin[_ngcontent-%COMP%] {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250cGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtSEFBQTtFQUNBLGNBQUE7RUFBZ0IsbUJBQUE7QUFFcEI7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQ0U7RUFDRSw2REFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNFO0VBQ0UsaUJBQUE7QUFFSjs7QUFDRTtFQUVFLDZCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyQkFBQTtFQUE2QixlQUFBO0VBQWlCLGtCQUFBO0VBQW1CLG9CQUFBO0VBQXNCLGdCQUFBO0VBQWtCLG1CQUFBO0FBTTdHOztBQUhFO0VBQ0UsMkJBQUE7RUFBNkIsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixtQkFBQTtBQVc5Rzs7QUFSRTtFQUNFLDJCQUFBO0VBQTZCLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0Isb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0IsbUJBQUE7QUFnQjlHOztBQWJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQWdCSjs7QUFiRTtFQUNFLDBCQUFBO0FBZ0JKOztBQWRFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBaUJKOztBQWRFO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWdCSjs7QUFiQTtFQUNJLFdBQUE7QUFnQkoiLCJmaWxlIjoiZnJvbnRwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ0b3AtY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDEyMCU7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgVWJ1bnR1LCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMzMzMzM7IGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuZXh0cmFQYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMTI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIH1cblxuICAudG9wdG9wIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlIDUwJSwgI0YwRjJGNSA1MCUpO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICB9XG5cbiAgLnRvcHRvcFBhZGQge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICB9XG5cbiAgLnRvcHRvcDIge1xuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzkzYTNhIDUwJSwgd2hpdGUgNTAlKTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDgwdmggLSA0MHB4KTtcbiAgfVxuXG4gIGgxe1xuICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDYwcHg7IGZvbnQtc3R5bGU6bm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDY1MDsgbGluZS1oZWlnaHQ6IDY5LjRweDtcbiAgfVxuXG4gIGgye1xuICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDMwcHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA1MDA7IGxpbmUtaGVpZ2h0OiAzNi40cHg7XG4gIH1cblxuICBoM3tcbiAgICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIjsgZm9udC1zaXplOiAxOHB4OyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogNDAwOyBsaW5lLWhlaWdodDogMzIuNHB4O1xuICB9XG5cbiAgLmZyb250cGFnZS1saW5rc3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMxZTg4ZTU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmZyb250cGFnZS1saW5rczpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAub3RoZXItc3R1ZmZ7XG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgXG4gICAgYmFja2dyb3VuZDogI0Q3Q0NDODsgXG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubmF2LWNpcmNsZVxue1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogMzBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHB4OztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiAgXG4ubG9nb3Mtc2lnbmlue1xuICAgIHdpZHRoOiA0MHB4O1xuICB9Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _frogger_frogger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frogger/frogger.component */ "CPGx");
/* harmony import */ var _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontpage/frontpage.component */ "u5FN");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _frontpage_frontpage_component__WEBPACK_IMPORTED_MODULE_2__["FrontpageComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: 'projects/:title', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: 'test', component: _frogger_frogger_component__WEBPACK_IMPORTED_MODULE_1__["FroggerComponent"] }
    //{ path: '**',                                     component: PageNotFoundComponent,           canActivate: [NeutralGuard]   }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/services/helper.service */ "79G0");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _frogger_frogger_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../frogger/frogger.component */ "CPGx");
/* harmony import */ var _iframe_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./iframe-view */ "KHKH");
/* harmony import */ var _helpers_pipes_displayDate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/pipes/displayDate.pipe */ "H9mi");














function ProjectsComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_div_3_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const fb_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.setFilter(fb_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fb_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r5.selectedFB == fb_r7 ? "#ffffff" : "#ff4081")("background-color", ctx_r5.selectedFB == fb_r7 ? "#ff4081" : "#ffffff");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", fb_r7, " ");
} }
function ProjectsComponent_div_3_div_3_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_div_3_div_3_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const obj_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.hS.routerNavigateProject(obj_r10.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "displayDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", obj_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, obj_r10.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", obj_r10.subtitle, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r10.description);
} }
function ProjectsComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectsComponent_div_3_div_3_mat_card_1_Template, 14, 7, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.checkFilter(obj_r10));
} }
function ProjectsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProjectsComponent_div_3_div_2_Template, 3, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectsComponent_div_3_div_3_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.filterButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.arrProjects);
} }
function ProjectsComponent_div_5_div_1_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", detail_r20.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProjectsComponent_div_5_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProjectsComponent_div_5_div_1_div_3_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](detail_r20.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", detail_r20.notes, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", detail_r20.img);
} }
function ProjectsComponent_div_5_div_1_app_frogger_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-frogger", 29);
} }
function ProjectsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectsComponent_div_5_div_1_div_3_Template, 8, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProjectsComponent_div_5_div_1_app_frogger_9_Template, 1, 0, "app-frogger", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", obj_r16.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r16 == null ? null : obj_r16.demo == null ? null : obj_r16.demo.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", obj_r16.demo == null ? null : obj_r16.demo.notes, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", obj_r16.link == "frogger" && !ctx_r17.hS.getIsMobile());
} }
function ProjectsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectsComponent_div_5_div_1_Template, 10, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.checkCurrentURL(obj_r16));
} }
function ProjectsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-iframesrc", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iframeSrc", ctx_r2.iframeSrc);
} }
function ProjectsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "View Source Code on GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r3.gitSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProjectsComponent_div_9_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hw_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hw_r31);
} }
function ProjectsComponent_div_9_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Hardware");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProjectsComponent_div_9_div_1_div_1_div_4_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", obj_r25.hardware);
} }
function ProjectsComponent_div_9_div_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sw_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sw_r34);
} }
function ProjectsComponent_div_9_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Software");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProjectsComponent_div_9_div_1_div_2_div_4_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", obj_r25.software);
} }
function ProjectsComponent_div_9_div_1_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rf_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", rf_r37.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](rf_r37.title);
} }
function ProjectsComponent_div_9_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "References");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProjectsComponent_div_9_div_1_div_3_div_4_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", obj_r25.references);
} }
function ProjectsComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectsComponent_div_9_div_1_div_1_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProjectsComponent_div_9_div_1_div_2_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectsComponent_div_9_div_1_div_3_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", obj_r25.hardware.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", obj_r25.software.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", obj_r25.references.length > 0);
} }
function ProjectsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProjectsComponent_div_9_div_1_Template, 4, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r25 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.checkCurrentURL(obj_r25));
} }
class ProjectsComponent {
    constructor(hS, route, router, cfr, dom) {
        this.hS = hS;
        this.route = route;
        this.router = router;
        this.cfr = cfr;
        this.dom = dom;
        this.filterButtons = ['All', 'Hardware', 'Web Components'];
        this.selectedFB = this.filterButtons[0];
        this.currentURL = '';
        this._routerSub = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY; //Check when the navigation ends, and then get profile info to prevent multiple requests
        this.currentRoute = this.route.snapshot.paramMap.get('id');
        this.arrProjects =
            [
                {
                    type: ["Web Components"],
                    image: "./assets/frogger/froggerScreen.png",
                    title: "Frogger",
                    date: new Date("August 08, 2021"),
                    subtitle: "TypeScript, JavaScript, HTML, CSS",
                    description: "A Frogger game from Udacity's Nanodegree Web Development. The project was initially in JavaScript but ported over to TypeScript!",
                    link: "frogger",
                    details: [
                        {
                            heading: 'Overview',
                            notes: `This frogger game is based off of Udacity's frontend nanodegree arcade game.
                                                        The project was initially completed in JavaScript but was ported over to 
                                                        TypeScript and integrated with this website in Angular. The objective of the game is to 
                                                        reach the key without getting hit by
                                                        the moving bugs.  If you get hit by a bug, you will start back in your initial position.  If you
                                                        reach the key, the level will be regenerated but now with more bugs!`,
                        },
                        {
                            heading: 'How it Works',
                            notes: `The game consists of three layers: the engine, the resources, and the application.
                                                        The engine works by drawing the entire game screen over and over again.  
                                                        The resources is an image loading utility which eases the process of loading images
                                                        to be used within the game.  The app layer consists of the player, the enemies, and the key. 
                                                        It initializes the location of our objects on the game field and handles the event listeners
                                                        like when we press a key.`
                        }
                    ],
                    demo: {
                        heading: 'Demo',
                        video: '',
                        git: ''
                    },
                    hardware: [],
                    software: [
                        'TypeScript',
                        'JavaScript',
                        'Html',
                        'CSS'
                    ],
                    references: [
                        { link: 'https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true', title: 'Project Guide' },
                        { link: 'https://review.udacity.com/#!/projects/2696458597/rubric', title: 'Rubric' }
                    ],
                },
                {
                    type: ["Hardware"],
                    image: "./assets/microController/arduino101/arduino101.jpg",
                    title: "IoT MEAN App (RESTful API server and Arduino101)",
                    date: new Date("December 12, 2017"),
                    subtitle: "Bluetooth Low Energy, Arduino, Sensor Collection",
                    description: "An IoT web application built using restful API that displays data collected from Arduino 101",
                    link: "IoT-Arduino101",
                    details: [
                        {
                            heading: 'Overview',
                            notes: `The Arduino101 is a microcontroller board that is based off of the Intel Curie Module which includes 
                                            the Intel Quark Microcontroller C1000. This board comes with a 6-axis accelerometer/gyrometer and also 
                                            has built in Bluetooth low Energy (BLE). For this project, the Arduino101 is set up to collect acceleration 
                                            and gyrometer data, and then advertise the data over BLE. A client device is setup to connect to the Arduino101 
                                            via bluetooth, read the advertised data, and then send that data over wifi to a server. 
                                            The server stores the received data in a database and also forwards it to a webpage where 
                                            the data is graphed and displayed for the user. From the webpage, a user can also control 
                                            the Arduino101’s sampling frequency. With a click of a button, the user can send a new sampling time all 
                                            the way back to the Arduino101. The change is instantaneous and can be visually seen on the webpage. 
                                            The below diagram illustrates a general overview of this project.`,
                            img: './assets/microController/arduino101/arduino101_diagram_db.png'
                        },
                        {
                            heading: 'How it Works',
                            notes: `<div class="h3-deep">Arduino101</div>
                                            Standard Arduino code along with the “CurieBLE” and “CurieIMU” libraries were used to write the code for 
                                            the Arduino101 board. The board is set up as a peripheral with one service that contains seven characteristics. 
                                            One characteristic is the sampling frequency (ts) which the user can write values to, and the other six are the 
                                            acceleration/gyrometer values (ax, ay, az, gx, gy, gz). These service and characteristics are each assigned a UUID 
                                            which is used by the client device to connect, subscribe, read, write, or receive notifications for a particular characteristic.
                                            <div class="h3-deep">Client Device</div>
                                            On my client device, Node.js along with Noble is used to search and connect to the Arduino101 over BLE. 
                                            Once the client device finds the Arduino101, it looks under the assigned Service UUID for each Characteristic UUID. 
                                            Notifications are then turned on for each characteristic, and Socket.io is used to forward the sampling frequency and 
                                            accelerometer/gyrometer data to my server. One interesting point to note here is the use of Socket.io over WebSockets. 
                                            The main reason why Socket.io is used over Websockets in this project is because of multiplexing. Socket.io’s API makes 
                                            it quite easy to send multiple signals over one channel while doing this with Websockets is a little more complex.
                                            <div class="h3-deep">Server / Webpage</div>
                                            Node.js along with Express is used to set up my server and MongoDB is used as my database. Socket.io once again forwards 
                                            the data from my server to my webpage, where the raw data values are displayed and graphed for the user. From the webpage, 
                                            the user can also choose to change the sampling frequency of the Arduino101. These effects take place nearly instantaneously 
                                            thanks to Socket.io and Noble. The user can also see this change visually on the webpage where the rate of the incoming data 
                                            will either speed up or slow down based on the new sampling time chosen. The webpage was created using frameworks such as Bootstrap 
                                            and Angularjs. Google Charts is used to graph the acceleration values in real time. The project is available on github and a demo 
                                            is available on youtube.`
                        }
                    ],
                    demo: {
                        heading: 'Demo',
                        video: 'https://www.youtube.com/embed/x961tXPIoRY',
                        git: 'https://github.com/JLSeto/Arduino101'
                    },
                    hardware: ['Arduino101', 'Laptop (Ubuntu OS)', 'Intel Edison or Raspberry Pie'],
                    software: [
                        'Node.js',
                        'Socket.io',
                        'Noble',
                        'Express',
                        'Angularjs',
                        'BootStrap',
                        'Google Charts',
                        'HTML',
                        'CSS',
                        'JavaScript'
                    ],
                    references: [
                        { link: 'https://www.arduino.cc/en/Reference/CurieBLE', title: 'CurieBLE' },
                        { link: 'https://www.rabbitmq.com/blog/2012/02/23/how-to-compose-apps-using-websockets/', title: 'Multiplexing using Websockets' },
                        { link: 'https://www.npmjs.com/package/node-red-contrib-scx-ibmiotapp', title: 'Google Charts' },
                    ],
                },
                {
                    type: ["Hardware"],
                    image: "./assets/microController/cc2650/cc2650.jpg",
                    title: "IoT-CC2650",
                    date: new Date("December 5, 2017"),
                    subtitle: "IoT with Texas Instrument CC2650 SensorTag",
                    description: "An IoT web application built using restful API that displays data collected from Texas Instrument CC2650 SensorTag",
                    link: "IoT-CC2650",
                    details: [
                        {
                            heading: 'Overview',
                            notes: `Texas Instrument’s CC2650 SensorTag is a sensor that captures real world data such as acceleration and 
                                                        temperature and allows for quick IoT programming. The SensorTag is easily configured to connect over bluetooth 
                                                        to your phone via a downloadable TI SensorTag App. The app displays the captured data freely to the user, and also 
                                                        allows you to forward that data to IBM’s Quick start server via wifi with a switch of a button. IBM’s platform can 
                                                        then be used to analyze the data as well as write and host our IoT application. However, in this project, Node-Red and 
                                                        Websockets are used to pull the data from IBM’s website and display it in our own website. 
                                                        The below digram shows and an overall view of this demo and the part this project is focused on.`,
                            img: "./assets/microController/cc2650/cc2650_diagram.png"
                        },
                        {
                            heading: 'How it Works',
                            notes: `Node.js is used as my server and integrates Node-Red - a programming tool 
                                                        with a graphical interface that allows you to just connect programming objects like a 
                                                        flow diagram. To retrieve data from IBM’s platform in Node-red, I mainly use then ibmiotapp module, 
                                                        and then connect that to my websocket module which sends the data to my server. The server 
                                                        then forwards that data via websockets to my website where the raw values are displayed using some simple 
                                                        javascript, css, and html. Google Charts is also used in my website to graph the x, y, and z acceleration data 
                                                        in real time. This project is available on github and a demo is available on youtube.`,
                            img: "./assets/microController/cc2650/middleware.png"
                        },
                    ],
                    demo: {
                        heading: 'Demo',
                        video: 'https://www.youtube.com/embed/2XyzMGU4GSo',
                        git: 'https://github.com/JLSeto/CC2650'
                    },
                    hardware: ['Texas Instruments CC2650 SensorTag', 'SmartPhone with “TI SensorTag” Application', 'Laptop running Linux (Ubuntu OS)'],
                    software: ['Node.js', 'Node-Red', 'BootStrap', 'HTML', 'CSS', 'JavaScript'],
                    references: [
                        { link: 'http://www.ti.com/tool/CC2650STK', title: 'Texas Instrument’s CC2650 SensorTag' },
                        { link: 'https://nodered.org/', title: 'Node-Red' },
                        { link: 'https://github.com/websockets/ws', title: 'WebSockets' },
                        { link: 'https://www.npmjs.com/package/node-red-contrib-scx-ibmiotapp', title: 'ibmiotapp' },
                        { link: 'https://www.npmjs.com/package/node-red-contrib-scx-ibmiotapp', title: 'Google Charts' },
                    ],
                }
            ];
        this._routerSub = router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.setiFrame(val.url);
                this.reInitialize(val.url);
            }
        });
    }
    ngOnInit() {
    }
    reInitialize(url) {
        url = url.split("/")[2];
        this.currentURL = url;
    }
    checkCurrentURL(obj) {
        return (obj.link == this.currentURL) ? true : false;
    }
    setiFrame(url) {
        var _a, _b;
        url = url.split("/")[2];
        for (let obj of this.arrProjects) {
            if (obj.link == url) {
                let isValid = (obj.link == url) ? true : false;
                if (isValid) {
                    this.gitSrc = (_a = obj.demo) === null || _a === void 0 ? void 0 : _a.git;
                    this.iframeSrc = (_b = obj.demo) === null || _b === void 0 ? void 0 : _b.video;
                }
            }
        }
    }
    checkFilter(obj) {
        return ((this.selectedFB == 'All') || (obj.type.includes(this.selectedFB))) ? true : false;
    }
    setFilter(str) {
        this.selectedFB = str;
    }
    ngOnDestroy() {
        if (!!this._routerSub) {
            this._routerSub.unsubscribe();
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_helpers_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 11, vars: 6, consts: [["fxLayout.gt-sm", "row", "fxLayoutAlign.gt-sm", "start start", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "start start", 1, "ftop-container", 3, "ngClass"], ["fxShow", "true", "fxHide.lt-lg", "", "fxFlex", "4"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "start start", "fxLayout.lt-md", "column", "fxLayoutAlign.lt-md", "start stretch", "fxLayoutGap", "30px", 2, "padding-left", "10px", "padding-right", "10px"], ["fxFlex", "", 4, "ngIf"], ["fxFlex", ""], [4, "ngFor", "ngForOf"], [2, "text-align", "center", "margin-bottom", "8px"], ["style", "margin-bottom: 4px", 4, "ngIf"], ["style", "text-align: right;", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "start stretch", "fxLayoutGap", "4px"], ["style", "margin-bottom: 8px;", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "projects-button-pink", 3, "click"], [2, "margin-bottom", "8px"], ["class", "mat-elevation-z0 projects-card", "style", "border: 0.5px solid #d5d5d5;", 3, "click", 4, "ngIf"], [1, "mat-elevation-z0", "projects-card", 2, "border", "0.5px solid #d5d5d5", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "fxLayoutGap", "5px", "fxLayout.lt-sm", "column", "fxLayoutAlign.lt-sm", "stretch center"], [2, "display", "block", "max-width", "250px", "min-width", "50px"], [1, "projects-img", 3, "src"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "start start", 2, "padding-left", "4px"], [1, "projects-title"], [1, "projects-subtitle"], [1, "projects-description"], [4, "ngIf"], [2, "text-align", "center"], [2, "margin-bottom", "12px", "line-height", "1.6", 3, "innerHTML"], [2, "display", "block", "max-width", "800px", "min-width", "50px"], ["class", "projects-img", 4, "ngIf"], ["fxLayout", "row", 2, "margin-bottom", "12px"], ["style", "display: block; max-width: 800px; min-width: 50px;", 4, "ngIf"], [1, "projects-img"], [2, "margin-bottom", "4px"], [3, "iframeSrc"], [2, "text-align", "right"], ["mat-stroked-button", "", 2, "border-radius", "50px", "background-color", "white", "margin-bottom", "8px"], ["target", "_blank", 2, "color", "#1e88e5", "text-decoration", "none", 3, "href"], ["fxLayout", "row wrap", "fxLayoutGap", "4px", 2, "margin-bottom", "12px"], ["mat-stroked-button", "", 1, "projects-button-no-link"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectsComponent_div_3_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProjectsComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProjectsComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProjectsComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.hS.getInnerWidth() > 959 ? "toptop" : "toptopPadd");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hS.getIsMobile() || ctx.hS.getIsMobile() && !ctx.currentURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrProjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.iframeSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.gitSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrProjects);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _frogger_frogger_component__WEBPACK_IMPORTED_MODULE_10__["FroggerComponent"], _iframe_view__WEBPACK_IMPORTED_MODULE_11__["iFrameView"]], pipes: [_helpers_pipes_displayDate_pipe__WEBPACK_IMPORTED_MODULE_12__["DisplayDatePipe"]], styles: [".ftop-container[_ngcontent-%COMP%] {\n  font-size: 120%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", sans-serif;\n  color: #333333;\n  letter-spacing: 1px;\n}\n\n.extraPadding[_ngcontent-%COMP%] {\n  padding-top: 125px;\n  padding-bottom: 25px;\n}\n\n.toptop[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, white 50%, #ECEFF1 0%);\n  min-height: calc(100vh - 40px);\n  margin-bottom: 10px;\n  padding-top: 25px;\n}\n\n.toptopPadd[_ngcontent-%COMP%] {\n  padding-top: 25px;\n}\n\n.toptop2[_ngcontent-%COMP%] {\n  min-height: calc(80vh - 40px);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 24px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 550;\n  line-height: 69.4px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 20px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 36.4px;\n}\n\n[_nghost-%COMP%]     .h3-deep {\n  font-family: \"Varela Round\";\n  font-size: 16px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 600;\n  margin-top: 12px;\n  margin-bottom: 4px;\n}\n\n.projects-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.projects-card[_ngcontent-%COMP%]:hover {\n  background-color: #e8f0ff;\n}\n\n.projects-title[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 16.5px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 28.4px;\n}\n\n.projects-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 14px;\n  font-style: italic;\n  font-variant: normal;\n  font-weight: 400;\n  color: #646464;\n}\n\n.projects-description[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\";\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n}\n\n.frontpage-links[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #1e88e5;\n  text-decoration: none;\n}\n\n.frontpage-links[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.other-stuff[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 10px;\n  background: #D7CCC8;\n  width: 100%;\n}\n\n.nav-circle[_ngcontent-%COMP%] {\n  height: auto;\n  width: 300px;\n  overflow: hidden;\n  display: flex;\n  min-width: 30px;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0px;\n  display: block;\n}\n\n.logos-signin[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.projects-img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  height: auto;\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 0px;\n  display: block;\n}\n\n.videoWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  \n  padding-top: 25px;\n  height: 0;\n  width: 100%;\n  height: 100%;\n  border: 0.5px solid #d5d5d5;\n}\n\n.videoWrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.projects-button-no-link[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  color: #505050;\n  background-color: white;\n  cursor: default;\n  pointer-events: none;\n  margin-bottom: 8px;\n  text-overflow: ellipsis;\n}\n\n.projects-button-pink[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  color: #ff4048;\n  background-color: white;\n  margin-bottom: 8px;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG1IQUFBO0VBQ0EsY0FBQTtFQUFnQixtQkFBQTtBQUVwQjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDRTtFQUNFLDREQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0U7RUFDRSxpQkFBQTtBQUVKOztBQUNFO0VBRUUsNkJBQUE7QUFDSjs7QUFFRTtFQUNFLDJCQUFBO0VBQTZCLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0Isb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0IsbUJBQUE7QUFNOUc7O0FBSEU7RUFDRSwyQkFBQTtFQUE2QixlQUFBO0VBQWlCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGdCQUFBO0VBQWtCLG1CQUFBO0FBVzlHOztBQVJFO0VBQ0UsMkJBQUE7RUFBNkIsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixrQkFBQTtBQWlCaEk7O0FBZEk7RUFDSSxlQUFBO0FBaUJSOztBQWRJO0VBQ0kseUJBQUE7QUFpQlI7O0FBZEk7RUFDSSwyQkFBQTtFQUE2QixpQkFBQTtFQUFtQixrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixtQkFBQTtBQXNCcEg7O0FBbkJJO0VBQ0ksMkJBQUE7RUFBNkIsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixjQUFBO0FBMkJsSDs7QUF4Qkk7RUFDSSwyQkFBQTtFQUE2QixlQUFBO0VBQWlCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGdCQUFBO0FBK0JoRzs7QUEzQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBOEJKOztBQTNCRTtFQUNFLDBCQUFBO0FBOEJKOztBQTVCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQStCSjs7QUE1QkU7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBOEJKOztBQTNCQTtFQUNJLFdBQUE7QUE4Qko7O0FBMUJFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUE2Qko7O0FBMUJFO0VBQ0Qsa0JBQUE7RUFDQSxzQkFBQTtFQUF3QixTQUFBO0VBQ3hCLGlCQUFBO0VBQ0csU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUE4Qko7O0FBM0JBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBOEJEOztBQTNCQTtFQUNJLG1CQUFBO0VBQXFCLGNBQUE7RUFDckIsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBK0JKOztBQTVCQTtFQUNJLG1CQUFBO0VBQXFCLGNBQUE7RUFDckIsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBZ0NKIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ0b3AtY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDEyMCU7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgVWJ1bnR1LCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMzMzMzM7IGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuZXh0cmFQYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMTI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIH1cblxuICAudG9wdG9wIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlIDUwJSwgI0VDRUZGMSAwJSk7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gIH1cblxuICAudG9wdG9wUGFkZCB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gIH1cblxuICAudG9wdG9wMiB7XG4gICAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzOTNhM2EgNTAlLCB3aGl0ZSA1MCUpO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoODB2aCAtIDQwcHgpO1xuICB9XG5cbiAgaDF7XG4gICAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDU1MDsgbGluZS1oZWlnaHQ6IDY5LjRweDtcbiAgfVxuXG4gIGgye1xuICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDIwcHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA1MDA7IGxpbmUtaGVpZ2h0OiAzNi40cHg7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLmgzLWRlZXB7XG4gICAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCI7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luLXRvcDogMTJweDsgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG5cbiAgICAucHJvamVjdHMtY2FyZHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5wcm9qZWN0cy1jYXJkOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMGZmO1xuICAgIH1cbiAgICBcbiAgICAucHJvamVjdHMtdGl0bGV7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDE2LjVweDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDUwMDsgbGluZS1oZWlnaHQ6IDI4LjRweDtcbiAgICB9XG5cbiAgICAucHJvamVjdHMtc3VidGl0bGV7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDE0cHg7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA0MDA7IGNvbG9yOiAjNjQ2NDY0OyBcbiAgICB9XG5cbiAgICAucHJvamVjdHMtZGVzY3JpcHRpb257XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiOyBmb250LXNpemU6IDE0cHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgXG4gIC5mcm9udHBhZ2UtbGlua3N7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMWU4OGU1O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5mcm9udHBhZ2UtbGlua3M6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLm90aGVyLXN0dWZme1xuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxuICAgIGJhY2tncm91bmQ6ICNEN0NDQzg7IFxuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm5hdi1jaXJjbGVcbntcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDs7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4gIFxuLmxvZ29zLXNpZ25pbntcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuXG5cbiAgLnByb2plY3RzLWltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHB4OztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC52aWRlb1dyYXBwZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cblx0cGFkZGluZy10b3A6IDI1cHg7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNkNWQ1ZDU7XG59XG5cbi52aWRlb1dyYXBwZXIgaWZyYW1lIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9qZWN0cy1idXR0b24tbm8tbGlua3tcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4OyBjb2xvcjogIzUwNTA1MDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIGN1cnNvcjogZGVmYXVsdDsgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnByb2plY3RzLWJ1dHRvbi1waW5re1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7IGNvbG9yOiAjZmY0MDQ4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map