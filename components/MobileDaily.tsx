import React from "react";
import MobileCard from "./MobileCard";
import { WeatherChart } from "./WeatherChart";
import { SampleChart } from "./SampleChart";

import {
  MobileCardProps,
  HourlyForecastProps,
  WeeklyForecastProps,
  TemperatureProps,
} from "@/Types/interfaces";

export default function MobileDaily({
  values,
  hourlyForecast,
  weeklyForecast,
  tempForecast,
}: {
  values: MobileCardProps[];
  hourlyForecast: HourlyForecastProps[];
  weeklyForecast: WeeklyForecastProps[];
  tempForecast: TemperatureProps[];
}) {
  return (
    <div className=" w-full h-[26rem] rounded-[2.5rem] flex flex-col justify-center items-center  bg-[#fffffa] md:hidden ">
      <div className="w-[90%] px-5 pt-3 grid grid-cols-6 justify-items-center gap-6 ">
        {hourlyForecast.map((forecast: HourlyForecastProps, index) => {
          return (
            <div
              className="w-[3.125rem] h-[3.125rem] flex flex-col justify-center items-center"
              key={index}
            >
              <p className="text-[0.65rem]">{forecast?.time}</p>
              <img
                src={forecast?.icon}
                alt={forecast?.condition}
                className="w-[2.5rem]"
              />
            </div>
          );
        })}
      </div>
      <div className="w-full  mr-0 pr-0 ">
        <SampleChart tempData={tempForecast} />
      </div>
      <div className="w-full px-5 py-3 grid grid-cols-4 justify-items-center gap-y-5 ">
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
