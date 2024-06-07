"use client";
import React, {useState, useEffect, startTransition} from "react";
import {
  towersOfHanoi,
  towersOfHanoiPromise,
  towersOfHanoiByNumberDisksPromise,
} from "../../utils/towers-of-hanoi";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function ListItemsTowerOfHanoi({
  startDisksCnt,
  startingMaxDiskCount,
  maxDiskCount,
}) {
  const [results, setResults] = useState([]);
  const [nextDiskCount, setNextDiskCount] = useState(startingMaxDiskCount + 1);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const initialResults = [];
    for (let i = startDisksCnt; i <= startingMaxDiskCount; i++) {
      const result = towersOfHanoi(i, false);
      initialResults.push({
        disks: i,
        moves: result.moves,
        duration: result.duration,
      });
    }
    setResults(initialResults);
    setLoading(false);
  }, [startDisksCnt, startingMaxDiskCount]);

  const handleAddMore = () => {
    setAdding(true);
    setTimeout(async () => {
      const newRow = await towersOfHanoiByNumberDisksPromise(nextDiskCount, false);
      if (nextDiskCount <= maxDiskCount) {
        setNextDiskCount((prevCount) => prevCount + 1);
        setResults((prevResults) => [
          ...prevResults,
          { disks: nextDiskCount, moves: newRow.moves, duration: newRow.duration },
        ]);
      }
      setAdding(false);
    }, 1);
  };

  return (
    <div>
      <h1>Towers of Hanoi</h1>
      <table>
        <thead>
          <tr>
            <th>Disks</th>
            <th>Moves</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          ) : (
            <>
              {results.map((result) => (
                <tr key={result.disks}>
                  <td>{result.disks}</td>
                  <td>{result.moves.toLocaleString()}</td>
                  <td>{result.duration}</td>
                </tr>
              ))}
              {nextDiskCount <= maxDiskCount && (
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
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <ListItemsTowerOfHanoi
      startDisksCnt={15}
      startingMaxDiskCount={18}
      maxDiskCount={21}
    />
  );
}
