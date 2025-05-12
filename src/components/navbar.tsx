import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-md px-4 py-2 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-extrabold tracking-tight text-primary">
          blog.moikas
        </span>
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/latest">Latest</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/opinion">Opinion</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span className="text-xs">U</span>
          </div>
        </button>
      </div>
    </nav>
  );
} 