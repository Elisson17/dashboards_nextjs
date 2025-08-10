import AreaChartConnectNulls from "@/components/Charts/AreaCharts/AreaChartConnectNulls";
import SimpleAreaChart from "@/components/Charts/AreaCharts/SimpleAreaChart";
import StackedAreaChart from "@/components/Charts/AreaCharts/StackedAreaChart";
import BrushBarChart from "@/components/Charts/BarCharts/BrushBarChart";
import SimpleBarChart from "@/components/Charts/BarCharts/SimpleBarChart";
import TinyBarChart from "@/components/Charts/BarCharts/TinyBarChart";
import LineBarAreaComposedChart from "@/components/Charts/ComposedChart/LineBarAreaComposedChart";
import SameDataComposedChart from "@/components/Charts/ComposedChart/SameDataComposedChart";
import VerticalComposedChart from "@/components/Charts/ComposedChart/VerticalComposedChart";
import DashedLineChart from "@/components/Charts/LineCharts/DashedLineChart";
import SimpleLineChart from "@/components/Charts/LineCharts/SimpleLineChart";
import TinyLineChart from "@/components/Charts/LineCharts/TinyLineChart";
import StraightAnglePieChart from "@/components/Charts/PieChart/StraightAnglePieChart";
import TwoLevelPieChart from "@/components/Charts/PieChart/TwoLevelPieChart";
import TwoSimplePieChart from "@/components/Charts/PieChart/TwoSimplePieChart";
import SimpleRadarChart from "@/components/Charts/RadarChart/SimpleRadarChart";
import SpecifiedDomainRadarChart from "@/components/Charts/RadarChart/SpecifiedDomainRadarChart";
import SimpleRadialBarChart from "@/components/Charts/RadialBarChart/SimpleRadialBarChart";
import JointLineScatterChart from "@/components/Charts/ScatterChart/JointLineScatterChart";
import SimpleScatterChart from "@/components/Charts/ScatterChart/SimpleScatterChart";
import ThreeDimScatterChart from "@/components/Charts/ScatterChart/ThreeDimScatterChart";
import CustomContentTreemap from "@/components/Charts/TreeMap/CustomContentTreemap";
import SimpleTreemap from "@/components/Charts/TreeMap/SimpleTreemap";
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

export const SelectedItemComposedChart: SelectItems[] = [
  {
    value: "LineBarAreaComposedChart",
    label: "Line Bar Area Composed Chart",
    content: <LineBarAreaComposedChart />,
  },
  {
    value: "SameDataComposedChart",
    label: "Same Data Composed Chart",
    content: <SameDataComposedChart />,
  },
  {
    value: "VerticalComposedChart",
    label: "Vertical Composed Chart",
    content: <VerticalComposedChart />,
  },
];

export const SelectedItemScatterChart: SelectItems[] = [
  {
    value: "SimpleScatterChart",
    label: "Simple Scatter Chart",
    content: <SimpleScatterChart />,
  },
  {
    value: "ThreeDimScatterChart",
    label: "Three Dim Scatter Chart",
    content: <ThreeDimScatterChart />,
  },
  {
    value: "JointLineScatterChart",
    label: "Joint Line Scatter Chart",
    content: <JointLineScatterChart />,
  },
];

export const SelectedItemPieChart: SelectItems[] = [
  {
    value: "TwoLevelPieChart",
    label: "Two Level Pie Chart",
    content: <TwoLevelPieChart />,
  },
  {
    value: "StraightAnglePieChart",
    label: "Straight Angle Pie Chart",
    content: <StraightAnglePieChart />,
  },
  {
    value: "TwoSimplePieChart",
    label: "Two Simple Pie Chart",
    content: <TwoSimplePieChart />,
  },
];

export const SelectedItemRadarChart: SelectItems[] = [
  {
    value: "SimpleRadarChart",
    label: "Simple Radar Chart",
    content: <SimpleRadarChart />,
  },
  {
    value: "SpecifiedDomainRadarChart",
    label: "Specified Domain Radar Chart",
    content: <SpecifiedDomainRadarChart />,
  },
];

export const SelectedItemRadialBarChart: SelectItems[] = [
  {
    value: "SimpleRadialBarChart",
    label: "Simple Radial Bar Chart",
    content: <SimpleRadialBarChart />,
  },
];

export const SelectedItemTreeMap: SelectItems[] = [
  {
    value: "SimpleTreeMap",
    label: "SimpleTreeMap",
    content: <SimpleTreemap />,
  },
  {
    value: "CustomContentTreemap",
    label: "CustomContentTreemap",
    content: <CustomContentTreemap />,
  },
];
