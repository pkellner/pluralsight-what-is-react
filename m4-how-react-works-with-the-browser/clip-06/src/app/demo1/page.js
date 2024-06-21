import SharedDataProvider from "./shared-data-provider";
import NewNumbers from "./new-numbers";
import AddItemButton from "./add-item-button";
let numbers = [1, 2, 3, 4];
export default async function Home() {
  return (
    <div>
      <SharedDataProvider initialNumbers={numbers}>
        <ul>
          {numbers.map((number) => (
            <li>{number}</li>
          ))}
          <NewNumbers />
        </ul>
        <AddItemButton />
      </SharedDataProvider>
    </div>
  );
}
