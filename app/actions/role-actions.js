"use server";

import { getSession } from "@auth0/nextjs-auth0";
import { ManagementClient } from "auth0";

export async function assignRole(user, roleType) {
  // Validate the role type
  if (!roleType || !["Family Navigator", "Admin"].includes(roleType)) {
    return {
      success: false,
      error: "Invalid role type",
    };
  }

  // Check domain restriction for Admin role
  if (
    roleType === "Admin" &&
    (!user.email || !user.email.endsWith("@lotusbloomfamily.org"))
  ) {
    return {
      success: false,
      error:
        "Admin role is only available for @lotusbloomfamily.org email addresses",
    };
  }

  try {
    const auth0 = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
      clientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
    });

    let roleId;
    if (roleType === "Family Navigator") {
      roleId = process.env.AUTH0_FAMILY_NAVIGATOR_ROLE_ID;
    } else if (roleType === "Admin") {
      roleId = process.env.AUTH0_ADMIN_ROLE_ID;
    }

    if (!roleId) {
      return {
        success: false,
        error: "Role ID not configured",
      };
    }

    // Assign the role to the user
    await auth0.users.assignRoles({ id: user.sub }, { roles: [roleId] });

    return {
      success: true,
      message: `Successfully assigned ${roleType} role`,
    };
  } catch (error) {
    console.error("Error assigning role:", error);
    return {
      success: false,
      error: "Failed to assign role. Please try again later.",
    };
  }
}

export async function assignRoleSelf(roleType) {
  // Get the authenticated user session
  const session = await getSession();

  if (!session || !session.user) {
    return {
      success: false,
      error: "Not authenticated",
    };
  }

  const { user } = session;

  return assignRole(user, roleType);
}
