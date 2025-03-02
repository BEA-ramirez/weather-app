"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { WeeklyForecastProps } from "@/Types/interfaces";

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
  maxTemp_c: {
    label: "Max Temp (°C)",
    color: "hsl(var(--chart-2))",
  },
  minTemp_c: {
    label: "Min Temp (°C)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function WeatherChart({
  weeklyData,
}: {
  weeklyData: WeeklyForecastProps[];
}) {
  const minTemp = Math.min(...weeklyData.map((d) => d.minTemp_c)) - 2;
  const maxTemp = Math.max(...weeklyData.map((d) => d.maxTemp_c)) + 2;
  return (
    <Card>
      <CardHeader className="hidden">
        <CardTitle>Area Chart - Linear</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[100px]">
          <div className="w-full  h-[100px] bg-slate-400 ">
            <ResponsiveContainer>
              <AreaChart accessibilityLayer data={weeklyData}>
                <CartesianGrid
                  vertical={true}
                  horizontal={false}
                  strokeWidth={3}
                  stroke="hsl(var(--chart-1))"
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={5}
                  stroke="gray"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  domain={[minTemp, maxTemp]}
                  stroke="gray"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" hideLabel />}
                />
                <Area
                  dataKey="minTemp_c"
                  type="monotone"
                  strokeWidth={3}
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.3}
                />

                <Area
                  dataKey="maxTemp_c"
                  type="monotone"
                  strokeWidth={3}
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
      <CardFooter className="hidden">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
