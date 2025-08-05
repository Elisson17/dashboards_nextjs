"use client";
import React, { ReactNode } from "react";

interface ChartWrapperProps {
  children: ReactNode;
  title?: string;
}

export default function ChartWrapper({ children, title }: ChartWrapperProps) {
  return (
    <div className="w-[600px] h-[400px] border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-md max-w-[600px] items-center justify-center ">
      {title && (
        <h3 style={{ marginBottom: "12px", fontWeight: "600", color: "#333" }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
