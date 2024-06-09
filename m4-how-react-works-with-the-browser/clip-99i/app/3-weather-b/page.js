import getWeatherData from "./get-weather-data";
import locations from "./locations.json";

export default async function WeatherA() {
  const data = await getWeatherData(locations);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Population</th>
            <th>Temperature</th>
            <th>Weather Code</th>
            <th>Wind Speed</th>
            <th>Wind Direction</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.location.city}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <td>{item.location.city}</td>
              <td>{item.location.state}</td>
              <td>{item.location.latitude}</td>
              <td>{item.location.longitude}</td>
              <td>{item.location.population}</td>
              <td>{item.temperature}</td>
              <td>{item.weatherCode}</td>
              <td>{item.windSpeed}</td>
              <td>{item.windDirection}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
