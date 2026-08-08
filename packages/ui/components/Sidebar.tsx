"use client"

import * as React from "react"
import { cn } from "../lib/utils"
import { LayoutDashboard, Users, Shield, Settings, ChevronRight, type LucideIcon } from "lucide-react"

export interface SidebarItem {
  name: string
  href: string
  icon: LucideIcon
  current?: boolean
  badge?: string | number
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: SidebarItem[]
  onItemClick?: (href: string) => void
  logoSlot?: React.ReactNode
}

const defaultItems: SidebarItem[] = [
  { name: "Dashboard", href: "/",         icon: LayoutDashboard, current: true },
  { name: "Users",     href: "/users",    icon: Users,           badge: 12 },
  { name: "Roles",     href: "/roles",    icon: Shield },
  { name: "Settings",  href: "/settings", icon: Settings },
]

export function Sidebar({ className, items = defaultItems, onItemClick, logoSlot, ...props }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex h-full w-64 shrink-0 flex-col",
        "bg-gray-950 text-gray-100 border-r border-gray-800",
        className
      )}
      {...props}
    >
      {/* Brand */}
      <div className="flex h-14 items-center border-b border-gray-800 px-5">
        {logoSlot ?? (
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-white tracking-tight">IAM Platform</span>
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Admin Console</span>
            </div>
          </div>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
        <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
          Navigation
        </p>
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => { if (onItemClick) { e.preventDefault(); onItemClick(item.href) } }}
            aria-current={item.current ? "page" : undefined}
            className={cn(
              "group relative flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium",
              "transition-colors duration-150",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-gray-950",
              item.current
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-100"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon
                aria-hidden="true"
                className={cn(
                  "h-4 w-4 shrink-0",
                  item.current ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                )}
              />
              {item.name}
            </div>
            <div className="flex items-center gap-1.5">
              {item.badge !== undefined && (
                <span className={cn(
                  "inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[10px] font-semibold",
                  item.current ? "bg-white/20 text-white" : "bg-gray-700 text-gray-400 group-hover:bg-gray-600"
                )}>
                  {item.badge}
                </span>
              )}
              {!item.current && (
                <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
              )}
            </div>
          </a>
        ))}
      </nav>

      {/* Bottom user row */}
      <div className="border-t border-gray-800 p-3">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-gray-400 hover:bg-gray-800 hover:text-gray-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-gray-950"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
            A
          </div>
          <div className="flex flex-col items-start leading-none gap-0.5 min-w-0">
            <span className="text-sm font-medium text-gray-200 truncate">Admin User</span>
            <span className="text-[10px] text-gray-500 truncate">admin@iam.local</span>
          </div>
          <Settings aria-hidden="true" className="ml-auto h-4 w-4 shrink-0 opacity-40" />
        </button>
      </div>
    </div>
  )
}
