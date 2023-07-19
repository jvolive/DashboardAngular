import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Importe o operador map

@Injectable()
export class SalesDataService {
  constructor(private _http: HttpClient) {}

  getOrders(pageIndex: number, pageSize: number) {
    return this._http
      .get('https://localhost:7015/api/order/' + pageIndex + '/' + pageSize)
      .pipe(map((res) => res)); // Use o operador map aqui
  }

  getOrdersByCustomer(n: number) {
    return this._http
      .get('https://localhost:7015/api/order/bycustomer/' + n)
      .pipe(map((res) => res)); // Use o operador map aqui
  }

  getOrdersByState() {
    return this._http
      .get('https://localhost:7015/api/order/bystate')
      .pipe(map((res) => res)); // Use o operador map aqui
  }
}
