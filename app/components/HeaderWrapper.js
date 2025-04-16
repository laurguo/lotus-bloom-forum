"use client";

import { usePathname } from "next/navigation";
import LotusBloomHeader from "./header/LotusBloomHeader";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return null;
  }

  return <LotusBloomHeader />;
}
