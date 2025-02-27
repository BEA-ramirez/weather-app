import React from "react";
import WeatherCard from "./WeatherCard";

export default function TemperatureCard() {
  return (
    <div>
      <WeatherCard property="Temperature" icon="fi fi-ts-temperature-high">
        {""}
      </WeatherCard>
    </div>
  );
}
