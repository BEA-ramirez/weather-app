import React from "react";
import WeatherCard from "./WeatherCard";
import { Progress } from "./ui/progress";

export default function UVindex({ value }: { value: number }) {
  const progressBars = Array.from({ length: 5 }, (_, i) => {
    const barValue = Math.min(Math.max(value - i * 20, 0), 20); // Each bar gets at most 20
    return (barValue / 20) * 100; // Scale to 100% for progress component
  });
  return (
    <div>
      <WeatherCard property="UV index" icon="fi fi-tr-brightness">
        <h1 className="lg:ml-[6.5rem] mt-3 font-semibold lg:text-[1.4rem] text-[1rem] ml-[4.4rem]">
          {value}
        </h1>
        <div className="flex gap-1 px-3 mt-3">
          {progressBars.map((bar, index) => (
            <Progress
              key={index}
              value={bar}
              className="w-[3rem] h-[0.5rem] bg-[#89a49f]"
            />
          ))}
        </div>
      </WeatherCard>
    </div>
  );
}
