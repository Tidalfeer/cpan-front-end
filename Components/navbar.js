"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
      <Link href="/counter" className={pathname === "/counter" ? "active" : ""}>Counter</Link>
      <Link href="/toggle" className={pathname === "/toggle" ? "active" : ""}>Toggle</Link>
      <Link href="/form" className={pathname === "/form" ? "active" : ""}>Form</Link>
    </nav>
  );
}