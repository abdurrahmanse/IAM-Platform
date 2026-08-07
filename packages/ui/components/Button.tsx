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
          "bg-white/20 backdrop-blur-md border border-white/30 text-gray-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.06)] hover:bg-white/30 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(0,0,0,0.1)] dark:bg-black/30 dark:border-white/10 dark:text-gray-100 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_20px_rgba(0,0,0,0.4)] dark:hover:bg-black/40",
        primary:
          "bg-brand-500/80 backdrop-blur-md border border-brand-400/50 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(var(--color-brand-500),0.3)] hover:bg-brand-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(var(--color-brand-500),0.4)] dark:bg-brand-600/80 dark:border-brand-500/50 dark:hover:bg-brand-600",
        destructive:
          "bg-red-500/80 backdrop-blur-md border border-red-400/50 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(239,68,68,0.3)] hover:bg-red-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_24px_rgba(239,68,68,0.4)] dark:bg-red-900/80 dark:border-red-800/50 dark:hover:bg-red-900",
        outline:
          "border border-gray-200/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-gray-900 shadow-sm dark:border-gray-800/50 dark:hover:bg-black/20 dark:text-gray-100",
        secondary:
          "bg-gray-100/50 backdrop-blur-md border border-gray-200/50 text-gray-900 hover:bg-gray-200/60 dark:bg-gray-800/50 dark:border-gray-700/50 dark:text-gray-50 dark:hover:bg-gray-700/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.03)]",
        ghost: "hover:bg-white/20 hover:text-gray-900 dark:hover:bg-black/20 dark:hover:text-gray-50 backdrop-blur-sm",
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
