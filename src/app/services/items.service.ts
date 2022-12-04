import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { item } from '../types/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  url =""
  item: item;
  constructor(private http: HttpClient) { }
  getItems():Observable<item[]>{
    this.url = './../../assets/data.json'
    return this.http.get<[]>(this.url)
  }

  getItem(id: number): item{
    this.getItems().subscribe(res =>{
      this.item = res.find(x => x.id === id)
      return res.find(x => x.id === id)
      
    })
    return this.item //{id: null, name: null, price: null, url: null, description: null}
  }
}
