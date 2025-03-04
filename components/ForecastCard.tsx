import React from "react";
import { WeeklyForecastProps } from "@/Types/interfaces";

export default function ForecastCard({ data }: { data: WeeklyForecastProps }) {
  return (
    <div className="flex justify-between items-center w-full border h-[80px] ">
      <p>{data.day}</p>
      <img src={data.icon} alt={data.condition} />
      <p>{data.condition}</p>
      <p>
        {data.minTemp_c} - {data.maxTemp_c}
      </p>
    </div>
  );
}
