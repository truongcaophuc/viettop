// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const LOCALES = ["vi", "en"] as const;

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const first = pathname.split("/")[1];
  if (LOCALES.includes(first as any)) {
    const rest = pathname.split("/").slice(2).join("/");
    const cleanPath = "/" + (rest ? rest : "");
    const url = req.nextUrl.clone();
    url.pathname = cleanPath;
    url.search = search;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] };
