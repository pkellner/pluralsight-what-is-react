"use client";
import React, { createContext, useContext, useState } from "react";

const SharedDataContext = createContext();

export function useSharedData() {
  const contextValue = useContext(SharedDataContext);
  if (!contextValue) {
    throw new Error("useSharedData must be used within a SharedDataProvider");
  }
  return contextValue;
}

export default function SharedDataProvider({ initialLastNumber, children }) {
  const [newNumbers, setNewNumbers] = useState([]);

  function addNewNumber(incrementValue) {
    const lastNumber = newNumbers[newNumbers.length - 1] || initialLastNumber;
    setNewNumbers([...newNumbers, lastNumber + incrementValue]);
  }

  return (
    <SharedDataContext.Provider value={{ newNumbers, addNewNumber }}>
      {children}
    </SharedDataContext.Provider>
  );
}
