import { authApi } from "@iam/api-client"
import type { LoginRequest, LoginResponse } from "@iam/types"

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await authApi.login(data)
    if (response.accessToken) {
      localStorage.setItem("iam_access_token", response.accessToken)
    }
    return response
  },

  logout: async (): Promise<void> => {
    await authApi.logout()
    localStorage.removeItem("iam_access_token")
  },

  getMe: () => authApi.me(),
}
