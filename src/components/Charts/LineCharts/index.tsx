"use client";
import Select from "@/components/Select";
import { SelectItemLineChart } from "@/utils/selectMap";
import React from "react";

export default function LineChart() {
  const [selectedChart, setSelectedChart] = React.useState("SimpleLineChart");
  const selectedItem = SelectItemLineChart.find(
    (item) => item.value === selectedChart
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectItemLineChart}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
