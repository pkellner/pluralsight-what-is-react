import React, {use} from "react";
import {towersOfHanoiPerformanceArrayResultsPromise} from "../../utils/towers-of-hanoi";
import TableRows from "./table-rows";

export default function TableData() {

  const results = use(towersOfHanoiPerformanceArrayResultsPromise(15, 6));

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
