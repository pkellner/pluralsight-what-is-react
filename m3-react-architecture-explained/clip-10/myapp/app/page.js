"use client";

import ListItems from "./list-items";
import { Suspense } from "react";

export default function Page() {
  const intsPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 3000);
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListItems intsPromise={intsPromise} />
    </Suspense>
  );
}
