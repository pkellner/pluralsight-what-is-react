import "server-only";
import React, { Suspense } from "react";
import TableRows from "./table-rows";
import { towersOfHanoiPerformanceArrayResultsPromise } from "../../utils/towers-of-hanoi";

export default async function TableData() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(4000);
  const results = [{ disks: 15, moves: 32767, duration: "0.1s" }, { disks: 16, moves: 222222, duration: "0.2s" }, { disks: 17, moves: 33333333, duration: "0.4" }];

  //await sleep(4000);
  //const results = await towersOfHanoiPerformanceArrayResultsPromise(15, 7);
  console.log("results", results);

  return (
    <table>
      <thead>
        <tr>
          <th>Disks</th>
          <th>Moves</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <TableRows results={results} />
      </tbody>
    </table>
  );
}
