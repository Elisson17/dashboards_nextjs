"use client";
import Select from "@/components/Select";
import { SelectedItemRadarChart } from "@/utils/selectMap";
import React from "react";

export default function RadarChart() {
  const [selectedChart, setSelectedChart] = React.useState("SimpleRadarChart");
  const selectedItem = SelectedItemRadarChart.find(
    (item) => item.value === selectedChart
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectedItemRadarChart}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
