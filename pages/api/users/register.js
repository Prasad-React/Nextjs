import pool from "@/lib/db";
import bcrypt from "bcryptjs";


export async function POST(req) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await pool.connect();

    await client.query(
      "INSERT INTO users (username, password_hash) VALUES ($1, $2)",
      [username, hashedPassword]
    );
    client.release();

    return new Response(JSON.stringify({ message: "Admin created successfully" }), { status: 201 });
  } catch (err) {
    console.error("❌ Admin registration error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
