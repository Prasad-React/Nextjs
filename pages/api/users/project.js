// pages/api/users/project.js

import pool from "@/lib/db";

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM projects');
    client.release();

    // Format data
    const formatted = result.rows.map(row => ({
      id: row.id,
      pname: row.pname,
      cno: row.cno,
      data: {
        field1: row.field1,
        field2: row.field2,
      }
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
