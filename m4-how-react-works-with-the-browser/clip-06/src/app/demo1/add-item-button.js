"use client";
import { useSharedData } from "@/app/demo1/shared-data-provider";

export default function AddItemButton({increment}) {
  const { addNewNumber } = useSharedData();

  return (
    <div>
      <button
        onClick={() => {
          addNewNumber(increment);
        }}
      >
        Add Item
      </button>
    </div>
  );
}
