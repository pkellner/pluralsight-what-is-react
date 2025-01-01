'use server';

export async function fetchUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}