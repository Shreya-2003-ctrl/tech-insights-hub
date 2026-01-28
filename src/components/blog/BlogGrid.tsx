import type { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";
import { FileSearch } from "lucide-react";

interface BlogGridProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  searchQuery: string;
  activeCategory: string | null;
}

export function BlogGrid({ posts, onPostClick, searchQuery, activeCategory }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
        <FileSearch className="h-16 w-16 text-muted-foreground/50 mb-4" aria-hidden="true" />
        <h2 className="text-xl font-semibold mb-2">No articles found</h2>
        <p className="text-muted-foreground max-w-md">
          {searchQuery && activeCategory
            ? `No articles match "${searchQuery}" in the "${activeCategory}" category.`
            : searchQuery
            ? `No articles match your search "${searchQuery}".`
            : activeCategory
            ? `No articles found in the "${activeCategory}" category.`
            : "No articles available at the moment."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <BlogCard post={post} onClick={() => onPostClick(post)} />
        </div>
      ))}
    </div>
  );
}
