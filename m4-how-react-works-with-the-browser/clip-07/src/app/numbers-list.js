import NewNumbers from "./new-numbers";

export default async function NumbersList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
      <NewNumbers />
    </ul>
  );
}
