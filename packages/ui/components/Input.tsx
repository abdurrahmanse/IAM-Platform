import * as React from "react"
import { cn } from "../lib/utils"

/**
 * Input — base input primitive (no Radix wrapper needed; HTMLInputElement is sufficient)
 *
 * Features:
 *   - startIcon / endIcon slots (Lucide or any ReactNode)
 *   - error prop — triggers red border + ring
 *   - label prop — renders an accessible <label> above the field
 *   - hint prop  — renders helper text below the field
 *   - Fully keyboard-navigable and screen-reader friendly
 *
 * Usage:
 *   <Input label="Email" type="email" placeholder="you@company.com"
 *          startIcon={<Mail className="h-4 w-4" />} />
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Icon shown inside the left edge */
  startIcon?: React.ReactNode
  /** Icon shown inside the right edge */
  endIcon?: React.ReactNode
  /** Triggers red error styling */
  error?: boolean
  /** Renders an accessible label above the input */
  label?: string
  /** Renders small helper / error text below the input */
  hint?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, error, label, hint, id, ...props }, ref) => {
    // Generate a stable id if none provided (for label association)
    const inputId = id ?? React.useId()

    return (
      <div className="flex w-full flex-col gap-1.5">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 select-none"
          >
            {label}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative flex w-full items-center group">
          {/* Left icon */}
          {startIcon && (
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute left-3.5 z-10 flex items-center text-gray-400",
                "group-focus-within:text-indigo-500",
                "transition-colors duration-150",
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
              // Shape
              "flex h-11 w-full rounded-xl",
              // Background — solid, always readable
              "bg-white dark:bg-gray-900",
              // Border
              "border border-gray-200 dark:border-gray-700",
              // Text & placeholder
              "text-sm text-gray-900 dark:text-gray-100",
              "placeholder:text-gray-400 dark:placeholder:text-gray-500",
              // Padding
              "px-4",
              startIcon && "pl-10",
              endIcon   && "pr-10",
              // Focus ring
              "outline-none ring-0",
              "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20",
              // Hover
              "hover:border-gray-300 dark:hover:border-gray-600",
              // Transitions
              "transition-[border-color,box-shadow] duration-150",
              // File input reset
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              // Disabled
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50 dark:disabled:bg-gray-900/50",
              // Error
              error && [
                "border-red-400 dark:border-red-600",
                "focus:border-red-500 focus:ring-red-500/20",
              ],
              className
            )}
            {...props}
          />

          {/* Right icon */}
          {endIcon && (
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute right-3.5 z-10 flex items-center text-gray-400",
                "group-focus-within:text-indigo-500",
                "transition-colors duration-150"
              )}
            >
              {endIcon}
            </span>
          )}
        </div>

        {/* Hint / error message */}
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
