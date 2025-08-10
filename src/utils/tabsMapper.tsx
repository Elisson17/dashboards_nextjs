import AreaChart from "@/components/Charts/AreaCharts";
import BarChart from "@/components/Charts/BarCharts";
import ComposedChart from "@/components/Charts/ComposedChart";
import LineChart from "@/components/Charts/LineCharts";
import PieChart from "@/components/Charts/PieChart";
import RadarChart from "@/components/Charts/RadarChart";
import RadialBarChart from "@/components/Charts/RadialBarChart";
import ScatterChart from "@/components/Charts/ScatterChart";
import TreeMap from "@/components/Charts/TreeMap";
import { TabItem } from "@/components/Tabs";

export const tabsMapperIndex: TabItem[] = [
  {
    value: "LineChart",
    label: "LineChart",
    content: <LineChart />,
  },
  {
    value: "AreaChart",
    label: "AreaChart",
    content: <AreaChart />,
  },
  {
    value: "BarChart",
    label: "BarChart",
    content: <BarChart />,
  },
  {
    value: "ComposedChart",
    label: "ComposedChart",
    content: <ComposedChart />,
  },
  {
    value: "ScatterChart",
    label: "ScatterChart",
    content: <ScatterChart />,
  },
  {
    value: "PieChart",
    label: "PieChart",
    content: <PieChart />,
  },
  {
    value: "RadarChart",
    label: "RadarChart",
    content: <RadarChart />,
  },
  {
    value: "RadialBarChart",
    label: "RadialBarChart",
    content: <RadialBarChart />,
  },
  {
    value: "TreeMap",
    label: "TreeMap",
    content: <TreeMap />,
  },
];
