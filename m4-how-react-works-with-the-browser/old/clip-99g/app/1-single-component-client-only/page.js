import { towersOfHanoi,  } from "../../utils/tower-of-hanoi";

function ListItemsTowerOfHanoi({ startDisksCnt, endDisksCnt }) {
  // iterate in increments of one between startDisksCnt and endDisksCnt and for each number call towersOfHanoi.
  // return the result of towersOfHanoi in a list that includes the number of disks and the duration
  const numberOfDisks = [];
  for (let i = startDisksCnt; i <= endDisksCnt; i++) {
    numberOfDisks.push(i);
  }
  const results = numberOfDisks.map((i) => {
    const result = towersOfHanoi(i, false);
    return { disks: i, moves: result.moves, duration: result.duration };
  });

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Number of Disks</th>
          <th>Moves</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>
        {results.map((result) => (
          <tr key={result.disks}>
            <td>{result.disks}</td>
            <td>{result.moves}</td>
            <td>{result.duration}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return <ListItemsTowerOfHanoi startDisksCnt={12} endDisksCnt={21} />;
}
