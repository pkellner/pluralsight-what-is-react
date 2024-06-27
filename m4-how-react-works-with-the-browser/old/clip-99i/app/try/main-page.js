import { Suspense } from "react";

export default async function MainPage() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(10000);
  const results = { test: "1234" };

  return (
    <div>
      <h1>Main Page</h1>
      <div>
        <h2>Results: {results.test}</h2>
      </div>
    </div>
  );
}
