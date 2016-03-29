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
var router_1 = require('angular2/router');
var idea_service_1 = require('./idea.service');
var idea_1 = require('./idea');
var router_2 = require('angular2/router');
var IdeaDetailComponent = (function () {
    function IdeaDetailComponent(ideaService, params, router) {
        this.ideaService = ideaService;
        this.params = params;
        this.router = router;
        this.idea = new idea_1.Idea();
    }
    IdeaDetailComponent.prototype.onCancel = function () {
        this.router.navigate(['Root']);
        return;
    };
    IdeaDetailComponent.prototype.onDelete = function (id) {
        var _this = this;
        if (confirm("Delete Idea?")) {
            this.ideaService.deleteById(id).subscribe(function (error) { return alert(error); }, function () { return _this.router.navigate(['Root']); });
        }
        return;
    };
    IdeaDetailComponent.prototype.onUpdate = function (id, idea) {
        var _this = this;
        this.ideaService.updateById(id, idea).subscribe(function (error) { return alert(error); }, function () { return _this.router.navigate(['Root']); });
        return;
    };
    IdeaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.params.get('id');
        this.ideaService.getById(id).subscribe(function (data) { return _this.idea = data; }, function (error) { return alert(error); }, function () { return console.log(); });
        return;
    };
    IdeaDetailComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"container\" style=\"margin-top:60px\" role=\"main\">\n            <div class=\"modal\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                            <h4 class=\"modal-title\">Delete Idea?</h4>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                            <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-md-offset-3\">\n                    <h2>Idea</h2>\n                    <form> \n                        <div class=\"form-group\">\n                            <label for=\"title\">Title</label>\n                            <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"idea.title\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <textarea rows=\"5\" class=\"form-control\" style=\"resize: vertical;\" id=\"description\" [(ngModel)]=\"idea.description\"></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"category\">Category</label>\n                            <input type=\"text\" class=\"form-control\" id=\"category\" [(ngModel)]=\"idea.category\" required>\n                        </div>\n                        <div class=\"checkbox\">\n                            <label>\n                                <input type=\"checkbox\" [(ngModel)]=\"idea.isSecret\"> Secret\n                            </label>\n                        </div>\n                        <div class=\"pull-right\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onUpdate(idea.id, idea)\">Save</button>\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete(idea.id)\">Delete</button>\n                            <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel()\">Back</button>\n                        </div>\n                    </form>   \n                </div>     \n            </div>\n        </div>\n    ",
            providers: [idea_service_1.IdeaService]
        }), 
        __metadata('design:paramtypes', [idea_service_1.IdeaService, router_1.RouteParams, router_2.Router])
    ], IdeaDetailComponent);
    return IdeaDetailComponent;
}());
exports.IdeaDetailComponent = IdeaDetailComponent;
//# sourceMappingURL=idea-detail.component.js.map