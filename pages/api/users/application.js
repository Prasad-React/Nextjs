// pages/api/users/application.js
import pool from "@/lib/db";


export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const client = await pool.connect();
    const result = await client.query(`
      SELECT id, name, mobile_number, email, resume_filename, created_at
      FROM applications
      ORDER BY id ASC
    `);
    client.release();

    return res.status(200).json(result.rows);
  } catch (err) {
    console.error("❌ Database fetch error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
