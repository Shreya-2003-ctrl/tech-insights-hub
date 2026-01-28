import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  onRetry: () => void;
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <AlertCircle className="h-16 w-16 text-destructive mb-4" aria-hidden="true" />
      <h2 className="text-xl font-semibold mb-2">Failed to load articles</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        We couldn't fetch the latest articles. Please check your connection and try again.
      </p>
      <Button onClick={onRetry} className="gap-2">
        <RefreshCw className="h-4 w-4" aria-hidden="true" />
        Try Again
      </Button>
    </div>
  );
}
