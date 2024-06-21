import { Suspense } from "react";
import Products from "./products";

export default async function Home() {
  return (
    <div className="container mt-5">
      <h1>Product Catalog</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </div>
  );
}
