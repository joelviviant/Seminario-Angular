import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Burger } from './burger-list/burger';

@Injectable({
  providedIn: 'root'
})
export class BurgerCartService {

  private _cartList: Burger[] = [];

  cartList: BehaviorSubject<Burger[]> = new BehaviorSubject(this._cartList);

  constructor() {}

  addCart(burger: Burger){
    let item : Burger = this._cartList.find((v1)=>v1.name === burger.name)!;
   
    if(!item&&burger.amount!=0){
      this._cartList.push({...burger});
      
    }else{
      item.amount += burger.amount;
    }
    this.cartList.next(this._cartList);
 
  }
  deleteCart(burger: Burger){
    let item : Burger = this._cartList.find((v1)=>v1.name === burger.name)!;
    let indice = this._cartList.findIndex((v1)=>v1.name === burger.name)!;
    if (item){
      this._cartList.splice(indice,1);
    }
  }
 
}
