import React from "react";
import { SampleChart } from "./SampleChart";
import { TemperatureProps, HourlyForecastProps } from "@/Types/interfaces";

export default function WeeklyWeather({
  tempForecast,
  hourForecast,
}: {
  tempForecast: TemperatureProps[];
  hourForecast: HourlyForecastProps[];
}) {
  return (
    <div className="bg-[#fffffa] w-[90%] h-[12rem] shadow-md rounded-[1.5625rem] mt-[2rem] flex flex-col items-center justify-center overflow-hidden p-3 ">
      <div className="w-[90%] grid grid-cols-6 gap-5">
        {hourForecast.map((forecast: HourlyForecastProps, index) => {
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
      <SampleChart tempData={tempForecast} />
    </div>
  );
}
