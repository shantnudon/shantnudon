import prisma from "../../../../lib/prisma";
import { fetchTokenVerification } from "../../../../lib/checkAuthToken";

export async function POST(req) {
  try {
    const token = req.headers.get("authorization");

    if (!token) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Authorization header is missing",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Token received:", token);

    const verified = await fetchTokenVerification(token);

    if (!verified) {
      return new Response(
        JSON.stringify({
          status: "error",
          message: "Invalid or expired token",
        }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    const { name, type, status, imdb, review } = await req.json();

    console.log(name, type, status, imdb, review);

    if (!name || !type || !status || !imdb || !review) {
      return new Response(
        JSON.stringify({ status: "error", message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    console.log(verified);

    const newList = await prisma.List.create({
      data: {
        name: name,
        type: type,
        status: status,
        imdb: imdb,
        review: review,
      },
    });

    const newListWithStringId = {
      ...newList,
      id: newList.id.toString(), 
    };

    return new Response(
      JSON.stringify({
        status: "success",
        message: "List created successfully",
        list: newListWithStringId,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ status: "error", message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
