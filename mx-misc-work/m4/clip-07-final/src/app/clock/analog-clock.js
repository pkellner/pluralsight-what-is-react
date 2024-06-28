"use client";
import React, { useEffect, useState } from "react";
import ClockFace from "./clock-face";
import ClockHands from "./clock-hands";

const AnalogClock = ({ initialTime }) => {
  const [time, setTime] = useState(new Date()); // Init just for setting the type
  const mounted = React.useRef(false);

  useEffect(() => {
    setTime(initialTime);
    mounted.current = true;

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    mounted.current && (
      <svg
        width="200"
        height="200"
        viewBox="-100 -100 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ClockFace />
        <ClockHands
          hour={time.getHours()}
          minute={time.getMinutes()}
          second={time.getSeconds()}
        />
      </svg>
    )
  );
};

export default AnalogClock;
