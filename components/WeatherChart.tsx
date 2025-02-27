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
  { day: "05-01", minTemp: 0, maxTemp: 10 },
  { day: "05-02", minTemp: 0, maxTemp: 15 },
  { day: "05-03", minTemp: 0, maxTemp: 12 },
  { day: "05-04", minTemp: 0, maxTemp: 12 },
  { day: "05-05", minTemp: 0, maxTemp: 16 },
  { day: "05-06", minTemp: 0, maxTemp: 16 },
  { day: "05-07", minTemp: 0, maxTemp: 12 },
  { day: "05-08", minTemp: 0, maxTemp: 8 },
  { day: "05-09", minTemp: 0, maxTemp: 5 },
];

export default function WeatherChart() {
  return (
    <div className="w-[800px] h-[100px]">
      <ResponsiveContainer>
        <AreaChart data={rangeData}>
          <XAxis dataKey="day" tick={false} />

          {rangeData.map((entry, index) => (
            <ReferenceLine
              key={index}
              x={entry.day}
              stroke="#000"
              strokeWidth={1}
            />
          ))}
          <Area dataKey="maxTemp" stroke="#5e9ae9" fill="#5e9ae9" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
