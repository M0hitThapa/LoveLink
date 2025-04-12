import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./authEdge";
import { publicRoutes, authRoutes } from "./routes";

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const { auth: token } = await auth(req);
  const isLoggedIn = !!token;

  const path = nextUrl.pathname;
  const isPublic = publicRoutes.includes(path);
  const isAuthRoute = authRoutes.includes(path);

  if (isAuthRoute && isLoggedIn) {
    if (path !== "/members") {
      return NextResponse.redirect(new URL("/members", nextUrl));
    }
    return NextResponse.next();
  }

  if (!isPublic && !isAuthRoute && !isLoggedIn) {
    if (path !== "/login") {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
