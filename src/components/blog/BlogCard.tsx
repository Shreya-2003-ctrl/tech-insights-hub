import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/dateUtils";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article
      className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Read article: ${post.title}`}
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.photo_url}
          alt={`Featured image for article: ${post.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary capitalize mb-3">
          {post.category}
        </span>

        <h2 className="text-lg font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h2>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" aria-hidden="true" />
          <time dateTime={post.created_at}>
            {formatDate(post.created_at)}
          </time>
        </div>
      </div>
    </article>
  );
}
