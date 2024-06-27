'use client';
import React, { useState, createContext, useContext } from 'react';

const SelectedItemContext = createContext();

export function SelectedItemProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState('Select Product');

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
}

export function useSelectedItem() {
  const context = useContext(SelectedItemContext);
  if (context === undefined) {
    throw new Error('useSelectedItem must be used within a SelectedItemProvider');
  }
  return context;
}

export default function ProductDropdown() {
  const { selectedItem, setSelectedItem } = useSelectedItem();
  const [isOpen, setIsOpen] = useState(false);
  const items = ['Bikes', 'Accessories', 'Apparel', 'Components'];

  const handleSelect = (event, item) => {
    event.preventDefault();
    setSelectedItem(item);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown mt-2 mb-2">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {selectedItem}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        {items.map((item) => (
          <li key={item}>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleSelect(e, item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
