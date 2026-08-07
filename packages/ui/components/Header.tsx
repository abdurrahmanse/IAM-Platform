import * as React from "react"
import { Menu } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "./Button"

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  onMenuClick?: () => void
  userProfileSlot?: React.ReactNode
}

export function Header({ className, onMenuClick, userProfileSlot, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 dark:border-gray-800 dark:bg-gray-950",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        )}
        <div className="flex items-center gap-2 font-semibold md:hidden">
          {/* Logo is handled by sidebar on desktop, but shown here on mobile */}
          <span className="tracking-tight">IAM Platform</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {userProfileSlot || (
          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800" />
        )}
      </div>
    </header>
  )
}
