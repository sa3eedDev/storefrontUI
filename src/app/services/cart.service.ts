import { Injectable } from '@angular/core';
import { item } from '../types/item';
import { cartItem } from '../types/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: cartItem[] = []
  constructor() { }

  viewCart(): cartItem[]{
    return this.cart
  }

  addToCart(item: item, quantity: number): void{
    this.cart.push({item, quantity: quantity})
  }

  // updateItem(item: item): item{
    
  // }

}
