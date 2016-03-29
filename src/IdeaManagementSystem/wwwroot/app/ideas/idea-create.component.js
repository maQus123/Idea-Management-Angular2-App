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
var idea_1 = require('./idea');
var router_1 = require('angular2/router');
var IdeaCreateComponent = (function () {
    function IdeaCreateComponent(ideaService, router) {
        this.ideaService = ideaService;
        this.router = router;
        this.newIdea = new idea_1.Idea();
    }
    IdeaCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.ideaService.addNew(this.newIdea).subscribe(function (data) { return _this.postResponse = data; }, function (error) { return alert(error); }, function () { return _this.router.navigate(['Root']); });
        return;
    };
    IdeaCreateComponent.prototype.onCancel = function () {
        this.router.navigate(['Root']);
        return;
    };
    IdeaCreateComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"container\" style=\"margin-top:60px\" role=\"main\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-md-offset-3\">\n                    <h2>Idea Create</h2>\n                    <form #createIdeaForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group\">\n                            <label for=\"title\">Title</label>\n                            <input type=\"text\" class=\"form-control\" id=\"title\" ngControl=\"title\" [(ngModel)]=\"newIdea.title\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <textarea rows=\"5\" class=\"form-control\" style=\"resize: vertical;\" id=\"description\" ngControl=\"description\" [(ngModel)]=\"newIdea.description\"></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"category\">Category</label>\n                            <input type=\"text\" class=\"form-control\" id=\"category\" ngControl=\"category\" [(ngModel)]=\"newIdea.category\" required>\n                        </div>\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\" ngControl=\"isSecret\" [(ngModel)]=\"newIdea.isSecret\"> Secret\n                            </label>\n                        </div>\n                        <div class=\"pull-right\">\n                            <button class=\"btn btn-primary\" type=\"submit\">Create</button>\n                            <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel()\">Cancel</button>\n                        </div>\n                    </form>   \n                </div>     \n            </div>\n        </div>\n    ",
            providers: [idea_service_1.IdeaService]
        }), 
        __metadata('design:paramtypes', [idea_service_1.IdeaService, router_1.Router])
    ], IdeaCreateComponent);
    return IdeaCreateComponent;
}());
exports.IdeaCreateComponent = IdeaCreateComponent;
//# sourceMappingURL=idea-create.component.js.map