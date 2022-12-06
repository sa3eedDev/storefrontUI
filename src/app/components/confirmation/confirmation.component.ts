import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { order } from 'src/app/types/order';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: order
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.order = this.orderService.viewOrder()
    console.log(this.order)
  }

}
