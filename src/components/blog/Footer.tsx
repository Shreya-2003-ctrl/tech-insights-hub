import { Code2, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-8 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-semibold">TechPulse</span>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive" aria-hidden="true" /> © {currentYear} TechPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
