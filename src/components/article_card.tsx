import Image from "next/image";

// Use snake_case for props
export type ArticleCardProps = {
  image: string;
  title: string;
  author: string;
  avatar: string;
  date: string;
  read_time: string;
  comment_count: number;
  tag?: string;
};

export default function ArticleCard({ image, title, author, avatar, date, read_time, comment_count, tag }: ArticleCardProps) {
  // Default image if none provided
  const default_image = "/default-article-image.png"; // Place your default image in the public folder with this name
  const image_src = image || default_image;
  // Badge color logic (always green/white for this design)
  const badge_class =
    "badge absolute top-3 left-3 rounded-full font-bold px-3 py-1 text-xs tracking-wider uppercase shadow-md font-mono transition-colors duration-150 select-none z-10 bg-green-500 text-white border-none";
  const badge_style = { boxShadow: "0 2px 6px 0 #22c55e33" };

  return (
    <div
      className="card relative bg-black border border-yellow-400 shadow-lg hover:shadow-2xl transition-all duration-200 rounded-xl overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-yellow-400/70 focus-within:ring-offset-2 aspect-square group transform-gpu hover:scale-105 min-h-[260px] flex flex-col"
      tabIndex={0}
      aria-label={`Read article: ${title}`}
    >
      {/* Category/Tag Badge */}
      {tag && (
        <span
          className={badge_class}
          style={badge_style}
          tabIndex={0}
          aria-label={`Category: ${tag}`}
        >
          {tag}
        </span>
      )}
      {/* Image (fills card, dark overlay for contrast) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={image_src}
          alt={title}
          fill
          className="object-cover w-full h-full opacity-60"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full px-4 pt-6 pb-4">
        {/* Title */}
        <h2
          className="text-center font-extrabold text-lg md:text-xl text-white mb-3 break-words leading-tight drop-shadow-lg line-clamp-2 max-h-[3.2em] min-h-[3.2em]"
          style={{ wordBreak: 'break-word' }}
        >
          {title.length > 100 ? title.slice(0, 100) + '…' : title}
        </h2>
        {/* Author and Meta Info */}
        <div className="flex w-full items-center gap-3 mb-4 min-h-[40px]">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={avatar}
              alt={author}
              width={40}
              height={40}
              className="rounded-full border-2 border-yellow-400 shadow object-cover"
              style={{ minWidth: 40, minHeight: 40 }}
            />
          </div>
          <div className="flex flex-col justify-center flex-1 items-end ml-2">
            <span className="text-xs text-green-400 font-mono text-right">
              {date} &bull; {read_time} read &bull; {comment_count} comments
            </span>
          </div>
        </div>
        {/* Spacer to push button to bottom if content is short */}
        <div className="flex-1" />
        {/* Read More Button */}
        <div className="w-full flex justify-center mt-2">
          <button
            className="btn bg-yellow-400 text-black font-bold px-4 py-2 rounded transition-colors duration-200 hover:bg-purple-500 hover:text-yellow-400 focus:outline-none w-full max-w-xs shadow-md border-none"
            tabIndex={0}
            aria-label={`Read more about: ${title}`}
            style={{ minHeight: 44 }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
} 