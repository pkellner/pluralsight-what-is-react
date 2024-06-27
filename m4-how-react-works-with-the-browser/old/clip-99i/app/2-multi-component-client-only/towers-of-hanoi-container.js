'use client';
import {useState} from "react";
import {towersOfHanoiPromise} from "@/utils/towers-of-hanoi";

export default function TowersOfHanoiContainer() {

  const [startDisksCnt, setStartDisksCnt] = useState(15);

  const promise = towersOfHanoiPromise(startDisksCnt, 5);

  return (
    <div>
      <h2>Coming soon...</h2>
    </div>
  );
}