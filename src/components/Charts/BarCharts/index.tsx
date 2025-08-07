"use client";
import Select from "@/components/Select";
import { SelectedItemBarChart } from "@/utils/selectMap";
import React from "react";

export default function BarChart() {
  const [selectedChart, setSelectedChart] = React.useState("TinyBarChart");
  const selectedItem = SelectedItemBarChart.find(
    (item) => item.value === selectedChart
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectedItemBarChart}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
