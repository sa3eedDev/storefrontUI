import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { item } from 'src/app/types/item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: item[];
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(res =>{
      this.items = res
    })
  }

}
