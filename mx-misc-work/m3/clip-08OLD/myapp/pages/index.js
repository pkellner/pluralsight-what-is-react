import { useState } from 'react';
export default function F() {

  function G({ints, addValue}) {
    
    return (
      <>
        <button onClick={addValue}>Add Item</button>
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
  function addValue() {
    const newVal = Math.max(...ints) + 1;
    setInts([...ints, newVal]);
  }
  return (
    <ul>
      <G ints={ints} addValue={addValue} />
    </ul>
  )
}
