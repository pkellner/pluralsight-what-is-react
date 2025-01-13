import SharedDataProvider from './shared-data-provider';
import AddItemButton from './add-item-button';
import NumbersList from './numbers-list';

const numbers = [1, 2, 3, 4, 5];

export default async function Home() {
  return (
    <div className="container">
      <SharedDataProvider
        initialLastNumber={
          numbers[numbers.length - 1]
        }
      >
        <NumbersList
          numbers={numbers}
        />
        <AddItemButton increment={3} />
      </SharedDataProvider>
    </div>
  );
}
