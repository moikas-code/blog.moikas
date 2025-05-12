import Navbar from "../components/navbar";
import ArticleCard from "../components/article_card";
import Sidebar from "../components/sidebar";

const articles = [
  {
    image: "/default-article-image.png",
    title: "Doom: The Dark Ages: The Kotaku Review",
    author: "Jane Doe",
    avatar: "/default-avatar.png",
    date: "Jan 1, 2025",
    read_time: "5 min",
    comment_count: 12,
    tag: "REVIEW",
  },
  {
    image: "/default-article-image.png",
    title: "Blizzard's Overwatch Team Just Unionized: 'What I Want To Protect Most Here Is The People'",
    author: "John Smith",
    avatar: "/default-avatar.png",
    date: "Jan 2, 2025",
    read_time: "4 min",
    comment_count: 8,
    tag: "NEWS",
  },
  {
    image: "/default-article-image.png",
    title: "The New Pope Plays Video Games",
    author: "Alex Pope",
    avatar: "/default-avatar.png",
    date: "Jan 3, 2025",
    read_time: "3 min",
    comment_count: 5,
    tag: "OPINION",
  },
  {
    image: "/default-article-image.png",
    title: "Overwatch 2's Street Fighter Collaboration Would Be Cool If The Game Wasn't Becoming Fortnite",
    author: "Sam Lee",
    avatar: "/default-avatar.png",
    date: "Jan 4, 2025",
    read_time: "6 min",
    comment_count: 10,
    tag: "NEWS",
  },
  {
    image: "/default-article-image.png",
    title: "The Solution To Nintendo's Ineffective Battle Against Piracy Isn't Bricking People's Switches",
    author: "Chris N.",
    avatar: "/default-avatar.png",
    date: "Jan 5, 2025",
    read_time: "7 min",
    comment_count: 3,
    tag: "REVIEW",
  },
  {
    image: "/default-article-image.png",
    title: "GTA 6's Delay Has Reportedly Led To Chaos At Other Studios And Publishers",
    author: "Morgan R.",
    avatar: "/default-avatar.png",
    date: "Jan 6, 2025",
    read_time: "8 min",
    comment_count: 15,
    tag: "NEWS",
  },
  {
    image: "/default-article-image.png",
    title: "Andor's Latest Episodes Are The Best Yet And We Aren't Ready For It To End",
    author: "Jamie F.",
    avatar: "/default-avatar.png",
    date: "Jan 7, 2025",
    read_time: "5 min",
    comment_count: 7,
    tag: "OPINION",
  },
  {
    image: "/default-article-image.png",
    title: "Epic Is Promising Bonus V-Bucks To Fortnite Players Who Buy Directly From Its Store, and It's Already Backfiring plus a lot of other text for testing purposes",
    author: "Taylor S.",
    avatar: "/default-avatar.png",
    date: "Jan 8, 2025",
    read_time: "4 min",
    comment_count: 9,
    tag: "NEWS",
  },
  {
    image: "/default-article-image.png",
    title: "One Surprising Switch 2 Launch Game Sold Me On The Console",
    author: "Jordan P.",
    avatar: "/default-avatar.png",
    date: "Jan 9, 2025",
    read_time: "6 min",
    comment_count: 2,
    tag: "REVIEW",
  },
  {
    image: "/default-article-image.png",
    title: "Grand Theft Auto 6's Jason Is Gaymers' Latest Sex Symbol",
    author: "Pat Q.",
    avatar: "/default-avatar.png",
    date: "Jan 10, 2025",
    read_time: "5 min",
    comment_count: 11,
    tag: "NEWS",
  },
  {
    image: "/default-article-image.png",
    title: "Fallout Season 2 Is Done Filming So Walton Goggins Is Back—And It's Bipartisan",
    author: "Casey L.",
    avatar: "/default-avatar.png",
    date: "Jan 11, 2025",
    read_time: "7 min",
    comment_count: 6,
    tag: "OPINION",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-base-200 via-base-100 to-accent/10">
      <Navbar />
      <main className="max-w-7xl mx-auto px-2 sm:px-6 py-8 flex gap-8">
        {/* Sticky sidebar for categories/search */}
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start z-10">
          <Sidebar />
        </aside>
        {/* Article grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <ArticleCard key={idx} {...article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
