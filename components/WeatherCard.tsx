import React from "react";
import { WeatherCardProps } from "@/Types/interfaces";

export default function WeatherCard({
  property,
  icon,
  children,
}: WeatherCardProps) {
  return (
    <div className="border border-[#000] w-[250px] h-[130px] rounded-[30px] shadow-md">
      <div className="flex justify-between items-center mx-8 mt-7">
        <h2 className="font-nunito text-1xl font-semibold">{property}</h2>
        <div className="w-[1.5rem] h-[1.5rem] bg-blue-400 flex justify-center items-center rounded-md">
          <i
            className={`${icon} text-[15px] text-[#fff] object-contain flex items-center justify-center`}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
