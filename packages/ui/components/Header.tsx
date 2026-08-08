"use client"

import * as React from "react"
import { Menu, ShieldCheck, Bell, Search } from "lucide-react"
import { cn } from "../lib/utils"

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  onMenuClick?: () => void
  userProfileSlot?: React.ReactNode
  title?: string
}

export function Header({ className, onMenuClick, userProfileSlot, title, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center justify-between px-4 sm:px-6",
        "bg-white dark:bg-gray-950",
        "border-b border-gray-100 dark:border-gray-800/80",
        "shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Toggle navigation"
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
            <ShieldCheck className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            {title ?? "IAM Platform"}
          </span>
        </div>
        {title && (
          <h1 className="hidden md:block text-sm font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Search"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          <Search className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
        </button>
        <div className="mx-1 h-6 w-px bg-gray-200 dark:bg-gray-700" />
        {userProfileSlot ?? (
          <button
            type="button"
            aria-label="User menu"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          >
            A
          </button>
        )}
      </div>
    </header>
  )
}
