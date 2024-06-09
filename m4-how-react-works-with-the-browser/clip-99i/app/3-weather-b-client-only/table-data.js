import { use } from "react";

import { getWeatherDataCachePromise } from "./get-weather-data";
import locations from "./city-list.json";
import TableRows from "./table-rows";

export default function TableData() {
  const data = use(getWeatherDataCachePromise("cache-name-here",locations));

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
