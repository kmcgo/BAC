"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Section 2
exports.ADD_DRINK = '[TUTORIAL] Add';
exports.REMOVE_DRINK = '[TUTORIAL] Remove';
// Section 3
var AddDrink = /** @class */ (function () {
    function AddDrink(payload) {
        this.payload = payload;
        this.type = exports.ADD_DRINK;
    }
    return AddDrink;
}());
exports.AddDrink = AddDrink;
var RemoveDrink = /** @class */ (function () {
    function RemoveDrink(payload) {
        this.payload = payload;
        this.type = exports.REMOVE_DRINK;
    }
    return RemoveDrink;
}());
exports.RemoveDrink = RemoveDrink;
//# sourceMappingURL=drink.Action.js.map