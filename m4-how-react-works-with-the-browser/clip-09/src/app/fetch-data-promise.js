let cache = new Map();
export function fetchDataPromise(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}
