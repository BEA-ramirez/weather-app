import React from "react";

import HumidityCard from "@/components/HumidityCard";
import WindCard from "@/components/WindCard";
import PrecipitationCard from "@/components/PrecipitationCard";
import UVindex from "@/components/UVindex";
import TemperatureCard from "@/components/TemperatureCard";
import RainCard from "@/components/RainCard";
import WeeklyWeather from "./WeeklyWeather";
import {
  TemperatureProps,
  MobileCardProps,
  HourlyForecastProps,
  WeeklyForecastProps,
} from "@/Types/interfaces";

export default function DailyWeather({
  otherStyles,
  tempForecast,
  values,
  hourlyForecast,
  weeklyForecast,
}: {
  otherStyles: string;
  tempForecast: TemperatureProps[];
  values: MobileCardProps[];
  hourlyForecast: HourlyForecastProps[];
  weeklyForecast: WeeklyForecastProps[];
}) {
  return (
    <div
      className={`bg-[#fafaeb] shadow-md p-4 h-full md:flex flex-col  items-center rounded-tl-[1.875rem] rounded-bl-[1.875rem] ${otherStyles}`}
    >
      <h1 className="self-start text-[0.9rem] font-semibold mt-4 ml-7">
        Welcome back!
      </h1>
      <p className="self-start text-[0.8rem] ml-7">
        Check out today's weather information
      </p>
      <div className="grid grid-cols-6"></div>
      <WeeklyWeather
        tempForecast={tempForecast}
        hourForecast={hourlyForecast}
      />
      <p className="self-start ml-8 mt-10 mb-3 text-[0.9rem] font-semibold">
        More details of today's weather
      </p>
      <div className="flex flex-wrap w-full justify-center gap-5">
        <WindCard />
        <HumidityCard />
        <PrecipitationCard />
        <UVindex />
        <TemperatureCard />
        <RainCard />
      </div>
    </div>
  );
}
