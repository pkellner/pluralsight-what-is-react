import { Suspense } from "react";
import ProductsDisplay from "./products-display";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bikestore.db");

async function runQuery(query) {
  return new Promise((resolve, reject) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

export default async function Page() {
  const products = await runQuery(
    "SELECT id, name, price, category FROM products",
  );

  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsDisplay products={products} />
      </Suspense>
    </div>
  );
}
