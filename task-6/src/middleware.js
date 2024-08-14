import { NextResponse } from "next/server";

export function middleware(req) {
  const response = NextResponse.next();

  //checks if the cookie is already present
  if (req.cookies.get("AB_COOKIE")) {
    return response;
  }

  //sets the cookie to 'a' or 'b' randomly, if it is not already present
  const version = Math.random() < 0.5 ? "a" : "b";
  response.cookies.set("AB_COOKIE", version, {
    maxAge: 60,
  });
  return response;
}

export const config = {
  matcher: "/",
};
