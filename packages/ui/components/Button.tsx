import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/40 hover:-translate-y-0.5 dark:from-brand-500 dark:to-brand-400 dark:shadow-brand-500/10",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 hover:-translate-y-0.5",
        outline:
          "border-2 border-gray-200 bg-transparent hover:bg-gray-50 text-gray-900 shadow-sm dark:border-gray-800 dark:hover:bg-gray-900/50 dark:text-gray-100",
        secondary:
          "bg-gray-100/80 backdrop-blur-sm text-gray-900 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:text-gray-50 dark:hover:bg-gray-700/80 shadow-sm",
        ghost: "hover:bg-gray-100/50 hover:text-gray-900 dark:hover:bg-gray-800/50 dark:hover:text-gray-50",
        link: "text-brand-600 underline-offset-4 hover:underline dark:text-brand-400",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-2xl px-10 text-lg",
        icon: "h-12 w-12",
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
