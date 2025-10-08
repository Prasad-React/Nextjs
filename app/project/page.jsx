"use client";

import React, { useEffect, useState } from "react";

export default function ProjectPage() {
  const [data, setData] = useState([]); // Make sure it's an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users/project")
      .then((res) => res.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setData(json);
        } else {
          console.error("API returned unexpected data:", json);
          setData([]); // fallback to empty array
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Franchise Projects</h1>

      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Project Name</th>
              <th className="border p-2">Contact No</th>
              <th className="border p-2">Field 1</th>
              <th className="border p-2">Field 2</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="border p-2">{row.id}</td>
                <td className="border p-2">{row.pname}</td>
                <td className="border p-2">{row.cno}</td>
                <td className="border p-2">{row.data?.field1}</td>
                <td className="border p-2">{row.data?.field2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
