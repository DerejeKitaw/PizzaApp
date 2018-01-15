import { Pizza } from '../../../models/pizza.model';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer (
    // take initial state and action
): PizzaState { // returned state need to be PizzaState

    // return new state = initial state + action
}