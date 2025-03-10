import React from "react";
import WeatherCard from "./WeatherCard";
import { Progress } from "./ui/progress";

export default function RainCard({ value }: { value: number }) {
  return (
    <div>
      <WeatherCard property="Gust" icon="fi fi-rr-umbrella">
        <h1 className="font-semibold text-[1.3rem] ml-[5rem] mt-2">
          {value}km/h
        </h1>
        <div className="flex justify-center w-full px-6 mt-3">
          <Progress value={value} className="w-full h-[0.7rem] bg-[#89a49f]" />
        </div>
      </WeatherCard>
    </div>
  );
}
