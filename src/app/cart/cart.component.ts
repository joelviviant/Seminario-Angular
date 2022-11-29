import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { BurgerCartService } from '../burger-cart.service';
import { Burger } from '../burger-list/burger';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartList: Burger[] = [];
  constructor(private cart:BurgerCartService) {
    cart.cartList.subscribe(c=>this.cartList = c);
  }

  ngOnInit(): void {
  }

}
