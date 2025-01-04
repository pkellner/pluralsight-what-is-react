"use client";

import { Suspense, use } from "react";
import ProductsDisplay from "./products-display";
import {getDataServerFunction} from "./get-data-server-function";

function fetchProductPromise() {


  return getDataServerFunction();

  // return new Promise((resolve) =>
  //   setTimeout(resolve, 1000, [
  //     { id: 1, name: "Mountain Bike", price: 499.99, category: "Bikes" },
  //     { id: 2, name: "Road Bike", price: 999.99, category: "Bikes" },
  //     { id: 3, name: "Hybrid Bike", price: 749.99, category: "Bikes" },
  //   ])
  // );

}

export default function Page() {

  const productsPromise = fetchProductPromise();

  const ProductsWrapper = () => {
    const products = use(productsPromise);
    return <ProductsDisplay products={products} />;
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsWrapper />
      </Suspense>
    </div>
  );
}
