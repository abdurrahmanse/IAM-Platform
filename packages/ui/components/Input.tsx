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
      <div className="relative flex w-full items-center group">
        {startIcon && (
          <div className="absolute left-3 flex items-center justify-center text-gray-500/80 dark:text-gray-400/80 pointer-events-none group-focus-within:text-brand-500 transition-colors z-10">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-xl border border-white/20 bg-white/20 backdrop-blur-md px-4 py-2 text-sm text-gray-900 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500/80 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:border-transparent focus-visible:bg-white/40 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-black/20 dark:text-gray-100 dark:placeholder:text-gray-400/80 dark:hover:bg-black/30 dark:focus-visible:bg-black/40",
            startIcon ? "pl-10" : "",
            endIcon ? "pr-10" : "",
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
