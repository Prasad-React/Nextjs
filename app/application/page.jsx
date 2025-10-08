"use client";
import React, { useEffect, useState } from "react";

export default function ProjectPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/api/users/application")
    .then((res) => res.json())
    .then((json) => {
      console.log("Fetched Data:", json);
      if (Array.isArray(json)) setData(json);
      setLoading(false);
    })
    .catch((err) => {
      console.error("❌ Fetch error:", err);
      setLoading(false);
    });
}, []);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Careers</h1>

      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Resume</th>
              <th className="border p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="border p-2">{row.id}</td>
                <td className="border p-2">{row.name}</td>
                <td className="border p-2">{row.mobile_number}</td>
                <td className="border p-2">{row.email}</td>
 <td className="border p-2">
  {row.resume_filename ? (
    <a
      href={`/api/users/downloadResume/${row.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      {row.resume_filename}
    </a>
  ) : (
    "No file"
  )}
</td>

                <td className="border p-2">
                  {new Date(row.created_at).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
