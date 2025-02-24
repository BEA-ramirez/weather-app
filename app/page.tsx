"use client";
import React from "react";
import { useState } from "react";

import DailyWeather from "@/components/DailyWeather";
import WeatherChart from "@/components/WeatherChart";

export default function page() {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <div></div>
      <DailyWeather otherStyles="right-0" />
    </div>
  );
}
