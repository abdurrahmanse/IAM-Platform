"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-semibold tracking-[0.01em] leading-none select-none cursor-pointer",
    "transition-all duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950",
    "disabled:pointer-events-none disabled:opacity-40 active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-indigo-600 text-white",
          "shadow-[0_1px_2px_rgba(79,70,229,0.3),inset_0_1px_0_rgba(255,255,255,0.15)]",
          "hover:bg-indigo-500 hover:shadow-[0_4px_12px_rgba(79,70,229,0.5)]",
          "focus-visible:ring-indigo-500",
          "dark:bg-indigo-500 dark:hover:bg-indigo-400",
        ].join(" "),
        secondary: [
          "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100",
          "border border-gray-200 dark:border-gray-700",
          "shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
          "hover:bg-gray-50 dark:hover:bg-gray-700/70",
          "hover:border-gray-300 dark:hover:border-gray-600",
          "focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600",
        ].join(" "),
        destructive: [
          "bg-red-600 text-white",
          "shadow-[0_1px_2px_rgba(220,38,38,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
          "hover:bg-red-500 hover:shadow-[0_4px_12px_rgba(220,38,38,0.5)]",
          "focus-visible:ring-red-500",
        ].join(" "),
        outline: [
          "border-2 border-indigo-200 text-indigo-700 dark:border-indigo-800 dark:text-indigo-300",
          "hover:bg-indigo-50 dark:hover:bg-indigo-950/40",
          "focus-visible:ring-indigo-500",
        ].join(" "),
        ghost: [
          "text-gray-700 dark:text-gray-300",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          "focus-visible:ring-gray-400",
        ].join(" "),
        link: [
          "text-indigo-600 dark:text-indigo-400",
          "underline-offset-4 hover:underline focus-visible:ring-indigo-500",
        ].join(" "),
      },
      size: {
        sm:      "h-9  px-3.5 text-xs  rounded-lg  gap-1.5",
        default: "h-11 px-5   text-sm  rounded-xl  gap-2",
        lg:      "h-13 px-7   text-base rounded-xl  gap-2.5",
        icon:    "h-9  w-9   text-sm  rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>Loading…</span>
          </>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
