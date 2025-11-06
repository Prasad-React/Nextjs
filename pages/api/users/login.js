import pool from "@/lib/db";
import bcrypt from "bcryptjs";

const hash = "$2b$10$TKi4t7v5x0R6BddKtsIuCe4N4aIhyo0QSr52HYlLuV8B8o7BqoqWq";
const password = "Prasad@#123"; 
console.log(hash);
console.log(password);
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { username, password } = req.body;

    const client = await pool.connect();
    const result = await client.query(
      'SELECT * FROM users WHERE TRIM(LOWER(username)) = TRIM(LOWER($1))',
      [username]
    );
    client.release();

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid username" });
    }

    const admin = result.rows[0];
    const valid = await bcrypt.compare(password, admin.password_hash);

    if (!valid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("❌ Admin login error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
