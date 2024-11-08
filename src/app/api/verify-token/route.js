import jwt from "jsonwebtoken";
import prisma from "../../../../lib/prisma";

export async function POST(req) {
  const { token } = await req.json(); // Get the token from the request body
  console.log(token);
  if (!token) {
    return new Response(
      JSON.stringify({ status: "error", message: "Token is required" }),
      { status: 400 }
    );
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your JWT secret here

    // Extract the username from the decoded token
    const { username } = decoded;

    // Fetch user from the database using Prisma
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ status: "error", message: "User not found" }),
        { status: 404 }
      );
    }

    // Return the user data along with a success message
    return new Response(
      JSON.stringify({
        status: 200,
        message: "Token verified successfully",
        user: {
          userId: user.id,
          username: user.username,
          userType: user.userType,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying token:", error);
    return new Response(
      JSON.stringify({ status: "error", message: "Invalid token or expired" }),
      { status: 401 }
    );
  }
}
