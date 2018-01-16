import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../../models/pizza.model';

export interface PizzaState {
  // data: Pizza[];
  entities: {[id: number]: Pizza};
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  // the way we dispaly this data is through a selector
    // data: [],
    entities: {},
  loaded: false,
  loading: false,
};

export function reducer (
    // take initial state and action
    state = initialState,
    action: fromPizzas.PizzasAction
): PizzaState { // returned state need to be PizzaState
    // return new state = initial state + action
    switch (action.type) {
        case fromPizzas.LOAD_PIZZAS: {
          return {
            ...state,
            loading: true, // loadding is sccessfull
          };
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
          // console.log(action.payload);
          // return
          // (4) [{…}, {…}, {…}, {…}]
          // {name: "Blazin' Inferno", toppings: Array(3), id: 1}
          // {name: "Seaside Surfin'", toppings: Array(9), id: 2}
          // {name: "testy", toppings: Array(4), id: 7}
          // {name: "nice", toppings: Array(2), id: 8}
          const pizzas = action.payload;
          const entities = pizzas.reduce(
            (entities: { [id: number]: Pizza }, pizza: Pizza) => {
              return {
                ...entities,
                [pizza.id]: pizza,
              };
            },
            {
              ...state.entities,
            }
          );
          return {
            ...state,
            loading: false, // already loadded
            loaded: true,
            entities,
          };
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
          return {
            ...state,
            loading: false, // already loadded
            loaded: false,
          };
        }
      }
      return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
// export const getPizzas = (state: PizzaState) => state.data;
export const getPizzasEntities = (state: PizzaState) => state.entities;

