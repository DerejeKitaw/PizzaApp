import { Pizza } from '../../models/pizza.model';

import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../services/pizzas.service';

@Component({
  selector: 'app-pizza-lists',
  templateUrl: './pizza-lists.component.html',
  styleUrls: ['./pizza-lists.component.scss']
})
export class PizzaListsComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaService: PizzasService) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      console.log('piza works' +  JSON.stringify(this.pizzas));
    });
  }
}
