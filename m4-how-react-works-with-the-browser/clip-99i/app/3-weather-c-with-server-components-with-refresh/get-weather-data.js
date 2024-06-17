// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.
//   reference: https://react.dev/reference/react/Suspense#suspense

import locations from "./city-list.json";

let cache = new Map();

export function getWeatherDataCachePromise(url) {
  if (!cache.has(url)) {
    cache.set(url, getWeatherData(url));
  }
  return cache.get(url);
}

const fetchWeatherApi = async (url, params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${url}?${queryString}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export async function getWeatherData(url) {
  const params = {
    latitude: locations.map((loc) => loc.latitude),
    longitude: locations.map((loc) => loc.longitude),
    current_weather: true,
  };

  try {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(1000); // Simulate a slow network
    const responses = await fetchWeatherApi(url, params);
    return responses.map((response, index) => {
      const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
      const metersPerSecondToMilesPerHour = (mps) => mps * 2.237;

      return {
        location: locations[index],
        temperature: celsiusToFahrenheit(response.current_weather.temperature),
        weatherCode: response.current_weather.weathercode,
        windSpeed: metersPerSecondToMilesPerHour(
          response.current_weather.windspeed,
        ),
        windDirection: response.current_weather.winddirection,
      };
    });
  } catch (error) {
    console.error("Error processing weather data:", error);
    throw error;
  }
}
