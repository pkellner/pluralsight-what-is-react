import { Suspense } from "react";
import LoadData from "./load-data";

export default function Page() {
  return (
    <div>
      <header className="header">
        <h1>Towers of Hanoi</h1>
        <img
          src="/blocks-header-100b.png"
          alt="Placeholder"
          className="image"
        />
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <LoadData />
      </Suspense>
    </div>
  );
}
