"use client";
import ChartWrapper from "@/components/ChartWrapper";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dashedLineData = [
  { month: "Jan", sales: 400, expenses: 240 },
  { month: "Feb", sales: 300, expenses: 139 },
  { month: "Mar", sales: 350, expenses: 450 },
  { month: "Apr", sales: 500, expenses: 320 },
  { month: "May", sales: 420, expenses: 280 },
  { month: "Jun", sales: 480, expenses: 350 },
  { month: "Jul", sales: 530, expenses: 400 },
  { month: "Aug", sales: 450, expenses: 300 },
  { month: "Sep", sales: 470, expenses: 340 },
  { month: "Oct", sales: 520, expenses: 360 },
  { month: "Nov", sales: 610, expenses: 390 },
  { month: "Dec", sales: 700, expenses: 420 },
];

export default function DashedLineChart() {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dashedLineData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
