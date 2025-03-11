"use client";
import React from "react";
import WeatherCard from "./WeatherCard";
import { RadialBar, RadialBarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  wind: {
    label: "Wind",
    color: "hsl(var(--chart-1))",
  },
  total: {
    label: "Total",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function WindCard({ value }: { value: number }) {
  const chartData = [{ wind: value, total: 100 - value }];
  return (
    <div>
      <WeatherCard property="Wind" icon="fi fi-ts-wind">
        <ChartContainer
          config={chartConfig}
          className=" lg:h-[10rem] lg:w-[10rem] lg:ml-8 h-[10rem] w-[10rem]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={60}
            outerRadius={90}
            margin={{ bottom: 0, right: 0 }}
          >
            <RadialBar
              dataKey="total"
              stackId="a"
              cornerRadius={5}
              fill="hsl(169, 13%, 59%)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="wind"
              stackId="a"
              cornerRadius={5}
              fill="hsl(172, 30%, 44%)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
        <h1 className="z-10 absolute lg:bottom-4 lg:left-[4.8rem] font-semibold bottom-2 left-[2.8rem]">
          {value} km/h
        </h1>
      </WeatherCard>
    </div>
  );
}
