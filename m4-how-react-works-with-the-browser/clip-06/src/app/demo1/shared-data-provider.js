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

export default function SharedDataProvider({ initialValue, children }) {
  const [lastNumber, setLastNumber] = useState(initialValue);
  const [newNumbers, setNewNumbers] = useState([]);
  return (
    <SharedDataContext.Provider value={{ lastNumber, setLastNumber, newNumbers, setNewNumbers }}>
      {children}
    </SharedDataContext.Provider>
  );
}
