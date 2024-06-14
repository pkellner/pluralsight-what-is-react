'use client';
export default function F() {

  function G() {
    const ints = [1, 2, 3];
    return (
      <>
        {
          ints.map(id => {
            return (
              <li>{id}</li>
            )
          })
        }
      </>
    );
  }

  return (
    <ul>
      <G />
    </ul>
  );
}