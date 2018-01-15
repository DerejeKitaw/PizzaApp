import { Pizza } from '../../../models/pizza.model';
import {Action } from '@ngrx/store';

// To load pizzas dispatch LOAD_PIZZAS actions
export const LOAD_PIZZAS = '[Pizzas] Load Pizzas'; // '[Pizzas] Load Pizzas' can be any string
// If load pizzas fails dispatch LOAD_PIZZAS_FAIL  actions
export const LOAD_PIZZAS_FAIL = '[Pizzas] Load Pizzas Fail';
// If load pizzas success dispatch LOAD_PIZZAS_SUCCESS  actions
export const LOAD_PIZZAS_SUCCESS = '[Pizzas] Load Pizzas Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
  }

  export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) {} // Pass payload message to the server if there is an error
  }

  export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) {} // import Pizza model
  }

  // action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
