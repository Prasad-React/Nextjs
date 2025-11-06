import bcrypt from "bcryptjs";

async function generateHash() {
  const password = "Prasad@#123";
  const hash = await bcrypt.hash(password, 10);
  console.log("Generated hash:", hash);
}

generateHash();
