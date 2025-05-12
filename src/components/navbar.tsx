'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { useTheme } from 'next-themes';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';

const nav_links = [
  { href: "/", label: "Home" },
  { href: "/latest", label: "Latest" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menu_open, set_menu_open] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const is_dark = resolvedTheme === 'blogdark';
  const [mounted, set_mounted] = useState(false);

  useEffect(() => {
    set_mounted(true);
  }, []);

  // Ensure theme is set on mount for SSR hydration
  useEffect(() => {
    if (!theme) setTheme('bloglight');
  }, [theme, setTheme]);

  function handle_toggle_theme() {
    setTheme(is_dark ? 'bloglight' : 'blogdark');
  }

  if (!mounted) {
    // Prevent hydration mismatch by not rendering theme-dependent UI until mounted
    return null;
  }

  return (
    <nav
      className="navbar sticky top-0 z-30 bg-black shadow-lg px-4 py-2 flex justify-between items-center transition-shadow duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Left: Logo and Desktop Nav Links */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Link href="/" aria-label="Go to homepage" className="flex items-center">
          <Logo />
        </Link>
        {/* Desktop Nav Links */}
        <ul className="menu menu-horizontal px-1 gap-2 hidden md:flex">
          {nav_links.map((link) => (
            <li key={link.href} className="">
              <Link
                href={link.href}
                className={`px-3 py-1 rounded font-medium transition-colors duration-200 focus:outline-none text-[#ffe066] hover:text-accent focus:text-accent active:text-accent ${pathname === link.href ? "text-accent border-b-2 border-accent" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Authenticated-only links */}
          <SignedIn>
            <li>
              <Link
                href="/dashboard"
                className={`px-3 py-1 rounded font-medium transition-colors duration-200 focus:outline-none text-[#ffe066] hover:text-accent focus:text-accent active:text-accent ${pathname === "/dashboard" ? "text-accent border-b-2 border-accent" : ""}`}
                aria-current={pathname === "/dashboard" ? "page" : undefined}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={`px-3 py-1 rounded font-medium transition-colors duration-200 focus:outline-none text-[#ffe066] hover:text-accent focus:text-accent active:text-accent ${pathname === "/profile" ? "text-accent border-b-2 border-accent" : ""}`}
                aria-current={pathname === "/profile" ? "page" : undefined}
              >
                Profile
              </Link>
            </li>
          </SignedIn>
        </ul>
      </div>
      {/* Right: Search Bar and User/Profile Buttons */}
      <div className="flex items-center gap-2">
        {/* Search Bar */}
        <form
          role="search"
          className="hidden md:flex items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            name="search"
            aria-label="Search articles"
            placeholder="Search..."
            className="bg-black border-2 border-secondary text-[#ffe066] placeholder-accent rounded-md px-3 py-1 w-32 focus:w-48 transition-all duration-300 outline-none focus:border-accent focus:shadow-lg text-base"
            style={{ minWidth: "0" }}
          />
        </form>
        {/* Theme Switcher Toggle */}
        <button
          type="button"
          aria-label={is_dark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={handle_toggle_theme}
          className="btn btn-ghost btn-circle transition-colors duration-300 flex items-center justify-center"
        >
          <span className="sr-only">Toggle theme</span>
          <span className="transition-transform duration-300">
            {is_dark ? (
              // Moon icon (purple)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  fill="#a78bfa"
                />
              </svg>
            ) : (
              // Sun icon (gold)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="5" fill="#ffd700" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="#ffd700"
                />
              </svg>
            )}
          </span>
        </button>
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="btn btn-ghost btn-circle"
            aria-label="Open menu"
            aria-expanded={menu_open}
            aria-controls="mobile_menu"
            onClick={() => set_menu_open((open) => !open)}
            tabIndex={0}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#ffe066]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Mobile Dropdown Menu */}
          {menu_open && (
            <ul
              id="mobile_menu"
              className="absolute top-16 left-2 right-2 bg-black rounded-lg shadow-lg p-4 flex flex-col gap-2 z-40 animate-fade-in"
              role="menu"
            >
              {nav_links.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 rounded font-medium text-[#ffe066] hover:text-accent focus:text-accent active:text-accent transition-colors duration-200 ${pathname === link.href ? "text-accent bg-neutral/20" : ""}`}
                    aria-current={pathname === link.href ? "page" : undefined}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => set_menu_open(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Authenticated-only links for mobile */}
              <SignedIn>
                <li role="none">
                  <Link
                    href="/dashboard"
                    className={`block px-4 py-2 rounded font-medium text-[#ffe066] hover:text-accent focus:text-accent active:text-accent transition-colors duration-200 ${pathname === "/dashboard" ? "text-accent bg-neutral/20" : ""}`}
                    aria-current={pathname === "/dashboard" ? "page" : undefined}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => set_menu_open(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/profile"
                    className={`block px-4 py-2 rounded font-medium text-[#ffe066] hover:text-accent focus:text-accent active:text-accent transition-colors duration-200 ${pathname === "/profile" ? "text-accent bg-neutral/20" : ""}`}
                    aria-current={pathname === "/profile" ? "page" : undefined}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => set_menu_open(false)}
                  >
                    Profile
                  </Link>
                </li>
              </SignedIn>
              <li className="mt-2">
                <form
                  role="search"
                  className="flex items-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="search"
                    name="search"
                    aria-label="Search articles"
                    placeholder="Search..."
                    className="bg-black border-2 border-secondary text-[#ffe066] placeholder-accent rounded-md px-3 py-1 w-full focus:w-full transition-all duration-300 outline-none focus:border-accent focus:shadow-lg text-base"
                  />
                </form>
              </li>
            </ul>
          )}
        </div>
        {/* Clerk Auth Buttons */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn bg-yellow-400 text-black font-bold px-4 py-2 rounded transition-colors duration-200 hover:bg-purple-500 hover:text-yellow-400 focus:outline-none min-h-[48px] min-w-[48px] ml-2">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{ elements: { avatarBox: 'ring-2 ring-green-400' } }} />
          <SignOutButton redirectUrl="/">
            <button className="btn bg-yellow-400 text-black font-bold px-4 py-2 rounded transition-colors duration-200 hover:bg-purple-500 hover:text-yellow-400 focus:outline-none min-h-[48px] min-w-[48px] ml-2">
              Sign Out
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </nav>
  );
} 