import ProductsDisplay from "./products-display";
import { Suspense } from "react";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bikestore.db");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ShowData />
      </Suspense>
    </div>
  );
}

async function ShowData() {
  await sleep(2000);
  const products = await runQuery(
    "SELECT id, name, price, category FROM products",
  );
  return <ProductsDisplay products={products} />;
}
