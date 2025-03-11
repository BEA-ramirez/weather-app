import React from "react";
import { WeatherApiResponse } from "@/Types/interfaces";

export default function AlertCard({
  alert,
}: {
  alert: WeatherApiResponse["alerts"]["alert"][0];
}) {
  return (
    <div className="w-[90%] flex flex-col border mb-4 p-5 rounded-lg bg-[#afdac6]">
      <h2 className="w-fit text-[0.8rem] md:text-[#000] rounded-full bg-[#137773] px-2 mb-3 font-semibold uppercase text-[#f7f1d0]">
        {alert.msgtype}: {alert.event}
      </h2>
      <h1 className="text-[0.8rem] md:text-[#000] font-bold text-justify uppercase mb-5 ">
        {alert.headline}
      </h1>
      <p className="text-[0.8rem]  md:text-[#303030] border border-green-300 text-justify mb-2">
        {alert.desc}
      </p>
      <div className="p-2 rounded-md bg-[#4e9087]">
        <p className="text-[0.7rem] text-font-bold md:text-[#000] md:font-semibold">
          Instructions:
        </p>
        <p className="text-[0.7rem]  text-justify md:text-[#000]">
          {alert.instruction}
        </p>
      </div>
    </div>
  );
}
