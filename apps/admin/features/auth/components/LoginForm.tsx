"use client"

import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AlertCircle, ArrowRight, Mail } from "lucide-react"
import { Button, Input } from "@iam/ui"
import { emailSchema, passwordSchema } from "@iam/validation"
import { useLogin } from "../hooks/useLogin"
import { PasswordInput } from "./PasswordInput"

// Local schema with rememberMe as optional — avoids zodResolver generic mismatch with z.default()
const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().optional(),
})
type FormValues = z.infer<typeof formSchema>

export function LoginForm() {
  const { mutate: login, isPending, isError, error } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "", rememberMe: false },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    login({ email: data.email, password: data.password, rememberMe: data.rememberMe ?? false })

  const serverError =
    isError && error instanceof Error ? error.message : isError ? "Sign in failed. Please try again." : null

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:border-red-900/50 dark:bg-red-950/40"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500 dark:text-red-400" aria-hidden="true" />
          <p className="text-sm text-red-700 dark:text-red-300">{serverError}</p>
        </div>
      )}

      <Input
        {...register("email")}
        id="email"
        type="email"
        label="Work Email"
        placeholder="name@enterprise.com"
        autoComplete="email"
        autoFocus
        startIcon={<Mail className="h-4 w-4" />}
        error={!!errors.email}
        hint={errors.email?.message}
        disabled={isPending}
      />

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Password
          </label>
          <a
            href="/auth/forgot-password"
            className="text-xs font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 transition-colors focus:outline-none focus-visible:underline"
          >
            Forgot password?
          </a>
        </div>
        <PasswordInput
          {...register("password")}
          id="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          error={!!errors.password}
          hint={errors.password?.message}
          disabled={isPending}
        />
      </div>

      <label className="flex cursor-pointer items-center gap-2.5 select-none">
        <input
          {...register("rememberMe")}
          id="rememberMe"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 bg-white accent-indigo-600 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 dark:border-gray-700 dark:bg-gray-900"
        />
        <span className="text-sm text-gray-600 dark:text-gray-400">Keep me signed in for 7 days</span>
      </label>

      <Button type="submit" className="w-full" loading={isPending} disabled={isPending}>
        Sign In to Console
        {!isPending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </Button>
    </form>
  )
}
