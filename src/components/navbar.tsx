'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav_links = [
  { href: "/", label: "Home" },
  { href: "/latest", label: "Latest" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  return (
    <nav className="navbar bg-base-100 shadow-md px-4 py-2 flex justify-between items-center sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-extrabold tracking-tight text-primary">
          blog.moikas
        </span>
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-2">
          {nav_links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-1 rounded transition-colors duration-150 font-medium text-base-content/90 hover:text-primary focus:outline-none focus:text-primary ${pathname === link.href ? "border-b-2 border-primary text-primary" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn btn-ghost btn-circle" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle avatar placeholder" aria-label="User profile">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span className="text-xs">U</span>
          </div>
        </button>
      </div>
    </nav>
  );
} 