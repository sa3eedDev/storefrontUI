import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { item } from 'src/app/types/item';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {

  @Input() item: item;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAdd(product: item, quantity: string){
    this.cartService.addToCart(product,+quantity)
    console.log(quantity)
    alert("item added to cart!!")
  }
}
