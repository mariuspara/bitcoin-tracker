webpackJsonp([0],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinPageModule", function() { return BitcoinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bitcoin__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bitcoin_bitcoin__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BitcoinPageModule = /** @class */ (function () {
    function BitcoinPageModule() {
    }
    BitcoinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bitcoin__["a" /* BitcoinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bitcoin__["a" /* BitcoinPage */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_bitcoin_bitcoin__["a" /* BitcoinProvider */]
            ],
        })
    ], BitcoinPageModule);
    return BitcoinPageModule;
}());

//# sourceMappingURL=bitcoin.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_bitcoin_bitcoin__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BitcoinPage = /** @class */ (function () {
    function BitcoinPage(bitcoinProvider) {
        this.bitcoinProvider = bitcoinProvider;
        this.currency = 'GBP';
    }
    BitcoinPage.prototype.ionViewWillLoad = function () {
        this.getBitcoinPrice();
    };
    BitcoinPage.prototype.getBitcoinPrice = function () {
        this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice(this.currency);
    };
    BitcoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bitcoin',template:/*ion-inline-start:"/Users/mariusparaschiv/Desktop/lucru/ionic/bitcoin-tracker/src/pages/bitcoin/bitcoin.html"*/'\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row justify-content-center margin-bottom >\n        <ion-img src="assets/imgs/bitcoin.svg.png" alt=""></ion-img>\n    </ion-row>\n    <ion-row>\n      <div *ngIf="bitcoin$ | async as bc; else loading" text-center>\n        <h1>BTC: {{bc.ask | currency: currency + " "}}</h1>\n        <p>The Average price last week was: {{bc.averages.week | currency: currency + " "}}</p>\n      </div>  \n\n      <ng-template #loading>\n        <h1>Loading..</h1>\n      </ng-template>\n    </ion-row>\n    <ion-row justify-content-center>\n        <button ion-button icon-only round outline (click)="getBitcoinPrice()">\n            <ion-icon name="refresh" ></ion-icon>\n        </button>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-item>\n    <ion-label>Select currency</ion-label>\n    <ion-select [(ngModel)]="currency" (ionChange)="getBitcoinPrice()">\n      <ion-option value="GBP">GBP</ion-option>\n      <ion-option value="USD">USD</ion-option>\n      <ion-option value="AUD">AUD</ion-option>\n      <ion-option value="EUR">EUR</ion-option>\n      <ion-option value="INR">INR</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-footer>\n'/*ion-inline-end:"/Users/mariusparaschiv/Desktop/lucru/ionic/bitcoin-tracker/src/pages/bitcoin/bitcoin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_bitcoin_bitcoin__["a" /* BitcoinProvider */]])
    ], BitcoinPage);
    return BitcoinPage;
}());

//# sourceMappingURL=bitcoin.js.map

/***/ })

});
//# sourceMappingURL=0.js.map