import Image from "next/image";

// Use snake_case for props
export type ArticleCardProps = {
  image: string;
  title: string;
  description: string;
  author: string;
  tag?: string;
};

export default function ArticleCard({ image, title, description, author, tag }: ArticleCardProps) {
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
        {tag && (
          <div className="badge bg-accent text-neutral font-bold px-3 py-1 mb-1 text-xs tracking-wider uppercase shadow-md font-mono">
            {tag}
          </div>
        )}
        <span className="card-title text-md font-extrabold leading-tight text-base-content mb-0.5 font-mono">
          {title}
        </span>
        <div className="card-actions justify-between items-center mt-1 font-mono">
          <span className="text-xs text-base-content/50 italic font-mono">By {author}</span>
        </div>
      </div>
    </div>
  );
} 