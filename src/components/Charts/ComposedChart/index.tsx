"use client";
import Select from "@/components/Select";
import { SelectedItemComposedChart } from "@/utils/selectMap";
import React from "react";

export default function ComposedChart() {
  const [selectedChart, setSelectedChart] = React.useState(
    "LineBarAreaComposedChart"
  );
  const selectedItem = SelectedItemComposedChart.find(
    (item) => item.value === selectedChart
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectedItemComposedChart}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
