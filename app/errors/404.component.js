"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Error404Component = (function () {
    function Error404Component() {
    }
    return Error404Component;
}());
Error404Component = __decorate([
    core_1.Component({
        template: "\n    <h1 class=\"errorMessage\">404'd</h1>\n  ",
        styles: ["\n    .errorMessage {\n      margin-top: 150px;\n      font-size: 170px;\n      text-align: center;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], Error404Component);
exports.Error404Component = Error404Component;
//# sourceMappingURL=404.component.js.map