import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { WineData } from "../WineData";

interface ScatterPlotProps {
  data: WineData[];
}

export const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
  const scatterOptions: echarts.EChartOption = {
    xAxis: {
      type: "value",
      name: "Color Intensity",
    },
    yAxis: {
      type: "value",
      name: "Hue",
    },
    series: [
      {
        data: data.map((d) => [d.color_intensity, d.hue]),
        type: "scatter",
      },
    ],
  };

  return <ReactECharts option={scatterOptions} />;
};
