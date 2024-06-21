"use client";

import { useSelectedItem } from "@/app/demo4/product-dropdown";

export default function ProductShow({ category, children }) {
  const { selectedItem } = useSelectedItem();

  // if (selectedItem === 'Select Product') {
  //     return null;
  // }

  if (selectedItem !== category) {
    return null;
  } else {
    return <>{children}</>;
  }
}
