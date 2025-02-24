"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const rangeData = [
  {
    day: "05-01",
    temperature: [0, 10],
  },
  {
    day: "05-02",
    temperature: [0, 15],
  },
  {
    day: "05-03",
    temperature: [0, 12],
  },
  {
    day: "05-04",
    temperature: [0, 12],
  },
  {
    day: "05-05",
    temperature: [0, 16],
  },
  {
    day: "05-06",
    temperature: [0, 16],
  },
  {
    day: "05-07",
    temperature: [0, 12],
  },
  {
    day: "05-08",
    temperature: [0, 8],
  },
  {
    day: "05-09",
    temperature: [0, 5],
  },
];

export default function WeatherChart() {
  return (
    <AreaChart width={800} height={100} data={rangeData}>
      <XAxis dataKey="day" tick={false} />

      {rangeData.map((entry, index) => (
        <ReferenceLine
          key={index}
          x={entry.day}
          stroke="#000"
          strokeWidth={1}
        />
      ))}
      <Area dataKey="temperature" stroke="#5e9ae9" fill="#5e9ae9" />
      <Tooltip />
    </AreaChart>
  );
}
