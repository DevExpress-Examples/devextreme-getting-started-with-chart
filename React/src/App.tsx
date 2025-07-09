import './App.css';

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import {
  BackgroundColor,
  Chart,
  CommonPaneSettings,
  ConstantLine,
  Label,
  Series,
  Tooltip,
  ValueAxis,
} from 'devextreme-react/chart';
import { registerGradient } from 'devextreme-react/common/charts';
import { formatNumber } from 'devextreme/localization';

const chartData = [
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

function calculateAverageSpend(): number {
  const sum = chartData.reduce((accumulator, { actualSpend }) => accumulator + actualSpend, 0);

  return sum / chartData.length;
}

const averageSpend = calculateAverageSpend();

function customizeTooltip(data: { value: number; seriesName: string }): { text: string } {
  if (data.seriesName === 'Budget') {
    return { text: formatNumber(data.value, 'currency') };
  }
  const isValueAboveAverage = data.value > calculateAverageSpend();
  if (isValueAboveAverage) {
    return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - averageSpend, 'currency')} above average spending.` };
  }

  return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(averageSpend - data.value, 'currency')} below average spending.` };
}

const chartGradient = registerGradient('linear', {
  colors: [{
    offset: '20%',
    color: '#dee4ff',
  }, {
    offset: '90%',
    color: '#ffdeff',
  }],
});

function App(): JSX.Element {
  return (
    <>
      <Chart
        dataSource={chartData}
        title='Target vs Actual Spending 2024'
      >
        <Series
          type='bar'
          argumentField='month'
          valueField='targetSpend'
          name='Budget'
          color='#5996ff'
        />
        <Series
          type='spline'
          argumentField='month'
          valueField='actualSpend'
          name='Amount Spent'
          color='#cb4bfa'
        />
        <ValueAxis>
          <ConstantLine
            value={averageSpend}
            color='#0000c7'
          >
            <Label text='Yearly Spend Average' />
          </ConstantLine>
        </ValueAxis>
        <Tooltip
          enabled={true}
          customizeTooltip={customizeTooltip}
        />
        <CommonPaneSettings>
          <BackgroundColor
            base='#ffffff'
            fillId={chartGradient}
          >
          </BackgroundColor>
        </CommonPaneSettings>
      </Chart>
    </>
  );
}

export default App;
