const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bikestore.db");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function runQuery(query) {
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

export default async function Products() {
  await sleep(2000); // Simulate a slow network
  const products = await runQuery(
    "SELECT id, name, price, category FROM products",
  );

  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>{product.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
