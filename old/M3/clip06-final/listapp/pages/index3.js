import {useState} from "react";

export default function Home() {
  
  function ListItems() {

    const [ints, setInts] = useState([1,2,3]);

    function addValue() {
      const newVal = Math.max(...ints) + 1;
      setInts([...ints,newVal]);
    }

    return (
      <>
        <button onClick={addValue}>add item</button>
        {ints.map(id => {
          return (
            <li key={id}>{id}</li>
          )
        })}
      </>
    )
  }



  
  return (
    <ul>
      <ListItems />
    </ul>
  );
}

/*

V = function ( {state} )     view a function of application state

proper based component API


describe what component look like from inside component

react believe that everything that has to do with rendering a view (state, ui, javascript)

jsx combines power expressiventess of javascript, with readability of html

f(g(x))







 */
