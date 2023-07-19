import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
import { SalesDataService } from '../../services/sales-data.service';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css'],
})
export class SectionOrdersComponent implements OnInit {
  constructor(private _salesData: SalesDataService) {}

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.loading = true; // Show loading indicator
    this._salesData.getOrders(this.page, this.limit).subscribe(
      (apiResponse: any) => {
        console.log('Result from getOrders: ', apiResponse);
        this.orders = apiResponse['page']['data'];
        this.total = apiResponse['page']['total'];
        this.loading = false; // Hide loading indicator
      },
      (error) => {
        console.error('Error while fetching orders: ', error);
        this.loading = false; // In case of an error, hide loading indicator
      }
    );
  }

  goToPrevious(): void {
    console.log('Previous Button Clicked!');
    this.page--;
    this.getOrders();
  }

  goToNext(): void {
    this.page++;
    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
  }
}
