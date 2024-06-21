"use client";
import { useSharedData } from "@/app/demo1/shared-data-provider";

export default function AddItemButton() {
  const { lastNumber, setLastNumber, newNumbers, setNewNumbers } = useSharedData();

  return (
    <div>
      <button
        onClick={() => {
          const newNumberVal = lastNumber + 3;
          setLastNumber(newNumberVal);
          setNewNumbers([...newNumbers, newNumberVal]);
        }}
      >
        Add Item
      </button>
    </div>
  );
}
