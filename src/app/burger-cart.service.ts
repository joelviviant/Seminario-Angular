import { Injectable } from '@angular/core';
import { Burger } from './burger-list/burger';

@Injectable({
  providedIn: 'root'
})
export class BurgerCartService {

  cartList:  Burger[]=[];

  constructor() {
  }

  addCart(Burger: Burger) {
    this.cartList.push(Burger);
    console.log(this.cartList.length);
  }

 
}
