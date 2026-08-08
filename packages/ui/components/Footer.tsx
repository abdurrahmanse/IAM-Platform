import * as React from "react"
import { cn } from "../lib/utils"

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "flex h-11 shrink-0 items-center justify-between px-4 sm:px-6",
        "bg-white dark:bg-gray-950",
        "border-t border-gray-100 dark:border-gray-800/80",
        "text-xs text-gray-400 dark:text-gray-600",
        className
      )}
      {...props}
    >
      <p className="select-none">&copy; {new Date().getFullYear()} IAM Platform. All rights reserved.</p>
      <nav className="flex items-center gap-4" aria-label="Footer links">
        {["Terms", "Privacy", "Status"].map((link) => (
          <a
            key={link}
            href="#"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-150 focus:outline-none focus-visible:underline"
          >
            {link}
          </a>
        ))}
      </nav>
    </footer>
  )
}
