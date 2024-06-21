"use client";
import { useSharedData } from "@/app/demo1/shared-data-provider";

export default function AddItemButton() {
  const { numbers, setNumbers } = useSharedData();
  return (
    <div>
      <button
        onClick={() => {
          const lastNumber = numbers[numbers.length - 1];
          const newNumber = lastNumber + 3;
          setNumbers([...numbers, newNumber]);
        }}
      >
        Add Item
      </button>
    </div>
  );
}
