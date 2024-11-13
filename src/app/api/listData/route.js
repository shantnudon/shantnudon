import prisma from "../../../../lib/prisma";

export async function GET(req) {
  try {
    const data = await prisma.List.findMany({
      select: {
        name: true,
        type: true,
        status: true,
        imdb: true,
        review: true,
      },
    });

    return new Response(JSON.stringify({ data }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
