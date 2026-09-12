// middleware.js  (project root — same level as package.json)
import { NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/session";

export const config = {
  matcher: ["/admin/:path*"],
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Let the login page itself through — otherwise no one could ever log in.
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const adminId = await verifySessionToken(token);

  if (!adminId) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
