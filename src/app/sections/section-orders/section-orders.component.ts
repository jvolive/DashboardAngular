import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css'],
})
export class SectionOrdersComponent implements OnInit {
  constructor() {}

  orders: Order[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'PR',
        email: 'gmail@gmail.com',
      },
      total: 230,
      placed: new Date(2022, 12, 2),
      fulfilled: new Date(2022, 12, 3),
    },
    {
      id: 2,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'PR',
        email: 'gmail@gmail.com',
      },
      total: 230,
      placed: new Date(2022, 12, 2),
      fulfilled: new Date(2022, 12, 3),
    },
    {
      id: 3,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'PR',
        email: 'gmail@gmail.com',
      },
      total: 230,
      placed: new Date(2022, 12, 2),
      fulfilled: new Date(2022, 12, 3),
    },
    {
      id: 4,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'PR',
        email: 'gmail@gmail.com',
      },
      total: 230,
      placed: new Date(2022, 12, 2),
      fulfilled: new Date(2022, 12, 3),
    },
    {
      id: 5,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        state: 'PR',
        email: 'gmail@gmail.com',
      },
      total: 230,
      placed: new Date(2022, 12, 2),
      fulfilled: new Date(2022, 12, 3),
    },
  ];

  ngOnInit() {}
}
