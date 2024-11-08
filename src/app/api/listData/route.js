import prisma from "../../../../lib/prisma";

export async function GET(req) {
  try {
    const data = await prisma.List.findMany();
    return new Response({
      datsent: data,
    });
  } catch (error) {
    console.log(error);
  }
}
