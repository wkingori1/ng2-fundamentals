"use strict";
//OpaqueToken is used to create a token which is used in the Dependency Injection
//registry in order to find the instance of the object we want
var core_1 = require("@angular/core");
//creates a token that I can then use to look up the toastr object inside of the dependency injection registry
exports.TOASTR_TOKEN = new core_1.OpaqueToken('toastr');
//# sourceMappingURL=toastr.service.js.map