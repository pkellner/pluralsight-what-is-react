export default function TableRows({ data }) {
  return (
    <>
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
    </>
  );
}
