import AreaChartConnectNulls from "@/components/Charts/AreaCharts/AreaChartConnectNulls";
import SimpleAreaChart from "@/components/Charts/AreaCharts/SimpleAreaChart";
import StackedAreaChart from "@/components/Charts/AreaCharts/StackedAreaChart";
import BrushBarChart from "@/components/Charts/BarCharts/BrushBarChart";
import SimpleBarChart from "@/components/Charts/BarCharts/SimpleBarChart";
import TinyBarChart from "@/components/Charts/BarCharts/TinyBarChart";
import DashedLineChart from "@/components/Charts/LineCharts/DashedLineChart";
import SimpleLineChart from "@/components/Charts/LineCharts/SimpleLineChart";
import TinyLineChart from "@/components/Charts/LineCharts/TinyLineChart";
import React from "react";

export interface SelectItems {
  value: string;
  label: string;
  content: React.ReactNode;
}

export const SelectItemLineChart: SelectItems[] = [
  {
    value: "SimpleLineChart",
    label: "Simple Line Chart",
    content: <SimpleLineChart />,
  },
  {
    value: "TinyLineChart",
    label: "TinyLineChart",
    content: <TinyLineChart />,
  },
  {
    value: "DashedLineChart",
    label: "DashedLineChart",
    content: <DashedLineChart />,
  },
];

export const SelectedItemAreaChart: SelectItems[] = [
  {
    value: "SimpleAreaChart",
    label: "Simple Area Chart",
    content: <SimpleAreaChart />,
  },
  {
    value: "StackedAreaChart",
    label: "Stacked Area Chart",
    content: <StackedAreaChart />,
  },
  {
    value: "AreaChartConnectNulls",
    label: "Area Chart Connect Nulls",
    content: <AreaChartConnectNulls />,
  },
];

export const SelectedItemBarChart: SelectItems[] = [
  {
    value: "TinyBarChart",
    label: "Tiny Bar Chart",
    content: <TinyBarChart />,
  },
  {
    value: "SimpleBarChart",
    label: "Simple Bar Chart",
    content: <SimpleBarChart />,
  },
  {
    value: "BrushBarChart",
    label: "Brush Bar Chart",
    content: <BrushBarChart />,
  },
];
