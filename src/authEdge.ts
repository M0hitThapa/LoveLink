import { getToken } from "next-auth/jwt";
import { type NextRequest } from "next/server";

export async function auth(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  return { auth: token };
}
