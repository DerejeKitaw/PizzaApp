import { Pizza } from '../../models/pizza.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../store';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pizza-lists',
  templateUrl: './pizza-lists.component.html',
  styleUrls: ['./pizza-lists.component.scss']
})
export class PizzaListsComponent implements OnInit {
  // pizzas: Pizza[];
  pizzas$: Observable<Pizza[]>;
  constructor(private store: Store<fromStore.PizzasState>) {}

  ngOnInit() {
    // // this.store.select('pizzas').subscribe(state => {  // return {pizzas:{...}}
    //  this.store.select(fromStore.getAllPizzas).subscribe(state => { // return {{...}}
    //   console.log(state);
    // });
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
  }
}
