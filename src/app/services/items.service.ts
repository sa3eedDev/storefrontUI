import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  url =""
  constructor(private http: HttpClient) { }
  getItems():Observable<[]>{
    this.url = './../../assets/data.json'
    return this.http.get<[]>(this.url)
  }
}
