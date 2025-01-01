'use client';
import { use, Suspense } from 'react';
import { fetchUsers } from './actions';

const userPromise = fetchUsers();

const Users = () => {
  const users = use(userPromise);
  return (
    <ul>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </ul>
  );
};

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Users />
    </Suspense>
  );
}