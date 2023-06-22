import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor() {}
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Programs JVO', 'Romeu e Julieta', 'Beca Logistics'],
    datasets: [
      {
        data: [300, 500, 100],
      },
    ],
  };

  colors: any[] = [
    {
      backgroundColor: ['#26547C', '#FF6B6B', '#FFD166'],
    },
  ];

  ngOnInit() {}
}
