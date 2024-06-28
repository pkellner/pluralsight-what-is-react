'use client'

import React, { useState } from 'react';
import ClockFace from './clock-face';
import ClockHands from './clock-hands';

const AnalogClock = ({ initialTime }) => {
  const [time, setTime] = useState(new Date());

  // Update clock every second using a promise-based approach
  const updateClock = async () => {
    while (true) {
      setTime(new Date());
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  };

  // Start the clock update
  updateClock();

  return (
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
  );
};

export default AnalogClock;