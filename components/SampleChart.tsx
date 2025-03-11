"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { TemperatureProps } from "@/Types/interfaces";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  feelsLike_c: {
    label: "Temperature (°C) ",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

export function SampleChart({ tempData }: { tempData: TemperatureProps[] }) {
  const minTemp = Math.min(...tempData.map((item) => item.feelsLike_c)) - 3;
  const maxTemp = Math.max(...tempData.map((item) => item.feelsLike_c)) + 3;
  return (
    <ChartContainer
      config={chartConfig}
      className="w-full h-[7.5rem]  px-4 mr-0 "
    >
      <AreaChart
        data={tempData}
        margin={{
          top: 10,
          right: 30,
          left: 30,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={true} horizontal={false} stroke="#89a5a0" />
        <XAxis
          dataKey="time"
          tickLine={false}
          tickMargin={8}
          tickFormatter={(value) =>
            value.length > 5 ? value.slice(0, 5) : value
          }
        />

        <YAxis domain={[minTemp, maxTemp]} hide={true} allowDecimals={true} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />
        <Area
          dataKey="feelsLike_c"
          type="linear"
          fill="hsl(172, 30%, 44%)"
          fillOpacity={0.4}
          stroke="hsl(172, 30%, 44%)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
