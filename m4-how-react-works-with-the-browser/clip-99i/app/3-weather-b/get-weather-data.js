
const fetchWeatherApi = async (url, params) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${url}?${queryString}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default async function getWeatherData(locations) {
  const url = 'https://api.open-meteo.com/v1/forecast';
  const params = {
    latitude: locations.map(loc => loc.latitude),
    longitude: locations.map(loc => loc.longitude),
    current_weather: true // This ensures we get the current weather
  };

  try {
    const responses = await fetchWeatherApi(url, params);
    return responses.map((response, index) => {
      const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
      const metersPerSecondToMilesPerHour = (mps) => mps * 2.237;

      return {
        location: locations[index],
        temperature: celsiusToFahrenheit(response.current_weather.temperature),
        weatherCode: response.current_weather.weathercode,
        windSpeed: metersPerSecondToMilesPerHour(response.current_weather.windspeed),
        windDirection: response.current_weather.winddirection
      };
    });
  } catch (error) {
    console.error('Error processing weather data:', error);
    throw error;
  }
}