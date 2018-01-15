import {Action } from '@ngrx/store';

// To load pizzas dispatch LOAD_PIZZAS actions
export const LOAD_PIZZAS = '[Pizzas] Load Pizzas'; // '[Pizzas] Load Pizzas' can be any string
// If load pizzas fails dispatch LOAD_PIZZAS_FAIL  actions
export const LOAD_PIZZAS_FAIL = '[Pizzas] Load Pizzas Fail';
// If load pizzas success dispatch LOAD_PIZZAS_SUCCESS  actions
export const LOAD_PIZZAS_SUCCESS = '[Pizzas] Load Pizzas Success';