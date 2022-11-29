import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
  
  deleteCart(Burger: any):void{
    this.cart.deleteCart(Burger);
  }
   submit(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su pedido fue realizado con éxito',
      showConfirmButton: false,
      timer: 2000,
      backdrop: `
        rgba(0,0,123,0.4)`
    })
    
  }  
  

}
