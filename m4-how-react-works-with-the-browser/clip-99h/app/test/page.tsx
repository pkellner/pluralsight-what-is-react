"use client";

import { useEffect, useState, useRef } from "react";
import { towersOfHanoi } from "../../utils/towers-of-hanoi";

const initialNumberOfDisks = 3; // Adjust this as needed

type Move = {
  moveNumber: number;
  disk: number;
  from: string;
  to: string;
  moveDescription: string;
  pegs: { [key: string]: number[] };
};

type TowersOfHanoiResult = {
  moves: number;
  duration: string;
  moveDetails?: Move[];
};

export default function Test() {
  const [result, setResult] = useState<TowersOfHanoiResult | null>(null);
  const [pegs, setPegs] = useState<{ [key: string]: number[] }>({
    A: [],
    B: [],
    C: [],
  });
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [numberOfDisks, setNumberOfDisks] =
    useState<number>(initialNumberOfDisks);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const hanoiResult = towersOfHanoi(numberOfDisks, true);
    setResult(hanoiResult);

    if (hanoiResult.moveDetails) {
      setPegs(hanoiResult.moveDetails[0].pegs);
      animateMoves(hanoiResult.moveDetails);
    }

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [numberOfDisks]); // Re-run the effect whenever numberOfDisks changes

  const animateMoves = (moves: Move[]) => {
    if (moves.length === 0) return;
    let index = 0;

    const animate = () => {
      const move = moves[index];
      const diskElement = document.getElementById(`disk-${move.disk}`);
      const targetPeg = document.getElementById(`peg-${move.to}`);

      if (diskElement && targetPeg) {
        const targetRect = targetPeg.getBoundingClientRect();
        const diskRect = diskElement.getBoundingClientRect();

        const moveX =
          targetRect.left -
          diskRect.left -
          (targetRect.width - diskRect.width) / 2 +
          43;
        const moveY =
          targetRect.top +
          targetPeg.clientHeight -
          diskRect.height * (pegs[move.to].length + 1) -
          diskRect.top -
          300;

        diskElement.style.transition = "transform 0.7s ease-in-out";
        diskElement.style.zIndex = "10"; // Ensure moving disk is above others
        diskElement.style.transform = `translate(${moveX}px, ${moveY}px)`;

        setTimeout(() => {
          setPegs(move.pegs);
          setCurrentMoveIndex(index);
          diskElement.style.zIndex = ""; // Reset zIndex after move
          index += 1;
          if (index < moves.length) {
            animationRef.current = setTimeout(animate, 700); // Adjust the interval as needed
          }
        }, 500); // Adjust the delay as needed
      } else {
        index += 1;
        if (index < moves.length) {
          animationRef.current = setTimeout(animate, 700); // Adjust the interval as needed
        }
      }
    };

    animate();
  };

  const handleMoveClick = (move: Move, event: React.MouseEvent) => {
    event.stopPropagation();
    setPegs((prevPegs) => move.pegs);
    setCurrentMoveIndex((prevIndex) => move.moveNumber);
  };

  const handleDiskChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfDisks(parseInt(event.target.value));
  };

  const  maxMovesToShow= 2;
  const movesToShow = result?.moveDetails?.length < maxMovesToShow ? result?.moveDetails?.length : maxMovesToShow;
  const notShownMoves = result?.moveDetails?.length - movesToShow - 1;


  return (
    <div>
      <h1>Towers of Hanoi</h1>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div style={{ width: "30%", marginRight: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {result && (
              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                  }}
                >
                  <select value={numberOfDisks} onChange={handleDiskChange}>
                    {[...Array(8).keys()].map((i) => (
                      <option key={i + 2} value={i + 2}>
                        {i + 2} Disks
                      </option>
                    ))}
                  </select>
                </div>
                <p>
                  Solved in <b>{result?.moves}</b> moves. Total disks is{" "}
                  <b>{numberOfDisks}</b> and move calc took{" "}
                  <b>{result.duration}</b> seconds.
                </p>
                {result.moveDetails && (
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {result.moveDetails.slice(0,maxMovesToShow).map((move, index) => (
                      <li
                        key={move.moveNumber}
                        onClick={(event) => handleMoveClick(move, event)}
                        style={{
                          margin: "0.5rem 0",
                          padding: "0.5rem",
                          backgroundColor:
                            currentMoveIndex === index ? "#a9def9" : "#e9ecef",
                          cursor: "pointer",
                          borderRadius: "4px",
                          transition: "background-color 0.5s ease-in-out",
                        }}
                      >
                        {move.moveDescription}
                      </li>
                    ))}
                  </ul>
                )}
                {notShownMoves > 0 && (<div>...and {notShownMoves} more</div>)}
              </div>
            )}
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {["A", "B", "C"].map((peg) => (
                <div
                  key={peg}
                  style={{ textAlign: "center" }}
                  id={`peg-${peg}`}
                >
                  <h2>{peg}</h2>
                  <div
                    style={{
                      border: "3px solid #00A3FF",
                      borderRadius: "7px",
                      height: "400px",
                      width: "150px",
                      position: "relative",
                      backgroundColor: "#EBEFF5",
                    }}
                  >
                    {pegs[peg]
                      .slice()
                      .reverse()
                      .map((disk, index, arr) => (
                        <div
                          key={disk}
                          id={`disk-${disk}`}
                          style={{
                            width: `${
                              50 + ((disk - 1) / (numberOfDisks - 1)) * 40
                            }%`,
                            height: "30px",
                            backgroundColor: "#1B1834",
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            bottom: `${index * 30}px`,
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: "1.2rem",
                            borderRadius: "4px",
                            transition: "all 0.5s ease-in-out", // Add transition for smooth animation
                          }}
                        >
                          {disk}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*<pre>{JSON.stringify(pegs, null, 2)}</pre>*/}
    </div>
  );
}
