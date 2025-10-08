// pages/api/contact.js
import pool from "@/lib/db";



export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const {
    initial,
    firstName,
    lastName,
    mobileNumber,
    email,
    companyName,
    message,
    category,
  } = req.body;

  if (!firstName || !mobileNumber || !email || !message) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  try {
    const query = `
      INSERT INTO contact_messages (
        initial, first_name, last_name, mobile_number, email, company_name, message, category
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;

    const values = [
      initial,
      firstName,
      lastName,
      mobileNumber,
      email,
      companyName,
      message,
      category,
    ];

    await pool.query(query, values);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("DB error:", error);
    res.status(500).json({ message: "Server error" });
  }
}
