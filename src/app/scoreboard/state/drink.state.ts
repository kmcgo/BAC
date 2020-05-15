import { Drink } from "./drink.model";

export interface DrinkAppState {
  drinkList: Drink[];
}

export const initialState: DrinkAppState = {
  drinkList: [],
}