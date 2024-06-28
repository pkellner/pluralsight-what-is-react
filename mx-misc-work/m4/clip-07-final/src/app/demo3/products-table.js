'use client';

import { useState } from "react";
import { ProductDropdown } from "./product-dropdown";

export default function ProductTable({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory && selectedCategory !== "Select Category"
    ? products.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <div>
      <ProductDropdown setSelectedCategory={setSelectedCategory} />
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
        </thead>
        <tbody>
        {filteredProducts.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>{product.category}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
