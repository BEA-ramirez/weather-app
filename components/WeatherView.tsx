"use client";
import React from "react";
import { useState } from "react";

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  date: Date;
  bg_color: string;
}

export default function WeatherView({
  city,
  country,
  temperature,
  condition,
  date,
}: WeatherData) {
  return (
    <div className="bg-[#233947]">
      <div>
        <p>
          {date.toLocaleDateString("en-US", { weekday: "long" })},{" "}
          {date.toLocaleDateString("en-US", { day: "numeric", month: "short" })}
        </p>
        <h2>{city}</h2>
        <h3>{country}</h3>
      </div>
      <h1>{condition}</h1>
      <img src="images/rain.png" alt={condition} />
      <h1>{temperature}° C</h1>
    </div>
  );
}
