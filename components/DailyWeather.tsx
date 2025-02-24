import React from "react";

import HumidityCard from "@/components/HumidityCard";
import WindCard from "@/components/WindCard";
import PrecipitationCard from "@/components/PrecipitationCard";
import UVindex from "@/components/UVindex";
import TemperatureCard from "@/components/TemperatureCard";
import RainCard from "@/components/RainCard";
import WeeklyWeather from "./WeeklyWeather";

export default function DailyWeather({ otherStyles }: { otherStyles: string }) {
  return (
    <div
      className={`pt-5 border border-[#000] h-full flex flex-col justify-around items-center rounded-tl-[30px] rounded-bl-[30px] ${otherStyles}`}
    >
      <WeeklyWeather />
      <div className="flex flex-wrap w-[950px] justify-center gap-8 ">
        <WindCard />
        <HumidityCard />
        <PrecipitationCard />
        <UVindex />
        <TemperatureCard />
        <RainCard />
      </div>
    </div>
  );
}
