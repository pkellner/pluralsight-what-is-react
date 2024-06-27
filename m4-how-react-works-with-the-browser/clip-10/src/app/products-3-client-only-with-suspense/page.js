"use client";

import { Suspense, use } from "react";
import ProductsDisplay from "./products-display";
import { getDataPromise } from "./getDataPromise";

export default function Page() {
  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ShowData />
      </Suspense>
    </div>
  );
}

function ShowData() {
  const products = use(getDataPromise('http://localhost:3000/api/products'));
  return <ProductsDisplay products={products} />;
}
