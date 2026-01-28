import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultsCount: number;
  totalCount: number;
}

export function SearchBar({ value, onChange, resultsCount, totalCount }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="search" className="sr-only">
        Search articles
      </label>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
      <Input
        id="search"
        type="search"
        placeholder="Search articles..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-10 h-11 bg-card border-border"
        aria-describedby="search-results"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-sm text-muted-foreground hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
      <p id="search-results" className="sr-only">
        {value ? `${resultsCount} of ${totalCount} articles found` : `${totalCount} articles available`}
      </p>
    </div>
  );
}
