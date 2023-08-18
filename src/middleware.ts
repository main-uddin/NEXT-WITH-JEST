import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === "/sign-in";
    
    const token = request.cookies.get("OutSiteJWT")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
    }
}

export const config = {
    matcher: ["/", "/protected", "/sign-in", "/testing-components"],
};