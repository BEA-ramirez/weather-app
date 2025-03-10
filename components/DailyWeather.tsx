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
  weather,
}: {
  otherStyles: string;
  tempForecast: TemperatureProps[];
  values: MobileCardProps[];
  hourlyForecast: HourlyForecastProps[];
  weeklyForecast: WeeklyForecastProps[];
  weather: any;
}) {
  return (
    <div
      className={`bg-[#fafaeb] max-w-[67rem] shadow-md p-4 h-full md:flex flex-col justify-center items-center rounded-tl-[1.875rem] rounded-bl-[1.875rem] ${otherStyles}`}
    >
      <h1 className="self-start text-[0.9rem] font-semibold mt-4 ml-7 lg:text-[1.5rem] lg:ml-[4rem]">
        Welcome back!
      </h1>
      <p className="self-start text-[0.8rem] ml-7 lg:text-[1rem] lg:ml-[4rem]">
        Check out today's weather information
      </p>

      <WeeklyWeather
        tempForecast={tempForecast}
        hourForecast={hourlyForecast}
      />
      <p className="self-start ml-8 mt-10 mb-3 text-[0.9rem] font-semibold lg:ml-[4rem]">
        More details of today's weather
      </p>
      <div className="grid grid-cols-3 gap-y-[2rem] gap-x-[1rem] lg:gap-x-[5rem] ">
        <HumidityCard value={weather?.current?.humidity} />
        <WindCard value={weather?.current?.wind_kph} />
        <PrecipitationCard value={weather?.current?.pressure_in} />
        <UVindex value={weather?.current?.uv} />
        <TemperatureCard value={weather?.current?.feelslike_c} />
        <RainCard value={weather?.current?.gust_kph} />
      </div>
    </div>
  );
}
