import getWeatherData from "./get-weather-data";
import locations from "./city-list.json";
import TableRows from "./table-rows";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function TableData() {
  const data = await getWeatherData(locations);
  await sleep(2000);

  return (
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
        <TableRows data={data} />
      </tbody>
    </table>
  );
}
