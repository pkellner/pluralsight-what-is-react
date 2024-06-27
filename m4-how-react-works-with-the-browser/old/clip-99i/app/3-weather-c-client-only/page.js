'use client';
import React, { Suspense } from "react";
import TableData from "./table-data";
import LoadData from "./load-data";

export default function MainApp() {
  return (
    <div>
      <header className="header">
        <h1>Current Weather Conditions by City</h1>
        <img
          src="/clouds-and-sun.png"
          alt="Clouds and Sun Image"
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
