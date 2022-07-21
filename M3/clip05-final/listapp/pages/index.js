export default function Home() {
  const arrayOfNumbers = [...Array(10).keys()];
  return (
    <ul>
      {arrayOfNumbers.map((id) => {
        return <li>{`id: ${id}  square rt: ${(id ** 0.5).toFixed(3)}`}</li>;
      })}
    </ul>
  );
}
