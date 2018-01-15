import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../../models/pizza.model';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  // the way we dispaly this data is through a selector
    data: [
        {
            name: 'Seaside Surfin',
            toppings: [
              {
                id: 6,
                name: 'mushroom',
              },
              {
                id: 7,
                name: 'olive',
              },
              {
                id: 2,
                name: 'bacon',
              },
              {
                id: 3,
                name: 'basil',
              },
              {
                id: 1,
                name: 'anchovy',
              },
              {
                id: 8,
                name: 'onion',
              },
              {
                id: 11,
                name: 'sweetcorn',
              },
              {
                id: 9,
                name: 'pepper',
              },
              {
                id: 5,
                name: 'mozzarella',
              },
            ],
            id: 2,
          },
    ],
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
          console.log(action.payload);
          // return
          // (4) [{…}, {…}, {…}, {…}]
          // {name: "Blazin' Inferno", toppings: Array(3), id: 1}
          // {name: "Seaside Surfin'", toppings: Array(9), id: 2}
          // {name: "testy", toppings: Array(4), id: 7}
          // {name: "nice", toppings: Array(2), id: 8}
          return {
            ...state,
            loading: false, // already loadded
            loaded: true,
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
export const getPizzas = (state: PizzaState) => state.data;
