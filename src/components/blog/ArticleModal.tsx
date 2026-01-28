import { useEffect, useCallback } from "react";
import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/dateUtils";
import { X, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export function ArticleModal({ post, onClose }: ArticleModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (post) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [post, handleKeyDown]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <article
        className={cn(
          "relative bg-card rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden",
          "card-shadow-hover animate-scale-in"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
          aria-label="Close article"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={post.photo_url}
              alt={`Featured image for: ${post.title}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary capitalize mb-4">
              {post.category}
            </span>

            <h1 id="modal-title" className="text-2xl md:text-3xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden="true" />
                <span>User {post.user_id}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 italic">
              {post.description}
            </p>

            <div
              className="prose prose-slate max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content_html }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
