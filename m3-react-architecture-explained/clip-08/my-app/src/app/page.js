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

  // You'll get a warning on li for not using key. This will get discussed later.

  return (
    <ul>
      <G />
    </ul>
  );
}