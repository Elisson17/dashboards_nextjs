import React from "react";
import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectItems } from "@/utils/selectMap";

interface SelectProps {
  defaultValue: string;
  items: SelectItems[];
  placeholder: string;
  onValueChange?: (value: string) => void;
}

export default function Select({
  defaultValue,
  items,
  placeholder,
  onValueChange,
}: SelectProps) {
  return (
    <div>
      <SelectComponent
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectComponent>
    </div>
  );
}
