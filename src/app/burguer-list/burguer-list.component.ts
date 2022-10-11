import { Component, OnInit } from '@angular/core';
import { Burguer } from './burguer';


@Component({
  selector: 'app-burguer-list',
  templateUrl: './burguer-list.component.html',
  styleUrls: ['./burguer-list.component.scss']
})
export class BurguerListComponent implements OnInit {

  burguers: Burguer[] =[{
    "image" :"../assets/img/doble.jpg",
    "name":"Titan II",
    "description":"Doble Carne, Lechuga, Tomate, Cebolla, Panceta y Cheddar" ,
    "price":1100,
    "vegan":false        
  },{
    "image":"../assets/img/doble-huevo.jpg",
    "name":"Columbia",
    "description":"Doble NotBurguer, Lechuga, Tomate, Cebolla, Huevo frito, Morron, Panceta y Cheddar",
    "price":1400,
    "vegan":true  
  },{
  "image":"../assets/img/doble-morron.jpg",
  "name":"Tronador II",
  "description":"Doble Carne, Chimichurri, Mozzarella, Cebolla caramelizada y Morrones asados",
  "price":1300,
  "vegan":false  
},{
  "image":"../assets/img/quesos.jpg",
  "name":"Falcon I",
  "description":"NotBurguer, Rucula, Quezo azul, Mozzarella, Cheddar y Cebolla caramelizada",
  "price":1350,
  "vegan":true  
},{
  "image":"../assets/img/triple.webp",
  "name":"Delta III",
  "description":"Triple Carne, Aros de cebolla, Panceta, Queso Cheddar, Huevo frito y BBQ",
  "price":1600,
  "vegan":false  
}]
  constructor() { }

  ngOnInit(): void {
  }

}
