const categories = [
  "All",
  "Reviews",
  "News",
  "Opinion",
  "Guides",
  "Trending",
];

export default function Sidebar() {
  return (
    <nav className="w-full bg-base-100 rounded-xl shadow-md p-6 flex flex-col gap-6 sticky top-24">
      {/* Search bar */}
      <div>
        <label htmlFor="search" className="block text-sm font-semibold text-base-content mb-2">
          Search
        </label>
        <div className="relative">
          <input
            id="search"
            type="text"
            placeholder="Search articles..."
            className="input input-bordered w-full pr-10 text-base-content/90"
            aria-label="Search articles"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" /></svg>
          </span>
        </div>
      </div>
      {/* Category links */}
      <div>
        <h2 className="text-sm font-semibold text-base-content mb-2">Categories</h2>
        <ul className="flex flex-col gap-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                className="btn btn-sm btn-ghost w-full justify-start text-base-content/80 hover:bg-accent/10 hover:text-primary rounded-lg transition-colors duration-150"
                aria-label={`View ${category} articles`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 