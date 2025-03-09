import React from "react";
import { WeeklyForecastProps } from "@/Types/interfaces";

export default function ForecastCard({ data }: { data: WeeklyForecastProps }) {
  return (
    <div className="grid grid-cols-7 gap-x-5 justify-start items-center w-full  h-[70px] p-8 ">
      <p className="text-[13px]  w-7">{data.day}</p>
      <img src={data.icon} alt={data.condition} className="w-[30px]" />
      <p className="text-[13px] text-[#c4c4c4]  col-span-2">{data.condition}</p>
      <p className="font-semibold text-[15px]  w-8">{data.minTemp_c}</p>
      <p className="font-semibold text-[15px]  w-3">-</p>
      <p className="font-semibold text-[15px]  w-8">{data.maxTemp_c}</p>
    </div>
  );
}
