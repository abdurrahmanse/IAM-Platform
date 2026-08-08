import type { LoginRequest, LoginResponse } from "@iam/types"
import { apiClient } from "./client"

export const authApi = {
  login: (data: LoginRequest) =>
    apiClient.post<LoginResponse>("/v1/auth/login", data).then((r) => r.data),

  logout: () =>
    apiClient.post("/v1/auth/logout").then((r) => r.data),

  refresh: () =>
    apiClient.post<LoginResponse>("/v1/auth/refresh").then((r) => r.data),

  me: () =>
    apiClient.get<LoginResponse["user"]>("/v1/auth/me").then((r) => r.data),
}
