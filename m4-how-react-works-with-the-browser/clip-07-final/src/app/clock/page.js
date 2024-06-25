'use client'
import React, { useEffect, useState } from 'react';
import ClockFace from './clock-face';
import ClockHands from './clock-hands';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Get local time values from the state
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <svg
      width="200"
      height="200"
      viewBox="-100 -100 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ClockFace />
      <ClockHands hour={hours} minute={minutes} second={seconds} />
    </svg>
  );
};

export default AnalogClock;