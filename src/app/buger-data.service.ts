import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger } from './burger-list/burger';

const URL='https://638643bbbeaa645826787ee9.mockapi.io/burgers';

@Injectable({
  providedIn: 'root'
})
export class BugerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Burger[]>{
    return this.http.get<Burger[]>(URL);
  }
}
