import * as React from "react"
import { cn } from "../lib/utils"
import { LayoutDashboard, Users, Shield, Settings, type LucideIcon } from "lucide-react"

export interface SidebarItem {
  name: string
  href: string
  icon: LucideIcon
  current?: boolean
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: SidebarItem[]
  onItemClick?: (href: string) => void
}

const defaultItems: SidebarItem[] = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard, current: true },
  { name: "Users", href: "/users", icon: Users, current: false },
  { name: "Roles", href: "/roles", icon: Shield, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
]

export function Sidebar({ className, items = defaultItems, onItemClick, ...props }: SidebarProps) {
  return (
    <div className={cn("flex h-full w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950", className)} {...props}>
      <div className="flex h-14 items-center border-b border-gray-200 px-4 dark:border-gray-800">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <Shield className="h-6 w-6 text-brand-600 dark:text-brand-400" />
          <span>IAM Platform</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="grid gap-1 px-2">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (onItemClick) {
                  e.preventDefault()
                  onItemClick(item.href)
                }
              }}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                item.current
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-900/50 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              )}
            >
              <item.icon className={cn("h-4 w-4", item.current ? "text-brand-700 dark:text-brand-400" : "text-gray-500 dark:text-gray-400")} />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
