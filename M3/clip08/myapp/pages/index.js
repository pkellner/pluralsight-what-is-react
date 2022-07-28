import { useState } from 'react';
export default function Home() {

  function ListItems({ints, addValue}) {
    const increment = 3;
    return (
      <>
        <button onClick={() => addValue(increment)}>Add Item</button>
        {
          ints.map(id => {
            return (
              <li key={id}>{id}</li>
            )
          })
        }
      </>
    )
  } 

  //const ints = [1, 2, 3];
  const [ints, setInts] = useState([1, 2, 3]);
  function addValue(incrementValue) {
    const newVal = Math.max(...ints) + incrementValue;
    setInts([...ints, newVal]);
  }
  return (
    <ul>
      <ListItems ints={ints} addValue={addValue} />
    </ul>
  )
}
