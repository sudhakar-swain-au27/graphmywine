import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { WineData } from "../WineData";

interface BarChartProps {
  data: WineData[];
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const barData = data.reduce((acc, curr) => {
    const key = curr.alcohol.toString();
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr.malic_acid);
    return acc;
  }, {});

  const barOptions: echarts.EChartOption = {
    xAxis: {
      type: "category",
      name: "Alcohol",
      data: Object.keys(barData),
    },
    yAxis: {
      type: "value",
      name: "Malic Acid",
    },
    series: [
      {
        data: Object.values(barData).map(
          (d) => d.reduce((acc, curr) => acc + curr, 0) / d.length
        ),
        type: "bar",
      },
    ],
  };

  return <ReactECharts option={barOptions} />;
};
