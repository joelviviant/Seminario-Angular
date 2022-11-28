import { Injectable } from '@angular/core';
import { Burger } from './burger-list/burger';

@Injectable({
  providedIn: 'root'
})
export class BurgerCartService {

  cartList:  Burger[]=[];

  constructor() {
  }

  addCart(burger: Burger) {
    let item : Burger = this.cartList.find((v1)=>v1.name = burger.name)!;
    if(!item){
      this.cartList.push(burger);
    }
    
    console.log(this.cartList);
  }

 
}
