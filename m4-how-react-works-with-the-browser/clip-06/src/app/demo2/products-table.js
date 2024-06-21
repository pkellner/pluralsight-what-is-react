"use client";

import { useState } from "react";

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

function ProductDropdown({ setSelectedCategory }) {
  const [selectedItem, setSelectedItem] = useState("Select Category");
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Bikes", "Accessories", "Apparel", "Components"];

  const handleSelect = (item) => {
    setSelectedItem(item);
    setSelectedCategory(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown mt-2 mb-2">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {selectedItem || "Select a category"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu show">
          {items.map((item) => (
            <li key={item}>
              <button
                className="dropdown-item"
                onClick={() => handleSelect(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
