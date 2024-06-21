import { Suspense } from "react";
import Products from "./products";


export default async function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
}
