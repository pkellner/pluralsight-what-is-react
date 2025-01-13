import { Suspense } from "react";
import ProductsDisplay from "./products-display";

import sqlite3 from "sqlite3";
const db = new sqlite3.Database("bikestore.db");

export default async function Page() {
  const sql = "SELECT id, name, price, category FROM products";
  const productsPromise = new Promise((resolve) => {
    db.all(sql, [], (err, rows) => {
      setTimeout(() => resolve(rows), 2000);
    });
  });

  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsDisplay productsPromise={productsPromise} />
      </Suspense>
    </div>
  );
}
