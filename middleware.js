import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

/*
 * Middleware in Next.js acts as a layer that runs before requests reach their destination routes.
 * This middleware specifically handles authentication using Auth0:
 *
 * 1. withMiddlewareAuthRequired: This is an Auth0 wrapper that ensures users are authenticated
 *    before accessing protected routes. If a user isn't logged in, they'll be redirected to
 *    the Auth0 login page.
 *
 * 2. Protected Routes (see matcher config):
 *
 * Any attempt to access these routes without authentication will trigger the Auth0
 * authentication flow. After successful login, users will be redirected back to
 * their intended destination.
 *
 * IMPORTANT: This means that if you want to add additional routes that are not protected, you need to add them to the matcher array.
 */

export default withMiddlewareAuthRequired(async function middleware(req) {
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Explicitly list protected routes - ONLY these will be protected
    "/edit-roles",
    "/edit-all-roles",
    "/complete-profile",
    "/site-selection",
    "/site/:site/:post_id*",
    "/site/:site",
  ],
};
