import { Component, OnInit, Input } from '@angular/core';
import { item } from 'src/app/types/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() product : item;
  constructor() { }

  ngOnInit(): void {
  }

}
