import React from "react";
import { WeeklyForecastProps } from "@/Types/interfaces";

export default function ForecastCard({ data }: { data: WeeklyForecastProps }) {
  return (
    <div className="grid grid-cols-7 gap-x-5 justify-start items-center w-full  h-[4.5rem] p-8 ">
      <p className="text-[0.8rem] w-7">{data.day}</p>
      <img src={data.icon} alt={data.condition} className="w-[2.2rem]" />
      <p className="text-[0.8rem] text-[#c4c4c4]  col-span-2">
        {data.condition}
      </p>
      <p className="font-semibold text-[0.9rem]  w-8">{data.minTemp_c}</p>
      <p className="font-semibold text-[0.9rem]  w-3">-</p>
      <p className="font-semibold text-[0.9rem]  w-8">{data.maxTemp_c}</p>
    </div>
  );
}
