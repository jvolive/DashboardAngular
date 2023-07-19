import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { THEME_COLORS } from '../../shared/theme.colors';

const theme = 'Bright';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  @Input() inputData: any;
  @Input() limit: number;

  pieChartData: number[];
  pieChartLabels: string[];

  colors: any[] = [
    {
      backgroundColor: this.themeColors(theme),
      borderColor: '#111',
    },
  ];

  pieChartType = 'doughnut';

  ngOnInit() {
    this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res: any, limit?: number) {
    const allData = res.slice(0, limit);
    console.log(allData);
    this.pieChartData = allData.map(
      (x: { label: string; value: number }) => x.value
    );
    this.pieChartLabels = allData.map(
      (x: { label: string; value: number }) => x.label
    );
  }

  themeColors(setName: string): string[] {
    const c = THEME_COLORS.slice(0).find(
      (set) => set.name === setName
    )?.colorSet;

    return c || [];
  }
}
