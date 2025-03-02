export default function getHourlyForecast(weather: any) {
  if (!weather || !weather.forecast || !weather.forecast.forecastday) {
    console.error("Invalid weather data");
    return [];
  }

  // Get the hourly forecast for the first day
  const todayForecast = weather.forecast.forecastday[0].hour;
  const nextDayForecast = weather.forecast.forecastday[1].hour;

  const currentHour = new Date().getHours();

  const remainingForecast = todayForecast.filter(
    (forecast: any) => new Date(forecast.time).getHours() >= currentHour
  );
  const fullForecast = [...remainingForecast, ...nextDayForecast].slice(0, 6);

  const hourlyForecast = fullForecast.map((forecast: any) => ({
    time: new Date(forecast.time).toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    icon: forecast.condition.icon,
    condition: forecast.condition.text,
  }));
  console.log(hourlyForecast);

  return hourlyForecast;
}
