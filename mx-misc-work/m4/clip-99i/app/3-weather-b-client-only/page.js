'use client';
import React, { Suspense } from "react";
import TableData from "./table-data";
import LoadData from "./load-data";

export default function MainApp() {
  return (
    <div>
      <header className="header">
        <h1>Towers of Hanoi</h1>
        <img
          src="/blocks-header-100b.png"
          alt="Kid playing with blocks"
          className="image"
        />
      </header>
      <div>
        <Suspense fallback={<>Loading.</>}>
          <LoadData>
            <TableData />
          </LoadData>
        </Suspense>
      </div>
    </div>
  );
}
