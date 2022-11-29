
import { Component, OnInit } from '@angular/core';
import { BugerDataService } from '../buger-data.service';
import { BurgerCartService } from '../burger-cart.service';
import { Burger } from './burger';


@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss']
})
export class burgerListComponent implements OnInit {

  burgers: Burger[] =[];

  ngOnInit(): void {
    this.burgerData.getAll().subscribe(data => this.burgers =data);
  }

  constructor(
    private cart:BurgerCartService,
    private burgerData:BugerDataService
    ) { 
    
  }

  addCart(Burger: any):void{
    this.cart.addCart(Burger);
  }

  
 
}
