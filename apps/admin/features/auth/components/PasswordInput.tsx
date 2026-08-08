"use client"

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@iam/ui"
import type { InputProps } from "@iam/ui"

export interface PasswordInputProps extends Omit<InputProps, "type" | "endIcon"> {}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...props }, ref) => {
    const [visible, setVisible] = React.useState(false)

    return (
      <Input
        {...props}
        ref={ref}
        type={visible ? "text" : "password"}
        endIcon={
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="pointer-events-auto text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-150 focus:outline-none"
          >
            {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        }
      />
    )
  }
)
PasswordInput.displayName = "PasswordInput"
