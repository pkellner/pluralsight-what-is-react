"use client";
import React, { useState, useEffect } from "react";
import {
  towersOfHanoi,
  towersOfHanoiPromise,
} from "../../utils/tower-of-hanoi";

function ListItemsTowerOfHanoi({ startDisksCnt, startingMaxDiskCount, maxDiskCount }) {
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
    if (nextDiskCount <= maxDiskCount) {
      setAdding(true);
      setTimeout(() => {
        setResults(prevResults => [
          ...prevResults,
          { disks: nextDiskCount, moves: 0, duration: "N/A" },
        ]);
        setNextDiskCount(nextDiskCount + 1);
        setAdding(false);
      }, 500);
    }
  };

  return (
    <div>
      <h1>Towers of Hanoi</h1>
      <table>
        <thead>
        <tr>
          <th>Number of Disks</th>
          <th>Moves</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>
        {loading === false ? (
          results.map((result, index) => (
            <tr key={index}>
              <td>{result.disks}</td>
              <td>{result.moves.toLocaleString()}</td>
              <td>{result.duration}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Loading...</td>
          </tr>
        )}
        {nextDiskCount <= maxDiskCount && !adding && (
          <tr className="add-more-row">
            <td colSpan={3}>
              <button onClick={handleAddMore}>
                Add More
              </button>
            </td>
          </tr>
        )}
        {adding && (
          <tr className="fade-in">
            <td>{nextDiskCount - 1}</td>
            <td>0</td>
            <td>N/A</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <ListItemsTowerOfHanoi
      startDisksCnt={1}
      startingMaxDiskCount={3}
      maxDiskCount={10}
    />
  );
}
