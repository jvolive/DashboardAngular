import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../../services/sales-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor(private _salesDataService: SalesDataService) {}

  topCustomers: string[];
  allOrders: any[];

  lineChartData: any;
  lineChartLabels: any;
  lineChartOptions: any = {
    responsive: true,
  };

  lineChartLegend = true;
  lineChartType = 'line';

  ngOnInit() {
    this._salesDataService.getOrders(1, 100).subscribe((res: any) => {
      this.allOrders = res['page']['data'];

      this._salesDataService.getOrdersByCustomer(3).subscribe((cus: any) => {
        this.topCustomers = cus.map((x: any) => x['name']);

        const allChartData = this.topCustomers.reduce((result: any[], i) => {
          result.push(this.getChartData(this.allOrders, i));
          return result;
        }, []);

        let dates = allChartData
          .map((x) => x['data'])
          .reduce((a, i) => {
            a.push(i.map((o: any) => new Date(o[0])));
            return a;
          }, []);

        dates = [].concat.apply([], dates);

        const r = this.getCustomerOrdersByDate(allChartData, dates)['data'];
        this.lineChartLabels = r[0]['orders'].map((o: any) => o['date']);

        this.lineChartData = [
          {
            data: r[0].orders.map((x: any) => x.total),
            label: r[0]['customer'],
          },
          {
            data: r[1].orders.map((x: any) => x.total),
            label: r[1]['customer'],
          },
          {
            data: r[2].orders.map((x: any) => x.total),
            label: r[2]['customer'],
          },
        ];
      });
    });
  }

  getChartData(allOrders: any[], name: string) {
    const customerOrders: any[] = allOrders.filter(
      (o: any) => o.customer.name === name
    );

    const formattedOrders = customerOrders.map((o: any) => {
      return {
        placed: moment(o.placed).format('YY-MM-DD'),
        total: o.total,
      };
    });

    return { customer: name, data: formattedOrders };
  }

  getCustomerOrdersByDate(orders: any[], dates: Date[]) {
    const customers = this.topCustomers;
    const prettyDates = dates.map((x) => this.toFriendlyDate(x));
    const uniqueDates = Array.from(new Set(prettyDates)).sort();

    const result: any = { data: [] };

    customers.forEach((customer: string) => {
      const customerOrders: any[] = [];
      uniqueDates.forEach((date: string) => {
        const total = this.getCustomerDateTotal(date, customer);
        customerOrders.push({ date: date, total: total });
      });
      result.data.push({ customer: customer, orders: customerOrders });
    });

    return result;
  }

  toFriendlyDate(date: Date) {
    return moment(date).endOf('day').format('YY-MM-DD');
  }

  getCustomerDateTotal(date: string, customer: string) {
    const filteredOrders = this.allOrders.filter(
      (o: any) =>
        o.customer.name === customer && this.toFriendlyDate(o.placed) === date
    );

    const total = filteredOrders.reduce(
      (sum: number, order: any) => sum + order.total,
      0
    );
    return total;
  }
}
