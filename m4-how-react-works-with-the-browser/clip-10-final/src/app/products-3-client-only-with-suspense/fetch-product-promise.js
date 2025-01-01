"use server";

// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("bikestore.db");

export function fetchProductPromise() {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, [
      { id: 1, name: "Mountain Bike", price: 499.99, category: "Bikes" },
      { id: 2, name: "Road Bike", price: 999.99, category: "Bikes" },
      { id: 3, name: "Hybrid Bike", price: 749.99, category: "Bikes" },
    ])
  );
}

// export async function fetchProductPromise(query) {
//   return new Promise((resolve, reject) => {
//     db.all(
//       "SELECT id, name, price, category FROM products",
//       [],
//       (err, rows) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(rows);
//         }
//       },
//     );
//   });
// }

// export async function fetchProductPromise() {
//   // Optional: simulate slow DB query
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//
//   return runQuery("SELECT id, name, price, category FROM products");
// }
