import SharedDataProvider from "./shared-data-provider";
import AddItemButton from "./add-item-button";
import NumbersList from "./numbers-list";
let numbers = [1,2,3,4];
export default async function Home() {
  return (
    <div>
      <SharedDataProvider initialLastNumber={numbers[numbers.length - 1]}>
        <NumbersList numbers={numbers} />
        <AddItemButton increment={3} />
      </SharedDataProvider>
    </div>
  );
}
