"use client";
import Select from "@/components/Select";
import { SelectedItemAreaChart } from "@/utils/selectMap";
import React from "react";

export default function AreaChart() {
  const [selectedChart, setSelectedChart] = React.useState("SimpleAreaChart");
  const selectedItem = SelectedItemAreaChart.find(
    (item) => item.value === selectedChart
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectedItemAreaChart}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
