"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
//example of using barrels to import components into app module from events/index.ts
var index_1 = require("./events/index");
//components
var events_app_component_1 = require("./events-app.component");
var navbar_component_1 = require("./nav/navbar.component");
var _404_component_1 = require("./errors/404.component");
//common
var index_2 = require("./common/index");
//services
var auth_service_1 = require("./user/auth.service");
//routes config
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            events_app_component_1.EventsAppComponent,
            index_1.EventsListComponent,
            index_1.EventThumbnailComponent,
            index_1.EventDetailsComponent,
            index_1.CreateEventComponent,
            index_1.CreateSessionComponent,
            navbar_component_1.NavBarComponent,
            _404_component_1.Error404Component,
            index_1.SessionListComponent,
            index_2.CollapsibleWellComponent,
            index_2.SimpleModalComponent,
            index_1.UpvoteComponent,
            index_2.ModalTriggerDirective,
            index_1.DurationPipe
        ],
        providers: [
            //providers below are using a shorthand approach
            // example of longhand approach { provide: EventService: useClass: EventService}
            //long hand is useful when you need to instantiate separate classes, ex: { provide: EventService: useClass: EventServiceImpl}
            //others include `useExisting` and `useFactory`
            index_1.EventService,
            { provide: index_2.JQ_TOKEN, useValue: jQuery },
            { provide: index_2.TOASTR_TOKEN, useValue: toastr },
            index_1.EventRouteActivator,
            index_1.EventListResolver,
            //long hand way to add a service/provider
            {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
            },
            auth_service_1.AuthService
        ],
        bootstrap: [events_app_component_1.EventsAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    //component.isDirty is set by CreateEventComponent
    if (component.isDirty)
        //window.confirm returns true if Okay is clicked and false if Cancel is clicked
        return window.confirm('You have not saved this event, do you really want to cancel?');
    //default state is to not deactivate route noted by return of true
    return true;
}
//# sourceMappingURL=app.module.js.map