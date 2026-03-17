import { useState, useMemo } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import type { BlogPost } from "@/types/blog";
import { Header } from "@/components/blog/Header";
import { Hero } from "@/components/blog/Hero";
import { SearchBar } from "@/components/blog/SearchBar";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { ArticleModal } from "@/components/blog/ArticleModal";
import { Footer } from "@/components/blog/Footer";
import { LoadingState } from "@/components/blog/LoadingState";
import { ErrorState } from "@/components/blog/ErrorState";
import { SEO } from "@/components/SEO";
import { WebsiteSchema, ArticleSchema } from "@/components/StructuredData";

const Index = () => {
  const { data, isLoading, isError, refetch } = useBlogPosts();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts = data?.blogs ?? [];

  // ✅ Unique categories (safe)
  const categories = useMemo(() => {
    return [...new Set(posts.map((post) => post.category))].sort();
  }, [posts]);

  // ✅ Filter logic (safe for undefined fields)
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const description = post.description?.toLowerCase() || "";
      const content = post.content_text?.toLowerCase() || "";

      const query = searchQuery.toLowerCase();

      const matchesSearch =
        !searchQuery ||
        title.includes(query) ||
        description.includes(query) ||
        content.includes(query);

      const matchesCategory =
        !activeCategory || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, activeCategory]);

  return (
    <HelmetProvider>
      <SEO />
      <WebsiteSchema name="TechPulse" url="https://techpulse.dev" />

      {selectedPost && (
        <ArticleSchema post={selectedPost} url="https://techpulse.dev" />
      )}

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <Hero />

        <main id="articles" className="flex-1 container py-12">
          
          {/* 🔍 Search + Filter */}
          <section className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                resultsCount={filteredPosts.length}
                totalCount={posts.length}
              />

              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
          </section>

          {/* 📊 Results Info */}
          {(searchQuery || activeCategory) && !isLoading && !isError && (
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredPosts.length} of {posts.length} articles
              {searchQuery && ` matching "${searchQuery}"`}
              {activeCategory && ` in "${activeCategory}"`}
            </p>
          )}

          {/* 📰 Blog Content */}
          <section>
            {isLoading ? (
              <LoadingState />
            ) : isError ? (
              <ErrorState onRetry={() => refetch()} />
            ) : (
              <BlogGrid
                posts={filteredPosts}
                onPostClick={setSelectedPost}
                searchQuery={searchQuery}
                activeCategory={activeCategory}
              />
            )}
          </section>
        </main>

        <Footer />

        {/* 📖 Article Modal */}
        <ArticleModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      </div>
    </HelmetProvider>
  );
};

export default Index;