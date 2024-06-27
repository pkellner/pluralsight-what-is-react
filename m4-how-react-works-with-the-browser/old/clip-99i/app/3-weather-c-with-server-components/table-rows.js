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
          <td>{item.location.population.toLocaleString()}</td>
          <td>{Math.floor(item.temperature)}</td>
          <td>{Math.floor(item.windSpeed)}</td>
        </tr>
      ))}
    </>
  );
}
