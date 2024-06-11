import { useState } from 'react';
import ListItems from "./list-items";
export default function Home() {





  //const ints = [1, 2, 3];
  const [ints, setInts] = useState([1, 2, 3]);

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue} />
    </ul>
  )
}
