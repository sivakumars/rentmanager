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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tenants/tenants.component */ "./src/app/components/tenants/tenants.component.ts");
/* harmony import */ var _components_tenant_details_tenant_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tenant-details/tenant-details.component */ "./src/app/components/tenant-details/tenant-details.component.ts");
/* harmony import */ var _components_add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-tenant/add-tenant.component */ "./src/app/components/add-tenant/add-tenant.component.ts");
/* harmony import */ var _components_edit_tenant_edit_tenant_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit-tenant/edit-tenant.component */ "./src/app/components/edit-tenant/edit-tenant.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_tenant_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/tenant.service */ "./src/app/services/tenant.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");









//Angularfire imports


//components











//service





var appRoutes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"] },
    { path: 'addtenant', component: _components_add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_15__["AddTenantComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]] },
    { path: 'tenant/:id', component: _components_tenant_details_tenant_details_component__WEBPACK_IMPORTED_MODULE_14__["TenantDetailsComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]] },
    { path: 'edittenant/:id', component: _components_edit_tenant_edit_tenant_component__WEBPACK_IMPORTED_MODULE_16__["EditTenantComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"] }
];
var firebaseConfig = {
    apiKey: "AIzaSyDuw24tUP3tS6SEKxkXvXu_9OVYT_-LSVY",
    authDomain: "rentmanager-26472.firebaseapp.com",
    databaseURL: "https://rentmanager-26472.firebaseio.com",
    storageBucket: "rentmanager-26472.appspot.com",
    messagingSenderId: "9757566081"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_tenants_tenants_component__WEBPACK_IMPORTED_MODULE_13__["TenantsComponent"],
                _components_tenant_details_tenant_details_component__WEBPACK_IMPORTED_MODULE_14__["TenantDetailsComponent"],
                _components_add_tenant_add_tenant_component__WEBPACK_IMPORTED_MODULE_15__["AddTenantComponent"],
                _components_edit_tenant_edit_tenant_component__WEBPACK_IMPORTED_MODULE_16__["EditTenantComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["SidebarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"]
            ],
            providers: [
                _services_tenant_service__WEBPACK_IMPORTED_MODULE_22__["TenantService"],
                _core_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"],
                _services_settings_service__WEBPACK_IMPORTED_MODULE_26__["SettingsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-tenant/add-tenant.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-tenant/add-tenant.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-1em{\r\n    padding: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdGVuYW50L2FkZC10ZW5hbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC10ZW5hbnQvYWRkLXRlbmFudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctMWVte1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-tenant/add-tenant.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-tenant/add-tenant.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a [routerLink]=\"['/']\" href=\"\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\">Back to Dashboard</i>\n    </a>\n  </div>\n  <div class=\"col-md-6\">\n\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <b>Add Tenant</b>\n  </div>\n  <div class=\"card-block\">\n    <form #addTenantForm=\"ngForm\" class=\"padding-1em needs-validation\" autocomplete=\"off\" (ngSubmit)=\"submitForm(addTenantForm)\">\n      <!-- First Name -->      \n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"tenant.firstName\" \n               #tenantFirstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': tenantFirstName.touched && tenantFirstName.invalid }\" \n               required minlength=\"5\"/>\n        <div *ngIf=\"tenantFirstName.touched && tenantFirstName.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"tenantFirstName.errors.required\">First Name is required</div>\n            <div *ngIf=\"tenantFirstName.errors.minlength\">minimum length of 5 characters</div>\n        </div>\n      </div>\n      <!-- Last Name -->\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"tenant.lastName\" \n               #tenantLastName=\"ngModel\" [ngClass]=\"{ 'is-invalid': tenantLastName.touched && tenantLastName.invalid }\" \n               required minlength=\"5\"/>\n        <div *ngIf=\"tenantLastName.touched && tenantLastName.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"tenantLastName.errors.required\">Last Name is required</div>\n            <div *ngIf=\"tenantLastName.errors.minlength\">minimum length of 5 characters</div>\n        </div>\n      </div>\n      <!-- Email -->\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"tenant.email\" #tenantEmail=\"ngModel\" \n               [ngClass]=\"{ 'is-invalid': tenantEmail.touched && tenantEmail.invalid }\" required email />\n        <div *ngIf=\"tenantEmail.touched && tenantEmail.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"tenantEmail.errors.required\">Email is required</div>\n            <div *ngIf=\"tenantEmail.errors.email\">Email must be a valid email address</div>\n        </div>\n    </div>\n      <!-- Phone -->\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input type=\"tel\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"tenant.phone\" #tenantPhone=\"ngModel\" \n               [ngClass]=\"{ 'is-invalid': tenantPhone.touched && tenantPhone.invalid }\" required phone />\n        <div *ngIf=\"tenantPhone.touched && tenantPhone.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"tenantPhone.errors.required\">Phone number is required</div>\n        </div>\n    </div>\n      <!-- Balance -->\n      <div class=\"form-group\">\n        <label for=\"balance\">Balance</label>\n        <input type=\"tel\" class=\"form-control\" name=\"balance\" [(ngModel)]=\"tenant.balance\" #tenantBalance=\"ngModel\" \n               [ngClass]=\"{ 'is-invalid': tenantBalance.touched && tenantBalance.invalid }\" required [disabled]=\"disableBalanceOnAdd\" />\n        <div *ngIf=\"tenantBalance.touched && tenantBalance.invalid\" class=\"invalid-feedback\">\n            <div *ngIf=\"tenantBalance.errors.required\">Phone number is required</div>\n        </div>\n    </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"!addTenantForm.valid\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-tenant/add-tenant.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-tenant/add-tenant.component.ts ***!
  \***************************************************************/
/*! exports provided: AddTenantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTenantComponent", function() { return AddTenantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tenant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tenant.service */ "./src/app/services/tenant.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var AddTenantComponent = /** @class */ (function () {
    function AddTenantComponent(router, tenantService, _flashMessagesService, settingsService) {
        this.router = router;
        this.tenantService = tenantService;
        this._flashMessagesService = _flashMessagesService;
        this.settingsService = settingsService;
        this.tenant = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            balance: 0
        };
        this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
    }
    AddTenantComponent.prototype.ngOnInit = function () {
    };
    AddTenantComponent.prototype.submitForm = function (addTenantFormData) {
        var _this = this;
        console.log("*****In submit Handler***** " + Object.keys(addTenantFormData.form));
        var flashMessagesService = this._flashMessagesService;
        if (addTenantFormData.form.valid) {
            var tenantData = Object.assign({}, addTenantFormData.form.value);
            tenantData.balance = tenantData.balance ? tenantData : 0;
            this.tenantService.addTenant(tenantData).then(function (reponse) {
                flashMessagesService.show('Tenant Details added successfully', { cssClass: 'alert-success', timeout: 4000 });
                _this.router.navigate(['/']);
            }, function (error) {
                flashMessagesService.show(error.message, { cssClass: 'alert-danger', timeout: 4000 });
                _this.router.navigate(['/addtenant']);
            });
        }
        else {
            console.log("****In submit Handler****** " + addTenantFormData.form.valid);
        }
    };
    AddTenantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-tenant',
            template: __webpack_require__(/*! ./add-tenant.component.html */ "./src/app/components/add-tenant/add-tenant.component.html"),
            styles: [__webpack_require__(/*! ./add-tenant.component.css */ "./src/app/components/add-tenant/add-tenant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_tenant_service__WEBPACK_IMPORTED_MODULE_3__["TenantService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], AddTenantComponent);
    return AddTenantComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10\">\n        <app-tenants></app-tenants>\n    </div>\n    <div class=\"col-md-2\">\n        <app-sidebar></app-sidebar>\n    </div>           \n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-tenant/edit-tenant.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-tenant/edit-tenant.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC10ZW5hbnQvZWRpdC10ZW5hbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/edit-tenant/edit-tenant.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-tenant/edit-tenant.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a [routerLink]=\"['/tenant/', tenantId]\" href=\"\" class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\">Back to Tenant Details</i>\n      </a>\n    </div>\n    <div class=\"col-md-6\">\n  \n    </div>\n  </div>\n  \n  <div class=\"card\">\n    <div class=\"card-header\">\n      <b>Add Tenant</b>\n    </div>\n    <div class=\"card-block\">\n      <div class=\"container\">\n          <form #editTenantForm=\"ngForm\" class=\"padding-1em needs-validation\" autocomplete=\"off\" (ngSubmit)=\"submitForm(editTenantForm)\">\n              <!-- First Name -->      \n              <div class=\"form-group\">\n                <label for=\"firstName\">First Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"tenant.firstName\" \n                       #tenantFirstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': tenantFirstName.touched && tenantFirstName.invalid }\" \n                       required minlength=\"5\"/>\n                <div *ngIf=\"tenantFirstName.touched && tenantFirstName.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"tenantFirstName.errors.required\">First Name is required</div>\n                    <div *ngIf=\"tenantFirstName.errors.minlength\">minimum length of 5 characters</div>\n                </div>\n              </div>\n              <!-- Last Name -->\n              <div class=\"form-group\">\n                <label for=\"lastName\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"tenant.lastName\" \n                       #tenantLastName=\"ngModel\" [ngClass]=\"{ 'is-invalid': tenantLastName.touched && tenantLastName.invalid }\" \n                       required minlength=\"5\"/>\n                <div *ngIf=\"tenantLastName.touched && tenantLastName.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"tenantLastName.errors.required\">Last Name is required</div>\n                    <div *ngIf=\"tenantLastName.errors.minlength\">minimum length of 5 characters</div>\n                </div>\n              </div>\n              <!-- Email -->\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"tenant.email\" #tenantEmail=\"ngModel\" \n                       [ngClass]=\"{ 'is-invalid': tenantEmail.touched && tenantEmail.invalid }\" required email />\n                <div *ngIf=\"tenantEmail.touched && tenantEmail.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"tenantEmail.errors.required\">Email is required</div>\n                    <div *ngIf=\"tenantEmail.errors.email\">Email must be a valid email address</div>\n                </div>\n            </div>\n              <!-- Phone -->\n              <div class=\"form-group\">\n                <label for=\"phone\">Phone</label>\n                <input type=\"tel\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"tenant.phone\" #tenantPhone=\"ngModel\" \n                       [ngClass]=\"{ 'is-invalid': tenantPhone.touched && tenantPhone.invalid }\" required phone />\n                <div *ngIf=\"tenantPhone.touched && tenantPhone.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"tenantPhone.errors.required\">Phone number is required</div>\n                </div>\n            </div>\n              <!-- Balance -->\n              <div class=\"form-group\">\n                <label for=\"balance\">Balance</label>\n                <input type=\"tel\" class=\"form-control\" name=\"balance\" [(ngModel)]=\"tenant.balance\" #tenantBalance=\"ngModel\" \n                       [ngClass]=\"{ 'is-invalid': tenantBalance.touched && tenantBalance.invalid }\" required [disabled]=\"disableBalanceOnEdit\" />\n                <div *ngIf=\"tenantBalance.touched && tenantBalance.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"tenantBalance.errors.required\">Balance is required</div>\n                </div>\n            </div>\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"!editTenantForm.valid\">Submit</button>\n              </div>\n            </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/edit-tenant/edit-tenant.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-tenant/edit-tenant.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditTenantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTenantComponent", function() { return EditTenantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tenant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tenant.service */ "./src/app/services/tenant.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var EditTenantComponent = /** @class */ (function () {
    function EditTenantComponent(_tenantService, _flashMessagesService, _routerService, _activatedRoute, settingsService) {
        this._tenantService = _tenantService;
        this._flashMessagesService = _flashMessagesService;
        this._routerService = _routerService;
        this._activatedRoute = _activatedRoute;
        this.settingsService = settingsService;
        this.tenant = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            balance: 0
        };
        this.disableBalanceOnEdit = true;
    }
    EditTenantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tenantId = this._activatedRoute.snapshot.paramMap.get('id');
        console.log(this.tenantId);
        this._tenantService.getTenantById(this.tenantId).valueChanges().subscribe(function (tenant) {
            _this.tenant = tenant;
        }, function (error) {
            console.log("Error in Edit tenant details");
        });
        this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
    };
    EditTenantComponent.prototype.submitForm = function (editTenantFormData) {
        var _this = this;
        console.log("*****In submit Handler***** " + Object.keys(editTenantFormData.form));
        var flashMessagesService = this._flashMessagesService;
        if (editTenantFormData.form.valid) {
            var tenantData = Object.assign({}, editTenantFormData.form.value);
            tenantData.balance = tenantData.balance ? tenantData.balance : this.tenant.balance;
            this._tenantService.updateTenant(this.tenantId, tenantData).then(function (reponse) {
                flashMessagesService.show('Tenant Details updated successfully', { cssClass: 'alert-success', timeout: 4000 });
                _this._routerService.navigate(['/tenant', _this.tenantId]);
            }, function (error) {
                flashMessagesService.show(error.message, { cssClass: 'alert-danger', timeout: 4000 });
                _this._routerService.navigate(['/edittenant', _this.tenantId]);
            });
        }
        else {
            console.log("****In submit Handler****** " + editTenantFormData.form.valid);
        }
    };
    EditTenantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-tenant',
            template: __webpack_require__(/*! ./edit-tenant.component.html */ "./src/app/components/edit-tenant/edit-tenant.component.html"),
            styles: [__webpack_require__(/*! ./edit-tenant.component.css */ "./src/app/components/edit-tenant/edit-tenant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tenant_service__WEBPACK_IMPORTED_MODULE_2__["TenantService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], EditTenantComponent);
    return EditTenantComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-text{\r\n  text-align:center;\r\n}\r\n\r\n.padding-20{\r\n  padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci10ZXh0e1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ucGFkZGluZy0yMHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">  \n      <div class=\"col-md-6 offset-md-3\">\n          <div class=\"card\">\n            <div class=\"card-block\">\n              <div class=\"container padding-20\">\n                  <div class=\"center-text\"> <i class=\"fa fa-building\"></i> </div>\n                  <h1 class=\"text-center\">Login</h1>\n                  <form (submit)=\"onSubmit(loginForm)\" #loginForm=\"ngForm\">\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email</label>\n                      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"password\">Password</label>\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n                    </div>\n                    <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n                  </form>\n              </div>\n            </div>\n          </div>\n      </div>      \n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_afAuthService, _router, _flashMessagesService) {
        this._afAuthService = _afAuthService;
        this._router = _router;
        this._flashMessagesService = _flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (loginForm) {
        var _this = this;
        var flashMessagesService = this._flashMessagesService;
        this._afAuthService.login(this.email, this.password)
            .subscribe(function (res) {
            flashMessagesService.show('You are logged in', { cssClass: 'alert-success', timeout: 4000 });
            _this._router.navigate(['/']);
        }, function (err) {
            flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
            _this._router.navigate(['/login']);
            loginForm.resetForm();
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-white{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC13aGl0ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand text-white\">Rent Manager</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/']\">Dashboard</a>\n        </li>\n      </ul>    \n      <ul class=\"navbar-nav ml-auto\">\n        <!-- <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!isLoggedIn\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" style=\" cursor: pointer \" (click)=\"onLogoutClick()\">Logout</a>\n        </li> -->       \n        <!--  -->\n        <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/register']\">Register</a>\n        </li> \n        <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/login']\">Login</a>\n        </li> \n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">{{loggedInUser}}</a>\n        </li> \n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/settings']\">Settings</a>\n        </li> \n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" style=\" cursor: pointer \" (click)=\"onLogoutClick()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_afAuthService, _router, _flashMessagesService, settingsService) {
        this._afAuthService = _afAuthService;
        this._router = _router;
        this._flashMessagesService = _flashMessagesService;
        this.settingsService = settingsService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._afAuthService.getAuth().subscribe(function (auth) {
            if (!!auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
            _this.showRegister = _this.settingsService.getSettings().allowRegistration;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this._afAuthService.logOut();
        this._flashMessagesService.show('You are logged out', { cssClass: 'alert-success', timeout: 4000 });
        this._router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-text{\r\n    text-align:center;\r\n  }\r\n  \r\n.padding-20{\r\npadding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0dBQ25COztBQUVIO0FBQ0EsY0FBYztDQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4ucGFkZGluZy0yMHtcclxucGFkZGluZzogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n    <div class=\"card\">\n      <div class=\"card-block padding-20\">\n        <div class=\"center-text\"> <i class=\"fa fa-building\"></i> </div>\n        <h1 class=\"text-center\">Register</h1>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n          </div>\n          <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password)
            .then(function (res) {
            _this.flashMessagesService.show('New user registered', { cssClass: 'alert-success', timeout: 4000 });
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            _this.flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-20{\r\n    padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nLTIwe1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">   \n  <div class=\"col-md-6\">\n    <a routerLink=\"/\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard</a>\n  </div>\n  <div class=\"col-md-6\">\n    \n  </div>\n</div>\n\n<div class=\"card\">\n  <h3 class=\"card-header\">\n    Edit Settings\n  </h3>\n  <div class=\"card-block\">\n    <div class=\"container padding-20\">\n      <form (submit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label>Allow Registration &nbsp;</label>\n          <input type=\"checkbox\" [checked]=\"settings.allowRegistration\" (change)=\"settings.allowRegistration = !settings.allowRegistration\" name=\"allowRegistration\">\n        </div>\n        <div class=\"form-group\">\n          <label>Disable Balance On Add &nbsp;</label>\n          <input type=\"checkbox\" [checked]=\"settings.disableBalanceOnAdd\" (change)=\"settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd\" name=\"disableBalanceOnAdd\">\n        </div>\n        <div class=\"form-group\">\n          <label>Disable Balance On Edit &nbsp;</label>\n          <input type=\"checkbox\" [checked]=\"settings.disableBalanceOnEdit\" (change)=\"settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit\" name=\"disableBalanceOnEdit\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService, flashMessagesService, router) {
        this.settingsService = settingsService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.settings = this.settingsService.getSettings();
    };
    SettingsComponent.prototype.onSubmit = function () {
        this.settingsService.changeSettings(this.settings);
        this.flashMessagesService.show('Settings saved', { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/settings']);
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/addtenant']\" class=\"btn btn-success btn-block\">\n  <i class=\"fa fa-plus\">&nbsp;Add new Tenant</i>\n</a>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/tenant-details/tenant-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/tenant-details/tenant-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-top-bottom{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW5hbnQtZGV0YWlscy90ZW5hbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVuYW50LWRldGFpbHMvdGVuYW50LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tdG9wLWJvdHRvbXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/tenant-details/tenant-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/tenant-details/tenant-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n          <a routerLink=\"/\" class=\"btn btn-link\"><i class=\"fa fa-arrow-circle-o-left\"></i> Back To Dashboard</a>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"btn-group pull-right\">\n            <a [routerLink]=\"['/edittenant/', tenantId]\" class=\"btn btn-secondary\">Edit</a>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteClick()\">Delete</button>\n          </div>\n        </div>\n    </div>\n    <hr>\n    <div *ngIf=\"tenant\" class=\"card\">\n      <h3 class=\"card-header\">{{tenant.firstName}} {{tenant.lastName}}</h3>\n      <div class=\"card-block\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <h4>tenant ID: {{tenantId}}</h4>\n                </div>\n                <div class=\"col-md-4\"> \n                  <!-- BALANCE GOES HERE -->\n                  <h3 class=\"pull-right\">\n                    Balance : <span [class.text-success] =\"!hasBalance\" [class.text-danger]=\"hasBalance\">\n                      {{tenant.balance | currency:\"INR\":\"symbol\"}}</span>\n                      <a (click)=\"showBalanceUpdateInput = !showBalanceUpdateInput\">&nbsp;<i class=\"fa fa-pencil\"></i></a>\n                  </h3>\n                  <div class=\"clear-fix\">\n                      <form *ngIf=\"showBalanceUpdateInput\" class=\"form-inline pull-right\" (submit)=\"updateTenantBalance(tenantId)\">\n                        <div class=\"form-group\">\n                          <input type=\"text\" name=\"balance\" [(ngModel)]=\"tenant.balance\" #balance class=\"form-control\" required>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n                      </form>\n                  </div>\n                </div>\n              </div>\n              <ul class=\"list-group margin-top-bottom\">\n                <li class=\"list-group-item\">Contact Email: {{tenant.email}}</li>\n                <li class=\"list-group-item\">Contact Phone: {{tenant.phone}}</li>\n              </ul>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tenant-details/tenant-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/tenant-details/tenant-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: TenantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantDetailsComponent", function() { return TenantDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tenant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tenant.service */ "./src/app/services/tenant.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TenantDetailsComponent = /** @class */ (function () {
    function TenantDetailsComponent(_tenantService, _flashMessagesService, _routerService, _activatedRoute) {
        this._tenantService = _tenantService;
        this._flashMessagesService = _flashMessagesService;
        this._routerService = _routerService;
        this._activatedRoute = _activatedRoute;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
    }
    TenantDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tenantId = this._activatedRoute.snapshot.paramMap.get('id');
        console.log(this.tenantId);
        this._tenantService.getTenantById(this.tenantId).valueChanges().subscribe(function (tenant) {
            _this.tenant = tenant;
            _this.updateCurrencyColour();
        }, function (error) {
            console.log("Error in Edit tenant details" + error);
        });
    };
    TenantDetailsComponent.prototype.updateTenantBalance = function (tenantId) {
        var _this = this;
        this._tenantService.updateTenantBalance(tenantId, this.tenant).then(function (response) {
            _this.showBalanceUpdateInput = false;
            _this.updateCurrencyColour();
            _this._flashMessagesService.show('Tenant Balance updated successfully', { cssClass: 'alert-success', timeout: 3000 });
        });
        this._routerService.navigate(['/tenant/', tenantId]);
    };
    TenantDetailsComponent.prototype.updateCurrencyColour = function () {
        if (this.tenant && this.tenant.balance > 0) {
            this.hasBalance = true;
        }
        else {
            this.hasBalance = false;
        }
    };
    TenantDetailsComponent.prototype.onDeleteClick = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete the tenant?')) {
            this._tenantService.deleteTenant(this.tenantId).then(function (response) {
                console.log(response);
                _this._routerService.navigate(['/']);
            });
        }
    };
    TenantDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tenant-details',
            template: __webpack_require__(/*! ./tenant-details.component.html */ "./src/app/components/tenant-details/tenant-details.component.html"),
            styles: [__webpack_require__(/*! ./tenant-details.component.css */ "./src/app/components/tenant-details/tenant-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tenant_service__WEBPACK_IMPORTED_MODULE_2__["TenantService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TenantDetailsComponent);
    return TenantDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/tenants/tenants.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/tenants/tenants.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-top-10{\r\n    margin-top:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXRvcC0xMHtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/tenants/tenants.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tenants/tenants.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin-top-10\">\n  <div class=\"col-md-6\">\n    <h2>\n      <i class=\"fa fa-users\">&nbsp;Tenants</i>\n      <!-- <i class=\"fas fa-check\" *ngIf=\"addStatus\">Tenant added succesfully</i> -->\n    </h2>\n  </div>\n  <div class=\"col-md-6\">\n    <h5 class=\"pull-right text-muted\">\n      Total Balance Due: {{ totalBalance | currency:\"INR\":\"symbol\"}}\n    </h5>\n  </div>\n</div>\n<table *ngIf=\"tenants?.length>0; noTenants\" class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Balance</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let tenant of tenants\">\n      <td>{{tenant.$key}}</td>\n      <td>{{tenant.firstName}} {{tenant.lastName}}</td>\n      <td>{{tenant.email}}</td>\n      <td>{{tenant.balance? ( tenant.balance | currency:\"INR\":\"symbol\" ) : 0 | currency:\"INR\":\"symbol\"}}</td>\n      <td><a class=\"btn btn-secondary btn-sm\" [routerLink]=\"['tenant',tenant.$key]\">\n              <i class=\"fa fa-arrow-circle-o-right\">&nbsp;Details</i>\n          </a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<ng-template #noTenants>\n  <hr>\n  <h5>There are no tenants in the system</h5>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/tenants/tenants.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tenants/tenants.component.ts ***!
  \*********************************************************/
/*! exports provided: TenantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantsComponent", function() { return TenantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_tenant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tenant.service */ "./src/app/services/tenant.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var TenantsComponent = /** @class */ (function () {
    function TenantsComponent(tenantService, _route, _flashMessagesService) {
        this.tenantService = tenantService;
        this._route = _route;
        this._flashMessagesService = _flashMessagesService;
        this.totalBalance = 0;
    }
    TenantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tenantService.getTenants().snapshotChanges().subscribe(function (angularFirelist) {
            _this.tenants = [];
            _this.handleSuccess(angularFirelist);
        }, function (error) { return _this.handleError(error); });
        //TODO: this.addStatus = this._route.snapshot.queryParams['add'];   
    };
    TenantsComponent.prototype.ngAfterContentChecked = function () {
        //TODO: console.log("Tenant add status :"+this.addStatus);
    };
    TenantsComponent.prototype.handleSuccess = function (angularFirelist) {
        var _this = this;
        console.log("this._flashMessagesService" + this._flashMessagesService);
        console.log("****Tenants**** " + JSON.stringify(angularFirelist));
        lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](angularFirelist, function (ngFirelistObject) {
            var payload = JSON.stringify(ngFirelistObject.payload);
            console.log(payload);
            _this.tenants.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ '$key': ngFirelistObject['key'] }, JSON.parse(payload)));
        });
        this.calculateTotalBalance();
    };
    TenantsComponent.prototype.handleError = function (error) {
        console.log(error);
    };
    TenantsComponent.prototype.calculateTotalBalance = function () {
        var _this = this;
        this.totalBalance = 0;
        console.log("******Calculate balance****" + this.totalBalance);
        lodash__WEBPACK_IMPORTED_MODULE_5__["forEach"](this.tenants, function (tenant) {
            _this.totalBalance += parseFloat(tenant.balance ? tenant.balance : 0);
        });
        console.log(this.totalBalance);
    };
    TenantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tenants',
            template: __webpack_require__(/*! ./tenants.component.html */ "./src/app/components/tenants/tenants.component.html"),
            styles: [__webpack_require__(/*! ./tenants.component.css */ "./src/app/components/tenants/tenants.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tenant_service__WEBPACK_IMPORTED_MODULE_4__["TenantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], TenantsComponent);
    return TenantsComponent;
}());



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.getAuth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                console.log("Access Denied");
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    // Login
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var userPromise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
        this.user = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(userPromise);
        console.log("In login- auth service" + JSON.stringify(this.user));
        return this.user;
    };
    //Register
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    // Get user's authorised status
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) { return auth; }));
    };
    // Signout
    AuthService.prototype.logOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.settings = {
            allowRegistration: true,
            disableBalanceOnAdd: true,
            disableBalanceOnEdit: true
        };
        if (localStorage.getItem('settings') != null) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.changeSettings = function (settings) {
        localStorage.setItem('settings', JSON.stringify(settings));
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/tenant.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/tenant.service.ts ***!
  \********************************************/
/*! exports provided: TenantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantService", function() { return TenantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var TenantService = /** @class */ (function () {
    function TenantService(af) {
        this.af = af;
        this.tenants = this.af.list('/tenants');
    }
    TenantService.prototype.getTenants = function () {
        return this.tenants;
    };
    TenantService.prototype.addTenant = function (tenant) {
        return this.tenants.push(tenant);
    };
    TenantService.prototype.getTenantById = function (tenantId) {
        this.tenant = this.af.object('/tenants/' + tenantId);
        return this.tenant;
    };
    TenantService.prototype.updateTenantBalance = function (tenantId, tenant) {
        var updatedBalance = tenant.balance;
        return this.tenants.update(tenantId, { balance: updatedBalance });
    };
    TenantService.prototype.deleteTenant = function (tenantId) {
        return this.tenants.remove(tenantId);
    };
    TenantService.prototype.updateTenant = function (tenantId, tenant) {
        return this.tenants.set(tenantId, tenant);
    };
    TenantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], TenantService);
    return TenantService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Beasts\RentManagementSystem\RentManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map