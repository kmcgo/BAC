"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DrinkService = /** @class */ (function () {
    function DrinkService(http) {
        this.http = http;
        this.bevsInBelly = [];
        this.drinkCount = 0;
        this.time = 0;
        this.name = '';
        this.gender = '';
    }
    DrinkService.prototype.updateTime = function () {
        this.time++;
    };
    DrinkService.prototype.getTime = function () {
        return this.time;
    };
    DrinkService.prototype.setName = function (name) {
        this.name = name;
    };
    DrinkService.prototype.getName = function () {
        return this.name;
    };
    DrinkService.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    DrinkService.prototype.getGender = function () {
        return this.gender;
    };
    DrinkService.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    DrinkService.prototype.getWeight = function () {
        return this.weight;
    };
    DrinkService.prototype.getCount = function () {
        return this.drinkCount;
    };
    DrinkService.prototype.addDrink = function (bev) {
        this.bevsInBelly.push(bev);
        this.drinkCount += 1;
        return bev;
    };
    DrinkService.prototype.getDrinks = function () {
        return this.bevsInBelly;
    };
    DrinkService.prototype.soberUp = function () {
        this.bevsInBelly = [];
        this.drinkCount = 0;
        return this.bevsInBelly;
    };
    DrinkService.prototype.getDrinkMenu = function () {
        return this.http.get('/assets/drinks.json');
    };
    DrinkService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DrinkService);
    return DrinkService;
}());
exports.DrinkService = DrinkService;
//# sourceMappingURL=drinks.Service.js.map