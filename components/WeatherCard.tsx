import React from "react";
import { WeatherCardProps } from "@/Types/interfaces";

export default function WeatherCard({
  property,
  icon,
  children,
}: WeatherCardProps) {
  return (
    <div className="w-[10rem] h-[7rem] rounded-[1.875rem] shadow-md bg-[#fffffa]">
      <div className="flex justify-between items-center mx-4">
        <h2 className="font-nunito text-[0.9rem] font-semibold mt-3">
          {property}
        </h2>
        <div className="w-[1.5rem] h-[1.5rem] bg-[#147872] flex justify-center items-center rounded-md mt-3">
          <i
            className={`${icon} text-[0.9375rem] text-[#fff] object-contain flex items-center justify-center`}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
