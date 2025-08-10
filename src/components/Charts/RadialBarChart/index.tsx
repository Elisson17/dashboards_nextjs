"use client";
import Select from "@/components/Select";
import { SelectedItemRadialBarChart } from "@/utils/selectMap";
import React from "react";

export default function RadialBarChart() {
  const [selectedChart, setSelectedChart] = React.useState(
    "SimpleRadialBarChart"
  );
  const selectedItem = SelectedItemRadialBarChart.find(
    (item) => item.value === selectedChart
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectedItemRadialBarChart}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
