"use client";
import {Suspense, useEffect, useState} from "react";
import ProductsDisplay from "./products-display";

export default function Page() {


  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  })

  return show ? (
    <div className="container mt-3">
      <h1>Products</h1>
      <ShowData />
    </div>
  ) : (
    <div className="container mt-3">
      <h1>Products</h1>
      <div>Loading...</div>
    </div>
  );

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
