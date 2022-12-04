import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemsService } from 'src/app/services/items.service';
import { item } from 'src/app/types/item';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  id: number;
  items: item[];
  item: item;
  constructor(private cartService: CartService,
    private itemsService: ItemsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.itemsService.getItems().subscribe(res =>{
      this.item = res.find(x => x.id === this.id)
    })

  }

  onAdd(product: item, quantity: string){
    this.cartService.addToCart(product,+quantity)
    console.log(quantity)
    alert("item added to cart!!")
  }
  
}
