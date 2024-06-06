'use client';
import {use, useState} from 'react';

export default function ListItems({promiseForTowersOfHanoi}) {

  const x = use(promiseForTowersOfHanoi);



  function ListItems({ints, addValue}) {

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


  function addValue(incrementValue) {
    const newVal = Math.max(...ints) + incrementValue;
    setInts([...ints, newVal]);
  }


  return (
    <pre>{JSON.stringify(x, null, 2)}</pre>
  )

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue} />
    </ul>
  )
}
