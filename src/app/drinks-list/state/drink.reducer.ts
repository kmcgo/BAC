import { DrinkAppState, initialState } from './drink.state'
import * as DrinkActions from './drink.Action'

export function drinkreducer(state: DrinkAppState = initialState, action: DrinkActions.Actions) {
    switch(action.type) {
        case DrinkActions.ADD_DRINK:
            let x = {...state, drinkList: [...state.drinkList, action.payload]};
            return x;
        default:
            return state;
    }
}