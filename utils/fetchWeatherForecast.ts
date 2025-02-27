export async function fetchWeatherForecast(query: string) {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
  const BASE_URL = "https://api.weatherapi.com/v1";
  console.log("api key", API_KEY);

  const API_URL = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}&days=7`;
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}
//https://api.weatherapi.com/v1/forecast.json?key=fb584a82625545e291e70805251802&q=Philippines&days=7
//https://api.weatherapi.com/v1/current.json?key=fb584a82625545e291e70805251802&q=Baybay, 5th District, Leyte, Eastern Visayas, 6521, Philippines
//https://api.weatherapi.com/v1/search.json?key=fb584a82625545e291e70805251802&q=Brgy. Dolores, Ormoc
//https://api.weatherapi.com/v1/alerts.json?key=fb584a82625545e291e70805251802&q=Brgy. Dolores, Ormoc
