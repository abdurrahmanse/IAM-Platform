"use client"

import * as React from "react"
import { cn } from "../lib/utils"
import { Sidebar, type SidebarItem } from "./Sidebar"
import { Header } from "./Header"
import { Footer } from "./Footer"

export interface AppLayoutProps {
  children: React.ReactNode
  sidebarItems?: SidebarItem[]
  onSidebarItemClick?: (href: string) => void
  userProfileSlot?: React.ReactNode
  className?: string
}

export function AppLayout({
  children,
  sidebarItems,
  onSidebarItemClick,
  userProfileSlot,
  className,
}: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  // In a real implementation with shadcn, we might use a Sheet component for mobile sidebar.
  // For now, we will toggle its visibility with CSS classes.

  return (
    <div className={cn("flex h-screen w-full overflow-hidden bg-background text-foreground", className)}>
      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - fixed on desktop, absolute on mobile */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar
          items={sidebarItems}
          onItemClick={(href) => {
            if (onSidebarItemClick) onSidebarItemClick(href)
            setSidebarOpen(false) // Close on mobile navigation
          }}
        />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          userProfileSlot={userProfileSlot}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="mx-auto max-w-7xl h-full">
            {children}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
