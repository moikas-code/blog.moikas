import Image from "next/image";

// Use snake_case for props
export type ArticleCardProps = {
  image: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  read_time: string;
  comment_count: number;
  tag?: string;
};

export default function ArticleCard({ image, title, description, author, avatar, date, read_time, comment_count, tag }: ArticleCardProps) {
  // Badge color logic
  let badge_class =
    "badge rounded-full font-bold px-3 py-1 mb-1 text-xs tracking-wider uppercase shadow-md font-mono transition-colors duration-150 cursor-pointer select-none";
  let badge_style = {};
  if (tag === "REVIEW") {
    badge_class += " bg-accent text-black hover:bg-yellow-300";
    badge_style = { boxShadow: "0 2px 6px 0 #ffd70033" };
  } else if (tag === "NEWS") {
    badge_class += " bg-secondary text-white hover:bg-green-400";
    badge_style = { boxShadow: "0 2px 6px 0 #22c55e33" };
  } else if (tag === "OPINION") {
    badge_class += " bg-primary text-white hover:bg-purple-400";
    badge_style = { boxShadow: "0 2px 6px 0 #a78bfa33" };
  } else if (tag) {
    badge_class += " bg-black text-white hover:bg-neutral-700";
    badge_style = { boxShadow: "0 2px 6px 0 #00000033" };
  }
  return (
    <div
      className="group card bg-base-100 shadow-md border border-base-200 hover:shadow-2xl hover:border-accent/80 transition-all duration-200 rounded-xl overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-accent/70 focus-within:ring-offset-2"
      tabIndex={0}
      aria-label={`Read article: ${title}`}
    >
      <figure className="aspect-3/2 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-cover w-full group-hover:scale-105 transition-transform duration-200 p-3"
        />
      </figure>
      <div className="card-body p-3 font-mono">
        {/* Category/Tag Badge */}
        {tag && (
          <div className="flex items-center mb-1">
            <span
              className={badge_class}
              style={badge_style}
              tabIndex={0}
              aria-label={`Category: ${tag}`}
            >
              {tag}
            </span>
          </div>
        )}
        <span className="card-title text-md font-extrabold leading-tight text-base-content mb-0.5 font-mono">
          {title}
        </span>
        {/* Author and Meta Info */}
        <div className="flex items-center gap-3 mt-2 mb-1">
          <div className="flex-shrink-0">
            <Image
              src={avatar}
              alt={author}
              width={40}
              height={40}
              className="rounded-full border border-accent shadow-sm object-cover"
              style={{ minWidth: 40, minHeight: 40 }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-primary text-sm leading-tight">{author}</span>
            <span className="text-xs text-secondary mt-0.5">
              {date} &bull; {read_time} read &bull; {comment_count} comments
            </span>
          </div>
        </div>
        <div className="card-actions justify-between items-center mt-1 font-mono">
          {/* Description or other actions can go here */}
        </div>
      </div>
    </div>
  );
} 