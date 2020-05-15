import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Drink } from "./drink.model";

export const ADD_DRINK       = '[DRINK] Add'

export class AddDrink implements Action {
    type = ADD_DRINK

    constructor(public payload: Drink) {}
}


export type Actions = AddDrink