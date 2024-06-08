import React from "react";

export default function TableData({ results }) {
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
        {results.map((result) => (
          <tr key={result.disks}>
            <td>{result.disks}</td>
            <td>{result.moves.toLocaleString()}</td>
            <td>{result.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
