import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { item } from '../types/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  url =""
  constructor(private http: HttpClient) { }
  getItems():Observable<item[]>{
    this.url = './../../assets/data.json'
    return this.http.get<[]>(this.url)
  }
}
