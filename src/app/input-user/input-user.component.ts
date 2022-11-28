import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  
  @Output()
  amountChange: EventEmitter<number> =new EventEmitter<number>();

  ngOnInit(): void {
  }
  downAmount(): void{
    if(this.amount>0)
    this.amount--;
    this.amountChange.emit(this.amount);
  }
  upAmount(): void{
    this.amount++;
    this.amountChange.emit(this.amount);
  }
  updateChange(event:any): void{
    this.amountChange.emit(this.amount);
  }

}
