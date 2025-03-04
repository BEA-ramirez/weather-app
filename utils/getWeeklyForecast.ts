export default function getWeeklyForecast(weather: any) {
  if (!weather || !weather.forecast || !weather.forecast.forecastday) {
    console.error("Invalid weather data");
    return [];
  }

  const forecasts = weather.forecast.forecastday;
  const weeklyForecast = forecasts.map((daily: any) => ({
    maxTemp_c: daily.day.maxtemp_c,
    minTemp_c: daily.day.mintemp_c,
    day: new Date(daily.date).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    icon: daily.day.condition.icon,
    condition: daily.day.condition.text,
    chance: daily.day.daily_chance_of_rain,
  }));
  console.log(weeklyForecast);
  return weeklyForecast;
}
