import React from "react";
import MobileCard from "./MobileCard";
import { WeatherChart } from "./WeatherChart";

import { MobileCardProps } from "@/Types/interfaces";

export default function MobileDaily({ values }: { values: MobileCardProps[] }) {
  return (
    <div className="w-full">
      <div className="w-full p-5 border grid grid-cols-6 justify-items-center gap-2">
        <div className="w-[45px] h-[45px] border"></div>
        <div className="w-[45px] h-[45px] border"></div>
        <div className="w-[45px] h-[45px] border"></div>
        <div className="w-[45px] h-[45px] border"></div>
        <div className="w-[45px] h-[45px] border"></div>
        <div className="w-[45px] h-[45px] border"></div>
        <div className="col-span-6 w-full">
          <WeatherChart />
        </div>
      </div>
      <div className="w-full p-5 border grid grid-cols-4 justify-items-center gap-2">
        {values.map((value: MobileCardProps, index) => {
          return (
            <MobileCard
              key={index}
              property={value.property}
              value={value.value}
              unit={value.unit}
            />
          );
        })}
      </div>
    </div>
  );
}
