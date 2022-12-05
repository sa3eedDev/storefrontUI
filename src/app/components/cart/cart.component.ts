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
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.viewCart()
  }

}
