import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import ListPeople from "./src/data/list.json";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // middleware jalan di semua path
};
