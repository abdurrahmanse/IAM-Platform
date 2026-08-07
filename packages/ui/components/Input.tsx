import * as React from "react"
import { cn } from "../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center">
        {startIcon && (
          <div className="absolute left-4 flex items-center justify-center text-gray-500 dark:text-gray-400 pointer-events-none">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2 text-base text-gray-900 shadow-sm transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 hover:border-gray-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-transparent focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950/50 dark:text-gray-100 dark:placeholder:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-900 dark:focus-visible:bg-gray-900",
            startIcon ? "pl-11" : "",
            endIcon ? "pr-11" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-4 flex items-center justify-center text-gray-500 dark:text-gray-400 pointer-events-none">
            {endIcon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
