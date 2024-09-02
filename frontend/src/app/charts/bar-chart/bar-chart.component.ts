import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../../services/sales-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  constructor(private _salesDataService: SalesDataService) {}

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  ngOnInit() {
    this._salesDataService.getOrders(1, 100).subscribe(
      (res: any) => {
        const localChartData = this.getChartData(res['page']['data']); // Ajuste para acessar diretamente os dados
        this.barChartLabels = localChartData.map((x) => x[0]).reverse();
        this.barChartData = [
          { data: localChartData.map((x) => x[1]), label: 'Sales' },
        ];
      },
      (error: any) => {
        // Tratar erros, se necessário
        console.error('Erro ao obter os dados de pedidos:', error);
      }
    );
  }

  getChartData(ordersData: any[]): any[] {
    const formattedOrders = ordersData.map((o) => {
      return [moment(o.placed).format('YY-MM-DD'), o.total];
    });

    const chartData: any[] = [];
    const p: any = {};

    formattedOrders.forEach((e) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        chartData.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
    });

    return chartData;
  }
}
