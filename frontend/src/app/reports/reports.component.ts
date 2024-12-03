import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Raised Funds', 'Gifts'],
    datasets: [
      {
        data: [4684513, 6088],
        backgroundColor: ['#4CAF50', '#FF9800'],
      },
    ],
  };

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  public pieChartType: ChartType = 'pie';

  constructor() {}

  ngOnInit(): void {}
}
