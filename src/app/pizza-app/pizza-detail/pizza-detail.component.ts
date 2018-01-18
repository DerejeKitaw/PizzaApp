import { Topping } from '../../models/topping.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../../models/pizza.model';
import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../services/pizzas.service';
import { ToppingsService } from '../services/toppings.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {
  pizza: Pizza;
  visualise: Pizza;
  toppings: Topping[];

  constructor() {}

  ngOnInit() {}

  onSelect(event: number[]) {}

  onCreate(event: Pizza) {}

  onUpdate(event: Pizza) {}

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
    }
  }
}
