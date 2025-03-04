"use client";

import { useState, useEffect } from "react";
import { fetchWeather } from "@/utils/fetchWeather";
import { fetchWeatherForecast } from "@/utils/fetchWeatherForecast";
import { getWeather } from "@/utils/getWeather";
import getHourlyForecast from "@/utils/getHourlyForecast";
import getWeeklyForecast from "@/utils/getWeeklyForecast";
import getMinMaxTemp from "@/utils/getMinMaxTemp";
import { fetchWeatherAlerts } from "@/utils/fetchWeatherAlerts";
import { TemperatureProps, PageProps } from "@/Types/interfaces";
import { useNavBarContext } from "@/contexts/NavContextProvider";
import ForecastCard from "@/components/ForecastCard";
import AlertCard from "@/components/AlertCard";

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
  const [tempForecast, setTempForecast] = useState<TemperatureProps[]>([]);
  const [location, setLocation] = useState<string>("Fort Towson");
  const { activeTab, setActiveTab } = useNavBarContext();
  const [weatherAlerts, setWeatherAlerts] = useState<any>(null);

  const handleSearch = async (query: string) => {
    const data = await fetchWeatherForecast(query);
    const alerts = await fetchWeatherAlerts(query);
    if (data) {
      setWeather(data);
      console.log(data);
    } else {
      console.log("Error data found");
    }

    if (alerts) {
      setWeatherAlerts(alerts);
      console.log(alerts);
    } else {
      console.log("Error no alerts found");
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

    const updateMinMaxChart = () => {
      const hour = getMinMaxTemp(weather);
      setTempForecast(hour);
    };

    const updateWeeklyForecast = () => {
      const weekForecast = getWeeklyForecast(weather);
      setWeeklyForecast(weekForecast);
    };

    updateWeatherConditions();
    updateHourlyForecast();
    updateWeeklyForecast();
    updateMinMaxChart();
  }, [weather]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Updating weather forecast");
      handleSearch(location);
    }, 6 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  });

  if (activeTab === 2) {
    return (
      <div>
        <ForecastCard data={weeklyForecast[0]} />
      </div>
    );
  }

  if (activeTab === 1) {
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
          tempForecast={tempForecast}
        />
      </div>
    );
  }

  if (activeTab === 3) {
    return (
      <div>
        <AlertCard alert={weatherAlerts.alerts.alert[0]} />
      </div>
    );
  }
}
