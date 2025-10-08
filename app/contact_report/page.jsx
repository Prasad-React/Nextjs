"use client";
import React, { useEffect, useState } from "react";

export default function ProjectPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/api/users/contactReports")
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
      <h1 className="text-2xl font-bold mb-4">Contact Reports</h1>

      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Mobile No</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="border p-2">{row.id}</td>
                <td className="border p-2">{row.first_name}</td>
                <td className="border p-2">{row.last_name}</td>
                <td className="border p-2">{row.mobile_number}</td>
                 <td className="border p-2">{row.email}</td>
                <td className="border p-2">{row.message}</td>
                <td className="border p-2">{row.submitted_at}</td>


                {/* <td className="border p-2">
                  {new Date(row.submiited_at).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
