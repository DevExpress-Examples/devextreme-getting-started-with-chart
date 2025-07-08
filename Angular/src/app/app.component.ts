import { Component } from '@angular/core';

import { registerGradient } from 'devextreme-angular/common/charts';
import { formatNumber } from 'devextreme/localization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chartData = [
    { month: 'January', targetSpend: 12000, actualSpend: 9500 },
    { month: 'February', targetSpend: 15500, actualSpend: 16500 },
    { month: 'March', targetSpend: 13500, actualSpend: 12000 },
    { month: 'April', targetSpend: 16000, actualSpend: 14000 },
    { month: 'May', targetSpend: 17000, actualSpend: 18500 },
    { month: 'June', targetSpend: 20000, actualSpend: 17500 },
    { month: 'July', targetSpend: 14500, actualSpend: 11000 },
    { month: 'August', targetSpend: 21000, actualSpend: 22500 },
    { month: 'September', targetSpend: 19000, actualSpend: 18000 },
    { month: 'October', targetSpend: 22000, actualSpend: 25000 },
    { month: 'November', targetSpend: 16000, actualSpend: 14500 },
    { month: 'December', targetSpend: 25000, actualSpend: 27000 },
  ];

  chartGradient = registerGradient('linear', {
    colors: [{
      offset: '20%',
      color: '#dee4ff',
    }, {
      offset: '90%',
      color: '#ffdeff',
    }],
  });

  // Type () => number (returned by calculateAverageSpend()) cannot be directly assigned to the value property of the dxi-constant-line selector.
  averageSpend = this.calculateAverageSpend();

  calculateAverageSpend(): number {
    let sum = 0;

    this.chartData.forEach((data) => {
      sum += data.actualSpend;
    });

    return sum / this.chartData.length;
  }

  customizeTooltip: (data: { value: number; seriesName: string }) => { text: string } = (data: { value: number; seriesName: string }) => {
    if (data.seriesName === 'Budget') {
      return { text: formatNumber(data.value, 'currency') };
    }
    const isValueAboveAverage = data.value > this.averageSpend;
    const aboveText = `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - this.averageSpend, 'currency')} above average spending.`;
    const belowText = `${formatNumber(data.value, 'currency')}\n${formatNumber(this.averageSpend - data.value, 'currency')} below average spending.`;
    return { text: isValueAboveAverage ? aboveText : belowText };
  };
}
