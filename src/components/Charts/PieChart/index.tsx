"use client";
import Select from "@/components/Select";
import { SelectedItemPieChart } from "@/utils/selectMap";
import React from "react";

export default function PieChart() {
  const [selectedChart, setSelectedChart] = React.useState("TwoLevelPieChart");
  const selectedItem = SelectedItemPieChart.find(
    (item) => item.value === selectedChart
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectedItemPieChart}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
