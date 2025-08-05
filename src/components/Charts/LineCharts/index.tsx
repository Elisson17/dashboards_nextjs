import Tabs from "@/components/Tabs";
import { tabsMapperLineChart } from "@/utils/tabsMapper";
import React from "react";

export default function LineChart() {
  return (
    <div>
      <Tabs defaultValue="SimpleLineChart" items={tabsMapperLineChart} />
    </div>
  );
}
