export async function getWeather(weather: any) {
  const conditions = [
    {
      property: "Feels like",
      unit: "°",
      value: weather?.current?.feelslike_c,
    },
    {
      property: "Wind",
      unit: "km/h",
      value: weather?.current?.wind_kph,
    },
    {
      property: "Humidity",
      unit: "%",
      value: weather?.current?.humidity,
    },

    {
      property: "UV Index",
      unit: "",
      value: weather?.current?.heatindex_c,
    },
    {
      property: "Pressure",
      unit: "in",
      value: weather?.current?.pressure_in,
    },
    {
      property: "Precipitation",
      unit: "%",
      value: weather?.current?.precip_in,
    },
    {
      property: "Visibility",
      unit: "km",
      value: weather?.current?.vis_km,
    },
    {
      property: "Gust",
      unit: "km",
      value: weather?.current?.gust_kph,
    },
  ];

  return conditions;
}
