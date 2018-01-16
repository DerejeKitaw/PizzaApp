import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers , CustomSerializer} from './store';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
 import { storeFreeze } from 'ngrx-store-freeze';

 import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
 export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument() ,

  ],
  exports: [
    ],
    providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
    bootstrap: [AppComponent]
})
export class AppModule { }
