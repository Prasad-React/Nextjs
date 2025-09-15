"use client";
import { useState, useEffect } from "react";


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  async function addUser() {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "John Doe", email: "john@example.com" }),
    });
    const newUser = await res.json();
    setUsers((prev) => [...prev, newUser]);
  }

  return (
    <div>
 
      <h1>Users</h1>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
