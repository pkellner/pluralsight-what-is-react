import SharedDataProvider from "./shared-data-provider";
import NewNumbers from "./new-numbers";
import AddItemButton from "./add-item-button";
let numbers = [1,2,3,4];
export default async function Home() {
  return (
    <div>
      <SharedDataProvider initialLastNumber={numbers[numbers.length - 1]}>
        <ul>
          {numbers.map((number) => (
            <li>{number}</li>
          ))}
          <NewNumbers />
        </ul>
        <AddItemButton increment={3} />
      </SharedDataProvider>
    </div>
  );
}
