import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { burgerListComponent } from './burger-list/burger-list.component';
import { CartComponent } from './cart/cart.component';
import {FormsModule} from '@angular/forms';
import { RocketAboutComponent } from './rocket-about/rocket-about.component';
import { RocketBurgerComponent } from './rocket-burger/rocket-burger.component';
import { RocketContactComponent } from './rocket-contact/rocket-contact.component';
import { InputUserComponent } from './input-user/input-user.component'

@NgModule({
  declarations: [
    AppComponent,
    burgerListComponent,
    CartComponent,
    RocketAboutComponent,
    RocketBurgerComponent,
    RocketContactComponent,
    InputUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
