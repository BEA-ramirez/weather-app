import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { WeatherApiResponse } from "@/Types/interfaces";
import AlertCard from "./AlertCard";
import { CircleAlert } from "lucide-react";
import { TrendingUpDown } from "lucide-react";
import { WeeklyForecastProps } from "@/Types/interfaces";
import ForecastCard from "./ForecastCard";

export default function Notifs({
  weatherAlerts,
  weeklyForecast,
}: {
  weatherAlerts: WeatherApiResponse["alerts"]["alert"];
  weeklyForecast: WeeklyForecastProps[];
}) {
  return (
    <div className="hidden md:flex w-[5rem] justify-around">
      <Sheet>
        <SheetTrigger>
          <TrendingUpDown color="#137773" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Weekly Forecast</SheetTitle>
            <SheetDescription>
              <ScrollArea>
                {weeklyForecast && weeklyForecast?.length > 0 ? (
                  weeklyForecast?.map((forecast, index: number) => (
                    <ForecastCard data={forecast} key={index} />
                  ))
                ) : (
                  <div>No forecast data available</div>
                )}
              </ScrollArea>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger>
          <CircleAlert color="#137773" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Weather Alerts</SheetTitle>
            <SheetDescription>
              <ScrollArea className="">
                {weatherAlerts?.length === 0 ? (
                  <div className="w-full h-[400px] font-semibold flex justify-center items-center">
                    No alerts found
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center mt-6">
                    {weatherAlerts.map((alert, index) => (
                      <AlertCard alert={alert} key={index} />
                    ))}
                  </div>
                )}
              </ScrollArea>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
