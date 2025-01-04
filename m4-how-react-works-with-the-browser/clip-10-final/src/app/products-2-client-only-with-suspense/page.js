"use client";
import {Suspense, useState} from "react";
import ProductsDisplay from "./products-display";

export default function Page() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <div className="container mt-3">
        <h1>Products</h1>
        <ShowData />
      </div>
    );
  } else {
    return (
      <div className="container mt-3">
        <h1>Products</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShow(true);
          }}
        >
          Retrieve Data
        </button>
      </div>
    );
  }
}

function ShowData() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ProductsDisplay />
      </div>
    </Suspense>
  );
}
