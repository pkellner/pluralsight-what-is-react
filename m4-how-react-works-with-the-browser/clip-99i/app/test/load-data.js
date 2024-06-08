"use client";
import React, { useState } from "react";
import TableData from "./table-data";

export default function LoadData() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Data" : "Load Data"}
      </button>
      {show && <TableData />}
    </div>
  );
}
