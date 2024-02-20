"use client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest): NextResponse<unknown> {
  // Check if the requested URL is one of the protected routes
  const protectedRoutes = ["/quiz", "/dashboard"];
  const requestedUrl = new URL(request.url).pathname;

  try {
    if (protectedRoutes.includes(requestedUrl)) {
      // If the requested URL is a protected route, check if the user is authenticated
      const currentUser = request.cookies.get("authUser");

      if (currentUser == null) {
        // If the user is not authenticated, redirect to the login page
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  } catch (error) {
    console.log("error in middleware");
  }

  // If the requested URL is not a protected route, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
