"use client";
import { useState, useEffect, Suspense } from "react";
import ProductsDisplay from "./products-display";

export default function Page() {
  return (
    <div className="container mt-3">
      <h1>Products</h1>
      <ShowData />
    </div>
  );
}

function ShowData() {
   
  const [show, setShow] = useState(false);

  useEffect(() => setShow(true), []);

  return !show ? (
    null
  ) : (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <ProductsDisplay />
      </Suspense>
    </div>
  );
}
