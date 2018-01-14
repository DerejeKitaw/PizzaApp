import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToppingsService } from './services/toppings.service';
import { PizzasService } from './services/pizzas.service';
import { PizzaDisplayComponent } from './pizza-lists/pizza-display/pizza-display.component';
import { PizzaFormComponent } from './pizza-detail/pizza-form/pizza-form.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaItemComponent } from './pizza-lists/pizza-item/pizza-item.component';
import { PizzaListsComponent } from './pizza-lists/pizza-lists.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaAppRoutingModule } from './pizza-app-routing.module';
import { PizzaToppingsComponent } from './pizza-detail/pizza-toppings/pizza-toppings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PizzaAppRoutingModule
  ],
  declarations: [
    PizzaListsComponent,
    PizzaItemComponent,
    PizzaDisplayComponent,
    PizzaDetailComponent,
    PizzaFormComponent,
    PizzaToppingsComponent
  ],
  exports: [
    PizzaListsComponent,
    PizzaItemComponent,
    PizzaDisplayComponent,
    PizzaDetailComponent,
    PizzaFormComponent,
    PizzaToppingsComponent],
  providers: [
    PizzasService,
    ToppingsService]
})
export class PizzaAppModule { }
