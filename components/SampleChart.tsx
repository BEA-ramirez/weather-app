"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { WeeklyForecastProps, TemperatureProps } from "@/Types/interfaces";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  feelsLike_c: {
    label: "Temperature (°C) ",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SampleChart({ tempData }: { tempData: TemperatureProps[] }) {
  const minTemp = Math.min(...tempData.map((item) => item.feelsLike_c)) - 3;
  const maxTemp = Math.max(...tempData.map((item) => item.feelsLike_c)) + 3;
  return (
    <ChartContainer
      config={chartConfig}
      className="w-full h-[120px]  px-4 mr-0 md:px-20"
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
        <CartesianGrid vertical={true} horizontal={false} stroke="#000" />
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
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
