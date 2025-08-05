"use client";
import ChartWrapper from "@/components/ChartWrapper";
import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const tinyLineChartData = [
  { time: "1", value: 30 },
  { time: "2", value: 45 },
  { time: "3", value: 28 },
  { time: "4", value: 50 },
  { time: "5", value: 40 },
  { time: "6", value: 60 },
  { time: "7", value: 55 },
  { time: "8", value: 70 },
  { time: "9", value: 65 },
  { time: "10", value: 80 },
];

export default function TinyLineChart() {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={tinyLineChartData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
