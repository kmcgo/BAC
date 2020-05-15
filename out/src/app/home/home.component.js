"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bar_1 = require("../bar");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(formBuilder, drinkService) {
        this.formBuilder = formBuilder;
        this.drinkService = drinkService;
        this.genders = ['Male', 'Female'];
        this.model = new bar_1.Person("Joe", this.genders[0], 160);
        //public name;
        //public gender: String;
        this.time = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hour = 0;
        //public weight: number;
        //public nameForm;
        this.submitted = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSubmit = function () {
        if (!this.submitted) {
            if (this.time < 1) {
                this.startTimer();
            }
            this.submitted = true;
        }
    };
    HomeComponent.prototype.setName = function (name) {
        this.drinkService.setName(name);
    };
    HomeComponent.prototype.setWeight = function (weight) {
        this.drinkService.setName(weight);
    };
    HomeComponent.prototype.setGender = function (gender) {
        this.drinkService.setGender(gender);
    };
    HomeComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.drinkService.updateTime();
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map