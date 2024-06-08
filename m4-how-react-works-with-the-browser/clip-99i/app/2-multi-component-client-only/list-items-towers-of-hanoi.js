"use client";
import TableRows from "./table-rows";

export default function ListItemsTowerOfHanoi() {
  const [startDisksCnt, setStartDisksCnt] = useState(15);
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
        <TableRows
          startDisksCnt={startDisksCnt}
          endDisksCnt={startDisksCnt + 5}
        />
      </tbody>
    </table>
  );
}

/*
<ListItemsTowersOfHanoi
        startDisksCnt={15}
        startingMaxDiskCount={18}
        maxDiskCount={21}
      />
 */
