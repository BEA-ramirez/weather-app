import React from "react";
import WeatherCard from "./WeatherCard";
import { Progress } from "./ui/progress";

export default function TemperatureCard({ value }: { value: number }) {
  return (
    <div>
      <WeatherCard property="Feels like" icon="fi fi-ts-temperature-high">
        <h1 className="font-semibold lg:text-[1.3rem] text-[1rem] ml-[3.5rem] lg:ml-[5rem] mt-2">
          {value}°C
        </h1>
        <div className="flex justify-center w-full px-6 mt-3">
          <Progress value={value} className="w-full h-[0.7rem] bg-[#89a49f]" />
        </div>
      </WeatherCard>
    </div>
  );
}
