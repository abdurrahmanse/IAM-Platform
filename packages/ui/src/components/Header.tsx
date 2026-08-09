import React from "react";
import { Button } from "./ui/button";

export interface HeaderProps {
  appName: string;
  user?: { name: string };
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ appName, user, onLogin, onLogout }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
        {/* Brand / Logo */}
        <div className="mr-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shadow-sm">
            {appName.charAt(0)}
          </div>
          <span className="hidden font-bold sm:inline-block">
            {appName}
          </span>
        </div>

        {/* Navigation / Center */}
        <nav className="flex flex-1 items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">
            Dashboard
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Settings
          </a>
        </nav>

        {/* User / Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                Welcome, <strong className="text-foreground">{user.name}</strong>
              </span>
              <Button variant="outline" size="sm" onClick={onLogout}>
                Log out
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={onLogin}>
              Log in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
