'use client';

import { useState } from 'react';

export function ProductDropdown({ setSelectedCategory }) {
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
