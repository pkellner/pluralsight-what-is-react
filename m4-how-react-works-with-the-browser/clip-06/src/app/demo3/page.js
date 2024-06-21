import { Suspense } from "react";
import Products from "./products";
import ProductDropdown, { SelectedItemProvider } from "./product-dropdown";

export default async function Home() {
  return (
    <div className="container mt-5">
      <h1>Product Catalog</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SelectedItemProvider>
          <ProductDropdown />
          <Products />
        </SelectedItemProvider>
      </Suspense>
    </div>
  );
}
