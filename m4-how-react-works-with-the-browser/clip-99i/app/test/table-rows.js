import React from "react";

export default function TableRows({ results }) {
  return (
    <>
      {results.map((result) => (
        <tr key={result.disks}>
          <td>{result.disks}</td>
          <td>{result.moves.toLocaleString()}</td>
          <td>{result.duration}</td>
        </tr>
      ))}
    </>
  );
}
