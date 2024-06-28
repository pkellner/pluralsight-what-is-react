'use client';

import { useSharedData } from "./shared-data-provider";

export default function NewNumbers() {

  const { newNumbers } = useSharedData();

  return (
    <>
      {newNumbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </>
  );
}
