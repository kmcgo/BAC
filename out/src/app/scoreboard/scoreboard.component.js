"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScoreboardComponent = /** @class */ (function () {
    function ScoreboardComponent(drinkService) {
        this.drinkService = drinkService;
        this.drinks = [];
        this.seconds = 0;
        this.minutes = 0;
        this.hour = 0;
        this.time = 0;
        this.score = 0;
        this.scoreMult = 0;
        this.printThis = 0;
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
        this.getTime();
        this.drinks = this.drinkService.getDrinks();
        this.drinkCount = this.drinkService.getCount();
        //this.name = this.drinkService.getName();
        //this.printThis = this.calculateScore();
    };
    ScoreboardComponent.prototype.getTime = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.time = _this.drinkService.getTime();
            _this.seconds = _this.time % 60;
            if (_this.time % 60 == 0) {
                _this.minutes++;
                if (_this.minutes % 60 == 0) {
                    _this.hour++;
                    _this.minutes = 0;
                }
            }
        }, 1000);
    };
    ScoreboardComponent.prototype.calculateScore = function () {
    };
    ScoreboardComponent = __decorate([
        core_1.Component({
            selector: 'app-scoreboard',
            templateUrl: './scoreboard.component.html',
            styleUrls: ['./scoreboard.component.scss']
        })
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());
exports.ScoreboardComponent = ScoreboardComponent;
//# sourceMappingURL=scoreboard.component.js.map