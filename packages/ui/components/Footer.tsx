import * as React from "react"
import { cn } from "../lib/utils"

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(
        "flex h-12 items-center justify-between border-t border-gray-200 bg-white px-4 text-xs text-gray-500 sm:px-6 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400",
        className
      )}
      {...props}
    >
      <p>&copy; {new Date().getFullYear()} IAM Platform. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-900 dark:hover:text-gray-50">Terms</a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-gray-50">Privacy</a>
      </div>
    </footer>
  )
}
