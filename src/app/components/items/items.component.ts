import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { item } from 'src/app/types/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() product : item;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAdd(product: item, quantity: string){
    this.cartService.addToCart(product,+quantity)
    console.log(quantity)
    alert("item added to cart!!")
  }

}
