"use client";

import { usePathname } from "next/navigation";

/*
 * TODO:
 * - Implement the actual drawer component
 */

export default function DrawerWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return <div>drawer placeholder</div>;
}
