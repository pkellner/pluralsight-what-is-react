"use client";

import { Suspense, use } from "react";
import ProductsDisplay from "./products-display";

export default function Page() {
  return (
    <div className="container">
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ShowData category="Accessories" />
        <ShowData category="Bikes" />
        <ShowData category="Apparel" />
        <ShowData category="Components" />
      </Suspense>
    </div>
  );
}

function ShowData({ category }) {
  return (
    <div>
      <h2>{category}</h2>
      <Suspense fallback={<div className="ms-5">Loading {category}...</div>}>
        <ProductsDisplay category={category} />
      </Suspense>
    </div>
  );
}
