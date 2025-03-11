import React from "react";
import { WeatherApiResponse } from "@/Types/interfaces";

export default function AlertCard({
  alert,
}: {
  alert: WeatherApiResponse["alerts"]["alert"];
}) {
  return (
    <div className="w-[90%] flex flex-col border mb-4 p-5 rounded-lg bg-[#afdac6]">
      <h2 className="w-fit text-[0.8rem]  rounded-full bg-[#137773] px-2 mb-3 font-semibold uppercase text-[#f7f1d0]">
        {alert[0].msgtype}: {alert[0].event}
      </h2>
      <h1 className="text-[0.8rem]  font-bold text-justify uppercase mb-5 ">
        {alert[0].headline}
      </h1>
      <p className="text-[0.8rem] border border-green-300 text-justify mb-2">
        {alert[0].desc}
      </p>
      <div className="p-2 rounded-md bg-[#4e9087]">
        <p className="text-[0.7rem] font-bold">Instructions:</p>
        <p className="text-[0.7rem]  text-justify">{alert[0].instruction}</p>
      </div>
    </div>
  );
}
