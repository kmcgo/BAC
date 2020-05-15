"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DrinkActions = require("./../actions/drink.Action");
// Section 1
var initialState = {
    name: 'KBC Widow Maker',
    percent: 5,
    type: "Beer"
};
// Section 2
function reducer(state, action) {
    if (state === void 0) { state = [initialState]; }
    // Section 3
    switch (action.type) {
        case DrinkActions.ADD_DRINK:
            return __spreadArrays(state, [action.payload]);
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=drink.reducer.js.map