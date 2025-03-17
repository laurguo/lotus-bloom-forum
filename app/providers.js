"use client";

/*
 * Providers in React create a context that can be accessed by child components
 * throughout the component tree.
 *
 * This is really nice because sometimes we may want Auth0's user information to be available
 * throughout the entire app, without having to worry about passing it down through props!
 *
 * This file sets up Auth0's UserProvider:
 *
 * UserProvider: This is Auth0's context provider that:
 *    - Manages authentication state across the application
 *    - Provides user information to any component that needs it
 *    - Handles authentication sessions
 *    - Makes auth-related functions available (login, logout, etc.)
 *
 * Usage:
 * - This provider wraps the entire application (imported in layout.js)
 * - Child components can access auth data using the useUser() hook
 * - Example: const { user, isLoading } = useUser();
 */

import { UserProvider } from "@auth0/nextjs-auth0/client";

export function Providers({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
