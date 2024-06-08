import { Suspense } from "react";
import ListItems from "./list-items";

export default async function Page() {
  const promiseForIntegerArray = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 3000);
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ListItems initialIntsPromise={promiseForIntegerArray} />
    </Suspense>
  );
}
