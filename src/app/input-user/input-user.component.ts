import { Component, Input, OnInit } from '@angular/core';
import {Burger} from '../burger-list/burger';

@Component({
  selector: 'app-input-user',
  templateUrl: './input-user.component.html',
  styleUrls: ['./input-user.component.scss']
})
export class InputUserComponent implements OnInit {

  constructor() { }

  @Input()
  
  burger!: Burger;

  ngOnInit(): void {
  }
  downAmount(burger:Burger): void{
    if(burger.amount>0)
    burger.amount--;
  }
  upAmount(burger:Burger): void{
    burger.amount++;
  }

}
