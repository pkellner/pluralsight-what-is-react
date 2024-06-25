import React, { useState, useEffect } from 'react';

const ClockHands = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  // Calculate the angle for each hand (adjusted for SVG coordinate system)
  const secondAngle = (second * 6 - 90) * Math.PI / 180;
  const minuteAngle = (minute * 6 + second * 0.1 - 90) * Math.PI / 180;
  const hourAngle = ((hour % 12) * 30 + minute * 0.5 - 90) * Math.PI / 180;

  return (
    <g>
      {/* Hour hand */}
      <line
        x1="0"
        y1="0"
        x2={50 * Math.cos(hourAngle)}
        y2={50 * Math.sin(hourAngle)}
        stroke="black"
        strokeWidth="4"
      />

      {/* Minute hand */}
      <line
        x1="0"
        y1="0"
        x2={70 * Math.cos(minuteAngle)}
        y2={70 * Math.sin(minuteAngle)}
        stroke="black"
        strokeWidth="3"
      />

      {/* Second hand */}
      <line
        x1="0"
        y1="0"
        x2={80 * Math.cos(secondAngle)}
        y2={80 * Math.sin(secondAngle)}
        stroke="red"
        strokeWidth="1"
      />
    </g>
  );
};

export default ClockHands;