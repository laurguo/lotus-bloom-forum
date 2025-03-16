/*
The Auth0 SDK uses this pattern to create a single API route file that can handle all Auth0-related operations.
What this route does
This is the main entry point for all Auth0 authentication operations in your app. The handleAuth() function creates a route handler that:

Intercepts requests to various auth-related paths
Dispatches them to the appropriate Auth0 handlers based on the URL
Manages all the Auth0 authentication flows

Specifically, when called without arguments like this, handleAuth() automatically sets up handlers for:

/api/auth/login: Initiates the login flow
/api/auth/logout: Handles user logout
/api/auth/callback: Processes the callback after Auth0 authentication
/api/auth/me: Returns the user profile when authenticated

Rather than creating separate route files for each of these endpoints, the Auth0 SDK uses this dynamic route approach to handle everything in one place.
*/

import { handleAuth } from "@auth0/nextjs-auth0";

export const GET = async (req, { params }) => {
  // Await the params first
  const p = await params;
  const auth0Param = p.auth0;

  // Then pass to custom handler that uses auth0Param
  const authHandler = handleAuth({});

  return authHandler(req, { params: { auth0: auth0Param } });
};
