
'use client';
import React, { useState } from "react";

export default function LoadData({ children }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Weather Data" : "Load Weather Data"}
      </button>
      {show && <>{children}</>}
    </>
  );
}
