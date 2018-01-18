import { Action } from '@ngrx/store';
import { Topping } from '../../../models/topping.model';



export const LOAD_TOPPINGS = '[Pizzas] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Pizzas] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Pizzas] Load Toppings Success';

export const VISUALISE_TOPPINGS = '[Pizzas] Visualise Toppings';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

export class VisualiseToppings implements Action {
  readonly type= VISUALISE_TOPPINGS;
  constructor(public payload: number[]) {}
}

// action types
export type ToppingsAction =
  | LoadToppings
  | LoadToppingsFail
  | LoadToppingsSuccess
  | VisualiseToppings
  ;
