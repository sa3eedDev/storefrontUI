import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartItem } from 'src/app/types/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: cartItem[]
  total: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.viewCart()
    this.calculateTotal()
  }

  calculateTotal(){
    this.total = 0
    this.cart.forEach(item =>{
      this.total += item.item.price * item.quantity
    })
    console.log("total has benn calculated!")
  }

}
