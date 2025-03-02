import React from "react";
import MobileCard from "./MobileCard";
import { WeatherChart } from "./WeatherChart";

import {
  MobileCardProps,
  HourlyForecastProps,
  WeeklyForecastProps,
} from "@/Types/interfaces";

export default function MobileDaily({
  values,
  hourlyForecast,
  weeklyForecast,
}: {
  values: MobileCardProps[];
  hourlyForecast: HourlyForecastProps[];
  weeklyForecast: WeeklyForecastProps[];
}) {
  return (
    <div className="w-full">
      <div className="w-full p-5 border grid grid-cols-6 justify-items-center gap-2">
        {hourlyForecast.map((forecast: HourlyForecastProps, index) => {
          return (
            <div className="w-[45px] h-[45px] border" key={index}>
              <p className="text-[10px]">{forecast?.time}</p>
              <img src={forecast?.icon} alt={forecast?.condition} />
            </div>
          );
        })}

        <div className="col-span-6 w-full">
          <WeatherChart weeklyData={weeklyForecast} />
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
