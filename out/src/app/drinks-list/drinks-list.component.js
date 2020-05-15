"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DrinkActions = require("./../actions/drink.Action");
var DrinksComponent = /** @class */ (function () {
    function DrinksComponent(formBuilder, drinkService, store) {
        this.formBuilder = formBuilder;
        this.drinkService = drinkService;
        this.store = store;
        this.drinks = store.select('drink');
        this.drinkForm = this.formBuilder.group({
            name: '',
            type: '',
            percent: ''
        });
    }
    DrinksComponent.prototype.ngOnInit = function () {
    };
    DrinksComponent.prototype.addDrink = function (drink) {
        this.store.dispatch(new DrinkActions.AddDrink({ name: drink.name, percent: drink.percent, type: drink.type }));
        if (this.drinkService.drinkCount > 6) {
            window.alert("This is drink number: " + this.drinkService.drinkCount + "\nMight want to cool down there super chief");
        }
        else {
            window.alert("Enjoy that " + drink.name + "\nThis is drink number: " + this.drinkService.drinkCount);
        }
    };
    DrinksComponent.prototype.newDrink = function (nDrink) {
        this.drinkService.addDrink(nDrink);
        window.alert("Enjoy that " + nDrink.name + "\nThis is drink number: " + this.drinkService.drinkCount);
    };
    DrinksComponent = __decorate([
        core_1.Component({
            selector: 'app-drinks',
            templateUrl: './drinks-list.component.html',
            styleUrls: ['./drinks-list.component.scss']
        })
    ], DrinksComponent);
    return DrinksComponent;
}());
exports.DrinksComponent = DrinksComponent;
//# sourceMappingURL=drinks-list.component.js.map