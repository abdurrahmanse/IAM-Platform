// Shared TypeScript types for the IAM Platform.
// Import these in apps and packages — never redefine locally.

export interface AuthUser {
  id: string
  email: string
  name: string
  role: "admin" | "super_admin"
  isEmailVerified: boolean
  isMfaEnabled: boolean
  createdAt: string
  lastLoginAt: string | null
}

export interface LoginRequest {
  email: string
  password: string
  rememberMe?: boolean
}

export interface LoginResponse {
  accessToken: string
  tokenType: "bearer"
  expiresIn: number
  user: AuthUser
}

export interface ApiError {
  message: string
  code: string
  statusCode: number
  details?: Record<string, string[]>
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export type { AuthUser as User }
