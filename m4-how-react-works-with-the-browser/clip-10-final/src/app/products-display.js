import { use } from "react";
import { fetchDataPromise } from "./fetch-data-promise";

export default function ProductsDisplay() {

  const productsPromise = fetchDataPromise("/api/products");
  const products = use(productsPromise);


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
