import {
  ActionReducerMap, createFeatureSelector} from '@ngrx/store'; // ActionReducerMap check types for us based on provided argument state type

import * as fromPizzas from './pizzas.reducer';

export interface PizzasState {
  pizzas: fromPizzas.PizzaState;
}

// This will define how our reducers look like
// ActionReducerMap will check the state
export const reducers: ActionReducerMap<PizzasState> = {
  pizzas: fromPizzas.reducer
};
// create base property for pizzas selector
export const getPizzasState = createFeatureSelector<PizzasState>(
  // 'pizzas' comes from pizza-app-module.ts StoreModule.forFeature('pizzas', reducers),
  'pizzas'
);
