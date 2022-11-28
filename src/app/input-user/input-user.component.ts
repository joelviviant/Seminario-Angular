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
  amount!: number;

  ngOnInit(): void {
  }
  downAmount(): void{
    if(this.amount>0)
    this.amount--;
  }
  upAmount(): void{
    this.amount++;
  }

}
