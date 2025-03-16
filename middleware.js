import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export default withMiddlewareAuthRequired(async function middleware(req) {
  const url = req.nextUrl.pathname;
  console.log("Middleware running for path:", url);
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Explicitly list protected routes - ONLY these will be protected
    "/edit-roles",
    "/all-user-roles",
    "/site-selection",
    "/:site/:post_id*",
    "/:site",
  ],
};
