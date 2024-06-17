import { use } from "react";

import { getWeatherData } from "./get-weather-data";
import TableRows from "./table-rows";

export default async function TableData() {

  const url = "https://api.open-meteo.com/v1/forecast";
  const data = await getWeatherData(url);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>City</th>
          <th>State</th>
          <th>Population</th>
          <th>Temperature (F)</th>
          <th>Wind Speed (MPH)</th>
        </tr>
      </thead>
      <tbody>
        <TableRows data={data} />
      </tbody>
    </table>
  );
}
