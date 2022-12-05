import { Injectable } from '@angular/core';
import { item } from '../types/item';
import { cartItem } from '../types/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item: cartItem;
  cart: cartItem[] = []
  constructor() { }

  viewCart(): cartItem[]{
    return this.cart
  }

  addToCart(item: item, quantity: number): void{
    this.cart.push({item, quantity: quantity})
  }

  updateItem(item: cartItem): cartItem{
    this.item = this.cart.find(x => x.item.id === item.item.id)
    this.item.quantity = item.quantity
    return this.item
  }

}
