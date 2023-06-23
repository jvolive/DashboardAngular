import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor() {}
  pieChartDatasets = [
    {
      data: [300, 500],
      backgroundColor: ['#26547c', '#FF6B6B'],
    },
  ];
  pieChartLabels = ['Label 1', 'Label 2'];

  ngOnInit() {}
}
