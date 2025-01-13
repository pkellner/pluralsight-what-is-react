"use client";
import { useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  if (loading) return <div>Loading...</div>;

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          setLoading(true);
          async function fetchData() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
            setLoading(false);
          }
          fetchData();
        }}
      >
        Retrieve Data
      </button>
      <ProductsDisplay products={products} />
    </div>
  );
}
