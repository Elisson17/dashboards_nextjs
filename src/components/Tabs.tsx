import React from "react";
import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  defaultValue: string;
  items: TabItem[];
}

export default function Tabs({ defaultValue, items }: TabsProps) {
  return (
    <TabsComponent
      defaultValue={defaultValue}
      className="flex w-full items-center justify-center flex-col"
    >
      <TabsList className="w-full">
        {items.map((item, index) => (
          <TabsTrigger key={index} value={item.value} className="">
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item, index) => (
        <TabsContent key={index} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </TabsComponent>
  );
}
