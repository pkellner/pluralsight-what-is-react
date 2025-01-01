'use server';

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bikestore.db");

export async function fetchUsers() {
  return new Promise((resolve, reject) => {
    db.all("SELECT id, name, price, category FROM products", [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}