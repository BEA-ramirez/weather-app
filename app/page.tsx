"use client";

import { useState, useEffect } from "react";
import { fetchWeather } from "@/utils/fetchWeather";
import { fetchWeatherForecast } from "@/utils/fetchWeatherForecast";
import { getWeather } from "@/utils/getWeather";

import MobileDaily from "@/components/MobileDaily";

import { MobileCardProps } from "@/Types/interfaces";

export default function page() {
  const [weather, setWeather] = useState<any>(null);
  const [weatherConditions, setWeatherConditions] = useState<MobileCardProps[]>(
    []
  );
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
    const fetchInitialData = async () => {
      await handleSearch("Philippines");
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    if (!weather) return; // Ensure weather is not null before calling getWeather

    const updateWeatherConditions = async () => {
      const conditions = await getWeather(weather);
      setWeatherConditions(conditions);
    };

    updateWeatherConditions();
  }, [weather]);

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
      <MobileDaily values={weatherConditions} />
    </div>
  );
}
