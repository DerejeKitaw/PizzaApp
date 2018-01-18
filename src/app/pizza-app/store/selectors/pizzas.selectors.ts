
import {createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

export const getPizzaState = createSelector(
    fromFeature.getPizzasState,
    (state: fromFeature.PizzasState) => state.pizzas
  );

  export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities
  );

  // export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
  export const getAllPizzas = createSelector(getPizzasEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  });

  export const getPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoaded
  );
  export const getPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoading
  );
