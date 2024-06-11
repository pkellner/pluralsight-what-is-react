export default function ListItems() {

  function addValue(incrementValue) {
    const newVal = Math.max(...ints) + incrementValue;
    setInts([...ints, newVal]);
  }

  const promise = new Promise((resolve, reject) => {
    resolve([1,2,3,]);
  });


  const increment = 3;
  return (
    <>
      <button onClick={() => addValue(increment)}>Add Item</button>
      {ints.map((id) => {
        return <li key={id}>{id}</li>;
      })}
    </>
  );
}
