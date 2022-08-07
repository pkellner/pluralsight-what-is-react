export default function Home() {
  const ints = [1,2,3];
  return (
    <ul>
      {ints.map((id) => {
        return <li>{`id: ${id}  square rt: ${(id ** 0.5).toFixed(3)}`}</li>;
      })}
    </ul>
  );
}
