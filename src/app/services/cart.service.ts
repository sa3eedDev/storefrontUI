import { Injectable } from '@angular/core';
import { item } from '../types/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: item[] = []
  constructor() { }

  viewCart(): item[]{
    return this.cart
  }

  addToCart(item: item): void{
    this.cart.push(item)
  }

  // updateItem(item: item): item{
    
  // }

}
