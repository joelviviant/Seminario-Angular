import { Component, OnInit } from '@angular/core';
import { BurgerCartService } from '../burger-cart.service';
import { Burger } from './burger';


@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss']
})
export class burgerListComponent implements OnInit {

  burgers: Burger[] =[{
    "image" :"https://raw.githubusercontent.com/joelviviant/Seminario-Angular/master/src/assets/img/doble.jpg",
    "name":"Titan II",
    "description":"Doble Carne, Lechuga, Tomate, Cebolla, Panceta y Cheddar" ,
    "price":1100,
    "vegan":false,   
    "amount":0     
  },{
    "image":"https://raw.githubusercontent.com/joelviviant/Seminario-Angular/master/src/assets/img/doble-huevo.jpg",
    "name":"Columbia",
    "description":"Doble Notburger, Lechuga, Tomate, Cebolla, Huevo frito, Morron, Panceta y Cheddar",
    "price":1400,
    "vegan":true ,
    "amount":0  
  },{
  "image":"https://raw.githubusercontent.com/joelviviant/Seminario-Angular/master/src/assets/img/doble-morron.jpg",
  "name":"Tronador II",
  "description":"Doble Carne, Chimichurri, Mozzarella, Cebolla caramelizada y Morrones asados",
  "price":1300,
  "vegan":false ,
  "amount":0  
},{
  "image":"https://raw.githubusercontent.com/joelviviant/Seminario-Angular/master/src/assets/img/quesos.jpg",
  "name":"Falcon I",
  "description":"Notburger, Rucula, Quezo azul, Mozzarella, Cheddar y Cebolla caramelizada",
  "price":1350,
  "vegan":true  ,
  "amount":0  
},{
  "image":"https://raw.githubusercontent.com/joelviviant/Seminario-Angular/master/src/assets/img/triple.webp",
  "name":"Delta III",
  "description":"Triple Carne, Aros de cebolla, Panceta, Queso Cheddar, Huevo frito y BBQ",
  "price":1600,
  "vegan":false  ,
  "amount":0  
}]
  constructor(private cart:BurgerCartService) { 
    
  }

  addCart(Burger: any):void{
    this.cart.addCart(Burger);
  }

  ngOnInit(): void {
  }
 
}
