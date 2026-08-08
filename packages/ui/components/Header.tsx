"use client"

import * as React from "react"
import { Menu, ShieldCheck, Bell, Search } from "lucide-react"
import { cn } from "../lib/utils"

/**
 * Header — top application bar
 *
 * Built with native HTML <header> + Radix-ready slot props.
 * Accepts a userProfileSlot for injecting user avatars / dropdowns.
 */

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  onMenuClick?: () => void
  userProfileSlot?: React.ReactNode
  title?: string
}

export function Header({ className, onMenuClick, userProfileSlot, title, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        // Layout
        "flex h-14 shrink-0 items-center justify-between",
        // Padding
        "px-4 sm:px-6",
        // Appearance — solid white, subtle bottom border
        "bg-white dark:bg-gray-950",
        "border-b border-gray-100 dark:border-gray-800/80",
        "shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        className
      )}
      {...props}
    >
      {/* Left — menu toggle + title */}
      <div className="flex items-center gap-3">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            className={cn(
              "md:hidden flex h-8 w-8 items-center justify-center rounded-lg",
              "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              "transition-colors duration-150",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            )}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        {/* Logo / title shown on mobile (desktop shows it in sidebar) */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
            <ShieldCheck className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            {title ?? "IAM Platform"}
          </span>
        </div>

        {/* Desktop page title */}
        {title && (
          <h1 className="hidden md:block text-sm font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h1>
        )}
      </div>

      {/* Right — global actions */}
      <div className="flex items-center gap-1">
        {/* Search */}
        <button
          type="button"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg",
            "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
            "hover:bg-gray-100 dark:hover:bg-gray-800",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          )}
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className={cn(
            "relative flex h-8 w-8 items-center justify-center rounded-lg",
            "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
            "hover:bg-gray-100 dark:hover:bg-gray-800",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          )}
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          {/* Badge */}
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
        </button>

        {/* Divider */}
        <div className="mx-1 h-6 w-px bg-gray-200 dark:bg-gray-700" />

        {/* User profile slot */}
        {userProfileSlot ?? (
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            aria-label="User menu"
          >
            A
          </button>
        )}
      </div>
    </header>
  )
}
