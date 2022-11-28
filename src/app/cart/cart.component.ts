import { Component, OnInit } from '@angular/core';
import { BurgerCartService } from '../burger-cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cart:BurgerCartService) { }

  ngOnInit(): void {
  }

}
