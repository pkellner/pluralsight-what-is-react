const ClockHands = ({hour, minute, second}) => {

  const secondAngle = (second * 6 - 90) * Math.PI / 180;
  const minuteAngle = (minute * 6 + second * 0.1 - 90) * Math.PI / 180;
  const hourAngle = ((hour % 12) * 30 + minute * 0.5 - 90) * Math.PI / 180;

  const roundToFixed = (number, decimals) => {
    return parseFloat(number.toFixed(decimals));
  };

  return (
    <g>
      {/* Hour hand */}
      <line
        x1="0"
        y1="0"
        x2={roundToFixed(50 * Math.cos(hourAngle), 4)} // Round to 4 decimal places
        y2={roundToFixed(50 * Math.sin(hourAngle), 4)}
        stroke="black"
        strokeWidth="4"
      />

      {/* Minute hand */}
      <line
        x1="0"
        y1="0"
        x2={roundToFixed(70 * Math.cos(minuteAngle), 4)}
        y2={roundToFixed(70 * Math.sin(minuteAngle), 4)}
        stroke="black"
        strokeWidth="3"
      />

      {/* Second hand */}
      <line
        x1="0"
        y1="0"
        x2={roundToFixed(80 * Math.cos(secondAngle), 4)}
        y2={roundToFixed(80 * Math.sin(secondAngle), 4)}
        stroke="red"
        strokeWidth="1"
      />
    </g>
  );
};

export default ClockHands;