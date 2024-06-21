'use client';

import { useSharedData } from "./shared-data-provider";

export default function NewNumbers() {

  const { numbers } = useSharedData();

  return (
    <>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </>
  );
}
