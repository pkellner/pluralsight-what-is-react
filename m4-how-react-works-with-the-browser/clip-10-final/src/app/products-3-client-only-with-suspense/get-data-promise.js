let dataPromise = null;

export function getDataPromise() {
  if (!dataPromise) {
    dataPromise = getData();
  }
  return dataPromise;
}

async function fetchDataApi() {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function getData() {
  try {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(2000); // Simulate a slow network
    const response = await fetchDataApi();
    return response;
  } catch (error) {
    console.error("Error processing data:", error);
    throw error;
  }
}
