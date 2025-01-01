'use client';

import ProductsDisplay from "./products-display";
import { Suspense, use } from "react";
import {getDataPromise} from "./get-data-promise";
// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("bikestore.db");
//
// async function runQuery(query) {
//   return new Promise((resolve, reject) => {
//     db.all(query, [], (err, rows) => {
//       if (err) { reject(err); } else { resolve(rows); }
//     });
//   });
// }
export default function Page() {
  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ShowData />
      </Suspense>
    </div>
  );
}
function ShowData() {
  const products = use(getDataPromise());
  return products === null ? <div>Loading...</div>  : <ProductsDisplay products={products} />;
}
