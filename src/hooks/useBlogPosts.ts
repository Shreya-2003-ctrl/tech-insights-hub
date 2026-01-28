import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types/blog";

const API_URL = "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10";

async function fetchBlogPosts(): Promise<ApiResponse> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }
  return response.json();
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
