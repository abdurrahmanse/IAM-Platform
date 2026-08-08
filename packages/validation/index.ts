import { z } from "zod"

export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Enter a valid email address")

export const passwordSchema = z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters")

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().default(false),
})

export type LoginFormValues = z.infer<typeof loginSchema>
