import React from "react";
import WeatherCard from "./WeatherCard";
import { Progress } from "./ui/progress";

export default function HumidityCard({ value }: { value: number }) {
  const temp = value;
  // Distribute humidity into three progress bars
  const firstBar = Math.min(value, 30); // Max 30
  const secondBar = value > 30 ? Math.min(value - 30, 30) : 0; // Max 30
  const thirdBar = value > 60 ? Math.min(value - 60, 40) : 0; // Max 40

  return (
    <div>
      <WeatherCard property="Humidity" icon="fi fi-tc-raindrops">
        <div className="font-semibold text-[1.2rem] ml-[6rem] mt-3 mb-1">
          {temp}%
        </div>
        <div className="flex gap-1 w-full h-10 justify-center items-center">
          <Progress
            value={(firstBar / 30) * 100}
            className="w-[3.75rem] h-[0.7rem]"
          />
          <Progress
            value={(secondBar / 30) * 100}
            className="w-[3.75rem] h-[0.7rem]"
          />
          <Progress
            value={(thirdBar / 40) * 100}
            className="w-[3.75rem] h-[0.7rem] bg-[#89a49f]"
          />
        </div>
      </WeatherCard>
    </div>
  );
}
