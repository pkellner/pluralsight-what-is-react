'use client';
import {Suspense, use} from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListItemsWrapper />
    </Suspense>
  );
}

function ListItemsWrapper() {
  const intsPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 2000);
  });
  return (<ListItems intsPromise={intsPromise} />);
}

function ListItems({intsPromise}) {
  const ints = use(intsPromise);
  return (
    <div>
      {JSON.stringify(ints)}
    </div>
  )
}
