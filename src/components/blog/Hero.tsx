import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-gradient text-primary-foreground py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>Fresh insights daily</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Discover the Future of{" "}
            <span className="text-primary">Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Stay ahead with in-depth articles on web development, AI, cloud computing, and emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
