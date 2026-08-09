import React from "react";
import { Button } from "./ui/button";

interface NotFoundProps {
  appName?: string;
  returnUrl?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ 
  appName = "our platform", 
  returnUrl = "/" 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-background text-foreground text-center px-4">
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-extrabold tracking-tighter text-primary/20 select-none">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Page not found
          </h2>
          <p className="text-muted-foreground text-lg">
            Sorry, we couldn't find the page you're looking for on {appName}.
          </p>
        </div>
        <div className="pt-6">
          <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/25 transition-all">
            <a href={returnUrl}>Return Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
};
