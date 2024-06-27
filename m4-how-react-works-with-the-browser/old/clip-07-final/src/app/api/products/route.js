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

export async function GET() {
  await sleep(2000);

  const products = await runQuery(
    "SELECT id, name, price, category FROM products",
  );

  return new Response(JSON.stringify(products, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
