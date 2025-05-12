import Image from "next/image";

type ArticleCardProps = {
  image: string;
  title: string;
  description: string;
  author: string;
  tag?: string;
};

export default function ArticleCard({ image, title, description, author, tag }: ArticleCardProps) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-200">
      <figure className="aspect-video overflow-hidden">
        <Image src={image} alt={title} width={400} height={225} className="object-cover w-full h-full" />
      </figure>
      <div className="card-body p-4">
        {tag && <div className="badge badge-secondary mb-2">{tag}</div>}
        <h2 className="card-title text-lg font-bold leading-tight">{title}</h2>
        <p className="text-sm text-base-content/80 mb-2 line-clamp-2">{description}</p>
        <div className="card-actions justify-between items-center mt-2">
          <span className="text-xs text-base-content/60">By {author}</span>
        </div>
      </div>
    </div>
  );
} 