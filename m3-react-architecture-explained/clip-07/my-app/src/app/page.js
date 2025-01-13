"use client";
export default function Home() {
  function ListItems() {
    const ints = [1, 2, 3];
    return (
      <>
        {ints.map((id) => {
          return <li>{id}</li>;
        })}
      </>
    );
  }

  // Note: You'll get an error when you run this because there is no key property in the list items. This will get fixed coming up.

  return (
    <ul>
      <ListItems />
    </ul>
  );
}
