import { fetchTokenVerification } from "../../../../lib/checkAuthToken";

export async function POST(req) {
  const token = req.headers.get("authorization");
  console.log(token);
  if (!token) {
    return new Response(
      JSON.stringify({ status: "error", message: "Token is required" }),
      { status: 400 }
    );
  }

  const user = await fetchTokenVerification(token);

  console.log(user);
  if (!user) {
    return new Response(
      JSON.stringify({ status: "error", message: "Invalid token" }),
      { status: 401 }
    );
  }

  return new Response(
    JSON.stringify({
      status: "success",
      message: "Token is valid",
      data: user,
    }),
    { status: 200 }
  );
}
