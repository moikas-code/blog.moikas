import Navbar from "../components/navbar";
import ArticleCard from "../components/article_card";

const featuredArticle = {
  image: "/next.svg",
  title: "Doom: The Dark Ages: The Kotaku Review",
  description: "Id Software's prequel is a big, heavy metal adventure with a few too many cutscenes.",
  author: "Jane Doe",
  tag: "REVIEW",
};

const sideArticles = [
  {
    image: "/vercel.svg",
    title: "Blizzard's Overwatch Team Just Unionized: 'What I Want To Protect Most Here Is The People'",
    description: "A look at the new era for Overwatch devs.",
    author: "John Smith",
  },
  {
    image: "/globe.svg",
    title: "The New Pope Plays Video Games",
    description: "Unexpected hobbies of world leaders.",
    author: "Alex Pope",
  },
  {
    image: "/file.svg",
    title: "Overwatch 2's Street Fighter Collaboration Would Be Cool If The Game Wasn't Becoming Fortnite",
    description: "Crossover events and their impact on gaming culture.",
    author: "Sam Lee",
  },
  {
    image: "/window.svg",
    title: "The Solution To Nintendo's Ineffective Battle Against Piracy Isn't Bricking People's Switches",
    description: "Exploring better ways to fight piracy.",
    author: "Chris N.",
  },
];

const bottomArticles = [
  {
    image: "/vercel.svg",
    title: "GTA 6's Delay Has Reportedly Led To Chaos At Other Studios And Publishers",
    description: "Industry ripple effects from a major delay.",
    author: "Morgan R.",
  },
  {
    image: "/globe.svg",
    title: "Andor's Latest Episodes Are The Best Yet And We Aren't Ready For It To End",
    description: "A review of the latest Andor episodes.",
    author: "Jamie F.",
  },
  {
    image: "/file.svg",
    title: "Epic Is Promising Bonus V-Bucks To Fortnite Players Who Buy Directly From Its Store",
    description: "Epic's new incentive for direct purchases.",
    author: "Taylor S.",
  },
  {
    image: "/window.svg",
    title: "One Surprising Switch 2 Launch Game Sold Me On The Console",
    description: "A hands-on preview of a Switch 2 launch title.",
    author: "Jordan P.",
  },
  {
    image: "/next.svg",
    title: "Grand Theft Auto 6's Jason Is Gaymers' Latest Sex Symbol",
    description: "Representation in gaming's biggest franchise.",
    author: "Pat Q.",
  },
  {
    image: "/vercel.svg",
    title: "Fallout Season 2 Is Done Filming So Walton Goggins Is Back—And It's Bipartisan",
    description: "Behind the scenes of Fallout's next season.",
    author: "Casey L.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main featured article */}
          <div className="md:col-span-2">
            <ArticleCard {...featuredArticle} />
          </div>
          {/* Side articles */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((article, idx) => (
              <ArticleCard key={idx} {...article} />
            ))}
          </div>
        </div>
        {/* Bottom grid of articles */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bottomArticles.map((article, idx) => (
            <ArticleCard key={idx} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
}
