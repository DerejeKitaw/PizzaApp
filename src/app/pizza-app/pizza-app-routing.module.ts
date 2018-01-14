import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaListsComponent } from '../pizza-app/pizza-lists/pizza-lists.component';

const routes: Routes = [
  {
    path: '',
    component: PizzaListsComponent,
  },
  {
    path: ':id',
    component: PizzaDetailComponent,
  },
  {
    path: 'new',
    component: PizzaDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaAppRoutingModule { }
