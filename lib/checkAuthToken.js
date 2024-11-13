import jwt from "jsonwebtoken";
import prisma from "./prisma";

export async function fetchTokenVerification(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { username: decoded.username },
    });

    if (!user) {
      return false;
    }

    return { username: decoded.username, userId: user.id };
  } catch (error) {
    console.error("Token verification failed:", error);
    return false;
  }
}
