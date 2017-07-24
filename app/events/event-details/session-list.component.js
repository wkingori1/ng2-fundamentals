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
var SessionListComponent = (function () {
    function SessionListComponent() {
        this.visibleSessions = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotersDesc);
        }
    };
    SessionListComponent.prototype.filterSessions = function (filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    };
    return SessionListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SessionListComponent.prototype, "sessions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SessionListComponent.prototype, "filterBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SessionListComponent.prototype, "sortBy", void 0);
SessionListComponent = __decorate([
    core_1.Component({
        selector: 'session-list',
        templateUrl: 'app/events/event-details/session-list.component.html'
    })
], SessionListComponent);
exports.SessionListComponent = SessionListComponent;
function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name) {
        return 1;
    }
    else if (s1.name === s2.name) {
        return 0;
    }
    else {
        return -1;
    }
}
function sortByVotersDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}
//# sourceMappingURL=session-list.component.js.map