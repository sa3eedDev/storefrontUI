import { Injectable } from '@angular/core';
import { order } from '../types/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: order
  constructor() { }

  submitOrder(order: order){
    this.order = order
  }

  viewOrder(){
    return this.order
  }
}
