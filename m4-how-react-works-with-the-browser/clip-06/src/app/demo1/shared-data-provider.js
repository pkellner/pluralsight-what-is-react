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

export default function SharedDataProvider({ initialNumbers, children }) {
  const [numbers, setNumbers] = useState(initialNumbers);
  return (
    <SharedDataContext.Provider value={{ numbers, setNumbers }}>
      {children}
    </SharedDataContext.Provider>
  );
}
