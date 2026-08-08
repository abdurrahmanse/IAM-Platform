"use client"

import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { authService } from "../services/auth.service"
import type { LoginRequest } from "@iam/types"

export function useLogin() {
  const router = useRouter()

  return useMutation({
    mutationFn: (data: LoginRequest) => authService.login(data),
    onSuccess: () => {
      router.push("/dashboard")
    },
  })
}
