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
var event_service_1 = require("./shared/event.service");
var EventListResolver = (function () {
    function EventListResolver(eventService) {
        this.eventService = eventService;
    }
    //an injectable service that implements resolve
    EventListResolver.prototype.resolve = function () {
        //example of making an asynchronous call
        //getEvents returns an observable
        //calling map gives us a access to the events that are passed in this stream
        //the shorthand approach of events => events is the same
        //as asssigning the results of the data to `this.event`
        //typically when you call an observable you would call subscribe right here
        //but because it is a resolver and we need to actually return the
        //observable to Angular so Angular knows to watch it
        //if we were to call subsrcibe the value returned wouldn't be the observable
        //map does the same thing but returns the observable
        //because we are returning an observable the data will get passed to our component,
        //in this case, the events component
        return this.eventService.getEvents().map(function (events) { return events; });
    };
    return EventListResolver;
}());
EventListResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventListResolver);
exports.EventListResolver = EventListResolver;
//# sourceMappingURL=events-list-resolver.service.js.map