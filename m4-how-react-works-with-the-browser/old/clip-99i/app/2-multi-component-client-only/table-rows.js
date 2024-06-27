import React, { useEffect, useState } from "react";
import {
  towersOfHanoi,
  towersOfHanoiByNumberDisksPromise,
} from "../../utils/towers-of-hanoi";

export default function TableRows({
  startDisksCnt,
  startingMaxDisksCount,
  maxDisksCount,
}) {
  const [results, setResults] = useState([]);
  const [nextDiskCount, setNextDiskCount] = useState(startingMaxDisksCount + 1);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);


  useEffect(() => {
    const initialResults = [];
    for (let i = startDisksCnt; i <= startingMaxDisksCount; i++) {
      const result = towersOfHanoi(i, false);
      initialResults.push({
        disks: i,
        moves: result.moves,
        duration: result.duration,
      });
    }
    setResults(initialResults);
    setLoading(false);
  }, [startDisksCnt, startingMaxDisksCount]);

  const handleAddMore = () => {
    setAdding(true);
    setTimeout(async () => {
      const newRow = await towersOfHanoiByNumberDisksPromise(
        nextDiskCount
      );
      if (nextDiskCount <= maxDisksCount) {
        setNextDiskCount((prevCount) => prevCount + 1);
        setResults((prevResults) => [
          ...prevResults,
          {
            disks: nextDiskCount,
            moves: newRow.moves,
            duration: newRow.duration,
          },
        ]);
      }
      setAdding(false);
    }, 100);
  };

  if (loading === true) {
    return (
      <tr>
        <td colSpan={3}>Loading...</td>
      </tr>
    );
  }

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
