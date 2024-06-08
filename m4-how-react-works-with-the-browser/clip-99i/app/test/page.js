import { towersOfHanoiPerformanceArrayResultsPromise } from "../../utils/towers-of-hanoi";
import TableData from "./table-data";
import { Suspense } from "react";

export default async function Page() {
  const results = await towersOfHanoiPerformanceArrayResultsPromise(15, 5);

  return <Inner results={results} />;
}

async function Inner({ results }) {
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
        <TableData results={results} />{" "}
      </Suspense>
    </div>
  );
}
