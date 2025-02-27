"use client";
import React from "react";
import { useState } from "react";
import { fetchWeather } from "@/utils/fetchWeather";

import Navbar from "@/components/Navbar";

export default function page() {
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async (query: string) => {
    const data = await fetchWeather(query);
    if (data) {
      setWeather(data);
      console.log(data);
    } else {
      console.log("Error data found");
    }
  };

  // return (
  //   <div className="w-full h-full flex justify-between items-center bg-custom-bg bg-cover">
  //     <div>
  //       <button onClick={() => handleSearch("Philippines")}>Click</button>
  //       {weather && (
  //         <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg">
  //           <h2 className="text-xl">
  //             {weather.location.name}, {weather.location.country}
  //           </h2>
  //           <p>Temperature: {weather.current.temp_c}°C</p>
  //           <p>Condition: {weather.current.condition.text}</p>
  //           <img src={weather.current.condition.icon} alt="Weather Icon" />
  //         </div>
  //       )}
  //     </div>
  //     <DailyWeather otherStyles="right-0" />
  //   </div>
  // );

  return (
    <div className="w-full h-full flex justify-center items-center "></div>
  );
}
