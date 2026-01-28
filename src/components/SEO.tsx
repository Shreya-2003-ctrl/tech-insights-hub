import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "TechPulse - Discover the Future of Technology",
  description = "Stay ahead with in-depth articles on web development, AI, cloud computing, and emerging technologies. Fresh insights daily.",
  image = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop",
  url = "https://techpulse.dev",
  type = "website",
}: SEOProps) {
  const fullTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
  const fullDescription = description.length > 160 ? description.slice(0, 157) + "..." : description;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="TechPulse" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
