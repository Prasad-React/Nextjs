// pages/api/users/apply.js

import { IncomingForm } from 'formidable'; // Parses incoming form data (multipart/form-data)
import fs from 'fs'; // Reads the uploaded file from the file system
import pool from "@/lib/db";// PostgreSQL client for Node.js

export const config = {
  api: {
    bodyParser: false, // required for formidable
  },
};

// Parse multipart form data
function parseForm(req) {
  const form = new IncomingForm({ 
    keepExtensions: true, 
    maxFileSize: 10 * 1024 * 1024 
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fields, files } = await parseForm(req);
    
    // Log files for debugging
    console.log("Parsed fields:", fields);
    console.log("Parsed files:", files);

 

    // Extract string values safely
const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
const mobileNumber = Array.isArray(fields.mobileNumber) ? fields.mobileNumber[0] : fields.mobileNumber;
const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;

const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;

    if (!name || !mobileNumber || !email || !resumeFile) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const filePath = resumeFile.filepath || resumeFile.path; // Support both v2 and legacy
    if (!filePath) {
      return res.status(400).json({ error: 'Uploaded file has no path.' });
    }

    const resumeBuffer = fs.readFileSync(filePath);

    const client = await pool.connect();
    const result = await client.query(
      `INSERT INTO applications (name, mobile_number, email, resume, resume_filename)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [name, mobileNumber, email, resumeBuffer, resumeFile.originalFilename || resumeFile.newFilename]
    );
    client.release();

    return res.status(200).json({ success: true, applicationId: result.rows[0].id });
  } catch (error) {
    console.error('Form parse or DB error:', error);
    return res.status(500).json({ error: 'Server error while processing your application.' });
  }
}
