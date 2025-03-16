import { handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleLogin({
  authorizationParams: {
    // Specify the passwordless email connection
    connection: "email",
    // Force the passwordless flow
    prompt: "login",
  },
  returnTo: "/site-selection",
});
