"use client";
import Select from "@/components/Select";
import { SelectedItemScatterChart } from "@/utils/selectMap";
import React from "react";

export default function ScatterChart() {
  const [selectedChart, setSelectedChart] =
    React.useState("SimpleScatterChart");
  const selectedItem = SelectedItemScatterChart.find(
    (item) => item.value === selectedChart
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectedItemScatterChart}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
