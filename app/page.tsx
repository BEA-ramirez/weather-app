"use client";

import { useState, useEffect } from "react";
import { fetchWeather } from "@/utils/fetchWeather";
import { fetchWeatherForecast } from "@/utils/fetchWeatherForecast";
import { getWeather } from "@/utils/getWeather";
import getHourlyForecast from "@/utils/getHourlyForecast";
import getWeeklyForecast from "@/utils/getWeeklyForecast";

import MobileDaily from "@/components/MobileDaily";

import {
  HourlyForecastProps,
  WeeklyForecastProps,
  MobileCardProps,
} from "@/Types/interfaces";

export default function Page() {
  const [weather, setWeather] = useState<any>(null);
  const [weatherConditions, setWeatherConditions] = useState<MobileCardProps[]>(
    []
  );
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecastProps[]>(
    []
  );
  const [weeklyForecast, setWeeklyForecast] = useState<WeeklyForecastProps[]>(
    []
  );
  const [location, setLocation] = useState<string>("Philippines");

  const handleSearch = async (query: string) => {
    const data = await fetchWeatherForecast(query);
    if (data) {
      setWeather(data);
      console.log(data);
    } else {
      console.log("Error data found");
    }
  };

  useEffect(() => {
    handleSearch(location);
  }, []);

  useEffect(() => {
    if (!weather) return; // Ensure weather is not null before calling getWeather

    const updateWeatherConditions = async () => {
      const conditions = await getWeather(weather);
      setWeatherConditions(conditions);
    };

    const updateHourlyForecast = () => {
      const forecast = getHourlyForecast(weather);
      setHourlyForecast(forecast);
    };

    const updateWeeklyForecast = () => {
      const week = getWeeklyForecast(weather);
      setWeeklyForecast(week);
    };

    updateWeatherConditions();
    updateHourlyForecast();
    updateWeeklyForecast();
  }, [weather]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Updating weather forecast");
      handleSearch(location);
    }, 6 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <div className="w-full h-full">
        <h1>
          {weather?.location?.name}, {weather?.location?.country}
        </h1>
        <p>{weather?.current?.temp_c}°</p>
        <div>
          <img src={weather?.current?.condition?.icon} alt="Weather Icon" />
          <p>{weather?.current?.condition?.text}</p>
        </div>
      </div>
      <MobileDaily
        values={weatherConditions}
        hourlyForecast={hourlyForecast}
        weeklyForecast={weeklyForecast}
      />
    </div>
  );
}
