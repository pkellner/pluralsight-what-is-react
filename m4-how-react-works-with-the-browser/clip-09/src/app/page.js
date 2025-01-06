"use client";
import { useState, Suspense } from "react";
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

   

  return !show ? (
    <button
      className="btn btn-primary mb-3"
      onClick={() => {
        setShow(true);
      }}
    >
      Retrieve Data
    </button>
  ) : (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <ProductsDisplay products={products} />
      </Suspense>
    </div>
  );
}
