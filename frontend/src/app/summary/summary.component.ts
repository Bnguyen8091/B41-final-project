import { Component } from '@angular/core';
import { ChartConfiguration, ChartType, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Undergraduate', 'Graduate', 'First-Year Students', 'Transfer Students'],
    datasets: [
      {
        label: 'Student Enrollment',
        data: [23981, 6317, 4501, 2348],
        backgroundColor: ['#4CAF50', '#FF9800', '#03A9F4', '#9C27B0'],
      },
    ],
  };

  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  navigateToAdmissions(): void {
    window.open('https://admissions.charlotte.edu/explore/', '_blank');
  }
}
