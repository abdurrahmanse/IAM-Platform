import * as React from "react"
import { cn } from "../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  error?: boolean
  label?: string
  hint?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, error, label, hint, id, ...props }, ref) => {
    const inputId = id ?? React.useId()

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex w-full items-center group">
          {startIcon && (
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute left-3.5 z-10 flex items-center text-gray-400",
                "group-focus-within:text-indigo-500 transition-colors duration-150",
                error && "text-red-400 group-focus-within:text-red-500"
              )}
            >
              {startIcon}
            </span>
          )}

          <input
            id={inputId}
            type={type}
            ref={ref}
            aria-invalid={error ?? undefined}
            aria-describedby={hint ? `${inputId}-hint` : undefined}
            className={cn(
              "flex h-11 w-full rounded-xl px-4",
              "bg-white dark:bg-gray-900",
              "border border-gray-200 dark:border-gray-700",
              "text-sm text-gray-900 dark:text-gray-100",
              "placeholder:text-gray-400 dark:placeholder:text-gray-500",
              "outline-none ring-0",
              "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20",
              "hover:border-gray-300 dark:hover:border-gray-600",
              "transition-[border-color,box-shadow] duration-150",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50 dark:disabled:bg-gray-900/50",
              startIcon && "pl-10",
              endIcon && "pr-10",
              error && "border-red-400 dark:border-red-600 focus:border-red-500 focus:ring-red-500/20",
              className
            )}
            {...props}
          />

          {endIcon && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 z-10 flex items-center text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-150"
            >
              {endIcon}
            </span>
          )}
        </div>

        {hint && (
          <p
            id={`${inputId}-hint`}
            className={cn(
              "text-xs leading-relaxed",
              error ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
