export async function fetchWeather(query: string) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
  const BASE_URL = "https://api.weatherapi.com/v1";
  console.log("api key", API_KEY);

  const API_URL = `${BASE_URL}/current.json?key=${API_KEY}&q=${query}`;
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Alert not found");

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}
