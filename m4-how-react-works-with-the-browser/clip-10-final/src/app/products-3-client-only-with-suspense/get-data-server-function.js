"use server";

export async function getDataServerFunction() {

  return new Promise((resolve) =>
    setTimeout(resolve, 1000, [
      { id: 1, name: "Mountain Bike", price: 499.99, category: "Bikes" },
      { id: 2, name: "Road Bike", price: 999.99, category: "Bikes" },
      { id: 3, name: "Hybrid Bike", price: 749.99, category: "Bikes" },
    ])
  );

}