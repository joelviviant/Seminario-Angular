import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { burgerListComponent } from './burger-list/burger-list.component';
import { CartComponent } from './cart/cart.component';
import {FormsModule} from '@angular/forms';
import { RocketAboutComponent } from './rocket-about/rocket-about.component';
import { RocketBurgerComponent } from './rocket-burger/rocket-burger.component';
import { RocketContactComponent } from './rocket-contact/rocket-contact.component'

@NgModule({
  declarations: [
    AppComponent,
    burgerListComponent,
    CartComponent,
    RocketAboutComponent,
    RocketBurgerComponent,
    RocketContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
