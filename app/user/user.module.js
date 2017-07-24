"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var user_routes_1 = require("./user.routes");
var profile_component_1 = require("./profile.component");
var login_component_1 = require("./login.component");
//this module is known as a feature module or a
//lazy loadable feature
//difference between this and an app module is that here
//we use CommonModule instead of BrowserModule
//and we use the forChild method to register routes instead of
//the forRoot method on the RouterModule
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forChild(user_routes_1.userRoutes)
        ],
        declarations: [
            profile_component_1.ProfileComponent,
            login_component_1.LoginComponent
        ],
        providers: []
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map