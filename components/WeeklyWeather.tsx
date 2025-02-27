import React from "react";

import WeatherChart from "@/components/WeatherChart";

export default function WeeklyWeather() {
  return (
    <div className="w-[810px] h-[210px] border border-[#000] rounded-[25px] mt-5 flex items-end justify-center overflow-hidden">
      <WeatherChart />
    </div>
  );
}
