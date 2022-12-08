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
    this.item = this.cart.find(x => x.item.id === item.id)
    if(this.item !== undefined){
      this.item.quantity += quantity
    } else {
      this.cart.push({item, quantity: quantity})
    }
  }

  updateItem(item: cartItem): cartItem{
    this.item = this.cart.find(x => x.item.id === item.item.id)
    if(item.quantity === 0){
      this.cart.forEach((product, index )=>{
        if(item.item.name === product.item.name){
          this.cart.splice(index,1)
        }
      })
    } else {
      this.item.quantity = item.quantity
    }
    return this.item
  }

}
