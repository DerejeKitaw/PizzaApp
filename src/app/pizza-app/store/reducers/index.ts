// ActionReducerMap check types for us based on provided argument state type
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'; 

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

export interface PizzasState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

// This will define how our reducers look like
// ActionReducerMap will check the state
export const reducers: ActionReducerMap<PizzasState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
};
// create base property for pizzas selector
export const getPizzasState = createFeatureSelector<PizzasState>(
  // 'pizzas' comes from pizza-app-module.ts StoreModule.forFeature('pizzas', reducers),
  'pizzas'
);
