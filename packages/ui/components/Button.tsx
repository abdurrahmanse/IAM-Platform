import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-white/70 backdrop-blur-xl border border-white/50 text-gray-900 shadow-sm hover:bg-white/90 hover:shadow dark:bg-black/50 dark:border-white/10 dark:text-gray-100 dark:hover:bg-black/70",
        primary:
          "bg-brand-500/90 backdrop-blur-xl border border-brand-400/50 text-white shadow-sm hover:bg-brand-500 hover:shadow dark:bg-brand-600/90 dark:border-brand-500/50 dark:hover:bg-brand-600",
        destructive:
          "bg-red-500/90 backdrop-blur-xl border border-red-400/50 text-white shadow-sm hover:bg-red-500 hover:shadow dark:bg-red-900/90 dark:border-red-800/50 dark:hover:bg-red-900",
        outline:
          "border border-gray-200/50 bg-white/30 backdrop-blur-md hover:bg-white/50 text-gray-900 shadow-sm dark:border-gray-800/50 dark:hover:bg-black/40 dark:text-gray-100",
        secondary:
          "bg-gray-100/70 backdrop-blur-xl border border-gray-200/50 text-gray-900 hover:bg-gray-200/80 dark:bg-gray-800/70 dark:border-gray-700/50 dark:text-gray-50 dark:hover:bg-gray-700/80 shadow-sm",
        ghost: "hover:bg-black/5 hover:text-gray-900 dark:hover:bg-white/10 dark:hover:text-gray-50 backdrop-blur-sm",
        link: "text-brand-600 underline-offset-4 hover:underline dark:text-brand-400 backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
