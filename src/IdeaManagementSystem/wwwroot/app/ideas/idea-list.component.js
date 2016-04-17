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
var core_1 = require('angular2/core');
var idea_service_1 = require('./idea.service');
var router_1 = require('angular2/router');
var IdeaListComponent = (function () {
    function IdeaListComponent(ideaService, router) {
        this.ideaService = ideaService;
        this.router = router;
    }
    IdeaListComponent.prototype.getIdeas = function () {
        var _this = this;
        this.ideaService.getAll().subscribe(function (data) { return _this.ideas = data; }, function (error) { return alert(error); }, function () { return console.log(); });
        return;
    };
    IdeaListComponent.prototype.onClickCreateIdea = function () {
        this.router.navigate(['CreateIdea']);
        return;
    };
    IdeaListComponent.prototype.onClickDetail = function (id) {
        this.router.navigate(['IdeaDetail', { id: id }]);
        return;
    };
    IdeaListComponent.prototype.ngOnInit = function () {
        this.getIdeas();
        return;
    };
    IdeaListComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"container\" style=\"margin-top:60px\" role=\"main\">\n            <h2>Ideas</h2>\n            <table class=\"table table-hover table-responsive\">\n                <tr>\n                    <th>Nr</th>\n                    <th>Title</th>\n                    <th>Category</th>\n                    <th>Secret</th>\n                </tr>\n                <tr *ngFor=\"#idea of ideas; #nr = index\" style=\"cursor: pointer;\" (click)=\"onClickDetail(idea.id)\">\n                    <td>{{nr+1}}</td>\n                    <td>{{idea.title}}</td>\n                    <td>{{idea.category}}</td>\n                    <td>{{idea.isSecret}}</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"container\">\n            <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"onClickCreateIdea()\">Create Idea</button>\n        </div>\n    ",
            providers: [idea_service_1.IdeaService],
        }), 
        __metadata('design:paramtypes', [idea_service_1.IdeaService, router_1.Router])
    ], IdeaListComponent);
    return IdeaListComponent;
}());
exports.IdeaListComponent = IdeaListComponent;
//# sourceMappingURL=idea-list.component.js.map