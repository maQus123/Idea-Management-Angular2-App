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
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var http_2 = require('angular2/http');
var IdeaService = (function () {
    function IdeaService(http) {
        //private apiUrl: string = 'http://angular2-app.azurewebsites.net/api/idea/';
        this.apiUrl = 'http://localhost:56631/api/idea/';
        this.http = http;
    }
    IdeaService.prototype.getAll = function () {
        return this.http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + id).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.addNew = function (idea) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl, JSON.stringify(idea), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.deleteById = function (id) {
        return this.http.delete(this.apiUrl + id).map(function (res) { return res.json(); });
    };
    IdeaService.prototype.updateById = function (id, idea) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiUrl + id, JSON.stringify(idea), { headers: headers }).map(function (res) { return res.json(); });
    };
    IdeaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IdeaService);
    return IdeaService;
}());
exports.IdeaService = IdeaService;
//# sourceMappingURL=idea.service.js.map