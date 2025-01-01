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

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  let sql = "SELECT id, name, price, category FROM products";
  if (category) {
    sql += ` WHERE category = '${category}'`;
  }
  sql += " ORDER BY category, name";

  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 4000) + 1000),
  ); // simulate random delay between 1-3 seconds

  const products = await runQuery(sql);

  return new Response(JSON.stringify(products, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
