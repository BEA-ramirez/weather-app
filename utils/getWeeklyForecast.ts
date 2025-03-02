export default function getWeeklyForecast(weather: any) {
  if (!weather || !weather.forecast || !weather.forecast.forecastday) {
    console.error("Invalid weather data");
    return [];
  }

  const forecasts = weather.forecast.forecastday;
  const weeklyForecast = forecasts.map((daily: any) => ({
    maxTemp_c: daily.day.maxtemp_c,
    minTemp_c: daily.day.mintemp_c,
    date: new Date(daily.date).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    }),
  }));
  console.log(weeklyForecast);
  return weeklyForecast;
}
