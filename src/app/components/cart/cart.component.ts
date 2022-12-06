import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { cartItem } from 'src/app/types/cart';
import { order } from 'src/app/types/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: cartItem[]
  total: number = 0;
  order: order = {
    name: "",
    total: 0,
    address: "",
    cart: [],
    id: 0

  };
  constructor(private cartService: CartService,
              private router: Router,
              private orderService: OrderService ) { }

  ngOnInit(): void {
    this.cart = this.cartService.viewCart()
    this.calculateTotal()
  }

  calculateTotal(){
    this.total = 0
    this.cart.forEach(item =>{
      this.total += item.item.price * item.quantity
    })
    this.order.total = this.total
  }

  updateCart(item: cartItem){
    this.cartService.updateItem(item)
    if(item.quantity === 0 ){
      this.cart = this.cartService.viewCart()
      alert("Itemed removed from cart")
    }
  }

  submitOrder(){
    this.order.cart = this.cart
    this.orderService.submitOrder(this.order)
    alert("Order submited!")
    this.router.navigate(["confirmation"])
  }

}
