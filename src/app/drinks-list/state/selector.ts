import { MemoizedSelector, createFeatureSelector, State, createSelector } from '@ngrx/store';
import { DrinkAppState } from './drink.state';
import { Drink } from './drink.model';
// import { PersonAppState } from './person.state';
// import { Person } from './models/person.model';

export const selectDrinkState: MemoizedSelector<object, any> = createFeatureSelector<DrinkAppState>('component.drinkState');

export const selectDrinksFor: MemoizedSelector<object, Drink[]> = createSelector(
  selectDrinkState,
  (
    state: DrinkAppState,
  ): Drink[] => state.drinkList,
);
