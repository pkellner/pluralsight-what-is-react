import React from "react";

export default function renderRowsPromise({rowsPromise}) {





  return (
    <>
      {results.map((result) => (
        <tr key={result.disks}>
          <td>{result.disks}</td>
          <td>{result.moves.toLocaleString()}</td>
          <td>{result.duration}</td>
        </tr>
      ))}
      {nextDiskCount <= maxDisksCount && (
        <tr className="add-more-row">
          <td colSpan={3}>
            <button
              onClick={adding === false ? handleAddMore : undefined}
              disabled={adding === true}
            >
              {adding === false ? "Add More" : "Adding..."}
            </button>
          </td>
        </tr>
      )}
    </>
  );



}