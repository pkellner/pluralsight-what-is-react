import ProductLine from "./product-line";
import ProductShow from "./product-show";

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
    <div>
      <h2 className="mb-4">Product Catalog</h2>
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
            <ProductShow category={product.category}>
              <ProductLine key={product.id} product={product} />
            </ProductShow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
