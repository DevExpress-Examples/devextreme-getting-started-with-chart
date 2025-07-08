<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxChart, { DxBackgroundColor, DxCommonPaneSettings, DxConstantLine, DxLabel, DxSeries, DxTooltip, DxValueAxis } from 'devextreme-vue/chart';
import { registerGradient } from 'devextreme-vue/common/charts';
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

function calculateAverageSpend() {
  let sum = 0;

  chartData.forEach((data) => {
    sum += data.actualSpend;
  });

  return sum / chartData.length;
}

function customizeTooltip(data: { value: number }) {
  const isValueAboveAverage = data.value > calculateAverageSpend();
  const aboveText = `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - calculateAverageSpend(), 'currency')} above average spending.`;
  const belowText = `${formatNumber(data.value, 'currency')}\n${formatNumber(calculateAverageSpend() - data.value, 'currency')} below average spending.`;
  return { text: isValueAboveAverage ? aboveText : belowText };
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
</script>
<template>
  <div>
    <DxChart
      title="Target vs Actual Spending 2024"
      :data-source="chartData"
    >
      <DxSeries
        type="bar"
        argument-field="month"
        value-field="targetSpend"
        name="Budget"
        color="#5996ff"
      />
      <DxSeries
        type="spline"
        argument-field="month"
        value-field="actualSpend"
        name="Amount Spend"
        color="#cb4bfa"
      />
      <DxValueAxis>
        <DxConstantLine
          :value="calculateAverageSpend()"
          color="#0000c7"
        >
          <DxLabel
            text="Yearly Spend Average"
          />
        </DxConstantLine>
      </DxValueAxis>
      <DxTooltip
        :enabled="true"
        :customize-tooltip="customizeTooltip"
      />
      <DxCommonPaneSettings>
        <DxBackgroundColor
          base="#ffffff"
          :fill-id="chartGradient"
        />
      </DxCommonPaneSettings>
    </DxChart>
  </div>
</template>
