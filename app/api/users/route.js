import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle GET request - fetch all users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return Response.json(users, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// Handle POST request - create a new user
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return Response.json({ error: "Name and Email are required" }, { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: { name, email },
    });

    return Response.json(newUser, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Failed to create user" }, { status: 500 });
  }
}
