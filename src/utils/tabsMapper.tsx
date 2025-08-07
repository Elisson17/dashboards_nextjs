import AreaChart from "@/components/Charts/AreaCharts";
import BarChart from "@/components/Charts/BarCharts";
import LineChart from "@/components/Charts/LineCharts";
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
