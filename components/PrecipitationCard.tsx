import React from "react";
import WeatherCard from "./WeatherCard";
import { Progress } from "./ui/progress";

export default function PrecipitationCard({ value }: { value: number }) {
  const progressBars = Array.from({ length: 10 }, (_, i) => {
    const barValue = Math.min(Math.max(value - i * 10, 0), 10); // Each bar gets at most 10
    return (barValue / 10) * 100; // Scale to 100% for progress component
  });
  return (
    <div>
      <WeatherCard property="Pressure" icon="fi fi-tr-cloud-rain">
        <h1 className="font-semibold lg:text-[1.2rem] lg:ml-[4rem] mt-3 text-[1rem] ml-[2.5rem]">
          {value} inHg
        </h1>
        <div className="flex gap-1 w-full justify-center items-center px-4 mt-4">
          {progressBars.map((bar, index) => (
            <Progress
              key={index}
              value={bar}
              className="w-[2rem] h-[0.440rem] bg-[#89a49f]"
            />
          ))}
        </div>
      </WeatherCard>
    </div>
  );
}
