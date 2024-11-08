import prisma from "../../../../lib/prisma";
import jwt from "jsonwebtoken"; // For creating the JWT token

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: "Username and password are required." }),
        { status: 400 }
      );
    }

    const user = await prisma.User.findUnique({
      where: { username },
    });
    // console.log(user);

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found." }), {
        status: 404,
      });
    }

    if (password !== user.password) {
      return new Response(JSON.stringify({ error: "Incorrect password." }), {
        status: 401,
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        type: user.type,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return new Response(
      JSON.stringify({ message: "Authentication successful", token }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
    });
  }
}
