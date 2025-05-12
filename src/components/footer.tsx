import Link from "next/link";

const footer_links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black py-6 px-4 mt-8 border-t border-base-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left: Links */}
        <nav className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div className="flex flex-row justify-center md:justify-start gap-4">
            {footer_links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary font-bold text-sm md:text-base transition-colors duration-150 hover:text-accent focus:text-accent px-2 py-1 rounded focus:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        {/* Right: Social Icons */}
        <div className="flex flex-row justify-center md:justify-end gap-4 items-center">
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-colors duration-150 text-accent hover:text-primary"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 5.92c-.8.36-1.67.61-2.58.72a4.48 4.48 0 001.97-2.48 8.94 8.94 0 01-2.83 1.08 4.48 4.48 0 00-7.63 4.08A12.7 12.7 0 013 4.89a4.48 4.48 0 001.39 5.98c-.73-.02-1.42-.22-2.02-.56v.06a4.48 4.48 0 003.6 4.39c-.34.09-.7.14-1.07.14-.26 0-.51-.02-.76-.07a4.48 4.48 0 004.18 3.11A8.98 8.98 0 012 19.54a12.67 12.67 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.59a9.1 9.1 0 002.23-2.32z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors duration-150 text-accent hover:text-primary"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm6.13.88a1.13 1.13 0 11-2.25 0 1.13 1.13 0 012.25 0z" />
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-150 text-accent hover:text-primary"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.38 9.38 0 0112 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-4 text-center">
        <span className="text-secondary font-mono text-xs md:text-sm">
          © 2025 blog.moikas. All rights reserved.
        </span>
      </div>
    </footer>
  );
} 