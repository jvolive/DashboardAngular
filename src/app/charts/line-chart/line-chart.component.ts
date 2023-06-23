import { Component, OnInit } from '@angular/core';

const SAMPLE_LINECHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 54, 30], label: 'Romeu e Julieta' },
  { data: [25, 39, 60, 91, 36, 54, 50], label: 'JVO ' },
  { data: [52, 69, 70, 91, 36, 54, 50], label: 'Teste' },
];

const SAMPLE_LINECHART_LABELS: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor() {}

  lineChartData: any[] = SAMPLE_LINECHART_DATA;
  lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  lineChartLegend = true;
  lineChartOptions: any = {
    responsive: true,
  };

  ngOnInit() {}
}
