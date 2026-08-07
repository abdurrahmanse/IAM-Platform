import axios from "axios"

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // In a real implementation, we would get the token from localStorage or cookies
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle 401 Unauthorized globally
    if (error.response?.status === 401) {
      // e.g. trigger logout, redirect to login
      console.warn("Unauthorized access detected. Please log in.")
    }
    return Promise.reject(error)
  }
)
