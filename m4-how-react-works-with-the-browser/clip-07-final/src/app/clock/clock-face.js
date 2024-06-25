import React from 'react';

const ClockFace = () => {
  return (
    <g>
      {/* Clock face */}
      <circle cx="0" cy="0" r="90" fill="white" stroke="black" strokeWidth="2" />

      {/* Hour markers */}
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = index * 30;
        const markerX = 80 * Math.cos(angle * Math.PI / 180);
        const markerY = 80 * Math.sin(angle * Math.PI / 180);
        return (
          <line
            key={index}
            x1={markerX * 0.9}
            y1={markerY * 0.9}
            x2={markerX}
            y2={markerY}
            stroke="black"
            strokeWidth="2"
          />
        );
      })}

      {/* Center dot */}
      <circle cx="0" cy="0" r="2" fill="black" />
    </g>
  );
};

export default ClockFace;
