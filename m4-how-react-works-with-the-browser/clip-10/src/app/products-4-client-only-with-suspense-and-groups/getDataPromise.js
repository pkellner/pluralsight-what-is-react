let cache = new Map();
export function getDataPromise(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

const fetchDataApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default async function getData(url) {
  try {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(2000); // Simulate a slow network
    const response = await fetchDataApi(url);
    return response;
  } catch (error) {
    console.error("Error processing data:", error);
    throw error;
  }
}

// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.
//   reference: https://react.dev/reference/react/Suspense#suspense
