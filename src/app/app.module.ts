import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurguerListComponent } from './burguer-list/burguer-list.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BurguerListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
