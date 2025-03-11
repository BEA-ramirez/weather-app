"use client";

import { useState, useEffect } from "react";
import { fetchWeatherForecast } from "@/utils/fetchWeatherForecast";
import { getWeather } from "@/utils/getWeather";
import getHourlyForecast from "@/utils/getHourlyForecast";
import getWeeklyForecast from "@/utils/getWeeklyForecast";
import getMinMaxTemp from "@/utils/getMinMaxTemp";
import { fetchWeatherAlerts } from "@/utils/fetchWeatherAlerts";
import { TemperatureProps } from "@/Types/interfaces";
import { useNavBarContext } from "@/contexts/NavContextProvider";
import ForecastCard from "@/components/ForecastCard";
import AlertCard from "@/components/AlertCard";
import SearchPop from "@/components/SearchPop";
import MobileDaily from "@/components/MobileDaily";
import { ScrollArea } from "@/components/ui/scroll-area";
import DailyWeather from "@/components/DailyWeather";

import {
  HourlyForecastProps,
  WeeklyForecastProps,
  MobileCardProps,
  WeatherApiResponse,
} from "@/Types/interfaces";

import { Navigation } from "lucide-react";

export default function Page() {
  const [weather, setWeather] = useState<WeatherApiResponse>();
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
  const { activeTab } = useNavBarContext();
  const [weatherAlerts, setWeatherAlerts] = useState<
    WeatherApiResponse["alerts"]["alert"]
  >([]);

  const handleSearch = async (query: string) => {
    const data = await fetchWeatherForecast(query);
    const alerts = await fetchWeatherAlerts(query);

    setLocation(query);
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

  const formattedDate = weather?.location?.localtime
    ? new Date(weather.location.localtime).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      })
    : "N/A";

  useEffect(() => {
    handleSearch(location);
  }, [location]);

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
  }, [location]);

  if (activeTab === 2) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center  ">
        <div className="w-full h-[16rem] mb-[-2.5rem] bg-custom bg-cover px-4 pt-4 flex flex-col justify-start ">
          <h1 className="text-[0.6rem] flex items-center gap-1 mt-3 mb-5 justify-between">
            <div className="flex items-center gap-1">
              <Navigation size={10} />
              {weather?.location?.name}, {weather?.location?.country}
            </div>
            <SearchPop handleSubmit={handleSearch} />
          </h1>

          <p className="text-5xl">{weather?.current?.temp_c}°</p>
          <div className="flex items-center justify-start ">
            <img
              src={weather?.current?.condition?.icon}
              alt="Weather Icon"
              className="w-8"
            />
            <p className="text-[#e5e5e8] ">
              {weather?.current?.condition?.text}
            </p>
          </div>
          <p className="ml-2 text-[11px] mt-[-6px] text-[#e5e5e8]">
            Today {formattedDate}
          </p>
        </div>
        <ScrollArea className="w-full  rounded-[40px] h-[400px] bg-[#fffffa]">
          {weeklyForecast &&
            weeklyForecast.map((forecast, index: number) => (
              <ForecastCard data={forecast} key={index} />
            ))}
        </ScrollArea>
      </div>
    );
  }

  if (activeTab === 1) {
    return (
      <div className="w-full h-full flex md:flex-row flex-col justify-center items-center md:items-start md:justify-start">
        <div className="md:h-[100vh] md:w-[18rem] md:mr-[-3rem] lg:mr-[-2rem] lg:w-[22rem] w-full h-[16rem] mb-[-3rem] bg-custom md:bg-center bg-cover px-4 pt-4 flex flex-col justify-start ">
          <h1 className="text-[0.6rem] flex items-center gap-1 mt-3 mb-5 justify-between md:hidden">
            <div className="flex items-center gap-1 mr-3">
              <Navigation size={10} />
              {weather?.location?.name}, {weather?.location?.country}
            </div>
            <SearchPop handleSubmit={handleSearch} />
          </h1>
          <div className="hidden md:block">
            <SearchPop handleSubmit={handleSearch} />
          </div>

          <h1 className=" w-[9rem] text-[0.6rem] hidden items-center gap-1 mt-3  justify-between md:block">
            <div className="flex items-center gap-1 mr-3">
              <Navigation size={20} />
              {weather?.location?.name}, {weather?.location?.country}
            </div>
          </h1>
          <p className="text-[0.6rem]  text-[#000] hidden md:block">
            Today {formattedDate}
          </p>

          <p className="text-5xl md:ml-9 md:mt-16 md:text-[3.5rem] md:text-[#fff]">
            {weather?.current?.temp_c}°
          </p>
          <div className="flex items-center justify-center md:justify-start md:ml-[2rem] md:mt-3">
            <img
              src={weather?.current?.condition?.icon}
              alt="Weather Icon"
              className="w-8"
            />
            <p className="text-[#e5e5e8] md:text-[#fff] ">
              {weather?.current?.condition?.text}
            </p>
          </div>
          <p className="ml-2 text-[0.6rem] mt-[-0.3rem] text-[#e5e5e8] md:hidden">
            Today {formattedDate}
          </p>
        </div>
        <MobileDaily
          values={weatherConditions}
          hourlyForecast={hourlyForecast}
          tempForecast={tempForecast}
        />
        <DailyWeather
          otherStyles=" hidden md:w-full md:h-[100vh]"
          tempForecast={tempForecast}
          hourlyForecast={hourlyForecast}
          weather={weather}
        />
      </div>
    );
  }

  if (activeTab === 3) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center  ">
        <div className="w-full h-[16rem] mb-[-3rem] md:bg-center bg-custom bg-cover px-4 pt-4 flex flex-col justify-start">
          <h1 className="text-[0.6rem] flex items-center gap-1 mt-3 mb-5 justify-between">
            <div className="flex items-center gap-1">
              <Navigation size={10} />
              {weather?.location?.name}, {weather?.location?.country}
            </div>
            <SearchPop handleSubmit={handleSearch} />
          </h1>

          <p className="text-5xl">{weather?.current?.temp_c}°</p>
          <div className="flex items-center justify-start ">
            <img
              src={weather?.current?.condition?.icon}
              alt="Weather Icon"
              className="w-8"
            />
            <p className="text-[#e5e5e8]">
              {weather?.current?.condition?.text}
            </p>
          </div>
          <p className="ml-2 text-[11px] mt-[-6px] text-[#e5e5e8]">
            Today {formattedDate}
          </p>
        </div>

        <ScrollArea className="w-full rounded-[40px] h-[400px] bg-[#fffffa] shadow-lg pb-8 ">
          {weatherAlerts && weatherAlerts.length === 0 ? (
            <div className="w-full h-[400px] font-semibold flex justify-center items-center">
              No alerts found
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mt-6">
              {weatherAlerts?.map((alert, index) => (
                <AlertCard alert={alert} key={index} />
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    );
  }
}
