import AreaChart from "@/components/Charts/AreaCharts";
import BarChart from "@/components/Charts/BarCharts";
import LineChart from "@/components/Charts/LineCharts";
import DashedLineChart from "@/components/Charts/LineCharts/DashedLineChart";
import SimpleLineChart from "@/components/Charts/LineCharts/SimpleLineChart";
import TinyLineChart from "@/components/Charts/LineCharts/TinyLineChart";
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
];

export const tabsMapperLineChart: TabItem[] = [
  {
    value: "SimpleLineChart",
    label: "SimpleLineChart",
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
