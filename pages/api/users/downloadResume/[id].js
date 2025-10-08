// pages/api/users/downloadResume/[id].js
import pool from "@/lib/db";
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query;

  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT resume_filename, resume FROM applications WHERE id = $1`,
      [id]
    );
    client.release();

    if (result.rows.length === 0 || !result.rows[0].resume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    const { resume_filename, resume } = result.rows[0];

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${resume_filename || "resume.pdf"}"`
    );

    res.send(resume);
  } catch (err) {
    console.error("❌ Resume download error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
