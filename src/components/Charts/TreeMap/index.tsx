"use client";
import Select from "@/components/Select";
import { SelectedItemTreeMap } from "@/utils/selectMap";
import React from "react";

export default function TreeMap() {
  const [selectedChart, setSelectedChart] = React.useState("SimpleTreeMap");
  const selectedItem = SelectedItemTreeMap.find(
    (item) => item.value === selectedChart
  );
  return (
    <div className="flex items-center justify-center flex-col">
      <Select
        defaultValue={selectedChart}
        items={SelectedItemTreeMap}
        placeholder="Selecione um Gráfico"
        onValueChange={setSelectedChart}
      />
      <section className="flex py-10">
        {selectedItem && selectedItem.content}
      </section>
    </div>
  );
}
