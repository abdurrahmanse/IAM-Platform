import * as React from "react"

import { cn } from "../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2 text-sm text-gray-900 shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-transparent focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950/50 dark:text-gray-100 dark:placeholder:text-gray-500 dark:hover:border-gray-700 dark:hover:bg-gray-900 dark:focus-visible:bg-gray-950",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
